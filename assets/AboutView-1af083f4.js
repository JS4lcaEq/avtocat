import{_ as M,r as n,c as F,o as T,a as m,b as w,d as l,e as R,t as s,F as P,f as A,n as E,g as j,u as q,h as H,i as K,j as J,p as Q,k as U}from"./index-f75f057d.js";const X={class:"gallery"},Y={class:"debug"},Z={__name:"Gallery2",props:{imagesList:{type:Array,required:!0}},setup(_){const C=_,f=n(null),u=n(0),k=n(null),y=n(null),L=n(0),g=n(null),x=n(0),d=n(!1),i=n(0),p=n([]);let h=0;function V(t,a){let e=0;const o=[];return t.forEach((G,c)=>{const O=e;e+=G.w;const $=e;o[c]={l:O,r:$,w:G.w,id:G.id}}),o}function S(t,a,e){return t.find(o=>o.l<=e+a&&o.r>e+a)}function W(t,a){return t.find(e=>e.l<a&&e.r>=a)}const r=n(C.imagesList);function I(t,a){const e=[];return t.forEach((o,G)=>{let c=G+a;c>t.length-1&&(c=0),c<0&&(c=t.length-1),e[c]=o}),e}const B=F(()=>{let t=0;return r.value.forEach(a=>{t+=a.w}),t});function z(){d.value||(b(),d.value=!0,i.value=x.value,h=1)}function D(){d.value||(b(),d.value=!0,i.value=L.value,h=-1)}function N(){if(d.value){if(d.value=!1,h==-1){const t=y.value.id;r.value=I(r.value,h),b();const a=p.value.find(e=>e.id==t);i.value=a.r-u.value}if(h==1&&g.value){const t=g.value.id;r.value=I(r.value,h),b();const a=p.value.find(e=>e.id==t);i.value=a.l}}}T(()=>{i.value=r.value[0].w+r.value[1].w,window.addEventListener("resize",t=>{const a=f.value.offsetWidth;u.value=a}),u.value=f.value.offsetWidth});function b(){p.value=V(r.value,i.value),y.value=S(p.value,i.value,u.value),L.value=y.value.r-u.value,g.value=W(p.value,i.value),g.value&&(x.value=g.value.l)}return(t,a)=>(m(),w("div",X,[l("div",Y,[R(" currentMargin = "+s(i.value)+" isAnimation = "+s(d.value)+" windowWidth="+s(u.value)+" ",1),l("button",{onClick:b},"Get width"),(m(!0),w(P,null,A(p.value,(e,o)=>(m(),w("p",{key:o},s(o)+s(e),1))),128)),l("p",null," rightElement = "+s(y.value)+" rightTargetMargin= "+s(L.value),1),l("p",null," leftElement = "+s(g.value)+" leftTargetMargin= "+s(x.value),1)]),l("div",{class:"button",onClick:z},"‹"),l("div",{class:"window",ref_key:"windowelement",ref:f},[l("div",{class:"line",style:E({width:B.value+"px"})},[l("div",{class:j(["items-list",{"animation-on":d.value}]),style:E({marginLeft:"-"+i.value+"px"}),onTransitionend:N,ref_key:"itemsList",ref:k},[(m(!0),w(P,null,A(r.value,e=>(m(),w("div",{key:e.id,style:E({width:e.w+"px",backgroundImage:"url("+e.url+")"})},s(e.id)+" "+s(e.w),5))),128))],38)],4)],512),l("div",{class:"button",onClick:D},"›")]))}},ee=M(Z,[["__scopeId","data-v-2cbe405a"]]);const v=_=>(Q("data-v-e2dfedaf"),_=_(),U(),_),te={class:"about"},le=v(()=>l("h1",null,"Debug page",-1)),ae=v(()=>l("h2",null,"Dottet",-1)),se=v(()=>l("div",{class:"dotted-box"},"ABCabcАБВабв1234567890",-1)),ne=v(()=>l("div",{class:"dotted-box",style:{color:"#bbb"}},"......................",-1)),ie=v(()=>l("h2",null,"Gallery",-1)),oe=v(()=>l("h2",null,"Cars list from API",-1)),re=v(()=>l("h2",null,"Cars options list from API",-1)),ue={__name:"AboutView",setup(_){n([]);const C=q(),f=H();T(()=>{C.load(),f.load()});const u=[{id:1,url:"./assets/img/dealer-gallery-1.JPG",w:560},{id:5,url:"./assets/img/dealer-gallery-5.JPG",w:400},{id:2,url:"./assets/img/dealer-gallery-2.JPG",w:560},{id:7,url:"./assets/img/dealer-gallery-7.JPG",w:185},{id:3,url:"./assets/img/dealer-gallery-3.JPG",w:560},{id:6,url:"./assets/img/dealer-gallery-6.JPG",w:385},{id:8,url:"./assets/img/dealer-gallery-8.JPG",w:320},{id:4,url:"./assets/img/dealer-gallery-4.JPG",w:200},{id:9,url:"./assets/img/dealer-gallery-9.JPG",w:320}];return(k,y)=>(m(),w("div",te,[le,ae,se,ne,ie,K(ee,{"images-list":u}),oe,l("p",null,"Cars.date = "+s(J(C).date),1),re,l("p",null,"CarsOptions.date = "+s(J(f).date),1)]))}},ce=M(ue,[["__scopeId","data-v-e2dfedaf"]]);export{ce as default};
