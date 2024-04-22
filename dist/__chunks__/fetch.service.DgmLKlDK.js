class q{constructor(){this.runtimeCache=new Map}get(t){return this.runtimeCache.get(t)}set(t,n){this.runtimeCache.set(t,n)}has(t){return this.runtimeCache.has(t)}delete(t){this.runtimeCache.delete(t)}}var p={},S;function P(e){return function(...t){return function(n,r,o){return Object.assign(Object.assign({},o),{value:e(o.value,...t)})}}}Object.defineProperty(p,"__esModule",{value:!0});const O=P(function(e,t=0){let n=-1;const r=function(...o){clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...o)},t)};return r.cancel=function(){clearTimeout(n)},r}),Q=P(function(e,t=0){let n,r=[];const o=function(...s){r=s,n===void 0&&(n=window.setTimeout(()=>{n=void 0,e.call(this,...r)},t))};return o.cancel=function(){clearTimeout(n),n=void 0},o});p.debounce=O,S=p.throttle=Q;var i={},x,w;Object.defineProperty(i,"__esModule",{value:!0});const $=(e,t)=>e===null?[]:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?Array.from(e.querySelectorAll(t)):Array.from(e.shadowRoot.querySelectorAll(t)),C=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const n of e)n.classList.remove(...t)}},f=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const n of e)n.classList.add(...t)}},M=(e,t)=>e.classList.contains(t);function d(e){return Symbol.iterator in e}function R(e){return"length"in e?e.length>0:!e[Symbol.iterator]().next().done}const T=(e,t,n,r,o)=>{if(e==null||d(e)&&!R(e))return;if(d(e)&&!(e instanceof HTMLElement)){for(const a of e)T(a,t,n,r,o);return}let s;s=typeof t=="string"?t.trim().split(" "):t,s.forEach(a=>{const c=j(e,a,n,r);if(!r.eventBindingMap[c]){const l=n.bind(r);return r.eventBindingMap[c]=l,e.addEventListener(a.trim(),l,o)}})};function j(e,t,n,r){return`${m(e,r)}#
          ${t.trim()}#
          ${m(n,r)}#
          ${m(r,r)}`.replace(/\n/gm,"").replace(/\s/g,"")}function m(e,t){let n;if(t.eventIdMap.has(e))n=t.eventIdMap.get(e);else{const r="xxxxxxxx".replace(/x/g,D).toLowerCase();t.eventIdMap.set(e,r),n=r}return n}function D(){return(100*Math.random()%36|0).toString(36)}const L=(e,t,n,r,o)=>{if(e==null||d(e)&&!R(e))return;if(d(e)&&!(e instanceof HTMLElement)){for(const a of e)L(a,t,n,r,o);return}let s;s=typeof t=="string"?t.trim().split(" "):t,s.forEach(a=>{const c=j(e,a,n,r),l=r.eventBindingMap[c];l&&(delete r.eventBindingMap[c],e.removeEventListener(a,l,o))})},b=(e,t)=>{$(e,t).forEach(n=>e.removeChild(n))},E=(e,t,n)=>new Promise(r=>{n!==void 0&&setTimeout(()=>r(),n),e.addEventListener(t,()=>r())});i.addClass=f,i.find=(e,t)=>e===null?null:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?e.querySelector(t):e.shadowRoot.querySelector(t),i.findAll=$,i.forEachNode=(e,t,n=window)=>{for(let r=0;r<e.length;r++)t.call(n,e[r],r,e)},w=i.getCurrentMQ=e=>{let t="";return e.forEach(n=>{!t.length&&window.matchMedia(n.query).matches&&(t=n.name)}),t},i.getInnerText=e=>e.innerText||e.textContent||"",i.getParent=(e,t)=>e.closest(t),i.getUniqueID=()=>Math.random().toString(36).substr(2,9),i.hasChild=(e,t)=>e.shadowRoot!==null&&e.shadowRoot!==void 0?e.shadowRoot.querySelector(t)!==null:e.querySelector(t)!==null,i.hasClass=M,i.inViewport=(e,t)=>{const n=e.getBoundingClientRect();let r={top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0};return t!==void 0&&(r=t.getBoundingClientRect()),n.top>=r.top&&n.right<=r.right&&n.bottom<=r.bottom&&n.left>=r.left},i.isNodeList=e=>!(e instanceof HTMLElement||e instanceof Window),x=i.onEvent=T,i.removeChildren=b,i.removeChilds=b,i.removeClass=C,i.removeEvent=L,i.toggleClass=(e,t,n)=>{if(e!=null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const r of e)n===!0?f(r,t):M(r,t)||n===!1?C(r,t):f(r,t)}},i.waitFor=e=>new Promise(t=>{setTimeout(()=>t(),e)}),i.waitForAnimationEnd=function(e,t){return new Promise((n,r)=>{e.addEventListener("animationend",function o(s){s.target===e&&(t&&s.animationName!==t||(e.removeEventListener("animationend",o),n(s)))})})},i.waitForEvent=E,i.waitForInitialization=e=>{var t;return((t=e.state)===null||t===void 0?void 0:t.initialized)===!0?Promise.resolve():E(e,"kl-component-initialized",3e3)},i.waitForTransitionEnd=function(e,t){return new Promise((n,r)=>{e.addEventListener("transitionend",function o(s){s.target===e&&(t&&s.propertyName!==t||(e.removeEventListener("transitionend",o),n(s)))})})};var A={};Object.defineProperty(A,"__esModule",{value:!0});A.fetchJSON=(e,t)=>new Promise((n,r)=>{fetch(e,t).then(o=>{o.ok?n(o.json()):r(o)}).catch(o=>r(o))});var h={};Object.defineProperty(h,"__esModule",{value:!0});const g=e=>typeof e=="object"&&e!==null?JSON.stringify(e):String(e);h.getValue=(e={},t="")=>{const n=t.split(".");let r=0,o=e;for(;o&&r<n.length;)o=o[n[r]],r++;return o},h.isEqual=(e,t)=>typeof e==typeof t&&(typeof e=="object"?g(e).localeCompare(g(t))===0:e===t),h.isFilledObject=function(e){return typeof e=="object"&&e!==null&&Object.keys(e).length>0},h.naiveClone=function e(t){return typeof t!="object"?t:t===null?null:Array.isArray(t)?t.map(n=>e(n)):Object.entries(t).reduce((n,[r,o])=>(n[r]=e(o),n),{})},h.toArray=e=>Array.isArray(e)?e:[e],h.toString=g;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */class u{constructor(){this.eventIdMap=new WeakMap,this.eventBindingMap={},this.lastMQ=w(u.mediaQuerys),x(window,"resize",this.handleMQChange,this)}static getInstance(t){return u.instance===void 0&&(u.mediaQuerys=t,u.instance=new u),u.instance}handleMQChange(){const t=w(u.mediaQuerys);t!==this.lastMQ&&(window.dispatchEvent(new CustomEvent("kl-mq-change",{detail:{newMQ:t,oldMQ:this.lastMQ}})),this.lastMQ=t)}}(function(e,t,n,r){var o,s=arguments.length,a=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);s>3&&a&&Object.defineProperty(t,n,a)})([S(100)],u.prototype,"handleMQChange",null);var I=new class{constructor(){this.urlSearchParams=new URLSearchParams(window.location.search)}get(e){return this.urlSearchParams.get(e)}getAll(e){return this.urlSearchParams.getAll(e)}getAllKeys(){return Array.from(this.urlSearchParams.keys())}set(e,t){this.urlSearchParams.set(e,t),this.updateUrl()}delete(e){this.urlSearchParams.delete(e),this.updateUrl()}getString(){return this.urlSearchParams.toString()}get curUrl(){return`${window.location.protocol}//${window.location.host}${window.location.pathname}`}updateUrl(){const e=this.getString(),t=this.curUrl,n=window.location.hash,r=e!==""?`${t}?${e}`:t;window.history.replaceState({path:r},"",r),n!==""&&(window.location.hash=n)}},B=new Proxy(console,{get:(e,t)=>I.get("js-debug")!==null?e[t]:()=>{}});new class{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(e=>this.handleIntersectionChange(e),{rootMargin:"500px 0px"})}subscribe(e,t){this.componentMap.set(e,t),this.intersectionObserver.observe(e)}unsubscribe(e){this.intersectionObserver.unobserve(e),this.componentMap.delete(e)}handleIntersectionChange(e){e.forEach(t=>{const n=t.target;if(!t.isIntersecting||!this.componentMap.has(n))return;const r=this.componentMap.get(n);this.unsubscribe(n),r()})}};class N{constructor(){this.requestPipeline=new Map,this.runtimeCache=new q}fetchJson(t,n={}){return this.fetchData(this.getCodeBasePath(t),n,this.getResponseJSON)}async fetchText(t,n={}){return await this.fetchData(this.getCodeBasePath(t),n,this.getResponseText)}async fetchData(t,n,r){const{cacheOptions:o}=n,s=this.getCachedData(t,o);if(s!==null)return s;const a=this.requestPipeline.get(t);if(a!==void 0)return r(await a);const c=fetch(t,n.fetchOptions);this.requestPipeline.set(t,c);const l=await c;this.requestPipeline.delete(t);const v=await r(l);if(this.setCachedData(t,v,o),!l.ok){const y=await l.text();throw B.error(`FetchService: Error fetching data from ${t}: ${y}`),new Error(`Error fetching data from ${t}: ${y}`)}return v}async getResponseJSON(t){return await t.clone().json()}async getResponseText(t){return await t.clone().text()}getCachedData(t,n){return(n==null?void 0:n.cacheType)==="runtime"?this.runtimeCache.get(t)??null:null}setCachedData(t,n,r){(r==null?void 0:r.cacheType)==="runtime"&&this.runtimeCache.set(t,n)}getCodeBasePath(t){const n=t.startsWith("/")?t:`/${t}`;return`${window.hlx.codeBasePath}${n}`}}const F=new N;export{F,B as m};
//# sourceMappingURL=fetch.service.DgmLKlDK.js.map
