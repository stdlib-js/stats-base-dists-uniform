// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,f.get),p&&i&&i.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return r!=r}function p(r,t,n){return y(r)||y(t)||y(n)||t>=n?NaN:r<t?0:r>=n?1:(r-t)/(n-t)}function v(r){return function(){return r}}function s(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function b(r){return"number"==typeof r}l(p,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){if(y(n))return NaN;if(n<r)return 0;if(n>=t)return 1;return(n-r)/(t-r)}}));var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=N()?function(r){var t,n,e,u,i;if(null==r)return m.call(r);n=r[d],i=d,t=null!=(u=r)&&w.call(u,i);try{r[d]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[d]=n:delete r[d],e}:function(r){return m.call(r)},A=Number,_=A.prototype.toString;var U=N();function j(r){return"object"==typeof r&&(r instanceof A||(U?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function E(r){return b(r)||j(r)}l(E,"isPrimitive",b),l(E,"isObject",j);var I="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var S,T="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(I&&n instanceof Uint32Array||"[object Uint32Array]"===g(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var M=S,V="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var H,G="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(V&&n instanceof Float64Array||"[object Float64Array]"===g(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=H,k="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var L,W="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,256,257]),n=t,r=(k&&n instanceof Uint8Array||"[object Uint8Array]"===g(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var q=L,R="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var C,z="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),n=t,r=(R&&n instanceof Uint16Array||"[object Uint16Array]"===g(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:C,uint8:q};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new P(1),X=new M(Q.buffer);function Z(r){return Q[0]=r,X[K]}var $=!0===J?1:0,rr=new P(1),tr=new M(rr.buffer);function nr(r,t){return rr[0]=r,tr[$]=t>>>0,rr[0]}var er=A.NEGATIVE_INFINITY;var ur=.6931471803691238,ir=1.9082149292705877e-10;function or(r){var t,n,e,u,i,o,a,f,c,l,p,v;return 0===r?er:y(r)||r<0?NaN:(i=0,(n=Z(r))<1048576&&(i-=54,n=Z(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=nr(r,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===i?0:i*ur+i*ir:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*ur-(o-i*ir-a)):(f=n-398458|0,c=440401-n|0,u=(p=(v=(l=a/(2+a))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+u,(f|=c)>0?(t=.5*a*a,0===i?a-(t-l*(t+o)):i*ur-(t-(l*(t+o)+i*ir)-a)):0===i?a-l*(a-o):i*ur-(l*(a-o)-i*ir-a))))}function ar(r,t){return r>=t?NaN:or(t-r)}function fr(r,t){return y(r)||y(t)||r>=t?NaN:-1.2}function cr(r,t){return r>=t?NaN:.5*(r+t)}function lr(r,t){return r>=t?NaN:.5*(r+t)}function yr(r,t){return y(r)||y(t)||r>=t?NaN:0}var pr=Math.sqrt,vr=pr(1/12);function sr(r,t){return r>=t?NaN:vr*(t-r)}var br=Math.floor;function hr(r){return br(r)===r}function Nr(r){return hr(r/2)}function mr(r){return Nr(r>0?r-1:r+1)}var wr,dr,gr=Number.POSITIVE_INFINITY;function Ar(r){return r===gr||r===er}function _r(r){return Math.abs(r)}!0===J?(wr=1,dr=0):(wr=0,dr=1);var Ur={HIGH:wr,LOW:dr},jr=new P(1),Er=new M(jr.buffer),Ir=Ur.HIGH,Or=Ur.LOW;function Sr(r,t){return jr[0]=t,r[0]=Er[Ir],r[1]=Er[Or],r}function Tr(r,t){return 1===arguments.length?Sr([0,0],r):Sr(r,t)}var Mr,Vr,Fr=!0===J?0:1,Hr=new P(1),Gr=new M(Hr.buffer);function Pr(r,t){return Hr[0]=r,Gr[Fr]=t>>>0,Hr[0]}function kr(r){return 0|r}!0===J?(Mr=1,Vr=0):(Mr=0,Vr=1);var xr={HIGH:Mr,LOW:Vr},Lr=new P(1),Wr=new M(Lr.buffer),qr=xr.HIGH,Rr=xr.LOW;function Yr(r,t){return Wr[qr]=r,Wr[Rr]=t,Lr[0]}var Cr=[0,0];function zr(r,t){var n,e;return Tr(Cr,r),n=Cr[0],n&=2147483647,e=Z(t),Yr(n|=e&=2147483648,Cr[1])}var Br=[1,1.5],Dr=[0,.5849624872207642],Jr=[0,1.350039202129749e-8];function Kr(r,t){return y(t)||Ar(t)?(r[0]=t,r[1]=0,r):0!==t&&_r(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Qr=[0,0],Xr=[0,0];function Zr(r,t){var n,e;return 0===t||0===r||y(r)||Ar(r)?r:(function(r,t){1===arguments.length?Kr([0,0],r):Kr(r,t)}(Qr,r),t+=Qr[1],t+=function(r){var t=Z(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Qr[0]),t<-1074?zr(0,r):t>1023?r<0?er:gr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Tr(Xr,r),n=Xr[0],n&=2148532223,e*Yr(n|=t+1023<<20,Xr[1])))}var $r=1e300,rt=1e-300,tt=[0,0],nt=[0,0];function et(r,t){var n,e,u,i,o,a,f,c,l,p,v,s,b,h;if(y(r)||y(t))return NaN;if(Tr(tt,t),o=tt[0],0===tt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return pr(r);if(-.5===t)return 1/pr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Ar(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:_r(r)<1==(t===gr)?0:gr}(r,t)}if(Tr(tt,r),i=tt[0],0===tt[1]){if(0===i)return function(r,t){return t===er?gr:t===gr?0:t>0?mr(t)?r:0:mr(t)?zr(gr,r):gr}(r,t);if(1===r)return 1;if(-1===r&&mr(t))return-1;if(Ar(r))return r===er?et(-0,-t):t<0?0:gr}if(r<0&&!1===hr(t))return(r-r)/(r-r);if(u=_r(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,a=(a=i>>>31|0)&&mr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Z(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?a*$r*$r:a*rt*rt;if(n>1072693248)return 0===f?a*$r*$r:a*rt*rt;v=function(r,t){var n,e,u,i,o,a;return n=(o=1.9259629911266175e-8*(u=t-1)-u*u*(0===(a=u)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Pr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=n,r}(nt,u)}else v=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,v,s,b,h,N,m,w,d,g,A,_;return d=0,n<1048576&&(d-=53,n=Z(t*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=1048576),o=Pr(u=(m=(t=nr(t,n))-(c=Br[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=nr(0,e+=A<<18),N=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Pr(f=3+(i=o*o)+(N+=(a=w*(m-o*f-o*(t-(f-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(y=Pr(y=(m=o*f)+(w=a*f+(N-(f-3-i))*u),0))+.9617966939259756*(w-(y-m))+Jr[A])-((s=Pr(s=(p=.9617967009544373*y)+v+(l=Dr[A])+(h=d),0))-h-l-p),r[0]=s,r[1]=b,r}(nt,u,n);if(p=(t-(c=Pr(t,0)))*v[0]+t*v[1],l=c*v[0],Tr(tt,s=p+l),b=kr(tt[0]),h=kr(tt[1]),b>=1083179008){if(0!=(b-1083179008|h))return a*$r*$r;if(p+8008566259537294e-32>s-l)return a*$r*$r}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|h))return a*rt*rt;if(p<=s-l)return a*rt*rt}return s=function(r,t,n){var e,u,i,o,a,f,c,l,y,p,v;return p=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=i=nr(0,e)),r=kr(r=Z(c=1-((c=(o=.6931471824645996*(i=Pr(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((f=a-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Zr(c,l):nr(c,r)}(b,l,p),a*s}function ut(r,t){return r>=t?NaN:1/12*et(t-r,2)}function it(r,t,n){return y(r)||y(t)||y(n)||t>=n?NaN:r<t?er:r>=n?0:or((r-t)/(n-t))}function ot(r,t,n){return y(r)||y(t)||y(n)||t>=n?NaN:r<t||r>n?er:-or(n-t)}l(it,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){if(y(n))return NaN;if(n<r)return er;if(n>=t)return 0;return or((n-r)/(t-r))}})),l(ot,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){if(y(n))return NaN;if(n<r||n>t)return er;return-or(t-r)}}));var at=Math.ceil;function ft(r){return r<0?at(r):br(r)}function ct(r){var t;return y(r)||r===gr?r:r===er?0:r>709.782712893384?gr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,u,i,o;return Zr(1-(t-(e=r-t)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=ft(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function lt(r,t,n){var e;return y(r)||y(t)||y(n)||t>=n?NaN:0===r?1:(e=ct(r*n)-ct(r*t),e/=r*(n-t))}function yt(r,t,n){return y(r)||y(t)||y(n)||t>=n?NaN:r<t||r>n?0:1/(n-t)}function pt(r,t,n){return y(t)||y(n)||t>=n||y(r)||r<0||r>1?NaN:t+r*(n-t)}function vt(){var r,t;if(!(this instanceof vt))return 0===arguments.length?new vt:new vt(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!b(r=arguments[0])||y(r))throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `"+r+"`");if(!b(t)||y(t))throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `"+t+"`");if(r>=t)throw new RangeError("invalid arguments. Minimum support `a` must be less than maximum support `b`. Value: `"+r+","+t+"`")}else r=0,t=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!b(n)||y(n))throw new TypeError("invalid value. Must be a number primitive. Value: `"+n+"`");if(n>=t)throw new RangeError("invalid value. Must be smaller than `b`. Value: `"+n+"`");r=n}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!b(n)||y(n))throw new TypeError("invalid value. Must be a number primitive. Value: `"+n+"`");if(r>=n)throw new RangeError("invalid value. Must be greater than `a`. Value: `"+n+"`");t=n}}),this}l(lt,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){var e;if(y(n))return NaN;if(0===n)return 1;return e=ct(n*t)-ct(n*r),e/=n*(t-r)}})),l(yt,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){if(y(n))return NaN;if(n<r||n>t)return 0;return 1/(t-r)}})),l(pt,"factory",(function(r,t){return y(r)||y(t)||r>=t?v(NaN):function(n){if(y(n)||n<0||n>1)return NaN;return r+n*(t-r)}})),s(vt.prototype,"entropy",(function(){return ar(this.a,this.b)})),s(vt.prototype,"kurtosis",(function(){return fr(this.a,this.b)})),s(vt.prototype,"mean",(function(){return cr(this.a,this.b)})),s(vt.prototype,"median",(function(){return lr(this.a,this.b)})),s(vt.prototype,"skewness",(function(){return yr(this.a,this.b)})),s(vt.prototype,"stdev",(function(){return sr(this.a,this.b)})),s(vt.prototype,"variance",(function(){return ut(this.a,this.b)})),l(vt.prototype,"cdf",(function(r){return p(r,this.a,this.b)})),l(vt.prototype,"logcdf",(function(r){return it(r,this.a,this.b)})),l(vt.prototype,"logpdf",(function(r){return ot(r,this.a,this.b)})),l(vt.prototype,"mgf",(function(r){return lt(r,this.a,this.b)})),l(vt.prototype,"pdf",(function(r){return yt(r,this.a,this.b)})),l(vt.prototype,"quantile",(function(r){return pt(r,this.a,this.b)}));var st={};c(st,"cdf",p),c(st,"Uniform",vt),c(st,"entropy",ar),c(st,"kurtosis",fr),c(st,"logcdf",it),c(st,"logpdf",ot),c(st,"mean",cr),c(st,"median",lr),c(st,"mgf",lt),c(st,"pdf",yt),c(st,"quantile",pt),c(st,"skewness",yr),c(st,"stdev",sr),c(st,"variance",ut);export{vt as Uniform,p as cdf,st as default,ar as entropy,fr as kurtosis,it as logcdf,ot as logpdf,cr as mean,lr as median,lt as mgf,yt as pdf,pt as quantile,yr as skewness,sr as stdev,ut as variance};
//# sourceMappingURL=mod.js.map
