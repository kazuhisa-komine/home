(()=>{"use strict";var e,t,r,n,o,s={951:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(342),o=r(441),s=r(846);r(52),n.os.registerPlugin(o.u);const e=()=>{const e=new s.Ay(".js-works-splide",{type:"fade",arrows:!1,autoplay:!1,rewind:!0,speed:3e3,paginationDirection:"ttb"});new IntersectionObserver(((t,r)=>{t.forEach((t=>{t.isIntersecting&&e.Components.Autoplay.play()}))}),{root:null,rootMargin:"-50% 0px -50% 0px",threshold:0}).observe(document.querySelector(".js-works-splide")),e.mount()},a=()=>{const e=new s.Ay(".js-csr-splide",{type:"fade",arrows:!1,autoplay:!1,rewind:!0,speed:3e3,paginationDirection:"ttb"});new IntersectionObserver(((t,r)=>{t.forEach((t=>{t.isIntersecting&&e.Components.Autoplay.play()}))}),{root:null,rootMargin:"-50% 0px -50% 0px",threshold:0}).observe(document.querySelector(".js-csr-splide")),e.mount()};(()=>{const e=document.getElementById("responsive-video");let t="";function r(){const r=window.innerWidth<=768?"/movie/sp.mp4":"/movie/pv.mp4";r!==t&&(t=r,e.src=t,e.load())}r(),window.addEventListener("resize",r)})(),a(),e();class i{constructor(){this.limit=5}async fetchHTML(e){const t=await fetch(e);return await t.text()}parseHTML(e){return(new DOMParser).parseFromString(e,"text/html")}buildHTML(e){const t=this,r=document.createDocumentFragment(),n=e.querySelectorAll(".News-Item");for(const[e,o]of n.entries()){if(e>=t.limit)break;const n=document.createElement("a"),s=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");n.classList.add("Home-News-list__item"),s.classList.add("Home-News-list__date"),a.classList.add("Home-News-list__title"),i.classList.add("Home-News-list__more"),a.innerHTML=o.querySelector(".News-Item__title").innerHTML,s.innerHTML=o.querySelector(".News-Item__date").innerHTML,i.textContent="Read More",n.setAttribute("href",`./news/index.php?item=${e}`),n.appendChild(s),n.appendChild(a),n.appendChild(i),r.appendChild(n)}const o=document.querySelector(".js-insertNewsdata");o.innerHTML="",o.appendChild(r)}}const c=new i,l=await c.fetchHTML("./news/index.php"),p=c.parseHTML(l);c.buildHTML(p),t()}catch(e){t(e)}}),1)}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,exports:{}};return s[e].call(r.exports,r,r.exports,i),r.exports}i.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,s,a)=>{var i;a&&((i=[]).d=-1);var c,l,p,d=new Set,u=o.exports,m=new Promise(((e,t)=>{p=t,l=e}));m[t]=u,m[e]=e=>(i&&e(i),d.forEach(e),m.catch((e=>{}))),o.exports=m,s((o=>{var s;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var s=[];s.d=0,o.then((e=>{a[t]=e,n(s)}),(e=>{a[r]=e,n(s)}));var a={};return a[e]=e=>e(s),a}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var a=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(s=()=>t(a)).r=0;var r=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(s.r++,e.push(s)));c.map((t=>t[e](r)))}));return s.r?l:a()}),(e=>(e?p(m[r]=e):l(u),n(i)))),i&&i.d<0&&(i.d=0)},o=[],i.O=(e,t,r,n)=>{if(!t){var s=1/0;for(p=0;p<o.length;p++){for(var[t,r,n]=o[p],a=!0,c=0;c<t.length;c++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(a=!1,n<s&&(s=n));if(a){o.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var p=o.length;p>0&&o[p-1][2]>n;p--)o[p]=o[p-1];o[p]=[t,r,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.j=962,(()=>{var e={962:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[s,a,c]=r,l=0;if(s.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var p=c(i)}for(t&&t(r);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(p)},r=self.webpackChunkcoding_format=self.webpackChunkcoding_format||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var c=i.O(void 0,[121],(()=>i(951)));c=i.O(c)})();