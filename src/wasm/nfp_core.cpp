#include <emscripten/bind.h>
#include <vector>
#include <cmath>
#include <algorithm>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

using namespace emscripten;

struct Point { double x, y; };
using Poly = std::vector<Point>;

struct PlacementResult {
    double x, y;
    double rotation;
    bool success;
};

// ---- SAT collision check ----
bool polygonsOverlap(const Poly& A, const Poly& B, double spacing) {
    auto check = [&](const Poly& P) {
        for (int i = 0; i < (int)P.size(); i++) {
            int j = (i + 1) % P.size();
            double nx = -(P[j].y - P[i].y);
            double ny =   P[j].x - P[i].x;
            double len = std::sqrt(nx*nx + ny*ny);
            if (len == 0) continue;
            nx /= len; ny /= len;

            double minA=1e18, maxA=-1e18;
            for (auto& v : A) { double t=nx*v.x+ny*v.y; minA=std::min(minA,t); maxA=std::max(maxA,t); }
            double minB=1e18, maxB=-1e18;
            for (auto& v : B) { double t=nx*v.x+ny*v.y; minB=std::min(minB,t); maxB=std::max(maxB,t); }

            if (maxA + spacing < minB || maxB + spacing < minA) return false;
        }
        return true;
    };
    return check(A) && check(B);
}

// ---- Convex hull (Andrew's monotone chain) ----
Poly convexHull(const std::vector<double>& flat) {
    int n = flat.size() / 2;
    Poly pts(n);
    for (int i = 0; i < n; i++) { pts[i].x = flat[i*2]; pts[i].y = flat[i*2+1]; }
    if (n < 3) return pts;
    std::sort(pts.begin(), pts.end(), [](const Point& a, const Point& b){
        return a.x < b.x || (a.x == b.x && a.y < b.y);
    });
    auto cross = [](const Point& O, const Point& A, const Point& B) {
        return (A.x-O.x)*(B.y-O.y) - (A.y-O.y)*(B.x-O.x);
    };
    Poly lower, upper;
    for (auto& p : pts) {
        while (lower.size()>=2 && cross(lower[lower.size()-2],lower.back(),p)<=0) lower.pop_back();
        lower.push_back(p);
    }
    for (int i=n-1;i>=0;i--) {
        auto& p=pts[i];
        while (upper.size()>=2 && cross(upper[upper.size()-2],upper.back(),p)<=0) upper.pop_back();
        upper.push_back(p);
    }
    upper.pop_back(); lower.pop_back();
    lower.insert(lower.end(), upper.begin(), upper.end());
    return lower;
}

// ---- Minkowski sum ----
Poly minkowskiSum(const Poly& A_orig, const Poly& B_orig) {
    Poly A = A_orig;
    Poly B = B_orig;

    // reflect B -> -B
    for (auto& p : B) { p.x=-p.x; p.y=-p.y; }

    auto startIdx = [](const Poly& p) {
        int idx=0;
        for (int i=1;i<(int)p.size();i++)
            if (p[i].y<p[idx].y||(p[i].y==p[idx].y&&p[i].x<p[idx].x)) idx=i;
        return idx;
    };
    auto reorder = [&](Poly p) {
        int s=startIdx(p);
        std::rotate(p.begin(),p.begin()+s,p.end());
        return p;
    };
    auto edgeAngle = [](const Poly& p, int i) {
        int j=(i+1)%p.size();
        return std::atan2(p[j].y-p[i].y, p[j].x-p[i].x);
    };

    A=reorder(A); B=reorder(B);
    int na=A.size(), nb=B.size(), ia=0, ib=0;
    Point cur={A[0].x+B[0].x, A[0].y+B[0].y};
    Poly result={cur};

    while (ia<na||ib<nb) {
        double aA=ia<na?edgeAngle(A,ia%na):1e18;
        double aB=ib<nb?edgeAngle(B,ib%nb):1e18;
        Point edge;
        if (std::abs(aA-aB)<1e-10) {
            edge={A[(ia+1)%na].x-A[ia%na].x, A[(ia+1)%na].y-A[ia%na].y};
            ia++; ib++;
        } else if (aA<aB) {
            edge={A[(ia+1)%na].x-A[ia%na].x, A[(ia+1)%na].y-A[ia%na].y};
            ia++;
        } else {
            edge={B[(ib+1)%nb].x-B[ib%nb].x, B[(ib+1)%nb].y-B[ib%nb].y};
            ib++;
        }
        cur={cur.x+edge.x, cur.y+edge.y};
        result.push_back(cur);
    }
    return result;
}

