// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,d,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var F,I=Object.prototype,k=I.toString,N=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=F;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString,vr=B();function br(r){return"object"==typeof r&&(r instanceof dr||(vr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}var xr,Ur="function"==typeof Uint32Array,Tr="function"==typeof Uint32Array?Uint32Array:null,Fr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ur&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Ir,kr=xr,Nr="function"==typeof Float64Array,Vr="function"==typeof Float64Array?Float64Array:null,Pr="function"==typeof Float64Array?Float64Array:void 0;Ir=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,NaN]),t=e,r=(Nr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Gr,Lr=Ir,$r="function"==typeof Uint8Array,Cr="function"==typeof Uint8Array?Uint8Array:null,Hr="function"==typeof Uint8Array?Uint8Array:void 0;Gr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,256,257]),t=e,r=($r&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr,Br=Gr,Rr="function"==typeof Uint16Array,Mr="function"==typeof Uint16Array?Uint16Array:null,Zr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Rr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr,Yr={uint16:Wr,uint8:Br};(Xr=new Yr.uint16(1))[0]=4660;var zr=52===new Yr.uint8(Xr.buffer)[0],qr=!0===zr?1:0,Dr=new Lr(1),Jr=new kr(Dr.buffer);function Kr(r){return Dr[0]=r,Jr[qr]}function Qr(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var re=-.16666666666666632,ee=.00833333333332249,te=-.0001984126982985795,ne=27557313707070068e-22,oe=-2.5050760253406863e-8,ie=1.58969099521155e-10;function ae(r,e){var t,n,o;return t=ee+(o=r*r)*(te+o*ne)+o*(o*o)*(oe+o*ie),n=o*r,0===e?r+n*(re+o*t):r-(o*(.5*e-n*t)-e-n*re)}var ue,ce,fe=2147483647,le=2146435072,se=1048575,pe=!0===zr?0:1,ye=new Lr(1),de=new kr(ye.buffer);!0===zr?(ue=1,ce=0):(ue=0,ce=1);var ge={HIGH:ue,LOW:ce},ve=new Lr(1),be=new kr(ve.buffer),he=ge.HIGH,we=ge.LOW;function me(r,e){return be[he]=r,be[we]=e,ve[0]}var je=Math.floor,Ae=Number.POSITIVE_INFINITY,_e=dr.NEGATIVE_INFINITY,Ee=1023,Oe=1023,Se=-1023,xe=-1074;function Ue(r){return r!=r}function Te(r){return r===Ae||r===_e}var Fe,Ie,ke=2147483648;!0===zr?(Fe=1,Ie=0):(Fe=0,Ie=1);var Ne={HIGH:Fe,LOW:Ie},Ve=new Lr(1),Pe=new kr(Ve.buffer),Ge=Ne.HIGH,Le=Ne.LOW;function $e(r,e,t,n){return Ve[0]=r,e[n]=Pe[Ge],e[n+t]=Pe[Le],e}function Ce(r){return $e(r,[0,0],1,0)}$(Ce,"assign",$e);var He=[0,0],We=22250738585072014e-324,Be=4503599627370496;function Re(r,e,t,n){return Ue(r)||Te(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<We?(e[n]=r*Be,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Re(r,[0,0],1,0)}),"assign",Re);var Me=2220446049250313e-31,Ze=2148532223,Xe=[0,0],Ye=[0,0];function ze(r,e){var t,n,o,i,a,u;return 0===e||0===r||Ue(r)||Te(r)?r:(Re(r,Xe,1,0),r=Xe[0],e+=Xe[1],e+=function(r){var e=Kr(r);return(e=(e&le)>>>20)-Ee|0}(r),e<xe?(o=0,i=r,Ce.assign(o,He,1,0),a=He[0],a&=fe,u=Kr(i),me(a|=u&=ke,He[1])):e>Oe?r<0?_e:Ae:(e<=Se?(e+=52,n=Me):n=1,Ce.assign(r,Ye,1,0),t=Ye[0],t&=Ze,n*me(t|=e+Ee<<20,Ye[1])))}function qe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var De=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ke=16777216,Qe=5.960464477539063e-8,rt=qe(20),et=qe(20),tt=qe(20),nt=qe(20);function ot(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,d,g,v,b;for(p=i,b=n[t],v=t,y=0;v>0;y++)l=Qe*b|0,nt[y]=b-Ke*l|0,b=n[v-1]+l,v-=1;if(b=ze(b,o),b-=8*je(.125*b),b-=g=0|b,s=0,o>0?(g+=y=nt[t-1]>>24-o,nt[t-1]-=y<<24-o,s=nt[t-1]>>23-o):0===o?s=nt[t-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,f=0,y=0;y<t;y++)v=nt[y],0===f?0!==v&&(f=1,nt[y]=16777216-v):nt[y]=16777215-v;if(o>0)switch(o){case 1:nt[t-1]&=8388607;break;case 2:nt[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=ze(1,o)))}if(0===b){for(v=0,y=t-1;y>=i;y--)v|=nt[y];if(0===v){for(d=1;0===nt[i-d];d++);for(y=t+1;y<=t+d;y++){for(c[u+y]=De[a+y],l=0,v=0;v<=u;v++)l+=r[v]*c[u+(y-v)];n[y]=l}return ot(r,e,t+=d,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===nt[t];)t-=1,o-=24;else(b=ze(b,-o))>=Ke?(l=Qe*b|0,nt[t]=b-Ke*l|0,o+=24,nt[t+=1]=l):nt[t]=0|b;for(l=ze(1,o),y=t;y>=0;y--)n[y]=l*nt[y],l*=Qe;for(y=t;y>=0;y--){for(l=0,d=0;d<=p&&d<=t-y;d++)l+=Je[d]*n[y+d];tt[t-y]=l}for(l=0,y=t;y>=0;y--)l+=tt[y];for(e[0]=0===s?l:-l,l=tt[0]-l,y=1;y<=t;y++)l+=tt[y];return e[1]=0===s?l:-l,7&g}function it(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)rt[c]=f<0?0:De[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*rt[a+(c-f)];et[c]=o}return ot(r,e,4,et,u,4,i,a,rt)}var at=Math.round,ut=.6366197723675814,ct=1.5707963267341256,ft=6077100506506192e-26,lt=6077100506303966e-26,st=20222662487959506e-37,pt=20222662487111665e-37,yt=84784276603689e-45,dt=2047;function gt(r,e,t){var n,o,i,a,u;return i=r-(n=at(r*ut))*ct,a=n*ft,u=e>>20|0,t[0]=i-a,u-(Kr(t[0])>>20&dt)>16&&(a=n*st-((o=i)-(i=o-(a=n*lt))-a),t[0]=i-a,u-(Kr(t[0])>>20&dt)>49&&(a=n*yt-((o=i)-(i=o-(a=n*pt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var vt=0,bt=16777216,ht=1.5707963267341256,wt=6077100506506192e-26,mt=2*wt,jt=3*wt,At=4*wt,_t=598523,Et=1072243195,Ot=1073928572,St=1074752122,xt=1074977148,Ut=1075183036,Tt=1075388923,Ft=1075594811,It=1094263291,kt=[0,0,0],Nt=[0,0];function Vt(r,e){var t,n,o,i,a,u,c;if((o=Kr(r)&fe|0)<=Et)return e[0]=r,e[1]=0,0;if(o<=St)return(o&se)===_t?gt(r,o,e):o<=Ot?r>0?(c=r-ht,e[0]=c-wt,e[1]=c-e[0]-wt,1):(c=r+ht,e[0]=c+wt,e[1]=c-e[0]+wt,-1):r>0?(c=r-2*ht,e[0]=c-mt,e[1]=c-e[0]-mt,2):(c=r+2*ht,e[0]=c+mt,e[1]=c-e[0]+mt,-2);if(o<=Ft)return o<=Ut?o===xt?gt(r,o,e):r>0?(c=r-3*ht,e[0]=c-jt,e[1]=c-e[0]-jt,3):(c=r+3*ht,e[0]=c+jt,e[1]=c-e[0]+jt,-3):o===Tt?gt(r,o,e):r>0?(c=r-4*ht,e[0]=c-At,e[1]=c-e[0]-At,4):(c=r+4*ht,e[0]=c+At,e[1]=c-e[0]+At,-4);if(o<It)return gt(r,o,e);if(o>=le)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ye[0]=r,de[pe]}(r),c=me(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)kt[a]=0|c,c=(c-kt[a])*bt;for(kt[2]=c,i=3;kt[i-1]===vt;)i-=1;return u=it(kt,Nt,n,i),r<0?(e[0]=-Nt[0],e[1]=-Nt[1],-u):(e[0]=Nt[0],e[1]=Nt[1],u)}var Pt=[0,0],Gt=1072243195,Lt=1044381696;function $t(r){return(1-function(r){var e;if(e=Kr(r),(e&=fe)<=Gt)return e<Lt?1:Qr(r,0);if(e>=le)return NaN;switch(3&Vt(r,Pt)){case 0:return Qr(Pt[0],Pt[1]);case 1:return-ae(Pt[0],Pt[1]);case 2:return-Qr(Pt[0],Pt[1]);default:return ae(Pt[0],Pt[1])}}(r))/2}return function(r){return Sr(r,$t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterHaversin=e();
//# sourceMappingURL=browser.js.map
