// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}function p(r,n,t){return l(r)||l(n)||l(t)||n>=t?NaN:r<n?0:r>=t?1:(r-n)/(t-n)}function y(r){return function(){return r}}function g(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function h(r){return"number"==typeof r}s(p,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){return l(t)?NaN:t<r?0:t>=n?1:(t-r)/(n-r)}}));var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return d&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,w=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",N=b()?function(r){var n,t,e,i,a;if(null==r)return v.call(r);t=r[m],a=m,n=null!=(i=r)&&w.call(i,a);try{r[m]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[m]=t:delete r[m],e}:function(r){return v.call(r)},A=Number,E=A.prototype.toString,_=b();function U(r){return"object"==typeof r&&(r instanceof A||(_?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Number]"===N(r)))}function k(r){return h(r)||U(r)}s(k,"isPrimitive",h),s(k,"isObject",U);var x,S="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var T,V=x,F="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var $,G=T,R="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(R&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var W,C=$,L="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z=52===new Y.uint8(X.buffer)[0],B=!0===z?1:0,D=new G(1),J=new V(D.buffer);function K(r){return D[0]=r,J[B]}var Q=!0===z?1:0,rr=new G(1),nr=new V(rr.buffer);function tr(r,n){return rr[0]=r,nr[Q]=n>>>0,rr[0]}var er=1023,ir=A.NEGATIVE_INFINITY,ar=.6931471803691238,or=1.9082149292705877e-10,ur=1048575;function fr(r){var n,t,e,i,a,o,u,f,c,s,p,y;return 0===r?ir:l(r)||r<0?NaN:(a=0,(t=K(r))<1048576&&(a-=54,t=K(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-er|0,a+=(f=614244+(t&=ur)&1048576|0)>>20|0,u=(r=tr(r,t|1072693248^f))-1,(ur&2+t)<3?0===u?0===a?0:a*ar+a*or:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*ar-(o-a*or-u)):(f=t-398458|0,c=440401-t|0,i=(p=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*ar-(n-(s*(n+o)+a*or)-u)):0===a?u-s*(u-o):a*ar-(s*(u-o)-a*or-u))))}function cr(r,n){return r>=n?NaN:fr(n-r)}function sr(r,n){return l(r)||l(n)||r>=n?NaN:-1.2}function lr(r,n){return r>=n?NaN:.5*(r+n)}function pr(r,n){return r>=n?NaN:.5*(r+n)}function yr(r,n){return l(r)||l(n)||r>=n?NaN:0}var gr=Math.sqrt,hr=gr(1/12);function dr(r,n){return r>=n?NaN:hr*(n-r)}var br=Math.floor;function vr(r){return br(r)===r}function wr(r){return vr(r/2)}function mr(r){return wr(r>0?r-1:r+1)}var Nr,Ar,Er=Number.POSITIVE_INFINITY;function _r(r){return r===Er||r===ir}function Ur(r){return Math.abs(r)}!0===z?(Nr=1,Ar=0):(Nr=0,Ar=1);var kr={HIGH:Nr,LOW:Ar},xr=new G(1),Sr=new V(xr.buffer),Ir=kr.HIGH,jr=kr.LOW;function Tr(r,n,t,e){return xr[0]=r,n[e]=Sr[Ir],n[e+t]=Sr[jr],n}function Vr(r){return Tr(r,[0,0],1,0)}s(Vr,"assign",Tr);var Fr=!0===z?0:1,Or=new G(1),Mr=new V(Or.buffer);function $r(r,n){return Or[0]=r,Mr[Fr]=n>>>0,Or[0]}function Gr(r){return 0|r}var Rr,Hr,Pr=2147483647;!0===z?(Rr=1,Hr=0):(Rr=0,Hr=1);var Wr={HIGH:Rr,LOW:Hr},Cr=new G(1),Lr=new V(Cr.buffer),Zr=Wr.HIGH,qr=Wr.LOW;function Xr(r,n){return Lr[Zr]=r,Lr[qr]=n,Cr[0]}var Yr=[0,0];function zr(r,n){var t,e;return Vr.assign(r,Yr,1,0),t=Yr[0],t&=Pr,e=K(n),Xr(t|=e&=2147483648,Yr[1])}var Br=1048576,Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8];function Qr(r,n,t,e){return l(r)||_r(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ur(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var rn=[0,0],nn=[0,0];function tn(r,n){var t,e;return 0===n||0===r||l(r)||_r(r)?r:(Qr(r,rn,1,0),n+=rn[1],n+=function(r){var n=K(r);return(n=(2146435072&n)>>>20)-er|0}(r=rn[0]),n<-1074?zr(0,r):n>1023?r<0?ir:Er:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Vr.assign(r,nn,1,0),t=nn[0],t&=2148532223,e*Xr(t|=n+er<<20,nn[1])))}var en=1048575,an=1048576,on=1083179008,un=1e300,fn=1e-300,cn=[0,0],sn=[0,0];function ln(r,n){var t,e,i,a,o,u,f,c,s,p,y,g,h,d;if(l(r)||l(n))return NaN;if(Vr.assign(n,cn,1,0),o=cn[0],0===cn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return gr(r);if(-.5===n)return 1/gr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_r(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ur(r)<1==(n===Er)?0:Er}(r,n)}if(Vr.assign(r,cn,1,0),a=cn[0],0===cn[1]){if(0===a)return function(r,n){return n===ir?Er:n===Er?0:n>0?mr(n)?r:0:mr(n)?zr(Er,r):Er}(r,n);if(1===r)return 1;if(-1===r&&mr(n))return-1;if(_r(r))return r===ir?ln(-0,-n):n<0?0:Er}if(r<0&&!1===vr(n))return(r-r)/(r-r);if(i=Ur(r),t=a&Pr|0,e=o&Pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&mr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(K(r)&Pr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*un*un:u*fn*fn;if(t>1072693248)return 0===f?u*un*un:u*fn*fn;y=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=$r(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(sn,i)}else y=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,g,h,d,b,v,w,m,N,A,E;return m=0,t<Br&&(m-=53,t=K(n*=9007199254740992)),m+=(t>>20)-er|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Br),o=$r(i=(v=(n=tr(n,t))-(c=Dr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=tr(0,e+=A<<18),b=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=$r(f=3+(a=o*o)+(b+=(u=w*(v-o*f-o*(n-(f-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(l=$r(l=(v=o*f)+(w=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(w-(l-v))+Kr[A])-((g=$r(g=(p=.9617967009544373*l)+y+(s=Jr[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(sn,i,t);if(g=(p=(n-(c=$r(n,0)))*y[0]+n*y[1])+(s=c*y[0]),Vr.assign(g,cn,1,0),h=Gr(cn[0]),d=Gr(cn[1]),h>=on){if(0!=(h-on|d))return u*un*un;if(p+8008566259537294e-32>g-s)return u*un*un}else if((h&Pr)>=1083231232){if(0!=(h-3230714880|d))return u*fn*fn;if(p<=g-s)return u*fn*fn}return g=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>20)-er|0,c=0,s>1071644672&&(i=tr(0,((c=r+(an>>l+1)>>>0)&~(en>>(l=((c&Pr)>>20)-er|0)))>>>0),c=(c&en|an)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Gr(r=K(f=1-((f=(a=.6931471824645996*(i=$r(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?tn(f,c):tr(f,r)}(h,s,p),u*g}function pn(r,n){return r>=n?NaN:1/12*ln(n-r,2)}function yn(r,n,t){return l(r)||l(n)||l(t)||n>=t?NaN:r<n?ir:r>=t?0:fr((r-n)/(t-n))}function gn(r,n,t){return l(r)||l(n)||l(t)||n>=t?NaN:r<n||r>t?ir:-fr(t-n)}s(yn,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){return l(t)?NaN:t<r?ir:t>=n?0:fr((t-r)/(n-r))}})),s(gn,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){return l(t)?NaN:t<r||t>n?ir:-fr(n-r)}}));var hn=Math.ceil;function dn(r){return r<0?hn(r):br(r)}var bn=1.4426950408889634,vn=1/(1<<28);function wn(r){var n;return l(r)||r===Er?r:r===ir?0:r>709.782712893384?Er:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<vn?1+r:function(r,n,t){var e,i,a,o;return tn(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=dn(r<0?bn*r-.5:bn*r+.5)),1.9082149292705877e-10*n,n)}function mn(r,n,t){var e;return l(r)||l(n)||l(t)||n>=t?NaN:0===r?1:(e=wn(r*t)-wn(r*n),e/=r*(t-n))}function Nn(r,n,t){return l(r)||l(n)||l(t)||n>=t?NaN:r<n||r>t?0:1/(t-n)}function An(r,n,t){return l(n)||l(t)||n>=t||l(r)||r<0||r>1?NaN:n+r*(t-n)}function En(r){return"number"==typeof r}function _n(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Un(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+_n(i):_n(i)+r,e&&(r="-"+r)),r}s(mn,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){var e;return l(t)?NaN:0===t?1:(e=wn(t*n)-wn(t*r),e/=t*(n-r))}})),s(Nn,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){return l(t)?NaN:t<r||t>n?0:1/(n-r)}})),s(An,"factory",(function(r,n){return l(r)||l(n)||r>=n?y(NaN):function(t){return l(t)||t<0||t>1?NaN:r+t*(n-r)}}));var kn=String.prototype.toLowerCase,xn=String.prototype.toUpperCase;function Sn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!En(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Un(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Un(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===xn.call(r.specifier)?xn.call(t):kn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function In(r){return"string"==typeof r}var jn=Math.abs,Tn=String.prototype.toLowerCase,Vn=String.prototype.toUpperCase,Fn=String.prototype.replace,On=/e\+(\d)$/,Mn=/e-(\d)$/,$n=/^(\d+)$/,Gn=/^(\d+)e/,Rn=/\.0$/,Hn=/\.0*e/,Pn=/(\..*[^0])0*e/;function Wn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!En(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":jn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Fn.call(t,Pn,"$1e"),t=Fn.call(t,Hn,"e"),t=Fn.call(t,Rn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Fn.call(t,On,"e+0$1"),t=Fn.call(t,Mn,"e-0$1"),r.alternate&&(t=Fn.call(t,$n,"$1."),t=Fn.call(t,Gn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Vn.call(r.specifier)?Vn.call(t):Tn.call(t)}function Cn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Ln(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Cn(e):Cn(e)+r}var Zn=String.fromCharCode,qn=isNaN,Xn=Array.isArray;function Yn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function zn(r){var n,t,e,i,a,o,u,f,c;if(!Xn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(In(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=Yn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,qn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,qn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Sn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!qn(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=qn(a)?String(e.arg):Zn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Wn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Un(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Ln(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Bn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Dn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Jn(r){var n,t,e,i;for(t=[],i=0,e=Bn.exec(r);e;)(n=r.slice(i,Bn.lastIndex-e[0].length)).length&&t.push(n),t.push(Dn(e)),i=Bn.lastIndex,e=Bn.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Kn(r){return"string"==typeof r}function Qn(r){var n,t,e;if(!Kn(r))throw new TypeError(Qn("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Jn(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return zn.apply(null,t)}function rt(){var r,n;if(!(this instanceof rt))return 0===arguments.length?new rt:new rt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!h(r=arguments[0])||l(r))throw new TypeError(Qn("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!h(n)||l(n))throw new TypeError(Qn("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(r>=n)throw new RangeError(Qn("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",r,n))}else r=0,n=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!h(t)||l(t))throw new TypeError(Qn("invalid assignment. Must be a number. Value: `%s`.",t));if(t>=n)throw new RangeError(Qn("invalid assignment. Must be less than %f. Value: `%f`.",n,t));r=t}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!h(t)||l(t))throw new TypeError(Qn("invalid assignment. Must be a number. Value: `%s`.",t));if(r>=t)throw new RangeError(Qn("invalid assignment. Must be greater than %f. Value: `%f`.",r,t));n=t}}),this}g(rt.prototype,"entropy",(function(){return cr(this.a,this.b)})),g(rt.prototype,"kurtosis",(function(){return sr(this.a,this.b)})),g(rt.prototype,"mean",(function(){return lr(this.a,this.b)})),g(rt.prototype,"median",(function(){return pr(this.a,this.b)})),g(rt.prototype,"skewness",(function(){return yr(this.a,this.b)})),g(rt.prototype,"stdev",(function(){return dr(this.a,this.b)})),g(rt.prototype,"variance",(function(){return pn(this.a,this.b)})),s(rt.prototype,"cdf",(function(r){return p(r,this.a,this.b)})),s(rt.prototype,"logcdf",(function(r){return yn(r,this.a,this.b)})),s(rt.prototype,"logpdf",(function(r){return gn(r,this.a,this.b)})),s(rt.prototype,"mgf",(function(r){return mn(r,this.a,this.b)})),s(rt.prototype,"pdf",(function(r){return Nn(r,this.a,this.b)})),s(rt.prototype,"quantile",(function(r){return An(r,this.a,this.b)}));var nt={};return c(nt,"cdf",p),c(nt,"Uniform",rt),c(nt,"entropy",cr),c(nt,"kurtosis",sr),c(nt,"logcdf",yn),c(nt,"logpdf",gn),c(nt,"mean",lr),c(nt,"median",pr),c(nt,"mgf",mn),c(nt,"pdf",Nn),c(nt,"quantile",An),c(nt,"skewness",yr),c(nt,"stdev",dr),c(nt,"variance",pn),nt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).uniform=n();
//# sourceMappingURL=index.js.map