// ---- Helper geometry algorithms for candidate loop ----
Poly samplePolygonEdges(const Poly& poly, double step) {
    Poly pts;
    for (size_t i = 0; i < poly.size(); i++) {
        Point a = poly[i];
        Point b = poly[(i + 1) % poly.size()];
        double dx = b.x - a.x;
        double dy = b.y - a.y;
        double len = std::sqrt(dx*dx + dy*dy);
        int steps = std::max(1, (int)std::ceil(len / step));
        for (int s = 0; s < steps; s++) {
            double t = (double)s / steps;
            pts.push_back({ a.x + dx * t, a.y + dy * t });
        }
    }
    return pts;
}

Point getPolygonCentroid(const Poly& poly) {
    double x = 0, y = 0;
    for (auto& p : poly) { x += p.x; y += p.y; }
    return { x / poly.size(), y / poly.size() };
}

Poly translatePoly(const Poly& poly, double dx, double dy) {
    Poly out;
    for (auto& p : poly) out.push_back({ p.x + dx, p.y + dy });
    return out;
}

Poly rotatePoly(const Poly& poly, double angleRad) {
    double cosA = std::cos(angleRad);
    double sinA = std::sin(angleRad);
    Poly out;
    for (auto& p : poly) {
        out.push_back({ p.x * cosA - p.y * sinA, p.x * sinA + p.y * cosA });
    }
    return out;
}

bool isInsideBed(const Poly& poly, double halfBed) {
    for (auto& p : poly) {
        if (p.x < -halfBed || p.x > halfBed || p.y < -halfBed || p.y > halfBed)
            return false;
    }
    return true;
}

// ---- Core single item arrangement candidate generation & scoring ----
PlacementResult arrangeSingleItem(
    const std::vector<double>& flatFootprint,
    const std::vector<double>& flatPlaced,
    const std::vector<int>& placedSizes,
    const std::vector<double>& placedCentroids,
    double bedSize,
    double spacing,
    double edgeStep
) {
    Poly originalPoly;
    for (size_t i = 0; i < flatFootprint.size(); i += 2) {
        originalPoly.push_back({ flatFootprint[i], flatFootprint[i+1] });
    }

    std::vector<Poly> placedPolys;
    int offset = 0;
    for (int n : placedSizes) {
        Poly p;
        for (int i = 0; i < n; i++) {
            p.push_back({ flatPlaced[offset + i*2], flatPlaced[offset + i*2 + 1] });
        }
        placedPolys.push_back(p);
        offset += n*2;
    }

    std::vector<Point> centroids;
    for (size_t i = 0; i < placedCentroids.size(); i += 2) {
        centroids.push_back({ placedCentroids[i], placedCentroids[i+1] });
    }

    double bestScore = 1e18;
    Point bestPos = {0, 0};
    double bestRotation = 0;
    bool found = false;

    double halfBed = bedSize / 2.0;

    std::vector<double> rotations = {
        0, M_PI / 4.0, M_PI / 2.0, (3.0 * M_PI) / 4.0,
        M_PI, (5.0 * M_PI) / 4.0, (3.0 * M_PI) / 2.0, (7.0 * M_PI) / 4.0
    };

    for (double rot : rotations) {
        Poly rotatedHull = rotatePoly(originalPoly, rot);
        Point newCentroid = getPolygonCentroid(rotatedHull);

        std::vector<Point> candidates;

        if (placedPolys.empty()) {
            double step = std::max(3.0, edgeStep * 2.0);
            candidates.push_back({0, 0});
            for (double r = step; r <= halfBed; r += step) {
                for (double x = -r; x <= r; x += step) {
                    candidates.push_back({x, -r});
                    candidates.push_back({x, r});
                }
                for (double y = -r + step; y < r; y += step) {
                    candidates.push_back({-r, y});
                    candidates.push_back({r, y});
                }
            }
        } else {
            for (auto& placed : placedPolys) {
                Poly nfp;
                try {
                    nfp = minkowskiSum(placed, rotatedHull);
                } catch (...) {
                    continue;
                }
                Poly edgePts = samplePolygonEdges(nfp, edgeStep);
                for (auto& pt : edgePts) {
                    candidates.push_back({ pt.x - newCentroid.x, pt.y - newCentroid.y });
                }
            }

            double fallbackStep = std::max(8.0, bedSize / 20.0);
            for (double x = -halfBed; x <= halfBed; x += fallbackStep) {
                for (double y = -halfBed; y <= halfBed; y += fallbackStep) {
                    candidates.push_back({x, y});
                }
            }
        }

        for (auto& cand : candidates) {
            Poly candidatePoly = translatePoly(rotatedHull, cand.x, cand.y);

            if (!isInsideBed(candidatePoly, halfBed)) continue;

            bool overlaps = false;
            for (auto& placed : placedPolys) {
                if (polygonsOverlap(candidatePoly, placed, spacing)) {
                    overlaps = true;
                    break;
                }
            }
            if (overlaps) continue;

            double distToCenter = std::sqrt(cand.x * cand.x + cand.y * cand.y);
            double minDistToOthers = 0;
            if (!placedPolys.empty()) {
                minDistToOthers = 1e18;
                Point cCentroid = getPolygonCentroid(candidatePoly);
                for (auto& pCentroid : centroids) {
                    double dx = cCentroid.x - pCentroid.x;
                    double dy = cCentroid.y - pCentroid.y;
                    double dist = std::sqrt(dx*dx + dy*dy);
                    minDistToOthers = std::min(minDistToOthers, dist);
                }
            }

            double score = distToCenter * 0.3 + minDistToOthers * 0.7;
            if (score < bestScore) {
                bestScore = score;
                bestPos = cand;
                bestRotation = rot;
                found = true;
            }
        }
    }

    PlacementResult res;
    res.x = bestPos.x;
    res.y = bestPos.y;
    res.rotation = bestRotation;
    res.success = found;
    return res;
}

