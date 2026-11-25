/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var fu=2;var vd=0,_d=1,wr=2;var ji=100,yd=101,xd=102;var Md=200,bd=201,Sd=202,wd=203,To=204,Ao=205,Ed=206,Td=207,Ad=208,Rd=209,Cd=210,Id=211,Pd=212,Ld=213,Ud=214,Dd=0,Nd=1,Od=2,kd=3,Fd=4,Bd=5,zd=6,Hd=7;var mu=0;var tc="attached",Vd="detached",gu=300,In=301,Pn=302,Ro=303,Co=304,Js=306,cr=1e3,ur=1001,Io=1002,Gt=1003,Gd=1004;var kr=1005;var fi=1006,Ha=1007;var Tn=1008;var Ri=1009,vu=1010,_u=1011,dr=1012,rh=1013,Zi=1014,$t=1015,Er=1016,sh=1017,ah=1018,Ln=1020,yu=35902,xu=1021,Mu=1022,Vt=1023,bu=1024,Su=1025,pr=1026,Un=1027,wu=1028,oh=1029,Eu=1030,lh=1031;var hh=1033,ms=33776,gs=33777,vs=33778,_s=33779,Po=35840,Lo=35841,Uo=35842,Do=35843,No=36196,Oo=37492,ko=37496,Fo=37808,Bo=37809,zo=37810,Ho=37811,Vo=37812,Go=37813,Wo=37814,Xo=37815,jo=37816,qo=37817,Yo=37818,Zo=37819,Jo=37820,Ko=37821,ys=36492,$o=36494,Qo=36495,Tu=36283,el=36284,tl=36285,il=36286;var Ms=2300,nl=2301,Va=2302,ic=2400,nc=2401,rc=2402;var En="",dt="srgb",Hn="srgb-linear",Ks="linear",Ge="srgb";var ln=7680;var Wd=512,Xd=513,jd=514,qd=515,Yd=516,Zd=517,Jd=518,Kd=519,rl=35044,Vn=35048;var sc="300 es",Dn=2e3,bs=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xs=Math.PI/180,sl=180/Math.PI;function Qt(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(gt[255&r]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&t|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[255&i]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function $d(r,e){return(r%e+e)%e}function Ga(r,e,t){return(1-t)*r+t*e}function Kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function We(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class r{constructor(e,t,i,n,s,a,o,l,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,h)}set(e,t,i,n,s,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],m=i[8],y=n[0],f=n[3],g=n[6],_=n[1],v=n[4],x=n[7],A=n[2],E=n[5],I=n[8];return s[0]=a*y+o*_+l*A,s[3]=a*f+o*v+l*E,s[6]=a*g+o*x+l*I,s[1]=h*y+c*_+u*A,s[4]=h*f+c*v+u*E,s[7]=h*g+c*x+u*I,s[2]=d*y+p*_+m*A,s[5]=d*f+p*v+m*E,s[8]=d*g+p*x+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+n*s*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*s,p=h*s-a*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(n*h-c*i)*y,e[2]=(o*i-n*a)*y,e[3]=d*y,e[4]=(c*t-n*l)*y,e[5]=(n*s-o*t)*y,e[6]=p*y,e[7]=(i*l-h*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Re;function Au(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ss(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qd(){let r=Ss("canvas");return r.style.display="block",r}var ac={};function ar(r){r in ac||(ac[r]=!0,console.warn(r))}var ze={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Ge&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ge&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===En?Ks:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function mi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Rn(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var oc=[.64,.33,.3,.6,.15,.06],lc=[.2126,.7152,.0722],hc=[.3127,.329],cc=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),hn;ze.define({[Hn]:{primaries:oc,whitePoint:hc,transfer:Ks,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:lc,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:oc,whitePoint:hc,transfer:Ge,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:lc,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}});var al=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hn===void 0&&(hn=Ss("canvas")),hn.width=e.width,hn.height=e.height;let i=hn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*mi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*mi(t[i]/255)):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ep=0,ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xa(n[a].image)):s.push(Xa(n[a]))}else s=Xa(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?al.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,wt=class r extends Ci{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,h=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Qt(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null,wt.DEFAULT_MAPPING=gu,wt.DEFAULT_ANISOTROPY=1;var Ke=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],m=l[9],y=l[2],f=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+f)<.1&&Math.abs(h+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,x=(p+1)/2,A=(g+1)/2,E=(c+d)/4,I=(u+y)/4,D=(m+f)/4;return v>x&&v>A?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=I/i):x>A?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=E/n,s=D/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=I/s,n=D/s),this.set(i,n,s,t),this}let _=Math.sqrt((f-m)*(f-m)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(f-m)/_,this.y=(u-y)/_,this.z=(d-c)/_,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends Ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new wt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Es=class extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],m=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=y);if(u!==y||l!==d||h!==p||c!==m){let f=1-o,g=l*d+h*p+c*m+u*y,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let A=Math.sqrt(v),E=Math.atan2(A,g*_);f=Math.sin(f*E)/A,o=Math.sin(o*E)/A}let x=o*_;if(l=l*f+d*x,h=h*f+p*x,c=c*f+m*x,u=u*f+y*x,f===1-o){let A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+c*u+l*p-h*d,e[t+1]=l*m+c*d+h*u-o*p,e[t+2]=h*m+c*p+o*d-l*u,e[t+3]=c*m-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"YZX":this._x=d*c*u+h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u-d*p*m;break;case"XZY":this._x=d*c*u-h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-s*l,this._y=n*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-s*u,this.z=n+l*u+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new w,dc=new Pt,Xt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(s,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),Br.subVectors(this.max,Kn),cn.subVectors(e.a,Kn),un.subVectors(e.b,Kn),dn.subVectors(e.c,Kn),Mi.subVectors(un,cn),bi.subVectors(dn,un),Bi.subVectors(cn,dn);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Bi.z,Bi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Bi.z,0,-Bi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Bi.y,Bi.x,0];return!!qa(t,cn,un,dn,Br)&&(t=[1,0,0,0,1,0,0,0,1],!!qa(t,cn,un,dn,Br)&&(zr.crossVectors(Mi,bi),t=[zr.x,zr.y,zr.z],qa(t,cn,un,dn,Br)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Bt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new w,new w,new w,new w,new w,new w,new w,new w],Bt=new w,Fr=new Xt,cn=new w,un=new w,dn=new w,Mi=new w,bi=new w,Bi=new w,Kn=new w,Br=new w,zr=new w,zi=new w;function qa(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){zi.fromArray(r,s);let o=n.x*Math.abs(zi.x)+n.y*Math.abs(zi.y)+n.z*Math.abs(zi.z),l=e.dot(zi),h=t.dot(zi),c=i.dot(zi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var ip=new Xt,$n=new w,Ya=new w,jt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ip.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);let t=$n.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector($n,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(Ya)),this.expandByPoint($n.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new w,Za=new w,Hr=new w,Si=new w,Ja=new w,Vr=new w,Ka=new w,Ji=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Za.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Za);let s=.5*e.distanceTo(t),a=-this.direction.dot(Hr),o=Si.dot(this.direction),l=-Si.dot(Hr),h=Si.lengthSq(),c=Math.abs(1-a*a),u,d,p,m;if(c>0)if(u=a*l-o,d=a*o-l,m=s*c,u>=0)if(d>=-m)if(d<=m){let y=1/c;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+h):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Za).addScaledVector(Hr,d),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),n=li.dot(li)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,n,s){Ja.subVectors(t,e),Vr.subVectors(i,e),Ka.crossVectors(Ja,Vr);let a,o=this.direction.dot(Ka);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(Si,Vr));if(l<0)return null;let h=a*this.direction.dot(Ja.cross(Si));if(h<0||l+h>o)return null;let c=-a*Si.dot(Ka);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class r{constructor(e,t,i,n,s,a,o,l,h,c,u,d,p,m,y,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,h,c,u,d,p,m,y,f)}set(e,t,i,n,s,a,o,l,h,c,u,d,p,m,y,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=c,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=y,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/pn.setFromMatrixColumn(e,0).length(),s=1/pn.setFromMatrixColumn(e,1).length(),a=1/pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*c,p=a*u,m=o*c,y=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+m*h,t[5]=d-y*h,t[9]=-o*l,t[2]=y-d*h,t[6]=m+p*h,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,m=h*c,y=h*u;t[0]=d+y*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-m,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,m=h*c,y=h*u;t[0]=d-y*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*c,t[9]=y-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,p=a*u,m=o*c,y=o*u;t[0]=l*c,t[4]=m*h-p,t[8]=d*h+y,t[1]=l*u,t[5]=y*h+d,t[9]=p*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*h,m=o*l,y=o*h;t[0]=l*c,t[4]=y-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+m,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*h,m=o*l,y=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+y,t[5]=a*c,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*c,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,rp)}lookAt(e,t,i){let n=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),wi.crossVectors(i,Tt),wi.lengthSq()===0&&(Math.abs(i.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),wi.crossVectors(i,Tt)),wi.normalize(),Gr.crossVectors(Tt,wi),n[0]=wi.x,n[4]=Gr.x,n[8]=Tt.x,n[1]=wi.y,n[5]=Gr.y,n[9]=Tt.y,n[2]=wi.z,n[6]=Gr.z,n[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],m=i[2],y=i[6],f=i[10],g=i[14],_=i[3],v=i[7],x=i[11],A=i[15],E=n[0],I=n[4],D=n[8],N=n[12],B=n[1],G=n[5],z=n[9],X=n[13],V=n[2],q=n[6],J=n[10],ne=n[14],ie=n[3],me=n[7],ye=n[11],ee=n[15];return s[0]=a*E+o*B+l*V+h*ie,s[4]=a*I+o*G+l*q+h*me,s[8]=a*D+o*z+l*J+h*ye,s[12]=a*N+o*X+l*ne+h*ee,s[1]=c*E+u*B+d*V+p*ie,s[5]=c*I+u*G+d*q+p*me,s[9]=c*D+u*z+d*J+p*ye,s[13]=c*N+u*X+d*ne+p*ee,s[2]=m*E+y*B+f*V+g*ie,s[6]=m*I+y*G+f*q+g*me,s[10]=m*D+y*z+f*J+g*ye,s[14]=m*N+y*X+f*ne+g*ee,s[3]=_*E+v*B+x*V+A*ie,s[7]=_*I+v*G+x*q+A*me,s[11]=_*D+v*z+x*J+A*ye,s[15]=_*N+v*X+x*ne+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*h*u-s*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+s*a*d-n*a*p+n*h*c-s*l*c)+e[11]*(+t*h*u-t*o*p-s*a*u+i*a*p+s*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],y=e[13],f=e[14],g=e[15],_=u*f*h-y*d*h+y*l*p-o*f*p-u*l*g+o*d*g,v=m*d*h-c*f*h-m*l*p+a*f*p+c*l*g-a*d*g,x=c*y*h-m*u*h+m*o*p-a*y*p-c*o*g+a*u*g,A=m*u*l-c*y*l-m*o*d+a*y*d+c*o*f-a*u*f,E=t*_+i*v+n*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=_*I,e[1]=(y*d*s-u*f*s-y*n*p+i*f*p+u*n*g-i*d*g)*I,e[2]=(o*f*s-y*l*s+y*n*h-i*f*h-o*n*g+i*l*g)*I,e[3]=(u*l*s-o*d*s-u*n*h+i*d*h+o*n*p-i*l*p)*I,e[4]=v*I,e[5]=(c*f*s-m*d*s+m*n*p-t*f*p-c*n*g+t*d*g)*I,e[6]=(m*l*s-a*f*s-m*n*h+t*f*h+a*n*g-t*l*g)*I,e[7]=(a*d*s-c*l*s+c*n*h-t*d*h-a*n*p+t*l*p)*I,e[8]=x*I,e[9]=(m*u*s-c*y*s-m*i*p+t*y*p+c*i*g-t*u*g)*I,e[10]=(a*y*s-m*o*s+m*i*h-t*y*h-a*i*g+t*o*g)*I,e[11]=(c*o*s-a*u*s-c*i*h+t*u*h+a*i*p-t*o*p)*I,e[12]=A*I,e[13]=(c*y*n-m*u*n+m*i*d-t*y*d-c*i*f+t*u*f)*I,e[14]=(m*o*n-a*y*n-m*i*l+t*y*l+a*i*f-t*o*f)*I,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*I,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,u=o+o,d=s*h,p=s*c,m=s*u,y=a*c,f=a*u,g=o*u,_=l*h,v=l*c,x=l*u,A=i.x,E=i.y,I=i.z;return n[0]=(1-(y+g))*A,n[1]=(p+x)*A,n[2]=(m-v)*A,n[3]=0,n[4]=(p-x)*E,n[5]=(1-(d+g))*E,n[6]=(f+_)*E,n[7]=0,n[8]=(m+v)*I,n[9]=(f-_)*I,n[10]=(1-(d+y))*I,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=pn.set(n[0],n[1],n[2]).length(),a=pn.set(n[4],n[5],n[6]).length(),o=pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],zt.copy(this);let l=1/s,h=1/a,c=1/o;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=c,zt.elements[9]*=c,zt.elements[10]*=c,t.setFromRotationMatrix(zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,h=2*s/(t-e),c=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,m;if(o===Dn)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==bs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),u=1/(a-s),d=(t+e)*h,p=(i+n)*c,m,y;if(o===Dn)m=(a+s)*u,y=-2*u;else{if(o!==bs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,y=-1*u}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pn=new w,zt=new Me,np=new w(0,0,0),rp=new w(1,1,1),wi=new w,Gr=new w,Tt=new w,pc=new Me,fc=new Pt,Lt=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Lt.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},sp=0,mc=new w,fn=new Pt,hi=new Me,Wr=new w,Qn=new w,ap=new w,op=new Pt,gc=new w(1,0,0),vc=new w(0,1,0),_c=new w(0,0,1),yc={type:"added"},lp={type:"removed"},mn={type:"childadded",child:null},$a={type:"childremoved",child:null},mt=class r extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new w,t=new Lt,i=new Pt,n=new w(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Me},normalMatrix:{value:new Re}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Qn,Wr,this.up):hi.lookAt(Wr,Qn,this.up),this.quaternion.setFromRotationMatrix(hi),n&&(hi.extractRotation(n.matrixWorld),fn.setFromRotationMatrix(hi),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),mn.child=e,this.dispatchEvent(mn),mn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),mn.child=e,this.dispatchEvent(mn),mn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};mt.DEFAULT_UP=new w(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=new w,ci=new w,Qa=new w,ui=new w,gn=new w,vn=new w,xc=new w,eo=new w,to=new w,io=new w,no=new Ke,ro=new Ke,so=new Ke,pi=class r{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ht.subVectors(e,t),n.cross(Ht);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ht.subVectors(n,t),ci.subVectors(i,t),Qa.subVectors(e,t);let a=Ht.dot(Ht),o=Ht.dot(ci),l=Ht.dot(Qa),h=ci.dot(ci),c=ci.dot(Qa),u=a*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,m=(a*c-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ui)!==null&&ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return no.setScalar(0),ro.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,t),ro.fromBufferAttribute(e,i),so.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(no,s.x),a.addScaledVector(ro,s.y),a.addScaledVector(so,s.z),a}static isFrontFacing(e,t,i,n){return Ht.subVectors(i,t),ci.subVectors(e,t),Ht.cross(ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),.5*Ht.cross(ci).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;gn.subVectors(n,i),vn.subVectors(s,i),eo.subVectors(e,i);let l=gn.dot(eo),h=vn.dot(eo);if(l<=0&&h<=0)return t.copy(i);to.subVectors(e,n);let c=gn.dot(to),u=vn.dot(to);if(c>=0&&u<=c)return t.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(gn,a);io.subVectors(e,s);let p=gn.dot(io),m=vn.dot(io);if(m>=0&&p<=m)return t.copy(s);let y=p*h-l*m;if(y<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(i).addScaledVector(vn,o);let f=c*m-p*u;if(f<=0&&u-c>=0&&p-m>=0)return xc.subVectors(s,n),o=(u-c)/(u-c+(p-m)),t.copy(n).addScaledVector(xc,o);let g=1/(f+y+d);return a=y*g,o=d*g,t.copy(i).addScaledVector(gn,a).addScaledVector(vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ao(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ze.workingColorSpace){if(e=$d(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ao(a,s,e+1/3),this.g=ao(a,s,e),this.b=ao(a,s,e-1/3)}return ze.toWorkingColorSpace(this,n),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=Ru[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ze.fromWorkingColorSpace(vt.copy(this),e),65536*Math.round(pt(255*vt.r,0,255))+256*Math.round(pt(255*vt.g,0,255))+Math.round(pt(255*vt.b,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(vt.copy(this),t);let i=vt.r,n=vt.g,s=vt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=dt){ze.fromWorkingColorSpace(vt.copy(this),e);let t=vt.r,i=vt.g,n=vt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Xr);let i=Ga(Ei.h,Xr.h,t),n=Ga(Ei.s,Xr.s,t),s=Ga(Ei.l,Xr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new we;we.NAMES=Ru;var hp=0,Ii=class extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Qt(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ln,this.stencilZFail=ln,this.stencilZPass=ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==Ao&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ln&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ln&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ln&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ei=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sg=cp();function cp(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new w,jr=new te,Ze=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rl,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}};var Nn=class extends Ze{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ts=class extends Ze{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Te=class extends Ze{constructor(e,t,i){super(new Float32Array(e),t,i)}},up=0,It=new Me,oo=new mt,_n=new w,At=new Xt,er=new Xt,ut=new w,je=class r extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Ts:Nn)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Re().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,i){return It.makeTranslation(e,t,i),this.applyMatrix4(It),this}scale(e,t,i){return It.makeScale(e,t,i),this.applyMatrix4(It),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{for(let i=0,n=t.count;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let i=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(At.min,er.min),At.expandByPoint(ut),ut.addVectors(At.max,er.max),At.expandByPoint(ut)):(At.expandByPoint(er.min),At.expandByPoint(er.max))}At.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ut.fromBufferAttribute(o,h),l&&(_n.fromBufferAttribute(e,h),ut.add(_n)),n=Math.max(n,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new w,l[D]=new w;let h=new w,c=new w,u=new w,d=new te,p=new te,m=new te,y=new w,f=new w;function g(D,N,B){h.fromBufferAttribute(i,D),c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,B),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,B),c.sub(h),u.sub(h),p.sub(d),m.sub(d);let G=1/(p.x*m.y-m.x*p.y);isFinite(G)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(G),f.copy(u).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(G),o[D].add(y),o[N].add(y),o[B].add(y),l[D].add(f),l[N].add(f),l[B].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,N=_.length;D<N;++D){let B=_[D],G=B.start;for(let z=G,X=G+B.count;z<X;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new w,x=new w,A=new w,E=new w;function I(D){A.fromBufferAttribute(n,D),E.copy(A);let N=o[D];v.copy(N),v.sub(A.multiplyScalar(A.dot(N))).normalize(),x.crossVectors(E,N);let B=x.dot(l[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,B)}for(let D=0,N=_.length;D<N;++D){let B=_[D],G=B.start;for(let z=G,X=G+B.count;z<X;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new w,s=new w,a=new w,o=new w,l=new w,h=new w,c=new w,u=new w;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,f),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,m=0;for(let y=0,f=l.length;y<f;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*c;for(let g=0;g<c;g++)d[m++]=h[p++]}return new Ze(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){let d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let s=e.morphAttributes;for(let h in s){let c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mc=new Me,Hi=new Ji,qr=new jt,bc=new w,Yr=new w,Zr=new w,Jr=new w,lo=new w,Kr=new w,Sc=new w,$r=new w,Be=class extends mt{constructor(e=new je,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){let c=o[l],u=s[l];c!==0&&(lo.fromBufferAttribute(u,e),a?Kr.addScaledVector(lo,c):Kr.addScaledVector(lo.sub(t),c))}t.add(Kr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),qr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(qr,bc)===null||Hi.origin.distanceToSquared(bc)>(e.far-e.near)**2))return;Mc.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Mc),i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Hi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let f=d[m],g=a[f.materialIndex];for(let _=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));_<v;_+=3)n=Qr(this,g,e,i,h,c,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);m<y;m+=3)n=Qr(this,a,e,i,h,c,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let f=d[m],g=a[f.materialIndex];for(let _=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));_<v;_+=3)n=Qr(this,g,e,i,h,c,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);m<y;m+=3)n=Qr(this,a,e,i,h,c,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function Qr(r,e,t,i,n,s,a,o,l,h){r.getVertexPosition(o,Yr),r.getVertexPosition(l,Zr),r.getVertexPosition(h,Jr);let c=(function(u,d,p,m,y,f,g,_){let v;if(v=d.side===1?m.intersectTriangle(g,f,y,!0,_):m.intersectTriangle(y,f,g,d.side===0,_),v===null)return null;$r.copy(_),$r.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo($r);return x<p.near||x>p.far?null:{distance:x,point:$r.clone(),object:u}})(r,e,t,i,Yr,Zr,Jr,Sc);if(c){let u=new w;pi.getBarycoord(Sc,Yr,Zr,Jr,u),n&&(c.uv=pi.getInterpolatedAttribute(n,o,l,h,u,new te)),s&&(c.uv1=pi.getInterpolatedAttribute(s,o,l,h,u,new te)),a&&(c.normal=pi.getInterpolatedAttribute(a,o,l,h,u,new w),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new w,materialIndex:0};pi.getNormal(Yr,Zr,Jr,d.normal),c.face=d,c.barycoord=u}return c}var ti=class r extends je{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,p=0;function m(y,f,g,_,v,x,A,E,I,D,N){let B=x/I,G=A/D,z=x/2,X=A/2,V=E/2,q=I+1,J=D+1,ne=0,ie=0,me=new w;for(let ye=0;ye<J;ye++){let ee=ye*G-X;for(let se=0;se<q;se++){let de=se*B-z;me[y]=de*_,me[f]=ee*v,me[g]=V,h.push(me.x,me.y,me.z),me[y]=0,me[f]=0,me[g]=E>0?1:-1,c.push(me.x,me.y,me.z),u.push(se/I),u.push(1-ye/D),ne+=1}}for(let ye=0;ye<D;ye++)for(let ee=0;ee<I;ee++){let se=d+ee+q*ye,de=d+ee+q*(ye+1),pe=d+(ee+1)+q*(ye+1),le=d+(ee+1)+q*ye;l.push(se,de,le),l.push(de,pe,le),ie+=6}o.addGroup(p,ie,N),p+=ie,d+=ne}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function On(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Mt(r){let e={};for(let t=0;t<r.length;t++){let i=On(r[t]);for(let n in i)e[n]=i[n]}return e}function Cu(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var dp={clone:On,merge:Mt},ii=class extends Ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},mr=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new w,wc=new te,Ec=new te,bt=class extends mr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*sl*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*xs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*sl*Math.atan(Math.tan(.5*xs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Ec),t.subVectors(Ec,wc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*xs*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yn=-90,hl=class extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new bt(yn,1,e,t);n.layers=this.layers,this.add(n);let s=new bt(yn,1,e,t);s.layers=this.layers,this.add(s);let a=new bt(yn,1,e,t);a.layers=this.layers,this.add(a);let o=new bt(yn,1,e,t);o.layers=this.layers,this.add(o);let l=new bt(yn,1,e,t);l.layers=this.layers,this.add(l);let h=new bt(yn,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let h of t)this.remove(h);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==bs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},As=class extends wt{constructor(e,t,i,n,s,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:In,i,n,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cl=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new As(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ti(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Be(n,s),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=fi),new hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},ho=new w,pp=new w,fp=new Re,di=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ho.subVectors(i,t).cross(pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ho),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fp.getNormalMatrix(e),n=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new jt,es=new w,kn=class{constructor(e=new di,t=new di,i=new di,n=new di,s=new di,a=new di){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],p=n[8],m=n[9],y=n[10],f=n[11],g=n[12],_=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,d-h,f-p,x-g).normalize(),i[1].setComponents(l+s,d+h,f+p,x+g).normalize(),i[2].setComponents(l+a,d+c,f+m,x+_).normalize(),i[3].setComponents(l-a,d-c,f-m,x-_).normalize(),i[4].setComponents(l-o,d-u,f-y,x-v).normalize(),t===Dn)i[5].setComponents(l+o,d+u,f+y,x+v).normalize();else{if(t!==bs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(es.x=n.normal.x>0?e.max.x:e.min.x,es.y=n.normal.y>0?e.max.y:e.min.y,es.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Iu(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,h=o.byteLength,c=r.createBuffer(),u;if(r.bindBuffer(a,c),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:c,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:h}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,h=a.updateRanges;if(r.bindBuffer(o,s),h.length===0)r.bufferSubData(o,0,l);else{h.sort(((u,d)=>u.start-d.start));let c=0;for(let u=1;u<h.length;u++){let d=h[c],p=h[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++c,h[c]=p)}h.length=c+1;for(let u=0,d=h.length;u<d;u++){let p=h[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var ni=class r extends je{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],m=[],y=[],f=[];for(let g=0;g<c;g++){let _=g*d-a;for(let v=0;v<h;v++){let x=v*u-s;m.push(x,-_,0),y.push(0,0,1),f.push(v/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let v=_+h*g,x=_+h*(g+1),A=_+1+h*(g+1),E=_+1+h*g;p.push(v,x,E),p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ie={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},oe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Jt={basic:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Mt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Mt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new we(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Mt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Mt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Mt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Mt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Mt([oe.common,oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Mt([oe.lights,oe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Jt.physical={uniforms:Mt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var ts={r:0,b:0,g:0},Gi=new Lt,gp=new Me;function vp(r,e,t,i,n,s,a){let o=new we(0),l,h,c=s===!0?0:1,u=null,d=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function y(f,g){f.getRGB(ts,Cu(r)),i.buffers.color.setClear(ts.r,ts.g,ts.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),c=g,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,y(o,c)},render:function(f){let g=!1,_=m(f);_===null?y(o,c):_&&_.isColor&&(y(_,1),g=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,g){let _=m(g);_&&(_.isCubeTexture||_.mapping===Js)?(h===void 0&&(h=new Be(new ti(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:On(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Gi.copy(g.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(Gi)),h.material.toneMapped=ze.getTransfer(_.colorSpace)!==Ge,u===_&&d===_.version&&p===r.toneMapping||(h.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Be(new ni(2,2),new ii({name:"BackgroundMaterial",uniforms:On(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ze.getTransfer(_.colorSpace)!==Ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function _p(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=h(null),s=n,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function h(g){let _=[],v=[],x=[];for(let A=0;A<t;A++)_[A]=0,v[A]=0,x[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:x,object:g,attributes:{},index:null}}function c(){let g=s.newAttributes;for(let _=0,v=g.length;_<v;_++)g[_]=0}function u(g){d(g,0)}function d(g,_){let v=s.newAttributes,x=s.enabledAttributes,A=s.attributeDivisors;v[g]=1,x[g]===0&&(r.enableVertexAttribArray(g),x[g]=1),A[g]!==_&&(r.vertexAttribDivisor(g,_),A[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let v=0,x=_.length;v<x;v++)_[v]!==g[v]&&(r.disableVertexAttribArray(v),_[v]=0)}function m(g,_,v,x,A,E,I){I===!0?r.vertexAttribIPointer(g,_,v,A,E):r.vertexAttribPointer(g,_,v,x,A,E)}function y(){f(),a=!0,s!==n&&(s=n,o(s.object))}function f(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,_,v,x,A){let E=!1,I=(function(D,N,B){let G=B.wireframe===!0,z=i[D.id];z===void 0&&(z={},i[D.id]=z);let X=z[N.id];X===void 0&&(X={},z[N.id]=X);let V=X[G];return V===void 0&&(V=h(r.createVertexArray()),X[G]=V),V})(x,v,_);s!==I&&(s=I,o(s.object)),E=(function(D,N,B,G){let z=s.attributes,X=N.attributes,V=0,q=B.getAttributes();for(let J in q)if(q[J].location>=0){let ne=z[J],ie=X[J];if(ie===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==G})(g,x,v,A),E&&(function(D,N,B,G){let z={},X=N.attributes,V=0,q=B.getAttributes();for(let J in q)if(q[J].location>=0){let ne=X[J];ne===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),z[J]=ie,V++}s.attributes=z,s.attributesNum=V,s.index=G})(g,x,v,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(D,N,B,G){c();let z=G.attributes,X=B.getAttributes(),V=N.defaultAttributeValues;for(let q in X){let J=X[q];if(J.location>=0){let ne=z[q];if(ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let ie=ne.normalized,me=ne.itemSize,ye=e.get(ne);if(ye===void 0)continue;let ee=ye.buffer,se=ye.type,de=ye.bytesPerElement,pe=se===r.INT||se===r.UNSIGNED_INT||ne.gpuType===rh;if(ne.isInterleavedBufferAttribute){let le=ne.data,T=le.stride,S=ne.offset;if(le.isInstancedInterleavedBuffer){for(let U=0;U<J.locationSize;U++)d(J.location+U,le.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let U=0;U<J.locationSize;U++)u(J.location+U);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let U=0;U<J.locationSize;U++)m(J.location+U,me/J.locationSize,se,ie,T*de,(S+me/J.locationSize*U)*de,pe)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)d(J.location+le,ne.meshPerAttribute);D.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<J.locationSize;le++)u(J.location+le);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let le=0;le<J.locationSize;le++)m(J.location+le,me/J.locationSize,se,ie,me*de,me/J.locationSize*le*de,pe)}}else if(V!==void 0){let ie=V[q];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(J.location,ie);break;case 3:r.vertexAttrib3fv(J.location,ie);break;case 4:r.vertexAttrib4fv(J.location,ie);break;default:r.vertexAttrib1fv(J.location,ie)}}}}p()})(g,_,v,x),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:y,resetDefaultState:f,dispose:function(){y();for(let g in i){let _=i[g];for(let v in _){let x=_[v];for(let A in x)l(x[A].object),delete x[A];delete _[v]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let _=i[g.id];for(let v in _){let x=_[v];for(let A in x)l(x[A].object),delete x[A];delete _[v]}delete i[g.id]},releaseStatesOfProgram:function(g){for(let _ in i){let v=i[_];if(v[g.id]===void 0)continue;let x=v[g.id];for(let A in x)l(x[A].object),delete x[A];delete v[g.id]}},initAttributes:c,enableAttribute:u,disableUnusedAttributes:p}}function yp(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let h=0;h<o;h++)l+=a[h];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<s.length;c++)n(s[c],a[c],l[c]);else{h.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let c=0;for(let u=0;u<o;u++)c+=a[u]*l[u];t.update(c,i,1)}}}function xp(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===Vt||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Ri&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==$t&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Mp(r){let e=this,t=null,i=0,n=!1,s=!1,a=new di,o=new Re,l={value:null,needsUpdate:!1};function h(c,u,d,p){let m=c!==null?c.length:0,y=null;if(m!==0){if(y=l.value,p!==!0||y===null){let f=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(y===null||y.length<f)&&(y=new Float32Array(f));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(c[_]).applyMatrix4(g,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let d=c.length!==0||u||i!==0||n;return n=u,i=c.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,d){let p=c.clippingPlanes,m=c.clipIntersection,y=c.clipShadows,f=r.get(c);if(!n||p===null||p.length===0||s&&!y)s?h(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=s?0:i,_=4*g,v=f.clippingState||null;l.value=v,v=h(p,u,_,d);for(let x=0;x!==_;++x)v[x]=t[x];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function bp(r){let e=new WeakMap;function t(n,s){return s===Ro?n.mapping=In:s===Co&&(n.mapping=Pn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Ro||s===Co){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new cl(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Rs=class extends mr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tc=[.125,.215,.35,.446,.526,.582],tr=20,co=new Rs,Ac=new we,uo=null,po=0,fo=0,mo=!1,Xi=(1+Math.sqrt(5))/2,xn=1/Xi,Rc=[new w(-Xi,xn,0),new w(Xi,xn,0),new w(-xn,0,Xi),new w(xn,0,Xi),new w(0,Xi,-xn),new w(0,Xi,xn),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){uo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,po,fo),this._renderer.xr.enabled=mo,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===In||e.mapping===Pn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Er,format:Vt,colorSpace:Hn,depthBuffer:!1},n=Cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],h=[],c=a,u=a-4+1+Tc.length;for(let d=0;d<u;d++){let p=Math.pow(2,c);l.push(p);let m=1/p;d>a-4?m=Tc[d-a+4-1]:d===0&&(m=0),h.push(m);let y=1/(p-2),f=-y,g=1+y,_=[f,f,g,f,g,g,f,f,g,g,f,g],v=6,x=6,A=3,E=2,I=1,D=new Float32Array(A*x*v),N=new Float32Array(E*x*v),B=new Float32Array(I*x*v);for(let z=0;z<v;z++){let X=z%3*2/3-1,V=z>2?0:-1,q=[X,V,0,X+2/3,V,0,X+2/3,V+1,0,X,V,0,X+2/3,V+1,0,X,V+1,0];D.set(q,A*x*z),N.set(_,E*x*z);let J=[z,z,z,z,z,z];B.set(J,I*x*z)}let G=new je;G.setAttribute("position",new Ze(D,A)),G.setAttribute("uv",new Ze(N,E)),G.setAttribute("faceIndex",new Ze(B,I)),o.push(G),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}})(s)),this._blurMaterial=(function(a,o,l){let h=new Float32Array(tr),c=new w(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:ch(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,i,n){let s=new bt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Ac),l.toneMapping=0,l.autoClear=!1;let u=new ei({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Be(new ti,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Ac),p=!0);for(let y=0;y<6;y++){let f=y%3;f===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):f===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let g=this._cubeSize;is(n,f*g,y>2?g:0,g,g),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===In||e.mapping===Pn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;is(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,co)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rc[(n-s-1)%Rc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Be(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,y=isFinite(s)?1+Math.floor(3*m):tr;y>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let f=[],g=0;for(let x=0;x<tr;++x){let A=x/m,E=Math.exp(-A*A/2);f.push(E),x===0?g+=E:x<y&&(g+=2*E)}for(let x=0;x<f.length;x++)f[x]=f[x]/g;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-i;let v=this._sizeLods[n];is(t,3*v*(n>_-4?n-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(c,co)}};function Cc(r,e,t){let i=new gi(r,e,t);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Ic(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Sp(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Ro||s===Co,o=s===In||s===Pn;if(a||o){let l=e.get(n),h=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==h)return t===null&&(t=new Cs(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let c=n.image;return a&&c&&c.height>0||o&&c&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(c)?(t===null&&(t=new Cs(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function wp(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ar("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ep(r,e,t,i){let n={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let u in h.attributes)e.remove(h.attributes[u]);for(let u in h.morphAttributes){let d=h.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}h.removeEventListener("dispose",a),delete n[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,u=l.attributes.position,d=0;if(c!==null){let y=c.array;d=c.version;for(let f=0,g=y.length;f<g;f+=3){let _=y[f+0],v=y[f+1],x=y[f+2];h.push(_,v,v,x,x,_)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let f=0,g=y.length/3-1;f<g;f+=3){let _=f+0,v=f+1,x=f+2;h.push(_,v,v,x,x,_)}}}let p=new(Au(h)?Ts:Nn)(h,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)e.update(h[u],r.ARRAY_BUFFER);let c=l.morphAttributes;for(let u in c){let d=c[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function Tp(r,e,t){let i,n,s;function a(o,l,h){h!==0&&(r.drawElementsInstanced(i,l,n,o*s,h),t.update(l,i,h))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,h);let c=0;for(let u=0;u<h;u++)c+=l[u];t.update(c,i,1)},this.renderMultiDrawInstances=function(o,l,h,c){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],c[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p]*c[p];t.update(d,i,1)}}}function Ap(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Rp(r,e,t){let i=new WeakMap,n=new Ke;return{update:function(s,a,o){let l=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==c){let D=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),m===!0&&(_=3);let v=a.attributes.position.count*_,x=1;v>e.maxTextureSize&&(x=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*x*4*c),E=new Es(A,v,x,c);E.type=$t,E.needsUpdate=!0;let I=4*_;for(let N=0;N<c;N++){let B=y[N],G=f[N],z=g[N],X=v*x*4*N;for(let V=0;V<B.count;V++){let q=V*I;d===!0&&(n.fromBufferAttribute(B,V),A[X+q+0]=n.x,A[X+q+1]=n.y,A[X+q+2]=n.z,A[X+q+3]=0),p===!0&&(n.fromBufferAttribute(G,V),A[X+q+4]=n.x,A[X+q+5]=n.y,A[X+q+6]=n.z,A[X+q+7]=0),m===!0&&(n.fromBufferAttribute(z,V),A[X+q+8]=n.x,A[X+q+9]=n.y,A[X+q+10]=n.z,A[X+q+11]=z.itemSize===4?n.w:1)}}u={count:c,texture:E,size:new te(v,x)},i.set(a,u),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Cp(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var Is=class extends wt{constructor(e,t,i,n,s,a,o,l,h,c=1026){if(c!==pr&&c!==Un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===pr&&(i=Zi),i===void 0&&c===Un&&(i=Ln),super(null,n,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pu=new wt,Lc=new Is(1,1),Lu=new Es,Uu=new ll,Du=new As,Uc=[],Dc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),kc=new Float32Array(4);function Gn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Uc[n];if(s===void 0&&(s=new Float32Array(n),Uc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function lt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function $s(r,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Ip(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Dp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,i))return;kc.set(i),r.uniformMatrix2fv(this.addr,!1,kc),ht(t,i)}}function Np(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,i))return;Oc.set(i),r.uniformMatrix3fv(this.addr,!1,Oc),ht(t,i)}}function Op(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,i))return;Nc.set(i),r.uniformMatrix4fv(this.addr,!1,Nc),ht(t,i)}}function kp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function Bp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function zp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Hp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Xp(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Lc.compareFunction=515,s=Lc):s=Pu,t.setTexture2D(e||s,n)}function jp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Uu,n)}function qp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Du,n)}function Yp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Lu,n)}function Zp(r,e){r.uniform1fv(this.addr,e)}function Jp(r,e){let t=Gn(e,this.size,2);r.uniform2fv(this.addr,t)}function Kp(r,e){let t=Gn(e,this.size,3);r.uniform3fv(this.addr,t)}function $p(r,e){let t=Gn(e,this.size,4);r.uniform4fv(this.addr,t)}function Qp(r,e){let t=Gn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ef(r,e){let t=Gn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tf(r,e){let t=Gn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nf(r,e){r.uniform1iv(this.addr,e)}function rf(r,e){r.uniform2iv(this.addr,e)}function sf(r,e){r.uniform3iv(this.addr,e)}function af(r,e){r.uniform4iv(this.addr,e)}function of(r,e){r.uniform1uiv(this.addr,e)}function lf(r,e){r.uniform2uiv(this.addr,e)}function hf(r,e){r.uniform3uiv(this.addr,e)}function cf(r,e){r.uniform4uiv(this.addr,e)}function uf(r,e,t){let i=this.cache,n=e.length,s=$s(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Pu,s[a])}function df(r,e,t){let i=this.cache,n=e.length,s=$s(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Uu,s[a])}function pf(r,e,t){let i=this.cache,n=e.length,s=$s(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Du,s[a])}function ff(r,e,t){let i=this.cache,n=e.length,s=$s(t,n);lt(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Lu,s[a])}var ul=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Ip;case 35664:return Pp;case 35665:return Lp;case 35666:return Up;case 35674:return Dp;case 35675:return Np;case 35676:return Op;case 5124:case 35670:return kp;case 35667:case 35671:return Fp;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Hp;case 36294:return Vp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}})(t.type)}},dl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return Zp;case 35664:return Jp;case 35665:return Kp;case 35666:return $p;case 35674:return Qp;case 35675:return ef;case 35676:return tf;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return sf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return hf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return ff}})(t.type)}},pl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},go=/(\w+)(\])?(\[|\.)?/g;function Fc(r,e){r.seq.push(e),r.map[e.id]=e}function mf(r,e,t){let i=r.name,n=i.length;for(go.lastIndex=0;;){let s=go.exec(i),a=go.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Fc(t,h===void 0?new ul(o,r,e):new dl(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new pl(o),Fc(t,c)),t=c}}}var Cn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);mf(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Bc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var gf=0,zc=new Re;function Hc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){let m=p+1;c.push(`${m===l?">":" "} ${m}: ${h[p]}`)}return c.join(`
`)})(r.getShaderSource(e),a)}return n}function vf(r,e){let t=(function(i){ze._getMatrix(zc,ze.workingColorSpace,i);let n=`mat3( ${zc.elements.map((s=>s.toFixed(4)))} )`;switch(ze.getTransfer(i)){case Ks:return[n,"LinearTransferOETF"];case Ge:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _f(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ns=new w;function yf(){return ze.getLuminanceCoefficients(ns),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ns.x.toFixed(4)}, ${ns.y.toFixed(4)}, ${ns.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ir(r){return r!==""}function Vc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(xf,bf)}var Mf=new Map;function bf(r,e){let t=Ie[e];if(t===void 0){let i=Mf.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return fl(t)}var Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(r){return r.replace(Sf,wf)}function wf(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Xc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Ef(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(G){let z="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===1?z="SHADOWMAP_TYPE_PCF":G.shadowMapType===2?z="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===3&&(z="SHADOWMAP_TYPE_VSM"),z})(t),h=(function(G){let z="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case In:case Pn:z="ENVMAP_TYPE_CUBE";break;case Js:z="ENVMAP_TYPE_CUBE_UV"}return z})(t),c=(function(G){let z="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===Pn&&(z="ENVMAP_MODE_REFRACTION"),z})(t),u=(function(G){let z="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case 0:z="ENVMAP_BLENDING_MULTIPLY";break;case 1:z="ENVMAP_BLENDING_MIX";break;case 2:z="ENVMAP_BLENDING_ADD"}return z})(t),d=(function(G){let z=G.envMapCubeUVHeight;if(z===null)return null;let X=Math.log2(z)-2,V=1/z;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:V,maxMip:X}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)})(t),m=(function(G){let z=[];for(let X in G){let V=G[X];V!==!1&&z.push("#define "+X+" "+V)}return z.join(`
`)})(s),y=n.createProgram(),f,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ir).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ir).join(`
`),g.length>0&&(g+=`
`)):(f=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),g=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ie.tonemapping_pars_fragment:"",t.toneMapping!==0?_f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,vf("linearToOutputTexel",t.outputColorSpace),yf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=fl(a),a=Vc(a,t),a=Gc(a,t),o=fl(o),o=Vc(o,t),o=Gc(o,t),a=Wc(a),o=Wc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=_+f+a,x=_+g+o,A=Bc(n,n.VERTEX_SHADER,v),E=Bc(n,n.FRAGMENT_SHADER,x);function I(G){if(r.debug.checkShaderErrors){let z=n.getProgramInfoLog(y).trim(),X=n.getShaderInfoLog(A).trim(),V=n.getShaderInfoLog(E).trim(),q=!0,J=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,A,E);else{let ne=Hc(n,A,"vertex"),ie=Hc(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+z+`
`+ne+`
`+ie)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):X!==""&&V!==""||(J=!1);J&&(G.diagnostics={runnable:q,programLog:z,vertexShader:{log:X,prefix:f},fragmentShader:{log:V,prefix:g}})}n.deleteShader(A),n.deleteShader(E),D=new Cn(n,y),N=(function(z,X){let V={},q=z.getProgramParameter(X,z.ACTIVE_ATTRIBUTES);for(let J=0;J<q;J++){let ne=z.getActiveAttrib(X,J),ie=ne.name,me=1;ne.type===z.FLOAT_MAT2&&(me=2),ne.type===z.FLOAT_MAT3&&(me=3),ne.type===z.FLOAT_MAT4&&(me=4),V[ie]={type:ne.type,location:z.getAttribLocation(X,ie),locationSize:me}}return V})(n,y)}let D,N;n.attachShader(y,A),n.attachShader(y,E),t.index0AttributeName!==void 0?n.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y),this.getUniforms=function(){return D===void 0&&I(this),D},this.getAttributes=function(){return N===void 0&&I(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(y,37297)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}var Tf=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gl(e),t.set(e,i)),i}},gl=class{constructor(e){this.id=Tf++,this.code=e,this.usedTimes=0}};function Af(r,e,t,i,n,s,a){let o=new fr,l=new ml,h=new Set,c=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(f){return h.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,_,v,x){let A=v.fog,E=x.geometry,I=f.isMeshStandardMaterial?v.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||I),N=D&&D.mapping===Js?D.image.height:null,B=m[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let G=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,z=G!==void 0?G.length:0,X,V,q,J,ne=0;if(E.morphAttributes.position!==void 0&&(ne=1),E.morphAttributes.normal!==void 0&&(ne=2),E.morphAttributes.color!==void 0&&(ne=3),B){let Yn=Jt[B];X=Yn.vertexShader,V=Yn.fragmentShader}else X=f.vertexShader,V=f.fragmentShader,l.update(f),q=l.getVertexShaderID(f),J=l.getFragmentShaderID(f);let ie=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),ye=x.isInstancedMesh===!0,ee=x.isBatchedMesh===!0,se=!!f.map,de=!!f.matcap,pe=!!D,le=!!f.aoMap,T=!!f.lightMap,S=!!f.bumpMap,U=!!f.normalMap,L=!!f.displacementMap,R=!!f.emissiveMap,P=!!f.metalnessMap,M=!!f.roughnessMap,C=f.anisotropy>0,k=f.clearcoat>0,$=f.dispersion>0,O=f.iridescence>0,Z=f.sheen>0,Y=f.transmission>0,Q=C&&!!f.anisotropyMap,ce=k&&!!f.clearcoatMap,he=k&&!!f.clearcoatNormalMap,ve=k&&!!f.clearcoatRoughnessMap,Se=O&&!!f.iridescenceMap,Fe=O&&!!f.iridescenceThicknessMap,Ue=Z&&!!f.sheenColorMap,_e=Z&&!!f.sheenRoughnessMap,Ve=!!f.specularMap,qe=!!f.specularColorMap,tt=!!f.specularIntensityMap,fe=Y&&!!f.transmissionMap,Ne=Y&&!!f.thicknessMap,Xe=!!f.gradientMap,an=!!f.alphaMap,Dr=f.alphaTest>0,Nt=!!f.alphaHash,Yt=!!f.extensions,Ni=0;f.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(Ni=r.toneMapping));let F={shaderID:B,shaderType:f.type,shaderName:f.name,vertexShader:X,fragmentShader:V,defines:f.defines,customVertexShaderID:q,customFragmentShaderID:J,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:ee,batchingColor:ee&&x._colorsTexture!==null,instancing:ye,instancingColor:ye&&x.instanceColor!==null,instancingMorph:ye&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Hn,alphaToCoverage:!!f.alphaToCoverage,map:se,matcap:de,envMap:pe,envMapMode:pe&&D.mapping,envMapCubeUVHeight:N,aoMap:le,lightMap:T,bumpMap:S,normalMap:U,displacementMap:d&&L,emissiveMap:R,normalMapObjectSpace:U&&f.normalMapType===1,normalMapTangentSpace:U&&f.normalMapType===0,metalnessMap:P,roughnessMap:M,anisotropy:C,anisotropyMap:Q,clearcoat:k,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:ve,dispersion:$,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:Ve,specularColorMap:qe,specularIntensityMap:tt,transmission:Y,transmissionMap:fe,thicknessMap:Ne,gradientMap:Xe,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:an,alphaTest:Dr,alphaHash:Nt,combine:f.combine,mapUv:se&&y(f.map.channel),aoMapUv:le&&y(f.aoMap.channel),lightMapUv:T&&y(f.lightMap.channel),bumpMapUv:S&&y(f.bumpMap.channel),normalMapUv:U&&y(f.normalMap.channel),displacementMapUv:L&&y(f.displacementMap.channel),emissiveMapUv:R&&y(f.emissiveMap.channel),metalnessMapUv:P&&y(f.metalnessMap.channel),roughnessMapUv:M&&y(f.roughnessMap.channel),anisotropyMapUv:Q&&y(f.anisotropyMap.channel),clearcoatMapUv:ce&&y(f.clearcoatMap.channel),clearcoatNormalMapUv:he&&y(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(f.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&y(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(f.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(f.sheenRoughnessMap.channel),specularMapUv:Ve&&y(f.specularMap.channel),specularColorMapUv:qe&&y(f.specularColorMap.channel),specularIntensityMapUv:tt&&y(f.specularIntensityMap.channel),transmissionMapUv:fe&&y(f.transmissionMap.channel),thicknessMapUv:Ne&&y(f.thicknessMap.channel),alphaMapUv:an&&y(f.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(U||C),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!E.attributes.uv&&(se||an),fog:!!A,useFog:f.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:me,skinning:x.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ni,decodeVideoTexture:se&&f.map.isVideoTexture===!0&&ze.getTransfer(f.map.colorSpace)===Ge,decodeVideoTextureEmissive:R&&f.emissiveMap.isVideoTexture===!0&&ze.getTransfer(f.emissiveMap.colorSpace)===Ge,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Yt&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&f.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return F.vertexUv1s=h.has(1),F.vertexUv2s=h.has(2),F.vertexUv3s=h.has(3),h.clear(),F},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let _ in f.defines)g.push(_),g.push(f.defines[_]);return f.isRawShaderMaterial===!1&&((function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)})(g,f),(function(_,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),_.push(o.mask)})(g,f),g.push(r.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],_;if(g){let v=Jt[g];_=dp.clone(v.uniforms)}else _=f.uniforms;return _},acquireProgram:function(f,g){let _;for(let v=0,x=c.length;v<x;v++){let A=c[v];if(A.cacheKey===g){_=A,++_.usedTimes;break}}return _===void 0&&(_=new Ef(r,g,f,s),c.push(_)),_},releaseProgram:function(f){if(--f.usedTimes==0){let g=c.indexOf(f);c[g]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function Rf(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,h,c,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){let d=s(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){let d=s(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Cf),i.length>1&&i.sort(o||jc),n.length>1&&n.sort(o||jc)}}}function If(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new qc,r.set(e,[n])):t>=i.length?(n=new qc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Pf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new we};break;case"SpotLight":t={position:new w,direction:new w,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new w,halfWidth:new w,halfHeight:new w}}return r[e.id]=t,t}}}var Lf=0;function Uf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Df(r){let e=new Pf,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=h,h}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new w);let n=new w,s=new Me,a=new Me;return{setup:function(o){let l=0,h=0,c=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let u=0,d=0,p=0,m=0,y=0,f=0,g=0,_=0,v=0,x=0,A=0;o.sort(Uf);for(let I=0,D=o.length;I<D;I++){let N=o[I],B=N.color,G=N.intensity,z=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=B.r*G,h+=B.g*G,c+=B.b*G;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],G);A++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let q=N.shadow,J=t.get(N);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.directionalShadow[u]=J,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=N.shadow.matrix,f++}i.directional[u]=V,u++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(B).multiplyScalar(G),V.distance=z,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[p]=V;let q=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,q.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[p]=q.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=X,_++}p++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(B).multiplyScalar(G),V.halfWidth.set(.5*N.width,0,0),V.halfHeight.set(0,.5*N.height,0),i.rectArea[m]=V,m++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let q=N.shadow,J=t.get(N);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=X,i.pointShadowMatrix[d]=N.shadow.matrix,g++}i.point[d]=V,d++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(G),V.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[y]=V,y++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;let E=i.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===m&&E.hemiLength===y&&E.numDirectionalShadows===f&&E.numPointShadows===g&&E.numSpotShadows===_&&E.numSpotMaps===v&&E.numLightProbes===A||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-x,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=A,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=m,E.hemiLength=y,E.numDirectionalShadows=f,E.numPointShadows=g,E.numSpotShadows=_,E.numSpotMaps=v,E.numLightProbes=A,i.version=Lf++)},setupView:function(o,l){let h=0,c=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let y=0,f=o.length;y<f;y++){let g=o[y];if(g.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),h++}else if(g.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let _=i.point[c];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),c++}else if(g.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(m),p++}}},state:i}}function Yc(r){let e=new Df(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function Nf(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Yc(r),e.set(t,[s])):i>=n.length?(s=new Yc(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var vl=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Of(r,e,t){let i=new kn,n=new te,s=new te,a=new Ke,o=new vl({depthPacking:3201}),l=new _l,h={},c=t.maxTextureSize,u={[vd]:1,[_d]:0,[wr]:2},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new je;m.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function _(E,I){let D=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gi(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(I,null,D,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(I,null,D,p,y,null)}function v(E,I,D,N){let B=null,G=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(G!==void 0)B=G;else if(B=D.isPointLight===!0?l:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let z=B.uuid,X=I.uuid,V=h[z];V===void 0&&(V={},h[z]=V);let q=V[X];q===void 0&&(q=B.clone(),V[X]=q,I.addEventListener("dispose",A)),B=q}return B.visible=I.visible,B.wireframe=I.wireframe,B.side=N===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,D.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(r.properties.get(B).light=D),B}function x(E,I,D,N,B){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===3)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let z=e.update(E),X=E.material;if(Array.isArray(X)){let V=z.groups;for(let q=0,J=V.length;q<J;q++){let ne=V[q],ie=X[ne.materialIndex];if(ie&&ie.visible){let me=v(E,ie,N,B);E.onBeforeShadow(r,E,I,D,z,me,ne),r.renderBufferDirect(D,null,z,me,E,ne),E.onAfterShadow(r,E,I,D,z,me,ne)}}}else if(X.visible){let V=v(E,X,N,B);E.onBeforeShadow(r,E,I,D,z,V,null),r.renderBufferDirect(D,null,z,V,E,null),E.onAfterShadow(r,E,I,D,z,V,null)}}let G=E.children;for(let z=0,X=G.length;z<X;z++)x(G[z],I,D,N,B)}function A(E){E.target.removeEventListener("dispose",A);for(let I in h){let D=h[I],N=E.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}this.render=function(E,I,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let N=r.getRenderTarget(),B=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),z=r.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=g!==3&&this.type===3,V=g===3&&this.type!==3;for(let q=0,J=E.length;q<J;q++){let ne=E[q],ie=ne.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;n.copy(ie.mapSize);let me=ie.getFrameExtents();if(n.multiply(me),s.copy(ie.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/me.x),n.x=s.x*me.x,ie.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/me.y),n.y=s.y*me.y,ie.mapSize.y=s.y)),ie.map===null||X===!0||V===!0){let ee=this.type!==3?{minFilter:Gt,magFilter:Gt}:{};ie.map!==null&&ie.map.dispose(),ie.map=new gi(n.x,n.y,ee),ie.map.texture.name=ne.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();let ye=ie.getViewportCount();for(let ee=0;ee<ye;ee++){let se=ie.getViewport(ee);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(a),ie.updateMatrices(ne,ee),i=ie.getFrustum(),x(I,D,ie.camera,ne,this.type)}ie.isPointLightShadow!==!0&&this.type===3&&_(ie,D),ie.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(N,B,G)}}var kf={[Dd]:1,[Od]:6,[Fd]:7,[kd]:5,[Nd]:0,[zd]:2,[Hd]:4,[Bd]:3};function Ff(r,e){let t=new function(){let M=!1,C=new Ke,k=null,$=new Ke(0,0,0,0);return{setMask:function(O){k===O||M||(r.colorMask(O,O,O,O),k=O)},setLocked:function(O){M=O},setClear:function(O,Z,Y,Q,ce){ce===!0&&(O*=Q,Z*=Q,Y*=Q),C.set(O,Z,Y,Q),$.equals(C)===!1&&(r.clearColor(O,Z,Y,Q),$.copy(C))},reset:function(){M=!1,k=null,$.set(-1,0,0,0)}}},i=new function(){let M=!1,C=!1,k=null,$=null,O=null;return{setReversed:function(Z){if(C!==Z){let Y=e.get("EXT_clip_control");C?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT);let Q=O;O=null,this.setClear(Q)}C=Z},getReversed:function(){return C},setTest:function(Z){Z?pe(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(Z){k===Z||M||(r.depthMask(Z),k=Z)},setFunc:function(Z){if(C&&(Z=kf[Z]),$!==Z){switch(Z){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}$=Z}},setLocked:function(Z){M=Z},setClear:function(Z){O!==Z&&(C&&(Z=1-Z),r.clearDepth(Z),O=Z)},reset:function(){M=!1,k=null,$=null,O=null,C=!1}}},n=new function(){let M=!1,C=null,k=null,$=null,O=null,Z=null,Y=null,Q=null,ce=null;return{setTest:function(he){M||(he?pe(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(he){C===he||M||(r.stencilMask(he),C=he)},setFunc:function(he,ve,Se){k===he&&$===ve&&O===Se||(r.stencilFunc(he,ve,Se),k=he,$=ve,O=Se)},setOp:function(he,ve,Se){Z===he&&Y===ve&&Q===Se||(r.stencilOp(he,ve,Se),Z=he,Y=ve,Q=Se)},setLocked:function(he){M=he},setClear:function(he){ce!==he&&(r.clearStencil(he),ce=he)},reset:function(){M=!1,C=null,k=null,$=null,O=null,Z=null,Y=null,Q=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,m=null,y=null,f=null,g=null,_=null,v=null,x=new we(0,0,0),A=0,E=!1,I=null,D=null,N=null,B=null,G=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,V=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=V>=2);let J=null,ne={},ie=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),ye=new Ke().fromArray(ie),ee=new Ke().fromArray(me);function se(M,C,k,$){let O=new Uint8Array(4),Z=r.createTexture();r.bindTexture(M,Z),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Y=0;Y<k;Y++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(C,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,O):r.texImage2D(C+Y,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,O);return Z}let de={};function pe(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function le(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}de[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),pe(r.DEPTH_TEST),i.setFunc(3),L(!1),R(1),pe(r.CULL_FACE),U(0);let T={[ji]:r.FUNC_ADD,[yd]:r.FUNC_SUBTRACT,[xd]:r.FUNC_REVERSE_SUBTRACT};T[103]=r.MIN,T[104]=r.MAX;let S={[Md]:r.ZERO,[bd]:r.ONE,[Sd]:r.SRC_COLOR,[To]:r.SRC_ALPHA,[Cd]:r.SRC_ALPHA_SATURATE,[Ad]:r.DST_COLOR,[Ed]:r.DST_ALPHA,[wd]:r.ONE_MINUS_SRC_COLOR,[Ao]:r.ONE_MINUS_SRC_ALPHA,[Rd]:r.ONE_MINUS_DST_COLOR,[Td]:r.ONE_MINUS_DST_ALPHA,[Id]:r.CONSTANT_COLOR,[Pd]:r.ONE_MINUS_CONSTANT_COLOR,[Ld]:r.CONSTANT_ALPHA,[Ud]:r.ONE_MINUS_CONSTANT_ALPHA};function U(M,C,k,$,O,Z,Y,Q,ce,he){if(M!==0){if(d===!1&&(pe(r.BLEND),d=!0),M===5)O=O||C,Z=Z||k,Y=Y||$,C===m&&O===g||(r.blendEquationSeparate(T[C],T[O]),m=C,g=O),k===y&&$===f&&Z===_&&Y===v||(r.blendFuncSeparate(S[k],S[$],S[Z],S[Y]),y=k,f=$,_=Z,v=Y),Q.equals(x)!==!1&&ce===A||(r.blendColor(Q.r,Q.g,Q.b,ce),x.copy(Q),A=ce),p=M,E=!1;else if(M!==p||he!==E){if(m===ji&&g===ji||(r.blendEquation(r.FUNC_ADD),m=ji,g=ji),he)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}y=null,f=null,_=null,v=null,x.set(0,0,0),A=0,p=M,E=he}}else d===!0&&(le(r.BLEND),d=!1)}function L(M){I!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),I=M)}function R(M){M!==0?(pe(r.CULL_FACE),M!==D&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),D=M}function P(M,C,k){M?(pe(r.POLYGON_OFFSET_FILL),B===C&&G===k||(r.polygonOffset(C,k),B=C,G=k)):le(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:pe,disable:le,bindFramebuffer:function(M,C){return l[M]!==C&&(r.bindFramebuffer(M,C),l[M]=C,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=C),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(M,C){let k=c,$=!1;if(M){k=h.get(C),k===void 0&&(k=[],h.set(C,k));let O=M.textures;if(k.length!==O.length||k[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Y=O.length;Z<Y;Z++)k[Z]=r.COLOR_ATTACHMENT0+Z;k.length=O.length,$=!0}}else k[0]!==r.BACK&&(k[0]=r.BACK,$=!0);$&&r.drawBuffers(k)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:U,setMaterial:function(M,C){M.side===2?le(r.CULL_FACE):pe(r.CULL_FACE);let k=M.side===1;C&&(k=!k),L(k),M.blending===1&&M.transparent===!1?U(0):U(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),t.setMask(M.colorWrite);let $=M.stencilWrite;n.setTest($),$&&(n.setMask(M.stencilWriteMask),n.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),n.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),P(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:L,setCullFace:R,setLineWidth:function(M){M!==N&&(X&&r.lineWidth(M),N=M)},setPolygonOffset:P,setScissorTest:function(M){M?pe(r.SCISSOR_TEST):le(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+z-1),J!==M&&(r.activeTexture(M),J=M)},bindTexture:function(M,C,k){k===void 0&&(k=J===null?r.TEXTURE0+z-1:J);let $=ne[k];$===void 0&&($={type:void 0,texture:void 0},ne[k]=$),$.type===M&&$.texture===C||(J!==k&&(r.activeTexture(k),J=k),r.bindTexture(M,C||de[M]),$.type=M,$.texture=C)},unbindTexture:function(){let M=ne[J];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,C){let k=a.get(C);k===void 0&&(k=new WeakMap,a.set(C,k));let $=k.get(M);$===void 0&&($=r.getUniformBlockIndex(C,M.name),k.set(M,$))},uniformBlockBinding:function(M,C){let k=a.get(C).get(M);s.get(C)!==k&&(r.uniformBlockBinding(C,k,M.__bindingPointIndex),s.set(C,k))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ye.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ye.copy(M))},viewport:function(M){ee.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),ee.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),i.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},J=null,ne={},l={},h=new WeakMap,c=[],u=null,d=!1,p=null,m=null,y=null,f=null,g=null,_=null,v=null,x=new we(0,0,0),A=0,E=!1,I=null,D=null,N=null,B=null,G=null,ye.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),t.reset(),i.reset(),n.reset()}}}function Zc(r,e,t,i){let n=(function(s){switch(s){case Ri:case vu:return{byteLength:1,components:1};case dr:case _u:case Er:return{byteLength:2,components:1};case sh:case ah:return{byteLength:2,components:4};case Zi:case rh:case $t:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case xu:case bu:return r*e;case Su:return r*e*2;case wu:case oh:return r*e/n.components*n.byteLength;case Eu:case lh:return r*e*2/n.components*n.byteLength;case Mu:return r*e*3/n.components*n.byteLength;case Vt:case hh:return r*e*4/n.components*n.byteLength;case ms:case gs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vs:case _s:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Do:return Math.max(r,16)*Math.max(e,8)/4;case Po:case Uo:return Math.max(r,8)*Math.max(e,8)/2;case No:case Oo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ko:case Fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ys:case $o:case Qo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Tu:case el:return Math.ceil(r/4)*Math.ceil(e/4)*8;case tl:case il:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new te,c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return p?new OffscreenCanvas(T,S):Ss("canvas")}function y(T,S,U){let L=1,R=le(T);if((R.width>U||R.height>U)&&(L=U/Math.max(R.width,R.height)),L<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let P=Math.floor(L*R.width),M=Math.floor(L*R.height);u===void 0&&(u=m(P,M));let C=S?m(P,M):u;return C.width=P,C.height=M,C.getContext("2d").drawImage(T,0,0,P,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+P+"x"+M+")."),C}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),T}return T}function f(T){return T.generateMipmaps}function g(T){r.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(T,S,U,L,R=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let P=S;if(S===r.RED&&(U===r.FLOAT&&(P=r.R32F),U===r.HALF_FLOAT&&(P=r.R16F),U===r.UNSIGNED_BYTE&&(P=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(P=r.R8UI),U===r.UNSIGNED_SHORT&&(P=r.R16UI),U===r.UNSIGNED_INT&&(P=r.R32UI),U===r.BYTE&&(P=r.R8I),U===r.SHORT&&(P=r.R16I),U===r.INT&&(P=r.R32I)),S===r.RG&&(U===r.FLOAT&&(P=r.RG32F),U===r.HALF_FLOAT&&(P=r.RG16F),U===r.UNSIGNED_BYTE&&(P=r.RG8)),S===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(P=r.RG8UI),U===r.UNSIGNED_SHORT&&(P=r.RG16UI),U===r.UNSIGNED_INT&&(P=r.RG32UI),U===r.BYTE&&(P=r.RG8I),U===r.SHORT&&(P=r.RG16I),U===r.INT&&(P=r.RG32I)),S===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(P=r.RGB8UI),U===r.UNSIGNED_SHORT&&(P=r.RGB16UI),U===r.UNSIGNED_INT&&(P=r.RGB32UI),U===r.BYTE&&(P=r.RGB8I),U===r.SHORT&&(P=r.RGB16I),U===r.INT&&(P=r.RGB32I)),S===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(P=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(P=r.RGBA16UI),U===r.UNSIGNED_INT&&(P=r.RGBA32UI),U===r.BYTE&&(P=r.RGBA8I),U===r.SHORT&&(P=r.RGBA16I),U===r.INT&&(P=r.RGBA32I)),S===r.RGB&&U===r.UNSIGNED_INT_5_9_9_9_REV&&(P=r.RGB9_E5),S===r.RGBA){let M=R?Ks:ze.getTransfer(L);U===r.FLOAT&&(P=r.RGBA32F),U===r.HALF_FLOAT&&(P=r.RGBA16F),U===r.UNSIGNED_BYTE&&(P=M===Ge?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)}return P!==r.R16F&&P!==r.R32F&&P!==r.RG16F&&P!==r.RG32F&&P!==r.RGBA16F&&P!==r.RGBA32F||e.get("EXT_color_buffer_float"),P}function x(T,S){let U;return T?S===null||S===Zi||S===Ln?U=r.DEPTH24_STENCIL8:S===$t?U=r.DEPTH32F_STENCIL8:S===dr&&(U=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zi||S===Ln?U=r.DEPTH_COMPONENT24:S===$t?U=r.DEPTH_COMPONENT32F:S===dr&&(U=r.DEPTH_COMPONENT16),U}function A(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==fi?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function E(T){let S=T.target;S.removeEventListener("dispose",E),(function(U){let L=i.get(U);if(L.__webglInit===void 0)return;let R=U.source,P=d.get(R);if(P){let M=P[L.__cacheKey];M.usedTimes--,M.usedTimes===0&&D(U),Object.keys(P).length===0&&d.delete(R)}i.remove(U)})(S),S.isVideoTexture&&c.delete(S)}function I(T){let S=T.target;S.removeEventListener("dispose",I),(function(U){let L=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(L.__webglFramebuffer[P]))for(let M=0;M<L.__webglFramebuffer[P].length;M++)r.deleteFramebuffer(L.__webglFramebuffer[P][M]);else r.deleteFramebuffer(L.__webglFramebuffer[P]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[P])}else{if(Array.isArray(L.__webglFramebuffer))for(let P=0;P<L.__webglFramebuffer.length;P++)r.deleteFramebuffer(L.__webglFramebuffer[P]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let P=0;P<L.__webglColorRenderbuffer.length;P++)L.__webglColorRenderbuffer[P]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[P]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let R=U.textures;for(let P=0,M=R.length;P<M;P++){let C=i.get(R[P]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(R[P])}i.remove(U)})(S)}function D(T){let S=i.get(T);r.deleteTexture(S.__webglTexture);let U=T.source;delete d.get(U)[S.__cacheKey],a.memory.textures--}let N=0;function B(T,S){let U=i.get(T);if(T.isVideoTexture&&(function(L){let R=a.render.frame;c.get(L)!==R&&(c.set(L,R),L.update())})(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let L=T.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(L.complete!==!1)return void J(U,T,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}let G={[cr]:r.REPEAT,[ur]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},z={[Gt]:r.NEAREST,[Gd]:r.NEAREST_MIPMAP_NEAREST,[kr]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[Tn]:r.LINEAR_MIPMAP_LINEAR},X={[Wd]:r.NEVER,[Kd]:r.ALWAYS,[Xd]:r.LESS,[qd]:r.LEQUAL,[jd]:r.EQUAL,[Jd]:r.GEQUAL,[Yd]:r.GREATER,[Zd]:r.NOTEQUAL};function V(T,S){if(S.type!==$t||e.has("OES_texture_float_linear")!==!1||S.magFilter!==fi&&S.magFilter!==Ha&&S.magFilter!==kr&&S.magFilter!==Tn&&S.minFilter!==fi&&S.minFilter!==Ha&&S.minFilter!==kr&&S.minFilter!==Tn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,G[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,G[S.wrapT]),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,G[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,z[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,X[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==kr&&S.minFilter!==Tn||S.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(T,S){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));let L=S.source,R=d.get(L);R===void 0&&(R={},d.set(L,R));let P=(function(M){let C=[];return C.push(M.wrapS),C.push(M.wrapT),C.push(M.wrapR||0),C.push(M.magFilter),C.push(M.minFilter),C.push(M.anisotropy),C.push(M.internalFormat),C.push(M.format),C.push(M.type),C.push(M.generateMipmaps),C.push(M.premultiplyAlpha),C.push(M.flipY),C.push(M.unpackAlignment),C.push(M.colorSpace),C.join()})(S);if(P!==T.__cacheKey){R[P]===void 0&&(R[P]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),R[P].usedTimes++;let M=R[T.__cacheKey];M!==void 0&&(R[T.__cacheKey].usedTimes--,M.usedTimes===0&&D(S)),T.__cacheKey=P,T.__webglTexture=R[P].texture}return U}function J(T,S,U){let L=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(L=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(L=r.TEXTURE_3D);let R=q(T,S),P=S.source;t.bindTexture(L,T.__webglTexture,r.TEXTURE0+U);let M=i.get(P);if(P.version!==M.__version||R===!0){t.activeTexture(r.TEXTURE0+U);let C=ze.getPrimaries(ze.workingColorSpace),k=S.colorSpace===En?null:ze.getPrimaries(S.colorSpace),$=S.colorSpace===En||C===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let O=y(S.image,!1,n.maxTextureSize);O=pe(S,O);let Z=s.convert(S.format,S.colorSpace),Y=s.convert(S.type),Q,ce=v(S.internalFormat,Z,Y,S.colorSpace,S.isVideoTexture);V(L,S);let he=S.mipmaps,ve=S.isVideoTexture!==!0,Se=M.__version===void 0||R===!0,Fe=P.dataReady,Ue=A(S,O);if(S.isDepthTexture)ce=x(S.format===Un,S.type),Se&&(ve?t.texStorage2D(r.TEXTURE_2D,1,ce,O.width,O.height):t.texImage2D(r.TEXTURE_2D,0,ce,O.width,O.height,0,Z,Y,null));else if(S.isDataTexture)if(he.length>0){ve&&Se&&t.texStorage2D(r.TEXTURE_2D,Ue,ce,he[0].width,he[0].height);for(let _e=0,Ve=he.length;_e<Ve;_e++)Q=he[_e],ve?Fe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,Y,Q.data):t.texImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Z,Y,Q.data);S.generateMipmaps=!1}else ve?(Se&&t.texStorage2D(r.TEXTURE_2D,Ue,ce,O.width,O.height),Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,O.width,O.height,Z,Y,O.data)):t.texImage2D(r.TEXTURE_2D,0,ce,O.width,O.height,0,Z,Y,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ve&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,ce,he[0].width,he[0].height,O.depth);for(let _e=0,Ve=he.length;_e<Ve;_e++)if(Q=he[_e],S.format!==Vt)if(Z!==null)if(ve){if(Fe)if(S.layerUpdates.size>0){let qe=Zc(Q.width,Q.height,S.format,S.type);for(let tt of S.layerUpdates){let fe=Q.data.subarray(tt*qe/Q.data.BYTES_PER_ELEMENT,(tt+1)*qe/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,tt,Q.width,Q.height,1,Z,fe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Q.width,Q.height,O.depth,Z,Q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,ce,Q.width,Q.height,O.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Q.width,Q.height,O.depth,Z,Y,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,ce,Q.width,Q.height,O.depth,0,Z,Y,Q.data)}else{ve&&Se&&t.texStorage2D(r.TEXTURE_2D,Ue,ce,he[0].width,he[0].height);for(let _e=0,Ve=he.length;_e<Ve;_e++)Q=he[_e],S.format!==Vt?Z!==null?ve?Fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Fe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Q.width,Q.height,Z,Y,Q.data):t.texImage2D(r.TEXTURE_2D,_e,ce,Q.width,Q.height,0,Z,Y,Q.data)}else if(S.isDataArrayTexture)if(ve){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,ce,O.width,O.height,O.depth),Fe)if(S.layerUpdates.size>0){let _e=Zc(O.width,O.height,S.format,S.type);for(let Ve of S.layerUpdates){let qe=O.data.subarray(Ve*_e/O.data.BYTES_PER_ELEMENT,(Ve+1)*_e/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ve,O.width,O.height,1,Z,Y,qe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,Z,Y,O.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,O.width,O.height,O.depth,0,Z,Y,O.data);else if(S.isData3DTexture)ve?(Se&&t.texStorage3D(r.TEXTURE_3D,Ue,ce,O.width,O.height,O.depth),Fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,Z,Y,O.data)):t.texImage3D(r.TEXTURE_3D,0,ce,O.width,O.height,O.depth,0,Z,Y,O.data);else if(S.isFramebufferTexture){if(Se)if(ve)t.texStorage2D(r.TEXTURE_2D,Ue,ce,O.width,O.height);else{let _e=O.width,Ve=O.height;for(let qe=0;qe<Ue;qe++)t.texImage2D(r.TEXTURE_2D,qe,ce,_e,Ve,0,Z,Y,null),_e>>=1,Ve>>=1}}else if(he.length>0){if(ve&&Se){let _e=le(he[0]);t.texStorage2D(r.TEXTURE_2D,Ue,ce,_e.width,_e.height)}for(let _e=0,Ve=he.length;_e<Ve;_e++)Q=he[_e],ve?Fe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Z,Y,Q):t.texImage2D(r.TEXTURE_2D,_e,ce,Z,Y,Q);S.generateMipmaps=!1}else if(ve){if(Se){let _e=le(O);t.texStorage2D(r.TEXTURE_2D,Ue,ce,_e.width,_e.height)}Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,Y,O)}else t.texImage2D(r.TEXTURE_2D,0,ce,Z,Y,O);f(S)&&g(L),M.__version=P.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ne(T,S,U,L,R,P){let M=s.convert(U.format,U.colorSpace),C=s.convert(U.type),k=v(U.internalFormat,M,C,U.colorSpace),$=i.get(S),O=i.get(U);if(O.__renderTarget=S,!$.__hasExternalTextures){let Z=Math.max(1,S.width>>P),Y=Math.max(1,S.height>>P);R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?t.texImage3D(R,P,k,Z,Y,S.depth,0,M,C,null):t.texImage2D(R,P,k,Z,Y,0,M,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),de(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,L,R,O.__webglTexture,0,se(S)):(R===r.TEXTURE_2D||R>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,L,R,O.__webglTexture,P),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(T,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer){let L=S.depthTexture,R=L&&L.isDepthTexture?L.type:null,P=x(S.stencilBuffer,R),M=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=se(S);de(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,P,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,P,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,P,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,T)}else{let L=S.textures;for(let R=0;R<L.length;R++){let P=L[R],M=s.convert(P.format,P.colorSpace),C=s.convert(P.type),k=v(P.internalFormat,M,C,P.colorSpace),$=se(S);U&&de(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,k,S.width,S.height):de(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,k,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,k,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(T){let S=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let L=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),L){let R=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,L.removeEventListener("dispose",R)};L.addEventListener("dispose",R),S.__depthDisposeCallback=R}S.__boundDepthTexture=L}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");(function(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let P=i.get(R.depthTexture);P.__renderTarget=R,P.__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);let M=P.__webglTexture,C=se(R);if(R.depthTexture.format===pr)de(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0);else{if(R.depthTexture.format!==Un)throw new Error("Unknown depthTexture format");de(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0)}})(S.__webglFramebuffer,T)}else if(U){S.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[L]),S.__webglDepthbuffer[L]===void 0)S.__webglDepthbuffer[L]=r.createRenderbuffer(),ie(S.__webglDepthbuffer[L],T,!1);else{let R=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=S.__webglDepthbuffer[L];r.bindRenderbuffer(r.RENDERBUFFER,P),r.framebufferRenderbuffer(r.FRAMEBUFFER,R,r.RENDERBUFFER,P)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ie(S.__webglDepthbuffer,T,!1);else{let L=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,R),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,R)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ye=[],ee=[];function se(T){return Math.min(n.maxSamples,T.samples)}function de(T){let S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(T,S){let U=T.colorSpace,L=T.format,R=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Hn&&U!==En&&(ze.getTransfer(U)===Ge?L===Vt&&R===Ri||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=function(){let T=N;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),N+=1,T},this.resetTextureUnits=function(){N=0},this.setTexture2D=B,this.setTexture2DArray=function(T,S){let U=i.get(T);T.version>0&&U.__version!==T.version?J(U,T,S):t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(T,S){let U=i.get(T);T.version>0&&U.__version!==T.version?J(U,T,S):t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(T,S){let U=i.get(T);T.version>0&&U.__version!==T.version?(function(L,R,P){if(R.image.length!==6)return;let M=q(L,R),C=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+P);let k=i.get(C);if(C.version!==k.__version||M===!0){t.activeTexture(r.TEXTURE0+P);let $=ze.getPrimaries(ze.workingColorSpace),O=R.colorSpace===En?null:ze.getPrimaries(R.colorSpace),Z=R.colorSpace===En||$===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let Y=R.isCompressedTexture||R.image[0].isCompressedTexture,Q=R.image[0]&&R.image[0].isDataTexture,ce=[];for(let fe=0;fe<6;fe++)ce[fe]=Y||Q?Q?R.image[fe].image:R.image[fe]:y(R.image[fe],!0,n.maxCubemapSize),ce[fe]=pe(R,ce[fe]);let he=ce[0],ve=s.convert(R.format,R.colorSpace),Se=s.convert(R.type),Fe=v(R.internalFormat,ve,Se,R.colorSpace),Ue=R.isVideoTexture!==!0,_e=k.__version===void 0||M===!0,Ve=C.dataReady,qe,tt=A(R,he);if(V(r.TEXTURE_CUBE_MAP,R),Y){Ue&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Fe,he.width,he.height);for(let fe=0;fe<6;fe++){qe=ce[fe].mipmaps;for(let Ne=0;Ne<qe.length;Ne++){let Xe=qe[Ne];R.format!==Vt?ve!==null?Ue?Ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,Xe.width,Xe.height,ve,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,Fe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?Ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,Xe.width,Xe.height,ve,Se,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,Fe,Xe.width,Xe.height,0,ve,Se,Xe.data)}}}else{if(qe=R.mipmaps,Ue&&_e){qe.length>0&&tt++;let fe=le(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Fe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Q){Ue?Ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ce[fe].width,ce[fe].height,ve,Se,ce[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Fe,ce[fe].width,ce[fe].height,0,ve,Se,ce[fe].data);for(let Ne=0;Ne<qe.length;Ne++){let Xe=qe[Ne].image[fe].image;Ue?Ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,Xe.width,Xe.height,ve,Se,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,Fe,Xe.width,Xe.height,0,ve,Se,Xe.data)}}else{Ue?Ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ve,Se,ce[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Fe,ve,Se,ce[fe]);for(let Ne=0;Ne<qe.length;Ne++){let Xe=qe[Ne];Ue?Ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,ve,Se,Xe.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,Fe,ve,Se,Xe.image[fe])}}}f(R)&&g(r.TEXTURE_CUBE_MAP),k.__version=C.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version})(U,T,S):t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(T,S,U){let L=i.get(T);S!==void 0&&ne(L.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&me(T)},this.setupRenderTarget=function(T){let S=T.texture,U=i.get(T),L=i.get(S);T.addEventListener("dispose",I);let R=T.textures,P=T.isWebGLCubeRenderTarget===!0,M=R.length>1;if(M||(L.__webglTexture===void 0&&(L.__webglTexture=r.createTexture()),L.__version=S.version,a.memory.textures++),P){U.__webglFramebuffer=[];for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[C]=[];for(let k=0;k<S.mipmaps.length;k++)U.__webglFramebuffer[C][k]=r.createFramebuffer()}else U.__webglFramebuffer[C]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let C=0;C<S.mipmaps.length;C++)U.__webglFramebuffer[C]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(M)for(let C=0,k=R.length;C<k;C++){let $=i.get(R[C]);$.__webglTexture===void 0&&($.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&de(T)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let C=0;C<R.length;C++){let k=R[C];U.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[C]);let $=s.convert(k.format,k.colorSpace),O=s.convert(k.type),Z=v(k.internalFormat,$,O,k.colorSpace,T.isXRRenderTarget===!0),Y=se(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Z,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,U.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(P){t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture),V(r.TEXTURE_CUBE_MAP,S);for(let C=0;C<6;C++)if(S.mipmaps&&S.mipmaps.length>0)for(let k=0;k<S.mipmaps.length;k++)ne(U.__webglFramebuffer[C][k],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,k);else ne(U.__webglFramebuffer[C],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let C=0,k=R.length;C<k;C++){let $=R[C],O=i.get($);t.bindTexture(r.TEXTURE_2D,O.__webglTexture),V(r.TEXTURE_2D,$),ne(U.__webglFramebuffer,T,$,r.COLOR_ATTACHMENT0+C,r.TEXTURE_2D,0),f($)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(C=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,L.__webglTexture),V(C,S),S.mipmaps&&S.mipmaps.length>0)for(let k=0;k<S.mipmaps.length;k++)ne(U.__webglFramebuffer[k],T,S,r.COLOR_ATTACHMENT0,C,k);else ne(U.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,C,0);f(S)&&g(C),t.unbindTexture()}T.depthBuffer&&me(T)},this.updateRenderTargetMipmap=function(T){let S=T.textures;for(let U=0,L=S.length;U<L;U++){let R=S[U];if(f(R)){let P=_(T),M=i.get(R).__webglTexture;t.bindTexture(P,M),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(de(T)===!1){let S=T.textures,U=T.width,L=T.height,R=r.COLOR_BUFFER_BIT,P=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,M=i.get(T),C=S.length>1;if(C)for(let k=0;k<S.length;k++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let k=0;k<S.length;k++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(R|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(R|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,M.__webglColorRenderbuffer[k]);let $=i.get(S[k]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,U,L,0,0,U,L,R,r.NEAREST),l===!0&&(ye.length=0,ee.length=0,ye.push(r.COLOR_ATTACHMENT0+k),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ye.push(P),ee.push(P),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let k=0;k<S.length;k++){t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,M.__webglColorRenderbuffer[k]);let $=i.get(S[k]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=de}function zf(r,e){return{convert:function(t,i=""){let n,s=ze.getTransfer(i);if(t===Ri)return r.UNSIGNED_BYTE;if(t===sh)return r.UNSIGNED_SHORT_4_4_4_4;if(t===ah)return r.UNSIGNED_SHORT_5_5_5_1;if(t===yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===vu)return r.BYTE;if(t===_u)return r.SHORT;if(t===dr)return r.UNSIGNED_SHORT;if(t===rh)return r.INT;if(t===Zi)return r.UNSIGNED_INT;if(t===$t)return r.FLOAT;if(t===Er)return r.HALF_FLOAT;if(t===xu)return r.ALPHA;if(t===Mu)return r.RGB;if(t===Vt)return r.RGBA;if(t===bu)return r.LUMINANCE;if(t===Su)return r.LUMINANCE_ALPHA;if(t===pr)return r.DEPTH_COMPONENT;if(t===Un)return r.DEPTH_STENCIL;if(t===wu)return r.RED;if(t===oh)return r.RED_INTEGER;if(t===Eu)return r.RG;if(t===lh)return r.RG_INTEGER;if(t===hh)return r.RGBA_INTEGER;if(t===ms||t===gs||t===vs||t===_s)if(s===Ge){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===ms)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===gs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===vs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===_s)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===ms)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===gs)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===vs)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===_s)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Po||t===Lo||t===Uo||t===Do){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Po)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Lo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Uo)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Do)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===No||t===Oo||t===ko){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===No||t===Oo)return s===Ge?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===ko)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Fo||t===Bo||t===zo||t===Ho||t===Vo||t===Go||t===Wo||t===Xo||t===jo||t===qo||t===Yo||t===Zo||t===Jo||t===Ko){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Fo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Bo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===zo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Ho)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Vo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Go)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Wo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Xo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===jo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===qo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Yo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Zo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Jo)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Ko)return s===Ge?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===ys||t===$o||t===Qo){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===ys)return s===Ge?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===$o)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Qo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Tu||t===el||t===tl||t===il){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===ys)return n.COMPRESSED_RED_RGTC1_EXT;if(t===el)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===tl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===il)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ln?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var yl=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hf={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),g=this._getHandJoint(h,y);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;h.inputState.pinching&&d>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new wt;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ii({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends Ci{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,m=null,y=new xl,f=t.getContextAttributes(),g=null,_=null,v=[],x=[],A=new te,E=null,I=new bt;I.viewport=new Ke;let D=new bt;D.viewport=new Ke;let N=[I,D],B=new yl,G=null,z=null;function X(ee){let se=x.indexOf(ee.inputSource);if(se===-1)return;let de=v[se];de!==void 0&&(de.update(ee.inputSource,ee.frame,h||a),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",q);for(let ee=0;ee<v.length;ee++){let se=x[ee];se!==null&&(x[ee]=null,v[ee].disconnect(se))}G=null,z=null,y.reset(),e.setRenderTarget(g),p=null,d=null,u=null,n=null,_=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}function q(ee){for(let se=0;se<ee.removed.length;se++){let de=ee.removed[se],pe=x.indexOf(de);pe>=0&&(x[pe]=null,v[pe].disconnect(de))}for(let se=0;se<ee.added.length;se++){let de=ee.added[se],pe=x.indexOf(de);if(pe===-1){for(let T=0;T<v.length;T++){if(T>=x.length){x.push(de),pe=T;break}if(x[T]===null){x[T]=de,pe=T;break}}if(pe===-1)break}let le=v[pe];le&&le.connect(de)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=v[ee];return se===void 0&&(se=new or,v[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=v[ee];return se===void 0&&(se=new or,v[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=v[ee];return se===void 0&&(se=new or,v[ee]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",V),n.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),n.renderState.layers===void 0){let se={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,se),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new gi(p.framebufferWidth,p.framebufferHeight,{format:Vt,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let se=null,de=null,pe=null;f.depth&&(pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=f.stencil?Un:pr,de=f.stencil?Ln:Zi);let le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(le),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gi(d.textureWidth,d.textureHeight,{format:Vt,type:Ri,depthTexture:new Is(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),ye.setContext(n),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let J=new w,ne=new w;function ie(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let se=ee.near,de=ee.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(de=y.depthFar)),B.near=D.near=I.near=se,B.far=D.far=I.far=de,G===B.near&&z===B.far||(n.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,z=B.far),I.layers.mask=2|ee.layers.mask,D.layers.mask=4|ee.layers.mask,B.layers.mask=I.layers.mask|D.layers.mask;let pe=ee.parent,le=B.cameras;ie(B,pe);for(let T=0;T<le.length;T++)ie(le[T],pe);le.length===2?(function(T,S,U){J.setFromMatrixPosition(S.matrixWorld),ne.setFromMatrixPosition(U.matrixWorld);let L=J.distanceTo(ne),R=S.projectionMatrix.elements,P=U.projectionMatrix.elements,M=R[14]/(R[10]-1),C=R[14]/(R[10]+1),k=(R[9]+1)/R[5],$=(R[9]-1)/R[5],O=(R[8]-1)/R[0],Z=(P[8]+1)/P[0],Y=M*O,Q=M*Z,ce=L/(-O+Z),he=ce*-O;if(S.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(he),T.translateZ(ce),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),R[10]===-1)T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let ve=M+ce,Se=C+ce,Fe=Y-he,Ue=Q+(L-he),_e=k*C/Se*ve,Ve=$*C/Se*ve;T.projectionMatrix.makePerspective(Fe,Ue,_e,Ve,ve,Se),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(B,I,D):B.projectionMatrix.copy(I.projectionMatrix),(function(T,S,U){U===null?T.matrix.copy(S.matrixWorld):(T.matrix.copy(U.matrixWorld),T.matrix.invert(),T.matrix.multiply(S.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*sl*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(ee,B,pe)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)};let me=null,ye=new Iu;ye.setAnimationLoop((function(ee,se){if(c=se.getViewerPose(h||a),m=se,c!==null){let de=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;de.length!==B.cameras.length&&(B.cameras.length=0,pe=!0);for(let T=0;T<de.length;T++){let S=de[T],U=null;if(p!==null)U=p.getViewport(S);else{let R=u.getViewSubImage(d,S);U=R.viewport,T===0&&(e.setRenderTargetTextures(_,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(_))}let L=N[T];L===void 0&&(L=new bt,L.layers.enable(T),L.viewport=new Ke,N[T]=L),L.matrix.fromArray(S.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(S.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(U.x,U.y,U.width,U.height),T===0&&(B.matrix.copy(L.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),pe===!0&&B.cameras.push(L)}let le=n.enabledFeatures;if(le&&le.includes("depth-sensing")){let T=u.getDepthInformation(de[0]);T&&T.isValid&&T.texture&&y.init(e,T,n.renderState)}}for(let de=0;de<v.length;de++){let pe=x[de],le=v[de];pe!==null&&le!==void 0&&le.update(pe,se,h||a)}me&&me(ee,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null})),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}},Wi=new Lt,Vf=new Me;function Gf(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===1&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===1&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,Wi.copy(l),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),n.envMapRotation.value.setFromMatrix4(Vf.makeRotationFromEuler(Wi)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Cu(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===1&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(h,c){c.matcap&&(h.matcap.value=c.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(h,c){let u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale})(n,s)):s.isPointsMaterial?(function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Wf(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let y=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let g=m[f];if(typeof y=="number"||typeof y=="boolean"){if(g!==y)return m[f]=y,!0}else if(g.equals(y)===!1)return g.copy(y),!0}return!1}function h(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(f){let g=f.uniforms,_=0,v=16;for(let A=0,E=g.length;A<E;A++){let I=Array.isArray(g[A])?g[A]:[g[A]];for(let D=0,N=I.length;D<N;D++){let B=I[D],G=Array.isArray(B.value)?B.value:[B.value];for(let z=0,X=G.length;z<X;z++){let V=h(G[z]),q=_%v,J=q%V.boundary,ne=q+J;_+=J,ne!==0&&v-ne<V.storage&&(_+=v-ne),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=V.storage}}}let x=_%v;x>0&&(_+=v-x),f.__size=_,f.__cache={}})(u),p=(function(f){let g=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let _=r.createBuffer(),v=f.__size,x=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_})(u),n[u.id]=p,u.addEventListener("dispose",c));let m=d.program;i.updateUBOMapping(u,m);let y=e.render.frame;s[u.id]!==y&&((function(f){let g=n[f.id],_=f.uniforms,v=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let x=0,A=_.length;x<A;x++){let E=Array.isArray(_[x])?_[x]:[_[x]];for(let I=0,D=E.length;I<D;I++){let N=E[I];if(l(N,x,I,v)===!0){let B=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],z=0;for(let X=0;X<G.length;X++){let V=G[X],q=h(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,B+z,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=y)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var Ps=class{constructor(e={}){let{canvas:t=Qd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),y=new Int32Array(4),f=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=0,this.toneMappingExposure=1;let x=this,A=!1,E=0,I=0,D=null,N=-1,B=null,G=new Ke,z=new Ke,X=null,V=new we(0),q=0,J=t.width,ne=t.height,ie=1,me=null,ye=null,ee=new Ke(0,0,J,ne),se=new Ke(0,0,J,ne),de=!1,pe=new kn,le=!1,T=!1,S=new Me,U=new Me,L=new w,R=new Ke,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function C(){return D===null?ie:1}let k,$,O,Z,Y,Q,ce,he,ve,Se,Fe,Ue,_e,Ve,qe,tt,fe,Ne,Xe,an,Dr,Nt,Yt,Ni,F=i;function Yn(b,H){return t.getContext(b,H)}try{let b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Bh,!1),t.addEventListener("webglcontextrestored",zh,!1),t.addEventListener("webglcontextcreationerror",Hh,!1),F===null){let H="webgl2";if(F=Yn(H,b),F===null)throw Yn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Fh(){k=new wp(F),k.init(),Nt=new zf(F,k),$=new xp(F,k,e,Nt),O=new Ff(F,k),$.reverseDepthBuffer&&d&&O.buffers.depth.setReversed(!0),Z=new Ap(F),Y=new Rf,Q=new Bf(F,k,O,Y,$,Nt,Z),ce=new bp(x),he=new Sp(x),ve=new mp(F),Yt=new _p(F,ve),Se=new Ep(F,ve,Z,Yt),Fe=new Cp(F,Se,ve,Z),Xe=new Rp(F,$,Q),tt=new Mp(Y),Ue=new Af(x,ce,he,k,$,Yt,tt),_e=new Gf(x,Y),Ve=new If,qe=new Nf(k),Ne=new vp(x,ce,he,O,Fe,p,l),fe=new Of(x,Fe,$),Ni=new Wf(F,Z,$,O),an=new yp(F,k,Z),Dr=new Tp(F,k,Z),Z.programs=Ue.programs,x.capabilities=$,x.extensions=k,x.properties=Y,x.renderLists=Ve,x.shadowMap=fe,x.state=O,x.info=Z}Fh();let ct=new Ml(x,F);function Bh(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function zh(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=Z.autoReset,H=fe.enabled,j=fe.autoUpdate,K=fe.needsUpdate,W=fe.type;Fh(),Z.autoReset=b,fe.enabled=H,fe.autoUpdate=j,fe.needsUpdate=K,fe.type=W}function Hh(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vh(b){let H=b.target;H.removeEventListener("dispose",Vh),(function(j){(function(K){let W=Y.get(K).programs;W!==void 0&&(W.forEach((function(re){Ue.releaseProgram(re)})),K.isShaderMaterial&&Ue.releaseShaderCache(K))})(j),Y.remove(j)})(H)}function Gh(b,H,j){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,Or(b,H,j),b.side=0,b.needsUpdate=!0,Or(b,H,j),b.side=2):Or(b,H,j)}this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=k.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=k.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(J,ne,!1))},this.getSize=function(b){return b.set(J,ne)},this.setSize=function(b,H,j=!0){ct.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=b,ne=H,t.width=Math.floor(b*ie),t.height=Math.floor(H*ie),j===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H))},this.getDrawingBufferSize=function(b){return b.set(J*ie,ne*ie).floor()},this.setDrawingBufferSize=function(b,H,j){J=b,ne=H,ie=j,t.width=Math.floor(b*j),t.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,H,j,K){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,H,j,K),O.viewport(G.copy(ee).multiplyScalar(ie).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,H,j,K){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,H,j,K),O.scissor(z.copy(se).multiplyScalar(ie).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(b){O.setScissorTest(de=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){ye=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(b=!0,H=!0,j=!0){let K=0;if(b){let W=!1;if(D!==null){let re=D.texture.format;W=re===hh||re===lh||re===oh}if(W){let re=D.texture.type,ue=re===Ri||re===Zi||re===dr||re===Ln||re===sh||re===ah,ge=Ne.getClearColor(),xe=Ne.getClearAlpha(),Ae=ge.r,Ce=ge.g,be=ge.b;ue?(m[0]=Ae,m[1]=Ce,m[2]=be,m[3]=xe,F.clearBufferuiv(F.COLOR,0,m)):(y[0]=Ae,y[1]=Ce,y[2]=be,y[3]=xe,F.clearBufferiv(F.COLOR,0,y))}else K|=F.COLOR_BUFFER_BIT}H&&(K|=F.DEPTH_BUFFER_BIT),j&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Bh,!1),t.removeEventListener("webglcontextrestored",zh,!1),t.removeEventListener("webglcontextcreationerror",Hh,!1),Ve.dispose(),qe.dispose(),Y.dispose(),ce.dispose(),he.dispose(),Fe.dispose(),Yt.dispose(),Ni.dispose(),Ue.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Wh),ct.removeEventListener("sessionend",Xh),Oi.stop()},this.renderBufferDirect=function(b,H,j,K,W,re){H===null&&(H=P);let ue=W.isMesh&&W.matrixWorld.determinant()<0,ge=(function(ke,yt,ft,Pe,Ee){yt.isScene!==!0&&(yt=P),Q.resetTextureUnits();let Ot=yt.fog,Na=Pe.isMeshStandardMaterial?yt.environment:null,Zn=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Hn,on=(Pe.isMeshStandardMaterial?he:ce).get(Pe.envMap||Na),Oa=Pe.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ka=!!ft.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),Fa=!!ft.morphAttributes.position,yi=!!ft.morphAttributes.normal,fd=!!ft.morphAttributes.color,Kh=0;Pe.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Kh=x.toneMapping));let $h=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,md=$h!==void 0?$h.length:0,Oe=Y.get(Pe),gd=g.state.lights;if(le===!0&&(T===!0||ke!==B)){let Ct=ke===B&&Pe.id===N;tt.setState(Pe,ke,Ct)}let kt=!1;Pe.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==gd.state.version||Oe.outputColorSpace!==Zn||Ee.isBatchedMesh&&Oe.batching===!1?kt=!0:Ee.isBatchedMesh||Oe.batching!==!0?Ee.isBatchedMesh&&Oe.batchingColor===!0&&Ee.colorTexture===null||Ee.isBatchedMesh&&Oe.batchingColor===!1&&Ee.colorTexture!==null||Ee.isInstancedMesh&&Oe.instancing===!1?kt=!0:Ee.isInstancedMesh||Oe.instancing!==!0?Ee.isSkinnedMesh&&Oe.skinning===!1?kt=!0:Ee.isSkinnedMesh||Oe.skinning!==!0?Ee.isInstancedMesh&&Oe.instancingColor===!0&&Ee.instanceColor===null||Ee.isInstancedMesh&&Oe.instancingColor===!1&&Ee.instanceColor!==null||Ee.isInstancedMesh&&Oe.instancingMorph===!0&&Ee.morphTexture===null||Ee.isInstancedMesh&&Oe.instancingMorph===!1&&Ee.morphTexture!==null||Oe.envMap!==on||Pe.fog===!0&&Oe.fog!==Ot?kt=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===tt.numPlanes&&Oe.numIntersection===tt.numIntersection?(Oe.vertexAlphas!==Oa||Oe.vertexTangents!==ka||Oe.morphTargets!==Fa||Oe.morphNormals!==yi||Oe.morphColors!==fd||Oe.toneMapping!==Kh||Oe.morphTargetsCount!==md)&&(kt=!0):kt=!0:kt=!0:kt=!0:kt=!0:(kt=!0,Oe.__version=Pe.version);let ki=Oe.currentProgram;kt===!0&&(ki=Or(Pe,yt,Ee));let Qh=!1,Jn=!1,Ba=!1,rt=ki.getUniforms(),xi=Oe.uniforms;if(O.useProgram(ki.program)&&(Qh=!0,Jn=!0,Ba=!0),Pe.id!==N&&(N=Pe.id,Jn=!0),Qh||B!==ke){O.buffers.depth.getReversed()?(S.copy(ke.projectionMatrix),(function(Fi){let Qe=Fi.elements;Qe[2]=.5*Qe[2]+.5*Qe[3],Qe[6]=.5*Qe[6]+.5*Qe[7],Qe[10]=.5*Qe[10]+.5*Qe[11],Qe[14]=.5*Qe[14]+.5*Qe[15]})(S),(function(Fi){let Qe=Fi.elements;Qe[11]===-1?(Qe[10]=-Qe[10]-1,Qe[14]=-Qe[14]):(Qe[10]=-Qe[10],Qe[14]=1-Qe[14])})(S),rt.setValue(F,"projectionMatrix",S)):rt.setValue(F,"projectionMatrix",ke.projectionMatrix),rt.setValue(F,"viewMatrix",ke.matrixWorldInverse);let Ct=rt.map.cameraPosition;Ct!==void 0&&Ct.setValue(F,L.setFromMatrixPosition(ke.matrixWorld)),$.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&rt.setValue(F,"isOrthographic",ke.isOrthographicCamera===!0),B!==ke&&(B=ke,Jn=!0,Ba=!0)}if(Ee.isSkinnedMesh){rt.setOptional(F,Ee,"bindMatrix"),rt.setOptional(F,Ee,"bindMatrixInverse");let Ct=Ee.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),rt.setValue(F,"boneTexture",Ct.boneTexture,Q))}Ee.isBatchedMesh&&(rt.setOptional(F,Ee,"batchingTexture"),rt.setValue(F,"batchingTexture",Ee._matricesTexture,Q),rt.setOptional(F,Ee,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",Ee._indirectTexture,Q),rt.setOptional(F,Ee,"batchingColorTexture"),Ee._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",Ee._colorsTexture,Q));let za=ft.morphAttributes;za.position===void 0&&za.normal===void 0&&za.color===void 0||Xe.update(Ee,ft,ki),(Jn||Oe.receiveShadow!==Ee.receiveShadow)&&(Oe.receiveShadow=Ee.receiveShadow,rt.setValue(F,"receiveShadow",Ee.receiveShadow)),Pe.isMeshGouraudMaterial&&Pe.envMap!==null&&(xi.envMap.value=on,xi.flipEnvMap.value=on.isCubeTexture&&on.isRenderTargetTexture===!1?-1:1),Pe.isMeshStandardMaterial&&Pe.envMap===null&&yt.environment!==null&&(xi.envMapIntensity.value=yt.environmentIntensity),Jn&&(rt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&(Ft=Ba,(Zt=xi).ambientLightColor.needsUpdate=Ft,Zt.lightProbe.needsUpdate=Ft,Zt.directionalLights.needsUpdate=Ft,Zt.directionalLightShadows.needsUpdate=Ft,Zt.pointLights.needsUpdate=Ft,Zt.pointLightShadows.needsUpdate=Ft,Zt.spotLights.needsUpdate=Ft,Zt.spotLightShadows.needsUpdate=Ft,Zt.rectAreaLights.needsUpdate=Ft,Zt.hemisphereLights.needsUpdate=Ft),Ot&&Pe.fog===!0&&_e.refreshFogUniforms(xi,Ot),_e.refreshMaterialUniforms(xi,Pe,ie,ne,g.state.transmissionRenderTarget[ke.id]),Cn.upload(F,Zh(Oe),xi,Q));var Zt,Ft;if(Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(Cn.upload(F,Zh(Oe),xi,Q),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&rt.setValue(F,"center",Ee.center),rt.setValue(F,"modelViewMatrix",Ee.modelViewMatrix),rt.setValue(F,"normalMatrix",Ee.normalMatrix),rt.setValue(F,"modelMatrix",Ee.matrixWorld),Pe.isShaderMaterial||Pe.isRawShaderMaterial){let Ct=Pe.uniformsGroups;for(let Fi=0,Qe=Ct.length;Fi<Qe;Fi++){let ec=Ct[Fi];Ni.update(ec,ki),Ni.bind(ec,ki)}}return ki})(b,H,j,K,W);O.setMaterial(K,ue);let xe=j.index,Ae=1;if(K.wireframe===!0){if(xe=Se.getWireframeAttribute(j),xe===void 0)return;Ae=2}let Ce=j.drawRange,be=j.attributes.position,De=Ce.start*Ae,nt=(Ce.start+Ce.count)*Ae;re!==null&&(De=Math.max(De,re.start*Ae),nt=Math.min(nt,(re.start+re.count)*Ae)),xe!==null?(De=Math.max(De,0),nt=Math.min(nt,xe.count)):be!=null&&(De=Math.max(De,0),nt=Math.min(nt,be.count));let Ye=nt-De;if(Ye<0||Ye===1/0)return;let ot;Yt.setup(W,K,ge,j,xe);let Je=an;if(xe!==null&&(ot=ve.get(xe),Je=Dr,Je.setIndex(ot)),W.isMesh)K.wireframe===!0?(O.setLineWidth(K.wireframeLinewidth*C()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(W.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),O.setLineWidth(ke*C()),W.isLineSegments?Je.setMode(F.LINES):W.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else W.isPoints?Je.setMode(F.POINTS):W.isSprite&&Je.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ke=W._multiDrawStarts,yt=W._multiDrawCounts,ft=W._multiDrawCount,Pe=xe?ve.get(xe).bytesPerElement:1,Ee=Y.get(K).currentProgram.getUniforms();for(let Ot=0;Ot<ft;Ot++)Ee.setValue(F,"_gl_DrawID",Ot),Je.render(ke[Ot]/Pe,yt[Ot])}else if(W.isInstancedMesh)Je.renderInstances(De,Ye,W.count);else if(j.isInstancedBufferGeometry){let ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yt=Math.min(j.instanceCount,ke);Je.renderInstances(De,Ye,yt)}else Je.render(De,Ye)},this.compile=function(b,H,j=null){j===null&&(j=b),g=qe.get(j),g.init(H),v.push(g),j.traverseVisible((function(W){W.isLight&&W.layers.test(H.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),b!==j&&b.traverseVisible((function(W){W.isLight&&W.layers.test(H.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();let K=new Set;return b.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let re=W.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){let ge=re[ue];Gh(ge,j,W),K.add(ge)}else Gh(re,j,W),K.add(re)})),v.pop(),g=null,K},this.compileAsync=function(b,H,j=null){let K=this.compile(b,H,j);return new Promise((W=>{function re(){K.forEach((function(ue){Y.get(ue).currentProgram.isReady()&&K.delete(ue)})),K.size!==0?setTimeout(re,10):W(b)}k.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)}))};let Ua=null;function Wh(){Oi.stop()}function Xh(){Oi.start()}let Oi=new Iu;function Da(b,H,j,K){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pe.intersectsSprite(b)){K&&R.setFromMatrixPosition(b.matrixWorld).applyMatrix4(U);let re=Fe.update(b),ue=b.material;ue.visible&&f.push(b,re,ue,j,R.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pe.intersectsObject(b))){let re=Fe.update(b),ue=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),R.copy(b.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),R.copy(re.boundingSphere.center)),R.applyMatrix4(b.matrixWorld).applyMatrix4(U)),Array.isArray(ue)){let ge=re.groups;for(let xe=0,Ae=ge.length;xe<Ae;xe++){let Ce=ge[xe],be=ue[Ce.materialIndex];be&&be.visible&&f.push(b,re,be,j,R.z,Ce)}}else ue.visible&&f.push(b,re,ue,j,R.z,null)}}let W=b.children;for(let re=0,ue=W.length;re<ue;re++)Da(W[re],H,j,K)}function jh(b,H,j,K){let W=b.opaque,re=b.transmissive,ue=b.transparent;g.setupLightsView(j),le===!0&&tt.setGlobalState(x.clippingPlanes,j),K&&O.viewport(G.copy(K)),W.length>0&&Nr(W,H,j),re.length>0&&Nr(re,H,j),ue.length>0&&Nr(ue,H,j),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function qh(b,H,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new gi(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Er:Ri,minFilter:Tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let W=g.state.transmissionRenderTarget[K.id],re=K.viewport||G;W.setSize(re.z,re.w);let ue=x.getRenderTarget();x.setRenderTarget(W),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),M&&Ne.render(j);let ge=x.toneMapping;x.toneMapping=0;let xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),le===!0&&tt.setGlobalState(x.clippingPlanes,K),Nr(b,j,K),Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Ce=0,be=H.length;Ce<be;Ce++){let De=H[Ce],nt=De.object,Ye=De.geometry,ot=De.material,Je=De.group;if(ot.side===2&&nt.layers.test(K.layers)){let ke=ot.side;ot.side=1,ot.needsUpdate=!0,Yh(nt,j,K,Ye,ot,Je),ot.side=ke,ot.needsUpdate=!0,Ae=!0}}Ae===!0&&(Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W))}x.setRenderTarget(ue),x.setClearColor(V,q),xe!==void 0&&(K.viewport=xe),x.toneMapping=ge}function Nr(b,H,j){let K=H.isScene===!0?H.overrideMaterial:null;for(let W=0,re=b.length;W<re;W++){let ue=b[W],ge=ue.object,xe=ue.geometry,Ae=K===null?ue.material:K,Ce=ue.group;ge.layers.test(j.layers)&&Yh(ge,H,j,xe,Ae,Ce)}}function Yh(b,H,j,K,W,re){b.onBeforeRender(x,H,j,K,W,re),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(x,H,j,K,b,re),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,x.renderBufferDirect(j,H,K,W,b,re),W.side=0,W.needsUpdate=!0,x.renderBufferDirect(j,H,K,W,b,re),W.side=2):x.renderBufferDirect(j,H,K,W,b,re),b.onAfterRender(x,H,j,K,W,re)}function Or(b,H,j){H.isScene!==!0&&(H=P);let K=Y.get(b),W=g.state.lights,re=g.state.shadowsArray,ue=W.state.version,ge=Ue.getParameters(b,W.state,re,H,j),xe=Ue.getProgramCacheKey(ge),Ae=K.programs;K.environment=b.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(b.isMeshStandardMaterial?he:ce).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",Vh),Ae=new Map,K.programs=Ae);let Ce=Ae.get(xe);if(Ce!==void 0){if(K.currentProgram===Ce&&K.lightsStateVersion===ue)return Jh(b,ge),Ce}else ge.uniforms=Ue.getUniforms(b),b.onBeforeCompile(ge,x),Ce=Ue.acquireProgram(ge,xe),Ae.set(xe,Ce),K.uniforms=ge.uniforms;let be=K.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(be.clippingPlanes=tt.uniform),Jh(b,ge),K.needsLights=(function(De){return De.isMeshLambertMaterial||De.isMeshToonMaterial||De.isMeshPhongMaterial||De.isMeshStandardMaterial||De.isShadowMaterial||De.isShaderMaterial&&De.lights===!0})(b),K.lightsStateVersion=ue,K.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.directionalShadowMap.value=W.state.directionalShadowMap,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotShadowMap.value=W.state.spotShadowMap,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMap.value=W.state.pointShadowMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ce,K.uniformsList=null,Ce}function Zh(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=Cn.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Jh(b,H){let j=Y.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}Oi.setAnimationLoop((function(b){Ua&&Ua(b)})),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(b){Ua=b,ct.setAnimationLoop(b),b===null?Oi.stop():Oi.start()},ct.addEventListener("sessionstart",Wh),ct.addEventListener("sessionend",Xh),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(H),H=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,H,D),g=qe.get(b,v.length),g.init(H),v.push(g),U.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),pe.setFromProjectionMatrix(U),T=this.localClippingEnabled,le=tt.init(this.clippingPlanes,T),f=Ve.get(b,_.length),f.init(),_.push(f),ct.enabled===!0&&ct.isPresenting===!0){let re=x.xr.getDepthSensingMesh();re!==null&&Da(re,H,-1/0,x.sortObjects)}Da(b,H,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(me,ye),M=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,M&&Ne.addToRenderList(f,b),this.info.render.frame++,le===!0&&tt.beginShadows();let j=g.state.shadowsArray;fe.render(j,b,H),le===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=f.opaque,W=f.transmissive;if(g.setupLights(),H.isArrayCamera){let re=H.cameras;if(W.length>0)for(let ue=0,ge=re.length;ue<ge;ue++)qh(K,W,b,re[ue]);M&&Ne.render(b);for(let ue=0,ge=re.length;ue<ge;ue++){let xe=re[ue];jh(f,b,xe,xe.viewport)}}else W.length>0&&qh(K,W,b,H),M&&Ne.render(b),jh(f,b,H);D!==null&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,H),Yt.resetDefaultState(),N=-1,B=null,v.pop(),v.length>0?(g=v[v.length-1],le===!0&&tt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,_.pop(),f=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,H,j){Y.get(b.texture).__webglTexture=H,Y.get(b.depthTexture).__webglTexture=j;let K=Y.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){let j=Y.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){D=b,E=H,I=j;let K=!0,W=null,re=!1,ue=!1;if(b){let ge=Y.get(b);if(ge.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(ge.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(ge.__hasExternalTextures)Q.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ce=b.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Y.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}let xe=b.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let Ae=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Array.isArray(Ae[H])?Ae[H][j]:Ae[H],re=!0):W=b.samples>0&&Q.useMultisampledRTT(b)===!1?Y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?Ae[j]:Ae,G.copy(b.viewport),z.copy(b.scissor),X=b.scissorTest}else G.copy(ee).multiplyScalar(ie).floor(),z.copy(se).multiplyScalar(ie).floor(),X=de;if(O.bindFramebuffer(F.FRAMEBUFFER,W)&&K&&O.drawBuffers(b,W),O.viewport(G),O.scissor(z),O.setScissorTest(X),re){let ge=Y.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge.__webglTexture,j)}else if(ue){let ge=Y.get(b.texture),xe=H||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,j||0,xe)}N=-1},this.readRenderTargetPixels=function(b,H,j,K,W,re,ue){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){O.bindFramebuffer(F.FRAMEBUFFER,ge);try{let xe=b.texture,Ae=xe.format,Ce=xe.type;if(!$.textureFormatReadable(Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=b.width-K&&j>=0&&j<=b.height-W&&F.readPixels(H,j,K,W,Nt.convert(Ae),Nt.convert(Ce),re)}finally{let xe=D!==null?Y.get(D).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,K,W,re,ue){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){let xe=b.texture,Ae=xe.format,Ce=xe.type;if(!$.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-K&&j>=0&&j<=b.height-W){O.bindFramebuffer(F.FRAMEBUFFER,ge);let be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),F.readPixels(H,j,K,W,Nt.convert(Ae),Nt.convert(Ce),0);let De=D!==null?Y.get(D).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,De);let nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await(function(Ye,ot,Je){return new Promise((function(ke,yt){setTimeout((function ft(){switch(Ye.clientWaitSync(ot,Ye.SYNC_FLUSH_COMMANDS_BIT,0)){case Ye.WAIT_FAILED:yt();break;case Ye.TIMEOUT_EXPIRED:setTimeout(ft,Je);break;default:ke()}}),Je)}))})(F,nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(be),F.deleteSync(nt),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,j=0){b.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);let K=Math.pow(2,-j),W=Math.floor(b.image.width*K),re=Math.floor(b.image.height*K),ue=H!==null?H.x:0,ge=H!==null?H.y:0;Q.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,ue,ge,W,re),O.unbindTexture()},this.copyTextureToTexture=function(b,H,j=null,K=null,W=0){let re,ue,ge,xe,Ae,Ce,be,De,nt;b.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],H=arguments[2],W=arguments[3]||0,j=null);let Ye=b.isCompressedTexture?b.mipmaps[W]:b.image;j!==null?(re=j.max.x-j.min.x,ue=j.max.y-j.min.y,ge=j.isBox3?j.max.z-j.min.z:1,xe=j.min.x,Ae=j.min.y,Ce=j.isBox3?j.min.z:0):(re=Ye.width,ue=Ye.height,ge=Ye.depth||1,xe=0,Ae=0,Ce=0),K!==null?(be=K.x,De=K.y,nt=K.z):(be=0,De=0,nt=0);let ot=Nt.convert(H.format),Je=Nt.convert(H.type),ke;H.isData3DTexture?(Q.setTexture3D(H,0),ke=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),ke=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),ke=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);let yt=F.getParameter(F.UNPACK_ROW_LENGTH),ft=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Pe=F.getParameter(F.UNPACK_SKIP_PIXELS),Ee=F.getParameter(F.UNPACK_SKIP_ROWS),Ot=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ce);let Na=b.isDataArrayTexture||b.isData3DTexture,Zn=H.isDataArrayTexture||H.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let on=Y.get(b),Oa=Y.get(H),ka=Y.get(on.__renderTarget),Fa=Y.get(Oa.__renderTarget);O.bindFramebuffer(F.READ_FRAMEBUFFER,ka.__webglFramebuffer),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fa.__webglFramebuffer);for(let yi=0;yi<ge;yi++)Na&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(b).__webglTexture,W,Ce+yi),b.isDepthTexture?(Zn&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,W,nt+yi),F.blitFramebuffer(xe,Ae,re,ue,be,De,re,ue,F.DEPTH_BUFFER_BIT,F.NEAREST)):Zn?F.copyTexSubImage3D(ke,W,be,De,nt+yi,xe,Ae,re,ue):F.copyTexSubImage2D(ke,W,be,De,nt+yi,xe,Ae,re,ue);O.bindFramebuffer(F.READ_FRAMEBUFFER,null),O.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Zn?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(ke,W,be,De,nt,re,ue,ge,ot,Je,Ye.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,W,be,De,nt,re,ue,ge,ot,Ye.data):F.texSubImage3D(ke,W,be,De,nt,re,ue,ge,ot,Je,Ye):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,be,De,re,ue,ot,Je,Ye.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,be,De,Ye.width,Ye.height,ot,Ye.data):F.texSubImage2D(F.TEXTURE_2D,W,be,De,re,ue,ot,Je,Ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot),W===0&&H.generateMipmaps&&F.generateMipmap(ke),O.unbindTexture()},this.copyTextureToTexture3D=function(b,H,j=null,K=null,W=0){return b.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,b=arguments[2],H=arguments[3],W=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,j,K,W)},this.initRenderTarget=function(b){Y.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){E=0,I=0,D=null,O.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var Ls=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lt,this.environmentIntensity=1,this.environmentRotation=new Lt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xt=new w,Ds=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gr=class extends Ii{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mn,nr=new w,bn=new w,Sn=new w,wn=new te,rr=new te,Nu=new Me,rs=new w,sr=new w,ss=new w,Jc=new te,vo=new te,Kc=new te,Ns=class extends mt{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",Mn===void 0){Mn=new je;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bl(t,5);Mn.setIndex([0,1,2,0,2,3]),Mn.setAttribute("position",new Ds(i,3,0,!1)),Mn.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=Mn,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bn.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bn.multiplyScalar(-Sn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;as(rs.set(-.5,-.5,0),Sn,a,bn,n,s),as(sr.set(.5,-.5,0),Sn,a,bn,n,s),as(ss.set(.5,.5,0),Sn,a,bn,n,s),Jc.set(0,0),vo.set(1,0),Kc.set(1,1);let o=e.ray.intersectTriangle(rs,sr,ss,!1,nr);if(o===null&&(as(sr.set(-.5,.5,0),Sn,a,bn,n,s),vo.set(0,1),o=e.ray.intersectTriangle(rs,ss,sr,!1,nr),o===null))return;let l=e.ray.origin.distanceTo(nr);l<e.near||l>e.far||t.push({distance:l,point:nr.clone(),uv:pi.getInterpolation(nr,rs,sr,ss,Jc,vo,Kc,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function as(r,e,t,i,n,s){wn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(rr.x=s*wn.x-n*wn.y,rr.y=n*wn.x+s*wn.y):rr.copy(wn),r.copy(e),r.x+=rr.x,r.y+=rr.y,r.applyMatrix4(Nu)}var wg=new w,Eg=new w;var $c=new w,Qc=new Ke,eu=new Ke,Xf=new w,tu=new Me,os=new w,_o=new jt,iu=new Me,yo=new Ji,Fn=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new Me,this.bindMatrixInverse=new Me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,os),this.boundingBox.expandByPoint(os)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,os),this.boundingSphere.expandByPoint(os)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)!==!1&&(iu.copy(n).invert(),yo.copy(e.ray).applyMatrix4(iu),this.boundingBox!==null&&yo.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Qc.fromBufferAttribute(n.attributes.skinIndex,e),eu.fromBufferAttribute(n.attributes.skinWeight,e),$c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=eu.getComponent(s);if(a!==0){let o=Qc.getComponent(s);tu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Xf.copy($c).applyMatrix4(tu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},vr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sl=class extends wt{constructor(e=null,t=1,i=1,n,s,a,o,l,h=1003,c=1003,u,d){super(null,a,o,l,h,c,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nu=new Me,jf=new Me,Os=class r{constructor(e=[],t=[]){this.uuid=Qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Me;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:jf;nu.multiplyMatrices(o,t[s]),nu.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Sl(t,e,e,Vt,$t);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new vr),this.bones.push(a),this.boneInverses.push(new Me().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}};var Tg=new Me,Ag=new Me;var Rg=new Xt,Cg=new Me,Ig=new Be,Pg=new jt;var wl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},Lg=new Me,Ug=new we(1,1,1),Dg=new kn,Ng=new Xt,Og=new jt,kg=new w,Fg=new w,Bg=new w,zg=new wl,Hg=new Be;var Vg=new w,Gg=new w,Wg=new Me,Xg=new Ji,jg=new jt,qg=new w,Yg=new w;var Zg=new w,Jg=new w;var Kg=new Me,$g=new Ji,Qg=new jt,e0=new w;var vi=class extends wt{constructor(e,t,i,n,s,a,o,l,h){super(e,t,i,n,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ut=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,h=s-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(s-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new te:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,n=[],s=[],a=[],o=new w,l=new Me;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new w)}s[0]=new w,a[0]=new w;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Ut{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},El=class extends _r{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,u){let d=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var ls=new w,xo=new uh,Mo=new uh,bo=new uh,Tl=class extends Ut{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/s)+1)*s:c===0&&h===s-1&&(h=s-2,c=1),this.closed||h>0?o=n[(h-1)%s]:(ls.subVectors(n[0],n[1]).add(n[0]),o=ls);let u=n[h%s],d=n[(h+1)%s];if(this.closed||h+2<s?l=n[(h+2)%s]:(ls.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=ls),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),m<1e-4&&(m=y),f<1e-4&&(f=y),xo.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,y,f),Mo.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,y,f),bo.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,y,f)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Mo.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),bo.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(xo.calc(c),Mo.calc(c),bo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function lr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function hr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var ks=class extends Ut{constructor(e=new te,t=new te,i=new te,n=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(e,n.x,s.x,a.x,o.x),hr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends Ut{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(hr(e,n.x,s.x,a.x,o.x),hr(e,n.y,s.y,a.y,o.y),hr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fs=class extends Ut{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends Ut{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bs=class extends Ut{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends Ut{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y),lr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends Ut{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ru(o,l.x,h.x,c.x,u.x),ru(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new te().fromArray(n))}return this}},Vs=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:Tl,CubicBezierCurve:ks,CubicBezierCurve3:Al,EllipseCurve:_r,LineCurve:Fs,LineCurve3:Rl,QuadraticBezierCurve:Bs,QuadraticBezierCurve3:zs,SplineCurve:Hs}),Cl=class extends Ut{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Vs[n.type]().fromJSON(n))}return this}},yr=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fs(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Bs(this.currentPoint.clone(),new te(e,t),new te(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new ks(this.currentPoint.clone(),new te(e,t),new te(i,n),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Hs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let h=new _r(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class r extends je{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=pt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],h=[],c=1/t,u=new w,d=new te,p=new w,m=new w,y=new w,f=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:f=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-f,p.z=0*g,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:f=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(m)}for(let _=0;_<=t;_++){let v=i+_*c*n,x=Math.sin(v),A=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*A,a.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);let I=l[3*E+0]*x,D=l[3*E+1],N=l[3*E+0]*A;h.push(I,D,N)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,A=x,E=x+e.length,I=x+e.length+1,D=x+1;s.push(A,E,D),s.push(I,D,E)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Bn=class r extends Pi{constructor(e=1,t=1,i=4,n=8){let s=new yr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Il=class r extends je{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],h=new w,c=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class r extends je{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let c=[],u=[],d=[],p=[],m=0,y=[],f=i/2,g=0;function _(v){let x=m,A=new te,E=new w,I=0,D=v===!0?e:t,N=v===!0?1:-1;for(let G=1;G<=n;G++)u.push(0,f*N,0),d.push(0,N,0),p.push(.5,.5),m++;let B=m;for(let G=0;G<=n;G++){let z=G/n*l+o,X=Math.cos(z),V=Math.sin(z);E.x=D*V,E.y=f*N,E.z=D*X,u.push(E.x,E.y,E.z),d.push(0,N,0),A.x=.5*X+.5,A.y=.5*V*N+.5,p.push(A.x,A.y),m++}for(let G=0;G<n;G++){let z=x+G,X=B+G;v===!0?c.push(X,X+1,z):c.push(X+1,X,z),I+=3}h.addGroup(g,I,v===!0?1:2),g+=I}(function(){let v=new w,x=new w,A=0,E=(t-e)/i;for(let I=0;I<=s;I++){let D=[],N=I/s,B=N*(t-e)+e;for(let G=0;G<=n;G++){let z=G/n,X=z*l+o,V=Math.sin(X),q=Math.cos(X);x.x=B*V,x.y=-N*i+f,x.z=B*q,u.push(x.x,x.y,x.z),v.set(V,E,q).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-N),D.push(m++)}y.push(D)}for(let I=0;I<n;I++)for(let D=0;D<s;D++){let N=y[D][I],B=y[D+1][I],G=y[D+1][I+1],z=y[D][I+1];(e>0||D!==0)&&(c.push(N,B,z),A+=3),(t>0||D!==s-1)&&(c.push(B,G,z),A+=3)}h.addGroup(g,A,0),g+=A})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class r extends qt{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class r extends je{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,m,y){let f=y+1,g=[];for(let _=0;_<=f;_++){g[_]=[];let v=d.clone().lerp(m,_/f),x=p.clone().lerp(m,_/f),A=f-_;for(let E=0;E<=A;E++)g[_][E]=E===0&&_===f?v:v.clone().lerp(x,E/A)}for(let _=0;_<f;_++)for(let v=0;v<2*(f-_)-1;v++){let x=Math.floor(v/2);v%2==0?(l(g[_][x+1]),l(g[_+1][x]),l(g[_][x])):(l(g[_][x+1]),l(g[_+1][x+1]),l(g[_+1][x]))}}function l(d){s.push(d.x,d.y,d.z)}function h(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function c(d,p,m,y){y<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new w,m=new w,y=new w;for(let f=0;f<t.length;f+=3)h(t[f+0],p),h(t[f+1],m),h(t[f+2],y),o(p,m,y,d)})(n),(function(d){let p=new w;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(i),(function(){let d=new w;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let y=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-f)}var p;(function(){let m=new w,y=new w,f=new w,g=new w,_=new te,v=new te,x=new te;for(let A=0,E=0;A<s.length;A+=9,E+=6){m.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),f.set(s[A+6],s[A+7],s[A+8]),_.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),x.set(a[E+4],a[E+5]),g.copy(m).add(y).add(f).divideScalar(3);let I=u(g);c(_,E+0,m,I),c(v,E+2,y,I),c(x,E+4,f,I)}})(),(function(){for(let m=0;m<a.length;m+=6){let y=a[m+0],f=a[m+2],g=a[m+4],_=Math.max(y,f,g),v=Math.min(y,f,g);_>.9&&v<.1&&(y<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Pl=class r extends Ki{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},hs=new w,cs=new w,So=new w,us=new pi,Ll=class extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(xs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);let{a:y,b:f,c:g}=us;if(y.fromBufferAttribute(o,h[0]),f.fromBufferAttribute(o,h[1]),g.fromBufferAttribute(o,h[2]),us.getNormal(So),u[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,x=u[_],A=u[v],E=us[c[_]],I=us[c[v]],D=`${x}_${A}`,N=`${A}_${x}`;N in d&&d[N]?(So.dot(d[N].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(I.x,I.y,I.z)),d[N]=null):D in d||(d[D]={index0:h[_],index1:h[v],normal:So.clone()})}}for(let m in d)if(d[m]){let{index0:y,index1:f}=d[m];hs.fromBufferAttribute(o,y),cs.fromBufferAttribute(o,f),p.push(hs.x,hs.y,hs.z),p.push(cs.x,cs.y,cs.z)}this.setAttribute("position",new Te(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gs=class extends yr{constructor(e){super(e),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new yr().fromJSON(n))}return this}},qf=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=su(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h,c,u,d,p;if(i&&(s=(function(m,y,f,g){let _=[],v,x,A,E,I;for(v=0,x=y.length;v<x;v++)A=y[v]*g,E=v<x-1?y[v+1]*g:m.length,I=su(m,A,E,g,!1),I===I.next&&(I.steiner=!0),_.push(tm(I));for(_.sort($f),v=0;v<_.length;v++)f=Qf(_[v],f);return f})(r,e,s,t)),r.length>80*t){o=h=r[0],l=c=r[1];for(let m=t;m<n;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Mr(s,a,t,o,l,p,0),a};function su(r,e,t,i,n){let s,a;if(n===(function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=au(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=au(s,r[s],r[s+1],a);return a&&Qs(a,a.next)&&(Sr(a),a=a.next),a}function $i(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Qs(i,i.next)&&it(i.prev,i,i.next)!==0)i=i.next;else{if(Sr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Mr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(c,u,d,p){let m=c;do m.z===0&&(m.z=Ul(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,(function(y){let f,g,_,v,x,A,E,I,D=1;do{for(g=y,y=null,x=null,A=0;g;){for(A++,_=g,E=0,f=0;f<D&&(E++,_=_.nextZ,_);f++);for(I=D;E>0||I>0&&_;)E!==0&&(I===0||!_||g.z<=_.z)?(v=g,g=g.nextZ,E--):(v=_,_=_.nextZ,I--),x?x.nextZ=v:y=v,v.prevZ=x,x=v;g=_}x.nextZ=null,D*=2}while(A>1)})(m)})(r,i,n,s);let o,l,h=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Zf(r,i,n,s):Yf(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Sr(r),r=l.next,h=l.next;else if((r=l)===h){a?a===1?Mr(r=Jf($i(r),e,t),e,t,i,n,s,2):a===2&&Kf(r,e,t,i,n,s):Mr($i(r),e,t,i,n,s,1);break}}function Yf(r){let e=r.prev,t=r,i=r.next;if(it(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<s?n<a?n:a:s<a?s:a,u=o<l?o<h?o:h:l<h?l:h,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>h?o:h:l>h?l:h,m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=p&&An(n,o,s,l,a,h,m.x,m.y)&&it(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zf(r,e,t,i){let n=r.prev,s=r,a=r.next;if(it(n,s,a)>=0)return!1;let o=n.x,l=s.x,h=a.x,c=n.y,u=s.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,y=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,g=Ul(p,m,e,t,i),_=Ul(y,f,e,t,i),v=r.prevZ,x=r.nextZ;for(;v&&v.z>=g&&x&&x.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=f&&v!==n&&v!==a&&An(o,c,l,u,h,d,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=m&&x.y<=f&&x!==n&&x!==a&&An(o,c,l,u,h,d,x.x,x.y)&&it(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=f&&v!==n&&v!==a&&An(o,c,l,u,h,d,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=m&&x.y<=f&&x!==n&&x!==a&&An(o,c,l,u,h,d,x.x,x.y)&&it(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jf(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Qs(n,s)&&Ou(n,i,i.next,s)&&br(n,s)&&br(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Sr(i),Sr(i.next),i=r=s),i=i.next}while(i!==r);return $i(i)}function Kf(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&im(a,o)){let l=ku(a,o);return a=$i(a,a.next),l=$i(l,l.next),Mr(a,e,t,i,n,s,0),void Mr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function $f(r,e){return r.x-e.x}function Qf(r,e){let t=(function(n,s){let a,o=s,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=h&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===h))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,y=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&An(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(m=Math.abs(c-o.y)/(h-o.x),br(o,n)&&(m<y||m===y&&(o.x>a.x||o.x===a.x&&em(a,o)))&&(a=o,y=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=ku(t,r);return $i(i,i.next),$i(t,t.next)}function em(r,e){return it(r.prev,r,e.prev)<0&&it(e.next,r,r.next)<0}function Ul(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function tm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function An(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function im(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Ou(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(br(r,e)&&br(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(it(r.prev,r,e.prev)||it(r,e.prev,e))||Qs(r,e)&&it(r.prev,r,r.next)>0&&it(e.prev,e,e.next)>0)}function it(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Qs(r,e){return r.x===e.x&&r.y===e.y}function Ou(r,e,t,i){let n=ps(it(r,e,t)),s=ps(it(r,e,i)),a=ps(it(t,i,r)),o=ps(it(t,i,e));return n!==s&&a!==o||!(n!==0||!ds(r,t,e))||!(s!==0||!ds(r,i,e))||!(a!==0||!ds(t,r,i))||!(o!==0||!ds(t,e,i))}function ds(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ps(r){return r>0?1:r<0?-1:0}function br(r,e){return it(r.prev,r,r.next)<0?it(r,e,r.next)>=0&&it(r,r.prev,e)>=0:it(r,e,r.prev)<0||it(r,r.next,e)<0}function ku(r,e){let t=new Dl(r.i,r.x,r.y),i=new Dl(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function au(r,e,t,i){let n=new Dl(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Sr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Dl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ai=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];ou(e),lu(i,e);let a=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,lu(i,t[l]);let o=qf(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ou(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function lu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Nl=class r extends je{constructor(e=new Gs([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:nm,v,x,A,E,I,D=!1;g&&(v=g.getSpacedPoints(c),D=!0,d=!1,x=g.computeFrenetFrames(c,!1),A=new w,E=new w,I=new w),d||(f=0,p=0,m=0,y=0);let N=o.extractPoints(h),B=N.shape,G=N.holes;if(!Ai.isClockWise(B)){B=B.reverse();for(let L=0,R=G.length;L<R;L++){let P=G[L];Ai.isClockWise(P)&&(G[L]=P.reverse())}}let z=Ai.triangulateShape(B,G),X=B;for(let L=0,R=G.length;L<R;L++){let P=G[L];B=B.concat(P)}function V(L,R,P){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(R,P)}let q=B.length,J=z.length;function ne(L,R,P){let M,C,k,$=L.x-R.x,O=L.y-R.y,Z=P.x-L.x,Y=P.y-L.y,Q=$*$+O*O,ce=$*Y-O*Z;if(Math.abs(ce)>Number.EPSILON){let he=Math.sqrt(Q),ve=Math.sqrt(Z*Z+Y*Y),Se=R.x-O/he,Fe=R.y+$/he,Ue=((P.x-Y/ve-Se)*Y-(P.y+Z/ve-Fe)*Z)/($*Y-O*Z);M=Se+$*Ue-L.x,C=Fe+O*Ue-L.y;let _e=M*M+C*C;if(_e<=2)return new te(M,C);k=Math.sqrt(_e/2)}else{let he=!1;$>Number.EPSILON?Z>Number.EPSILON&&(he=!0):$<-Number.EPSILON?Z<-Number.EPSILON&&(he=!0):Math.sign(O)===Math.sign(Y)&&(he=!0),he?(M=-O,C=$,k=Math.sqrt(Q)):(M=$,C=O,k=Math.sqrt(Q/2))}return new te(M/k,C/k)}let ie=[];for(let L=0,R=X.length,P=R-1,M=L+1;L<R;L++,P++,M++)P===R&&(P=0),M===R&&(M=0),ie[L]=ne(X[L],X[P],X[M]);let me=[],ye,ee=ie.concat();for(let L=0,R=G.length;L<R;L++){let P=G[L];ye=[];for(let M=0,C=P.length,k=C-1,$=M+1;M<C;M++,k++,$++)k===C&&(k=0),$===C&&($=0),ye[M]=ne(P[M],P[k],P[$]);me.push(ye),ee=ee.concat(ye)}for(let L=0;L<f;L++){let R=L/f,P=p*Math.cos(R*Math.PI/2),M=m*Math.sin(R*Math.PI/2)+y;for(let C=0,k=X.length;C<k;C++){let $=V(X[C],ie[C],M);pe($.x,$.y,-P)}for(let C=0,k=G.length;C<k;C++){let $=G[C];ye=me[C];for(let O=0,Z=$.length;O<Z;O++){let Y=V($[O],ye[O],M);pe(Y.x,Y.y,-P)}}}let se=m+y;for(let L=0;L<q;L++){let R=d?V(B[L],ee[L],se):B[L];D?(E.copy(x.normals[0]).multiplyScalar(R.x),A.copy(x.binormals[0]).multiplyScalar(R.y),I.copy(v[0]).add(E).add(A),pe(I.x,I.y,I.z)):pe(R.x,R.y,0)}for(let L=1;L<=c;L++)for(let R=0;R<q;R++){let P=d?V(B[R],ee[R],se):B[R];D?(E.copy(x.normals[L]).multiplyScalar(P.x),A.copy(x.binormals[L]).multiplyScalar(P.y),I.copy(v[L]).add(E).add(A),pe(I.x,I.y,I.z)):pe(P.x,P.y,u/c*L)}for(let L=f-1;L>=0;L--){let R=L/f,P=p*Math.cos(R*Math.PI/2),M=m*Math.sin(R*Math.PI/2)+y;for(let C=0,k=X.length;C<k;C++){let $=V(X[C],ie[C],M);pe($.x,$.y,u+P)}for(let C=0,k=G.length;C<k;C++){let $=G[C];ye=me[C];for(let O=0,Z=$.length;O<Z;O++){let Y=V($[O],ye[O],M);D?pe(Y.x,Y.y+v[c-1].y,v[c-1].x+P):pe(Y.x,Y.y,u+P)}}}function de(L,R){let P=L.length;for(;--P>=0;){let M=P,C=P-1;C<0&&(C=L.length-1);for(let k=0,$=c+2*f;k<$;k++){let O=q*k,Z=q*(k+1);T(R+M+O,R+C+O,R+C+Z,R+M+Z)}}}function pe(L,R,P){l.push(L),l.push(R),l.push(P)}function le(L,R,P){S(L),S(R),S(P);let M=n.length/3,C=_.generateTopUV(i,n,M-3,M-2,M-1);U(C[0]),U(C[1]),U(C[2])}function T(L,R,P,M){S(L),S(R),S(M),S(R),S(P),S(M);let C=n.length/3,k=_.generateSideWallUV(i,n,C-6,C-3,C-2,C-1);U(k[0]),U(k[1]),U(k[3]),U(k[1]),U(k[2]),U(k[3])}function S(L){n.push(l[3*L+0]),n.push(l[3*L+1]),n.push(l[3*L+2])}function U(L){s.push(L.x),s.push(L.y)}(function(){let L=n.length/3;if(d){let R=0,P=q*R;for(let M=0;M<J;M++){let C=z[M];le(C[2]+P,C[1]+P,C[0]+P)}R=c+2*f,P=q*R;for(let M=0;M<J;M++){let C=z[M];le(C[0]+P,C[1]+P,C[2]+P)}}else{for(let R=0;R<J;R++){let P=z[R];le(P[2],P[1],P[0])}for(let R=0;R<J;R++){let P=z[R];le(P[0]+q*c,P[1]+q*c,P[2]+q*c)}}i.addGroup(L,n.length/3-L,0)})(),(function(){let L=n.length/3,R=0;de(X,R),R+=X.length;for(let P=0,M=G.length;P<M;P++){let C=G[P];de(C,R),R+=C.length}i.addGroup(L,n.length/3-L,1)})()}this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Vs[n.type]().fromJSON(n)),new r(i,e.options)}},nm={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new te(s,a),new te(o,l),new te(h,c)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],m=e[3*n+2],y=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new te(a,1-l),new te(h,1-u),new te(d,1-m),new te(y,1-g)]:[new te(o,1-l),new te(c,1-u),new te(p,1-m),new te(f,1-g)]}},Ol=class r extends Ki{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},kl=class r extends Ki{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Fl=class r extends je{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new w,m=new te;for(let y=0;y<=n;y++){for(let f=0;f<=i;f++){let g=s+f/i*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),h.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,c.push(m.x,m.y)}u+=d}for(let y=0;y<n;y++){let f=y*(i+1);for(let g=0;g<i;g++){let _=g+f,v=_,x=_+i+1,A=_+i+2,E=_+1;o.push(v,x,E),o.push(x,A,E)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Bl=class r extends je{constructor(e=new Gs([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let u=n.length/3,d=c.extractPoints(t),p=d.shape,m=d.holes;Ai.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let _=m[f];Ai.isClockWise(_)===!0&&(m[f]=_.reverse())}let y=Ai.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let _=m[f];p=p.concat(_)}for(let f=0,g=p.length;f<g;f++){let _=p[f];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let f=0,g=y.length;f<g;f++){let _=y[f],v=_[0]+u,x=_[1]+u,A=_[2]+u;i.push(v,x,A),l+=3}}this.setIndex(i),this.setAttribute("position",new Te(n,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},zl=class r extends je{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new w,d=new w,p=[],m=[],y=[],f=[];for(let g=0;g<=i;g++){let _=[],v=g/i,x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+E*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(E+x,1-v),_.push(h++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let v=c[g][_+1],x=c[g][_],A=c[g+1][_],E=c[g+1][_+1];(g!==0||a>0)&&p.push(v,x,E),(g!==i-1||l<Math.PI)&&p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hl=class r extends Ki{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Vl=class r extends je{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new w,u=new w,d=new w;for(let p=0;p<=i;p++)for(let m=0;m<=n;m++){let y=m/n*s,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(y),u.y=(e+t*Math.cos(f))*Math.sin(y),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let y=(n+1)*p+m-1,f=(n+1)*(p-1)+m-1,g=(n+1)*(p-1)+m,_=(n+1)*p+m;a.push(y,f,_),a.push(f,g,_)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Gl=class r extends je{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],u=new w,d=new w,p=new w,m=new w,y=new w,f=new w,g=new w;for(let v=0;v<=i;++v){let x=v/i*s*Math.PI*2;_(x,s,a,e,p),_(x+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),y.crossVectors(f,g),g.crossVectors(y,f),y.normalize(),g.normalize();for(let A=0;A<=n;++A){let E=A/n*Math.PI*2,I=-t*Math.cos(E),D=t*Math.sin(E);u.x=p.x+(I*g.x+D*y.x),u.y=p.y+(I*g.y+D*y.y),u.z=p.z+(I*g.z+D*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(v/i),c.push(A/n)}}for(let v=1;v<=i;v++)for(let x=1;x<=n;x++){let A=(n+1)*(v-1)+(x-1),E=(n+1)*v+(x-1),I=(n+1)*v+x,D=(n+1)*(v-1)+x;o.push(A,E,D),o.push(E,I,D)}function _(v,x,A,E,I){let D=Math.cos(v),N=Math.sin(v),B=A/x*v,G=Math.cos(B);I.x=E*(2+G)*.5*D,I.y=E*(2+G)*N*.5,I.z=E*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Wl=class r extends je{constructor(e=new zs(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,h=new te,c=new w,u=[],d=[],p=[],m=[];function y(f){c=e.getPointAt(f/t,c);let g=a.normals[f],_=a.binormals[f];for(let v=0;v<=n;v++){let x=v/n*Math.PI*2,A=Math.sin(x),E=-Math.cos(x);l.x=E*g.x+A*_.x,l.y=E*g.y+A*_.y,l.z=E*g.z+A*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)y(f);y(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=n;g++)h.x=f/t,h.y=g/n,p.push(h.x,h.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=n;g++){let _=(n+1)*(f-1)+(g-1),v=(n+1)*f+(g-1),x=(n+1)*f+g,A=(n+1)*(f-1)+g;m.push(_,v,A),m.push(v,x,A)}})()})(),this.setIndex(m),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Vs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Xl=class extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let u=l[h],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let y=0;y<3;y++){let f=o.getX(p+y),g=o.getX(p+(y+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),hu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,u),hu(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function hu(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var t0=Object.freeze({__proto__:null,BoxGeometry:ti,CapsuleGeometry:Bn,CircleGeometry:Il,ConeGeometry:xr,CylinderGeometry:qt,DodecahedronGeometry:Pl,EdgesGeometry:Ll,ExtrudeGeometry:Nl,IcosahedronGeometry:Ol,LatheGeometry:Pi,OctahedronGeometry:kl,PlaneGeometry:ni,PolyhedronGeometry:Ki,RingGeometry:Fl,ShapeGeometry:Bl,SphereGeometry:zl,TetrahedronGeometry:Hl,TorusGeometry:Vl,TorusKnotGeometry:Gl,TubeGeometry:Wl,WireframeGeometry:Xl});var St=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ws=class extends St{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function fs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function rm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var zn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends zn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:s=e,o=2*t-i;break;case rc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=e,l=2*i-t;break;case rc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),y=m*m,f=y*m,g=-d*f+2*d*y-d*m,_=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-p)*f+(1.5+p)*y+.5*m,x=p*f-p*y;for(let A=0;A!==o;++A)s[A]=g*a[c+A]+_*a[h+A]+v*a[l+A]+x*a[u+A];return s}},ql=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)s[d]=a[h+d]*u+a[l+d]*c;return s}},Yl=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fs(t,this.TimeBufferType),this.values=fs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fs(e.times,Array),values:fs(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case nl:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&rm(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Va,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let m=t[c+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=nl;var qi=class extends Wt{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool",qi.prototype.ValueBufferType=Array,qi.prototype.DefaultInterpolation=Ms,qi.prototype.InterpolantFactoryMethodLinear=void 0,qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Wt{};Zl.prototype.ValueTypeName="color";var Jl=class extends Wt{};Jl.prototype.ValueTypeName="number";var Kl=class extends zn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)Pt.slerpFlat(s,0,a,h-o,a,h,l);return s}},Xs=class extends Wt{InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion",Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Wt{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string",Yi.prototype.ValueBufferType=Array,Yi.prototype.DefaultInterpolation=Ms,Yi.prototype.InterpolantFactoryMethodLinear=void 0,Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Wt{};$l.prototype.ValueTypeName="vector";var Ql=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let p=h[u],m=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}},sm=new Ql,eh=class{constructor(e){this.manager=e!==void 0?e:sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qs=class extends js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wo=new Me,cu=new w,uu=new w,th=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kn,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var i0=new Me,n0=new w,r0=new w;var ih=class extends th{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var s0=new Me,a0=new Me,o0=new Me;var l0=new w,h0=new Pt,c0=new w,u0=new w;var d0=new w,p0=new Pt,f0=new w,m0=new w;var dh="\\[\\]\\.:\\/",am=new RegExp("["+dh+"]","g"),Eo="[^"+dh+"]",om="[^"+dh.replace("\\.","")+"]",lm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Eo)+/(WCOD+)?/.source.replace("WCOD",om)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo)+"$"),hm=["material","materials","bones","map"],et=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(am,"")}static parseTrackName(e){let t=lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);hm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=class{constructor(r,e,t){let i=t||et.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g0=new Float32Array(1);var du=new Me,Zs=class{constructor(e,t,i=0,n=1/0){this.ray=new Ji(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,i=[]){return nh(e,this,i,t),i.sort(pu),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)nh(e[n],this,i,t);return i.sort(pu),i}};function pu(r,e){return r.distance-e.distance}function nh(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)nh(s[a],e,t,!0)}}var v0=new te;var _0=new w,y0=new w;var x0=new w;var M0=new w,b0=new Me,S0=new Me;var w0=new w,E0=new we,T0=new we;var A0=new w,R0=new w,C0=new w;var I0=new w,P0=new mr;var L0=new Xt;var U0=new w;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var cm="ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ",Rt=r=>r.replace(/i/g,"İ").replace(/ı/g,"I").toUpperCase(),ph=r=>{let e=Rt(r);return[...e].length===1&&cm.includes(e)};var Qi=r=>ph(r)||[...Rt(r)].length===1&&"QWX".includes(Rt(r));var ri=(r,e)=>r*64+e;var fh=r=>r%64,ea=class{constructor(e){Object.assign(this,{id:e.id,w:e.w,h:e.h,clues:e.clues}),this.answers=[],this.letters=new Map,this.at=new Map;for(let t of e.clues)for(let i of["u","l"]){let n=t[i];if(!n)continue;let s=[...n.a],a=s.map((l,h)=>ri(n.r+(n.d==="v"?h:0),n.c+(n.d==="v"?0:h))),o={n:this.answers.length,a:n.a,cells:a,d:n.d,clue:t,part:i,text:n.t};this.answers.push(o),a.forEach((l,h)=>{if(this.letters.has(l)&&this.letters.get(l)!==s[h])throw new Error(`${e.id}: ${n.a} conflicts at ${l}`);this.letters.set(l,s[h]),this.at.set(l,[...this.at.get(l)||[],o])})}}isAnswerCell(e){return this.letters.has(e)}},um={C:"Ç",G:"Ğ",I:"İ",O:"Ö",U:"Ü"},Tr=class r{constructor(e){this.grid=e,this.letters=new Map,this.by=new Map,this.done=new Set}locked(e){return(this.grid.at.get(e)||[]).some(t=>this.done.has(t.n))}normalize(e,t){let i=Rt(e),n=this.grid.letters.get(t);return um[i]===n?n:i}set(e,t,i=0){if(!this.grid.isAnswerCell(e)||!Qi(t)||this.locked(e))return null;let n=this.normalize(t,e),s=this.letters.get(e)!==n;return this.letters.set(e,n),this.by.set(e,i),{changed:s,completed:this.check(e)}}erase(e){let t=[];for(let i of e)!this.locked(i)&&this.letters.delete(i)&&(this.by.delete(i),t.push(i));return t}check(e){let t=[];for(let i of this.grid.at.get(e)||[])this.done.has(i.n)||!i.cells.every(n=>this.letters.get(n)===this.grid.letters.get(n))||(this.done.add(i.n),t.push(i));return t}get solved(){return this.done.size===this.grid.answers.length}get part(){return this.grid.answers.length?this.done.size/this.grid.answers.length:0}save(){return[...this.letters].map(([e,t])=>[e,t,this.by.get(e)||0])}static load(e,t){let i=new r(e);for(let n of Array.isArray(t)?t.slice(0,4096):[])!Array.isArray(n)||!Number.isInteger(n[0])||typeof n[1]!="string"||!e.isAnswerCell(n[0])||!Qi(n[1])||(i.letters.set(n[0],Rt(n[1])),i.by.set(n[0],Number.isInteger(n[2])?n[2]:0));for(let n of i.letters.keys())i.check(n);return i}};var dm={Puzzle:"Bulmaca","Solved!":"Tamamlandı!","Swedish crosswords":"Çengel bulmacalar","Turn the page":"Sayfayı çevir",Contents:"İçindekiler","How to play":"Nasıl oynanır",Notes:"Notlar","Write with a pen, a finger or the mouse: each letter is read a moment after it is written.":"Kalemle, parmakla ya da fareyle yaz: her harf, yazıldıktan hemen sonra okunur.","Drag the edge or the corner of a page to turn it, or swipe outside a puzzle.":"Sayfayı çevirmek için kenarından ya da köşesinden sürükle; bulmacanın dışında kaydırmak da olur.","Two fingers (or the wheel) zoom and move the page.":"İki parmakla (ya da tekerlekle) yakınlaştır ve sayfayı kaydır.","The eraser, the pen’s other end or the right button rubs out.":"Silgi, kalemin arka ucu ya da farenin sağ tuşu siler.","Tap a cell to type with the keyboard instead.":"Klavyeyle yazmak için bir kareye dokun.","A word that is right is locked and turns green.":"Doğru kelime kilitlenir ve yeşile döner.","Open a room and solve together, all at one table.":"Oda aç, aynı masada birlikte çözün.",Pencil:"Kalem",Eraser:"Silgi","Whole page":"Tüm sayfa",Room:"Oda",Settings:"Ayarlar","Previous page":"Önceki sayfa","Next page":"Sonraki sayfa","Solve together":"Birlikte çöz","Open a room":"Oda aç","Password (optional)":"Şifre (isteğe bağlı)","Room code":"Oda kodu",Join:"Katıl",Leave:"Ayrıl","Copy link":"Bağlantıyı kopyala","Link copied":"Bağlantı kopyalandı","At the table":"Masadakiler",you:"sen",away:"bağlantısı koptu",Kick:"Çıkar",Ban:"Yasakla",Close:"Kapat","Your name":"Adın",Skin:"Ten",Sleeve:"Kol","Left-handed":"Solağım",Language:"Dil",Sounds:"Sesler","My hands":"Ellerim",shown:"görünsün",faint:"soluk",hidden:"gizli","Start this magazine over":"Dergiyi baştan başlat","Really? Everything written is lost.":"Emin misin? Yazılan her şey silinir.",Handwriting:"El yazısı","loading…":"yükleniyor…","this browser":"tarayıcı","not available":"kullanılamıyor","Connecting…":"Bağlanıyor…","Reconnecting…":"Yeniden bağlanıyor…","Opening the room…":"Oda açılıyor…","{n} joined":"{n} katıldı","{n} left":"{n} ayrıldı","{n} lost the connection":"{n} bağlantısını kaybetti","{n} is back":"{n} geri döndü","{n} was sent out":"{n} odadan çıkarıldı","Room not found – is the host still there?":"Oda bulunamadı – kuran hâlâ orada mı?","Could not reach the host (a strict firewall can block peer-to-peer).":"Odayı kurana ulaşılamadı (katı bir güvenlik duvarı engelliyor olabilir).","Could not connect":"Bağlanılamadı","This room has a password":"Bu odanın şifresi var","Room is full":"Oda dolu","Room closed":"Oda kapandı","You were sent out of the room":"Odadan çıkarıldın","You are banned from this room":"Bu odaya girmen yasaklandı","This room was opened in another tab":"Bu oda başka bir sekmede açıldı","Lost connection to the host":"Odayı kuranla bağlantı koptu","Someone is writing":"Biri yazıyor","Puzzle solved!":"Bulmaca tamamlandı!","Handwriting could not be loaded: type instead":"El yazısı yüklenemedi: klavyeyle yazabilirsin","Only the host turns people out":"Yalnızca odayı kuran kişi çıkarabilir"},Ar="tr";try{Ar=localStorage.getItem("cwords3d.lang")||(/^tr/i.test(navigator.language||"tr")?"tr":"en")}catch{}var mh=()=>Ar;function Fu(r){Ar=r==="en"?"en":"tr";try{localStorage.setItem("cwords3d.lang",Ar)}catch{}}function Le(r,e={}){return(Ar==="tr"?dm[r]??r:r).replace(/\{(\w+)\}/g,(i,n)=>e[n]??"")}var Dt=4/3,_t='"Avenir Next", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',en=["#1f3f8f","#8a2433","#1e6b41","#7a4a10","#5a3b94","#333333"],pm="#f7f2e6",Bu="#4a4640",fm="#e9dfc6";function Li(r,e){let t=r.c1-r.c0;if(r.wide){let n=Math.min(.955/t,(Dt-.2)/e.h);return{u:n,x0:r.c0===0?1-t*n:0,y0:.13}}let i=Math.min(.92/t,(Dt-.2)/e.h);return{u:i,x0:(1-t*i)/2,y0:.125}}function gh(r,e,t,i){let n=Li(r,e),s=r.c0+(t-n.x0)/n.u,a=(i-n.y0)/n.u;return{x:s,y:a,inside:s>=r.c0&&s<r.c1&&a>=0&&a<e.h}}var zu=(r,e,t,i,n,s,a)=>{for(let o=n;;o*=.94){r.font=`600 ${o}px ${_t}`;let l=[],h="",c=!0;for(let u of e.split(/\s+/)){let d=h?`${h} ${u}`:u;if(r.measureText(d).width<=t){h=d;continue}for(h&&l.push(h),h=u;r.measureText(h).width>t&&[...h].length>2;){if(o>s*1.35){c=!1;break}let p=[...h].length-1;for(;p>2&&r.measureText([...h].slice(0,p).join("")+"-").width>t;)p--;l.push([...h].slice(0,p).join("")+"-"),h=[...h].slice(p).join("")}if(!c)break}if(l.push(h),c&&l.length*o*a<=i||o<=s)return{f:o,lines:l}}};function Hu(r,e,t,i,n){r.save(),r.translate(e,t),r.lineWidth=i*.16,r.lineCap="round",r.lineJoin="round";let s=(a,o,l,h)=>{r.beginPath(),r.moveTo(a-l*i*.34-h*i*.28,o-h*i*.34-l*i*.28),r.lineTo(a,o),r.lineTo(a-l*i*.34+h*i*.28,o-h*i*.34+l*i*.28),r.stroke()};r.beginPath(),n==="→"?(r.moveTo(-i*.4,0),r.lineTo(i*.4,0),r.stroke(),s(i*.4,0,1,0)):n==="↓"?(r.moveTo(0,-i*.4),r.lineTo(0,i*.4),r.stroke(),s(0,i*.4,0,1)):n==="↴"?(r.moveTo(-i*.4,-i*.3),r.lineTo(i*.15,-i*.3),r.lineTo(i*.15,i*.4),r.stroke(),s(i*.15,i*.4,0,1)):(r.moveTo(-i*.3,-i*.4),r.lineTo(-i*.3,i*.15),r.lineTo(i*.4,i*.15),r.stroke(),s(i*.4,i*.15,1,0)),r.restore()}var ta=class{constructor(e){this.mag=e,this.colorOf=()=>0}draw(e,t,i){let n=this.mag.pages[t],s=i*Dt;e.setTransform(1,0,0,1,0,0),e.fillStyle=n.kind==="cover"||n.kind==="back"?"#8f2f2a":pm,e.fillRect(0,0,i,s),e.scale(i,i),e.scale(1/1e3,1/1e3),n.kind==="grid"?this.grid(e,t,n):this[n.kind](e,t),(n.kind==="grid"||n.kind==="contents"||n.kind==="howto"||n.kind==="notes")&&(e.font=`500 20px ${_t}`,e.fillStyle="#8b8371",e.textBaseline="alphabetic",e.textAlign=t%2?"left":"right",e.fillText(String(t),t%2?46:954,Dt*1e3-30))}title(e,t,i,n){e.fillStyle="#8f2f2a",e.font=`800 46px ${_t}`,e.textAlign="left",e.textBaseline="alphabetic",e.fillText(t,42,78),e.font=`500 24px ${_t}`,e.fillStyle="#6d6554",e.textAlign="right",e.fillText(i,958,78),e.fillRect(42,94,916,2.5)}nameOf(e){return`${Le("Puzzle")} ${this.mag.levels.findIndex(t=>t.id===e)+1}`}grid(e,t,i){let n=this.mag.levels.find(u=>u.id===i.level),s=this.mag.progress.get(i.level),a=Li(i,n);this.title(e,!i.wide||i.c0===0?this.nameOf(n.id):"",!i.wide||i.c0>0?`${n.w} × ${n.h} · ${Math.round(s.part*100)}%`:"",t);for(let u=0;u<n.h;u++)for(let d=i.c0;d<i.c1;d++)this.cell(e,i,ri(u,d),a);let o=a.x0*1e3,l=a.y0*1e3,h=a.u*1e3,c=i.c1-i.c0;e.strokeStyle=Bu,e.lineWidth=3.2,e.strokeRect(o,l,c*h,n.h*h),s.solved&&(e.save(),e.translate(500,Dt*1e3-62),e.rotate(-.03),e.font=`800 38px ${_t}`,e.fillStyle="#2f7d4c",e.textAlign="center",e.fillText(Le("Solved!"),0,0),e.restore())}clueAt(e,t){this.clues||(this.clues=new Map);let i=this.clues.get(e);return i||(i=new Map(this.mag.grids.get(e).clues.map(n=>[ri(n.r,n.c),n])),this.clues.set(e,i)),i.get(t)}cell(e,t,i,n,s={}){let a=t.level,o=this.mag.grids.get(a),l=this.mag.progress.get(a),h=Math.floor(i/64),c=i%64,u=n.u*1e3,d=n.x0*1e3+(c-t.c0)*u,p=n.y0*1e3+h*u,m=o.isAnswerCell(i),y=m?null:this.clueAt(a,i),f=m&&l.locked(i);if(e.fillStyle=s.cursor?"#ffe38a":s.word?"#fff3c9":f?"#e4efdc":m?"#fffdf6":y?fm:"#c9bd9f",e.fillRect(d,p,u,u),y&&this.clue(e,o,l,y,d,p,u),m){for(let _ of o.at.get(i))if(_.cells[0]===i){let v=_.part==="u"?_.clue.u:_.clue.l,x=u*.19;e.strokeStyle="#9a4b33",v.x==="→"||v.x==="↳"?Hu(e,d+x*.62,p+(v.x==="→"?u*.5:x*.72),x,v.x):Hu(e,d+(v.x==="↓"?u*.5:x*.7),p+x*.62,x,v.x)}let g=l.letters.get(i);g&&(e.fillStyle=f?"#235c38":en[this.colorOf(l.by.get(i)||0)%en.length],e.font=`${f?700:600} ${u*.66}px ${_t}`,e.textAlign="center",e.textBaseline="alphabetic",e.fillText(g,d+u/2,p+u*.76))}e.strokeStyle=Bu,e.lineWidth=1.3,e.strokeRect(d,p,u,u)}clue(e,t,i,n,s,a,o){let l=n.u&&n.l,h=o*.045;for(let[c,u]of[[n.u,0],[n.l,1]]){if(!c)continue;let d=l?o/2:o,p=a+(l&&u?o/2:0),m=t.answers.find(v=>v.clue===n&&v.part===(u?"l":"u")),y=i.done.has(m.n),{f,lines:g}=zu(e,c.t,o-h*2,d-h*1.6,o*.18,o*.092,1.06);e.font=`600 ${f}px ${_t}`,e.fillStyle=y?"#8d9b82":"#2c2821",e.textAlign="center",e.textBaseline="middle";let _=Math.min(g.length,Math.max(1,Math.floor((d-h)/(f*1.06))));for(let v=0;v<_;v++)e.fillText(g[v],s+o/2,p+d/2+(v-(_-1)/2)*f*1.06)}l&&(e.strokeStyle="#8e8570",e.lineWidth=1,e.beginPath(),e.moveTo(s,a+o/2),e.lineTo(s+o,a+o/2),e.stroke())}cover(e){e.fillStyle="#a63a33",e.fillRect(40,40,920,Dt*1e3-80),e.fillStyle="#f7ecd2",e.textAlign="center",e.textBaseline="alphabetic",e.font=`800 108px ${_t}`,e.fillText("BULMACA",500,230),e.fillText("KEYFİ",500,345),e.font=`500 34px ${_t}`,e.fillText(Le("Swedish crosswords"),500,420);let t=["KAHVE","A█E█L","LİMON","E█İ█A","MASAL"],i=104,n=500-i*2.5,s=520;t.forEach((a,o)=>[...a].forEach((l,h)=>{e.fillStyle=l==="█"?"#5d1f1b":"#fffaf0",e.fillRect(n+h*i,s+o*i,i,i),e.strokeStyle="#5d1f1b",e.lineWidth=3,e.strokeRect(n+h*i,s+o*i,i,i),l!=="█"&&(e.fillStyle="#1f3f8f",e.font=`700 66px ${_t}`,e.fillText(l,n+(h+.5)*i,s+o*i+76))})),e.fillStyle="#f7ecd2",e.font=`500 30px ${_t}`,e.fillText(Le("Turn the page"),500,Dt*1e3-110)}back(e){e.fillStyle="#f7ecd2",e.textAlign="center",e.font=`700 60px ${_t}`,e.fillText("BULMACA KEYFİ",500,660)}contents(e,t){this.title(e,Le("Contents"),"",t),this.mag.levels.forEach((i,n)=>{let s=180+n*92,a=this.mag.progress.get(i.id),o=a.part;e.textAlign="left",e.fillStyle="#2c2821",e.font=`600 36px ${_t}`,e.fillText(this.nameOf(i.id),60,s),e.fillStyle="#8b8371",e.font=`500 26px ${_t}`,e.fillText(`${i.w} × ${i.h}`,330,s),e.fillStyle="#e6dcc2",e.fillRect(500,s-20,300,16),e.fillStyle="#2f7d4c",e.fillRect(500,s-20,300*o,16),e.textAlign="right",e.fillStyle="#6d6554",e.font=`600 32px ${_t}`,e.fillText(String(this.mag.pageOf(i.id)),940,s)})}contentsAt(e){let t=Math.round((e*1e3-168)/92);return this.mag.levels[t]||null}howto(e,t){this.title(e,Le("How to play"),"",t);let i=["Write with a pen, a finger or the mouse: each letter is read a moment after it is written.","Drag the edge or the corner of a page to turn it, or swipe outside a puzzle.","Two fingers (or the wheel) zoom and move the page.","The eraser, the pen’s other end or the right button rubs out.","Tap a cell to type with the keyboard instead.","A word that is right is locked and turns green.","Open a room and solve together, all at one table."],n=190;for(let s of i){let{f:a,lines:o}=zu(e,Le(s),840,200,36,30,1.3);e.fillStyle="#9a4b33",e.beginPath(),e.arc(62,n-12,8,0,7),e.fill(),e.fillStyle="#2c2821",e.textAlign="left",e.textBaseline="alphabetic",e.font=`500 ${a}px ${_t}`;for(let l of o)e.fillText(l,92,n),n+=a*1.3;n+=34}}notes(e,t){this.title(e,Le("Notes"),"",t),e.strokeStyle="#d9cfb6",e.lineWidth=2;for(let i=170;i<1270;i+=56)e.beginPath(),e.moveTo(46,i),e.lineTo(954,i),e.stroke()}};var He=.21,$e=He*Dt,tn=7e-4,Et=36,nn=10,rn=(r,e,t)=>Math.max(e,Math.min(t,r)),ia=class{constructor(e,{renderer:t,texW:i}){this.mag=e,this.drawer=new ta(e),this.group=new st,this.texW=i,this.aniso=t.capabilities.getMaxAnisotropy(),this.pool=new Map,this.turn=null,this.tick=0;let n=()=>new St({color:"#ffffff",roughness:.86,metalness:0}),s=new St({color:"#e8dfc9",roughness:.95});this.sides=[-1,1].map(f=>{let g=new Be(new ti(He,1,$e),s);g.castShadow=g.receiveShadow=!0;let _=new ni(He,$e);_.rotateX(-Math.PI/2);let v=new Be(_,n());return v.receiveShadow=!0,g.position.x=v.position.x=f*He/2,this.group.add(g,v),{d:f,block:g,top:v,page:-1}});let a=document.createElement("canvas");a.width=128,a.height=4;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,128,0);for(let[f,g]of[[0,0],[.3,.05],[.47,.22],[.5,.36],[.53,.22],[.7,.05],[1,0]])l.addColorStop(f,`rgba(40,28,14,${g})`);o.fillStyle=l,o.fillRect(0,0,128,4);let h=new ni(He*.32,$e);h.rotateX(-Math.PI/2),this.fold=new Be(h,new ei({map:new vi(a),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.fold.renderOrder=1,this.group.add(this.fold);let c=(Et+1)*(nn+1);this.pos=new Ze(new Float32Array(c*3),3).setUsage(Vn),this.nor=new Ze(new Float32Array(c*3),3).setUsage(Vn);let u=new Float32Array(c*2),d=new Float32Array(c*2),p=[],m=[];for(let f=0;f<=nn;f++)for(let g=0;g<=Et;g++){let _=f*(Et+1)+g;if(u.set([g/Et,1-f/nn],_*2),d.set([1-g/Et,1-f/nn],_*2),g<Et&&f<nn){let v=_,x=_+1,A=_+Et+1,E=A+1;p.push(v,A,x,x,A,E),m.push(v,x,A,x,E,A)}}let y=(f,g)=>{let _=new je;return _.setAttribute("position",this.pos),_.setAttribute("uv",new Ze(f,2)),_.setIndex(g),_};this.front=new Be(y(u,p),n()),this.front.geometry.setAttribute("normal",this.nor),this.nor2=new Ze(new Float32Array(c*3),3).setUsage(Vn),this.behind=new Be(y(d,m),n()),this.behind.geometry.setAttribute("normal",this.nor2);for(let f of[this.front,this.behind])f.frustumCulled=!1,f.castShadow=f.receiveShadow=!0,f.visible=!1,this.group.add(f);this.front.castShadow=!0,this.behind.castShadow=!1,this.rest()}texture(e){if(e<0||e>=this.mag.pages.length)return null;let t=this.pool.get(e);if(!t){if(this.pool.size>=8){let s=new Set([...this.sides.map(o=>o.page),this.front.userData.page,this.behind.userData.page]),a=[...this.pool].filter(([o])=>!s.has(o)).sort((o,l)=>o[1].used-l[1].used)[0];a&&(this.pool.delete(a[0]),a[1].tex.dispose(),a[1].canvas.width=0)}let i=document.createElement("canvas");i.width=this.texW,i.height=Math.round(this.texW*Dt);let n=new vi(i);n.colorSpace=dt,n.anisotropy=this.aniso,t={canvas:i,g:i.getContext("2d",{willReadFrequently:!0}),tex:n,used:0},this.drawer.draw(t.g,e,i.width),this.pool.set(e,t)}return t.used=++this.tick,t.tex}prepare(e,t,i){let n=this.mag.spread,s=this.mag.pages.length-1;this.set(this.front,Math.min(s,2*n)),this.set(this.behind,Math.max(0,Math.min(s,2*n-1))),this.front.visible=this.behind.visible=!0,e.render(t,i),this.rest()}warm(e){let t=this.mag.spread;for(let i of[2*t+1,2*t+2,2*t-2,2*t-3])if(i>=0&&i<this.mag.pages.length&&!this.pool.has(i))return e.initTexture(this.texture(i)),!0;return!1}set(e,t){e.userData.page!==t&&(e.userData.page=t,e.material.map||(e.material.needsUpdate=!0),e.material.map=this.texture(t))}redraw(e){let t=this.pool.get(e);t&&(this.drawer.draw(t.g,e,t.canvas.width),t.tex.needsUpdate=!0)}redrawAll(){for(let e of this.pool.keys())this.redraw(e)}redrawCells(e,t,i=new Map){let n=this.mag.levels.find(s=>s.id===e);for(let[s,a]of this.pool){let o=this.mag.pages[s];if(o.level!==e)continue;let l=Li(o,n),h=a.canvas.width/1e3;a.g.setTransform(h,0,0,h,0,0);let c=!1;for(let u of t)u%64>=o.c0&&u%64<o.c1&&(this.drawer.cell(a.g,o,u,l,i.get(u)),c=!0);c&&(a.tex.needsUpdate=!0)}}leaves(e){return[e,this.mag.pages.length/2-e]}height(e,t=this.mag.spread){return Math.max(0,this.leaves(t)[e<0?0:1])*tn}stacks(e,t,i,n){for(let[s,a,o]of[[this.sides[0],e,i],[this.sides[1],t,n]]){let l=a>0;if(s.block.visible=s.top.visible=l,!l){s.page=-1,s.top.userData.page=void 0;continue}let h=a*tn;s.block.scale.y=h,s.block.position.y=h/2-15e-5,s.top.position.y=h,s.page=o,this.set(s.top,o)}this.fold.visible=e>0&&t>0,this.fold.position.y=Math.max(e,t)*tn+2e-4}rest(){let e=this.mag.spread,[t,i]=this.leaves(e);this.front.visible=this.behind.visible=!1,this.front.userData.page=this.behind.userData.page=void 0,this.stacks(t,i,2*e-1,2*e)}begin(e,t,i=.85){let n=Math.min(e,t),s=Math.max(e,t),a=t>e;this.turn={from:e,to:t,lo:n,hi:s,fwd:a,f:a?0:1,goal:null,y:i,drag:!0};let o=this.mag.pages.length/2;this.stacks(n,o-s,2*n-1,2*s),this.set(this.front,2*n),this.set(this.behind,2*s-1),this.front.visible=this.behind.visible=!0,this.bend()}hold(e,t){let i=this.turn;i&&(i.goal=null,i.drag=!0,i.target=Math.acos(rn(e,-1,1))/Math.PI,t!==void 0&&(i.y=rn(t,0,1)))}release(e,t){let i=this.turn;i&&(i.goal=e,i.drag=!1,i.done=t)}cancel(){this.turn=null,this.rest()}grip(){let e=this.turn;return e?this.point(1,e.y):null}update(e){let t=this.turn;if(t){if(t.goal!==null&&t.goal!==void 0){let i=t.goal-t.f,n=1.5+2.6*Math.sin(Math.PI*rn(t.f,.08,.92));if(t.f+=Math.sign(i)*Math.min(Math.abs(i),n*e),Math.abs(t.goal-t.f)<1e-4){let s=t.done;this.turn=null,this.rest(),s&&s();return}}else t.target!==void 0&&(t.f+=(t.target-t.f)*(1-Math.exp(-e*22)));this.bend()}}point(e,t){let i=this.turn,n=new w,s=this.height(1,i.hi)+tn,a=this.height(-1,i.lo)+tn,o=Math.sin(Math.PI*i.f),l=i.fwd?1:-1,h=rn(i.f+l*o*.07*(1-2*Math.abs(t-i.y)),0,1),c=Math.PI*h,u=o*.95*l,d=0,p=0,m=Math.max(1,Math.round(e*Et)),y=e*He/m;for(let g=0;g<m;g++){let _=(g+.5)/Et,v=rn(c-u*(.5-_),0,Math.PI);d+=Math.cos(v)*y,p+=Math.sin(v)*y}let f=s+(a-s)*h;return n.set(d,p+f,(t-.5)*$e)}bend(){let e=this.pos.array,t=this.nor.array,i=this.nor2.array,n=this.turn,s=Et+1,a=this.height(1,n.hi)+tn,o=this.height(-1,n.lo)+tn,l=Math.sin(Math.PI*n.f),h=n.fwd?1:-1;for(let c=0;c<=nn;c++){let u=c/nn,d=rn(n.f+h*l*.07*(1-2*Math.abs(u-n.y)),0,1),p=Math.PI*d,m=l*.95*h,y=a+(o-a)*d,f=0,g=0;for(let _=0;_<=Et;_++){let v=(c*s+_)*3;e[v]=f,e[v+1]=g+y,e[v+2]=(u-.5)*$e;let x=rn(p-m*(.5-(_+.5)/Et),0,Math.PI);t[v]=-Math.sin(x),t[v+1]=Math.cos(x),t[v+2]=0,i[v]=Math.sin(x),i[v+1]=-Math.cos(x),i[v+2]=0,f+=Math.cos(x)*He/Et,g+=Math.sin(x)*He/Et}}this.pos.needsUpdate=this.nor.needsUpdate=this.nor2.needsUpdate=!0}at(e,t){let i=e<0?-1:1,n=this.sides[i<0?0:1];return!n.top.visible||Math.abs(e)>He||Math.abs(t)>$e/2?null:{page:n.page,d:i,x:(i<0?e+He:e)/He,y:(t+$e/2)/He}}world(e,t,i,n=0){let s=e%2?-1:1;return new w((s<0?t-1:t)*He,this.height(s)+n,i*He-$e/2)}};var na=(r,e,t)=>Math.max(e,Math.min(t,r));function mm(){let r=document.createElement("canvas");r.width=r.height=1024;let e=r.getContext("2d");e.fillStyle="#6f4a2c",e.fillRect(0,0,1024,1024);let t=5,i=()=>(t=t*16807%2147483647)/2147483647;for(let s=0;s<5;s++){let a=s*205,o=i()*22-11;e.fillStyle=`rgb(${112+o},${76+o*.8},${46+o*.6})`,e.fillRect(a,0,205,1024);for(let l=0;l<90;l++){let h=a+i()*205,c=4+i()*10,u=i()*6,d=.5+i()*2;e.strokeStyle=`rgba(${i()<.6?"48,26,12":"160,112,72"},${.06+i()*.14})`,e.lineWidth=d,e.beginPath();for(let p=0;p<=1024;p+=32)e.lineTo(h+Math.sin(p/170+u)*c,p);e.stroke()}e.fillStyle="rgba(24,12,5,.55)",e.fillRect(a,0,2.5,1024)}let n=new vi(r);return n.colorSpace=dt,n.wrapS=n.wrapT=cr,n.anisotropy=8,n}function Vu(){let r=new st,e=[[0,0],[.022,0],[.024,.006],[.0185,.034],[.0175,.044],[.024,.078],[.026,.086]].map(([s,a])=>new te(s,a)),t=new Be(new Pi(e,40),new Ws({color:"#ffffff",transparent:!0,opacity:.24,roughness:.05,metalness:0,side:wr,depthWrite:!1})),i=new Be(new Pi([[0,.003],[.021,.003],[.0225,.007],[.017,.034],[.016,.044],[.0222,.074],[0,.074]].map(([s,a])=>new te(s,a)),36),new St({color:"#8a2f0c",roughness:.25,transparent:!0,opacity:.9})),n=new Be(new Pi([[0,0],[.03,0],[.052,.007],[.054,.009],[.031,.0035],[0,.0035]].map(([s,a])=>new te(s,a)),40),new St({color:"#f3efe6",roughness:.4}));return i.castShadow=n.castShadow=n.receiveShadow=!0,r.add(n,i,t),i.position.y=t.position.y=.004,r}var ra=class{constructor(e){this.canvas=e,this.touch=matchMedia("(pointer: coarse)").matches;let t=this.renderer=new Ps({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=mu,t.shadowMap.enabled=!0,t.shadowMap.type=fu,this.scene=new Us,this.scene.background=new we("#1d140d"),this.scene.fog=new Ls("#1d140d",1.6,3.4),this.camera=new bt(32,1,.02,12);let i=mm();i.repeat.set(3,3);let n=new Be(new ni(4,4),new St({map:i,roughness:.62}));n.rotation.x=-Math.PI/2,n.position.y=-5e-4,n.receiveShadow=!0,this.scene.add(n),this.scene.add(new qs("#fff4e2","#6b4c33",1.75));let s=new Ys("#fff0d6",1.7);s.position.set(-.5,1.2,-.45),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.radius=5,s.shadow.bias=-4e-4,s.shadow.normalBias=.002,Object.assign(s.shadow.camera,{left:-.55,right:.55,top:.5,bottom:-.5,near:.4,far:2.6}),this.scene.add(s);let a=Vu();a.position.set(.33,0,-.13),this.scene.add(a);let o=Vu();o.position.set(-.36,0,-.2),o.rotation.y=1,this.scene.add(o),this.cam={x:0,z:0,zoom:1},this.goal={x:0,z:0,zoom:1},this.open=[!0,!0],this.resize(),addEventListener("resize",()=>this.resize())}resize(){let e=innerWidth,t=innerHeight,i=this.touch?3e6:9e6,n=Math.min(devicePixelRatio||1,2);e*t*n*n>i&&(n=Math.sqrt(i/(e*t))),this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}get single(){return this.camera.aspect<.95}fitDistance(){let e=Math.tan(this.camera.fov*Math.PI/360),t=(this.single?He*.5:He)+.028,i=$e/2+.03;return Math.max(i/e,t/(e*this.camera.aspect))}clampGoal(){let e=this.goal;e.zoom=na(e.zoom,.75,6);let t=this.open[0]?-He:0,i=$e/2;e.x=na(e.x,this.open[0]?t:0,this.open[1]?He:0),e.z=na(e.z,-i,i+.02)}home(e=0){this.goal.zoom=1,this.goal.z=0,this.goal.x=this.single?e*He*.5:this.open[0]&&this.open[1]?0:this.open[0]?-He/2:He/2,!this.single&&!(this.open[0]&&this.open[1])&&(this.goal.x*=1)}zoomAt(e,t,i){let n=this.ground(t,i),s=this.goal.zoom;this.goal.zoom*=e,this.clampGoal();let a=1-s/this.goal.zoom;n&&(this.goal.x+=(n.x-this.goal.x)*a,this.goal.z+=(n.z-this.goal.z)*a,this.clampGoal())}pan(e,t){let i=2*Math.tan(this.camera.fov*Math.PI/360)*this.dist()/innerHeight;this.goal.x-=e*i,this.goal.z-=t*i,this.clampGoal()}dist(e=this.cam){return this.fitDistance()/e.zoom}place(e){let t=1-Math.exp(-e*11),i=this.cam;for(let a of["x","z","zoom"])i[a]+=(this.goal[a]-i[a])*t;let n=.2*na((1.9-i.zoom)/.9,0,1),s=this.dist();this.camera.position.set(i.x,Math.cos(n)*s,i.z+Math.sin(n)*s),this.camera.up.set(0,0,-1),this.camera.lookAt(i.x,0,i.z),this.camera.updateMatrixWorld()}ray(e,t){let i=new Zs;return i.setFromCamera(new te(e/innerWidth*2-1,1-t/innerHeight*2),this.camera),i.ray}ground(e,t,i=.004){let{origin:n,direction:s}=this.ray(e,t);if(s.y>-1e-5)return null;let a=(i-n.y)/s.y;return{x:n.x+s.x*a,z:n.z+s.z*a}}render(){this.renderer.render(this.scene,this.camera)}};var gm="./vendor/hand/Hand_Nails_R.gltf",vm=.0272,_m=.875,Gu=1.75;var sa=new w(.0216,-.0335,.0928),Ui=null,vh=null,Wu=0,oa=new Set;function ym(r){let e=Uint8Array.from(atob(r.buffers[0].uri.split(",")[1]),u=>u.charCodeAt(0)),t={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16},i={5121:Uint8Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n=u=>{let d=r.accessors[u],p=r.bufferViews[d.bufferView],m=i[d.componentType],y=d.count*t[d.type],f=(p.byteOffset||0)+(d.byteOffset||0);return new m(e.buffer.slice(e.byteOffset+f,e.byteOffset+f+y*m.BYTES_PER_ELEMENT))},s=r.meshes[0].primitives[0],a=s.attributes,o=new je,l=n(a.POSITION),h=n(a.NORMAL);Mm(l,h),o.setAttribute("position",new Ze(l,3)),o.setAttribute("normal",new Ze(h,3)),o.setAttribute("skinIndex",new Nn(Uint16Array.from(n(a.JOINTS_0)),4)),o.setAttribute("skinWeight",new Ze(n(a.WEIGHTS_0),4)),o.setIndex(new Ze(n(s.indices),1));let c=n(r.skins[0].inverseBindMatrices);Ui={geo:o,nodes:r.nodes,joints:r.skins[0].joints,inv:r.skins[0].joints.map((u,d)=>new Me().fromArray(c,d*16))};for(let u of oa)u.useModel();oa.clear()}function xm(){vh||Wu>2||typeof fetch>"u"||(vh=fetch(new URL(gm,import.meta.url)).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(ym).catch(r=>{console.warn("hands:",r.message||r),vh=null,Wu++}))}function Mm(r,e){let t=-1/0;for(let i=2;i<r.length;i+=3)t=Math.max(t,r[i]);for(let i=0;i<r.length;i+=3){let n=Math.min(1,(r[i+2]-(t-.008))/.008),s=Math.hypot(e[i],e[i+1]);if(n<=0||s<.001)continue;let a=e[i]+(e[i]/s-e[i])*n,o=e[i+1]+(e[i+1]/s-e[i+1])*n,l=e[i+2]*(1-n),h=Math.hypot(a,o,l)||1;e[i]=a/h,e[i+1]=o/h,e[i+2]=l/h}}var bm=["Index","Middle","Ring","Little"].map(r=>["Proximal","Intermediate","Distal"].map(e=>`${r}_${e}_R`)),Sm=["Thumb_Metacarpal_R","Thumb_Proximal_R","Thumb_Distal_R"],Xu=r=>[[1.35,1.6,.95],[1.4,1.65,1],[1.42,1.65,1],[1.45,1.6,1]].map(e=>e.map(t=>t*r)),_h={grip:{f:Xu(.86),s:[0,0,0,0],t:[[-.5,-.2],[-.42,.45],[0,.6]]},bridge:{f:[[.1,.42,.28],[.08,.42,.28],[.1,.42,.28],[.12,.4,.28]],s:[.16,.03,-.12,-.3],t:[[.08,-.17],[-.4,-.6],[0,-.5]]},pinch:{f:[[.75,.75,.4],[.95,.95,.6],[1.1,1.1,.7],[1.2,1.2,.8]],s:[0,0,0,0],t:[[-.6,-.4],[0,.8],[0,.4]]},piece:{f:[[.62,.62,.3],[.72,.66,.34],[.95,.9,.55],[1.05,1,.6]],s:[.04,0,-.02,-.03],t:[[-.5,-.42],[0,.55],[0,.3]]},open:{f:[[.42,.42,.2],[.5,.48,.25],[.7,.7,.4],[.8,.75,.45]],s:[.06,0,-.03,-.06],t:[[-.3,-.5],[0,.35],[0,.15]]},cup:{f:[[.95,1,.5],[1,1.05,.55],[1,1.05,.55],[1,1,.5]],s:[0,0,0,0],t:[[-.5,-.25],[-.2,.5],[0,.5]]},throw:{f:[[.12,.16,.1],[.14,.18,.1],[.16,.2,.12],[.2,.22,.14]],s:[.1,.02,-.06,-.14],t:[[-.1,-.5],[0,.1],[0,.1]]},press:{f:[[.5,.28,.12],[.52,.3,.14],[.56,.34,.18],[.7,.45,.25]],s:[.02,0,-.02,-.04],t:[[-.3,-.3],[0,.3],[0,.3]]},pen:{f:[[.66,.78,.3],[.92,.92,.5],[1.15,1.15,.75],[1.28,1.2,.8]],s:[.02,0,-.01,-.02],t:[[-.55,-.4],[0,.62],[0,.42]]},offer:{f:[[.06,.12,.08],[.08,.12,.08],[.1,.14,.1],[.14,.18,.1]],s:[.03,.01,-.02,-.05],t:[[-.1,-.5],[0,.1],[0,.1]]},shake:{f:[[.42,.42,.3],[.48,.5,.35],[.54,.56,.4],[.6,.6,.4]],s:[.02,0,-.01,-.02],t:[[-.28,-.3],[-.1,.35],[0,.35]]},flat:{f:[[.12,.2,.12],[.14,.22,.14],[.16,.24,.16],[.2,.26,.18]],s:[.05,.01,-.03,-.1],t:[[-.15,-.4],[0,.15],[0,.15]]},fist:{f:Xu(.8),s:[0,0,0,0],t:[[-.5,-.2],[-.42,.45],[0,.6]]},relaxed:{f:[[.3,.4,.25],[.36,.46,.28],[.42,.52,.3],[.48,.55,.32]],s:[.02,0,-.02,-.05],t:[[-.25,-.35],[0,.2],[0,.2]]}},aa={},ju=r=>[...r.f.flatMap((e,t)=>[r.s[t],...e]),...r.t.flat()],wm=new Me,Em=new Lt,Tm=new Pt,la=class{constructor(e,t,i,n=1){this.group=new st,this.side=i,this.mat=t,this.k=e/Gu*n,this.kind="",this.simple=Am(this.k*Gu,t,i),this.group.add(this.simple.group),Ui?this.useModel():(oa.add(this),xm())}useModel(){let e=Ui.nodes.map((o,l)=>{if(!Ui.joints.includes(l))return null;let h=new vr;return h.name=o.name,o.translation&&h.position.fromArray(o.translation),o.rotation&&h.quaternion.fromArray(o.rotation),h.userData.rest=h.quaternion.clone(),h});Ui.nodes.forEach((o,l)=>{if(e[l])for(let h of o.children||[])e[h]&&e[l].add(e[h])});let t=e.find(o=>o&&o.name==="Wrist_R"),i=new st;i.matrixAutoUpdate=!1;let n=_m*this.k;i.matrix.set(0,this.side*n,0,0,n,0,0,0,0,0,-n,vm*n,0,0,0,1);let s=new Fn(Ui.geo,this.mat);i.add(t,s),i.updateMatrixWorld(!0),s.bind(new Os(Ui.joints.map(o=>e[o]),Ui.inv),new Me),s.frustumCulled=!1,s.castShadow=!0,i.traverse(o=>{o.layers.mask=this.group.layers.mask}),this.group.remove(this.simple.group),this.group.add(i),this.mesh=s,this.bones=Object.fromEntries(e.filter(Boolean).map(o=>[o.name,o]));let a=this.kind;this.kind="",this.shape(a||"relaxed")}dispose(){oa.delete(this),this.mesh&&this.mesh.skeleton.dispose()}shape(e){if(e!==this.kind){if(this.kind=e,!this.bones){this.simple.shape(e);return}this.goal=ju(_h[e]||_h.relaxed),this.now||(this.now=this.goal.slice(),this.set())}}step(e){if(!this.bones||!this.goal||this.still===this.kind)return;let t=1-Math.exp(-e*16),i=0;for(let n=0;n<this.now.length;n++){let s=this.goal[n]-this.now[n];this.now[n]+=s*t,i=Math.max(i,Math.abs(s))}this.still=i<.002?this.kind:"",this.set()}set(){let e=this.now,t=(i,n,s)=>i.quaternion.copy(i.userData.rest).multiply(Tm.setFromEuler(Em.set(n,0,s)));bm.forEach((i,n)=>i.forEach((s,a)=>t(this.bones[s],a?0:e[n*4],e[n*4+1+a]))),Sm.forEach((i,n)=>t(this.bones[i],e[16+n*2],e[17+n*2]))}grip(e){if(!this.bones)return{at:sa.clone().multiplyScalar(this.k),tip:new w(.02,-.06,.13).multiplyScalar(this.k)};if(!aa[e]){let t=this.now.slice(),i=this.group,n=i.position.clone(),s=i.quaternion.clone(),a=i.parent;a&&a.remove(i),this.now=ju(_h[e]),this.set(),i.position.set(0,0,0),i.quaternion.identity(),i.updateMatrixWorld(!0);let o=u=>{let d=this.bones[u],p=new w,m=d.matrixWorld,y=d.children.find(g=>g.isBone);if(y)return y.getWorldPosition(p);p.setFromMatrixPosition(m);let f=new w().setFromMatrixPosition(d.parent.matrixWorld);return p.addScaledVector(p.clone().sub(f).normalize(),.018*this.k)},l=o("Thumb_Distal_R"),h=o("Index_Distal_R"),c=o("Middle_Distal_R");l.x*=this.side,h.x*=this.side,c.x*=this.side,aa[e]={at:h.clone().add(c).multiplyScalar(.5).add(l).multiplyScalar(.5).divideScalar(this.k),tip:h.clone().add(c).multiplyScalar(.5).divideScalar(this.k)},this.now=t,this.set(),i.position.copy(n),i.quaternion.copy(s),a&&a.add(i)}return{at:aa[e].at.clone().multiplyScalar(this.k),tip:aa[e].tip.clone().multiplyScalar(this.k)}}place(e,t,i){this.group.position.copy(e);let n=t.clone().normalize(),s=new w().crossVectors(i,n).normalize(),a=new w().crossVectors(n,s);this.group.quaternion.setFromRotationMatrix(wm.makeBasis(s,a,n))}hold(e){this.group.add(e),e.position.set(sa.x*this.side,sa.y,sa.z).multiplyScalar(this.k)}};function Am(r,e,t){let i=new st,n=[],s=(h,c)=>{let u=new Be(h,e);return u.castShadow=!0,c.add(u),u},a=new ti(r*.044,r*.017,r*.052);a.translate(0,0,r*.026),s(a,i),[.036,.042,.04,.032].forEach((h,c)=>{let u=new st;u.position.set((c-1.5)*r*.0105*-t,0,r*.05);let d=s(new Bn(r*.0055,r*h,4,8),u);d.rotation.x=Math.PI/2,d.position.z=r*(h/2+.004),i.add(u),n.push(u)});let o=new st;o.position.set(t*r*.021,-r*.002,r*.012);let l=s(new Bn(r*.0068,r*.03,4,8),o);return l.rotation.x=Math.PI/2,l.position.z=r*.02,i.add(o),{group:i,shape(h){let c=h==="grip"||h==="pinch"||h==="piece"||h==="cup"||h==="fist";n.forEach((u,d)=>{c?u.rotation.set(1.75,0,0):h==="bridge"?u.rotation.set(.12,(d-1.5)*.2*-t,0):u.rotation.set(.6,0,0)}),c?o.rotation.set(.9,-t*.9,0):h==="bridge"?o.rotation.set(-.7,t*.5,0):o.rotation.set(.3,-t*.3,0)}}}var Rm=["orospu","orosbu","oruspu","orusbu","orspu","orsbu","aminakoy","aminako","aminasok","aminkoy","amcik","amcig","siktir","sikerim","sikeyim","sikiyim","sikis","sikik","siksok","yarrak","yarak","yarram","dalyarak","tasak","tassak","pezevenk","kahpe","kaltak","surtuk","yavsak","gavat","pust","ibne","ipne","gotveren","gotlek","gotos","ananisik","bacinisik","serefsiz","gerizekali","dangalak","salak","aptal","kodumun","pickurusu","fuck","phuck","fvck","shit","bitch","biatch","cunt","asshole","bastard","whore","slut","faggot","nigger","nigga","retard","dildo","pussy","penis","vagina","porn","jizz","blowjob","handjob","motherf","molest","pedofil","pedophil","boob","horny","milf","twat","bollock","scheis","arschloch","fotze","wichser","hurensohn","schlampe","ficken","missgeburt","nutte","spasti","putain","connard","connasse","salope","encule","niquer","batard","enfoire","mierda","cabron","gilipollas","pendejo","culero","chingad","chingar","maricon","hijueputa","hijodeputa","joder","cazzo","vaffanculo","fanculo","stronzo","puttana","minchia","coglion","caralho","buceta","fodase","blyat","blyad","pizd","mudak","pidor","pidar","gandon","eblan","yebat","yobany","kurwa","pierdol","spierdal","jebac","kanker","klootzak","godverdomme","chutiya","chutia","bhenchod","behenchod","madarchod","bhosdi","sharmouta","sharmuta","sharmota","kussomak","kussommak","kusomak","metnak","khawal","zebbi","manyok","koskesh","allah","peygamber","prophet","muslim","musluman","hristiyan","hiristiyan","christianity","jesuschrist","yahudi","kafir","gavur","ateist","atheist","satanist","seytan","kilise","sinagog","synagogue","mosque","seriat","sharia","jihad","mezhep","tarikat","selefi","vahhabi","wahhabi","hizbullah","hezbollah","taliban","crusade","namaz","abdest","tekbir","budist","buddhist","vatican","vatikan","dinsiz","islamist","islamci","islamic","erdogan","tayyip","ataturk","kilicdaroglu","bahceli","imamoglu","davutoglu","aksener","ocalan","fethullah","fetullah","hitler","mussolini","stalin","lenin","netanyahu","zelensk","kemalist","kemalizm","ulkucu","apocu","terorist","fascis","fasist","fasizm","faschis","komunist","communis","kommunist","sosyalist","socialis","anarsist","anarchis","zionis","siyonis","kurdistan","marxis","bolsevik","bolshevik","akparti","iyiparti"],yh=new Set(["am","amk","amq","aq","mk","sik","skm","skim","sktr","skt","oc","pic","got","bok","dol","pezo","ass","dick","cock","cum","sex","sexy","tit","tits","fag","rape","rapist","anal","anus","wank","wanker","tosser","hoe","hoes","wtf","stfu","gtfo","fck","fuk","fuq","fk","kkk","fick","hure","spast","nique","pute","putes","fdp","ntm","puta","puto","putas","putos","hdp","verga","cono","pinche","merda","troia","foda","viado","porra","cu","suka","huy","hui","xuy","xyi","xui","chuj","hoer","kut","randi","gaand","jende","god","gott","dieu","dios","tanri","tanrim","kuran","quran","koran","incil","bible","tevrat","torah","zebur","cami","church","cemaat","alevi","sunni","sii","isis","isid","daesh","deas","hacli","pope","din","mesih","hz","satan","jew","jews","deist","rte","pkk","ypg","pyd","ypj","dhkp","dhkpc","hdp","akp","chp","mhp","feto","nazi","nazis","neonazi","putin","trump","biden","obama","hamas","marx","inonu"]),Cm=["блят","бляд","сука","пизд","хуй","хуе","ебат","ебан","мудак","пидор","пидар","гандон","шлюх","залуп","شرموط","منيوك","قحبة","عرص","كسمك"],Im=["бля","كس","نيك","زبي"],Pm={ı:"i",ß:"ss",æ:"ae",œ:"oe",ø:"o",đ:"d",ł:"l",þ:"th",ð:"d"},Lm={а:"a",в:"b",е:"e",к:"k",м:"m",н:"h",о:"o",р:"p",с:"c",т:"t",у:"y",х:"x",і:"i",ј:"j",ѕ:"s",α:"a",β:"b",ε:"e",η:"n",ι:"i",κ:"k",ν:"v",ο:"o",ρ:"p",τ:"t",υ:"u",χ:"x"},Um={0:"o",1:"i",2:"z",3:"e",4:"a",5:"s",6:"g",7:"t",8:"b",9:"g"},xh=r=>r.toLowerCase().normalize("NFD").replace(/\p{M}+/gu,"").replace(/[ıßæœøđłþð]/g,e=>Pm[e]),ha=r=>r.replace(/(.)\1+/g,"$1"),Dm=[...new Set(Rm.flatMap(r=>[r,ha(r)]).filter(r=>r.length>=4))],Nm=new Set([...yh].map(ha).filter(r=>r.length>=3)),Om=Cm.map(xh),km=new Set(Im.map(xh));function qu(r){if(!r.length)return!1;let e=r.join("");for(let i of[...r,e]){let n=ha(i);if(yh.has(i)||yh.has(n)||Nm.has(n))return!0}let t=ha(e);return Dm.some(i=>e.includes(i)||t.includes(i))}function Fm(r){let e=xh(String(r||""));if(Om.some(n=>e.includes(n))||e.split(/\s+/).some(n=>km.has(n)))return!0;let t=e.replace(/./gu,n=>Lm[n]||n),i=n=>n.split(/[^a-z0-9]+/).filter(Boolean);return qu(i(t))||qu(i(t.replace(/[0-9]/g,n=>Um[n])))}var Bm=/[^\p{L}\p{N} ]/gu;var zm=(r,e,t)=>Array.from(String(r||"").replace(e,"").replace(/\s+/g," ").trim()).slice(0,t).join("").trim();function Yu(r){let e=zm(r,Bm,16);return e&&!Fm(e)?e:""}function Hm(r){let e=[{kind:"cover"},{kind:"contents"},{kind:"howto"}],t=r.filter(n=>n.w<=20),i=r.filter(n=>n.w>20);for(let n of t)e.push({kind:"grid",level:n.id,c0:0,c1:n.w});i.length&&e.length%2===0&&e.push({kind:"notes"});for(let n of i){let s=Math.ceil(n.w/2);e.push({kind:"grid",level:n.id,c0:0,c1:s,wide:!0},{kind:"grid",level:n.id,c0:s,c1:n.w,wide:!0})}return e.length%2===0&&e.push({kind:"notes"}),e.push({kind:"back"}),e}var Xn=class{constructor(e){this.levels=e,this.pages=Hm(e),this.grids=new Map(e.map(t=>[t.id,new ea(t)])),this.progress=new Map(e.map(t=>[t.id,new Tr(this.grids.get(t.id))])),this.spread=0,this.n=0}get spreads(){return this.pages.length/2+1}pageOf(e,t=null){return this.pages.findIndex(i=>i.level===e&&(t===null||fh(t)>=i.c0&&fh(t)<i.c1))}do(e,t){let i=jn(e);if(!i)return null;let n=null;if(i.t==="turn"){if(i.to===this.spread||i.to>=this.spreads)return null;n={t:"turn",from:this.spread,to:i.to},this.spread=i.to}else{let s=this.progress.get(i.l);if(!s)return null;if(i.t==="set"){let a=s.set(i.k,i.ch,t);if(!a)return null;n={t:"set",l:i.l,k:i.k,...a,solved:s.solved&&a.completed.length>0}}else{let a=s.erase(i.ks);if(!a.length)return null;n={t:"erase",l:i.l,gone:a}}}return this.n++,{...n,who:t}}save(){return{v:1,n:this.n,spread:this.spread,p:Object.fromEntries([...this.progress].filter(([,e])=>e.letters.size).map(([e,t])=>[e,t.save()]))}}load(e){if(!e||e.v!==1||!e.p||typeof e.p!="object")return!1;this.n=Number.isInteger(e.n)&&e.n>=0?e.n:0,this.spread=Number.isInteger(e.spread)&&e.spread>=0&&e.spread<this.spreads?e.spread:0;for(let t of this.progress.keys())this.progress.set(t,Tr.load(this.grids.get(t),Object.hasOwn(e.p,t)?e.p[t]:[]));return!0}},Zu=r=>Number.isInteger(r)&&r>=0&&r<4096,Ju=r=>typeof r=="string"&&/^[a-z0-9-]{1,48}$/.test(r);function jn(r){return!r||typeof r!="object"?null:r.t==="turn"?Number.isInteger(r.to)&&r.to>=0&&r.to<1e3?{t:"turn",to:r.to}:null:r.t==="set"?Ju(r.l)&&Zu(r.k)&&typeof r.ch=="string"&&r.ch.length<=2&&Qi(r.ch)?{t:"set",l:r.l,k:r.k,ch:Rt(r.ch)}:null:r.t==="erase"&&Ju(r.l)&&Array.isArray(r.ks)&&r.ks.length&&r.ks.length<=200&&r.ks.every(Zu)?{t:"erase",l:r.l,ks:[...r.ks]}:null}var Mh=6,bh=2*6e4,Vm=2e4,Gm=1200,Wm=2*6e4,Xm=3,jm=5*6e4,qm=40,Cr=["#ffdbac","#f1c27d","#e0ac69","#c68642","#8d5524","#5c3a1e"],Di=["#31517a","#8a3b34","#3f6b4b","#7a5a2e","#5b4a86","#2f2f36"],ua=r=>String(r||"").trim().slice(0,20),Ym=r=>typeof r=="string"&&/^[a-z0-9]{8,24}$/.test(r)?r:"",Sh=r=>typeof r=="string"&&/^[a-z0-9]{16,32}$/.test(r)?r:"",da=(r=10)=>{let e=new Uint8Array(r);return crypto.getRandomValues(e),Array.from(e,t=>"abcdefghijkmnpqrstuvwxyz23456789"[t&31]).join("")},Ku=(r,e)=>Number.isInteger(r)&&r>=0&&r<e?r:0;function si(r){let e=String(r&&r.name||"").slice(0,64);return{name:Yu(e)||"Oyuncu",skin:Ku(r&&r.skin,Cr.length),sleeve:Ku(r&&r.sleeve,Di.length),left:!!(r&&r.left)}}var ca=class{constructor(e,t,i,n=Date.now){this.mag=t,this.hooks=i,this.now=n,this.members=new Map([[1,{id:1,profile:si(e),away:0,link:null,who:"",key:""}]]),this.links=new Map,this.bans=new Map,this.kicks=[],this.nextId=2,this.pass="",this.closed=!1,this.writing=new Map}admit(e,t){t=t&&typeof t=="object"?t:{};let i=Ym(t.who),n=Sh(t.key),s=i?this.bans.get(i):0,a=n?[...this.members.values()].find(c=>c.key===n):null,o=!!this.pass&&ua(t.pass)!==this.pass,l=this.closed?"closed":s&&s>this.now()?s===1/0?"banned":"kicked":a?"":o?"password":this.members.size>=Mh?"full":"";if(l)return{why:l};if(a){let c=a.link;return c&&(this.links.delete(c),c.send({t:"error",why:"replaced"}),c.close()),a.link=e,a.who=i||a.who,this.links.set(e,{id:a.id,who:a.who,key:n,seen:this.now()}),{id:a.id,back:!0}}let h=this.nextId++;return this.links.set(e,{id:h,who:i,key:n,seen:this.now()}),{id:h}}hello(e,t){let i=this.links.get(e);if(!i)return!1;let n=si(t),s=this.members.get(i.id);if(s){let a=s.away;return s.profile=n,s.away=0,s.link=e,this.hooks.changed(),a&&this.hooks.note("back",n.name),!0}return this.members.size>=Mh?(e.send({t:"error",why:"full"}),this.links.delete(e),e.close(),!1):(this.members.set(i.id,{id:i.id,profile:n,away:0,link:e,who:i.who,key:i.key}),this.hooks.changed(),this.hooks.note("joined",n.name),!0)}member(e){let t=this.links.get(e);return t&&this.members.get(t.id)||null}heard(e){let t=this.links.get(e);return t&&(t.seen=this.now()),!!t}lost(e){let t=this.links.get(e);if(!t)return;this.links.delete(e);let i=this.members.get(t.id);if(!(!i||i.link!==e)){if(i.link=null,this.writing.delete(i.id),this.closed||!i.key){this.remove(i.id,"left");return}i.away=this.now(),this.hooks.changed(),this.hooks.note("lost",i.profile.name)}}leave(e){let t=this.member(e);this.links.delete(e),t&&this.remove(t.id,"left")}remove(e,t){let i=this.members.get(e);!i||e===1||(this.members.delete(e),this.writing.delete(e),i.link&&this.links.delete(i.link),this.hooks.changed(),t&&this.hooks.note(t,i.profile.name))}tick(){let e=this.now();for(let t of[...this.members.values()])t.away&&e-t.away>bh&&this.remove(t.id,"left");for(let[t,i]of[...this.links])e-i.seen>Vm&&(this.lost(t),t.close())}wake(){for(let e of this.links.values())e.seen=this.now()}kick(e,t){let i=this.members.get(e),n=this.now();if(!i||e===1||(this.kicks=this.kicks.filter(a=>n-a<jm),this.kicks.length>=Xm))return!1;this.kicks.push(n),i.who&&this.bans.set(i.who,t?1/0:n+Wm);let s=i.link;return s&&(s.send({t:"error",why:t?"banned":"kicked"}),this.links.delete(s),s.close()),this.remove(e,t?"banned":"kicked"),!0}wrote(e,t){t?this.writing.set(e,this.now()):this.writing.delete(e)}someoneWrites(e){return[...this.writing].some(([t,i])=>t!==e&&this.now()-i<Gm)}act(e,t){let i=this.members.get(e),n=this.now();return!i||e!==1&&((!i.rate||n-i.rate.at>=1e3)&&(i.rate={at:n,n:0}),++i.rate.n>qm)||t&&t.t==="turn"&&this.someoneWrites(e)?null:this.mag.do(t,e)}message(){return{t:"room",members:[...this.members.values()].map(e=>({id:e.id,profile:e.profile,away:!!e.away}))}}},Rr=(r,e,t)=>typeof r=="number"&&Number.isFinite(r)&&r>=e&&r<=t;function $u(r){return!r||!Array.isArray(r.members)?null:r.members.slice(0,Mh).filter(e=>e&&Number.isInteger(e.id)).map(e=>({id:e.id,profile:si(e.profile),away:!!e.away}))}function wh(r){return!r||typeof r!="object"?null:r.k==="rest"?{k:"rest"}:r.k==="turn"?Rr(r.f,0,1)&&(r.d===1||r.d===-1)?{k:"turn",d:r.d,f:r.f,y:Rr(r.y,0,1)?r.y:.8}:null:(r.k==="pen"||r.k==="write"||r.k==="erase")&&Rr(r.x,-1.5,1.5)&&Rr(r.y,-.5,1.5)?{k:r.k,x:r.x,y:r.y}:null}function Eh(r){return!r||!Number.isInteger(r.s)||r.s<0||!Number.isInteger(r.page)||r.page<0||r.page>999||!Array.isArray(r.p)||r.p.length>128||r.p.length%2||!r.p.every(e=>Rr(e,-.2,2))?null:{s:r.s,page:r.page,p:r.p,end:!!r.end}}var Qu=new ei({colorWrite:!1});function Zm(r){if(r.userData.veil)return;let e=r.isSkinnedMesh?new Fn(r.geometry,Qu):new Be(r.geometry,Qu);r.isSkinnedMesh&&e.bind(r.skeleton,r.bindMatrix),e.frustumCulled=!1,e.renderOrder=4,e.visible=!1,r.renderOrder=5,r.userData.veil=e,r.add(e)}var _i=(r,e,t)=>new w(r,e,t),pa=_i(0,1,0),Jm=1.72,Km=_i(.047,.027,.057),$m=.046;function Qm(r){let e=new st,t=.135,i=(s,a=.5)=>new St({color:s,roughness:a}),n=(s,a,o)=>{let l=new Be(s,a);return l.position.y=o,l.castShadow=!0,e.add(l),l};return n(new xr(9e-4,.004,10).rotateX(Math.PI),i("#2a2a2e"),.002),n(new qt(.0036,9e-4,.013,6),i("#d9b483",.8),.0102),n(new qt(.0036,.0036,t,6),i(r),.0165+t/2),n(new qt(.0038,.0038,.011,12),i("#b9bcc2",.3),.0165+t+.0055),n(new qt(.0036,.0036,.009,12),i("#d98a8a",.9),.0165+t+.0155),e}var fa=class{constructor(e,t,i,n){this.side=i,this.hand=new la(Jm,t.skin,i),this.group=new st,this.group.add(this.hand.group),this.sleeve=new Be(new qt(.0285,.044,1,22,1,!1).translate(0,-.5,0),t.sleeve),this.cuff=new Be(new qt(.0292,.0298,.02,24,1,!1),t.cuff),this.sleeve.castShadow=this.cuff.castShadow=!0,this.group.add(this.sleeve,this.cuff),n&&(this.pencil=Qm(t.pencil),this.hand.group.add(this.pencil),this.tip=_i(0,0,0),this.fit()),e.add(this.group),this.p=_i(0,.02,.4),this.goal=this.p.clone(),this.mode="rest",this.k=14}fit(){if(!this.pencil||this.fitted===(this.hand.bones?2:1))return;this.fitted=this.hand.bones?2:1;let e=this.hand.grip("pen").at,t=Km.clone().sub(e).normalize();this.tip.copy(e).addScaledVector(t,-$m),this.tip.x*=this.side,t.x*=this.side,this.pencil.quaternion.setFromUnitVectors(pa,t),this.pencil.position.copy(this.tip)}dispose(e){e.remove(this.group),this.hand.dispose(),this.sleeve.geometry.dispose()}},Ir=class{constructor(e,t,i,{name:n="",mine:s=!1}={}){this.scene=e,this.angle=i,this.mine=s,this.mats={skin:new St({color:Cr[t.skin],roughness:.62}),sleeve:new St({color:Di[t.sleeve],roughness:.9}),cuff:new St({color:"#f2f0ea",roughness:.8}),pencil:Di[t.sleeve]},this.ws=t.left?-1:1,this.write=new fa(e,this.mats,this.ws,!0),this.other=new fa(e,this.mats,-this.ws,!1);for(let a of[this.write,this.other])a.p=this.home(a),a.goal=a.p.clone();n&&(this.tag=eg(n,Di[t.sleeve]),e.add(this.tag)),this.alpha=1,this.faint=1,this.away=!1,this.seen=-1e9}dispose(){this.write.dispose(this.scene),this.other.dispose(this.scene),this.tag&&(this.scene.remove(this.tag),this.tag.material.map.dispose())}turn(e){return e.applyAxisAngle(pa,this.angle)}home(e){let t=Math.abs(Math.sin(this.angle));return this.turn(_i(e.side*(.235+.02*t),.014,$e/2+.035+t*.1))}shoulder(e){return this.turn(_i(e.side*.24,.22,.74+Math.abs(Math.sin(this.angle))*.16))}pen(e,t){let i=this.write;i.mode=t?"write":"pen",i.goal.copy(e),t||(i.goal.y+=.012),i.k=t?60:24}erase(e){let t=this.write;t.mode="erase",t.goal.copy(e),t.k=45}leaf(e,t){let i=this.angle>2||this.angle<-2?-1:1,n=(t>0?1:-1)*i===this.write.side?this.write:this.other;n.mode="leaf",n.goal.copy(e),n.k=34;let s=n===this.write?this.other:this.write;s.mode==="leaf"&&this.restArm(s)}restArm(e){e.mode="rest",e.goal.copy(this.home(e)),e.k=7}rest(){this.restArm(this.write),this.restArm(this.other)}letLeaf(){for(let e of[this.write,this.other])e.mode==="leaf"&&this.restArm(e)}get tip(){return this.write.p}update(e,t=1){let i=this.write.mode!=="rest"||this.other.mode!=="rest",n=(this.away?.35:!this.mine&&i?.55:1)*(this.mine&&(this.write.mode==="write"||this.write.mode==="pen")?t>1.6?.42:.7:1)*this.faint;this.alpha+=(n-this.alpha)*(1-Math.exp(-e*8));let s=this.alpha>.985;for(let a of[this.write,this.other]){a.group.visible=this.alpha>.02;for(let o of[a.hand.mesh,a.sleeve,a.cuff])o&&(Zm(o),o.userData.veil.visible=!s)}for(let a of[this.mats.skin,this.mats.sleeve,this.mats.cuff])a.transparent===s&&(a.transparent=!s,a.needsUpdate=!0),a.opacity=s?1:this.alpha;for(let a of[this.write,this.other])a.p.lerp(a.goal,1-Math.exp(-e*a.k)),this.pose(a,e);this.tag&&(this.tag.position.copy(this.write.p).add(this.turn(_i(.03*this.ws,.06,.06))),this.tag.material.opacity=this.away?.4:1)}pose(e,t){let i=e.side,n=this.shoulder(e),s=e.p.clone().sub(n).setY(0).normalize(),a,o,l,h,c=.34,u=.5;e.mode==="leaf"?(h="piece",c=.5,u=.25):e===this.write?(h="pen",c=.3,u=.95,e.mode==="rest"&&(c=.2,u=.8)):(h="flat",c=.1,u=.06),a=s.clone().multiplyScalar(Math.cos(c)).addScaledVector(pa,-Math.sin(c)),o=pa.clone().multiplyScalar(Math.cos(c)).addScaledVector(s,Math.sin(c)).applyAxisAngle(a,u*i),e.mode==="leaf"?l=e.hand.grip("piece").at.clone():e===this.write?(e.fit(),l=e.tip.clone()):l=_i(0,-.016,.085);let d=new w().crossVectors(o,a).normalize(),p=new w().crossVectors(a,d),m=e.p.clone().addScaledVector(d,-l.x).addScaledVector(p,-l.y).addScaledVector(a,-l.z);e.hand.place(m,a,o),e.hand.shape(h),e.hand.step(t);let y=n.clone().sub(m),f=y.length();y.normalize();let g=m.clone().addScaledVector(y,.016);e.sleeve.position.copy(g),e.sleeve.scale.set(1,f,1),e.sleeve.quaternion.setFromUnitVectors(_i(0,-1,0),y),e.cuff.position.copy(g).addScaledVector(y,-.004),e.cuff.quaternion.copy(e.sleeve.quaternion)}};function eg(r,e){let t=document.createElement("canvas");t.width=512,t.height=112;let i=t.getContext("2d");i.fillStyle=e,i.beginPath(),i.roundRect(4,4,504,104,52),i.fill(),i.fillStyle="#fff",i.font='700 54px "Avenir Next", "Segoe UI", Roboto, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(r,256,58,460);let n=new vi(t);n.colorSpace=dt;let s=new Ns(new gr({map:n,transparent:!0,depthTest:!1,fog:!1}));return s.scale.set(.05,.011,1),s.renderOrder=10,s}var Th=[Math.PI,Math.PI/2,-Math.PI/2,Math.PI*.76,-Math.PI*.76];var ma=900,tg=7e-4,ga=class{constructor(e,t){this.group=new st,this.group.renderOrder=3,e.add(this.group),this.book=t,this.map=new Map,this.mats=new Map}mat(e){let t=this.mats.get(e);return t||(t=new ei({color:e,side:wr,fog:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),this.mats.set(e,t)),t}stroke(e,t,i,n,s=1){let a=this.map.get(e);if(!a){let u=new je;u.setAttribute("position",new Ze(new Float32Array(ma*6),3).setUsage(Vn));let d=new Uint16Array((ma-1)*6);for(let p=0;p<ma-1;p++)d.set([p*2,p*2+1,p*2+2,p*2+1,p*2+3,p*2+2],p*6);u.setIndex(new Ze(d,1)),a={mesh:new Be(u,this.mat(n)),n:0,page:t},a.mesh.frustumCulled=!1,a.mesh.renderOrder=3,this.group.add(a.mesh),this.map.set(e,a)}if(a.mesh.material=this.mat(s<1?"#9b8f7a":n),a.n===i.length)return;a.n=i.length;let o=i.length===1?[i[0],{...i[0],x:i[0].x+.0035}]:i,l=Math.max(1,Math.ceil(o.length/ma)),h=a.mesh.geometry.attributes.position,c=0;for(let u=0;u<o.length;u+=l){let d=o[Math.max(0,u-1)],p=o[Math.min(o.length-1,u+1)],m=o[u],y=p.x-d.x,f=p.y-d.y,g=Math.hypot(y,f)||1;y/=g,f/=g;let _=this.book.world(t,m.x,m.y,4e-4),v=tg*(m.w||1);h.setXYZ(c*2,_.x-f*v,_.y,_.z+y*v),h.setXYZ(c*2+1,_.x+f*v,_.y,_.z-y*v),c++}h.needsUpdate=!0,a.mesh.geometry.setDrawRange(0,(c-1)*6)}remove(e){let t=this.map.get(e);t&&(this.group.remove(t.mesh),t.mesh.geometry.dispose(),this.map.delete(e))}keep(e){for(let t of[...this.map.keys()])e.has(t)||this.remove(t)}show(e,t){for(let i of this.map.values())i.mesh.visible=t&&e.includes(i.page)}};function ed(r,e,t){let i=r.grid.letters.get(e),n=t.filter(o=>ph(o.text)||Rt(o.text)===i).map(o=>Rt(o.text));if(!n.length||i===void 0)return null;let s=n.indexOf(i);if(s!==-1&&s<=3)return i;let a=n.findIndex(o=>r.normalize(o,e)===i);return a!==-1&&a<=3?i:n[0]}function Ah(r){let e=1/0,t=1/0,i=-1/0,n=-1/0;for(let s of r)e=Math.min(e,s.x),t=Math.min(t,s.y),i=Math.max(i,s.x),n=Math.max(n,s.y);return{x0:e,y0:t,x1:i,y1:n}}function Rh(r,e,t=new Map){let i=Ah(r),n=(i.x0+i.x1)/2,s=(i.y0+i.y1)/2,a=e(n,s);if(a!==null&&t.has(a))return a;if(Math.max(i.x1-i.x0,i.y1-i.y0)<.45){let o=null,l=.35;for(let[h,c]of t){let u=Math.max(c.x0-n,0,n-c.x1),d=Math.max(c.y0-s,0,s-c.y1),p=Math.hypot(u,d);p<l&&d>=u&&(l=p,o=h)}if(o!==null)return o}return a}var ig=(r,e,t,i)=>{let n=(e.x-r.x)*(i.y-t.y)-(e.y-r.y)*(i.x-t.x);if(!n)return!1;let s=((i.x-t.x)*(r.y-t.y)-(i.y-t.y)*(r.x-t.x))/n,a=((e.x-r.x)*(r.y-t.y)-(e.y-r.y)*(r.x-t.x))/n;return s>=0&&s<=1&&a>=0&&a<=1};function td(r,e,t){for(let i=1;i<r.length;i++)if(ig(r[i-1],r[i],e,t))return!0;return!1}var ng=500,id=128,_a=class{constructor(e,t,i=globalThis){this.h=e,this.engine=t,this.timers=i,this.inks=new Map,this.queue=[],this.live=null,this.busy=null,this.rev=new Map,this.id=1}key(e,t){return`${e} ${t}`}open(e){let t=new Map;for(let i of this.inks.values())i.level===e&&!i.sent&&t.set(i.k,Ah(i.strokes.flatMap(n=>n.points)));return t}hasInk(e,t){let i=this.inks.get(this.key(e,t));return!!i&&!i.sent}down(e,t,i=!1){this.live&&this.cancel();let n=this.h.cellAt(e,t.x,t.y),s=this.h.progress(e);return n===null&&!i&&Rh([t],(a,o)=>this.h.cellAt(e,a,o),this.open(e))===null||n!==null&&!i&&s.locked(n)&&!this.open(e).size?!1:(this.live={id:this.id++,level:e,points:[t],erase:i,cells:new Set(n===null?[]:[n]),hit:new Set,late:new Set},nd(this),this.h.changed(),!0)}move(e){let t=this.live;if(!t)return;let i=t.points[t.points.length-1];if(t.points.push(e),t.erase){let n=Math.max(1,Math.ceil(Math.hypot(e.x-i.x,e.y-i.y)/.25));for(let s=1;s<=n;s++){let a=this.h.cellAt(t.level,i.x+(e.x-i.x)*s/n,i.y+(e.y-i.y)*s/n);a!==null&&t.cells.add(a)}for(let s of this.inks.values())if(s.level===t.level)for(let a of s.strokes)td(a.points,i,e)&&t.hit.add(a.id)}this.h.changed()}up(){let e=this.live;if(this.live=null,!e)return null;if(e.erase)return this.finishErase(e),va(this),null;let t=Rh(e.points,(s,a)=>this.h.cellAt(e.level,s,a),this.open(e.level));if(t===null||e.late.has(t)||this.h.progress(e.level).locked(t))return va(this),this.h.changed(),null;let i=this.key(e.level,t),n=this.inks.get(i);return(!n||n.sent)&&(n={level:e.level,k:t,strokes:[],rev:this.rev.get(i)||0},this.inks.set(i,n)),n.strokes.push({id:e.id,points:e.points}),this.queue=this.queue.filter(s=>s!==i),this.queue.push(i),va(this),this.h.changed(),{level:e.level,k:t}}cancel(){this.live=null,va(this),this.h.changed()}finishErase(e){for(let[n,s]of this.inks)s.strokes=s.strokes.filter(a=>!e.hit.has(a.id)),(!s.strokes.length||s.level===e.level&&e.cells.has(s.k))&&this.drop(n);let t=this.h.progress(e.level),i=[...e.cells].filter(n=>t.letters.has(n)&&!t.locked(n));i.length&&this.h.erase(e.level,i),this.h.changed()}drop(e){this.inks.delete(e),this.queue=this.queue.filter(t=>t!==e)}touched(e,t){let i=!1;if(this.live&&this.live.level===e)for(let n of t)this.live.late.add(n);for(let n of t){let s=this.key(e,n);this.rev.set(s,(this.rev.get(s)||0)+1),this.inks.has(s)&&(this.drop(s),i=!0)}for(let[n,s]of this.inks)s.level===e&&this.h.progress(e).locked(s.k)&&(this.drop(n),i=!0);i&&this.h.changed()}reset(){for(let[e,t]of this.inks)t.sent&&this.drop(e);this.h.changed()}async read(){if(this.busy){this.again=!0;return}do for(this.again=!1;this.queue.length&&!this.live;){let e=this.queue.shift(),t=this.inks.get(e);if(!t||t.sent||!t.strokes.length)continue;let i=t.strokes.slice(),n=()=>this.inks.get(e)===t&&t.rev===(this.rev.get(e)||0)&&i.every(o=>t.strokes.includes(o))&&t.strokes.length===i.length;this.busy=t,this.h.changed();let s=[];try{s=await this.engine.recognize(i.map(o=>o.points.map(l=>({x:l.x*id,y:l.y*id,t:l.t}))))}catch(o){console.warn("ink:",o.message||o)}if(this.busy=null,!n())continue;let a=ed(this.h.progress(t.level),t.k,s);a!==null&&(t.sent=!0,t.ch=a,this.h.set(t.level,t.k,a)),this.h.changed()}while(this.again&&this.queue.length&&!this.live)}};function nd(r){r.timer&&r.timers.clearTimeout(r.timer),r.timer=0}function va(r){nd(r),r.queue.length&&(r.timer=r.timers.setTimeout(()=>{r.timer=0,r.read()},ng))}function rd(r){let e=1/0,t=1/0,i=-1/0,n=-1/0;for(let p of r)for(let[m,y]of p)m<e&&(e=m),m>i&&(i=m),y<t&&(t=y),y>n&&(n=y);let s=Math.max(i-e,n-t,1e-6),a=(e+i)/2,o=(t+n)/2,l=576,h=19,c=new Float32Array(6*l),u=p=>p<0?0:p>23?23:p,d=(p,m,y,f,g)=>{let _=p*h+11.5,v=m*h+23/2,x=Math.floor(_),A=Math.floor(v),E=_-x,I=v-A,D=Math.atan2(f,y),N=y||f?1:0;for(let B=0;B<4;B++){let G=B&1,z=B>>1,X=(G?E:1-E)*(z?I:1-I),V=u(A+z)*24+u(x+G);c[V]+=X;for(let q=0;q<4;q++)c[(q+1)*l+V]+=X*N*Math.max(0,Math.abs(Math.cos(D-q*Math.PI/4))*2-1);c[5*l+V]+=X*g}};for(let p of r){if(!p.length)continue;let m=p.map(([v,x])=>[(v-a)/s,(x-o)/s]).filter((v,x,A)=>x===0||Math.hypot(v[0]-A[x-1][0],v[1]-A[x-1][1])>1e-6),y=[],f=[0];for(let v=1;v<m.length;v++)y.push(Math.hypot(m[v][0]-m[v-1][0],m[v][1]-m[v-1][1])),f.push(f[v-1]+y[v-1]);let g=f[f.length-1];if(g<1e-6){d(m[0][0],m[0][1],0,0,2);continue}let _=Math.max(2,Math.ceil(g/.02)+1);for(let v=0,x=0;v<_;v++){let A=g*v/(_-1);for(;x<y.length-1&&f[x+1]<=A;)x++;let E=m[x+1][0]-m[x][0],I=m[x+1][1]-m[x][1],D=y[x]>1e-9?(A-f[x])/y[x]:0,N=Math.max(y[x],1e-9);d(m[x][0]+E*D,m[x][1]+I*D,E/N,I/N,v===0||v===_-1?1:0)}}for(let p=0;p<c.length;p++)c[p]>1.5&&(c[p]=1.5);return c}var sg=r=>Int8Array.from(atob(r),e=>e.charCodeAt(0)<<24>>24),ya=class{constructor(e){this.classes=[...e.classes],this.letters=this.classes.findIndex(t=>t==="0"),this.layers=e.layers.map(t=>{let i=sg(t.w),n=t.shape[0],s=i.length/n,a=new Float32Array(i.length);for(let o=0;o<n;o++)for(let l=0;l<s;l++)a[o*s+l]=i[o*s+l]*t.s[o];return{shape:t.shape,w:a,b:Float32Array.from(t.b)}})}logits(e){let t=rd(e),i=24;for(let n=0;n<3;n++)t=lg(og(t,this.layers[n],i),this.layers[n].shape[0],i),i>>=1;return sd(sd(t,this.layers[3],!0),this.layers[4],!1)}candidates(e,{kind:t="letter",least:i=ag,max:n=8}={}){let s=this.logits(e),a=u=>u>=this.letters&&u<this.letters+10,o=this.classes.map((u,d)=>d).filter(u=>t==="any"||a(u)===(t==="digit")),l=Math.max(...o.map(u=>s[u])),h=o.reduce((u,d)=>u+Math.exp(s[d]-l),0);return o.map(u=>({text:this.classes[u],score:Math.exp(s[u]-l)/h})).sort((u,d)=>d.score-u.score).filter((u,d)=>d===0||u.score>=i).slice(0,n)}},ag=.01;function og(r,{shape:[e,t],w:i,b:n},s){let a=new Float32Array(e*s*s);for(let o=0;o<e;o++){let l=o*s*s;for(let h=l;h<l+s*s;h++)a[h]=n[o];for(let h=0;h<t;h++)for(let c=0;c<3;c++)for(let u=0;u<3;u++){let d=i[((o*t+h)*3+c)*3+u],p=c-1,m=u-1;if(!d)continue;let y=Math.max(0,-p),f=Math.min(s,s-p),g=Math.max(0,-m),_=Math.min(s,s-m);for(let v=y;v<f;v++){let x=l+v*s,A=h*s*s+(v+p)*s+m;for(let E=g;E<_;E++)a[x+E]+=d*r[A+E]}}}for(let o=0;o<a.length;o++)a[o]<0&&(a[o]=0);return a}function lg(r,e,t){let i=t>>1,n=new Float32Array(e*i*i);for(let s=0;s<e;s++)for(let a=0;a<i;a++)for(let o=0;o<i;o++){let l=s*t*t+a*2*t+o*2;n[s*i*i+a*i+o]=Math.max(r[l],r[l+1],r[l+t],r[l+t+1])}return n}function sd(r,{shape:[e,t],w:i,b:n},s){let a=new Float32Array(e);for(let o=0;o<e;o++){let l=n[o];for(let h=0;h<t;h++)l+=i[o*t+h]*r[h];a[o]=s&&l<0?0:l}return a}var hg="tr-TR",Ch=class r{constructor(e){this.model=e,this.name="browser"}static async load(e=new URL("./weights.json",import.meta.url)){let t=await fetch(e);if(!t.ok)throw new Error(`handwriting model: ${t.status}`);return new r(new ya(await t.json()))}async recognize(e){return this.model.candidates(e.map(t=>t.map(i=>[i.x,i.y])))}};function cg(r=globalThis){if(r.CwordsInk&&typeof r.CwordsInk.postMessage=="function")return{send:t=>r.CwordsInk.postMessage(t)};let e=r.chrome&&r.chrome.webview;return e?{send:t=>e.postMessage(t),listen:t=>e.addEventListener("message",i=>t(i.data))}:null}var Ih=class{constructor(e,t=globalThis,i=4e3){this.port=e,this.timeout=i,this.next=1,this.waiting=new Map,this.name="native";let n=s=>this.reply(s);t.cwordsInkReply=n,e.listen&&e.listen(n)}reply(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return}let i=t&&this.waiting.get(t.id);i&&(this.waiting.delete(t.id),clearTimeout(i.timer),t.ok?i.res(t):i.rej(new Error(String(t.error||"failed"))))}ask(e,t={},i=this.timeout){let n=this.next++;return new Promise((s,a)=>{let o=setTimeout(()=>{this.waiting.delete(n),a(new Error(`${e}: no answer`))},i);this.waiting.set(n,{res:s,rej:a,timer:o});try{this.port.send(JSON.stringify({id:n,op:e,model:hg,...t}))}catch(l){clearTimeout(o),this.waiting.delete(n),a(l)}})}async ready(){let e=await this.ask("ready",{},1500);return this.name=e.backend||"native",!!e.ready}async recognize(e){let t=await this.ask("recognize",{ink:{strokes:e.map(i=>({points:i.map(n=>({x:n.x,y:n.y,t:Math.round(n.t)}))}))},context:{preContext:"",writingArea:{width:128,height:128}}});return(Array.isArray(t.candidates)?t.candidates:[]).filter(i=>i&&typeof i.text=="string").map(i=>({text:i.text,score:Number(i.score)||0}))}},xa=class r{constructor(e,t){this.native=e,this.browser=t,this.use=null,this.tried=-1e9}static async create(e=()=>Ch.load(),t=globalThis){let i=cg(t),n=new r(i&&new Ih(i,t),null);if(n.loading=e().then(s=>{n.browser=s}).catch(s=>{n.error=s}),await Promise.all([n.probe(),n.loading]),!n.use&&!n.browser)throw n.error;return n}async probe(e=Date.now()){if(!(!this.native||this.use||e-this.tried<15e3)){this.tried=e;try{await this.native.ready()&&(this.use=this.native)}catch{}}}get name(){return this.use?this.use.name:"browser"}async recognize(e){if(this.use)try{return await this.use.recognize(e)}catch(t){if(!this.browser)throw t;this.use=null,this.tried=Date.now()}else this.probe();return this.browser.recognize(e)}};var ug="https://cdn.jsdelivr.net/npm/peerjs@1.5.5/dist/peerjs.min.js",dg="sha384-x0YgkOr/3UOZP2CRDxGW9e0Q+2Qjyr3uJrm4xU32Y7ZCNAo7Cc7bjhrZMi/dwczu",ad="cwords3d-v1-",od="ABCDEFGHJKLMNPQRSTUVWXYZ",Ma=null;function pg(){return window.Peer?Promise.resolve(window.Peer):(Ma||(Ma=new Promise((r,e)=>{let t=document.createElement("script");t.src=ug,t.integrity=dg,t.crossOrigin="anonymous",t.onload=()=>window.Peer?r(window.Peer):e(new Error("PeerJS")),t.onerror=()=>{Ma=null,e(new Error("PeerJS"))},document.head.appendChild(t)})),Ma)}async function ba(r){let e=await pg();return new Promise((t,i)=>{let n=new e(r,{debug:0}),s=setTimeout(()=>{n.destroy(),i(Object.assign(new Error("timeout"),{type:"timeout"}))},12e3);n.once("open",()=>{clearTimeout(s),t(n)}),n.once("error",a=>{clearTimeout(s),n.destroy(),i(a)})})}var Pr=(r,e=!1)=>e?`${ad}${r}-${da(8)}`:ad+r,ld=()=>Array.from(crypto.getRandomValues(new Uint8Array(4)),r=>od[r%od.length]).join("");function hd(){let r="";try{r=localStorage.getItem("cwords3d.who")||""}catch{}if(!/^[a-z0-9]{8,24}$/.test(r)){r=da(16);try{localStorage.setItem("cwords3d.who",r)}catch{}}return r}var sn="";function cd(){if(sn)return sn;try{sn=Sh(sessionStorage.getItem("cwords3d.tab"))}catch{}if(!sn){sn=da(24);try{sessionStorage.setItem("cwords3d.tab",sn)}catch{}}return sn}var fg=4e3,mg=13e3,gg=3e3,vg=5e3,_g=5e3,Ph=(r,e)=>{if(r&&r.open)try{r.send(e)}catch{}},Sa=class{constructor(e){this.app=e,this.members=[],this.code="",this.pass="",this.closed=!1,this.last=performance.now(),this.timer=setInterval(()=>this.beat(),1e3)}beat(){let e=performance.now(),t=e-this.last;this.last=e,this.closed||this.second(e,t>_g)}link(){let e=new URL(location.href.split(/[?#]/)[0]);return e.searchParams.set("room",this.code),this.pass&&(e.hash=`pass=${encodeURIComponent(this.pass)}`),e.toString()}end(){this.closed=!0,clearInterval(this.timer)}},wa=class extends Sa{constructor(e){super(e),this.isHost=!0,this.myId=1,this.table=new ca(e.profile,e.mag,{changed:()=>this.changed(),note:(t,i)=>{this.app.note(t,i),this.out({t:"note",k:t,name:i})}}),this.members=this.table.message().members}async open(e=""){this.pass=this.table.pass=ua(e);let t=null;for(let i=0;i<5;i++){let n=ld();try{let s=await ba(Pr(n));if(this.closed){s.destroy();return}this.code=n,this.attach(s);return}catch(s){if(t=s,s.type!=="unavailable-id")break}}throw t||new Error("room")}attach(e){this.peer=e,e.on("connection",t=>{this.peer===e&&!this.closed?this.accept(t):t.close()}),e.on("disconnected",()=>{if(!this.closed&&this.peer===e&&!e.destroyed)try{e.reconnect()}catch{}}),e.on("error",t=>console.warn("[room]",t.type))}async reopen(){this.reopening=!0;try{let e=await ba(Pr(this.code));this.closed?e.destroy():this.attach(e)}catch{}finally{this.reopening=!1}}second(e,t){t&&this.table.wake(),this.table.tick();let i=this.peer;if(i&&(i.disconnected||i.destroyed)&&!this.reopening&&e-(this.retryAt||0)>vg)if(this.retryAt=e,i.destroyed)this.reopen();else try{i.reconnect()}catch{}}accept(e){let t={send:i=>Ph(e,i),close:()=>setTimeout(()=>{try{e.close()}catch{}},300)};e.on("open",()=>{let i=this.table.admit(t,e.metadata);i.why?(t.send({t:"error",why:i.why}),t.close()):t.send({t:"welcome",id:i.id})}),e.on("data",i=>{try{this.receive(t,i)}catch(n){console.error("[room]",n)}}),e.on("close",()=>this.table.lost(t)),e.on("error",()=>this.table.lost(t))}receive(e,t){let i=this.table;if(!t||typeof t!="object"||typeof t.t!="string"||!i.heard(e))return;if(t.t==="hello"){i.hello(e,t.profile)&&e.send(this.game());return}let n=i.member(e);if(!(!n||n.away))switch(t.t){case"ping":e.send({t:"pong"});break;case"profile":n.profile=si(t.profile),this.changed();break;case"sync":e.send(this.game());break;case"act":{let s=jn(t.a),a=s&&i.act(n.id,s);a?(this.tell(s,n.id),this.app.did(a)):e.send({t:"nope",a:s,busy:!!s&&s.t==="turn"&&i.someoneWrites(n.id)});break}case"hand":{let s=wh(t.g);if(!s)break;s.k!=="write"&&s.k!=="erase"?i.wrote(n.id,!1):i.wrote(n.id,!0),this.app.remoteHand(n.id,s),this.out({t:"hand",id:n.id,g:s},n.id);break}case"ink":{let s=Eh(t);if(!s)break;i.wrote(n.id,!0),this.app.remoteInk(n.id,s),this.out({t:"ink",id:n.id,...s},n.id);break}case"leave":i.leave(e),e.close();break}}game(){return{t:"game",g:this.app.mag.save()}}act(e){let t=this.table.act(1,e);return t?(this.tell(e,1),this.app.did(t),!0):(this.app.refused(e,!!e&&e.t==="turn"&&this.table.someoneWrites(1)),!1)}tell(e,t){this.out({t:"act",a:e,who:t,n:this.app.mag.n})}hand(e){this.table.wrote(1,e.k==="write"||e.k==="erase"),this.out({t:"hand",id:1,g:e})}ink(e){this.table.wrote(1,!0),this.out({t:"ink",id:1,...e})}replaced(){this.out(this.game())}profile(e){this.table.members.get(1).profile=si(e),this.changed()}changed(){this.members=this.table.message().members,!this.closed&&(this.out(this.table.message()),this.app.people())}kick(e,t){return this.table.kick(e,t)}out(e,t=null){for(let i of this.table.members.values())i.link&&!i.away&&i.id!==t&&i.link.send(e)}close(){if(this.closed)return;this.end(),this.table.closed=!0;for(let t of this.table.links.keys())t.send({t:"error",why:"closed"});let e=this.peer;e&&setTimeout(()=>e.destroy(),300)}},Ea=class extends Sa{constructor(e,t,i=""){super(e),this.isHost=!1,this.code=t,this.pass=ua(i),this.myId=0,this.away=!1,this.got=!1}connect(){return new Promise((e,t)=>{let i=!1,n=null,s=0,a=l=>{i||(i=!0,clearTimeout(s),l?(n&&n.destroy(),t(l)):e())},o=(l,h)=>{clearTimeout(s),s=setTimeout(()=>a(Object.assign(new Error(h),{why:h})),l)};o(3e4,"unreachable"),ba(Pr(this.code,!0)).then(l=>{if(i||this.closed){l.destroy(),a(new Error("closed"));return}n=l;let h=l.connect(Pr(this.code),{reliable:!0,serialization:"json",metadata:{pass:this.pass||void 0,who:hd(),key:cd()}});o(2e4,"unreachable"),h.on("data",u=>{if(!(!u||typeof u!="object")){if(i){this.conn===h&&(this.heard=performance.now(),this.receive(u));return}u.t==="error"?a(Object.assign(new Error("refused"),{why:String(u.why),refused:!0})):u.t==="welcome"&&Number.isInteger(u.id)&&(this.peer=l,this.conn=h,this.myId=u.id,this.heard=performance.now(),Ph(h,{t:"hello",profile:this.app.profile}),a())}});let c=()=>{a(Object.assign(new Error("gone"),{why:"gone"})),this.conn===h&&this.lost()};h.on("close",c),h.on("error",c),l.on("error",u=>a(Object.assign(new Error(u.type),{why:u.type==="peer-unavailable"?"nobody":"failed"})))},l=>a(Object.assign(new Error(l.type||l.message),{why:"failed"})))})}async join(){await this.connect(),this.joined=!0}second(e,t){if(this.away){e-this.lostAt>bh+1e4&&this.over("lost");return}this.conn&&(t&&(this.heard=e),e-(this.pinged||0)>fg&&(this.pinged=e,this.out({t:"ping"})),e-this.heard>mg&&this.lost())}lost(){this.closed||this.away||!this.joined||(this.drop(),this.away=!0,this.lostAt=performance.now(),this.app.people(),this.retry())}async retry(){for(;this.away&&!this.closed;)try{await this.connect(),this.away=!1,this.app.people()}catch(e){if(e.refused){this.over(e.why);return}await new Promise(t=>setTimeout(t,gg))}}receive(e){switch(e.t){case"room":{let t=$u(e);t&&(this.members=t,this.app.people());break}case"game":{this.app.mag.load(e.g)&&(this.got=!0,this.app.replaced());break}case"act":{if(!this.got)break;let t=jn(e.a),i=t&&e.n===this.app.mag.n+1?this.app.mag.do(t,Number.isInteger(e.who)?e.who:0):null;i?this.app.did(i):performance.now()-(this.syncAt||-1e9)>800&&(this.syncAt=performance.now(),this.out({t:"sync"}));break}case"nope":this.app.refused(jn(e.a),!!e.busy);break;case"hand":{let t=wh(e.g);t&&Number.isInteger(e.id)&&e.id!==this.myId&&this.app.remoteHand(e.id,t);break}case"ink":{let t=Eh(e);t&&Number.isInteger(e.id)&&e.id!==this.myId&&this.app.remoteInk(e.id,t);break}case"note":this.app.note(String(e.k),si({name:e.name}).name);break;case"error":this.over(String(e.why));break}}act(e){return this.away||!this.got?(this.app.refused(e,!1),!1):(this.out({t:"act",a:e}),!0)}hand(e){this.out({t:"hand",g:e})}ink(e){this.out({t:"ink",...e})}profile(e){this.out({t:"profile",profile:e})}kick(){return!1}out(e){Ph(this.conn,e)}over(e){this.closed||(this.close(),this.app.left(e))}drop(){let e=this.peer;this.conn=this.peer=null,e&&setTimeout(()=>e.destroy(),200)}close(){this.closed||(this.out({t:"leave"}),this.end(),this.drop())}};var ae=r=>document.getElementById(r);function Lr(r){try{return JSON.parse(localStorage.getItem(r)||"null")}catch{return null}}function Ra(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}var yg={password:"This room has a password",full:"Room is full",closed:"Room closed",kicked:"You were sent out of the room",banned:"You are banned from this room",replaced:"This room was opened in another tab",lost:"Lost connection to the host",nobody:"Room not found – is the host still there?",unreachable:"Could not reach the host (a strict firewall can block peer-to-peer)."},Ta=r=>Le(yg[r]||"Could not connect"),Aa=class{constructor(e){this.app=e,ae("pencilBtn").onclick=()=>this.tool("pencil"),ae("eraserBtn").onclick=()=>this.tool("eraser"),ae("fitBtn").onclick=()=>e.view.home(e.view.goal.x<0?-1:1),ae("prev").onclick=()=>e.go(e.spread-1),ae("next").onclick=()=>e.go(e.spread+1),ae("roomBtn").onclick=()=>{this.msg(""),ae("room").showModal()},ae("setBtn").onclick=()=>{this.fill(),ae("settings").showModal()};for(let i of document.querySelectorAll(".shut"))i.onclick=()=>i.closest("dialog").close();for(let i of document.querySelectorAll("dialog"))i.addEventListener("pointerdown",n=>{n.target===i&&i.close()});ae("openBtn").onclick=async()=>{this.busy(!0,Le("Opening the room…"));try{await e.host(ae("newPass").value),this.msg("")}catch(i){this.msg(Ta(i.why))}this.busy(!1)},ae("joinBtn").onclick=()=>this.tryJoin(ae("code").value.trim().toUpperCase(),ae("joinPass").value),ae("code").addEventListener("keydown",i=>{i.key==="Enter"&&ae("joinBtn").click()}),ae("leaveBtn").onclick=()=>e.leave(),ae("copyBtn").onclick=async()=>{let i=e.net&&e.net.link();if(i)try{await navigator.clipboard.writeText(i),this.toast(Le("Link copied"))}catch{this.msg(i)}},ae("members").addEventListener("click",i=>{let n=i.target.closest("button");n&&e.net&&e.net.kick(Number(n.dataset.id),n.dataset.ban==="1")}),ae("name").onchange=()=>e.setProfile({...e.profile,name:ae("name").value}),ae("left").onchange=()=>e.setProfile({...e.profile,left:ae("left").checked}),ae("sound").onchange=()=>e.setPrefs({sound:ae("sound").checked}),ae("hands").onchange=()=>e.setPrefs({hands:Number(ae("hands").value)}),ae("lang").onchange=()=>{Fu(ae("lang").value),this.texts(),e.book.redrawAll(),this.refresh(),this.fill()},ae("again").onclick=()=>{let i=ae("again");i.dataset.sure?(delete i.dataset.sure,e.startOver(),ae("settings").close(),this.texts()):(i.dataset.sure=1,i.textContent=Le("Really? Everything written is lost."))};let t=(i,n,s)=>{i.replaceChildren(...n.map((a,o)=>{let l=document.createElement("b");return l.style.background=a,l.onclick=()=>{e.setProfile({...e.profile,[s]:o}),this.fill()},l}))};t(ae("skins"),Cr,"skin"),t(ae("sleeves"),Di,"sleeve"),this.texts(),queueMicrotask(()=>this.refresh())}texts(){document.documentElement.lang=mh();for(let t of document.querySelectorAll("[data-t]"))t.dataset.sure||(t.textContent=Le(t.dataset.t));let e={pencilBtn:["✏️","Pencil"],eraserBtn:["🧽","Eraser"],fitBtn:["⤢","Whole page"],setBtn:["⚙","Settings"],prev:["‹","Previous page"],next:["›","Next page"]};for(let[t,[i,n]]of Object.entries(e))ae(t).textContent=i,ae(t).title=Le(n),ae(t).setAttribute("aria-label",Le(n));ae("openBtn").textContent=Le("Open a room"),ae("joinBtn").textContent=Le("Join"),ae("copyBtn").textContent=Le("Copy link"),ae("leaveBtn").textContent=Le("Leave"),ae("newPass").placeholder=ae("joinPass").placeholder=Le("Password (optional)"),ae("code").placeholder=Le("Room code")}tool(e){this.app.tool=e,ae("pencilBtn").classList.toggle("on",e==="pencil"),ae("eraserBtn").classList.toggle("on",e==="eraser")}fill(){let e=this.app.profile;ae("name").value=e.name,ae("left").checked=e.left,ae("sound").checked=this.app.prefs.sound,ae("hands").value=String(this.app.prefs.hands),ae("lang").value=mh(),[...ae("skins").children].forEach((t,i)=>t.classList.toggle("on",i===e.skin)),[...ae("sleeves").children].forEach((t,i)=>t.classList.toggle("on",i===e.sleeve)),delete ae("again").dataset.sure,ae("again").textContent=Le("Start this magazine over"),this.refresh()}busy(e,t){for(let i of["openBtn","joinBtn"])ae(i).disabled=e;t!==void 0&&this.msg(t)}msg(e){ae("roomMsg").textContent=e}async tryJoin(e,t){if(ae("room").open||ae("room").showModal(),ae("code").value=e,ae("joinPass").value=t,!/^[A-Z]{4}$/.test(e)){this.msg(Le("Room code"));return}this.busy(!0,Le("Connecting…"));try{await this.app.join(e,t),this.msg(""),ae("room").close()}catch(i){this.msg(Ta(i.why)),i.why==="password"&&ae("joinPass").focus()}this.busy(!1)}left(e){this.toast(Ta(e)),this.msg(Ta(e))}toast(e){let t=document.createElement("div");for(t.textContent=e,ae("toasts").append(t),setTimeout(()=>{t.style.opacity=0,setTimeout(()=>t.remove(),500)},2800);ae("toasts").children.length>4;)ae("toasts").firstChild.remove()}clue(e=null){let t=this.app,i=t.sel,n=i&&i.answer;if(!n&&e&&(n=(t.mag.grids.get(e.level).at.get(e.k)||[]).find(o=>!t.mag.progress.get(e.level).done.has(o.n))||null),ae("clue").hidden=!n,!n)return;let s=document.createElement("small");s.textContent=`${n.d==="h"?"→":"↓"} ${n.cells.length}`,ae("clue").replaceChildren(s,n.text)}refresh(){let e=this.app,t=e.net;if(!e.ui)return;ae("prev").hidden=e.spread<=0,ae("next").hidden=e.spread>=e.mag.spreads-1,ae("roomBtn").textContent=t?`👥 ${t.code}`:`👥 ${Le("Room")}`,ae("roomOut").hidden=!!t,ae("roomIn").hidden=!t,ae("inkName").textContent=e.engine?e.engine.name==="browser"?Le("this browser"):e.engine.name:Le(e.inkError?"not available":"loading…");let i=t?t.members:[];ae("people").replaceChildren(...i.map(n=>{let s=document.createElement("i");return s.style.background=Di[n.profile.sleeve],s.textContent=[...n.profile.name][0]||"?",s.title=n.profile.name,s.className=n.away?"off":"",s})),t&&(ae("codeShow").textContent=t.away?Le("Reconnecting…"):t.code,ae("members").replaceChildren(...i.map(n=>{let s=document.createElement("li"),a=document.createElement("span");if(a.textContent=n.profile.name+(n.id===t.myId?` (${Le("you")})`:n.away?` – ${Le("away")}`:""),s.append(a),t.isHost&&n.id!==1)for(let[o,l]of[["Kick",0],["Ban",1]]){let h=document.createElement("button");h.textContent=Le(o),h.dataset.id=n.id,h.dataset.ban=l,s.append(h)}return s})))}};var ai=null,Ca=null,Lh=!0,qn=null,Dh=r=>{Lh=r,r||Pa()};function Ur(){if(!Lh)return null;if(!ai){try{ai=new(window.AudioContext||window.webkitAudioContext)}catch{return Lh=!1,null}Ca=ai.createBuffer(1,ai.sampleRate,ai.sampleRate);let r=Ca.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1}return ai.state==="suspended"&&ai.resume(),ai}function Uh(r,e,t,i,n,s="bandpass"){let a=Ur();if(!a)return;let o=a.createBufferSource(),l=a.createBiquadFilter(),h=a.createGain(),c=a.currentTime;o.buffer=Ca,o.loop=!0,l.type=s,l.Q.value=t,l.frequency.setValueAtTime(r,c),l.frequency.exponentialRampToValueAtTime(e,c+n),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(i,c+n*.25),h.gain.exponentialRampToValueAtTime(1e-4,c+n),o.connect(l).connect(h).connect(a.destination),o.start(c,Math.random()),o.stop(c+n)}var Ia=()=>{Uh(900,3600,.8,.16,.34),setTimeout(()=>Uh(2600,700,.7,.12,.22),240)},ud=()=>Uh(700,500,.8,.05,.16);function dd(r){let e=Ur();if(e){if(!qn){let t=e.createBufferSource(),i=e.createBiquadFilter(),n=e.createGain();t.buffer=Ca,t.loop=!0,i.type="bandpass",i.frequency.value=2600,i.Q.value=1.1,n.gain.value=0,t.connect(i).connect(n).connect(e.destination),t.start(),qn={s:t,f:i,g:n}}qn.g.gain.setTargetAtTime(Math.min(.05,r*.05),e.currentTime,.02),qn.f.frequency.setTargetAtTime(2100+Math.min(1,r)*1200,e.currentTime,.03)}}function Pa(){qn&&ai&&qn.g.gain.setTargetAtTime(0,ai.currentTime,.03)}function pd(r=[659,880]){let e=Ur();e&&r.forEach((t,i)=>{let n=e.createOscillator(),s=e.createGain(),a=e.currentTime+i*.09;n.type="triangle",n.frequency.value=t,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.09,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.5),n.connect(s).connect(e.destination),n.start(a),n.stop(a+.55)})}var Nh=70,Mg=6e3,bg=260,Oh="cwords3d.magazine",La=await(await fetch(new URL("../levels/pilot.json",import.meta.url))).json(),kh=class{constructor(){this.mag=new Xn(La),this.mag.load(Lr(Oh)),this.profile=si(Lr("cwords3d.profile")||{name:`Oyuncu${100+Math.floor(Math.random()*900)}`}),this.prefs={hands:1,sound:!0,...Lr("cwords3d.prefs")||{}},Dh(this.prefs.sound),this.net=null,this.others=new Map,this.remote=new Map,this.tool="pencil",this.sel=null,this.hover=null;let e=document.getElementById("view");this.view=new ra(e);let t=this.view.renderer.capabilities.maxTextureSize,i=Math.min(this.view.touch?1440:2048,Math.floor(t/Dt));this.book=new ia(this.mag,{renderer:this.view.renderer,texW:i}),this.book.drawer.colorOf=n=>this.colorIndex(n),this.book.redrawAll(),this.view.scene.add(this.book.group),this.inkView=new ga(this.view.scene,this.book),this.session=new _a({progress:n=>this.mag.progress.get(n),cellAt:(n,s,a)=>{let o=ri(Math.floor(a),Math.floor(s));return s>=0&&a>=0&&this.mag.grids.get(n).isAnswerCell(o)?o:null},set:(n,s,a)=>this.act({t:"set",l:n,k:s,ch:a}),erase:(n,s)=>{ud(),this.act({t:"erase",l:n,ks:s})},changed:()=>{this.inkDirty=!0}},{recognize:n=>this.engine?this.engine.recognize(n):Promise.reject(new Error("not loaded"))}),this.me=this.makeMe(),this.ui=new Aa(this),this.pointers=new Map,this.mode=null,this.penSeen=-1e9,this.space=!1,this.listen(e),this.settled(0),this.view.home(1),this.view.cam={...this.view.goal},xa.create().then(n=>{this.engine=n,this.ui.refresh(),this.session.queue.length&&this.session.read()},()=>{this.ui.toast(Le("Handwriting could not be loaded: type instead")),this.inkError=!0,this.ui.refresh()}),this.view.place(0),this.book.prepare(this.view.renderer,this.view.scene,this.view.camera),this.last=performance.now(),this.view.renderer.setAnimationLoop(n=>this.frame(n)),this.fromLink()}makeMe(){this.me&&this.me.dispose();let e=new Ir(this.view.scene,this.profile,0,{mine:!0});return e.faint=Number(this.prefs.hands),e}get myId(){return this.net?this.net.myId:1}colorIndex(e){let t=this.net&&this.net.members.find(i=>i.id===e);return t?t.profile.sleeve:e===this.myId||!this.net?this.profile.sleeve:0}act(e){if(this.net)return this.net.act(e);let t=this.mag.do(e,1);return t?this.did(t):this.refused(e,!1),!!t}did(e){if(e.t==="turn")this.session.cancel(),this.turnSeen(e);else{let t=new Set(e.t==="set"?[e.k]:e.gone),i=this.mag.grids.get(e.l);if(this.session.touched(e.l,[...t]),e.t==="set")for(let n of e.completed){for(let s of n.cells)t.add(s);t.add(ri(n.clue.r,n.clue.c))}this.repaint(e.l,t),e.t==="set"&&(this.dropRemoteInk(e.who,e.l,e.k),e.completed.length&&(pd(e.solved?[523,659,784,1047]:void 0),this.mag.pages.forEach((n,s)=>{(n.level===e.l||n.kind==="contents")&&this.book.redraw(s)}),this.repaint(e.l,this.marked())),e.solved&&this.ui.toast(Le("Puzzle solved!")))}this.save(),this.ui.refresh()}refused(e,t){if(e&&e.t==="turn"){let i=this.book.turn;i&&i.mine&&(this.book.release(i.fwd?0:1,()=>this.settled(0)),i.back=!0),t&&this.ui.toast(Le("Someone is writing"))}this.session.reset()}replaced(){this.session.reset(),this.session.inks.clear(),this.session.queue=[],this.sel=null,this.book.cancel(),this.book.redrawAll(),this.settled(0),this.ui.refresh()}save(){(!this.net||this.net.isHost)&&Ra(Oh,this.mag.save())}startOver(){let e=new Xn(La);e.n=this.mag.n+1,e.spread=this.mag.spread,this.mag.load(e.save()),this.replaced(),this.save(),this.net&&this.net.isHost&&this.net.replaced()}get spread(){return this.mag.spread}pages(){let e=this.spread;return[2*e-1,2*e].filter(t=>t>=0&&t<this.mag.pages.length)}settled(e){let t=this.spread;if(this.view.open=[t>0,t<this.mag.spreads-1],e!==0||!this.view.open.every(Boolean)){let i=this.view.goal.zoom;e&&(this.view.single||i<=1.25)?this.view.home(e>0?this.view.open[0]?-1:1:this.view.open[1]?1:-1):this.view.clampGoal(),e||this.view.home(this.view.open[1]?1:-1)}this.inkDirty=!0,this.ui.refresh()}canTurn(e){return!this.book.turn&&e>=0&&e<this.mag.spreads&&e!==this.spread}go(e){if(!this.canTurn(e)||this.session.live)return;let t=this.spread,i=e>t;this.book.begin(t,e),this.book.turn.mine=!0,this.book.turn.drag=!1,this.book.turn.goal=null,this.book.turn.target=i?0:1,this.finish(!0)}finish(e){let t=this.book.turn;if(t){if(!e){this.book.release(t.fwd?0:1,()=>this.settled(0));return}Ia(),t.dest=t.to,this.book.release(t.fwd?1:0,()=>this.settled(t.back?0:t.fwd?1:-1)),this.act({t:"turn",to:t.to})}}turnSeen(e){this.sel=null;let t=this.book.turn;if(t&&t.to===e.to&&t.mine)return;if(t&&t.to===e.to){Ia(),t.mine=!1,t.dest=e.to,this.book.release(t.fwd?1:0,()=>this.settled(t.fwd?1:-1));return}t&&(this.book.turn=null),Ia(),this.book.begin(e.from,e.to),this.book.turn.by=e.who,this.book.turn.dest=e.to;let i=e.to>e.from;this.book.release(i?1:0,()=>{this.letLeaf(e.who),this.settled(i?1:-1)})}letLeaf(e){let t=this.others.get(e);t&&t.letLeaf()}levelOf(e){return La.find(t=>t.id===e)}spot(e){let t=e&&this.mag.pages[e.page];return!t||t.kind!=="grid"?null:{n:e.page,level:t.level,...gh(t,this.levelOf(t.level),e.x,e.y)}}cellOfSpot(e){let t=ri(Math.floor(e.y),Math.floor(e.x));return e.inside?t:null}marked(){return this.sel?new Set([...this.sel.answer?this.sel.answer.cells:[],this.sel.k]):new Set}repaint(e,t){let i=new Map;if(this.sel&&this.sel.level===e){for(let n of this.sel.answer?this.sel.answer.cells:[])i.set(n,{word:!0});i.set(this.sel.k,{cursor:!0})}this.book.redrawCells(e,t,i)}select(e,t,i=null){let n=this.sel,s=this.marked(),a=this.mag.grids.get(e),o=e?a.at.get(t)||[]:[],l=null;if(o.length){let h=n&&n.level===e&&n.k===t;l=i?o.find(c=>c.d===i)||o[0]:h?o[(o.indexOf(n.answer)+1)%o.length]:o.find(c=>n&&c===n.answer)||o.find(c=>!this.mag.progress.get(e).done.has(c.n))||o[0]}this.sel=e?{level:e,k:t,answer:l}:null,n&&this.repaint(n.level,s),this.sel&&this.repaint(e,this.marked()),this.ui.clue()}type(e){let t=this.sel;!t||!t.answer||(this.session.touched(t.level,[t.k]),this.act({t:"set",l:t.level,k:t.k,ch:e}),this.step(1))}step(e){let t=this.sel;if(!t||!t.answer)return;let i=t.answer.cells.indexOf(t.k),n=this.mag.progress.get(t.level);for(let s=i+e;s>=0&&s<t.answer.cells.length;s+=e)if(!n.locked(t.answer.cells[s])||e<0){this.select(t.level,t.answer.cells[s],t.answer.d);return}}moveSel(e,t){let i=this.sel;if(!i)return;let n=this.mag.grids.get(i.level);for(let s=Math.floor(i.k/64)+e,a=i.k%64+t;s>=0&&a>=0&&s<n.h&&a<n.w;s+=e,a+=t)if(n.isAnswerCell(ri(s,a))){this.select(i.level,ri(s,a),e?"v":"h");return}}listen(e){e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("pointerdown",t=>this.down(t)),e.addEventListener("pointermove",t=>this.moved(t)),e.addEventListener("pointerup",t=>this.up(t)),e.addEventListener("pointercancel",t=>this.up(t,!0)),e.addEventListener("pointerleave",()=>{this.mode||(this.hover=null,this.handOff())}),e.addEventListener("wheel",t=>{t.preventDefault(),t.ctrlKey||t.deltaMode||Math.abs(t.deltaY)>=80?this.view.zoomAt(Math.exp(-t.deltaY*(t.ctrlKey?.011:.0016)),t.clientX,t.clientY):this.view.pan(-t.deltaX,-t.deltaY)},{passive:!1}),addEventListener("keydown",t=>this.keydown(t)),addEventListener("keyup",t=>{t.code==="Space"&&(this.space=!1)}),addEventListener("blur",()=>{this.space=!1})}keydown(e){if(e.target.closest&&e.target.closest("input, select, textarea, dialog")||e.ctrlKey||e.metaKey||e.altKey)return;if(e.code==="Space"){this.space=!0,e.preventDefault();return}let t=e.key;if(t==="PageDown")this.go(this.spread+1);else if(t==="PageUp")this.go(this.spread-1);else if(t==="Escape")this.sel?this.select(null):this.view.home(1);else if(this.sel)if(t==="ArrowRight")this.moveSel(0,1);else if(t==="ArrowLeft")this.moveSel(0,-1);else if(t==="ArrowDown")this.moveSel(1,0);else if(t==="ArrowUp")this.moveSel(-1,0);else if(t==="Tab")this.select(this.sel.level,this.sel.k);else if(t==="Backspace"||t==="Delete"){this.session.touched(this.sel.level,[this.sel.k]);let i=this.mag.progress.get(this.sel.level);i.letters.has(this.sel.k)&&!i.locked(this.sel.k)?this.act({t:"erase",l:this.sel.level,ks:[this.sel.k]}):t==="Backspace"&&this.step(-1)}else if([...t].length===1&&Qi(t))this.type(Rt(t));else return;else if(t==="ArrowRight")this.go(this.spread+1);else if(t==="ArrowLeft")this.go(this.spread-1);else return;e.preventDefault()}hitOf(e){let t=this.view.ground(e.clientX,e.clientY,this.book.height(1));return t?(t.x<0&&(t=this.view.ground(e.clientX,e.clientY,this.book.height(-1))),{g:t,hit:this.book.at(t.x,t.z)}):null}toPoint(e,t){return{x:e.x,y:e.y,t:t.timeStamp,w:t.pointerType==="pen"&&t.pressure?.55+t.pressure*.9:1}}erasing(e){return this.tool==="eraser"||(e.buttons&32)!==0||e.pointerType!=="touch"&&(e.buttons&2)!==0}down(e){Ur(),document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),this.view.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,type:e.pointerType}),e.pointerType==="pen"&&(this.penSeen=performance.now());let t=[...this.pointers.values()].filter(o=>o.type==="touch");if(t.length===2){this.stopMode(!0),this.mode={k:"pinch",...this.pinchState(t)};return}if(this.mode)return;let i=this.hitOf(e);if(!i)return;let n={id:e.pointerId,x0:e.clientX,y0:e.clientY,t0:performance.now(),moved:0};if(e.button===1||this.space){this.mode={...n,k:"pan",x:e.clientX,y:e.clientY};return}let s=e.pointerType==="touch"&&performance.now()-this.penSeen<2e4,a=this.spot(i.hit);if(a&&a.inside&&!s&&!this.book.turn){let o=this.toPoint(a,e),l=this.erasing(e);if(this.session.down(a.level,o,l)){this.mode={...n,k:"ink",page:a.n,level:a.level,erase:l,sent:0,box:[o.x,o.x,o.y,o.y],cell:this.cellOfSpot(a)},this.penAt(i.g,!0,l);return}}this.mode={...n,k:"maybe",hit:i.hit,spot:a,x:e.clientX,y:e.clientY,g0:i.g}}pinchState(e){return{d:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),cx:(e[0].x+e[1].x)/2,cy:(e[0].y+e[1].y)/2}}moved(e){let t=this.pointers.get(e.pointerId);t&&(t.x=e.clientX,t.y=e.clientY);let i=this.mode;if(i&&i.k==="pinch"){let n=[...this.pointers.values()].filter(a=>a.type==="touch");if(n.length<2)return;let s=this.pinchState(n);this.view.pan(s.cx-i.cx,s.cy-i.cy),this.view.zoomAt(s.d/Math.max(1,i.d),s.cx,s.cy),Object.assign(i,s);return}if(!i){e.pointerType!=="touch"&&this.hovering(e);return}if(i.id===e.pointerId){if(i.moved=Math.max(i.moved,Math.hypot(e.clientX-i.x0,e.clientY-i.y0)),i.k==="pan"){this.view.pan(e.clientX-i.x,e.clientY-i.y),i.x=e.clientX,i.y=e.clientY;return}if(i.k==="ink"){this.inkMove(i,e);return}if(i.k==="maybe")if(i.moved>7)this.decide(i,e);else return;this.mode.k==="turn"&&this.turnMove(e)}}hovering(e){let t=this.hitOf(e);this.hover=t&&t.hit,this.view.canvas.classList.toggle("away",!this.hover),this.hover&&!this.book.turn?this.penAt(t.g,!1):this.handOff()}decide(e,t){let i=t.clientX-e.x0,n=t.clientY-e.y0,s=e.hit,a=this.view.goal.zoom>1.25;if((s&&(s.d>0?s.x>.9:s.x<.1)||!a&&Math.abs(i)>Math.abs(n)*1.1)&&i!==0){let l=i<0,h=this.view.single,c=h?this.view.goal.x<0?-1:1:s?s.d:e.g0.x<0?-1:1;if(h&&(l&&c<0&&this.view.open[1]||!l&&c>0&&this.view.open[0])){this.view.home(-c),this.mode={...e,k:"done"};return}let u=this.spread+(l?1:-1);if((l?c>0:c<0)&&this.canTurn(u)){this.select(null);let d=Math.max(-1,Math.min(1,e.g0.x/He));this.book.begin(this.spread,u,Math.max(0,Math.min(1,(e.g0.z+$e/2)/$e))),this.book.turn.mine=!0,this.mode={...e,k:"turn",fwd:l,start:d,lastX:t.clientX,lastT:t.timeStamp,v:0};return}if(!a){this.mode={...e,k:"done"};return}}this.mode={...e,k:"pan",x:t.clientX,y:t.clientY}}turnMove(e){let t=this.mode,i=this.view.ground(e.clientX,e.clientY,.03);if(!i||!this.book.turn)return;let n=Math.max(1,e.timeStamp-t.lastT);t.v=t.v*.6+(e.clientX-t.lastX)/n*.4,t.lastX=e.clientX,t.lastT=e.timeStamp;let s=t.fwd?1:-1,a=s+(i.x/He-t.start)*2/Math.max(.75,Math.abs(t.start- -s));this.book.hold(a,(i.z+$e/2)/$e),this.streamTurn()}inkMove(e,t){let i=t.getCoalescedEvents?t.getCoalescedEvents():[],n=i.length?i:[t],s=null;for(let l of n){s=this.hitOf(l);let h=this.mag.pages[e.page];if(!s)continue;let c={x:(s.g.x+(e.page%2?He:0))/He,y:(s.g.z+$e/2)/He},u=gh(h,this.levelOf(e.level),c.x,c.y);this.session.move(this.toPoint(u,l.timeStamp?l:t)),e.box=[Math.min(e.box[0],u.x),Math.max(e.box[1],u.x),Math.min(e.box[2],u.y),Math.max(e.box[3],u.y)]}if(!s)return;let a=performance.now(),o=e.lastG?Math.hypot(s.g.x-e.lastG.x,s.g.z-e.lastG.z)/Math.max(1,a-e.lastAt):0;e.lastG=s.g,e.lastAt=a,dd(o*12e3/1e3),this.penAt(s.g,!0,e.erase),this.net&&!e.erase&&a-(e.sentAt||0)>Nh&&this.sendInk(e,!1)}sendInk(e,t){let i=this.session.live,n=i?i.points:e.pts;if(!this.net||!n)return;e.sentAt=performance.now();let s=this.mag.pages[e.page],a=Li(s,this.levelOf(e.level)),o=i?i.id:e.sid;for(;;){let l=n.slice(e.sent,e.sent+60);e.sent+=l.length;let h=e.sent>=n.length;if((l.length||t&&h)&&this.net.ink({s:o,page:e.page,p:l.flatMap(c=>[+(a.x0+(c.x-s.c0)*a.u).toFixed(4),+(a.y0+c.y*a.u).toFixed(4)]),end:t&&h}),h)break}}up(e,t=!1){this.pointers.delete(e.pointerId);let i=this.mode;if(i){if(i.k==="pinch"){[...this.pointers.values()].filter(n=>n.type==="touch").length<2&&(this.mode=this.pointers.size?{k:"done"}:null);return}if(!(i.id!==void 0&&i.id!==e.pointerId)){if(i.k==="done"){this.pointers.size||(this.mode=null);return}if(this.mode=null,t){this.mode=i,this.stopMode(!0);return}i.k==="ink"?this.inkUp(i,e):i.k==="turn"?this.turnUp(i):i.k==="maybe"&&this.tap(i),e.pointerType==="touch"&&this.handOff()}}}inkUp(e,t){Pa();let i=this.session.live,n=Math.max(e.box[1]-e.box[0],e.box[3]-e.box[2])<.1,s=performance.now()-e.t0<bg;if(i&&!e.erase&&n&&s&&!this.nearInk(e)){this.session.cancel(),e.cell!==null&&this.select(e.level,e.cell),this.sendEndHand();return}i&&(e.pts=i.points,e.sid=i.id),this.session.up(),e.erase||this.sendInk(e,!0),this.sendEndHand(),this.sel&&e.level&&this.select(null),e.cell!==null&&!e.erase&&this.ui.clue({level:e.level,k:e.cell})}sendEndHand(){this.net&&this.me.tip&&this.net.hand({k:"pen",x:this.me.tip.x/He,y:(this.me.tip.z+$e/2)/$e})}nearInk(e){let t=(e.box[0]+e.box[1])/2,i=(e.box[2]+e.box[3])/2;for(let n of this.session.open(e.level).values())if(t>n.x0-.45&&t<n.x1+.45&&i>n.y0-.6&&i<n.y1+.6)return!0;return!1}turnUp(e){let t=this.book.turn;if(!t)return;let i=(e.fwd?-1:1)*e.v,n=e.fwd?t.f:1-t.f;this.finish(i>.35||n>.45&&i>-.35),!t.dest&&this.net&&this.net.hand({k:"rest"}),this.me.letLeaf()}tap(e){let t=e.hit;if(!t){this.select(null);return}if(e.spot&&e.spot.inside){let n=this.cellOfSpot(e.spot),s=this.mag.grids.get(e.spot.level);if(s.isAnswerCell(n))this.select(e.spot.level,n);else{let a=s.answers.filter(o=>o.clue.r*64+o.clue.c===n);if(a.length){let o=a.length>1&&e.spot.y%1>=.5?a.find(l=>l.part==="l"):a[0];this.select(e.spot.level,o.cells[0],o.d)}}return}let i=this.mag.pages[t.page];if(i.kind==="contents"){let n=this.book.drawer.contentsAt(t.y);if(n){this.go(Math.ceil(this.mag.pageOf(n.id)/2));return}}if(t.d>0?t.x>.94:t.x<.06){this.go(this.spread+t.d);return}i.kind==="cover"||i.kind==="back"?this.go(this.spread+t.d):this.select(null)}stopMode(e){let t=this.mode;if(this.mode=null,Pa(),!(!t||!e)){if(t.k==="ink"){let i=this.session.live&&this.session.live.id;this.session.cancel(),this.net&&i&&this.net.ink({s:i,page:t.page,p:[],end:!0}),this.sendEndHand()}t.k==="turn"&&(this.finish(!1),this.me.letLeaf(),this.net&&this.net.hand({k:"rest"}))}}penAt(e,t,i=!1){let n=e.x<0?-1:1,s=new w(e.x,this.book.height(n)+6e-4,e.z);i?this.me.erase(s):this.me.pen(s,t),this.restAt=0,this.streamHand({k:i?"erase":t?"write":"pen",x:e.x/He,y:(e.z+$e/2)/$e})}handOff(){this.restAt||(this.restAt=performance.now()+700)}streamHand(e){if(!this.net)return;let t=performance.now();t-(this.handAt||0)<Nh||(this.handAt=t,this.net.hand({k:e.k,x:+Math.max(-1.5,Math.min(1.5,e.x)).toFixed(4),y:+Math.max(-.5,Math.min(1.5,e.y)).toFixed(4)}))}streamTurn(){let e=this.book.turn;if(!this.net||!e)return;let t=performance.now();t-(this.handAt||0)<Nh||(this.handAt=t,this.net.hand({k:"turn",d:e.fwd?1:-1,f:+Math.min(1,Math.max(0,e.f)).toFixed(3),y:+e.y.toFixed(3)}))}remoteHand(e,t){let i=this.others.get(e);if(!i)return;i.seen=performance.now();let n=this.book.turn;if(t.k==="turn"){if(!n){let l=this.spread+t.d;!this.mode&&this.canTurn(l)&&(this.book.begin(this.spread,l,t.y),this.book.turn.by=e)}let o=this.book.turn;o&&o.by===e&&o.goal==null&&(o.target=t.f,o.y=t.y);return}if(n&&n.by===e&&n.goal==null&&(this.book.release(n.fwd?0:1,()=>this.settled(0)),i.letLeaf()),t.k==="rest"){i.rest();return}let s=t.x<0?-1:1,a=new w(t.x*He,this.book.height(s)+6e-4,t.y*$e-$e/2);t.k==="erase"?i.erase(a):i.pen(a,t.k==="write")}remoteInk(e,t){let i=`${e}:${t.s}`,n=this.remote.get(i);if(!n){if(this.remote.size>200)return;n={id:e,page:t.page,pts:[],at:0},this.remote.set(i,n)}for(let o=0;o<t.p.length&&n.pts.length<3e3;o+=2)n.pts.push({x:t.p[o],y:t.p[o+1]});n.at=performance.now(),t.end&&n.pts.length<1&&this.remote.delete(i),this.inkDirty=!0;let s=n.pts[n.pts.length-1],a=this.others.get(e);s&&a&&!t.end&&a.pen(this.book.world(n.page,s.x,s.y,6e-4),!0)}dropRemoteInk(e,t,i){for(let[n,s]of this.remote){if(s.id!==e||!s.pts.length)continue;let a=this.mag.pages[s.page];if(a.level!==t)continue;let o=Li(a,this.levelOf(t)),l=u=>(Math.min(...s.pts.map(d=>d[u]))+Math.max(...s.pts.map(d=>d[u])))/2,h=a.c0+(l("x")-o.x0)/o.u,c=(l("y")-o.y0)/o.u;Math.abs(h-i%64-.5)<.95&&Math.abs(c-Math.floor(i/64)-.5)<.95&&this.remote.delete(n)}this.inkDirty=!0}async host(e){this.leave();let t=new wa(this);this.net=t;try{await t.open(e),this.people()}catch(i){throw t.close(),this.net=null,this.people(),i}}async join(e,t){this.leave();let i=new Ea(this,e,t);try{await i.join()}catch(n){throw i.close(),n}this.net=i,this.people()}leave(){if(!this.net)return;let e=this.net;this.net=null,e.close(),this.back(e)}left(e){let t=this.net;this.net=null,this.back(t),this.ui.left(e)}back(e){if(this.remote.clear(),this.people(),e&&!e.isHost){let t=Lr(Oh);this.mag.load(t)||this.mag.load(new Xn(La).save()),this.replaced()}else this.book.redrawAll()}people(){let e=this.net?this.net.members.filter(i=>i.id!==this.myId):[],t=new Set;e.forEach((i,n)=>{t.add(i.id);let s=JSON.stringify([i.profile,n]),a=this.others.get(i.id);a&&a.sig!==s&&(a.dispose(),a=null),a||(a=new Ir(this.view.scene,i.profile,Th[n%Th.length],{name:i.profile.name}),a.sig=s,this.others.set(i.id,a)),a.away=i.away});for(let[i,n]of this.others)if(!t.has(i)){n.dispose(),this.others.delete(i);let s=this.book.turn;s&&s.by===i&&s.goal==null&&this.book.release(s.fwd?0:1,()=>this.settled(0))}this.book&&this.ui&&(this.book.redrawAll(),this.sel&&this.repaint(this.sel.level,this.marked()),this.ui.refresh())}note(e,t){let i={joined:"{n} joined",left:"{n} left",lost:"{n} lost the connection",back:"{n} is back",kicked:"{n} was sent out",banned:"{n} was sent out"}[e];i&&this.ui.toast(Le(i,{n:t}))}setProfile(e){this.profile=si(e),Ra("cwords3d.profile",this.profile),this.me=this.makeMe(),this.net&&this.net.profile(this.profile),this.people()}setPrefs(e){Object.assign(this.prefs,e),Ra("cwords3d.prefs",this.prefs),Dh(this.prefs.sound),this.me.faint=Number(this.prefs.hands)}fromLink(){let e=new URLSearchParams(location.search),t=(e.get("room")||"").toUpperCase();if(!/^[A-Z]{4}$/.test(t))return;let i=new URLSearchParams(location.hash.slice(1)).get("pass")||"";history.replaceState(null,"",location.pathname),this.ui.tryJoin(t,i)}drawInk(){this.inkDirty=!1;let e=new Set,t=(s,a,o,l,h)=>{let c=o[0].x,u=this.mag.pages.findIndex(m=>m.level===a&&c>=m.c0-.5&&c<m.c1+.5);if(u<0)return;let d=this.mag.pages[u],p=Li(d,this.levelOf(a));e.add(s),this.inkView.stroke(s,u,o.map(m=>({x:p.x0+(m.x-d.c0)*p.u,y:p.y0+m.y*p.u,w:m.w})),l,h?.5:1)},i=en[this.profile.sleeve%en.length],n=this.session;n.live&&!n.live.erase&&t(`m${n.live.id}`,n.live.level,n.live.points,i);for(let s of n.inks.values())for(let a of s.strokes)t(`m${a.id}`,s.level,a.points,i,n.busy===s||s.sent);for(let[s,a]of this.remote)a.pts.length&&(e.add(`r${s}`),this.inkView.stroke(`r${s}`,a.page,a.pts,en[this.colorIndex(a.id)%en.length]));this.inkView.keep(e)}frame(e){let t=Math.min(.05,(e-this.last)/1e3);this.last=e;let i=performance.now();for(let[s,a]of this.remote)i-a.at>Mg&&(this.remote.delete(s),this.inkDirty=!0);this.book.update(t);let n=this.book.turn;if(n){let s=this.book.grip(),a=n.fwd?1:-1;n.mine?this.me.leaf(s,a):this.others.has(n.by)&&this.others.get(n.by).leaf(s,a),n.mine&&n.drag&&this.streamTurn()}else this.me.letLeaf();this.restAt&&i>this.restAt&&(this.restAt=0,this.me.rest(),this.net&&this.net.hand({k:"rest"}));for(let s of this.others.values())n||s.letLeaf(),s.update(t);n||this.mode||this.session.live?this.warmAt=i+350:i>(this.warmAt||0)&&(this.warmAt=i+(this.book.warm(this.view.renderer)?130:1500)),this.view.place(t),this.me.update(t,this.view.cam.zoom),this.inkDirty&&this.drawInk(),this.inkView.show(this.pages(),!n),this.view.render()}};window.cw=new kh;
