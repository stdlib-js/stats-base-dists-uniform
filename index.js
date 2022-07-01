// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(n){return!1}},r=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,o=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=r,l=function(n,t,r){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(n,t)||a.call(n,t)?(c=n.__proto__,n.__proto__=e,delete n[t],n[t]=r.value,n.__proto__=c):n[t]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,t,r.get),p&&o&&o.call(n,t,r.set),n},y=t()?c:l,p=y,s=function(n,t,r){p(n,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},b=y,m=function(n,t,r){b(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},h=function(n){return n!=n},v=h,N=function(n){return function(){return n}},w=N,d=h,g=function(n,t,r){return v(n)||v(t)||v(r)||t>=r?NaN:n<t?0:n>=r?1:(n-t)/(r-t)};m(g,"factory",(function(n,t){return d(n)||d(t)||n>=t?w(NaN):function(r){return d(r)?NaN:r<n?0:r>=t?1:(r-n)/(t-n)}}));var A=g,_=y,U=function(n,t,r){_(n,t,{configurable:!1,enumerable:!1,get:r})},j=function(n){return"number"==typeof n},E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),T=function(){return E&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I,S=function(n){return O.call(n)},M=Object.prototype.hasOwnProperty,V=function(n,t){return null!=n&&M.call(n,t)},F="function"==typeof Symbol?Symbol.toStringTag:"",H=V,P=F,G=I,k=S,x=function(n){var t,r,e;if(null==n)return G.call(n);r=n[P],t=H(n,P);try{n[P]=void 0}catch(t){return G.call(n)}return e=G.call(n),t?n[P]=r:delete n[P],e},L=T()?x:k,W=Number,q=W.prototype.toString,R=L,Y=W,C=function(n){try{return q.call(n),!0}catch(n){return!1}},z=T(),B=function(n){return"object"==typeof n&&(n instanceof Y||(z?C(n):"[object Number]"===R(n)))},D=j,J=B,K=m,Q=function(n){return D(n)||J(n)},X=B;K(Q,"isPrimitive",j),K(Q,"isObject",X);var Z,$=Q,nn=L,tn="function"==typeof Uint32Array,rn="function"==typeof Uint32Array?Uint32Array:null,en=function(n){return tn&&n instanceof Uint32Array||"[object Uint32Array]"===nn(n)},un=rn,on=function(){var n,t;if("function"!=typeof un)return!1;try{t=new un(t=[1,3.14,-3.14,4294967296,4294967297]),n=en(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},fn="function"==typeof Uint32Array?Uint32Array:void 0,an=function(){throw new Error("not implemented")},cn=on()?fn:an,ln=L,yn="function"==typeof Float64Array,pn="function"==typeof Float64Array?Float64Array:null,sn=function(n){return yn&&n instanceof Float64Array||"[object Float64Array]"===ln(n)},bn=pn,mn=function(){var n,t;if("function"!=typeof bn)return!1;try{t=new bn([1,3.14,-3.14,NaN]),n=sn(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},hn="function"==typeof Float64Array?Float64Array:void 0,vn=function(){throw new Error("not implemented")},Nn=mn()?hn:vn,wn=L,dn="function"==typeof Uint8Array,gn="function"==typeof Uint8Array?Uint8Array:null,An=function(n){return dn&&n instanceof Uint8Array||"[object Uint8Array]"===wn(n)},_n=gn,Un=function(){var n,t;if("function"!=typeof _n)return!1;try{t=new _n(t=[1,3.14,-3.14,256,257]),n=An(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},jn="function"==typeof Uint8Array?Uint8Array:void 0,En=function(){throw new Error("not implemented")},Tn=Un()?jn:En,In=L,On="function"==typeof Uint16Array,Sn="function"==typeof Uint16Array?Uint16Array:null,Mn=function(n){return On&&n instanceof Uint16Array||"[object Uint16Array]"===In(n)},Vn=Sn,Fn=function(){var n,t;if("function"!=typeof Vn)return!1;try{t=new Vn(t=[1,3.14,-3.14,65536,65537]),n=Mn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Hn="function"==typeof Uint16Array?Uint16Array:void 0,Pn=function(){throw new Error("not implemented")},Gn={uint16:Fn()?Hn:Pn,uint8:Tn};(Z=new Gn.uint16(1))[0]=4660;var kn,xn,Ln=52===new Gn.uint8(Z.buffer)[0],Wn=cn,qn=!0===Ln?1:0,Rn=new Nn(1),Yn=new Wn(Rn.buffer),Cn=function(n){return Rn[0]=n,Yn[qn]},zn=cn,Bn=!0===Ln?1:0,Dn=new Nn(1),Jn=new zn(Dn.buffer),Kn=function(n,t){return Dn[0]=n,Jn[Bn]=t>>>0,Dn[0]},Qn=Kn,Xn=W.NEGATIVE_INFINITY,Zn=Cn,$n=Qn,nt=h,tt=Xn,rt=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},et=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},ut=.6931471803691238,it=1.9082149292705877e-10,ot=1048575,ft=function(n){var t,r,e,u,i,o,f,a,c,l,y;return 0===n?tt:nt(n)||n<0?NaN:(u=0,(r=Zn(n))<1048576&&(u-=54,r=Zn(n*=0x40000000000000)),r>=2146435072?n+n:(u+=(r>>20)-1023|0,u+=(f=614244+(r&=ot)&1048576|0)>>20|0,o=(n=$n(n,r|1072693248^f))-1,(ot&2+r)<3?0===o?0===u?0:u*ut+u*it:(i=o*o*(.5-.3333333333333333*o),0===u?o-i:u*ut-(i-u*it-o)):(f=r-398458|0,a=440401-r|0,e=(l=(y=(c=o/(2+o))*c)*y)*rt(l),i=y*et(l)+e,(f|=a)>0?(t=.5*o*o,0===u?o-(t-c*(t+i)):u*ut-(t-(c*(t+i)+u*it)-o)):0===u?o-c*(o-i):u*ut-(c*(o-i)-u*it-o))))},at=ft,ct=function(n,t){return n>=t?NaN:at(t-n)},lt=h,yt=function(n,t){return lt(n)||lt(t)||n>=t?NaN:-1.2},pt=function(n,t){return n>=t?NaN:.5*(n+t)},st=function(n,t){return n>=t?NaN:.5*(n+t)},bt=h,mt=function(n,t){return bt(n)||bt(t)||n>=t?NaN:0},ht=Math.sqrt,vt=ht(1/12),Nt=function(n,t){return n>=t?NaN:vt*(t-n)},wt=Math.floor,dt=wt,gt=function(n){return dt(n)===n},At=gt,_t=function(n){return At(n/2)},Ut=function(n){return _t(n>0?n-1:n+1)},jt=Number.POSITIVE_INFINITY,Et=jt,Tt=Xn,It=function(n){return n===Et||n===Tt},Ot=function(n){return Math.abs(n)};!0===Ln?(kn=1,xn=0):(kn=0,xn=1);var St,Mt,Vt=cn,Ft={HIGH:kn,LOW:xn},Ht=new Nn(1),Pt=new Vt(Ht.buffer),Gt=Ft.HIGH,kt=Ft.LOW,xt=function(n,t){return Ht[0]=t,n[0]=Pt[Gt],n[1]=Pt[kt],n},Lt=function(n,t){return 1===arguments.length?xt([0,0],n):xt(n,t)},Wt=Lt,qt=cn,Rt=!0===Ln?0:1,Yt=new Nn(1),Ct=new qt(Yt.buffer),zt=function(n,t){return Yt[0]=n,Ct[Rt]=t>>>0,Yt[0]},Bt=zt,Dt=function(n){return 0|n};!0===Ln?(St=1,Mt=0):(St=0,Mt=1);var Jt=cn,Kt={HIGH:St,LOW:Mt},Qt=new Nn(1),Xt=new Jt(Qt.buffer),Zt=Kt.HIGH,$t=Kt.LOW,nr=function(n,t){return Xt[Zt]=n,Xt[$t]=t,Qt[0]},tr=Wt,rr=Cn,er=nr,ur=[0,0],ir=function(n,t){var r,e;return tr(ur,n),r=ur[0],r&=2147483647,e=rr(t),er(r|=e&=2147483648,ur[1])},or=Ut,fr=ir,ar=Xn,cr=jt,lr=Cn,yr=Ot,pr=jt,sr=Cn,br=Bt,mr=Qn,hr=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},vr=1048576,Nr=[1,1.5],wr=[0,.5849624872207642],dr=[0,1.350039202129749e-8],gr=Bt,Ar=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},_r=It,Ur=h,jr=Ot,Er=function(n,t){return Ur(t)||_r(t)?(n[0]=t,n[1]=0,n):0!==t&&jr(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},Tr=function(n,t){return 1===arguments.length?Er([0,0],n):Er(n,t)},Ir=Cn,Or=function(n){var t=Ir(n);return(t=(2146435072&t)>>>20)-1023|0},Sr=jt,Mr=Xn,Vr=h,Fr=It,Hr=ir,Pr=Tr,Gr=Or,kr=Wt,xr=nr,Lr=[0,0],Wr=[0,0],qr=function(n,t){var r,e;return 0===t||0===n||Vr(n)||Fr(n)?n:(Pr(Lr,n),t+=Lr[1],(t+=Gr(n=Lr[0]))<-1074?Hr(0,n):t>1023?n<0?Mr:Sr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,kr(Wr,n),r=Wr[0],r&=2148532223,e*xr(r|=t+1023<<20,Wr[1])))},Rr=qr,Yr=Cn,Cr=Qn,zr=Bt,Br=Dt,Dr=Rr,Jr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Kr=2147483647,Qr=1048575,Xr=1048576,Zr=h,$r=Ut,ne=It,te=gt,re=ht,ee=Ot,ue=Wt,ie=Bt,oe=Dt,fe=Xn,ae=jt,ce=function(n,t){return t===ar?cr:t===cr?0:t>0?or(t)?n:0:or(t)?fr(cr,n):cr},le=function(n,t){return(2147483647&lr(n))<=1072693247?t<0?1/0:0:t>0?1/0:0},ye=function(n,t){return-1===n?(n-n)/(n-n):1===n?1:yr(n)<1==(t===pr)?0:pr},pe=function(n,t,r){var e,u,i,o,f,a,c,l,y,p,s,b,m,h,v,N,w,d,g,A;return d=0,r<vr&&(d-=53,r=sr(t*=9007199254740992)),d+=(r>>20)-1023|0,r=1072693248|(g=1048575&r|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,r-=vr),e=524288+(r>>1|536870912),f=(w=1/((t=mr(t,r))+(c=Nr[A])))*((N=t-c)-(o=br(u=N*w,0))*(a=mr(0,e+=A<<18))-o*(t-(a-c))),v=(i=u*u)*i*hr(i),a=br(a=3+(i=o*o)+(v+=f*(o+u)),0),m=(s=-7.028461650952758e-9*(y=br(y=(N=o*a)+(w=f*a+(v-(a-3-i))*u),0))+.9617966939259756*(w-(y-N))+dr[A])-((b=br(b=(p=.9617967009544373*y)+s+(l=wr[A])+(h=d),0))-h-l-p),n[0]=b,n[1]=m,n},se=function(n,t){var r,e,u,i,o;return r=(o=1.9259629911266175e-8*(u=t-1)-u*u*Ar(u)*1.4426950408889634)-((e=gr(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=r,n},be=function(n,t,r){var e,u,i,o,f,a,c,l,y;return y=((l=n&Kr|0)>>20)-1023|0,c=0,l>1071644672&&(u=Cr(0,((c=n+(Xr>>y+1)>>>0)&~(Qr>>(y=((c&Kr)>>20)-1023|0)))>>>0),c=(c&Qr|Xr)>>20-y>>>0,n<0&&(c=-c),t-=u),f=(o=.6931471805599453*(r-((u=zr(u=r+t,0))-t))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+o)-i),e=a-(u=a*a)*Jr(u),n=Yr(a=1-(a*e/(e-2)-(f+a*f)-a)),n=Br(n),a=(n+=c<<20>>>0)>>20<=0?Dr(a,c):Cr(a,n)},me=2147483647,he=1083179008,ve=1e300,Ne=1e-300,we=[0,0],de=[0,0],ge=function n(t,r){var e,u,i,o,f,a,c,l,y,p,s,b,m,h;if(Zr(t)||Zr(r))return NaN;if(ue(we,r),f=we[0],0===we[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return re(t);if(-.5===r)return 1/re(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(ne(r))return ye(t,r)}if(ue(we,t),o=we[0],0===we[1]){if(0===o)return ce(t,r);if(1===t)return 1;if(-1===t&&$r(r))return-1;if(ne(t))return t===fe?n(-0,-r):r<0?0:ae}if(t<0&&!1===te(r))return(t-t)/(t-t);if(i=ee(t),e=o&me|0,u=f&me|0,c=f>>>31|0,a=(a=o>>>31|0)&&$r(r)?-1:1,u>1105199104){if(u>1139802112)return le(t,r);if(e<1072693247)return 1===c?a*ve*ve:a*Ne*Ne;if(e>1072693248)return 0===c?a*ve*ve:a*Ne*Ne;s=se(de,i)}else s=pe(de,i,e);if(p=(r-(l=ie(r,0)))*s[0]+r*s[1],y=l*s[0],ue(we,b=p+y),m=oe(we[0]),h=oe(we[1]),m>=he){if(0!=(m-he|h))return a*ve*ve;if(p+8008566259537294e-32>b-y)return a*ve*ve}else if((m&me)>=1083231232){if(0!=(m-3230714880|h))return a*Ne*Ne;if(p<=b-y)return a*Ne*Ne}return a*(b=be(m,y,p))},Ae=ge,_e=function(n,t){return n>=t?NaN:1/12*Ae(t-n,2)},Ue=h,je=ft,Ee=Xn,Te=N,Ie=h,Oe=ft,Se=Xn,Me=function(n,t,r){return Ue(n)||Ue(t)||Ue(r)||t>=r?NaN:n<t?Ee:n>=r?0:je((n-t)/(r-t))};m(Me,"factory",(function(n,t){return Ie(n)||Ie(t)||n>=t?Te(NaN):function(r){return Ie(r)?NaN:r<n?Se:r>=t?0:Oe((r-n)/(t-n))}}));var Ve=Me,Fe=h,He=ft,Pe=Xn,Ge=N,ke=h,xe=ft,Le=Xn,We=function(n,t,r){return Fe(n)||Fe(t)||Fe(r)||t>=r?NaN:n<t||n>r?Pe:-He(r-t)};m(We,"factory",(function(n,t){return ke(n)||ke(t)||n>=t?Ge(NaN):function(r){return ke(r)?NaN:r<n||r>t?Le:-xe(t-n)}}));var qe=We,Re=Math.ceil,Ye=wt,Ce=Re,ze=Rr,Be=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},De=h,Je=function(n){return n<0?Ce(n):Ye(n)},Ke=Xn,Qe=jt,Xe=function(n,t,r){var e,u,i;return i=(e=n-t)-(u=e*e)*Be(u),ze(1-(t-e*i/(2-i)-n),r)},Ze=1.4426950408889634,$e=1/(1<<28),nu=function(n){var t;return De(n)||n===Qe?n:n===Ke?0:n>709.782712893384?Qe:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<$e?1+n:(t=Je(n<0?Ze*n-.5:Ze*n+.5),Xe(n-.6931471803691238*t,1.9082149292705877e-10*t,t))},tu=h,ru=nu,eu=N,uu=h,iu=nu,ou=function(n,t,r){var e;return tu(n)||tu(t)||tu(r)||t>=r?NaN:0===n?1:(e=ru(n*r)-ru(n*t),e/=n*(r-t))};m(ou,"factory",(function(n,t){return uu(n)||uu(t)||n>=t?eu(NaN):function(r){var e;return uu(r)?NaN:0===r?1:(e=iu(r*t)-iu(r*n),e/=r*(t-n))}}));var fu=ou,au=h,cu=N,lu=h,yu=function(n,t,r){return au(n)||au(t)||au(r)||t>=r?NaN:n<t||n>r?0:1/(r-t)};m(yu,"factory",(function(n,t){return lu(n)||lu(t)||n>=t?cu(NaN):function(r){return lu(r)?NaN:r<n||r>t?0:1/(t-n)}}));var pu=yu,su=h,bu=N,mu=h,hu=function(n,t,r){return su(t)||su(r)||t>=r||su(n)||n<0||n>1?NaN:t+n*(r-t)};m(hu,"factory",(function(n,t){return mu(n)||mu(t)||n>=t?bu(NaN):function(r){return mu(r)||r<0||r>1?NaN:n+r*(t-n)}}));var vu=hu,Nu=y,wu=m,du=U,gu=$.isPrimitive,Au=h,_u=ct,Uu=yt,ju=pt,Eu=st,Tu=mt,Iu=Nt,Ou=_e,Su=A,Mu=Ve,Vu=qe,Fu=fu,Hu=pu,Pu=vu;function Gu(){var n,t;if(!(this instanceof Gu))return 0===arguments.length?new Gu:new Gu(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!gu(n=arguments[0])||Au(n))throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `"+n+"`");if(!gu(t)||Au(t))throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `"+t+"`");if(n>=t)throw new RangeError("invalid arguments. Minimum support `a` must be less than maximum support `b`. Value: `"+n+","+t+"`")}else n=0,t=1;return Nu(this,"a",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!gu(r)||Au(r))throw new TypeError("invalid value. Must be a number primitive. Value: `"+r+"`");if(r>=t)throw new RangeError("invalid value. Must be smaller than `b`. Value: `"+r+"`");n=r}}),Nu(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!gu(r)||Au(r))throw new TypeError("invalid value. Must be a number primitive. Value: `"+r+"`");if(n>=r)throw new RangeError("invalid value. Must be greater than `a`. Value: `"+r+"`");t=r}}),this}du(Gu.prototype,"entropy",(function(){return _u(this.a,this.b)})),du(Gu.prototype,"kurtosis",(function(){return Uu(this.a,this.b)})),du(Gu.prototype,"mean",(function(){return ju(this.a,this.b)})),du(Gu.prototype,"median",(function(){return Eu(this.a,this.b)})),du(Gu.prototype,"skewness",(function(){return Tu(this.a,this.b)})),du(Gu.prototype,"stdev",(function(){return Iu(this.a,this.b)})),du(Gu.prototype,"variance",(function(){return Ou(this.a,this.b)})),wu(Gu.prototype,"cdf",(function(n){return Su(n,this.a,this.b)})),wu(Gu.prototype,"logcdf",(function(n){return Mu(n,this.a,this.b)})),wu(Gu.prototype,"logpdf",(function(n){return Vu(n,this.a,this.b)})),wu(Gu.prototype,"mgf",(function(n){return Fu(n,this.a,this.b)})),wu(Gu.prototype,"pdf",(function(n){return Hu(n,this.a,this.b)})),wu(Gu.prototype,"quantile",(function(n){return Pu(n,this.a,this.b)}));var ku=Gu,xu={};return s(xu,"cdf",A),s(xu,"Uniform",ku),s(xu,"entropy",ct),s(xu,"kurtosis",yt),s(xu,"logcdf",Ve),s(xu,"logpdf",qe),s(xu,"mean",pt),s(xu,"median",st),s(xu,"mgf",fu),s(xu,"pdf",pu),s(xu,"quantile",vu),s(xu,"skewness",mt),s(xu,"stdev",Nt),s(xu,"variance",_e),xu},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).uniform=t();
//# sourceMappingURL=index.js.map