// ---- Batch SAT: check one new polygon against ALL placed polygons ----
int checkCollisionsBatch(
    const std::vector<double>& newPoly,
    const std::vector<double>& placed,
    const std::vector<int>& sizes,
    double spacing
) {
    Poly B;
    for (int i=0;i<(int)newPoly.size();i+=2) B.push_back({newPoly[i],newPoly[i+1]});
    int offset=0;
    for (int pi=0;pi<(int)sizes.size();pi++) {
        Poly A;
        int n=sizes[pi];
        for (int i=0;i<n;i++) A.push_back({placed[offset+i*2],placed[offset+i*2+1]});
        offset+=n*2;
        if (polygonsOverlap(A,B,spacing)) return pi;
    }
    return -1;
}

std::vector<double> polyToFlat(const Poly& p) {
    std::vector<double> out;
    for (auto& pt : p) { out.push_back(pt.x); out.push_back(pt.y); }
    return out;
}

EMSCRIPTEN_BINDINGS(nfp_core) {
    register_vector<double>("VectorDouble");
    register_vector<int>("VectorInt");

    value_object<PlacementResult>("PlacementResult")
        .field("x", &PlacementResult::x)
        .field("y", &PlacementResult::y)
        .field("rotation", &PlacementResult::rotation)
        .field("success", &PlacementResult::success);

    function("polygonsOverlapFlat", optional_override([](
        const std::vector<double>& flatA,
        const std::vector<double>& flatB,
        double spacing) {
            Poly A,B;
            for(int i=0;i<(int)flatA.size();i+=2) A.push_back({flatA[i],flatA[i+1]});
            for(int i=0;i<(int)flatB.size();i+=2) B.push_back({flatB[i],flatB[i+1]});
            return polygonsOverlap(A,B,spacing);
    }));
    function("convexHullFlat",        optional_override([](const std::vector<double>& f){ return polyToFlat(convexHull(f)); }));
    function("minkowskiSumFlat",      optional_override([](const std::vector<double>& flatA, const std::vector<double>& flatB){
        Poly A, B;
        for(size_t i=0;i<flatA.size();i+=2) A.push_back({flatA[i],flatA[i+1]});
        for(size_t i=0;i<flatB.size();i+=2) B.push_back({flatB[i],flatB[i+1]});
        return polyToFlat(minkowskiSum(A, B));
    }));
    function("checkCollisionsBatch",  &checkCollisionsBatch);
    function("arrangeSingleItem",     &arrangeSingleItem);
}