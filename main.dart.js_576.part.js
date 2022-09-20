self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bc7(d){return d.VertexMode},
bJ7(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
bsM(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.i(B.cM('"positions" and "colors" lengths must match.',v))
u=$.br2()[d.a]
x=A.bJ7(e)
w=B.boi(f)
u=new A.Iw(u,x,v,w,v)
u.Am(v,y.U)
return u},
bAu(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bId(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
Iw:function Iw(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8s:function a8s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayD(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.a0(0,w.Ae(B.L(x.EB(w)/t,0,1)))},
bxL(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.EB(n),j=n.EB(n),i=p.EB(l),h=l.EB(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.ayD(d,q,o),A.ayD(d,o,x),A.ayD(d,x,m),A.ayD(d,m,q)]
v=B.bD("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bU()},
bAV(){var x=new B.bx(new Float64Array(16))
x.u5()
return new A.a8Z(x,$.ac())},
bmH(d,e){var x,w,v,u,t,s,r=new B.bx(new Float64Array(16))
r.r1(d)
r.yd(r)
x=e.a
w=e.b
v=new B.cv(new Float64Array(3))
v.tU(x,w,0)
v=r.Aa(v)
u=e.c
t=new B.cv(new Float64Array(3))
t.tU(u,w,0)
t=r.Aa(t)
w=e.d
s=new B.cv(new Float64Array(3))
s.tU(u,w,0)
s=r.Aa(s)
u=new B.cv(new Float64Array(3))
u.tU(x,w,0)
u=r.Aa(u)
x=new B.cv(new Float64Array(3))
x.r1(v)
w=new B.cv(new Float64Array(3))
w.r1(t)
v=new B.cv(new Float64Array(3))
v.r1(s)
t=new B.cv(new Float64Array(3))
t.r1(u)
return new A.a62(x,w,v,t)},
bm4(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.o,w=0;w<4;++w){v=r[w]
u=A.bxL(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.bf1(x)},
bf1(d){return new B.j(B.am_(C.d.ov(d.a,9)),B.am_(C.d.ov(d.b,9)))},
bEe(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a4:C.x},
KB:function KB(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
Rz:function Rz(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.oN$=f
_.a2$=g
_.a=null
_.b=h
_.c=null},
aXv:function aXv(){},
adU:function adU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8Z:function a8Z(d,e){var _=this
_.a=d
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
FI:function FI(d,e){this.a=d
this.b=e},
W4:function W4(){},
bAW(){return new A.tP(null)},
tP:function tP(d){this.a=d},
UL:function UL(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.oN$=g
_.a2$=h
_.a=null
_.b=i
_.c=null},
b5h:function b5h(d,e){this.a=d
this.b=e},
b5i:function b5i(d){this.a=d},
b5o:function b5o(d){this.a=d},
b5n:function b5n(d){this.a=d},
b5m:function b5m(d){this.a=d},
b5l:function b5l(d){this.a=d},
b5k:function b5k(d,e){this.a=d
this.b=e},
b5j:function b5j(d,e,f){this.a=d
this.b=e
this.c=f},
aad:function aad(d,e){this.b=d
this.a=e},
aOv:function aOv(d,e){this.a=d
this.b=e},
WL:function WL(){},
bbY(d,e,f,g,h){var x=new A.XS(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.anb(d,e,f,g,h)
return x},
XS:function XS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anH:function anH(d){this.a=d},
anG:function anG(d){this.a=d},
anF:function anF(d){this.a=d},
aOu:function aOu(d){this.a=d
this.c=this.b=null},
b0u:function b0u(d,e){this.a=d
this.b=e},
hi:function hi(d,e,f){this.a=d
this.b=e
this.c=f},
aae:function aae(){},
YY:function YY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ap3:function ap3(d){this.a=d},
ap2:function ap2(d,e){this.a=d
this.b=e},
zG:function zG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aQh:function aQh(d){this.a=d},
a14:function a14(d,e,f){this.c=d
this.d=e
this.a=f},
a62:function a62(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBb(d,e,f){var x,w
if($.aQ())return A.bsM(d,e,f,null,null)
x=A.bAu(f)
w=A.bId(e)
if($.Hj==null)$.Hj=new B.ajS()
return new A.a8s(d,w,x,null)}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[126]
E=c[115]
J=c[1]
F=c[98]
A.Iw.prototype={
yY(){var x=this
return B.aa($.cJ.rY(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
AW(){return this.yY()},
x7(d){var x=this.a
if(x!=null)x.delete()}}
A.a8s.prototype={}
A.KB.prototype={
F(){var x=null,w=y.z
return new A.Rz(new B.ah(x,w),new B.ah(x,w),x,x,C.j)}}
A.Rz.prototype={
gMf(){var x=$.R.G$.z.i(0,this.e).gI()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.e.GL(new B.x(0,0,0+x.a,0+x.b))},
gO2(){var x=$.R.G$.z.i(0,this.f).gI()
x.toString
x=y.x.a(x).k3
return new B.x(0,0,0+x.a,0+x.b)},
Nb(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.o)){x=new B.bx(new Float64Array(16))
x.r1(a0)
return x}d.a.toString
w=new B.bx(new Float64Array(16))
w.r1(a0)
w.pc(0,a1.a,a1.b)
v=A.bmH(w,d.gO2())
x=d.gMf()
if(x.gacS(x))return w
x=d.gMf()
u=d.as
t=new B.bx(new Float64Array(16))
t.u5()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.pc(0,q/2,o/2)
t.Qs(u)
t.pc(0,-q/2,-o/2)
u=new B.cv(new Float64Array(3))
u.tU(r,x,0)
u=t.Aa(u)
q=new B.cv(new Float64Array(3))
q.tU(s,x,0)
q=t.Aa(q)
x=new B.cv(new Float64Array(3))
x.tU(s,p,0)
x=t.Aa(x)
s=new B.cv(new Float64Array(3))
s.tU(r,p,0)
s=t.Aa(s)
r=new Float64Array(3)
new B.cv(r).r1(u)
u=new Float64Array(3)
new B.cv(u).r1(q)
q=new Float64Array(3)
new B.cv(q).r1(x)
x=new Float64Array(3)
new B.cv(x).r1(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cv(new Float64Array(3))
x.tU(m,l,0)
u=new B.cv(new Float64Array(3))
u.tU(k,l,0)
s=new B.cv(new Float64Array(3))
s.tU(k,j,0)
r=new B.cv(new Float64Array(3))
r.tU(m,j,0)
q=new B.cv(new Float64Array(3))
q.r1(x)
x=new B.cv(new Float64Array(3))
x.r1(u)
u=new B.cv(new Float64Array(3))
u.r1(s)
s=new B.cv(new Float64Array(3))
s.r1(r)
i=new A.a62(q,x,u,s)
h=A.bm4(i,v)
if(h.m(0,C.o))return w
x=w.R1().a
u=x[0]
x=x[1]
g=a0.Lp()
u-=h.a*g
x-=h.b*g
f=new B.bx(new Float64Array(16))
f.r1(a0)
s=new B.cv(new Float64Array(3))
s.tU(u,x,0)
f.a0c(s)
e=A.bm4(i,A.bmH(f,d.gO2()))
if(e.m(0,C.o))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bx(new Float64Array(16))
x.r1(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bx(new Float64Array(16))
s.r1(a0)
r=new B.cv(new Float64Array(3))
r.tU(u,x,0)
s.a0c(r)
return s},
a5J(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=r.d.a.Lp()
x=r.gO2()
v=r.gMf()
u=r.gO2()
t=r.gMf()
s=B.L(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bx(new Float64Array(16))
x.r1(d)
x.rB(0,s/w)
return x},
aA9(d,e,f){var x,w,v,u
if(e===0){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=this.d.A8(f)
x=new B.bx(new Float64Array(16))
x.r1(d)
v=w.a
u=w.b
x.pc(0,v,u)
x.Qs(-e)
x.pc(0,-v,-u)
return x},
Ty(d){switch(d){case D.az0:return!1
case D.uV:this.a.toString
return!0
case D.mD:case null:this.a.toString
return!0}},
a4a(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uV
else return D.mD},
azk(d){var x,w,v=this
v.a.ax.$1(d)
x=v.w
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.tQ(0)
x=v.w
x.sl(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gNm())
v.r=null}v.x=v.at=null
v.z=v.d.a.Lp()
v.y=v.d.A8(d.b)
v.Q=v.as},
aBo(d){var x,w,v,u,t,s,r=this,q=r.d.a.Lp(),p=d.c,o=r.d.A8(p),n=r.at
if(n===D.mD)n=r.at=r.a4a(d)
else if(n==null){n=r.a4a(d)
r.at=n}if(!r.Ty(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a5J(x.a,n*d.d/q))
w=r.d.A8(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.Nb(x,w.aq(0,v)))
u=r.d.A8(p)
p=r.y
p.toString
if(!A.bf1(p).m(0,A.bf1(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.aA9(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bEe(n,o)}n=r.y
n.toString
s=o.aq(0,n)
n=r.d
n.sl(0,r.Nb(n.a,s))
r.y=r.d.A8(p)
break}r.a.toString},
aBk(d){var x,w,v,u,t,s,r,q,p=this
p.a.toString
p.y=p.Q=p.z=null
x=p.r
if(x!=null)x.a.B(0,p.gNm())
x=p.w
x===$&&B.c()
x.sl(0,x.a)
if(!p.Ty(p.at)){p.x=null
return}if(p.at!==D.mD||d.a.a.gu0()<50){p.x=null
return}x=p.d.a.R1().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gu0())
r=Math.log(135e-9)
u=new B.BM(0.0000135,u,w,v.a,C.cB).gJS()
v=new B.BM(0.0000135,t,x,v.b,C.cB).gJS()
t=y.L
q=B.aM(C.e2,p.w,null)
p.r=new B.F(q,new B.a8(new B.j(w,x),new B.j(u,v),t),t.h("F<a_.T>"))
p.w.e=B.dt(0,0,0,C.d.dG(s/r*1000),0,0)
q.a6(0,p.gNm())
p.w.oO(0)},
azm(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gHA().b===0)return
x=r.a.ax
w=d.grf(d)
v=d.gvK()
x.$1(new B.Dv(w,v,0))
x=d.gHA()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.Ty(D.uV)){r.a.toString
return}x=r.d
x.toString
t=x.A8(d.gvK())
x=r.d
x.sl(0,r.a5J(x.a,u))
x=r.d
x.toString
s=x.A8(d.gvK())
x=r.d
x.sl(0,r.Nb(x.a,s.aq(0,t)))
r.a.toString}},
aAM(){var x,w,v,u,t=this,s=t.w
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.x=null
s=t.r
if(s!=null)s.a.B(0,t.gNm())
t.r=null
s=t.w
s.sl(0,s.a)
return}s=t.d.a.R1().a
x=s[0]
s=s[1]
w=t.d.A8(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.A8(v.M(0,x.gl(x))).aq(0,w)
x=t.d
x.sl(0,t.Nb(x.a,u))},
aBC(){this.D(new A.aXv())},
a3(){var x,w=this,v=null
w.ac()
x=w.a.ch
w.d=x
x.a6(0,w.gUD())
w.w=B.aU(C.u,v,v,v,1,v,w)},
ab(d){var x,w,v=this
v.ao(d)
x=v.a
if(x.ch!==d.ch){x=v.gUD()
v.d.B(0,x)
w=v.a.ch
v.d=w
w.a6(0,x)}},
k(){var x=this,w=x.w
w===$&&B.c()
w.k()
x.d.B(0,x.gUD())
x.a.toString
x.am7()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adU(t.r,v.e,C.q,!0,x,u)
return B.L8(C.eh,B.cz(C.aN,w,C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaBj(),v.gazj(),v.gaBn(),u,u,u,u,u,u,u),v.f,u,u,u,v.gazl(),u)}}
A.adU.prototype={
n(d){var x=this,w=B.mb(null,new B.fU(x.c,x.d),x.r,!0)
return B.j1(w,x.e,null)}}
A.a8Z.prototype={
A8(d){var x=this.a,w=new B.bx(new Float64Array(16))
if(w.yd(x)===0)B.Q(B.i6(x,"other","Matrix cannot be inverted"))
x=new B.cv(new Float64Array(3))
x.tU(d.a,d.b,0)
x=w.Aa(x).a
return new B.j(x[0],x[1])}}
A.FI.prototype={
j(d){return"_GestureType."+this.b}}
A.W4.prototype={
pl(){this.qj()
this.pM()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.tP.prototype={
F(){var x=null
return new A.UL(new B.ah(x,y.z),A.bbY(x,8,1,16,x),A.bAV(),x,x,C.j)}}
A.UL.prototype={
aAN(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sl(0,v.M(0,w.gl(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.gUy())
x.r=null
w=x.w
w.sl(0,w.a)}},
aBm(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ak){v.tQ(0)
v=w.r
if(v!=null)v.a.B(0,w.gUy())
w.r=null
v=w.w
v.sl(0,v.a)}},
aBz(d){var x=this,w=x.f.A8(d.a.aq(0,B.dD(y.x.a($.R.G$.z.i(0,x.d).gI()).rU(0,null),C.o)))
x.D(new A.b5h(x,x.e.aPU(w)))},
a3(){var x=null
this.ac()
this.w=B.aU(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.t(d)
return B.bV(B.cx(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,x,x,B.r(B.u(d,C.h,y.s).gbd(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ay.b,B.U(x,new B.d1(new A.b5i(this),x),C.e,D.wy,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaQy(),this.gaLf()],y.p),x)},
gaQy(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,D.a53,x,x,new A.b5o(this),C.J,x,"Reset")},
gaLf(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,E.oK,x,x,new A.b5m(this),C.J,x,"Edit")},
k(){var x=this.w
x===$&&B.c()
x.k()
this.an2()}}
A.aad.prototype={
aC(d,e){this.b.ad(0,new A.aOv(this,d))},
uD(d){return d.b!==this.b}}
A.WL.prototype={
pl(){this.qj()
this.pM()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.XS.prototype={
anb(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a5(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a5(s.f,d)
else{t=s.a4f(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a4f(t)}}},
gow(d){return new A.aOu(this.f)},
a4j(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b0u(w,x)},
a4f(d){var x,w,v,u=this
if(d==null)return new A.hi(-u.a,0,D.i_)
x=d.a
w=u.a4j(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hi(x,u.a4j(x).a,D.i_)}return new A.hi(x,v+1,D.i_)},
guE(d){var x=this.b,w=this.a
return new B.K((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aPU(d){var x=this,w=x.guE(x),v=d.b-x.guE(x).b/2,u=x.b,t=new A.hi(C.d.dG((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.dG(0.6666666666666666*v/u),D.i_)
w=D.Pz.gab2().a
v=t.gab2().a
if(C.d.rt(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.GF(x.f,new A.anH(t))},
afM(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.aj(r).h("aC<1,j>"),p=B.aA(new B.aC(r,new A.anG(new B.t2(w*v*u+t/2*v*s+x.guE(x).a/2,1.5*v*s+x.guE(x).b/2,y.O)),q),!0,q.h("bO.E"))
return A.bBb(C.NV,p,B.bP(p.length,e,!1,y.G))},
aKC(d){var x=this
if(J.l(x.e,d))return x
return A.bbY(x.f,x.a,x.c,x.b,d)},
aKB(d,e){var x,w,v=this,u=new A.hi(d.a,d.b,e),t=v.f,s=C.b.PC(t,new A.anF(d))
if(J.l(v.rp(0,s),d)&&d.c.m(0,e))return v
x=B.hp(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bbY(x,v.a,v.c,v.b,w)},
$iG:1}
A.aOu.prototype={
C(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gV(d){return this.c}}
A.b0u.prototype={}
A.hi.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.al(e)!==B.Y(this))return!1
return e instanceof A.hi&&e.a===this.a&&e.b===this.b},
gL(d){return B.ad(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gab2(){var x=this.a,w=this.b,v=new B.cv(new Float64Array(3))
v.tU(x,w,-x-w)
return v}}
A.aae.prototype={}
A.YY.prototype={
n(d){var x=this.c,w=B.h(x).h("lB<1,zG>")
return B.aw(B.aA(new B.lB(x,new A.ap3(this),w),!0,w.h("G.E")),C.l,null,C.a0,C.i,null)}}
A.zG.prototype={
n(d){var x=null,w=!this.d?x:D.a4j
return B.U(x,B.bjA(!1,w,C.e,C.Qo,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aQh(this),C.dN,x,x),C.e,x,x,x,x,60,x,x,D.a1A,x,x,60)}}
A.a14.prototype={
n(d){var x=null,w=B.dU([C.n,C.k_,C.nz,C.wF,D.wy],y.G),v=this.c
return B.a9(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.mo,C.ud,x,x),new A.YY(w,v.c,this.d,x)],y.p),C.aH,x,C.k,C.i,C.m)}}
A.a62.prototype={}
var z=a.updateTypes(["~()","~(Dv)","M(hi)","~(No)","~(Du)","~(kH)","~(jp)","~(hi?)","zG(k)"])
A.aXv.prototype={
$0(){},
$S:0}
A.b5h.prototype={
$0(){var x=this.a
x.e=x.e.aKC(this.b)},
$S:0}
A.b5i.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bx(new Float64Array(16))
x.u5()
w=r.e
w=w.guE(w)
v=r.e
x.pc(0,t/2-w.a/2,s/2-v.guE(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.guE(x)
return B.j1(B.dE(B.cz(C.aN,new A.KB(new B.Z(t,s,t,s),B.bdO(B.hj(u,u,u,new A.aad(r.e,u),x)),0.01,r.gaBl(),r.f,r.d),C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaBy(),u,u,u),C.ag,u,u,u,u),C.q,u)},
$S:772}
A.b5o.prototype={
$0(){var x=this.a
x.D(new A.b5n(x))},
$S:0}
A.b5n.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sl(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.F(w,new B.oP(u,x),y.d.h("F<a_.T>"))
w.e=C.i6
w.a6(0,v.gUy())
v.w.oO(0)},
$S:0}
A.b5m.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bfw(new A.b5l(w),x,y.l)},
$S:0}
A.b5l.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.U(x,new A.a14(v,new A.b5k(w,d),x),C.e,x,x,x,x,150,x,x,C.i8,x,x,1/0)},
$S:773}
A.b5k.prototype={
$1(d){var x=this.a
x.D(new A.b5j(x,d,this.b))},
$S:774}
A.b5j.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aKB(v,this.b)
B.bA(this.c,!1).tI(null)},
$S:0}
A.aOv.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.afM(d,B.W(C.d.dG(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aQ()?B.aS():new B.aP(new B.aR())
this.b.Bz(v,C.Px,x)},
$S:z+7}
A.anH.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.anG.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:254}
A.anF.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.ap3.prototype={
$1(d){var x=this.a
return new A.zG(d,d.m(0,x.d),new A.ap2(x,d),null)},
$S:z+8}
A.ap2.prototype={
$0(){this.a.e.$1(this.b)},
$S:14}
A.aQh.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.W4.prototype
x.am7=x.k
x=A.WL.prototype
x.an2=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Rz.prototype,"gazj","azk",1)
x(v,"gaBn","aBo",3)
x(v,"gaBj","aBk",4)
x(v,"gazl","azm",5)
w(v,"gNm","aAM",0)
w(v,"gUD","aBC",0)
w(v=A.UL.prototype,"gUy","aAN",0)
x(v,"gaBl","aBm",1)
x(v,"gaBy","aBz",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Iw,B.hK)
u(B.a2,[A.a8s,A.aae,A.b0u,A.hi,A.a62])
u(B.y,[A.KB,A.tP])
u(B.D,[A.W4,A.WL])
v(A.Rz,A.W4)
u(B.hB,[A.aXv,A.b5h,A.b5o,A.b5n,A.b5m,A.b5j,A.ap2,A.aQh])
u(B.q,[A.adU,A.YY,A.zG,A.a14])
v(A.a8Z,B.c0)
v(A.FI,B.pR)
v(A.UL,A.WL)
v(A.b5i,B.ia)
u(B.d4,[A.b5l,A.b5k,A.aOv,A.anH,A.anG,A.anF,A.ap3])
v(A.aad,B.of)
v(A.XS,A.aae)
v(A.aOu,B.KG)
x(A.W4,B.cu)
x(A.WL,B.cu)
w(A.aae,B.jf)})()
B.b0(b.typeUniverse,JSON.parse('{"Iw":{"hK":["tC"],"fu":["tC"]},"KB":{"y":[],"d":[]},"Rz":{"D":["KB"]},"adU":{"q":[],"d":[]},"a8Z":{"c0":["bx"],"ae":[]},"FI":{"V":[]},"tP":{"y":[],"d":[]},"UL":{"D":["tP"]},"aad":{"ae":[]},"XS":{"jf":["hi?"],"G":["hi?"],"jf.E":"hi?"},"zG":{"q":[],"d":[]},"YY":{"q":[],"d":[]},"a14":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a5
return{X:x("hi"),G:x("k"),s:x("B"),h:x("v<hi>"),g:x("v<j>"),p:x("v<d>"),z:x("ah<D<y>>"),d:x("oP"),O:x("t2<z>"),C:x("t5"),x:x("A"),U:x("tC"),L:x("a8<j>"),l:x("d")}})();(function constants(){D.i_=new B.k(4291677645)
D.Pz=new A.hi(0,0,D.i_)
D.wy=new B.k(4280756007)
D.a1A=new B.Z(2,0,2,0)
D.a2Z=new B.aG(57686,"MaterialIcons",null,!1)
D.a4j=new B.bF(D.a2Z,null,C.n,null,null)
D.a3E=new B.aG(58659,"MaterialIcons",null,!1)
D.a53=new B.bF(D.a3E,null,null,null,null)
D.mD=new A.FI(0,"pan")
D.uV=new A.FI(1,"scale")
D.az0=new A.FI(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bO0","br2",()=>B.b([B.b3(A.bc7(B.b2()),"Triangles"),B.b3(A.bc7(B.b2()),"TrianglesStrip"),B.b3(A.bc7(B.b2()),"TriangleFan")],B.a5("v<m>")))})()}
$__dart_deferred_initializers__["MxN7iay2zNWrSkqbr/I04DW2Gfo="] = $__dart_deferred_initializers__.current
