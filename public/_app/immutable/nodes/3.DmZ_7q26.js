import{s as O,n as q,o as U}from"../chunks/scheduler.CtbWrGNo.js";import{S as V,i as z,e as m,s as _,r as B,c as v,k as I,f as b,g as C,d as r,u as F,t as D,a as E,b as P,l as G,h as u,n as J,j as H}from"../chunks/index.Da1oU7ce.js";import{g as K}from"../chunks/entry.BFXjCbNG.js";function N(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function S(s,n,i){const o=s.slice();return o[3]=n[i],o}function A(s){let n,i,o=s[3].title+"",c,f,t,e=s[3].content.substring(0,100)+"",a,l,g,d,T="Details",x,$,j;function M(){return s[2](s[3])}return{c(){n=m("div"),i=m("h2"),c=D(o),f=_(),t=m("p"),a=D(e),l=D("..."),g=_(),d=m("button"),d.textContent=T,x=_(),this.h()},l(p){n=v(p,"DIV",{class:!0});var h=E(n);i=v(h,"H2",{});var k=E(i);c=P(k,o),k.forEach(r),f=b(h),t=v(h,"P",{});var w=E(t);a=P(w,e),l=P(w,"..."),w.forEach(r),g=b(h),d=v(h,"BUTTON",{"data-svelte-h":!0}),I(d)!=="svelte-1lfq49x"&&(d.textContent=T),x=b(h),h.forEach(r),this.h()},h(){G(n,"class","blog-post svelte-t666uu")},m(p,h){C(p,n,h),u(n,i),u(i,c),u(n,f),u(n,t),u(t,a),u(t,l),u(n,g),u(n,d),u(n,x),$||(j=J(d,"click",M),$=!0)},p(p,h){s=p,h&1&&o!==(o=s[3].title+"")&&H(c,o),h&1&&e!==(e=s[3].content.substring(0,100)+"")&&H(a,e)},d(p){p&&r(n),$=!1,j()}}}function L(s){let n,i="Blog Posts",o,c,f=N(s[0]),t=[];for(let e=0;e<f.length;e+=1)t[e]=A(S(s,f,e));return{c(){n=m("h1"),n.textContent=i,o=_();for(let e=0;e<t.length;e+=1)t[e].c();c=B()},l(e){n=v(e,"H1",{"data-svelte-h":!0}),I(n)!=="svelte-uw87a3"&&(n.textContent=i),o=b(e);for(let a=0;a<t.length;a+=1)t[a].l(e);c=B()},m(e,a){C(e,n,a),C(e,o,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,a);C(e,c,a)},p(e,[a]){if(a&3){f=N(e[0]);let l;for(l=0;l<f.length;l+=1){const g=S(e,f,l);t[l]?t[l].p(g,a):(t[l]=A(g),t[l].c(),t[l].m(c.parentNode,c))}for(;l<t.length;l+=1)t[l].d(1);t.length=f.length}},i:q,o:q,d(e){e&&(r(n),r(o),r(c)),F(t,e)}}}function Q(s,n,i){let o=[];U(async()=>{const t=await fetch("/api/blogs");i(0,o=await t.json())});function c(t){K(`/blog/${t}`)}return[o,c,t=>c(t.slug)]}class Y extends V{constructor(n){super(),z(this,n,Q,L,O,{})}}export{Y as component};
