import{S as e,i as t,s,e as a,n,x as r,a as o,b as l,d as c,o as f,y as h,f as i,g as u,q as d,z as m,A as q,w as p,E as v}from"./client.141aceb2.js";function g(e,t,s){const a=e.slice();return a[1]=t[s],a}function A(e){let t,s,q,p,v,g,A,E,y,S,F,Q,w,T=e[1].metadata.question+"",x=e[1].answer+"";return{c(){t=a("article"),s=a("h2"),q=a("span"),v=n(),g=a("a"),A=r(" "),S=n(),F=r(T),Q=n(),w=a("p"),this.h()},l(e){t=o(e,"ARTICLE",{class:!0});var a=l(t);s=o(a,"H2",{class:!0});var n=l(s);q=o(n,"SPAN",{id:!0,class:!0}),l(q).forEach(c),v=f(n),g=o(n,"A",{class:!0,rel:!0,href:!0,title:!0});var r=l(g);A=h(r," "),r.forEach(c),S=f(n),F=h(n,T),n.forEach(c),Q=f(a),w=o(a,"P",{class:!0}),l(w).forEach(c),a.forEach(c),this.h()},h(){i(q,"id",p=e[1].fragment),i(q,"class","offset-anchor"),i(g,"class","anchor"),i(g,"rel","prefetch"),i(g,"href",E="faq#"+e[1].fragment),i(g,"title",y=e[1].question),i(s,"class","svelte-1ty6sog"),i(w,"class","svelte-1ty6sog"),i(t,"class","faq svelte-1ty6sog")},m(e,a){u(e,t,a),d(t,s),d(s,q),d(s,v),d(s,g),d(g,A),d(s,S),d(s,F),d(t,Q),d(t,w),w.innerHTML=x},p(e,t){1&t&&p!==(p=e[1].fragment)&&i(q,"id",p),1&t&&E!==(E="faq#"+e[1].fragment)&&i(g,"href",E),1&t&&y!==(y=e[1].question)&&i(g,"title",y),1&t&&T!==(T=e[1].metadata.question+"")&&m(F,T),1&t&&x!==(x=e[1].answer+"")&&(w.innerHTML=x)},d(e){e&&c(t)}}}function E(e){let t,s,m,E,y,F,Q,w,T,x,M,k,H,b,j=e[0],L=[];for(let t=0;t<j.length;t+=1)L[t]=A(g(e,j,t));return{c(){t=a("meta"),s=a("meta"),m=a("meta"),E=n(),y=a("div"),F=a("h1"),Q=r("Frequently Asked Questions"),w=n();for(let e=0;e<L.length;e+=1)L[e].c();T=n(),x=a("p"),M=r("See also the "),k=a("a"),H=r("Svelte FAQ"),b=r(" for questions relating to Svelte directly."),this.h()},l(e){const a=q('[data-svelte="svelte-192hl6q"]',document.head);t=o(a,"META",{name:!0,content:!0}),s=o(a,"META",{name:!0,content:!0}),m=o(a,"META",{name:!0,content:!0}),a.forEach(c),E=f(e),y=o(e,"DIV",{class:!0});var n=l(y);F=o(n,"H1",{});var r=l(F);Q=h(r,"Frequently Asked Questions"),r.forEach(c),w=f(n);for(let e=0;e<L.length;e+=1)L[e].l(n);T=f(n),x=o(n,"P",{});var i=l(x);M=h(i,"See also the "),k=o(i,"A",{href:!0,rel:!0});var u=l(k);H=h(u,"Svelte FAQ"),u.forEach(c),b=h(i," for questions relating to Svelte directly."),i.forEach(c),n.forEach(c),this.h()},h(){document.title="Frequently Asked Questions Sapper",i(t,"name","twitter:title"),i(t,"content","Sapper FAQ"),i(s,"name","twitter:description"),i(s,"content",S),i(m,"name","Description"),i(m,"content",S),i(k,"href","https://svelte.dev/faq"),i(k,"rel","external"),i(y,"class","faqs stretch svelte-1ty6sog")},m(e,a){d(document.head,t),d(document.head,s),d(document.head,m),u(e,E,a),u(e,y,a),d(y,F),d(F,Q),d(y,w);for(let e=0;e<L.length;e+=1)L[e].m(y,null);d(y,T),d(y,x),d(x,M),d(x,k),d(k,H),d(x,b)},p(e,[t]){if(1&t){let s;for(j=e[0],s=0;s<j.length;s+=1){const a=g(e,j,s);L[s]?L[s].p(a,t):(L[s]=A(a),L[s].c(),L[s].m(y,T))}for(;s<L.length;s+=1)L[s].d(1);L.length=j.length}},i:p,o:p,d(e){c(t),c(s),c(m),e&&c(E),e&&c(y),v(L,e)}}}async function y(){return{faqs:await this.fetch("faq.json").then(e=>e.json())}}const S="Frequently Asked Questions about Sapper";function F(e,t,s){let{faqs:a}=t;return e.$$set=e=>{"faqs"in e&&s(0,a=e.faqs)},[a]}export default class extends e{constructor(e){super(),t(this,e,F,E,s,{faqs:0})}}export{y as preload};
