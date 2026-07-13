var xp=Object.defineProperty;var Mp=(i,e,t)=>e in i?xp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var hi=(i,e,t)=>Mp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="160",Dr={ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ep=0,hc=1,Sp=2,ff=1,bp=2,Pi=3,tr=0,In=1,oi=2,Ki=0,is=1,dc=2,pc=3,mc=4,wp=5,cr=100,Tp=101,Ap=102,gc=103,_c=104,Cp=200,Rp=201,Pp=202,Lp=203,vl=204,yl=205,Dp=206,Fp=207,Up=208,Ip=209,Np=210,Op=211,Bp=212,kp=213,zp=214,Hp=0,Gp=1,Vp=2,Go=3,Wp=4,$p=5,Xp=6,Yp=7,hf=0,qp=1,jp=2,Ji=0,Zp=1,Kp=2,Jp=3,Qp=4,em=5,tm=6,df=300,ss=301,os=302,xl=303,Ml=304,Qo=306,El=1e3,ai=1001,Sl=1002,Rn=1003,vc=1004,Aa=1005,qn=1006,nm=1007,Is=1008,Qi=1009,im=1010,rm=1011,Ul=1012,pf=1013,ji=1014,Zi=1015,Ns=1016,mf=1017,gf=1018,fr=1020,sm=1021,li=1023,om=1024,am=1025,hr=1026,as=1027,lm=1028,_f=1029,cm=1030,vf=1031,yf=1033,Ca=33776,Ra=33777,Pa=33778,La=33779,yc=35840,xc=35841,Mc=35842,Ec=35843,xf=36196,Sc=37492,bc=37496,wc=37808,Tc=37809,Ac=37810,Cc=37811,Rc=37812,Pc=37813,Lc=37814,Dc=37815,Fc=37816,Uc=37817,Ic=37818,Nc=37819,Oc=37820,Bc=37821,Da=36492,kc=36494,zc=36495,um=36283,Hc=36284,Gc=36285,Vc=36286,Mf=3e3,dr=3001,fm=3200,hm=3201,Il=0,dm=1,Kn="",_n="srgb",Fi="srgb-linear",Nl="display-p3",ea="display-p3-linear",Vo="linear",Vt="srgb",Wo="rec709",$o="p3",Ur=7680,Wc=519,pm=512,mm=513,gm=514,Ef=515,_m=516,vm=517,ym=518,xm=519,$c=35044,Xc="300 es",bl=1035,Di=2e3,Xo=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const Cs=Math.PI/180,Os=180/Math.PI;function Er(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function un(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function Mm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Em(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function Sm(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function bm(i,e=1){return e-Math.abs(Ol(i,e*2)-e)}function wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Am(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cm(i,e){return i+Math.random()*(e-i)}function Rm(i){return i*(.5-Math.random())}function Pm(i){i!==void 0&&(Yc=i);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lm(i){return i*Cs}function Dm(i){return i*Os}function wl(i){return(i&i-1)===0&&i!==0}function Fm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Um(i,e,t,n,r){const s=Math.cos,c=Math.sin,l=s(t/2),u=c(t/2),f=s((e+n)/2),d=c((e+n)/2),p=s((e-n)/2),m=c((e-n)/2),v=s((n-e)/2),x=c((n-e)/2);switch(r){case"XYX":i.set(l*d,u*p,u*m,l*f);break;case"YZY":i.set(u*m,l*d,u*p,l*f);break;case"ZXZ":i.set(u*p,u*m,l*d,l*f);break;case"XZX":i.set(l*d,u*x,u*v,l*f);break;case"YXY":i.set(u*v,l*d,u*x,l*f);break;case"ZYZ":i.set(u*x,u*v,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:Cs,RAD2DEG:Os,generateUUID:Er,clamp:un,euclideanModulo:Ol,mapLinear:Mm,inverseLerp:Em,lerp:Rs,damp:Sm,pingpong:bm,smoothstep:wm,smootherstep:Tm,randInt:Am,randFloat:Cm,randFloatSpread:Rm,seededRandom:Pm,degToRad:Lm,radToDeg:Dm,isPowerOfTwo:wl,ceilPowerOfTwo:Fm,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:Um,normalize:An,denormalize:Zr};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,r,s,c,l,u,f){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,u,f)}set(e,t,n,r,s,c,l,u,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[3],u=n[6],f=n[1],d=n[4],p=n[7],m=n[2],v=n[5],x=n[8],E=r[0],y=r[3],_=r[6],P=r[1],w=r[4],O=r[7],X=r[2],k=r[5],N=r[8];return s[0]=c*E+l*P+u*X,s[3]=c*y+l*w+u*k,s[6]=c*_+l*O+u*N,s[1]=f*E+d*P+p*X,s[4]=f*y+d*w+p*k,s[7]=f*_+d*O+p*N,s[2]=m*E+v*P+x*X,s[5]=m*y+v*w+x*k,s[8]=m*_+v*O+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],u=e[6],f=e[7],d=e[8];return t*c*d-t*l*f-n*s*d+n*l*u+r*s*f-r*c*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],u=e[6],f=e[7],d=e[8],p=d*c-l*f,m=l*u-d*s,v=f*s-c*u,x=t*p+n*m+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=p*E,e[1]=(r*f-d*n)*E,e[2]=(l*n-r*c)*E,e[3]=m*E,e[4]=(d*t-r*u)*E,e[5]=(r*s-l*t)*E,e[6]=v*E,e[7]=(n*u-f*t)*E,e[8]=(c*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*c+f*l)+c+e,-r*f,r*u,-r*(-f*c+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new St;function Sf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){const i=qo("canvas");return i.style.display="block",i}const qc={};function Ps(i){i in qc||(qc[i]=!0,console.warn(i))}const jc=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[Fi]:{transfer:Vo,primaries:Wo,toReference:i=>i,fromReference:i=>i},[_n]:{transfer:Vt,primaries:Wo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ea]:{transfer:Vo,primaries:$o,toReference:i=>i.applyMatrix3(Zc),fromReference:i=>i.applyMatrix3(jc)},[Nl]:{transfer:Vt,primaries:$o,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zc),fromReference:i=>i.applyMatrix3(jc).convertLinearToSRGB()}},Nm=new Set([Fi,ea]),It={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ro[e].toReference,r=ro[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ro[i].primaries},getTransfer:function(i){return i===Kn?Vo:ro[i].transfer}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=qo("canvas")),Ir.width=e.width,Ir.height=e.height;const n=Ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=rs(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rs(t[n]/255)*255):t[n]=rs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?s.push(Ia(r[c].image)):s.push(Ia(r[c]))}else s=Ia(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class Vn extends Mr{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=ai,r=ai,s=qn,c=Is,l=li,u=Qi,f=Vn.DEFAULT_ANISOTROPY,d=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Er(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===dr?_n:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?dr:Mf}set encoding(e){Ps("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dr?_n:Kn}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=df;Vn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,t=0,n=0,r=1){vn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],d=u[4],p=u[8],m=u[1],v=u[5],x=u[9],E=u[2],y=u[6],_=u[10];if(Math.abs(d-m)<.01&&Math.abs(p-E)<.01&&Math.abs(x-y)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+E)<.1&&Math.abs(x+y)<.1&&Math.abs(f+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,O=(v+1)/2,X=(_+1)/2,k=(d+m)/4,N=(p+E)/4,K=(x+y)/4;return w>O&&w>X?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=k/n,s=N/n):O>X?O<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(O),n=k/r,s=K/r):X<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(X),n=N/s,r=K/s),this.set(n,r,s,t),this}let P=Math.sqrt((y-x)*(y-x)+(p-E)*(p-E)+(m-d)*(m-d));return Math.abs(P)<.001&&(P=1),this.x=(y-x)/P,this.y=(p-E)/P,this.z=(m-d)/P,this.w=Math.acos((f+v+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class km extends Mr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ps("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dr?_n:Kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends km{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tf extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zm extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,l){let u=n[r+0],f=n[r+1],d=n[r+2],p=n[r+3];const m=s[c+0],v=s[c+1],x=s[c+2],E=s[c+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=v,e[t+2]=x,e[t+3]=E;return}if(p!==E||u!==m||f!==v||d!==x){let y=1-l;const _=u*m+f*v+d*x+p*E,P=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const X=Math.sqrt(w),k=Math.atan2(X,_*P);y=Math.sin(y*k)/X,l=Math.sin(l*k)/X}const O=l*P;if(u=u*y+m*O,f=f*y+v*O,d=d*y+x*O,p=p*y+E*O,y===1-l){const X=1/Math.sqrt(u*u+f*f+d*d+p*p);u*=X,f*=X,d*=X,p*=X}}e[t]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,c){const l=n[r],u=n[r+1],f=n[r+2],d=n[r+3],p=s[c],m=s[c+1],v=s[c+2],x=s[c+3];return e[t]=l*x+d*p+u*v-f*m,e[t+1]=u*x+d*m+f*p-l*v,e[t+2]=f*x+d*v+l*m-u*p,e[t+3]=d*x-l*p-u*m-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,c=e._order,l=Math.cos,u=Math.sin,f=l(n/2),d=l(r/2),p=l(s/2),m=u(n/2),v=u(r/2),x=u(s/2);switch(c){case"XYZ":this._x=m*d*p+f*v*x,this._y=f*v*p-m*d*x,this._z=f*d*x+m*v*p,this._w=f*d*p-m*v*x;break;case"YXZ":this._x=m*d*p+f*v*x,this._y=f*v*p-m*d*x,this._z=f*d*x-m*v*p,this._w=f*d*p+m*v*x;break;case"ZXY":this._x=m*d*p-f*v*x,this._y=f*v*p+m*d*x,this._z=f*d*x+m*v*p,this._w=f*d*p-m*v*x;break;case"ZYX":this._x=m*d*p-f*v*x,this._y=f*v*p+m*d*x,this._z=f*d*x-m*v*p,this._w=f*d*p+m*v*x;break;case"YZX":this._x=m*d*p+f*v*x,this._y=f*v*p+m*d*x,this._z=f*d*x-m*v*p,this._w=f*d*p-m*v*x;break;case"XZY":this._x=m*d*p-f*v*x,this._y=f*v*p-m*d*x,this._z=f*d*x+m*v*p,this._w=f*d*p+m*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],l=t[5],u=t[9],f=t[2],d=t[6],p=t[10],m=n+l+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(d-u)*v,this._y=(s-f)*v,this._z=(c-r)*v}else if(n>l&&n>p){const v=2*Math.sqrt(1+n-l-p);this._w=(d-u)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(s+f)/v}else if(l>p){const v=2*Math.sqrt(1+l-n-p);this._w=(s-f)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(u+d)/v}else{const v=2*Math.sqrt(1+p-n-l);this._w=(c-r)/v,this._x=(s+f)/v,this._y=(u+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,l=t._x,u=t._y,f=t._z,d=t._w;return this._x=n*d+c*l+r*f-s*u,this._y=r*d+c*u+s*l-n*f,this._z=s*d+c*f+n*u-r*l,this._w=c*d-n*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const v=1-t;return this._w=v*c+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),d=Math.atan2(f,l),p=Math.sin((1-t)*d)/f,m=Math.sin(t*d)/f;return this._w=c*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,l=e.z,u=e.w,f=2*(c*r-l*n),d=2*(l*t-s*r),p=2*(s*n-c*t);return this.x=t+u*f+c*p-l*d,this.y=n+u*d+l*f-s*p,this.z=r+u*p+s*d-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*c-n*u,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new H,Kc=new gr;class Qn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=s.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,ti):ti.fromBufferAttribute(s,c),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),oo.subVectors(this.max,bs),Nr.subVectors(e.a,bs),Or.subVectors(e.b,bs),Br.subVectors(e.c,bs),Wi.subVectors(Or,Nr),$i.subVectors(Br,Or),rr.subVectors(Nr,Br);let t=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-rr.z,rr.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,rr.z,0,-rr.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-rr.y,rr.x,0];return!Oa(t,Nr,Or,Br,oo)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,Nr,Or,Br,oo))?!1:(ao.crossVectors(Wi,$i),t=[ao.x,ao.y,ao.z],Oa(t,Nr,Or,Br,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],ti=new H,so=new Qn,Nr=new H,Or=new H,Br=new H,Wi=new H,$i=new H,rr=new H,bs=new H,oo=new H,ao=new H,sr=new H;function Oa(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){sr.fromArray(i,s);const l=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),u=e.dot(sr),f=t.dot(sr),d=n.dot(sr);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>l)return!1}return!0}const Hm=new Qn,ws=new H,Ba=new H;class ta{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Ba)),this.expandByPoint(ws.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new H,ka=new H,lo=new H,Xi=new H,za=new H,co=new H,Ha=new H;class na{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ka.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,c=-this.direction.dot(lo),l=Xi.dot(this.direction),u=-Xi.dot(lo),f=Xi.lengthSq(),d=Math.abs(1-c*c);let p,m,v,x;if(d>0)if(p=c*u-l,m=c*l-u,x=s*d,p>=0)if(m>=-x)if(m<=x){const E=1/d;p*=E,m*=E,v=p*(p+c*m+2*l)+m*(c*p+m+2*u)+f}else m=s,p=Math.max(0,-(c*m+l)),v=-p*p+m*(m+2*u)+f;else m=-s,p=Math.max(0,-(c*m+l)),v=-p*p+m*(m+2*u)+f;else m<=-x?(p=Math.max(0,-(-c*s+l)),m=p>0?-s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+f):m<=x?(p=0,m=Math.min(Math.max(-s,-u),s),v=m*(m+2*u)+f):(p=Math.max(0,-(c*s+l)),m=p>0?s:Math.min(Math.max(-s,-u),s),v=-p*p+m*(m+2*u)+f);else m=c>0?-s:s,p=Math.max(0,-(c*m+l)),v=-p*p+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ka).addScaledVector(lo,m),v}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),r=wi.dot(wi)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),l=n-c,u=n+c;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,l,u;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),d>=0?(s=(e.min.y-m.y)*d,c=(e.max.y-m.y)*d):(s=(e.max.y-m.y)*d,c=(e.min.y-m.y)*d),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),p>=0?(l=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,r,s){za.subVectors(t,e),co.subVectors(n,e),Ha.crossVectors(za,co);let c=this.direction.dot(Ha),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Xi.subVectors(this.origin,e);const u=l*this.direction.dot(co.crossVectors(Xi,co));if(u<0)return null;const f=l*this.direction.dot(za.cross(Xi));if(f<0||u+f>c)return null;const d=-l*Xi.dot(Ha);return d<0?null:this.at(d/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,r,s,c,l,u,f,d,p,m,v,x,E,y){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,l,u,f,d,p,m,v,x,E,y)}set(e,t,n,r,s,c,l,u,f,d,p,m,v,x,E,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=c,_[9]=l,_[13]=u,_[2]=f,_[6]=d,_[10]=p,_[14]=m,_[3]=v,_[7]=x,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),c=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=c*d,v=c*p,x=l*d,E=l*p;t[0]=u*d,t[4]=-u*p,t[8]=f,t[1]=v+x*f,t[5]=m-E*f,t[9]=-l*u,t[2]=E-m*f,t[6]=x+v*f,t[10]=c*u}else if(e.order==="YXZ"){const m=u*d,v=u*p,x=f*d,E=f*p;t[0]=m+E*l,t[4]=x*l-v,t[8]=c*f,t[1]=c*p,t[5]=c*d,t[9]=-l,t[2]=v*l-x,t[6]=E+m*l,t[10]=c*u}else if(e.order==="ZXY"){const m=u*d,v=u*p,x=f*d,E=f*p;t[0]=m-E*l,t[4]=-c*p,t[8]=x+v*l,t[1]=v+x*l,t[5]=c*d,t[9]=E-m*l,t[2]=-c*f,t[6]=l,t[10]=c*u}else if(e.order==="ZYX"){const m=c*d,v=c*p,x=l*d,E=l*p;t[0]=u*d,t[4]=x*f-v,t[8]=m*f+E,t[1]=u*p,t[5]=E*f+m,t[9]=v*f-x,t[2]=-f,t[6]=l*u,t[10]=c*u}else if(e.order==="YZX"){const m=c*u,v=c*f,x=l*u,E=l*f;t[0]=u*d,t[4]=E-m*p,t[8]=x*p+v,t[1]=p,t[5]=c*d,t[9]=-l*d,t[2]=-f*d,t[6]=v*p+x,t[10]=m-E*p}else if(e.order==="XZY"){const m=c*u,v=c*f,x=l*u,E=l*f;t[0]=u*d,t[4]=-p,t[8]=f*d,t[1]=m*p+E,t[5]=c*d,t[9]=v*p-x,t[2]=x*p-v,t[6]=l*d,t[10]=E*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Vm)}lookAt(e,t,n){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Yi.crossVectors(n,Hn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Yi.crossVectors(n,Hn)),Yi.normalize(),uo.crossVectors(Hn,Yi),r[0]=Yi.x,r[4]=uo.x,r[8]=Hn.x,r[1]=Yi.y,r[5]=uo.y,r[9]=Hn.y,r[2]=Yi.z,r[6]=uo.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],l=n[4],u=n[8],f=n[12],d=n[1],p=n[5],m=n[9],v=n[13],x=n[2],E=n[6],y=n[10],_=n[14],P=n[3],w=n[7],O=n[11],X=n[15],k=r[0],N=r[4],K=r[8],R=r[12],I=r[1],z=r[5],ee=r[9],pe=r[13],W=r[2],Z=r[6],$=r[10],J=r[14],ce=r[3],le=r[7],ve=r[11],be=r[15];return s[0]=c*k+l*I+u*W+f*ce,s[4]=c*N+l*z+u*Z+f*le,s[8]=c*K+l*ee+u*$+f*ve,s[12]=c*R+l*pe+u*J+f*be,s[1]=d*k+p*I+m*W+v*ce,s[5]=d*N+p*z+m*Z+v*le,s[9]=d*K+p*ee+m*$+v*ve,s[13]=d*R+p*pe+m*J+v*be,s[2]=x*k+E*I+y*W+_*ce,s[6]=x*N+E*z+y*Z+_*le,s[10]=x*K+E*ee+y*$+_*ve,s[14]=x*R+E*pe+y*J+_*be,s[3]=P*k+w*I+O*W+X*ce,s[7]=P*N+w*z+O*Z+X*le,s[11]=P*K+w*ee+O*$+X*ve,s[15]=P*R+w*pe+O*J+X*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],l=e[5],u=e[9],f=e[13],d=e[2],p=e[6],m=e[10],v=e[14],x=e[3],E=e[7],y=e[11],_=e[15];return x*(+s*u*p-r*f*p-s*l*m+n*f*m+r*l*v-n*u*v)+E*(+t*u*v-t*f*m+s*c*m-r*c*v+r*f*d-s*u*d)+y*(+t*f*p-t*l*v-s*c*p+n*c*v+s*l*d-n*f*d)+_*(-r*l*d-t*u*p+t*l*m+r*c*p-n*c*m+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],l=e[5],u=e[6],f=e[7],d=e[8],p=e[9],m=e[10],v=e[11],x=e[12],E=e[13],y=e[14],_=e[15],P=p*y*f-E*m*f+E*u*v-l*y*v-p*u*_+l*m*_,w=x*m*f-d*y*f-x*u*v+c*y*v+d*u*_-c*m*_,O=d*E*f-x*p*f+x*l*v-c*E*v-d*l*_+c*p*_,X=x*p*u-d*E*u-x*l*m+c*E*m+d*l*y-c*p*y,k=t*P+n*w+r*O+s*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=P*N,e[1]=(E*m*s-p*y*s-E*r*v+n*y*v+p*r*_-n*m*_)*N,e[2]=(l*y*s-E*u*s+E*r*f-n*y*f-l*r*_+n*u*_)*N,e[3]=(p*u*s-l*m*s-p*r*f+n*m*f+l*r*v-n*u*v)*N,e[4]=w*N,e[5]=(d*y*s-x*m*s+x*r*v-t*y*v-d*r*_+t*m*_)*N,e[6]=(x*u*s-c*y*s-x*r*f+t*y*f+c*r*_-t*u*_)*N,e[7]=(c*m*s-d*u*s+d*r*f-t*m*f-c*r*v+t*u*v)*N,e[8]=O*N,e[9]=(x*p*s-d*E*s-x*n*v+t*E*v+d*n*_-t*p*_)*N,e[10]=(c*E*s-x*l*s+x*n*f-t*E*f-c*n*_+t*l*_)*N,e[11]=(d*l*s-c*p*s-d*n*f+t*p*f+c*n*v-t*l*v)*N,e[12]=X*N,e[13]=(d*E*r-x*p*r+x*n*m-t*E*m-d*n*y+t*p*y)*N,e[14]=(x*l*r-c*E*r-x*n*u+t*E*u+c*n*y-t*l*y)*N,e[15]=(c*p*r-d*l*r+d*n*u-t*p*u-c*n*m+t*l*m)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,l=e.y,u=e.z,f=s*c,d=s*l;return this.set(f*c+n,f*l-r*u,f*u+r*l,0,f*l+r*u,d*l+n,d*u-r*c,0,f*u-r*l,d*u+r*c,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,l=t._z,u=t._w,f=s+s,d=c+c,p=l+l,m=s*f,v=s*d,x=s*p,E=c*d,y=c*p,_=l*p,P=u*f,w=u*d,O=u*p,X=n.x,k=n.y,N=n.z;return r[0]=(1-(E+_))*X,r[1]=(v+O)*X,r[2]=(x-w)*X,r[3]=0,r[4]=(v-O)*k,r[5]=(1-(m+_))*k,r[6]=(y+P)*k,r[7]=0,r[8]=(x+w)*N,r[9]=(y-P)*N,r[10]=(1-(m+E))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const c=kr.set(r[4],r[5],r[6]).length(),l=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const f=1/s,d=1/c,p=1/l;return ni.elements[0]*=f,ni.elements[1]*=f,ni.elements[2]*=f,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,t.setFromRotationMatrix(ni),n.x=s,n.y=c,n.z=l,this}makePerspective(e,t,n,r,s,c,l=Di){const u=this.elements,f=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let v,x;if(l===Di)v=-(c+s)/(c-s),x=-2*c*s/(c-s);else if(l===Xo)v=-c/(c-s),x=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,c,l=Di){const u=this.elements,f=1/(t-e),d=1/(n-r),p=1/(c-s),m=(t+e)*f,v=(n+r)*d;let x,E;if(l===Di)x=(c+s)*p,E=-2*p;else if(l===Xo)x=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=E,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kr=new H,ni=new Jt,Gm=new H(0,0,0),Vm=new H(1,1,1),Yi=new H,uo=new H,Hn=new H,Jc=new Jt,Qc=new gr;class ia{constructor(e=0,t=0,n=0,r=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],l=r[8],u=r[1],f=r[5],d=r[9],p=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-un(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const eu=new H,zr=new gr,Ti=new Jt,fo=new H,Ts=new H,$m=new H,Xm=new gr,tu=new H(1,0,0),nu=new H(0,1,0),iu=new H(0,0,1),Ym={type:"added"},qm={type:"removed"};class Pn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new H,t=new ia,n=new gr,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new St}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ts,fo,this.up):Ti.lookAt(fo,Ts,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(Ti),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=c(e.geometries),u=c(e.materials),f=c(e.textures),d=c(e.images),p=c(e.shapes),m=c(e.skeletons),v=c(e.animations),x=c(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=r,n;function c(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new H(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new H,Ai=new H,Ga=new H,Ci=new H,Hr=new H,Gr=new H,ru=new H,Va=new H,Wa=new H,$a=new H;let ho=!1;class jn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ii.subVectors(r,t),Ai.subVectors(n,t),Ga.subVectors(e,t);const c=ii.dot(ii),l=ii.dot(Ai),u=ii.dot(Ga),f=Ai.dot(Ai),d=Ai.dot(Ga),p=c*f-l*l;if(p===0)return s.set(0,0,0),null;const m=1/p,v=(f*u-l*d)*m,x=(c*d-l*u)*m;return s.set(1-v-x,x,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,n,r,s,c,l,u){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),this.getInterpolation(e,t,n,r,s,c,l,u)}static getInterpolation(e,t,n,r,s,c,l,u){return this.getBarycoord(e,t,n,r,Ci)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ci.x),u.addScaledVector(c,Ci.y),u.addScaledVector(l,Ci.z),u)}static isFrontFacing(e,t,n,r){return ii.subVectors(n,t),Ai.subVectors(e,t),ii.cross(Ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ii.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,l;Hr.subVectors(r,n),Gr.subVectors(s,n),Va.subVectors(e,n);const u=Hr.dot(Va),f=Gr.dot(Va);if(u<=0&&f<=0)return t.copy(n);Wa.subVectors(e,r);const d=Hr.dot(Wa),p=Gr.dot(Wa);if(d>=0&&p<=d)return t.copy(r);const m=u*p-d*f;if(m<=0&&u>=0&&d<=0)return c=u/(u-d),t.copy(n).addScaledVector(Hr,c);$a.subVectors(e,s);const v=Hr.dot($a),x=Gr.dot($a);if(x>=0&&v<=x)return t.copy(s);const E=v*f-u*x;if(E<=0&&f>=0&&x<=0)return l=f/(f-x),t.copy(n).addScaledVector(Gr,l);const y=d*x-v*p;if(y<=0&&p-d>=0&&v-x>=0)return ru.subVectors(s,r),l=(p-d)/(p-d+(v-x)),t.copy(r).addScaledVector(ru,l);const _=1/(y+E+m);return c=E*_,l=m*_,t.copy(n).addScaledVector(Hr,c).addScaledVector(Gr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Ol(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=Xa(c,s,e+1/3),this.g=Xa(c,s,e),this.b=Xa(c,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=Af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return It.fromWorkingColorSpace(Sn.copy(this),e),Math.round(un(Sn.r*255,0,255))*65536+Math.round(un(Sn.g*255,0,255))*256+Math.round(un(Sn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Sn.copy(this),t);const n=Sn.r,r=Sn.g,s=Sn.b,c=Math.max(n,r,s),l=Math.min(n,r,s);let u,f;const d=(l+c)/2;if(l===c)u=0,f=0;else{const p=c-l;switch(f=d<=.5?p/(c+l):p/(2-c-l),c){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=d,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=_n){It.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,r=Sn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(po);const n=Rs(qi.h,po.h,t),r=Rs(qi.s,po.s,t),s=Rs(qi.l,po.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Lt;Lt.NAMES=Af;let jm=0;class Sr extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=is,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new H,mo=new We;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}}class Cf extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rf extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zm=0;const Yn=new Jt,Ya=new Pn,Vr=new H,Gn=new Qn,As=new Qn,mn=new H;class Xt extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Rf:Cf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new St().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const l=t[s];As.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(Gn.min,As.min),Gn.expandByPoint(mn),mn.addVectors(Gn.max,As.max),Gn.expandByPoint(mn)):(Gn.expandByPoint(As.min),Gn.expandByPoint(As.max))}Gn.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mn));if(t)for(let s=0,c=t.length;s<c;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)mn.fromBufferAttribute(l,f),u&&(Vr.fromBufferAttribute(e,f),mn.add(Vr)),r=Math.max(r,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,c=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,f=[],d=[];for(let I=0;I<l;I++)f[I]=new H,d[I]=new H;const p=new H,m=new H,v=new H,x=new We,E=new We,y=new We,_=new H,P=new H;function w(I,z,ee){p.fromArray(r,I*3),m.fromArray(r,z*3),v.fromArray(r,ee*3),x.fromArray(c,I*2),E.fromArray(c,z*2),y.fromArray(c,ee*2),m.sub(p),v.sub(p),E.sub(x),y.sub(x);const pe=1/(E.x*y.y-y.x*E.y);isFinite(pe)&&(_.copy(m).multiplyScalar(y.y).addScaledVector(v,-E.y).multiplyScalar(pe),P.copy(v).multiplyScalar(E.x).addScaledVector(m,-y.x).multiplyScalar(pe),f[I].add(_),f[z].add(_),f[ee].add(_),d[I].add(P),d[z].add(P),d[ee].add(P))}let O=this.groups;O.length===0&&(O=[{start:0,count:n.length}]);for(let I=0,z=O.length;I<z;++I){const ee=O[I],pe=ee.start,W=ee.count;for(let Z=pe,$=pe+W;Z<$;Z+=3)w(n[Z+0],n[Z+1],n[Z+2])}const X=new H,k=new H,N=new H,K=new H;function R(I){N.fromArray(s,I*3),K.copy(N);const z=f[I];X.copy(z),X.sub(N.multiplyScalar(N.dot(z))).normalize(),k.crossVectors(K,z);const pe=k.dot(d[I])<0?-1:1;u[I*4]=X.x,u[I*4+1]=X.y,u[I*4+2]=X.z,u[I*4+3]=pe}for(let I=0,z=O.length;I<z;++I){const ee=O[I],pe=ee.start,W=ee.count;for(let Z=pe,$=pe+W;Z<$;Z+=3)R(n[Z+0]),R(n[Z+1]),R(n[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const r=new H,s=new H,c=new H,l=new H,u=new H,f=new H,d=new H,p=new H;if(e)for(let m=0,v=e.count;m<v;m+=3){const x=e.getX(m+0),E=e.getX(m+1),y=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),d.subVectors(c,s),p.subVectors(r,s),d.cross(p),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),l.add(d),u.add(d),f.add(d),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),d.subVectors(c,s),p.subVectors(r,s),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(l,u){const f=l.array,d=l.itemSize,p=l.normalized,m=new f.constructor(u.length*d);let v=0,x=0;for(let E=0,y=u.length;E<y;E++){l.isInterleavedBufferAttribute?v=u[E]*l.data.stride+l.offset:v=u[E]*d;for(let _=0;_<d;_++)m[x++]=f[v++]}return new Gt(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++){const m=f[d],v=e(m,n);u.push(v)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,u=c.length;l<u;l++){const f=c[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let p=0,m=f.length;p<m;p++){const v=f[p];d.push(v.toJSON(e.data))}d.length>0&&(r[u]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const s=e.morphAttributes;for(const f in s){const d=[],p=s[f];for(let m=0,v=p.length;m<v;m++)d.push(p[m].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new Jt,or=new na,go=new ta,ou=new H,Wr=new H,$r=new H,Xr=new H,qa=new H,_o=new H,vo=new We,yo=new We,xo=new We,au=new H,lu=new H,cu=new H,Mo=new H,Eo=new H;class hn extends Pn{constructor(e=new Xt,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){_o.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const d=l[u],p=s[u];d!==0&&(qa.fromBufferAttribute(p,e),c?_o.addScaledVector(qa,d):_o.addScaledVector(qa.sub(t),d))}t.add(_o)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(go.containsPoint(or.origin)===!1&&(or.intersectSphere(go,ou)===null||or.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(su.copy(s).invert(),or.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(c))for(let x=0,E=m.length;x<E;x++){const y=m[x],_=c[y.materialIndex],P=Math.max(y.start,v.start),w=Math.min(l.count,Math.min(y.start+y.count,v.start+v.count));for(let O=P,X=w;O<X;O+=3){const k=l.getX(O),N=l.getX(O+1),K=l.getX(O+2);r=So(this,_,e,n,f,d,p,k,N,K),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let y=x,_=E;y<_;y+=3){const P=l.getX(y),w=l.getX(y+1),O=l.getX(y+2);r=So(this,c,e,n,f,d,p,P,w,O),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(c))for(let x=0,E=m.length;x<E;x++){const y=m[x],_=c[y.materialIndex],P=Math.max(y.start,v.start),w=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let O=P,X=w;O<X;O+=3){const k=O,N=O+1,K=O+2;r=So(this,_,e,n,f,d,p,k,N,K),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),E=Math.min(u.count,v.start+v.count);for(let y=x,_=E;y<_;y+=3){const P=y,w=y+1,O=y+2;r=So(this,c,e,n,f,d,p,P,w,O),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function Km(i,e,t,n,r,s,c,l){let u;if(e.side===In?u=n.intersectTriangle(c,s,r,!0,l):u=n.intersectTriangle(r,s,c,e.side===tr,l),u===null)return null;Eo.copy(l),Eo.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Eo);return f<t.near||f>t.far?null:{distance:f,point:Eo.clone(),object:i}}function So(i,e,t,n,r,s,c,l,u,f){i.getVertexPosition(l,Wr),i.getVertexPosition(u,$r),i.getVertexPosition(f,Xr);const d=Km(i,e,t,n,Wr,$r,Xr,Mo);if(d){r&&(vo.fromBufferAttribute(r,l),yo.fromBufferAttribute(r,u),xo.fromBufferAttribute(r,f),d.uv=jn.getInterpolation(Mo,Wr,$r,Xr,vo,yo,xo,new We)),s&&(vo.fromBufferAttribute(s,l),yo.fromBufferAttribute(s,u),xo.fromBufferAttribute(s,f),d.uv1=jn.getInterpolation(Mo,Wr,$r,Xr,vo,yo,xo,new We),d.uv2=d.uv1),c&&(au.fromBufferAttribute(c,l),lu.fromBufferAttribute(c,u),cu.fromBufferAttribute(c,f),d.normal=jn.getInterpolation(Mo,Wr,$r,Xr,au,lu,cu,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:u,c:f,normal:new H,materialIndex:0};jn.getNormal(Wr,$r,Xr,p.normal),d.face=p}return d}class br extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const l=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const u=[],f=[],d=[],p=[];let m=0,v=0;x("z","y","x",-1,-1,n,t,e,c,s,0),x("z","y","x",1,-1,n,t,-e,c,s,1),x("x","z","y",1,1,e,n,t,r,c,2),x("x","z","y",1,-1,e,n,-t,r,c,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function x(E,y,_,P,w,O,X,k,N,K,R){const I=O/N,z=X/K,ee=O/2,pe=X/2,W=k/2,Z=N+1,$=K+1;let J=0,ce=0;const le=new H;for(let ve=0;ve<$;ve++){const be=ve*z-pe;for(let ze=0;ze<Z;ze++){const se=ze*I-ee;le[E]=se*P,le[y]=be*w,le[_]=W,f.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[_]=k>0?1:-1,d.push(le.x,le.y,le.z),p.push(ze/N),p.push(1-ve/K),J+=1}}for(let ve=0;ve<K;ve++)for(let be=0;be<N;be++){const ze=m+be+Z*ve,se=m+be+Z*(ve+1),ue=m+(be+1)+Z*(ve+1),Be=m+(be+1)+Z*ve;u.push(ze,se,Be),u.push(se,ue,Be),ce+=6}l.addGroup(v,ce,R),v+=ce,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const n=ls(i[t]);for(const r in n)e[r]=n[r]}return e}function Jm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pf(i){return i.getRenderTarget()===null?i.outputColorSpace:It.workingColorSpace}const Qm={clone:ls,merge:Cn};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lf extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zn extends Lf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,f=c.fullHeight;s+=c.offsetX*r/u,t-=c.offsetY*n/f,r*=c.width/u,n*=c.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,qr=1;class ng extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Yr,qr,e,t);r.layers=this.layers,this.add(r);const s=new Zn(Yr,qr,e,t);s.layers=this.layers,this.add(s);const c=new Zn(Yr,qr,e,t);c.layers=this.layers,this.add(c);const l=new Zn(Yr,qr,e,t);l.layers=this.layers,this.add(l);const u=new Zn(Yr,qr,e,t);u.layers=this.layers,this.add(u);const f=new Zn(Yr,qr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,l,u]=t;for(const f of t)this.remove(f);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,l,u,f,d]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,m,v),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Df extends Vn{constructor(e,t,n,r,s,c,l,u,f,d){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,r,s,c,l,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ps("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dr?_n:Kn),this.texture=new Df(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new br(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Ki});s.uniforms.tEquirect.value=t;const c=new hn(r,s),l=t.minFilter;return t.minFilter===Is&&(t.minFilter=qn),new ng(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const ja=new H,rg=new H,sg=new St;class si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ja.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sg.getNormalMatrix(e),r=this.coplanarPoint(ja).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new ta,bo=new H;class Ff{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,c=new si){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,r=e.elements,s=r[0],c=r[1],l=r[2],u=r[3],f=r[4],d=r[5],p=r[6],m=r[7],v=r[8],x=r[9],E=r[10],y=r[11],_=r[12],P=r[13],w=r[14],O=r[15];if(n[0].setComponents(u-s,m-f,y-v,O-_).normalize(),n[1].setComponents(u+s,m+f,y+v,O+_).normalize(),n[2].setComponents(u+c,m+d,y+x,O+P).normalize(),n[3].setComponents(u-c,m-d,y-x,O-P).normalize(),n[4].setComponents(u-l,m-p,y-E,O-w).normalize(),t===Di)n[5].setComponents(u+l,m+p,y+E,O+w).normalize();else if(t===Xo)n[5].setComponents(l,p,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uf(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function og(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,d){const p=f.array,m=f.usage,v=p.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,p,m),f.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,d,p){const m=d.array,v=d._updateRange,x=d.updateRanges;if(i.bindBuffer(p,f),v.count===-1&&x.length===0&&i.bufferSubData(p,0,m),x.length!==0){for(let E=0,y=x.length;E<y;E++){const _=x[E];t?i.bufferSubData(p,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count):i.bufferSubData(p,_.start*m.BYTES_PER_ELEMENT,m.subarray(_.start,_.start+_.count))}d.clearUpdateRanges()}v.count!==-1&&(t?i.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):i.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function u(f,d){if(f.isGLBufferAttribute){const m=n.get(f);(!m||m.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,r(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:c,remove:l,update:u}}class ra extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,l=Math.floor(n),u=Math.floor(r),f=l+1,d=u+1,p=e/l,m=t/u,v=[],x=[],E=[],y=[];for(let _=0;_<d;_++){const P=_*m-c;for(let w=0;w<f;w++){const O=w*p-s;x.push(O,-P,0),E.push(0,0,1),y.push(w/l),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let P=0;P<l;P++){const w=P+f*_,O=P+f*(_+1),X=P+1+f*(_+1),k=P+1+f*_;v.push(w,O,k),v.push(O,X,k)}this.setIndex(v),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(E,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,__=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:ag,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:fg,alphatest_pars_fragment:hg,aomap_fragment:dg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:xg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:wg,color_fragment:Tg,color_pars_fragment:Ag,color_pars_vertex:Cg,color_vertex:Rg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Fg,displacementmap_vertex:Ug,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Bg,envmap_fragment:kg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e_,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:$g,fog_fragment:Xg,fog_pars_fragment:Yg,gradientmap_pars_fragment:qg,lightmap_fragment:jg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:l_,lights_fragment_end:c_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:d_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:y_,morphcolor_vertex:x_,morphnormal_vertex:M_,morphtarget_pars_vertex:E_,morphtarget_vertex:S_,normal_fragment_begin:b_,normal_fragment_maps:w_,normal_pars_fragment:T_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:F_,opaque_fragment:U_,packing:I_,premultiplied_alpha_fragment:N_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:$_,skinbase_vertex:X_,skinning_pars_vertex:Y_,skinning_vertex:q_,skinnormal_vertex:j_,specularmap_fragment:Z_,specularmap_pars_fragment:K_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:sv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:fv,depth_vert:hv,depth_frag:dv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:yv,meshbasic_vert:xv,meshbasic_frag:Mv,meshlambert_vert:Ev,meshlambert_frag:Sv,meshmatcap_vert:bv,meshmatcap_frag:wv,meshnormal_vert:Tv,meshnormal_frag:Av,meshphong_vert:Cv,meshphong_frag:Rv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Dv,meshtoon_frag:Fv,points_vert:Uv,points_frag:Iv,shadow_vert:Nv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:kv},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},di={basic:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Cn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Cn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Cn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Cn([Oe.points,Oe.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Cn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Cn([Oe.common,Oe.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Cn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Cn([Oe.sprite,Oe.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Cn([Oe.common,Oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Cn([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};di.physical={uniforms:Cn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const wo={r:0,b:0,g:0};function zv(i,e,t,n,r,s,c){const l=new Lt(0);let u=s===!0?0:1,f,d,p=null,m=0,v=null;function x(y,_){let P=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?t:e).get(w)),w===null?E(l,u):w&&w.isColor&&(E(w,1),P=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Qo)?(d===void 0&&(d=new hn(new br(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ls(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(X,k,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=It.getTransfer(w.colorSpace)!==Vt,(p!==w||m!==w.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,p=w,m=w.version,v=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new hn(new ra(2,2),new _r({name:"BackgroundMaterial",uniforms:ls(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=It.getTransfer(w.colorSpace)!==Vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||m!==w.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,p=w,m=w.version,v=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null))}function E(y,_){y.getRGB(wo,Pf(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,_,c)}return{getClearColor:function(){return l},setClearColor:function(y,_=1){l.set(y),u=_,E(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(y){u=y,E(l,u)},render:x}}function Hv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,l={},u=y(null);let f=u,d=!1;function p(W,Z,$,J,ce){let le=!1;if(c){const ve=E(J,$,Z);f!==ve&&(f=ve,v(f.object)),le=_(W,J,$,ce),le&&P(W,J,$,ce)}else{const ve=Z.wireframe===!0;(f.geometry!==J.id||f.program!==$.id||f.wireframe!==ve)&&(f.geometry=J.id,f.program=$.id,f.wireframe=ve,le=!0)}ce!==null&&t.update(ce,i.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,K(W,Z,$,J),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function v(W){return n.isWebGL2?i.bindVertexArray(W):s.bindVertexArrayOES(W)}function x(W){return n.isWebGL2?i.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function E(W,Z,$){const J=$.wireframe===!0;let ce=l[W.id];ce===void 0&&(ce={},l[W.id]=ce);let le=ce[Z.id];le===void 0&&(le={},ce[Z.id]=le);let ve=le[J];return ve===void 0&&(ve=y(m()),le[J]=ve),ve}function y(W){const Z=[],$=[],J=[];for(let ce=0;ce<r;ce++)Z[ce]=0,$[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:$,attributeDivisors:J,object:W,attributes:{},index:null}}function _(W,Z,$,J){const ce=f.attributes,le=Z.attributes;let ve=0;const be=$.getAttributes();for(const ze in be)if(be[ze].location>=0){const ue=ce[ze];let Be=le[ze];if(Be===void 0&&(ze==="instanceMatrix"&&W.instanceMatrix&&(Be=W.instanceMatrix),ze==="instanceColor"&&W.instanceColor&&(Be=W.instanceColor)),ue===void 0||ue.attribute!==Be||Be&&ue.data!==Be.data)return!0;ve++}return f.attributesNum!==ve||f.index!==J}function P(W,Z,$,J){const ce={},le=Z.attributes;let ve=0;const be=$.getAttributes();for(const ze in be)if(be[ze].location>=0){let ue=le[ze];ue===void 0&&(ze==="instanceMatrix"&&W.instanceMatrix&&(ue=W.instanceMatrix),ze==="instanceColor"&&W.instanceColor&&(ue=W.instanceColor));const Be={};Be.attribute=ue,ue&&ue.data&&(Be.data=ue.data),ce[ze]=Be,ve++}f.attributes=ce,f.attributesNum=ve,f.index=J}function w(){const W=f.newAttributes;for(let Z=0,$=W.length;Z<$;Z++)W[Z]=0}function O(W){X(W,0)}function X(W,Z){const $=f.newAttributes,J=f.enabledAttributes,ce=f.attributeDivisors;$[W]=1,J[W]===0&&(i.enableVertexAttribArray(W),J[W]=1),ce[W]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,Z),ce[W]=Z)}function k(){const W=f.newAttributes,Z=f.enabledAttributes;for(let $=0,J=Z.length;$<J;$++)Z[$]!==W[$]&&(i.disableVertexAttribArray($),Z[$]=0)}function N(W,Z,$,J,ce,le,ve){ve===!0?i.vertexAttribIPointer(W,Z,$,ce,le):i.vertexAttribPointer(W,Z,$,J,ce,le)}function K(W,Z,$,J){if(n.isWebGL2===!1&&(W.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const ce=J.attributes,le=$.getAttributes(),ve=Z.defaultAttributeValues;for(const be in le){const ze=le[be];if(ze.location>=0){let se=ce[be];if(se===void 0&&(be==="instanceMatrix"&&W.instanceMatrix&&(se=W.instanceMatrix),be==="instanceColor"&&W.instanceColor&&(se=W.instanceColor)),se!==void 0){const ue=se.normalized,Be=se.itemSize,Te=t.get(se);if(Te===void 0)continue;const je=Te.buffer,nt=Te.type,ct=Te.bytesPerElement,it=n.isWebGL2===!0&&(nt===i.INT||nt===i.UNSIGNED_INT||se.gpuType===pf);if(se.isInterleavedBufferAttribute){const yt=se.data,te=yt.stride,Yt=se.offset;if(yt.isInstancedInterleavedBuffer){for(let et=0;et<ze.locationSize;et++)X(ze.location+et,yt.meshPerAttribute);W.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let et=0;et<ze.locationSize;et++)O(ze.location+et);i.bindBuffer(i.ARRAY_BUFFER,je);for(let et=0;et<ze.locationSize;et++)N(ze.location+et,Be/ze.locationSize,nt,ue,te*ct,(Yt+Be/ze.locationSize*et)*ct,it)}else{if(se.isInstancedBufferAttribute){for(let yt=0;yt<ze.locationSize;yt++)X(ze.location+yt,se.meshPerAttribute);W.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let yt=0;yt<ze.locationSize;yt++)O(ze.location+yt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let yt=0;yt<ze.locationSize;yt++)N(ze.location+yt,Be/ze.locationSize,nt,ue,Be*ct,Be/ze.locationSize*yt*ct,it)}}else if(ve!==void 0){const ue=ve[be];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(ze.location,ue);break;case 3:i.vertexAttrib3fv(ze.location,ue);break;case 4:i.vertexAttrib4fv(ze.location,ue);break;default:i.vertexAttrib1fv(ze.location,ue)}}}}k()}function R(){ee();for(const W in l){const Z=l[W];for(const $ in Z){const J=Z[$];for(const ce in J)x(J[ce].object),delete J[ce];delete Z[$]}delete l[W]}}function I(W){if(l[W.id]===void 0)return;const Z=l[W.id];for(const $ in Z){const J=Z[$];for(const ce in J)x(J[ce].object),delete J[ce];delete Z[$]}delete l[W.id]}function z(W){for(const Z in l){const $=l[Z];if($[W.id]===void 0)continue;const J=$[W.id];for(const ce in J)x(J[ce].object),delete J[ce];delete $[W.id]}}function ee(){pe(),d=!0,f!==u&&(f=u,v(f.object))}function pe(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:ee,resetDefaultState:pe,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:O,disableUnusedAttributes:k}}function Gv(i,e,t,n){const r=n.isWebGL2;let s;function c(d){s=d}function l(d,p){i.drawArrays(s,d,p),t.update(p,s,1)}function u(d,p,m){if(m===0)return;let v,x;if(r)v=i,x="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,d,p,m),t.update(p,s,m)}function f(d,p,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<m;x++)this.render(d[x],p[x]);else{v.multiDrawArraysWEBGL(s,d,0,p,0,m);let x=0;for(let E=0;E<m;E++)x+=p[E];t.update(x,s,1)}}this.setMode=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function Vv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=c||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,O=c||e.has("OES_texture_float"),X=w&&O,k=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:E,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:w,floatFragmentTextures:O,floatVertexTextures:X,maxSamples:k}}function Wv(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new si,l=new St,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||n!==0||r;return r=m,n=p.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=d(p,m,0)},this.setState=function(p,m,v){const x=p.clippingPlanes,E=p.clipIntersection,y=p.clipShadows,_=i.get(p);if(!r||x===null||x.length===0||s&&!y)s?d(null):f();else{const P=s?0:n,w=P*4;let O=_.clippingState||null;u.value=O,O=d(x,m,w,v);for(let X=0;X!==w;++X)O[X]=t[X];_.clippingState=O,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,m,v,x){const E=p!==null?p.length:0;let y=null;if(E!==0){if(y=u.value,x!==!0||y===null){const _=v+E*4,P=m.matrixWorldInverse;l.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let w=0,O=v;w!==E;++w,O+=4)c.copy(p[w]).applyMatrix4(P,l),c.normal.toArray(y,O),y[O+3]=c.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function $v(i){let e=new WeakMap;function t(c,l){return l===xl?c.mapping=ss:l===Ml&&(c.mapping=os),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===xl||l===Ml)if(e.has(c)){const u=e.get(c).texture;return t(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const f=new ig(u.height/2);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",r),t(f.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xv extends Lf{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,c=s+f*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,c,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kr=4,uu=[.125,.215,.35,.446,.526,.582],ur=20,Za=new Xv,fu=new Lt;let Ka=null,Ja=0,Qa=0;const lr=(1+Math.sqrt(5))/2,jr=1/lr,hu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,lr,jr),new H(0,lr,-jr),new H(jr,0,lr),new H(-jr,0,lr),new H(lr,jr,0),new H(-lr,jr,0)];class du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Ja,Qa),e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ns,format:li,colorSpace:Fi,depthBuffer:!1},r=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(s)),this._blurMaterial=qv(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,r){const l=new Zn(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(fu),d.toneMapping=Ji,d.autoClear=!1;const v=new Ui({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),x=new hn(new br,v);let E=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,E=!0):(v.color.copy(fu),E=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(l.up.set(0,u[_],0),l.lookAt(f[_],0,0)):P===1?(l.up.set(0,0,u[_]),l.lookAt(0,f[_],0)):(l.up.set(0,u[_],0),l.lookAt(0,0,f[_]));const w=this._cubeSize;To(r,P*w,_>2?w:0,w,w),d.setRenderTarget(r),E&&d.render(x,l),d.render(e,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new hn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;To(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=hu[(r-1)%hu.length];this._blur(e,r-1,r,s,c)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,l){const u=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new hn(this._lodPlanes[r],f),m=f.uniforms,v=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*ur-1),E=s/x,y=isFinite(s)?1+Math.floor(d*E):ur;y>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ur}`);const _=[];let P=0;for(let N=0;N<ur;++N){const K=N/E,R=Math.exp(-K*K/2);_.push(R),N===0?P+=R:N<y&&(P+=2*R)}for(let N=0;N<_.length;N++)_[N]=_[N]/P;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=_,m.latitudinal.value=c==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:w}=this;m.dTheta.value=x,m.mipInt.value=w-n;const O=this._sizeLods[r],X=3*O*(r>w-Kr?r-w+Kr:0),k=4*(this._cubeSize-O);To(t,X,k,3*O,2*O),u.setRenderTarget(t),u.render(p,Za)}}function Yv(i){const e=[],t=[],n=[];let r=i;const s=i-Kr+1+uu.length;for(let c=0;c<s;c++){const l=Math.pow(2,r);t.push(l);let u=1/l;c>i-Kr?u=uu[c-i+Kr-1]:c===0&&(u=0),n.push(u);const f=1/(l-2),d=-f,p=1+f,m=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,x=6,E=3,y=2,_=1,P=new Float32Array(E*x*v),w=new Float32Array(y*x*v),O=new Float32Array(_*x*v);for(let k=0;k<v;k++){const N=k%3*2/3-1,K=k>2?0:-1,R=[N,K,0,N+2/3,K,0,N+2/3,K+1,0,N,K,0,N+2/3,K+1,0,N,K+1,0];P.set(R,E*x*k),w.set(m,y*x*k);const I=[k,k,k,k,k,k];O.set(I,_*x*k)}const X=new Xt;X.setAttribute("position",new Gt(P,E)),X.setAttribute("uv",new Gt(w,y)),X.setAttribute("faceIndex",new Gt(O,_)),e.push(X),r>Kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pu(i,e,t){const n=new mr(i,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qv(i,e,t){const n=new Float32Array(ur),r=new H(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function mu(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function gu(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jv(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===xl||u===Ml,d=u===ss||u===os;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new du(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new du(i));const m=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",s),m.texture}else return null}}}return l}function r(l){let u=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Zv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Kv(i,e,t,n){const r={},s=new WeakMap;function c(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const E=m.morphAttributes[x];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}m.removeEventListener("dispose",c),delete r[m.id];const v=s.get(m);v&&(e.remove(v),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return r[m.id]===!0||(m.addEventListener("dispose",c),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER);const v=p.morphAttributes;for(const x in v){const E=v[x];for(let y=0,_=E.length;y<_;y++)e.update(E[y],i.ARRAY_BUFFER)}}function f(p){const m=[],v=p.index,x=p.attributes.position;let E=0;if(v!==null){const P=v.array;E=v.version;for(let w=0,O=P.length;w<O;w+=3){const X=P[w+0],k=P[w+1],N=P[w+2];m.push(X,k,k,N,N,X)}}else if(x!==void 0){const P=x.array;E=x.version;for(let w=0,O=P.length/3-1;w<O;w+=3){const X=w+0,k=w+1,N=w+2;m.push(X,k,k,N,N,X)}}else return;const y=new(Sf(m)?Rf:Cf)(m,1);y.version=E;const _=s.get(p);_&&e.remove(_),s.set(p,y)}function d(p){const m=s.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&f(p)}else f(p);return s.get(p)}return{get:l,update:u,getWireframeAttribute:d}}function Jv(i,e,t,n){const r=n.isWebGL2;let s;function c(v){s=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,x){i.drawElements(s,x,l,v*u),t.update(x,s,1)}function p(v,x,E){if(E===0)return;let y,_;if(r)y=i,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,x,l,v*u,E),t.update(x,s,E)}function m(v,x,E){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<E;_++)this.render(v[_]/u,x[_]);else{y.multiDrawElementsWEBGL(s,x,0,l,v,0,E);let _=0;for(let P=0;P<E;P++)_+=x[P];t.update(_,s,1)}}this.setMode=c,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function Qv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function e0(i,e){return i[0]-e[0]}function t0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function n0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,c=new vn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function u(f,d,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let E=s.get(d);if(E===void 0||E.count!==x){let W=function(){ee.dispose(),s.delete(d),d.removeEventListener("dispose",W)};E!==void 0&&E.texture.dispose();const P=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,O=d.morphAttributes.color!==void 0,X=d.morphAttributes.position||[],k=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let K=0;P===!0&&(K=1),w===!0&&(K=2),O===!0&&(K=3);let R=d.attributes.position.count*K,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const z=new Float32Array(R*I*4*x),ee=new Tf(z,R,I,x);ee.type=Zi,ee.needsUpdate=!0;const pe=K*4;for(let Z=0;Z<x;Z++){const $=X[Z],J=k[Z],ce=N[Z],le=R*I*4*Z;for(let ve=0;ve<$.count;ve++){const be=ve*pe;P===!0&&(c.fromBufferAttribute($,ve),z[le+be+0]=c.x,z[le+be+1]=c.y,z[le+be+2]=c.z,z[le+be+3]=0),w===!0&&(c.fromBufferAttribute(J,ve),z[le+be+4]=c.x,z[le+be+5]=c.y,z[le+be+6]=c.z,z[le+be+7]=0),O===!0&&(c.fromBufferAttribute(ce,ve),z[le+be+8]=c.x,z[le+be+9]=c.y,z[le+be+10]=c.z,z[le+be+11]=ce.itemSize===4?c.w:1)}}E={count:x,texture:ee,size:new We(R,I)},s.set(d,E),d.addEventListener("dispose",W)}let y=0;for(let P=0;P<m.length;P++)y+=m[P];const _=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",_),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",E.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",E.size)}else{const v=m===void 0?0:m.length;let x=n[d.id];if(x===void 0||x.length!==v){x=[];for(let w=0;w<v;w++)x[w]=[w,0];n[d.id]=x}for(let w=0;w<v;w++){const O=x[w];O[0]=w,O[1]=m[w]}x.sort(t0);for(let w=0;w<8;w++)w<v&&x[w][1]?(l[w][0]=x[w][0],l[w][1]=x[w][1]):(l[w][0]=Number.MAX_SAFE_INTEGER,l[w][1]=0);l.sort(e0);const E=d.morphAttributes.position,y=d.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const O=l[w],X=O[0],k=O[1];X!==Number.MAX_SAFE_INTEGER&&k?(E&&d.getAttribute("morphTarget"+w)!==E[X]&&d.setAttribute("morphTarget"+w,E[X]),y&&d.getAttribute("morphNormal"+w)!==y[X]&&d.setAttribute("morphNormal"+w,y[X]),r[w]=k,_+=k):(E&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),y&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const P=d.morphTargetsRelative?1:1-_;p.getUniforms().setValue(i,"morphTargetBaseInfluence",P),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function i0(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,d=u.geometry,p=e.get(u,d);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function c(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:c}}class If extends Vn{constructor(e,t,n,r,s,c,l,u,f,d){if(d=d!==void 0?d:hr,d!==hr&&d!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===hr&&(n=ji),n===void 0&&d===as&&(n=fr),super(null,r,s,c,l,u,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Rn,this.minFilter=u!==void 0?u:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nf=new Vn,Of=new If(1,1);Of.compareFunction=Ef;const Bf=new Tf,kf=new zm,zf=new Df,_u=[],vu=[],yu=new Float32Array(16),xu=new Float32Array(9),Mu=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),e!==0){n.toArray(s,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(s,l)}return s}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function r0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Mu.set(n),i.uniformMatrix2fv(this.addr,!1,Mu),pn(t,n)}}function c0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),pn(t,n)}}function u0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),pn(t,n)}}function f0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function m0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function y0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Of:Nf;t.setTexture2D(e||s,r)}function x0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kf,r)}function M0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zf,r)}function E0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bf,r)}function S0(i){switch(i){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return h0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return E0}}function b0(i,e){i.uniform1fv(this.addr,e)}function w0(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function T0(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function A0(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function C0(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P0(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function L0(i,e){i.uniform1iv(this.addr,e)}function D0(i,e){i.uniform2iv(this.addr,e)}function F0(i,e){i.uniform3iv(this.addr,e)}function U0(i,e){i.uniform4iv(this.addr,e)}function I0(i,e){i.uniform1uiv(this.addr,e)}function N0(i,e){i.uniform2uiv(this.addr,e)}function O0(i,e){i.uniform3uiv(this.addr,e)}function B0(i,e){i.uniform4uiv(this.addr,e)}function k0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Nf,s[c])}function z0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||kf,s[c])}function H0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||zf,s[c])}function G0(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Bf,s[c])}function V0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return T0;case 35666:return A0;case 35674:return C0;case 35675:return R0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return F0;case 35669:case 35673:return U0;case 5125:return I0;case 36294:return N0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}class W0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class $0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}}class X0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function Eu(i,e){i.seq.push(e),i.map[e.id]=e}function Y0(i,e,t){const n=i.name,r=n.length;for(el.lastIndex=0;;){const s=el.exec(n),c=el.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&c+2===r){Eu(t,f===void 0?new W0(l,i,e):new $0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new X0(l),Eu(t,p)),t=p}}}class zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);Y0(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Su(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const q0=37297;let j0=0;function Z0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function K0(i){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(i);let n;switch(e===t?n="":e===$o&&t===Wo?n="LinearDisplayP3ToLinearSRGB":e===Wo&&t===$o&&(n="LinearSRGBToLinearDisplayP3"),i){case Fi:case ea:return[n,"LinearTransferOETF"];case _n:case Nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Z0(i.getShaderSource(e),c)}else return r}function J0(i,e){const t=K0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Q0(i,e){let t;switch(e){case Zp:t="Linear";break;case Kp:t="Reinhard";break;case Jp:t="OptimizedCineon";break;case Qp:t="ACESFilmic";break;case tm:t="AgX";break;case em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ey(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jr).join(`
`)}function ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Jr(i){return i!==""}function wu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(ry,oy)}const sy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function oy(i,e){let t=Et[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(ay,ly)}function ly(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function uy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hf:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function dy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function py(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,l=t.fragmentShader;const u=cy(t),f=uy(t),d=fy(t),p=hy(t),m=dy(t),v=t.isWebGL2?"":ey(t),x=ty(t),E=ny(s),y=r.createProgram();let _,P,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Jr).join(`
`),_.length>0&&(_+=`
`),P=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Jr).join(`
`),P.length>0&&(P+=`
`)):(_=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),P=[v,Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Et.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,J0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),c=Al(c),c=wu(c,t),c=Tu(c,t),l=Al(l),l=wu(l,t),l=Tu(l,t),c=Au(c),l=Au(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const O=w+_+c,X=w+P+l,k=Su(r,r.VERTEX_SHADER,O),N=Su(r,r.FRAGMENT_SHADER,X);r.attachShader(y,k),r.attachShader(y,N),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function K(ee){if(i.debug.checkShaderErrors){const pe=r.getProgramInfoLog(y).trim(),W=r.getShaderInfoLog(k).trim(),Z=r.getShaderInfoLog(N).trim();let $=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,k,N);else{const ce=bu(r,k,"vertex"),le=bu(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+pe+`
`+ce+`
`+le)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(W===""||Z==="")&&(J=!1);J&&(ee.diagnostics={runnable:$,programLog:pe,vertexShader:{log:W,prefix:_},fragmentShader:{log:Z,prefix:P}})}r.deleteShader(k),r.deleteShader(N),R=new zo(r,y),I=iy(r,y)}let R;this.getUniforms=function(){return R===void 0&&K(this),R};let I;this.getAttributes=function(){return I===void 0&&K(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(y,q0)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=N,this}let my=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _y(e),t.set(e,n)),n}}class _y{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}}function vy(i,e,t,n,r,s,c){const l=new Bl,u=new gy,f=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function y(R,I,z,ee,pe){const W=ee.fog,Z=pe.geometry,$=R.isMeshStandardMaterial?ee.environment:null,J=(R.isMeshStandardMaterial?t:e).get(R.envMap||$),ce=J&&J.mapping===Qo?J.image.height:null,le=x[R.type];R.precision!==null&&(v=r.getMaxPrecision(R.precision),v!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",v,"instead."));const ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,be=ve!==void 0?ve.length:0;let ze=0;Z.morphAttributes.position!==void 0&&(ze=1),Z.morphAttributes.normal!==void 0&&(ze=2),Z.morphAttributes.color!==void 0&&(ze=3);let se,ue,Be,Te;if(le){const zt=di[le];se=zt.vertexShader,ue=zt.fragmentShader}else se=R.vertexShader,ue=R.fragmentShader,u.update(R),Be=u.getVertexShaderID(R),Te=u.getFragmentShaderID(R);const je=i.getRenderTarget(),nt=pe.isInstancedMesh===!0,ct=pe.isBatchedMesh===!0,it=!!R.map,yt=!!R.matcap,te=!!J,Yt=!!R.aoMap,et=!!R.lightMap,rt=!!R.bumpMap,$e=!!R.normalMap,Rt=!!R.displacementMap,ut=!!R.emissiveMap,F=!!R.metalnessMap,C=!!R.roughnessMap,Q=R.anisotropy>0,ye=R.clearcoat>0,me=R.iridescence>0,we=R.sheen>0,Ne=R.transmission>0,Fe=Q&&!!R.anisotropyMap,he=ye&&!!R.clearcoatMap,Xe=ye&&!!R.clearcoatNormalMap,Qe=ye&&!!R.clearcoatRoughnessMap,Me=me&&!!R.iridescenceMap,bt=me&&!!R.iridescenceThicknessMap,gt=we&&!!R.sheenColorMap,ht=we&&!!R.sheenRoughnessMap,Ke=!!R.specularMap,Ge=!!R.specularColorMap,B=!!R.specularIntensityMap,Re=Ne&&!!R.transmissionMap,Ze=Ne&&!!R.thicknessMap,Ve=!!R.gradientMap,Ee=!!R.alphaMap,V=R.alphaTest>0,Se=!!R.alphaHash,_e=!!R.extensions,Ue=!!Z.attributes.uv1,qe=!!Z.attributes.uv2,xt=!!Z.attributes.uv3;let Mt=Ji;return R.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(Mt=i.toneMapping),{isWebGL2:d,shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:se,fragmentShader:ue,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:Te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:v,batching:ct,instancing:nt,instancingColor:nt&&pe.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Fi,map:it,matcap:yt,envMap:te,envMapMode:te&&J.mapping,envMapCubeUVHeight:ce,aoMap:Yt,lightMap:et,bumpMap:rt,normalMap:$e,displacementMap:m&&Rt,emissiveMap:ut,normalMapObjectSpace:$e&&R.normalMapType===dm,normalMapTangentSpace:$e&&R.normalMapType===Il,metalnessMap:F,roughnessMap:C,anisotropy:Q,anisotropyMap:Fe,clearcoat:ye,clearcoatMap:he,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Qe,iridescence:me,iridescenceMap:Me,iridescenceThicknessMap:bt,sheen:we,sheenColorMap:gt,sheenRoughnessMap:ht,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:B,transmission:Ne,transmissionMap:Re,thicknessMap:Ze,gradientMap:Ve,opaque:R.transparent===!1&&R.blending===is,alphaMap:Ee,alphaTest:V,alphaHash:Se,combine:R.combine,mapUv:it&&E(R.map.channel),aoMapUv:Yt&&E(R.aoMap.channel),lightMapUv:et&&E(R.lightMap.channel),bumpMapUv:rt&&E(R.bumpMap.channel),normalMapUv:$e&&E(R.normalMap.channel),displacementMapUv:Rt&&E(R.displacementMap.channel),emissiveMapUv:ut&&E(R.emissiveMap.channel),metalnessMapUv:F&&E(R.metalnessMap.channel),roughnessMapUv:C&&E(R.roughnessMap.channel),anisotropyMapUv:Fe&&E(R.anisotropyMap.channel),clearcoatMapUv:he&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:ht&&E(R.sheenRoughnessMap.channel),specularMapUv:Ke&&E(R.specularMap.channel),specularColorMapUv:Ge&&E(R.specularColorMap.channel),specularIntensityMapUv:B&&E(R.specularIntensityMap.channel),transmissionMapUv:Re&&E(R.transmissionMap.channel),thicknessMapUv:Ze&&E(R.thicknessMap.channel),alphaMapUv:Ee&&E(R.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($e||Q),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:qe,vertexUv3s:xt,pointsUvs:pe.isPoints===!0&&!!Z.attributes.uv&&(it||Ee),fog:!!W,useFog:R.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:pe.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:it&&R.map.isVideoTexture===!0&&It.getTransfer(R.map.colorSpace)===Vt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===oi,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:_e&&R.extensions.derivatives===!0,extensionFragDepth:_e&&R.extensions.fragDepth===!0,extensionDrawBuffers:_e&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&R.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)I.push(z),I.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(P(I,R),w(I,R),I.push(i.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function P(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function w(R,I){l.disableAll(),I.isWebGL2&&l.enable(0),I.supportsVertexTextures&&l.enable(1),I.instancing&&l.enable(2),I.instancingColor&&l.enable(3),I.matcap&&l.enable(4),I.envMap&&l.enable(5),I.normalMapObjectSpace&&l.enable(6),I.normalMapTangentSpace&&l.enable(7),I.clearcoat&&l.enable(8),I.iridescence&&l.enable(9),I.alphaTest&&l.enable(10),I.vertexColors&&l.enable(11),I.vertexAlphas&&l.enable(12),I.vertexUv1s&&l.enable(13),I.vertexUv2s&&l.enable(14),I.vertexUv3s&&l.enable(15),I.vertexTangents&&l.enable(16),I.anisotropy&&l.enable(17),I.alphaHash&&l.enable(18),I.batching&&l.enable(19),R.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.skinning&&l.enable(4),I.morphTargets&&l.enable(5),I.morphNormals&&l.enable(6),I.morphColors&&l.enable(7),I.premultipliedAlpha&&l.enable(8),I.shadowMapEnabled&&l.enable(9),I.useLegacyLights&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.transmission&&l.enable(15),I.sheen&&l.enable(16),I.opaque&&l.enable(17),I.pointsUvs&&l.enable(18),I.decodeVideoTexture&&l.enable(19),R.push(l.mask)}function O(R){const I=x[R.type];let z;if(I){const ee=di[I];z=Qm.clone(ee.uniforms)}else z=R.uniforms;return z}function X(R,I){let z;for(let ee=0,pe=f.length;ee<pe;ee++){const W=f[ee];if(W.cacheKey===I){z=W,++z.usedTimes;break}}return z===void 0&&(z=new py(i,I,R,s),f.push(z)),z}function k(R){if(--R.usedTimes===0){const I=f.indexOf(R);f[I]=f[f.length-1],f.pop(),R.destroy()}}function N(R){u.remove(R)}function K(){u.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:O,acquireProgram:X,releaseProgram:k,releaseShaderCache:N,programs:f,dispose:K}}function yy(){let i=new WeakMap;function e(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function t(s){i.delete(s)}function n(s,c,l){i.get(s)[c]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function xy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(p,m,v,x,E,y){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:v,groupOrder:x,renderOrder:p.renderOrder,z:E,group:y},i[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=v,_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=E,_.group=y),e++,_}function l(p,m,v,x,E,y){const _=c(p,m,v,x,E,y);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):t.push(_)}function u(p,m,v,x,E,y){const _=c(p,m,v,x,E,y);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):t.unshift(_)}function f(p,m){t.length>1&&t.sort(p||xy),n.length>1&&n.sort(m||Ru),r.length>1&&r.sort(m||Ru)}function d(){for(let p=e,m=i.length;p<m;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:d,sort:f}}function My(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new Pu,i.set(n,[c])):r>=s.length?(c=new Pu,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Lt};break;case"SpotLight":t={position:new H,direction:new H,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let by=0;function wy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ty(i,e){const t=new Ey,n=Sy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);const s=new H,c=new Jt,l=new Jt;function u(d,p){let m=0,v=0,x=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let E=0,y=0,_=0,P=0,w=0,O=0,X=0,k=0,N=0,K=0,R=0;d.sort(wy);const I=p===!0?Math.PI:1;for(let ee=0,pe=d.length;ee<pe;ee++){const W=d[ee],Z=W.color,$=W.intensity,J=W.distance,ce=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)m+=Z.r*$*I,v+=Z.g*$*I,x+=Z.b*$*I;else if(W.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(W.sh.coefficients[le],$);R++}else if(W.isDirectionalLight){const le=t.get(W);if(le.color.copy(W.color).multiplyScalar(W.intensity*I),W.castShadow){const ve=W.shadow,be=n.get(W);be.shadowBias=ve.bias,be.shadowNormalBias=ve.normalBias,be.shadowRadius=ve.radius,be.shadowMapSize=ve.mapSize,r.directionalShadow[E]=be,r.directionalShadowMap[E]=ce,r.directionalShadowMatrix[E]=W.shadow.matrix,O++}r.directional[E]=le,E++}else if(W.isSpotLight){const le=t.get(W);le.position.setFromMatrixPosition(W.matrixWorld),le.color.copy(Z).multiplyScalar($*I),le.distance=J,le.coneCos=Math.cos(W.angle),le.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),le.decay=W.decay,r.spot[_]=le;const ve=W.shadow;if(W.map&&(r.spotLightMap[N]=W.map,N++,ve.updateMatrices(W),W.castShadow&&K++),r.spotLightMatrix[_]=ve.matrix,W.castShadow){const be=n.get(W);be.shadowBias=ve.bias,be.shadowNormalBias=ve.normalBias,be.shadowRadius=ve.radius,be.shadowMapSize=ve.mapSize,r.spotShadow[_]=be,r.spotShadowMap[_]=ce,k++}_++}else if(W.isRectAreaLight){const le=t.get(W);le.color.copy(Z).multiplyScalar($),le.halfWidth.set(W.width*.5,0,0),le.halfHeight.set(0,W.height*.5,0),r.rectArea[P]=le,P++}else if(W.isPointLight){const le=t.get(W);if(le.color.copy(W.color).multiplyScalar(W.intensity*I),le.distance=W.distance,le.decay=W.decay,W.castShadow){const ve=W.shadow,be=n.get(W);be.shadowBias=ve.bias,be.shadowNormalBias=ve.normalBias,be.shadowRadius=ve.radius,be.shadowMapSize=ve.mapSize,be.shadowCameraNear=ve.camera.near,be.shadowCameraFar=ve.camera.far,r.pointShadow[y]=be,r.pointShadowMap[y]=ce,r.pointShadowMatrix[y]=W.shadow.matrix,X++}r.point[y]=le,y++}else if(W.isHemisphereLight){const le=t.get(W);le.skyColor.copy(W.color).multiplyScalar($*I),le.groundColor.copy(W.groundColor).multiplyScalar($*I),r.hemi[w]=le,w++}}P>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==E||z.pointLength!==y||z.spotLength!==_||z.rectAreaLength!==P||z.hemiLength!==w||z.numDirectionalShadows!==O||z.numPointShadows!==X||z.numSpotShadows!==k||z.numSpotMaps!==N||z.numLightProbes!==R)&&(r.directional.length=E,r.spot.length=_,r.rectArea.length=P,r.point.length=y,r.hemi.length=w,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=X,r.pointShadowMap.length=X,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=X,r.spotLightMatrix.length=k+N-K,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=R,z.directionalLength=E,z.pointLength=y,z.spotLength=_,z.rectAreaLength=P,z.hemiLength=w,z.numDirectionalShadows=O,z.numPointShadows=X,z.numSpotShadows=k,z.numSpotMaps=N,z.numLightProbes=R,r.version=by++)}function f(d,p){let m=0,v=0,x=0,E=0,y=0;const _=p.matrixWorldInverse;for(let P=0,w=d.length;P<w;P++){const O=d[P];if(O.isDirectionalLight){const X=r.directional[m];X.direction.setFromMatrixPosition(O.matrixWorld),s.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(s),X.direction.transformDirection(_),m++}else if(O.isSpotLight){const X=r.spot[x];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(_),X.direction.setFromMatrixPosition(O.matrixWorld),s.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(s),X.direction.transformDirection(_),x++}else if(O.isRectAreaLight){const X=r.rectArea[E];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(_),l.identity(),c.copy(O.matrixWorld),c.premultiply(_),l.extractRotation(c),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),X.halfWidth.applyMatrix4(l),X.halfHeight.applyMatrix4(l),E++}else if(O.isPointLight){const X=r.point[v];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(_),v++}else if(O.isHemisphereLight){const X=r.hemi[y];X.direction.setFromMatrixPosition(O.matrixWorld),X.direction.transformDirection(_),y++}}}return{setup:u,setupView:f,state:r}}function Lu(i,e){const t=new Ty(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function c(p){n.push(p)}function l(p){r.push(p)}function u(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:f,pushLight:c,pushShadow:l}}function Ay(i,e){let t=new WeakMap;function n(s,c=0){const l=t.get(s);let u;return l===void 0?(u=new Lu(i,e),t.set(s,[u])):c>=l.length?(u=new Lu(i,e),l.push(u)):u=l[c],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cy extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ry extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dy(i,e,t){let n=new Ff;const r=new We,s=new We,c=new vn,l=new Cy({depthPacking:hm}),u=new Ry,f={},d=t.maxTextureSize,p={[tr]:In,[In]:tr,[oi]:oi},m=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Py,fragmentShader:Ly}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const x=new Xt;x.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let _=this.type;this.render=function(k,N,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const R=i.getRenderTarget(),I=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(Ki),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const pe=_!==Pi&&this.type===Pi,W=_===Pi&&this.type!==Pi;for(let Z=0,$=k.length;Z<$;Z++){const J=k[Z],ce=J.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;r.copy(ce.mapSize);const le=ce.getFrameExtents();if(r.multiply(le),s.copy(ce.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/le.x),r.x=s.x*le.x,ce.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/le.y),r.y=s.y*le.y,ce.mapSize.y=s.y)),ce.map===null||pe===!0||W===!0){const be=this.type!==Pi?{minFilter:Rn,magFilter:Rn}:{};ce.map!==null&&ce.map.dispose(),ce.map=new mr(r.x,r.y,be),ce.map.texture.name=J.name+".shadowMap",ce.camera.updateProjectionMatrix()}i.setRenderTarget(ce.map),i.clear();const ve=ce.getViewportCount();for(let be=0;be<ve;be++){const ze=ce.getViewport(be);c.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),ee.viewport(c),ce.updateMatrices(J,be),n=ce.getFrustum(),O(N,K,ce.camera,J,this.type)}ce.isPointLightShadow!==!0&&this.type===Pi&&P(ce,K),ce.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(R,I,z)};function P(k,N){const K=e.update(E);m.defines.VSM_SAMPLES!==k.blurSamples&&(m.defines.VSM_SAMPLES=k.blurSamples,v.defines.VSM_SAMPLES=k.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new mr(r.x,r.y)),m.uniforms.shadow_pass.value=k.map.texture,m.uniforms.resolution.value=k.mapSize,m.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(N,null,K,m,E,null),v.uniforms.shadow_pass.value=k.mapPass.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(N,null,K,v,E,null)}function w(k,N,K,R){let I=null;const z=K.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)I=z;else if(I=K.isPointLight===!0?u:l,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ee=I.uuid,pe=N.uuid;let W=f[ee];W===void 0&&(W={},f[ee]=W);let Z=W[pe];Z===void 0&&(Z=I.clone(),W[pe]=Z,N.addEventListener("dispose",X)),I=Z}if(I.visible=N.visible,I.wireframe=N.wireframe,R===Pi?I.side=N.shadowSide!==null?N.shadowSide:N.side:I.side=N.shadowSide!==null?N.shadowSide:p[N.side],I.alphaMap=N.alphaMap,I.alphaTest=N.alphaTest,I.map=N.map,I.clipShadows=N.clipShadows,I.clippingPlanes=N.clippingPlanes,I.clipIntersection=N.clipIntersection,I.displacementMap=N.displacementMap,I.displacementScale=N.displacementScale,I.displacementBias=N.displacementBias,I.wireframeLinewidth=N.wireframeLinewidth,I.linewidth=N.linewidth,K.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const ee=i.properties.get(I);ee.light=K}return I}function O(k,N,K,R,I){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&I===Pi)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,k.matrixWorld);const pe=e.update(k),W=k.material;if(Array.isArray(W)){const Z=pe.groups;for(let $=0,J=Z.length;$<J;$++){const ce=Z[$],le=W[ce.materialIndex];if(le&&le.visible){const ve=w(k,le,R,I);k.onBeforeShadow(i,k,N,K,pe,ve,ce),i.renderBufferDirect(K,null,pe,ve,k,ce),k.onAfterShadow(i,k,N,K,pe,ve,ce)}}}else if(W.visible){const Z=w(k,W,R,I);k.onBeforeShadow(i,k,N,K,pe,Z,null),i.renderBufferDirect(K,null,pe,Z,k,null),k.onAfterShadow(i,k,N,K,pe,Z,null)}}const ee=k.children;for(let pe=0,W=ee.length;pe<W;pe++)O(ee[pe],N,K,R,I)}function X(k){k.target.removeEventListener("dispose",X);for(const K in f){const R=f[K],I=k.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function Fy(i,e,t){const n=t.isWebGL2;function r(){let V=!1;const Se=new vn;let _e=null;const Ue=new vn(0,0,0,0);return{setMask:function(qe){_e!==qe&&!V&&(i.colorMask(qe,qe,qe,qe),_e=qe)},setLocked:function(qe){V=qe},setClear:function(qe,xt,Mt,Nt,zt){zt===!0&&(qe*=Nt,xt*=Nt,Mt*=Nt),Se.set(qe,xt,Mt,Nt),Ue.equals(Se)===!1&&(i.clearColor(qe,xt,Mt,Nt),Ue.copy(Se))},reset:function(){V=!1,_e=null,Ue.set(-1,0,0,0)}}}function s(){let V=!1,Se=null,_e=null,Ue=null;return{setTest:function(qe){qe?ct(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(qe){Se!==qe&&!V&&(i.depthMask(qe),Se=qe)},setFunc:function(qe){if(_e!==qe){switch(qe){case Hp:i.depthFunc(i.NEVER);break;case Gp:i.depthFunc(i.ALWAYS);break;case Vp:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case Wp:i.depthFunc(i.EQUAL);break;case $p:i.depthFunc(i.GEQUAL);break;case Xp:i.depthFunc(i.GREATER);break;case Yp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=qe}},setLocked:function(qe){V=qe},setClear:function(qe){Ue!==qe&&(i.clearDepth(qe),Ue=qe)},reset:function(){V=!1,Se=null,_e=null,Ue=null}}}function c(){let V=!1,Se=null,_e=null,Ue=null,qe=null,xt=null,Mt=null,Nt=null,zt=null;return{setTest:function(_t){V||(_t?ct(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(_t){Se!==_t&&!V&&(i.stencilMask(_t),Se=_t)},setFunc:function(_t,Tt,Dn){(_e!==_t||Ue!==Tt||qe!==Dn)&&(i.stencilFunc(_t,Tt,Dn),_e=_t,Ue=Tt,qe=Dn)},setOp:function(_t,Tt,Dn){(xt!==_t||Mt!==Tt||Nt!==Dn)&&(i.stencilOp(_t,Tt,Dn),xt=_t,Mt=Tt,Nt=Dn)},setLocked:function(_t){V=_t},setClear:function(_t){zt!==_t&&(i.clearStencil(_t),zt=_t)},reset:function(){V=!1,Se=null,_e=null,Ue=null,qe=null,xt=null,Mt=null,Nt=null,zt=null}}}const l=new r,u=new s,f=new c,d=new WeakMap,p=new WeakMap;let m={},v={},x=new WeakMap,E=[],y=null,_=!1,P=null,w=null,O=null,X=null,k=null,N=null,K=null,R=new Lt(0,0,0),I=0,z=!1,ee=null,pe=null,W=null,Z=null,$=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,le=0;const ve=i.getParameter(i.VERSION);ve.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ve)[1]),ce=le>=1):ve.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),ce=le>=2);let be=null,ze={};const se=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Be=new vn().fromArray(se),Te=new vn().fromArray(ue);function je(V,Se,_e,Ue){const qe=new Uint8Array(4),xt=i.createTexture();i.bindTexture(V,xt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<_e;Mt++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,qe):i.texImage2D(Se+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qe);return xt}const nt={};nt[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(nt[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ct(i.DEPTH_TEST),u.setFunc(Go),ut(!1),F(hc),ct(i.CULL_FACE),$e(Ki);function ct(V){m[V]!==!0&&(i.enable(V),m[V]=!0)}function it(V){m[V]!==!1&&(i.disable(V),m[V]=!1)}function yt(V,Se){return v[V]!==Se?(i.bindFramebuffer(V,Se),v[V]=Se,n&&(V===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Se),V===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function te(V,Se){let _e=E,Ue=!1;if(V)if(_e=x.get(Se),_e===void 0&&(_e=[],x.set(Se,_e)),V.isWebGLMultipleRenderTargets){const qe=V.texture;if(_e.length!==qe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Mt=qe.length;xt<Mt;xt++)_e[xt]=i.COLOR_ATTACHMENT0+xt;_e.length=qe.length,Ue=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Ue=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Yt(V){return y!==V?(i.useProgram(V),y=V,!0):!1}const et={[cr]:i.FUNC_ADD,[Tp]:i.FUNC_SUBTRACT,[Ap]:i.FUNC_REVERSE_SUBTRACT};if(n)et[gc]=i.MIN,et[_c]=i.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(et[gc]=V.MIN_EXT,et[_c]=V.MAX_EXT)}const rt={[Cp]:i.ZERO,[Rp]:i.ONE,[Pp]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Np]:i.SRC_ALPHA_SATURATE,[Up]:i.DST_COLOR,[Dp]:i.DST_ALPHA,[Lp]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[Ip]:i.ONE_MINUS_DST_COLOR,[Fp]:i.ONE_MINUS_DST_ALPHA,[Op]:i.CONSTANT_COLOR,[Bp]:i.ONE_MINUS_CONSTANT_COLOR,[kp]:i.CONSTANT_ALPHA,[zp]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(V,Se,_e,Ue,qe,xt,Mt,Nt,zt,_t){if(V===Ki){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),V!==wp){if(V!==P||_t!==z){if((w!==cr||k!==cr)&&(i.blendEquation(i.FUNC_ADD),w=cr,k=cr),_t)switch(V){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,X=null,N=null,K=null,R.set(0,0,0),I=0,P=V,z=_t}return}qe=qe||Se,xt=xt||_e,Mt=Mt||Ue,(Se!==w||qe!==k)&&(i.blendEquationSeparate(et[Se],et[qe]),w=Se,k=qe),(_e!==O||Ue!==X||xt!==N||Mt!==K)&&(i.blendFuncSeparate(rt[_e],rt[Ue],rt[xt],rt[Mt]),O=_e,X=Ue,N=xt,K=Mt),(Nt.equals(R)===!1||zt!==I)&&(i.blendColor(Nt.r,Nt.g,Nt.b,zt),R.copy(Nt),I=zt),P=V,z=!1}function Rt(V,Se){V.side===oi?it(i.CULL_FACE):ct(i.CULL_FACE);let _e=V.side===In;Se&&(_e=!_e),ut(_e),V.blending===is&&V.transparent===!1?$e(Ki):$e(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Ue=V.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){ee!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),ee=V)}function F(V){V!==Ep?(ct(i.CULL_FACE),V!==pe&&(V===hc?i.cullFace(i.BACK):V===Sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),pe=V}function C(V){V!==W&&(ce&&i.lineWidth(V),W=V)}function Q(V,Se,_e){V?(ct(i.POLYGON_OFFSET_FILL),(Z!==Se||$!==_e)&&(i.polygonOffset(Se,_e),Z=Se,$=_e)):it(i.POLYGON_OFFSET_FILL)}function ye(V){V?ct(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function me(V){V===void 0&&(V=i.TEXTURE0+J-1),be!==V&&(i.activeTexture(V),be=V)}function we(V,Se,_e){_e===void 0&&(be===null?_e=i.TEXTURE0+J-1:_e=be);let Ue=ze[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},ze[_e]=Ue),(Ue.type!==V||Ue.texture!==Se)&&(be!==_e&&(i.activeTexture(_e),be=_e),i.bindTexture(V,Se||nt[V]),Ue.type=V,Ue.texture=Se)}function Ne(){const V=ze[be];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(V){Be.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Be.copy(V))}function Re(V){Te.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Te.copy(V))}function Ze(V,Se){let _e=p.get(Se);_e===void 0&&(_e=new WeakMap,p.set(Se,_e));let Ue=_e.get(V);Ue===void 0&&(Ue=i.getUniformBlockIndex(Se,V.name),_e.set(V,Ue))}function Ve(V,Se){const Ue=p.get(Se).get(V);d.get(Se)!==Ue&&(i.uniformBlockBinding(Se,Ue,V.__bindingPointIndex),d.set(Se,Ue))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},be=null,ze={},v={},x=new WeakMap,E=[],y=null,_=!1,P=null,w=null,O=null,X=null,k=null,N=null,K=null,R=new Lt(0,0,0),I=0,z=!1,ee=null,pe=null,W=null,Z=null,$=null,Be.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ct,disable:it,bindFramebuffer:yt,drawBuffers:te,useProgram:Yt,setBlending:$e,setMaterial:Rt,setFlipSided:ut,setCullFace:F,setLineWidth:C,setPolygonOffset:Q,setScissorTest:ye,activeTexture:me,bindTexture:we,unbindTexture:Ne,compressedTexImage2D:Fe,compressedTexImage3D:he,texImage2D:Ke,texImage3D:Ge,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:gt,texStorage3D:ht,texSubImage2D:Xe,texSubImage3D:Qe,compressedTexSubImage2D:Me,compressedTexSubImage3D:bt,scissor:B,viewport:Re,reset:Ee}}function Uy(i,e,t,n,r,s,c){const l=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,C){return v?new OffscreenCanvas(F,C):qo("canvas")}function E(F,C,Q,ye){let me=1;if((F.width>ye||F.height>ye)&&(me=ye/Math.max(F.width,F.height)),me<1||C===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const we=C?Yo:Math.floor,Ne=we(me*F.width),Fe=we(me*F.height);p===void 0&&(p=x(Ne,Fe));const he=Q?x(Ne,Fe):p;return he.width=Ne,he.height=Fe,he.getContext("2d").drawImage(F,0,0,Ne,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Ne+"x"+Fe+")."),he}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function y(F){return wl(F.width)&&wl(F.height)}function _(F){return l?!1:F.wrapS!==ai||F.wrapT!==ai||F.minFilter!==Rn&&F.minFilter!==qn}function P(F,C){return F.generateMipmaps&&C&&F.minFilter!==Rn&&F.minFilter!==qn}function w(F){i.generateMipmap(F)}function O(F,C,Q,ye,me=!1){if(l===!1)return C;if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let we=C;if(C===i.RED&&(Q===i.FLOAT&&(we=i.R32F),Q===i.HALF_FLOAT&&(we=i.R16F),Q===i.UNSIGNED_BYTE&&(we=i.R8)),C===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(we=i.R8UI),Q===i.UNSIGNED_SHORT&&(we=i.R16UI),Q===i.UNSIGNED_INT&&(we=i.R32UI),Q===i.BYTE&&(we=i.R8I),Q===i.SHORT&&(we=i.R16I),Q===i.INT&&(we=i.R32I)),C===i.RG&&(Q===i.FLOAT&&(we=i.RG32F),Q===i.HALF_FLOAT&&(we=i.RG16F),Q===i.UNSIGNED_BYTE&&(we=i.RG8)),C===i.RGBA){const Ne=me?Vo:It.getTransfer(ye);Q===i.FLOAT&&(we=i.RGBA32F),Q===i.HALF_FLOAT&&(we=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(we=Ne===Vt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function X(F,C,Q){return P(F,Q)===!0||F.isFramebufferTexture&&F.minFilter!==Rn&&F.minFilter!==qn?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function k(F){return F===Rn||F===vc||F===Aa?i.NEAREST:i.LINEAR}function N(F){const C=F.target;C.removeEventListener("dispose",N),R(C),C.isVideoTexture&&d.delete(C)}function K(F){const C=F.target;C.removeEventListener("dispose",K),z(C)}function R(F){const C=n.get(F);if(C.__webglInit===void 0)return;const Q=F.source,ye=m.get(Q);if(ye){const me=ye[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&I(F),Object.keys(ye).length===0&&m.delete(Q)}n.remove(F)}function I(F){const C=n.get(F);i.deleteTexture(C.__webglTexture);const Q=F.source,ye=m.get(Q);delete ye[C.__cacheKey],c.memory.textures--}function z(F){const C=F.texture,Q=n.get(F),ye=n.get(C);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),c.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(Q.__webglFramebuffer[me]))for(let we=0;we<Q.__webglFramebuffer[me].length;we++)i.deleteFramebuffer(Q.__webglFramebuffer[me][we]);else i.deleteFramebuffer(Q.__webglFramebuffer[me]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[me])}else{if(Array.isArray(Q.__webglFramebuffer))for(let me=0;me<Q.__webglFramebuffer.length;me++)i.deleteFramebuffer(Q.__webglFramebuffer[me]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let me=0;me<Q.__webglColorRenderbuffer.length;me++)Q.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[me]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let me=0,we=C.length;me<we;me++){const Ne=n.get(C[me]);Ne.__webglTexture&&(i.deleteTexture(Ne.__webglTexture),c.memory.textures--),n.remove(C[me])}n.remove(C),n.remove(F)}let ee=0;function pe(){ee=0}function W(){const F=ee;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),ee+=1,F}function Z(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function $(F,C){const Q=n.get(F);if(F.isVideoTexture&&Rt(F),F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){const ye=F.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Q,F,C);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+C)}function J(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){Be(Q,F,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+C)}function ce(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){Be(Q,F,C);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+C)}function le(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){Te(Q,F,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+C)}const ve={[El]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},be={[Rn]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Aa]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[nm]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},ze={[pm]:i.NEVER,[xm]:i.ALWAYS,[mm]:i.LESS,[Ef]:i.LEQUAL,[gm]:i.EQUAL,[ym]:i.GEQUAL,[_m]:i.GREATER,[vm]:i.NOTEQUAL};function se(F,C,Q){if(Q?(i.texParameteri(F,i.TEXTURE_WRAP_S,ve[C.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ve[C.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ve[C.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,be[C.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,be[C.minFilter])):(i.texParameteri(F,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(F,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==ai||C.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(F,i.TEXTURE_MAG_FILTER,k(C.magFilter)),i.texParameteri(F,i.TEXTURE_MIN_FILTER,k(C.minFilter)),C.minFilter!==Rn&&C.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ze[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Rn||C.minFilter!==Aa&&C.minFilter!==Is||C.type===Zi&&e.has("OES_texture_float_linear")===!1||l===!1&&C.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(F,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ue(F,C){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",N));const ye=C.source;let me=m.get(ye);me===void 0&&(me={},m.set(ye,me));const we=Z(C);if(we!==F.__cacheKey){me[we]===void 0&&(me[we]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),me[we].usedTimes++;const Ne=me[F.__cacheKey];Ne!==void 0&&(me[F.__cacheKey].usedTimes--,Ne.usedTimes===0&&I(C)),F.__cacheKey=we,F.__webglTexture=me[we].texture}return Q}function Be(F,C,Q){let ye=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ye=i.TEXTURE_3D);const me=ue(F,C),we=C.source;t.bindTexture(ye,F.__webglTexture,i.TEXTURE0+Q);const Ne=n.get(we);if(we.version!==Ne.__version||me===!0){t.activeTexture(i.TEXTURE0+Q);const Fe=It.getPrimaries(It.workingColorSpace),he=C.colorSpace===Kn?null:It.getPrimaries(C.colorSpace),Xe=C.colorSpace===Kn||Fe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Qe=_(C)&&y(C.image)===!1;let Me=E(C.image,Qe,!1,r.maxTextureSize);Me=ut(C,Me);const bt=y(Me)||l,gt=s.convert(C.format,C.colorSpace);let ht=s.convert(C.type),Ke=O(C.internalFormat,gt,ht,C.colorSpace,C.isVideoTexture);se(ye,C,bt);let Ge;const B=C.mipmaps,Re=l&&C.isVideoTexture!==!0&&Ke!==xf,Ze=Ne.__version===void 0||me===!0,Ve=X(C,Me,bt);if(C.isDepthTexture)Ke=i.DEPTH_COMPONENT,l?C.type===Zi?Ke=i.DEPTH_COMPONENT32F:C.type===ji?Ke=i.DEPTH_COMPONENT24:C.type===fr?Ke=i.DEPTH24_STENCIL8:Ke=i.DEPTH_COMPONENT16:C.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===hr&&Ke===i.DEPTH_COMPONENT&&C.type!==Ul&&C.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=ji,ht=s.convert(C.type)),C.format===as&&Ke===i.DEPTH_COMPONENT&&(Ke=i.DEPTH_STENCIL,C.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=fr,ht=s.convert(C.type))),Ze&&(Re?t.texStorage2D(i.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Ke,Me.width,Me.height,0,gt,ht,null));else if(C.isDataTexture)if(B.length>0&&bt){Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,B[0].width,B[0].height);for(let Ee=0,V=B.length;Ee<V;Ee++)Ge=B[Ee],Re?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ge.width,Ge.height,gt,ht,Ge.data):t.texImage2D(i.TEXTURE_2D,Ee,Ke,Ge.width,Ge.height,0,gt,ht,Ge.data);C.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,Me.width,Me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,gt,ht,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,Me.width,Me.height,0,gt,ht,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Re&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ke,B[0].width,B[0].height,Me.depth);for(let Ee=0,V=B.length;Ee<V;Ee++)Ge=B[Ee],C.format!==li?gt!==null?Re?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,Ge.width,Ge.height,Me.depth,gt,Ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,Ke,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,Ge.width,Ge.height,Me.depth,gt,ht,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,Ke,Ge.width,Ge.height,Me.depth,0,gt,ht,Ge.data)}else{Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,B[0].width,B[0].height);for(let Ee=0,V=B.length;Ee<V;Ee++)Ge=B[Ee],C.format!==li?gt!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,Ge.width,Ge.height,gt,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,Ke,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ge.width,Ge.height,gt,ht,Ge.data):t.texImage2D(i.TEXTURE_2D,Ee,Ke,Ge.width,Ge.height,0,gt,ht,Ge.data)}else if(C.isDataArrayTexture)Re?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ke,Me.width,Me.height,Me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,gt,ht,Me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,gt,ht,Me.data);else if(C.isData3DTexture)Re?(Ze&&t.texStorage3D(i.TEXTURE_3D,Ve,Ke,Me.width,Me.height,Me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,gt,ht,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,gt,ht,Me.data);else if(C.isFramebufferTexture){if(Ze)if(Re)t.texStorage2D(i.TEXTURE_2D,Ve,Ke,Me.width,Me.height);else{let Ee=Me.width,V=Me.height;for(let Se=0;Se<Ve;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ke,Ee,V,0,gt,ht,null),Ee>>=1,V>>=1}}else if(B.length>0&&bt){Re&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,B[0].width,B[0].height);for(let Ee=0,V=B.length;Ee<V;Ee++)Ge=B[Ee],Re?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,gt,ht,Ge):t.texImage2D(i.TEXTURE_2D,Ee,Ke,gt,ht,Ge);C.generateMipmaps=!1}else Re?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,Ke,Me.width,Me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,ht,Me)):t.texImage2D(i.TEXTURE_2D,0,Ke,gt,ht,Me);P(C,bt)&&w(ye),Ne.__version=we.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Te(F,C,Q){if(C.image.length!==6)return;const ye=ue(F,C),me=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Q);const we=n.get(me);if(me.version!==we.__version||ye===!0){t.activeTexture(i.TEXTURE0+Q);const Ne=It.getPrimaries(It.workingColorSpace),Fe=C.colorSpace===Kn?null:It.getPrimaries(C.colorSpace),he=C.colorSpace===Kn||Ne===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Xe=C.isCompressedTexture||C.image[0].isCompressedTexture,Qe=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let Ee=0;Ee<6;Ee++)!Xe&&!Qe?Me[Ee]=E(C.image[Ee],!1,!0,r.maxCubemapSize):Me[Ee]=Qe?C.image[Ee].image:C.image[Ee],Me[Ee]=ut(C,Me[Ee]);const bt=Me[0],gt=y(bt)||l,ht=s.convert(C.format,C.colorSpace),Ke=s.convert(C.type),Ge=O(C.internalFormat,ht,Ke,C.colorSpace),B=l&&C.isVideoTexture!==!0,Re=we.__version===void 0||ye===!0;let Ze=X(C,bt,gt);se(i.TEXTURE_CUBE_MAP,C,gt);let Ve;if(Xe){B&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Ge,bt.width,bt.height);for(let Ee=0;Ee<6;Ee++){Ve=Me[Ee].mipmaps;for(let V=0;V<Ve.length;V++){const Se=Ve[V];C.format!==li?ht!==null?B?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V,0,0,Se.width,Se.height,ht,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V,Ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V,0,0,Se.width,Se.height,ht,Ke,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V,Ge,Se.width,Se.height,0,ht,Ke,Se.data)}}}else{Ve=C.mipmaps,B&&Re&&(Ve.length>0&&Ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Ge,Me[0].width,Me[0].height));for(let Ee=0;Ee<6;Ee++)if(Qe){B?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Me[Ee].width,Me[Ee].height,ht,Ke,Me[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ge,Me[Ee].width,Me[Ee].height,0,ht,Ke,Me[Ee].data);for(let V=0;V<Ve.length;V++){const _e=Ve[V].image[Ee].image;B?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V+1,0,0,_e.width,_e.height,ht,Ke,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V+1,Ge,_e.width,_e.height,0,ht,Ke,_e.data)}}else{B?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ht,Ke,Me[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ge,ht,Ke,Me[Ee]);for(let V=0;V<Ve.length;V++){const Se=Ve[V];B?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V+1,0,0,ht,Ke,Se.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,V+1,Ge,ht,Ke,Se.image[Ee])}}}P(C,gt)&&w(i.TEXTURE_CUBE_MAP),we.__version=me.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function je(F,C,Q,ye,me,we){const Ne=s.convert(Q.format,Q.colorSpace),Fe=s.convert(Q.type),he=O(Q.internalFormat,Ne,Fe,Q.colorSpace);if(!n.get(C).__hasExternalTextures){const Qe=Math.max(1,C.width>>we),Me=Math.max(1,C.height>>we);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,we,he,Qe,Me,C.depth,0,Ne,Fe,null):t.texImage2D(me,we,he,Qe,Me,0,Ne,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),$e(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,me,n.get(Q).__webglTexture,0,rt(C)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,me,n.get(Q).__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(F,C,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),C.depthBuffer&&!C.stencilBuffer){let ye=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||$e(C)){const me=C.depthTexture;me&&me.isDepthTexture&&(me.type===Zi?ye=i.DEPTH_COMPONENT32F:me.type===ji&&(ye=i.DEPTH_COMPONENT24));const we=rt(C);$e(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ye,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ye,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,F)}else if(C.depthBuffer&&C.stencilBuffer){const ye=rt(C);Q&&$e(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,C.width,C.height):$e(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,F)}else{const ye=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let me=0;me<ye.length;me++){const we=ye[me],Ne=s.convert(we.format,we.colorSpace),Fe=s.convert(we.type),he=O(we.internalFormat,Ne,Fe,we.colorSpace),Xe=rt(C);Q&&$e(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,he,C.width,C.height):$e(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,he,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,he,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),$(C.depthTexture,0);const ye=n.get(C.depthTexture).__webglTexture,me=rt(C);if(C.depthTexture.format===hr)$e(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(C.depthTexture.format===as)$e(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function it(F){const C=n.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ct(C.__webglFramebuffer,F)}else if(Q){C.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ye]),C.__webglDepthbuffer[ye]=i.createRenderbuffer(),nt(C.__webglDepthbuffer[ye],F,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),nt(C.__webglDepthbuffer,F,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(F,C,Q){const ye=n.get(F);C!==void 0&&je(ye.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&it(F)}function te(F){const C=F.texture,Q=n.get(F),ye=n.get(C);F.addEventListener("dispose",K),F.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=C.version,c.memory.textures++);const me=F.isWebGLCubeRenderTarget===!0,we=F.isWebGLMultipleRenderTargets===!0,Ne=y(F)||l;if(me){Q.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(l&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Fe]=[];for(let he=0;he<C.mipmaps.length;he++)Q.__webglFramebuffer[Fe][he]=i.createFramebuffer()}else Q.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(l&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Fe=0;Fe<C.mipmaps.length;Fe++)Q.__webglFramebuffer[Fe]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(we)if(r.drawBuffers){const Fe=F.texture;for(let he=0,Xe=Fe.length;he<Xe;he++){const Qe=n.get(Fe[he]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&F.samples>0&&$e(F)===!1){const Fe=we?C:[C];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<Fe.length;he++){const Xe=Fe[he];Q.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const Qe=s.convert(Xe.format,Xe.colorSpace),Me=s.convert(Xe.type),bt=O(Xe.internalFormat,Qe,Me,Xe.colorSpace,F.isXRRenderTarget===!0),gt=rt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,bt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),se(i.TEXTURE_CUBE_MAP,C,Ne);for(let Fe=0;Fe<6;Fe++)if(l&&C.mipmaps&&C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)je(Q.__webglFramebuffer[Fe][he],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,he);else je(Q.__webglFramebuffer[Fe],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);P(C,Ne)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){const Fe=F.texture;for(let he=0,Xe=Fe.length;he<Xe;he++){const Qe=Fe[he],Me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),se(i.TEXTURE_2D,Qe,Ne),je(Q.__webglFramebuffer,F,Qe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),P(Qe,Ne)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(l?Fe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Fe,ye.__webglTexture),se(Fe,C,Ne),l&&C.mipmaps&&C.mipmaps.length>0)for(let he=0;he<C.mipmaps.length;he++)je(Q.__webglFramebuffer[he],F,C,i.COLOR_ATTACHMENT0,Fe,he);else je(Q.__webglFramebuffer,F,C,i.COLOR_ATTACHMENT0,Fe,0);P(C,Ne)&&w(Fe),t.unbindTexture()}F.depthBuffer&&it(F)}function Yt(F){const C=y(F)||l,Q=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let ye=0,me=Q.length;ye<me;ye++){const we=Q[ye];if(P(we,C)){const Ne=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(we).__webglTexture;t.bindTexture(Ne,Fe),w(Ne),t.unbindTexture()}}}function et(F){if(l&&F.samples>0&&$e(F)===!1){const C=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Q=F.width,ye=F.height;let me=i.COLOR_BUFFER_BIT;const we=[],Ne=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(F),he=F.isWebGLMultipleRenderTargets===!0;if(he)for(let Xe=0;Xe<C.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Xe=0;Xe<C.length;Xe++){we.push(i.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&we.push(Ne);const Qe=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(Qe===!1&&(F.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Xe]),Qe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ne]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ne])),he){const Me=n.get(C[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,Q,ye,0,0,Q,ye,me,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Xe=0;Xe<C.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Xe]);const Qe=n.get(C[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function rt(F){return Math.min(r.maxSamples,F.samples)}function $e(F){const C=n.get(F);return l&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Rt(F){const C=c.render.frame;d.get(F)!==C&&(d.set(F,C),F.update())}function ut(F,C){const Q=F.colorSpace,ye=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===bl||Q!==Fi&&Q!==Kn&&(It.getTransfer(Q)===Vt?l===!1?e.has("EXT_sRGB")===!0&&ye===li?(F.format=bl,F.minFilter=qn,F.generateMipmaps=!1):C=bf.sRGBToLinear(C):(ye!==li||me!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}this.allocateTextureUnit=W,this.resetTextureUnits=pe,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=yt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=je,this.useMultisampledRTT=$e}function Iy(i,e,t){const n=t.isWebGL2;function r(s,c=Kn){let l;const u=It.getTransfer(c);if(s===Qi)return i.UNSIGNED_BYTE;if(s===mf)return i.UNSIGNED_SHORT_4_4_4_4;if(s===gf)return i.UNSIGNED_SHORT_5_5_5_1;if(s===im)return i.BYTE;if(s===rm)return i.SHORT;if(s===Ul)return i.UNSIGNED_SHORT;if(s===pf)return i.INT;if(s===ji)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===Ns)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===sm)return i.ALPHA;if(s===li)return i.RGBA;if(s===om)return i.LUMINANCE;if(s===am)return i.LUMINANCE_ALPHA;if(s===hr)return i.DEPTH_COMPONENT;if(s===as)return i.DEPTH_STENCIL;if(s===bl)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===lm)return i.RED;if(s===_f)return i.RED_INTEGER;if(s===cm)return i.RG;if(s===vf)return i.RG_INTEGER;if(s===yf)return i.RGBA_INTEGER;if(s===Ca||s===Ra||s===Pa||s===La)if(u===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ca)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ra)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===La)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ca)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ra)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pa)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===La)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yc||s===xc||s===Mc||s===Ec)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===yc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ec)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xf)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sc||s===bc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Sc)return u===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===bc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wc||s===Tc||s===Ac||s===Cc||s===Rc||s===Pc||s===Lc||s===Dc||s===Fc||s===Uc||s===Ic||s===Nc||s===Oc||s===Bc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===wc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ac)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ic)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bc)return u===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Da||s===kc||s===zc)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Da)return u===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zc)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===um||s===Hc||s===Gc||s===Vc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Da)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Hc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Ny extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),_=this._getHandJoint(f,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=d.position.distanceTo(p.position),v=.02,x=.005;f.inputState.pinching&&m>v+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=v-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class By extends Mr{constructor(e,t){super();const n=this;let r=null,s=1,c=null,l="local-floor",u=1,f=null,d=null,p=null,m=null,v=null,x=null;const E=t.getContextAttributes();let y=null,_=null;const P=[],w=[],O=new We;let X=null;const k=new Zn;k.layers.enable(1),k.viewport=new vn;const N=new Zn;N.layers.enable(2),N.viewport=new vn;const K=[k,N],R=new Ny;R.layers.enable(1),R.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ue=P[se];return ue===void 0&&(ue=new tl,P[se]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(se){let ue=P[se];return ue===void 0&&(ue=new tl,P[se]=ue),ue.getGripSpace()},this.getHand=function(se){let ue=P[se];return ue===void 0&&(ue=new tl,P[se]=ue),ue.getHandSpace()};function ee(se){const ue=w.indexOf(se.inputSource);if(ue===-1)return;const Be=P[ue];Be!==void 0&&(Be.update(se.inputSource,se.frame,f||c),Be.dispatchEvent({type:se.type,data:se.inputSource}))}function pe(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",W);for(let se=0;se<P.length;se++){const ue=w[se];ue!==null&&(w[se]=null,P[se].disconnect(ue))}I=null,z=null,e.setRenderTarget(y),v=null,m=null,p=null,r=null,_=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){l=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),_=new mr(v.framebufferWidth,v.framebufferHeight,{format:li,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let ue=null,Be=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=E.stencil?as:hr,Be=E.stencil?fr:ji);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(je),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),_=new mr(m.textureWidth,m.textureHeight,{format:li,type:Qi,depthTexture:new If(m.textureWidth,m.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const nt=e.properties.get(_);nt.__ignoreDepthValues=m.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(u),f=null,c=await r.requestReferenceSpace(l),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(se){for(let ue=0;ue<se.removed.length;ue++){const Be=se.removed[ue],Te=w.indexOf(Be);Te>=0&&(w[Te]=null,P[Te].disconnect(Be))}for(let ue=0;ue<se.added.length;ue++){const Be=se.added[ue];let Te=w.indexOf(Be);if(Te===-1){for(let nt=0;nt<P.length;nt++)if(nt>=w.length){w.push(Be),Te=nt;break}else if(w[nt]===null){w[nt]=Be,Te=nt;break}if(Te===-1)break}const je=P[Te];je&&je.connect(Be)}}const Z=new H,$=new H;function J(se,ue,Be){Z.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(Be.matrixWorld);const Te=Z.distanceTo($),je=ue.projectionMatrix.elements,nt=Be.projectionMatrix.elements,ct=je[14]/(je[10]-1),it=je[14]/(je[10]+1),yt=(je[9]+1)/je[5],te=(je[9]-1)/je[5],Yt=(je[8]-1)/je[0],et=(nt[8]+1)/nt[0],rt=ct*Yt,$e=ct*et,Rt=Te/(-Yt+et),ut=Rt*-Yt;ue.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ut),se.translateZ(Rt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const F=ct+Rt,C=it+Rt,Q=rt-ut,ye=$e+(Te-ut),me=yt*it/C*F,we=te*it/C*F;se.projectionMatrix.makePerspective(Q,ye,me,we,F,C),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function ce(se,ue){ue===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ue.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;R.near=N.near=k.near=se.near,R.far=N.far=k.far=se.far,(I!==R.near||z!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,z=R.far);const ue=se.parent,Be=R.cameras;ce(R,ue);for(let Te=0;Te<Be.length;Te++)ce(Be[Te],ue);Be.length===2?J(R,k,N):R.projectionMatrix.copy(k.projectionMatrix),le(se,R,ue)};function le(se,ue,Be){Be===null?se.matrix.copy(ue.matrixWorld):(se.matrix.copy(Be.matrixWorld),se.matrix.invert(),se.matrix.multiply(ue.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ue.projectionMatrix),se.projectionMatrixInverse.copy(ue.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Os*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&v===null))return u},this.setFoveation=function(se){u=se,m!==null&&(m.fixedFoveation=se),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=se)};let ve=null;function be(se,ue){if(d=ue.getViewerPose(f||c),x=ue,d!==null){const Be=d.views;v!==null&&(e.setRenderTargetFramebuffer(_,v.framebuffer),e.setRenderTarget(_));let Te=!1;Be.length!==R.cameras.length&&(R.cameras.length=0,Te=!0);for(let je=0;je<Be.length;je++){const nt=Be[je];let ct=null;if(v!==null)ct=v.getViewport(nt);else{const yt=p.getViewSubImage(m,nt);ct=yt.viewport,je===0&&(e.setRenderTargetTextures(_,yt.colorTexture,m.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(_))}let it=K[je];it===void 0&&(it=new Zn,it.layers.enable(je),it.viewport=new vn,K[je]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ct.x,ct.y,ct.width,ct.height),je===0&&(R.matrix.copy(it.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Te===!0&&R.cameras.push(it)}}for(let Be=0;Be<P.length;Be++){const Te=w[Be],je=P[Be];Te!==null&&je!==void 0&&je.update(Te,ue,f||c)}ve&&ve(se,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),x=null}const ze=new Uf;ze.setAnimationLoop(be),this.setAnimationLoop=function(se){ve=se},this.dispose=function(){}}}function ky(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,Pf(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,P,w,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),p(y,_)):_.isMeshPhongMaterial?(s(y,_),d(y,_)):_.isMeshStandardMaterial?(s(y,_),m(y,_),_.isMeshPhysicalMaterial&&v(y,_,O)):_.isMeshMatcapMaterial?(s(y,_),x(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),E(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&l(y,_)):_.isPointsMaterial?u(y,_,P,w):_.isSpriteMaterial?f(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*w,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function l(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,P,w){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=w*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function v(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const P=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zy(i,e,t,n){let r={},s={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(P,w){const O=w.program;n.uniformBlockBinding(P,O)}function f(P,w){let O=r[P.id];O===void 0&&(x(P),O=d(P),r[P.id]=O,P.addEventListener("dispose",y));const X=w.program;n.updateUBOMapping(P,X);const k=e.render.frame;s[P.id]!==k&&(m(P),s[P.id]=k)}function d(P){const w=p();P.__bindingPointIndex=w;const O=i.createBuffer(),X=P.__size,k=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,X,k),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,O),O}function p(){for(let P=0;P<l;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const w=r[P.id],O=P.uniforms,X=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let k=0,N=O.length;k<N;k++){const K=Array.isArray(O[k])?O[k]:[O[k]];for(let R=0,I=K.length;R<I;R++){const z=K[R];if(v(z,k,R,X)===!0){const ee=z.__offset,pe=Array.isArray(z.value)?z.value:[z.value];let W=0;for(let Z=0;Z<pe.length;Z++){const $=pe[Z],J=E($);typeof $=="number"||typeof $=="boolean"?(z.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,ee+W,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=0,z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=0,z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=0):($.toArray(z.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(P,w,O,X){const k=P.value,N=w+"_"+O;if(X[N]===void 0)return typeof k=="number"||typeof k=="boolean"?X[N]=k:X[N]=k.clone(),!0;{const K=X[N];if(typeof k=="number"||typeof k=="boolean"){if(K!==k)return X[N]=k,!0}else if(K.equals(k)===!1)return K.copy(k),!0}return!1}function x(P){const w=P.uniforms;let O=0;const X=16;for(let N=0,K=w.length;N<K;N++){const R=Array.isArray(w[N])?w[N]:[w[N]];for(let I=0,z=R.length;I<z;I++){const ee=R[I],pe=Array.isArray(ee.value)?ee.value:[ee.value];for(let W=0,Z=pe.length;W<Z;W++){const $=pe[W],J=E($),ce=O%X;ce!==0&&X-ce<J.boundary&&(O+=X-ce),ee.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=O,O+=J.storage}}}const k=O%X;return k>0&&(O+=X-k),P.__size=O,P.__cache={},this}function E(P){const w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function y(P){const w=P.target;w.removeEventListener("dispose",y);const O=c.indexOf(w.__bindingPointIndex);c.splice(O,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function _(){for(const P in r)i.deleteBuffer(r[P]);c=[],r={},s={}}return{bind:u,update:f,dispose:_}}class Hf{constructor(e={}){const{canvas:t=Im(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=c;const v=new Uint32Array(4),x=new Int32Array(4);let E=null,y=null;const _=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const w=this;let O=!1,X=0,k=0,N=null,K=-1,R=null;const I=new vn,z=new vn;let ee=null;const pe=new Lt(0);let W=0,Z=t.width,$=t.height,J=1,ce=null,le=null;const ve=new vn(0,0,Z,$),be=new vn(0,0,Z,$);let ze=!1;const se=new Ff;let ue=!1,Be=!1,Te=null;const je=new Jt,nt=new We,ct=new H,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return N===null?J:1}let te=n;function Yt(L,j){for(let re=0;re<L.length;re++){const ne=L[re],ie=t.getContext(ne,j);if(ie!==null)return ie}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Se,!1),te===null){const j=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&j.shift(),te=Yt(j,L),te===null)throw Yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let et,rt,$e,Rt,ut,F,C,Q,ye,me,we,Ne,Fe,he,Xe,Qe,Me,bt,gt,ht,Ke,Ge,B,Re;function Ze(){et=new Zv(te),rt=new Vv(te,et,e),et.init(rt),Ge=new Iy(te,et,rt),$e=new Fy(te,et,rt),Rt=new Qv(te),ut=new yy,F=new Uy(te,et,$e,ut,rt,Ge,Rt),C=new $v(w),Q=new jv(w),ye=new og(te,rt),B=new Hv(te,et,ye,rt),me=new Kv(te,ye,Rt,B),we=new i0(te,me,ye,Rt),gt=new n0(te,rt,F),Qe=new Wv(ut),Ne=new vy(w,C,Q,et,rt,B,Qe),Fe=new ky(w,ut),he=new My,Xe=new Ay(et,rt),bt=new zv(w,C,Q,$e,we,m,u),Me=new Dy(w,we,rt),Re=new zy(te,Rt,rt,$e),ht=new Gv(te,et,Rt,rt),Ke=new Jv(te,et,Rt,rt),Rt.programs=Ne.programs,w.capabilities=rt,w.extensions=et,w.properties=ut,w.renderLists=he,w.shadowMap=Me,w.state=$e,w.info=Rt}Ze();const Ve=new By(w,te);this.xr=Ve,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const L=et.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=et.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(L){L!==void 0&&(J=L,this.setSize(Z,$,!1))},this.getSize=function(L){return L.set(Z,$)},this.setSize=function(L,j,re=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,$=j,t.width=Math.floor(L*J),t.height=Math.floor(j*J),re===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(Z*J,$*J).floor()},this.setDrawingBufferSize=function(L,j,re){Z=L,$=j,J=re,t.width=Math.floor(L*re),t.height=Math.floor(j*re),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(ve)},this.setViewport=function(L,j,re,ne){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,j,re,ne),$e.viewport(I.copy(ve).multiplyScalar(J).floor())},this.getScissor=function(L){return L.copy(be)},this.setScissor=function(L,j,re,ne){L.isVector4?be.set(L.x,L.y,L.z,L.w):be.set(L,j,re,ne),$e.scissor(z.copy(be).multiplyScalar(J).floor())},this.getScissorTest=function(){return ze},this.setScissorTest=function(L){$e.setScissorTest(ze=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){le=L},this.getClearColor=function(L){return L.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(L=!0,j=!0,re=!0){let ne=0;if(L){let ie=!1;if(N!==null){const ke=N.texture.format;ie=ke===yf||ke===vf||ke===_f}if(ie){const ke=N.texture.type,Pe=ke===Qi||ke===ji||ke===Ul||ke===fr||ke===mf||ke===gf,ot=bt.getClearColor(),st=bt.getClearAlpha(),dt=ot.r,pt=ot.g,at=ot.b;Pe?(v[0]=dt,v[1]=pt,v[2]=at,v[3]=st,te.clearBufferuiv(te.COLOR,0,v)):(x[0]=dt,x[1]=pt,x[2]=at,x[3]=st,te.clearBufferiv(te.COLOR,0,x))}else ne|=te.COLOR_BUFFER_BIT}j&&(ne|=te.DEPTH_BUFFER_BIT),re&&(ne|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),he.dispose(),Xe.dispose(),ut.dispose(),C.dispose(),Q.dispose(),we.dispose(),B.dispose(),Re.dispose(),Ne.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",zt),Ve.removeEventListener("sessionend",_t),Te&&(Te.dispose(),Te=null),Tt.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const L=Rt.autoReset,j=Me.enabled,re=Me.autoUpdate,ne=Me.needsUpdate,ie=Me.type;Ze(),Rt.autoReset=L,Me.enabled=j,Me.autoUpdate=re,Me.needsUpdate=ne,Me.type=ie}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _e(L){const j=L.target;j.removeEventListener("dispose",_e),Ue(j)}function Ue(L){qe(L),ut.remove(L)}function qe(L){const j=ut.get(L).programs;j!==void 0&&(j.forEach(function(re){Ne.releaseProgram(re)}),L.isShaderMaterial&&Ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,re,ne,ie,ke){j===null&&(j=it);const Pe=ie.isMesh&&ie.matrixWorld.determinant()<0,ot=Bi(L,j,re,ne,ie);$e.setMaterial(ne,Pe);let st=re.index,dt=1;if(ne.wireframe===!0){if(st=me.getWireframeAttribute(re),st===void 0)return;dt=2}const pt=re.drawRange,at=re.attributes.position;let Ot=pt.start*dt,an=(pt.start+pt.count)*dt;ke!==null&&(Ot=Math.max(Ot,ke.start*dt),an=Math.min(an,(ke.start+ke.count)*dt)),st!==null?(Ot=Math.max(Ot,0),an=Math.min(an,st.count)):at!=null&&(Ot=Math.max(Ot,0),an=Math.min(an,at.count));const qt=an-Ot;if(qt<0||qt===1/0)return;B.setup(ie,ne,ot,re,st);let nn,Pt=ht;if(st!==null&&(nn=ye.get(st),Pt=Ke,Pt.setIndex(nn)),ie.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*yt()),Pt.setMode(te.LINES)):Pt.setMode(te.TRIANGLES);else if(ie.isLine){let mt=ne.linewidth;mt===void 0&&(mt=1),$e.setLineWidth(mt*yt()),ie.isLineSegments?Pt.setMode(te.LINES):ie.isLineLoop?Pt.setMode(te.LINE_LOOP):Pt.setMode(te.LINE_STRIP)}else ie.isPoints?Pt.setMode(te.POINTS):ie.isSprite&&Pt.setMode(te.TRIANGLES);if(ie.isBatchedMesh)Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Pt.renderInstances(Ot,qt,ie.count);else if(re.isInstancedBufferGeometry){const mt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,tt=Math.min(re.instanceCount,mt);Pt.renderInstances(Ot,qt,tt)}else Pt.render(Ot,qt)};function xt(L,j,re){L.transparent===!0&&L.side===oi&&L.forceSinglePass===!1?(L.side=In,L.needsUpdate=!0,Ni(L,j,re),L.side=tr,L.needsUpdate=!0,Ni(L,j,re),L.side=oi):Ni(L,j,re)}this.compile=function(L,j,re=null){re===null&&(re=L),y=Xe.get(re),y.init(),P.push(y),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),L!==re&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),y.setupLights(w._useLegacyLights);const ne=new Set;return L.traverse(function(ie){const ke=ie.material;if(ke)if(Array.isArray(ke))for(let Pe=0;Pe<ke.length;Pe++){const ot=ke[Pe];xt(ot,re,ie),ne.add(ot)}else xt(ke,re,ie),ne.add(ke)}),P.pop(),y=null,ne},this.compileAsync=function(L,j,re=null){const ne=this.compile(L,j,re);return new Promise(ie=>{function ke(){if(ne.forEach(function(Pe){ut.get(Pe).currentProgram.isReady()&&ne.delete(Pe)}),ne.size===0){ie(L);return}setTimeout(ke,10)}et.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Mt=null;function Nt(L){Mt&&Mt(L)}function zt(){Tt.stop()}function _t(){Tt.start()}const Tt=new Uf;Tt.setAnimationLoop(Nt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(L){Mt=L,Ve.setAnimationLoop(L),L===null?Tt.stop():Tt.start()},Ve.addEventListener("sessionstart",zt),Ve.addEventListener("sessionend",_t),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(j),j=Ve.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,j,N),y=Xe.get(L,P.length),y.init(),P.push(y),je.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),se.setFromProjectionMatrix(je),Be=this.localClippingEnabled,ue=Qe.init(this.clippingPlanes,Be),E=he.get(L,_.length),E.init(),_.push(E),Dn(L,j,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(ce,le),this.info.render.frame++,ue===!0&&Qe.beginShadows();const re=y.state.shadowsArray;if(Me.render(re,L,j),ue===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(E,L),y.setupLights(w._useLegacyLights),j.isArrayCamera){const ne=j.cameras;for(let ie=0,ke=ne.length;ie<ke;ie++){const Pe=ne[ie];ci(E,L,Pe,Pe.viewport)}}else ci(E,L,j);N!==null&&(F.updateMultisampleRenderTarget(N),F.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(w,L,j),B.resetDefaultState(),K=-1,R=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Dn(L,j,re,ne){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||se.intersectsSprite(L)){ne&&ct.setFromMatrixPosition(L.matrixWorld).applyMatrix4(je);const Pe=we.update(L),ot=L.material;ot.visible&&E.push(L,Pe,ot,re,ct.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||se.intersectsObject(L))){const Pe=we.update(L),ot=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ct.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ct.copy(Pe.boundingSphere.center)),ct.applyMatrix4(L.matrixWorld).applyMatrix4(je)),Array.isArray(ot)){const st=Pe.groups;for(let dt=0,pt=st.length;dt<pt;dt++){const at=st[dt],Ot=ot[at.materialIndex];Ot&&Ot.visible&&E.push(L,Pe,Ot,re,ct.z,at)}}else ot.visible&&E.push(L,Pe,ot,re,ct.z,null)}}const ke=L.children;for(let Pe=0,ot=ke.length;Pe<ot;Pe++)Dn(ke[Pe],j,re,ne)}function ci(L,j,re,ne){const ie=L.opaque,ke=L.transmissive,Pe=L.transparent;y.setupLightsView(re),ue===!0&&Qe.setGlobalState(w.clippingPlanes,re),ke.length>0&&Ii(ie,ke,j,re),ne&&$e.viewport(I.copy(ne)),ie.length>0&&gi(ie,j,re),ke.length>0&&gi(ke,j,re),Pe.length>0&&gi(Pe,j,re),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Ii(L,j,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const ke=rt.isWebGL2;Te===null&&(Te=new mr(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?Ns:Qi,minFilter:Is,samples:ke?4:0})),w.getDrawingBufferSize(nt),ke?Te.setSize(nt.x,nt.y):Te.setSize(Yo(nt.x),Yo(nt.y));const Pe=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(pe),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear();const ot=w.toneMapping;w.toneMapping=Ji,gi(L,re,ne),F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te);let st=!1;for(let dt=0,pt=j.length;dt<pt;dt++){const at=j[dt],Ot=at.object,an=at.geometry,qt=at.material,nn=at.group;if(qt.side===oi&&Ot.layers.test(ne.layers)){const Pt=qt.side;qt.side=In,qt.needsUpdate=!0,yn(Ot,re,ne,an,qt,nn),qt.side=Pt,qt.needsUpdate=!0,st=!0}}st===!0&&(F.updateMultisampleRenderTarget(Te),F.updateRenderTargetMipmap(Te)),w.setRenderTarget(Pe),w.setClearColor(pe,W),w.toneMapping=ot}function gi(L,j,re){const ne=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,ke=L.length;ie<ke;ie++){const Pe=L[ie],ot=Pe.object,st=Pe.geometry,dt=ne===null?Pe.material:ne,pt=Pe.group;ot.layers.test(re.layers)&&yn(ot,j,re,st,dt,pt)}}function yn(L,j,re,ne,ie,ke){L.onBeforeRender(w,j,re,ne,ie,ke),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(w,j,re,ne,L,ke),ie.transparent===!0&&ie.side===oi&&ie.forceSinglePass===!1?(ie.side=In,ie.needsUpdate=!0,w.renderBufferDirect(re,j,ne,ie,L,ke),ie.side=tr,ie.needsUpdate=!0,w.renderBufferDirect(re,j,ne,ie,L,ke),ie.side=oi):w.renderBufferDirect(re,j,ne,ie,L,ke),L.onAfterRender(w,j,re,ne,ie,ke)}function Ni(L,j,re){j.isScene!==!0&&(j=it);const ne=ut.get(L),ie=y.state.lights,ke=y.state.shadowsArray,Pe=ie.state.version,ot=Ne.getParameters(L,ie.state,ke,j,re),st=Ne.getProgramCacheKey(ot);let dt=ne.programs;ne.environment=L.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(L.isMeshStandardMaterial?Q:C).get(L.envMap||ne.environment),dt===void 0&&(L.addEventListener("dispose",_e),dt=new Map,ne.programs=dt);let pt=dt.get(st);if(pt!==void 0){if(ne.currentProgram===pt&&ne.lightsStateVersion===Pe)return _i(L,ot),pt}else ot.uniforms=Ne.getUniforms(L),L.onBuild(re,ot,w),L.onBeforeCompile(ot,w),pt=Ne.acquireProgram(ot,st),dt.set(st,pt),ne.uniforms=ot.uniforms;const at=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(at.clippingPlanes=Qe.uniform),_i(L,ot),ne.needsLights=ki(L),ne.lightsStateVersion=Pe,ne.needsLights&&(at.ambientLightColor.value=ie.state.ambient,at.lightProbe.value=ie.state.probe,at.directionalLights.value=ie.state.directional,at.directionalLightShadows.value=ie.state.directionalShadow,at.spotLights.value=ie.state.spot,at.spotLightShadows.value=ie.state.spotShadow,at.rectAreaLights.value=ie.state.rectArea,at.ltc_1.value=ie.state.rectAreaLTC1,at.ltc_2.value=ie.state.rectAreaLTC2,at.pointLights.value=ie.state.point,at.pointLightShadows.value=ie.state.pointShadow,at.hemisphereLights.value=ie.state.hemi,at.directionalShadowMap.value=ie.state.directionalShadowMap,at.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,at.spotShadowMap.value=ie.state.spotShadowMap,at.spotLightMatrix.value=ie.state.spotLightMatrix,at.spotLightMap.value=ie.state.spotLightMap,at.pointShadowMap.value=ie.state.pointShadowMap,at.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.currentProgram=pt,ne.uniformsList=null,pt}function Oi(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=zo.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function _i(L,j){const re=ut.get(L);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function Bi(L,j,re,ne,ie){j.isScene!==!0&&(j=it),F.resetTextureUnits();const ke=j.fog,Pe=ne.isMeshStandardMaterial?j.environment:null,ot=N===null?w.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Fi,st=(ne.isMeshStandardMaterial?Q:C).get(ne.envMap||Pe),dt=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pt=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),at=!!re.morphAttributes.position,Ot=!!re.morphAttributes.normal,an=!!re.morphAttributes.color;let qt=Ji;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qt=w.toneMapping);const nn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=nn!==void 0?nn.length:0,mt=ut.get(ne),tt=y.state.lights;if(ue===!0&&(Be===!0||L!==R)){const gn=L===R&&ne.id===K;Qe.setState(ne,L,gn)}let Bt=!1;ne.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==tt.state.version||mt.outputColorSpace!==ot||ie.isBatchedMesh&&mt.batching===!1||!ie.isBatchedMesh&&mt.batching===!0||ie.isInstancedMesh&&mt.instancing===!1||!ie.isInstancedMesh&&mt.instancing===!0||ie.isSkinnedMesh&&mt.skinning===!1||!ie.isSkinnedMesh&&mt.skinning===!0||ie.isInstancedMesh&&mt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&mt.instancingColor===!1&&ie.instanceColor!==null||mt.envMap!==st||ne.fog===!0&&mt.fog!==ke||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Qe.numPlanes||mt.numIntersection!==Qe.numIntersection)||mt.vertexAlphas!==dt||mt.vertexTangents!==pt||mt.morphTargets!==at||mt.morphNormals!==Ot||mt.morphColors!==an||mt.toneMapping!==qt||rt.isWebGL2===!0&&mt.morphTargetsCount!==Pt)&&(Bt=!0):(Bt=!0,mt.__version=ne.version);let Wn=mt.currentProgram;Bt===!0&&(Wn=Ni(ne,j,ie));let Tr=!1,vi=!1,zi=!1;const rn=Wn.getUniforms(),Nn=mt.uniforms;if($e.useProgram(Wn.program)&&(Tr=!0,vi=!0,zi=!0),ne.id!==K&&(K=ne.id,vi=!0),Tr||R!==L){rn.setValue(te,"projectionMatrix",L.projectionMatrix),rn.setValue(te,"viewMatrix",L.matrixWorldInverse);const gn=rn.map.cameraPosition;gn!==void 0&&gn.setValue(te,ct.setFromMatrixPosition(L.matrixWorld)),rt.logarithmicDepthBuffer&&rn.setValue(te,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&rn.setValue(te,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,vi=!0,zi=!0)}if(ie.isSkinnedMesh){rn.setOptional(te,ie,"bindMatrix"),rn.setOptional(te,ie,"bindMatrixInverse");const gn=ie.skeleton;gn&&(rt.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),rn.setValue(te,"boneTexture",gn.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(rn.setOptional(te,ie,"batchingTexture"),rn.setValue(te,"batchingTexture",ie._matricesTexture,F));const nr=re.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&rt.isWebGL2===!0)&&gt.update(ie,re,Wn),(vi||mt.receiveShadow!==ie.receiveShadow)&&(mt.receiveShadow=ie.receiveShadow,rn.setValue(te,"receiveShadow",ie.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Nn.envMap.value=st,Nn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),vi&&(rn.setValue(te,"toneMappingExposure",w.toneMappingExposure),mt.needsLights&&wr(Nn,zi),ke&&ne.fog===!0&&Fe.refreshFogUniforms(Nn,ke),Fe.refreshMaterialUniforms(Nn,ne,J,$,Te),zo.upload(te,Oi(mt),Nn,F)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(zo.upload(te,Oi(mt),Nn,F),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&rn.setValue(te,"center",ie.center),rn.setValue(te,"modelViewMatrix",ie.modelViewMatrix),rn.setValue(te,"normalMatrix",ie.normalMatrix),rn.setValue(te,"modelMatrix",ie.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const gn=ne.uniformsGroups;for(let S=0,ln=gn.length;S<ln;S++)if(rt.isWebGL2){const Ar=gn[S];Re.update(Ar,Wn),Re.bind(Ar,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function wr(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function ki(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,j,re){ut.get(L.texture).__webglTexture=j,ut.get(L.depthTexture).__webglTexture=re;const ne=ut.get(L);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=re===void 0,ne.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){const re=ut.get(L);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,re=0){N=L,X=j,k=re;let ne=!0,ie=null,ke=!1,Pe=!1;if(L){const st=ut.get(L);st.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(te.FRAMEBUFFER,null),ne=!1):st.__webglFramebuffer===void 0?F.setupRenderTarget(L):st.__hasExternalTextures&&F.rebindTextures(L,ut.get(L.texture).__webglTexture,ut.get(L.depthTexture).__webglTexture);const dt=L.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Pe=!0);const pt=ut.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(pt[j])?ie=pt[j][re]:ie=pt[j],ke=!0):rt.isWebGL2&&L.samples>0&&F.useMultisampledRTT(L)===!1?ie=ut.get(L).__webglMultisampledFramebuffer:Array.isArray(pt)?ie=pt[re]:ie=pt,I.copy(L.viewport),z.copy(L.scissor),ee=L.scissorTest}else I.copy(ve).multiplyScalar(J).floor(),z.copy(be).multiplyScalar(J).floor(),ee=ze;if($e.bindFramebuffer(te.FRAMEBUFFER,ie)&&rt.drawBuffers&&ne&&$e.drawBuffers(L,ie),$e.viewport(I),$e.scissor(z),$e.setScissorTest(ee),ke){const st=ut.get(L.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+j,st.__webglTexture,re)}else if(Pe){const st=ut.get(L.texture),dt=j||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,st.__webglTexture,re||0,dt)}K=-1},this.readRenderTargetPixels=function(L,j,re,ne,ie,ke,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=ut.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(ot=ot[Pe]),ot){$e.bindFramebuffer(te.FRAMEBUFFER,ot);try{const st=L.texture,dt=st.format,pt=st.type;if(dt!==li&&Ge.convert(dt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=pt===Ns&&(et.has("EXT_color_buffer_half_float")||rt.isWebGL2&&et.has("EXT_color_buffer_float"));if(pt!==Qi&&Ge.convert(pt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pt===Zi&&(rt.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-ne&&re>=0&&re<=L.height-ie&&te.readPixels(j,re,ne,ie,Ge.convert(dt),Ge.convert(pt),ke)}finally{const st=N!==null?ut.get(N).__webglFramebuffer:null;$e.bindFramebuffer(te.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(L,j,re=0){const ne=Math.pow(2,-re),ie=Math.floor(j.image.width*ne),ke=Math.floor(j.image.height*ne);F.setTexture2D(j,0),te.copyTexSubImage2D(te.TEXTURE_2D,re,0,0,L.x,L.y,ie,ke),$e.unbindTexture()},this.copyTextureToTexture=function(L,j,re,ne=0){const ie=j.image.width,ke=j.image.height,Pe=Ge.convert(re.format),ot=Ge.convert(re.type);F.setTexture2D(re,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ne,L.x,L.y,ie,ke,Pe,ot,j.image.data):j.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ne,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Pe,j.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,ne,L.x,L.y,Pe,ot,j.image),ne===0&&re.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(L,j,re,ne,ie=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=L.max.x-L.min.x+1,Pe=L.max.y-L.min.y+1,ot=L.max.z-L.min.z+1,st=Ge.convert(ne.format),dt=Ge.convert(ne.type);let pt;if(ne.isData3DTexture)F.setTexture3D(ne,0),pt=te.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)F.setTexture2DArray(ne,0),pt=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ne.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ne.unpackAlignment);const at=te.getParameter(te.UNPACK_ROW_LENGTH),Ot=te.getParameter(te.UNPACK_IMAGE_HEIGHT),an=te.getParameter(te.UNPACK_SKIP_PIXELS),qt=te.getParameter(te.UNPACK_SKIP_ROWS),nn=te.getParameter(te.UNPACK_SKIP_IMAGES),Pt=re.isCompressedTexture?re.mipmaps[ie]:re.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,Pt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Pt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,L.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,L.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,L.min.z),re.isDataTexture||re.isData3DTexture?te.texSubImage3D(pt,ie,j.x,j.y,j.z,ke,Pe,ot,st,dt,Pt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(pt,ie,j.x,j.y,j.z,ke,Pe,ot,st,Pt.data)):te.texSubImage3D(pt,ie,j.x,j.y,j.z,ke,Pe,ot,st,dt,Pt),te.pixelStorei(te.UNPACK_ROW_LENGTH,at),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Ot),te.pixelStorei(te.UNPACK_SKIP_PIXELS,an),te.pixelStorei(te.UNPACK_SKIP_ROWS,qt),te.pixelStorei(te.UNPACK_SKIP_IMAGES,nn),ie===0&&ne.generateMipmaps&&te.generateMipmap(pt),$e.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?F.setTextureCube(L,0):L.isData3DTexture?F.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?F.setTexture2DArray(L,0):F.setTexture2D(L,0),$e.unbindTexture()},this.resetState=function(){X=0,k=0,N=null,$e.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Nl?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?dr:Mf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dr?_n:Fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Hy extends Hf{}Hy.prototype.isWebGL1Renderer=!0;class Gy extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oa extends Sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new H,Fu=new H,Uu=new Jt,nl=new na,Co=new ta;class zl extends Pn{constructor(e=new Xt,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Du.fromBufferAttribute(t,r-1),Fu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Du.distanceTo(Fu);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Uu.copy(r).invert(),nl.copy(e.ray).applyMatrix4(Uu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=new H,d=new H,p=new H,m=new H,v=this.isLineSegments?2:1,x=n.index,y=n.attributes.position;if(x!==null){const _=Math.max(0,c.start),P=Math.min(x.count,c.start+c.count);for(let w=_,O=P-1;w<O;w+=v){const X=x.getX(w),k=x.getX(w+1);if(f.fromBufferAttribute(y,X),d.fromBufferAttribute(y,k),nl.distanceSqToSegment(f,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const K=e.ray.origin.distanceTo(m);K<e.near||K>e.far||t.push({distance:K,point:p.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,c.start),P=Math.min(y.count,c.start+c.count);for(let w=_,O=P-1;w<O;w+=v){if(f.fromBufferAttribute(y,w),d.fromBufferAttribute(y,w+1),nl.distanceSqToSegment(f,d,m,p)>u)continue;m.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(m);k<e.near||k>e.far||t.push({distance:k,point:p.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}class Vy extends zl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let c;t?c=t:c=e*n[s-1];let l=0,u=s-1,f;for(;l<=u;)if(r=Math.floor(l+(u-l)/2),f=n[r]-c,f<0)l=r+1;else if(f>0)u=r-1;else{u=r;break}if(r=u,n[r]===c)return r/(s-1);const d=n[r],m=n[r+1]-d,v=(c-d)/m;return(r+v)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const c=this.getPoint(r),l=this.getPoint(s),u=t||(c.isVector2?new We:new H);return u.copy(l).sub(c).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,r=[],s=[],c=[],l=new H,u=new Jt;for(let v=0;v<=e;v++){const x=v/e;r[v]=this.getTangentAt(x,new H)}s[0]=new H,c[0]=new H;let f=Number.MAX_VALUE;const d=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),m<=f&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),c[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),c[v]=c[v-1].clone(),l.crossVectors(r[v-1],r[v]),l.length()>Number.EPSILON){l.normalize();const x=Math.acos(un(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(u.makeRotationAxis(l,x))}c[v].crossVectors(r[v],s[v])}if(t===!0){let v=Math.acos(un(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(v=-v);for(let x=1;x<=e;x++)s[x].applyMatrix4(u.makeRotationAxis(r[x],v*x)),c[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends mi{constructor(e=0,t=0,n=1,r=1,s=0,c=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=c,this.aClockwise=l,this.aRotation=u}getPoint(e,t){const n=t||new We,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const c=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(c?s=0:s=r),this.aClockwise===!0&&!c&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,v=f-this.aY;u=m*d-v*p+this.aX,f=m*p+v*d+this.aY}return n.set(u,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wy extends Hl{constructor(e,t,n,r,s,c){super(e,t,n,n,r,s,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,e=0,t=0,n=0;function r(s,c,l,u){i=s,e=l,t=-3*s+3*c-2*l-u,n=2*s-2*c+l+u}return{initCatmullRom:function(s,c,l,u,f){r(c,l,f*(l-s),f*(u-c))},initNonuniformCatmullRom:function(s,c,l,u,f,d,p){let m=(c-s)/f-(l-s)/(f+d)+(l-c)/d,v=(l-c)/d-(u-c)/(d+p)+(u-l)/p;m*=d,v*=d,r(c,l,m,v)},calc:function(s){const c=s*s,l=c*s;return i+e*s+t*c+n*l}}}const Ro=new H,il=new Gl,rl=new Gl,sl=new Gl;class $y extends mi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){const n=t,r=this.points,s=r.length,c=(s-(this.closed?0:1))*e;let l=Math.floor(c),u=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:u===0&&l===s-1&&(l=s-2,u=1);let f,d;this.closed||l>0?f=r[(l-1)%s]:(Ro.subVectors(r[0],r[1]).add(r[0]),f=Ro);const p=r[l%s],m=r[(l+1)%s];if(this.closed||l+2<s?d=r[(l+2)%s]:(Ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let x=Math.pow(f.distanceToSquared(p),v),E=Math.pow(p.distanceToSquared(m),v),y=Math.pow(m.distanceToSquared(d),v);E<1e-4&&(E=1),x<1e-4&&(x=E),y<1e-4&&(y=E),il.initNonuniformCatmullRom(f.x,p.x,m.x,d.x,x,E,y),rl.initNonuniformCatmullRom(f.y,p.y,m.y,d.y,x,E,y),sl.initNonuniformCatmullRom(f.z,p.z,m.z,d.z,x,E,y)}else this.curveType==="catmullrom"&&(il.initCatmullRom(f.x,p.x,m.x,d.x,this.tension),rl.initCatmullRom(f.y,p.y,m.y,d.y,this.tension),sl.initCatmullRom(f.z,p.z,m.z,d.z,this.tension));return n.set(il.calc(u),rl.calc(u),sl.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Iu(i,e,t,n,r){const s=(n-e)*.5,c=(r-t)*.5,l=i*i,u=i*l;return(2*t-2*n+s+c)*u+(-3*t+3*n-2*s-c)*l+s*i+t}function Xy(i,e){const t=1-i;return t*t*e}function Yy(i,e){return 2*(1-i)*i*e}function qy(i,e){return i*i*e}function Ls(i,e,t,n){return Xy(i,e)+Yy(i,t)+qy(i,n)}function jy(i,e){const t=1-i;return t*t*t*e}function Zy(i,e){const t=1-i;return 3*t*t*i*e}function Ky(i,e){return 3*(1-i)*i*i*e}function Jy(i,e){return i*i*i*e}function Ds(i,e,t,n,r){return jy(i,e)+Zy(i,t)+Ky(i,n)+Jy(i,r)}class Gf extends mi{constructor(e=new We,t=new We,n=new We,r=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new We){const n=t,r=this.v0,s=this.v1,c=this.v2,l=this.v3;return n.set(Ds(e,r.x,s.x,c.x,l.x),Ds(e,r.y,s.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qy extends mi{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){const n=t,r=this.v0,s=this.v1,c=this.v2,l=this.v3;return n.set(Ds(e,r.x,s.x,c.x,l.x),Ds(e,r.y,s.y,c.y,l.y),Ds(e,r.z,s.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vf extends mi{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ex extends mi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends mi{constructor(e=new We,t=new We,n=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new We){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Ls(e,r.x,s.x,c.x),Ls(e,r.y,s.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tx extends mi{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Ls(e,r.x,s.x,c.x),Ls(e,r.y,s.y,c.y),Ls(e,r.z,s.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $f extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const n=t,r=this.points,s=(r.length-1)*e,c=Math.floor(s),l=s-c,u=r[c===0?c:c-1],f=r[c],d=r[c>r.length-2?r.length-1:c+1],p=r[c>r.length-3?r.length-1:c+2];return n.set(Iu(l,u.x,f.x,d.x,p.x),Iu(l,u.y,f.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new We().fromArray(r))}return this}}var Nu=Object.freeze({__proto__:null,ArcCurve:Wy,CatmullRomCurve3:$y,CubicBezierCurve:Gf,CubicBezierCurve3:Qy,EllipseCurve:Hl,LineCurve:Vf,LineCurve3:ex,QuadraticBezierCurve:Wf,QuadraticBezierCurve3:tx,SplineCurve:$f});class nx extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const c=r[s]-n,l=this.curves[s],u=l.getLength(),f=u===0?0:1-c/u;return l.getPointAt(f,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const c=s[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,u=c.getPoints(l);for(let f=0;f<u.length;f++){const d=u[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Nu[r.type]().fromJSON(r))}return this}}class Ou extends nx{constructor(e){super(),this.type="Path",this.currentPoint=new We,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vf(this.currentPoint.clone(),new We(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Wf(this.currentPoint.clone(),new We(e,t),new We(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,c){const l=new Gf(this.currentPoint.clone(),new We(e,t),new We(n,r),new We(s,c));return this.curves.push(l),this.currentPoint.set(s,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $f(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+l,t+u,n,r,s,c),this}absarc(e,t,n,r,s,c){return this.absellipse(e,t,n,n,r,s,c),this}ellipse(e,t,n,r,s,c,l,u){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,r,s,c,l,u),this}absellipse(e,t,n,r,s,c,l,u){const f=new Hl(e,t,n,r,s,c,l,u);if(this.curves.length>0){const p=f.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vl extends Xt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],c=[],l=[],u=[],f=new H,d=new We;c.push(0,0,0),l.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const v=n+p/t*r;f.x=e*Math.cos(v),f.y=e*Math.sin(v),c.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(c[m]/e+1)/2,d.y=(c[m+1]/e+1)/2,u.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wl extends Xt{constructor(e=1,t=1,n=1,r=32,s=1,c=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:c,thetaStart:l,thetaLength:u};const f=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],m=[],v=[];let x=0;const E=[],y=n/2;let _=0;P(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(m,3)),this.setAttribute("uv",new Qt(v,2));function P(){const O=new H,X=new H;let k=0;const N=(t-e)/n;for(let K=0;K<=s;K++){const R=[],I=K/s,z=I*(t-e)+e;for(let ee=0;ee<=r;ee++){const pe=ee/r,W=pe*u+l,Z=Math.sin(W),$=Math.cos(W);X.x=z*Z,X.y=-I*n+y,X.z=z*$,p.push(X.x,X.y,X.z),O.set(Z,N,$).normalize(),m.push(O.x,O.y,O.z),v.push(pe,1-I),R.push(x++)}E.push(R)}for(let K=0;K<r;K++)for(let R=0;R<s;R++){const I=E[R][K],z=E[R+1][K],ee=E[R+1][K+1],pe=E[R][K+1];d.push(I,z,pe),d.push(z,ee,pe),k+=6}f.addGroup(_,k,0),_+=k}function w(O){const X=x,k=new We,N=new H;let K=0;const R=O===!0?e:t,I=O===!0?1:-1;for(let ee=1;ee<=r;ee++)p.push(0,y*I,0),m.push(0,I,0),v.push(.5,.5),x++;const z=x;for(let ee=0;ee<=r;ee++){const W=ee/r*u+l,Z=Math.cos(W),$=Math.sin(W);N.x=R*$,N.y=y*I,N.z=R*Z,p.push(N.x,N.y,N.z),m.push(0,I,0),k.x=Z*.5+.5,k.y=$*.5*I+.5,v.push(k.x,k.y),x++}for(let ee=0;ee<r;ee++){const pe=X+ee,W=z+ee;O===!0?d.push(W,W+1,pe):d.push(W+1,W,pe),K+=3}f.addGroup(_,K,O===!0?1:2),_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xf extends Ou{constructor(e){super(e),this.uuid=Er(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ou().fromJSON(r))}return this}}const ix={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Yf(i,0,r,t,!0);const c=[];if(!s||s.next===s.prev)return c;let l,u,f,d,p,m,v;if(n&&(s=lx(i,e,s,t)),i.length>80*t){l=f=i[0],u=d=i[1];for(let x=t;x<r;x+=t)p=i[x],m=i[x+1],p<l&&(l=p),m<u&&(u=m),p>f&&(f=p),m>d&&(d=m);v=Math.max(f-l,d-u),v=v!==0?32767/v:0}return Bs(s,c,t,l,u,v,0),c}};function Yf(i,e,t,n,r){let s,c;if(r===yx(i,e,t,n)>0)for(s=e;s<t;s+=n)c=Bu(s,i[s],i[s+1],c);else for(s=t-n;s>=e;s-=n)c=Bu(s,i[s],i[s+1],c);return c&&aa(c,c.next)&&(zs(c),c=c.next),c}function vr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(aa(t,t.next)||$t(t.prev,t,t.next)===0)){if(zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bs(i,e,t,n,r,s,c){if(!i)return;!c&&s&&dx(i,n,r,s);let l=i,u,f;for(;i.prev!==i.next;){if(u=i.prev,f=i.next,s?sx(i,n,r,s):rx(i)){e.push(u.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),zs(i),i=f.next,l=f.next;continue}if(i=f,i===l){c?c===1?(i=ox(vr(i),e,t),Bs(i,e,t,n,r,s,2)):c===2&&ax(i,e,t,n,r,s):Bs(vr(i),e,t,n,r,s,1);break}}}function rx(i){const e=i.prev,t=i,n=i.next;if($t(e,t,n)>=0)return!1;const r=e.x,s=t.x,c=n.x,l=e.y,u=t.y,f=n.y,d=r<s?r<c?r:c:s<c?s:c,p=l<u?l<f?l:f:u<f?u:f,m=r>s?r>c?r:c:s>c?s:c,v=l>u?l>f?l:f:u>f?u:f;let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=v&&Qr(r,l,s,u,c,f,x.x,x.y)&&$t(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function sx(i,e,t,n){const r=i.prev,s=i,c=i.next;if($t(r,s,c)>=0)return!1;const l=r.x,u=s.x,f=c.x,d=r.y,p=s.y,m=c.y,v=l<u?l<f?l:f:u<f?u:f,x=d<p?d<m?d:m:p<m?p:m,E=l>u?l>f?l:f:u>f?u:f,y=d>p?d>m?d:m:p>m?p:m,_=Cl(v,x,e,t,n),P=Cl(E,y,e,t,n);let w=i.prevZ,O=i.nextZ;for(;w&&w.z>=_&&O&&O.z<=P;){if(w.x>=v&&w.x<=E&&w.y>=x&&w.y<=y&&w!==r&&w!==c&&Qr(l,d,u,p,f,m,w.x,w.y)&&$t(w.prev,w,w.next)>=0||(w=w.prevZ,O.x>=v&&O.x<=E&&O.y>=x&&O.y<=y&&O!==r&&O!==c&&Qr(l,d,u,p,f,m,O.x,O.y)&&$t(O.prev,O,O.next)>=0))return!1;O=O.nextZ}for(;w&&w.z>=_;){if(w.x>=v&&w.x<=E&&w.y>=x&&w.y<=y&&w!==r&&w!==c&&Qr(l,d,u,p,f,m,w.x,w.y)&&$t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;O&&O.z<=P;){if(O.x>=v&&O.x<=E&&O.y>=x&&O.y<=y&&O!==r&&O!==c&&Qr(l,d,u,p,f,m,O.x,O.y)&&$t(O.prev,O,O.next)>=0)return!1;O=O.nextZ}return!0}function ox(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!aa(r,s)&&qf(r,n,n.next,s)&&ks(r,s)&&ks(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zs(n),zs(n.next),n=i=s),n=n.next}while(n!==i);return vr(n)}function ax(i,e,t,n,r,s){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&gx(c,l)){let u=jf(c,l);c=vr(c,c.next),u=vr(u,u.next),Bs(c,e,t,n,r,s,0),Bs(u,e,t,n,r,s,0);return}l=l.next}c=c.next}while(c!==i)}function lx(i,e,t,n){const r=[];let s,c,l,u,f;for(s=0,c=e.length;s<c;s++)l=e[s]*n,u=s<c-1?e[s+1]*n:i.length,f=Yf(i,l,u,n,!1),f===f.next&&(f.steiner=!0),r.push(mx(f));for(r.sort(cx),s=0;s<r.length;s++)t=ux(r[s],t);return t}function cx(i,e){return i.x-e.x}function ux(i,e){const t=fx(i,e);if(!t)return e;const n=jf(t,i);return vr(n,n.next),vr(t,t.next)}function fx(i,e){let t=e,n=-1/0,r;const s=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const m=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,r=t.x<t.next.x?t:t.next,m===s))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,u=r.x,f=r.y;let d=1/0,p;t=r;do s>=t.x&&t.x>=u&&s!==t.x&&Qr(c<f?s:n,c,u,f,c<f?n:s,c,t.x,t.y)&&(p=Math.abs(c-t.y)/(s-t.x),ks(t,i)&&(p<d||p===d&&(t.x>r.x||t.x===r.x&&hx(r,t)))&&(r=t,d=p)),t=t.next;while(t!==l);return r}function hx(i,e){return $t(i.prev,i,e.prev)<0&&$t(e.next,i,i.next)<0}function dx(i,e,t,n){let r=i;do r.z===0&&(r.z=Cl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,px(r)}function px(i){let e,t,n,r,s,c,l,u,f=1;do{for(t=i,i=null,s=null,c=0;t;){for(c++,n=t,l=0,e=0;e<f&&(l++,n=n.nextZ,!!n);e++);for(u=f;l>0||u>0&&n;)l!==0&&(u===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,u--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,f*=2}while(c>1);return i}function Cl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function mx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qr(i,e,t,n,r,s,c,l){return(r-c)*(e-l)>=(i-c)*(s-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(s-l)>=(r-c)*(n-l)}function gx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_x(i,e)&&(ks(i,e)&&ks(e,i)&&vx(i,e)&&($t(i.prev,i,e.prev)||$t(i,e.prev,e))||aa(i,e)&&$t(i.prev,i,i.next)>0&&$t(e.prev,e,e.next)>0)}function $t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function aa(i,e){return i.x===e.x&&i.y===e.y}function qf(i,e,t,n){const r=Lo($t(i,e,t)),s=Lo($t(i,e,n)),c=Lo($t(t,n,i)),l=Lo($t(t,n,e));return!!(r!==s&&c!==l||r===0&&Po(i,t,e)||s===0&&Po(i,n,e)||c===0&&Po(t,i,n)||l===0&&Po(t,e,n))}function Po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lo(i){return i>0?1:i<0?-1:0}function _x(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ks(i,e){return $t(i.prev,i,i.next)<0?$t(i,e,i.next)>=0&&$t(i,i.prev,e)>=0:$t(i,e,i.prev)<0||$t(i,i.next,e)<0}function vx(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jf(i,e){const t=new Rl(i.i,i.x,i.y),n=new Rl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bu(i,e,t,n){const r=new Rl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yx(i,e,t,n){let r=0;for(let s=e,c=t-n;s<t;s+=n)r+=(i[c]-i[s])*(i[s+1]+i[c+1]),c=s;return r}class Fs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Fs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ku(e),zu(n,e);let c=e.length;t.forEach(ku);for(let u=0;u<t.length;u++)r.push(c),c+=t[u].length,zu(n,t[u]);const l=ix.triangulate(n,r);for(let u=0;u<l.length;u+=3)s.push(l.slice(u,u+3));return s}}function ku(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class $l extends Xt{constructor(e=new Xf([new We(0,.5),new We(-.5,-.5),new We(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],c=[];let l=0,u=0;if(Array.isArray(e)===!1)f(e);else for(let d=0;d<e.length;d++)f(e[d]),this.addGroup(l,u,d),l+=u,u=0;this.setIndex(n),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(s,3)),this.setAttribute("uv",new Qt(c,2));function f(d){const p=r.length/3,m=d.extractPoints(t);let v=m.shape;const x=m.holes;Fs.isClockWise(v)===!1&&(v=v.reverse());for(let y=0,_=x.length;y<_;y++){const P=x[y];Fs.isClockWise(P)===!0&&(x[y]=P.reverse())}const E=Fs.triangulateShape(v,x);for(let y=0,_=x.length;y<_;y++){const P=x[y];v=v.concat(P)}for(let y=0,_=v.length;y<_;y++){const P=v[y];r.push(P.x,P.y,0),s.push(0,0,1),c.push(P.x,P.y)}for(let y=0,_=E.length;y<_;y++){const P=E[y],w=P[0]+p,O=P[1]+p,X=P[2]+p;n.push(w,O,X),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xx(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const c=t[e.shapes[r]];n.push(c)}return new $l(n,e.curveSegments)}}function xx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class ol extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends Sr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Hu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mx{constructor(e,t,n){const r=this;let s=!1,c=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,s===!1&&r.onStart!==void 0&&r.onStart(d,c,l),s=!0},this.itemEnd=function(d){c++,r.onProgress!==void 0&&r.onProgress(d,c,l),c===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=f.length;p<m;p+=2){const v=f[p],x=f[p+1];if(v.global&&(v.lastIndex=0),v.test(d))return x}return null}}}const Ex=new Mx;class Xl{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class Sx extends Error{constructor(e,t){super(e),this.response=t}}class bx extends Xl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hu.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=Ri[e],p=f.body.getReader(),m=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),v=m?parseInt(m):0,x=v!==0;let E=0;const y=new ReadableStream({start(_){P();function P(){p.read().then(({done:w,value:O})=>{if(w)_.close();else{E+=O.byteLength;const X=new ProgressEvent("progress",{lengthComputable:x,loaded:E,total:v});for(let k=0,N=d.length;k<N;k++){const K=d[k];K.onProgress&&K.onProgress(X)}_.enqueue(O),P()}})}}});return new Response(y)}else throw new Sx(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return f.json();default:if(l===void 0)return f.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),m=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(m);return f.arrayBuffer().then(x=>v.decode(x))}}}).then(f=>{Hu.add(e,f);const d=Ri[e];delete Ri[e];for(let p=0,m=d.length;p<m;p++){const v=d[p];v.onLoad&&v.onLoad(f)}}).catch(f=>{const d=Ri[e];if(d===void 0)throw this.manager.itemError(e),f;delete Ri[e];for(let p=0,m=d.length;p<m;p++){const v=d[p];v.onError&&v.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yl{constructor(e,t,n=0,r=1/0){this.ray=new na(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(Gu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Pl(e[r],this,n,t);return n.sort(Gu),n}}function Gu(i,e){return i.distance-e.distance}function Pl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,c=r.length;s<c;s++)Pl(r[s],e,t,!0)}}class Vu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wu=new H,Do=new H;class wx{constructor(e=new H,t=new H){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Wu.subVectors(e,this.start),Do.subVectors(this.end,this.start);const n=Do.dot(Do);let s=Do.dot(Wu)/n;return t&&(s=un(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const $u=new H;let Fo,al;class ll extends Pn{constructor(e=new H(0,0,1),t=new H(0,0,0),n=1,r=16776960,s=n*.2,c=s*.2){super(),this.type="ArrowHelper",Fo===void 0&&(Fo=new Xt,Fo.setAttribute("position",new Qt([0,0,0,0,1,0],3)),al=new Wl(0,.5,1,5,1),al.translate(0,-.5,0)),this.position.copy(t),this.line=new zl(Fo,new oa({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new hn(al,new Ui({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,c)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{$u.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle($u,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);class Kf extends Xl{constructor(e){super(e)}load(e,t,n,r){const s=this,c=new bx(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{t(s.parse(l))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){function t(f){const d=new DataView(f),p=32/8*3+32/8*3*3+16/8,m=d.getUint32(80,!0);if(80+32/8+m*p===d.byteLength)return!0;const x=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(x,d,E))return!1;return!0}function n(f,d,p){for(let m=0,v=f.length;m<v;m++)if(f[m]!==d.getUint8(p+m))return!1;return!0}function r(f){const d=new DataView(f),p=d.getUint32(80,!0);let m,v,x,E=!1,y,_,P,w,O;for(let z=0;z<70;z++)d.getUint32(z,!1)==1129270351&&d.getUint8(z+4)==82&&d.getUint8(z+5)==61&&(E=!0,y=new Float32Array(p*3*3),_=d.getUint8(z+6)/255,P=d.getUint8(z+7)/255,w=d.getUint8(z+8)/255,O=d.getUint8(z+9)/255);const X=84,k=12*4+2,N=new Xt,K=new Float32Array(p*3*3),R=new Float32Array(p*3*3),I=new Lt;for(let z=0;z<p;z++){const ee=X+z*k,pe=d.getFloat32(ee,!0),W=d.getFloat32(ee+4,!0),Z=d.getFloat32(ee+8,!0);if(E){const $=d.getUint16(ee+48,!0);$&32768?(m=_,v=P,x=w):(m=($&31)/31,v=($>>5&31)/31,x=($>>10&31)/31)}for(let $=1;$<=3;$++){const J=ee+$*12,ce=z*3*3+($-1)*3;K[ce]=d.getFloat32(J,!0),K[ce+1]=d.getFloat32(J+4,!0),K[ce+2]=d.getFloat32(J+8,!0),R[ce]=pe,R[ce+1]=W,R[ce+2]=Z,E&&(I.set(m,v,x).convertSRGBToLinear(),y[ce]=I.r,y[ce+1]=I.g,y[ce+2]=I.b)}}return N.setAttribute("position",new Gt(K,3)),N.setAttribute("normal",new Gt(R,3)),E&&(N.setAttribute("color",new Gt(y,3)),N.hasColors=!0,N.alpha=O),N}function s(f){const d=new Xt,p=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,v=/solid\s(.+)/;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+E+E+E,"g"),_=new RegExp("normal"+E+E+E,"g"),P=[],w=[],O=[],X=new H;let k,N=0,K=0,R=0;for(;(k=p.exec(f))!==null;){K=R;const I=k[0],z=(k=v.exec(I))!==null?k[1]:"";for(O.push(z);(k=m.exec(I))!==null;){let W=0,Z=0;const $=k[0];for(;(k=_.exec($))!==null;)X.x=parseFloat(k[1]),X.y=parseFloat(k[2]),X.z=parseFloat(k[3]),Z++;for(;(k=y.exec($))!==null;)P.push(parseFloat(k[1]),parseFloat(k[2]),parseFloat(k[3])),w.push(X.x,X.y,X.z),W++,R++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const ee=K,pe=R-K;d.userData.groupNames=O,d.addGroup(ee,pe,N),N++}return d.setAttribute("position",new Qt(P,3)),d.setAttribute("normal",new Qt(w,3)),d}function c(f){return typeof f!="string"?new TextDecoder().decode(f):f}function l(f){if(typeof f=="string"){const d=new Uint8Array(f.length);for(let p=0;p<f.length;p++)d[p]=f.charCodeAt(p)&255;return d.buffer||d}else return f}const u=l(e);return t(u)?r(u):s(c(e))}}const Xu={type:"change"},cl={type:"start"},Yu={type:"end"},Uo=new na,qu=new si,Tx=Math.cos(70*Tl.DEG2RAD);class Ax extends Mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Xe),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xu),n.update(),s=r.NONE},this.update=function(){const B=new H,Re=new gr().setFromUnitVectors(e.up,new H(0,1,0)),Ze=Re.clone().invert(),Ve=new H,Ee=new gr,V=new H,Se=2*Math.PI;return function(Ue=null){const qe=n.object.position;B.copy(qe).sub(n.target),B.applyQuaternion(Re),l.setFromVector3(B),n.autoRotate&&s===r.NONE&&ee(I(Ue)),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let xt=n.minAzimuthAngle,Mt=n.maxAzimuthAngle;isFinite(xt)&&isFinite(Mt)&&(xt<-Math.PI?xt+=Se:xt>Math.PI&&(xt-=Se),Mt<-Math.PI?Mt+=Se:Mt>Math.PI&&(Mt-=Se),xt<=Mt?l.theta=Math.max(xt,Math.min(Mt,l.theta)):l.theta=l.theta>(xt+Mt)/2?Math.max(xt,l.theta):Math.min(Mt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&k||n.object.isOrthographicCamera?l.radius=ve(l.radius):l.radius=ve(l.radius*f),B.setFromSpherical(l),B.applyQuaternion(Ze),qe.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0));let Nt=!1;if(n.zoomToCursor&&k){let zt=null;if(n.object.isPerspectiveCamera){const _t=B.length();zt=ve(_t*f);const Tt=_t-zt;n.object.position.addScaledVector(O,Tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const _t=new H(X.x,X.y,0);_t.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),Nt=!0;const Tt=new H(X.x,X.y,0);Tt.unproject(n.object),n.object.position.sub(Tt).add(_t),n.object.updateMatrixWorld(),zt=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(zt).add(n.object.position):(Uo.origin.copy(n.object.position),Uo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Uo.direction))<Tx?e.lookAt(n.target):(qu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Uo.intersectPlane(qu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),Nt=!0);return f=1,k=!1,Nt||Ve.distanceToSquared(n.object.position)>c||8*(1-Ee.dot(n.object.quaternion))>c||V.distanceToSquared(n.target)>0?(n.dispatchEvent(Xu),Ve.copy(n.object.position),Ee.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",bt),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",Q),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const c=1e-6,l=new Vu,u=new Vu;let f=1;const d=new H,p=new We,m=new We,v=new We,x=new We,E=new We,y=new We,_=new We,P=new We,w=new We,O=new H,X=new We;let k=!1;const N=[],K={};let R=!1;function I(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function z(B){const Re=Math.abs(B*.01);return Math.pow(.95,n.zoomSpeed*Re)}function ee(B){u.theta-=B}function pe(B){u.phi-=B}const W=function(){const B=new H;return function(Ze,Ve){B.setFromMatrixColumn(Ve,0),B.multiplyScalar(-Ze),d.add(B)}}(),Z=function(){const B=new H;return function(Ze,Ve){n.screenSpacePanning===!0?B.setFromMatrixColumn(Ve,1):(B.setFromMatrixColumn(Ve,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(Ze),d.add(B)}}(),$=function(){const B=new H;return function(Ze,Ve){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;B.copy(V).sub(n.target);let Se=B.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),W(2*Ze*Se/Ee.clientHeight,n.object.matrix),Z(2*Ve*Se/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(Ze*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),Z(Ve*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(B,Re){if(!n.zoomToCursor)return;k=!0;const Ze=n.domElement.getBoundingClientRect(),Ve=B-Ze.left,Ee=Re-Ze.top,V=Ze.width,Se=Ze.height;X.x=Ve/V*2-1,X.y=-(Ee/Se)*2+1,O.set(X.x,X.y,1).unproject(n.object).sub(n.object.position).normalize()}function ve(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function be(B){p.set(B.clientX,B.clientY)}function ze(B){le(B.clientX,B.clientX),_.set(B.clientX,B.clientY)}function se(B){x.set(B.clientX,B.clientY)}function ue(B){m.set(B.clientX,B.clientY),v.subVectors(m,p).multiplyScalar(n.rotateSpeed);const Re=n.domElement;ee(2*Math.PI*v.x/Re.clientHeight),pe(2*Math.PI*v.y/Re.clientHeight),p.copy(m),n.update()}function Be(B){P.set(B.clientX,B.clientY),w.subVectors(P,_),w.y>0?J(z(w.y)):w.y<0&&ce(z(w.y)),_.copy(P),n.update()}function Te(B){E.set(B.clientX,B.clientY),y.subVectors(E,x).multiplyScalar(n.panSpeed),$(y.x,y.y),x.copy(E),n.update()}function je(B){le(B.clientX,B.clientY),B.deltaY<0?ce(z(B.deltaY)):B.deltaY>0&&J(z(B.deltaY)),n.update()}function nt(B){let Re=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?pe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,n.keyPanSpeed),Re=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?pe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(0,-n.keyPanSpeed),Re=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(n.keyPanSpeed,0),Re=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):$(-n.keyPanSpeed,0),Re=!0;break}Re&&(B.preventDefault(),n.update())}function ct(B){if(N.length===1)p.set(B.pageX,B.pageY);else{const Re=Ge(B),Ze=.5*(B.pageX+Re.x),Ve=.5*(B.pageY+Re.y);p.set(Ze,Ve)}}function it(B){if(N.length===1)x.set(B.pageX,B.pageY);else{const Re=Ge(B),Ze=.5*(B.pageX+Re.x),Ve=.5*(B.pageY+Re.y);x.set(Ze,Ve)}}function yt(B){const Re=Ge(B),Ze=B.pageX-Re.x,Ve=B.pageY-Re.y,Ee=Math.sqrt(Ze*Ze+Ve*Ve);_.set(0,Ee)}function te(B){n.enableZoom&&yt(B),n.enablePan&&it(B)}function Yt(B){n.enableZoom&&yt(B),n.enableRotate&&ct(B)}function et(B){if(N.length==1)m.set(B.pageX,B.pageY);else{const Ze=Ge(B),Ve=.5*(B.pageX+Ze.x),Ee=.5*(B.pageY+Ze.y);m.set(Ve,Ee)}v.subVectors(m,p).multiplyScalar(n.rotateSpeed);const Re=n.domElement;ee(2*Math.PI*v.x/Re.clientHeight),pe(2*Math.PI*v.y/Re.clientHeight),p.copy(m)}function rt(B){if(N.length===1)E.set(B.pageX,B.pageY);else{const Re=Ge(B),Ze=.5*(B.pageX+Re.x),Ve=.5*(B.pageY+Re.y);E.set(Ze,Ve)}y.subVectors(E,x).multiplyScalar(n.panSpeed),$(y.x,y.y),x.copy(E)}function $e(B){const Re=Ge(B),Ze=B.pageX-Re.x,Ve=B.pageY-Re.y,Ee=Math.sqrt(Ze*Ze+Ve*Ve);P.set(0,Ee),w.set(0,Math.pow(P.y/_.y,n.zoomSpeed)),J(w.y),_.copy(P);const V=(B.pageX+Re.x)*.5,Se=(B.pageY+Re.y)*.5;le(V,Se)}function Rt(B){n.enableZoom&&$e(B),n.enablePan&&rt(B)}function ut(B){n.enableZoom&&$e(B),n.enableRotate&&et(B)}function F(B){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",Q)),gt(B),B.pointerType==="touch"?Qe(B):ye(B))}function C(B){n.enabled!==!1&&(B.pointerType==="touch"?Me(B):me(B))}function Q(B){ht(B),N.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",Q)),n.dispatchEvent(Yu),s=r.NONE}function ye(B){let Re;switch(B.button){case 0:Re=n.mouseButtons.LEFT;break;case 1:Re=n.mouseButtons.MIDDLE;break;case 2:Re=n.mouseButtons.RIGHT;break;default:Re=-1}switch(Re){case Dr.DOLLY:if(n.enableZoom===!1)return;ze(B),s=r.DOLLY;break;case Dr.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;se(B),s=r.PAN}else{if(n.enableRotate===!1)return;be(B),s=r.ROTATE}break;case Dr.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;be(B),s=r.ROTATE}else{if(n.enablePan===!1)return;se(B),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cl)}function me(B){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ue(B);break;case r.DOLLY:if(n.enableZoom===!1)return;Be(B);break;case r.PAN:if(n.enablePan===!1)return;Te(B);break}}function we(B){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(B.preventDefault(),n.dispatchEvent(cl),je(Ne(B)),n.dispatchEvent(Yu))}function Ne(B){const Re=B.deltaMode,Ze={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(Re){case 1:Ze.deltaY*=16;break;case 2:Ze.deltaY*=100;break}return B.ctrlKey&&!R&&(Ze.deltaY*=10),Ze}function Fe(B){B.key==="Control"&&(R=!0,document.addEventListener("keyup",he,{passive:!0,capture:!0}))}function he(B){B.key==="Control"&&(R=!1,document.removeEventListener("keyup",he,{passive:!0,capture:!0}))}function Xe(B){n.enabled===!1||n.enablePan===!1||nt(B)}function Qe(B){switch(Ke(B),N.length){case 1:switch(n.touches.ONE){case Fr.ROTATE:if(n.enableRotate===!1)return;ct(B),s=r.TOUCH_ROTATE;break;case Fr.PAN:if(n.enablePan===!1)return;it(B),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Fr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(B),s=r.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Yt(B),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cl)}function Me(B){switch(Ke(B),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;et(B),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;rt(B),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Rt(B),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ut(B),n.update();break;default:s=r.NONE}}function bt(B){n.enabled!==!1&&B.preventDefault()}function gt(B){N.push(B.pointerId)}function ht(B){delete K[B.pointerId];for(let Re=0;Re<N.length;Re++)if(N[Re]==B.pointerId){N.splice(Re,1);return}}function Ke(B){let Re=K[B.pointerId];Re===void 0&&(Re=new We,K[B.pointerId]=Re),Re.set(B.pageX,B.pageY)}function Ge(B){const Re=B.pointerId===N[0]?N[1]:N[0];return K[Re]}n.domElement.addEventListener("contextmenu",bt),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",we,{passive:!1}),document.addEventListener("keydown",Fe,{passive:!0,capture:!0}),this.update()}}const Ho=0,Cx=1,Rx=new H,ju=new wx,ul=new si,Zu=new H,Io=new jn;class Px{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new Ku,this.unassigned=new Ku,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Lx(e[t]));this.compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(n){const r=n.geometry;if(r!==void 0){const s=r.attributes.position;if(s!==void 0)for(let c=0,l=s.count;c<l;c++){const u=new H;u.fromBufferAttribute(s,c).applyMatrix4(n.matrixWorld),t.push(u)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let n=0,r=t.length;n<r;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const n=this.faces;let r=-1/0,s=1/0;for(let c=0,l=n.length;c<l;c++){const u=n[c],f=u.distanceToPoint(e.origin),d=u.normal.dot(e.direction);if(f>0&&d>=0)return null;const p=d!==0?-f/d:0;if(!(p<=0)&&(d>0?s=Math.min(p,s):r=Math.max(p,r),r>s))return null}return r!==-1/0?e.at(r,t):e.at(s,t),t}intersectsRay(e){return this.intersectRay(e,Rx)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}deleteFaceVertices(e,t){const n=this.removeAllVerticesFromFace(e);if(n!==void 0)if(t===void 0)this.unassigned.appendChain(n);else{let r=n;do{const s=r.next;t.distanceToPoint(r.point)>this.tolerance?this.addVertexToFace(r,t):this.unassigned.append(r),r=s}while(r!==null)}return this}resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const n=t.next;let r=this.tolerance,s=null;for(let c=0;c<e.length;c++){const l=e[c];if(l.mark===Ho){const u=l.distanceToPoint(t.point);if(u>r&&(r=u,s=l),r>1e3*this.tolerance)break}}s!==null&&this.addVertexToFace(t,s),t=n}while(t!==null)}return this}computeExtremes(){const e=new H,t=new H,n=[],r=[];for(let s=0;s<3;s++)n[s]=r[s]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let s=0,c=this.vertices.length;s<c;s++){const l=this.vertices[s],u=l.point;for(let f=0;f<3;f++)u.getComponent(f)<e.getComponent(f)&&(e.setComponent(f,u.getComponent(f)),n[f]=l);for(let f=0;f<3;f++)u.getComponent(f)>t.getComponent(f)&&(t.setComponent(f,u.getComponent(f)),r[f]=l)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:r}}computeInitialHull(){const e=this.vertices,t=this.computeExtremes(),n=t.min,r=t.max;let s=0,c=0;for(let m=0;m<3;m++){const v=r[m].point.getComponent(m)-n[m].point.getComponent(m);v>s&&(s=v,c=m)}const l=n[c],u=r[c];let f,d;s=0,ju.set(l.point,u.point);for(let m=0,v=this.vertices.length;m<v;m++){const x=e[m];if(x!==l&&x!==u){ju.closestPointToPoint(x.point,!0,Zu);const E=Zu.distanceToSquared(x.point);E>s&&(s=E,f=x)}}s=-1,ul.setFromCoplanarPoints(l.point,u.point,f.point);for(let m=0,v=this.vertices.length;m<v;m++){const x=e[m];if(x!==l&&x!==u&&x!==f){const E=Math.abs(ul.distanceToPoint(x.point));E>s&&(s=E,d=x)}}const p=[];if(ul.distanceToPoint(d.point)<0){p.push(ri.create(l,u,f),ri.create(d,u,l),ri.create(d,f,u),ri.create(d,l,f));for(let m=0;m<3;m++){const v=(m+1)%3;p[m+1].getEdge(2).setTwin(p[0].getEdge(v)),p[m+1].getEdge(1).setTwin(p[v+1].getEdge(0))}}else{p.push(ri.create(l,f,u),ri.create(d,l,u),ri.create(d,u,f),ri.create(d,f,l));for(let m=0;m<3;m++){const v=(m+1)%3;p[m+1].getEdge(2).setTwin(p[0].getEdge((3-m)%3)),p[m+1].getEdge(0).setTwin(p[v+1].getEdge(1))}}for(let m=0;m<4;m++)this.faces.push(p[m]);for(let m=0,v=e.length;m<v;m++){const x=e[m];if(x!==l&&x!==u&&x!==f&&x!==d){s=this.tolerance;let E=null;for(let y=0;y<4;y++){const _=this.faces[y].distanceToPoint(x.point);_>s&&(s=_,E=this.faces[y])}E!==null&&this.addVertexToFace(x,E)}}return this}reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const n=this.faces[t];n.mark===Ho&&e.push(n)}return this.faces=e,this}nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const n=this.assigned.first().face;let r=n.outside;do{const s=n.distanceToPoint(r.point);s>t&&(t=s,e=r),r=r.next}while(r!==null&&r.face===n);return e}}computeHorizon(e,t,n,r){this.deleteFaceVertices(n),n.mark=Cx;let s;t===null?s=t=n.getEdge(0):s=t.next;do{const c=s.twin,l=c.face;l.mark===Ho&&(l.distanceToPoint(e)>this.tolerance?this.computeHorizon(e,c,l,r):r.push(s)),s=s.next}while(s!==t);return this}addAdjoiningFace(e,t){const n=ri.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}addNewFaces(e,t){this.newFaces=[];let n=null,r=null;for(let s=0;s<t.length;s++){const c=t[s],l=this.addAdjoiningFace(e,c);n===null?n=l:l.next.setTwin(r),this.newFaces.push(l.face),r=l}return n.next.setTwin(r),this}addVertexToHull(e){const t=[];return this.unassigned.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,t),this.addNewFaces(e,t),this.resolveUnassignedPoints(this.newFaces),this}cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}compute(){let e;for(this.computeInitialHull();(e=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(e);return this.reindexFaces(),this.cleanup(),this}}class ri{constructor(){this.normal=new H,this.midpoint=new H,this.area=0,this.constant=0,this.outside=null,this.mark=Ho,this.edge=null}static create(e,t,n){const r=new ri,s=new fl(e,r),c=new fl(t,r),l=new fl(n,r);return s.next=l.prev=c,c.next=s.prev=l,l.next=c.prev=s,r.edge=s,r.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return Io.set(e.point,t.point,n.point),Io.getNormal(this.normal),Io.getMidpoint(this.midpoint),this.area=Io.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class fl{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class Lx{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class Ku{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class Jf extends Xt{constructor(e=[]){super();const t=[],n=[],s=new Px().setFromPoints(e).faces;for(let c=0;c<s.length;c++){const l=s[c];let u=l.edge;do{const f=u.head().point;t.push(f.x,f.y,f.z),n.push(l.normal.x,l.normal.y,l.normal.z),u=u.next}while(u!==l.edge)}this.setAttribute("position",new Qt(t,3)),this.setAttribute("normal",new Qt(n,3))}}const Dx="modulepreload",Fx=function(i){return"/"+i},Ju={},Us=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=Promise.allSettled(t.map(u=>{if(u=Fx(u),u in Ju)return;Ju[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":Dx,f||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};async function Ux(i={}){var vs,Qs,eo;var e,t=i,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=((Qs=(vs=globalThis.process)==null?void 0:vs.versions)==null?void 0:Qs.node)&&((eo=globalThis.process)==null?void 0:eo.type)!="renderer";if(s){const{createRequire:T}=await Us(()=>import("./chunks/__vite-browser-external-BIHI7g3E.js"),[]);var c=T(import.meta.url)}var l=import.meta.url,u="";function f(T){return t.locateFile?t.locateFile(T,u):u+T}var d,p;if(s){var m=c("node:fs");l.startsWith("file:")&&(u=c("node:path").dirname(c("node:url").fileURLToPath(l))+"/"),p=T=>{T=y(T)?new URL(T):T;var b=m.readFileSync(T);return b},d=async(T,b=!0)=>{T=y(T)?new URL(T):T;var G=m.readFileSync(T,b?void 0:"utf8");return G},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(n||r){try{u=new URL(".",l).href}catch{}r&&(p=T=>{var b=new XMLHttpRequest;return b.open("GET",T,!1),b.responseType="arraybuffer",b.send(null),new Uint8Array(b.response)}),d=async T=>{var b=await fetch(T,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw new Error(b.status+" : "+b.url)}}console.log.bind(console);var v=console.error.bind(console),x,E=!1,y=T=>T.startsWith("file://"),_,P,w=!1;function O(){var T=_s.buffer;ve=new Int8Array(T),J=new Int16Array(T),Te=new Uint8Array(T),se=new Uint16Array(T),ce=new Int32Array(T),ue=new Uint32Array(T),be=new Float32Array(T),ze=new Float64Array(T),le=new BigInt64Array(T),Be=new BigUint64Array(T)}function X(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)yt(t.preRun.shift());je(it)}function k(){w=!0,Mi.z()}function N(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ct(t.postRun.shift());je(nt)}function K(T){var G;(G=t.onAbort)==null||G.call(t,T),T=`Aborted(${T})`,v(T),E=!0,T+=". Build with -sASSERTIONS for more info.";var b=new WebAssembly.RuntimeError(T);throw P==null||P(b),b}var R;function I(){return t.locateFile?f("nfp_core.wasm"):new URL("/assets/nfp_core-Boio3UuO.wasm",import.meta.url).href}function z(T){if(T==R&&x)return new Uint8Array(x);if(p)return p(T);throw"both async and sync fetching of the wasm failed"}async function ee(T){if(!x)try{var b=await d(T);return new Uint8Array(b)}catch{}return z(T)}async function pe(T,b){try{var G=await ee(T),q=await WebAssembly.instantiate(G,b);return q}catch(ae){v(`failed to asynchronously prepare wasm: ${ae}`),K(ae)}}async function W(T,b,G){if(!T&&!s)try{var q=fetch(b,{credentials:"same-origin"}),ae=await WebAssembly.instantiateStreaming(q,G);return ae}catch(de){v(`wasm streaming compile failed: ${de}`),v("falling back to ArrayBuffer instantiation")}return pe(b,G)}function Z(){var T={a:Pr};return T}async function $(){function T(de,ge){return Mi=de.exports,_a(Mi),O(),Mi}function b(de){return T(de.instance)}var G=Z();if(t.instantiateWasm)return new Promise((de,ge)=>{t.instantiateWasm(G,(xe,Le)=>{de(T(xe))})});R??(R=I());var q=await W(x,R,G),ae=b(q);return ae}var J,ce,le,ve,be,ze,se,ue,Be,Te,je=T=>{for(;T.length>0;)T.shift()(t)},nt=[],ct=T=>nt.push(T),it=[],yt=T=>it.push(T);class te{constructor(b){this.excPtr=b,this.ptr=b-24}set_type(b){ue[this.ptr+4>>2]=b}get_type(){return ue[this.ptr+4>>2]}set_destructor(b){ue[this.ptr+8>>2]=b}get_destructor(){return ue[this.ptr+8>>2]}set_caught(b){b=b?1:0,ve[this.ptr+12]=b}get_caught(){return ve[this.ptr+12]!=0}set_rethrown(b){b=b?1:0,ve[this.ptr+13]=b}get_rethrown(){return ve[this.ptr+13]!=0}init(b,G){this.set_adjusted_ptr(0),this.set_type(b),this.set_destructor(G)}set_adjusted_ptr(b){ue[this.ptr+16>>2]=b}get_adjusted_ptr(){return ue[this.ptr+16>>2]}}var Yt=(T,b,G)=>{var q=new te(T);q.init(b,G),K()},et=()=>K(""),rt={},$e=T=>{for(;T.length;){var b=T.pop(),G=T.pop();G(b)}};function Rt(T){return this.fromWireType(ue[T>>2])}var ut={},F={},C={},Q=class extends Error{constructor(b){super(b),this.name="InternalError"}},ye=T=>{throw new Q(T)},me=(T,b,G)=>{T.forEach(xe=>C[xe]=b);function q(xe){var Le=G(xe);Le.length!==T.length&&ye("Mismatched type converter count");for(var lt=0;lt<T.length;++lt)Qe(T[lt],Le[lt])}var ae=new Array(b.length),de=[],ge=0;for(let[xe,Le]of b.entries())F.hasOwnProperty(Le)?ae[xe]=F[Le]:(de.push(Le),ut.hasOwnProperty(Le)||(ut[Le]=[]),ut[Le].push(()=>{ae[xe]=F[Le],++ge,ge===de.length&&q(ae)}));de.length===0&&q(ae)},we=T=>{var b=rt[T];delete rt[T];var G=b.rawConstructor,q=b.rawDestructor,ae=b.fields,de=ae.map(ge=>ge.getterReturnType).concat(ae.map(ge=>ge.setterArgumentType));me([T],de,ge=>{var xe={};for(var[Le,lt]of ae.entries()){const ft=ge[Le],Ct=lt.getter,Je=lt.getterContext,wt=ge[Le+ae.length],jt=lt.setter,Ht=lt.setterContext;xe[lt.fieldName]={read:Bn=>ft.fromWireType(Ct(Je,Bn)),write:(Bn,kn)=>{var Ei=[];jt(Ht,Bn,wt.toWireType(Ei,kn)),$e(Ei)},optional:ft.optional}}return[{name:b.name,fromWireType:ft=>{var Ct={};for(var Je in xe)Ct[Je]=xe[Je].read(ft);return q(ft),Ct},toWireType:(ft,Ct)=>{for(var Je in xe)if(!(Je in Ct)&&!xe[Je].optional)throw new TypeError(`Missing field: "${Je}"`);var wt=G();for(Je in xe)xe[Je].write(wt,Ct[Je]);return ft!==null&&ft.push(q,wt),wt},readValueFromPointer:Rt,destructorFunction:q}]})},Ne=T=>{for(var b="";;){var G=Te[T++];if(!G)return b;b+=String.fromCharCode(G)}},Fe=class extends Error{constructor(b){super(b),this.name="BindingError"}},he=T=>{throw new Fe(T)};function Xe(T,b,G={}){var q=b.name;if(T||he(`type "${q}" must have a positive integer typeid pointer`),F.hasOwnProperty(T)){if(G.ignoreDuplicateRegistrations)return;he(`Cannot register type '${q}' twice`)}if(F[T]=b,delete C[T],ut.hasOwnProperty(T)){var ae=ut[T];delete ut[T],ae.forEach(de=>de())}}function Qe(T,b,G={}){return Xe(T,b,G)}var Me=(T,b,G)=>{switch(b){case 1:return G?q=>ve[q]:q=>Te[q];case 2:return G?q=>J[q>>1]:q=>se[q>>1];case 4:return G?q=>ce[q>>2]:q=>ue[q>>2];case 8:return G?q=>le[q>>3]:q=>Be[q>>3];default:throw new TypeError(`invalid integer width (${b}): ${T}`)}},bt=(T,b,G,q,ae)=>{b=Ne(b);const de=q===0n;let ge=xe=>xe;if(de){const xe=G*8;ge=Le=>BigInt.asUintN(xe,Le),ae=ge(ae)}Qe(T,{name:b,fromWireType:ge,toWireType:(xe,Le)=>(typeof Le=="number"&&(Le=BigInt(Le)),Le),readValueFromPointer:Me(b,G,!de),destructorFunction:null})},gt=(T,b,G,q)=>{b=Ne(b),Qe(T,{name:b,fromWireType:function(ae){return!!ae},toWireType:function(ae,de){return de?G:q},readValueFromPointer:function(ae){return this.fromWireType(Te[ae])},destructorFunction:null})},ht=T=>({count:T.count,deleteScheduled:T.deleteScheduled,preservePointerOnDelete:T.preservePointerOnDelete,ptr:T.ptr,ptrType:T.ptrType,smartPtr:T.smartPtr,smartPtrType:T.smartPtrType}),Ke=T=>{function b(G){return G.$$.ptrType.registeredClass.name}he(b(T)+" instance already deleted")},Ge=!1,B=T=>{},Re=T=>{T.smartPtr?T.smartPtrType.rawDestructor(T.smartPtr):T.ptrType.registeredClass.rawDestructor(T.ptr)},Ze=T=>{T.count.value-=1;var b=T.count.value===0;b&&Re(T)},Ve=T=>globalThis.FinalizationRegistry?(Ge=new FinalizationRegistry(b=>{Ze(b.$$)}),Ve=b=>{var G=b.$$,q=!!G.smartPtr;if(q){var ae={$$:G};Ge.register(b,ae,b)}return b},B=b=>Ge.unregister(b),Ve(T)):(Ve=b=>b,T),Ee=()=>{let T=V.prototype;Object.assign(T,{isAliasOf(G){if(!(this instanceof V)||!(G instanceof V))return!1;var q=this.$$.ptrType.registeredClass,ae=this.$$.ptr;G.$$=G.$$;for(var de=G.$$.ptrType.registeredClass,ge=G.$$.ptr;q.baseClass;)ae=q.upcast(ae),q=q.baseClass;for(;de.baseClass;)ge=de.upcast(ge),de=de.baseClass;return q===de&&ae===ge},clone(){if(this.$$.ptr||Ke(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var G=Ve(Object.create(Object.getPrototypeOf(this),{$$:{value:ht(this.$$)}}));return G.$$.count.value+=1,G.$$.deleteScheduled=!1,G},delete(){this.$$.ptr||Ke(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&he("Object already scheduled for deletion"),B(this),Ze(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ke(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&he("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const b=Symbol.dispose;b&&(T[b]=T.delete)};function V(){}var Se=(T,b)=>Object.defineProperty(b,"name",{value:T}),_e={},Ue=(T,b,G)=>{if(T[b].overloadTable===void 0){var q=T[b];T[b]=function(...ae){return T[b].overloadTable.hasOwnProperty(ae.length)||he(`Function '${G}' called with an invalid number of arguments (${ae.length}) - expects one of (${T[b].overloadTable})!`),T[b].overloadTable[ae.length].apply(this,ae)},T[b].overloadTable=[],T[b].overloadTable[q.argCount]=q}},qe=(T,b,G)=>{t.hasOwnProperty(T)?((G===void 0||t[T].overloadTable!==void 0&&t[T].overloadTable[G]!==void 0)&&he(`Cannot register public name '${T}' twice`),Ue(t,T,T),t[T].overloadTable.hasOwnProperty(G)&&he(`Cannot register multiple overloads of a function with the same number of arguments (${G})!`),t[T].overloadTable[G]=b):(t[T]=b,t[T].argCount=G)},xt=48,Mt=57,Nt=T=>{T=T.replace(/[^a-zA-Z0-9_]/g,"$");var b=T.charCodeAt(0);return b>=xt&&b<=Mt?`_${T}`:T};function zt(T,b,G,q,ae,de,ge,xe){this.name=T,this.constructor=b,this.instancePrototype=G,this.rawDestructor=q,this.baseClass=ae,this.getActualType=de,this.upcast=ge,this.downcast=xe,this.pureVirtualFunctions=[]}var _t=(T,b,G)=>{for(;b!==G;)b.upcast||he(`Expected null or instance of ${G.name}, got an instance of ${b.name}`),T=b.upcast(T),b=b.baseClass;return T},Tt=T=>{if(T===null)return"null";var b=typeof T;return b==="object"||b==="array"||b==="function"?T.toString():""+T};function Dn(T,b){if(b===null)return this.isReference&&he(`null is not a valid ${this.name}`),0;b.$$||he(`Cannot pass "${Tt(b)}" as a ${this.name}`),b.$$.ptr||he(`Cannot pass deleted object as a pointer of type ${this.name}`);var G=b.$$.ptrType.registeredClass,q=_t(b.$$.ptr,G,this.registeredClass);return q}function ci(T,b){var G;if(b===null)return this.isReference&&he(`null is not a valid ${this.name}`),this.isSmartPointer?(G=this.rawConstructor(),T!==null&&T.push(this.rawDestructor,G),G):0;(!b||!b.$$)&&he(`Cannot pass "${Tt(b)}" as a ${this.name}`),b.$$.ptr||he(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&b.$$.ptrType.isConst&&he(`Cannot convert argument of type ${b.$$.smartPtrType?b.$$.smartPtrType.name:b.$$.ptrType.name} to parameter type ${this.name}`);var q=b.$$.ptrType.registeredClass;if(G=_t(b.$$.ptr,q,this.registeredClass),this.isSmartPointer)switch(b.$$.smartPtr===void 0&&he("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:b.$$.smartPtrType===this?G=b.$$.smartPtr:he(`Cannot convert argument of type ${b.$$.smartPtrType?b.$$.smartPtrType.name:b.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:G=b.$$.smartPtr;break;case 2:if(b.$$.smartPtrType===this)G=b.$$.smartPtr;else{var ae=b.clone();G=this.rawShare(G,tt.toHandle(()=>ae.delete())),T!==null&&T.push(this.rawDestructor,G)}break;default:he("Unsupported sharing policy")}return G}function Ii(T,b){if(b===null)return this.isReference&&he(`null is not a valid ${this.name}`),0;b.$$||he(`Cannot pass "${Tt(b)}" as a ${this.name}`),b.$$.ptr||he(`Cannot pass deleted object as a pointer of type ${this.name}`),b.$$.ptrType.isConst&&he(`Cannot convert argument of type ${b.$$.ptrType.name} to parameter type ${this.name}`);var G=b.$$.ptrType.registeredClass,q=_t(b.$$.ptr,G,this.registeredClass);return q}var gi=(T,b,G)=>{if(b===G)return T;if(G.baseClass===void 0)return null;var q=gi(T,b,G.baseClass);return q===null?null:G.downcast(q)},yn={},Ni=(T,b)=>{for(b===void 0&&he("ptr should not be undefined");T.baseClass;)b=T.upcast(b),T=T.baseClass;return b},Oi=(T,b)=>(b=Ni(T,b),yn[b]),_i=(T,b)=>{(!b.ptrType||!b.ptr)&&ye("makeClassHandle requires ptr and ptrType");var G=!!b.smartPtrType,q=!!b.smartPtr;return G!==q&&ye("Both smartPtrType and smartPtr must be specified"),b.count={value:1},Ve(Object.create(T,{$$:{value:b,writable:!0}}))};function Bi(T){var b=this.getPointee(T);if(!b)return this.destructor(T),null;var G=Oi(this.registeredClass,b);if(G!==void 0){if(G.$$.count.value===0)return G.$$.ptr=b,G.$$.smartPtr=T,G.clone();var q=G.clone();return this.destructor(T),q}function ae(){return this.isSmartPointer?_i(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:b,smartPtrType:this,smartPtr:T}):_i(this.registeredClass.instancePrototype,{ptrType:this,ptr:T})}var de=this.registeredClass.getActualType(b),ge=_e[de];if(!ge)return ae.call(this);var xe;this.isConst?xe=ge.constPointerType:xe=ge.pointerType;var Le=gi(b,this.registeredClass,xe.registeredClass);return Le===null?ae.call(this):this.isSmartPointer?_i(xe.registeredClass.instancePrototype,{ptrType:xe,ptr:Le,smartPtrType:this,smartPtr:T}):_i(xe.registeredClass.instancePrototype,{ptrType:xe,ptr:Le})}var wr=()=>{Object.assign(ki.prototype,{getPointee(T){return this.rawGetPointee&&(T=this.rawGetPointee(T)),T},destructor(T){var b;(b=this.rawDestructor)==null||b.call(this,T)},readValueFromPointer:Rt,fromWireType:Bi})};function ki(T,b,G,q,ae,de,ge,xe,Le,lt,ft){this.name=T,this.registeredClass=b,this.isReference=G,this.isConst=q,this.isSmartPointer=ae,this.pointeeType=de,this.sharingPolicy=ge,this.rawGetPointee=xe,this.rawConstructor=Le,this.rawShare=lt,this.rawDestructor=ft,!ae&&b.baseClass===void 0?q?(this.toWireType=Dn,this.destructorFunction=null):(this.toWireType=Ii,this.destructorFunction=null):this.toWireType=ci}var L=(T,b,G)=>{t.hasOwnProperty(T)||ye("Replacing nonexistent public symbol"),t[T].overloadTable!==void 0&&G!==void 0?t[T].overloadTable[G]=b:(t[T]=b,t[T].argCount=G)},j=[],re=T=>{var b=j[T];return b||(j[T]=b=Gi.get(T)),b},ne=(T,b,G=!1)=>{T=Ne(T);function q(){var de=re(b);return de}var ae=q();return typeof ae!="function"&&he(`unknown function pointer with signature ${T}: ${b}`),ae};class ie extends Error{}var ke=T=>{var b=Js(T),G=Ne(b);return On(b),G},Pe=(T,b)=>{var G=[],q={};function ae(de){if(!q[de]&&!F[de]){if(C[de]){C[de].forEach(ae);return}G.push(de),q[de]=!0}}throw b.forEach(ae),new ie(`${T}: `+G.map(ke).join([", "]))},ot=(T,b,G,q,ae,de,ge,xe,Le,lt,ft,Ct,Je)=>{ft=Ne(ft),de=ne(ae,de),xe&&(xe=ne(ge,xe)),lt&&(lt=ne(Le,lt)),Je=ne(Ct,Je);var wt=Nt(ft);qe(wt,function(){Pe(`Cannot construct ${ft} due to unbound types`,[q])}),me([T,b,G],q?[q]:[],jt=>{var Ms;jt=jt[0];var Ht,Bn;q?(Ht=jt.registeredClass,Bn=Ht.instancePrototype):Bn=V.prototype;var kn=Se(ft,function(...Es){if(Object.getPrototypeOf(this)!==Ei)throw new Fe(`Use 'new' to construct ${ft}`);if(wn.constructor_body===void 0)throw new Fe(`${ft} has no accessible constructor`);var to=wn.constructor_body[Es.length];if(to===void 0)throw new Fe(`Tried to invoke ctor of ${ft} with invalid number of parameters (${Es.length}) - expected (${Object.keys(wn.constructor_body).toString()}) parameters instead!`);return to.apply(this,Es)}),Ei=Object.create(Bn,{constructor:{value:kn}});kn.prototype=Ei;var wn=new zt(ft,kn,Ei,Je,Ht,de,xe,lt);wn.baseClass&&((Ms=wn.baseClass).__derivedClasses??(Ms.__derivedClasses=[]),wn.baseClass.__derivedClasses.push(wn));var va=new ki(ft,wn,!0,!1,!1),ys=new ki(ft+"*",wn,!1,!1,!1),xs=new ki(ft+" const*",wn,!1,!0,!1);return _e[T]={pointerType:ys,constPointerType:xs},L(wt,kn),[va,ys,xs]})},st=(T,b)=>{for(var G=[],q=0;q<T;q++)G.push(ue[b+q*4>>2]);return G};function dt(T){for(var b=1;b<T.length;++b)if(T[b]!==null&&T[b].destructorFunction===void 0)return!0;return!1}function pt(T,b,G,q){var ae=dt(T),de=T.length-2,ge=[],xe=["fn"];b&&xe.push("thisWired");for(var Le=0;Le<de;++Le)ge.push(`arg${Le}`),xe.push(`arg${Le}Wired`);ge=ge.join(","),xe=xe.join(",");var lt=`return function (${ge}) {
`;ae&&(lt+=`var destructors = [];
`);var ft=ae?"destructors":"null",Ct=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];b&&(lt+=`var thisWired = toClassParamWire(${ft}, this);
`);for(var Le=0;Le<de;++Le){var Je=`toArg${Le}Wire`;lt+=`var arg${Le}Wired = ${Je}(${ft}, arg${Le});
`,Ct.push(Je)}if(lt+=(G||q?"var rv = ":"")+`invoker(${xe});
`,ae)lt+=`runDestructors(destructors);
`;else for(var Le=b?1:2;Le<T.length;++Le){var wt=Le===1?"thisWired":"arg"+(Le-2)+"Wired";T[Le].destructorFunction!==null&&(lt+=`${wt}_dtor(${wt});
`,Ct.push(`${wt}_dtor`))}return G&&(lt+=`var ret = fromRetWire(rv);
return ret;
`),lt+=`}
`,new Function(Ct,lt)}function at(T,b,G,q,ae,de){var ge=b.length;ge<2&&he("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var xe=b[1]!==null&&G!==null,Le=dt(b),lt=!b[0].isVoid,ft=b[0],Ct=b[1],Je=[T,he,q,ae,$e,ft.fromWireType.bind(ft),Ct==null?void 0:Ct.toWireType.bind(Ct)],wt=2;wt<ge;++wt){var jt=b[wt];Je.push(jt.toWireType.bind(jt))}if(!Le)for(var wt=xe?1:2;wt<b.length;++wt)b[wt].destructorFunction!==null&&Je.push(b[wt].destructorFunction);var Bn=pt(b,xe,lt,de)(...Je);return Se(T,Bn)}var Ot=(T,b,G,q,ae,de)=>{var ge=st(b,G);ae=ne(q,ae),me([],[T],xe=>{xe=xe[0];var Le=`constructor ${xe.name}`;if(xe.registeredClass.constructor_body===void 0&&(xe.registeredClass.constructor_body=[]),xe.registeredClass.constructor_body[b-1]!==void 0)throw new Fe(`Cannot register multiple constructors with identical number of parameters (${b-1}) for class '${xe.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return xe.registeredClass.constructor_body[b-1]=()=>{Pe(`Cannot construct ${xe.name} due to unbound types`,ge)},me([],ge,lt=>(lt.splice(1,0,null),xe.registeredClass.constructor_body[b-1]=at(Le,lt,null,ae,de),[])),[]})},an=T=>{T=T.trim();const b=T.indexOf("(");return b===-1?T:T.slice(0,b)},qt=(T,b,G,q,ae,de,ge,xe,Le,lt)=>{var ft=st(G,q);b=Ne(b),b=an(b),de=ne(ae,de,Le),me([],[T],Ct=>{Ct=Ct[0];var Je=`${Ct.name}.${b}`;b.startsWith("@@")&&(b=Symbol[b.substring(2)]),xe&&Ct.registeredClass.pureVirtualFunctions.push(b);function wt(){Pe(`Cannot call ${Je} due to unbound types`,ft)}var jt=Ct.registeredClass.instancePrototype,Ht=jt[b];return Ht===void 0||Ht.overloadTable===void 0&&Ht.className!==Ct.name&&Ht.argCount===G-2?(wt.argCount=G-2,wt.className=Ct.name,jt[b]=wt):(Ue(jt,b,Je),jt[b].overloadTable[G-2]=wt),me([],ft,Bn=>{var kn=at(Je,Bn,Ct,de,ge,Le);return jt[b].overloadTable===void 0?(kn.argCount=G-2,jt[b]=kn):jt[b].overloadTable[G-2]=kn,[]}),[]})},nn=[],Pt=[0,1,,1,null,1,!0,1,!1,1],mt=T=>{T>9&&--Pt[T+1]===0&&(Pt[T]=void 0,nn.push(T))},tt={toValue:T=>(T||he(`Cannot use deleted val. handle = ${T}`),Pt[T]),toHandle:T=>{switch(T){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const b=nn.pop()||Pt.length;return Pt[b]=T,Pt[b+1]=1,b}}}},Bt={name:"emscripten::val",fromWireType:T=>{var b=tt.toValue(T);return mt(T),b},toWireType:(T,b)=>tt.toHandle(b),readValueFromPointer:Rt,destructorFunction:null},Wn=T=>Qe(T,Bt),Tr=(T,b)=>{switch(b){case 4:return function(G){return this.fromWireType(be[G>>2])};case 8:return function(G){return this.fromWireType(ze[G>>3])};default:throw new TypeError(`invalid float width (${b}): ${T}`)}},vi=(T,b,G)=>{b=Ne(b),Qe(T,{name:b,fromWireType:q=>q,toWireType:(q,ae)=>ae,readValueFromPointer:Tr(b,G),destructorFunction:null})},zi=(T,b,G,q,ae,de,ge,xe)=>{var Le=st(b,G);T=Ne(T),T=an(T),ae=ne(q,ae,ge),qe(T,function(){Pe(`Cannot call ${T} due to unbound types`,Le)},b-1),me([],Le,lt=>{var ft=[lt[0],null].concat(lt.slice(1));return L(T,at(T,ft,null,ae,de,ge),b-1),[]})},rn=(T,b,G,q,ae)=>{b=Ne(b);const de=q===0;let ge=Le=>Le;if(de){var xe=32-8*G;ge=Le=>Le<<xe>>>xe,ae=ge(ae)}Qe(T,{name:b,fromWireType:ge,toWireType:(Le,lt)=>lt,readValueFromPointer:Me(b,G,q!==0),destructorFunction:null})},Nn=(T,b,G)=>{const q=(ae,de)=>{let ge=0;return{next(){if(ge>=ae)return{done:!0};const xe=ge;return ge++,{value:de(xe),done:!1}},[Symbol.iterator](){return this}}};T[Symbol.iterator]||(T[Symbol.iterator]=function(){const ae=this[b]();return q(ae,de=>this[G](de))})},nr=(T,b,G,q)=>{G=Ne(G),q=Ne(q),me([],[T,b],ae=>{const de=ae[0];return Nn(de.registeredClass.instancePrototype,G,q),[]})},gn=(T,b,G)=>{var q=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],ae=q[b];function de(ge){var xe=ue[ge>>2],Le=ue[ge+4>>2];return new ae(ve.buffer,Le,xe)}G=Ne(G),Qe(T,{name:G,fromWireType:de,readValueFromPointer:de},{ignoreDuplicateRegistrations:!0})},S=Object.assign({optional:!0},Bt),ln=(T,b)=>{Qe(T,S)},Ar=(T,b,G,q)=>{if(!(q>0))return 0;for(var ae=G,de=G+q-1,ge=0;ge<T.length;++ge){var xe=T.codePointAt(ge);if(xe<=127){if(G>=de)break;b[G++]=xe}else if(xe<=2047){if(G+1>=de)break;b[G++]=192|xe>>6,b[G++]=128|xe&63}else if(xe<=65535){if(G+2>=de)break;b[G++]=224|xe>>12,b[G++]=128|xe>>6&63,b[G++]=128|xe&63}else{if(G+3>=de)break;b[G++]=240|xe>>18,b[G++]=128|xe>>12&63,b[G++]=128|xe>>6&63,b[G++]=128|xe&63,ge++}}return b[G]=0,G-ae},ca=(T,b,G)=>Ar(T,Te,b,G),ua=T=>{for(var b=0,G=0;G<T.length;++G){var q=T.charCodeAt(G);q<=127?b++:q<=2047?b+=2:q>=55296&&q<=57343?(b+=4,++G):b+=3}return b},Ws=globalThis.TextDecoder&&new TextDecoder,ei=(T,b,G,q)=>{var ae=b+G;if(q)return ae;for(;T[b]&&!(b>=ae);)++b;return b},fa=(T,b=0,G,q)=>{var ae=ei(T,b,G,q);if(ae-b>16&&T.buffer&&Ws)return Ws.decode(T.subarray(b,ae));for(var de="";b<ae;){var ge=T[b++];if(!(ge&128)){de+=String.fromCharCode(ge);continue}var xe=T[b++]&63;if((ge&224)==192){de+=String.fromCharCode((ge&31)<<6|xe);continue}var Le=T[b++]&63;if((ge&240)==224?ge=(ge&15)<<12|xe<<6|Le:ge=(ge&7)<<18|xe<<12|Le<<6|T[b++]&63,ge<65536)de+=String.fromCharCode(ge);else{var lt=ge-65536;de+=String.fromCharCode(55296|lt>>10,56320|lt&1023)}}return de},$s=(T,b,G)=>T?fa(Te,T,b,G):"",cn=(T,b)=>{b=Ne(b),Qe(T,{name:b,fromWireType(G){var q=ue[G>>2],ae=G+4,de;return de=$s(ae,q,!0),On(G),de},toWireType(G,q){q instanceof ArrayBuffer&&(q=new Uint8Array(q));var ae,de=typeof q=="string";de||ArrayBuffer.isView(q)&&q.BYTES_PER_ELEMENT==1||he("Cannot pass non-string to std::string"),de?ae=ua(q):ae=q.length;var ge=gs(4+ae+1),xe=ge+4;return ue[ge>>2]=ae,de?ca(q,xe,ae+1):Te.set(q,xe),G!==null&&G.push(On,ge),ge},readValueFromPointer:Rt,destructorFunction(G){On(G)}})},yi=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,xi=(T,b,G)=>{var q=T>>1,ae=ei(se,q,b/2,G);if(ae-q>16&&yi)return yi.decode(se.subarray(q,ae));for(var de="",ge=q;ge<ae;++ge){var xe=se[ge];de+=String.fromCharCode(xe)}return de},Cr=(T,b,G)=>{if(G??(G=2147483647),G<2)return 0;G-=2;for(var q=b,ae=G<T.length*2?G/2:T.length,de=0;de<ae;++de){var ge=T.charCodeAt(de);J[b>>1]=ge,b+=2}return J[b>>1]=0,b-q},Hi=T=>T.length*2,At=(T,b,G)=>{for(var q="",ae=T>>2,de=0;!(de>=b/4);de++){var ge=ue[ae+de];if(!ge&&!G)break;q+=String.fromCodePoint(ge)}return q},Xs=(T,b,G)=>{if(G??(G=2147483647),G<4)return 0;for(var q=b,ae=q+G-4,de=0;de<T.length;++de){var ge=T.codePointAt(de);if(ge>65535&&de++,ce[b>>2]=ge,b+=4,b+4>ae)break}return ce[b>>2]=0,b-q},Rr=T=>{for(var b=0,G=0;G<T.length;++G){var q=T.codePointAt(G);q>65535&&G++,b+=4}return b},ui=(T,b,G)=>{G=Ne(G);var q,ae,de;b===2?(q=xi,ae=Cr,de=Hi):(q=At,ae=Xs,de=Rr),Qe(T,{name:G,fromWireType:ge=>{var xe=ue[ge>>2],Le=q(ge+4,xe*b,!0);return On(ge),Le},toWireType:(ge,xe)=>{typeof xe!="string"&&he(`Cannot pass non-string to C++ string type ${G}`);var Le=de(xe),lt=gs(4+Le+b);return ue[lt>>2]=Le/b,ae(xe,lt+4,Le+b),ge!==null&&ge.push(On,lt),lt},readValueFromPointer:Rt,destructorFunction(ge){On(ge)}})},ha=(T,b,G,q,ae,de)=>{rt[T]={name:Ne(b),rawConstructor:ne(G,q),rawDestructor:ne(ae,de),fields:[]}},Fn=(T,b,G,q,ae,de,ge,xe,Le,lt)=>{rt[T].fields.push({fieldName:Ne(b),getterReturnType:G,getter:ne(q,ae),getterContext:de,setterArgumentType:ge,setter:ne(xe,Le),setterContext:lt})},Ys=(T,b)=>{b=Ne(b),Qe(T,{isVoid:!0,name:b,fromWireType:()=>{},toWireType:(G,q)=>{}})},ds=[],$n=T=>{var b=ds.length;return ds.push(T),b},da=(T,b)=>{var G=F[T];return G===void 0&&he(`${b} has unknown type ${ke(T)}`),G},pa=(T,b)=>{for(var G=new Array(T),q=0;q<T;++q)G[q]=da(ue[b+q*4>>2],`parameter ${q}`);return G},ps=(T,b,G)=>{var q=[],ae=T(q,G);return q.length&&(ue[b>>2]=tt.toHandle(q)),ae},ms={},qs=T=>{var b=ms[T];return b===void 0?Ne(T):b},ma=(T,b,G)=>{var q=8,[ae,...de]=pa(T,b),ge=ae.toWireType.bind(ae),xe=de.map(wt=>wt.readValueFromPointer.bind(wt));T--;var Le={toValue:tt.toValue},lt=xe.map((wt,jt)=>{var Ht=`argFromPtr${jt}`;return Le[Ht]=wt,`${Ht}(args${jt?"+"+jt*q:""})`}),ft;switch(G){case 0:ft="toValue(handle)";break;case 2:ft="new (toValue(handle))";break;case 3:ft="";break;case 1:Le.getStringOrSymbol=qs,ft="toValue(handle)[getStringOrSymbol(methodName)]";break}ft+=`(${lt})`,ae.isVoid||(Le.toReturnWire=ge,Le.emval_returnValue=ps,ft=`return emval_returnValue(toReturnWire, destructorsRef, ${ft})`),ft=`return function (handle, methodName, destructorsRef, args) {
${ft}
}`;var Ct=new Function(Object.keys(Le),ft)(...Object.values(Le)),Je=`methodCaller<(${de.map(wt=>wt.name)}) => ${ae.name}>`;return $n(Se(Je,Ct))},js=(T,b,G,q,ae)=>ds[T](b,G,q,ae),Zs=T=>{var b=tt.toValue(T);$e(b),mt(T)},Ks=T=>{K("OOM")},ga=T=>{Te.length,Ks()};if(Ee(),wr(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(v=t.printErr),t.wasmBinary&&(x=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var Js,gs,On,_s,Gi;function _a(T){Js=T.A,gs=T.C,On=T.D,_s=T.y,Gi=T.B}var Pr={g:Yt,q:et,t:we,m:bt,v:gt,j:ot,i:Ot,b:qt,s:Wn,l:vi,d:zi,c:rn,h:nr,a:gn,k:ln,u:cn,f:ui,x:ha,e:Fn,w:Ys,p:ma,o:js,n:Zs,r:ga};function Vi(){X();function T(){var b;t.calledRun=!0,!E&&(k(),_==null||_(t),(b=t.onRuntimeInitialized)==null||b.call(t),N())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),T()},1)):T()}var Mi;return Mi=await $(),Vi(),w?e=t:e=new Promise((T,b)=>{_=T,P=b}),e}let Wt=null,hl=null;async function Ix(){return Wt||(hl||(hl=Ux({locateFile:e=>e.endsWith(".wasm")?new URL("/assets/nfp_core-Boio3UuO.wasm",import.meta.url).href:e}).then(e=>(Wt=e,console.log("NfpCore WASM loaded successfully!"),Wt)).catch(e=>{console.error("Failed to initialize WASM nfp_core:",e),Wt=null})),hl)}function cs(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].x,i[t].y);return e}function er(i,e){const t=new e.VectorDouble;for(let n=0;n<i.length;n++)t.push_back(i[n]);return t}function Nx(i,e){const t=new e.VectorInt;for(let n=0;n<i.length;n++)t.push_back(i[n]);return t}function Qf(i){const e=[],t=i.size();for(let n=0;n<t;n+=2)e.push({x:i.get(n),y:i.get(n+1)});return e}function Ox(i,e,t=0){if(Wt){const r=cs(i),s=cs(e),c=er(r,Wt),l=er(s,Wt),u=Wt.polygonsOverlapFlat(c,l,t);return c.delete(),l.delete(),u}const n=[i,e];for(let r=0;r<n.length;r++){const s=n[r];for(let c=0;c<s.length;c++){const l=(c+1)%s.length,u=s[c],f=s[l],d={x:-(f.y-u.y),y:f.x-u.x},p=Math.sqrt(d.x*d.x+d.y*d.y);if(p===0)continue;d.x/=p,d.y/=p;let m=1/0,v=-1/0;for(const y of i){const _=d.x*y.x+d.y*y.y;_<m&&(m=_),_>v&&(v=_)}let x=1/0,E=-1/0;for(const y of e){const _=d.x*y.x+d.y*y.y;_<x&&(x=_),_>E&&(E=_)}if(v+t<x||E+t<m)return!1}}return!0}function No(i){let e=0,t=0;for(const n of i)e+=n.x,t+=n.y;return{x:e/i.length,y:t/i.length}}function dl(i,e,t){return i.map(n=>({x:n.x+e,y:n.y+t}))}function pl(i,e){const t=Math.cos(e),n=Math.sin(e);return i.map(r=>({x:r.x*t-r.y*n,y:r.x*n+r.y*t}))}function eh(i){let e=1/0,t=-1/0,n=1/0,r=-1/0;for(const s of i)s.x<e&&(e=s.x),s.x>t&&(t=s.x),s.y<n&&(n=s.y),s.y>r&&(r=s.y);return{minX:e,maxX:t,minY:n,maxY:r,width:t-e,height:r-n}}function th(i){if(Wt){const s=cs(i),c=er(s,Wt),l=Wt.convexHullFlat(c),u=Qf(l);return c.delete(),l.delete(),u}if(i.length<=3)return[...i];const e=[...i].sort((s,c)=>s.x!==c.x?s.x-c.x:s.y-c.y),t=(s,c,l)=>(c.x-s.x)*(l.y-s.y)-(c.y-s.y)*(l.x-s.x),n=[];for(const s of e){for(;n.length>=2&&t(n[n.length-2],n[n.length-1],s)<=0;)n.pop();n.push(s)}const r=[];for(let s=e.length-1;s>=0;s--){const c=e[s];for(;r.length>=2&&t(r[r.length-2],r[r.length-1],c)<=0;)r.pop();r.push(c)}return r.pop(),n.pop(),n.concat(r)}function Bx(i,e=24){if(i.length<=e)return i;const t=[],n=i.length/e;for(let r=0;r<e;r++){const s=Math.floor(r*n);t.push(i[s])}return t}function kx(i,e){if(Wt){const x=cs(i),E=cs(e),y=er(x,Wt),_=er(E,Wt),P=Wt.minkowskiSumFlat(y,_),w=Qf(P);return y.delete(),_.delete(),P.delete(),w}const t=e.map(x=>({x:-x.x,y:-x.y})),n=x=>{let E=0;for(let y=1;y<x.length;y++)(x[y].y<x[E].y||x[y].y===x[E].y&&x[y].x<x[E].x)&&(E=y);return E},r=x=>{const E=n(x);return[...x.slice(E),...x.slice(0,E)]},s=r(i),c=r(t),l=(x,E)=>{const y=(E+1)%x.length;return Math.atan2(x[y].y-x[E].y,x[y].x-x[E].x)},u=[];let f=0,d=0,p={x:s[0].x+c[0].x,y:s[0].y+c[0].y};const m=s.length,v=c.length;for(;f<m||d<v;){u.push({...p});const x=f<m?l(s,f%m):1/0,E=d<v?l(c,d%v):1/0;if(Math.abs(x-E)<1e-10){const y=s[(f+1)%m].x-s[f%m].x,_=s[(f+1)%m].y-s[f%m].y;p={x:p.x+y,y:p.y+_},f++,d++}else if(x<=E){const y=s[(f+1)%m].x-s[f%m].x,_=s[(f+1)%m].y-s[f%m].y;p={x:p.x+y,y:p.y+_},f++}else{const y=c[(d+1)%v].x-c[d%v].x,_=c[(d+1)%v].y-c[d%v].y;p={x:p.x+y,y:p.y+_},d++}}return u}function zx(i,e){const t=[];for(let n=0;n<i.length;n++){const r=i[n],s=i[(n+1)%i.length],c=s.x-r.x,l=s.y-r.y,u=Math.sqrt(c*c+l*l),f=Math.max(1,Math.ceil(u/e));for(let d=0;d<f;d++){const p=d/f;t.push({x:r.x+c*p,y:r.y+l*p})}}return t}function Hx(i,e){for(const t of i)if(t.x<-e||t.x>e||t.y<-e||t.y>e)return!1;return!0}class Gx{constructor(e=100,t=2,n=1.5){this.bedSize=e,this.spacing=t,this.edgeStep=n}arrange(e){const t=[],r=[...e].map(l=>{const u=eh(l.footprint);return{...l,area:u.width*u.height}}).sort((l,u)=>u.area-l.area).map(l=>{const u=th(l.footprint),f=Bx(u,24);return{...l,hull:f}}),s=[0,Math.PI/4,Math.PI/2,3*Math.PI/4,Math.PI,5*Math.PI/4,3*Math.PI/2,7*Math.PI/4],c=this.bedSize/2;for(const l of r){if(Wt){const x=cs(l.hull),E=[],y=[],_=[];for(const N of t){y.push(N.polygon.length);const K=No(N.polygon);_.push(K.x,K.y);for(const R of N.polygon)E.push(R.x,R.y)}const P=er(x,Wt),w=er(E,Wt),O=Nx(y,Wt),X=er(_,Wt),k=Wt.arrangeSingleItem(P,w,O,X,this.bedSize,this.spacing,this.edgeStep);if(P.delete(),w.delete(),O.delete(),X.delete(),k.success){const N=pl(l.hull,k.rotation),K=dl(N,k.x,k.y);t.push({id:l.id,x:k.x,y:k.y,rotation:k.rotation,polygon:K});continue}}let u=null,f=1/0,d=0;for(const x of s){const E=pl(l.hull,x),y=this._generateCandidates(E,t);for(const _ of y){const P=dl(E,_.x,_.y);if(!Hx(P,c))continue;let w=!1;for(const N of t)if(Ox(P,N.polygon,this.spacing)){w=!0;break}if(w)continue;const O=Math.sqrt(_.x*_.x+_.y*_.y);let X=0;if(t.length>0){X=1/0;const N=No(P);for(const K of t){const R=No(K.polygon),I=N.x-R.x,z=N.y-R.y,ee=Math.sqrt(I*I+z*z);ee<X&&(X=ee)}}const k=O*.3+X*.7;k<f&&(f=k,u=_,d=x)}}const p=u||{x:0,y:0},m=pl(l.hull,d),v=dl(m,p.x,p.y);t.push({id:l.id,x:p.x,y:p.y,rotation:d,polygon:v})}return t}_generateCandidates(e,t){const n=[];if(t.length===0){const l=Math.max(3,this.edgeStep*2),u=this.bedSize/2;n.push({x:0,y:0});for(let f=l;f<=u;f+=l){for(let d=-f;d<=f;d+=l)n.push({x:d,y:-f}),n.push({x:d,y:f});for(let d=-f+l;d<f;d+=l)n.push({x:-f,y:d}),n.push({x:f,y:d})}return n}const r=No(e);for(const l of t){let u;try{u=kx(l.polygon,e)}catch{continue}const f=zx(u,this.edgeStep);for(const d of f)n.push({x:d.x-r.x,y:d.y-r.y})}const s=Math.max(8,this.bedSize/20),c=this.bedSize/2;for(let l=-c;l<=c;l+=s)for(let u=-c;u<=c;u+=s)n.push({x:l,y:u});return n}}var jo=(()=>{var i=import.meta.url;return async function(e={}){var t,n=e,r,s,c=new Promise((o,a)=>{r=o,s=a}),l=typeof window=="object",u=typeof WorkerGlobalScope<"u",f=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",d=!l&&!f&&!u;if(f){const{createRequire:o}=await Us(()=>import("./chunks/__vite-browser-external-BIHI7g3E.js"),[]);var p=o(import.meta.url)}var m=Object.assign({},n),v="./this.program",x="";function E(o){return n.locateFile?n.locateFile(o,x):x+o}var y,_;if(f){if(typeof process>"u"||!process.release||process.release.name!=="node")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var P=process.versions.node,w=P.split(".").slice(0,3);if(w=w[0]*1e4+w[1]*100+w[2].split("-")[0]*1,w<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+P+")");var O=p("fs"),X=p("path");import.meta.url.startsWith("data:")||(x=X.dirname(p("url").fileURLToPath(import.meta.url))+"/"),_=o=>{o=se(o)?new URL(o):o;var a=O.readFileSync(o);return z(Buffer.isBuffer(a)),a},y=async(o,a=!0)=>{o=se(o)?new URL(o):o;var h=O.readFileSync(o,a?void 0:"utf8");return z(a?Buffer.isBuffer(h):typeof h=="string"),h},!n.thisProgram&&process.argv.length>1&&(v=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2)}else if(d){if(typeof process=="object"&&typeof p=="function"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(l||u){if(u?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),i&&(x=i),x.startsWith("blob:")?x="":x=x.slice(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");u&&(_=o=>{var a=new XMLHttpRequest;return a.open("GET",o,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async o=>{z(!se(o),"readAsync does not work with file:// URLs");var a=await fetch(o,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var k=n.print||console.log.bind(console),N=n.printErr||console.error.bind(console);Object.assign(n,m),m=null,Pd(),n.arguments&&n.arguments,nt("arguments","arguments_"),n.thisProgram&&(v=n.thisProgram),nt("thisProgram","thisProgram"),z(typeof n.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof n.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),z(typeof n.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),z(typeof n.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),z(typeof n.read>"u","Module.read option was removed"),z(typeof n.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),z(typeof n.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),z(typeof n.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),z(typeof n.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),nt("asm","wasmExports"),nt("readAsync","readAsync"),nt("readBinary","readBinary"),nt("setWindowTitle","setWindowTitle"),z(!d,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var K=n.wasmBinary;nt("wasmBinary","wasmBinary"),typeof WebAssembly!="object"&&N("no native wasm support detected");var R,I=!1;function z(o,a){o||he("Assertion failed"+(a?": "+a:""))}var ee,pe,W,Z,$,J,ce,le,ve,be,ze=!1,se=o=>o.startsWith("file://");function ue(){var o=ac();z((o&3)==0),o==0&&(o+=4),J[o>>>2>>>0]=34821223,J[o+4>>>2>>>0]=2310721022,J[0]=1668509029}function Be(){if(!I){var o=ac();o==0&&(o+=4);var a=J[o>>>2>>>0],h=J[o+4>>>2>>>0];(a!=34821223||h!=2310721022)&&he(`Stack overflow! Stack cookie has been overwritten at ${Se(o)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Se(h)} ${Se(a)}`),J[0]!=1668509029&&he("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class Te extends Error{}class je extends Te{constructor(a){super(a),this.excPtr=a;const h=rc(a);this.name=h[0],this.message=h[1]}}if((()=>{var o=new Int16Array(1),a=new Int8Array(o.buffer);if(o[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),n.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");function nt(o,a,h=!0){Object.getOwnPropertyDescriptor(n,o)||Object.defineProperty(n,o,{configurable:!0,get(){let g=h?" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)":"";he(`\`Module.${o}\` has been replaced by \`${a}\``+g)}})}function ct(o){Object.getOwnPropertyDescriptor(n,o)||Object.defineProperty(n,o,{configurable:!0,set(){he(`Attempt to set \`Module.${o}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function it(o){Object.getOwnPropertyDescriptor(n,o)&&he(`\`Module.${o}\` was supplied but \`${o}\` not included in INCOMING_MODULE_JS_API`)}function yt(o){return o==="FS_createPath"||o==="FS_createDataFile"||o==="FS_createPreloadedFile"||o==="FS_unlink"||o==="addRunDependency"||o==="FS_createLazyFile"||o==="FS_createDevice"||o==="removeRunDependency"}function te(o,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,o)&&Object.defineProperty(globalThis,o,{configurable:!0,get(){a()}})}function Yt(o,a){te(o,()=>{qe(`\`${o}\` is not longer defined by emscripten. ${a}`)})}Yt("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Yt("asm","Please use wasmExports instead");function et(o){te(o,()=>{var a=`\`${o}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,h=o;h.startsWith("_")||(h="$"+o),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${h}')`,yt(o)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),qe(a)}),rt(o)}function rt(o){Object.getOwnPropertyDescriptor(n,o)||Object.defineProperty(n,o,{configurable:!0,get(){var a=`'${o}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;yt(o)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),he(a)}})}function $e(){var o=R.buffer;n.HEAP8=ee=new Int8Array(o),n.HEAP16=W=new Int16Array(o),n.HEAPU8=pe=new Uint8Array(o),n.HEAPU16=Z=new Uint16Array(o),n.HEAP32=$=new Int32Array(o),n.HEAPU32=J=new Uint32Array(o),n.HEAPF32=ce=new Float32Array(o),n.HEAPF64=be=new Float64Array(o),n.HEAP64=le=new BigInt64Array(o),n.HEAPU64=ve=new BigUint64Array(o)}z(!n.STACK_SIZE,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),z(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),z(!n.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),z(!n.INITIAL_MEMORY,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");function Rt(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)V(n.preRun.shift());ct("preRun"),Re(Ee)}function ut(){z(!ze),ze=!0,Be(),!n.noFSInit&&!S.initialized&&S.init(),Tn.__wasm_call_ctors(),S.ignorePermissions=!1}function F(){if(Be(),n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Ve(n.postRun.shift());ct("postRun"),Re(Ze)}var C=0,Q=null,ye={},me=null;function we(o){for(var a=o;;){if(!ye[o])return o;o=a+Math.random()}}function Ne(o){var a;C++,(a=n.monitorRunDependencies)==null||a.call(n,C),o?(z(!ye[o]),ye[o]=1,me===null&&typeof setInterval<"u"&&(me=setInterval(()=>{if(I){clearInterval(me),me=null;return}var h=!1;for(var g in ye)h||(h=!0,N("still waiting on run dependencies:")),N(`dependency: ${g}`);h&&N("(end of list)")},1e4))):N("warning: run dependency added without ID")}function Fe(o){var h;if(C--,(h=n.monitorRunDependencies)==null||h.call(n,C),o?(z(ye[o]),delete ye[o]):N("warning: run dependency removed without ID"),C==0&&(me!==null&&(clearInterval(me),me=null),Q)){var a=Q;Q=null,a()}}function he(o){var h;(h=n.onAbort)==null||h.call(n,o),o="Aborted("+o+")",N(o),I=!0;var a=new WebAssembly.RuntimeError(o);throw s(a),a}function Xe(o,a){return(...h)=>{z(ze,`native function \`${o}\` called before runtime initialization`);var g=Tn[o];return z(g,`exported native function \`${o}\` not found`),z(h.length<=a,`native function \`${o}\` called with ${h.length} args but expects ${a}`),g(...h)}}var Qe;function Me(){return n.locateFile?E("lib3mf.wasm"):new URL("/assets/lib3mf-CffIHwNd.wasm",import.meta.url).href}function bt(o){if(o==Qe&&K)return new Uint8Array(K);if(_)return _(o);throw"both async and sync fetching of the wasm failed"}async function gt(o){if(!K)try{var a=await y(o);return new Uint8Array(a)}catch{}return bt(o)}async function ht(o,a){try{var h=await gt(o),g=await WebAssembly.instantiate(h,a);return g}catch(M){N(`failed to asynchronously prepare wasm: ${M}`),se(Qe)&&N(`warning: Loading from a file URI (${Qe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),he(M)}}async function Ke(o,a,h){if(!o&&typeof WebAssembly.instantiateStreaming=="function"&&!f)try{var g=fetch(a,{credentials:"same-origin"}),M=await WebAssembly.instantiateStreaming(g,h);return M}catch(A){N(`wasm streaming compile failed: ${A}`),N("falling back to ArrayBuffer instantiation")}return ht(a,h)}function Ge(){return{env:sc,wasi_snapshot_preview1:sc}}async function B(){function o(D,U){return Tn=D.exports,Tn=gp(Tn),R=Tn.memory,z(R,"memory not found in wasm exports"),$e(),Ct=Tn.__indirect_function_table,z(Ct,"table not found in wasm exports"),Fe("wasm-instantiate"),Tn}Ne("wasm-instantiate");var a=n;function h(D){return z(n===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,o(D.instance)}var g=Ge();if(n.instantiateWasm)return new Promise((D,U)=>{try{n.instantiateWasm(g,(Y,oe)=>{o(Y,oe),D(Y.exports)})}catch(Y){N(`Module.instantiateWasm callback failed with error: ${Y}`),U(Y)}});Qe??(Qe=Me());try{var M=await Ke(K,Qe,g),A=h(M);return A}catch(D){return s(D),Promise.reject(D)}}var Re=o=>{for(;o.length>0;)o.shift()(n)},Ze=[],Ve=o=>Ze.unshift(o),Ee=[],V=o=>Ee.unshift(o);n.noExitRuntime;var Se=o=>(z(typeof o=="number"),"0x"+o.toString(16).padStart(8,"0")),_e=o=>Nd(o),Ue=()=>Bd(),qe=o=>{qe.shown||(qe.shown={}),qe.shown[o]||(qe.shown[o]=1,f&&(o="warning: "+o),N(o))},xt=9007199254740992,Mt=-9007199254740992,Nt=o=>o<Mt||o>xt?NaN:Number(o),zt=typeof TextDecoder<"u"?new TextDecoder:void 0,_t=(o,a=0,h=NaN)=>{a>>>=0;for(var g=a+h,M=a;o[M]&&!(M>=g);)++M;if(M-a>16&&o.buffer&&zt)return zt.decode(o.subarray(a,M));for(var A="";a<M;){var D=o[a++];if(!(D&128)){A+=String.fromCharCode(D);continue}var U=o[a++]&63;if((D&224)==192){A+=String.fromCharCode((D&31)<<6|U);continue}var Y=o[a++]&63;if((D&240)==224?D=(D&15)<<12|U<<6|Y:((D&248)!=240&&qe("Invalid UTF-8 leading byte "+Se(D)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),D=(D&7)<<18|U<<12|Y<<6|o[a++]&63),D<65536)A+=String.fromCharCode(D);else{var oe=D-65536;A+=String.fromCharCode(55296|oe>>10,56320|oe&1023)}}return A},Tt=(o,a)=>(z(typeof o=="number",`UTF8ToString expects a number (got ${typeof o})`),o>>>=0,o?_t(pe,o,a):"");function Dn(o,a,h,g){return o>>>=0,a>>>=0,g>>>=0,he(`Assertion failed: ${Tt(o)}, at: `+[a?Tt(a):"unknown filename",h,g?Tt(g):"unknown function"])}var ci=[],Ii=0;function gi(o){o>>>=0;var a=new Oi(o);return a.get_caught()||(a.set_caught(!0),Ii--),a.set_rethrown(!1),ci.push(a),cc(o),Hd(o)}var yn=0,Ni=()=>{Ft(0,0),z(ci.length>0);var o=ci.pop();lc(o.excPtr),yn=0};class Oi{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){J[this.ptr+4>>>2>>>0]=a}get_type(){return J[this.ptr+4>>>2>>>0]}set_destructor(a){J[this.ptr+8>>>2>>>0]=a}get_destructor(){return J[this.ptr+8>>>2>>>0]}set_caught(a){a=a?1:0,ee[this.ptr+12>>>0]=a}get_caught(){return ee[this.ptr+12>>>0]!=0}set_rethrown(a){a=a?1:0,ee[this.ptr+13>>>0]=a}get_rethrown(){return ee[this.ptr+13>>>0]!=0}init(a,h){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(h)}set_adjusted_ptr(a){J[this.ptr+16>>>2>>>0]=a}get_adjusted_ptr(){return J[this.ptr+16>>>2>>>0]}}function _i(o){throw o>>>=0,yn||(yn=new je(o)),yn}var Bi=o=>Ud(o),wr=o=>{var a=yn==null?void 0:yn.excPtr;if(!a)return Bi(0),0;var h=new Oi(a);h.set_adjusted_ptr(a);var g=h.get_type();if(!g)return Bi(0),a;for(var M of o){if(M===0||M===g)break;var A=h.ptr+16;if(zd(M,g,A))return Bi(M),a}return Bi(g),a};function ki(){return wr([])}function L(o){return o>>>=0,wr([o])}var j=()=>{var o=ci.pop();o||he("no exception to throw");var a=o.excPtr;throw o.get_rethrown()||(ci.push(o),o.set_rethrown(!0),o.set_caught(!1),Ii++),yn=new je(a),yn};function re(o,a,h){o>>>=0,a>>>=0,h>>>=0;var g=new Oi(o);throw g.init(a,h),yn=new je(o),Ii++,yn}var ne=()=>Ii,ie=()=>{z(ln.varargs!=null);var o=$[+ln.varargs>>>2>>>0];return ln.varargs+=4,o},ke=ie,Pe={isAbs:o=>o.charAt(0)==="/",splitPath:o=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(o).slice(1)},normalizeArray:(o,a)=>{for(var h=0,g=o.length-1;g>=0;g--){var M=o[g];M==="."?o.splice(g,1):M===".."?(o.splice(g,1),h++):h&&(o.splice(g,1),h--)}if(a)for(;h;h--)o.unshift("..");return o},normalize:o=>{var a=Pe.isAbs(o),h=o.slice(-1)==="/";return o=Pe.normalizeArray(o.split("/").filter(g=>!!g),!a).join("/"),!o&&!a&&(o="."),o&&h&&(o+="/"),(a?"/":"")+o},dirname:o=>{var a=Pe.splitPath(o),h=a[0],g=a[1];return!h&&!g?".":(g&&(g=g.slice(0,-1)),h+g)},basename:o=>o&&o.match(/([^\/]+|\/)\/*$/)[1],join:(...o)=>Pe.normalize(o.join("/")),join2:(o,a)=>Pe.normalize(o+"/"+a)},ot=()=>{if(f){var o=p("crypto");return a=>o.randomFillSync(a)}return a=>crypto.getRandomValues(a)},st=o=>{(st=ot())(o)},dt={resolve:(...o)=>{for(var a="",h=!1,g=o.length-1;g>=-1&&!h;g--){var M=g>=0?o[g]:S.cwd();if(typeof M!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!M)return"";a=M+"/"+a,h=Pe.isAbs(M)}return a=Pe.normalizeArray(a.split("/").filter(A=>!!A),!h).join("/"),(h?"/":"")+a||"."},relative:(o,a)=>{o=dt.resolve(o).slice(1),a=dt.resolve(a).slice(1);function h(oe){for(var fe=0;fe<oe.length&&oe[fe]==="";fe++);for(var Ae=oe.length-1;Ae>=0&&oe[Ae]==="";Ae--);return fe>Ae?[]:oe.slice(fe,Ae-fe+1)}for(var g=h(o.split("/")),M=h(a.split("/")),A=Math.min(g.length,M.length),D=A,U=0;U<A;U++)if(g[U]!==M[U]){D=U;break}for(var Y=[],U=D;U<g.length;U++)Y.push("..");return Y=Y.concat(M.slice(D)),Y.join("/")}},pt=[],at=o=>{for(var a=0,h=0;h<o.length;++h){var g=o.charCodeAt(h);g<=127?a++:g<=2047?a+=2:g>=55296&&g<=57343?(a+=4,++h):a+=3}return a},Ot=(o,a,h,g)=>{if(h>>>=0,z(typeof o=="string",`stringToUTF8Array expects a string (got ${typeof o})`),!(g>0))return 0;for(var M=h,A=h+g-1,D=0;D<o.length;++D){var U=o.charCodeAt(D);if(U>=55296&&U<=57343){var Y=o.charCodeAt(++D);U=65536+((U&1023)<<10)|Y&1023}if(U<=127){if(h>=A)break;a[h++>>>0]=U}else if(U<=2047){if(h+1>=A)break;a[h++>>>0]=192|U>>6,a[h++>>>0]=128|U&63}else if(U<=65535){if(h+2>=A)break;a[h++>>>0]=224|U>>12,a[h++>>>0]=128|U>>6&63,a[h++>>>0]=128|U&63}else{if(h+3>=A)break;U>1114111&&qe("Invalid Unicode code point "+Se(U)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[h++>>>0]=240|U>>18,a[h++>>>0]=128|U>>12&63,a[h++>>>0]=128|U>>6&63,a[h++>>>0]=128|U&63}}return a[h>>>0]=0,h-M},an=(o,a,h)=>{var g=at(o)+1,M=new Array(g),A=Ot(o,M,0,M.length);return M.length=A,M},qt=()=>{if(!pt.length){var o=null;if(f){var a=256,h=Buffer.alloc(a),g=0,M=process.stdin.fd;try{g=O.readSync(M,h,0,a)}catch(A){if(A.toString().includes("EOF"))g=0;else throw A}g>0&&(o=h.slice(0,g).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(o=window.prompt("Input: "),o!==null&&(o+=`
`));if(!o)return null;pt=an(o)}return pt.shift()},nn={ttys:[],init(){},shutdown(){},register(o,a){nn.ttys[o]={input:[],output:[],ops:a},S.registerDevice(o,nn.stream_ops)},stream_ops:{open(o){var a=nn.ttys[o.node.rdev];if(!a)throw new S.ErrnoError(43);o.tty=a,o.seekable=!1},close(o){o.tty.ops.fsync(o.tty)},fsync(o){o.tty.ops.fsync(o.tty)},read(o,a,h,g,M){if(!o.tty||!o.tty.ops.get_char)throw new S.ErrnoError(60);for(var A=0,D=0;D<g;D++){var U;try{U=o.tty.ops.get_char(o.tty)}catch{throw new S.ErrnoError(29)}if(U===void 0&&A===0)throw new S.ErrnoError(6);if(U==null)break;A++,a[h+D]=U}return A&&(o.node.atime=Date.now()),A},write(o,a,h,g,M){if(!o.tty||!o.tty.ops.put_char)throw new S.ErrnoError(60);try{for(var A=0;A<g;A++)o.tty.ops.put_char(o.tty,a[h+A])}catch{throw new S.ErrnoError(29)}return g&&(o.node.mtime=o.node.ctime=Date.now()),A}},default_tty_ops:{get_char(o){return qt()},put_char(o,a){a===null||a===10?(k(_t(o.output)),o.output=[]):a!=0&&o.output.push(a)},fsync(o){var a;((a=o.output)==null?void 0:a.length)>0&&(k(_t(o.output)),o.output=[])},ioctl_tcgets(o){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(o,a,h){return 0},ioctl_tiocgwinsz(o){return[24,80]}},default_tty1_ops:{put_char(o,a){a===null||a===10?(N(_t(o.output)),o.output=[]):a!=0&&o.output.push(a)},fsync(o){var a;((a=o.output)==null?void 0:a.length)>0&&(N(_t(o.output)),o.output=[])}}},Pt=(o,a)=>(z(a,"alignment argument is required"),Math.ceil(o/a)*a),mt=o=>{he("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},tt={ops_table:null,mount(o){return tt.createNode(null,"/",16895,0)},createNode(o,a,h,g){if(S.isBlkdev(h)||S.isFIFO(h))throw new S.ErrnoError(63);tt.ops_table||(tt.ops_table={dir:{node:{getattr:tt.node_ops.getattr,setattr:tt.node_ops.setattr,lookup:tt.node_ops.lookup,mknod:tt.node_ops.mknod,rename:tt.node_ops.rename,unlink:tt.node_ops.unlink,rmdir:tt.node_ops.rmdir,readdir:tt.node_ops.readdir,symlink:tt.node_ops.symlink},stream:{llseek:tt.stream_ops.llseek}},file:{node:{getattr:tt.node_ops.getattr,setattr:tt.node_ops.setattr},stream:{llseek:tt.stream_ops.llseek,read:tt.stream_ops.read,write:tt.stream_ops.write,allocate:tt.stream_ops.allocate,mmap:tt.stream_ops.mmap,msync:tt.stream_ops.msync}},link:{node:{getattr:tt.node_ops.getattr,setattr:tt.node_ops.setattr,readlink:tt.node_ops.readlink},stream:{}},chrdev:{node:{getattr:tt.node_ops.getattr,setattr:tt.node_ops.setattr},stream:S.chrdev_stream_ops}});var M=S.createNode(o,a,h,g);return S.isDir(M.mode)?(M.node_ops=tt.ops_table.dir.node,M.stream_ops=tt.ops_table.dir.stream,M.contents={}):S.isFile(M.mode)?(M.node_ops=tt.ops_table.file.node,M.stream_ops=tt.ops_table.file.stream,M.usedBytes=0,M.contents=null):S.isLink(M.mode)?(M.node_ops=tt.ops_table.link.node,M.stream_ops=tt.ops_table.link.stream):S.isChrdev(M.mode)&&(M.node_ops=tt.ops_table.chrdev.node,M.stream_ops=tt.ops_table.chrdev.stream),M.atime=M.mtime=M.ctime=Date.now(),o&&(o.contents[a]=M,o.atime=o.mtime=o.ctime=M.atime),M},getFileDataAsTypedArray(o){return o.contents?o.contents.subarray?o.contents.subarray(0,o.usedBytes):new Uint8Array(o.contents):new Uint8Array(0)},expandFileStorage(o,a){var h=o.contents?o.contents.length:0;if(!(h>=a)){var g=1024*1024;a=Math.max(a,h*(h<g?2:1.125)>>>0),h!=0&&(a=Math.max(a,256));var M=o.contents;o.contents=new Uint8Array(a),o.usedBytes>0&&o.contents.set(M.subarray(0,o.usedBytes),0)}},resizeFileStorage(o,a){if(o.usedBytes!=a)if(a==0)o.contents=null,o.usedBytes=0;else{var h=o.contents;o.contents=new Uint8Array(a),h&&o.contents.set(h.subarray(0,Math.min(a,o.usedBytes))),o.usedBytes=a}},node_ops:{getattr(o){var a={};return a.dev=S.isChrdev(o.mode)?o.id:1,a.ino=o.id,a.mode=o.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=o.rdev,S.isDir(o.mode)?a.size=4096:S.isFile(o.mode)?a.size=o.usedBytes:S.isLink(o.mode)?a.size=o.link.length:a.size=0,a.atime=new Date(o.atime),a.mtime=new Date(o.mtime),a.ctime=new Date(o.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(o,a){for(const h of["mode","atime","mtime","ctime"])a[h]!=null&&(o[h]=a[h]);a.size!==void 0&&tt.resizeFileStorage(o,a.size)},lookup(o,a){throw new S.ErrnoError(44)},mknod(o,a,h,g){return tt.createNode(o,a,h,g)},rename(o,a,h){var g;try{g=S.lookupNode(a,h)}catch{}if(g){if(S.isDir(o.mode))for(var M in g.contents)throw new S.ErrnoError(55);S.hashRemoveNode(g)}delete o.parent.contents[o.name],a.contents[h]=o,o.name=h,a.ctime=a.mtime=o.parent.ctime=o.parent.mtime=Date.now()},unlink(o,a){delete o.contents[a],o.ctime=o.mtime=Date.now()},rmdir(o,a){var h=S.lookupNode(o,a);for(var g in h.contents)throw new S.ErrnoError(55);delete o.contents[a],o.ctime=o.mtime=Date.now()},readdir(o){return[".","..",...Object.keys(o.contents)]},symlink(o,a,h){var g=tt.createNode(o,a,41471,0);return g.link=h,g},readlink(o){if(!S.isLink(o.mode))throw new S.ErrnoError(28);return o.link}},stream_ops:{read(o,a,h,g,M){var A=o.node.contents;if(M>=o.node.usedBytes)return 0;var D=Math.min(o.node.usedBytes-M,g);if(z(D>=0),D>8&&A.subarray)a.set(A.subarray(M,M+D),h);else for(var U=0;U<D;U++)a[h+U]=A[M+U];return D},write(o,a,h,g,M,A){if(z(!(a instanceof ArrayBuffer)),a.buffer===ee.buffer&&(A=!1),!g)return 0;var D=o.node;if(D.mtime=D.ctime=Date.now(),a.subarray&&(!D.contents||D.contents.subarray)){if(A)return z(M===0,"canOwn must imply no weird position inside the file"),D.contents=a.subarray(h,h+g),D.usedBytes=g,g;if(D.usedBytes===0&&M===0)return D.contents=a.slice(h,h+g),D.usedBytes=g,g;if(M+g<=D.usedBytes)return D.contents.set(a.subarray(h,h+g),M),g}if(tt.expandFileStorage(D,M+g),D.contents.subarray&&a.subarray)D.contents.set(a.subarray(h,h+g),M);else for(var U=0;U<g;U++)D.contents[M+U]=a[h+U];return D.usedBytes=Math.max(D.usedBytes,M+g),g},llseek(o,a,h){var g=a;if(h===1?g+=o.position:h===2&&S.isFile(o.node.mode)&&(g+=o.node.usedBytes),g<0)throw new S.ErrnoError(28);return g},allocate(o,a,h){tt.expandFileStorage(o.node,a+h),o.node.usedBytes=Math.max(o.node.usedBytes,a+h)},mmap(o,a,h,g,M){if(!S.isFile(o.node.mode))throw new S.ErrnoError(43);var A,D,U=o.node.contents;if(!(M&2)&&U&&U.buffer===ee.buffer)D=!1,A=U.byteOffset;else{if(D=!0,A=mt(),!A)throw new S.ErrnoError(48);U&&((h>0||h+a<U.length)&&(U.subarray?U=U.subarray(h,h+a):U=Array.prototype.slice.call(U,h,h+a)),ee.set(U,A>>>0))}return{ptr:A,allocated:D}},msync(o,a,h,g,M){return tt.stream_ops.write(o,a,0,g,h,!1),0}}},Bt=async o=>{var a=await y(o);return z(a,`Loading data file "${o}" failed (no arrayBuffer).`),new Uint8Array(a)},Wn=(o,a,h,g,M,A)=>{S.createDataFile(o,a,h,g,M,A)},Tr=n.preloadPlugins||[],vi=(o,a,h,g)=>{typeof Browser<"u"&&Browser.init();var M=!1;return Tr.forEach(A=>{M||A.canHandle(a)&&(A.handle(o,a,h,g),M=!0)}),M},zi=(o,a,h,g,M,A,D,U,Y,oe)=>{var fe=a?dt.resolve(Pe.join2(o,a)):o,Ae=we(`cp ${fe}`);function Ie(Ce){function He(vt){oe==null||oe(),U||Wn(o,a,vt,g,M,Y),A==null||A(),Fe(Ae)}vi(Ce,fe,He,()=>{D==null||D(),Fe(Ae)})||He(Ce)}Ne(Ae),typeof h=="string"?Bt(h).then(Ie,D):Ie(h)},rn=o=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},h=a[o];if(typeof h>"u")throw new Error(`Unknown file open mode: ${o}`);return h},Nn=(o,a)=>{var h=0;return o&&(h|=365),a&&(h|=146),h},nr=o=>Tt(Fd(o)),gn={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},S={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(a){super(ze?nr(a):"");hi(this,"name","ErrnoError");this.errno=a;for(var h in gn)if(gn[h]===a){this.code=h;break}}},FSStream:class{constructor(){hi(this,"shared",{})}get object(){return this.node}set object(o){this.node=o}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(o){this.shared.flags=o}get position(){return this.shared.position}set position(o){this.shared.position=o}},FSNode:class{constructor(o,a,h,g){hi(this,"node_ops",{});hi(this,"stream_ops",{});hi(this,"readMode",365);hi(this,"writeMode",146);hi(this,"mounted",null);o||(o=this),this.parent=o,this.mount=o.mount,this.id=S.nextInode++,this.name=a,this.mode=h,this.rdev=g,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(o){o?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(o){o?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return S.isDir(this.mode)}get isDevice(){return S.isChrdev(this.mode)}},lookupPath(o,a={}){if(!o)throw new S.ErrnoError(44);a.follow_mount??(a.follow_mount=!0),Pe.isAbs(o)||(o=S.cwd()+"/"+o);e:for(var h=0;h<40;h++){for(var g=o.split("/").filter(oe=>!!oe),M=S.root,A="/",D=0;D<g.length;D++){var U=D===g.length-1;if(U&&a.parent)break;if(g[D]!=="."){if(g[D]===".."){A=Pe.dirname(A),M=M.parent;continue}A=Pe.join2(A,g[D]);try{M=S.lookupNode(M,g[D])}catch(oe){if((oe==null?void 0:oe.errno)===44&&U&&a.noent_okay)return{path:A};throw oe}if(S.isMountpoint(M)&&(!U||a.follow_mount)&&(M=M.mounted.root),S.isLink(M.mode)&&(!U||a.follow)){if(!M.node_ops.readlink)throw new S.ErrnoError(52);var Y=M.node_ops.readlink(M);Pe.isAbs(Y)||(Y=Pe.dirname(A)+"/"+Y),o=Y+"/"+g.slice(D+1).join("/");continue e}}}return{path:A,node:M}}throw new S.ErrnoError(32)},getPath(o){for(var a;;){if(S.isRoot(o)){var h=o.mount.mountpoint;return a?h[h.length-1]!=="/"?`${h}/${a}`:h+a:h}a=a?`${o.name}/${a}`:o.name,o=o.parent}},hashName(o,a){for(var h=0,g=0;g<a.length;g++)h=(h<<5)-h+a.charCodeAt(g)|0;return(o+h>>>0)%S.nameTable.length},hashAddNode(o){var a=S.hashName(o.parent.id,o.name);o.name_next=S.nameTable[a],S.nameTable[a]=o},hashRemoveNode(o){var a=S.hashName(o.parent.id,o.name);if(S.nameTable[a]===o)S.nameTable[a]=o.name_next;else for(var h=S.nameTable[a];h;){if(h.name_next===o){h.name_next=o.name_next;break}h=h.name_next}},lookupNode(o,a){var h=S.mayLookup(o);if(h)throw new S.ErrnoError(h);for(var g=S.hashName(o.id,a),M=S.nameTable[g];M;M=M.name_next){var A=M.name;if(M.parent.id===o.id&&A===a)return M}return S.lookup(o,a)},createNode(o,a,h,g){z(typeof o=="object");var M=new S.FSNode(o,a,h,g);return S.hashAddNode(M),M},destroyNode(o){S.hashRemoveNode(o)},isRoot(o){return o===o.parent},isMountpoint(o){return!!o.mounted},isFile(o){return(o&61440)===32768},isDir(o){return(o&61440)===16384},isLink(o){return(o&61440)===40960},isChrdev(o){return(o&61440)===8192},isBlkdev(o){return(o&61440)===24576},isFIFO(o){return(o&61440)===4096},isSocket(o){return(o&49152)===49152},flagsToPermissionString(o){var a=["r","w","rw"][o&3];return o&512&&(a+="w"),a},nodePermissions(o,a){return S.ignorePermissions?0:a.includes("r")&&!(o.mode&292)||a.includes("w")&&!(o.mode&146)||a.includes("x")&&!(o.mode&73)?2:0},mayLookup(o){if(!S.isDir(o.mode))return 54;var a=S.nodePermissions(o,"x");return a||(o.node_ops.lookup?0:2)},mayCreate(o,a){if(!S.isDir(o.mode))return 54;try{var h=S.lookupNode(o,a);return 20}catch{}return S.nodePermissions(o,"wx")},mayDelete(o,a,h){var g;try{g=S.lookupNode(o,a)}catch(A){return A.errno}var M=S.nodePermissions(o,"wx");if(M)return M;if(h){if(!S.isDir(g.mode))return 54;if(S.isRoot(g)||S.getPath(g)===S.cwd())return 10}else if(S.isDir(g.mode))return 31;return 0},mayOpen(o,a){return o?S.isLink(o.mode)?32:S.isDir(o.mode)&&(S.flagsToPermissionString(a)!=="r"||a&576)?31:S.nodePermissions(o,S.flagsToPermissionString(a)):44},checkOpExists(o,a){if(!o)throw new S.ErrnoError(a);return o},MAX_OPEN_FDS:4096,nextfd(){for(var o=0;o<=S.MAX_OPEN_FDS;o++)if(!S.streams[o])return o;throw new S.ErrnoError(33)},getStreamChecked(o){var a=S.getStream(o);if(!a)throw new S.ErrnoError(8);return a},getStream:o=>S.streams[o],createStream(o,a=-1){return z(a>=-1),o=Object.assign(new S.FSStream,o),a==-1&&(a=S.nextfd()),o.fd=a,S.streams[a]=o,o},closeStream(o){S.streams[o]=null},dupStream(o,a=-1){var g,M;var h=S.createStream(o,a);return(M=(g=h.stream_ops)==null?void 0:g.dup)==null||M.call(g,h),h},doSetAttr(o,a,h){var g=o==null?void 0:o.stream_ops.setattr,M=g?o:a;g??(g=a.node_ops.setattr),S.checkOpExists(g,63),g(M,h)},chrdev_stream_ops:{open(o){var h,g;var a=S.getDevice(o.node.rdev);o.stream_ops=a.stream_ops,(g=(h=o.stream_ops).open)==null||g.call(h,o)},llseek(){throw new S.ErrnoError(70)}},major:o=>o>>8,minor:o=>o&255,makedev:(o,a)=>o<<8|a,registerDevice(o,a){S.devices[o]={stream_ops:a}},getDevice:o=>S.devices[o],getMounts(o){for(var a=[],h=[o];h.length;){var g=h.pop();a.push(g),h.push(...g.mounts)}return a},syncfs(o,a){typeof o=="function"&&(a=o,o=!1),S.syncFSRequests++,S.syncFSRequests>1&&N(`warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var h=S.getMounts(S.root.mount),g=0;function M(D){return z(S.syncFSRequests>0),S.syncFSRequests--,a(D)}function A(D){if(D)return A.errored?void 0:(A.errored=!0,M(D));++g>=h.length&&M(null)}h.forEach(D=>{if(!D.type.syncfs)return A(null);D.type.syncfs(D,o,A)})},mount(o,a,h){if(typeof o=="string")throw o;var g=h==="/",M=!h,A;if(g&&S.root)throw new S.ErrnoError(10);if(!g&&!M){var D=S.lookupPath(h,{follow_mount:!1});if(h=D.path,A=D.node,S.isMountpoint(A))throw new S.ErrnoError(10);if(!S.isDir(A.mode))throw new S.ErrnoError(54)}var U={type:o,opts:a,mountpoint:h,mounts:[]},Y=o.mount(U);return Y.mount=U,U.root=Y,g?S.root=Y:A&&(A.mounted=U,A.mount&&A.mount.mounts.push(U)),Y},unmount(o){var a=S.lookupPath(o,{follow_mount:!1});if(!S.isMountpoint(a.node))throw new S.ErrnoError(28);var h=a.node,g=h.mounted,M=S.getMounts(g);Object.keys(S.nameTable).forEach(D=>{for(var U=S.nameTable[D];U;){var Y=U.name_next;M.includes(U.mount)&&S.destroyNode(U),U=Y}}),h.mounted=null;var A=h.mount.mounts.indexOf(g);z(A!==-1),h.mount.mounts.splice(A,1)},lookup(o,a){return o.node_ops.lookup(o,a)},mknod(o,a,h){var g=S.lookupPath(o,{parent:!0}),M=g.node,A=Pe.basename(o);if(!A)throw new S.ErrnoError(28);if(A==="."||A==="..")throw new S.ErrnoError(20);var D=S.mayCreate(M,A);if(D)throw new S.ErrnoError(D);if(!M.node_ops.mknod)throw new S.ErrnoError(63);return M.node_ops.mknod(M,A,a,h)},statfs(o){return S.statfsNode(S.lookupPath(o,{follow:!0}).node)},statfsStream(o){return S.statfsNode(o.node)},statfsNode(o){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:S.nextInode,ffree:S.nextInode-1,fsid:42,flags:2,namelen:255};return o.node_ops.statfs&&Object.assign(a,o.node_ops.statfs(o.mount.opts.root)),a},create(o,a=438){return a&=4095,a|=32768,S.mknod(o,a,0)},mkdir(o,a=511){return a&=1023,a|=16384,S.mknod(o,a,0)},mkdirTree(o,a){for(var h=o.split("/"),g="",M=0;M<h.length;++M)if(h[M]){g+="/"+h[M];try{S.mkdir(g,a)}catch(A){if(A.errno!=20)throw A}}},mkdev(o,a,h){return typeof h>"u"&&(h=a,a=438),a|=8192,S.mknod(o,a,h)},symlink(o,a){if(!dt.resolve(o))throw new S.ErrnoError(44);var h=S.lookupPath(a,{parent:!0}),g=h.node;if(!g)throw new S.ErrnoError(44);var M=Pe.basename(a),A=S.mayCreate(g,M);if(A)throw new S.ErrnoError(A);if(!g.node_ops.symlink)throw new S.ErrnoError(63);return g.node_ops.symlink(g,M,o)},rename(o,a){var h=Pe.dirname(o),g=Pe.dirname(a),M=Pe.basename(o),A=Pe.basename(a),D,U,Y;if(D=S.lookupPath(o,{parent:!0}),U=D.node,D=S.lookupPath(a,{parent:!0}),Y=D.node,!U||!Y)throw new S.ErrnoError(44);if(U.mount!==Y.mount)throw new S.ErrnoError(75);var oe=S.lookupNode(U,M),fe=dt.relative(o,g);if(fe.charAt(0)!==".")throw new S.ErrnoError(28);if(fe=dt.relative(a,h),fe.charAt(0)!==".")throw new S.ErrnoError(55);var Ae;try{Ae=S.lookupNode(Y,A)}catch{}if(oe!==Ae){var Ie=S.isDir(oe.mode),Ce=S.mayDelete(U,M,Ie);if(Ce)throw new S.ErrnoError(Ce);if(Ce=Ae?S.mayDelete(Y,A,Ie):S.mayCreate(Y,A),Ce)throw new S.ErrnoError(Ce);if(!U.node_ops.rename)throw new S.ErrnoError(63);if(S.isMountpoint(oe)||Ae&&S.isMountpoint(Ae))throw new S.ErrnoError(10);if(Y!==U&&(Ce=S.nodePermissions(U,"w"),Ce))throw new S.ErrnoError(Ce);S.hashRemoveNode(oe);try{U.node_ops.rename(oe,Y,A),oe.parent=Y}catch(He){throw He}finally{S.hashAddNode(oe)}}},rmdir(o){var a=S.lookupPath(o,{parent:!0}),h=a.node,g=Pe.basename(o),M=S.lookupNode(h,g),A=S.mayDelete(h,g,!0);if(A)throw new S.ErrnoError(A);if(!h.node_ops.rmdir)throw new S.ErrnoError(63);if(S.isMountpoint(M))throw new S.ErrnoError(10);h.node_ops.rmdir(h,g),S.destroyNode(M)},readdir(o){var a=S.lookupPath(o,{follow:!0}),h=a.node,g=S.checkOpExists(h.node_ops.readdir,54);return g(h)},unlink(o){var a=S.lookupPath(o,{parent:!0}),h=a.node;if(!h)throw new S.ErrnoError(44);var g=Pe.basename(o),M=S.lookupNode(h,g),A=S.mayDelete(h,g,!1);if(A)throw new S.ErrnoError(A);if(!h.node_ops.unlink)throw new S.ErrnoError(63);if(S.isMountpoint(M))throw new S.ErrnoError(10);h.node_ops.unlink(h,g),S.destroyNode(M)},readlink(o){var a=S.lookupPath(o),h=a.node;if(!h)throw new S.ErrnoError(44);if(!h.node_ops.readlink)throw new S.ErrnoError(28);return h.node_ops.readlink(h)},stat(o,a){var h=S.lookupPath(o,{follow:!a}),g=h.node,M=S.checkOpExists(g.node_ops.getattr,63);return M(g)},fstat(o){var a=S.getStreamChecked(o),h=a.node,g=a.stream_ops.getattr,M=g?a:h;return g??(g=h.node_ops.getattr),S.checkOpExists(g,63),g(M)},lstat(o){return S.stat(o,!0)},doChmod(o,a,h,g){S.doSetAttr(o,a,{mode:h&4095|a.mode&-4096,ctime:Date.now(),dontFollow:g})},chmod(o,a,h){var g;if(typeof o=="string"){var M=S.lookupPath(o,{follow:!h});g=M.node}else g=o;S.doChmod(null,g,a,h)},lchmod(o,a){S.chmod(o,a,!0)},fchmod(o,a){var h=S.getStreamChecked(o);S.doChmod(h,h.node,a,!1)},doChown(o,a,h){S.doSetAttr(o,a,{timestamp:Date.now(),dontFollow:h})},chown(o,a,h,g){var M;if(typeof o=="string"){var A=S.lookupPath(o,{follow:!g});M=A.node}else M=o;S.doChown(null,M,g)},lchown(o,a,h){S.chown(o,a,h,!0)},fchown(o,a,h){var g=S.getStreamChecked(o);S.doChown(g,g.node,!1)},doTruncate(o,a,h){if(S.isDir(a.mode))throw new S.ErrnoError(31);if(!S.isFile(a.mode))throw new S.ErrnoError(28);var g=S.nodePermissions(a,"w");if(g)throw new S.ErrnoError(g);S.doSetAttr(o,a,{size:h,timestamp:Date.now()})},truncate(o,a){if(a<0)throw new S.ErrnoError(28);var h;if(typeof o=="string"){var g=S.lookupPath(o,{follow:!0});h=g.node}else h=o;S.doTruncate(null,h,a)},ftruncate(o,a){var h=S.getStreamChecked(o);if(a<0||!(h.flags&2097155))throw new S.ErrnoError(28);S.doTruncate(h,h.node,a)},utime(o,a,h){var g=S.lookupPath(o,{follow:!0}),M=g.node,A=S.checkOpExists(M.node_ops.setattr,63);A(M,{atime:a,mtime:h})},open(o,a,h=438){if(o==="")throw new S.ErrnoError(44);a=typeof a=="string"?rn(a):a,a&64?h=h&4095|32768:h=0;var g,M;if(typeof o=="object")g=o;else{M=o.endsWith("/");var A=S.lookupPath(o,{follow:!(a&131072),noent_okay:!0});g=A.node,o=A.path}var D=!1;if(a&64)if(g){if(a&128)throw new S.ErrnoError(20)}else{if(M)throw new S.ErrnoError(31);g=S.mknod(o,h|511,0),D=!0}if(!g)throw new S.ErrnoError(44);if(S.isChrdev(g.mode)&&(a&=-513),a&65536&&!S.isDir(g.mode))throw new S.ErrnoError(54);if(!D){var U=S.mayOpen(g,a);if(U)throw new S.ErrnoError(U)}a&512&&!D&&S.truncate(g,0),a&=-131713;var Y=S.createStream({node:g,path:S.getPath(g),flags:a,seekable:!0,position:0,stream_ops:g.stream_ops,ungotten:[],error:!1});return Y.stream_ops.open&&Y.stream_ops.open(Y),D&&S.chmod(g,h&511),n.logReadFiles&&!(a&1)&&(o in S.readFiles||(S.readFiles[o]=1)),Y},close(o){if(S.isClosed(o))throw new S.ErrnoError(8);o.getdents&&(o.getdents=null);try{o.stream_ops.close&&o.stream_ops.close(o)}catch(a){throw a}finally{S.closeStream(o.fd)}o.fd=null},isClosed(o){return o.fd===null},llseek(o,a,h){if(S.isClosed(o))throw new S.ErrnoError(8);if(!o.seekable||!o.stream_ops.llseek)throw new S.ErrnoError(70);if(h!=0&&h!=1&&h!=2)throw new S.ErrnoError(28);return o.position=o.stream_ops.llseek(o,a,h),o.ungotten=[],o.position},read(o,a,h,g,M){if(z(h>=0),g<0||M<0)throw new S.ErrnoError(28);if(S.isClosed(o))throw new S.ErrnoError(8);if((o.flags&2097155)===1)throw new S.ErrnoError(8);if(S.isDir(o.node.mode))throw new S.ErrnoError(31);if(!o.stream_ops.read)throw new S.ErrnoError(28);var A=typeof M<"u";if(!A)M=o.position;else if(!o.seekable)throw new S.ErrnoError(70);var D=o.stream_ops.read(o,a,h,g,M);return A||(o.position+=D),D},write(o,a,h,g,M,A){if(z(h>=0),g<0||M<0)throw new S.ErrnoError(28);if(S.isClosed(o))throw new S.ErrnoError(8);if(!(o.flags&2097155))throw new S.ErrnoError(8);if(S.isDir(o.node.mode))throw new S.ErrnoError(31);if(!o.stream_ops.write)throw new S.ErrnoError(28);o.seekable&&o.flags&1024&&S.llseek(o,0,2);var D=typeof M<"u";if(!D)M=o.position;else if(!o.seekable)throw new S.ErrnoError(70);var U=o.stream_ops.write(o,a,h,g,M,A);return D||(o.position+=U),U},allocate(o,a,h){if(S.isClosed(o))throw new S.ErrnoError(8);if(a<0||h<=0)throw new S.ErrnoError(28);if(!(o.flags&2097155))throw new S.ErrnoError(8);if(!S.isFile(o.node.mode)&&!S.isDir(o.node.mode))throw new S.ErrnoError(43);if(!o.stream_ops.allocate)throw new S.ErrnoError(138);o.stream_ops.allocate(o,a,h)},mmap(o,a,h,g,M){if(g&2&&!(M&2)&&(o.flags&2097155)!==2)throw new S.ErrnoError(2);if((o.flags&2097155)===1)throw new S.ErrnoError(2);if(!o.stream_ops.mmap)throw new S.ErrnoError(43);if(!a)throw new S.ErrnoError(28);return o.stream_ops.mmap(o,a,h,g,M)},msync(o,a,h,g,M){return z(h>=0),o.stream_ops.msync?o.stream_ops.msync(o,a,h,g,M):0},ioctl(o,a,h){if(!o.stream_ops.ioctl)throw new S.ErrnoError(59);return o.stream_ops.ioctl(o,a,h)},readFile(o,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var h,g=S.open(o,a.flags),M=S.stat(o),A=M.size,D=new Uint8Array(A);return S.read(g,D,0,A,0),a.encoding==="utf8"?h=_t(D):a.encoding==="binary"&&(h=D),S.close(g),h},writeFile(o,a,h={}){h.flags=h.flags||577;var g=S.open(o,h.flags,h.mode);if(typeof a=="string"){var M=new Uint8Array(at(a)+1),A=Ot(a,M,0,M.length);S.write(g,M,0,A,void 0,h.canOwn)}else if(ArrayBuffer.isView(a))S.write(g,a,0,a.byteLength,void 0,h.canOwn);else throw new Error("Unsupported data type");S.close(g)},cwd:()=>S.currentPath,chdir(o){var a=S.lookupPath(o,{follow:!0});if(a.node===null)throw new S.ErrnoError(44);if(!S.isDir(a.node.mode))throw new S.ErrnoError(54);var h=S.nodePermissions(a.node,"x");if(h)throw new S.ErrnoError(h);S.currentPath=a.path},createDefaultDirectories(){S.mkdir("/tmp"),S.mkdir("/home"),S.mkdir("/home/web_user")},createDefaultDevices(){S.mkdir("/dev"),S.registerDevice(S.makedev(1,3),{read:()=>0,write:(g,M,A,D,U)=>D,llseek:()=>0}),S.mkdev("/dev/null",S.makedev(1,3)),nn.register(S.makedev(5,0),nn.default_tty_ops),nn.register(S.makedev(6,0),nn.default_tty1_ops),S.mkdev("/dev/tty",S.makedev(5,0)),S.mkdev("/dev/tty1",S.makedev(6,0));var o=new Uint8Array(1024),a=0,h=()=>(a===0&&(st(o),a=o.byteLength),o[--a]);S.createDevice("/dev","random",h),S.createDevice("/dev","urandom",h),S.mkdir("/dev/shm"),S.mkdir("/dev/shm/tmp")},createSpecialDirectories(){S.mkdir("/proc");var o=S.mkdir("/proc/self");S.mkdir("/proc/self/fd"),S.mount({mount(){var a=S.createNode(o,"fd",16895,73);return a.stream_ops={llseek:tt.stream_ops.llseek},a.node_ops={lookup(h,g){var M=+g,A=S.getStreamChecked(M),D={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>A.path},id:M+1};return D.parent=D,D},readdir(){return Array.from(S.streams.entries()).filter(([h,g])=>g).map(([h,g])=>h.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(o,a,h){o?S.createDevice("/dev","stdin",o):S.symlink("/dev/tty","/dev/stdin"),a?S.createDevice("/dev","stdout",null,a):S.symlink("/dev/tty","/dev/stdout"),h?S.createDevice("/dev","stderr",null,h):S.symlink("/dev/tty1","/dev/stderr");var g=S.open("/dev/stdin",0),M=S.open("/dev/stdout",1),A=S.open("/dev/stderr",1);z(g.fd===0,`invalid handle for stdin (${g.fd})`),z(M.fd===1,`invalid handle for stdout (${M.fd})`),z(A.fd===2,`invalid handle for stderr (${A.fd})`)},staticInit(){S.nameTable=new Array(4096),S.mount(tt,{},"/"),S.createDefaultDirectories(),S.createDefaultDevices(),S.createSpecialDirectories(),S.filesystems={MEMFS:tt}},init(o,a,h){z(!S.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),S.initialized=!0,o??(o=n.stdin),a??(a=n.stdout),h??(h=n.stderr),S.createStandardStreams(o,a,h)},quit(){S.initialized=!1,Dd(0);for(var o=0;o<S.streams.length;o++){var a=S.streams[o];a&&S.close(a)}},findObject(o,a){var h=S.analyzePath(o,a);return h.exists?h.object:null},analyzePath(o,a){try{var h=S.lookupPath(o,{follow:!a});o=h.path}catch{}var g={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var h=S.lookupPath(o,{parent:!0});g.parentExists=!0,g.parentPath=h.path,g.parentObject=h.node,g.name=Pe.basename(o),h=S.lookupPath(o,{follow:!a}),g.exists=!0,g.path=h.path,g.object=h.node,g.name=h.node.name,g.isRoot=h.path==="/"}catch(M){g.error=M.errno}return g},createPath(o,a,h,g){o=typeof o=="string"?o:S.getPath(o);for(var M=a.split("/").reverse();M.length;){var A=M.pop();if(A){var D=Pe.join2(o,A);try{S.mkdir(D)}catch(U){if(U.errno!=20)throw U}o=D}}return D},createFile(o,a,h,g,M){var A=Pe.join2(typeof o=="string"?o:S.getPath(o),a),D=Nn(g,M);return S.create(A,D)},createDataFile(o,a,h,g,M,A){var D=a;o&&(o=typeof o=="string"?o:S.getPath(o),D=a?Pe.join2(o,a):o);var U=Nn(g,M),Y=S.create(D,U);if(h){if(typeof h=="string"){for(var oe=new Array(h.length),fe=0,Ae=h.length;fe<Ae;++fe)oe[fe]=h.charCodeAt(fe);h=oe}S.chmod(Y,U|146);var Ie=S.open(Y,577);S.write(Ie,h,0,h.length,0,A),S.close(Ie),S.chmod(Y,U)}},createDevice(o,a,h,g){var U;var M=Pe.join2(typeof o=="string"?o:S.getPath(o),a),A=Nn(!!h,!!g);(U=S.createDevice).major??(U.major=64);var D=S.makedev(S.createDevice.major++,0);return S.registerDevice(D,{open(Y){Y.seekable=!1},close(Y){var oe;(oe=g==null?void 0:g.buffer)!=null&&oe.length&&g(10)},read(Y,oe,fe,Ae,Ie){for(var Ce=0,He=0;He<Ae;He++){var vt;try{vt=h()}catch{throw new S.ErrnoError(29)}if(vt===void 0&&Ce===0)throw new S.ErrnoError(6);if(vt==null)break;Ce++,oe[fe+He]=vt}return Ce&&(Y.node.atime=Date.now()),Ce},write(Y,oe,fe,Ae,Ie){for(var Ce=0;Ce<Ae;Ce++)try{g(oe[fe+Ce])}catch{throw new S.ErrnoError(29)}return Ae&&(Y.node.mtime=Y.node.ctime=Date.now()),Ce}}),S.mkdev(M,A,D)},forceLoadFile(o){if(o.isDevice||o.isFolder||o.link||o.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{o.contents=_(o.url),o.usedBytes=o.contents.length}catch{throw new S.ErrnoError(29)}},createLazyFile(o,a,h,g,M){class A{constructor(){hi(this,"lengthKnown",!1);hi(this,"chunks",[])}get(Ce){if(!(Ce>this.length-1||Ce<0)){var He=Ce%this.chunkSize,vt=Ce/this.chunkSize|0;return this.getter(vt)[He]}}setDataGetter(Ce){this.getter=Ce}cacheLength(){var Ce=new XMLHttpRequest;if(Ce.open("HEAD",h,!1),Ce.send(null),!(Ce.status>=200&&Ce.status<300||Ce.status===304))throw new Error("Couldn't load "+h+". Status: "+Ce.status);var He=Number(Ce.getResponseHeader("Content-length")),vt,kt=(vt=Ce.getResponseHeader("Accept-Ranges"))&&vt==="bytes",Ut=(vt=Ce.getResponseHeader("Content-Encoding"))&&vt==="gzip",Mn=1024*1024;kt||(Mn=He);var Zt=(zn,Si)=>{if(zn>Si)throw new Error("invalid range ("+zn+", "+Si+") or no bytes requested!");if(Si>He-1)throw new Error("only "+He+" bytes available! programmer error!");var sn=new XMLHttpRequest;if(sn.open("GET",h,!1),He!==Mn&&sn.setRequestHeader("Range","bytes="+zn+"-"+Si),sn.responseType="arraybuffer",sn.overrideMimeType&&sn.overrideMimeType("text/plain; charset=x-user-defined"),sn.send(null),!(sn.status>=200&&sn.status<300||sn.status===304))throw new Error("Couldn't load "+h+". Status: "+sn.status);return sn.response!==void 0?new Uint8Array(sn.response||[]):an(sn.responseText||"")},ir=this;ir.setDataGetter(zn=>{var Si=zn*Mn,sn=(zn+1)*Mn-1;if(sn=Math.min(sn,He-1),typeof ir.chunks[zn]>"u"&&(ir.chunks[zn]=Zt(Si,sn)),typeof ir.chunks[zn]>"u")throw new Error("doXHR failed!");return ir.chunks[zn]}),(Ut||!He)&&(Mn=He=1,He=this.getter(0).length,Mn=He,k("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=He,this._chunkSize=Mn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!u)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var D=new A,U={isDevice:!1,contents:D}}else var U={isDevice:!1,url:h};var Y=S.createFile(o,a,U,g,M);U.contents?Y.contents=U.contents:U.url&&(Y.contents=null,Y.url=U.url),Object.defineProperties(Y,{usedBytes:{get:function(){return this.contents.length}}});var oe={},fe=Object.keys(Y.stream_ops);fe.forEach(Ie=>{var Ce=Y.stream_ops[Ie];oe[Ie]=(...He)=>(S.forceLoadFile(Y),Ce(...He))});function Ae(Ie,Ce,He,vt,kt){var Ut=Ie.node.contents;if(kt>=Ut.length)return 0;var Mn=Math.min(Ut.length-kt,vt);if(z(Mn>=0),Ut.slice)for(var Zt=0;Zt<Mn;Zt++)Ce[He+Zt]=Ut[kt+Zt];else for(var Zt=0;Zt<Mn;Zt++)Ce[He+Zt]=Ut.get(kt+Zt);return Mn}return oe.read=(Ie,Ce,He,vt,kt)=>(S.forceLoadFile(Y),Ae(Ie,Ce,He,vt,kt)),oe.mmap=(Ie,Ce,He,vt,kt)=>{S.forceLoadFile(Y);var Ut=mt();if(!Ut)throw new S.ErrnoError(48);return Ae(Ie,ee,Ut,Ce,He),{ptr:Ut,allocated:!0}},Y.stream_ops=oe,Y},absolutePath(){he("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){he("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){he("FS.createLink has been removed; use FS.symlink instead")},joinPath(){he("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){he("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){he("FS.standardizePath has been removed; use PATH.normalize instead")}},ln={DEFAULT_POLLMASK:5,calculateAt(o,a,h){if(Pe.isAbs(a))return a;var g;if(o===-100)g=S.cwd();else{var M=ln.getStreamFromFD(o);g=M.path}if(a.length==0){if(!h)throw new S.ErrnoError(44);return g}return g+"/"+a},writeStat(o,a){$[o>>>2>>>0]=a.dev,$[o+4>>>2>>>0]=a.mode,J[o+8>>>2>>>0]=a.nlink,$[o+12>>>2>>>0]=a.uid,$[o+16>>>2>>>0]=a.gid,$[o+20>>>2>>>0]=a.rdev,le[o+24>>>3]=BigInt(a.size),$[o+32>>>2>>>0]=4096,$[o+36>>>2>>>0]=a.blocks;var h=a.atime.getTime(),g=a.mtime.getTime(),M=a.ctime.getTime();return le[o+40>>>3]=BigInt(Math.floor(h/1e3)),J[o+48>>>2>>>0]=h%1e3*1e3*1e3,le[o+56>>>3]=BigInt(Math.floor(g/1e3)),J[o+64>>>2>>>0]=g%1e3*1e3*1e3,le[o+72>>>3]=BigInt(Math.floor(M/1e3)),J[o+80>>>2>>>0]=M%1e3*1e3*1e3,le[o+88>>>3]=BigInt(a.ino),0},writeStatFs(o,a){$[o+4>>>2>>>0]=a.bsize,$[o+40>>>2>>>0]=a.bsize,$[o+8>>>2>>>0]=a.blocks,$[o+12>>>2>>>0]=a.bfree,$[o+16>>>2>>>0]=a.bavail,$[o+20>>>2>>>0]=a.files,$[o+24>>>2>>>0]=a.ffree,$[o+28>>>2>>>0]=a.fsid,$[o+44>>>2>>>0]=a.flags,$[o+36>>>2>>>0]=a.namelen},doMsync(o,a,h,g,M){if(!S.isFile(a.node.mode))throw new S.ErrnoError(43);if(g&2)return 0;var A=pe.slice(o,o+h);S.msync(a,A,M,h,g)},getStreamFromFD(o){var a=S.getStreamChecked(o);return a},varargs:void 0,getStr(o){var a=Tt(o);return a}};function Ar(o,a,h){h>>>=0,ln.varargs=h;try{var g=ln.getStreamFromFD(o);switch(a){case 0:{var M=ie();if(M<0)return-28;for(;S.streams[M];)M++;var A;return A=S.dupStream(g,M),A.fd}case 1:case 2:return 0;case 3:return g.flags;case 4:{var M=ie();return g.flags|=M,0}case 12:{var M=ke(),D=0;return W[M+D>>>1>>>0]=2,0}case 13:case 14:return 0}return-28}catch(U){if(typeof S>"u"||U.name!=="ErrnoError")throw U;return-U.errno}}function ca(o,a,h){h>>>=0,ln.varargs=h;try{var g=ln.getStreamFromFD(o);switch(a){case 21509:return g.tty?0:-59;case 21505:{if(!g.tty)return-59;if(g.tty.ops.ioctl_tcgets){var M=g.tty.ops.ioctl_tcgets(g),A=ke();$[A>>>2>>>0]=M.c_iflag||0,$[A+4>>>2>>>0]=M.c_oflag||0,$[A+8>>>2>>>0]=M.c_cflag||0,$[A+12>>>2>>>0]=M.c_lflag||0;for(var D=0;D<32;D++)ee[A+D+17>>>0]=M.c_cc[D]||0;return 0}return 0}case 21510:case 21511:case 21512:return g.tty?0:-59;case 21506:case 21507:case 21508:{if(!g.tty)return-59;if(g.tty.ops.ioctl_tcsets){for(var A=ke(),U=$[A>>>2>>>0],Y=$[A+4>>>2>>>0],oe=$[A+8>>>2>>>0],fe=$[A+12>>>2>>>0],Ae=[],D=0;D<32;D++)Ae.push(ee[A+D+17>>>0]);return g.tty.ops.ioctl_tcsets(g.tty,a,{c_iflag:U,c_oflag:Y,c_cflag:oe,c_lflag:fe,c_cc:Ae})}return 0}case 21519:{if(!g.tty)return-59;var A=ke();return $[A>>>2>>>0]=0,0}case 21520:return g.tty?-28:-59;case 21531:{var A=ke();return S.ioctl(g,a,A)}case 21523:{if(!g.tty)return-59;if(g.tty.ops.ioctl_tiocgwinsz){var Ie=g.tty.ops.ioctl_tiocgwinsz(g.tty),A=ke();W[A>>>1>>>0]=Ie[0],W[A+2>>>1>>>0]=Ie[1]}return 0}case 21524:return g.tty?0:-59;case 21515:return g.tty?0:-59;default:return-28}}catch(Ce){if(typeof S>"u"||Ce.name!=="ErrnoError")throw Ce;return-Ce.errno}}function ua(o,a,h,g){a>>>=0,g>>>=0,ln.varargs=g;try{a=ln.getStr(a),a=ln.calculateAt(o,a);var M=g?ie():0;return S.open(a,h,M).fd}catch(A){if(typeof S>"u"||A.name!=="ErrnoError")throw A;return-A.errno}}var Ws=()=>he("native code called abort()"),ei=o=>{if(o===null)return"null";var a=typeof o;return a==="object"||a==="array"||a==="function"?o.toString():""+o},fa=()=>{for(var o=new Array(256),a=0;a<256;++a)o[a]=String.fromCharCode(a);$s=o},$s,cn=o=>{for(var a="",h=o;pe[h>>>0];)a+=$s[pe[h++>>>0]];return a},yi={},xi={},Cr={},Hi,At=o=>{throw new Hi(o)},Xs,Rr=o=>{throw new Xs(o)},ui=(o,a,h)=>{o.forEach(U=>Cr[U]=a);function g(U){var Y=h(U);Y.length!==o.length&&Rr("Mismatched type converter count");for(var oe=0;oe<o.length;++oe)Fn(o[oe],Y[oe])}var M=new Array(a.length),A=[],D=0;a.forEach((U,Y)=>{xi.hasOwnProperty(U)?M[Y]=xi[U]:(A.push(U),yi.hasOwnProperty(U)||(yi[U]=[]),yi[U].push(()=>{M[Y]=xi[U],++D,D===A.length&&g(M)}))}),A.length===0&&g(M)};function ha(o,a,h={}){var g=a.name;if(o||At(`type "${g}" must have a positive integer typeid pointer`),xi.hasOwnProperty(o)){if(h.ignoreDuplicateRegistrations)return;At(`Cannot register type '${g}' twice`)}if(xi[o]=a,delete Cr[o],yi.hasOwnProperty(o)){var M=yi[o];delete yi[o],M.forEach(A=>A())}}function Fn(o,a,h={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ha(o,a,h)}var Ys=(o,a,h)=>{switch(a){case 1:return h?g=>ee[g>>>0]:g=>pe[g>>>0];case 2:return h?g=>W[g>>>1>>>0]:g=>Z[g>>>1>>>0];case 4:return h?g=>$[g>>>2>>>0]:g=>J[g>>>2>>>0];case 8:return h?g=>le[g>>>3]:g=>ve[g>>>3];default:throw new TypeError(`invalid integer width (${a}): ${o}`)}};function ds(o,a,h,g,M){o>>>=0,a>>>=0,h>>>=0,a=cn(a);var A=a.indexOf("u")!=-1;A&&(M=(1n<<64n)-1n),Fn(o,{name:a,fromWireType:D=>D,toWireType:function(D,U){if(typeof U!="bigint"&&typeof U!="number")throw new TypeError(`Cannot convert "${ei(U)}" to ${this.name}`);if(typeof U=="number"&&(U=BigInt(U)),U<g||U>M)throw new TypeError(`Passing a number "${ei(U)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${g}, ${M}]!`);return U},argPackAdvance:$n,readValueFromPointer:Ys(a,h,!A),destructorFunction:null})}var $n=8;function da(o,a,h,g){o>>>=0,a>>>=0,a=cn(a),Fn(o,{name:a,fromWireType:function(M){return!!M},toWireType:function(M,A){return A?h:g},argPackAdvance:$n,readValueFromPointer:function(M){return this.fromWireType(pe[M>>>0])},destructorFunction:null})}var pa=o=>({count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType}),ps=o=>{function a(h){return h.$$.ptrType.registeredClass.name}At(a(o)+" instance already deleted")},ms=!1,qs=o=>{},ma=o=>{o.smartPtr?o.smartPtrType.rawDestructor(o.smartPtr):o.ptrType.registeredClass.rawDestructor(o.ptr)},js=o=>{o.count.value-=1;var a=o.count.value===0;a&&ma(o)},Zs=(o,a,h)=>{if(a===h)return o;if(h.baseClass===void 0)return null;var g=Zs(o,a,h.baseClass);return g===null?null:h.downcast(g)},Ks={},ga={},Js=(o,a)=>{for(a===void 0&&At("ptr should not be undefined");o.baseClass;)a=o.upcast(a),o=o.baseClass;return a},gs=(o,a)=>(a=Js(o,a),ga[a]),On=(o,a)=>{(!a.ptrType||!a.ptr)&&Rr("makeClassHandle requires ptr and ptrType");var h=!!a.smartPtrType,g=!!a.smartPtr;return h!==g&&Rr("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Gi(Object.create(o,{$$:{value:a,writable:!0}}))};function _s(o){var a=this.getPointee(o);if(!a)return this.destructor(o),null;var h=gs(this.registeredClass,a);if(h!==void 0){if(h.$$.count.value===0)return h.$$.ptr=a,h.$$.smartPtr=o,h.clone();var g=h.clone();return this.destructor(o),g}function M(){return this.isSmartPointer?On(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:o}):On(this.registeredClass.instancePrototype,{ptrType:this,ptr:o})}var A=this.registeredClass.getActualType(a),D=Ks[A];if(!D)return M.call(this);var U;this.isConst?U=D.constPointerType:U=D.pointerType;var Y=Zs(a,this.registeredClass,U.registeredClass);return Y===null?M.call(this):this.isSmartPointer?On(U.registeredClass.instancePrototype,{ptrType:U,ptr:Y,smartPtrType:this,smartPtr:o}):On(U.registeredClass.instancePrototype,{ptrType:U,ptr:Y})}var Gi=o=>typeof FinalizationRegistry>"u"?(Gi=a=>a,o):(ms=new FinalizationRegistry(a=>{console.warn(a.leakWarning),js(a.$$)}),Gi=a=>{var h=a.$$,g=!!h.smartPtr;if(g){var M={$$:h},A=h.ptrType.registeredClass,D=new Error(`Embind found a leaked C++ instance ${A.name} <${Se(h.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(D,_s),M.leakWarning=D.stack.replace(/^Error: /,""),ms.register(a,M,a)}return a},qs=a=>ms.unregister(a),Gi(o)),_a=()=>{Object.assign(Pr.prototype,{isAliasOf(o){if(!(this instanceof Pr)||!(o instanceof Pr))return!1;var a=this.$$.ptrType.registeredClass,h=this.$$.ptr;o.$$=o.$$;for(var g=o.$$.ptrType.registeredClass,M=o.$$.ptr;a.baseClass;)h=a.upcast(h),a=a.baseClass;for(;g.baseClass;)M=g.upcast(M),g=g.baseClass;return a===g&&h===M},clone(){if(this.$$.ptr||ps(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var o=Gi(Object.create(Object.getPrototypeOf(this),{$$:{value:pa(this.$$)}}));return o.$$.count.value+=1,o.$$.deleteScheduled=!1,o},delete(){this.$$.ptr||ps(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&At("Object already scheduled for deletion"),qs(this),js(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ps(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&At("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}})};function Pr(){}var Vi=(o,a)=>Object.defineProperty(a,"name",{value:o}),Mi=(o,a,h)=>{if(o[a].overloadTable===void 0){var g=o[a];o[a]=function(...M){return o[a].overloadTable.hasOwnProperty(M.length)||At(`Function '${h}' called with an invalid number of arguments (${M.length}) - expects one of (${o[a].overloadTable})!`),o[a].overloadTable[M.length].apply(this,M)},o[a].overloadTable=[],o[a].overloadTable[g.argCount]=g}},vs=(o,a,h)=>{n.hasOwnProperty(o)?(At(`Cannot register public name '${o}' twice`),Mi(n,o,o),n[o].overloadTable.hasOwnProperty(h)&&At(`Cannot register multiple overloads of a function with the same number of arguments (${h})!`),n[o].overloadTable[h]=a):(n[o]=a,n[o].argCount=h)},Qs=48,eo=57,T=o=>{z(typeof o=="string"),o=o.replace(/[^a-zA-Z0-9_]/g,"$");var a=o.charCodeAt(0);return a>=Qs&&a<=eo?`_${o}`:o};function b(o,a,h,g,M,A,D,U){this.name=o,this.constructor=a,this.instancePrototype=h,this.rawDestructor=g,this.baseClass=M,this.getActualType=A,this.upcast=D,this.downcast=U,this.pureVirtualFunctions=[]}var G=(o,a,h)=>{for(;a!==h;)a.upcast||At(`Expected null or instance of ${h.name}, got an instance of ${a.name}`),o=a.upcast(o),a=a.baseClass;return o};function q(o,a){if(a===null)return this.isReference&&At(`null is not a valid ${this.name}`),0;a.$$||At(`Cannot pass "${ei(a)}" as a ${this.name}`),a.$$.ptr||At(`Cannot pass deleted object as a pointer of type ${this.name}`);var h=a.$$.ptrType.registeredClass,g=G(a.$$.ptr,h,this.registeredClass);return g}function ae(o,a){var h;if(a===null)return this.isReference&&At(`null is not a valid ${this.name}`),this.isSmartPointer?(h=this.rawConstructor(),o!==null&&o.push(this.rawDestructor,h),h):0;(!a||!a.$$)&&At(`Cannot pass "${ei(a)}" as a ${this.name}`),a.$$.ptr||At(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&At(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var g=a.$$.ptrType.registeredClass;if(h=G(a.$$.ptr,g,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&At("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?h=a.$$.smartPtr:At(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:h=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)h=a.$$.smartPtr;else{var M=a.clone();h=this.rawShare(h,xn.toHandle(()=>M.delete())),o!==null&&o.push(this.rawDestructor,h)}break;default:At("Unsupporting sharing policy")}return h}function de(o,a){if(a===null)return this.isReference&&At(`null is not a valid ${this.name}`),0;a.$$||At(`Cannot pass "${ei(a)}" as a ${this.name}`),a.$$.ptr||At(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&At(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var h=a.$$.ptrType.registeredClass,g=G(a.$$.ptr,h,this.registeredClass);return g}function ge(o){return this.fromWireType(J[o>>>2>>>0])}var xe=()=>{Object.assign(Le.prototype,{getPointee(o){return this.rawGetPointee&&(o=this.rawGetPointee(o)),o},destructor(o){var a;(a=this.rawDestructor)==null||a.call(this,o)},argPackAdvance:$n,readValueFromPointer:ge,fromWireType:_s})};function Le(o,a,h,g,M,A,D,U,Y,oe,fe){this.name=o,this.registeredClass=a,this.isReference=h,this.isConst=g,this.isSmartPointer=M,this.pointeeType=A,this.sharingPolicy=D,this.rawGetPointee=U,this.rawConstructor=Y,this.rawShare=oe,this.rawDestructor=fe,!M&&a.baseClass===void 0?g?(this.toWireType=q,this.destructorFunction=null):(this.toWireType=de,this.destructorFunction=null):this.toWireType=ae}var lt=(o,a,h)=>{n.hasOwnProperty(o)||Rr("Replacing nonexistent public symbol"),n[o].overloadTable!==void 0&&h!==void 0||(n[o]=a,n[o].argCount=h)},ft=[],Ct,Je=o=>{var a=ft[o];return a||(o>=ft.length&&(ft.length=o+1),ft[o]=a=Ct.get(o)),z(Ct.get(o)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},wt=(o,a,h=[])=>{z(Je(a),`missing table entry in dynCall: ${a}`);var g=Je(a)(...h);return o[0]=="p"?g>>>0:g},jt=(o,a)=>(z(o.includes("j")||o.includes("p"),"getDynCaller should only be called with i64 sigs"),(...h)=>wt(o,a,h)),Ht=(o,a)=>{o=cn(o);function h(){return o.includes("p")?jt(o,a):Je(a)}var g=h();return typeof g!="function"&&At(`unknown function pointer with signature ${o}: ${a}`),g},Bn=(o,a)=>{var h=Vi(a,function(g){this.name=a,this.message=g;var M=new Error(g).stack;M!==void 0&&(this.stack=this.toString()+`
`+M.replace(/^Error(:[^\n]*)?\n/,""))});return h.prototype=Object.create(o.prototype),h.prototype.constructor=h,h.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},h},kn,Ei=o=>{var a=Ld(o),h=cn(a);return fi(a),h},wn=(o,a)=>{var h=[],g={};function M(A){if(!g[A]&&!xi[A]){if(Cr[A]){Cr[A].forEach(M);return}h.push(A),g[A]=!0}}throw a.forEach(M),new kn(`${o}: `+h.map(Ei).join([", "]))};function va(o,a,h,g,M,A,D,U,Y,oe,fe,Ae,Ie){o>>>=0,a>>>=0,h>>>=0,g>>>=0,M>>>=0,A>>>=0,D>>>=0,U>>>=0,Y>>>=0,oe>>>=0,fe>>>=0,Ae>>>=0,Ie>>>=0,fe=cn(fe),A=Ht(M,A),U&&(U=Ht(D,U)),oe&&(oe=Ht(Y,oe)),Ie=Ht(Ae,Ie);var Ce=T(fe);vs(Ce,function(){wn(`Cannot construct ${fe} due to unbound types`,[g])}),ui([o,a,h],g?[g]:[],He=>{var sn;He=He[0];var vt,kt;g?(vt=He.registeredClass,kt=vt.instancePrototype):kt=Pr.prototype;var Ut=Vi(fe,function(...Ta){if(Object.getPrototypeOf(this)!==Mn)throw new Hi("Use 'new' to construct "+fe);if(Zt.constructor_body===void 0)throw new Hi(fe+" has no accessible constructor");var fc=Zt.constructor_body[Ta.length];if(fc===void 0)throw new Hi(`Tried to invoke ctor of ${fe} with invalid number of parameters (${Ta.length}) - expected (${Object.keys(Zt.constructor_body).toString()}) parameters instead!`);return fc.apply(this,Ta)}),Mn=Object.create(kt,{constructor:{value:Ut}});Ut.prototype=Mn;var Zt=new b(fe,Ut,Mn,Ie,vt,A,U,oe);Zt.baseClass&&((sn=Zt.baseClass).__derivedClasses??(sn.__derivedClasses=[]),Zt.baseClass.__derivedClasses.push(Zt));var ir=new Le(fe,Zt,!0,!1,!1),zn=new Le(fe+"*",Zt,!1,!1,!1),Si=new Le(fe+" const*",Zt,!1,!0,!1);return Ks[o]={pointerType:zn,constPointerType:Si},lt(Ce,Ut),[ir,zn,Si]})}var ys=o=>{for(;o.length;){var a=o.pop(),h=o.pop();h(a)}};function xs(o){for(var a=1;a<o.length;++a)if(o[a]!==null&&o[a].destructorFunction===void 0)return!0;return!1}function Ms(o,a){if(!(o instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof o} which is not a function`);var h=Vi(o.name||"unknownFunctionName",function(){});h.prototype=o.prototype;var g=new h,M=o.apply(g,a);return M instanceof Object?M:g}function Es(o,a,h,g,M){if(o<a||o>h){var A=a==h?a:`${a} to ${h}`;M(`function ${g} called with ${o} arguments, expected ${A}`)}}function to(o,a,h,g){var M=xs(o),A=o.length-2,D=[],U=["fn"];a&&U.push("thisWired");for(var Y=0;Y<A;++Y)D.push(`arg${Y}`),U.push(`arg${Y}Wired`);D=D.join(","),U=U.join(",");var oe=`return function (${D}) {
`;oe+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,M&&(oe+=`var destructors = [];
`);var fe=M?"destructors":"null",Ae=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(oe+=`var thisWired = classParam['toWireType'](${fe}, this);
`);for(var Y=0;Y<A;++Y)oe+=`var arg${Y}Wired = argType${Y}['toWireType'](${fe}, arg${Y});
`,Ae.push(`argType${Y}`);if(oe+=(h||g?"var rv = ":"")+`invoker(${U});
`,M)oe+=`runDestructors(destructors);
`;else for(var Y=a?1:2;Y<o.length;++Y){var Ie=Y===1?"thisWired":"arg"+(Y-2)+"Wired";o[Y].destructorFunction!==null&&(oe+=`${Ie}_dtor(${Ie});
`,Ae.push(`${Ie}_dtor`))}return h&&(oe+=`var ret = retType['fromWireType'](rv);
return ret;
`),oe+=`}
`,Ae.push("checkArgCount","minArgs","maxArgs"),oe=`if (arguments.length !== ${Ae.length}){ throw new Error(humanName + "Expected ${Ae.length} closure arguments " + arguments.length + " given."); }
${oe}`,[Ae,oe]}function uh(o){for(var a=o.length-2,h=o.length-1;h>=2&&o[h].optional;--h)a--;return a}function ya(o,a,h,g,M,A){var D=a.length;D<2&&At("argTypes array size mismatch! Must at least get return value and 'this' types!"),z(!A,"Async bindings are only supported with JSPI.");for(var U=a[1]!==null&&h!==null,Y=xs(a),oe=a[0].name!=="void",fe=D-2,Ae=uh(a),Ie=[o,At,g,M,ys,a[0],a[1]],Ce=0;Ce<D-2;++Ce)Ie.push(a[Ce+2]);if(!Y)for(var Ce=U?1:2;Ce<a.length;++Ce)a[Ce].destructorFunction!==null&&Ie.push(a[Ce].destructorFunction);Ie.push(Es,Ae,fe);let[He,vt]=to(a,U,oe,A);He.push(vt);var kt=Ms(Function,He)(...Ie);return Vi(o,kt)}var xa=(o,a)=>{for(var h=[],g=0;g<o;g++)h.push(J[a+g*4>>>2>>>0]);return h},Kl=o=>{o=o.trim();const a=o.indexOf("(");return a===-1?o:(z(o.endsWith(")"),"Parentheses for argument names should match."),o.slice(0,a))},fh=function(o,a,h,g,M,A,D,U,Y){o>>>=0,a>>>=0,g>>>=0,M>>>=0,A>>>=0,D>>>=0;var oe=xa(h,g);a=cn(a),a=Kl(a),A=Ht(M,A),ui([],[o],fe=>{fe=fe[0];var Ae=`${fe.name}.${a}`;function Ie(){wn(`Cannot call ${Ae} due to unbound types`,oe)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var Ce=fe.registeredClass.constructor;return Ce[a]===void 0?(Ie.argCount=h-1,Ce[a]=Ie):(Mi(Ce,a,Ae),Ce[a].overloadTable[h-1]=Ie),ui([],oe,He=>{var vt=[He[0],null].concat(He.slice(1)),kt=ya(Ae,vt,null,A,D,U);if(Ce[a].overloadTable===void 0?(kt.argCount=h-1,Ce[a]=kt):Ce[a].overloadTable[h-1]=kt,fe.registeredClass.__derivedClasses)for(const Ut of fe.registeredClass.__derivedClasses)Ut.constructor.hasOwnProperty(a)||(Ut.constructor[a]=kt);return[]}),[]})},hh=function(o,a,h,g,M,A){o>>>=0,h>>>=0,g>>>=0,M>>>=0,A>>>=0,z(a>0);var D=xa(a,h);M=Ht(g,M),ui([],[o],U=>{U=U[0];var Y=`constructor ${U.name}`;if(U.registeredClass.constructor_body===void 0&&(U.registeredClass.constructor_body=[]),U.registeredClass.constructor_body[a-1]!==void 0)throw new Hi(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${U.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return U.registeredClass.constructor_body[a-1]=()=>{wn(`Cannot construct ${U.name} due to unbound types`,D)},ui([],D,oe=>(oe.splice(1,0,null),U.registeredClass.constructor_body[a-1]=ya(Y,oe,null,M,A),[])),[]})},dh=function(o,a,h,g,M,A,D,U,Y,oe){o>>>=0,a>>>=0,g>>>=0,M>>>=0,A>>>=0,D>>>=0;var fe=xa(h,g);a=cn(a),a=Kl(a),A=Ht(M,A),ui([],[o],Ae=>{Ae=Ae[0];var Ie=`${Ae.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),U&&Ae.registeredClass.pureVirtualFunctions.push(a);function Ce(){wn(`Cannot call ${Ie} due to unbound types`,fe)}var He=Ae.registeredClass.instancePrototype,vt=He[a];return vt===void 0||vt.overloadTable===void 0&&vt.className!==Ae.name&&vt.argCount===h-2?(Ce.argCount=h-2,Ce.className=Ae.name,He[a]=Ce):(Mi(He,a,Ie),He[a].overloadTable[h-2]=Ce),ui([],fe,kt=>{var Ut=ya(Ie,kt,Ae,A,D,Y);return He[a].overloadTable===void 0?(Ut.argCount=h-2,He[a]=Ut):He[a].overloadTable[h-2]=Ut,[]}),[]})},Ma=[],Xn=[];function Ea(o){o>>>=0,o>9&&--Xn[o+1]===0&&(z(Xn[o]!==void 0,"Decref for unallocated handle."),Xn[o]=void 0,Ma.push(o))}var ph=()=>Xn.length/2-5-Ma.length,mh=()=>{Xn.push(0,1,void 0,1,null,1,!0,1,!1,1),z(Xn.length===5*2),n.count_emval_handles=ph},xn={toValue:o=>(o||At("Cannot use deleted val. handle = "+o),z(o===2||Xn[o]!==void 0&&o%2===0,`invalid handle: ${o}`),Xn[o]),toHandle:o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Ma.pop()||Xn.length;return Xn[a]=o,Xn[a+1]=1,a}}}},Jl={name:"emscripten::val",fromWireType:o=>{var a=xn.toValue(o);return Ea(o),a},toWireType:(o,a)=>xn.toHandle(a),argPackAdvance:$n,readValueFromPointer:ge,destructorFunction:null};function gh(o){return o>>>=0,Fn(o,Jl)}var _h=(o,a,h)=>{switch(a){case 1:return h?function(g){return this.fromWireType(ee[g>>>0])}:function(g){return this.fromWireType(pe[g>>>0])};case 2:return h?function(g){return this.fromWireType(W[g>>>1>>>0])}:function(g){return this.fromWireType(Z[g>>>1>>>0])};case 4:return h?function(g){return this.fromWireType($[g>>>2>>>0])}:function(g){return this.fromWireType(J[g>>>2>>>0])};default:throw new TypeError(`invalid integer width (${a}): ${o}`)}};function vh(o,a,h,g){o>>>=0,a>>>=0,h>>>=0,a=cn(a);function M(){}M.values={},Fn(o,{name:a,constructor:M,fromWireType:function(A){return this.constructor.values[A]},toWireType:(A,D)=>D.value,argPackAdvance:$n,readValueFromPointer:_h(a,h,g),destructorFunction:null}),vs(a,M)}var no=(o,a)=>{var h=xi[o];return h===void 0&&At(`${a} has unknown type ${Ei(o)}`),h};function yh(o,a,h){o>>>=0,a>>>=0;var g=no(o,"enum");a=cn(a);var M=g.constructor,A=Object.create(g.constructor.prototype,{value:{value:h},constructor:{value:Vi(`${g.name}_${a}`,function(){})}});M.values[h]=A,M[a]=A}var xh=(o,a)=>{switch(a){case 4:return function(h){return this.fromWireType(ce[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(be[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${a}): ${o}`)}},Mh=function(o,a,h){o>>>=0,a>>>=0,h>>>=0,a=cn(a),Fn(o,{name:a,fromWireType:g=>g,toWireType:(g,M)=>{if(typeof M!="number"&&typeof M!="boolean")throw new TypeError(`Cannot convert ${ei(M)} to ${this.name}`);return M},argPackAdvance:$n,readValueFromPointer:xh(a,h),destructorFunction:null})};function Eh(o,a,h,g,M){o>>>=0,a>>>=0,h>>>=0,a=cn(a),M===-1&&(M=4294967295);var A=fe=>fe;if(g===0){var D=32-8*h;A=fe=>fe<<D>>>D}var U=a.includes("unsigned"),Y=(fe,Ae)=>{if(typeof fe!="number"&&typeof fe!="boolean")throw new TypeError(`Cannot convert "${ei(fe)}" to ${Ae}`);if(fe<g||fe>M)throw new TypeError(`Passing a number "${ei(fe)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${g}, ${M}]!`)},oe;U?oe=function(fe,Ae){return Y(Ae,this.name),Ae>>>0}:oe=function(fe,Ae){return Y(Ae,this.name),Ae},Fn(o,{name:a,fromWireType:A,toWireType:oe,argPackAdvance:$n,readValueFromPointer:Ys(a,h,g!==0),destructorFunction:null})}function Sh(o,a,h){o>>>=0,h>>>=0;var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],M=g[a];function A(D){var U=J[D>>>2>>>0],Y=J[D+4>>>2>>>0];return new M(ee.buffer,Y,U)}h=cn(h),Fn(o,{name:h,fromWireType:A,argPackAdvance:$n,readValueFromPointer:A},{ignoreDuplicateRegistrations:!0})}var bh=Object.assign({optional:!0},Jl);function wh(o,a){o>>>=0,Fn(o,bh)}var Th=function(o,a,h,g,M,A,D,U,Y,oe,fe,Ae){o>>>=0,a>>>=0,h>>>=0,M>>>=0,A>>>=0,D>>>=0,U>>>=0,Y>>>=0,oe>>>=0,fe>>>=0,Ae>>>=0,h=cn(h),A=Ht(M,A),U=Ht(D,U),oe=Ht(Y,oe),Ae=Ht(fe,Ae),ui([o],[a],Ie=>{Ie=Ie[0];var Ce=new Le(h,Ie.registeredClass,!1,!1,!0,Ie,g,A,U,oe,Ae);return[Ce]})},Lr=(o,a,h)=>(z(typeof h=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ot(o,pe,a,h));function Ah(o,a){o>>>=0,a>>>=0,a=cn(a),Fn(o,{name:a,fromWireType(h){for(var g=J[h>>>2>>>0],M=h+4,A,D,U=M,D=0;D<=g;++D){var Y=M+D;if(D==g||pe[Y>>>0]==0){var oe=Y-U,fe=Tt(U,oe);A===void 0?A=fe:(A+="\0",A+=fe),U=Y+1}}return fi(h),A},toWireType(h,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var M,A=typeof g=="string";A||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||At("Cannot pass non-string to std::string"),A?M=at(g):M=g.length;var D=oc(4+M+1),U=D+4;if(J[D>>>2>>>0]=M,A)Lr(g,U,M+1);else if(A)for(var Y=0;Y<M;++Y){var oe=g.charCodeAt(Y);oe>255&&(fi(D),At("String has UTF-16 code units that do not fit in 8 bits")),pe[U+Y>>>0]=oe}else for(var Y=0;Y<M;++Y)pe[U+Y>>>0]=g[Y];return h!==null&&h.push(fi,D),D},argPackAdvance:$n,readValueFromPointer:ge,destructorFunction(h){fi(h)}})}var Ql=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ch=(o,a)=>{z(o%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var h=o,g=h>>1,M=g+a/2;!(g>=M)&&Z[g>>>0];)++g;if(h=g<<1,h-o>32&&Ql)return Ql.decode(pe.subarray(o>>>0,h>>>0));for(var A="",D=0;!(D>=a/2);++D){var U=W[o+D*2>>>1>>>0];if(U==0)break;A+=String.fromCharCode(U)}return A},Rh=(o,a,h)=>{if(z(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),z(typeof h=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??(h=2147483647),h<2)return 0;h-=2;for(var g=a,M=h<o.length*2?h/2:o.length,A=0;A<M;++A){var D=o.charCodeAt(A);W[a>>>1>>>0]=D,a+=2}return W[a>>>1>>>0]=0,a-g},Ph=o=>o.length*2,Lh=(o,a)=>{z(o%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var h=0,g="";!(h>=a/4);){var M=$[o+h*4>>>2>>>0];if(M==0)break;if(++h,M>=65536){var A=M-65536;g+=String.fromCharCode(55296|A>>10,56320|A&1023)}else g+=String.fromCharCode(M)}return g},Dh=(o,a,h)=>{if(a>>>=0,z(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),z(typeof h=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??(h=2147483647),h<4)return 0;for(var g=a,M=g+h-4,A=0;A<o.length;++A){var D=o.charCodeAt(A);if(D>=55296&&D<=57343){var U=o.charCodeAt(++A);D=65536+((D&1023)<<10)|U&1023}if($[a>>>2>>>0]=D,a+=4,a+4>M)break}return $[a>>>2>>>0]=0,a-g},Fh=o=>{for(var a=0,h=0;h<o.length;++h){var g=o.charCodeAt(h);g>=55296&&g<=57343&&++h,a+=4}return a},Uh=function(o,a,h){o>>>=0,a>>>=0,h>>>=0,h=cn(h);var g,M,A,D;a===2?(g=Ch,M=Rh,D=Ph,A=U=>Z[U>>>1>>>0]):a===4&&(g=Lh,M=Dh,D=Fh,A=U=>J[U>>>2>>>0]),Fn(o,{name:h,fromWireType:U=>{for(var Y=J[U>>>2>>>0],oe,fe=U+4,Ae=0;Ae<=Y;++Ae){var Ie=U+4+Ae*a;if(Ae==Y||A(Ie)==0){var Ce=Ie-fe,He=g(fe,Ce);oe===void 0?oe=He:(oe+="\0",oe+=He),fe=Ie+a}}return fi(U),oe},toWireType:(U,Y)=>{typeof Y!="string"&&At(`Cannot pass non-string to C++ string type ${h}`);var oe=D(Y),fe=oc(4+oe+a);return J[fe>>>2>>>0]=oe/a,M(Y,fe+4,oe+a),U!==null&&U.push(fi,fe),fe},argPackAdvance:$n,readValueFromPointer:ge,destructorFunction(U){fi(U)}})},Ih=function(o,a){o>>>=0,a>>>=0,a=cn(a),Fn(o,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(h,g)=>{}})},ec=(o,a,h)=>{var g=[],M=o.toWireType(g,h);return g.length&&(J[a>>>2>>>0]=xn.toHandle(g)),M};function Nh(o,a,h){return o>>>=0,a>>>=0,h>>>=0,o=xn.toValue(o),a=no(a,"emval::as"),ec(a,h,o)}var Sa=[];function Oh(o,a,h,g){return o>>>=0,a>>>=0,h>>>=0,g>>>=0,o=Sa[o],a=xn.toValue(a),o(null,a,h,g)}var Bh=o=>{var a=Sa.length;return Sa.push(o),a},kh=(o,a)=>{for(var h=new Array(o),g=0;g<o;++g)h[g]=no(J[a+g*4>>>2>>>0],"parameter "+g);return h};function zh(o,a,h){a>>>=0;var g=kh(o,a),M=g.shift();o--;var A=`return function (obj, func, destructorsRef, args) {
`,D=0,U=[];h===0&&U.push("obj");for(var Y=["retType"],oe=[M],fe=0;fe<o;++fe)U.push("arg"+fe),Y.push("argType"+fe),oe.push(g[fe]),A+=`  var arg${fe} = argType${fe}.readValueFromPointer(args${D?"+"+D:""});
`,D+=g[fe].argPackAdvance;var Ae=h===1?"new func":"func.call";A+=`  var rv = ${Ae}(${U.join(", ")});
`,M.isVoid||(Y.push("emval_returnValue"),oe.push(ec),A+=`  return emval_returnValue(retType, destructorsRef, rv);
`),A+=`};
`,Y.push(A);var Ie=Ms(Function,Y)(...oe),Ce=`methodCaller<(${g.map(He=>He.name).join(", ")}) => ${M.name}>`;return Bh(Vi(Ce,Ie))}function Hh(o,a){return o>>>=0,a>>>=0,o=xn.toValue(o),a=xn.toValue(a),xn.toHandle(o[a])}function Gh(o){o>>>=0,o>9&&(Xn[o+1]+=1)}var Vh={},Wh=o=>{var a=Vh[o];return a===void 0?cn(o):a};function $h(o){return o>>>=0,xn.toHandle(Wh(o))}function Xh(){return xn.toHandle({})}function Yh(o){o>>>=0;var a=xn.toValue(o);ys(a),Ea(o)}function qh(o,a,h){o>>>=0,a>>>=0,h>>>=0,o=xn.toValue(o),a=xn.toValue(a),h=xn.toValue(h),o[a]=h}function jh(o,a){o>>>=0,a>>>=0,o=no(o,"_emval_take_value");var h=o.readValueFromPointer(a);return xn.toHandle(h)}var Zh=o=>o%4===0&&(o%100!==0||o%400===0),Kh=[0,31,60,91,121,152,182,213,244,274,305,335],Jh=[0,31,59,90,120,151,181,212,243,273,304,334],tc=o=>{var a=Zh(o.getFullYear()),h=a?Kh:Jh,g=h[o.getMonth()]+o.getDate()-1;return g};function Qh(o,a){o=Nt(o),a>>>=0;var h=new Date(o*1e3);$[a>>>2>>>0]=h.getSeconds(),$[a+4>>>2>>>0]=h.getMinutes(),$[a+8>>>2>>>0]=h.getHours(),$[a+12>>>2>>>0]=h.getDate(),$[a+16>>>2>>>0]=h.getMonth(),$[a+20>>>2>>>0]=h.getFullYear()-1900,$[a+24>>>2>>>0]=h.getDay();var g=tc(h)|0;$[a+28>>>2>>>0]=g,$[a+36>>>2>>>0]=-(h.getTimezoneOffset()*60);var M=new Date(h.getFullYear(),0,1),A=new Date(h.getFullYear(),6,1).getTimezoneOffset(),D=M.getTimezoneOffset(),U=(A!=D&&h.getTimezoneOffset()==Math.min(D,A))|0;$[a+32>>>2>>>0]=U}var ed=function(o){o>>>=0;var a=(()=>{var h=new Date($[o+20>>>2>>>0]+1900,$[o+16>>>2>>>0],$[o+12>>>2>>>0],$[o+8>>>2>>>0],$[o+4>>>2>>>0],$[o>>>2>>>0],0),g=$[o+32>>>2>>>0],M=h.getTimezoneOffset(),A=new Date(h.getFullYear(),0,1),D=new Date(h.getFullYear(),6,1).getTimezoneOffset(),U=A.getTimezoneOffset(),Y=Math.min(U,D);if(g<0)$[o+32>>>2>>>0]=+(D!=U&&Y==M);else if(g>0!=(Y==M)){var oe=Math.max(U,D),fe=g>0?Y:oe;h.setTime(h.getTime()+(fe-M)*6e4)}$[o+24>>>2>>>0]=h.getDay();var Ae=tc(h)|0;$[o+28>>>2>>>0]=Ae,$[o>>>2>>>0]=h.getSeconds(),$[o+4>>>2>>>0]=h.getMinutes(),$[o+8>>>2>>>0]=h.getHours(),$[o+12>>>2>>>0]=h.getDate(),$[o+16>>>2>>>0]=h.getMonth(),$[o+20>>>2>>>0]=h.getYear();var Ie=h.getTime();return isNaN(Ie)?-1:Ie/1e3})();return BigInt(a)},td=function(o,a,h,g){o>>>=0,a>>>=0,h>>>=0,g>>>=0;var M=new Date().getFullYear(),A=new Date(M,0,1),D=new Date(M,6,1),U=A.getTimezoneOffset(),Y=D.getTimezoneOffset(),oe=Math.max(U,Y);J[o>>>2>>>0]=oe*60,$[a>>>2>>>0]=+(U!=Y);var fe=Ce=>{var He=Ce>=0?"-":"+",vt=Math.abs(Ce),kt=String(Math.floor(vt/60)).padStart(2,"0"),Ut=String(vt%60).padStart(2,"0");return`UTC${He}${kt}${Ut}`},Ae=fe(U),Ie=fe(Y);z(Ae),z(Ie),z(at(Ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${Ae})`),z(at(Ie)<=16,`timezone name truncated to fit in TZNAME_MAX (${Ie})`),Y<U?(Lr(Ae,h,17),Lr(Ie,g,17)):(Lr(Ae,g,17),Lr(Ie,h,17))},nd=()=>performance.now(),nc=()=>Date.now(),id=o=>o>=0&&o<=3;function rd(o,a,h){if(h>>>=0,!id(o))return 28;var g;o===0?g=nc():g=nd();var M=Math.round(g*1e3*1e3);return le[h>>>3]=BigInt(M),0}var sd=()=>4294901760,od=o=>{var a=R.buffer,h=(o-a.byteLength+65535)/65536|0;try{return R.grow(h),$e(),1}catch(g){N(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${o} bytes, but got error: ${g}`)}};function ad(o){o>>>=0;var a=pe.length;z(o>a);var h=sd();if(o>h)return N(`Cannot enlarge memory, requested ${o} bytes, but the limit is ${h} bytes!`),!1;for(var g=1;g<=4;g*=2){var M=a*(1+.2/g);M=Math.min(M,o+100663296);var A=Math.min(h,Pt(Math.max(o,M),65536)),D=od(A);if(D)return!0}return N(`Failed to grow the heap from ${a} bytes to ${A} bytes, not enough memory!`),!1}var ba={},ld=()=>v||"./this.program",Ss=()=>{if(!Ss.strings){var o=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:o,_:ld()};for(var h in ba)ba[h]===void 0?delete a[h]:a[h]=ba[h];var g=[];for(var h in a)g.push(`${h}=${a[h]}`);Ss.strings=g}return Ss.strings},cd=(o,a)=>{for(var h=0;h<o.length;++h)z(o.charCodeAt(h)===(o.charCodeAt(h)&255)),ee[a++>>>0]=o.charCodeAt(h);ee[a>>>0]=0},ud=function(o,a){o>>>=0,a>>>=0;var h=0;return Ss().forEach((g,M)=>{var A=a+h;J[o+M*4>>>2>>>0]=A,cd(g,A),h+=g.length+1}),0},fd=function(o,a){o>>>=0,a>>>=0;var h=Ss();J[o>>>2>>>0]=h.length;var g=0;return h.forEach(M=>g+=M.length+1),J[a>>>2>>>0]=g,0};function hd(o){try{var a=ln.getStreamFromFD(o);return S.close(a),0}catch(h){if(typeof S>"u"||h.name!=="ErrnoError")throw h;return h.errno}}var dd=(o,a,h,g)=>{for(var M=0,A=0;A<h;A++){var D=J[a>>>2>>>0],U=J[a+4>>>2>>>0];a+=8;var Y=S.read(o,ee,D,U,g);if(Y<0)return-1;if(M+=Y,Y<U)break}return M};function pd(o,a,h,g){a>>>=0,h>>>=0,g>>>=0;try{var M=ln.getStreamFromFD(o),A=dd(M,a,h);return J[g>>>2>>>0]=A,0}catch(D){if(typeof S>"u"||D.name!=="ErrnoError")throw D;return D.errno}}function md(o,a,h,g){a=Nt(a),g>>>=0;try{if(isNaN(a))return 61;var M=ln.getStreamFromFD(o);return S.llseek(M,a,h),le[g>>>3]=BigInt(M.position),M.getdents&&a===0&&h===0&&(M.getdents=null),0}catch(A){if(typeof S>"u"||A.name!=="ErrnoError")throw A;return A.errno}}var gd=(o,a,h,g)=>{for(var M=0,A=0;A<h;A++){var D=J[a>>>2>>>0],U=J[a+4>>>2>>>0];a+=8;var Y=S.write(o,ee,D,U,g);if(Y<0)return-1;if(M+=Y,Y<U)break}return M};function _d(o,a,h,g){a>>>=0,h>>>=0,g>>>=0;try{var M=ln.getStreamFromFD(o),A=gd(M,a,h);return J[g>>>2>>>0]=A,0}catch(D){if(typeof S>"u"||D.name!=="ErrnoError")throw D;return D.errno}}function vd(o,a){o>>>=0,a>>>=0;try{return st(pe.subarray(o>>>0,o+a>>>0)),0}catch(h){if(typeof S>"u"||h.name!=="ErrnoError")throw h;return h.errno}}var yd=o=>{var a=n["_"+o];return z(a,"Cannot call unknown function "+o+", make sure it is exported"),a},xd=(o,a)=>{z(o.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ee.set(o,a>>>0)},io=o=>Od(o),Md=o=>{var a=at(o)+1,h=io(a);return Lr(o,h,a),h},ic=(o,a,h,g,M)=>{var A={string:He=>{var vt=0;return He!=null&&He!==0&&(vt=Md(He)),vt},array:He=>{var vt=io(He.length);return xd(He,vt),vt}};function D(He){return a==="string"?Tt(He):a==="boolean"?!!He:He}var U=yd(o),Y=[],oe=0;if(z(a!=="array",'Return type should not be "array".'),g)for(var fe=0;fe<g.length;fe++){var Ae=A[h[fe]];Ae?(oe===0&&(oe=Ue()),Y[fe]=Ae(g[fe])):Y[fe]=g[fe]}var Ie=U(...Y);function Ce(He){return oe!==0&&_e(oe),D(He)}return Ie=Ce(Ie),Ie},Ed=(o,a,h,g)=>(...M)=>ic(o,a,h,M),Sd=S.createPath,bd=o=>S.unlink(o),wd=S.createLazyFile,Td=S.createDevice,Ad=o=>cc(o);n.incrementExceptionRefcount=Ad;var Cd=o=>lc(o);n.decrementExceptionRefcount=Cd;var Rd=o=>{var a=Ue(),h=io(4),g=io(4);kd(o,h,g);var M=J[h>>>2>>>0],A=J[g>>>2>>>0],D=Tt(M);fi(M);var U;return A&&(U=Tt(A),fi(A)),_e(a),[D,U]},rc=o=>Rd(o);n.getExceptionMessage=rc,S.createPreloadedFile=zi,S.staticInit(),n.FS_createPath=S.createPath,n.FS_createDataFile=S.createDataFile,n.FS_createPreloadedFile=S.createPreloadedFile,n.FS_unlink=S.unlink,n.FS_createLazyFile=S.createLazyFile,n.FS_createDevice=S.createDevice,fa(),Hi=n.BindingError=class extends Error{constructor(a){super(a),this.name="BindingError"}},Xs=n.InternalError=class extends Error{constructor(a){super(a),this.name="InternalError"}},_a(),xe(),kn=n.UnboundTypeError=Bn(Error,"UnboundTypeError"),mh();function Pd(){it("fetchSettings")}var sc={__assert_fail:Dn,__cxa_begin_catch:gi,__cxa_end_catch:Ni,__cxa_find_matching_catch_2:ki,__cxa_find_matching_catch_3:L,__cxa_rethrow:j,__cxa_throw:re,__cxa_uncaught_exceptions:ne,__resumeException:_i,__syscall_fcntl64:Ar,__syscall_ioctl:ca,__syscall_openat:ua,_abort_js:Ws,_embind_register_bigint:ds,_embind_register_bool:da,_embind_register_class:va,_embind_register_class_class_function:fh,_embind_register_class_constructor:hh,_embind_register_class_function:dh,_embind_register_emval:gh,_embind_register_enum:vh,_embind_register_enum_value:yh,_embind_register_float:Mh,_embind_register_integer:Eh,_embind_register_memory_view:Sh,_embind_register_optional:wh,_embind_register_smart_ptr:Th,_embind_register_std_string:Ah,_embind_register_std_wstring:Uh,_embind_register_void:Ih,_emval_as:Nh,_emval_call:Oh,_emval_decref:Ea,_emval_get_method_caller:zh,_emval_get_property:Hh,_emval_incref:Gh,_emval_new_cstring:$h,_emval_new_object:Xh,_emval_run_destructors:Yh,_emval_set_property:qh,_emval_take_value:jh,_localtime_js:Qh,_mktime_js:ed,_tzset_js:td,clock_time_get:rd,emscripten_date_now:nc,emscripten_resize_heap:ad,environ_get:ud,environ_sizes_get:fd,fd_close:hd,fd_read:pd,fd_seek:md,fd_write:_d,invoke_diii:lp,invoke_fiii:ap,invoke_i:cp,invoke_ii:Wd,invoke_iii:Vd,invoke_iiii:jd,invoke_iiiii:rp,invoke_iiiiid:ep,invoke_iiiiii:Jd,invoke_iiiiiii:qd,invoke_iiiiiiii:np,invoke_iiiiiiiiiii:ip,invoke_iiiiiiiiiiii:fp,invoke_iiiiiiiiiiiii:op,invoke_iiiiij:Qd,invoke_j:Gd,invoke_jiiii:sp,invoke_v:Yd,invoke_vi:Xd,invoke_vii:$d,invoke_viid:mp,invoke_viif:pp,invoke_viii:tp,invoke_viiii:Kd,invoke_viiiiiii:up,invoke_viiiiiiiiii:hp,invoke_viiiiiiiiiiiiiii:dp,invoke_viijii:Zd,random_get:vd},Tn=await B(),Ld=Xe("__getTypeName",1),oc=Xe("malloc",1),fi=Xe("free",1),Dd=Xe("fflush",1),Fd=Xe("strerror",1),Ft=Xe("setThrew",2),Ud=Xe("_emscripten_tempret_set",1),Id=Tn.emscripten_stack_init;Tn.emscripten_stack_get_free,Tn.emscripten_stack_get_base;var ac=Tn.emscripten_stack_get_end,Nd=Tn._emscripten_stack_restore,Od=Tn._emscripten_stack_alloc,Bd=Tn.emscripten_stack_get_current,lc=Xe("__cxa_decrement_exception_refcount",1),cc=Xe("__cxa_increment_exception_refcount",1),kd=Xe("__get_exception_message",3),zd=Xe("__cxa_can_catch",3),Hd=Xe("__cxa_get_exception_ptr",1);function Gd(o){var a=Ue();try{return Je(o)()}catch(h){if(_e(a),!(h instanceof Te))throw h;return Ft(1,0),0n}}function Vd(o,a,h){var g=Ue();try{return Je(o)(a,h)}catch(M){if(_e(g),!(M instanceof Te))throw M;Ft(1,0)}}function Wd(o,a){var h=Ue();try{return Je(o)(a)}catch(g){if(_e(h),!(g instanceof Te))throw g;Ft(1,0)}}function $d(o,a,h){var g=Ue();try{Je(o)(a,h)}catch(M){if(_e(g),!(M instanceof Te))throw M;Ft(1,0)}}function Xd(o,a){var h=Ue();try{Je(o)(a)}catch(g){if(_e(h),!(g instanceof Te))throw g;Ft(1,0)}}function Yd(o){var a=Ue();try{Je(o)()}catch(h){if(_e(a),!(h instanceof Te))throw h;Ft(1,0)}}function qd(o,a,h,g,M,A,D){var U=Ue();try{return Je(o)(a,h,g,M,A,D)}catch(Y){if(_e(U),!(Y instanceof Te))throw Y;Ft(1,0)}}function jd(o,a,h,g){var M=Ue();try{return Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function Zd(o,a,h,g,M,A){var D=Ue();try{Je(o)(a,h,g,M,A)}catch(U){if(_e(D),!(U instanceof Te))throw U;Ft(1,0)}}function Kd(o,a,h,g,M){var A=Ue();try{Je(o)(a,h,g,M)}catch(D){if(_e(A),!(D instanceof Te))throw D;Ft(1,0)}}function Jd(o,a,h,g,M,A){var D=Ue();try{return Je(o)(a,h,g,M,A)}catch(U){if(_e(D),!(U instanceof Te))throw U;Ft(1,0)}}function Qd(o,a,h,g,M,A){var D=Ue();try{return Je(o)(a,h,g,M,A)}catch(U){if(_e(D),!(U instanceof Te))throw U;Ft(1,0)}}function ep(o,a,h,g,M,A){var D=Ue();try{return Je(o)(a,h,g,M,A)}catch(U){if(_e(D),!(U instanceof Te))throw U;Ft(1,0)}}function tp(o,a,h,g){var M=Ue();try{Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function np(o,a,h,g,M,A,D,U){var Y=Ue();try{return Je(o)(a,h,g,M,A,D,U)}catch(oe){if(_e(Y),!(oe instanceof Te))throw oe;Ft(1,0)}}function ip(o,a,h,g,M,A,D,U,Y,oe,fe){var Ae=Ue();try{return Je(o)(a,h,g,M,A,D,U,Y,oe,fe)}catch(Ie){if(_e(Ae),!(Ie instanceof Te))throw Ie;Ft(1,0)}}function rp(o,a,h,g,M){var A=Ue();try{return Je(o)(a,h,g,M)}catch(D){if(_e(A),!(D instanceof Te))throw D;Ft(1,0)}}function sp(o,a,h,g,M){var A=Ue();try{return Je(o)(a,h,g,M)}catch(D){if(_e(A),!(D instanceof Te))throw D;return Ft(1,0),0n}}function op(o,a,h,g,M,A,D,U,Y,oe,fe,Ae,Ie){var Ce=Ue();try{return Je(o)(a,h,g,M,A,D,U,Y,oe,fe,Ae,Ie)}catch(He){if(_e(Ce),!(He instanceof Te))throw He;Ft(1,0)}}function ap(o,a,h,g){var M=Ue();try{return Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function lp(o,a,h,g){var M=Ue();try{return Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function cp(o){var a=Ue();try{return Je(o)()}catch(h){if(_e(a),!(h instanceof Te))throw h;Ft(1,0)}}function up(o,a,h,g,M,A,D,U){var Y=Ue();try{Je(o)(a,h,g,M,A,D,U)}catch(oe){if(_e(Y),!(oe instanceof Te))throw oe;Ft(1,0)}}function fp(o,a,h,g,M,A,D,U,Y,oe,fe,Ae){var Ie=Ue();try{return Je(o)(a,h,g,M,A,D,U,Y,oe,fe,Ae)}catch(Ce){if(_e(Ie),!(Ce instanceof Te))throw Ce;Ft(1,0)}}function hp(o,a,h,g,M,A,D,U,Y,oe,fe){var Ae=Ue();try{Je(o)(a,h,g,M,A,D,U,Y,oe,fe)}catch(Ie){if(_e(Ae),!(Ie instanceof Te))throw Ie;Ft(1,0)}}function dp(o,a,h,g,M,A,D,U,Y,oe,fe,Ae,Ie,Ce,He,vt){var kt=Ue();try{Je(o)(a,h,g,M,A,D,U,Y,oe,fe,Ae,Ie,Ce,He,vt)}catch(Ut){if(_e(kt),!(Ut instanceof Te))throw Ut;Ft(1,0)}}function pp(o,a,h,g){var M=Ue();try{Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function mp(o,a,h,g){var M=Ue();try{Je(o)(a,h,g)}catch(A){if(_e(M),!(A instanceof Te))throw A;Ft(1,0)}}function gp(o){o=Object.assign({},o);var a=M=>A=>M(A)>>>0,h=M=>A=>M(A)>>>0,g=M=>()=>M()>>>0;return o.__getTypeName=a(o.__getTypeName),o.malloc=a(o.malloc),o.strerror=h(o.strerror),o.emscripten_stack_get_base=g(o.emscripten_stack_get_base),o.emscripten_stack_get_end=g(o.emscripten_stack_get_end),o._emscripten_stack_alloc=a(o._emscripten_stack_alloc),o.emscripten_stack_get_current=g(o.emscripten_stack_get_current),o.__cxa_get_exception_ptr=a(o.__cxa_get_exception_ptr),o}n.addRunDependency=Ne,n.removeRunDependency=Fe,n.ccall=ic,n.cwrap=Ed,n.FS_createPreloadedFile=zi,n.FS_unlink=bd,n.FS_createPath=Sd,n.FS_createDevice=Td,n.FS=S,n.FS_createDataFile=Wn,n.FS_createLazyFile=wd;var _p=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","exitJS","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","readEmAsmArgs","jstoi_q","listenOnce","autoResumeAudioContext","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","AsciiToString","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","setErrNo","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","validateThis","emval_get_global"];_p.forEach(et);var vp=["run","out","err","callMain","abort","wasmMemory","wasmExports","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","zeroMemory","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","jstoi_s","getExecutableName","getDynCaller","dynCall","asyncLoad","alignMemory","mmapAlloc","wasmTable","noExitRuntime","addOnPreRun","addOnPostRun","getCFunc","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","incrementExceptionRefcount","decrementExceptionRefcount","getExceptionMessage","Browser","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","embind_charCodes","embind_init_charCodes","readLatin1String","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","PureVirtualError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","extendError","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","readPointer","runDestructors","newFunc","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","init_emval","count_emval_handles","getStringOrSymbol","Emval","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller","reflectConstruct"];vp.forEach(rt);var uc;function yp(){Id(),ue()}function wa(){if(C>0){Q=wa;return}if(yp(),Rt(),C>0){Q=wa;return}function o(){var a;z(!uc),uc=!0,n.calledRun=!0,!I&&(ut(),r(n),(a=n.onRuntimeInitialized)==null||a.call(n),ct("onRuntimeInitialized"),z(!n._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),F())}n.setStatus?(n.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>n.setStatus(""),1),o()},1)):o(),Be()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();ct("preInit"),wa(),t=c;for(const o of Object.keys(n))o in e||Object.defineProperty(e,o,{configurable:!0,get(){he(`Access to module property ('${o}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return t}})();(()=>{var i=jo;jo=function(e){if(new.target)throw new Error("Module() should not be called with `new Module()`");return i(e)}})();const Vx=(async()=>{var e;if(typeof process<"u"&&((e=process.versions)==null?void 0:e.node)&&typeof window>"u"){const{pathToFileURL:t,fileURLToPath:n}=await Us(async()=>{const{pathToFileURL:l,fileURLToPath:u}=await import("./chunks/__vite-browser-external-BIHI7g3E.js");return{pathToFileURL:l,fileURLToPath:u}},[]),r=await Us(()=>import("./chunks/__vite-browser-external-BIHI7g3E.js"),[]),s=r.default.dirname(n(new URL(import.meta.url))),c=r.default.resolve(s,"build/lib3mf.wasm");return t(c).toString()}try{const t=await Us(()=>import("./chunks/lib3mf-Bv14P5vU.js"),[]);return t.default??t}catch(t){return console.warn("lib3mf: dynamic import of wasm failed, falling back to URL",t),new URL("/assets/lib3mf-CffIHwNd.wasm",import.meta.url).href}})();async function Wx(i={}){const e=await Vx,n={locateFile:r=>r.endsWith(".wasm")?e:r,...i};if(typeof jo!="function")throw new Error("@3mfconsortium/lib3mf (ESM): The factory function could not be loaded from ./build/lib3mf.mjs. Make sure the file exists and exports a function.");return jo(n)}let Oo=null,Bo=null,ml=null;async function nh(){return Oo?{wrapper:Oo,wasm:ml}:(Bo||(Bo=(async()=>{try{const i=await Wx();return ml=i,Oo=new i.CWrapper,console.log("lib3mf WASM loaded successfully!"),{wrapper:Oo,wasm:ml}}catch(i){throw console.error("Failed to load lib3mf WASM:",i),Bo=null,i}})()),Bo)}async function $x(i,e){const{wrapper:t,wasm:n}=await nh(),r=t.CreateModel();let s=null,c=null;try{s=r.QueryReader("3mf");const l=`/temp_${Math.random().toString(36).substring(2)}.3mf`;try{n.FS.writeFile(l,new Uint8Array(i)),s.ReadFromFile(l)}finally{try{n.FS.unlink(l)}catch(m){console.warn("Failed to remove virtual temp 3MF file:",m)}}const u=e||new Zf({flatShading:!0}),f=new Map;for(c=r.GetMeshObjects();c.MoveNext();){const m=c.GetCurrentMeshObject();try{const v=m.GetUniqueResourceID(),x=m.GetVertexCount(),E=m.GetTriangleCount(),y=new Float32Array(x*3),_=[];for(let w=0;w<x;w++){const O=m.GetVertex(w);y[w*3]=O.get_Coordinates0(),y[w*3+1]=O.get_Coordinates1(),y[w*3+2]=O.get_Coordinates2()}for(let w=0;w<E;w++){const O=m.GetTriangle(w);_.push(O.get_Indices0(),O.get_Indices1(),O.get_Indices2())}const P=new Xt;P.setAttribute("position",new Gt(y,3)),P.setIndex(_),P.computeVertexNormals(),f.set(v,P)}finally{m&&m.delete()}}const d=[];let p=null;try{for(p=r.GetBuildItems();p.MoveNext();){const m=p.GetCurrent();try{const v=m.GetObjectResourceID(),x=f.get(v);if(x){const E=x.clone();if(m.HasObjectTransform()){const _=m.GetObjectTransform(),P=new Jt().set(_.get_Fields_0_0(),_.get_Fields_0_1(),_.get_Fields_0_2(),_.get_Fields_3_0(),_.get_Fields_1_0(),_.get_Fields_1_1(),_.get_Fields_1_2(),_.get_Fields_3_1(),_.get_Fields_2_0(),_.get_Fields_2_1(),_.get_Fields_2_2(),_.get_Fields_3_2(),0,0,0,1);E.applyMatrix4(P)}E.rotateX(-Math.PI/2);const y=new hn(E,u);d.push(y)}}finally{m&&m.delete()}}}catch(m){console.warn("Failed to read build items, falling back to raw mesh definitions:",m)}finally{p&&p.delete()}return d.length===0?f.forEach(m=>{m.rotateX(-Math.PI/2);const v=new hn(m,u);d.push(v)}):f.forEach(m=>{m.dispose()}),d}finally{s&&s.delete(),c&&c.delete(),r&&r.delete()}}function ql(i){const e=i.attributes.position.count/3,t=new Set,n=new Set,r={},s=u=>`${u.x.toFixed(3)},${u.y.toFixed(3)},${u.z.toFixed(3)}`,c=[];for(let u=0;u<e;u++){const f=Xx(i,u);c.push(f);const d=s(f);r[d]||(r[d]=[]),r[d].push(u)}const l=u=>{const f=c[u],d=s(f),p=r[d]||[],m=[],v=Ll(i,u);for(const x of p)if(x!==u){const E=Ll(i,x);Yx(v,E)&&m.push(x)}return m};for(let u=0;u<e;u++)if(!n.has(u)){l(u).forEach(v=>{n.add(v)});const d=c[u],p=.2,m=1;(Math.abs(d.x)>=p&&Math.abs(d.x)<=m||Math.abs(d.y)>=p&&Math.abs(d.y)<=m||Math.abs(d.z)>=p&&Math.abs(d.z)<=m)&&t.add(u)}return Array.from(t)}function Xx(i,e){if(i.attributes.normal){const s=i.attributes.normal.array,c=e*9;return new H(s[c],s[c+1],s[c+2])}const t=Ll(i,e),n=new H().subVectors(t[2],t[1]),r=new H().subVectors(t[0],t[1]);return n.cross(r),n.normalize(),n}function Yx(i,e){const n=new si().setFromCoplanarPoints(i[0],i[1],i[2]);return e.every(r=>Math.abs(n.distanceToPoint(r))<.001)}function Ll(i,e){const t=i.attributes.position.array,n=e*9;return[new H(t[n],t[n+1],t[n+2]),new H(t[n+3],t[n+4],t[n+5]),new H(t[n+6],t[n+7],t[n+8])]}function qx(i){if(!i||i.length<3)return null;const e=new Xf;e.moveTo(i[0].x,i[0].y);for(let t=1;t<i.length;t+=1)e.lineTo(i[t].x,i[t].y);return e.closePath(),e}Ix();nh().catch(()=>{});new Kf;const Kt=new Gy,Ln=new Zn(30,innerWidth/innerHeight);Ln.position.set(0,10,100);Ln.lookAt(Kt.position);Ln.near=.1;Ln.far=1e3;const Vs=new Hf({depth:!0,depthBuffer:!0,depthWrite:!0,depthTest:!0});Vs.setSize(innerWidth,innerHeight);document.body.appendChild(Vs.domElement);const jx=new ra(100,100,10,10),Zx=new Ui({color:65280,side:oi,wireframe:!0}),yr=new hn(jx,Zx);yr.rotation.x=Math.PI/2;yr.position.y=0;Kt.add(yr);console.log("pale",yr.position,yr);const ih=new H(0,-1,0),hs=new Ax(Ln,Vs.domElement);hs.enableDamping=!0;const Kx=new Vl(30,50),Jx=new oa({color:16711680,linewidth:1}),xr=new Vy(Kx,Jx);xr.rotation.x=Math.PI/2;xr.visible=!1;Kt.add(xr);const Qx=[0,45,90,135,180,225,270,360],eM=new oa({color:16777215});Qx.forEach(i=>{const e=i/180*Math.PI,t=30*Math.cos(e),n=30*Math.sin(e),r=new Xt().setFromPoints([new H(0,0,0),new H(t,n,0)]),s=new zl(r,eM);xr.add(s)});let en=[],De=null,pi=null,Un=null,fn=null,Qu=[],Dt=null;const bn=new H;window.addEventListener("resize",i=>{Ln.aspect=innerWidth/innerHeight,Ln.updateProjectionMatrix(),Vs.setSize(innerWidth,innerHeight)});window.addEventListener("mousedown",i=>{i.preventDefault()});let ko=null;const Jn=new Yl,tn=new We;document.getElementById("fileInput").addEventListener("change",rM);function tM(i){const e=i.attributes.position.array,t=e.length/3;let n=null;i.index&&(n=i.index.array);const r=n?n.length/3:t/3;if(r<=1)return[i];const s=new Int32Array(t),c=new Map;let l=0;for(let E=0;E<t;E++){const y=e[E*3],_=e[E*3+1],P=e[E*3+2],w=`${y.toFixed(4)},${_.toFixed(4)},${P.toFixed(4)}`;c.has(w)?s[E]=c.get(w):(s[E]=l,c.set(w,l),l++)}const u=new Int32Array(r);for(let E=0;E<r;E++)u[E]=E;function f(E){let y=E;for(;u[y]!==y;)y=u[y];let _=E;for(;_!==y;){let P=u[_];u[_]=y,_=P}return y}function d(E,y){let _=f(E),P=f(y);_!==P&&(u[_]=P)}const p=new Int32Array(l);p.fill(-1);for(let E=0;E<r;E++){let y,_,P;n?(y=n[E*3],_=n[E*3+1],P=n[E*3+2]):(y=E*3,_=E*3+1,P=E*3+2);const w=s[y],O=s[_],X=s[P],k=[w,O,X];for(const N of k){const K=p[N];K!==-1&&d(E,K),p[N]=E}}const m=new Map;for(let E=0;E<r;E++){const y=f(E);m.has(y)||m.set(y,[]),m.get(y).push(E)}if(m.size<=1)return[i];const v=Object.keys(i.attributes),x=[];for(const[E,y]of m.entries()){const _=new Xt;for(const P of v){const w=i.attributes[P],O=w.itemSize,X=new w.array.constructor(y.length*3*O);let k=0;for(const N of y){let K,R,I;n?(K=n[N*3],R=n[N*3+1],I=n[N*3+2]):(K=N*3,R=N*3+1,I=N*3+2);const z=ee=>{for(let pe=0;pe<O;pe++)X[k++]=w.array[ee*O+pe]};z(K),z(R),z(I)}_.setAttribute(P,new Gt(X,O))}_.computeBoundingBox(),_.computeVertexNormals(),x.push(_)}return x}function nM(i,e,t){const n=new Zf,r=new hn(i,n);r.position.copy(t),Kt.add(r);let s=[];Dt=new Qn().setFromObject(r),Qu.push(Dt),console.log("boundingboxarray",Qu),console.time("2D Footprint Generation (C++ WASM)");const c=i.attributes.position.array,l=new Wt.VectorDouble;for(let v=0;v<c.length;v+=3)l.push_back(c[v]),l.push_back(c[v+2]);const u=Wt.convexHullFlat(l);l.delete();for(let v=0;v<u.size();v+=2)s.push(new H(u.get(v),0,u.get(v+1)));u.delete(),console.timeEnd("2D Footprint Generation (C++ WASM)"),console.log("Generated Footprint points:",s.length,s),r.userData.footprint=s.map(v=>({x:v.x,y:v.z||v.y||0})),De=r,Un=null,pi=r.geometry;const f=new Ui({color:65280,wireframe:!0}),d=new br(Dt.max.x-Dt.min.x,Dt.max.y-Dt.min.y,Dt.max.z-Dt.min.z),p=new hn(d,f);Dt.getCenter(bn),p.position.copy(bn),Kt.add(p),p.visible=!1,fn=p,r.userData={...r.userData,file:{name:e}};const m={mesh:r,convexMesh:null,footprintMesh:null,boundingBoxMesh:p,finalMergedMesh:null,largestNeighbors:null};en.push(m),Gs(m)}function ef(i,e){console.log("Analyzing geometry for disjoint components...");const t=tM(i);console.log(`Found ${t.length} component(s).`);const n=new Qn;t.forEach(c=>{c.computeBoundingBox(),n.union(c.boundingBox)});const r=new H;n.getCenter(r);const s=n.min.y;t.forEach((c,l)=>{c.computeBoundingBox();const u=new H;c.boundingBox.getCenter(u);const f=c.boundingBox.min.y,d=-u.x,p=-f,m=-u.z;c.translate(d,p,m),c.computeBoundingBox();const v=new H(u.x-r.x,f-s,u.z-r.z),x=t.length>1?` (part ${l+1})`:"";nM(c,`${e}${x}`,v)})}function iM(i,e=2e3){const t=i.geometry;if(!t||!t.attributes.position)return i;const n=t.attributes.position.array,r=n.length/9;if(r<=e)return i;const s=Math.ceil(r/e),c=[],l=!!t.attributes.normal,u=l?[]:null,f=l?t.attributes.normal.array:null;for(let m=0;m<r;m+=s){const v=m*9;for(let x=0;x<9;x++)c.push(n[v+x]),l&&u.push(f[v+x])}const d=new Xt;d.setAttribute("position",new Gt(new Float32Array(c),3)),l&&d.setAttribute("normal",new Gt(new Float32Array(u),3)),d.computeBoundingSphere(),d.computeBoundingBox();const p=new hn(d,i.material);return p.position.copy(i.position),p.rotation.copy(i.rotation),p.scale.copy(i.scale),p.updateMatrixWorld(!0),p}function rh(i){if(i.convexMesh&&i.finalMergedMesh)return;console.time("Lazy Layflat Helpers Generation");const e=i.mesh.geometry.attributes.position.array,t=e.length/3,n=[],s=Math.max(1,Math.floor(t/2e3));for(let u=0;u<e.length;u+=3*s)n.push(new H(e[u],e[u+1],e[u+2]));const c=new Jf(n);i.convexMesh=new hn(c,new Ui({color:65280,wireframe:!0})),i.convexMesh.position.copy(i.mesh.position),i.convexMesh.rotation.copy(i.mesh.rotation),Kt.add(i.convexMesh),i.convexMesh.visible=document.getElementById("toggleConvex").checked;const l=ql(i.convexMesh.geometry);if(i.finalMergedMesh=Zl(i.convexMesh.geometry,l),i.finalMergedMesh&&(i.finalMergedMesh.position.copy(i.mesh.position),i.finalMergedMesh.rotation.copy(i.mesh.rotation),Kt.add(i.finalMergedMesh),i.finalMergedMesh.visible=!1),i.finalMergedMesh){const u=iM(i.mesh,2e3),f=SM(i.finalMergedMesh.geometry,l,u,.1);i.largestNeighbors=MM(i.finalMergedMesh.geometry,f),u!==i.mesh&&u.geometry.dispose()}console.timeEnd("Lazy Layflat Helpers Generation")}function rM(i){const e=i.target.files[0];if(e){if(e.name.split(".").pop().toLowerCase()==="3mf"){const n=new FileReader;n.onload=async function(r){const s=r.target.result;try{console.time("3MF Load & Visualization Time"),(await $x(s)).forEach(l=>{ef(l.geometry,e.name)}),console.timeEnd("3MF Load & Visualization Time")}catch(c){console.timeEnd("3MF Load & Visualization Time"),alert("Error parsing 3MF model with WASM library: "+c.message)}},n.readAsArrayBuffer(e)}else{const n=new Kf;console.time("STL Load & Visualization Time"),n.load(URL.createObjectURL(e),function(r){ef(r,e.name),console.timeEnd("STL Load & Visualization Time")})}fileInput.value=""}}document.getElementById("Autoplace").addEventListener("click",function(){xM(Ye,De,ah)});function sM(i){const e=i.attributes.position.array,t=[];for(let n=0;n<e.length;n+=3)t.push(new We(e[n],e[n+2]));return t}function oM(i){return th(i)}function Dl(i,e){const t=i.attributes.position.count/3,n=[],r=Ko(i,e);for(let s=0;s<t;s++)if(s!==e){const c=Ko(i,s);fM(r,c)&&n.push(s)}return n}let us=!1,jl=!1;const Zo=new H;let gl=!1;document.getElementById("rotationButton").addEventListener("click",function(){gl?(document.removeEventListener("mousedown",nf),document.removeEventListener("mousemove",rf),document.removeEventListener("mouseup",sf),gl=!1,xr.visible=!1):(document.addEventListener("mousedown",nf),document.addEventListener("mousemove",rf),document.addEventListener("mouseup",sf),gl=!0,xr.visible=!0)});let tf={x:0};function nf(i){i.preventDefault(),tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln);const e=Jn.intersectObject(fn);e.length>0&&(jl=!0,us=!1,Zo.copy(e[0].point).sub(De.position),De.verticesNeedUpdate=!0,De.normalsNeedUpdate=!0,De.updateMatrixWorld())}const aM=new H(0,1,0);function rf(i){if(i.preventDefault(),jl){tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln),Jn.intersectObject(fn);const t=(tn.x-tf.x)*10;fn.rotateOnWorldAxis(aM,t),Dt.setFromObject(fn),Dt.getCenter(bn),la(fn),xr.position.copy(bn),De.rotation.copy(fn.rotation);const n=en.find(r=>r.mesh===De);n&&(n.finalMergedMesh&&(n.finalMergedMesh.rotation.copy(De.rotation),n.finalMergedMesh.updateMatrixWorld()),n.convexMesh&&(n.convexMesh.rotation.copy(De.rotation),n.convexMesh.updateMatrixWorld()),n.footprintMesh&&(n.footprintMesh.rotation.y=De.rotation.y,n.footprintMesh.rotation.z=0,n.footprintMesh.updateMatrixWorld())),tf={x:tn.x,y:tn.y}}}function sf(){jl=!1,pi&&(pi.verticesNeedUpdate=!0,pi.normalsNeedUpdate=!0),Un&&(Un.geometry&&(Un.geometry.verticesNeedUpdate=!0),Un.normalsNeedUpdate=!0,Un.updateMatrixWorld()),Ye&&(Ye.geometry&&(Ye.geometry.verticesNeedUpdate=!0,Ye.geometry.normalsNeedUpdate=!0),Ye.updateMatrixWorld()),De&&(De.updateMatrixWorld(),Dt&&fn&&(Dt.setFromObject(De),Dt.getCenter(bn),fn.position.copy(bn),fn.rotation.copy(De.rotation))),hs.enabled=!0}document.addEventListener("mousedown",lM);document.addEventListener("mousemove",cM);document.addEventListener("mouseup",uM);function lM(i){if(pr){tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln);const n=en.map(s=>s.mesh).filter(Boolean),r=Jn.intersectObjects(n);if(r.length>0){const s=r[0].object,c=en.find(l=>l.mesh===s);c&&(De=c.mesh,c.mesh,Un=c.convexMesh||null,c.footprintMesh,fn=c.boundingBoxMesh||null,pi=c.mesh.geometry,Ye=c.finalMergedMesh||null,Dt=new Qn().setFromObject(De),en.forEach(l=>{l.finalMergedMesh&&(l.finalMergedMesh.visible=l.mesh===De),l.mesh&&(l.mesh.visible=!0)}))}return}tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln);const e=en.map(n=>n.mesh).filter(Boolean),t=Jn.intersectObjects(e);if(t.length>0){us=!0;const n=t[0].object,r=en.find(s=>s.mesh===n);r&&(De=r.mesh,r.mesh,Un=r.convexMesh||null,r.footprintMesh,fn=r.boundingBoxMesh||null,pi=r.mesh.geometry,Ye=r.finalMergedMesh||null,Dt=new Qn().setFromObject(De),Zo.copy(t[0].point).sub(De.position),la(De),pr&&en.forEach(s=>{s.finalMergedMesh&&(s.finalMergedMesh.visible=s.mesh===De)})),us&&(hs.enabled=!1)}}function cM(i){if(i.preventDefault(),us){tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln);const e=Jn.intersectObject(De);if(e.length>0){const t=e[0].point.x-Zo.x,n=e[0].point.z-Zo.z;console.log("Before update:",De.geometry);const r=50;De.position.x=Tl.clamp(t,-r,r),De.position.z=Tl.clamp(n,-r,r),pi.verticesNeedUpdate=!0,pi.normalsNeedUpdate=!0,pi.positionNeedUpdate=!0;const s=en.find(c=>c.mesh===De);s&&(s.convexMesh&&(s.convexMesh.position.copy(De.position),s.convexMesh.updateMatrixWorld()),s.finalMergedMesh&&(s.finalMergedMesh.position.copy(De.position),s.finalMergedMesh.updateMatrixWorld(),s.finalMergedMesh.geometry.attributes.position.needsUpdate=!0,s.finalMergedMesh.geometry.computeVertexNormals()),s.footprintMesh&&(s.footprintMesh.position.x=De.position.x,s.footprintMesh.position.z=De.position.z,s.footprintMesh.updateMatrixWorld()),s.boundingBoxMesh&&(Dt.setFromObject(De),Dt.getCenter(bn),s.boundingBoxMesh.position.copy(bn),s.boundingBoxMesh.updateMatrixWorld())),De.updateMatrixWorld(),De.geometry.verticesNeedUpdate=!0,De.geometry.normalsNeedUpdate=!0,De.geometry.positionNeedUpdate=!0,Ye&&Ye.geometry&&Ye.geometry.attributes.position&&(Ye.geometry.attributes.position.needsUpdate=!0,Ye.geometry.computeVertexNormals()),console.log("After update:",De.geometry.attributes.position),la(De)}}}function uM(){us=!1,De&&Dt&&fn&&(Dt.setFromObject(De),Dt.getCenter(bn),fn.position.copy(bn)),De&&(De.updateMatrixWorld(),De.geometry&&(De.geometry.verticesNeedUpdate=!0,De.geometry.normalsNeedUpdate=!0,De.geometry.positionNeedUpdate=!0)),Ye&&(Ye.updateMatrixWorld(),Ye.geometry&&(Ye.geometry.verticesNeedUpdate=!0,Ye.geometry.normalsNeedUpdate=!0)),hs.enabled=!0}function fM(i,e){const n=new si().setFromCoplanarPoints(i[0],i[1],i[2]);return e.every(r=>Math.abs(n.distanceToPoint(r))<.001)}function Ko(i,e){const t=i.attributes.position.array,n=e*9;return[new H(t[n],t[n+1],t[n+2]),new H(t[n+3],t[n+4],t[n+5]),new H(t[n+6],t[n+7],t[n+8])]}function hM(i){const e=new Xt,t=i.map(c=>c.getAttribute("position").array),n=new Float32Array(t.reduce((c,l)=>c.concat(Array.from(l)),[]));e.setAttribute("position",new Gt(n,3));const r=i.map(c=>c.getAttribute("normal").array),s=new Float32Array(r.reduce((c,l)=>c.concat(Array.from(l)),[]));return e.setAttribute("normal",new Gt(s,3)),e}function dM(i,e){const t=new Xt,n=[],r=[],s=[];let c=0;i.forEach((f,d)=>{const p=f.getAttribute("position").array,m=f.getAttribute("normal").array;e[d];const v=p.length/3;s.push({start:c,count:v,materialIndex:d}),c+=v,n.push(p),r.push(m)});const l=new Float32Array(n.reduce((f,d)=>f.concat(Array.from(d)),[]));t.setAttribute("position",new Gt(l,3));const u=new Float32Array(r.reduce((f,d)=>f.concat(Array.from(d)),[]));return t.setAttribute("normal",new Gt(u,3)),t.groups=s,t}function pM(i){const e=i.map(c=>c.geometry),t=i.map(c=>new Ui),n=dM(e,t),r=t.map(c=>new Ui({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return new hn(n,r)}function of(i,e){const t=i.attributes.position.array;for(let n=0;n<t.length;n+=9){const r=(t[n]+t[n+3]+t[n+6])/3,s=(t[n+1]+t[n+4]+t[n+7])/3,c=(t[n+2]+t[n+5]+t[n+8])/3;for(let l=0;l<9;l+=3)t[n+l]+=Math.min((r-t[n+l])*e,.5),t[n+l+1]+=Math.min((s-t[n+l+1])*e,.5),t[n+l+2]+=Math.min((c-t[n+l+2])*e,.5)}i.attributes.position.needsUpdate=!0}function mM(i,e,t,n){const r=i.attributes.position.array,s=i.attributes.normal.array,c=[],l=[],u=e*9,f=u+9,d=new Xt;d.setAttribute("position",new Gt(r.slice(u,f),3)),d.setAttribute("normal",new Gt(s.slice(u,f),3)),c.push(d);const p=new ol({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});l.push(p),of(d,.05),t.forEach(x=>{const E=x*9,y=E+9,_=new Xt;if(_.setAttribute("position",new Gt(r.slice(E,y),3)),_.setAttribute("normal",new Gt(s.slice(E,y),3)),!af(_.attributes.position.array)&&!af(_.attributes.normal.array)){of(_,.05),c.push(_);const P=new ol({color:16777215,transparent:!0,opacity:.05,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});l.push(P)}});const m=hM(c);new ol({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const v=new hn(m,l);gM(v,e,t),n.push(v)}function gM(i,e,t){const n=new Float32Array(i.geometry.attributes.position.count);for(let r=e*3*3;r<(e+1)*3*3;r+=3)n[r]=0,n[r+1]=0,n[r+2]=0;t.forEach((r,s)=>{for(let c=r*3*3;c<(r+1)*3*3;c+=3)n[c]=s+1,n[c+1]=s+1,n[c+2]=s+1}),i.geometry.setAttribute("materialIndex",new Gt(n,1))}let pr=!1;document.getElementById("Autoarrange").addEventListener("click",function(){console.log("Starting Autoarrange with NfpPlacer..."),console.log("Total loaded models in array:",en.length);const i=en.map((n,r)=>(n.mesh&&Gs(n),{model:n,originalIndex:r})).filter(n=>n.model.mesh&&n.model.mesh.userData&&n.model.mesh.userData.footprint).map(n=>({id:n.originalIndex,footprint:n.model.mesh.userData.footprint}));if(console.log("Number of valid 2D footprint shapes found:",i.length),i.forEach((n,r)=>{console.log(`Footprint ${r} (Original Model Index ${n.id}):`,n.footprint.length,"points:",n.footprint)}),i.length===0){console.warn("No models with footprints found to arrange.");return}const e=new Gx(100,3);console.log("Running placer.arrange with items:",JSON.stringify(i.map(n=>({id:n.id,len:n.footprint.length,bounds:eh(n.footprint)}))));const t=e.arrange(i);console.log("Placement results:",JSON.stringify(t,null,2)),t.forEach(n=>{const r=en[n.id];r&&(console.log(`Applying result to model ${n.id}: x=${n.x}, z=${n.y}, rotation=${n.rotation}`),r.mesh.rotation.y=n.rotation,r.mesh.position.x=n.x,r.mesh.position.z=n.y,r.mesh.updateMatrixWorld(!0),r.finalMergedMesh&&(r.finalMergedMesh.position.copy(r.mesh.position),r.finalMergedMesh.rotation.copy(r.mesh.rotation),r.finalMergedMesh.updateMatrixWorld(!0)),Gs(r))}),console.log("=== Scene children after Autoarrange ==="),Kt.children.forEach(n=>{n.isMesh&&console.log(`Mesh type/name: "${n.name||n.constructor.name}", uuid: "${n.uuid}", pos:`,n.position,"rot:",n.rotation)}),console.log("Autoarrange complete.")});document.getElementById("toggleConvex").addEventListener("change",function(i){en.forEach(e=>{i.target.checked&&rh(e),e.convexMesh&&(e.convexMesh.visible=i.target.checked)})});document.getElementById("toggleFootprint").addEventListener("change",function(i){en.forEach(e=>{e.footprintMesh&&(e.footprintMesh.visible=i.target.checked)})});document.getElementById("layflat").addEventListener("click",function(){const i=document.getElementById("layflat");if(pr)document.removeEventListener("mousedown",lf,!1),pr=!1,i.style.backgroundColor="#2e8b57",i.textContent="Lay Flat",De&&la(De),en.forEach(e=>{e.finalMergedMesh&&(e.finalMergedMesh.visible=!1),e.mesh&&(e.mesh.visible=!0),e.convexMesh&&(e.convexMesh.visible=document.getElementById("toggleConvex").checked)});else{if(De){const e=en.find(t=>t.mesh===De);e&&(rh(e),Un=e.convexMesh,Ye=e.finalMergedMesh,ah=e.largestNeighbors)}document.addEventListener("mousedown",lf,!1),pr=!0,i.style.backgroundColor="#dc3545",i.textContent="Exit Lay Flat",es&&Kt.remove(es),ts&&Kt.remove(ts),ns&&Kt.remove(ns),console.log("=== Lay Flat Active ==="),en.forEach(e=>{if(e.mesh&&console.log("Model Mesh Position:",e.mesh.position,"Rotation:",e.mesh.rotation),e.finalMergedMesh&&console.log("finalMergedMesh Position:",e.finalMergedMesh.position,"Rotation:",e.finalMergedMesh.rotation),e.mesh&&e.finalMergedMesh){const t=e.mesh.position.equals(e.finalMergedMesh.position),n=e.mesh.rotation.equals(e.finalMergedMesh.rotation);console.log("Do they have the same position?",t,"rotation?",n)}e.mesh===De?e.finalMergedMesh&&(e.finalMergedMesh.visible=!0):e.finalMergedMesh&&(e.finalMergedMesh.visible=!1),e.mesh&&(e.mesh.visible=!0)})}});document.addEventListener("mousemove",_M);function af(i){for(let e=0;e<i.length;e++)if(isNaN(i[e]))return!0;return!1}function Hs(i,e){const t=i.attributes.normal.array,n=e*9;return new H(t[n],t[n+1],t[n+2])}let Li=null;function _M(i){if(i.preventDefault(),pr&&Ye){const e=new Yl,t=new We;t.x=i.clientX/window.innerWidth*2-1,t.y=-(i.clientY/window.innerHeight)*2+1,e.setFromCamera(t,Ln);const n=e.intersectObject(Ye);if(n.length>0){const r=n[0].faceIndex*3;console.log("highlightfaceinject",r),vM(Ye,r)}else yM(Ye)}}function vM(i,e){Li||(Li=i.material.map(r=>r.clone())),i.material.forEach((r,s)=>{Li&&Li[s]&&r.color.copy(Li[s].color)});const n=i.geometry.groups.find(r=>e>=r.start&&e<r.start+r.count);n&&i.material[n.materialIndex].color.set(16711680)}function yM(i){Li&&(i.material.forEach((e,t)=>{Li[t]&&e.color.copy(Li[t].color)}),Li=null)}function lf(i){if(!pr)return;i.preventDefault(),tn.x=i.clientX/window.innerWidth*2-1,tn.y=-(i.clientY/window.innerHeight)*2+1,Jn.setFromCamera(tn,Ln);const e=[];en.forEach(n=>{n.finalMergedMesh&&n.finalMergedMesh.visible?e.push(n.finalMergedMesh):n.mesh&&e.push(n.mesh)});const t=Jn.intersectObjects(e);if(t.length>0){const n=t[0].object,r=en.find(P=>P.finalMergedMesh===n||P.mesh===n);if(!r)return;De=r.mesh,Ye=r.finalMergedMesh,Un=r.convexMesh,r.footprintMesh,fn=r.boundingBoxMesh,pi=r.mesh.geometry;const s=De.position.x,c=De.position.z;en.forEach(P=>{P.finalMergedMesh&&(P.finalMergedMesh.visible=P===r),P.mesh&&(P.mesh.visible=!0)}),ko=t[0].faceIndex,console.log("Selected Face Index:",ko),console.log("=== BEFORE LAYFLAT RESET ==="),console.log("meshes position:",De.position,"rotation:",De.rotation),De.geometry.boundingBox&&console.log("meshes geometry boundingBox:",De.geometry.boundingBox),Ye&&(console.log("finalMergedMesh position:",Ye.position,"rotation:",Ye.rotation),Ye.geometry.boundingBox&&console.log("finalMergedMesh geometry boundingBox:",Ye.geometry.boundingBox)),De.rotation.set(0,0,0),Ye&&Ye.rotation.set(0,0,0),De.position.set(0,0,0),Ye&&Ye.position.set(0,0,0),De.updateMatrixWorld(!0),Ye&&Ye.updateMatrixWorld(!0);const u=t[0].object===Ye,f=u&&Ye&&Ye.userData&&Ye.userData.originalFaceIndices?Ye.userData.originalFaceIndices[ko]:ko,d=u&&Un?Un.geometry:De.geometry,p=u&&Un?Un:De;let m=Hs(d,f);console.log("Selected Face Normals (from clickedGeometry):",m),(!m||m.lengthSq()<1e-6)&&(console.warn("Invalid face normal detected, skipping rotation"),m=new H(0,1,0));let v=lh(m,ih);Ye&&Ye.geometry.applyMatrix4(v),De.geometry.applyMatrix4(v),De.updateMatrixWorld(!0),Ye&&Ye.updateMatrixWorld(!0);const x=oh(d,f,p);let E=sh(f,yr,p,x);Ye&&Ye.geometry.applyMatrix4(E),De.geometry.applyMatrix4(E),De.geometry.verticesNeedUpdate=!0,De.geometry.normalsNeedUpdate=!0,De.geometry.attributes.position&&(De.geometry.attributes.position.needsUpdate=!0),Ye&&(Ye.geometry.verticesNeedUpdate=!0,Ye.geometry.normalsNeedUpdate=!0,Ye.geometry.attributes.position&&(Ye.geometry.attributes.position.needsUpdate=!0)),De.updateMatrixWorld(!0),Ye&&Ye.updateMatrixWorld(!0),Dt.setFromObject(De),Dt.getCenter(bn);const y=Jo(De);console.log("resetMeshOrigin offsets:",y),Ye&&Jo(Ye,null,y),De.position.x=s,De.position.z=c,De.updateMatrixWorld(!0),Ye&&(Ye.position.copy(De.position),Ye.rotation.copy(De.rotation),Ye.updateMatrixWorld(!0)),console.log("=== AFTER LAYFLAT RESTORE ==="),console.log("meshes position:",De.position,"rotation:",De.rotation,"uuid:",De.uuid),De.geometry.computeBoundingBox(),console.log("meshes geometry boundingBox center:",De.geometry.boundingBox.getCenter(new H)),Ye&&(console.log("finalMergedMesh position:",Ye.position,"rotation:",Ye.rotation,"uuid:",Ye.uuid),Ye.geometry.computeBoundingBox(),console.log("finalMergedMesh geometry boundingBox center:",Ye.geometry.boundingBox.getCenter(new H))),Dt.setFromObject(De),Dt.getCenter(bn),fn.position.copy(bn),fn.rotation.copy(De.rotation),Gs(r);const _=ql(r.convexMesh.geometry);r.finalMergedMesh&&(Kt.remove(r.finalMergedMesh),r.finalMergedMesh.geometry&&r.finalMergedMesh.geometry.dispose()),r.finalMergedMesh=Zl(r.convexMesh.geometry,_),Ye=r.finalMergedMesh,r.finalMergedMesh&&(r.finalMergedMesh.position.copy(r.mesh.position),r.finalMergedMesh.rotation.copy(r.mesh.rotation),r.finalMergedMesh.updateMatrixWorld(!0)),r.finalMergedMesh&&(r.finalMergedMesh.visible=!0),r.mesh&&(r.mesh.visible=!0),us=!1,hs.enabled=!0}}function xM(i,e,t){const n=e.position.x,r=e.position.z;e.rotation.set(0,0,0),i&&i.rotation.set(0,0,0),e.position.set(0,0,0),i&&i.position.set(0,0,0),e.updateMatrixWorld(!0),i&&i.updateMatrixWorld(!0);const s=en.find(E=>E.mesh===e);if(!s)return;const c=i.userData&&i.userData.originalFaceIndices?i.userData.originalFaceIndices[t]:t,l=s.convexMesh?s.convexMesh.geometry:i.geometry,u=s.convexMesh||i;let f=Hs(l,c);console.log("Selected Face Normals:",f),(!f||f.lengthSq()<1e-6)&&(console.warn("Invalid face normal detected, skipping rotation"),f=new H(0,1,0));let d=lh(f,ih);i&&i.geometry.applyMatrix4(d),e.geometry.applyMatrix4(d),e.updateMatrixWorld(!0),i&&i.updateMatrixWorld(!0);const p=oh(l,c,u);let m=sh(c,yr,u,p);i&&i.geometry.applyMatrix4(m),e.geometry.applyMatrix4(m),e.geometry.verticesNeedUpdate=!0,e.geometry.normalsNeedUpdate=!0,e.geometry.attributes.position&&(e.geometry.attributes.position.needsUpdate=!0),i&&(i.geometry.verticesNeedUpdate=!0,i.geometry.normalsNeedUpdate=!0,i.geometry.attributes.position&&(i.geometry.attributes.position.needsUpdate=!0)),e.updateMatrixWorld(!0),i&&i.updateMatrixWorld(!0),Dt.setFromObject(e),Dt.getCenter(bn);const v=Jo(e);i&&Jo(i,null,v),e.position.x=n,e.position.z=r,e.updateMatrixWorld(!0),i&&(i.position.copy(e.position),i.rotation.copy(e.rotation),i.updateMatrixWorld(!0)),Dt.setFromObject(e),Dt.getCenter(bn),fn.position.copy(bn),fn.rotation.copy(e.rotation),Gs(s);const x=ql(s.convexMesh.geometry);s.finalMergedMesh&&(Kt.remove(s.finalMergedMesh),s.finalMergedMesh.geometry&&s.finalMergedMesh.geometry.dispose()),s.finalMergedMesh=Zl(s.convexMesh.geometry,x),s.finalMergedMesh&&(s.finalMergedMesh.position.copy(s.mesh.position),s.finalMergedMesh.rotation.copy(s.mesh.rotation),s.finalMergedMesh.updateMatrixWorld(!0))}function Gs(i){if(!i||!i.mesh)return;const e=i.mesh.geometry.attributes.position.array,t=[];for(let c=0;c<e.length;c+=3)t.push(new H(e[c],e[c+1],e[c+2]));if(i.convexMesh){const c=t.length,u=Math.max(1,Math.floor(c/2e3)),f=[];for(let p=0;p<c;p+=u)f.push(t[p]);const d=new Jf(f);i.convexMesh.geometry&&i.convexMesh.geometry.dispose(),i.convexMesh.geometry=d,i.convexMesh.position.copy(i.mesh.position),i.convexMesh.rotation.copy(i.mesh.rotation),i.convexMesh.updateMatrixWorld(!0)}const n=sM(i.mesh.geometry),r=oM(n),s=qx(r);if(s){const c=new $l(s);if(i.footprintMesh)i.footprintMesh.geometry&&i.footprintMesh.geometry.dispose(),i.footprintMesh.geometry=c;else{const l=new Ui({color:65535,side:oi,transparent:!0,opacity:.5});i.footprintMesh=new hn(c,l),i.footprintMesh.rotation.order="YXZ",i.footprintMesh.rotation.x=Math.PI/2,Kt.add(i.footprintMesh)}i.footprintMesh.position.x=i.mesh.position.x,i.footprintMesh.position.z=i.mesh.position.z,i.footprintMesh.position.y=.05,i.footprintMesh.rotation.y=i.mesh.rotation.y,i.footprintMesh.rotation.z=0,i.footprintMesh.updateMatrixWorld(!0),i.footprintMesh.visible=document.getElementById("toggleFootprint").checked,i.mesh.userData.footprint=r.map(l=>({x:l.x,y:l.y}))}if(i.boundingBoxMesh){const c=new Qn().setFromObject(i.mesh),l=new H;c.getCenter(l),i.boundingBoxMesh.position.copy(l);const u=new br(c.max.x-c.min.x,c.max.y-c.min.y,c.max.z-c.min.z);i.boundingBoxMesh.geometry&&i.boundingBoxMesh.geometry.dispose(),i.boundingBoxMesh.geometry=u,i.boundingBoxMesh.updateMatrixWorld()}}let es,ts,ns;function la(i){const e=new H().fromArray(i.matrix.elements.slice(0,3)),t=new H().fromArray(i.matrix.elements.slice(4,7)),n=new H().fromArray(i.matrix.elements.slice(8,11));es&&Kt.remove(es),ts&&Kt.remove(ts),ns&&Kt.remove(ns),es=new ll(e,i.position,30,16711680),ts=new ll(t,i.position,30,65280),ns=new ll(n,i.position,30,255),Kt.add(es),Kt.add(ts),Kt.add(ns)}function sh(i,e,t,n){t.updateMatrixWorld();const r=new H(0,-1,0),s=e.position;console.log("facetransformation",s);const l=new H().subVectors(n,s).dot(r)*2;console.log("distanceto the plane",l);const u=Ko(t.geometry,i);console.log("faceposition",u);const f=new Qn().setFromObject(t),d=new H;f.getCenter(d),console.log("bouanklsdlfnansd",Dt),console.log("meshesd",t);const p=new H;u.forEach(v=>p.add(v)),p.divideScalar(u.length);const m=new Jt().makeTranslation(-d.x,p.y+l,-d.z);return t.positionNeedUpdate=!0,console.log("transla",m),console.log("facecenter",p),m}function Jo(i,e=null,t=null){i.position.set(0,0,0),i.updateMatrixWorld(!0);let n,r,s;if(t)n=t.dx,r=t.dy,s=t.dz;else{const c=e||i,l=new Qn().setFromObject(c),u=new H;l.getCenter(u);const f=l.min.y;n=-u.x,r=-f,s=-u.z}return i.geometry.translate(n,r,s),i.geometry.verticesNeedUpdate=!0,i.geometry.normalsNeedUpdate=!0,i.updateMatrixWorld(!0),{dx:n,dy:r,dz:s}}function oh(i,e,t){const n=i.attributes.position.array,r=e*3*3,s=new H;for(let l=0;l<3;l++){const u=r+l*3,f=n[u],d=n[u+1],p=n[u+2];s.add(new H(f,d,p))}return s.divideScalar(3),console.log("local",s),s.clone().applyMatrix4(t.matrixWorld)}let Ye=null,ah=null;function Zl(i,e){let t=[];const n=[],r=[];for(const c of e){Hs(i,c);const l=Dl(i,c);r.push(c),l.forEach(u=>{r.push(u)}),mM(i,c,l,t)}const s=pM(t);return s.faceMaterials=n,s.userData={originalFaceIndices:r},Kt.add(s),s.visible=!1,s}function MM(i,e){let t=-1,n=0;for(const r of e){const s=r.selectedFaceIndex,c=r.neighborIndices,l=bM(i,c,s),u=EM(l);console.log("faceindex",s,u),u>n&&(n=u,t=s)}return console.log("largestnode",t),t}function EM(i){return i.width+i.height+i.depth}function SM(i,e,t,n){const r=new Yl,s=[];for(const c of e){let l=Hs(i,c);l.negate();let u=null;const f=uf(i,c);r.set(f,l);const d=r.intersectObject(t,!0);if(d.length>0){if(cf(d[0].point,f)<=n){const m=Dl(i,c);s.push({selectedFaceIndex:c,neighborIndices:m});continue}}else{u=Dl(i,c);const p=[];for(const m of u){const v=uf(i,m),x=Hs(i,m);l.negate(),r.set(v,x);const E=r.intersectObject(t,!0);E.length>0&&cf(E[0].point,v)<=n&&p.push(m)}p.length>0&&s.push({selectedFaceIndex:c,neighborIndices:p})}}return s}function cf(i,e){const t=e.x-i.x,n=e.y-i.y,r=e.z-i.z;return Math.sqrt(t*t+n*n+r*r)}function uf(i,e){const t=Ko(i,e);return{x:(t[0].x+t[1].x+t[2].x)/3,y:(t[0].y+t[1].y+t[2].y)/3,z:(t[0].z+t[1].z+t[2].z)/3}}function lh(i,e){const t=new H().crossVectors(i,e).normalize();console.log(" axis",t);const n=Math.acos(i.dot(e)/(i.length()*e.length())),r=new Jt;return r.makeRotationAxis(t,n),r}function _l(i,e){const t=i.attributes.position.array,n=e*9;return[new H(t[n],t[n+1],t[n+2]),new H(t[n+3],t[n+4],t[n+5]),new H(t[n+6],t[n+7],t[n+8])]}function bM(i,e,t){let n=1/0,r=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0;return _l(i,t).forEach(p=>{n=Math.min(n,p.x),r=Math.min(r,p.y),s=Math.min(s,p.z),c=Math.max(c,p.x),l=Math.max(l,p.y),u=Math.max(u,p.z)}),e.length===0?_l(i,t).forEach(m=>{n=Math.min(n,m.x),r=Math.min(r,m.y),s=Math.min(s,m.z),c=Math.max(c,m.x),l=Math.max(l,m.y),u=Math.max(u,m.z)}):e.forEach(p=>{_l(i,p).forEach(v=>{n=Math.min(n,v.x),r=Math.min(r,v.y),s=Math.min(s,v.z),c=Math.max(c,v.x),l=Math.max(l,v.y),u=Math.max(u,v.z)})}),{width:c-n,height:l-r,depth:u-s}}function ch(){requestAnimationFrame(ch),hs.update(),Vs.render(Kt,Ln)}ch();
//# sourceMappingURL=bundle.js.map
