// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,i=e.toString,a=e.__defineGetter__,o=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,n,t.get),p&&o&&o.call(r,n,t.set),r};function s(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}function y(r,n,t){return p(r)||p(n)||p(t)||n>=t?NaN:r<n?0:r>=t?1:(r-n)/(t-n)}function h(r){return function(){return r}}function g(r,n,t){c(r,n,{configurable:!1,enumerable:!1,get:t})}function d(r){return"number"==typeof r}l(y,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){return p(t)?NaN:t<r?0:t>=n?1:(t-r)/(n-r)}}));var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString,m=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",A=v()?function(r){var n,t,e,i,a;if(null==r)return w.call(r);t=r[N],a=N,n=null!=(i=r)&&m.call(i,a);try{r[N]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[N]=t:delete r[N],e}:function(r){return w.call(r)},E=Number,_=E.prototype.toString,U=v();function k(r){return"object"==typeof r&&(r instanceof E||(U?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===A(r)))}function x(r){return d(r)||k(r)}l(x,"isPrimitive",d),l(x,"isObject",k);var S,j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var V,F=S,O="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,$="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var G,P=V,R="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(R&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C,L=G,Z="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,X="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Z&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,z={uint16:C,uint8:L};(Y=new z.uint16(1))[0]=4660;var B=52===new z.uint8(Y.buffer)[0],D=!0===B?1:0,J=new P(1),K=new F(J.buffer);function Q(r){return J[0]=r,K[D]}var rr=!0===B?1:0,nr=new P(1),tr=new F(nr.buffer);function er(r,n){return nr[0]=r,tr[rr]=n>>>0,nr[0]}var ir=1023,ar=E.NEGATIVE_INFINITY,or=.6931471803691238,ur=1.9082149292705877e-10,fr=1048575;function cr(r){var n,t,e,i,a,o,u,f,c,s,l,y;return 0===r?ar:p(r)||r<0?NaN:(a=0,(t=Q(r))<1048576&&(a-=54,t=Q(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-ir|0,a+=(f=614244+(t&=fr)&1048576|0)>>20|0,u=(r=er(r,t|1072693248^f))-1,(fr&2+t)<3?0===u?0===a?0:a*or+a*ur:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*or-(o-a*ur-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*or-(n-(s*(n+o)+a*ur)-u)):0===a?u-s*(u-o):a*or-(s*(u-o)-a*ur-u))))}function sr(r,n){return r>=n?NaN:cr(n-r)}function lr(r,n){return p(r)||p(n)||r>=n?NaN:-1.2}function pr(r,n){return r>=n?NaN:.5*(r+n)}function yr(r,n){return r>=n?NaN:.5*(r+n)}function hr(r,n){return p(r)||p(n)||r>=n?NaN:0}var gr=Math.sqrt,dr=gr(1/12);function br(r,n){return r>=n?NaN:dr*(n-r)}var vr=Math.floor;function wr(r){return vr(r)===r}function mr(r){return wr(r/2)}function Nr(r){return mr(r>0?r-1:r+1)}var Ar,Er,_r=Number.POSITIVE_INFINITY;function Ur(r){return r===_r||r===ar}function kr(r){return Math.abs(r)}!0===B?(Ar=1,Er=0):(Ar=0,Er=1);var xr={HIGH:Ar,LOW:Er},Sr=new P(1),jr=new F(Sr.buffer),Ir=xr.HIGH,Tr=xr.LOW;function Vr(r,n){return Sr[0]=n,r[0]=jr[Ir],r[1]=jr[Tr],r}function Fr(r,n){return 1===arguments.length?Vr([0,0],r):Vr(r,n)}var Or,Mr,$r=!0===B?0:1,Gr=new P(1),Pr=new F(Gr.buffer);function Rr(r,n){return Gr[0]=r,Pr[$r]=n>>>0,Gr[0]}function Hr(r){return 0|r}!0===B?(Or=1,Mr=0):(Or=0,Mr=1);var Wr={HIGH:Or,LOW:Mr},Cr=new P(1),Lr=new F(Cr.buffer),Zr=Wr.HIGH,qr=Wr.LOW;function Xr(r,n){return Lr[Zr]=r,Lr[qr]=n,Cr[0]}var Yr=[0,0];function zr(r,n){var t,e;return Fr(Yr,r),t=Yr[0],t&=2147483647,e=Q(n),Xr(t|=e&=2147483648,Yr[1])}var Br=1048576,Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8];function Qr(r,n){return p(n)||Ur(n)?(r[0]=n,r[1]=0,r):0!==n&&kr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var rn=[0,0],nn=[0,0];function tn(r,n){var t,e;return 0===n||0===r||p(r)||Ur(r)?r:(function(r,n){1===arguments.length?Qr([0,0],r):Qr(r,n)}(rn,r),n+=rn[1],n+=function(r){var n=Q(r);return(n=(2146435072&n)>>>20)-ir|0}(r=rn[0]),n<-1074?zr(0,r):n>1023?r<0?ar:_r:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Fr(nn,r),t=nn[0],t&=2148532223,e*Xr(t|=n+ir<<20,nn[1])))}var en=2147483647,an=1048575,on=1048576,un=2147483647,fn=1083179008,cn=1e300,sn=1e-300,ln=[0,0],pn=[0,0];function yn(r,n){var t,e,i,a,o,u,f,c,s,l,y,h,g,d;if(p(r)||p(n))return NaN;if(Fr(ln,n),o=ln[0],0===ln[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return gr(r);if(-.5===n)return 1/gr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ur(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:kr(r)<1==(n===_r)?0:_r}(r,n)}if(Fr(ln,r),a=ln[0],0===ln[1]){if(0===a)return function(r,n){return n===ar?_r:n===_r?0:n>0?Nr(n)?r:0:Nr(n)?zr(_r,r):_r}(r,n);if(1===r)return 1;if(-1===r&&Nr(n))return-1;if(Ur(r))return r===ar?yn(-0,-n):n<0?0:_r}if(r<0&&!1===wr(n))return(r-r)/(r-r);if(i=kr(r),t=a&un|0,e=o&un|0,f=o>>>31|0,u=(u=a>>>31|0)&&Nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Q(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*cn*cn:u*sn*sn;if(t>1072693248)return 0===f?u*cn*cn:u*sn*sn;y=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Rr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(pn,i)}else y=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,h,g,d,b,v,w,m,N,A,E;return m=0,t<Br&&(m-=53,t=Q(n*=9007199254740992)),m+=(t>>20)-ir|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Br),o=Rr(i=(v=(n=er(n,t))-(c=Dr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=er(0,e+=A<<18),b=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Rr(f=3+(a=o*o)+(b+=(u=w*(v-o*f-o*(n-(f-c))))*(o+i)),0),g=(y=-7.028461650952758e-9*(l=Rr(l=(v=o*f)+(w=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(w-(l-v))+Kr[A])-((h=Rr(h=(p=.9617967009544373*l)+y+(s=Jr[A])+(d=m),0))-d-s-p),r[0]=h,r[1]=g,r}(pn,i,t);if(l=(n-(c=Rr(n,0)))*y[0]+n*y[1],s=c*y[0],Fr(ln,h=l+s),g=Hr(ln[0]),d=Hr(ln[1]),g>=fn){if(0!=(g-fn|d))return u*cn*cn;if(l+8008566259537294e-32>h-s)return u*cn*cn}else if((g&un)>=1083231232){if(0!=(g-3230714880|d))return u*sn*sn;if(l<=h-s)return u*sn*sn}return h=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&en|0)>>20)-ir|0,c=0,s>1071644672&&(i=er(0,((c=r+(on>>l+1)>>>0)&~(an>>(l=((c&en)>>20)-ir|0)))>>>0),c=(c&an|on)>>20-l>>>0,r<0&&(c=-c),n-=i),r=Hr(r=Q(f=1-((f=(a=.6931471824645996*(i=Rr(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?tn(f,c):er(f,r)}(g,s,l),u*h}function hn(r,n){return r>=n?NaN:1/12*yn(n-r,2)}function gn(r,n,t){return p(r)||p(n)||p(t)||n>=t?NaN:r<n?ar:r>=t?0:cr((r-n)/(t-n))}function dn(r,n,t){return p(r)||p(n)||p(t)||n>=t?NaN:r<n||r>t?ar:-cr(t-n)}l(gn,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){return p(t)?NaN:t<r?ar:t>=n?0:cr((t-r)/(n-r))}})),l(dn,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){return p(t)?NaN:t<r||t>n?ar:-cr(n-r)}}));var bn=Math.ceil;function vn(r){return r<0?bn(r):vr(r)}var wn=1.4426950408889634,mn=1/(1<<28);function Nn(r){var n;return p(r)||r===_r?r:r===ar?0:r>709.782712893384?_r:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<mn?1+r:function(r,n,t){var e,i,a,o;return tn(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=vn(r<0?wn*r-.5:wn*r+.5)),1.9082149292705877e-10*n,n)}function An(r,n,t){var e;return p(r)||p(n)||p(t)||n>=t?NaN:0===r?1:(e=Nn(r*t)-Nn(r*n),e/=r*(t-n))}function En(r,n,t){return p(r)||p(n)||p(t)||n>=t?NaN:r<n||r>t?0:1/(t-n)}function _n(r,n,t){return p(n)||p(t)||n>=t||p(r)||r<0||r>1?NaN:n+r*(t-n)}function Un(r){return"number"==typeof r}function kn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function xn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+kn(i):kn(i)+r,e&&(r="-"+r)),r}l(An,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){var e;return p(t)?NaN:0===t?1:(e=Nn(t*n)-Nn(t*r),e/=t*(n-r))}})),l(En,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){return p(t)?NaN:t<r||t>n?0:1/(n-r)}})),l(_n,"factory",(function(r,n){return p(r)||p(n)||r>=n?h(NaN):function(t){return p(t)||t<0||t>1?NaN:r+t*(n-r)}}));var Sn=String.prototype.toLowerCase,jn=String.prototype.toUpperCase;function In(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Un(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=xn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=xn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===jn.call(r.specifier)?jn.call(t):Sn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Tn(r){return"string"==typeof r}var Vn=Math.abs,Fn=String.prototype.toLowerCase,On=String.prototype.toUpperCase,Mn=String.prototype.replace,$n=/e\+(\d)$/,Gn=/e-(\d)$/,Pn=/^(\d+)$/,Rn=/^(\d+)e/,Hn=/\.0$/,Wn=/\.0*e/,Cn=/(\..*[^0])0*e/;function Ln(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Un(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Vn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Mn.call(t,Cn,"$1e"),t=Mn.call(t,Wn,"e"),t=Mn.call(t,Hn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Mn.call(t,$n,"e+0$1"),t=Mn.call(t,Gn,"e-0$1"),r.alternate&&(t=Mn.call(t,Pn,"$1."),t=Mn.call(t,Rn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===On.call(r.specifier)?On.call(t):Fn.call(t)}function Zn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function qn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Zn(e):Zn(e)+r}var Xn=String.fromCharCode,Yn=isNaN,zn=Array.isArray;function Bn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Dn(r){var n,t,e,i,a,o,u,f,c;if(!zn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Tn(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=Bn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Yn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Yn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=In(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Yn(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Yn(a)?String(e.arg):Xn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Ln(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=xn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=qn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var Jn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Kn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Qn(r){var n,t,e,i;for(t=[],i=0,e=Jn.exec(r);e;)(n=r.slice(i,Jn.lastIndex-e[0].length)).length&&t.push(n),t.push(Kn(e)),i=Jn.lastIndex,e=Jn.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function rt(r){return"string"==typeof r}function nt(r){var n,t,e;if(!rt(r))throw new TypeError(nt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Qn(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Dn.apply(null,t)}function tt(){var r,n;if(!(this instanceof tt))return 0===arguments.length?new tt:new tt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!d(r=arguments[0])||p(r))throw new TypeError(nt("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!d(n)||p(n))throw new TypeError(nt("invalid argument. Maximum support must be a number. Value: `%s`.",n));if(r>=n)throw new RangeError(nt("invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.",r,n))}else r=0,n=1;return c(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!d(t)||p(t))throw new TypeError(nt("invalid assignment. Must be a number. Value: `%s`.",t));if(t>=n)throw new RangeError(nt("invalid assignment. Must be less than %f. Value: `%f`.",n,t));r=t}}),c(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!d(t)||p(t))throw new TypeError(nt("invalid assignment. Must be a number. Value: `%s`.",t));if(r>=t)throw new RangeError(nt("invalid assignment. Must be greater than %f. Value: `%f`.",r,t));n=t}}),this}g(tt.prototype,"entropy",(function(){return sr(this.a,this.b)})),g(tt.prototype,"kurtosis",(function(){return lr(this.a,this.b)})),g(tt.prototype,"mean",(function(){return pr(this.a,this.b)})),g(tt.prototype,"median",(function(){return yr(this.a,this.b)})),g(tt.prototype,"skewness",(function(){return hr(this.a,this.b)})),g(tt.prototype,"stdev",(function(){return br(this.a,this.b)})),g(tt.prototype,"variance",(function(){return hn(this.a,this.b)})),l(tt.prototype,"cdf",(function(r){return y(r,this.a,this.b)})),l(tt.prototype,"logcdf",(function(r){return gn(r,this.a,this.b)})),l(tt.prototype,"logpdf",(function(r){return dn(r,this.a,this.b)})),l(tt.prototype,"mgf",(function(r){return An(r,this.a,this.b)})),l(tt.prototype,"pdf",(function(r){return En(r,this.a,this.b)})),l(tt.prototype,"quantile",(function(r){return _n(r,this.a,this.b)}));var et={};s(et,"cdf",y),s(et,"Uniform",tt),s(et,"entropy",sr),s(et,"kurtosis",lr),s(et,"logcdf",gn),s(et,"logpdf",dn),s(et,"mean",pr),s(et,"median",yr),s(et,"mgf",An),s(et,"pdf",En),s(et,"quantile",_n),s(et,"skewness",hr),s(et,"stdev",br),s(et,"variance",hn),r.Uniform=tt,r.cdf=y,r.default=et,r.entropy=sr,r.kurtosis=lr,r.logcdf=gn,r.logpdf=dn,r.mean=pr,r.median=yr,r.mgf=An,r.pdf=En,r.quantile=_n,r.skewness=hr,r.stdev=br,r.variance=hn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).uniform={});
//# sourceMappingURL=browser.js.map
