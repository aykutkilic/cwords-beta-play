/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var vd=2;var Fp=0,zp=1,un=2;var sn=100,Hp=101,Vp=102;var Gp=200,Wp=201,Xp=202,jp=203,al=204,ol=205,qp=206,Yp=207,$p=208,Zp=209,Jp=210,Kp=211,Qp=212,ef=213,tf=214,nf=0,sf=1,rf=2,af=3,of=4,lf=5,hf=6,cf=7;var yd=0;var nu="attached",uf="detached",xd=300,Hn=301,Vn=302,ll=303,hl=304,xa=306,Is=1e3,ks=1001,cl=1002,Kt=1003,df=1004;var ar=1005;var Mi=1006,bo=1007;var On=1008;var Oi=1009,_d=1010,bd=1011,Ps=1012,Bh=1013,on=1014,li=1015,Xs=1016,Fh=1017,zh=1018,Gn=1020,Md=35902,wd=1021,Sd=1022,Jt=1023,Td=1024,Ed=1025,Ls=1026,Wn=1027,Ad=1028,Hh=1029,Rd=1030,Vh=1031;var Gh=1033,Br=33776,Fr=33777,zr=33778,Hr=33779,ul=35840,dl=35841,pl=35842,fl=35843,ml=36196,gl=37492,vl=37496,yl=37808,xl=37809,_l=37810,bl=37811,Ml=37812,wl=37813,Sl=37814,Tl=37815,El=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,kl=37821,Vr=36492,Pl=36494,Ll=36495,Cd=36283,Dl=36284,Nl=36285,Ul=36286;var Wr=2300,Ol=2301,Mo=2302,su=2400,ru=2401,au=2402;var Un="",at="srgb",Qn="srgb-linear",_a="linear",$e="srgb";var xn=7680;var pf=512,ff=513,mf=514,gf=515,vf=516,yf=517,xf=518,_f=519,Bl=35044,es=35048;var ou="300 es",Xn=2e3,Xr=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gr=Math.PI/180,Fl=180/Math.PI;function hi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(bt[255&r]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[255&e]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[63&t|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[255&i]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function bf(r,e){return(r%e+e)%e}function wo(r,e,t){return(1-t)*r+t*e}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class r{constructor(e,t,i,n,s,a,o,l,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,h)}set(e,t,i,n,s,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],f=i[8],x=n[0],m=n[3],g=n[6],y=n[1],v=n[4],_=n[7],A=n[2],w=n[5],C=n[8];return s[0]=a*x+o*y+l*A,s[3]=a*m+o*v+l*w,s[6]=a*g+o*_+l*C,s[1]=h*x+c*y+u*A,s[4]=h*m+c*v+u*w,s[7]=h*g+c*_+u*C,s[2]=d*x+p*y+f*A,s[5]=d*m+p*v+f*w,s[8]=d*g+p*_+f*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+n*s*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*s,p=h*s-a*l,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(n*h-c*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(c*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=p*x,e[7]=(i*l-h*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},So=new Pe;function Id(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mf(){let r=jr("canvas");return r.style.display="block",r}var lu={};function Es(r){r in lu||(lu[r]=!0,console.warn(r))}var Xe={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===$e&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===$e&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Un?_a:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function wi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Fn(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var hu=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],uu=[.3127,.329],du=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),_n;Xe.define({[Qn]:{primaries:hu,whitePoint:uu,transfer:_a,toXYZ:du,fromXYZ:pu,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:hu,whitePoint:uu,transfer:$e,toXYZ:du,fromXYZ:pu,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:at}}});var zl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_n===void 0&&(_n=jr("canvas")),_n.width=e.width,_n.height=e.height;let i=_n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*wi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*wi(t[i]/255)):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wf=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(To(n[a].image)):s.push(To(n[a]))}else s=To(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function To(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sf=0,Ct=class r extends Bi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,h=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=hi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case ks:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case ks:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null,Ct.DEFAULT_MAPPING=xd,Ct.DEFAULT_ANISOTROPY=1;var Ye=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(h+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,_=(p+1)/2,A=(g+1)/2,w=(c+d)/4,C=(u+x)/4,P=(f+m)/4;return v>_&&v>A?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):_>A?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=w/n,s=P/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=C/s,n=P/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(u-x)/y,this.z=(d-c)/y,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ct(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yr=class extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],f=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=x);if(u!==x||l!==d||h!==p||c!==f){let m=1-o,g=l*d+h*p+c*f+u*x,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let A=Math.sqrt(v),w=Math.atan2(A,g*y);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let _=o*y;if(l=l*m+d*_,h=h*m+p*_,c=c*m+f*_,u=u*m+x*_,m===1-o){let A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+c*u+l*p-h*d,e[t+1]=l*f+c*d+h*u-o*p,e[t+2]=h*f+c*p+o*d-l*u,e[t+3]=c*f-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"YXZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"ZXY":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"ZYX":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"YZX":this._x=d*c*u+h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u-d*p*f;break;case"XZY":this._x=d*c*u-h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-s*l,this._y=n*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-s*u,this.z=n+l*u+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new b,fu=new It,ei=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),lr.subVectors(this.max,gs),bn.subVectors(e.a,gs),Mn.subVectors(e.b,gs),wn.subVectors(e.c,gs),Ii.subVectors(Mn,bn),ki.subVectors(wn,Mn),Zi.subVectors(bn,wn);let t=[0,-Ii.z,Ii.y,0,-ki.z,ki.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,ki.z,0,-ki.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-ki.y,ki.x,0,-Zi.y,Zi.x,0];return!!Ao(t,bn,Mn,wn,lr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ao(t,bn,Mn,wn,lr)&&(hr.crossVectors(Ii,ki),t=[hr.x,hr.y,hr.z],Ao(t,bn,Mn,wn,lr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Yt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mi=[new b,new b,new b,new b,new b,new b,new b,new b],Yt=new b,or=new ei,bn=new b,Mn=new b,wn=new b,Ii=new b,ki=new b,Zi=new b,gs=new b,lr=new b,hr=new b,Ji=new b;function Ao(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ji.fromArray(r,s);let o=n.x*Math.abs(Ji.x)+n.y*Math.abs(Ji.y)+n.z*Math.abs(Ji.z),l=e.dot(Ji),h=t.dot(Ji),c=i.dot(Ji);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Tf=new ei,vs=new b,Ro=new b,ti=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tf.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(vs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ro)),this.expandByPoint(vs.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new b,Co=new b,cr=new b,Pi=new b,Io=new b,ur=new b,ko=new b,ln=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Co.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Co);let s=.5*e.distanceTo(t),a=-this.direction.dot(cr),o=Pi.dot(this.direction),l=-Pi.dot(cr),h=Pi.lengthSq(),c=Math.abs(1-a*a),u,d,p,f;if(c>0)if(u=a*l-o,d=a*o-l,f=s*c,u>=0)if(d>=-f)if(d<=f){let x=1/c;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+h):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Co).addScaledVector(cr,d),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),n=gi.dot(gi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,n,s){Io.subVectors(t,e),ur.subVectors(i,e),ko.crossVectors(Io,ur);let a,o=this.direction.dot(ko);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Pi.subVectors(this.origin,e);let l=a*this.direction.dot(ur.crossVectors(Pi,ur));if(l<0)return null;let h=a*this.direction.dot(Io.cross(Pi));if(h<0||l+h>o)return null;let c=-a*Pi.dot(ko);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class r{constructor(e,t,i,n,s,a,o,l,h,c,u,d,p,f,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,h,c,u,d,p,f,x,m)}set(e,t,i,n,s,a,o,l,h,c,u,d,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=c,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Sn.setFromMatrixColumn(e,0).length(),s=1/Sn.setFromMatrixColumn(e,1).length(),a=1/Sn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*c,p=a*u,f=o*c,x=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+f*h,t[5]=d-x*h,t[9]=-o*l,t[2]=x-d*h,t[6]=f+p*h,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,f=h*c,x=h*u;t[0]=d+x*o,t[4]=f*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-f,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,f=h*c,x=h*u;t[0]=d-x*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*c,t[9]=x-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,p=a*u,f=o*c,x=o*u;t[0]=l*c,t[4]=f*h-p,t[8]=d*h+x,t[1]=l*u,t[5]=x*h+d,t[9]=p*h-f,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*h,f=o*l,x=o*h;t[0]=l*c,t[4]=x-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*h,f=o*l,x=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+x,t[5]=a*c,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*c,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Af)}lookAt(e,t,i){let n=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Li.crossVectors(i,Nt),Li.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Li.crossVectors(i,Nt)),Li.normalize(),dr.crossVectors(Nt,Li),n[0]=Li.x,n[4]=dr.x,n[8]=Nt.x,n[1]=Li.y,n[5]=dr.y,n[9]=Nt.y,n[2]=Li.z,n[6]=dr.z,n[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],y=i[3],v=i[7],_=i[11],A=i[15],w=n[0],C=n[4],P=n[8],N=n[12],F=n[1],z=n[5],H=n[9],X=n[13],V=n[2],q=n[6],Y=n[10],ie=n[14],ee=n[3],fe=n[7],ve=n[11],te=n[15];return s[0]=a*w+o*F+l*V+h*ee,s[4]=a*C+o*z+l*q+h*fe,s[8]=a*P+o*H+l*Y+h*ve,s[12]=a*N+o*X+l*ie+h*te,s[1]=c*w+u*F+d*V+p*ee,s[5]=c*C+u*z+d*q+p*fe,s[9]=c*P+u*H+d*Y+p*ve,s[13]=c*N+u*X+d*ie+p*te,s[2]=f*w+x*F+m*V+g*ee,s[6]=f*C+x*z+m*q+g*fe,s[10]=f*P+x*H+m*Y+g*ve,s[14]=f*N+x*X+m*ie+g*te,s[3]=y*w+v*F+_*V+A*ee,s[7]=y*C+v*z+_*q+A*fe,s[11]=y*P+v*H+_*Y+A*ve,s[15]=y*N+v*X+_*ie+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*h*u-s*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+s*a*d-n*a*p+n*h*c-s*l*c)+e[11]*(+t*h*u-t*o*p-s*a*u+i*a*p+s*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],y=u*m*h-x*d*h+x*l*p-o*m*p-u*l*g+o*d*g,v=f*d*h-c*m*h-f*l*p+a*m*p+c*l*g-a*d*g,_=c*x*h-f*u*h+f*o*p-a*x*p-c*o*g+a*u*g,A=f*u*l-c*x*l-f*o*d+a*x*d+c*o*m-a*u*m,w=t*y+i*v+n*_+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=y*C,e[1]=(x*d*s-u*m*s-x*n*p+i*m*p+u*n*g-i*d*g)*C,e[2]=(o*m*s-x*l*s+x*n*h-i*m*h-o*n*g+i*l*g)*C,e[3]=(u*l*s-o*d*s-u*n*h+i*d*h+o*n*p-i*l*p)*C,e[4]=v*C,e[5]=(c*m*s-f*d*s+f*n*p-t*m*p-c*n*g+t*d*g)*C,e[6]=(f*l*s-a*m*s-f*n*h+t*m*h+a*n*g-t*l*g)*C,e[7]=(a*d*s-c*l*s+c*n*h-t*d*h-a*n*p+t*l*p)*C,e[8]=_*C,e[9]=(f*u*s-c*x*s-f*i*p+t*x*p+c*i*g-t*u*g)*C,e[10]=(a*x*s-f*o*s+f*i*h-t*x*h-a*i*g+t*o*g)*C,e[11]=(c*o*s-a*u*s-c*i*h+t*u*h+a*i*p-t*o*p)*C,e[12]=A*C,e[13]=(c*x*n-f*u*n+f*i*d-t*x*d-c*i*m+t*u*m)*C,e[14]=(f*o*n-a*x*n-f*i*l+t*x*l+a*i*m-t*o*m)*C,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*C,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,u=o+o,d=s*h,p=s*c,f=s*u,x=a*c,m=a*u,g=o*u,y=l*h,v=l*c,_=l*u,A=i.x,w=i.y,C=i.z;return n[0]=(1-(x+g))*A,n[1]=(p+_)*A,n[2]=(f-v)*A,n[3]=0,n[4]=(p-_)*w,n[5]=(1-(d+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(f+v)*C,n[9]=(m-y)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Sn.set(n[0],n[1],n[2]).length(),a=Sn.set(n[4],n[5],n[6]).length(),o=Sn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],$t.copy(this);let l=1/s,h=1/a,c=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=c,$t.elements[9]*=c,$t.elements[10]*=c,t.setFromRotationMatrix($t),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,h=2*s/(t-e),c=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,f;if(o===Xn)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Xr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),u=1/(a-s),d=(t+e)*h,p=(i+n)*c,f,x;if(o===Xn)f=(a+s)*u,x=-2*u;else{if(o!==Xr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,x=-1*u}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sn=new b,$t=new Se,Ef=new b(0,0,0),Af=new b(1,1,1),Li=new b,dr=new b,Nt=new b,mu=new Se,gu=new It,zt=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zt.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Rf=0,vu=new b,Tn=new It,vi=new Se,pr=new b,ys=new b,Cf=new b,If=new It,yu=new b(1,0,0),xu=new b(0,1,0),_u=new b(0,0,1),bu={type:"added"},kf={type:"removed"},En={type:"childadded",child:null},Po={type:"childremoved",child:null},_t=class r extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new zt,i=new It,n=new b(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Se},normalMatrix:{value:new Pe}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ys,pr,this.up):vi.lookAt(pr,ys,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),Tn.setFromRotationMatrix(vi),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),En.child=e,this.dispatchEvent(En),En.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};_t.DEFAULT_UP=new b(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=new b,yi=new b,Lo=new b,xi=new b,An=new b,Rn=new b,Mu=new b,Do=new b,No=new b,Uo=new b,Oo=new Ye,Bo=new Ye,Fo=new Ye,bi=class r{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Zt.subVectors(e,t),n.cross(Zt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Zt.subVectors(n,t),yi.subVectors(i,t),Lo.subVectors(e,t);let a=Zt.dot(Zt),o=Zt.dot(yi),l=Zt.dot(Lo),h=yi.dot(yi),c=yi.dot(Lo),u=a*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,f=(a*c-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,xi)!==null&&xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return Oo.setScalar(0),Bo.setScalar(0),Fo.setScalar(0),Oo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,i),Fo.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Oo,s.x),a.addScaledVector(Bo,s.y),a.addScaledVector(Fo,s.z),a}static isFrontFacing(e,t,i,n){return Zt.subVectors(i,t),yi.subVectors(e,t),Zt.cross(yi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),.5*Zt.cross(yi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;An.subVectors(n,i),Rn.subVectors(s,i),Do.subVectors(e,i);let l=An.dot(Do),h=Rn.dot(Do);if(l<=0&&h<=0)return t.copy(i);No.subVectors(e,n);let c=An.dot(No),u=Rn.dot(No);if(c>=0&&u<=c)return t.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(An,a);Uo.subVectors(e,s);let p=An.dot(Uo),f=Rn.dot(Uo);if(f>=0&&p<=f)return t.copy(s);let x=p*h-l*f;if(x<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(i).addScaledVector(Rn,o);let m=c*f-p*u;if(m<=0&&u-c>=0&&p-f>=0)return Mu.subVectors(s,n),o=(u-c)/(u-c+(p-f)),t.copy(n).addScaledVector(Mu,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(i).addScaledVector(An,a).addScaledVector(Rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},fr={h:0,s:0,l:0};function zo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Xe.workingColorSpace){if(e=bf(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=zo(a,s,e+1/3),this.g=zo(a,s,e),this.b=zo(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Xe.fromWorkingColorSpace(Mt.copy(this),e),65536*Math.round(yt(255*Mt.r,0,255))+256*Math.round(yt(255*Mt.g,0,255))+Math.round(yt(255*Mt.b,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Mt.copy(this),t);let i=Mt.r,n=Mt.g,s=Mt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=at){Xe.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,i=Mt.g,n=Mt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(fr);let i=wo(Di.h,fr.h,t),n=wo(Di.s,fr.s,t),s=wo(Di.l,fr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Re;Re.NAMES=kd;var Pf=0,Fi=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=hi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==sn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cv=Lf();function Lf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ut=new b,mr=new ne,tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}};var jn=class extends tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $r=class extends tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Df=0,Ft=new Se,Ho=new _t,Cn=new b,Ut=new ei,xs=new ei,vt=new b,Ke=class r extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?$r:jn)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,n=t.count;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ut.min,xs.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,xs.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(xs.min),Ut.expandByPoint(xs.max))}Ut.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)vt.fromBufferAttribute(o,h),l&&(Cn.fromBufferAttribute(e,h),vt.add(Cn)),n=Math.max(n,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new b,l[P]=new b;let h=new b,c=new b,u=new b,d=new ne,p=new ne,f=new ne,x=new b,m=new b;function g(P,N,F){h.fromBufferAttribute(i,P),c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,F),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,F),c.sub(h),u.sub(h),p.sub(d),f.sub(d);let z=1/(p.x*f.y-f.x*p.y);isFinite(z)&&(x.copy(c).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(z),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(z),o[P].add(x),o[N].add(x),o[F].add(x),l[P].add(m),l[N].add(m),l[F].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,N=y.length;P<N;++P){let F=y[P],z=F.start;for(let H=z,X=z+F.count;H<X;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let v=new b,_=new b,A=new b,w=new b;function C(P){A.fromBufferAttribute(n,P),w.copy(A);let N=o[P];v.copy(N),v.sub(A.multiplyScalar(A.dot(N))).normalize(),_.crossVectors(w,N);let F=_.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,F)}for(let P=0,N=y.length;P<N;++P){let F=y[P],z=F.start;for(let H=z,X=z+F.count;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new b,s=new b,a=new b,o=new b,l=new b,h=new b,c=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,f=0;for(let x=0,m=l.length;x<m;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*c;for(let g=0;g<c;g++)d[f++]=h[p++]}return new tt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let s=e.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new Se,Ki=new ln,gr=new ti,Su=new b,vr=new b,yr=new b,xr=new b,Vo=new b,_r=new b,Tu=new b,br=new b,Ne=class extends _t{constructor(e=new Ke,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){_r.set(0,0,0);for(let l=0,h=s.length;l<h;l++){let c=o[l],u=s[l];c!==0&&(Vo.fromBufferAttribute(u,e),a?_r.addScaledVector(Vo,c):_r.addScaledVector(Vo.sub(t),c))}t.add(_r)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),gr.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(gr,Su)===null||Ki.origin.distanceToSquared(Su)>(e.far-e.near)**2))return;wu.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(wu),i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Ki)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));y<v;y+=3)n=Mr(this,g,e,i,h,c,u,o.getX(y),o.getX(y+1),o.getX(y+2)),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);f<x;f+=3)n=Mr(this,a,e,i,h,c,u,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));y<v;y+=3)n=Mr(this,g,e,i,h,c,u,y,y+1,y+2),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);f<x;f+=3)n=Mr(this,a,e,i,h,c,u,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Mr(r,e,t,i,n,s,a,o,l,h){r.getVertexPosition(o,vr),r.getVertexPosition(l,yr),r.getVertexPosition(h,xr);let c=(function(u,d,p,f,x,m,g,y){let v;if(v=d.side===1?f.intersectTriangle(g,m,x,!0,y):f.intersectTriangle(x,m,g,d.side===0,y),v===null)return null;br.copy(y),br.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(br);return _<p.near||_>p.far?null:{distance:_,point:br.clone(),object:u}})(r,e,t,i,vr,yr,xr,Tu);if(c){let u=new b;bi.getBarycoord(Tu,vr,yr,xr,u),n&&(c.uv=bi.getInterpolatedAttribute(n,o,l,h,u,new ne)),s&&(c.uv1=bi.getInterpolatedAttribute(s,o,l,h,u,new ne)),a&&(c.normal=bi.getInterpolatedAttribute(a,o,l,h,u,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new b,materialIndex:0};bi.getNormal(vr,yr,xr,d.normal),c.face=d,c.barycoord=u}return c}var Ot=class r extends Ke{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,p=0;function f(x,m,g,y,v,_,A,w,C,P,N){let F=_/C,z=A/P,H=_/2,X=A/2,V=w/2,q=C+1,Y=P+1,ie=0,ee=0,fe=new b;for(let ve=0;ve<Y;ve++){let te=ve*z-X;for(let re=0;re<q;re++){let pe=re*F-H;fe[x]=pe*y,fe[m]=te*v,fe[g]=V,h.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[g]=w>0?1:-1,c.push(fe.x,fe.y,fe.z),u.push(re/C),u.push(1-ve/P),ie+=1}}for(let ve=0;ve<P;ve++)for(let te=0;te<C;te++){let re=d+te+q*ve,pe=d+te+q*(ve+1),me=d+(te+1)+q*(ve+1),le=d+(te+1)+q*ve;l.push(re,pe,le),l.push(pe,me,le),ee+=6}o.addGroup(p,ee,N),p+=ee,d+=ie}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function At(r){let e={};for(let t=0;t<r.length;t++){let i=qn(r[t]);for(let n in i)e[n]=i[n]}return e}function Pd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Nf={clone:qn,merge:At},ci=class extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ns=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new b,Eu=new ne,Au=new ne,wt=class extends Ns{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Fl*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Gr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Fl*Math.atan(Math.tan(.5*Gr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Au),t.subVectors(Au,Eu)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Gr*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},In=-90,Gl=class extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new wt(In,1,e,t);n.layers=this.layers,this.add(n);let s=new wt(In,1,e,t);s.layers=this.layers,this.add(s);let a=new wt(In,1,e,t);a.layers=this.layers,this.add(a);let o=new wt(In,1,e,t);o.layers=this.layers,this.add(o);let l=new wt(In,1,e,t);l.layers=this.layers,this.add(l);let h=new wt(In,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let h of t)this.remove(h);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Xr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Zr=class extends Ct{constructor(e,t,i,n,s,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:Hn,i,n,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Zr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ot(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Ne(n,s),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Mi),new Gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Go=new b,Uf=new b,Of=new Pe,_i=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Go.subVectors(i,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Go),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Of.getNormalMatrix(e),n=this.coplanarPoint(Go).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new ti,wr=new b,Yn=class{constructor(e=new _i,t=new _i,i=new _i,n=new _i,s=new _i,a=new _i){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],p=n[8],f=n[9],x=n[10],m=n[11],g=n[12],y=n[13],v=n[14],_=n[15];if(i[0].setComponents(l-s,d-h,m-p,_-g).normalize(),i[1].setComponents(l+s,d+h,m+p,_+g).normalize(),i[2].setComponents(l+a,d+c,m+f,_+y).normalize(),i[3].setComponents(l-a,d-c,m-f,_-y).normalize(),i[4].setComponents(l-o,d-u,m-x,_-v).normalize(),t===Xn)i[5].setComponents(l+o,d+u,m+x,_+v).normalize();else{if(t!==Xr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,x,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(wr.x=n.normal.x>0?e.max.x:e.min.x,wr.y=n.normal.y>0?e.max.y:e.min.y,wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ld(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,h=o.byteLength,c=r.createBuffer(),u;if(r.bindBuffer(a,c),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:c,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:h}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,h=a.updateRanges;if(r.bindBuffer(o,s),h.length===0)r.bufferSubData(o,0,l);else{h.sort(((u,d)=>u.start-d.start));let c=0;for(let u=1;u<h.length;u++){let d=h[c],p=h[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++c,h[c]=p)}h.length=c+1;for(let u=0,d=h.length;u<d;u++){let p=h[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var kt=class r extends Ke{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<c;g++){let y=g*d-a;for(let v=0;v<h;v++){let _=v*u-s;f.push(_,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let v=y+h*g,_=y+h*(g+1),A=y+1+h*(g+1),w=y+1+h*g;p.push(v,_,w),p.push(_,A,w)}this.setIndex(p),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},De={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},oe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},ai={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ai.physical={uniforms:At([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Sr={r:0,b:0,g:0},en=new zt,Ff=new Se;function zf(r,e,t,i,n,s,a){let o=new Re(0),l,h,c=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function x(m,g){m.getRGB(Sr,Pd(r)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),c=g,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:function(m){let g=!1,y=f(m);y===null?x(o,c):y&&y.isColor&&(x(y,1),g=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let y=f(g);y&&(y.isCubeTexture||y.mapping===xa)?(h===void 0&&(h=new Ne(new Ot(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:qn(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),en.copy(g.backgroundRotation),en.x*=-1,en.y*=-1,en.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(en)),h.material.toneMapped=Xe.getTransfer(y.colorSpace)!==$e,u===y&&d===y.version&&p===r.toneMapping||(h.material.needsUpdate=!0,u=y,d=y.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ne(new kt(2,2),new ci({name:"BackgroundMaterial",uniforms:qn(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Hf(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=h(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function h(g){let y=[],v=[],_=[];for(let A=0;A<t;A++)y[A]=0,v[A]=0,_[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:v,attributeDivisors:_,object:g,attributes:{},index:null}}function c(){let g=s.newAttributes;for(let y=0,v=g.length;y<v;y++)g[y]=0}function u(g){d(g,0)}function d(g,y){let v=s.newAttributes,_=s.enabledAttributes,A=s.attributeDivisors;v[g]=1,_[g]===0&&(r.enableVertexAttribArray(g),_[g]=1),A[g]!==y&&(r.vertexAttribDivisor(g,y),A[g]=y)}function p(){let g=s.newAttributes,y=s.enabledAttributes;for(let v=0,_=y.length;v<_;v++)y[v]!==g[v]&&(r.disableVertexAttribArray(v),y[v]=0)}function f(g,y,v,_,A,w,C){C===!0?r.vertexAttribIPointer(g,y,v,A,w):r.vertexAttribPointer(g,y,v,_,A,w)}function x(){m(),a=!0,s!==n&&(s=n,o(s.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,y,v,_,A){let w=!1,C=(function(P,N,F){let z=F.wireframe===!0,H=i[P.id];H===void 0&&(H={},i[P.id]=H);let X=H[N.id];X===void 0&&(X={},H[N.id]=X);let V=X[z];return V===void 0&&(V=h(r.createVertexArray()),X[z]=V),V})(_,v,y);s!==C&&(s=C,o(s.object)),w=(function(P,N,F,z){let H=s.attributes,X=N.attributes,V=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let ie=H[Y],ee=X[Y];if(ee===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ie===void 0||ie.attribute!==ee||ee&&ie.data!==ee.data)return!0;V++}return s.attributesNum!==V||s.index!==z})(g,_,v,A),w&&(function(P,N,F,z){let H={},X=N.attributes,V=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let ie=X[Y];ie===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));let ee={};ee.attribute=ie,ie&&ie.data&&(ee.data=ie.data),H[Y]=ee,V++}s.attributes=H,s.attributesNum=V,s.index=z})(g,_,v,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(P,N,F,z){c();let H=z.attributes,X=F.getAttributes(),V=N.defaultAttributeValues;for(let q in X){let Y=X[q];if(Y.location>=0){let ie=H[q];if(ie===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){let ee=ie.normalized,fe=ie.itemSize,ve=e.get(ie);if(ve===void 0)continue;let te=ve.buffer,re=ve.type,pe=ve.bytesPerElement,me=re===r.INT||re===r.UNSIGNED_INT||ie.gpuType===Bh;if(ie.isInterleavedBufferAttribute){let le=ie.data,E=le.stride,T=ie.offset;if(le.isInstancedInterleavedBuffer){for(let D=0;D<Y.locationSize;D++)d(Y.location+D,le.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let D=0;D<Y.locationSize;D++)u(Y.location+D);r.bindBuffer(r.ARRAY_BUFFER,te);for(let D=0;D<Y.locationSize;D++)f(Y.location+D,fe/Y.locationSize,re,ee,E*pe,(T+fe/Y.locationSize*D)*pe,me)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,ie.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<Y.locationSize;le++)u(Y.location+le);r.bindBuffer(r.ARRAY_BUFFER,te);for(let le=0;le<Y.locationSize;le++)f(Y.location+le,fe/Y.locationSize,re,ee,fe*pe,fe/Y.locationSize*le*pe,me)}}else if(V!==void 0){let ee=V[q];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(Y.location,ee);break;case 3:r.vertexAttrib3fv(Y.location,ee);break;case 4:r.vertexAttrib4fv(Y.location,ee);break;default:r.vertexAttrib1fv(Y.location,ee)}}}}p()})(g,y,v,_),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:x,resetDefaultState:m,dispose:function(){x();for(let g in i){let y=i[g];for(let v in y){let _=y[v];for(let A in _)l(_[A].object),delete _[A];delete y[v]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let y=i[g.id];for(let v in y){let _=y[v];for(let A in _)l(_[A].object),delete _[A];delete y[v]}delete i[g.id]},releaseStatesOfProgram:function(g){for(let y in i){let v=i[y];if(v[g.id]===void 0)continue;let _=v[g.id];for(let A in _)l(_[A].object),delete _[A];delete v[g.id]}},initAttributes:c,enableAttribute:u,disableUnusedAttributes:p}}function Vf(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let h=0;h<o;h++)l+=a[h];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<s.length;c++)n(s[c],a[c],l[c]);else{h.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let c=0;for(let u=0;u<o;u++)c+=a[u]*l[u];t.update(c,i,1)}}}function Gf(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===Jt||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Oi&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==li&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Wf(r){let e=this,t=null,i=0,n=!1,s=!1,a=new _i,o=new Pe,l={value:null,needsUpdate:!1};function h(c,u,d,p){let f=c!==null?c.length:0,x=null;if(f!==0){if(x=l.value,p!==!0||x===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<m)&&(x=new Float32Array(m));for(let y=0,v=d;y!==f;++y,v+=4)a.copy(c[y]).applyMatrix4(g,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let d=c.length!==0||u||i!==0||n;return n=u,i=c.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,d){let p=c.clippingPlanes,f=c.clipIntersection,x=c.clipShadows,m=r.get(c);if(!n||p===null||p.length===0||s&&!x)s?h(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,y=4*g,v=m.clippingState||null;l.value=v,v=h(p,u,y,d);for(let _=0;_!==y;++_)v[_]=t[_];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function Xf(r){let e=new WeakMap;function t(n,s){return s===ll?n.mapping=Hn:s===hl&&(n.mapping=Vn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===ll||s===hl){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Wl(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Jr=class extends Ns{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=[.125,.215,.35,.446,.526,.582],_s=20,Wo=new Jr,Cu=new Re,Xo=null,jo=0,qo=0,Yo=!1,nn=(1+Math.sqrt(5))/2,kn=1/nn,Iu=[new b(-nn,kn,0),new b(nn,kn,0),new b(-kn,0,nn),new b(kn,0,nn),new b(0,nn,-kn),new b(0,nn,kn),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Kr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,jo,qo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Xs,format:Jt,colorSpace:Qn,depthBuffer:!1},n=ku(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],h=[],c=a,u=a-4+1+Ru.length;for(let d=0;d<u;d++){let p=Math.pow(2,c);l.push(p);let f=1/p;d>a-4?f=Ru[d-a+4-1]:d===0&&(f=0),h.push(f);let x=1/(p-2),m=-x,g=1+x,y=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,_=6,A=3,w=2,C=1,P=new Float32Array(A*_*v),N=new Float32Array(w*_*v),F=new Float32Array(C*_*v);for(let H=0;H<v;H++){let X=H%3*2/3-1,V=H>2?0:-1,q=[X,V,0,X+2/3,V,0,X+2/3,V+1,0,X,V,0,X+2/3,V+1,0,X,V+1,0];P.set(q,A*_*H),N.set(y,w*_*H);let Y=[H,H,H,H,H,H];F.set(Y,C*_*H)}let z=new Ke;z.setAttribute("position",new tt(P,A)),z.setAttribute("uv",new tt(N,w)),z.setAttribute("faceIndex",new tt(F,C)),o.push(z),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}})(s)),this._blurMaterial=(function(a,o,l){let h=new Float32Array(_s),c=new b(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,n){let s=new wt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Cu),l.toneMapping=0,l.autoClear=!1;let u=new Ht({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Ne(new Ot,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Cu),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):m===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let g=this._cubeSize;Tr(n,m*g,x>2?g:0,g,g),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Hn||e.mapping===Vn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Tr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Wo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Iu[(n-s-1)%Iu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Ne(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,x=isFinite(s)?1+Math.floor(3*f):_s;x>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let m=[],g=0;for(let _=0;_<_s;++_){let A=_/f,w=Math.exp(-A*A/2);m.push(w),_===0?g+=w:_<x&&(g+=2*w)}for(let _=0;_<m.length;_++)m[_]=m[_]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let v=this._sizeLods[n];Tr(t,3*v*(n>y-4?n-y+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(c,Wo)}};function ku(r,e,t){let i=new Si(r,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Pu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lu(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function jf(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===ll||s===hl,o=s===Hn||s===Vn;if(a||o){let l=e.get(n),h=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==h)return t===null&&(t=new Kr(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let c=n.image;return a&&c&&c.height>0||o&&c&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(c)?(t===null&&(t=new Kr(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function qf(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Yf(r,e,t,i){let n={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let u in h.attributes)e.remove(h.attributes[u]);for(let u in h.morphAttributes){let d=h.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}h.removeEventListener("dispose",a),delete n[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,u=l.attributes.position,d=0;if(c!==null){let x=c.array;d=c.version;for(let m=0,g=x.length;m<g;m+=3){let y=x[m+0],v=x[m+1],_=x[m+2];h.push(y,v,v,_,_,y)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let m=0,g=x.length/3-1;m<g;m+=3){let y=m+0,v=m+1,_=m+2;h.push(y,v,v,_,_,y)}}}let p=new(Id(h)?$r:jn)(h,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)e.update(h[u],r.ARRAY_BUFFER);let c=l.morphAttributes;for(let u in c){let d=c[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function $f(r,e,t){let i,n,s;function a(o,l,h){h!==0&&(r.drawElementsInstanced(i,l,n,o*s,h),t.update(l,i,h))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,h);let c=0;for(let u=0;u<h;u++)c+=l[u];t.update(c,i,1)},this.renderMultiDrawInstances=function(o,l,h,c){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],c[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p]*c[p];t.update(d,i,1)}}}function Zf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Jf(r,e,t){let i=new WeakMap,n=new Ye;return{update:function(s,a,o){let l=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==c){let P=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),f===!0&&(y=3);let v=a.attributes.position.count*y,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*_*4*c),w=new Yr(A,v,_,c);w.type=li,w.needsUpdate=!0;let C=4*y;for(let N=0;N<c;N++){let F=x[N],z=m[N],H=g[N],X=v*_*4*N;for(let V=0;V<F.count;V++){let q=V*C;d===!0&&(n.fromBufferAttribute(F,V),A[X+q+0]=n.x,A[X+q+1]=n.y,A[X+q+2]=n.z,A[X+q+3]=0),p===!0&&(n.fromBufferAttribute(z,V),A[X+q+4]=n.x,A[X+q+5]=n.y,A[X+q+6]=n.z,A[X+q+7]=0),f===!0&&(n.fromBufferAttribute(H,V),A[X+q+8]=n.x,A[X+q+9]=n.y,A[X+q+10]=n.z,A[X+q+11]=H.itemSize===4?n.w:1)}}u={count:c,texture:w,size:new ne(v,_)},i.set(a,u),a.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Kf(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var Qr=class extends Ct{constructor(e,t,i,n,s,a,o,l,h,c=1026){if(c!==Ls&&c!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ls&&(i=on),i===void 0&&c===Wn&&(i=Gn),super(null,n,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Dd=new Ct,Du=new Qr(1,1),Nd=new Yr,Ud=new Vl,Od=new Zr,Nu=[],Uu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),Fu=new Float32Array(4);function ts(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Nu[n];if(s===void 0&&(s=new Float32Array(n),Nu[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ft(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ba(r,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Qf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function em(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function tm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function im(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function nm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(ft(t,i))return;Fu.set(i),r.uniformMatrix2fv(this.addr,!1,Fu),mt(t,i)}}function sm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(ft(t,i))return;Bu.set(i),r.uniformMatrix3fv(this.addr,!1,Bu),mt(t,i)}}function rm(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(ft(t,i))return;Ou.set(i),r.uniformMatrix4fv(this.addr,!1,Ou),mt(t,i)}}function am(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function om(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function lm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function hm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function cm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function um(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function dm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function pm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function fm(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Du.compareFunction=515,s=Du):s=Dd,t.setTexture2D(e||s,n)}function mm(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ud,n)}function gm(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Od,n)}function vm(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Nd,n)}function ym(r,e){r.uniform1fv(this.addr,e)}function xm(r,e){let t=ts(e,this.size,2);r.uniform2fv(this.addr,t)}function _m(r,e){let t=ts(e,this.size,3);r.uniform3fv(this.addr,t)}function bm(r,e){let t=ts(e,this.size,4);r.uniform4fv(this.addr,t)}function Mm(r,e){let t=ts(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wm(r,e){let t=ts(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sm(r,e){let t=ts(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tm(r,e){r.uniform1iv(this.addr,e)}function Em(r,e){r.uniform2iv(this.addr,e)}function Am(r,e){r.uniform3iv(this.addr,e)}function Rm(r,e){r.uniform4iv(this.addr,e)}function Cm(r,e){r.uniform1uiv(this.addr,e)}function Im(r,e){r.uniform2uiv(this.addr,e)}function km(r,e){r.uniform3uiv(this.addr,e)}function Pm(r,e){r.uniform4uiv(this.addr,e)}function Lm(r,e,t){let i=this.cache,n=e.length,s=ba(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Dd,s[a])}function Dm(r,e,t){let i=this.cache,n=e.length,s=ba(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ud,s[a])}function Nm(r,e,t){let i=this.cache,n=e.length,s=ba(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Od,s[a])}function Um(r,e,t){let i=this.cache,n=e.length,s=ba(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Nd,s[a])}var Xl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Qf;case 35664:return em;case 35665:return tm;case 35666:return im;case 35674:return nm;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return cm;case 36294:return um;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}})(t.type)}},jl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return ym;case 35664:return xm;case 35665:return _m;case 35666:return bm;case 35674:return Mm;case 35675:return wm;case 35676:return Sm;case 5124:case 35670:return Tm;case 35667:case 35671:return Em;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Im;case 36295:return km;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Um}})(t.type)}},ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},$o=/(\w+)(\])?(\[|\.)?/g;function zu(r,e){r.seq.push(e),r.map[e.id]=e}function Om(r,e,t){let i=r.name,n=i.length;for($o.lastIndex=0;;){let s=$o.exec(i),a=$o.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){zu(t,h===void 0?new Xl(o,r,e):new jl(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new ql(o),zu(t,c)),t=c}}}var zn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Om(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Hu(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Bm=0,Vu=new Pe;function Gu(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){let f=p+1;c.push(`${f===l?">":" "} ${f}: ${h[p]}`)}return c.join(`
`)})(r.getShaderSource(e),a)}return n}function Fm(r,e){let t=(function(i){Xe._getMatrix(Vu,Xe.workingColorSpace,i);let n=`mat3( ${Vu.elements.map((s=>s.toFixed(4)))} )`;switch(Xe.getTransfer(i)){case _a:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Er=new b;function Hm(){return Xe.getLuminanceCoefficients(Er),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Er.x.toFixed(4)}, ${Er.y.toFixed(4)}, ${Er.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bs(r){return r!==""}function Wu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(Vm,Wm)}var Gm=new Map;function Wm(r,e){let t=De[e];if(t===void 0){let i=Gm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Yl(t)}var Xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(r){return r.replace(Xm,jm)}function jm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function qu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qm(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(z){let H="SHADOWMAP_TYPE_BASIC";return z.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":z.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":z.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H})(t),h=(function(z){let H="ENVMAP_TYPE_CUBE";if(z.envMap)switch(z.envMapMode){case Hn:case Vn:H="ENVMAP_TYPE_CUBE";break;case xa:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),c=(function(z){let H="ENVMAP_MODE_REFLECTION";return z.envMap&&z.envMapMode===Vn&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(z){let H="ENVMAP_BLENDING_NONE";if(z.envMap)switch(z.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H})(t),d=(function(z){let H=z.envMapCubeUVHeight;if(H===null)return null;let X=Math.log2(H)-2,V=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:V,maxMip:X}})(t),p=(function(z){return[z.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",z.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)})(t),f=(function(z){let H=[];for(let X in z){let V=z[X];V!==!1&&H.push("#define "+X+" "+V)}return H.join(`
`)})(s),x=n.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(bs).join(`
`),g.length>0&&(g+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),g=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Fm("linearToOutputTexel",t.outputColorSpace),Hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=Yl(a),a=Wu(a,t),a=Xu(a,t),o=Yl(o),o=Wu(o,t),o=Xu(o,t),a=ju(a),o=ju(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+m+a,_=y+g+o,A=Hu(n,n.VERTEX_SHADER,v),w=Hu(n,n.FRAGMENT_SHADER,_);function C(z){if(r.debug.checkShaderErrors){let H=n.getProgramInfoLog(x).trim(),X=n.getShaderInfoLog(A).trim(),V=n.getShaderInfoLog(w).trim(),q=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,A,w);else{let ie=Gu(n,A,"vertex"),ee=Gu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+H+`
`+ie+`
`+ee)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):X!==""&&V!==""||(Y=!1);Y&&(z.diagnostics={runnable:q,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:V,prefix:g}})}n.deleteShader(A),n.deleteShader(w),P=new zn(n,x),N=(function(H,X){let V={},q=H.getProgramParameter(X,H.ACTIVE_ATTRIBUTES);for(let Y=0;Y<q;Y++){let ie=H.getActiveAttrib(X,Y),ee=ie.name,fe=1;ie.type===H.FLOAT_MAT2&&(fe=2),ie.type===H.FLOAT_MAT3&&(fe=3),ie.type===H.FLOAT_MAT4&&(fe=4),V[ee]={type:ie.type,location:H.getAttribLocation(X,ee),locationSize:fe}}return V})(n,x)}let P,N;n.attachShader(x,A),n.attachShader(x,w),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),this.getUniforms=function(){return P===void 0&&C(this),P},this.getAttributes=function(){return N===void 0&&C(this),N};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(x,37297)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var Ym=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zl(e),t.set(e,i)),i}},Zl=class{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}};function $m(r,e,t,i,n,s,a){let o=new Ds,l=new $l,h=new Set,c=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return h.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,y,v,_){let A=v.fog,w=_.geometry,C=m.isMeshStandardMaterial?v.environment:null,P=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),N=P&&P.mapping===xa?P.image.height:null,F=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let z=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,H=z!==void 0?z.length:0,X,V,q,Y,ie=0;if(w.morphAttributes.position!==void 0&&(ie=1),w.morphAttributes.normal!==void 0&&(ie=2),w.morphAttributes.color!==void 0&&(ie=3),F){let ps=ai[F];X=ps.vertexShader,V=ps.fragmentShader}else X=m.vertexShader,V=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),Y=l.getFragmentShaderID(m);let ee=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),ve=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,re=!!m.map,pe=!!m.matcap,me=!!P,le=!!m.aoMap,E=!!m.lightMap,T=!!m.bumpMap,D=!!m.normalMap,L=!!m.displacementMap,R=!!m.emissiveMap,k=!!m.metalnessMap,M=!!m.roughnessMap,I=m.anisotropy>0,O=m.clearcoat>0,K=m.dispersion>0,U=m.iridescence>0,Z=m.sheen>0,$=m.transmission>0,Q=I&&!!m.anisotropyMap,ce=O&&!!m.clearcoatMap,he=O&&!!m.clearcoatNormalMap,xe=O&&!!m.clearcoatRoughnessMap,Ae=U&&!!m.iridescenceMap,Ge=U&&!!m.iridescenceThicknessMap,Be=Z&&!!m.sheenColorMap,_e=Z&&!!m.sheenRoughnessMap,qe=!!m.specularMap,Qe=!!m.specularColorMap,rt=!!m.specularIntensityMap,ge=$&&!!m.transmissionMap,ze=$&&!!m.thicknessMap,Je=!!m.gradientMap,vn=!!m.alphaMap,nr=m.alphaTest>0,Wt=!!m.alphaHash,si=!!m.extensions,ji=0;m.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(ji=r.toneMapping));let B={shaderID:F,shaderType:m.type,shaderName:m.name,vertexShader:X,fragmentShader:V,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:Y,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:ve,instancingColor:ve&&_.instanceColor!==null,instancingMorph:ve&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qn,alphaToCoverage:!!m.alphaToCoverage,map:re,matcap:pe,envMap:me,envMapMode:me&&P.mapping,envMapCubeUVHeight:N,aoMap:le,lightMap:E,bumpMap:T,normalMap:D,displacementMap:d&&L,emissiveMap:R,normalMapObjectSpace:D&&m.normalMapType===1,normalMapTangentSpace:D&&m.normalMapType===0,metalnessMap:k,roughnessMap:M,anisotropy:I,anisotropyMap:Q,clearcoat:O,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:xe,dispersion:K,iridescence:U,iridescenceMap:Ae,iridescenceThicknessMap:Ge,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Qe,specularIntensityMap:rt,transmission:$,transmissionMap:ge,thicknessMap:ze,gradientMap:Je,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:vn,alphaTest:nr,alphaHash:Wt,combine:m.combine,mapUv:re&&x(m.map.channel),aoMapUv:le&&x(m.aoMap.channel),lightMapUv:E&&x(m.lightMap.channel),bumpMapUv:T&&x(m.bumpMap.channel),normalMapUv:D&&x(m.normalMap.channel),displacementMapUv:L&&x(m.displacementMap.channel),emissiveMapUv:R&&x(m.emissiveMap.channel),metalnessMapUv:k&&x(m.metalnessMap.channel),roughnessMapUv:M&&x(m.roughnessMap.channel),anisotropyMapUv:Q&&x(m.anisotropyMap.channel),clearcoatMapUv:ce&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(m.sheenRoughnessMap.channel),specularMapUv:qe&&x(m.specularMap.channel),specularColorMapUv:Qe&&x(m.specularColorMap.channel),specularIntensityMapUv:rt&&x(m.specularIntensityMap.channel),transmissionMapUv:ge&&x(m.transmissionMap.channel),thicknessMapUv:ze&&x(m.thicknessMap.channel),alphaMapUv:vn&&x(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(D||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!w.attributes.uv&&(re||vn),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:fe,skinning:_.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&y.length>0,shadowMapType:r.shadowMap.type,toneMapping:ji,decodeVideoTexture:re&&m.map.isVideoTexture===!0&&Xe.getTransfer(m.map.colorSpace)===$e,decodeVideoTextureEmissive:R&&m.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(m.emissiveMap.colorSpace)===$e,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:si&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(si&&m.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return B.vertexUv1s=h.has(1),B.vertexUv2s=h.has(2),B.vertexUv3s=h.has(3),h.clear(),B},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let y in m.defines)g.push(y),g.push(m.defines[y]);return m.isRawShaderMaterial===!1&&((function(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)})(g,m),(function(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],y;if(g){let v=ai[g];y=Nf.clone(v.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,g){let y;for(let v=0,_=c.length;v<_;v++){let A=c[v];if(A.cacheKey===g){y=A,++y.usedTimes;break}}return y===void 0&&(y=new qm(r,g,m,s),c.push(y)),y},releaseProgram:function(m){if(--m.usedTimes==0){let g=c.indexOf(m);c[g]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function Zm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $u(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,h,c,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){let d=s(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){let d=s(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Jm),i.length>1&&i.sort(o||Yu),n.length>1&&n.sort(o||Yu)}}}function Km(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new $u,r.set(e,[n])):t>=i.length?(n=new $u,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Qm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Re};break;case"SpotLight":t={position:new b,direction:new b,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var eg=0;function tg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ig(r){let e=new Qm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new b);let n=new b,s=new Se,a=new Se;return{setup:function(o){let l=0,h=0,c=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let u=0,d=0,p=0,f=0,x=0,m=0,g=0,y=0,v=0,_=0,A=0;o.sort(tg);for(let C=0,P=o.length;C<P;C++){let N=o[C],F=N.color,z=N.intensity,H=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=F.r*z,h+=F.g*z,c+=F.b*z;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],z);A++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[u]=Y,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=N.shadow.matrix,m++}i.directional[u]=V,u++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=H,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[p]=V;let q=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,q.updateMatrices(N),N.castShadow&&_++),i.spotLightMatrix[p]=q.matrix,N.castShadow){let Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=X,y++}p++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(.5*N.width,0,0),V.halfHeight.set(0,.5*N.height,0),i.rectArea[f]=V,f++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[d]=Y,i.pointShadowMap[d]=X,i.pointShadowMatrix[d]=N.shadow.matrix,g++}i.point[d]=V,d++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(z),V.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[x]=V,x++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;let w=i.hash;w.directionalLength===u&&w.pointLength===d&&w.spotLength===p&&w.rectAreaLength===f&&w.hemiLength===x&&w.numDirectionalShadows===m&&w.numPointShadows===g&&w.numSpotShadows===y&&w.numSpotMaps===v&&w.numLightProbes===A||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=x,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+v-_,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=A,w.directionalLength=u,w.pointLength=d,w.spotLength=p,w.rectAreaLength=f,w.hemiLength=x,w.numDirectionalShadows=m,w.numPointShadows=g,w.numSpotShadows=y,w.numSpotMaps=v,w.numLightProbes=A,i.version=eg++)},setupView:function(o,l){let h=0,c=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let x=0,m=o.length;x<m;x++){let g=o[x];if(g.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(f),h++}else if(g.isSpotLight){let y=i.spot[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let y=i.rectArea[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let y=i.point[c];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),c++}else if(g.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(f),p++}}},state:i}}function Zu(r){let e=new ig(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function ng(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Zu(r),e.set(t,[s])):i>=n.length?(s=new Zu(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var Jl=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kl=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sg(r,e,t){let i=new Yn,n=new ne,s=new ne,a=new Ye,o=new Jl({depthPacking:3201}),l=new Kl,h={},c=t.maxTextureSize,u={[Fp]:1,[zp]:0,[un]:2},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ke;f.setAttribute("position",new tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function y(w,C){let P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Si(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,P,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,P,p,x,null)}function v(w,C,P,N){let F=null,z=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)F=z;else if(F=P.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=F.uuid,X=C.uuid,V=h[H];V===void 0&&(V={},h[H]=V);let q=V[X];q===void 0&&(q=F.clone(),V[X]=q,C.addEventListener("dispose",A)),F=q}return F.visible=C.visible,F.wireframe=C.wireframe,F.side=N===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(r.properties.get(F).light=P),F}function _(w,C,P,N,F){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let H=e.update(w),X=w.material;if(Array.isArray(X)){let V=H.groups;for(let q=0,Y=V.length;q<Y;q++){let ie=V[q],ee=X[ie.materialIndex];if(ee&&ee.visible){let fe=v(w,ee,N,F);w.onBeforeShadow(r,w,C,P,H,fe,ie),r.renderBufferDirect(P,null,H,fe,w,ie),w.onAfterShadow(r,w,C,P,H,fe,ie)}}}else if(X.visible){let V=v(w,X,N,F);w.onBeforeShadow(r,w,C,P,H,V,null),r.renderBufferDirect(P,null,H,V,w,null),w.onAfterShadow(r,w,C,P,H,V,null)}}let z=w.children;for(let H=0,X=z.length;H<X;H++)_(z[H],C,P,N,F)}function A(w){w.target.removeEventListener("dispose",A);for(let C in h){let P=h[C],N=w.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let N=r.getRenderTarget(),F=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let X=g!==3&&this.type===3,V=g===3&&this.type!==3;for(let q=0,Y=w.length;q<Y;q++){let ie=w[q],ee=ie.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;n.copy(ee.mapSize);let fe=ee.getFrameExtents();if(n.multiply(fe),s.copy(ee.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/fe.x),n.x=s.x*fe.x,ee.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/fe.y),n.y=s.y*fe.y,ee.mapSize.y=s.y)),ee.map===null||X===!0||V===!0){let te=this.type!==3?{minFilter:Kt,magFilter:Kt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Si(n.x,n.y,te),ee.map.texture.name=ie.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();let ve=ee.getViewportCount();for(let te=0;te<ve;te++){let re=ee.getViewport(te);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(a),ee.updateMatrices(ie,te),i=ee.getFrustum(),_(C,P,ee.camera,ie,this.type)}ee.isPointLightShadow!==!0&&this.type===3&&y(ee,P),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(N,F,z)}}var rg={[nf]:1,[rf]:6,[of]:7,[af]:5,[sf]:0,[hf]:2,[cf]:4,[lf]:3};function ag(r,e){let t=new function(){let M=!1,I=new Ye,O=null,K=new Ye(0,0,0,0);return{setMask:function(U){O===U||M||(r.colorMask(U,U,U,U),O=U)},setLocked:function(U){M=U},setClear:function(U,Z,$,Q,ce){ce===!0&&(U*=Q,Z*=Q,$*=Q),I.set(U,Z,$,Q),K.equals(I)===!1&&(r.clearColor(U,Z,$,Q),K.copy(I))},reset:function(){M=!1,O=null,K.set(-1,0,0,0)}}},i=new function(){let M=!1,I=!1,O=null,K=null,U=null;return{setReversed:function(Z){if(I!==Z){let $=e.get("EXT_clip_control");I?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let Q=U;U=null,this.setClear(Q)}I=Z},getReversed:function(){return I},setTest:function(Z){Z?me(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(Z){O===Z||M||(r.depthMask(Z),O=Z)},setFunc:function(Z){if(I&&(Z=rg[Z]),K!==Z){switch(Z){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}K=Z}},setLocked:function(Z){M=Z},setClear:function(Z){U!==Z&&(I&&(Z=1-Z),r.clearDepth(Z),U=Z)},reset:function(){M=!1,O=null,K=null,U=null,I=!1}}},n=new function(){let M=!1,I=null,O=null,K=null,U=null,Z=null,$=null,Q=null,ce=null;return{setTest:function(he){M||(he?me(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(he){I===he||M||(r.stencilMask(he),I=he)},setFunc:function(he,xe,Ae){O===he&&K===xe&&U===Ae||(r.stencilFunc(he,xe,Ae),O=he,K=xe,U=Ae)},setOp:function(he,xe,Ae){Z===he&&$===xe&&Q===Ae||(r.stencilOp(he,xe,Ae),Z=he,$=xe,Q=Ae)},setLocked:function(he){M=he},setClear:function(he){ce!==he&&(r.clearStencil(he),ce=he)},reset:function(){M=!1,I=null,O=null,K=null,U=null,Z=null,$=null,Q=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,y=null,v=null,_=new Re(0,0,0),A=0,w=!1,C=null,P=null,N=null,F=null,z=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,V=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=V>=2);let Y=null,ie={},ee=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),ve=new Ye().fromArray(ee),te=new Ye().fromArray(fe);function re(M,I,O,K){let U=new Uint8Array(4),Z=r.createTexture();r.bindTexture(M,Z),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $=0;$<O;$++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,U):r.texImage2D(I+$,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,U);return Z}let pe={};function me(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function le(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}pe[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),me(r.DEPTH_TEST),i.setFunc(3),L(!1),R(1),me(r.CULL_FACE),D(0);let E={[sn]:r.FUNC_ADD,[Hp]:r.FUNC_SUBTRACT,[Vp]:r.FUNC_REVERSE_SUBTRACT};E[103]=r.MIN,E[104]=r.MAX;let T={[Gp]:r.ZERO,[Wp]:r.ONE,[Xp]:r.SRC_COLOR,[al]:r.SRC_ALPHA,[Jp]:r.SRC_ALPHA_SATURATE,[$p]:r.DST_COLOR,[qp]:r.DST_ALPHA,[jp]:r.ONE_MINUS_SRC_COLOR,[ol]:r.ONE_MINUS_SRC_ALPHA,[Zp]:r.ONE_MINUS_DST_COLOR,[Yp]:r.ONE_MINUS_DST_ALPHA,[Kp]:r.CONSTANT_COLOR,[Qp]:r.ONE_MINUS_CONSTANT_COLOR,[ef]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function D(M,I,O,K,U,Z,$,Q,ce,he){if(M!==0){if(d===!1&&(me(r.BLEND),d=!0),M===5)U=U||I,Z=Z||O,$=$||K,I===f&&U===g||(r.blendEquationSeparate(E[I],E[U]),f=I,g=U),O===x&&K===m&&Z===y&&$===v||(r.blendFuncSeparate(T[O],T[K],T[Z],T[$]),x=O,m=K,y=Z,v=$),Q.equals(_)!==!1&&ce===A||(r.blendColor(Q.r,Q.g,Q.b,ce),_.copy(Q),A=ce),p=M,w=!1;else if(M!==p||he!==w){if(f===sn&&g===sn||(r.blendEquation(r.FUNC_ADD),f=sn,g=sn),he)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}x=null,m=null,y=null,v=null,_.set(0,0,0),A=0,p=M,w=he}}else d===!0&&(le(r.BLEND),d=!1)}function L(M){C!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),C=M)}function R(M){M!==0?(me(r.CULL_FACE),M!==P&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),P=M}function k(M,I,O){M?(me(r.POLYGON_OFFSET_FILL),F===I&&z===O||(r.polygonOffset(I,O),F=I,z=O)):le(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:me,disable:le,bindFramebuffer:function(M,I){return l[M]!==I&&(r.bindFramebuffer(M,I),l[M]=I,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=I),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(M,I){let O=c,K=!1;if(M){O=h.get(I),O===void 0&&(O=[],h.set(I,O));let U=M.textures;if(O.length!==U.length||O[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,$=U.length;Z<$;Z++)O[Z]=r.COLOR_ATTACHMENT0+Z;O.length=U.length,K=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,K=!0);K&&r.drawBuffers(O)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:D,setMaterial:function(M,I){M.side===2?le(r.CULL_FACE):me(r.CULL_FACE);let O=M.side===1;I&&(O=!O),L(O),M.blending===1&&M.transparent===!1?D(0):D(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),t.setMask(M.colorWrite);let K=M.stencilWrite;n.setTest(K),K&&(n.setMask(M.stencilWriteMask),n.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),n.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),k(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:L,setCullFace:R,setLineWidth:function(M){M!==N&&(X&&r.lineWidth(M),N=M)},setPolygonOffset:k,setScissorTest:function(M){M?me(r.SCISSOR_TEST):le(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+H-1),Y!==M&&(r.activeTexture(M),Y=M)},bindTexture:function(M,I,O){O===void 0&&(O=Y===null?r.TEXTURE0+H-1:Y);let K=ie[O];K===void 0&&(K={type:void 0,texture:void 0},ie[O]=K),K.type===M&&K.texture===I||(Y!==O&&(r.activeTexture(O),Y=O),r.bindTexture(M,I||pe[M]),K.type=M,K.texture=I)},unbindTexture:function(){let M=ie[Y];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,I){let O=a.get(I);O===void 0&&(O=new WeakMap,a.set(I,O));let K=O.get(M);K===void 0&&(K=r.getUniformBlockIndex(I,M.name),O.set(M,K))},uniformBlockBinding:function(M,I){let O=a.get(I).get(M);s.get(I)!==O&&(r.uniformBlockBinding(I,O,M.__bindingPointIndex),s.set(I,O))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ve.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ve.copy(M))},viewport:function(M){te.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),te.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Y=null,ie={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,y=null,v=null,_=new Re(0,0,0),A=0,w=!1,C=null,P=null,N=null,F=null,z=null,ve.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Ju(r,e,t,i){let n=(function(s){switch(s){case Oi:case _d:return{byteLength:1,components:1};case Ps:case bd:case Xs:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case on:case Bh:case li:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case wd:case Td:return r*e;case Ed:return r*e*2;case Ad:case Hh:return r*e/n.components*n.byteLength;case Rd:case Vh:return r*e*2/n.components*n.byteLength;case Sd:return r*e*3/n.components*n.byteLength;case Jt:case Gh:return r*e*4/n.components*n.byteLength;case Br:case Fr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zr:case Hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dl:case fl:return Math.max(r,16)*Math.max(e,8)/4;case ul:case pl:return Math.max(r,8)*Math.max(e,8)/2;case ml:case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vl:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vr:case Pl:case Ll:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Cd:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Nl:case Ul:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new ne,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,T){return p?new OffscreenCanvas(E,T):jr("canvas")}function x(E,T,D){let L=1,R=le(E);if((R.width>D||R.height>D)&&(L=D/Math.max(R.width,R.height)),L<1){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let k=Math.floor(L*R.width),M=Math.floor(L*R.height);u===void 0&&(u=f(k,M));let I=T?f(k,M):u;return I.width=k,I.height=M,I.getContext("2d").drawImage(E,0,0,k,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+k+"x"+M+")."),I}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),E}return E}function m(E){return E.generateMipmaps}function g(E){r.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(E,T,D,L,R=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=T;if(T===r.RED&&(D===r.FLOAT&&(k=r.R32F),D===r.HALF_FLOAT&&(k=r.R16F),D===r.UNSIGNED_BYTE&&(k=r.R8)),T===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(k=r.R8UI),D===r.UNSIGNED_SHORT&&(k=r.R16UI),D===r.UNSIGNED_INT&&(k=r.R32UI),D===r.BYTE&&(k=r.R8I),D===r.SHORT&&(k=r.R16I),D===r.INT&&(k=r.R32I)),T===r.RG&&(D===r.FLOAT&&(k=r.RG32F),D===r.HALF_FLOAT&&(k=r.RG16F),D===r.UNSIGNED_BYTE&&(k=r.RG8)),T===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(k=r.RG8UI),D===r.UNSIGNED_SHORT&&(k=r.RG16UI),D===r.UNSIGNED_INT&&(k=r.RG32UI),D===r.BYTE&&(k=r.RG8I),D===r.SHORT&&(k=r.RG16I),D===r.INT&&(k=r.RG32I)),T===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(k=r.RGB8UI),D===r.UNSIGNED_SHORT&&(k=r.RGB16UI),D===r.UNSIGNED_INT&&(k=r.RGB32UI),D===r.BYTE&&(k=r.RGB8I),D===r.SHORT&&(k=r.RGB16I),D===r.INT&&(k=r.RGB32I)),T===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(k=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(k=r.RGBA16UI),D===r.UNSIGNED_INT&&(k=r.RGBA32UI),D===r.BYTE&&(k=r.RGBA8I),D===r.SHORT&&(k=r.RGBA16I),D===r.INT&&(k=r.RGBA32I)),T===r.RGB&&D===r.UNSIGNED_INT_5_9_9_9_REV&&(k=r.RGB9_E5),T===r.RGBA){let M=R?_a:Xe.getTransfer(L);D===r.FLOAT&&(k=r.RGBA32F),D===r.HALF_FLOAT&&(k=r.RGBA16F),D===r.UNSIGNED_BYTE&&(k=M===$e?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(k=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(k=r.RGB5_A1)}return k!==r.R16F&&k!==r.R32F&&k!==r.RG16F&&k!==r.RG32F&&k!==r.RGBA16F&&k!==r.RGBA32F||e.get("EXT_color_buffer_float"),k}function _(E,T){let D;return E?T===null||T===on||T===Gn?D=r.DEPTH24_STENCIL8:T===li?D=r.DEPTH32F_STENCIL8:T===Ps&&(D=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===on||T===Gn?D=r.DEPTH_COMPONENT24:T===li?D=r.DEPTH_COMPONENT32F:T===Ps&&(D=r.DEPTH_COMPONENT16),D}function A(E,T){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?T.mipmaps.length:1}function w(E){let T=E.target;T.removeEventListener("dispose",w),(function(D){let L=i.get(D);if(L.__webglInit===void 0)return;let R=D.source,k=d.get(R);if(k){let M=k[L.__cacheKey];M.usedTimes--,M.usedTimes===0&&P(D),Object.keys(k).length===0&&d.delete(R)}i.remove(D)})(T),T.isVideoTexture&&c.delete(T)}function C(E){let T=E.target;T.removeEventListener("dispose",C),(function(D){let L=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(L.__webglFramebuffer[k]))for(let M=0;M<L.__webglFramebuffer[k].length;M++)r.deleteFramebuffer(L.__webglFramebuffer[k][M]);else r.deleteFramebuffer(L.__webglFramebuffer[k]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[k])}else{if(Array.isArray(L.__webglFramebuffer))for(let k=0;k<L.__webglFramebuffer.length;k++)r.deleteFramebuffer(L.__webglFramebuffer[k]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let k=0;k<L.__webglColorRenderbuffer.length;k++)L.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[k]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let R=D.textures;for(let k=0,M=R.length;k<M;k++){let I=i.get(R[k]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(R[k])}i.remove(D)})(T)}function P(E){let T=i.get(E);r.deleteTexture(T.__webglTexture);let D=E.source;delete d.get(D)[T.__cacheKey],a.memory.textures--}let N=0;function F(E,T){let D=i.get(E);if(E.isVideoTexture&&(function(L){let R=a.render.frame;c.get(L)!==R&&(c.set(L,R),L.update())})(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){let L=E.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(L.complete!==!1)return void Y(D,E,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+T)}let z={[Is]:r.REPEAT,[ks]:r.CLAMP_TO_EDGE,[cl]:r.MIRRORED_REPEAT},H={[Kt]:r.NEAREST,[df]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[bo]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},X={[pf]:r.NEVER,[_f]:r.ALWAYS,[ff]:r.LESS,[gf]:r.LEQUAL,[mf]:r.EQUAL,[xf]:r.GEQUAL,[vf]:r.GREATER,[yf]:r.NOTEQUAL};function V(E,T){if(T.type!==li||e.has("OES_texture_float_linear")!==!1||T.magFilter!==Mi&&T.magFilter!==bo&&T.magFilter!==ar&&T.magFilter!==On&&T.minFilter!==Mi&&T.minFilter!==bo&&T.minFilter!==ar&&T.minFilter!==On||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,z[T.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,z[T.wrapT]),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,z[T.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,H[T.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Kt||T.minFilter!==ar&&T.minFilter!==On||T.type===li&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function q(E,T){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",w));let L=T.source,R=d.get(L);R===void 0&&(R={},d.set(L,R));let k=(function(M){let I=[];return I.push(M.wrapS),I.push(M.wrapT),I.push(M.wrapR||0),I.push(M.magFilter),I.push(M.minFilter),I.push(M.anisotropy),I.push(M.internalFormat),I.push(M.format),I.push(M.type),I.push(M.generateMipmaps),I.push(M.premultiplyAlpha),I.push(M.flipY),I.push(M.unpackAlignment),I.push(M.colorSpace),I.join()})(T);if(k!==E.__cacheKey){R[k]===void 0&&(R[k]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),R[k].usedTimes++;let M=R[E.__cacheKey];M!==void 0&&(R[E.__cacheKey].usedTimes--,M.usedTimes===0&&P(T)),E.__cacheKey=k,E.__webglTexture=R[k].texture}return D}function Y(E,T,D){let L=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(L=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(L=r.TEXTURE_3D);let R=q(E,T),k=T.source;t.bindTexture(L,E.__webglTexture,r.TEXTURE0+D);let M=i.get(k);if(k.version!==M.__version||R===!0){t.activeTexture(r.TEXTURE0+D);let I=Xe.getPrimaries(Xe.workingColorSpace),O=T.colorSpace===Un?null:Xe.getPrimaries(T.colorSpace),K=T.colorSpace===Un||I===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let U=x(T.image,!1,n.maxTextureSize);U=me(T,U);let Z=s.convert(T.format,T.colorSpace),$=s.convert(T.type),Q,ce=v(T.internalFormat,Z,$,T.colorSpace,T.isVideoTexture);V(L,T);let he=T.mipmaps,xe=T.isVideoTexture!==!0,Ae=M.__version===void 0||R===!0,Ge=k.dataReady,Be=A(T,U);if(T.isDepthTexture)ce=_(T.format===Wn,T.type),Ae&&(xe?t.texStorage2D(r.TEXTURE_2D,1,ce,U.width,U.height):t.texImage2D(r.TEXTURE_2D,0,ce,U.width,U.height,0,Z,$,null));else if(T.isDataTexture)if(he.length>0){xe&&Ae&&t.texStorage2D(r.TEXTURE_2D,Be,ce,he[0].width,he[0].height);for(let _e=0,qe=he.length;_e<qe;_e++)Q=he[_e],xe?Ge&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,$,Q.data):t.texImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Z,$,Q.data);T.generateMipmaps=!1}else xe?(Ae&&t.texStorage2D(r.TEXTURE_2D,Be,ce,U.width,U.height),Ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,U.width,U.height,Z,$,U.data)):t.texImage2D(r.TEXTURE_2D,0,ce,U.width,U.height,0,Z,$,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,ce,he[0].width,he[0].height,U.depth);for(let _e=0,qe=he.length;_e<qe;_e++)if(Q=he[_e],T.format!==Jt)if(Z!==null)if(xe){if(Ge)if(T.layerUpdates.size>0){let Qe=Ju(Q.width,Q.height,T.format,T.type);for(let rt of T.layerUpdates){let ge=Q.data.subarray(rt*Qe/Q.data.BYTES_PER_ELEMENT,(rt+1)*Qe/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,rt,Q.width,Q.height,1,Z,ge)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Q.width,Q.height,U.depth,Z,Q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,ce,Q.width,Q.height,U.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ge&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Q.width,Q.height,U.depth,Z,$,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,ce,Q.width,Q.height,U.depth,0,Z,$,Q.data)}else{xe&&Ae&&t.texStorage2D(r.TEXTURE_2D,Be,ce,he[0].width,he[0].height);for(let _e=0,qe=he.length;_e<qe;_e++)Q=he[_e],T.format!==Jt?Z!==null?xe?Ge&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ge&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,$,Q.data):t.texImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Z,$,Q.data)}else if(T.isDataArrayTexture)if(xe){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,ce,U.width,U.height,U.depth),Ge)if(T.layerUpdates.size>0){let _e=Ju(U.width,U.height,T.format,T.type);for(let qe of T.layerUpdates){let Qe=U.data.subarray(qe*_e/U.data.BYTES_PER_ELEMENT,(qe+1)*_e/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,qe,U.width,U.height,1,Z,$,Qe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,Z,$,U.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,U.width,U.height,U.depth,0,Z,$,U.data);else if(T.isData3DTexture)xe?(Ae&&t.texStorage3D(r.TEXTURE_3D,Be,ce,U.width,U.height,U.depth),Ge&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,Z,$,U.data)):t.texImage3D(r.TEXTURE_3D,0,ce,U.width,U.height,U.depth,0,Z,$,U.data);else if(T.isFramebufferTexture){if(Ae)if(xe)t.texStorage2D(r.TEXTURE_2D,Be,ce,U.width,U.height);else{let _e=U.width,qe=U.height;for(let Qe=0;Qe<Be;Qe++)t.texImage2D(r.TEXTURE_2D,Qe,ce,_e,qe,0,Z,$,null),_e>>=1,qe>>=1}}else if(he.length>0){if(xe&&Ae){let _e=le(he[0]);t.texStorage2D(r.TEXTURE_2D,Be,ce,_e.width,_e.height)}for(let _e=0,qe=he.length;_e<qe;_e++)Q=he[_e],xe?Ge&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Z,$,Q):t.texImage2D(r.TEXTURE_2D,_e,ce,Z,$,Q);T.generateMipmaps=!1}else if(xe){if(Ae){let _e=le(U);t.texStorage2D(r.TEXTURE_2D,Be,ce,_e.width,_e.height)}Ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,$,U)}else t.texImage2D(r.TEXTURE_2D,0,ce,Z,$,U);m(T)&&g(L),M.__version=k.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function ie(E,T,D,L,R,k){let M=s.convert(D.format,D.colorSpace),I=s.convert(D.type),O=v(D.internalFormat,M,I,D.colorSpace),K=i.get(T),U=i.get(D);if(U.__renderTarget=T,!K.__hasExternalTextures){let Z=Math.max(1,T.width>>k),$=Math.max(1,T.height>>k);R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?t.texImage3D(R,k,O,Z,$,T.depth,0,M,I,null):t.texImage2D(R,k,O,Z,$,0,M,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),pe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,L,R,U.__webglTexture,0,re(T)):(R===r.TEXTURE_2D||R>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,L,R,U.__webglTexture,k),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(E,T,D){if(r.bindRenderbuffer(r.RENDERBUFFER,E),T.depthBuffer){let L=T.depthTexture,R=L&&L.isDepthTexture?L.type:null,k=_(T.stencilBuffer,R),M=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=re(T);pe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,k,T.width,T.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,k,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,k,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,E)}else{let L=T.textures;for(let R=0;R<L.length;R++){let k=L[R],M=s.convert(k.format,k.colorSpace),I=s.convert(k.type),O=v(k.internalFormat,M,I,k.colorSpace),K=re(T);D&&pe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,O,T.width,T.height):pe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,O,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,O,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(E){let T=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==E.depthTexture){let L=E.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),L){let R=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,L.removeEventListener("dispose",R)};L.addEventListener("dispose",R),T.__depthDisposeCallback=R}T.__boundDepthTexture=L}if(E.depthTexture&&!T.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=i.get(R.depthTexture);k.__renderTarget=R,k.__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);let M=k.__webglTexture,I=re(R);if(R.depthTexture.format===Ls)pe(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0);else{if(R.depthTexture.format!==Wn)throw new Error("Unknown depthTexture format");pe(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0)}})(T.__webglFramebuffer,E)}else if(D){T.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[L]),T.__webglDepthbuffer[L]===void 0)T.__webglDepthbuffer[L]=r.createRenderbuffer(),ee(T.__webglDepthbuffer[L],E,!1);else{let R=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer[L];r.bindRenderbuffer(r.RENDERBUFFER,k),r.framebufferRenderbuffer(r.FRAMEBUFFER,R,r.RENDERBUFFER,k)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ee(T.__webglDepthbuffer,E,!1);else{let L=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,R),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,R)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ve=[],te=[];function re(E){return Math.min(n.maxSamples,E.samples)}function pe(E){let T=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(E,T){let D=E.colorSpace,L=E.format,R=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Qn&&D!==Un&&(Xe.getTransfer(D)===$e?L===Jt&&R===Oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),T}function le(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=function(){let E=N;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),N+=1,E},this.resetTextureUnits=function(){N=0},this.setTexture2D=F,this.setTexture2DArray=function(E,T){let D=i.get(E);E.version>0&&D.__version!==E.version?Y(D,E,T):t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(E,T){let D=i.get(E);E.version>0&&D.__version!==E.version?Y(D,E,T):t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(E,T){let D=i.get(E);E.version>0&&D.__version!==E.version?(function(L,R,k){if(R.image.length!==6)return;let M=q(L,R),I=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+k);let O=i.get(I);if(I.version!==O.__version||M===!0){t.activeTexture(r.TEXTURE0+k);let K=Xe.getPrimaries(Xe.workingColorSpace),U=R.colorSpace===Un?null:Xe.getPrimaries(R.colorSpace),Z=R.colorSpace===Un||K===U?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let $=R.isCompressedTexture||R.image[0].isCompressedTexture,Q=R.image[0]&&R.image[0].isDataTexture,ce=[];for(let ge=0;ge<6;ge++)ce[ge]=$||Q?Q?R.image[ge].image:R.image[ge]:x(R.image[ge],!0,n.maxCubemapSize),ce[ge]=me(R,ce[ge]);let he=ce[0],xe=s.convert(R.format,R.colorSpace),Ae=s.convert(R.type),Ge=v(R.internalFormat,xe,Ae,R.colorSpace),Be=R.isVideoTexture!==!0,_e=O.__version===void 0||M===!0,qe=I.dataReady,Qe,rt=A(R,he);if(V(r.TEXTURE_CUBE_MAP,R),$){Be&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ge,he.width,he.height);for(let ge=0;ge<6;ge++){Qe=ce[ge].mipmaps;for(let ze=0;ze<Qe.length;ze++){let Je=Qe[ze];R.format!==Jt?xe!==null?Be?qe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Je.width,Je.height,xe,Je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Ge,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?qe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Je.width,Je.height,xe,Ae,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Ge,Je.width,Je.height,0,xe,Ae,Je.data)}}}else{if(Qe=R.mipmaps,Be&&_e){Qe.length>0&&rt++;let ge=le(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ge,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Q){Be?qe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce[ge].width,ce[ge].height,xe,Ae,ce[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,ce[ge].width,ce[ge].height,0,xe,Ae,ce[ge].data);for(let ze=0;ze<Qe.length;ze++){let Je=Qe[ze].image[ge].image;Be?qe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,Je.width,Je.height,xe,Ae,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Ge,Je.width,Je.height,0,xe,Ae,Je.data)}}else{Be?qe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,xe,Ae,ce[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ge,xe,Ae,ce[ge]);for(let ze=0;ze<Qe.length;ze++){let Je=Qe[ze];Be?qe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,xe,Ae,Je.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Ge,xe,Ae,Je.image[ge])}}}m(R)&&g(r.TEXTURE_CUBE_MAP),O.__version=I.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version})(D,E,T):t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(E,T,D){let L=i.get(E);T!==void 0&&ie(L.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&fe(E)},this.setupRenderTarget=function(E){let T=E.texture,D=i.get(E),L=i.get(T);E.addEventListener("dispose",C);let R=E.textures,k=E.isWebGLCubeRenderTarget===!0,M=R.length>1;if(M||(L.__webglTexture===void 0&&(L.__webglTexture=r.createTexture()),L.__version=T.version,a.memory.textures++),k){D.__webglFramebuffer=[];for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0){D.__webglFramebuffer[I]=[];for(let O=0;O<T.mipmaps.length;O++)D.__webglFramebuffer[I][O]=r.createFramebuffer()}else D.__webglFramebuffer[I]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){D.__webglFramebuffer=[];for(let I=0;I<T.mipmaps.length;I++)D.__webglFramebuffer[I]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(M)for(let I=0,O=R.length;I<O;I++){let K=i.get(R[I]);K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&pe(E)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let I=0;I<R.length;I++){let O=R[I];D.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[I]);let K=s.convert(O.format,O.colorSpace),U=s.convert(O.type),Z=v(O.internalFormat,K,U,O.colorSpace,E.isXRRenderTarget===!0),$=re(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,D.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(k){t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture),V(r.TEXTURE_CUBE_MAP,T);for(let I=0;I<6;I++)if(T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)ie(D.__webglFramebuffer[I][O],E,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,O);else ie(D.__webglFramebuffer[I],E,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);m(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let I=0,O=R.length;I<O;I++){let K=R[I],U=i.get(K);t.bindTexture(r.TEXTURE_2D,U.__webglTexture),V(r.TEXTURE_2D,K),ie(D.__webglFramebuffer,E,K,r.COLOR_ATTACHMENT0+I,r.TEXTURE_2D,0),m(K)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(I=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,L.__webglTexture),V(I,T),T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)ie(D.__webglFramebuffer[O],E,T,r.COLOR_ATTACHMENT0,I,O);else ie(D.__webglFramebuffer,E,T,r.COLOR_ATTACHMENT0,I,0);m(T)&&g(I),t.unbindTexture()}E.depthBuffer&&fe(E)},this.updateRenderTargetMipmap=function(E){let T=E.textures;for(let D=0,L=T.length;D<L;D++){let R=T[D];if(m(R)){let k=y(E),M=i.get(R).__webglTexture;t.bindTexture(k,M),g(k),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(E.samples>0){if(pe(E)===!1){let T=E.textures,D=E.width,L=E.height,R=r.COLOR_BUFFER_BIT,k=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,M=i.get(E),I=T.length>1;if(I)for(let O=0;O<T.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let O=0;O<T.length;O++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(R|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(R|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,M.__webglColorRenderbuffer[O]);let K=i.get(T[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,D,L,0,0,D,L,R,r.NEAREST),l===!0&&(ve.length=0,te.length=0,ve.push(r.COLOR_ATTACHMENT0+O),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ve.push(k),te.push(k),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let O=0;O<T.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,M.__webglColorRenderbuffer[O]);let K=i.get(T[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,K,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let T=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=pe}function lg(r,e){return{convert:function(t,i=""){let n,s=Xe.getTransfer(i);if(t===Oi)return r.UNSIGNED_BYTE;if(t===Fh)return r.UNSIGNED_SHORT_4_4_4_4;if(t===zh)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Md)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===_d)return r.BYTE;if(t===bd)return r.SHORT;if(t===Ps)return r.UNSIGNED_SHORT;if(t===Bh)return r.INT;if(t===on)return r.UNSIGNED_INT;if(t===li)return r.FLOAT;if(t===Xs)return r.HALF_FLOAT;if(t===wd)return r.ALPHA;if(t===Sd)return r.RGB;if(t===Jt)return r.RGBA;if(t===Td)return r.LUMINANCE;if(t===Ed)return r.LUMINANCE_ALPHA;if(t===Ls)return r.DEPTH_COMPONENT;if(t===Wn)return r.DEPTH_STENCIL;if(t===Ad)return r.RED;if(t===Hh)return r.RED_INTEGER;if(t===Rd)return r.RG;if(t===Vh)return r.RG_INTEGER;if(t===Gh)return r.RGBA_INTEGER;if(t===Br||t===Fr||t===zr||t===Hr)if(s===$e){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===Br)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Fr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===zr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Hr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===Br)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Fr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===zr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Hr)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===ul||t===dl||t===pl||t===fl){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===ul)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===dl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===pl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===fl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ml||t===gl||t===vl){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===ml||t===gl)return s===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===vl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===yl||t===xl||t===_l||t===bl||t===Ml||t===wl||t===Sl||t===Tl||t===El||t===Al||t===Rl||t===Cl||t===Il||t===kl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===yl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===xl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===_l)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===bl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ml)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Sl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Tl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===El)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Al)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Rl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Cl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Il)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===kl)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Vr||t===Pl||t===Ll){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===Vr)return s===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Pl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ll)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Cd||t===Dl||t===Nl||t===Ul){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===Vr)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Dl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Nl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ul)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Gn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Ql=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(h,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,f=.005;h.inputState.pinching&&d>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Ct;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ci({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Bi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,f=null,x=new eh,m=t.getContextAttributes(),g=null,y=null,v=[],_=[],A=new ne,w=null,C=new wt;C.viewport=new Ye;let P=new wt;P.viewport=new Ye;let N=[C,P],F=new Ql,z=null,H=null;function X(te){let re=_.indexOf(te.inputSource);if(re===-1)return;let pe=v[re];pe!==void 0&&(pe.update(te.inputSource,te.frame,h||a),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",q);for(let te=0;te<v.length;te++){let re=_[te];re!==null&&(_[te]=null,v[te].disconnect(re))}z=null,H=null,x.reset(),e.setRenderTarget(g),p=null,d=null,u=null,n=null,y=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}function q(te){for(let re=0;re<te.removed.length;re++){let pe=te.removed[re],me=_.indexOf(pe);me>=0&&(_[me]=null,v[me].disconnect(pe))}for(let re=0;re<te.added.length;re++){let pe=te.added[re],me=_.indexOf(pe);if(me===-1){for(let E=0;E<v.length;E++){if(E>=_.length){_.push(pe),me=E;break}if(_[E]===null){_[E]=pe,me=E;break}}if(me===-1)break}let le=v[me];le&&le.connect(pe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=v[te];return re===void 0&&(re=new As,v[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=v[te];return re===void 0&&(re=new As,v[te]=re),re.getGripSpace()},this.getHand=function(te){let re=v[te];return re===void 0&&(re=new As,v[te]=re),re.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(te){if(n=te,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",V),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),n.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,re),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Si(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,pe=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Wn:Ls,pe=m.stencil?Gn:on);let le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(le),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Si(d.textureWidth,d.textureHeight,{format:Jt,type:Oi,depthTexture:new Qr(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),ve.setContext(n),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let Y=new b,ie=new b;function ee(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(n===null)return;let re=te.near,pe=te.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),F.near=P.near=C.near=re,F.far=P.far=C.far=pe,z===F.near&&H===F.far||(n.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,H=F.far),C.layers.mask=2|te.layers.mask,P.layers.mask=4|te.layers.mask,F.layers.mask=C.layers.mask|P.layers.mask;let me=te.parent,le=F.cameras;ee(F,me);for(let E=0;E<le.length;E++)ee(le[E],me);le.length===2?(function(E,T,D){Y.setFromMatrixPosition(T.matrixWorld),ie.setFromMatrixPosition(D.matrixWorld);let L=Y.distanceTo(ie),R=T.projectionMatrix.elements,k=D.projectionMatrix.elements,M=R[14]/(R[10]-1),I=R[14]/(R[10]+1),O=(R[9]+1)/R[5],K=(R[9]-1)/R[5],U=(R[8]-1)/R[0],Z=(k[8]+1)/k[0],$=M*U,Q=M*Z,ce=L/(-U+Z),he=ce*-U;if(T.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(he),E.translateZ(ce),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),R[10]===-1)E.projectionMatrix.copy(T.projectionMatrix),E.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let xe=M+ce,Ae=I+ce,Ge=$-he,Be=Q+(L-he),_e=O*I/Ae*xe,qe=K*I/Ae*xe;E.projectionMatrix.makePerspective(Ge,Be,_e,qe,xe,Ae),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}})(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),(function(E,T,D){D===null?E.matrix.copy(T.matrixWorld):(E.matrix.copy(D.matrixWorld),E.matrix.invert(),E.matrix.multiply(T.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(T.projectionMatrix),E.projectionMatrixInverse.copy(T.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*Fl*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)})(te,F,me)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)};let fe=null,ve=new Ld;ve.setAnimationLoop((function(te,re){if(c=re.getViewerPose(h||a),f=re,c!==null){let pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let me=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let E=0;E<pe.length;E++){let T=pe[E],D=null;if(p!==null)D=p.getViewport(T);else{let R=u.getViewSubImage(d,T);D=R.viewport,E===0&&(e.setRenderTargetTextures(y,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(y))}let L=N[E];L===void 0&&(L=new wt,L.layers.enable(E),L.viewport=new Ye,N[E]=L),L.matrix.fromArray(T.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(T.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(D.x,D.y,D.width,D.height),E===0&&(F.matrix.copy(L.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(L)}let le=n.enabledFeatures;if(le&&le.includes("depth-sensing")){let E=u.getDepthInformation(pe[0]);E&&E.isValid&&E.texture&&x.init(e,E,n.renderState)}}for(let pe=0;pe<v.length;pe++){let me=_[pe],le=v[pe];me!==null&&le!==void 0&&le.update(me,re,h||a)}fe&&fe(te,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null})),this.setAnimationLoop=function(te){fe=te},this.dispose=function(){}}},tn=new zt,cg=new Se;function ug(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===1&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===1&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,tn.copy(l),tn.x*=-1,tn.y*=-1,tn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),n.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(tn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Pd(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===1&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(h,c){c.matcap&&(h.matcap.value=c.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(h,c){let u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale})(n,s)):s.isPointsMaterial?(function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function dg(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let x=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=f[m];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return f[m]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function h(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(m){let g=m.uniforms,y=0,v=16;for(let A=0,w=g.length;A<w;A++){let C=Array.isArray(g[A])?g[A]:[g[A]];for(let P=0,N=C.length;P<N;P++){let F=C[P],z=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=z.length;H<X;H++){let V=h(z[H]),q=y%v,Y=q%V.boundary,ie=q+Y;y+=Y,ie!==0&&v-ie<V.storage&&(y+=v-ie),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=V.storage}}}let _=y%v;_>0&&(y+=v-_),m.__size=y,m.__cache={}})(u),p=(function(m){let g=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let y=r.createBuffer(),v=m.__size,_=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,v,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,y),y})(u),n[u.id]=p,u.addEventListener("dispose",c));let f=d.program;i.updateUBOMapping(u,f);let x=e.render.frame;s[u.id]!==x&&((function(m){let g=n[m.id],y=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let _=0,A=y.length;_<A;_++){let w=Array.isArray(y[_])?y[_]:[y[_]];for(let C=0,P=w.length;C<P;C++){let N=w[C];if(l(N,_,C,v)===!0){let F=N.__offset,z=Array.isArray(N.value)?N.value:[N.value],H=0;for(let X=0;X<z.length;X++){let V=z[X],q=h(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+H,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var ea=class{constructor(e={}){let{canvas:t=Mf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this.toneMapping=0,this.toneMappingExposure=1;let _=this,A=!1,w=0,C=0,P=null,N=-1,F=null,z=new Ye,H=new Ye,X=null,V=new Re(0),q=0,Y=t.width,ie=t.height,ee=1,fe=null,ve=null,te=new Ye(0,0,Y,ie),re=new Ye(0,0,Y,ie),pe=!1,me=new Yn,le=!1,E=!1,T=new Se,D=new Se,L=new b,R=new Ye,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function I(){return P===null?ee:1}let O,K,U,Z,$,Q,ce,he,xe,Ae,Ge,Be,_e,qe,Qe,rt,ge,ze,Je,vn,nr,Wt,si,ji,B=i;function ps(S,G){return t.getContext(S,G)}try{let S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Hc,!1),t.addEventListener("webglcontextrestored",Vc,!1),t.addEventListener("webglcontextcreationerror",Gc,!1),B===null){let G="webgl2";if(B=ps(G,S),B===null)throw ps(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function zc(){O=new qf(B),O.init(),Wt=new lg(B,O),K=new Gf(B,O,e,Wt),U=new ag(B,O),K.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),Z=new Zf(B),$=new Zm,Q=new og(B,O,U,$,K,Wt,Z),ce=new Xf(_),he=new jf(_),xe=new Bf(B),si=new Hf(B,xe),Ae=new Yf(B,xe,Z,si),Ge=new Kf(B,Ae,xe,Z),Je=new Jf(B,K,Q),rt=new Wf($),Be=new $m(_,ce,he,O,K,si,rt),_e=new ug(_,$),qe=new Km,Qe=new ng(O),ze=new zf(_,ce,he,U,Ge,p,l),ge=new sg(_,Ge,K),ji=new dg(B,Z,K,U),vn=new Vf(B,O,Z),nr=new $f(B,O,Z),Z.programs=Be.programs,_.capabilities=K,_.extensions=O,_.properties=$,_.renderLists=qe,_.shadowMap=ge,_.state=U,_.info=Z}zc();let gt=new th(_,B);function Hc(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Vc(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=Z.autoReset,G=ge.enabled,j=ge.autoUpdate,J=ge.needsUpdate,W=ge.type;zc(),Z.autoReset=S,ge.enabled=G,ge.autoUpdate=j,ge.needsUpdate=J,ge.type=W}function Gc(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Wc(S){let G=S.target;G.removeEventListener("dispose",Wc),(function(j){(function(J){let W=$.get(J).programs;W!==void 0&&(W.forEach((function(se){Be.releaseProgram(se)})),J.isShaderMaterial&&Be.releaseShaderCache(J))})(j),$.remove(j)})(G)}function Xc(S,G,j){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,rr(S,G,j),S.side=0,S.needsUpdate=!0,rr(S,G,j),S.side=2):rr(S,G,j)}this.xr=gt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=O.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=O.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(Y,ie,!1))},this.getSize=function(S){return S.set(Y,ie)},this.setSize=function(S,G,j=!0){gt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Y=S,ie=G,t.width=Math.floor(S*ee),t.height=Math.floor(G*ee),j===!0&&(t.style.width=S+"px",t.style.height=G+"px"),this.setViewport(0,0,S,G))},this.getDrawingBufferSize=function(S){return S.set(Y*ee,ie*ee).floor()},this.setDrawingBufferSize=function(S,G,j){Y=S,ie=G,ee=j,t.width=Math.floor(S*j),t.height=Math.floor(G*j),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(z)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,G,j,J){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,G,j,J),U.viewport(z.copy(te).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,G,j,J){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,G,j,J),U.scissor(H.copy(re).multiplyScalar(ee).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(S){U.setScissorTest(pe=S)},this.setOpaqueSort=function(S){fe=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(S=!0,G=!0,j=!0){let J=0;if(S){let W=!1;if(P!==null){let se=P.texture.format;W=se===Gh||se===Vh||se===Hh}if(W){let se=P.texture.type,ue=se===Oi||se===on||se===Ps||se===Gn||se===Fh||se===zh,ye=ze.getClearColor(),we=ze.getClearAlpha(),ke=ye.r,Le=ye.g,Ee=ye.b;ue?(f[0]=ke,f[1]=Le,f[2]=Ee,f[3]=we,B.clearBufferuiv(B.COLOR,0,f)):(x[0]=ke,x[1]=Le,x[2]=Ee,x[3]=we,B.clearBufferiv(B.COLOR,0,x))}else J|=B.COLOR_BUFFER_BIT}G&&(J|=B.DEPTH_BUFFER_BIT),j&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Hc,!1),t.removeEventListener("webglcontextrestored",Vc,!1),t.removeEventListener("webglcontextcreationerror",Gc,!1),qe.dispose(),Qe.dispose(),$.dispose(),ce.dispose(),he.dispose(),Ge.dispose(),si.dispose(),ji.dispose(),Be.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",jc),gt.removeEventListener("sessionend",qc),qi.stop()},this.renderBufferDirect=function(S,G,j,J,W,se){G===null&&(G=k);let ue=W.isMesh&&W.matrixWorld.determinant()<0,ye=(function(Ve,Tt,xt,Oe,Ce){Tt.isScene!==!0&&(Tt=k),Q.resetTextureUnits();let Xt=Tt.fog,mo=Oe.isMeshStandardMaterial?Tt.environment:null,fs=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qn,yn=(Oe.isMeshStandardMaterial?he:ce).get(Oe.envMap||mo),go=Oe.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,vo=!!xt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),yo=!!xt.morphAttributes.position,Ri=!!xt.morphAttributes.normal,Up=!!xt.morphAttributes.color,Qc=0;Oe.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(Qc=_.toneMapping));let eu=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Op=eu!==void 0?eu.length:0,He=$.get(Oe),Bp=g.state.lights;if(le===!0&&(E===!0||Ve!==F)){let Bt=Ve===F&&Oe.id===N;rt.setState(Oe,Ve,Bt)}let jt=!1;Oe.version===He.__version?He.needsLights&&He.lightsStateVersion!==Bp.state.version||He.outputColorSpace!==fs||Ce.isBatchedMesh&&He.batching===!1?jt=!0:Ce.isBatchedMesh||He.batching!==!0?Ce.isBatchedMesh&&He.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&He.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&He.instancing===!1?jt=!0:Ce.isInstancedMesh||He.instancing!==!0?Ce.isSkinnedMesh&&He.skinning===!1?jt=!0:Ce.isSkinnedMesh||He.skinning!==!0?Ce.isInstancedMesh&&He.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&He.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&He.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&He.instancingMorph===!1&&Ce.morphTexture!==null||He.envMap!==yn||Oe.fog===!0&&He.fog!==Xt?jt=!0:He.numClippingPlanes===void 0||He.numClippingPlanes===rt.numPlanes&&He.numIntersection===rt.numIntersection?(He.vertexAlphas!==go||He.vertexTangents!==vo||He.morphTargets!==yo||He.morphNormals!==Ri||He.morphColors!==Up||He.toneMapping!==Qc||He.morphTargetsCount!==Op)&&(jt=!0):jt=!0:jt=!0:jt=!0:jt=!0:(jt=!0,He.__version=Oe.version);let Yi=He.currentProgram;jt===!0&&(Yi=rr(Oe,Tt,Ce));let tu=!1,ms=!1,xo=!1,ct=Yi.getUniforms(),Ci=He.uniforms;if(U.useProgram(Yi.program)&&(tu=!0,ms=!0,xo=!0),Oe.id!==N&&(N=Oe.id,ms=!0),tu||F!==Ve){U.buffers.depth.getReversed()?(T.copy(Ve.projectionMatrix),(function($i){let nt=$i.elements;nt[2]=.5*nt[2]+.5*nt[3],nt[6]=.5*nt[6]+.5*nt[7],nt[10]=.5*nt[10]+.5*nt[11],nt[14]=.5*nt[14]+.5*nt[15]})(T),(function($i){let nt=$i.elements;nt[11]===-1?(nt[10]=-nt[10]-1,nt[14]=-nt[14]):(nt[10]=-nt[10],nt[14]=1-nt[14])})(T),ct.setValue(B,"projectionMatrix",T)):ct.setValue(B,"projectionMatrix",Ve.projectionMatrix),ct.setValue(B,"viewMatrix",Ve.matrixWorldInverse);let Bt=ct.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,L.setFromMatrixPosition(Ve.matrixWorld)),K.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&ct.setValue(B,"isOrthographic",Ve.isOrthographicCamera===!0),F!==Ve&&(F=Ve,ms=!0,xo=!0)}if(Ce.isSkinnedMesh){ct.setOptional(B,Ce,"bindMatrix"),ct.setOptional(B,Ce,"bindMatrixInverse");let Bt=Ce.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ct.setValue(B,"boneTexture",Bt.boneTexture,Q))}Ce.isBatchedMesh&&(ct.setOptional(B,Ce,"batchingTexture"),ct.setValue(B,"batchingTexture",Ce._matricesTexture,Q),ct.setOptional(B,Ce,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",Ce._indirectTexture,Q),ct.setOptional(B,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",Ce._colorsTexture,Q));let _o=xt.morphAttributes;_o.position===void 0&&_o.normal===void 0&&_o.color===void 0||Je.update(Ce,xt,Yi),(ms||He.receiveShadow!==Ce.receiveShadow)&&(He.receiveShadow=Ce.receiveShadow,ct.setValue(B,"receiveShadow",Ce.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(Ci.envMap.value=yn,Ci.flipEnvMap.value=yn.isCubeTexture&&yn.isRenderTargetTexture===!1?-1:1),Oe.isMeshStandardMaterial&&Oe.envMap===null&&Tt.environment!==null&&(Ci.envMapIntensity.value=Tt.environmentIntensity),ms&&(ct.setValue(B,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&(qt=xo,(ri=Ci).ambientLightColor.needsUpdate=qt,ri.lightProbe.needsUpdate=qt,ri.directionalLights.needsUpdate=qt,ri.directionalLightShadows.needsUpdate=qt,ri.pointLights.needsUpdate=qt,ri.pointLightShadows.needsUpdate=qt,ri.spotLights.needsUpdate=qt,ri.spotLightShadows.needsUpdate=qt,ri.rectAreaLights.needsUpdate=qt,ri.hemisphereLights.needsUpdate=qt),Xt&&Oe.fog===!0&&_e.refreshFogUniforms(Ci,Xt),_e.refreshMaterialUniforms(Ci,Oe,ee,ie,g.state.transmissionRenderTarget[Ve.id]),zn.upload(B,Jc(He),Ci,Q));var ri,qt;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(zn.upload(B,Jc(He),Ci,Q),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&ct.setValue(B,"center",Ce.center),ct.setValue(B,"modelViewMatrix",Ce.modelViewMatrix),ct.setValue(B,"normalMatrix",Ce.normalMatrix),ct.setValue(B,"modelMatrix",Ce.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let Bt=Oe.uniformsGroups;for(let $i=0,nt=Bt.length;$i<nt;$i++){let iu=Bt[$i];ji.update(iu,Yi),ji.bind(iu,Yi)}}return Yi})(S,G,j,J,W);U.setMaterial(J,ue);let we=j.index,ke=1;if(J.wireframe===!0){if(we=Ae.getWireframeAttribute(j),we===void 0)return;ke=2}let Le=j.drawRange,Ee=j.attributes.position,Fe=Le.start*ke,ht=(Le.start+Le.count)*ke;se!==null&&(Fe=Math.max(Fe,se.start*ke),ht=Math.min(ht,(se.start+se.count)*ke)),we!==null?(Fe=Math.max(Fe,0),ht=Math.min(ht,we.count)):Ee!=null&&(Fe=Math.max(Fe,0),ht=Math.min(ht,Ee.count));let et=ht-Fe;if(et<0||et===1/0)return;let pt;si.setup(W,J,ye,j,we);let it=vn;if(we!==null&&(pt=xe.get(we),it=nr,it.setIndex(pt)),W.isMesh)J.wireframe===!0?(U.setLineWidth(J.wireframeLinewidth*I()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(W.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),U.setLineWidth(Ve*I()),W.isLineSegments?it.setMode(B.LINES):W.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else W.isPoints?it.setMode(B.POINTS):W.isSprite&&it.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)it.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ve=W._multiDrawStarts,Tt=W._multiDrawCounts,xt=W._multiDrawCount,Oe=we?xe.get(we).bytesPerElement:1,Ce=$.get(J).currentProgram.getUniforms();for(let Xt=0;Xt<xt;Xt++)Ce.setValue(B,"_gl_DrawID",Xt),it.render(Ve[Xt]/Oe,Tt[Xt])}else if(W.isInstancedMesh)it.renderInstances(Fe,et,W.count);else if(j.isInstancedBufferGeometry){let Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,Ve);it.renderInstances(Fe,et,Tt)}else it.render(Fe,et)},this.compile=function(S,G,j=null){j===null&&(j=S),g=Qe.get(j),g.init(G),v.push(g),j.traverseVisible((function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),S!==j&&S.traverseVisible((function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();let J=new Set;return S.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let se=W.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){let ye=se[ue];Xc(ye,j,W),J.add(ye)}else Xc(se,j,W),J.add(se)})),v.pop(),g=null,J},this.compileAsync=function(S,G,j=null){let J=this.compile(S,G,j);return new Promise((W=>{function se(){J.forEach((function(ue){$.get(ue).currentProgram.isReady()&&J.delete(ue)})),J.size!==0?setTimeout(se,10):W(S)}O.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)}))};let po=null;function jc(){qi.stop()}function qc(){qi.start()}let qi=new Ld;function fo(S,G,j,J){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){J&&R.setFromMatrixPosition(S.matrixWorld).applyMatrix4(D);let se=Ge.update(S),ue=S.material;ue.visible&&m.push(S,se,ue,j,R.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){let se=Ge.update(S),ue=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),R.copy(S.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),R.copy(se.boundingSphere.center)),R.applyMatrix4(S.matrixWorld).applyMatrix4(D)),Array.isArray(ue)){let ye=se.groups;for(let we=0,ke=ye.length;we<ke;we++){let Le=ye[we],Ee=ue[Le.materialIndex];Ee&&Ee.visible&&m.push(S,se,Ee,j,R.z,Le)}}else ue.visible&&m.push(S,se,ue,j,R.z,null)}}let W=S.children;for(let se=0,ue=W.length;se<ue;se++)fo(W[se],G,j,J)}function Yc(S,G,j,J){let W=S.opaque,se=S.transmissive,ue=S.transparent;g.setupLightsView(j),le===!0&&rt.setGlobalState(_.clippingPlanes,j),J&&U.viewport(z.copy(J)),W.length>0&&sr(W,G,j),se.length>0&&sr(se,G,j),ue.length>0&&sr(ue,G,j),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function $c(S,G,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Si(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Xs:Oi,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let W=g.state.transmissionRenderTarget[J.id],se=J.viewport||z;W.setSize(se.z,se.w);let ue=_.getRenderTarget();_.setRenderTarget(W),_.getClearColor(V),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),M&&ze.render(j);let ye=_.toneMapping;_.toneMapping=0;let we=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),le===!0&&rt.setGlobalState(_.clippingPlanes,J),sr(S,j,J),Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W),O.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,Ee=G.length;Le<Ee;Le++){let Fe=G[Le],ht=Fe.object,et=Fe.geometry,pt=Fe.material,it=Fe.group;if(pt.side===2&&ht.layers.test(J.layers)){let Ve=pt.side;pt.side=1,pt.needsUpdate=!0,Zc(ht,j,J,et,pt,it),pt.side=Ve,pt.needsUpdate=!0,ke=!0}}ke===!0&&(Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W))}_.setRenderTarget(ue),_.setClearColor(V,q),we!==void 0&&(J.viewport=we),_.toneMapping=ye}function sr(S,G,j){let J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,se=S.length;W<se;W++){let ue=S[W],ye=ue.object,we=ue.geometry,ke=J===null?ue.material:J,Le=ue.group;ye.layers.test(j.layers)&&Zc(ye,G,j,we,ke,Le)}}function Zc(S,G,j,J,W,se){S.onBeforeRender(_,G,j,J,W,se),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(_,G,j,J,S,se),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,_.renderBufferDirect(j,G,J,W,S,se),W.side=0,W.needsUpdate=!0,_.renderBufferDirect(j,G,J,W,S,se),W.side=2):_.renderBufferDirect(j,G,J,W,S,se),S.onAfterRender(_,G,j,J,W,se)}function rr(S,G,j){G.isScene!==!0&&(G=k);let J=$.get(S),W=g.state.lights,se=g.state.shadowsArray,ue=W.state.version,ye=Be.getParameters(S,W.state,se,G,j),we=Be.getProgramCacheKey(ye),ke=J.programs;J.environment=S.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(S.isMeshStandardMaterial?he:ce).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Wc),ke=new Map,J.programs=ke);let Le=ke.get(we);if(Le!==void 0){if(J.currentProgram===Le&&J.lightsStateVersion===ue)return Kc(S,ye),Le}else ye.uniforms=Be.getUniforms(S),S.onBeforeCompile(ye,_),Le=Be.acquireProgram(ye,we),ke.set(we,Le),J.uniforms=ye.uniforms;let Ee=J.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(Ee.clippingPlanes=rt.uniform),Kc(S,ye),J.needsLights=(function(Fe){return Fe.isMeshLambertMaterial||Fe.isMeshToonMaterial||Fe.isMeshPhongMaterial||Fe.isMeshStandardMaterial||Fe.isShadowMaterial||Fe.isShaderMaterial&&Fe.lights===!0})(S),J.lightsStateVersion=ue,J.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.directionalShadowMap.value=W.state.directionalShadowMap,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotShadowMap.value=W.state.spotShadowMap,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMap.value=W.state.pointShadowMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Le,J.uniformsList=null,Le}function Jc(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=zn.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Kc(S,G){let j=$.get(S);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}qi.setAnimationLoop((function(S){po&&po(S)})),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){po=S,gt.setAnimationLoop(S),S===null?qi.stop():qi.start()},gt.addEventListener("sessionstart",jc),gt.addEventListener("sessionend",qc),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(G),G=gt.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,G,P),g=Qe.get(S,v.length),g.init(G),v.push(g),D.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),me.setFromProjectionMatrix(D),E=this.localClippingEnabled,le=rt.init(this.clippingPlanes,E),m=qe.get(S,y.length),m.init(),y.push(m),gt.enabled===!0&&gt.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&fo(se,G,-1/0,_.sortObjects)}fo(S,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(fe,ve),M=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,M&&ze.addToRenderList(m,S),this.info.render.frame++,le===!0&&rt.beginShadows();let j=g.state.shadowsArray;ge.render(j,S,G),le===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,W=m.transmissive;if(g.setupLights(),G.isArrayCamera){let se=G.cameras;if(W.length>0)for(let ue=0,ye=se.length;ue<ye;ue++)$c(J,W,S,se[ue]);M&&ze.render(S);for(let ue=0,ye=se.length;ue<ye;ue++){let we=se[ue];Yc(m,S,we,we.viewport)}}else W.length>0&&$c(J,W,S,G),M&&ze.render(S),Yc(m,S,G);P!==null&&(Q.updateMultisampleRenderTarget(P),Q.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(_,S,G),si.resetDefaultState(),N=-1,F=null,v.pop(),v.length>0?(g=v[v.length-1],le===!0&&rt.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,y.pop(),m=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,G,j){$.get(S.texture).__webglTexture=G,$.get(S.depthTexture).__webglTexture=j;let J=$.get(S);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,G){let j=$.get(S);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,j=0){P=S,w=G,C=j;let J=!0,W=null,se=!1,ue=!1;if(S){let ye=$.get(S);if(ye.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(ye.__hasExternalTextures)Q.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Le=S.depthTexture;if(ye.__boundDepthTexture!==Le){if(Le!==null&&$.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ue=!0);let ke=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=Array.isArray(ke[G])?ke[G][j]:ke[G],se=!0):W=S.samples>0&&Q.useMultisampledRTT(S)===!1?$.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?ke[j]:ke,z.copy(S.viewport),H.copy(S.scissor),X=S.scissorTest}else z.copy(te).multiplyScalar(ee).floor(),H.copy(re).multiplyScalar(ee).floor(),X=pe;if(U.bindFramebuffer(B.FRAMEBUFFER,W)&&J&&U.drawBuffers(S,W),U.viewport(z),U.scissor(H),U.setScissorTest(X),se){let ye=$.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,j)}else if(ue){let ye=$.get(S.texture),we=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ye.__webglTexture,j||0,we)}N=-1},this.readRenderTargetPixels=function(S,G,j,J,W,se,ue){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){U.bindFramebuffer(B.FRAMEBUFFER,ye);try{let we=S.texture,ke=we.format,Le=we.type;if(!K.textureFormatReadable(ke))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=S.width-J&&j>=0&&j<=S.height-W&&B.readPixels(G,j,J,W,Wt.convert(ke),Wt.convert(Le),se)}finally{let we=P!==null?$.get(P).__webglFramebuffer:null;U.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,G,j,J,W,se,ue){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(ye=ye[ue]),ye){let we=S.texture,ke=we.format,Le=we.type;if(!K.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=S.width-J&&j>=0&&j<=S.height-W){U.bindFramebuffer(B.FRAMEBUFFER,ye);let Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,se.byteLength,B.STREAM_READ),B.readPixels(G,j,J,W,Wt.convert(ke),Wt.convert(Le),0);let Fe=P!==null?$.get(P).__webglFramebuffer:null;U.bindFramebuffer(B.FRAMEBUFFER,Fe);let ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await(function(et,pt,it){return new Promise((function(Ve,Tt){setTimeout((function xt(){switch(et.clientWaitSync(pt,et.SYNC_FLUSH_COMMANDS_BIT,0)){case et.WAIT_FAILED:Tt();break;case et.TIMEOUT_EXPIRED:setTimeout(xt,it);break;default:Ve()}}),it)}))})(B,ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,se),B.deleteBuffer(Ee),B.deleteSync(ht),se}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,G=null,j=0){S.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1]);let J=Math.pow(2,-j),W=Math.floor(S.image.width*J),se=Math.floor(S.image.height*J),ue=G!==null?G.x:0,ye=G!==null?G.y:0;Q.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,ue,ye,W,se),U.unbindTexture()},this.copyTextureToTexture=function(S,G,j=null,J=null,W=0){let se,ue,ye,we,ke,Le,Ee,Fe,ht;S.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,S=arguments[1],G=arguments[2],W=arguments[3]||0,j=null);let et=S.isCompressedTexture?S.mipmaps[W]:S.image;j!==null?(se=j.max.x-j.min.x,ue=j.max.y-j.min.y,ye=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,ke=j.min.y,Le=j.isBox3?j.min.z:0):(se=et.width,ue=et.height,ye=et.depth||1,we=0,ke=0,Le=0),J!==null?(Ee=J.x,Fe=J.y,ht=J.z):(Ee=0,Fe=0,ht=0);let pt=Wt.convert(G.format),it=Wt.convert(G.type),Ve;G.isData3DTexture?(Q.setTexture3D(G,0),Ve=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Q.setTexture2DArray(G,0),Ve=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(G,0),Ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let Tt=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Oe=B.getParameter(B.UNPACK_SKIP_PIXELS),Ce=B.getParameter(B.UNPACK_SKIP_ROWS),Xt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,et.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,et.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Le);let mo=S.isDataArrayTexture||S.isData3DTexture,fs=G.isDataArrayTexture||G.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let yn=$.get(S),go=$.get(G),vo=$.get(yn.__renderTarget),yo=$.get(go.__renderTarget);U.bindFramebuffer(B.READ_FRAMEBUFFER,vo.__webglFramebuffer),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let Ri=0;Ri<ye;Ri++)mo&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(S).__webglTexture,W,Le+Ri),S.isDepthTexture?(fs&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(G).__webglTexture,W,ht+Ri),B.blitFramebuffer(we,ke,se,ue,Ee,Fe,se,ue,B.DEPTH_BUFFER_BIT,B.NEAREST)):fs?B.copyTexSubImage3D(Ve,W,Ee,Fe,ht+Ri,we,ke,se,ue):B.copyTexSubImage2D(Ve,W,Ee,Fe,ht+Ri,we,ke,se,ue);U.bindFramebuffer(B.READ_FRAMEBUFFER,null),U.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fs?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Ve,W,Ee,Fe,ht,se,ue,ye,pt,it,et.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,W,Ee,Fe,ht,se,ue,ye,pt,et.data):B.texSubImage3D(Ve,W,Ee,Fe,ht,se,ue,ye,pt,it,et):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Ee,Fe,se,ue,pt,it,et.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Ee,Fe,et.width,et.height,pt,et.data):B.texSubImage2D(B.TEXTURE_2D,W,Ee,Fe,se,ue,pt,it,et);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt),W===0&&G.generateMipmaps&&B.generateMipmap(Ve),U.unbindTexture()},this.copyTextureToTexture3D=function(S,G,j=null,J=null,W=0){return S.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,S=arguments[2],G=arguments[3],W=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,G,j,J,W)},this.initRenderTarget=function(S){$.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),U.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,U.reset(),si.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var ta=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ia=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ih=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Et=new b,na=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new tt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Us=class extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pn,Ms=new b,Ln=new b,Dn=new b,Nn=new ne,ws=new ne,Bd=new Se,Ar=new b,Ss=new b,Rr=new b,Ku=new ne,Zo=new ne,Qu=new ne,sa=class extends _t{constructor(e=new Us){if(super(),this.isSprite=!0,this.type="Sprite",Pn===void 0){Pn=new Ke;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ih(t,5);Pn.setIndex([0,1,2,0,2,3]),Pn.setAttribute("position",new na(i,3,0,!1)),Pn.setAttribute("uv",new na(i,2,3,!1))}this.geometry=Pn,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ln.setFromMatrixScale(this.matrixWorld),Bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ln.multiplyScalar(-Dn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Cr(Ar.set(-.5,-.5,0),Dn,a,Ln,n,s),Cr(Ss.set(.5,-.5,0),Dn,a,Ln,n,s),Cr(Rr.set(.5,.5,0),Dn,a,Ln,n,s),Ku.set(0,0),Zo.set(1,0),Qu.set(1,1);let o=e.ray.intersectTriangle(Ar,Ss,Rr,!1,Ms);if(o===null&&(Cr(Ss.set(-.5,.5,0),Dn,a,Ln,n,s),Zo.set(0,1),o=e.ray.intersectTriangle(Ar,Rr,Ss,!1,Ms),o===null))return;let l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:bi.getInterpolation(Ms,Ar,Ss,Rr,Ku,Zo,Qu,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Cr(r,e,t,i,n,s){Nn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ws.x=s*Nn.x-n*Nn.y,ws.y=n*Nn.x+s*Nn.y):ws.copy(Nn),r.copy(e),r.x+=ws.x,r.y+=ws.y,r.applyMatrix4(Bd)}var uv=new b,dv=new b;var ed=new b,td=new Ye,id=new Ye,pg=new b,nd=new Se,Ir=new b,Jo=new ti,sd=new Se,Ko=new ln,$n=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nu,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ir),this.boundingBox.expandByPoint(Ir)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ir),this.boundingSphere.expandByPoint(Ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),e.ray.intersectsSphere(Jo)!==!1&&(sd.copy(n).invert(),Ko.copy(e.ray).applyMatrix4(sd),this.boundingBox!==null&&Ko.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;td.fromBufferAttribute(n.attributes.skinIndex,e),id.fromBufferAttribute(n.attributes.skinWeight,e),ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=id.getComponent(s);if(a!==0){let o=td.getComponent(s);nd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(pg.copy(ed).applyMatrix4(nd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Os=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},nh=class extends Ct{constructor(e=null,t=1,i=1,n,s,a,o,l,h=1003,c=1003,u,d){super(null,a,o,l,h,c,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rd=new Se,fg=new Se,ra=class r{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Se;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:fg;rd.multiplyMatrices(o,t[s]),rd.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new nh(t,e,e,Jt,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Os),this.bones.push(a),this.boneInverses.push(new Se().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}};var pv=new Se,fv=new Se;var mv=new ei,gv=new Se,vv=new Ne,yv=new ti;var sh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},xv=new Se,_v=new Re(1,1,1),bv=new Yn,Mv=new ei,wv=new ti,Sv=new b,Tv=new b,Ev=new b,Av=new sh,Rv=new Ne;var Cv=new b,Iv=new b,kv=new Se,Pv=new ln,Lv=new ti,Dv=new b,Nv=new b;var Uv=new b,Ov=new b;var Bv=new Se,Fv=new ln,zv=new ti,Hv=new b;var Pt=class extends Ct{constructor(e,t,i,n,s,a,o,l,h){super(e,t,i,n,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,h=s-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(s-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ne:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],s=[],a=[],o=new b,l=new Se;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(yt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(yt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bs=class extends Vt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rh=class extends Bs{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xh(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,u){let d=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var kr=new b,Qo=new Xh,el=new Xh,tl=new Xh,ah=class extends Vt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/s)+1)*s:c===0&&h===s-1&&(h=s-2,c=1),this.closed||h>0?o=n[(h-1)%s]:(kr.subVectors(n[0],n[1]).add(n[0]),o=kr);let u=n[h%s],d=n[(h+1)%s];if(this.closed||h+2<s?l=n[(h+2)%s]:(kr.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=kr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Qo.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,x,m),el.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,x,m),tl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,x,m)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),el.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),tl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Qo.calc(c),el.calc(c),tl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Rs(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Cs(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var aa=class extends Vt{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Cs(e,n.x,s.x,a.x,o.x),Cs(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends Vt{constructor(e=new b,t=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Cs(e,n.x,s.x,a.x,o.x),Cs(e,n.y,s.y,a.y,o.y),Cs(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Vt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Vt{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Vt{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Rs(e,n.x,s.x,a.x),Rs(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Vt{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Rs(e,n.x,s.x,a.x),Rs(e,n.y,s.y,a.y),Rs(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Vt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ad(o,l.x,h.x,c.x,u.x),ad(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},ua=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:ah,CubicBezierCurve:aa,CubicBezierCurve3:oh,EllipseCurve:Bs,LineCurve:oa,LineCurve3:lh,QuadraticBezierCurve:la,QuadraticBezierCurve3:ha,SplineCurve:ca}),hh=class extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ua[n.type]().fromJSON(n))}return this}},Fs=class extends hh{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new oa(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new la(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new aa(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let h=new Bs(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class r extends Ke{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=yt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],h=[],c=1/t,u=new b,d=new ne,p=new b,f=new b,x=new b,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=1*g,p.y=-m,p.z=0*g,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let y=0;y<=t;y++){let v=i+y*c*n,_=Math.sin(v),A=Math.cos(v);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);let C=l[3*w+0]*_,P=l[3*w+1],N=l[3*w+0]*A;h.push(C,P,N)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,A=_,w=_+e.length,C=_+e.length+1,P=_+1;s.push(A,w,P),s.push(C,P,w)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Zn=class r extends zi{constructor(e=1,t=1,i=4,n=8){let s=new Fs;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},ch=class r extends Ke{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],h=new b,c=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ii=class r extends Ke{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let c=[],u=[],d=[],p=[],f=0,x=[],m=i/2,g=0;function y(v){let _=f,A=new ne,w=new b,C=0,P=v===!0?e:t,N=v===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,m*N,0),d.push(0,N,0),p.push(.5,.5),f++;let F=f;for(let z=0;z<=n;z++){let H=z/n*l+o,X=Math.cos(H),V=Math.sin(H);w.x=P*V,w.y=m*N,w.z=P*X,u.push(w.x,w.y,w.z),d.push(0,N,0),A.x=.5*X+.5,A.y=.5*V*N+.5,p.push(A.x,A.y),f++}for(let z=0;z<n;z++){let H=_+z,X=F+z;v===!0?c.push(X,X+1,H):c.push(X+1,X,H),C+=3}h.addGroup(g,C,v===!0?1:2),g+=C}(function(){let v=new b,_=new b,A=0,w=(t-e)/i;for(let C=0;C<=s;C++){let P=[],N=C/s,F=N*(t-e)+e;for(let z=0;z<=n;z++){let H=z/n,X=H*l+o,V=Math.sin(X),q=Math.cos(X);_.x=F*V,_.y=-N*i+m,_.z=F*q,u.push(_.x,_.y,_.z),v.set(V,w,q).normalize(),d.push(v.x,v.y,v.z),p.push(H,1-N),P.push(f++)}x.push(P)}for(let C=0;C<n;C++)for(let P=0;P<s;P++){let N=x[P][C],F=x[P+1][C],z=x[P+1][C+1],H=x[P][C+1];(e>0||P!==0)&&(c.push(N,F,H),A+=3),(t>0||P!==s-1)&&(c.push(F,z,H),A+=3)}h.addGroup(g,A,0),g+=A})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class r extends ii{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class r extends Ke{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,f,x){let m=x+1,g=[];for(let y=0;y<=m;y++){g[y]=[];let v=d.clone().lerp(f,y/m),_=p.clone().lerp(f,y/m),A=m-y;for(let w=0;w<=A;w++)g[y][w]=w===0&&y===m?v:v.clone().lerp(_,w/A)}for(let y=0;y<m;y++)for(let v=0;v<2*(m-y)-1;v++){let _=Math.floor(v/2);v%2==0?(l(g[y][_+1]),l(g[y+1][_]),l(g[y][_])):(l(g[y][_+1]),l(g[y+1][_+1]),l(g[y+1][_]))}}function l(d){s.push(d.x,d.y,d.z)}function h(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function c(d,p,f,x){x<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,f=new b,x=new b;for(let m=0;m<t.length;m+=3)h(t[m+0],p),h(t[m+1],f),h(t[m+2],x),o(p,f,x,d)})(n),(function(d){let p=new b;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(i),(function(){let d=new b;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let x=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-m)}var p;(function(){let f=new b,x=new b,m=new b,g=new b,y=new ne,v=new ne,_=new ne;for(let A=0,w=0;A<s.length;A+=9,w+=6){f.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),y.set(a[w+0],a[w+1]),v.set(a[w+2],a[w+3]),_.set(a[w+4],a[w+5]),g.copy(f).add(x).add(m).divideScalar(3);let C=u(g);c(y,w+0,f,C),c(v,w+2,x,C),c(_,w+4,m,C)}})(),(function(){for(let f=0;f<a.length;f+=6){let x=a[f+0],m=a[f+2],g=a[f+4],y=Math.max(x,m,g),v=Math.min(x,m,g);y>.9&&v<.1&&(x<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},uh=class r extends hn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Pr=new b,Lr=new b,il=new b,Dr=new bi,dh=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Gr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(h[0]=a.getX(f),h[1]=a.getX(f+1),h[2]=a.getX(f+2)):(h[0]=f,h[1]=f+1,h[2]=f+2);let{a:x,b:m,c:g}=Dr;if(x.fromBufferAttribute(o,h[0]),m.fromBufferAttribute(o,h[1]),g.fromBufferAttribute(o,h[2]),Dr.getNormal(il),u[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let v=(y+1)%3,_=u[y],A=u[v],w=Dr[c[y]],C=Dr[c[v]],P=`${_}_${A}`,N=`${A}_${_}`;N in d&&d[N]?(il.dot(d[N].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(C.x,C.y,C.z)),d[N]=null):P in d||(d[P]={index0:h[y],index1:h[v],normal:il.clone()})}}for(let f in d)if(d[f]){let{index0:x,index1:m}=d[f];Pr.fromBufferAttribute(o,x),Lr.fromBufferAttribute(o,m),p.push(Pr.x,Pr.y,Pr.z),p.push(Lr.x,Lr.y,Lr.z)}this.setAttribute("position",new Ie(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},da=class extends Fs{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Fs().fromJSON(n))}return this}},mg=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=od(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h,c,u,d,p;if(i&&(s=(function(f,x,m,g){let y=[],v,_,A,w,C;for(v=0,_=x.length;v<_;v++)A=x[v]*g,w=v<_-1?x[v+1]*g:f.length,C=od(f,A,w,g,!1),C===C.next&&(C.steiner=!0),y.push(wg(C));for(y.sort(_g),v=0;v<y.length;v++)m=bg(y[v],m);return m})(r,e,s,t)),r.length>80*t){o=h=r[0],l=c=r[1];for(let f=t;f<n;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Hs(s,a,t,o,l,p,0),a};function od(r,e,t,i,n){let s,a;if(n===(function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=ld(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=ld(s,r[s],r[s+1],a);return a&&Ma(a,a.next)&&(Gs(a),a=a.next),a}function cn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Ma(i,i.next)&&ot(i.prev,i,i.next)!==0)i=i.next;else{if(Gs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Hs(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,u,d,p){let f=c;do f.z===0&&(f.z=ph(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,(function(x){let m,g,y,v,_,A,w,C,P=1;do{for(g=x,x=null,_=null,A=0;g;){for(A++,y=g,w=0,m=0;m<P&&(w++,y=y.nextZ,y);m++);for(C=P;w>0||C>0&&y;)w!==0&&(C===0||!y||g.z<=y.z)?(v=g,g=g.nextZ,w--):(v=y,y=y.nextZ,C--),_?_.nextZ=v:x=v,v.prevZ=_,_=v;g=y}_.nextZ=null,P*=2}while(A>1)})(f)})(r,i,n,s);let o,l,h=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?vg(r,i,n,s):gg(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Gs(r),r=l.next,h=l.next;else if((r=l)===h){a?a===1?Hs(r=yg(cn(r),e,t),e,t,i,n,s,2):a===2&&xg(r,e,t,i,n,s):Hs(cn(r),e,t,i,n,s,1);break}}function gg(r){let e=r.prev,t=r,i=r.next;if(ot(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<s?n<a?n:a:s<a?s:a,u=o<l?o<h?o:h:l<h?l:h,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>h?o:h:l>h?l:h,f=i.next;for(;f!==e;){if(f.x>=c&&f.x<=d&&f.y>=u&&f.y<=p&&Bn(n,o,s,l,a,h,f.x,f.y)&&ot(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function vg(r,e,t,i){let n=r.prev,s=r,a=r.next;if(ot(n,s,a)>=0)return!1;let o=n.x,l=s.x,h=a.x,c=n.y,u=s.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,f=c<u?c<d?c:d:u<d?u:d,x=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,g=ph(p,f,e,t,i),y=ph(x,m,e,t,i),v=r.prevZ,_=r.nextZ;for(;v&&v.z>=g&&_&&_.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==n&&v!==a&&Bn(o,c,l,u,h,d,v.x,v.y)&&ot(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Bn(o,c,l,u,h,d,_.x,_.y)&&ot(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==n&&v!==a&&Bn(o,c,l,u,h,d,v.x,v.y)&&ot(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Bn(o,c,l,u,h,d,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function yg(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Ma(n,s)&&Fd(n,i,i.next,s)&&Vs(n,s)&&Vs(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Gs(i),Gs(i.next),i=r=s),i=i.next}while(i!==r);return cn(i)}function xg(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sg(a,o)){let l=zd(a,o);return a=cn(a,a.next),l=cn(l,l.next),Hs(a,e,t,i,n,s,0),void Hs(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function _g(r,e){return r.x-e.x}function bg(r,e){let t=(function(n,s){let a,o=s,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let m=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=h&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===h))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,x=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&Bn(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(f=Math.abs(c-o.y)/(h-o.x),Vs(o,n)&&(f<x||f===x&&(o.x>a.x||o.x===a.x&&Mg(a,o)))&&(a=o,x=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=zd(t,r);return cn(i,i.next),cn(t,t.next)}function Mg(r,e){return ot(r.prev,r,e.prev)<0&&ot(e.next,r,r.next)<0}function ph(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function wg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Bn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Sg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Fd(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(Vs(r,e)&&Vs(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(ot(r.prev,r,e.prev)||ot(r,e.prev,e))||Ma(r,e)&&ot(r.prev,r,r.next)>0&&ot(e.prev,e,e.next)>0)}function ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ma(r,e){return r.x===e.x&&r.y===e.y}function Fd(r,e,t,i){let n=Ur(ot(r,e,t)),s=Ur(ot(r,e,i)),a=Ur(ot(t,i,r)),o=Ur(ot(t,i,e));return n!==s&&a!==o||!(n!==0||!Nr(r,t,e))||!(s!==0||!Nr(r,i,e))||!(a!==0||!Nr(t,r,i))||!(o!==0||!Nr(t,e,i))}function Nr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ur(r){return r>0?1:r<0?-1:0}function Vs(r,e){return ot(r.prev,r,r.next)<0?ot(r,e,r.next)>=0&&ot(r,r.prev,e)>=0:ot(r,e,r.prev)<0||ot(r,r.next,e)<0}function zd(r,e){let t=new fh(r.i,r.x,r.y),i=new fh(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ld(r,e,t,i){let n=new fh(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Gs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fh(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ui=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];hd(e),cd(i,e);let a=e.length;t.forEach(hd);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,cd(i,t[l]);let o=mg(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function hd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function cd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var mh=class r extends Ke{constructor(e=new da([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Tg,v,_,A,w,C,P=!1;g&&(v=g.getSpacedPoints(c),P=!0,d=!1,_=g.computeFrenetFrames(c,!1),A=new b,w=new b,C=new b),d||(m=0,p=0,f=0,x=0);let N=o.extractPoints(h),F=N.shape,z=N.holes;if(!Ui.isClockWise(F)){F=F.reverse();for(let L=0,R=z.length;L<R;L++){let k=z[L];Ui.isClockWise(k)&&(z[L]=k.reverse())}}let H=Ui.triangulateShape(F,z),X=F;for(let L=0,R=z.length;L<R;L++){let k=z[L];F=F.concat(k)}function V(L,R,k){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(R,k)}let q=F.length,Y=H.length;function ie(L,R,k){let M,I,O,K=L.x-R.x,U=L.y-R.y,Z=k.x-L.x,$=k.y-L.y,Q=K*K+U*U,ce=K*$-U*Z;if(Math.abs(ce)>Number.EPSILON){let he=Math.sqrt(Q),xe=Math.sqrt(Z*Z+$*$),Ae=R.x-U/he,Ge=R.y+K/he,Be=((k.x-$/xe-Ae)*$-(k.y+Z/xe-Ge)*Z)/(K*$-U*Z);M=Ae+K*Be-L.x,I=Ge+U*Be-L.y;let _e=M*M+I*I;if(_e<=2)return new ne(M,I);O=Math.sqrt(_e/2)}else{let he=!1;K>Number.EPSILON?Z>Number.EPSILON&&(he=!0):K<-Number.EPSILON?Z<-Number.EPSILON&&(he=!0):Math.sign(U)===Math.sign($)&&(he=!0),he?(M=-U,I=K,O=Math.sqrt(Q)):(M=K,I=U,O=Math.sqrt(Q/2))}return new ne(M/O,I/O)}let ee=[];for(let L=0,R=X.length,k=R-1,M=L+1;L<R;L++,k++,M++)k===R&&(k=0),M===R&&(M=0),ee[L]=ie(X[L],X[k],X[M]);let fe=[],ve,te=ee.concat();for(let L=0,R=z.length;L<R;L++){let k=z[L];ve=[];for(let M=0,I=k.length,O=I-1,K=M+1;M<I;M++,O++,K++)O===I&&(O=0),K===I&&(K=0),ve[M]=ie(k[M],k[O],k[K]);fe.push(ve),te=te.concat(ve)}for(let L=0;L<m;L++){let R=L/m,k=p*Math.cos(R*Math.PI/2),M=f*Math.sin(R*Math.PI/2)+x;for(let I=0,O=X.length;I<O;I++){let K=V(X[I],ee[I],M);me(K.x,K.y,-k)}for(let I=0,O=z.length;I<O;I++){let K=z[I];ve=fe[I];for(let U=0,Z=K.length;U<Z;U++){let $=V(K[U],ve[U],M);me($.x,$.y,-k)}}}let re=f+x;for(let L=0;L<q;L++){let R=d?V(F[L],te[L],re):F[L];P?(w.copy(_.normals[0]).multiplyScalar(R.x),A.copy(_.binormals[0]).multiplyScalar(R.y),C.copy(v[0]).add(w).add(A),me(C.x,C.y,C.z)):me(R.x,R.y,0)}for(let L=1;L<=c;L++)for(let R=0;R<q;R++){let k=d?V(F[R],te[R],re):F[R];P?(w.copy(_.normals[L]).multiplyScalar(k.x),A.copy(_.binormals[L]).multiplyScalar(k.y),C.copy(v[L]).add(w).add(A),me(C.x,C.y,C.z)):me(k.x,k.y,u/c*L)}for(let L=m-1;L>=0;L--){let R=L/m,k=p*Math.cos(R*Math.PI/2),M=f*Math.sin(R*Math.PI/2)+x;for(let I=0,O=X.length;I<O;I++){let K=V(X[I],ee[I],M);me(K.x,K.y,u+k)}for(let I=0,O=z.length;I<O;I++){let K=z[I];ve=fe[I];for(let U=0,Z=K.length;U<Z;U++){let $=V(K[U],ve[U],M);P?me($.x,$.y+v[c-1].y,v[c-1].x+k):me($.x,$.y,u+k)}}}function pe(L,R){let k=L.length;for(;--k>=0;){let M=k,I=k-1;I<0&&(I=L.length-1);for(let O=0,K=c+2*m;O<K;O++){let U=q*O,Z=q*(O+1);E(R+M+U,R+I+U,R+I+Z,R+M+Z)}}}function me(L,R,k){l.push(L),l.push(R),l.push(k)}function le(L,R,k){T(L),T(R),T(k);let M=n.length/3,I=y.generateTopUV(i,n,M-3,M-2,M-1);D(I[0]),D(I[1]),D(I[2])}function E(L,R,k,M){T(L),T(R),T(M),T(R),T(k),T(M);let I=n.length/3,O=y.generateSideWallUV(i,n,I-6,I-3,I-2,I-1);D(O[0]),D(O[1]),D(O[3]),D(O[1]),D(O[2]),D(O[3])}function T(L){n.push(l[3*L+0]),n.push(l[3*L+1]),n.push(l[3*L+2])}function D(L){s.push(L.x),s.push(L.y)}(function(){let L=n.length/3;if(d){let R=0,k=q*R;for(let M=0;M<Y;M++){let I=H[M];le(I[2]+k,I[1]+k,I[0]+k)}R=c+2*m,k=q*R;for(let M=0;M<Y;M++){let I=H[M];le(I[0]+k,I[1]+k,I[2]+k)}}else{for(let R=0;R<Y;R++){let k=H[R];le(k[2],k[1],k[0])}for(let R=0;R<Y;R++){let k=H[R];le(k[0]+q*c,k[1]+q*c,k[2]+q*c)}}i.addGroup(L,n.length/3-L,0)})(),(function(){let L=n.length/3,R=0;pe(X,R),R+=X.length;for(let k=0,M=z.length;k<M;k++){let I=z[k];pe(I,R),R+=I.length}i.addGroup(L,n.length/3-L,1)})()}this.setAttribute("position",new Ie(n,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ua[n.type]().fromJSON(n)),new r(i,e.options)}},Tg={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new ne(s,a),new ne(o,l),new ne(h,c)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],x=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new ne(a,1-l),new ne(h,1-u),new ne(d,1-f),new ne(x,1-g)]:[new ne(o,1-l),new ne(c,1-u),new ne(p,1-f),new ne(m,1-g)]}},gh=class r extends hn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},vh=class r extends hn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yh=class r extends Ke{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new b,f=new ne;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=s+m/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),h.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,c.push(f.x,f.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,v=y,_=y+i+1,A=y+i+2,w=y+1;o.push(v,_,w),o.push(_,A,w)}}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xh=class r extends Ke{constructor(e=new da([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let u=n.length/3,d=c.extractPoints(t),p=d.shape,f=d.holes;Ui.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let y=f[m];Ui.isClockWise(y)===!0&&(f[m]=y.reverse())}let x=Ui.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let y=f[m];p=p.concat(y)}for(let m=0,g=p.length;m<g;m++){let y=p[m];n.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],v=y[0]+u,_=y[1]+u,A=y[2]+u;i.push(v,_,A),l+=3}}this.setIndex(i),this.setAttribute("position",new Ie(n,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},_h=class r extends Ke{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new b,d=new b,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],v=g/i,_=0;g===0&&a===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let w=A/t;u.x=-e*Math.cos(n+w*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+w*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-v),y.push(h++)}c.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let v=c[g][y+1],_=c[g][y],A=c[g+1][y],w=c[g+1][y+1];(g!==0||a>0)&&p.push(v,_,w),(g!==i-1||l<Math.PI)&&p.push(_,A,w)}this.setIndex(p),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},bh=class r extends hn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Mh=class r extends Ke{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new b,u=new b,d=new b;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let x=f/n*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(f/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let x=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,g=(n+1)*(p-1)+f,y=(n+1)*p+f;a.push(x,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},wh=class r extends Ke{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],u=new b,d=new b,p=new b,f=new b,x=new b,m=new b,g=new b;for(let v=0;v<=i;++v){let _=v/i*s*Math.PI*2;y(_,s,a,e,p),y(_+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let A=0;A<=n;++A){let w=A/n*Math.PI*2,C=-t*Math.cos(w),P=t*Math.sin(w);u.x=p.x+(C*g.x+P*x.x),u.y=p.y+(C*g.y+P*x.y),u.z=p.z+(C*g.z+P*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(v/i),c.push(A/n)}}for(let v=1;v<=i;v++)for(let _=1;_<=n;_++){let A=(n+1)*(v-1)+(_-1),w=(n+1)*v+(_-1),C=(n+1)*v+_,P=(n+1)*(v-1)+_;o.push(A,w,P),o.push(w,C,P)}function y(v,_,A,w,C){let P=Math.cos(v),N=Math.sin(v),F=A/_*v,z=Math.cos(F);C.x=w*(2+z)*.5*P,C.y=w*(2+z)*N*.5,C.z=w*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Sh=class r extends Ke{constructor(e=new ha(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,h=new ne,c=new b,u=[],d=[],p=[],f=[];function x(m){c=e.getPointAt(m/t,c);let g=a.normals[m],y=a.binormals[m];for(let v=0;v<=n;v++){let _=v/n*Math.PI*2,A=Math.sin(_),w=-Math.cos(_);l.x=w*g.x+A*y.x,l.y=w*g.y+A*y.y,l.z=w*g.z+A*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)x(m);x(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=n;g++)h.x=m/t,h.y=g/n,p.push(h.x,h.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=n;g++){let y=(n+1)*(m-1)+(g-1),v=(n+1)*m+(g-1),_=(n+1)*m+g,A=(n+1)*(m-1)+g;f.push(y,v,A),f.push(v,_,A)}})()})(),this.setIndex(f),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Th=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let u=l[h],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let x=0;x<3;x++){let m=o.getX(p+x),g=o.getX(p+(x+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),ud(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,u),ud(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ud(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Vv=Object.freeze({__proto__:null,BoxGeometry:Ot,CapsuleGeometry:Zn,CircleGeometry:ch,ConeGeometry:zs,CylinderGeometry:ii,DodecahedronGeometry:uh,EdgesGeometry:dh,ExtrudeGeometry:mh,IcosahedronGeometry:gh,LatheGeometry:zi,OctahedronGeometry:vh,PlaneGeometry:kt,PolyhedronGeometry:hn,RingGeometry:yh,ShapeGeometry:xh,SphereGeometry:_h,TetrahedronGeometry:bh,TorusGeometry:Mh,TorusKnotGeometry:wh,TubeGeometry:Sh,WireframeGeometry:Th});var dt=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pa=class extends dt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Or(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Eg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Jn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends Jn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ru:s=e,o=2*t-i;break;case au:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ru:a=e,l=2*i-t;break;case au:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,v=(-1-p)*m+(1.5+p)*x+.5*f,_=p*m-p*x;for(let A=0;A!==o;++A)s[A]=g*a[c+A]+y*a[h+A]+v*a[l+A]+_*a[u+A];return s}},Ah=class extends Jn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)s[d]=a[h+d]*u+a[l+d]*c;return s}},Rh=class extends Jn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Eg(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let f=t[c+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qt.prototype.TimeBufferType=Float32Array,Qt.prototype.ValueBufferType=Float32Array,Qt.prototype.DefaultInterpolation=Ol;var rn=class extends Qt{constructor(e,t,i){super(e,t,i)}};rn.prototype.ValueTypeName="bool",rn.prototype.ValueBufferType=Array,rn.prototype.DefaultInterpolation=Wr,rn.prototype.InterpolantFactoryMethodLinear=void 0,rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends Qt{};Ch.prototype.ValueTypeName="color";var Ih=class extends Qt{};Ih.prototype.ValueTypeName="number";var kh=class extends Jn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)It.slerpFlat(s,0,a,h-o,a,h,l);return s}},fa=class extends Qt{InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}};fa.prototype.ValueTypeName="quaternion",fa.prototype.InterpolantFactoryMethodSmooth=void 0;var an=class extends Qt{constructor(e,t,i){super(e,t,i)}};an.prototype.ValueTypeName="string",an.prototype.ValueBufferType=Array,an.prototype.DefaultInterpolation=Wr,an.prototype.InterpolantFactoryMethodLinear=void 0,an.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends Qt{};Ph.prototype.ValueTypeName="vector";var Lh=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let p=h[u],f=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}},Ag=new Lh,Dh=class{constructor(e){this.manager=e!==void 0?e:Ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ma=class extends Ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new Se,dd=new b,pd=new b,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fd=new Se,Ts=new b,sl=new b,Nh=class extends ga{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ts),sl.copy(i.position),sl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sl),i.updateMatrixWorld(),n.makeTranslation(-Ts.x,-Ts.y,-Ts.z),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},va=class extends Ws{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Nh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uh=class extends ga{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Gv=new Se,Wv=new Se,Xv=new Se;var jv=new b,qv=new It,Yv=new b,$v=new b;var Zv=new b,Jv=new It,Kv=new b,Qv=new b;var jh="\\[\\]\\.:\\/",Rg=new RegExp("["+jh+"]","g"),rl="[^"+jh+"]",Cg="[^"+jh.replace("\\.","")+"]",Ig=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",rl)+/(WCOD+)?/.source.replace("WCOD",Cg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl)+"$"),kg=["material","materials","bones","map"],st=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);kg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=class{constructor(r,e,t){let i=t||st.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var md=new Se,Kn=class{constructor(e,t,i=0,n=1/0){this.ray=new ln(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,i=[]){return Oh(e,this,i,t),i.sort(gd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Oh(e[n],this,i,t);return i.sort(gd),i}};function gd(r,e){return r.distance-e.distance}function Oh(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Oh(s[a],e,t,!0)}}var ty=new ne;var iy=new b,ny=new b;var sy=new b;var ry=new b,ay=new Se,oy=new Se;var ly=new b,hy=new Re,cy=new Re;var uy=new b,dy=new b,py=new b;var fy=new b,my=new Ns;var gy=new ei;var vy=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Pg="ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ",Rt=r=>r.replace(/i/g,"İ").replace(/ı/g,"I").toUpperCase(),js=r=>{let e=Rt(r);return[...e].length===1&&Pg.includes(e)};var is=r=>js(r)||[...Rt(r)].length===1&&"QWX".includes(Rt(r)),qh=r=>Rt(r).replace(/[ÇĞIİÖŞÜ]/g,e=>({Ç:"C",Ğ:"G",I:"İ",İ:"İ",Ö:"O",Ş:"S",Ü:"U"})[e]);var qs=256,be=(r,e)=>r*qs+e,je=r=>Math.floor(r/qs),Ue=r=>r%qs,Hd=qs*qs,wa=class{constructor(e){if(Object.assign(this,{id:e.id,type:e.type||"arroword",w:e.w,h:e.h,clues:e.clues||[]}),this.answers=[],this.letters=new Map,this.at=new Map,this.linked=new Map,this.digits=e.digits||null,this.snap=this.type==="arroword"||this.type==="washington_post_crossword",this.lock=e.lock!==!1&&!this.digits,e.clues)for(let t of e.clues)for(let i of["u","l"]){let n=t[i];n&&this.word([...n.a].map((s,a)=>be(n.r+(n.d==="v"?a:0),n.c+(n.d==="v"?0:a))),n.a,{d:n.d,text:n.t,clue:t,part:i})}for(let[t,i]of e.sol||[])this.letters.set(t,i);for(let t of e.entries||[])this.word(t.c,t.a,{d:t.d,text:t.t||"",no:t.n,side:t.s,range:t.g});if(e.cipher){let t=new Map;for(let[i,n]of e.cipher)this.letters.has(i)&&t.set(n,[...t.get(n)||[],i]);for(let i of t.values())for(let n of i)this.linked.set(n,i)}}word(e,t,i){let n=[...t],s={n:this.answers.length,a:t,cells:e,...i};this.answers.push(s),e.forEach((a,o)=>{if(this.letters.has(a)&&this.letters.get(a)!==n[o])throw new Error(`${this.id}: ${t} conflicts at ${a}`);this.letters.set(a,n[o]),this.at.set(a,[...this.at.get(a)||[],s])})}isAnswerCell(e){return this.letters.has(e)}takes(e){return this.digits?/^\d$/.test(e)&&Number(e)>=this.digits[0]&&Number(e)<=this.digits[1]:this.snap?is(e):js(e)}right(e,t){let i=this.letters.get(e);return t===i||!this.snap&&!this.digits&&t!==void 0&&qh(t)===qh(i)}},Lg={C:"Ç",G:"Ğ",I:"İ",O:"Ö",U:"Ü"},ni=class r{constructor(e){this.grid=e,this.letters=new Map,this.by=new Map,this.done=new Set,this.cands=new Map}locked(e){return this.full||this.grid.lock&&(this.grid.at.get(e)||[]).some(t=>this.done.has(t.n))}normalize(e,t){let i=Rt(e),n=this.grid.letters.get(t);return this.grid.snap&&Lg[i]===n?n:i}set(e,t,i=0){let n=this.grid;if(!n.isAnswerCell(e)||!n.takes(t)||this.locked(e))return null;let s=this.normalize(t,e),a=(n.linked.get(e)||[e]).filter(h=>!this.locked(h)),o=!1;for(let h of a)this.letters.get(h)!==s&&(o=!0),this.letters.set(h,s),this.by.set(h,i),this.cands.delete(h);let l=this.check(a);return{ks:a,changed:o,completed:l,solved:this.see()}}erase(e){let t=new Set;for(let i of e)for(let n of this.grid.linked.get(i)||[i])this.locked(n)||(this.letters.delete(n)&&(this.by.delete(n),t.add(n)),this.cands.delete(n)&&t.add(n));return[...t]}note(e,t){let i=this.grid;if(!i.digits||!i.isAnswerCell(e)||this.letters.has(e)||this.full||!(t>=Math.max(1,i.digits[0])&&t<=i.digits[1]))return!1;let n=this.cands.get(e)||new Set;return n.delete(t)||n.add(t),n.size?this.cands.set(e,n):this.cands.delete(e),!0}check(e){let t=[],i=this.grid;for(let n of e)for(let s of i.at.get(n)||[])if(!(this.done.has(s.n)||!s.cells.every(a=>i.right(a,this.letters.get(a))))&&(this.done.add(s.n),!!i.lock)){for(let a of s.cells)this.letters.set(a,i.letters.get(a));t.push(s)}if(!i.lock)for(let n of[...this.done])i.answers[n].cells.every(s=>i.right(s,this.letters.get(s)))||this.done.delete(n);return t}see(){if(this.full||this.letters.size<this.grid.letters.size)return!1;for(let e of this.grid.letters.keys())if(!this.grid.right(e,this.letters.get(e)))return!1;return this.full=!0,!0}get solved(){return!!this.full}get part(){if(this.full)return 1;let e=this.grid;return e.lock&&e.answers.length?Math.min(.99,this.done.size/e.answers.length):e.letters.size?Math.min(.99,this.letters.size/e.letters.size):0}get touched(){return this.letters.size>0||this.cands.size>0}save(){return[...[...this.letters].map(([e,t])=>[e,t,this.by.get(e)||0]),...[...this.cands].map(([e,t])=>[e,`~${[...t].sort().join("")}`,0])]}static load(e,t){let i=new r(e);for(let n of Array.isArray(t)?t.slice(0,4096):[])if(!(!Array.isArray(n)||!Number.isInteger(n[0])||typeof n[1]!="string"||!e.isAnswerCell(n[0]))){if(/^~\d{1,10}$/.test(n[1])){for(let s of new Set(n[1].slice(1)))i.note(n[0],Number(s));continue}e.takes(n[1])&&(i.letters.set(n[0],Rt(n[1])),i.by.set(n[0],Number.isInteger(n[2])?n[2]:0))}return i.check([...i.letters.keys()]),i.see(),i}};var Yh=Math.PI*2,Sa=class{constructor(e){this.level=e,this.shapes=new Map;for(let t of e.cells||[])t[7]&&this.shapes.set(be(t[0],t[1]),t[7]);this.all=new Map((e.cells||[]).map(t=>[be(t[0],t[1]),t]))}box(e){let t=this.shapes.get(e);return t?t.b:[Ue(e),je(e),1,1]}center(e){let t=this.shapes.get(e);if(t&&t.s){let[o,l,h,c,u,d,p,f]=t.s,x=(h+c+u+d)/4;return[o+Math.cos(p+f/2)*x,l+Math.sin(p+f/2)*x]}let[i,n,s,a]=this.box(e);return[i+s/2,n+a/2]}size(e){let t=this.shapes.get(e);if(t&&t.s)return Math.min(t.s[3]-t.s[2],Math.abs(t.s[7])*(t.s[2]+t.s[3])/2);let i=this.box(e);return Math.min(i[2],i[3])}at(e,t){if(!this.shapes.size)return e>=0&&t>=0&&e<256&&t<256?be(Math.floor(t),Math.floor(e)):null;for(let[i,n]of this.shapes)if(this.hits(n,e,t))return i;return null}hits(e,t,i){if(e.s){let[s,a,o,l,h,c,u,d]=e.s,p=((Math.atan2(i-a,t-s)-u)%Yh+Yh)%Yh/d,f=Math.hypot(t-s,i-a);return p>=0&&p<1&&f>=o+(h-o)*p&&f<l+(c-l)*p}if(t<e.b[0]||i<e.b[1]||t>=e.b[0]+e.b[2]||i>=e.b[1]+e.b[3])return!1;if(!e.p)return!0;let n=!1;for(let s=0,a=e.p.length-1;s<e.p.length;a=s++){let[o,l]=e.p[s],[h,c]=e.p[a];l>i!=c>i&&t<(h-o)*(i-l)/(c-l)+o&&(n=!n)}return n}};var Ta=r=>{let e=[],t=0;for(let i of r)i?t++:t&&(e.push(t),t=0);return t&&e.push(t),e};function Vd(r){return{rows:r.map(e=>Ta([...e].map(t=>t==="1"))),cols:[...r[0]].map((e,t)=>Ta(r.map(i=>i[t]==="1")))}}function Gd(r,e){let t=e.length,i=Ta(e.map(a=>a===1));if(i.length===r.length&&i.every((a,o)=>a===r[o]))return e.flatMap((a,o)=>a===0?[o]:[]);let n=new Set,s=(a,o,l)=>{for(let h of a){for(;o>=0&&o<t&&e[o]===2;)o+=l;if(o<0||o>=t||e[o]!==1)return;let c=o;for(;o>=0&&o<t&&e[o]===1;)o+=l;if(Math.abs(o-c)!==h||o>=0&&o<t&&(e[o]===0&&n.add(o),e[o]!==2&&!n.has(o)))return;o+=l}};return s(r,0,1),s([...r].reverse(),t-1,-1),[...n]}function Dg(r,e){let t=e.length,i=new Map,n=r.map((u,d)=>r.slice(d+1).reduce((p,f)=>p+f+1,0)),s=(u,d,p)=>{for(let f=u;f<d;f++)if(e[f]===p)return!1;return!0},a=(u,d)=>{let p=u*1e3+d;if(i.has(p))return i.get(p);let f=null;if(u===r.length)f=s(d,t,1)?{any:0n,all:0n}:null;else for(let x=d;x<=t-r[u]-n[u];x++){let m=x+r[u],g=u+1<r.length;if(!s(d,x,1)||!s(x,m,2)||g&&e[m]===1)continue;let y=a(u+1,m+(g?1:0));if(!y)continue;let v=0n;for(let _=x;_<m;_++)v|=1n<<BigInt(_);f=f?{any:f.any|v|y.any,all:f.all&(v|y.all)}:{any:v|y.any,all:v|y.all}}return i.set(p,f),f},o=r.reduce((u,d)=>u+d,0)+Math.max(0,r.length-1)<=t,l=o?a(0,0):null,h=Ta(e.map(u=>u===1)),c=new Map;if(l){for(let u=0;u<t;u++)if(e[u]===0){let d=1n<<BigInt(u);l.all&d?c.set(u,1):l.any&d||c.set(u,2)}}return{contradictory:!l,done:h.length===r.length&&h.every((u,d)=>u===r[d]),certain:c}}function Ys(r){let{rows:e,cols:t}=r.clues,i=(n,s)=>r.marks.get(be(n,s))||0;return[...e.map((n,s)=>({row:!0,i:s,clues:n,ks:t.map((a,o)=>be(s,o))})),...t.map((n,s)=>({row:!1,i:s,clues:n,ks:e.map((a,o)=>be(o,s))}))].map(n=>({...n,marks:n.ks.map(s=>i(je(s),Ue(s)))}))}var Zh=r=>Dg(r.clues,r.marks),Ng=r=>{let e=[];for(let[t,i,n,s,a,o]of r.blocks||[]){let l=a||3,h=o||3;for(let c=0;c<s;c++)e.push({kind:"row",ks:Array.from({length:n},(u,d)=>be(t+c,i+d))});for(let c=0;c<n;c++)e.push({kind:"column",ks:Array.from({length:s},(u,d)=>be(t+d,i+c))});for(let c=0;c<s;c+=l)for(let u=0;u<n;u+=h)e.push({kind:"box",ks:Array.from({length:l*h},(d,p)=>be(t+c+Math.floor(p/h),i+u+p%h))})}return e},ns=new WeakMap;function Wd(r){return ns.has(r)||ns.set(r,Ng(r)),ns.get(r)}function Xd(r,e){let t=new Map;for(let i of r.cells)i[2]==="g"&&/^\d+$/.test(i[3])&&t.set(be(i[0],i[1]),Number(i[3]));for(let[i,n]of e.letters)t.set(i,Number(n));return t}var jd=(r,e,t,i)=>{for(let s of e){let a=new Set;for(let o of s.ks)if(t.has(o))a.add(t.get(o));else for(let l of r.get(o)||[])a.add(l);if(a.size<i)return null}let n=[];for(let[s,a]of r){if(a.size===1){n.push({k:s,v:[...a][0],kind:"naked",us:e.filter(l=>l.ks.includes(s))});continue}let o=new Map;for(let l of e)if(l.ks.includes(s))for(let h of a)l.ks.every(c=>c===s||t.has(c)||!(r.get(c)||new Set).has(h))&&!l.ks.some(c=>t.get(c)===h)&&!o.has(h)&&o.set(h,l);if(o.size>1)return null;for(let[l,h]of o)n.push({k:s,v:l,kind:"hidden",us:[h]})}return n},Jh=(r,e)=>{if(r===null)return[];if(r.length||!e.size)return r;let t=null;for(let[i,n]of e)(!t||n.size<t[1].size)&&(t=[i,n]);return[{k:t[0],v:null,kind:"branch",us:[]}]};function Kh(r,e){let t=Wd(r),i=Xd(r,e),n=9;for(let o of t){let l=new Set;for(let h of o.ks){let c=i.get(h);if(c!==void 0){if(l.has(c))return null;l.add(c)}}}let s=new Map;for(let o of t)for(let l of o.ks)s.set(l,[...s.get(l)||[],o]);let a=new Map;for(let[o,l]of[...s].sort((h,c)=>h[0]-c[0]))if(!i.has(o)){let h=new Set(l.flatMap(c=>c.ks.map(u=>i.get(u))));a.set(o,new Set(Array.from({length:n},(c,u)=>u+1).filter(c=>!h.has(c))))}return{us:t,values:i,domains:a,size:n}}function Ug(r,e){let t=Kh(r,e);return!t||[...t.domains.values()].some(i=>!i.size)?[]:Jh(jd(t.domains,t.us,t.values,t.size),t.domains)}function Ea(r){if(ns.has(r))return ns.get(r);let e=new Map(r.cells.map(n=>[be(n[0],n[1]),n])),t=n=>e.has(n)&&e.get(n)[2]==="a",i=[];for(let[n,s]of e)for(let[a,o,l]of[[s[5],1,!1],[s[6],256,!0]])if(s[2]==="b"&&a){let h=[];for(let c=n+o;t(c);c+=o)h.push(c);h.length&&i.push({sum:Number(a),ks:h,down:l,kind:l?"down":"across"})}return ns.set(r,i),i}var $h=new Map;function qd(r,e){let t=r*16+e;if(!$h.has(t)){let i=[],n=(s,a,o)=>{if(o.length===e){a===0&&i.push(o);return}for(let l=s;l<=9&&l<=a;l++)n(l+1,a-l,[...o,l])};n(1,r,[]),$h.set(t,i)}return $h.get(t)}function Og(r,e,t){let i=null;for(let n of Ea(r))if(n.ks.includes(t)){let s=n.ks.filter(l=>l!==t&&e.letters.has(l)).map(l=>Number(e.letters.get(l))),a=new Set(s);if(a.size!==s.length)return new Set;let o=new Set(qd(n.sum,n.ks.length).filter(l=>s.every(h=>l.includes(h))).flat().filter(l=>!a.has(l)));i=i?new Set([...i].filter(l=>o.has(l))):o}return i||new Set}function Bg(r,e){let t=Ea(r);for(let s of t){let a=s.ks.filter(o=>e.letters.has(o)).map(o=>Number(e.letters.get(o)));if(new Set(a).size!==a.length||!qd(s.sum,s.ks.length).some(o=>a.every(l=>o.includes(l))))return[]}let i=new Map;for(let s of[...new Set(t.flatMap(a=>a.ks))].sort((a,o)=>a-o))if(!e.letters.has(s)){let a=Og(r,e,s);if(!a.size)return[];i.set(s,a)}let n=[...i].filter(([,s])=>s.size===1).map(([s,a])=>({k:s,v:[...a][0],kind:"run",us:t.filter(o=>o.ks.includes(s))}));return Jh(n,i)}function Fg(r){let e=[];for(let t of r.notes||[]){let[i,n]=t.at,s=t.t==="<"||t.t===">",a=s?be((n-1)/2,(i-2)/2):be((n-2)/2,(i-1)/2),o=s?a+1:a+256;e.push(t.t==="<"||t.t==="∧"?[a,o]:[o,a])}return e}function zg(r,e){let t=r.digits[1],i=Xd(r,e),n=Fg(r),s=[];for(let o=0;o<t;o++)s.push({kind:"row",ks:Array.from({length:t},(l,h)=>be(o,h))},{kind:"column",ks:Array.from({length:t},(l,h)=>be(h,o))});let a=new Map(s.filter(o=>o.kind==="row").flatMap(o=>o.ks).map(o=>[o,new Set(i.has(o)?[i.get(o)]:Array.from({length:t},(l,h)=>h+1))]));for(let o=!0;o;){o=!1;let l=(h,c)=>{let u=a.get(h);for(let d of u)c(d)||(u.delete(d),o=!0)};for(let h of s)for(let c of h.ks)if(a.get(c).size===1){let[u]=a.get(c);for(let d of h.ks)d!==c&&l(d,p=>p!==u)}for(let[h,c]of n){let u=Math.max(...a.get(c)),d=Math.min(...a.get(h));l(h,p=>p<u),l(c,p=>p>d)}if([...a.values()].some(h=>!h.size))return null}return{us:s,values:i,n:t,signs:n,domains:new Map([...a].filter(([o])=>!i.has(o)).sort((o,l)=>o[0]-l[0]))}}function Hg(r,e){let t=zg(r,e);if(!t)return[];let i=jd(t.domains,t.us,t.values,t.n);return Jh(i,t.domains).map(n=>({...n,signs:t.signs.filter(s=>s.includes(n.k))}))}function Qh(r,e){if(e.solved)return[];switch(r.type){case"sudoku":case"fiveli_sudoku":return Ug(r,e);case"kakuro":return Bg(r,e);case"futoshiki":return Hg(r,e);default:return[]}}var ec=r=>["sudoku","fiveli_sudoku","kakuro","futoshiki"].includes(r.type),Vg=new Set(["sudoku","fiveli_sudoku","kakuro","wordchain","honeycomb_crossword"]);function Yd(r,e){let t=new Set;if(Vg.has(r.type))for(let[i,n]of e.letters)e.grid.right(i,n)||t.add(i);return t}function $d(r,e){let t=new Set;if(r.type!=="sudoku"&&r.type!=="fiveli_sudoku")return t;let i=new Map(r.cells.filter(s=>s[2]==="g").map(s=>[be(s[0],s[1]),s[3]]));for(let[s,a]of e.letters)e.grid.right(s,a)&&i.set(s,a);for(let s of Wd(r))if(s.ks.every(a=>i.has(a)))for(let a of s.ks)t.add(a);let n=new Map(r.cells.filter(s=>s[2]==="g").map(s=>[be(s[0],s[1]),s[3]]));for(let[s,a]of e.grid.letters)n.set(s,a);for(let s=1;s<=9;s++){let a=[...n].filter(([,o])=>o===String(s)).map(([o])=>o);if(a.length&&a.every(o=>i.has(o)))for(let o of a)t.add(o)}return t}var Gg=(r,e)=>[`0 ${r} ${e}`,`0 ${r+1} ${e}`,`1 ${r} ${e}`,`1 ${r} ${e+1}`];function Zd(r,e){let t=new Set,i=new Set;for(let n of r.cells)if(n[3]){let s=Number(n[3]),a=Gg(n[0],n[1]).map(c=>e.edges.get(c)||0),o=a.filter(c=>c===1).length,l=a.filter(Boolean).length,h=be(n[0],n[1]);o===s&&t.add(h),(o>s||l===4&&o!==s)&&i.add(h)}return{ok:t,bad:i}}function Jd(r){let e=new Map,t=[...r.edges].filter(([,a])=>a===1).map(([a])=>a),i=a=>{let[o,l,h]=a.split(" ").map(Number);return o?[`${l} ${h}`,`${l+1} ${h}`]:[`${l} ${h}`,`${l} ${h+1}`]};for(let a of t)for(let o of i(a))e.set(o,[...e.get(o)||[],a]);let n=new Set,s=[];for(let a of t){if(n.has(a))continue;let o=[],l=[a];for(n.add(a);l.length;){let h=l.pop();o.push(h);for(let c of i(h))for(let u of e.get(c))n.has(u)||(n.add(u),l.push(u))}s.push(o)}return s}function Kd(r){return r.rects.filter(([e,t,i,n])=>{let s=r.clues.filter(([a,o])=>a>=e&&a<e+n&&o>=t&&o<t+i);return s.length!==1||s[0][2]!==i*n})}function Qd(r,e,t,i){if(e.solved)return null;if(e.grid){let n=e.grid,s=o=>!n.right(o,e.letters.get(o))&&!e.locked(o);if(i){let o=(n.at.get(t)||[]).find(l=>l.cells.some(s))||(t===null?n.answers.find(l=>l.cells.some(s)):null);return o?{set:o.cells.filter(s)}:null}if(ec(r)){let o=Qh(r,e),l=o.find(h=>h.k===t)||(t!==null&&s(t)&&o.length===0?{k:t}:o[0]);if(l&&s(l.k))return{set:[l.k]}}if(t!==null&&n.isAnswerCell(t)){if(s(t))return{set:[t]};let o=(n.at.get(t)||[]).find(l=>l.cells.some(s));if(o)return{set:[o.cells.find(s)]}}let a=[...n.letters.keys()].find(s);return a===void 0?null:{set:[a]}}if(e.marks){let n=Ys(e).map(o=>[o,Zh(o)]),s=n.find(([o,l])=>t!==null&&l.certain.size&&o.ks.includes(t))||n.find(([,o])=>o.certain.size);if(!s)return null;let a={1:[],2:[]};for(let[o,l]of s[1].certain)a[l].push(s[0].ks[o]);return{ops:[1,2].filter(o=>a[o].length).map(o=>[o,...a[o]])}}if(e.edges){let n=[[0,r.fence.h],[1,r.fence.v]].flatMap(([a,o])=>o.flatMap((l,h)=>[...l].map((c,u)=>({e:[a,h,u],on:c==="1",now:e.edges.get(`${a} ${h} ${u}`)||0})))),s=n.find(a=>a.on&&a.now!==1)||n.find(a=>!a.on&&a.now===1);return s?{ops:[[s.on?1:2,...s.e]]}:null}if(e.islands){for(let[n,s]of e.sol){let a=e.bridges.get(n)||0;if(a!==s){let o=e.pairs.get(n),l=[];if(a===0)for(let[h]of e.bridges){let c=e.pairs.get(h);if(c.across===o.across||e.sol.has(h))continue;let[u,d]=o.across?[o,c]:[c,o];d.a.c>u.a.c&&d.a.c<u.b.c&&u.a.r>d.a.r&&u.a.r<d.b.r&&l.push([...h.split(" ").map(Number),0])}return{ops:[...l,[...n.split(" ").map(Number),a<s?a+1:a-1]]}}}for(let[n,s]of e.bridges)if(!e.sol.has(n))return{ops:[[...n.split(" ").map(Number),s-1]]};return null}if(e.rects){let n=r.rects.find(a=>!e.rects.some(o=>o.join()===a.join()));return n?{ops:[...e.rects.filter(a=>n[0]<a[0]+a[3]&&a[0]<n[0]+n[3]&&n[1]<a[1]+a[2]&&a[1]<n[1]+n[2]).map(a=>[0,a[0],a[1]]),[1,...n]]}:null}if(e.path){let n=0;for(;n<e.path.length&&n<e.sol.length&&e.path[n]===e.sol[n];)n++;return n>=e.sol.length?null:{ops:[e.sol.slice(0,n+1)]}}if(e.found){let n=e.words.find((s,a)=>!e.found.has(a));return n?{ops:[[n.c[0],n.c[n.c.length-1]]]}:null}if(e.on){let n=e.pieces.findIndex((s,a)=>!e.given.has(a)&&!(e.on.has(s.slot)&&e.same(e.on.get(s.slot),a)));return n<0?null:{ops:[[n,e.pieces[n].slot]]}}return null}var Ti=class{constructor(e){this.level=e,this.full=!1,this.n=0}get solved(){return this.full}get touched(){return this.n>0}locked(){return this.full}op(e,t=0){if(this.full||!Array.isArray(e))return null;let i=this.apply(e,t);if(i==null)return null;this.n++;let n=this.right();return n&&(this.full=!0),{ks:i===!0?null:i,completed:[],solved:n}}get part(){return this.full?1:Math.max(0,Math.min(.99,this.share()))}restore(e){for(let t of Array.isArray(e)?e.slice(0,5e3):[])Array.isArray(t)&&t.length<=2500&&t.every(i=>Number.isInteger(i)&&i>=0&&i<65536)&&this.op(t);return this}},tc=(r,e)=>je(e)<r.rows&&Ue(e)<r.cols,ic=class extends Ti{constructor(e){super(e),this.sol=e.nono,this.rows=e.nono.length,this.cols=e.nono[0].length,this.marks=new Map,this.auto=new Set,this.clues=Vd(e.nono),this.total=[...e.nono.join("")].filter(t=>t==="1").length}apply([e,...t]){if(![0,1,2].includes(e)||!t.length||!t.every(n=>tc(this,n)))return null;let i=t.filter(n=>(this.marks.get(n)||0)!==e);if(!i.length)return null;for(let n of i)this.auto.delete(n),e?this.marks.set(n,e):this.marks.delete(n);return this.cross(),!0}cross(){for(let e of this.auto)this.marks.get(e)===2&&this.marks.delete(e);this.auto.clear();for(let e=!0;e;){e=!1;for(let t of Ys(this))for(let i of Gd(t.clues,t.ks.map(n=>this.marks.get(n)||0)))this.marks.has(t.ks[i])||(this.marks.set(t.ks[i],2),this.auto.add(t.ks[i]),e=!0)}}right(){for(let e=0;e<this.rows;e++)for(let t=0;t<this.cols;t++)if(this.marks.get(be(e,t))===1!=(this.sol[e][t]==="1"))return!1;return!0}share(){let e=0;for(let t of this.marks.values())t===1&&e++;return e/Math.max(1,this.total)}save(){let e=[[],[]];for(let[t,i]of this.marks)this.auto.has(t)||e[i-1].push(t);return e.flatMap((t,i)=>t.length?[[i+1,...t]]:[])}},nc=class extends Ti{constructor(e){super(e),this.sol=e.fence,this.rows=e.h,this.cols=e.w,this.edges=new Map,this.total=[...e.fence.h.join(""),...e.fence.v.join("")].filter(t=>t==="1").length}valid(e,t,i){return e===0?t<=this.rows&&i<this.cols:e===1&&t<this.rows&&i<=this.cols}apply([e,...t]){if(![0,1,2].includes(e)||!t.length||t.length%3)return null;for(let n=0;n<t.length;n+=3)if(!this.valid(t[n],t[n+1],t[n+2]))return null;let i=!1;for(let n=0;n<t.length;n+=3){let s=t.slice(n,n+3).join(" ");(this.edges.get(s)||0)!==e&&(i=!0,e?this.edges.set(s,e):this.edges.delete(s))}return i||null}right(){for(let[e,t]of[[0,this.sol.h],[1,this.sol.v]])for(let i=0;i<t.length;i++)for(let n=0;n<t[i].length;n++)if(this.edges.get(`${e} ${i} ${n}`)===1!=(t[i][n]==="1"))return!1;return!0}share(){let e=0;for(let t of this.edges.values())t===1&&e++;return e/Math.max(1,this.total)}save(){let e=[[1],[2]];for(let[t,i]of this.edges)e[i-1].push(...t.split(" ").map(Number));return e.filter(t=>t.length>1)}},sc=class extends Ti{constructor(e){super(e),this.rows=e.h,this.cols=e.w,this.islands=e.islands.map(([t,i,n],s)=>({i:s,r:t,c:i,n})),this.sol=new Map(e.bridges.map(([t,i,n])=>[this.id(t,i),n])),this.bridges=new Map,this.pairs=new Map;for(let t of this.islands)for(let i of[!0,!1]){let n=null;for(let s of this.islands)s!==t&&(i?s.r===t.r&&s.c>t.c:s.c===t.c&&s.r>t.r)&&(!n||(i?s.c<n.c:s.r<n.r))&&(n=s);n&&this.pairs.set(this.id(t.i,n.i),{a:t,b:n,across:i})}}id(e,t){return e<t?`${e} ${t}`:`${t} ${e}`}at(e,t){return this.islands.find(i=>i.r===e&&i.c===t)||null}crossed(e){for(let t of this.bridges.keys()){let i=this.pairs.get(t);if(i.across===e.across)continue;let[n,s]=e.across?[e,i]:[i,e];if(s.a.c>n.a.c&&s.a.c<n.b.c&&n.a.r>s.a.r&&n.a.r<s.b.r)return!0}return!1}apply([e,t,i]){let n=this.id(e,t),s=this.pairs.get(n);return!s||![0,1,2].includes(i)||(this.bridges.get(n)||0)===i||i&&!this.bridges.has(n)&&this.crossed(s)?null:(i?this.bridges.set(n,i):this.bridges.delete(n),!0)}right(){return this.bridges.size===this.sol.size&&[...this.sol].every(([e,t])=>this.bridges.get(e)===t)}count(e){let t=0;for(let[i,n]of this.bridges){let s=this.pairs.get(i);(s.a.i===e||s.b.i===e)&&(t+=n)}return t}share(){let e=t=>[...t.values()].reduce((i,n)=>i+n,0);return e(this.bridges)/Math.max(1,e(this.sol))}save(){return[...this.bridges].map(([e,t])=>[...e.split(" ").map(Number),t])}},rc=class extends Ti{constructor(e){super(e),this.rows=e.h,this.cols=e.w,this.clues=e.clueCells,this.sol=new Set(e.rects.map(t=>t.join(" "))),this.rects=[]}over(e,t){return this.rects.find(i=>e>=i[0]&&e<i[0]+i[3]&&t>=i[1]&&t<i[1]+i[2])||null}apply([e,t,i,n,s]){if(e===0){let a=this.over(t,i);return a?(this.rects=this.rects.filter(o=>o!==a),!0):null}if(e!==1||!(n>0&&s>0)||t+s>this.rows||i+n>this.cols)return null;for(let a of this.rects)if(t<a[0]+a[3]&&a[0]<t+s&&i<a[1]+a[2]&&a[1]<i+n)return null;return this.rects.push([t,i,n,s]),!0}right(){return this.rects.length===this.sol.size&&this.rects.every(e=>this.sol.has(e.join(" ")))}share(){return this.rects.reduce((e,t)=>e+t[2]*t[3],0)/(this.rows*this.cols)}save(){return this.rects.map(e=>[1,...e])}},ac=class extends Ti{constructor(e){super(e),this.rows=e.h,this.cols=e.w,this.start=e.maze.start,this.end=e.maze.end,this.sol=e.maze.path,this.walls=new Set((e.bars||[]).flatMap(([t,i,n,s])=>[...n?[`r${be(t,i)}`]:[],...s?[`b${be(t,i)}`]:[]])),this.path=[this.start]}open(e,t){let i=je(t)-je(e),n=Ue(t)-Ue(e);return!tc(this,e)||!tc(this,t)||Math.abs(i)+Math.abs(n)!==1?!1:!this.walls.has(i===0?`r${be(je(e),Math.min(Ue(e),Ue(t)))}`:`b${be(Math.min(je(e),je(t)),Ue(e))}`)}apply(e){if(!e.length||e[0]!==this.start||e.length>this.rows*this.cols||new Set(e).size!==e.length)return null;for(let t=1;t<e.length;t++)if(!this.open(e[t-1],e[t]))return null;return this.path=e.slice(),!0}get touched(){return this.path.length>1}right(){return this.path.length===this.sol.length&&this.path.every((e,t)=>e===this.sol[t])}share(){return(this.path.length-1)/this.sol.length}save(){return this.path.length>1?[this.path]:[]}},oc=class extends Ti{constructor(e){super(e),this.rows=e.h,this.cols=e.w,this.words=e.words,this.found=new Map}find(e,t){return this.words.findIndex(i=>i.c[0]===e&&i.c[i.c.length-1]===t||i.c[0]===t&&i.c[i.c.length-1]===e)}apply([e,t],i){let n=this.find(e,t);return n<0||this.found.has(n)?null:(this.found.set(n,i),!0)}right(){return this.found.size===this.words.length}share(){return this.found.size/Math.max(1,this.words.length)}save(){return[...this.found.keys()].map(e=>[this.words[e].c[0],this.words[e].c[this.words[e].c.length-1]])}},ss=65535,lc=class extends Ti{constructor(e){super(e),this.rows=e.h,this.cols=e.w,this.pieces=e.stamps,this.slots=e.slots,this.on=new Map,this.given=new Set(e.stamps.flatMap((t,i)=>t.given?[i]:[])),this.pieces.forEach((t,i)=>{t.given&&this.on.set(t.slot,i)})}where(e){for(let[t,i]of this.on)if(i===e)return t;return null}slotAt(e,t){return this.slots.findIndex(i=>e>=i[0]&&e<i[0]+i[3]&&t>=i[1]&&t<i[1]+i[2])}apply([e,t]){if(!(e<this.pieces.length)||this.given.has(e)||t!==ss&&!(t<this.slots.length)||t!==ss&&this.given.has(this.on.get(t)))return null;let i=this.where(e);return i===(t===ss?null:t)?null:(i!==null&&this.on.delete(i),t!==ss&&this.on.set(t,e),!0)}same(e,t){return JSON.stringify(this.pieces[e].rows)===JSON.stringify(this.pieces[t].rows)}right(){return this.pieces.every((e,t)=>this.on.has(e.slot)&&this.same(this.on.get(e.slot),t))}share(){return(this.on.size-this.given.size)/Math.max(1,this.pieces.length-this.given.size)}get touched(){return this.on.size>this.given.size}save(){return[...this.on].filter(([,e])=>!this.given.has(e)).map(([e,t])=>[t,e])}},Wg={nonogram:ic,slitherlink:nc,hashi:sc,shikaku:rc,maze:ac,surplus_words:oc},hc=r=>r.stamps?lc:Wg[r.type]||null;var Xg=new Set,ep=r=>!!r.pair&&!Xg.has(r.type);function jg(r){let e=[{kind:"cover"},{kind:"contents"},{kind:"howto"}],t=r.slice(),i=s=>s.w>20&&!s.cells,n=s=>i(s)||ep(s);for(;t.length;){let s=0;n(t[0])&&e.length%2===0&&(s=t.findIndex(l=>!n(l)),s<0&&(e.push({kind:"notes"}),s=0));let[a]=t.splice(s,1),o={kind:"grid",level:a.id,c0:0,c1:a.w};if(i(a)){let l=Math.ceil(a.w/2);e.push({...o,c1:l,wide:!0},{...o,c0:l,wide:!0})}else ep(a)?e.push(o,{kind:"clues",level:a.id}):e.push(o)}return e.length%2===0&&e.push({kind:"notes"}),e.push({kind:"back"}),e.forEach((s,a)=>{s.key=s.level?s.level+(s.kind==="clues"?".c":s.wide&&s.c0?".1":""):`#${a}`}),e}var $s=class{constructor(e){this.episode=e,this.levels=e.levels,this.byId=new Map(this.levels.map(t=>[t.id,t])),this.pages=jg(this.levels),this.grids=new Map(this.levels.filter(t=>!hc(t)).map(t=>[t.id,new wa(t)])),this.progress=new Map(this.levels.map(t=>[t.id,this.fresh(t)])),this.spread=0,this.n=0,this.notes=new Map,this.inked=0,this.assisted=new Set,this.past=new Map,this.keys=new Set(this.pages.filter(t=>t.kind!=="cover"&&t.kind!=="back").map(t=>t.key))}fresh(e){let t=hc(e);return t?new t(e):new ni(this.grids.get(e.id))}get id(){return this.episode.id}get spreads(){return this.pages.length/2+1}pageOf(e,t=null){return this.pages.findIndex(i=>i.kind==="grid"&&i.level===e&&(t===null||!i.wide||Ue(t)>=i.c0&&Ue(t)<i.c1))}get solvedCount(){return[...this.progress.values()].filter(e=>e.solved).length}get startedCount(){return[...this.progress.values()].filter(e=>!e.solved&&e.touched).length}do(e,t,i=!1){let n=rs(e,i);if(!n)return null;let s=null;if(n.t==="turn"){if(n.to===this.spread||n.to>=this.spreads)return null;s={t:"turn",from:this.spread,to:n.to},this.spread=n.to}else if(n.t==="note"||n.t==="rub")s=this.scribble(n);else{let a=this.progress.get(n.l);if(!a)return null;let o=n.t==="undo"||n.t==="state"?null:a.save();if(s=this.play(n,a,t),s&&o){let l=this.past.get(n.l)||{back:[],on:[]};l.back.push(o),l.back.length>100&&l.back.shift(),l.on=[],this.past.set(n.l,l)}}return s?(this.n++,{...s,who:t}):null}play(e,t,i){let n=t instanceof ni;switch(e.t){case"set":{let s=n&&t.set(e.k,e.ch,i);return s?{t:"set",l:e.l,k:e.k,...s}:null}case"erase":{let s=n?t.erase(e.ks):[];return s.length?{t:"erase",l:e.l,gone:s}:null}case"cand":return n&&t.note(e.k,e.d)?{t:"cand",l:e.l,k:e.k}:null;case"do":{let s=n?null:t.op(e.o,i);return s?{t:"do",l:e.l,...s}:null}case"hint":return this.hint(e,t,i);case"undo":{let s=this.past.get(e.l),a=s&&(e.d?s.on:s.back);if(!a||!a.length||t.solved)return null;let o=a.pop();return(e.d?s.back:s.on).push(t.save()),this.put(e.l,o),{t:"state",l:e.l,as:{t:"state",l:e.l,s:o}}}case"state":return this.put(e.l,e.s),{t:"state",l:e.l}}return null}put(e,t){let i=this.byId.get(e),n=this.fresh(i);this.progress.set(e,n instanceof ni?ni.load(this.grids.get(e),t):n.restore(t))}hint(e,t,i){let n=Qd(this.byId.get(e.l),t,e.k,!!e.w);if(!n)return null;let s={t:"many",l:e.l,ks:[],completed:[],solved:!1},a=o=>{o&&(s.ks.push(...o.ks||[]),s.completed.push(...o.completed),s.solved=s.solved||o.solved,s.any=!0)};if(n.set)for(let o of n.set)a(t.set(o,t.grid.letters.get(o),i));else for(let o of n.ops)a(t.op(o,i));return s.any?(this.assisted.add(e.l),s):null}canUndo(e,t){let i=this.past.get(e);return!!i&&(t?i.on:i.back).length>0}scribble(e){if(!this.keys.has(e.g))return null;let t=this.notes.get(e.g)||[];if(e.t==="note"){if(t.length>=cc||this.inked+e.p.length>tp)return null;let n=this.n+1;return this.notes.set(e.g,[...t,[n,e.c,...e.p]]),this.inked+=e.p.length,{t:"note",g:e.g,i:n}}let i=t.filter(n=>!e.is.includes(n[0]));if(i.length===t.length)return null;for(let n of t)e.is.includes(n[0])&&(this.inked-=n.length-2);return i.length?this.notes.set(e.g,i):this.notes.delete(e.g),{t:"rub",g:e.g}}save(){return{v:2,e:this.id,n:this.n,spread:this.spread,p:Object.fromEntries([...this.progress].filter(([,e])=>e.touched).map(([e,t])=>[e,t.save()])),notes:Object.fromEntries(this.notes),hints:[...this.assisted]}}load(e){if(!e||e.v!==2||e.e!==this.id||!e.p||typeof e.p!="object")return!1;if(this.n=Number.isInteger(e.n)&&e.n>=0?e.n:0,this.spread=Number.isInteger(e.spread)&&e.spread>=0&&e.spread<this.spreads?e.spread:0,this.assisted=new Set((Array.isArray(e.hints)?e.hints:[]).filter(t=>this.byId.has(t))),this.past.clear(),this.notes.clear(),this.inked=0,e.notes&&typeof e.notes=="object"){for(let t of this.keys)if(Object.hasOwn(e.notes,t)&&Array.isArray(e.notes[t])){let i=e.notes[t].slice(0,cc).filter(n=>Array.isArray(n)&&Number.isInteger(n[0])&&n[0]>0&&Number.isInteger(n[1])&&n[1]>=0&&n[1]<6&&ip(n.slice(2))&&(this.inked+=n.length-2)<=tp).map(n=>[...n]);i.length&&this.notes.set(t,i)}}for(let t of this.levels){let i=Object.hasOwn(e.p,t.id)?e.p[t.id]:[],n=this.fresh(t);this.progress.set(t.id,n instanceof ni?ni.load(this.grids.get(t.id),i):n.restore(i))}return!0}},cc=800,tp=8e4,qg=400,Hi=4096,ip=r=>Array.isArray(r)&&r.length>=2&&r.length<=qg&&r.length%2===0&&r.every(e=>Number.isInteger(e)&&e>=0&&e<=8191),Aa=r=>Number.isInteger(r)&&r>=0&&r<Hd,ui=r=>typeof r=="string"&&/^[a-z0-9-]{1,64}$/.test(r);function rs(r,e=!1){return!r||typeof r!="object"?null:r.t==="turn"?Number.isInteger(r.to)&&r.to>=0&&r.to<1e3?{t:"turn",to:r.to}:null:r.t==="set"?ui(r.l)&&Aa(r.k)&&typeof r.ch=="string"&&r.ch.length<=2&&(is(r.ch)||/^\d$/.test(r.ch))?{t:"set",l:r.l,k:r.k,ch:Rt(r.ch)}:null:r.t==="erase"?ui(r.l)&&Array.isArray(r.ks)&&r.ks.length&&r.ks.length<=200&&r.ks.every(Aa)?{t:"erase",l:r.l,ks:[...r.ks]}:null:r.t==="do"?ui(r.l)&&Array.isArray(r.o)&&r.o.length&&r.o.length<=2500&&r.o.every(t=>Number.isInteger(t)&&t>=0&&t<65536)?{t:"do",l:r.l,o:[...r.o]}:null:r.t==="cand"?ui(r.l)&&Aa(r.k)&&Number.isInteger(r.d)&&r.d>=0&&r.d<=9?{t:"cand",l:r.l,k:r.k,d:r.d}:null:r.t==="hint"?ui(r.l)&&(r.k===null||Aa(r.k))?{t:"hint",l:r.l,w:r.w?1:0,k:r.k}:null:r.t==="undo"?ui(r.l)?{t:"undo",l:r.l,d:r.d?1:0}:null:r.t==="note"?typeof r.g=="string"&&r.g.length<80&&ip(r.p)?{t:"note",g:r.g,c:Number.isInteger(r.c)&&r.c>=0&&r.c<6?r.c:0,p:[...r.p]}:null:r.t==="rub"?typeof r.g=="string"&&r.g.length<80&&Array.isArray(r.is)&&r.is.length>0&&r.is.length<=cc&&r.is.every(t=>Number.isInteger(t)&&t>0)?{t:"rub",g:r.g,is:[...r.is]}:null:e&&r.t==="state"&&ui(r.l)&&Array.isArray(r.s)&&r.s.length<=5e3?{t:"state",l:r.l,s:r.s}:null}var Yg={Puzzle:"Bulmaca","Solved!":"Tamamlandı!","Swedish crosswords":"Çengel bulmacalar","Turn the page":"Sayfayı çevir",Contents:"İçindekiler","How to play":"Nasıl oynanır",Notes:"Notlar",Episodes:"Bölümler","Choose an episode":"Bölüm seç",Bookshelf:"Kitaplık","{n} puzzles":"{n} bulmaca","{n} of {m} solved":"{n} / {m} tamamlandı","{n} in progress":"{n} devam ediyor","Opening…":"Açılıyor…","The episode could not be loaded":"Bölüm yüklenemedi","The host chooses the episode":"Bölümü odayı kuran seçer",Across:"Soldan sağa",Down:"Yukarıdan aşağıya",Inwards:"Dıştan içe",Outwards:"İçten dışa",Clues:"İpuçları",Words:"Sözcükler",Numbers:"Sayılar",Pieces:"Parçalar","The letters left over:":"Artan harfler:",arroword:"Çengel bulmaca",washington_post_crossword:"Kare bulmaca",sudoku:"Sudoku",fiveli_sudoku:"5li sudoku",number_hunt:"Rakam bulmaca",letter_hunt:"Harf bulmaca",jigsaw_crossword:"Mozaik bulmaca",wordchain:"Zincir bulmaca",surplus_words:"Artan sözcük bulmaca",nonogram:"Nonogram",spiral_crossword:"Sarmal bulmaca",honeycomb_crossword:"Petek bulmaca",kakuro:"Kakuro",slitherlink:"Çit bulmaca",hashi:"Köprü bulmaca",ciphered_crossword:"Şifreli bulmaca",futoshiki:"Futoshiki",shikaku:"Shikaku",maze:"Labirent","Write the digits.":"Rakamları yaz.","Write each letter by its number: it appears everywhere.":"Harfi numarasına göre yaz: her yerde belirir.","Place every word of the list.":"Listedeki her sözcüğü yerleştir.","Place every number of the list.":"Listedeki her sayıyı yerleştir.","Drag along the cells to fill them; once more for a cross, once more to clear.":"Kareleri sürükleyerek doldur; bir daha: çarpı, bir daha: temizle.","Draw along the dots; tap an edge for a line or a cross.":"Noktalar boyunca çiz; kenara dokun: çizgi ya da çarpı.","Drag from island to island: one bridge, two, none.":"Adadan adaya sürükle: bir köprü, iki köprü, hiç.","Drag a rectangle over as many cells as its number says; tap it to take it away.":"Sayısı kadar kareyi kaplayan dikdörtgeni sürükle; kaldırmak için dokun.","Draw your way from S to E.":"S’den E’ye yolunu çiz.","Drag through the words, in any direction.":"Sözcüklerin üzerinden her yönde sürükle.","Drag the pieces to their places.":"Parçaları yerlerine sürükle.",Undo:"Geri al",Redo:"Yinele","Small digits":"Aday rakamlar","Automatic candidates":"Otomatik adaylar","Next move":"Sıradaki hamle","Show the result":"Sonucu göster","Show a letter":"Harf göster","Show the answer":"Cevabı göster","Mark certain cells":"Kesin hücreleri işaretle","Show an edge":"Bir kenar göster","Show a bridge":"Bir köprü göster","Show a rectangle":"Bir dikdörtgen göster","Show a step":"Bir adım göster","Show a word":"Bir sözcük göster","Show a piece":"Bir parça göster","Show a digit":"Bir rakam göster","Highlight matching letters":"Eş harfleri vurgula",Rotate:"Döndür",Fill:"Dolu",Cross:"Çarpı",Clear:"Temizle",Line:"Çizgi",Free:"Serbest",Block:"Blok","Only one choice: row, column and box together.":"Tek seçenek: satıra, sütuna ve kutuya birlikte uyan rakamı bul.","Only here in this row.":"Bu satırda yalnızca buraya uyan rakamı bul.","Only here in this column.":"Bu sütunda yalnızca buraya uyan rakamı bul.","Only here in this box.":"Bu kutuda yalnızca buraya uyan rakamı bul.","Only one choice: row and column together.":"Tek seçenek: satıra ve sütuna birlikte uyan rakamı bul.","Follow the signs beside it, too.":"Yanındaki işaretleri de izle.","Both sums together leave one digit.":"Hem yatay hem dikey toplama uyan rakamı bul.","One digit is missing from this sum.":"Bu toplamda eksik rakamı bul.","Nothing is forced: try one of its choices here.":"Zorunlu hamle yok: burada bir seçeneği dene.","Nothing to suggest – is something wrong?":"Önerilecek hamle yok – bir yanlış olabilir.","Length {n} · ends {a} from the left · begins {b} from the right":"Uzunluk {n} · soldan {a}. karede biter · sağdan {b}. karede başlar","Length {n} · ends {a} from the top · begins {b} from the bottom":"Uzunluk {n} · üstten {a}. karede biter · alttan {b}. karede başlar","{w} × {h} cells":"{w} × {h} kare","No more room for notes here":"Burada not için yer kalmadı","Write notes anywhere on the empty paper: they stay.":"Kâğıdın boş yerlerine not yaz: hepsi saklanır.","The lightbulb shows a piece of the answer; the glass where to look.":"Ampul cevabın bir parçasını, büyüteç bakılacak yeri gösterir.","Every puzzle is played by hand: written, filled, fenced, bridged, traced.":"Her bulmaca elle çözülür: yazarak, doldurarak, çizerek, köprü kurarak.","The bookshelf is the books button, at the top.":"Kitaplığa üstteki kitap düğmesiyle dönülür.","Write with a pen, a finger or the mouse: each letter is read a moment after it is written.":"Kalemle, parmakla ya da fareyle yaz: her harf, yazıldıktan hemen sonra okunur.","Drag the edge or the corner of a page to turn it, or flick it with a finger.":"Sayfayı çevirmek için kenarından ya da köşesinden sürükle; parmakla hızlıca savurmak da olur.","Two fingers (or the wheel) zoom and move the page.":"İki parmakla (ya da tekerlekle) yakınlaştır ve sayfayı kaydır.","The eraser, the pen’s other end or the right button rubs out.":"Silgi, kalemin arka ucu ya da farenin sağ tuşu siler.","Tap a cell to type with the keyboard instead.":"Klavyeyle yazmak için bir kareye dokun.","A word that is right is locked and turns green.":"Doğru kelime kilitlenir ve yeşile döner.","Open a room and solve together, all at one table.":"Oda aç, aynı masada birlikte çözün.",Pencil:"Kalem",Eraser:"Silgi","Whole page":"Tüm sayfa",Room:"Oda",Settings:"Ayarlar","Previous page":"Önceki sayfa","Next page":"Sonraki sayfa","Solve together":"Birlikte çöz","Open a room":"Oda aç","Password (optional)":"Şifre (isteğe bağlı)","Room code":"Oda kodu",Join:"Katıl",Leave:"Ayrıl","Copy link":"Bağlantıyı kopyala","Link copied":"Bağlantı kopyalandı","At the table":"Masadakiler",you:"sen",away:"bağlantısı koptu",Kick:"Çıkar",Ban:"Yasakla",Close:"Kapat","Your name":"Adın",Skin:"Ten",Sleeve:"Kol","Left-handed":"Solağım",Language:"Dil",Sounds:"Sesler","My hands":"Ellerim",shown:"görünsün",faint:"soluk",hidden:"gizli","Start this magazine over":"Dergiyi baştan başlat","Really? Everything written is lost.":"Emin misin? Yazılan her şey silinir.",Handwriting:"El yazısı","loading…":"yükleniyor…","this browser":"tarayıcı","not available":"kullanılamıyor","Connecting…":"Bağlanıyor…","Reconnecting…":"Yeniden bağlanıyor…","Opening the room…":"Oda açılıyor…","{n} joined":"{n} katıldı","{n} left":"{n} ayrıldı","{n} lost the connection":"{n} bağlantısını kaybetti","{n} is back":"{n} geri döndü","{n} was sent out":"{n} odadan çıkarıldı","Room not found – is the host still there?":"Oda bulunamadı – kuran hâlâ orada mı?","Could not reach the host (a strict firewall can block peer-to-peer).":"Odayı kurana ulaşılamadı (katı bir güvenlik duvarı engelliyor olabilir).","Could not connect":"Bağlanılamadı","This room has a password":"Bu odanın şifresi var","Room is full":"Oda dolu","Room closed":"Oda kapandı","You were sent out of the room":"Odadan çıkarıldın","You are banned from this room":"Bu odaya girmen yasaklandı","This room was opened in another tab":"Bu oda başka bir sekmede açıldı","Lost connection to the host":"Odayı kuranla bağlantı koptu","Someone is writing":"Biri yazıyor","Puzzle solved!":"Bulmaca tamamlandı!","Handwriting could not be loaded: type instead":"El yazısı yüklenemedi: klavyeyle yazabilirsin","Only the host turns people out":"Yalnızca odayı kuran kişi çıkarabilir"},Zs="tr";try{Zs=localStorage.getItem("cwords3d.lang")||(/^tr/i.test(navigator.language||"tr")?"tr":"en")}catch{}var uc=()=>Zs;function np(r){Zs=r==="en"?"en":"tr";try{localStorage.setItem("cwords3d.lang",Zs)}catch{}}var $g={arroword:"Arrow words",washington_post_crossword:"Crossword",sudoku:"Sudoku",fiveli_sudoku:"Samurai sudoku",number_hunt:"Number hunt",letter_hunt:"Letter hunt",jigsaw_crossword:"Mosaic",wordchain:"Chain of words",surplus_words:"Surplus words",nonogram:"Nonogram",spiral_crossword:"Spiral",honeycomb_crossword:"Honeycomb",kakuro:"Kakuro",slitherlink:"Slitherlink",hashi:"Bridges",ciphered_crossword:"Cipher",futoshiki:"Futoshiki",shikaku:"Shikaku",maze:"Maze"};function de(r,e={}){return(Zs==="tr"?Yg[r]??r:$g[r]??r).replace(/\{(\w+)\}/g,(i,n)=>e[n]??"")}var St=4/3,Te='"Avenir Next", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',Ei=["#1f3f8f","#8a2433","#1e6b41","#7a4a10","#5a3b94","#333333"],Zg="#f7f2e6",Gt="#4a4640",Jg="#e9dfc6",Vi="#8f2f2a",Lt="#2c2821",Ra="#8b8371",as="#2f7d4c",Kg=.118,sp=["#1f3f8f","#a8541c","#1e6b41","#7a2f8a","#0f7a86","#8f2f2a","#5f6a12","#b0307a"],Ca=["#f4c9b8","#cfe0f5","#d5ebc8","#f5e3a8","#e2d2f0","#c9ebe6","#f6cfdc","#e6dcc4"],dc={sudoku:"Write the digits.",fiveli_sudoku:"Write the digits.",kakuro:"Write the digits.",futoshiki:"Write the digits.",number_hunt:"Place every number of the list.",letter_hunt:"Place every word of the list.",wordchain:"Place every word of the list.",jigsaw_crossword:"Drag the pieces to their places.",surplus_words:"Drag through the words, in any direction.",nonogram:"Drag along the cells to fill them; once more for a cross, once more to clear.",slitherlink:"Draw along the dots; tap an edge for a line or a cross.",hashi:"Drag from island to island: one bridge, two, none.",ciphered_crossword:"Write each letter by its number: it appears everywhere.",shikaku:"Drag a rectangle over as many cells as its number says; tap it to take it away.",maze:"Draw your way from S to E."},zy=Object.values(dc),rp=(r,e)=>r.reduce((t,[,i])=>t+Math.max(1,Math.ceil(i.reduce((n,s)=>n+[...s].length+2.2,0)/e)),0),Qg=r=>r.stamps?null:r.bank?.05+rp(r.bank,62)*.029:r.words?.1+rp([[0,r.words.map(e=>e.w)]],62)*.029:0,ap=new Map;function di(r,e){let t=`${e.id} ${r.c0}`,i=ap.get(t);return i||(i=e0(r,e),ap.set(t,i)),i}function e0(r,e){let t=r.c1-r.c0;if(r.wide){let c=Math.min(.955/t,(St-.2)/e.h);return{u:c,x0:r.c0===0?1-t*c:0,y0:.13}}let i=e.type==="washington_post_crossword",n=e.type==="slitherlink",s=i||n?.86:.92,a=Kg+(i?.035:n?.02:0),o=Qg(e),l=St-a-.085,h=Math.min(s/e.w,(l-(o===null?.5:o))/e.h,.118);return{u:h,x0:(1-e.w*h)/2+(i?.015:0),y0:a,panel:a+e.h*h+.03}}function Pa(r,e){let t=di(r,e),i=e.stamps.map((c,u)=>u).filter(c=>!e.stamps[c].given);i.sort((c,u)=>(c*7919+13)%97-(u*7919+13)%97||c-u);let n=e.stamps[0].rows[0].length,s=e.stamps[0].rows.length,a=St-t.panel-.135,o=1,l=0;for(let c=1;c<=i.length;c++){let u=Math.ceil(i.length/c),d=Math.min(.92/(c*n+(c-1)*.5),a/(u*s+(u-1)*.5));d>l&&(l=d,o=c)}l=Math.min(l,t.u);let h=o*n*l+(o-1)*.5*l;return new Map(i.map((c,u)=>[c,{x:(1-h)/2+u%o*(n+.5)*l,y:t.panel+.045+Math.floor(u/o)*(s+.5)*l,s:l}]))}function La(r,e,t,i){let n=di(r,e),s=r.c0+(t-n.x0)/n.u,a=(i-n.y0)/n.u,o=e.type==="slitherlink"?.3:0;return{x:s,y:a,inside:s>=r.c0-o&&s<r.c1+o&&a>=-o&&a<e.h+o}}function op(r){let e=[...new Set(r.levels.map(s=>s.type))],t=[],i=Math.min(92,1090/Math.max(1,e.length*Math.ceil(Math.max(...e.map(s=>r.levels.filter(a=>a.type===s).length))/10))),n=160;for(let s of e){let a=r.levels.filter(l=>l.type===s),o=Math.min(i*.78,48);a.forEach((l,h)=>t.push({l,n:h+1,t:s,first:h===0,x:440+h%10*Math.min(o*1.16,51),y:n+Math.floor(h/10)*i,s:o})),n+=i*Math.ceil(a.length/10)}return t}var Ia=(r,e,t,i,n,s,a)=>{for(let o=n;;o*=.94){r.font=`600 ${o}px ${Te}`;let l=[],h="",c=!0;for(let u of e.split(/\s+/)){let d=h?`${h} ${u}`:u;if(r.measureText(d).width<=t){h=d;continue}for(h&&l.push(h),h=u;r.measureText(h).width>t&&[...h].length>2;){if(o>s*1.35){c=!1;break}let p=[...h].length-1;for(;p>2&&r.measureText([...h].slice(0,p).join("")+"-").width>t;)p--;l.push([...h].slice(0,p).join("")+"-"),h=[...h].slice(p).join("")}if(!c)break}if(l.push(h),c&&l.length*o*a<=i||o<=s)return{f:o,lines:l}}};function lp(r,e,t,i,n){r.save(),r.translate(e,t),r.lineWidth=i*.16,r.lineCap="round",r.lineJoin="round";let s=(a,o,l,h)=>{r.beginPath(),r.moveTo(a-l*i*.34-h*i*.28,o-h*i*.34-l*i*.28),r.lineTo(a,o),r.lineTo(a-l*i*.34+h*i*.28,o-h*i*.34+l*i*.28),r.stroke()};r.beginPath(),n==="→"?(r.moveTo(-i*.4,0),r.lineTo(i*.4,0),r.stroke(),s(i*.4,0,1,0)):n==="↓"?(r.moveTo(0,-i*.4),r.lineTo(0,i*.4),r.stroke(),s(0,i*.4,0,1)):n==="↴"?(r.moveTo(-i*.4,-i*.3),r.lineTo(i*.15,-i*.3),r.lineTo(i*.15,i*.4),r.stroke(),s(i*.15,i*.4,0,1)):(r.moveTo(-i*.3,-i*.4),r.lineTo(-i*.3,i*.15),r.lineTo(i*.4,i*.15),r.stroke(),s(i*.4,i*.15,1,0)),r.restore()}var ka=class{constructor(e,t=null){this.mag=e,this.image=t,this.colorOf=()=>0,this.cells=new Map,this.clues=new Map,this.auto=new Set,this.fenceColor=new Map,this.hidden=null;let i={};this.numbers=new Map(e.levels.map(n=>[n.id,i[n.type]=(i[n.type]||0)+1]))}cellsOf(e){let t=this.cells.get(e);return t||(t=new Sa(this.mag.byId.get(e)),this.cells.set(e,t)),t}draw(e,t,i){let n=this.mag.pages[t],s=i*St,a=n.kind==="cover"||n.kind==="back";e.setTransform(1,0,0,1,0,0),e.globalAlpha=1,e.setLineDash([]),e.fillStyle=a?this.mag.episode.color||Vi:Zg,e.fillRect(0,0,i,s),e.scale(i/1e3,i/1e3),n.kind==="clues"?this.cluesPage(e,n):this[n.kind](e,t,n),a||this.notesOn(e,n),a||(e.font=`500 20px ${Te}`,e.fillStyle=Ra,e.textBaseline="alphabetic",e.textAlign=t%2?"left":"right",e.fillText(String(t),t%2?46:954,St*1e3-30))}notesOn(e,t){for(let i of this.mag.notes.get(t.key)||[])this.noteStroke(e,i)}noteStroke(e,t){let i=1e3/Hi,n=t.length;if(e.strokeStyle=e.fillStyle=Ei[t[1]%Ei.length],e.globalAlpha=.82,e.lineWidth=3.1,e.lineCap=e.lineJoin="round",e.beginPath(),n<=4)e.arc(t[2]*i,t[3]*i,2.4,0,7);else{e.moveTo(t[2]*i,t[3]*i);for(let s=4;s<n-2;s+=2)e.quadraticCurveTo(t[s]*i,t[s+1]*i,(t[s]+t[s+2])/2*i,(t[s+1]+t[s+3])/2*i);e.lineTo(t[n-2]*i,t[n-1]*i)}n<=4?e.fill():e.stroke(),e.globalAlpha=1,e.lineCap="butt",e.lineJoin="miter"}title(e,t,i){e.fillStyle=Vi,e.textAlign="left",e.textBaseline="alphabetic";let n=46;do e.font=`800 ${n}px ${Te}`,n-=2;while(e.measureText(t).width>700&&n>20);e.fillText(t,42,78),e.font=`500 24px ${Te}`,e.fillStyle="#6d6554",e.textAlign="right",e.fillText(i,958,78),e.fillRect(42,94,916,2.5)}nameOf(e){return`${de(e.type)} ${this.numbers.get(e.id)}`}grid(e,t,i){let n=this.mag.byId.get(i.level),s=this.mag.progress.get(n.id),a=di(i,n),o=`${this.mag.assisted.has(n.id)?"💡 ":""}${s.solved?"✓":`${Math.round(s.part*100)}%`}`,l=[n.name,o].filter(Boolean).join(" · ");if(this.title(e,!i.wide||i.c0===0?this.nameOf(n):"",!i.wide||i.c0>0?l:""),this.board(e,i,n,s,a),s.solved)e.save(),e.translate(500,St*1e3-52),e.rotate(-.03),e.font=`800 38px ${Te}`,e.fillStyle=as,e.textAlign="center",e.textBaseline="alphabetic",e.fillText(de("Solved!"),0,0),e.restore();else if(dc[n.type]){let{f:h,lines:c}=Ia(e,de(dc[n.type]),760,30,22,15,1.2);e.font=`500 ${h}px ${Te}`,e.fillStyle=Ra,e.textAlign="center",e.textBaseline="alphabetic",e.fillText(c[0],500,St*1e3-34)}}board(e,t,i,n,s){e.save(),e.translate(s.x0*1e3-t.c0*s.u*1e3,s.y0*1e3);let a=s.u*1e3;if(i.cells)if(i.notes&&this.paths(e,i,a,!1),n.grid){this.look(i,n);for(let o of i.cells)this.cell(e,t,be(o[0],o[1]),s);this.over(e,t,i,a)}else this[i.stamps?"stamps":i.type](e,i,n,a);else{for(let o=0;o<i.h;o++)for(let l=t.c0;l<t.c1;l++)this.cell(e,t,be(o,l),s);e.strokeStyle=Gt,e.lineWidth=3.2,e.strokeRect(t.c0*a,0,(t.c1-t.c0)*a,i.h*a)}e.restore(),(i.bank||i.words)&&this.bank(e,i,n,s),i.stamps&&this.loose(e,t,i,n)}again(e,t,i,n){let s=this.mag.byId.get(t.level),a=di(t,s);e.save(),e.translate((a.x0-t.c0*a.u)*1e3,a.y0*1e3),s.cells&&this.look(s,this.mag.progress.get(s.id));for(let o of i)this.cell(e,t,o,a,n.get(o));s.cells&&this.over(e,t,s,a.u*1e3),e.restore(),this.notesOn(e,t)}look(e,t){this.wrong=Yd(e,t),this.done=$d(e,t);let i=this.auto.has(e.id)&&(e.type==="sudoku"||e.type==="fiveli_sudoku")?Kh(e,t):null;this.could=i?i.domains:null}clueAt(e,t){let i=this.clues.get(e);return i||(i=new Map(this.mag.grids.get(e).clues.map(n=>[be(n.r,n.c),n])),this.clues.set(e,i)),i.get(t)}shape(e,t,i,n){let s=t.shapes.get(i);if(e.beginPath(),s&&s.s){let[a,o,l,h,c,u,d,p]=s.s;for(let f=0;f<=6;f++){let x=f/6,m=h+(u-h)*x;e.lineTo((a+Math.cos(d+p*x)*m)*n,(o+Math.sin(d+p*x)*m)*n)}for(let f=6;f>=0;f--){let x=f/6,m=l+(c-l)*x;e.lineTo((a+Math.cos(d+p*x)*m)*n,(o+Math.sin(d+p*x)*m)*n)}e.closePath()}else if(s&&s.p)s.p.forEach(([a,o])=>e.lineTo(a*n,o*n)),e.closePath();else{let[a,o,l,h]=t.box(i);e.rect(a*n,o*n,l*n,h*n)}}cell(e,t,i,n,s={}){let a=t.level,o=this.mag.byId.get(a),l=this.mag.grids.get(a),h=this.mag.progress.get(a),c=n.u*1e3,u=this.cellsOf(a),d=u.all.get(i);if(o.cells&&!d)return;let p=l.isAnswerCell(i),f=p||o.cells?null:this.clueAt(a,i),x=p&&h.locked(i),m=d?d[2]:p?"a":f?"c":"x",[g,y,v,_]=u.box(i),A=g*c,w=y*c,C=v*c,P=_*c,[N,F]=u.center(i).map(V=>V*c),z=u.size(i)*c,H=o.cells&&this.wrong.has(i),X=o.cells&&this.done.has(i);if(e.fillStyle=s.cursor?"#ffe38a":s.hint?"#cfe6ff":H?"#f8d3cb":s.same?"#d4e3fb":s.word?"#fff3c9":x&&p||X?"#e4efdc":{a:"#fffdf6",g:"#eee3c8",b:"#4a4640",p:"#d9cdb0",e:"#fffdf6",c:Jg,x:"#e3d8bc"}[m],m==="b"&&o.type==="kakuro"&&(e.fillStyle="#5a534a"),m==="e"&&o.type==="ciphered_crossword"&&(e.fillStyle="#4a4640"),this.shape(e,u,i,c),e.fill(),f&&this.clue(e,l,h,f,A,w,c),d&&(d[5]||d[6])&&(e.strokeStyle="#d9cfb6",e.lineWidth=1.2,e.beginPath(),e.moveTo(A,w),e.lineTo(A+C,w+P),e.stroke(),e.fillStyle="#fff8e6",e.font=`700 ${z*.32}px ${Te}`,e.textAlign="center",e.textBaseline="middle",d[5]&&e.fillText(d[5],A+C*.72,w+P*.28),d[6]&&e.fillText(d[6],A+C*.28,w+P*.75)),d&&d[4]&&(e.fillStyle="#9a4b33",e.font=`600 ${z*.24}px ${Te}`,e.textAlign="center",e.textBaseline="middle",u.shapes.has(i)?e.fillText(d[4],N+(u.shapes.get(i).s?this.out(u,i,c)[0]:0),F+(u.shapes.get(i).s?this.out(u,i,c)[1]:-z*.3)):e.fillText(d[4],A+z*.2,w+z*.19)),d&&d[3]&&m==="g"&&(e.fillStyle=Lt,e.font=`700 ${z*.6}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(d[3],N,F+z*.04)),p){if(!o.cells){for(let q of l.at.get(i))if(q.cells[0]===i){let Y=q.part==="u"?q.clue.u:q.clue.l,ie=c*.19;e.strokeStyle="#9a4b33",Y.x==="→"||Y.x==="↳"?lp(e,A+ie*.62,w+(Y.x==="→"?c*.5:ie*.72),ie,Y.x):lp(e,A+(Y.x==="↓"?c*.5:ie*.7),w+ie*.62,ie,Y.x)}}let V=h.letters.get(i);if(V)e.fillStyle=H?"#b3261e":x?"#235c38":Ei[this.colorOf(h.by.get(i)||0)%Ei.length],e.font=`${x?700:600} ${z*(d&&d[4]?.58:.66)}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(V,N,F+z*(d&&d[4]?.1:.04));else if(l.digits&&d){let q=h.cands.get(i),Y=q||this.could&&this.could.get(i);if(Y&&Y.size){let ie=l.digits[1],ee=ie>4?3:2,fe=Math.ceil(ie/ee);e.font=`600 ${z*(ee===3?.25:.32)}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=q?"#4a5f9a":"#b9ad93";for(let ve of Y)e.fillText(ve,A+C*((ve-1)%ee+.5)/ee,w+P*(Math.floor((ve-1)/ee)+.53)/fe)}}}e.strokeStyle=Gt,e.lineWidth=1.3,this.shape(e,u,i,c),e.stroke()}out(e,t,i){let n=e.shapes.get(t).s,s=n[6]+n[7]/2,a=(n[3]-n[2])*.34*i;return[Math.cos(s)*a,Math.sin(s)*a]}over(e,t,i,n){for(let[s,a,o,l,h,c]of i.blocks||[])if(e.strokeStyle=Gt,e.lineWidth=3.4,e.strokeRect(a*n,s*n,o*n,l*n),h&&c){e.beginPath();for(let u=c;u<o;u+=c)e.moveTo((a+u)*n,s*n),e.lineTo((a+u)*n,(s+l)*n);for(let u=h;u<l;u+=h)e.moveTo(a*n,(s+u)*n),e.lineTo((a+o)*n,(s+u)*n);e.stroke()}e.strokeStyle=Gt,e.lineWidth=5,e.lineCap="square";for(let[s,a,o,l]of i.bars||[])e.beginPath(),o&&(e.moveTo((a+1)*n,s*n),e.lineTo((a+1)*n,(s+1)*n)),l&&(e.moveTo(a*n,(s+1)*n),e.lineTo((a+1)*n,(s+1)*n)),e.stroke();e.lineCap="butt";for(let s of i.notes||[])if(s.t||s.arrow){let a=s.at[0]*n,o=s.at[1]*n;if(s.arrow){e.save(),e.translate(a,o),e.fillStyle="#fff8e6",e.strokeStyle="#9a4b33",e.lineWidth=2,e.beginPath(),e.arc(0,0,(s.rad||.4)*n*.8,0,7),e.fill(),e.stroke(),e.rotate(s.a||0);let l=(s.rad||.4)*n;e.fillStyle="#9a4b33",e.beginPath(),e.moveTo(l*1.2,0),e.lineTo(l*.84,-l*.22),e.lineTo(l*.84,l*.22),e.fill(),e.restore()}e.fillStyle=s.arrow?"#9a4b33":Lt,e.font=`700 ${n*(s.arrow?.42:.5)}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(s.t||"",a,o+n*.02)}if(i.type==="washington_post_crossword"){e.fillStyle=Ra,e.font=`600 ${Math.min(24,n*.42)}px ${Te}`,e.textAlign="center",e.textBaseline="middle";for(let s=0;s<i.w;s++)e.fillText(s+1,(s+.5)*n,-18);for(let s=0;s<i.h;s++)e.fillText(s+1,-22,(s+.5)*n)}}paths(e,t,i){e.strokeStyle="#cdbf9c",e.lineWidth=3;for(let n of t.notes)n.p&&(e.beginPath(),n.p.forEach(([s,a])=>e.lineTo(s*i,a*i)),e.stroke())}clue(e,t,i,n,s,a,o){let l=n.u&&n.l,h=o*.045;for(let[c,u]of[[n.u,0],[n.l,1]]){if(!c)continue;let d=l?o/2:o,p=a+(l&&u?o/2:0),f=t.answers.find(v=>v.clue===n&&v.part===(u?"l":"u")),x=i.done.has(f.n),{f:m,lines:g}=Ia(e,c.t,o-h*2,d-h*1.6,o*.18,o*.092,1.06);e.font=`600 ${m}px ${Te}`,e.fillStyle=x?"#8d9b82":Lt,e.textAlign="center",e.textBaseline="middle";let y=Math.min(g.length,Math.max(1,Math.floor((d-h)/(m*1.06))));for(let v=0;v<y;v++)e.fillText(g[v],s+o/2,p+d/2+(v-(y-1)/2)*m*1.06)}l&&(e.strokeStyle="#8e8570",e.lineWidth=1,e.beginPath(),e.moveTo(s,a+o/2),e.lineTo(s+o,a+o/2),e.stroke())}nonogram(e,t,i,n){let s=this.cellsOf(t.id),a=[],o=[],l=this.hotLine&&this.hotLine.level===t.id?this.hotLine:null;if(!i.solved)for(let h of Ys(i))(h.row?a:o)[h.i]=Zh(h);for(let h of t.cells){let c=i.solved?{done:!0}:h[0]>=0&&h[1]<0?a[h[0]]:h[1]>=0&&h[0]<0?o[h[1]]:null,u=l&&(h[0]===l.r||h[1]===l.c)&&(h[0]<0||h[1]<0),d=be(h[0],h[1]),[p,f,x,m]=s.box(d),g=h[0]>=0&&h[1]>=0&&h[2]==="e",y=g?i.marks.get(d):0;e.fillStyle=g?y===1?i.solved?"#2f7d4c":"#2e2a3a":"#fffdf6":c&&c.contradictory?"#f8d3cb":u?"#fff0b8":c&&c.done?"#e4efdc":"#f0e7d0",e.fillRect(p*n,f*n,x*n,m*n),y===2&&!i.solved&&(e.strokeStyle=i.auto.has(d)?"#d8ccb4":"#b09b84",e.lineWidth=n*.07,e.beginPath(),e.moveTo((p+.28)*n,(f+.28)*n),e.lineTo((p+.72)*n,(f+.72)*n),e.moveTo((p+.72)*n,(f+.28)*n),e.lineTo((p+.28)*n,(f+.72)*n),e.stroke()),h[3]&&!g&&(e.fillStyle=c&&c.contradictory?"#b3261e":c&&c.done?"#8aa07c":Lt,e.font=`600 ${n*.58}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(h[3],(p+x/2)*n,(f+m/2)*n)),g&&(e.strokeStyle="#b8ac90",e.lineWidth=1,e.strokeRect(p*n,f*n,x*n,m*n))}this.over(e,null,t,n)}slitherlink(e,t,i,n){let s=i.solved?null:Zd(t,i),a=this.fenceColors(t.id,i);for(let o of t.cells)if(o[3]){let l=be(o[0],o[1]),h=s&&s.bad.has(l),c=!s||s.ok.has(l);(h||c)&&(e.fillStyle=h?"#f8d3cb":"#e4efdc",e.beginPath(),e.arc((o[1]+.5)*n,(o[0]+.5)*n,n*.34,0,7),e.fill()),e.fillStyle=h?"#b3261e":c?"#5f7d52":Lt,e.font=`600 ${n*.5}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(o[3],(o[1]+.5)*n,(o[0]+.53)*n)}for(let[o,l]of i.edges){let[h,c,u]=o.split(" ").map(Number),d=u*n,p=c*n,f=d+(h?0:n),x=p+(h?n:0);if(l===1)e.strokeStyle=i.solved?as:sp[a.get(o)%sp.length],e.lineWidth=n*.1,e.lineCap="round",e.beginPath(),e.moveTo(d,p),e.lineTo(f,x),e.stroke(),e.lineCap="butt";else if(!i.solved){let m=(d+f)/2,g=(p+x)/2,y=n*.1;e.strokeStyle="#b09b84",e.lineWidth=n*.05,e.beginPath(),e.moveTo(m-y,g-y),e.lineTo(m+y,g+y),e.moveTo(m+y,g-y),e.lineTo(m-y,g+y),e.stroke()}}e.fillStyle=Gt;for(let o=0;o<=t.h;o++)for(let l=0;l<=t.w;l++)e.beginPath(),e.arc(l*n,o*n,n*.055,0,7),e.fill()}fenceColors(e,t){let i=this.fenceColor.get(e)||new Map,n=new Map,s=new Set,a=Jd(t).map(o=>{let l=new Map;for(let c of o)i.has(c)&&l.set(i.get(c),(l.get(i.get(c))||0)+1);let h=[...l].sort((c,u)=>u[1]-c[1]||c[0]-u[0])[0];return{es:o,want:h?h[0]:null,n:h?h[1]:0}}).sort((o,l)=>l.n-o.n);for(let o of a){let l=o.want;if(l===null||s.has(l))for(l=0;s.has(l);)l++;s.add(l);for(let h of o.es)n.set(h,l)}return this.fenceColor.set(e,n),n}hashi(e,t,i,n){for(let[s,a]of i.bridges){let{a:o,b:l}=i.pairs.get(s),h=o.r===l.r?0:1;e.strokeStyle=i.solved?as:"#1f3f8f",e.lineWidth=n*.07;for(let c=0;c<a;c++){let u=a===2?(c-.5)*.2*n:0;e.beginPath(),e.moveTo((o.c+.5)*n+u*h,(o.r+.5)*n+u*(1-h)),e.lineTo((l.c+.5)*n+u*h,(l.r+.5)*n+u*(1-h)),e.stroke()}}for(let s of i.islands){let a=i.count(s.i),o=a===s.n;e.beginPath(),e.arc((s.c+.5)*n,(s.r+.5)*n,n*.4,0,7),e.fillStyle=a>s.n?"#f8d3cb":o?"#dfead5":"#fffdf6",e.fill(),e.strokeStyle=Gt,e.lineWidth=2.4,e.stroke(),e.fillStyle=Lt,e.font=`700 ${n*.46}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(s.n,(s.c+.5)*n,(s.r+.53)*n)}}shikaku(e,t,i,n){e.fillStyle="#fffdf6",e.fillRect(0,0,t.w*n,t.h*n);let s=new Set(Kd(i));i.rects.forEach(a=>{let[o,l,h,c]=a;e.fillStyle=s.has(a)?"#f8d3cb":Ca[(o*3+l*5)%Ca.length],e.fillRect(l*n,o*n,h*n,c*n)}),e.strokeStyle="#b8ac90",e.lineWidth=1;for(let a=0;a<=t.h;a++)e.beginPath(),e.moveTo(0,a*n),e.lineTo(t.w*n,a*n),e.stroke();for(let a=0;a<=t.w;a++)e.beginPath(),e.moveTo(a*n,0),e.lineTo(a*n,t.h*n),e.stroke();i.rects.forEach(a=>{let[o,l,h,c]=a;e.strokeStyle=i.solved?as:s.has(a)?"#b3261e":"#1f3f8f",e.lineWidth=4,e.strokeRect(l*n+2,o*n+2,h*n-4,c*n-4)}),e.fillStyle=Lt,e.font=`700 ${n*.48}px ${Te}`,e.textAlign="center",e.textBaseline="middle";for(let[a,o,l]of t.clueCells)e.fillText(l,(o+.5)*n,(a+.53)*n);e.strokeStyle=Gt,e.lineWidth=3.2,e.strokeRect(0,0,t.w*n,t.h*n)}maze(e,t,i,n){if(e.fillStyle="#fffdf6",e.fillRect(0,0,t.w*n,t.h*n),i.path.length>1){e.strokeStyle=i.solved?as:"#5b7fd0",e.lineWidth=n*.28,e.lineCap=e.lineJoin="round",e.globalAlpha=.75,e.beginPath();for(let s of i.path)e.lineTo((Ue(s)+.5)*n,(je(s)+.5)*n);e.stroke(),e.globalAlpha=1,e.lineCap="butt",e.lineJoin="miter"}for(let[s,a,o]of[[i.start,"S","#1f3f8f"],[i.end,"E",Vi]])e.fillStyle=o,e.beginPath(),e.arc((Ue(s)+.5)*n,(je(s)+.5)*n,n*.36,0,7),e.fill(),e.fillStyle="#fff",e.font=`700 ${n*.44}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(a,(Ue(s)+.5)*n,(je(s)+.53)*n);e.strokeStyle=Gt,e.lineWidth=Math.max(2.4,n*.09),e.lineCap="round",e.beginPath();for(let[s,a,o,l]of t.bars||[])o&&(e.moveTo((a+1)*n,s*n),e.lineTo((a+1)*n,(s+1)*n)),l&&(e.moveTo(a*n,(s+1)*n),e.lineTo((a+1)*n,(s+1)*n));e.stroke(),e.lineCap="butt",e.lineWidth=5,e.strokeRect(0,0,t.w*n,t.h*n)}surplus_words(e,t,i,n){e.fillStyle="#fffdf6",e.fillRect(0,0,t.w*n,t.h*n);for(let[a]of i.found){let o=t.words[a].c,l=o[0],h=o[o.length-1];e.strokeStyle=Ca[a%Ca.length],e.globalAlpha=.85,e.lineWidth=n*.7,e.lineCap="round",e.beginPath(),e.moveTo((Ue(l)+.5)*n,(je(l)+.5)*n),e.lineTo((Ue(h)+.5)*n,(je(h)+.5)*n),e.stroke(),e.globalAlpha=1,e.lineCap="butt"}let s=i.solved?new Set(t.left):null;for(let a of t.cells){let o=be(a[0],a[1]);this.same&&this.same.level===t.id&&this.same.t===a[3]&&(e.fillStyle="rgba(90,140,230,.32)",e.fillRect(a[1]*n,a[0]*n,n,n)),e.fillStyle=s&&s.has(o)?Vi:Lt,e.font=`${s&&s.has(o)?800:600} ${n*.56}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(a[3],(a[1]+.5)*n,(a[0]+.53)*n)}e.strokeStyle=Gt,e.lineWidth=3.2,e.strokeRect(0,0,t.w*n,t.h*n)}stamps(e,t,i,n){e.fillStyle="#efe6cf",e.fillRect(0,0,t.w*n,t.h*n);for(let[s,a]of i.on){if(this.lifted===`${t.id} ${a}`)continue;let[o,l]=t.slots[s];this.piece(e,t.stamps[a],l*n,o*n,n,i.given.has(a)?"#eee3c8":i.solved?"#e4efdc":"#fffdf6")}e.strokeStyle=Gt,e.lineWidth=3.2;for(let[s,a,o,l]of t.slots)e.strokeRect(a*n,s*n,o*n,l*n)}piece(e,t,i,n,s,a="#fffdf6"){t.rows.forEach((o,l)=>o.forEach((h,c)=>{if(h==="")return;let u=h==="#"||h==="█";e.fillStyle=u?"#4a4640":a,e.fillRect(i+c*s,n+l*s,s,s),e.strokeStyle=Gt,e.lineWidth=1.2,e.strokeRect(i+c*s,n+l*s,s,s),u||(e.fillStyle=Lt,e.font=`600 ${s*.62}px ${Te}`,e.textAlign="center",e.textBaseline="middle",e.fillText(h,i+(c+.5)*s,n+(l+.53)*s))}))}loose(e,t,i,n){let s=di(t,i);e.fillStyle=Vi,e.font=`700 24px ${Te}`,e.textAlign="left",e.textBaseline="alphabetic",e.fillText(de("Pieces"),42,(s.panel+.028)*1e3);for(let[a,o]of Pa(t,i)){let l=i.stamps[a].rows[0].length*o.s*1e3,h=i.stamps[a].rows.length*o.s*1e3;n.where(a)===null&&this.lifted!==`${i.id} ${a}`?(e.fillStyle="rgba(60,40,20,.18)",e.fillRect(o.x*1e3+4,o.y*1e3+5,l,h),this.piece(e,i.stamps[a],o.x*1e3,o.y*1e3,o.s*1e3),e.strokeStyle=Gt,e.lineWidth=2.4,e.strokeRect(o.x*1e3,o.y*1e3,l,h)):(e.strokeStyle="#d6cab0",e.lineWidth=1.4,e.setLineDash([6,6]),e.strokeRect(o.x*1e3,o.y*1e3,l,h),e.setLineDash([]))}}bank(e,t,i,n){if(t.stamps)return;let s=t.bank||[[0,t.words.map(h=>h.w)]],a=958,o=new Map;if(t.words)for(let h of i.found.keys())o.set(t.words[h].w,1);else this.placed(t,i,o);let l=n.panel*1e3+24;e.textBaseline="alphabetic",e.textAlign="left",e.fillStyle=Vi,e.font=`700 22px ${Te}`,e.fillText(de(t.type==="number_hunt"?"Numbers":"Words"),42,l-4),l+=26;for(let[h,c]of s){let u=42;h&&(e.fillStyle="#9a4b33",e.font=`700 20px ${Te}`,e.fillText(`${h}`,u,l)),u+=h?36:0;let d=u;for(let p of c){e.font=`600 20px ${Te}`;let f=e.measureText(p).width;u+f>a&&(u=d,l+=28);let x=o.get(p)||0,m=x>0;m&&o.set(p,x-1),e.fillStyle=m?"#b0a68f":Lt,e.fillText(p,u,l),m&&e.fillRect(u-2,l-8,f+4,2.4),u+=f+20}l+=28}if(t.sentence){e.font=`600 21px ${Te}`,e.fillStyle=i.solved?Vi:Ra;let h=i.solved?t.sentence:t.sentence.replace(/\p{L}/gu,"·"),{f:c,lines:u}=Ia(e,`${de("The letters left over:")} ${h}`,916,60,22,14,1.2);e.font=`600 ${c}px ${Te}`,u.slice(0,2).forEach((d,p)=>e.fillText(d,42,l+6+p*c*1.2))}}placed(e,t,i){this.slots||(this.slots=new Map);let n=this.slots.get(e.id);if(!n){n=[];let a=new Set(e.cells.filter(o=>o[2]==="a"||o[2]==="g").map(o=>be(o[0],o[1])));for(let o of a)for(let l of[1,256])if(!a.has(o-l)||l===1&&Ue(o)===0){let h=[o];for(;a.has(h[h.length-1]+l);)h.push(h[h.length-1]+l);h.length>1&&n.push(h)}this.slots.set(e.id,n)}let s=new Map(e.cells.filter(a=>a[2]==="g").map(a=>[be(a[0],a[1]),a[3]]));for(let a of n){let o=a.map(l=>t.letters.get(l)||s.get(l)||" ").join("");o.includes(" ")||i.set(o,(i.get(o)||0)+1)}}cover(e){let t=this.mag.episode;if(e.fillStyle="#f7ecd2",e.textAlign="center",e.textBaseline="alphabetic",this.image){e.save(),e.beginPath(),e.rect(40,250,920,920),e.clip();let n=Math.max(920/this.image.width,920/this.image.height);e.drawImage(this.image,40+(920-this.image.width*n)/2,250+(920-this.image.height*n)/2,this.image.width*n,this.image.height*n),e.restore(),e.font=`800 76px ${Te}`,e.fillText("BULMACA KEYFİ",500,120),e.font=`600 52px ${Te}`,e.fillText(t.title,500,205)}else{e.strokeStyle="rgba(247,236,210,.5)",e.lineWidth=4,e.strokeRect(40,40,920,St*1e3-80),e.font=`800 104px ${Te}`,e.fillText("BULMACA",500,220),e.fillText("KEYFİ",500,330),e.font=`600 52px ${Te}`,e.fillText(t.title,500,430);let i=[...new Set(this.mag.levels.map(a=>a.type))],n=3,s=30;e.font=`500 ${s}px ${Te}`,i.forEach((a,o)=>e.fillText(de(a),190+o%n*310,560+Math.floor(o/n)*84,290))}e.fillStyle="#f7ecd2",e.font=`500 30px ${Te}`,e.fillText(de("Turn the page"),500,St*1e3-70)}back(e){e.fillStyle="#f7ecd2",e.textAlign="center",e.textBaseline="alphabetic",e.font=`700 60px ${Te}`,e.fillText("BULMACA KEYFİ",500,660)}contents(e){this.title(e,de("Contents"),this.mag.episode.title);for(let t of op(this.mag)){let i=this.mag.progress.get(t.l.id);e.textBaseline="middle",t.first&&(e.textAlign="left",e.fillStyle=Lt,e.font=`600 ${Math.min(32,t.s*.72)}px ${Te}`,e.fillText(de(t.t),46,t.y+t.s/2,380)),e.fillStyle=i.solved?as:i.touched?"#f2dc9a":"#efe6cf",e.strokeStyle="#c9bd9f",e.lineWidth=1.5,e.beginPath(),e.roundRect(t.x,t.y,t.s,t.s,t.s*.2),e.fill(),e.stroke(),e.fillStyle=i.solved?"#fff":Lt,e.textAlign="center",e.font=`700 ${t.s*.46}px ${Te}`,e.fillText(i.solved?"✓":String(t.n),t.x+t.s/2,t.y+t.s/2+1)}}contentsAt(e,t){let i=op(this.mag),n=i.find(a=>e*1e3>=a.x-2&&e*1e3<=a.x+a.s+2&&t*1e3>=a.y-2&&t*1e3<=a.y+a.s+2);if(n)return n.l;let s=i.filter(a=>a.first&&t*1e3>=a.y-4&&t*1e3<=a.y+a.s+4)[0];return!s||e>.44?null:(i.find(a=>a.t===s.t&&!this.mag.progress.get(a.l.id).solved)||s).l}clueGroups(e,t){let i=[],n=(a,o)=>{o.length&&i.push([a,o])},s=t.answers;if(e.type==="washington_post_crossword")for(let[a,o]of[["h","Across"],["v","Down"]]){let l=new Map;for(let h of s)h.d===a&&l.set(h.side,[...l.get(h.side)||[],h]);n(de(o),[...l].sort((h,c)=>h[0]-c[0]).map(([h,c])=>[String(h+1),c]))}else if(e.type==="spiral_crossword")for(let[a,o]of[[0,"Inwards"],[1,"Outwards"]])n(de(o),s.filter(l=>l.side===a).map(l=>[l.range,[l]]));else n(de("Clues"),s.map(a=>[String(a.no||a.n+1),[a]]));return i}cluesPage(e,t){let i=this.mag.byId.get(t.level),n=this.mag.grids.get(i.id),s=this.mag.progress.get(i.id),a=this.clueGroups(i,n);this.title(e,de("Clues"),this.nameOf(i));for(let o=25;o>=10;o-=.5)if(this.columns(e,a,s,o,o<=10))return}columns(e,t,i,n,s){let l=St*1e3-66,h=n*1.28,c=[],u=0,d=136,p=f=>(d+f>l&&(u++,d=136),u<2);for(let[f,x]of t){if(!p(h*3)&&!s)return!1;c.push([f,42+u*476,d+n,`800 ${n*1.15}px ${Te}`,Vi]),d+=h*1.5;for(let[m,g]of x){e.font=`500 ${n}px ${Te}`;let y=Math.max(n*1.9,e.measureText(`${m} `).width+n*.4),v=[[]],_=0;if(g.forEach((w,C)=>{for(let P of`${w.text}${C<g.length-1?" •":""}`.split(/\s+/)){let N=e.measureText(`${P} `).width;_+N>440-y&&_&&(v.push([]),_=0),v[v.length-1].push([P,_,i.done.has(w.n)]),_+=N}}),!p(v.length*h)&&!s)return!1;let A=42+u*476;c.push([m,A,d+n,`700 ${n}px ${Te}`,"#9a4b33"]);for(let w of v){for(let[C,P,N]of w)c.push([C,A+y+P,d+n,`500 ${n}px ${Te}`,N?"#a9a08a":Lt]);d+=h}}d+=h*.5}e.textAlign="left",e.textBaseline="alphabetic";for(let[f,x,m,g,y]of c)e.font=g,e.fillStyle=y,e.fillText(f,x,m);return!0}howto(e){this.title(e,de("How to play"),"");let t=["Every puzzle is played by hand: written, filled, fenced, bridged, traced.","Write with a pen, a finger or the mouse: each letter is read a moment after it is written.","Write notes anywhere on the empty paper: they stay.","Drag the edge or the corner of a page to turn it, or flick it with a finger.","Two fingers (or the wheel) zoom and move the page.","The eraser, the pen’s other end or the right button rubs out.","Tap a cell to type with the keyboard instead.","A word that is right is locked and turns green.","The lightbulb shows a piece of the answer; the glass where to look.","The bookshelf is the books button, at the top.","Open a room and solve together, all at one table."],i=180;for(let n of t){let{f:s,lines:a}=Ia(e,de(n),840,200,31,25,1.28);e.fillStyle="#9a4b33",e.beginPath(),e.arc(62,i-12,8,0,7),e.fill(),e.fillStyle=Lt,e.textAlign="left",e.textBaseline="alphabetic",e.font=`500 ${s}px ${Te}`;for(let o of a)e.fillText(o,92,i),i+=s*1.28;i+=21}}notes(e){this.title(e,de("Notes"),""),e.strokeStyle="#d9cfb6",e.lineWidth=2;for(let t=170;t<1270;t+=56)e.beginPath(),e.moveTo(46,t),e.lineTo(954,t),e.stroke()}};var Me=.21,We=Me*St,Dt=36,pn=10,fn=(r,e,t)=>Math.max(e,Math.min(t,r)),Da=class{constructor(e,{renderer:t,texW:i,cover:n=null}){this.mag=e,this.drawer=new ka(e,n),this.leaf=Math.min(7e-4,.012/(e.pages.length/2)),this.group=new lt,this.texW=i,this.aniso=t.capabilities.getMaxAnisotropy(),this.pool=new Map,this.turn=null,this.tick=0;let s=()=>new dt({color:"#ffffff",roughness:.86,metalness:0}),a=new dt({color:"#e8dfc9",roughness:.95});this.sides=[-1,1].map(g=>{let y=new Ne(new Ot(Me,1,We),a);y.castShadow=y.receiveShadow=!0;let v=new kt(Me,We);v.rotateX(-Math.PI/2);let _=new Ne(v,s());return _.receiveShadow=!0,y.position.x=_.position.x=g*Me/2,this.group.add(y,_),{d:g,block:y,top:_,page:-1}});let o=document.createElement("canvas");o.width=128,o.height=4;let l=o.getContext("2d"),h=l.createLinearGradient(0,0,128,0);for(let[g,y]of[[0,0],[.3,.05],[.47,.22],[.5,.36],[.53,.22],[.7,.05],[1,0]])h.addColorStop(g,`rgba(40,28,14,${y})`);l.fillStyle=h,l.fillRect(0,0,128,4);let c=new kt(Me*.32,We);c.rotateX(-Math.PI/2),this.fold=new Ne(c,new Ht({map:new Pt(o),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.fold.renderOrder=1,this.group.add(this.fold);let u=(Dt+1)*(pn+1);this.pos=new tt(new Float32Array(u*3),3).setUsage(es),this.nor=new tt(new Float32Array(u*3),3).setUsage(es);let d=new Float32Array(u*2),p=new Float32Array(u*2),f=[],x=[];for(let g=0;g<=pn;g++)for(let y=0;y<=Dt;y++){let v=g*(Dt+1)+y;if(d.set([y/Dt,1-g/pn],v*2),p.set([1-y/Dt,1-g/pn],v*2),y<Dt&&g<pn){let _=v,A=v+1,w=v+Dt+1,C=w+1;f.push(_,w,A,A,w,C),x.push(_,A,w,A,C,w)}}let m=(g,y)=>{let v=new Ke;return v.setAttribute("position",this.pos),v.setAttribute("uv",new tt(g,2)),v.setIndex(y),v};this.front=new Ne(m(d,f),s()),this.front.geometry.setAttribute("normal",this.nor),this.nor2=new tt(new Float32Array(u*3),3).setUsage(es),this.behind=new Ne(m(p,x),s()),this.behind.geometry.setAttribute("normal",this.nor2);for(let g of[this.front,this.behind])g.frustumCulled=!1,g.castShadow=g.receiveShadow=!0,g.visible=!1,this.group.add(g);this.front.castShadow=!0,this.behind.castShadow=!1,this.rest()}texture(e){if(e<0||e>=this.mag.pages.length)return null;let t=this.pool.get(e);if(!t){if(this.pool.size>=8){let s=new Set([...this.sides.map(o=>o.page),this.front.userData.page,this.behind.userData.page]),a=[...this.pool].filter(([o])=>!s.has(o)).sort((o,l)=>o[1].used-l[1].used)[0];a&&(this.pool.delete(a[0]),a[1].tex.dispose(),a[1].canvas.width=0)}let i=document.createElement("canvas");i.width=this.texW,i.height=Math.round(this.texW*St);let n=new Pt(i);n.colorSpace=at,n.anisotropy=this.aniso,t={canvas:i,g:i.getContext("2d",{willReadFrequently:!0}),tex:n,used:0},this.drawer.draw(t.g,e,i.width),this.pool.set(e,t)}return t.used=++this.tick,t.tex}prepare(e,t,i){let n=this.mag.spread,s=this.mag.pages.length-1;this.set(this.front,Math.min(s,2*n)),this.set(this.behind,Math.max(0,Math.min(s,2*n-1))),this.front.visible=this.behind.visible=!0,e.render(t,i),this.rest()}warm(e){let t=this.mag.spread;for(let i of[2*t+1,2*t+2,2*t-2,2*t-3])if(i>=0&&i<this.mag.pages.length&&!this.pool.has(i))return e.initTexture(this.texture(i)),!0;return!1}set(e,t){e.userData.page!==t&&(e.userData.page=t,e.material.map||(e.material.needsUpdate=!0),e.material.map=this.texture(t))}redraw(e){let t=this.pool.get(e);t&&(this.drawer.draw(t.g,e,t.canvas.width),t.tex.needsUpdate=!0)}redrawAll(){for(let e of this.pool.keys())this.redraw(e)}redrawCells(e,t,i=new Map){for(let[n,s]of this.pool){let a=this.mag.pages[n],o=s.canvas.width/1e3;if(a.level!==e||a.kind!=="grid")continue;let l=[...t].filter(h=>!a.wide||Ue(h)>=a.c0&&Ue(h)<a.c1);l.length&&(s.g.setTransform(o,0,0,o,0,0),this.drawer.again(s.g,a,l,i),s.tex.needsUpdate=!0)}}addNote(e,t){let i=this.pool.get(e);i&&(i.g.setTransform(i.canvas.width/1e3,0,0,i.canvas.width/1e3,0,0),this.drawer.noteStroke(i.g,t),i.tex.needsUpdate=!0)}redrawLevel(e){this.mag.pages.forEach((t,i)=>{t.level===e&&this.redraw(i)})}dispose(){for(let e of this.pool.values())e.tex.dispose(),e.canvas.width=0;this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.group.parent&&this.group.parent.remove(this.group)}leaves(e){return[e,this.mag.pages.length/2-e]}height(e,t=this.mag.spread){return Math.max(0,this.leaves(t)[e<0?0:1])*this.leaf}stacks(e,t,i,n){for(let[s,a,o]of[[this.sides[0],e,i],[this.sides[1],t,n]]){let l=a>0;if(s.block.visible=s.top.visible=l,!l){s.page=-1,s.top.userData.page=void 0;continue}let h=a*this.leaf;s.block.scale.y=h,s.block.position.y=h/2-15e-5,s.top.position.y=h,s.page=o,this.set(s.top,o)}this.fold.visible=e>0&&t>0,this.fold.position.y=Math.max(e,t)*this.leaf+2e-4}rest(){let e=this.mag.spread,[t,i]=this.leaves(e);this.front.visible=this.behind.visible=!1,this.front.userData.page=this.behind.userData.page=void 0,this.stacks(t,i,2*e-1,2*e)}begin(e,t,i=.85){let n=Math.min(e,t),s=Math.max(e,t),a=t>e;this.turn={from:e,to:t,lo:n,hi:s,fwd:a,f:a?0:1,goal:null,y:i,drag:!0};let o=this.mag.pages.length/2;this.stacks(n,o-s,2*n-1,2*s),this.set(this.front,2*n),this.set(this.behind,2*s-1),this.front.visible=this.behind.visible=!0,this.bend()}hold(e,t){let i=this.turn;i&&(i.goal=null,i.drag=!0,i.target=Math.acos(fn(e,-1,1))/Math.PI,t!==void 0&&(i.y=fn(t,0,1)))}release(e,t){let i=this.turn;i&&(i.goal=e,i.drag=!1,i.done=t)}cancel(){this.turn=null,this.rest()}grip(){let e=this.turn;return e?this.point(1,e.y):null}update(e){let t=this.turn;if(t){if(t.goal!==null&&t.goal!==void 0){let i=t.goal-t.f,n=1.5+2.6*Math.sin(Math.PI*fn(t.f,.08,.92));if(t.f+=Math.sign(i)*Math.min(Math.abs(i),n*e),Math.abs(t.goal-t.f)<1e-4){let s=t.done;this.turn=null,this.rest(),s&&s();return}}else t.target!==void 0&&(t.f+=(t.target-t.f)*(1-Math.exp(-e*22)));this.bend()}}point(e,t){let i=this.turn,n=new b,s=this.height(1,i.hi)+this.leaf,a=this.height(-1,i.lo)+this.leaf,o=Math.sin(Math.PI*i.f),l=i.fwd?1:-1,h=fn(i.f+l*o*.07*(1-2*Math.abs(t-i.y)),0,1),c=Math.PI*h,u=o*.95*l,d=0,p=0,f=Math.max(1,Math.round(e*Dt)),x=e*Me/f;for(let g=0;g<f;g++){let y=(g+.5)/Dt,v=fn(c-u*(.5-y),0,Math.PI);d+=Math.cos(v)*x,p+=Math.sin(v)*x}let m=s+(a-s)*h;return n.set(d,p+m,(t-.5)*We)}bend(){let e=this.pos.array,t=this.nor.array,i=this.nor2.array,n=this.turn,s=Dt+1,a=this.height(1,n.hi)+this.leaf,o=this.height(-1,n.lo)+this.leaf,l=Math.sin(Math.PI*n.f),h=n.fwd?1:-1;for(let c=0;c<=pn;c++){let u=c/pn,d=fn(n.f+h*l*.07*(1-2*Math.abs(u-n.y)),0,1),p=Math.PI*d,f=l*.95*h,x=a+(o-a)*d,m=0,g=0;for(let y=0;y<=Dt;y++){let v=(c*s+y)*3;e[v]=m,e[v+1]=g+x,e[v+2]=(u-.5)*We;let _=fn(p-f*(.5-(y+.5)/Dt),0,Math.PI);t[v]=-Math.sin(_),t[v+1]=Math.cos(_),t[v+2]=0,i[v]=Math.sin(_),i[v+1]=-Math.cos(_),i[v+2]=0,m+=Math.cos(_)*Me/Dt,g+=Math.sin(_)*Me/Dt}}this.pos.needsUpdate=this.nor.needsUpdate=this.nor2.needsUpdate=!0}at(e,t){let i=e<0?-1:1,n=this.sides[i<0?0:1];return!n.top.visible||Math.abs(e)>Me||Math.abs(t)>We/2?null:{page:n.page,d:i,x:(i<0?e+Me:e)/Me,y:(t+We/2)/Me}}world(e,t,i,n=0){let s=e%2?-1:1;return new b((s<0?t-1:t)*Me,this.height(s)+n,i*Me-We/2)}};var Na=.085,hp=We+.115,t0=.012,os=new b(0,.02,-2.6);function i0(r,e){let t=document.createElement("canvas");t.width=512,t.height=Math.round(512*We/Me);let i=t.getContext("2d",{willReadFrequently:!0}),n=512/1e3;if(i.scale(n,n),i.fillStyle=r.color||"#8f2f2a",i.fillRect(0,0,1e3,1334),i.fillStyle="#f7ecd2",i.textAlign="center",i.textBaseline="alphabetic",e){i.save(),i.beginPath(),i.rect(40,250,920,920),i.clip();let a=Math.max(920/e.width,920/e.height);i.drawImage(e,40+(920-e.width*a)/2,250+(920-e.height*a)/2,e.width*a,e.height*a),i.restore(),i.font=`800 76px ${Te}`,i.fillText("BULMACA KEYFİ",500,120),i.font=`600 58px ${Te}`,i.fillText(r.title,500,205,900)}else i.strokeStyle="rgba(247,236,210,.5)",i.lineWidth=6,i.strokeRect(50,50,900,1234),i.font=`800 118px ${Te}`,i.fillText("BULMACA",500,270),i.fillText("KEYFİ",500,395),i.font=`600 66px ${Te}`,i.fillText(r.title,500,530,860),i.font=`500 34px ${Te}`,r.types.slice(0,20).forEach((a,o)=>i.fillText(de(a),280+o%2*440,640+Math.floor(o/2)*60,400));let s=new Pt(t);return s.colorSpace=at,s.anisotropy=8,s}var Ua=class{constructor(e,t,i,n=3){this.per=n,this.group=new lt,this.group.position.copy(os),e.add(this.group);let s=p=>new dt({color:p,roughness:.7,fog:!1}),a=Math.ceil(t.length/n),o=Math.min(n,t.length),l=o*(Me+Na)+Na,h=a*hp+.05;this.size={w:l+.1,h:h+.1};let c=(p,f,x,m,g,y,v)=>{let _=new Ne(new Ot(p,f,x),v);return _.position.set(m,g,y),this.group.add(_),_},u=s("#4a2f1b"),d=s("#6b4527");c(l+.06,h+.06,.02,0,h/2,-.06,u);for(let p of[-1,1])c(.03,h+.06,.16,p*(l/2+.015),h/2,.01,d);c(l+.12,.03,.18,0,h+.03,.01,d),c(8,6,.02,0,1,-.2,s("#3b2a1d")),this.books=t.map((p,f)=>{let x=Math.floor(f/n),m=f%n,g=Math.min(n,t.length-x*n),y=(m-(g-1)/2)*(Me+Na),v=h-(x+1)*hp+.095;m===0&&c(l,.022,.15,0,v-.011,.005,d);let _=new dt({color:"#ffffff",roughness:.6,fog:!1}),A=s("#e8dfc9"),w=new Ne(new Ot(Me,We,t0),[A,A,A,A,_,A]);w.castShadow=!0,w.position.set(y,v+We/2,-.01),w.rotation.x=-.11,this.group.add(w);let C=new Ne(new kt(Me+Na*.7,.062),new Ht({transparent:!0,fog:!1,depthWrite:!1}));return C.position.set(y,v-.05,.085),this.group.add(C),i(p).then(P=>{_.map=i0(p,P),_.needsUpdate=!0}),{e:p,book:w,label:C,home:w.position.clone(),lift:0}}),this.lamp=new va("#ffe9c4",3.4,5,1.2),this.lamp.position.set(0,h*.62,1.25),this.group.add(this.lamp),this.pull=null,this.hot=null}progress(e){for(let t of this.books){let i=e(t.e.id),n=document.createElement("canvas");n.width=640,n.height=150;let s=n.getContext("2d",{willReadFrequently:!0});s.textAlign="center",s.fillStyle="#f7ecd2",s.font=`700 44px ${Te}`,s.fillText(t.e.title,320,42,620),s.font=`500 32px ${Te}`,s.fillStyle="#d9c6a0";let a=i.solved||i.started?[de("{n} of {m} solved",{n:i.solved,m:t.e.n}),...i.started?[de("{n} in progress",{n:i.started})]:[]].join(" · "):de("{n} puzzles",{n:t.e.n});s.fillText(a,320,88,630),s.fillStyle="rgba(255,255,255,.18)",s.beginPath(),s.roundRect(70,110,500,16,8),s.fill(),i.solved&&(s.fillStyle="#7cc48f",s.beginPath(),s.roundRect(70,110,Math.max(16,500*i.solved/t.e.n),16,8),s.fill()),t.label.material.map&&t.label.material.map.dispose();let o=new Pt(n);o.colorSpace=at,o.anisotropy=4,t.label.material.map=o,t.label.material.needsUpdate=!0}}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),this.group.parent.remove(this.group)}pick(e){let t=new Kn(e.origin,e.direction),i=t.intersectObjects(this.books.map(n=>n.book))[0];return i?this.books.find(n=>n.book===i.object):null}take(e,t){let i=this.books.find(n=>n.e.id===e);if(!i){t();return}this.pull={b:i,t:0,done:t,p:i.book.getWorldPosition(new b),q:i.book.getWorldQuaternion(new It)}}put(){this.away&&(this.away.book.visible=!0,this.away=null)}update(e){for(let a of this.books)a.lift+=((a===this.hot?1:0)-a.lift)*(1-Math.exp(-e*12)),(!this.pull||this.pull.b!==a)&&(a.book.position.copy(a.home),a.book.position.z+=a.lift*.035,a.book.position.y+=a.lift*.012,a.book.rotation.set(-.11+a.lift*.05,0,0));let t=this.pull;if(!t)return;t.t=Math.min(1,t.t+e/.95);let i=t.t*t.t*(3-2*t.t),n=new b(Me/2,.012,0).sub(os),s=t.b.home.clone();t.b.book.position.lerpVectors(s,n,i),t.b.book.position.y+=Math.sin(Math.PI*i)*.28,t.b.book.rotation.set(-.11+(-Math.PI/2+.11)*i,0,0),t.t>=1&&(this.pull=null,this.away=t.b,t.b.book.visible=!1,t.done())}};var Oa=(r,e,t)=>Math.max(e,Math.min(t,r));function n0(){let r=document.createElement("canvas");r.width=r.height=1024;let e=r.getContext("2d");e.fillStyle="#6f4a2c",e.fillRect(0,0,1024,1024);let t=5,i=()=>(t=t*16807%2147483647)/2147483647;for(let s=0;s<5;s++){let a=s*205,o=i()*22-11;e.fillStyle=`rgb(${112+o},${76+o*.8},${46+o*.6})`,e.fillRect(a,0,205,1024);for(let l=0;l<90;l++){let h=a+i()*205,c=4+i()*10,u=i()*6,d=.5+i()*2;e.strokeStyle=`rgba(${i()<.6?"48,26,12":"160,112,72"},${.06+i()*.14})`,e.lineWidth=d,e.beginPath();for(let p=0;p<=1024;p+=32)e.lineTo(h+Math.sin(p/170+u)*c,p);e.stroke()}e.fillStyle="rgba(24,12,5,.55)",e.fillRect(a,0,2.5,1024)}let n=new Pt(r);return n.colorSpace=at,n.wrapS=n.wrapT=Is,n.anisotropy=8,n}function cp(){let r=new lt,e=[[0,0],[.022,0],[.024,.006],[.0185,.034],[.0175,.044],[.024,.078],[.026,.086]].map(([s,a])=>new ne(s,a)),t=new Ne(new zi(e,40),new pa({color:"#ffffff",transparent:!0,opacity:.24,roughness:.05,metalness:0,side:un,depthWrite:!1})),i=new Ne(new zi([[0,.003],[.021,.003],[.0225,.007],[.017,.034],[.016,.044],[.0222,.074],[0,.074]].map(([s,a])=>new ne(s,a)),36),new dt({color:"#8a2f0c",roughness:.25,transparent:!0,opacity:.9})),n=new Ne(new zi([[0,0],[.03,0],[.052,.007],[.054,.009],[.031,.0035],[0,.0035]].map(([s,a])=>new ne(s,a)),40),new dt({color:"#f3efe6",roughness:.4}));return i.castShadow=n.castShadow=n.receiveShadow=!0,r.add(n,i,t),i.position.y=t.position.y=.004,r}var Ba=class{constructor(e){this.canvas=e,this.touch=matchMedia("(pointer: coarse)").matches;let t=this.renderer=new ea({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=yd,t.shadowMap.enabled=!0,t.shadowMap.type=vd,this.scene=new ia,this.scene.background=new Re("#1d140d"),this.scene.fog=new ta("#1d140d",1.6,3.4),this.camera=new wt(32,1,.02,12);let i=n0();i.repeat.set(3,3);let n=new Ne(new kt(4,4),new dt({map:i,roughness:.62}));n.rotation.x=-Math.PI/2,n.position.y=-5e-4,n.receiveShadow=!0,this.scene.add(n),this.scene.add(new ma("#fff4e2","#6b4c33",1.75));let s=new ya("#fff0d6",1.7);s.position.set(-.5,1.2,-.45),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.radius=5,s.shadow.bias=-4e-4,s.shadow.normalBias=.002,Object.assign(s.shadow.camera,{left:-.55,right:.55,top:.5,bottom:-.5,near:.4,far:2.6}),this.scene.add(s);let a=cp();a.position.set(.33,0,-.13),this.scene.add(a);let o=cp();o.position.set(-.36,0,-.2),o.rotation.y=1,this.scene.add(o),this.cam={x:0,z:0,zoom:1},this.goal={x:0,z:0,zoom:1},this.open=[!0,!0],this.at="shelf",this.way=1,this.shelf={w:1,h:.8},this.resize(),addEventListener("resize",()=>this.resize())}resize(){let e=innerWidth,t=innerHeight,i=this.touch?3e6:9e6,n=Math.min(devicePixelRatio||1,2);e*t*n*n>i&&(n=Math.sqrt(i/(e*t))),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}get single(){return this.camera.aspect<.95}fitDistance(){let e=Math.tan(this.camera.fov*Math.PI/360),t=(this.single?Me*.5:Me)+.028,i=We/2+.03;return Math.max(i/e,t/(e*this.camera.aspect))}clampGoal(){let e=this.goal;e.zoom=Oa(e.zoom,.75,6);let t=this.open[0]?-Me:0,i=We/2;e.x=Oa(e.x,this.open[0]?t:0,this.open[1]?Me:0),e.z=Oa(e.z,-i,i+.02)}home(e=0){this.goal.zoom=1,this.goal.z=0,this.goal.x=this.single?e*Me*.5:this.open[0]&&this.open[1]?0:this.open[0]?-Me/2:Me/2,!this.single&&!(this.open[0]&&this.open[1])&&(this.goal.x*=1)}zoomAt(e,t,i){let n=this.ground(t,i),s=this.goal.zoom;this.goal.zoom*=e,this.clampGoal();let a=1-s/this.goal.zoom;n&&(this.goal.x+=(n.x-this.goal.x)*a,this.goal.z+=(n.z-this.goal.z)*a,this.clampGoal())}pan(e,t){let i=2*Math.tan(this.camera.fov*Math.PI/360)*this.dist()/innerHeight;this.goal.x-=e*i,this.goal.z-=t*i,this.clampGoal()}dist(e=this.cam){return this.fitDistance()/e.zoom}place(e){let t=1-Math.exp(-e*11),i=this.cam;for(let c of["x","z","zoom"])i[c]+=(this.goal[c]-i[c])*t;let n=.2*Oa((1.9-i.zoom)/.9,0,1),s=this.dist(),a=this.camera.position.set(i.x,Math.cos(n)*s,i.z+Math.sin(n)*s),o=new b(i.x,0,i.z),l=new b(0,0,-1),h=this.at==="shelf"?1:0;if(this.way!==h&&(this.way+=Math.sign(h-this.way)*Math.min(Math.abs(h-this.way),e/.95)),this.way>0){let c=this.way*this.way*(3-2*this.way),u=Math.tan(this.camera.fov*Math.PI/360),d=Math.max((this.shelf.h*.5+.05)/u,(this.shelf.w*.5+.03)/(u*this.camera.aspect)),p=new b(os.x,os.y+this.shelf.h*.47,os.z);a.lerp(new b(p.x,p.y+.04,p.z+d),c),o.lerp(p,c),l.lerp(new b(0,1,0),c).normalize()}this.camera.up.copy(l),this.camera.lookAt(o),this.camera.updateMatrixWorld()}ray(e,t){let i=new Kn;return i.setFromCamera(new ne(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),i.ray}ground(e,t,i=.004){let{origin:n,direction:s}=this.ray(e,t);if(s.y>-1e-5)return null;let a=(i-n.y)/s.y;return{x:n.x+s.x*a,z:n.z+s.z*a}}render(){this.renderer.render(this.scene,this.camera)}};var pc=r=>({x:Ue(r)+.5,y:je(r)+.5}),Gi=class{constructor(e,t,i,n={}){this.b=e,this.cells=t,this.erase=i,this.tools=n,this.ghost=[]}cell(e){let t=Math.floor(e.y),i=Math.floor(e.x);return t>=0&&i>=0&&t<this.b.rows&&i<this.b.cols?be(t,i):null}clamped(e){return be(Math.max(0,Math.min(this.b.rows-1,Math.floor(e.y))),Math.max(0,Math.min(this.b.cols-1,Math.floor(e.x))))}tap(){return this.up()}},fc=class extends Gi{field(e){let t=this.cells.at(e.x,e.y),i=t===null?null:this.cells.all.get(t);return i&&i[2]==="e"&&i[0]>=0&&i[1]>=0?t:null}target(e){switch(this.erase?"clear":this.tools.mark){case"fill":return e===1?0:1;case"cross":return e===2?0:2;case"clear":return 0;default:return(e+1)%3}}down(e){let t=this.field(e);return t===null?!1:(this.k0=this.k1=t,this.p0=e,this.v=this.target(this.b.marks.get(t)||0),this.run=[t],!0)}move(e){let t=je(this.k0),i=Ue(this.k0),[n,s]=this.cells.box(this.k0),a=(p,f)=>Math.max(0,Math.min(f-1,p)),o=a(t+Math.floor(e.y-s),this.b.rows),l=a(i+Math.floor(e.x-n),this.b.cols),h=new Set([this.k0]);if(this.tools.pick==="block")for(let p=Math.min(t,o);p<=Math.max(t,o);p++)for(let f=Math.min(i,l);f<=Math.max(i,l);f++)h.add(be(p,f));else if(this.tools.pick==="free"){for(let x of this.run)h.add(x);let p=[je(this.k1),Ue(this.k1)],f=Math.max(Math.abs(o-p[0]),Math.abs(l-p[1]));for(let x=0;x<=f;x++)h.add(be(Math.round(p[0]+(o-p[0])*x/(f||1)),Math.round(p[1]+(l-p[1])*x/(f||1))))}else if(Math.abs(l-i)>=Math.abs(o-t))for(let f=Math.min(i,l);f<=Math.max(i,l);f++)h.add(be(t,f));else for(let f=Math.min(t,o);f<=Math.max(t,o);f++)h.add(be(f,i));this.k1=be(o,l),this.run=[...h];let c=p=>{let[f,x]=this.cells.center(p);return{x:f,y:x}},[u,d]=this.cells.box(be(Math.min(t,o),Math.min(i,l)));this.ghost=this.tools.pick==="block"?[[[0,0],[1,0],[1,1],[0,1],[0,0]].map(([p,f])=>({x:u+p*(Math.abs(l-i)+1),y:d+f*(Math.abs(o-t)+1)}))]:[this.run.map(c)]}measure(){let e=new Set(this.run.map(je)),t=new Set(this.run.map(Ue));if(e.size>1&&t.size>1)return{area:[t.size,e.size]};let i=e.size===1&&(t.size>1||this.tools.pick!=="down"),n=[...i?t:e],s=Math.min(...n),a=Math.max(...n),o=i?this.b.cols:this.b.rows;return{across:i,size:a-s+1,end:a+1,start:o-s}}up(){return[[this.v,...this.run]]}},mc=class extends Gi{dot(e,t=.42){let i=Math.round(e.y),n=Math.round(e.x);return i>=0&&n>=0&&i<=this.b.rows&&n<=this.b.cols&&Math.hypot(e.x-n,e.y-i)<=t?[i,n]:null}edge(e){let t=e.x-Math.floor(e.x),i=e.y-Math.floor(e.y),n=Math.floor(e.y),s=Math.floor(e.x),a=[[i,0,n,s],[1-i,0,n+1,s],[t,1,n,s],[1-t,1,n,s+1]].filter(([,o,l,h])=>l>=0&&h>=0&&this.b.valid(o,l,h)).sort((o,l)=>o[0]-l[0]);return a.length&&a[0][0]<.36?a[0].slice(1):null}down(e){this.p0=e,this.way=[],this.gone=new Map;let t=this.dot(e);return t&&this.way.push(t),this.rub(e,e),!0}rub(e,t){if(!this.erase)return;let i=Math.max(1,Math.ceil(Math.hypot(t.x-e.x,t.y-e.y)/.15));for(let n=0;n<=i;n++){let s=this.edge({x:e.x+(t.x-e.x)*n/i,y:e.y+(t.y-e.y)*n/i});s&&this.gone.set(s.join(" "),s)}}move(e){if(this.rub(this.p||this.p0,e),this.p=e,this.erase)return;let t=this.dot(e);if(!t)return;let i=this.way,n=i[i.length-1];if(!n){i.push(t);return}let[s,a]=n;if(!(s===t[0]&&a===t[1])){if(i.length>1&&i[i.length-2][0]===t[0]&&i[i.length-2][1]===t[1])i.pop();else if(Math.abs(s-t[0])+Math.abs(a-t[1])===1)i.push(t);else if(s===t[0]||a===t[1]){let o=Math.abs(s-t[0])+Math.abs(a-t[1]);for(let l=1;l<=o;l++)i.push([s+Math.sign(t[0]-s)*l,a+Math.sign(t[1]-a)*l])}this.ghost=[i.map(([o,l])=>({x:l,y:o}))]}}up(){if(this.erase)return this.gone.size?[[0,...[...this.gone.values()].flat()]]:[];let e=[];for(let t=1;t<this.way.length;t++){let[i,n]=[this.way[t-1],this.way[t]];i[0]===n[0]?e.push(0,i[0],Math.min(i[1],n[1])):e.push(1,Math.min(i[0],n[0]),i[1])}return e.length?[[1,...e]]:[]}tap(){let e=this.edge(this.p0);return e?[[this.erase?0:((this.b.edges.get(e.join(" "))||0)+1)%3,...e]]:[]}},gc=class extends Gi{isle(e){for(let t of this.b.islands)if(Math.hypot(e.x-t.c-.5,e.y-t.r-.5)<=.48)return t;return null}between(e){for(let[t,i]of this.b.pairs){let n=i.across?Math.abs(e.y-i.a.r-.5):Math.abs(e.x-i.a.c-.5),s=i.across?e.x:e.y,a=(i.across?i.a.c:i.a.r)+.9,o=(i.across?i.b.c:i.b.r)+.1;if(n<.32&&s>a&&s<o&&(this.b.bridges.has(t)||!this.erase))return t}return null}down(e){return this.from=this.isle(e),this.id=this.from?null:this.between(e),!!this.from||this.id!==null}move(e){if(!this.from)return;this.to=null;let t=e.x-this.from.c-.5,i=e.y-this.from.r-.5,n=Math.abs(t)>=Math.abs(i);for(let a of this.b.pairs.values()){let o=a.a===this.from?a.b:a.b===this.from?a.a:null;if(!o||a.across!==n||Math.sign(n?o.c-this.from.c:o.r-this.from.r)!==Math.sign(n?t:i))continue;let l=Math.abs(n?o.c-this.from.c:o.r-this.from.r);Math.abs(n?t:i)>l-.75&&Math.abs(n?i:t)<.8&&(this.to=o)}let s=this.to?{x:this.to.c+.5,y:this.to.r+.5}:n?{x:e.x,y:this.from.r+.5}:{x:this.from.c+.5,y:e.y};this.ghost=[[{x:this.from.c+.5,y:this.from.r+.5},s]]}turn(e){let[t,i]=e.split(" ").map(Number),n=this.b.bridges.get(e)||0;return[[t,i,this.erase?0:(n+1)%3]]}up(){return this.from&&this.to?this.turn(this.b.id(this.from.i,this.to.i)):[]}tap(){return this.id!==null&&this.id!==void 0?this.turn(this.id):[]}},vc=class extends Gi{down(e){let t=this.cell(e);return t===null?!1:(this.k0=this.k1=t,this.old=this.b.over(je(t),Ue(t)),!0)}move(e){this.k1=this.clamped(e);let[t,i,n,s]=this.rect();this.ghost=[[{x:i,y:t},{x:i+n,y:t},{x:i+n,y:t+s},{x:i,y:t+s},{x:i,y:t}]]}rect(){let e=Math.min(je(this.k0),je(this.k1)),t=Math.min(Ue(this.k0),Ue(this.k1));return[e,t,Math.abs(Ue(this.k0)-Ue(this.k1))+1,Math.abs(je(this.k0)-je(this.k1))+1]}up(){let e=this.old?[[0,this.old[0],this.old[1]]]:[];if(this.erase)return e;let t=this.rect();return this.old&&t.join()===this.old.join()?[]:this.b.rects.some(i=>i!==this.old&&t[0]<i[0]+i[3]&&i[0]<t[0]+t[3]&&t[1]<i[1]+i[2]&&i[1]<t[1]+t[2])?[]:[...e,[1,...t]]}tap(){return this.old?[[0,this.old[0],this.old[1]]]:this.erase?[]:[[1,je(this.k0),Ue(this.k0),1,1]]}},yc=class extends Gi{down(e){let t=this.cell(e);if(t===null)return!1;let i=this.b.path.indexOf(t);return this.path=i>=0?this.b.path.slice(0,i+1):this.b.path.slice(),i<0&&this.go(t,16),this.show(),!0}go(e,t=6){let i=this.path,n=i.indexOf(e);if(n>=0){i.length=n+1;return}let s=i[i.length-1],a=new Map([[s,null]]),o=[[s,0]],l=new Set(i);for(;o.length;){let[h,c]=o.shift();if(h===e){let u=[];for(let d=h;d!==s;d=a.get(d))u.unshift(d);i.push(...u);return}if(c<t)for(let u of[1,-1,256,-256]){let d=h+u;!a.has(d)&&!l.has(d)&&this.b.open(h,d)&&(a.set(d,h),o.push([d,c+1]))}}}move(e){let t=this.cell(e);t!==null&&this.go(t),this.show()}show(){this.ghost=this.path.length>1?[this.path.map(pc)]:[]}up(){return this.erase?[[this.b.start]]:[this.path]}},xc=class extends Gi{down(e){let t=this.cell(e);return t===null?!1:(this.k0=this.k1=t,!0)}move(e){let t=pc(this.k0),i=e.x-t.x,n=e.y-t.y,s=Math.round(Math.atan2(n,i)/(Math.PI/4)),a=Math.round(Math.cos(s*Math.PI/4)),o=Math.round(Math.sin(s*Math.PI/4)),l=Math.round(a&&o?(Math.abs(i)+Math.abs(n))/2:Math.max(Math.abs(i),Math.abs(n)));for(;l>0;){let h=je(this.k0)+o*l,c=Ue(this.k0)+a*l;if(h>=0&&c>=0&&h<this.b.rows&&c<this.b.cols)break;l--}this.k1=be(je(this.k0)+o*l,Ue(this.k0)+a*l),this.ghost=[[t,pc(this.k1)]]}up(){return this.k0!==this.k1&&this.b.find(this.k0,this.k1)>=0?[[this.k0,this.k1]]:[]}tap(){return[]}},ls={Nonogram:fc,Slitherlink:mc,Hashi:gc,Shikaku:vc,Maze:yc,Words:xc};function up(r,e,t=!1,i={}){let n=r.marks?ls.Nonogram:r.edges?ls.Slitherlink:r.islands?ls.Hashi:r.rects?ls.Shikaku:r.path?ls.Maze:r.words?ls.Words:null;return n?new n(r,e,t,i):null}var s0="./vendor/hand/Hand_Nails_R.gltf",r0=.0272,a0=.875,dp=1.75;var Fa=new b(.0216,-.0335,.0928),Wi=null,_c=null,pp=0,Ha=new Set;function o0(r){let e=Uint8Array.from(atob(r.buffers[0].uri.split(",")[1]),u=>u.charCodeAt(0)),t={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16},i={5121:Uint8Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n=u=>{let d=r.accessors[u],p=r.bufferViews[d.bufferView],f=i[d.componentType],x=d.count*t[d.type],m=(p.byteOffset||0)+(d.byteOffset||0);return new f(e.buffer.slice(e.byteOffset+m,e.byteOffset+m+x*f.BYTES_PER_ELEMENT))},s=r.meshes[0].primitives[0],a=s.attributes,o=new Ke,l=n(a.POSITION),h=n(a.NORMAL);h0(l,h),o.setAttribute("position",new tt(l,3)),o.setAttribute("normal",new tt(h,3)),o.setAttribute("skinIndex",new jn(Uint16Array.from(n(a.JOINTS_0)),4)),o.setAttribute("skinWeight",new tt(n(a.WEIGHTS_0),4)),o.setIndex(new tt(n(s.indices),1));let c=n(r.skins[0].inverseBindMatrices);Wi={geo:o,nodes:r.nodes,joints:r.skins[0].joints,inv:r.skins[0].joints.map((u,d)=>new Se().fromArray(c,d*16))};for(let u of Ha)u.useModel();Ha.clear()}function l0(){_c||pp>2||typeof fetch>"u"||(_c=fetch(new URL(s0,import.meta.url)).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(o0).catch(r=>{console.warn("hands:",r.message||r),_c=null,pp++}))}function h0(r,e){let t=-1/0;for(let i=2;i<r.length;i+=3)t=Math.max(t,r[i]);for(let i=0;i<r.length;i+=3){let n=Math.min(1,(r[i+2]-(t-.008))/.008),s=Math.hypot(e[i],e[i+1]);if(n<=0||s<.001)continue;let a=e[i]+(e[i]/s-e[i])*n,o=e[i+1]+(e[i+1]/s-e[i+1])*n,l=e[i+2]*(1-n),h=Math.hypot(a,o,l)||1;e[i]=a/h,e[i+1]=o/h,e[i+2]=l/h}}var c0=["Index","Middle","Ring","Little"].map(r=>["Proximal","Intermediate","Distal"].map(e=>`${r}_${e}_R`)),u0=["Thumb_Metacarpal_R","Thumb_Proximal_R","Thumb_Distal_R"],fp=r=>[[1.35,1.6,.95],[1.4,1.65,1],[1.42,1.65,1],[1.45,1.6,1]].map(e=>e.map(t=>t*r)),bc={grip:{f:fp(.86),s:[0,0,0,0],t:[[-.5,-.2],[-.42,.45],[0,.6]]},bridge:{f:[[.1,.42,.28],[.08,.42,.28],[.1,.42,.28],[.12,.4,.28]],s:[.16,.03,-.12,-.3],t:[[.08,-.17],[-.4,-.6],[0,-.5]]},pinch:{f:[[.75,.75,.4],[.95,.95,.6],[1.1,1.1,.7],[1.2,1.2,.8]],s:[0,0,0,0],t:[[-.6,-.4],[0,.8],[0,.4]]},piece:{f:[[.62,.62,.3],[.72,.66,.34],[.95,.9,.55],[1.05,1,.6]],s:[.04,0,-.02,-.03],t:[[-.5,-.42],[0,.55],[0,.3]]},open:{f:[[.42,.42,.2],[.5,.48,.25],[.7,.7,.4],[.8,.75,.45]],s:[.06,0,-.03,-.06],t:[[-.3,-.5],[0,.35],[0,.15]]},cup:{f:[[.95,1,.5],[1,1.05,.55],[1,1.05,.55],[1,1,.5]],s:[0,0,0,0],t:[[-.5,-.25],[-.2,.5],[0,.5]]},throw:{f:[[.12,.16,.1],[.14,.18,.1],[.16,.2,.12],[.2,.22,.14]],s:[.1,.02,-.06,-.14],t:[[-.1,-.5],[0,.1],[0,.1]]},press:{f:[[.5,.28,.12],[.52,.3,.14],[.56,.34,.18],[.7,.45,.25]],s:[.02,0,-.02,-.04],t:[[-.3,-.3],[0,.3],[0,.3]]},pen:{f:[[.66,.78,.3],[.92,.92,.5],[1.15,1.15,.75],[1.28,1.2,.8]],s:[.02,0,-.01,-.02],t:[[-.55,-.4],[0,.62],[0,.42]]},offer:{f:[[.06,.12,.08],[.08,.12,.08],[.1,.14,.1],[.14,.18,.1]],s:[.03,.01,-.02,-.05],t:[[-.1,-.5],[0,.1],[0,.1]]},shake:{f:[[.42,.42,.3],[.48,.5,.35],[.54,.56,.4],[.6,.6,.4]],s:[.02,0,-.01,-.02],t:[[-.28,-.3],[-.1,.35],[0,.35]]},flat:{f:[[.12,.2,.12],[.14,.22,.14],[.16,.24,.16],[.2,.26,.18]],s:[.05,.01,-.03,-.1],t:[[-.15,-.4],[0,.15],[0,.15]]},fist:{f:fp(.8),s:[0,0,0,0],t:[[-.5,-.2],[-.42,.45],[0,.6]]},relaxed:{f:[[.3,.4,.25],[.36,.46,.28],[.42,.52,.3],[.48,.55,.32]],s:[.02,0,-.02,-.05],t:[[-.25,-.35],[0,.2],[0,.2]]}},za={},mp=r=>[...r.f.flatMap((e,t)=>[r.s[t],...e]),...r.t.flat()],d0=new Se,p0=new zt,f0=new It,Va=class{constructor(e,t,i,n=1){this.group=new lt,this.side=i,this.mat=t,this.k=e/dp*n,this.kind="",this.simple=m0(this.k*dp,t,i),this.group.add(this.simple.group),Wi?this.useModel():(Ha.add(this),l0())}useModel(){let e=Wi.nodes.map((o,l)=>{if(!Wi.joints.includes(l))return null;let h=new Os;return h.name=o.name,o.translation&&h.position.fromArray(o.translation),o.rotation&&h.quaternion.fromArray(o.rotation),h.userData.rest=h.quaternion.clone(),h});Wi.nodes.forEach((o,l)=>{if(e[l])for(let h of o.children||[])e[h]&&e[l].add(e[h])});let t=e.find(o=>o&&o.name==="Wrist_R"),i=new lt;i.matrixAutoUpdate=!1;let n=a0*this.k;i.matrix.set(0,this.side*n,0,0,n,0,0,0,0,0,-n,r0*n,0,0,0,1);let s=new $n(Wi.geo,this.mat);i.add(t,s),i.updateMatrixWorld(!0),s.bind(new ra(Wi.joints.map(o=>e[o]),Wi.inv),new Se),s.frustumCulled=!1,s.castShadow=!0,i.traverse(o=>{o.layers.mask=this.group.layers.mask}),this.group.remove(this.simple.group),this.group.add(i),this.mesh=s,this.bones=Object.fromEntries(e.filter(Boolean).map(o=>[o.name,o]));let a=this.kind;this.kind="",this.shape(a||"relaxed")}dispose(){Ha.delete(this),this.mesh&&this.mesh.skeleton.dispose()}shape(e){if(e!==this.kind){if(this.kind=e,!this.bones){this.simple.shape(e);return}this.goal=mp(bc[e]||bc.relaxed),this.now||(this.now=this.goal.slice(),this.set())}}step(e){if(!this.bones||!this.goal||this.still===this.kind)return;let t=1-Math.exp(-e*16),i=0;for(let n=0;n<this.now.length;n++){let s=this.goal[n]-this.now[n];this.now[n]+=s*t,i=Math.max(i,Math.abs(s))}this.still=i<.002?this.kind:"",this.set()}set(){let e=this.now,t=(i,n,s)=>i.quaternion.copy(i.userData.rest).multiply(f0.setFromEuler(p0.set(n,0,s)));c0.forEach((i,n)=>i.forEach((s,a)=>t(this.bones[s],a?0:e[n*4],e[n*4+1+a]))),u0.forEach((i,n)=>t(this.bones[i],e[16+n*2],e[17+n*2]))}grip(e){if(!this.bones)return{at:Fa.clone().multiplyScalar(this.k),tip:new b(.02,-.06,.13).multiplyScalar(this.k)};if(!za[e]){let t=this.now.slice(),i=this.group,n=i.position.clone(),s=i.quaternion.clone(),a=i.parent;a&&a.remove(i),this.now=mp(bc[e]),this.set(),i.position.set(0,0,0),i.quaternion.identity(),i.updateMatrixWorld(!0);let o=u=>{let d=this.bones[u],p=new b,f=d.matrixWorld,x=d.children.find(g=>g.isBone);if(x)return x.getWorldPosition(p);p.setFromMatrixPosition(f);let m=new b().setFromMatrixPosition(d.parent.matrixWorld);return p.addScaledVector(p.clone().sub(m).normalize(),.018*this.k)},l=o("Thumb_Distal_R"),h=o("Index_Distal_R"),c=o("Middle_Distal_R");l.x*=this.side,h.x*=this.side,c.x*=this.side,za[e]={at:h.clone().add(c).multiplyScalar(.5).add(l).multiplyScalar(.5).divideScalar(this.k),tip:h.clone().add(c).multiplyScalar(.5).divideScalar(this.k)},this.now=t,this.set(),i.position.copy(n),i.quaternion.copy(s),a&&a.add(i)}return{at:za[e].at.clone().multiplyScalar(this.k),tip:za[e].tip.clone().multiplyScalar(this.k)}}place(e,t,i){this.group.position.copy(e);let n=t.clone().normalize(),s=new b().crossVectors(i,n).normalize(),a=new b().crossVectors(n,s);this.group.quaternion.setFromRotationMatrix(d0.makeBasis(s,a,n))}hold(e){this.group.add(e),e.position.set(Fa.x*this.side,Fa.y,Fa.z).multiplyScalar(this.k)}};function m0(r,e,t){let i=new lt,n=[],s=(h,c)=>{let u=new Ne(h,e);return u.castShadow=!0,c.add(u),u},a=new Ot(r*.044,r*.017,r*.052);a.translate(0,0,r*.026),s(a,i),[.036,.042,.04,.032].forEach((h,c)=>{let u=new lt;u.position.set((c-1.5)*r*.0105*-t,0,r*.05);let d=s(new Zn(r*.0055,r*h,4,8),u);d.rotation.x=Math.PI/2,d.position.z=r*(h/2+.004),i.add(u),n.push(u)});let o=new lt;o.position.set(t*r*.021,-r*.002,r*.012);let l=s(new Zn(r*.0068,r*.03,4,8),o);return l.rotation.x=Math.PI/2,l.position.z=r*.02,i.add(o),{group:i,shape(h){let c=h==="grip"||h==="pinch"||h==="piece"||h==="cup"||h==="fist";n.forEach((u,d)=>{c?u.rotation.set(1.75,0,0):h==="bridge"?u.rotation.set(.12,(d-1.5)*.2*-t,0):u.rotation.set(.6,0,0)}),c?o.rotation.set(.9,-t*.9,0):h==="bridge"?o.rotation.set(-.7,t*.5,0):o.rotation.set(.3,-t*.3,0)}}}var g0=["orospu","orosbu","oruspu","orusbu","orspu","orsbu","aminakoy","aminako","aminasok","aminkoy","amcik","amcig","siktir","sikerim","sikeyim","sikiyim","sikis","sikik","siksok","yarrak","yarak","yarram","dalyarak","tasak","tassak","pezevenk","kahpe","kaltak","surtuk","yavsak","gavat","pust","ibne","ipne","gotveren","gotlek","gotos","ananisik","bacinisik","serefsiz","gerizekali","dangalak","salak","aptal","kodumun","pickurusu","fuck","phuck","fvck","shit","bitch","biatch","cunt","asshole","bastard","whore","slut","faggot","nigger","nigga","retard","dildo","pussy","penis","vagina","porn","jizz","blowjob","handjob","motherf","molest","pedofil","pedophil","boob","horny","milf","twat","bollock","scheis","arschloch","fotze","wichser","hurensohn","schlampe","ficken","missgeburt","nutte","spasti","putain","connard","connasse","salope","encule","niquer","batard","enfoire","mierda","cabron","gilipollas","pendejo","culero","chingad","chingar","maricon","hijueputa","hijodeputa","joder","cazzo","vaffanculo","fanculo","stronzo","puttana","minchia","coglion","caralho","buceta","fodase","blyat","blyad","pizd","mudak","pidor","pidar","gandon","eblan","yebat","yobany","kurwa","pierdol","spierdal","jebac","kanker","klootzak","godverdomme","chutiya","chutia","bhenchod","behenchod","madarchod","bhosdi","sharmouta","sharmuta","sharmota","kussomak","kussommak","kusomak","metnak","khawal","zebbi","manyok","koskesh","allah","peygamber","prophet","muslim","musluman","hristiyan","hiristiyan","christianity","jesuschrist","yahudi","kafir","gavur","ateist","atheist","satanist","seytan","kilise","sinagog","synagogue","mosque","seriat","sharia","jihad","mezhep","tarikat","selefi","vahhabi","wahhabi","hizbullah","hezbollah","taliban","crusade","namaz","abdest","tekbir","budist","buddhist","vatican","vatikan","dinsiz","islamist","islamci","islamic","erdogan","tayyip","ataturk","kilicdaroglu","bahceli","imamoglu","davutoglu","aksener","ocalan","fethullah","fetullah","hitler","mussolini","stalin","lenin","netanyahu","zelensk","kemalist","kemalizm","ulkucu","apocu","terorist","fascis","fasist","fasizm","faschis","komunist","communis","kommunist","sosyalist","socialis","anarsist","anarchis","zionis","siyonis","kurdistan","marxis","bolsevik","bolshevik","akparti","iyiparti"],Mc=new Set(["am","amk","amq","aq","mk","sik","skm","skim","sktr","skt","oc","pic","got","bok","dol","pezo","ass","dick","cock","cum","sex","sexy","tit","tits","fag","rape","rapist","anal","anus","wank","wanker","tosser","hoe","hoes","wtf","stfu","gtfo","fck","fuk","fuq","fk","kkk","fick","hure","spast","nique","pute","putes","fdp","ntm","puta","puto","putas","putos","hdp","verga","cono","pinche","merda","troia","foda","viado","porra","cu","suka","huy","hui","xuy","xyi","xui","chuj","hoer","kut","randi","gaand","jende","god","gott","dieu","dios","tanri","tanrim","kuran","quran","koran","incil","bible","tevrat","torah","zebur","cami","church","cemaat","alevi","sunni","sii","isis","isid","daesh","deas","hacli","pope","din","mesih","hz","satan","jew","jews","deist","rte","pkk","ypg","pyd","ypj","dhkp","dhkpc","hdp","akp","chp","mhp","feto","nazi","nazis","neonazi","putin","trump","biden","obama","hamas","marx","inonu"]),v0=["блят","бляд","сука","пизд","хуй","хуе","ебат","ебан","мудак","пидор","пидар","гандон","шлюх","залуп","شرموط","منيوك","قحبة","عرص","كسمك"],y0=["бля","كس","نيك","زبي"],x0={ı:"i",ß:"ss",æ:"ae",œ:"oe",ø:"o",đ:"d",ł:"l",þ:"th",ð:"d"},_0={а:"a",в:"b",е:"e",к:"k",м:"m",н:"h",о:"o",р:"p",с:"c",т:"t",у:"y",х:"x",і:"i",ј:"j",ѕ:"s",α:"a",β:"b",ε:"e",η:"n",ι:"i",κ:"k",ν:"v",ο:"o",ρ:"p",τ:"t",υ:"u",χ:"x"},b0={0:"o",1:"i",2:"z",3:"e",4:"a",5:"s",6:"g",7:"t",8:"b",9:"g"},wc=r=>r.toLowerCase().normalize("NFD").replace(/\p{M}+/gu,"").replace(/[ıßæœøđłþð]/g,e=>x0[e]),Ga=r=>r.replace(/(.)\1+/g,"$1"),M0=[...new Set(g0.flatMap(r=>[r,Ga(r)]).filter(r=>r.length>=4))],w0=new Set([...Mc].map(Ga).filter(r=>r.length>=3)),S0=v0.map(wc),T0=new Set(y0.map(wc));function gp(r){if(!r.length)return!1;let e=r.join("");for(let i of[...r,e]){let n=Ga(i);if(Mc.has(i)||Mc.has(n)||w0.has(n))return!0}let t=Ga(e);return M0.some(i=>e.includes(i)||t.includes(i))}function E0(r){let e=wc(String(r||""));if(S0.some(n=>e.includes(n))||e.split(/\s+/).some(n=>T0.has(n)))return!0;let t=e.replace(/./gu,n=>_0[n]||n),i=n=>n.split(/[^a-z0-9]+/).filter(Boolean);return gp(i(t))||gp(i(t.replace(/[0-9]/g,n=>b0[n])))}var A0=/[^\p{L}\p{N} ]/gu;var R0=(r,e,t)=>Array.from(String(r||"").replace(e,"").replace(/\s+/g," ").trim()).slice(0,t).join("").trim();function vp(r){let e=R0(r,A0,16);return e&&!E0(e)?e:""}var Sc=6,Tc=2*6e4,C0=2e4,I0=1200,k0=2*6e4,P0=3,L0=5*6e4,D0=40,Ks=["#ffdbac","#f1c27d","#e0ac69","#c68642","#8d5524","#5c3a1e"],Xi=["#31517a","#8a3b34","#3f6b4b","#7a5a2e","#5b4a86","#2f2f36"],Xa=r=>String(r||"").trim().slice(0,20),N0=r=>typeof r=="string"&&/^[a-z0-9]{8,24}$/.test(r)?r:"",Ec=r=>typeof r=="string"&&/^[a-z0-9]{16,32}$/.test(r)?r:"",ja=(r=10)=>{let e=new Uint8Array(r);return crypto.getRandomValues(e),Array.from(e,t=>"abcdefghijkmnpqrstuvwxyz23456789"[t&31]).join("")},yp=(r,e)=>Number.isInteger(r)&&r>=0&&r<e?r:0;function pi(r){let e=String(r&&r.name||"").slice(0,64);return{name:vp(e)||"Oyuncu",skin:yp(r&&r.skin,Ks.length),sleeve:yp(r&&r.sleeve,Xi.length),left:!!(r&&r.left)}}var Wa=class{constructor(e,t,i,n=Date.now){this.mag=t,this.hooks=i,this.now=n,this.members=new Map([[1,{id:1,profile:pi(e),away:0,link:null,who:"",key:""}]]),this.links=new Map,this.bans=new Map,this.kicks=[],this.nextId=2,this.pass="",this.closed=!1,this.writing=new Map}admit(e,t){t=t&&typeof t=="object"?t:{};let i=N0(t.who),n=Ec(t.key),s=i?this.bans.get(i):0,a=n?[...this.members.values()].find(c=>c.key===n):null,o=!!this.pass&&Xa(t.pass)!==this.pass,l=this.closed?"closed":s&&s>this.now()?s===1/0?"banned":"kicked":a?"":o?"password":this.members.size>=Sc?"full":"";if(l)return{why:l};if(a){let c=a.link;return c&&(this.links.delete(c),c.send({t:"error",why:"replaced"}),c.close()),a.link=e,a.who=i||a.who,this.links.set(e,{id:a.id,who:a.who,key:n,seen:this.now()}),{id:a.id,back:!0}}let h=this.nextId++;return this.links.set(e,{id:h,who:i,key:n,seen:this.now()}),{id:h}}hello(e,t){let i=this.links.get(e);if(!i)return!1;let n=pi(t),s=this.members.get(i.id);if(s){let a=s.away;return s.profile=n,s.away=0,s.link=e,this.hooks.changed(),a&&this.hooks.note("back",n.name),!0}return this.members.size>=Sc?(e.send({t:"error",why:"full"}),this.links.delete(e),e.close(),!1):(this.members.set(i.id,{id:i.id,profile:n,away:0,link:e,who:i.who,key:i.key}),this.hooks.changed(),this.hooks.note("joined",n.name),!0)}member(e){let t=this.links.get(e);return t&&this.members.get(t.id)||null}heard(e){let t=this.links.get(e);return t&&(t.seen=this.now()),!!t}lost(e){let t=this.links.get(e);if(!t)return;this.links.delete(e);let i=this.members.get(t.id);if(!(!i||i.link!==e)){if(i.link=null,this.writing.delete(i.id),this.closed||!i.key){this.remove(i.id,"left");return}i.away=this.now(),this.hooks.changed(),this.hooks.note("lost",i.profile.name)}}leave(e){let t=this.member(e);this.links.delete(e),t&&this.remove(t.id,"left")}remove(e,t){let i=this.members.get(e);!i||e===1||(this.members.delete(e),this.writing.delete(e),i.link&&this.links.delete(i.link),this.hooks.changed(),t&&this.hooks.note(t,i.profile.name))}tick(){let e=this.now();for(let t of[...this.members.values()])t.away&&e-t.away>Tc&&this.remove(t.id,"left");for(let[t,i]of[...this.links])e-i.seen>C0&&(this.lost(t),t.close())}wake(){for(let e of this.links.values())e.seen=this.now()}kick(e,t){let i=this.members.get(e),n=this.now();if(!i||e===1||(this.kicks=this.kicks.filter(a=>n-a<L0),this.kicks.length>=P0))return!1;this.kicks.push(n),i.who&&this.bans.set(i.who,t?1/0:n+k0);let s=i.link;return s&&(s.send({t:"error",why:t?"banned":"kicked"}),this.links.delete(s),s.close()),this.remove(e,t?"banned":"kicked"),!0}wrote(e,t){t?this.writing.set(e,this.now()):this.writing.delete(e)}someoneWrites(e){return[...this.writing].some(([t,i])=>t!==e&&this.now()-i<I0)}act(e,t){let i=this.members.get(e),n=this.now();return!i||!this.mag||e!==1&&((!i.rate||n-i.rate.at>=1e3)&&(i.rate={at:n,n:0}),++i.rate.n>D0)||t&&t.t==="turn"&&this.someoneWrites(e)?null:this.mag.do(t,e)}message(){return{t:"room",members:[...this.members.values()].map(e=>({id:e.id,profile:e.profile,away:!!e.away}))}}},Js=(r,e,t)=>typeof r=="number"&&Number.isFinite(r)&&r>=e&&r<=t;function xp(r){return!r||!Array.isArray(r.members)?null:r.members.slice(0,Sc).filter(e=>e&&Number.isInteger(e.id)).map(e=>({id:e.id,profile:pi(e.profile),away:!!e.away}))}function Ac(r){return!r||typeof r!="object"?null:r.k==="rest"?{k:"rest"}:r.k==="turn"?Js(r.f,0,1)&&(r.d===1||r.d===-1)?{k:"turn",d:r.d,f:r.f,y:Js(r.y,0,1)?r.y:.8}:null:(r.k==="pen"||r.k==="write"||r.k==="erase")&&Js(r.x,-1.5,1.5)&&Js(r.y,-.5,1.5)?{k:r.k,x:r.x,y:r.y}:null}function Rc(r){return!r||!Number.isInteger(r.s)||r.s<0||!Number.isInteger(r.page)||r.page<0||r.page>999||!Array.isArray(r.p)||r.p.length>128||r.p.length%2||!r.p.every(e=>Js(e,-.2,2))?null:{s:r.s,page:r.page,p:r.p,end:!!r.end}}var _p=new Ht({colorWrite:!1});function U0(r){if(r.userData.veil)return;let e=r.isSkinnedMesh?new $n(r.geometry,_p):new Ne(r.geometry,_p);r.isSkinnedMesh&&e.bind(r.skeleton,r.bindMatrix),e.frustumCulled=!1,e.renderOrder=4,e.visible=!1,r.renderOrder=5,r.userData.veil=e,r.add(e)}var Ai=(r,e,t)=>new b(r,e,t),qa=Ai(0,1,0),O0=1.72,B0=Ai(.047,.027,.057),F0=.046;function z0(r){let e=new lt,t=.135,i=(s,a=.5)=>new dt({color:s,roughness:a}),n=(s,a,o)=>{let l=new Ne(s,a);return l.position.y=o,l.castShadow=!0,e.add(l),l};return n(new zs(9e-4,.004,10).rotateX(Math.PI),i("#2a2a2e"),.002),n(new ii(.0036,9e-4,.013,6),i("#d9b483",.8),.0102),n(new ii(.0036,.0036,t,6),i(r),.0165+t/2),n(new ii(.0038,.0038,.011,12),i("#b9bcc2",.3),.0165+t+.0055),n(new ii(.0036,.0036,.009,12),i("#d98a8a",.9),.0165+t+.0155),e}var Ya=class{constructor(e,t,i,n){this.side=i,this.hand=new Va(O0,t.skin,i),this.group=new lt,this.group.add(this.hand.group),this.sleeve=new Ne(new ii(.0285,.044,1,22,1,!1).translate(0,-.5,0),t.sleeve),this.cuff=new Ne(new ii(.0292,.0298,.02,24,1,!1),t.cuff),this.sleeve.castShadow=this.cuff.castShadow=!0,this.group.add(this.sleeve,this.cuff),n&&(this.pencil=z0(t.pencil),this.hand.group.add(this.pencil),this.tip=Ai(0,0,0),this.fit()),e.add(this.group),this.p=Ai(0,.02,.4),this.goal=this.p.clone(),this.mode="rest",this.k=14}fit(){if(!this.pencil||this.fitted===(this.hand.bones?2:1))return;this.fitted=this.hand.bones?2:1;let e=this.hand.grip("pen").at,t=B0.clone().sub(e).normalize();this.tip.copy(e).addScaledVector(t,-F0),this.tip.x*=this.side,t.x*=this.side,this.pencil.quaternion.setFromUnitVectors(qa,t),this.pencil.position.copy(this.tip)}dispose(e){e.remove(this.group),this.hand.dispose(),this.sleeve.geometry.dispose()}},Qs=class{constructor(e,t,i,{name:n="",mine:s=!1}={}){this.scene=e,this.angle=i,this.mine=s,this.mats={skin:new dt({color:Ks[t.skin],roughness:.62}),sleeve:new dt({color:Xi[t.sleeve],roughness:.9}),cuff:new dt({color:"#f2f0ea",roughness:.8}),pencil:Xi[t.sleeve]},this.ws=t.left?-1:1,this.write=new Ya(e,this.mats,this.ws,!0),this.other=new Ya(e,this.mats,-this.ws,!1);for(let a of[this.write,this.other])a.p=this.home(a),a.goal=a.p.clone();n&&(this.tag=H0(n,Xi[t.sleeve]),e.add(this.tag)),this.alpha=1,this.faint=1,this.away=!1,this.seen=-1e9}hide(e){this.hidden=e,e?(this.write.group.visible=this.other.group.visible=!1,this.tag&&(this.tag.visible=!1)):this.tag&&(this.tag.visible=!0)}dispose(){this.write.dispose(this.scene),this.other.dispose(this.scene),this.tag&&(this.scene.remove(this.tag),this.tag.material.map.dispose())}turn(e){return e.applyAxisAngle(qa,this.angle)}home(e){let t=Math.abs(Math.sin(this.angle));return this.turn(Ai(e.side*(.235+.02*t),.014,We/2+.035+t*.1))}shoulder(e){return this.turn(Ai(e.side*.24,.22,.74+Math.abs(Math.sin(this.angle))*.16))}pen(e,t){let i=this.write;i.mode=t?"write":"pen",i.goal.copy(e),t||(i.goal.y+=.012),i.k=t?60:24}erase(e){let t=this.write;t.mode="erase",t.goal.copy(e),t.k=45}leaf(e,t){let i=this.angle>2||this.angle<-2?-1:1,n=(t>0?1:-1)*i===this.write.side?this.write:this.other;n.mode="leaf",n.goal.copy(e),n.k=34;let s=n===this.write?this.other:this.write;s.mode==="leaf"&&this.restArm(s)}restArm(e){e.mode="rest",e.goal.copy(this.home(e)),e.k=7}rest(){this.restArm(this.write),this.restArm(this.other)}letLeaf(){for(let e of[this.write,this.other])e.mode==="leaf"&&this.restArm(e)}get tip(){return this.write.p}update(e,t=1){if(this.hidden)return;let i=this.write.mode!=="rest"||this.other.mode!=="rest",n=(this.away?.35:!this.mine&&i?.55:1)*(this.mine&&(this.write.mode==="write"||this.write.mode==="pen")?t>1.6?.42:.7:1)*this.faint;this.alpha+=(n-this.alpha)*(1-Math.exp(-e*8));let s=this.alpha>.985;for(let a of[this.write,this.other]){a.group.visible=this.alpha>.02;for(let o of[a.hand.mesh,a.sleeve,a.cuff])o&&(U0(o),o.userData.veil.visible=!s)}for(let a of[this.mats.skin,this.mats.sleeve,this.mats.cuff])a.transparent===s&&(a.transparent=!s,a.needsUpdate=!0),a.opacity=s?1:this.alpha;for(let a of[this.write,this.other])a.p.lerp(a.goal,1-Math.exp(-e*a.k)),this.pose(a,e);this.tag&&(this.tag.position.copy(this.write.p).add(this.turn(Ai(.03*this.ws,.06,.06))),this.tag.material.opacity=this.away?.4:1)}pose(e,t){let i=e.side,n=this.shoulder(e),s=e.p.clone().sub(n).setY(0).normalize(),a,o,l,h,c=.34,u=.5;e.mode==="leaf"?(h="piece",c=.5,u=.25):e===this.write?(h="pen",c=.3,u=.95,e.mode==="rest"&&(c=.2,u=.8)):(h="flat",c=.1,u=.06),a=s.clone().multiplyScalar(Math.cos(c)).addScaledVector(qa,-Math.sin(c)),o=qa.clone().multiplyScalar(Math.cos(c)).addScaledVector(s,Math.sin(c)).applyAxisAngle(a,u*i),e.mode==="leaf"?l=e.hand.grip("piece").at.clone():e===this.write?(e.fit(),l=e.tip.clone()):l=Ai(0,-.016,.085);let d=new b().crossVectors(o,a).normalize(),p=new b().crossVectors(a,d),f=e.p.clone().addScaledVector(d,-l.x).addScaledVector(p,-l.y).addScaledVector(a,-l.z);e.hand.place(f,a,o),e.hand.shape(h),e.hand.step(t);let x=n.clone().sub(f),m=x.length();x.normalize();let g=f.clone().addScaledVector(x,.016);e.sleeve.position.copy(g),e.sleeve.scale.set(1,m,1),e.sleeve.quaternion.setFromUnitVectors(Ai(0,-1,0),x),e.cuff.position.copy(g).addScaledVector(x,-.004),e.cuff.quaternion.copy(e.sleeve.quaternion)}};function H0(r,e){let t=document.createElement("canvas");t.width=512,t.height=112;let i=t.getContext("2d");i.fillStyle=e,i.beginPath(),i.roundRect(4,4,504,104,52),i.fill(),i.fillStyle="#fff",i.font='700 54px "Avenir Next", "Segoe UI", Roboto, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(r,256,58,460);let n=new Pt(t);n.colorSpace=at;let s=new sa(new Us({map:n,transparent:!0,depthTest:!1,fog:!1}));return s.scale.set(.05,.011,1),s.renderOrder=10,s}var Cc=[Math.PI,Math.PI/2,-Math.PI/2,Math.PI*.76,-Math.PI*.76];var $a=900,V0=7e-4,Za=class{constructor(e,t){this.group=new lt,this.group.renderOrder=3,e.add(this.group),this.book=t,this.map=new Map,this.mats=new Map}mat(e){let t=this.mats.get(e);return t||(t=new Ht({color:e,side:un,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),this.mats.set(e,t)),t}stroke(e,t,i,n,s=1){let a=this.map.get(e);if(!a){let u=new Ke;u.setAttribute("position",new tt(new Float32Array($a*6),3).setUsage(es));let d=new Uint16Array(($a-1)*6);for(let p=0;p<$a-1;p++)d.set([p*2,p*2+1,p*2+2,p*2+1,p*2+3,p*2+2],p*6);u.setIndex(new tt(d,1)),a={mesh:new Ne(u,this.mat(n)),n:0,page:t},a.mesh.frustumCulled=!1,a.mesh.renderOrder=3,this.group.add(a.mesh),this.map.set(e,a)}if(a.mesh.material=this.mat(s<1?"#9b8f7a":n),a.n===i.length)return;a.n=i.length;let o=i.length===1?[i[0],{...i[0],x:i[0].x+.0035}]:i,l=Math.max(1,Math.ceil(o.length/$a)),h=a.mesh.geometry.attributes.position,c=0;for(let u=0;u<o.length;u+=l){let d=o[Math.max(0,u-1)],p=o[Math.min(o.length-1,u+1)],f=o[u],x=p.x-d.x,m=p.y-d.y,g=Math.hypot(x,m)||1;x/=g,m/=g;let y=this.book.world(t,f.x,f.y,4e-4),v=V0*(f.w||1);h.setXYZ(c*2,y.x-m*v,y.y,y.z+x*v),h.setXYZ(c*2+1,y.x+m*v,y.y,y.z-x*v),c++}h.needsUpdate=!0,a.mesh.geometry.setDrawRange(0,(c-1)*6)}remove(e){let t=this.map.get(e);t&&(this.group.remove(t.mesh),t.mesh.geometry.dispose(),this.map.delete(e))}keep(e){for(let t of[...this.map.keys()])e.has(t)||this.remove(t)}show(e,t){for(let i of this.map.values())i.mesh.visible=t&&e.includes(i.page)}};function bp(r,e,t){let i=r.grid,n=i.letters.get(e);if(n===void 0)return null;if(!i.snap){for(let l of t)for(let h of l.text.trim()){let c=Rt(h);if(i.takes(c))return c}return null}let s=t.filter(l=>js(l.text)||Rt(l.text)===n).map(l=>Rt(l.text));if(!s.length)return null;let a=s.indexOf(n);if(a!==-1&&a<=3)return n;let o=s.findIndex(l=>r.normalize(l,e)===n);return o!==-1&&o<=3?n:s[0]}function Ic(r){let e=1/0,t=1/0,i=-1/0,n=-1/0;for(let s of r)e=Math.min(e,s.x),t=Math.min(t,s.y),i=Math.max(i,s.x),n=Math.max(n,s.y);return{x0:e,y0:t,x1:i,y1:n}}function kc(r,e,t=new Map){let i=Ic(r),n=(i.x0+i.x1)/2,s=(i.y0+i.y1)/2,a=e(n,s);if(a!==null&&t.has(a))return a;if(Math.max(i.x1-i.x0,i.y1-i.y0)<.45){let o=null,l=.35;for(let[h,c]of t){let u=Math.max(c.x0-n,0,n-c.x1),d=Math.max(c.y0-s,0,s-c.y1),p=Math.hypot(u,d);p<l&&d>=u&&(l=p,o=h)}if(o!==null)return o}return a}var G0=(r,e,t,i)=>{let n=(e.x-r.x)*(i.y-t.y)-(e.y-r.y)*(i.x-t.x);if(!n)return!1;let s=((i.x-t.x)*(r.y-t.y)-(i.y-t.y)*(r.x-t.x))/n,a=((e.x-r.x)*(r.y-t.y)-(e.y-r.y)*(r.x-t.x))/n;return s>=0&&s<=1&&a>=0&&a<=1};function Ja(r,e,t){for(let i=1;i<r.length;i++)if(G0(r[i-1],r[i],e,t))return!0;return!1}var W0=500,Mp=128,Qa=class{constructor(e,t,i=globalThis){this.h=e,this.engine=t,this.timers=i,this.inks=new Map,this.queue=[],this.live=null,this.busy=null,this.rev=new Map,this.id=1}key(e,t){return`${e} ${t}`}open(e){let t=new Map;for(let i of this.inks.values())i.level===e&&!i.sent&&t.set(i.k,Ic(i.strokes.flatMap(n=>n.points)));return t}hasInk(e,t){let i=this.inks.get(this.key(e,t));return!!i&&!i.sent}down(e,t,i=!1){this.live&&this.cancel();let n=this.h.cellAt(e,t.x,t.y),s=this.h.progress(e);return s.solved||n===null&&!i&&kc([t],(a,o)=>this.h.cellAt(e,a,o),this.open(e))===null||n!==null&&!i&&s.locked(n)&&!this.open(e).size?!1:(this.live={id:this.id++,level:e,points:[t],erase:i,cells:new Set(n===null?[]:[n]),hit:new Set,late:new Set},wp(this),this.h.changed(),!0)}move(e){let t=this.live;if(!t)return;let i=t.points[t.points.length-1];if(t.points.push(e),t.erase){let n=Math.max(1,Math.ceil(Math.hypot(e.x-i.x,e.y-i.y)/.25));for(let s=1;s<=n;s++){let a=this.h.cellAt(t.level,i.x+(e.x-i.x)*s/n,i.y+(e.y-i.y)*s/n);a!==null&&t.cells.add(a)}for(let s of this.inks.values())if(s.level===t.level)for(let a of s.strokes)Ja(a.points,i,e)&&t.hit.add(a.id)}this.h.changed()}up(){let e=this.live;if(this.live=null,!e)return null;if(e.erase)return this.finishErase(e),Ka(this),null;let t=kc(e.points,(s,a)=>this.h.cellAt(e.level,s,a),this.open(e.level));if(t===null||e.late.has(t)||this.h.progress(e.level).locked(t))return Ka(this),this.h.changed(),null;let i=this.key(e.level,t),n=this.inks.get(i);return(!n||n.sent)&&(n={level:e.level,k:t,strokes:[],rev:this.rev.get(i)||0},this.inks.set(i,n)),n.strokes.push({id:e.id,points:e.points}),this.queue=this.queue.filter(s=>s!==i),this.queue.push(i),Ka(this),this.h.changed(),{level:e.level,k:t}}cancel(){this.live=null,Ka(this),this.h.changed()}finishErase(e){for(let[n,s]of this.inks)s.strokes=s.strokes.filter(a=>!e.hit.has(a.id)),(!s.strokes.length||s.level===e.level&&e.cells.has(s.k))&&this.drop(n);let t=this.h.progress(e.level),i=[...e.cells].filter(n=>(t.letters.has(n)||t.cands.has(n))&&!t.locked(n));i.length&&this.h.erase(e.level,i),this.h.changed()}drop(e){this.inks.delete(e),this.queue=this.queue.filter(t=>t!==e)}touched(e,t){let i=!1;if(this.live&&this.live.level===e)for(let n of t)this.live.late.add(n);for(let n of t){let s=this.key(e,n);this.rev.set(s,(this.rev.get(s)||0)+1),this.inks.has(s)&&(this.drop(s),i=!0)}for(let[n,s]of this.inks)s.level===e&&this.h.progress(e).locked(s.k)&&(this.drop(n),i=!0);i&&this.h.changed()}forget(e){let t=!1;for(let[i,n]of this.inks)n.level===e&&(this.rev.set(i,(this.rev.get(i)||0)+1),this.drop(i),t=!0);t&&this.h.changed()}reset(){for(let[e,t]of this.inks)t.sent&&this.drop(e);this.h.changed()}async read(){if(this.busy){this.again=!0;return}do for(this.again=!1;this.queue.length&&!this.live;){let e=this.queue.shift(),t=this.inks.get(e);if(!t||t.sent||!t.strokes.length)continue;let i=t.strokes.slice(),n=()=>this.inks.get(e)===t&&t.rev===(this.rev.get(e)||0)&&i.every(o=>t.strokes.includes(o))&&t.strokes.length===i.length;this.busy=t,this.h.changed();let s=[];try{s=await this.engine.recognize(i.map(o=>o.points.map(l=>({x:l.x*Mp,y:l.y*Mp,t:l.t}))),this.h.progress(t.level).grid.digits?"digit":"letter")}catch(o){console.warn("ink:",o.message||o)}if(this.busy=null,!n())continue;let a=bp(this.h.progress(t.level),t.k,s);a!==null&&(t.sent=!0,t.ch=a,this.h.set(t.level,t.k,a)),this.h.changed()}while(this.again&&this.queue.length&&!this.live)}};function wp(r){r.timer&&r.timers.clearTimeout(r.timer),r.timer=0}function Ka(r){wp(r),r.queue.length&&(r.timer=r.timers.setTimeout(()=>{r.timer=0,r.read()},W0))}function Sp(r){let e=1/0,t=1/0,i=-1/0,n=-1/0;for(let p of r)for(let[f,x]of p)f<e&&(e=f),f>i&&(i=f),x<t&&(t=x),x>n&&(n=x);let s=Math.max(i-e,n-t,1e-6),a=(e+i)/2,o=(t+n)/2,l=576,h=19,c=new Float32Array(6*l),u=p=>p<0?0:p>23?23:p,d=(p,f,x,m,g)=>{let y=p*h+11.5,v=f*h+23/2,_=Math.floor(y),A=Math.floor(v),w=y-_,C=v-A,P=Math.atan2(m,x),N=x||m?1:0;for(let F=0;F<4;F++){let z=F&1,H=F>>1,X=(z?w:1-w)*(H?C:1-C),V=u(A+H)*24+u(_+z);c[V]+=X;for(let q=0;q<4;q++)c[(q+1)*l+V]+=X*N*Math.max(0,Math.abs(Math.cos(P-q*Math.PI/4))*2-1);c[5*l+V]+=X*g}};for(let p of r){if(!p.length)continue;let f=p.map(([v,_])=>[(v-a)/s,(_-o)/s]).filter((v,_,A)=>_===0||Math.hypot(v[0]-A[_-1][0],v[1]-A[_-1][1])>1e-6),x=[],m=[0];for(let v=1;v<f.length;v++)x.push(Math.hypot(f[v][0]-f[v-1][0],f[v][1]-f[v-1][1])),m.push(m[v-1]+x[v-1]);let g=m[m.length-1];if(g<1e-6){d(f[0][0],f[0][1],0,0,2);continue}let y=Math.max(2,Math.ceil(g/.02)+1);for(let v=0,_=0;v<y;v++){let A=g*v/(y-1);for(;_<x.length-1&&m[_+1]<=A;)_++;let w=f[_+1][0]-f[_][0],C=f[_+1][1]-f[_][1],P=x[_]>1e-9?(A-m[_])/x[_]:0,N=Math.max(x[_],1e-9);d(f[_][0]+w*P,f[_][1]+C*P,w/N,C/N,v===0||v===y-1?1:0)}}for(let p=0;p<c.length;p++)c[p]>1.5&&(c[p]=1.5);return c}var j0=r=>Int8Array.from(atob(r),e=>e.charCodeAt(0)<<24>>24),eo=class{constructor(e){this.classes=[...e.classes],this.letters=this.classes.findIndex(t=>t==="0"),this.layers=e.layers.map(t=>{let i=j0(t.w),n=t.shape[0],s=i.length/n,a=new Float32Array(i.length);for(let o=0;o<n;o++)for(let l=0;l<s;l++)a[o*s+l]=i[o*s+l]*t.s[o];return{shape:t.shape,w:a,b:Float32Array.from(t.b)}})}logits(e){let t=Sp(e),i=24;for(let n=0;n<3;n++)t=$0(Y0(t,this.layers[n],i),this.layers[n].shape[0],i),i>>=1;return Tp(Tp(t,this.layers[3],!0),this.layers[4],!1)}candidates(e,{kind:t="letter",least:i=q0,max:n=8}={}){let s=this.logits(e),a=u=>u>=this.letters&&u<this.letters+10,o=this.classes.map((u,d)=>d).filter(u=>t==="any"||a(u)===(t==="digit")),l=Math.max(...o.map(u=>s[u])),h=o.reduce((u,d)=>u+Math.exp(s[d]-l),0);return o.map(u=>({text:this.classes[u],score:Math.exp(s[u]-l)/h})).sort((u,d)=>d.score-u.score).filter((u,d)=>d===0||u.score>=i).slice(0,n)}},q0=.01;function Y0(r,{shape:[e,t],w:i,b:n},s){let a=new Float32Array(e*s*s);for(let o=0;o<e;o++){let l=o*s*s;for(let h=l;h<l+s*s;h++)a[h]=n[o];for(let h=0;h<t;h++)for(let c=0;c<3;c++)for(let u=0;u<3;u++){let d=i[((o*t+h)*3+c)*3+u],p=c-1,f=u-1;if(!d)continue;let x=Math.max(0,-p),m=Math.min(s,s-p),g=Math.max(0,-f),y=Math.min(s,s-f);for(let v=x;v<m;v++){let _=l+v*s,A=h*s*s+(v+p)*s+f;for(let w=g;w<y;w++)a[_+w]+=d*r[A+w]}}}for(let o=0;o<a.length;o++)a[o]<0&&(a[o]=0);return a}function $0(r,e,t){let i=t>>1,n=new Float32Array(e*i*i);for(let s=0;s<e;s++)for(let a=0;a<i;a++)for(let o=0;o<i;o++){let l=s*t*t+a*2*t+o*2;n[s*i*i+a*i+o]=Math.max(r[l],r[l+1],r[l+t],r[l+t+1])}return n}function Tp(r,{shape:[e,t],w:i,b:n},s){let a=new Float32Array(e);for(let o=0;o<e;o++){let l=n[o];for(let h=0;h<t;h++)l+=i[o*t+h]*r[h];a[o]=s&&l<0?0:l}return a}var Z0="tr-TR",Pc=class r{constructor(e){this.model=e,this.name="browser"}static async load(e=new URL("./weights.json",import.meta.url)){let t=await fetch(e);if(!t.ok)throw new Error(`handwriting model: ${t.status}`);return new r(new eo(await t.json()))}async recognize(e,t="letter"){return this.model.candidates(e.map(i=>i.map(n=>[n.x,n.y])),{kind:t})}};function J0(r=globalThis){if(r.CwordsInk&&typeof r.CwordsInk.postMessage=="function")return{send:t=>r.CwordsInk.postMessage(t)};let e=r.chrome&&r.chrome.webview;return e?{send:t=>e.postMessage(t),listen:t=>e.addEventListener("message",i=>t(i.data))}:null}var Lc=class{constructor(e,t=globalThis,i=4e3){this.port=e,this.timeout=i,this.next=1,this.waiting=new Map,this.name="native";let n=s=>this.reply(s);t.cwordsInkReply=n,e.listen&&e.listen(n)}reply(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return}let i=t&&this.waiting.get(t.id);i&&(this.waiting.delete(t.id),clearTimeout(i.timer),t.ok?i.res(t):i.rej(new Error(String(t.error||"failed"))))}ask(e,t={},i=this.timeout){let n=this.next++;return new Promise((s,a)=>{let o=setTimeout(()=>{this.waiting.delete(n),a(new Error(`${e}: no answer`))},i);this.waiting.set(n,{res:s,rej:a,timer:o});try{this.port.send(JSON.stringify({id:n,op:e,model:Z0,...t}))}catch(l){clearTimeout(o),this.waiting.delete(n),a(l)}})}async ready(){let e=await this.ask("ready",{},1500);return this.name=e.backend||"native",!!e.ready}async recognize(e){let t=await this.ask("recognize",{ink:{strokes:e.map(i=>({points:i.map(n=>({x:n.x,y:n.y,t:Math.round(n.t)}))}))},context:{preContext:"",writingArea:{width:128,height:128}}});return(Array.isArray(t.candidates)?t.candidates:[]).filter(i=>i&&typeof i.text=="string").map(i=>({text:i.text,score:Number(i.score)||0}))}},to=class r{constructor(e,t){this.native=e,this.browser=t,this.use=null,this.tried=-1e9}static async create(e=()=>Pc.load(),t=globalThis){let i=J0(t),n=new r(i&&new Lc(i,t),null);if(n.loading=e().then(s=>{n.browser=s}).catch(s=>{n.error=s}),await Promise.all([n.probe(),n.loading]),!n.use&&!n.browser)throw n.error;return n}async probe(e=Date.now()){if(!(!this.native||this.use||e-this.tried<15e3)){this.tried=e;try{await this.native.ready()&&(this.use=this.native)}catch{}}}get name(){return this.use?this.use.name:"browser"}async recognize(e,t="letter"){if(this.use)try{return await this.use.recognize(e)}catch(i){if(!this.browser)throw i;this.use=null,this.tried=Date.now()}else this.probe();return this.browser.recognize(e,t)}};var K0="https://cdn.jsdelivr.net/npm/peerjs@1.5.5/dist/peerjs.min.js",Q0="sha384-x0YgkOr/3UOZP2CRDxGW9e0Q+2Qjyr3uJrm4xU32Y7ZCNAo7Cc7bjhrZMi/dwczu",Ep="cwords3d-v1-",Ap="ABCDEFGHJKLMNPQRSTUVWXYZ",io=null;function ev(){return window.Peer?Promise.resolve(window.Peer):(io||(io=new Promise((r,e)=>{let t=document.createElement("script");t.src=K0,t.integrity=Q0,t.crossOrigin="anonymous",t.onload=()=>window.Peer?r(window.Peer):e(new Error("PeerJS")),t.onerror=()=>{io=null,e(new Error("PeerJS"))},document.head.appendChild(t)})),io)}async function no(r){let e=await ev();return new Promise((t,i)=>{let n=new e(r,{debug:0}),s=setTimeout(()=>{n.destroy(),i(Object.assign(new Error("timeout"),{type:"timeout"}))},12e3);n.once("open",()=>{clearTimeout(s),t(n)}),n.once("error",a=>{clearTimeout(s),n.destroy(),i(a)})})}var er=(r,e=!1)=>e?`${Ep}${r}-${ja(8)}`:Ep+r,Rp=()=>Array.from(crypto.getRandomValues(new Uint8Array(4)),r=>Ap[r%Ap.length]).join("");function Cp(){let r="";try{r=localStorage.getItem("cwords3d.who")||""}catch{}if(!/^[a-z0-9]{8,24}$/.test(r)){r=ja(16);try{localStorage.setItem("cwords3d.who",r)}catch{}}return r}var mn="";function Ip(){if(mn)return mn;try{mn=Ec(sessionStorage.getItem("cwords3d.tab"))}catch{}if(!mn){mn=ja(24);try{sessionStorage.setItem("cwords3d.tab",mn)}catch{}}return mn}var tv=4e3,iv=13e3,nv=3e3,sv=5e3,rv=5e3,Dc=(r,e)=>{if(r&&r.open)try{r.send(e)}catch{}},so=class{constructor(e){this.app=e,this.members=[],this.code="",this.pass="",this.closed=!1,this.last=performance.now(),this.timer=setInterval(()=>this.beat(),1e3)}beat(){let e=performance.now(),t=e-this.last;this.last=e,this.closed||this.second(e,t>rv)}link(){let e=new URL(location.href.split(/[?#]/)[0]);return e.searchParams.set("room",this.code),this.pass&&(e.hash=`pass=${encodeURIComponent(this.pass)}`),e.toString()}end(){this.closed=!0,clearInterval(this.timer)}},ro=class extends so{constructor(e){super(e),this.isHost=!0,this.myId=1,this.table=new Wa(e.profile,e.mag,{changed:()=>this.changed(),note:(t,i)=>{this.app.note(t,i),this.out({t:"note",k:t,name:i})}}),this.members=this.table.message().members}async open(e=""){this.pass=this.table.pass=Xa(e);let t=null;for(let i=0;i<5;i++){let n=Rp();try{let s=await no(er(n));if(this.closed){s.destroy();return}this.code=n,this.attach(s);return}catch(s){if(t=s,s.type!=="unavailable-id")break}}throw t||new Error("room")}attach(e){this.peer=e,e.on("connection",t=>{this.peer===e&&!this.closed?this.accept(t):t.close()}),e.on("disconnected",()=>{if(!this.closed&&this.peer===e&&!e.destroyed)try{e.reconnect()}catch{}}),e.on("error",t=>console.warn("[room]",t.type))}async reopen(){this.reopening=!0;try{let e=await no(er(this.code));this.closed?e.destroy():this.attach(e)}catch{}finally{this.reopening=!1}}second(e,t){t&&this.table.wake(),this.table.tick();let i=this.peer;if(i&&(i.disconnected||i.destroyed)&&!this.reopening&&e-(this.retryAt||0)>sv)if(this.retryAt=e,i.destroyed)this.reopen();else try{i.reconnect()}catch{}}accept(e){let t={send:i=>Dc(e,i),close:()=>setTimeout(()=>{try{e.close()}catch{}},300)};e.on("open",()=>{let i=this.table.admit(t,e.metadata);i.why?(t.send({t:"error",why:i.why}),t.close()):t.send({t:"welcome",id:i.id})}),e.on("data",i=>{try{this.receive(t,i)}catch(n){console.error("[room]",n)}}),e.on("close",()=>this.table.lost(t)),e.on("error",()=>this.table.lost(t))}receive(e,t){let i=this.table;if(!t||typeof t!="object"||typeof t.t!="string"||!i.heard(e))return;if(t.t==="hello"){i.hello(e,t.profile)&&e.send(this.game());return}let n=i.member(e);if(!(!n||n.away))switch(t.t){case"ping":e.send({t:"pong"});break;case"profile":n.profile=pi(t.profile),this.changed();break;case"sync":e.send(this.game());break;case"act":{let s=rs(t.a),a=s&&i.act(n.id,s);a?(this.tell(a.as||s,n.id),this.app.did(a)):e.send({t:"nope",a:s,busy:!!s&&s.t==="turn"&&i.someoneWrites(n.id)});break}case"hand":{let s=Ac(t.g);if(!s)break;s.k!=="write"&&s.k!=="erase"?i.wrote(n.id,!1):i.wrote(n.id,!0),this.app.remoteHand(n.id,s),this.out({t:"hand",id:n.id,g:s},n.id);break}case"ink":{let s=Rc(t);if(!s)break;i.wrote(n.id,!0),this.app.remoteInk(n.id,s),this.out({t:"ink",id:n.id,...s},n.id);break}case"leave":i.leave(e),e.close();break}}game(){let e=this.app.mag;return e?{t:"game",e:e.id,g:e.save()}:{t:"game",e:null}}act(e){let t=this.table.act(1,e);return t?(this.tell(t.as||e,1),this.app.did(t),!0):(this.app.refused(e,!!e&&e.t==="turn"&&this.table.someoneWrites(1)),!1)}tell(e,t){this.out({t:"act",a:e,who:t,n:this.app.mag.n})}hand(e){this.table.wrote(1,e.k==="write"||e.k==="erase"),this.out({t:"hand",id:1,g:e})}ink(e){this.table.wrote(1,!0),this.out({t:"ink",id:1,...e})}replaced(){this.table.mag=this.app.mag,this.out(this.game())}profile(e){this.table.members.get(1).profile=pi(e),this.changed()}changed(){this.members=this.table.message().members,!this.closed&&(this.out(this.table.message()),this.app.people())}kick(e,t){return this.table.kick(e,t)}out(e,t=null){for(let i of this.table.members.values())i.link&&!i.away&&i.id!==t&&i.link.send(e)}close(){if(this.closed)return;this.end(),this.table.closed=!0;for(let t of this.table.links.keys())t.send({t:"error",why:"closed"});let e=this.peer;e&&setTimeout(()=>e.destroy(),300)}},ao=class extends so{constructor(e,t,i=""){super(e),this.isHost=!1,this.code=t,this.pass=Xa(i),this.myId=0,this.away=!1,this.got=!1}connect(){return new Promise((e,t)=>{let i=!1,n=null,s=0,a=l=>{i||(i=!0,clearTimeout(s),l?(n&&n.destroy(),t(l)):e())},o=(l,h)=>{clearTimeout(s),s=setTimeout(()=>a(Object.assign(new Error(h),{why:h})),l)};o(3e4,"unreachable"),no(er(this.code,!0)).then(l=>{if(i||this.closed){l.destroy(),a(new Error("closed"));return}n=l;let h=l.connect(er(this.code),{reliable:!0,serialization:"json",metadata:{pass:this.pass||void 0,who:Cp(),key:Ip()}});o(2e4,"unreachable"),h.on("data",u=>{if(!(!u||typeof u!="object")){if(i){this.conn===h&&(this.heard=performance.now(),this.receive(u));return}u.t==="error"?a(Object.assign(new Error("refused"),{why:String(u.why),refused:!0})):u.t==="welcome"&&Number.isInteger(u.id)&&(this.peer=l,this.conn=h,this.myId=u.id,this.heard=performance.now(),Dc(h,{t:"hello",profile:this.app.profile}),a())}});let c=()=>{a(Object.assign(new Error("gone"),{why:"gone"})),this.conn===h&&this.lost()};h.on("close",c),h.on("error",c),l.on("error",u=>a(Object.assign(new Error(u.type),{why:u.type==="peer-unavailable"?"nobody":"failed"})))},l=>a(Object.assign(new Error(l.type||l.message),{why:"failed"})))})}async join(){await this.connect(),this.joined=!0}second(e,t){if(this.away){e-this.lostAt>Tc+1e4&&this.over("lost");return}this.conn&&(t&&(this.heard=e),e-(this.pinged||0)>tv&&(this.pinged=e,this.out({t:"ping"})),e-this.heard>iv&&this.lost())}lost(){this.closed||this.away||!this.joined||(this.drop(),this.away=!0,this.lostAt=performance.now(),this.app.people(),this.retry())}async retry(){for(;this.away&&!this.closed;)try{await this.connect(),this.away=!1,this.app.people()}catch(e){if(e.refused){this.over(e.why);return}await new Promise(t=>setTimeout(t,nv))}}receive(e){switch(e.t){case"room":{let t=xp(e);t&&(this.members=t,this.app.people());break}case"game":this.follow(e);break;case"act":{if(!this.got||!this.app.mag)break;let t=rs(e.a,!0),i=t&&e.n===this.app.mag.n+1?this.app.mag.do(t,Number.isInteger(e.who)?e.who:0,!0):null;i?this.app.did(i):performance.now()-(this.syncAt||-1e9)>800&&(this.syncAt=performance.now(),this.out({t:"sync"}));break}case"nope":this.app.refused(rs(e.a),!!e.busy);break;case"hand":{let t=Ac(e.g);t&&Number.isInteger(e.id)&&e.id!==this.myId&&this.app.remoteHand(e.id,t);break}case"ink":{let t=Rc(e);t&&Number.isInteger(e.id)&&e.id!==this.myId&&this.app.remoteInk(e.id,t);break}case"note":this.app.note(String(e.k),pi({name:e.name}).name);break;case"error":this.over(String(e.why));break}}async follow(e){this.got=!1;let t=this.turn=(this.turn||0)+1,i=e.e===null?await this.app.toShelf(!0):ui(e.e)&&await this.app.lay(e.e,e.g);t!==this.turn||this.closed||(this.got=!!i,i||setTimeout(()=>{!this.closed&&!this.got&&t===this.turn&&this.out({t:"sync"})},4e3),this.app.ui.refresh())}act(e){return this.away||!this.got?(this.app.refused(e,!1),!1):(this.out({t:"act",a:e}),!0)}hand(e){this.out({t:"hand",g:e})}ink(e){this.out({t:"ink",...e})}profile(e){this.out({t:"profile",profile:e})}kick(){return!1}out(e){Dc(this.conn,e)}over(e){this.closed||(this.close(),this.app.left(e))}drop(){let e=this.peer;this.conn=this.peer=null,e&&setTimeout(()=>e.destroy(),200)}close(){this.closed||(this.out({t:"leave"}),this.end(),this.drop())}};var ae=r=>document.getElementById(r);function gn(r){try{return JSON.parse(localStorage.getItem(r)||"null")}catch{return null}}function hs(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}var av={password:"This room has a password",full:"Room is full",closed:"Room closed",kicked:"You were sent out of the room",banned:"You are banned from this room",replaced:"This room was opened in another tab",lost:"Lost connection to the host",nobody:"Room not found – is the host still there?",unreachable:"Could not reach the host (a strict firewall can block peer-to-peer)."},oo=r=>de(av[r]||"Could not connect"),lo=class{constructor(e){this.app=e,ae("pencilBtn").onclick=()=>this.tool("pencil"),ae("eraserBtn").onclick=()=>this.tool("eraser"),ae("shelfBtn").onclick=()=>e.toShelf(),ae("fitBtn").onclick=()=>e.view.home(e.view.goal.x<0?-1:1),ae("prev").onclick=()=>e.go(e.spread-1),ae("next").onclick=()=>e.go(e.spread+1),ae("roomBtn").onclick=()=>{this.msg(""),ae("room").showModal()},ae("setBtn").onclick=()=>{this.fill(),ae("settings").showModal()};for(let i of document.querySelectorAll(".shut"))i.onclick=()=>i.closest("dialog").close();for(let i of document.querySelectorAll("dialog"))i.addEventListener("pointerdown",n=>{n.target===i&&i.close()});ae("openBtn").onclick=async()=>{this.busy(!0,de("Opening the room…"));try{await e.host(ae("newPass").value),this.msg("")}catch(i){this.msg(oo(i.why))}this.busy(!1)},ae("joinBtn").onclick=()=>this.tryJoin(ae("code").value.trim().toUpperCase(),ae("joinPass").value),ae("code").addEventListener("keydown",i=>{i.key==="Enter"&&ae("joinBtn").click()}),ae("leaveBtn").onclick=()=>e.leave(),ae("copyBtn").onclick=async()=>{let i=e.net&&e.net.link();if(i)try{await navigator.clipboard.writeText(i),this.toast(de("Link copied"))}catch{this.msg(i)}},ae("members").addEventListener("click",i=>{let n=i.target.closest("button");n&&e.net&&e.net.kick(Number(n.dataset.id),n.dataset.ban==="1")}),ae("name").onchange=()=>e.setProfile({...e.profile,name:ae("name").value}),ae("left").onchange=()=>e.setProfile({...e.profile,left:ae("left").checked}),ae("sound").onchange=()=>e.setPrefs({sound:ae("sound").checked}),ae("hands").onchange=()=>e.setPrefs({hands:Number(ae("hands").value)}),ae("lang").onchange=()=>{np(ae("lang").value),this.texts(),e.book&&e.book.redrawAll(),e.shelf.progress(i=>e.summary(i)),this.refresh(),this.fill()},ae("again").onclick=()=>{let i=ae("again");i.dataset.sure?(delete i.dataset.sure,e.startOver(),ae("settings").close(),this.texts()):(i.dataset.sure=1,i.textContent=de("Really? Everything written is lost."))};let t=(i,n,s)=>{i.replaceChildren(...n.map((a,o)=>{let l=document.createElement("b");return l.style.background=a,l.onclick=()=>{e.setProfile({...e.profile,[s]:o}),this.fill()},l}))};t(ae("skins"),Ks,"skin"),t(ae("sleeves"),Xi,"sleeve"),this.texts(),queueMicrotask(()=>this.refresh())}texts(){this.assistSig="",document.documentElement.lang=uc();for(let t of document.querySelectorAll("[data-t]"))t.dataset.sure||(t.textContent=de(t.dataset.t));let e={shelfBtn:["📚","Bookshelf"],pencilBtn:["✏️","Pencil"],eraserBtn:["🧽","Eraser"],fitBtn:["⤢","Whole page"],setBtn:["⚙","Settings"],prev:["‹","Previous page"],next:["›","Next page"]};for(let[t,[i,n]]of Object.entries(e))ae(t).textContent=i,ae(t).title=de(n),ae(t).setAttribute("aria-label",de(n));ae("openBtn").textContent=de("Open a room"),ae("joinBtn").textContent=de("Join"),ae("copyBtn").textContent=de("Copy link"),ae("leaveBtn").textContent=de("Leave"),ae("newPass").placeholder=ae("joinPass").placeholder=de("Password (optional)"),ae("code").placeholder=de("Room code")}tool(e){this.app.tool=e,ae("pencilBtn").classList.toggle("on",e==="pencil"),ae("eraserBtn").classList.toggle("on",e==="eraser")}fill(){let e=this.app.profile;ae("name").value=e.name,ae("left").checked=e.left,ae("sound").checked=this.app.prefs.sound,ae("hands").value=String(this.app.prefs.hands),ae("lang").value=uc(),[...ae("skins").children].forEach((t,i)=>t.classList.toggle("on",i===e.skin)),[...ae("sleeves").children].forEach((t,i)=>t.classList.toggle("on",i===e.sleeve)),delete ae("again").dataset.sure,ae("again").textContent=de("Start this magazine over"),this.refresh()}busy(e,t){for(let i of["openBtn","joinBtn"])ae(i).disabled=e;t!==void 0&&this.msg(t)}msg(e){ae("roomMsg").textContent=e}async tryJoin(e,t){if(ae("room").open||ae("room").showModal(),ae("code").value=e,ae("joinPass").value=t,!/^[A-Z]{4}$/.test(e)){this.msg(de("Room code"));return}this.busy(!0,de("Connecting…"));try{await this.app.join(e,t),this.msg(""),ae("room").close()}catch(i){this.msg(oo(i.why)),i.why==="password"&&ae("joinPass").focus()}this.busy(!1)}left(e){this.toast(oo(e)),this.msg(oo(e))}toast(e){let t=document.createElement("div");for(t.textContent=e,ae("toasts").append(t),setTimeout(()=>{t.style.opacity=0,setTimeout(()=>t.remove(),500)},2800);ae("toasts").children.length>4;)ae("toasts").firstChild.remove()}assist(){let e=this.app,t=ae("assist"),i=e.activeLevel(),n=i&&e.mag.progress.get(i.id),s=i&&e.written(i.id),a=[],o=(h,c,u,d={})=>a.push({icon:h,label:c,run:u,...d});if(i&&!n.solved){let h=!e.net||e.net.isHost;if(o("↶","Undo",()=>e.undo(),{off:h&&!e.mag.canUndo(i.id)}),o("↷","Redo",()=>e.undo(!0),{off:h&&!e.mag.canUndo(i.id,!0),gap:!0}),i.type==="nonogram"){for(let[u,d,p]of[["rotate","⟳","Rotate"],["fill","■","Fill"],["cross","✕","Cross"],["clear","▢","Clear"]])o(d,p,()=>e.setTool("mark",u),{on:e.tools.mark===u,gap:u==="clear"});for(let[u,d,p]of[["line","╱","Line"],["free","〰","Free"],["block","▦","Block"]])o(d,p,()=>e.setTool("pick",u),{on:e.tools.pick===u,gap:u==="block"})}s&&s.grid.digits&&o("¹²³","Small digits",()=>e.toggle("small"),{on:e.small}),(i.type==="sudoku"||i.type==="fiveli_sudoku")&&o("🪄","Automatic candidates",()=>e.toggle("auto"),{on:e.book.drawer.auto.has(i.id)}),["sudoku","fiveli_sudoku","kakuro","futoshiki"].includes(i.type)&&o("🔍","Next move",()=>e.next(),{hold:()=>e.next(!0)}),i.type==="surplus_words"&&o("🔤","Highlight matching letters",()=>e.toggle("matching"),{on:e.matching});let c={nonogram:"Mark certain cells",slitherlink:"Show an edge",hashi:"Show a bridge",shikaku:"Show a rectangle",maze:"Show a step",surplus_words:"Show a word",jigsaw_crossword:"Show a piece",sudoku:"Show the result",fiveli_sudoku:"Show the result",kakuro:"Show the result",futoshiki:"Show the result",number_hunt:"Show a digit"}[i.type]||"Show a letter";o("💡",c,()=>e.hint()),s&&s.grid.answers.length&&o("💡💡","Show the answer",()=>e.hint(!0))}t.hidden=!a.length;let l=JSON.stringify(a.map(h=>[h.icon,h.label,h.on,h.off,h.gap]));l!==this.assistSig&&(this.assistSig=l,t.replaceChildren(...a.map(h=>{let c=document.createElement("button");c.textContent=h.icon,c.title=de(h.label),c.setAttribute("aria-label",de(h.label)),c.disabled=!!h.off,c.className=`${h.on?"on":""}${h.gap?" gap":""}`,h.on!==void 0&&c.setAttribute("aria-pressed",String(h.on));let u=0,d=!1;return h.hold&&(c.onpointerdown=()=>{d=!1,u=setTimeout(()=>{d=!0,h.hold()},480)},c.onpointerup=c.onpointerleave=()=>clearTimeout(u),c.oncontextmenu=p=>{p.preventDefault(),clearTimeout(u),d||(d=!0,h.hold())}),c.onclick=()=>{if(d){d=!1;return}h.run()},c})))}clue(e=null){if(this.app.said){ae("clue").hidden=!1,ae("clue").replaceChildren(this.app.said);return}let t=this.app,i=t.sel,n=i&&i.answer;if(!t.mag){ae("clue").hidden=!0;return}!n&&e&&(n=(t.mag.grids.get(e.level).at.get(e.k)||[]).find(l=>!t.mag.progress.get(e.level).done.has(l.n))||null);let s=i&&t.mag.byId.get(i.level);if(s&&s.type==="kakuro"){let o=Ea(s).filter(l=>l.ks.includes(i.k));ae("clue").hidden=!o.length,ae("clue").replaceChildren(o.map(l=>`${l.down?"↕":"↔"} ${l.sum}: ${l.ks.map(h=>t.mag.progress.get(s.id).letters.get(h)||"□").join(" ")}`).join("     "));return}if(ae("clue").hidden=!n||!n.text,!n||!n.text)return;let a=document.createElement("small");a.textContent=`${n.d==="h"?"→ ":n.d==="v"?"↓ ":""}${n.no?`${n.no} · `:""}${n.cells.length}`,ae("clue").replaceChildren(a,n.text)}refresh(){let e=this.app,t=e.net;if(!e.ui)return;let i=e.where==="table"&&!!e.mag;ae("prev").hidden=!i||e.spread<=0,ae("next").hidden=!i||e.spread>=e.mag.spreads-1;for(let s of["shelfBtn","pencilBtn","eraserBtn","fitBtn","again"])ae(s).hidden=!i;ae("heading").hidden=i,ae("heading").textContent=de("Choose an episode"),i||(ae("clue").hidden=!0),this.assist(),ae("roomBtn").textContent=t?`👥 ${t.code}`:`👥 ${de("Room")}`,ae("roomOut").hidden=!!t,ae("roomIn").hidden=!t,ae("inkName").textContent=e.engine?e.engine.name==="browser"?de("this browser"):e.engine.name:de(e.inkError?"not available":"loading…");let n=t?t.members:[];ae("people").replaceChildren(...n.map(s=>{let a=document.createElement("i");return a.style.background=Xi[s.profile.sleeve],a.textContent=[...s.profile.name][0]||"?",a.title=s.profile.name,a.className=s.away?"off":"",a})),t&&(ae("codeShow").textContent=t.away?de("Reconnecting…"):t.code,ae("members").replaceChildren(...n.map(s=>{let a=document.createElement("li"),o=document.createElement("span");if(o.textContent=s.profile.name+(s.id===t.myId?` (${de("you")})`:s.away?` – ${de("away")}`:""),a.append(o),t.isHost&&s.id!==1)for(let[l,h]of[["Kick",0],["Ban",1]]){let c=document.createElement("button");c.textContent=de(l),c.dataset.id=s.id,c.dataset.ban=h,a.append(c)}return a})))}};var fi=null,ho=null,Nc=!0,cs=null,Oc=r=>{Nc=r,r||ds()};function tr(){if(!Nc)return null;if(!fi){try{fi=new(window.AudioContext||window.webkitAudioContext)}catch{return Nc=!1,null}ho=fi.createBuffer(1,fi.sampleRate,fi.sampleRate);let r=ho.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1}return fi.state==="suspended"&&fi.resume(),fi}function Uc(r,e,t,i,n,s="bandpass"){let a=tr();if(!a)return;let o=a.createBufferSource(),l=a.createBiquadFilter(),h=a.createGain(),c=a.currentTime;o.buffer=ho,o.loop=!0,l.type=s,l.Q.value=t,l.frequency.setValueAtTime(r,c),l.frequency.exponentialRampToValueAtTime(e,c+n),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(i,c+n*.25),h.gain.exponentialRampToValueAtTime(1e-4,c+n),o.connect(l).connect(h).connect(a.destination),o.start(c,Math.random()),o.stop(c+n)}var us=()=>{Uc(900,3600,.8,.16,.34),setTimeout(()=>Uc(2600,700,.7,.12,.22),240)},ir=()=>Uc(700,500,.8,.05,.16);function co(r){let e=tr();if(e){if(!cs){let t=e.createBufferSource(),i=e.createBiquadFilter(),n=e.createGain();t.buffer=ho,t.loop=!0,i.type="bandpass",i.frequency.value=2600,i.Q.value=1.1,n.gain.value=0,t.connect(i).connect(n).connect(e.destination),t.start(),cs={s:t,f:i,g:n}}cs.g.gain.setTargetAtTime(Math.min(.05,r*.05),e.currentTime,.02),cs.f.frequency.setTargetAtTime(2100+Math.min(1,r)*1200,e.currentTime,.03)}}function ds(){cs&&fi&&cs.g.gain.setTargetAtTime(0,fi.currentTime,.03)}function Bc(r=[659,880]){let e=tr();e&&r.forEach((t,i)=>{let n=e.createOscillator(),s=e.createGain(),a=e.currentTime+i*.09;n.type="triangle",n.frequency.value=t,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.09,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.5),n.connect(s).connect(e.destination),n.start(a),n.stop(a+.55)})}var uo=70,lv=6e3,kp=260,hv=420,Pp=r=>`cwords3d.book.${r}`,Dp=r=>new URL(`../episodes/${r}`,import.meta.url),Np=async r=>{let e=await fetch(Dp(r));if(!e.ok)throw new Error(`${r}: ${e.status}`);return e.json()},Lp=await Np("index.json"),Fc=class{constructor(){this.mag=null,this.book=null,this.where="shelf",this.loaded=new Map,this.images=new Map,this.profile=pi(gn("cwords3d.profile")||{name:`Oyuncu${100+Math.floor(Math.random()*900)}`}),this.prefs={hands:1,sound:!0,...gn("cwords3d.prefs")||{}},Oc(this.prefs.sound),this.net=null,this.others=new Map,this.remote=new Map,this.tool="pencil",this.sel=null,this.hover=null,this.hints=new Set,this.said=null,this.touchedLevel=null,this.tools={mark:"rotate",pick:"line",...gn("cwords3d.tools")||{}},this.small=!1,this.autos=new Set,this.matching=!1;let e=document.getElementById("view");this.view=new Ba(e);let t=this.view.renderer.capabilities.maxTextureSize,i=Math.min(this.view.touch?1440:2048,Math.floor(t/St));this.texW=i,this.inkView=new Za(this.view.scene,{world:(...n)=>this.book.world(...n)}),this.makeShelf(),addEventListener("resize",()=>{this.shelf.per!==this.per()&&this.makeShelf()}),this.session=new Qa({progress:n=>this.mag.progress.get(n),cellAt:(n,s,a)=>{let o=this.book.drawer.cellsOf(n).at(s,a);return o!==null&&this.mag.grids.get(n).isAnswerCell(o)?o:null},set:(n,s,a)=>this.act(this.small&&/\d/.test(a)?{t:"cand",l:n,k:s,d:Number(a)}:{t:"set",l:n,k:s,ch:a}),erase:(n,s)=>{ir(),this.act({t:"erase",l:n,ks:s})},changed:()=>{this.inkDirty=!0}},{recognize:(n,s)=>this.engine?this.engine.recognize(n,s):Promise.reject(new Error("not loaded"))}),this.me=this.makeMe(),this.me.hide(!0),e.classList.add("away"),this.ui=new lo(this),this.pointers=new Map,this.mode=null,this.penSeen=-1e9,this.space=!1,this.listen(e),to.create().then(n=>{this.engine=n,this.ui.refresh(),this.session.queue.length&&this.session.read()},()=>{this.ui.toast(de("Handwriting could not be loaded: type instead")),this.inkError=!0,this.ui.refresh()}),this.view.place(0),this.last=performance.now(),this.view.renderer.setAnimationLoop(n=>this.frame(n)),this.fromLink()}makeMe(){this.me&&this.me.dispose();let e=new Qs(this.view.scene,this.profile,0,{mine:!0});return e.faint=Number(this.prefs.hands),e}get myId(){return this.net?this.net.myId:1}colorIndex(e){let t=this.net&&this.net.members.find(i=>i.id===e);return t?t.profile.sleeve:e===this.myId||!this.net?this.profile.sleeve:0}per(){return this.view.single?2:3}makeShelf(){let e=this.shelf;if(e&&e.pull&&e.pull.done(),e&&e.dispose(),this.shelf=new Ua(this.view.scene,Lp,t=>this.image(t),this.per()),this.view.shelf=this.shelf.size,this.shelf.progress(t=>this.summary(t)),this.mag){let t=this.shelf.books.find(i=>i.e.id===this.mag.id);t&&(this.shelf.away=t,t.book.visible=!1)}}summary(e){let t=(gn("cwords3d.shelf")||{})[e];return t&&Number.isInteger(t.solved)&&Number.isInteger(t.started)?t:{solved:0,started:0}}image(e){return e.cover?(this.images.has(e.id)||this.images.set(e.id,new Promise(t=>{let i=new Image;i.onload=()=>t(i),i.onerror=()=>t(null),i.src=Dp(e.cover).href})),this.images.get(e.id)):Promise.resolve(null)}async fetch(e){let t=Lp.find(s=>s.id===e);if(!t)throw new Error(`no episode ${e}`);this.loaded.has(e)||this.loaded.set(e,Promise.all([Np(`${e}.json`),this.image(t)]).catch(s=>{throw this.loaded.delete(e),s}));let[i,n]=await this.loaded.get(e);return{episode:{...i,color:t.color},cover:n}}async lay(e,t){if(this.mag&&this.mag.id===e&&this.where==="table")return t!==void 0&&!this.mag.load(t)?!1:(this.replaced(),!0);if(this.laying)return!1;this.laying=!0;try{let{episode:i,cover:n}=await this.fetch(e),s=new $s(i);if(t!==void 0){if(!s.load(t))return!1}else s.load(gn(Pp(e)));this.clear(),this.mag=s,this.book=new Da(s,{renderer:this.view.renderer,texW:this.texW,cover:n}),this.book.drawer.colorOf=o=>this.colorIndex(o),this.book.redrawAll(),this.book.group.visible=!1,this.view.scene.add(this.book.group),this.where="table",this.view.at="table",this.me.hide(!1),this.settled(0),this.view.home(1);let a=()=>{this.mag===s&&(this.book.group.visible=!0,this.book.prepare(this.view.renderer,this.view.scene,this.view.camera),this.inkDirty=!0)};return s.spread===0?(this.shelf.take(e,a),us()):this.shelf.take(e,()=>{a(),us()}),this.ui.refresh(),!0}catch(i){return console.warn(i),this.ui.toast(de("The episode could not be loaded")),!1}finally{this.laying=!1}}clear(){this.stopMode(!0),this.select(null),this.session.live=null,this.session.inks.clear(),this.session.queue=[],this.session.rev.clear(),this.remote.clear(),this.inkView.keep(new Set),this.drop(),this.sentNote=null,this.hints=new Set,this.hintsIn=null,this.said=null,this.sameDigit=null,this.hotLine=null,this.touchedLevel=null,this.book&&this.book.dispose(),this.mag=null,this.book=null,this.shelf.put()}async toShelf(e=!1){return this.net&&!this.net.isHost&&!e?(this.ui.toast(de("The host chooses the episode")),!1):(this.where==="shelf"||(this.save(),this.clear(),this.where="shelf",this.view.at="shelf",this.me.hide(!0),this.view.canvas.classList.add("away"),this.shelf.progress(t=>this.summary(t)),this.ui.refresh(),this.net&&this.net.isHost&&this.net.replaced()),!0)}async choose(e){if(this.net&&!this.net.isHost){this.ui.toast(de("The host chooses the episode"));return}await this.lay(e)&&this.net&&this.net.replaced()}act(e){if(!this.mag)return!1;if(this.net)return this.net.act(e);let t=this.mag.do(e,1);return t?this.did(t):this.refused(e,!1),!!t}did(e){if(e.t==="turn")this.session.cancel(),this.turnSeen(e);else{if(e.t==="note"||e.t==="rub"){this.noted(e),this.save();return}let t=this.levelOf(e.l),i=this.mag.progress.get(e.l);if(this.unsay(),e.t==="state")this.session.forget(e.l),this.book.redrawLevel(e.l),this.repaint(e.l,this.marked());else if(!this.written(e.l))this.book.redrawLevel(e.l);else{let n=new Set(e.t==="set"?[e.k,...e.ks]:e.t==="cand"?[e.k]:e.t==="many"?e.ks:e.gone);this.session.touched(e.l,[...n]);for(let s of e.completed||[]){for(let a of s.cells)n.add(a);s.clue&&n.add(be(s.clue.r,s.clue.c))}if(i.grid.digits)for(let s of this.book.drawer.cellsOf(e.l).all.keys())n.add(s);this.repaint(e.l,n),e.t==="set"&&this.dropRemoteInk(e.who,e.l,e.k),(t.bank||e.t==="many")&&(this.book.redrawLevel(e.l),this.repaint(e.l,this.marked()))}e.completed&&e.completed.length?(Bc(e.solved?[523,659,784,1047]:void 0),this.book.redrawLevel(e.l),this.repaint(e.l,this.marked())):e.solved&&Bc([523,659,784,1047]),e.solved&&(this.select(null),this.session.touched(e.l,[]),this.book.redrawLevel(e.l),this.ui.toast(de("Puzzle solved!"))),(e.solved||e.completed&&e.completed.length)&&this.mag.pages.forEach((n,s)=>{n.kind==="contents"&&this.book.redraw(s)})}this.save(),this.ui.refresh()}noted(e){let t=this.mag.pages.findIndex(i=>i.key===e.g);if(e.t==="note"){for(let[n,s]of this.remote)s.id===e.who&&s.page===t&&s.end&&this.remote.delete(n);this.inkDirty=!0;let i=(this.mag.notes.get(e.g)||[]).find(n=>n[0]===e.i);i&&this.book.addNote(t,i),e.who===this.myId&&(this.sentNote=null)}else this.book.redraw(t)}refused(e,t){if(e&&e.t==="note"){this.sentNote=null,this.inkDirty=!0,this.ui.toast(de("No more room for notes here"));return}if(!(e&&(e.t==="hint"||e.t==="undo"||e.t==="rub"))){if(e&&e.t==="turn"){let i=this.book.turn;i&&i.mine&&(this.book.release(i.fwd?0:1,()=>this.settled(0)),i.back=!0),t&&this.ui.toast(de("Someone is writing"))}this.session.reset()}}replaced(){this.mag&&(this.drop(),this.session.reset(),this.session.inks.clear(),this.session.queue=[],this.sel=null,this.book.cancel(),this.book.redrawAll(),this.settled(0),this.ui.refresh())}save(){!this.mag||this.net&&!this.net.isHost||(hs(Pp(this.mag.id),this.mag.save()),hs("cwords3d.shelf",{...gn("cwords3d.shelf")||{},[this.mag.id]:{solved:this.mag.solvedCount,started:this.mag.startedCount}}))}startOver(){if(!this.mag)return;let e=new $s(this.mag.episode);e.n=this.mag.n+1,e.spread=this.mag.spread,this.mag.load(e.save()),this.replaced(),this.save(),this.net&&this.net.isHost&&this.net.replaced()}get spread(){return this.mag?this.mag.spread:0}pages(){if(!this.mag)return[];let e=this.spread;return[2*e-1,2*e].filter(t=>t>=0&&t<this.mag.pages.length)}settled(e){if(!this.mag)return;let t=this.spread;if(this.view.open=[t>0,t<this.mag.spreads-1],e!==0||!this.view.open.every(Boolean)){let i=this.view.goal.zoom;e&&(this.view.single||i<=1.25)?this.view.home(e>0?this.view.open[0]?-1:1:this.view.open[1]?1:-1):this.view.clampGoal(),e||this.view.home(this.view.open[1]?1:-1)}this.inkDirty=!0,this.ui.refresh(),this.ui.clue()}canTurn(e){return this.book&&this.where==="table"&&!this.book.turn&&e>=0&&e<this.mag.spreads&&e!==this.spread}go(e){if(!this.canTurn(e)||this.session.live)return;let t=this.spread,i=e>t;this.book.begin(t,e),this.book.turn.mine=!0,this.book.turn.drag=!1,this.book.turn.goal=null,this.book.turn.target=i?0:1,this.finish(!0)}finish(e){let t=this.book.turn;if(t){if(!e){this.book.release(t.fwd?0:1,()=>this.settled(0));return}us(),t.dest=t.to,this.book.release(t.fwd?1:0,()=>this.settled(t.back?0:t.fwd?1:-1)),this.act({t:"turn",to:t.to})}}turnSeen(e){this.unsay(),this.sameDigit=null,this.sel=null;let t=this.book.turn;if(t&&t.to===e.to&&t.mine)return;if(t&&t.to===e.to){us(),t.mine=!1,t.dest=e.to,this.book.release(t.fwd?1:0,()=>this.settled(t.fwd?1:-1));return}t&&(this.book.turn=null),us(),this.book.begin(e.from,e.to),this.book.turn.by=e.who,this.book.turn.dest=e.to;let i=e.to>e.from;this.book.release(i?1:0,()=>{this.letLeaf(e.who),this.settled(i?1:-1)})}letLeaf(e){let t=this.others.get(e);t&&t.letLeaf()}levelOf(e){return this.mag.byId.get(e)}spot(e){let t=e&&this.mag.pages[e.page];return!t||t.kind!=="grid"?null:{n:e.page,level:t.level,...La(t,this.levelOf(t.level),e.x,e.y)}}cellOfSpot(e){return e.inside?this.book.drawer.cellsOf(e.level).at(e.x,e.y):null}written(e){let t=this.mag.progress.get(e);return t instanceof ni?t:null}marks(e){let t=new Map,i=(o,l)=>t.set(o,{...t.get(o)||{},...l}),n=this.sel,s=this.written(e);if(!s)return t;let a=this.sameDigit&&this.sameDigit.level===e?this.sameDigit.v:n&&n.level===e&&s.grid.digits?s.letters.get(n.k):null;if(a){for(let[o,l]of s.letters)l===a&&i(o,{same:!0});for(let[o,l]of this.book.drawer.cellsOf(e).all)l[2]==="g"&&l[3]===a&&i(o,{same:!0})}if(n&&n.level===e){for(let o of n.answer?n.answer.cells:s.grid.linked.get(n.k)||[])i(o,{word:!0});i(n.k,{cursor:!0})}if(this.hintsIn===e)for(let o of this.hints)(!n||o!==n.k)&&i(o,{hint:!0});return t}marked(){return this.sel?new Set(this.marks(this.sel.level).keys()):new Set}repaint(e,t){this.written(e)&&this.book.redrawCells(e,t,this.marks(e))}remark(e,t){let i=new Set(this.marks(e).keys());t(),this.repaint(e,new Set([...i,...this.marks(e).keys()]))}select(e,t,i=null){let n=this.sel,s=this.marked();if(!this.mag){this.sel=null;return}(!n||n.level!==e||n.k!==t)&&this.unsay();let a=this.mag.grids.get(e),o=e?a.at.get(t)||[]:[],l=null;if(o.length){let h=n&&n.level===e&&n.k===t;l=i?o.find(c=>c.d===i)||o[0]:h?o[(o.indexOf(n.answer)+1)%o.length]:o.find(c=>n&&c===n.answer)||o.find(c=>!this.mag.progress.get(e).done.has(c.n))||o[0]}this.sel=e?{level:e,k:t,answer:l}:null,n&&this.repaint(n.level,s),this.sel&&(this.repaint(e,this.marked()),this.touchedLevel=e),this.ui.clue(),this.ui.assist()}type(e){let t=this.sel;if(t){if(this.session.touched(t.level,[t.k]),this.small&&/\d/.test(e)){this.act({t:"cand",l:t.level,k:t.k,d:Number(e)});return}this.act({t:"set",l:t.level,k:t.k,ch:e}),this.step(1)}}step(e){let t=this.sel;if(!t)return;if(!t.answer){this.mag.grids.get(t.level).digits||this.moveSel(0,e);return}let i=t.answer.cells.indexOf(t.k),n=this.mag.progress.get(t.level);for(let s=i+e;s>=0&&s<t.answer.cells.length;s+=e)if(!n.locked(t.answer.cells[s])||e<0){this.select(t.level,t.answer.cells[s],t.answer.d);return}}moveSel(e,t){let i=this.sel;if(!i)return;let n=this.mag.grids.get(i.level);for(let s=je(i.k)+e,a=Ue(i.k)+t,o=0;s>=0&&a>=0&&s<256&&a<256&&o<100;s+=e,a+=t,o++)if(n.isAnswerCell(be(s,a))){this.select(i.level,be(s,a),e?"v":"h");return}}listen(e){e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("pointerdown",t=>this.down(t)),e.addEventListener("pointermove",t=>this.moved(t)),e.addEventListener("pointerup",t=>this.up(t)),e.addEventListener("pointercancel",t=>this.up(t,!0)),e.addEventListener("pointerleave",()=>{this.mode||(this.hover=null,this.handOff())}),e.addEventListener("wheel",t=>{t.preventDefault(),this.where!=="shelf"&&(t.ctrlKey||t.deltaMode||Math.abs(t.deltaY)>=80?this.view.zoomAt(Math.exp(-t.deltaY*(t.ctrlKey?.011:.0016)),t.clientX,t.clientY):this.view.pan(-t.deltaX,-t.deltaY))},{passive:!1}),addEventListener("keydown",t=>this.keydown(t)),addEventListener("keyup",t=>{t.code==="Space"&&(this.space=!1)}),addEventListener("blur",()=>{this.space=!1})}keydown(e){if(e.target.closest&&e.target.closest("input, select, textarea, dialog"))return;if((e.ctrlKey||e.metaKey)&&e.code==="KeyZ"){e.preventDefault(),this.undo(e.shiftKey);return}if(e.ctrlKey||e.metaKey||e.altKey)return;if(e.code==="Space"){this.space=!0,e.preventDefault();return}let t=e.key;if(this.where==="shelf")return;if(e.shiftKey&&/^Digit\d$/.test(e.code)&&this.sel&&this.mag.grids.get(this.sel.level).digits){e.preventDefault(),this.act({t:"cand",l:this.sel.level,k:this.sel.k,d:Number(e.code[5])});return}let i=this.activeLevel(),n=i&&i.type==="nonogram"&&!this.sel?{r:["mark","rotate"],m:["mark","fill"],x:["mark","cross"],e:["mark","clear"],l:["pick","line"],f:["pick","free"],b:["pick","block"]}[t.toLowerCase()]:null;if(n){this.setTool(...n);return}if(t==="PageDown")this.go(this.spread+1);else if(t==="PageUp")this.go(this.spread-1);else if(t==="Escape")this.sel?this.select(null):this.view.goal.zoom>1.05?this.view.home(1):this.toShelf();else if(this.sel)if(t==="ArrowRight")this.moveSel(0,1);else if(t==="ArrowLeft")this.moveSel(0,-1);else if(t==="ArrowDown")this.moveSel(1,0);else if(t==="ArrowUp")this.moveSel(-1,0);else if(t==="Tab")this.select(this.sel.level,this.sel.k);else if(t==="Backspace"||t==="Delete"){this.session.touched(this.sel.level,[this.sel.k]);let s=this.mag.progress.get(this.sel.level);s.letters.has(this.sel.k)&&!s.locked(this.sel.k)?this.act({t:"erase",l:this.sel.level,ks:[this.sel.k]}):t==="Backspace"&&this.step(-1)}else if([...t].length===1&&(is(t)||/\d/.test(t)))this.type(Rt(t));else return;else if(t==="ArrowRight")this.go(this.spread+1);else if(t==="ArrowLeft")this.go(this.spread-1);else return;e.preventDefault()}hitOf(e){let t=this.view.ground(e.clientX,e.clientY,this.book.height(1));return t?(t.x<0&&(t=this.view.ground(e.clientX,e.clientY,this.book.height(-1))),{g:t,hit:this.book.at(t.x,t.z)}):null}toPoint(e,t){return{x:e.x,y:e.y,t:t.timeStamp,w:t.pointerType==="pen"&&t.pressure?.55+t.pressure*.9:1}}erasing(e){return this.tool==="eraser"||(e.buttons&32)!==0||e.pointerType!=="touch"&&(e.buttons&2)!==0}down(e){tr(),document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),this.view.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType}),e.pointerType==="pen"&&(this.penSeen=performance.now());let t=[...this.pointers.values()].filter(o=>o.type==="touch");if(t.length===2){this.stopMode(!0),this.mode={k:"pinch",...this.pinchState(t)};return}if(this.mode)return;if(this.where==="shelf"){let o=this.shelf.pick(this.view.ray(e.clientX,e.clientY));this.mode={k:"shelf",id:e.pointerId,book:o,x0:e.clientX,y0:e.clientY,moved:0},this.shelf.hot=o;return}if(!this.book||!this.book.group.visible)return;let i=this.hitOf(e);if(!i)return;let n={id:e.pointerId,x0:e.clientX,y0:e.clientY,t0:performance.now(),moved:0};if(e.button===1||this.space){this.mode={...n,k:"pan",x:e.clientX,y:e.clientY};return}let s=e.pointerType==="touch"&&performance.now()-this.penSeen<2e4,a=this.spot(i.hit);if(!(a&&!s&&!this.book.turn&&!this.written(a.level)&&this.drawDown(n,a,i,e))){if(a&&a.inside&&!s&&!this.book.turn&&this.written(a.level)){let o=this.toPoint(a,e),l=this.erasing(e);if(this.session.down(a.level,o,l)){this.mode={...n,k:"ink",page:a.n,level:a.level,erase:l,sent:0,box:[o.x,o.x,o.y,o.y],cell:this.cellOfSpot(a)},this.penAt(i.g,!0,l);return}}if(!s&&!this.book.turn&&this.paper(i.hit,a)){this.noteDown(n,a,i,e);return}this.mode={...n,k:"maybe",hit:i.hit,spot:a,x:e.clientX,y:e.clientY,g0:i.g}}}paper(e,t){if(!e)return!1;let i=this.mag.pages[e.page];if(!i||!this.mag.keys.has(i.key)||(e.d>0?e.x>.94:e.x<.06))return!1;if(i.kind!=="grid")return!0;let n=this.levelOf(i.level);if(n.stamps){for(let[o,l]of Pa(i,n))if(e.x>l.x&&e.x<l.x+n.stamps[o].rows[0].length*l.s&&e.y>l.y&&e.y<l.y+n.stamps[o].rows.length*l.s)return!1;return!t.inside}if(!t.inside)return!0;if(!n.cells||!this.written(n.id))return!1;let s=this.book.drawer.cellsOf(n.id),a=s.at(t.x,t.y);return a===null||!s.all.has(a)}noteDown(e,t,i,n){let s=this.erasing(n),a=i.hit.page;this.mode={...e,k:"note",e0:n.timeStamp,page:a,erase:s,spot:t,hit:i.hit,pts:[],rub:new Set,type:n.pointerType,sid:this.session.id++,sent:0,g0:i.g,x:n.clientX,y:n.clientY},this.notePoint(this.mode,i,n),this.penAt(i.g,!0,s)}notePoint(e,t,i){let n=(t.g.x+(e.page%2?Me:0))/Me,s=(t.g.z+We/2)/Me,a={x:Math.max(0,Math.min(1,n)),y:Math.max(0,Math.min(St,s)),w:i.pointerType==="pen"&&i.pressure?.6+i.pressure*.7:.9},o=e.pts[e.pts.length-1];if(!(o&&Math.hypot(a.x-o.x,a.y-o.y)<.0012)){if(e.erase&&o)for(let l of this.mag.notes.get(this.mag.pages[e.page].key)||[])this.rubs(l,o,a)&&e.rub.add(l[0]);e.pts.push(a)}}rubs(e,t,i){let n=1/Hi,s=[];for(let a=2;a<e.length;a+=2)s.push({x:e[a]*n,y:e[a+1]*n});return Ja(s,t,i)||s.some(a=>Math.hypot(a.x-i.x,a.y-i.y)<.012)}noteMove(e,t){let i=t.getCoalescedEvents?t.getCoalescedEvents():[],n=i.length?i:[t],s=null;for(let o of n)s=this.hitOf(o)||s,s&&this.notePoint(e,s,o);if(!s)return;(e.trail=e.trail||[]).push([t.timeStamp,t.clientX]),co(.5),this.penAt(s.g,!0,e.erase),this.inkDirty=!0;let a=performance.now();this.net&&!e.erase&&e.moved>5&&a-(e.sentAt||0)>uo&&(e.sentAt=a,this.streamNote(e,!1))}streamNote(e,t){for(;;){let i=e.pts.slice(e.sent,e.sent+60);e.sent+=i.length;let n=e.sent>=e.pts.length;if((i.length||t)&&this.net.ink({s:e.sid,page:e.page,p:i.flatMap(s=>[+s.x.toFixed(4),+s.y.toFixed(4)]),end:t&&n}),n)break}}noteUp(e,t){ds(),this.inkDirty=!0,this.sendEndHand();let i=this.mag.pages[e.page],n=t.timeStamp-e.e0,s=t.clientX-e.x0,a=t.clientY-e.y0,o=e.trail||[],l=o[o.length-1],h=l&&o.find(p=>l[0]-p[0]<130&&p!==l),c=h&&t.timeStamp-l[0]<80?Math.abs(l[1]-h[1])/Math.max(8,l[0]-h[0]):0;if(e.erase){e.rub.size&&(ir(),this.act({t:"rub",g:i.key,is:[...e.rub].slice(0,800)}));return}if(e.type==="touch"&&n<hv&&c>.35&&Math.abs(s)/n>.5&&Math.abs(s)>Math.max(60,innerWidth*.13)&&Math.abs(a)<Math.abs(s)*.4&&this.flick(e,s)){this.net&&this.net.ink({s:e.sid,page:e.page,p:[],end:!0});return}let u=(this.mag.notes.get(i.key)||[]).slice(-6).some(p=>{for(let f=2;f<p.length;f+=2)if(Math.hypot(p[f]/Hi-e.pts[0].x,p[f+1]/Hi-e.pts[0].y)<.045)return!0;return!1});if(e.moved<6&&n<kp&&!u){this.tap(e);return}this.net&&this.streamNote(e,!0);let d=[];for(let p of e.pts){let f=[Math.round(p.x*Hi),Math.round(p.y*Hi)],x=d[d.length-1];(!x||Math.hypot(f[0]-x[0],f[1]-x[1])>=7)&&d.push(f)}for(let p=0;p<d.length;p+=199){let f=d.slice(p,p+200);if(p&&f.length<2||(this.sentNote={page:e.page,pts:e.pts},!this.act({t:"note",g:i.key,c:this.profile.sleeve,p:f.flat()})))break}}flick(e,t){let i=t<0,n=this.view.single,s=n?this.view.goal.x<0?-1:1:e.hit.d;if(this.view.goal.zoom>1.25)return!1;if(n&&(i&&s<0&&this.view.open[1]||!i&&s>0&&this.view.open[0]))return this.view.home(-s),!0;let a=this.spread+(i?1:-1);return(i?s>0:s<0)&&this.canTurn(a)?(this.go(a),!0):!1}activeLevel(){if(!this.mag||this.where!=="table")return null;let e=this.pages().map(s=>this.mag.pages[s]).filter(s=>s.level),t=e.map(s=>s.level);if(this.sel&&t.includes(this.sel.level))return this.levelOf(this.sel.level);let i=this.view.single?this.pages().filter(s=>(s%2?-1:1)==(this.view.goal.x<0?-1:1)).map(s=>this.mag.pages[s].level).filter(Boolean):t,n=i.includes(this.touchedLevel)?this.touchedLevel:i[0];return n?this.levelOf(n):null}say(e){this.said=e,this.ui.clue()}unsay(){if(this.hints.size&&this.hintsIn&&this.mag){let e=this.hintsIn;this.remark(e,()=>{this.hints=new Set,this.hintsIn=null})}this.said!==null&&(this.said=null,this.ui.clue())}setTool(e,t){this.tools[e]=t,hs("cwords3d.tools",this.tools),this.tool="pencil",this.ui.tool("pencil"),this.ui.assist()}undo(e=!1){let t=this.activeLevel();t&&(this.session.forget(t.id),this.act({t:"undo",l:t.id,d:e?1:0}))}hint(e=!1){let t=this.activeLevel();if(!t)return;let i=this.sel&&this.sel.level===t.id?this.sel.k:this.hotLine&&this.hotLine.level===t.id?this.hotLine.k:null;this.session.forget(t.id),this.act({t:"hint",l:t.id,w:e?1:0,k:i})}toggle(e){let t=this.activeLevel();if(e==="small")this.small=!this.small;else if(e==="matching")this.matching=!this.matching,!this.matching&&t&&(this.book.drawer.same=null,this.book.redrawLevel(t.id));else if(t){let i=this.book.drawer.auto;i.delete(t.id)||i.add(t.id),this.book.redrawLevel(t.id),this.repaint(t.id,this.marked())}this.ui.assist()}next(e=!1){let t=this.activeLevel(),i=t&&this.written(t.id);if(!i||!ec(t))return;let n=Qh(t,i);if(!n.length){this.say(de("Nothing to suggest – is something wrong?"));return}let s=n.findIndex(h=>this.sel&&this.sel.level===t.id&&h.k===this.sel.k),a=e&&s>=0?n[s]:n[(s+1)%n.length];if(this.select(t.id,a.k),!e&&a.kind!=="branch")return;let o=new Set(a.us.flatMap(h=>h.ks));for(let h of a.signs||[])for(let c of h)o.add(c);o.delete(a.k),this.remark(t.id,()=>{this.hints=o,this.hintsIn=t.id});let l=a.kind==="branch"?"Nothing is forced: try one of its choices here.":t.type==="kakuro"?a.us.length>1?"Both sums together leave one digit.":"One digit is missing from this sum.":a.kind==="hidden"?{row:"Only here in this row.",column:"Only here in this column.",box:"Only here in this box."}[a.us[0].kind]:t.type==="futoshiki"?"Only one choice: row and column together.":"Only one choice: row, column and box together.";this.say(de(l)+(a.signs&&a.signs.length&&a.kind!=="branch"?` ${de("Follow the signs beside it, too.")}`:""))}under(e){let t=e&&this.spot(e),i=t&&t.inside?this.levelOf(t.level):null,n=i?this.cellOfSpot(t):null,s=i&&this.written(i.id),a=null;if(s&&(i.type==="sudoku"||i.type==="fiveli_sudoku")&&n!==null){let f=this.book.drawer.cellsOf(i.id).all.get(n);a=f&&(f[2]==="g"?f[3]:s.letters.get(n))||null}let o=this.sameDigit;if((o?`${o.level} ${o.v}`:"")!=(a?`${i.id} ${a}`:"")){let f=()=>{this.sameDigit=a?{level:i.id,v:a}:null};o&&this.mag.byId.has(o.level)?this.remark(o.level,f):f(),a&&this.repaint(i.id,new Set(this.marks(i.id).keys()))}let l=this.book.drawer,h=i&&i.type==="nonogram"&&n!==null?{level:i.id,r:je(n),c:Ue(n),k:n}:null,c=l.hotLine,u=performance.now();if((c?`${c.level} ${c.k}`:"")!=(h?`${h.level} ${h.k}`:"")&&u-(this.hotAt||0)>70){this.hotAt=u,l.hotLine=this.hotLine=h;for(let f of new Set([c,h].filter(Boolean).map(x=>x.level)))this.book.redrawLevel(f)}let d=this.matching&&i&&i.type==="surplus_words"&&n!==null&&!this.mag.progress.get(i.id).solved?(l.cellsOf(i.id).all.get(n)||[])[3]:null,p=l.same;if((p?`${p.level} ${p.t}`:"")!=(d?`${i.id} ${d}`:"")){l.same=d?{level:i.id,t:d}:null;for(let f of new Set([...p?[p.level]:[],...d?[i.id]:[]]))this.book.redrawLevel(f)}}drawDown(e,t,i,n){let s=this.levelOf(t.level),a=this.mag.progress.get(t.level),o=this.mag.pages[t.n];if(a.solved)return!1;if(s.stamps){let h=null;if(t.inside){let c=a.slotAt(t.y,t.x);c>=0&&a.on.has(c)&&!a.given.has(a.on.get(c))&&(h=a.on.get(c))}else for(let[c,u]of Pa(o,s))a.where(c)===null&&i.hit.x>=u.x&&i.hit.x<u.x+s.stamps[c].rows[0].length*u.s&&i.hit.y>=u.y&&i.hit.y<u.y+s.stamps[c].rows.length*u.s&&(h=c);return h===null?!1:(this.mode={...e,k:"carry",page:t.n,level:t.level,piece:h},this.lift(s,h,o),this.carryTo(i.g),!0)}if(!t.inside)return!1;let l=up(a,this.book.drawer.cellsOf(t.level),this.erasing(n),this.tools);return!l||!l.down({x:t.x,y:t.y})?!1:(this.touchedLevel=t.level,this.ui.assist(),this.mode={...e,k:"draw",page:t.n,level:t.level,g:l,erase:l.erase},this.penAt(i.g,!0,l.erase),!0)}drawMove(e,t){let i=t.getCoalescedEvents?t.getCoalescedEvents():[],n=i.length?i:[t],s=this.mag.pages[e.page],a=this.levelOf(e.level),o=null;for(let l of n)if(o=this.hitOf(l),o){let h=La(s,a,(o.g.x+(e.page%2?Me:0))/Me,(o.g.z+We/2)/Me);e.moved>5&&e.g.move({x:h.x,y:h.y})}if(o&&(co(.35),this.penAt(o.g,!0,e.erase),this.inkDirty=!0,e.g.measure&&e.moved>5)){let l=e.g.measure();this.say(l.area?de("{w} × {h} cells",{w:l.area[0],h:l.area[1]}):de(l.across?"Length {n} · ends {a} from the left · begins {b} from the right":"Length {n} · ends {a} from the top · begins {b} from the bottom",{n:l.size,a:l.end,b:l.start}))}}drawUp(e){ds(),this.inkDirty=!0,this.sendEndHand(),this.unsay();let t=e.moved>5?e.g.up():e.g.tap();e.erase&&t.length&&ir();for(let i of t)i.length&&this.act({t:"do",l:e.level,o:i})}lift(e,t,i){let n=e.stamps[t],s=di(i,e),a=n.rows[0].length,o=n.rows.length,l=document.createElement("canvas");l.width=a*96,l.height=o*96;let h=l.getContext("2d",{willReadFrequently:!0});this.book.drawer.piece(h,n,0,0,96);let c=new Pt(l);c.colorSpace=at;let u=new kt(a*s.u*Me,o*s.u*Me);u.rotateX(-Math.PI/2);let d=new Ne(u,new dt({map:c,roughness:.85,side:un}));d.castShadow=!0,this.view.scene.add(d),this.held={mesh:d,level:e.id,size:[a*s.u*Me,o*s.u*Me]},this.book.drawer.lifted=`${e.id} ${t}`,this.book.redrawLevel(e.id)}carryTo(e){let t=this.held;if(!t)return;let i=new b(e.x,this.book.height(e.x<0?-1:1)+.014,e.z);t.mesh.position.copy(i),this.me.leaf(i.clone().add(new b(t.size[0]/2*this.me.ws*.6,.002,t.size[1]*.42)),this.me.ws),this.restAt=0,this.streamHand({k:"pen",x:e.x/Me,y:(e.z+We/2)/We})}drop(){let e=this.held;e&&(this.held=null,this.view.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.map.dispose(),e.mesh.material.dispose(),this.me.letLeaf(),this.book&&(this.book.drawer.lifted=null,this.book.redrawLevel(e.level)))}carryUp(e,t){let i=this.hitOf(t),n=this.levelOf(e.level),s=this.mag.progress.get(e.level),a=i&&this.spot(i.hit);this.drop(),this.handOff();let o=a&&a.level===e.level&&a.inside?s.slotAt(a.y,a.x):-1;o>=0?this.act({t:"do",l:n.id,o:[e.piece,o]})&&ir():s.where(e.piece)!==null&&this.act({t:"do",l:n.id,o:[e.piece,ss]})}pinchState(e){return{d:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),cx:(e[0].x+e[1].x)/2,cy:(e[0].y+e[1].y)/2}}moved(e){let t=this.pointers.get(e.pointerId);t&&(t.x=e.clientX,t.y=e.clientY);let i=this.mode;if(i&&i.k==="pinch"){let n=[...this.pointers.values()].filter(a=>a.type==="touch");if(n.length<2)return;let s=this.pinchState(n);this.view.pan(s.cx-i.cx,s.cy-i.cy),this.view.zoomAt(s.d/Math.max(1,i.d),s.cx,s.cy),Object.assign(i,s);return}if(!i){this.where==="shelf"?(this.shelf.hot=this.shelf.pick(this.view.ray(e.clientX,e.clientY)),this.view.canvas.style.cursor=this.shelf.hot?"pointer":""):e.pointerType!=="touch"&&this.book&&this.hovering(e);return}if(i.id===e.pointerId){if(i.moved=Math.max(i.moved,Math.hypot(e.clientX-i.x0,e.clientY-i.y0)),i.k==="draw"){this.drawMove(i,e);return}if(i.k==="note"){this.noteMove(i,e);return}if(i.k==="carry"){let n=this.hitOf(e);n&&this.carryTo(n.g);return}if(i.k!=="shelf"){if(i.k==="pan"){this.view.pan(e.clientX-i.x,e.clientY-i.y),i.x=e.clientX,i.y=e.clientY;return}if(i.k==="ink"){this.inkMove(i,e);return}if(i.k==="maybe")if(i.moved>7)this.decide(i,e);else return;this.mode.k==="turn"&&this.turnMove(e)}}}hovering(e){let t=this.hitOf(e);this.hover=t&&t.hit,this.view.canvas.classList.toggle("away",!this.hover),this.hover&&!this.book.turn?this.penAt(t.g,!1):this.handOff(),this.book.turn||this.under(this.hover)}decide(e,t){let i=t.clientX-e.x0,n=t.clientY-e.y0,s=e.hit,a=this.view.goal.zoom>1.25;if((s&&(s.d>0?s.x>.9:s.x<.1)||!a&&Math.abs(i)>Math.abs(n)*1.1)&&i!==0){let l=i<0,h=this.view.single,c=h?this.view.goal.x<0?-1:1:s?s.d:e.g0.x<0?-1:1;if(h&&(l&&c<0&&this.view.open[1]||!l&&c>0&&this.view.open[0])){this.view.home(-c),this.mode={...e,k:"done"};return}let u=this.spread+(l?1:-1);if((l?c>0:c<0)&&this.canTurn(u)){this.select(null);let d=Math.max(-1,Math.min(1,e.g0.x/Me));this.book.begin(this.spread,u,Math.max(0,Math.min(1,(e.g0.z+We/2)/We))),this.book.turn.mine=!0,this.mode={...e,k:"turn",fwd:l,start:d,lastX:t.clientX,lastT:t.timeStamp,v:0};return}if(!a){this.mode={...e,k:"done"};return}}this.mode={...e,k:"pan",x:t.clientX,y:t.clientY}}turnMove(e){let t=this.mode,i=this.view.ground(e.clientX,e.clientY,.03);if(!i||!this.book.turn)return;let n=Math.max(1,e.timeStamp-t.lastT);t.v=t.v*.6+(e.clientX-t.lastX)/n*.4,t.lastX=e.clientX,t.lastT=e.timeStamp;let s=t.fwd?1:-1,a=s+(i.x/Me-t.start)*2/Math.max(.75,Math.abs(t.start- -s));this.book.hold(a,(i.z+We/2)/We),this.streamTurn()}inkMove(e,t){let i=t.getCoalescedEvents?t.getCoalescedEvents():[],n=i.length?i:[t],s=null;for(let l of n){s=this.hitOf(l);let h=this.mag.pages[e.page];if(!s)continue;let c={x:(s.g.x+(e.page%2?Me:0))/Me,y:(s.g.z+We/2)/Me},u=La(h,this.levelOf(e.level),c.x,c.y);this.session.move(this.toPoint(u,l.timeStamp?l:t)),e.box=[Math.min(e.box[0],u.x),Math.max(e.box[1],u.x),Math.min(e.box[2],u.y),Math.max(e.box[3],u.y)]}if(!s)return;let a=performance.now(),o=e.lastG?Math.hypot(s.g.x-e.lastG.x,s.g.z-e.lastG.z)/Math.max(1,a-e.lastAt):0;e.lastG=s.g,e.lastAt=a,co(o*12e3/1e3),this.penAt(s.g,!0,e.erase),this.net&&!e.erase&&a-(e.sentAt||0)>uo&&this.sendInk(e,!1)}sendInk(e,t){let i=this.session.live,n=i?i.points:e.pts;if(!this.net||!n)return;e.sentAt=performance.now();let s=this.mag.pages[e.page],a=di(s,this.levelOf(e.level)),o=i?i.id:e.sid;for(;;){let l=n.slice(e.sent,e.sent+60);e.sent+=l.length;let h=e.sent>=n.length;if((l.length||t&&h)&&this.net.ink({s:o,page:e.page,p:l.flatMap(c=>[+(a.x0+(c.x-s.c0)*a.u).toFixed(4),+(a.y0+c.y*a.u).toFixed(4)]),end:t&&h}),h)break}}up(e,t=!1){this.pointers.delete(e.pointerId);let i=this.mode;if(i){if(i.k==="pinch"){[...this.pointers.values()].filter(n=>n.type==="touch").length<2&&(this.mode=this.pointers.size?{k:"done"}:null);return}if(!(i.id!==void 0&&i.id!==e.pointerId)){if(i.k==="done"){this.pointers.size||(this.mode=null);return}if(this.mode=null,t){this.mode=i,this.stopMode(!0);return}if(i.k==="shelf"){let n=this.shelf.pick(this.view.ray(e.clientX,e.clientY));e.pointerType==="touch"&&(this.shelf.hot=null),n&&n===i.book&&i.moved<12&&(this.view.canvas.style.cursor="",this.choose(n.e.id));return}this.book&&(i.k==="draw"?this.drawUp(i):i.k==="note"?this.noteUp(i,e):i.k==="carry"?this.carryUp(i,e):i.k==="ink"?this.inkUp(i,e):i.k==="turn"?this.turnUp(i):i.k==="maybe"&&this.tap(i),e.pointerType==="touch"&&this.handOff())}}}inkUp(e,t){ds();let i=this.session.live,n=Math.max(e.box[1]-e.box[0],e.box[3]-e.box[2])<.1,s=performance.now()-e.t0<kp;if(i&&!e.erase&&n&&s&&!this.nearInk(e)){this.session.cancel(),e.cell!==null&&this.select(e.level,e.cell),this.sendEndHand();return}i&&(e.pts=i.points,e.sid=i.id),this.touchedLevel=e.level,this.session.up(),e.erase||this.sendInk(e,!0),this.sendEndHand(),this.sel&&e.level&&this.select(null),e.cell!==null&&!e.erase&&this.ui.clue({level:e.level,k:e.cell})}sendEndHand(){this.net&&this.me.tip&&this.net.hand({k:"pen",x:this.me.tip.x/Me,y:(this.me.tip.z+We/2)/We})}nearInk(e){let t=(e.box[0]+e.box[1])/2,i=(e.box[2]+e.box[3])/2;for(let n of this.session.open(e.level).values())if(t>n.x0-.45&&t<n.x1+.45&&i>n.y0-.6&&i<n.y1+.6)return!0;return!1}turnUp(e){let t=this.book.turn;if(!t)return;let i=(e.fwd?-1:1)*e.v,n=e.fwd?t.f:1-t.f;this.finish(i>.35||n>.45&&i>-.35),!t.dest&&this.net&&this.net.hand({k:"rest"}),this.me.letLeaf()}tap(e){let t=e.hit;if(!t){this.select(null);return}if(e.spot&&e.spot.inside&&this.written(e.spot.level)){let n=this.cellOfSpot(e.spot),s=this.mag.grids.get(e.spot.level);if(n===null){this.select(null);return}if(s.isAnswerCell(n))this.select(e.spot.level,n);else{let a=s.answers.filter(o=>o.clue&&be(o.clue.r,o.clue.c)===n);if(a.length){let o=a.length>1&&e.spot.y%1>=.5?a.find(l=>l.part==="l"):a[0];this.select(e.spot.level,o.cells[0],o.d)}}return}let i=this.mag.pages[t.page];if(i.kind==="contents"){let n=this.book.drawer.contentsAt(t.x,t.y);if(n){this.go(Math.ceil(this.mag.pageOf(n.id)/2));return}}if(t.d>0?t.x>.94:t.x<.06){this.go(this.spread+t.d);return}i.kind==="cover"||i.kind==="back"?this.go(this.spread+t.d):this.select(null)}stopMode(e){let t=this.mode;if(this.mode=null,ds(),!(!t||!e)){if(t.k==="ink"){let i=this.session.live&&this.session.live.id;this.session.cancel(),this.net&&i&&this.net.ink({s:i,page:t.page,p:[],end:!0}),this.sendEndHand()}t.k==="note"&&(this.inkDirty=!0,this.sendEndHand(),this.net&&!t.erase&&this.net.ink({s:t.sid,page:t.page,p:[],end:!0})),t.k==="draw"&&(this.inkDirty=!0,this.sendEndHand()),t.k==="carry"&&this.drop(),t.k==="turn"&&(this.finish(!1),this.me.letLeaf(),this.net&&this.net.hand({k:"rest"}))}}penAt(e,t,i=!1){let n=e.x<0?-1:1,s=new b(e.x,this.book.height(n)+6e-4,e.z);i?this.me.erase(s):this.me.pen(s,t),this.restAt=0,this.streamHand({k:i?"erase":t?"write":"pen",x:e.x/Me,y:(e.z+We/2)/We})}handOff(){this.restAt||(this.restAt=performance.now()+700)}streamHand(e){if(!this.net)return;let t=performance.now();t-(this.handAt||0)<uo||(this.handAt=t,this.net.hand({k:e.k,x:+Math.max(-1.5,Math.min(1.5,e.x)).toFixed(4),y:+Math.max(-.5,Math.min(1.5,e.y)).toFixed(4)}))}streamTurn(){let e=this.book.turn;if(!this.net||!e)return;let t=performance.now();t-(this.handAt||0)<uo||(this.handAt=t,this.net.hand({k:"turn",d:e.fwd?1:-1,f:+Math.min(1,Math.max(0,e.f)).toFixed(3),y:+e.y.toFixed(3)}))}remoteHand(e,t){let i=this.others.get(e);if(!i||!this.book)return;i.seen=performance.now();let n=this.book.turn;if(t.k==="turn"){if(!n){let l=this.spread+t.d;!this.mode&&this.canTurn(l)&&(this.book.begin(this.spread,l,t.y),this.book.turn.by=e)}let o=this.book.turn;o&&o.by===e&&o.goal==null&&(o.target=t.f,o.y=t.y);return}if(n&&n.by===e&&n.goal==null&&(this.book.release(n.fwd?0:1,()=>this.settled(0)),i.letLeaf()),t.k==="rest"){i.rest();return}let s=t.x<0?-1:1,a=new b(t.x*Me,this.book.height(s)+6e-4,t.y*We-We/2);t.k==="erase"?i.erase(a):i.pen(a,t.k==="write")}remoteInk(e,t){if(!this.book)return;let i=`${e}:${t.s}`,n=this.remote.get(i);if(!n){if(this.remote.size>200)return;n={id:e,page:t.page,pts:[],at:0},this.remote.set(i,n)}for(let o=0;o<t.p.length&&n.pts.length<3e3;o+=2)n.pts.push({x:t.p[o],y:t.p[o+1]});n.at=performance.now(),t.end&&(n.end=!0,t.p.length||this.remote.delete(i)),this.inkDirty=!0;let s=n.pts[n.pts.length-1],a=this.others.get(e);s&&a&&!t.end&&a.pen(this.book.world(n.page,s.x,s.y,6e-4),!0)}dropRemoteInk(e,t,i){for(let[n,s]of this.remote){if(s.id!==e||!s.pts.length)continue;let a=this.mag.pages[s.page];if(a.level!==t||a.kind!=="grid")continue;let o=di(a,this.levelOf(t)),l=p=>(Math.min(...s.pts.map(f=>f[p]))+Math.max(...s.pts.map(f=>f[p])))/2,h=a.c0+(l("x")-o.x0)/o.u,c=(l("y")-o.y0)/o.u,[u,d]=this.book.drawer.cellsOf(t).center(i);Math.abs(h-u)<.95&&Math.abs(c-d)<.95&&this.remote.delete(n)}this.inkDirty=!0}async host(e){this.leave();let t=new ro(this);this.net=t;try{await t.open(e),this.people()}catch(i){throw t.close(),this.net=null,this.people(),i}}async join(e,t){this.leave();let i=new ao(this,e,t);try{await i.join()}catch(n){throw i.close(),n}this.net=i,this.people()}leave(){if(!this.net)return;let e=this.net;this.net=null,e.close(),this.back(e)}left(e){let t=this.net;this.net=null,this.back(t),this.ui.left(e)}back(e){this.remote.clear(),this.people(),e&&!e.isHost?this.toShelf(!0):this.book&&this.book.redrawAll()}people(){let e=this.net?this.net.members.filter(i=>i.id!==this.myId):[],t=new Set;e.forEach((i,n)=>{t.add(i.id);let s=JSON.stringify([i.profile,n]),a=this.others.get(i.id);a&&a.sig!==s&&(a.dispose(),a=null),a||(a=new Qs(this.view.scene,i.profile,Cc[n%Cc.length],{name:i.profile.name}),a.sig=s,this.others.set(i.id,a)),a.away=i.away});for(let[i,n]of this.others)if(!t.has(i)){n.dispose(),this.others.delete(i);let s=this.book&&this.book.turn;s&&s.by===i&&s.goal==null&&this.book.release(s.fwd?0:1,()=>this.settled(0))}this.book&&this.ui&&(this.book.redrawAll(),this.sel&&this.repaint(this.sel.level,this.marked())),this.ui&&this.ui.refresh()}note(e,t){let i={joined:"{n} joined",left:"{n} left",lost:"{n} lost the connection",back:"{n} is back",kicked:"{n} was sent out",banned:"{n} was sent out"}[e];i&&this.ui.toast(de(i,{n:t}))}setProfile(e){this.profile=pi(e),hs("cwords3d.profile",this.profile),this.me=this.makeMe(),this.me.hide(this.where==="shelf"),this.net&&this.net.profile(this.profile),this.people()}setPrefs(e){Object.assign(this.prefs,e),hs("cwords3d.prefs",this.prefs),Oc(this.prefs.sound),this.me.faint=Number(this.prefs.hands)}fromLink(){let e=new URLSearchParams(location.search),t=(e.get("room")||"").toUpperCase();if(!/^[A-Z]{4}$/.test(t))return;let i=new URLSearchParams(location.hash.slice(1)).get("pass")||"";history.replaceState(null,"",location.pathname),this.ui.tryJoin(t,i)}drawInk(){if(this.inkDirty=!1,!this.book){this.inkView.keep(new Set);return}let e=new Set,t=(s,a,o,l,h)=>{let c=o[0].x,u=this.mag.pages.findIndex(f=>f.kind==="grid"&&f.level===a&&(!f.wide||c>=f.c0-.5&&c<f.c1+.5));if(u<0)return;let d=this.mag.pages[u],p=di(d,this.levelOf(a));e.add(s),this.inkView.stroke(s,u,o.map(f=>({x:p.x0+(f.x-d.c0)*p.u,y:p.y0+f.y*p.u,w:f.w})),l,h?.5:1)},i=Ei[this.profile.sleeve%Ei.length],n=this.session;n.live&&!n.live.erase&&t(`m${n.live.id}`,n.live.level,n.live.points,i);for(let s of n.inks.values())for(let a of s.strokes)t(`m${a.id}`,s.level,a.points,i,n.busy===s||s.sent);this.mode&&this.mode.k==="draw"&&this.mode.g.ghost.forEach((s,a)=>{this.inkView.remove(`g${a}`),t(`g${a}`,this.mode.level,s.map(o=>({...o,w:2.2})),i)}),this.mode&&this.mode.k==="note"&&!this.mode.erase&&this.mode.pts.length?(e.add(`n${this.mode.sid}`),this.inkView.stroke(`n${this.mode.sid}`,this.mode.page,this.mode.pts,i)):this.sentNote&&(e.add("sent"),this.inkView.remove("sent"),this.inkView.stroke("sent",this.sentNote.page,this.sentNote.pts,i));for(let[s,a]of this.remote)a.pts.length&&(e.add(`r${s}`),this.inkView.stroke(`r${s}`,a.page,a.pts,Ei[this.colorIndex(a.id)%Ei.length]));this.inkView.keep(e)}frame(e){let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let i=performance.now();for(let[s,a]of this.remote)i-a.at>lv&&(this.remote.delete(s),this.inkDirty=!0);this.shelf.update(t),this.shelf.group.visible=this.view.way>0||!!this.shelf.pull;let n=this.book?this.book.turn:null;if(this.book){this.book.update(t);let s=this.book.turn;if(s){let a=this.book.grip(),o=s.fwd?1:-1;s.mine?this.me.leaf(a,o):this.others.has(s.by)&&this.others.get(s.by).leaf(a,o),s.mine&&s.drag&&this.streamTurn()}else this.held||this.me.letLeaf();n||this.mode||this.session.live||!this.book.group.visible?this.warmAt=i+350:i>(this.warmAt||0)&&(this.warmAt=i+(this.book.warm(this.view.renderer)?130:1500))}this.restAt&&i>this.restAt&&(this.restAt=0,this.me.rest(),this.net&&this.net.hand({k:"rest"}));for(let s of this.others.values())n||s.letLeaf(),s.hide(this.where==="shelf"),s.update(t);this.view.place(t),this.me.update(t,this.view.cam.zoom),this.inkDirty&&this.drawInk(),i>(this.assistAt||0)&&(this.assistAt=i+400,this.ui.assist()),this.inkView.show(this.book?this.pages():[],!n&&!!this.book&&this.book.group.visible),this.view.render()}};window.cw=new Fc;
