// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[m]=n:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,er="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?er:function(){throw new Error("not implemented")};var or=nr,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),n=t,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),n=t,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,gr={uint16:wr,uint8:sr};(jr=new gr.uint16(1))[0]=4660;var Ar=52===new gr.uint8(jr.buffer)[0],hr=!0===Ar?1:0,_r=new cr(1),Or=new or(_r.buffer);function Ur(r){return _r[0]=r,Or[hr]}function Sr(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var Er=-.16666666666666632;function Nr(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Er+o*n):r-(o*(.5*t-e*n)-t-e*Er)}var Fr,Ir,Pr=!0===Ar?0:1,Tr=new cr(1),Vr=new or(Tr.buffer);!0===Ar?(Fr=1,Ir=0):(Fr=0,Ir=1);var Gr={HIGH:Fr,LOW:Ir},Hr=new cr(1),xr=new or(Hr.buffer),Br=Gr.HIGH,Lr=Gr.LOW;function Mr(r,t){return xr[Br]=r,xr[Lr]=t,Hr[0]}var kr=Math.floor,Wr=Number.POSITIVE_INFINITY,Cr=W.NEGATIVE_INFINITY;function Yr(r){return r!=r}function Rr(r){return r===Wr||r===Cr}var Xr,qr;!0===Ar?(Xr=1,qr=0):(Xr=0,qr=1);var zr={HIGH:Xr,LOW:qr},Dr=new cr(1),Jr=new or(Dr.buffer),Kr=zr.HIGH,Qr=zr.LOW;function Zr(r,t,n,e){return Dr[0]=r,t[e]=Jr[Kr],t[e+n]=Jr[Qr],t}function $r(r){return Zr(r,[0,0],1,0)}l($r,"assign",Zr);var rt=[0,0];function tt(r,t,n,e){return Yr(r)||Rr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return tt(r,[0,0],1,0)}),"assign",tt);var nt=[0,0],et=[0,0];function ot(r,t){var n,e,o,u,i,f;return 0===t||0===r||Yr(r)||Rr(r)?r:(tt(r,nt,1,0),t+=nt[1],t+=function(r){var t=Ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=nt[0]),t<-1074?(o=0,u=r,$r.assign(o,rt,1,0),i=rt[0],i&=2147483647,f=Ur(u),Mr(i|=f&=2147483648,rt[1])):t>1023?r<0?Cr:Wr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$r.assign(r,et,1,0),n=et[0],n&=2148532223,e*Mr(n|=t+1023<<20,et[1])))}function ut(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var it=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ft=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],at=5.960464477539063e-8,ct=ut(20),lt=ut(20),yt=ut(20),vt=ut(20);function pt(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=at*w|0,vt[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=ot(w,o),w-=8*kr(.125*w),w-=b=0|w,y=0,o>0?(b+=p=vt[n-1]>>24-o,vt[n-1]-=p<<24-o,y=vt[n-1]>>23-o):0===o?y=vt[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=vt[p],0===c?0!==d&&(c=1,vt[p]=16777216-d):vt[p]=16777215-d;if(o>0)switch(o){case 1:vt[n-1]&=8388607;break;case 2:vt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=ot(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=vt[p];if(0===d){for(s=1;0===vt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=it[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return pt(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===vt[n];)n-=1,o-=24;else(w=ot(w,-o))>=16777216?(l=at*w|0,vt[n]=w-16777216*l|0,o+=24,vt[n+=1]=l):vt[n]=0|w;for(l=ot(1,o),p=n;p>=0;p--)e[p]=l*vt[p],l*=at;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=ft[s]*e[p+s];yt[n-p]=l}for(l=0,p=n;p>=0;p--)l+=yt[p];for(t[0]=0===y?l:-l,l=yt[0]-l,p=1;p<=n;p++)l+=yt[p];return t[1]=0===y?l:-l,7&b}function st(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)ct[a]=c<0?0:it[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*ct[i+(a-c)];lt[a]=o}return 4,pt(r,t,4,lt,f,4,u,i,ct)}var bt=Math.round;function dt(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=bt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Ur(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Ur(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var wt=1.5707963267341256,mt=6077100506506192e-26,jt=2*mt,gt=4*mt,At=[0,0,0],ht=[0,0];function _t(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Ur(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?dt(r,o,t):o<=1073928572?r>0?(a=r-wt,t[0]=a-mt,t[1]=a-t[0]-mt,1):(a=r+wt,t[0]=a+mt,t[1]=a-t[0]+mt,-1):r>0?(a=r-2*wt,t[0]=a-jt,t[1]=a-t[0]-jt,2):(a=r+2*wt,t[0]=a+jt,t[1]=a-t[0]+jt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?dt(r,o,t):r>0?(a=r-3*wt,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*wt,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?dt(r,o,t):r>0?(a=r-4*wt,t[0]=a-gt,t[1]=a-t[0]-gt,4):(a=r+4*wt,t[0]=a+gt,t[1]=a-t[0]+gt,-4);if(o<1094263291)return dt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Tr[0]=r,Vr[Pr]}(r),a=Mr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)At[i]=0|a,a=16777216*(a-At[i]);for(At[2]=a,u=3;0===At[u-1];)u-=1;return f=st(At,ht,e,u),r<0?(t[0]=-ht[0],t[1]=-ht[1],-f):(t[0]=ht[0],t[1]=ht[1],f)}var Ot=[0,0];function Ut(r){return(1-function(r){var t;if(t=Ur(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Sr(r,0);if(t>=2146435072)return NaN;switch(3&_t(r,Ot)){case 0:return Sr(Ot[0],Ot[1]);case 1:return-Nr(Ot[0],Ot[1]);case 2:return-Sr(Ot[0],Ot[1]);default:return Nr(Ot[0],Ot[1])}}(r))/2}function St(r){return $(r,Ut)}export{St as default};
//# sourceMappingURL=mod.js.map
