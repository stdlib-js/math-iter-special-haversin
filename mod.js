// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){var t,e;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var I,T=Object.prototype,k=T.toString,N=T.__defineGetter__,V=T.__defineSetter__,P=T.__lookupGetter__,G=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=T,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var L=I;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof er?er:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(rr)return rr;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=fr.exec(n.toString()))return t[1]}return sr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!lr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(sr));var yr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function vr(r){return"function"===yr(r)}function dr(r){return"number"==typeof r}var gr=Number,br=gr.prototype.toString;var wr=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function mr(r){return dr(r)||hr(r)}$(mr,"isPrimitive",dr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function Ur(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Ur(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:dr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&$(o,jr,(function(){return xr(r[jr](),t,n)})),o}var Fr="function"==typeof Uint32Array;var Ir="function"==typeof Uint32Array?Uint32Array:null;var Tr,kr="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,t,e;if("function"!=typeof Ir)return!1;try{t=new Ir(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Fr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Nr=Tr,Vr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Gr,Lr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Vr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=Gr,Cr="function"==typeof Uint8Array;var Hr="function"==typeof Uint8Array?Uint8Array:null;var Wr,Br="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,256,257]),e=t,r=(Cr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr=Wr,Mr="function"==typeof Uint16Array;var Zr="function"==typeof Uint16Array?Uint16Array:null;var Xr,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr={uint16:Xr,uint8:Rr};(zr=new qr.uint16(1))[0]=4660;var Dr=52===new qr.uint8(zr.buffer)[0],Jr=!0===Dr?1:0,Kr=new $r(1),Qr=new Nr(Kr.buffer);function rt(r){return Kr[0]=r,Qr[Jr]}function tt(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var et=-.16666666666666632,nt=.00833333333332249,ot=-.0001984126982985795,it=27557313707070068e-22,at=-2.5050760253406863e-8,ut=1.58969099521155e-10;function ct(r,t){var e,n,o;return e=nt+(o=r*r)*(ot+o*it)+o*(o*o)*(at+o*ut),n=o*r,0===t?r+n*(et+o*e):r-(o*(.5*t-n*e)-t-n*et)}var ft,lt,st=2147483647,pt=2146435072,yt=1048575,vt=!0===Dr?0:1,dt=new $r(1),gt=new Nr(dt.buffer);!0===Dr?(ft=1,lt=0):(ft=0,lt=1);var bt={HIGH:ft,LOW:lt},wt=new $r(1),ht=new Nr(wt.buffer),mt=bt.HIGH,jt=bt.LOW;function At(r,t){return ht[mt]=r,ht[jt]=t,wt[0]}var _t=Math.floor,Et=Number.POSITIVE_INFINITY,Ot=gr.NEGATIVE_INFINITY,St=1023,Ut=1023,xt=-1023,Ft=-1074;function It(r){return r!=r}function Tt(r){return r===Et||r===Ot}var kt,Nt,Vt=2147483648;!0===Dr?(kt=1,Nt=0):(kt=0,Nt=1);var Pt={HIGH:kt,LOW:Nt},Gt=new $r(1),Lt=new Nr(Gt.buffer),$t=Pt.HIGH,Ct=Pt.LOW;function Ht(r,t,e,n){return Gt[0]=r,t[n]=Lt[$t],t[n+e]=Lt[Ct],t}function Wt(r){return Ht(r,[0,0],1,0)}$(Wt,"assign",Ht);var Bt=[0,0];var Rt=22250738585072014e-324;var Mt=4503599627370496;function Zt(r,t,e,n){return It(r)||Tt(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Rt?(t[n]=r*Mt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Zt(r,[0,0],1,0)}),"assign",Zt);var Xt=2220446049250313e-31,Yt=2148532223,zt=[0,0],qt=[0,0];function Dt(r,t){var e,n,o,i,a,u;return 0===t||0===r||It(r)||Tt(r)?r:(Zt(r,zt,1,0),r=zt[0],t+=zt[1],t+=function(r){var t=rt(r);return(t=(t&pt)>>>20)-St|0}(r),t<Ft?(o=0,i=r,Wt.assign(o,Bt,1,0),a=Bt[0],a&=st,u=rt(i),At(a|=u&=Vt,Bt[1])):t>Ut?r<0?Ot:Et:(t<=xt?(t+=52,n=Xt):n=1,Wt.assign(r,qt,1,0),e=qt[0],e&=Yt,n*At(e|=t+St<<20,qt[1])))}function Jt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],re=16777216,te=5.960464477539063e-8,ee=Jt(20),ne=Jt(20),oe=Jt(20),ie=Jt(20);function ae(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[e],g=e,y=0;g>0;y++)l=te*b|0,ie[y]=b-re*l|0,b=n[g-1]+l,g-=1;if(b=Dt(b,o),b-=8*_t(.125*b),b-=d=0|b,s=0,o>0?(d+=y=ie[e-1]>>24-o,ie[e-1]-=y<<24-o,s=ie[e-1]>>23-o):0===o?s=ie[e-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<e;y++)g=ie[y],0===f?0!==g&&(f=1,ie[y]=16777216-g):ie[y]=16777215-g;if(o>0)switch(o){case 1:ie[e-1]&=8388607;break;case 2:ie[e-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Dt(1,o)))}if(0===b){for(g=0,y=e-1;y>=i;y--)g|=ie[y];if(0===g){for(v=1;0===ie[i-v];v++);for(y=e+1;y<=e+v;y++){for(c[u+y]=Kt[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return ae(r,t,e+=v,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===ie[e];)e-=1,o-=24;else(b=Dt(b,-o))>=re?(l=te*b|0,ie[e]=b-re*l|0,o+=24,ie[e+=1]=l):ie[e]=0|b;for(l=Dt(1,o),y=e;y>=0;y--)n[y]=l*ie[y],l*=te;for(y=e;y>=0;y--){for(l=0,v=0;v<=p&&v<=e-y;v++)l+=Qt[v]*n[y+v];oe[e-y]=l}for(l=0,y=e;y>=0;y--)l+=oe[y];for(t[0]=0===s?l:-l,l=oe[0]-l,y=1;y<=e;y++)l+=oe[y];return t[1]=0===s?l:-l,7&d}function ue(r,t,e,n){var o,i,a,u,c,f,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ee[c]=f<0?0:Kt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ee[a+(c-f)];ne[c]=o}return 4,ae(r,t,4,ne,u,4,i,a,ee)}var ce=Math.round,fe=.6366197723675814,le=1.5707963267341256,se=6077100506506192e-26,pe=6077100506303966e-26,ye=20222662487959506e-37,ve=20222662487111665e-37,de=84784276603689e-45,ge=2047;function be(r,t,e){var n,o,i,a,u;return i=r-(n=ce(r*fe))*le,a=n*se,u=t>>20|0,e[0]=i-a,u-(rt(e[0])>>20&ge)>16&&(a=n*ye-((o=i)-(i=o-(a=n*pe))-a),e[0]=i-a,u-(rt(e[0])>>20&ge)>49&&(a=n*de-((o=i)-(i=o-(a=n*ve))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var we=0,he=16777216,me=1.5707963267341256,je=6077100506506192e-26,Ae=2*je,_e=3*je,Ee=4*je,Oe=598523,Se=1072243195,Ue=1073928572,xe=1074752122,Fe=1074977148,Ie=1075183036,Te=1075388923,ke=1075594811,Ne=1094263291,Ve=[0,0,0],Pe=[0,0];function Ge(r,t){var e,n,o,i,a,u,c;if((o=rt(r)&st|0)<=Se)return t[0]=r,t[1]=0,0;if(o<=xe)return(o&yt)===Oe?be(r,o,t):o<=Ue?r>0?(c=r-me,t[0]=c-je,t[1]=c-t[0]-je,1):(c=r+me,t[0]=c+je,t[1]=c-t[0]+je,-1):r>0?(c=r-2*me,t[0]=c-Ae,t[1]=c-t[0]-Ae,2):(c=r+2*me,t[0]=c+Ae,t[1]=c-t[0]+Ae,-2);if(o<=ke)return o<=Ie?o===Fe?be(r,o,t):r>0?(c=r-3*me,t[0]=c-_e,t[1]=c-t[0]-_e,3):(c=r+3*me,t[0]=c+_e,t[1]=c-t[0]+_e,-3):o===Te?be(r,o,t):r>0?(c=r-4*me,t[0]=c-Ee,t[1]=c-t[0]-Ee,4):(c=r+4*me,t[0]=c+Ee,t[1]=c-t[0]+Ee,-4);if(o<Ne)return be(r,o,t);if(o>=pt)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return dt[0]=r,gt[vt]}(r),c=At(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Ve[a]=0|c,c=(c-Ve[a])*he;for(Ve[2]=c,i=3;Ve[i-1]===we;)i-=1;return u=ue(Ve,Pe,n,i),r<0?(t[0]=-Pe[0],t[1]=-Pe[1],-u):(t[0]=Pe[0],t[1]=Pe[1],u)}var Le=[0,0],$e=2147483647,Ce=1072243195,He=1044381696,We=2146435072;function Be(r){return(1-function(r){var t;if(t=rt(r),(t&=$e)<=Ce)return t<He?1:tt(r,0);if(t>=We)return NaN;switch(3&Ge(r,Le)){case 0:return tt(Le[0],Le[1]);case 1:return-ct(Le[0],Le[1]);case 2:return-tt(Le[0],Le[1]);default:return ct(Le[0],Le[1])}}(r))/2}function Re(r){return xr(r,Be)}export{Re as default};
//# sourceMappingURL=mod.js.map
