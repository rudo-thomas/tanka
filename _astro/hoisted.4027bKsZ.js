const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.BDVP-LNP.js","_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const S=document.getElementById("starlight__sidebar"),y=S?.querySelector("sl-sidebar-state-persist"),b="sl-sidebar-state",v=()=>{let t=[];const e=y?.dataset.hash||"";try{const n=sessionStorage.getItem(b),s=JSON.parse(n||"{}");Array.isArray(s.open)&&s.hash===e&&(t=s.open)}catch{}return{hash:e,open:t,scroll:S?.scrollTop||0}},w=t=>{try{sessionStorage.setItem(b,JSON.stringify(t))}catch{}},L=()=>w(v()),H=(t,e)=>{const n=v();n.open[e]=t,w(n)};y?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const n=e.querySelector("sl-sidebar-restore"),s=parseInt(n?.dataset.index||"");isNaN(s)||H(!e.open,s)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&L()});addEventListener("pageHide",L);class I extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",I);const C="modulepreload",M=function(t){return"/"+t},E={},_=function(e,n,s){let u=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");u=Promise.allSettled(n.map(l=>{if(l=M(l),l in E)return;E[l]=!0;const g=l.endsWith(".css"),o=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const i=document.createElement("link");if(i.rel=g?"stylesheet":C,g||(i.as="script"),i.crossOrigin="",i.href=l,c&&i.setAttribute("nonce",c),document.head.appendChild(i),g)return new Promise((r,h)=>{i.addEventListener("load",r),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function d(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return u.then(a=>{for(const c of a||[])c.status==="rejected"&&d(c.reason);return e().catch(d)})};class A extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),d=r=>{("href"in(r.target||{})||document.body.contains(r.target)&&!u.contains(r.target))&&c()},a=r=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),r?.stopPropagation(),window.addEventListener("click",d)},c=()=>s.close();e.addEventListener("click",a),e.disabled=!1,n.addEventListener("click",c),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",d)}),window.addEventListener("keydown",r=>{(r.metaKey===!0||r.ctrlKey===!0)&&r.key==="k"&&(s.open?c():a(),r.preventDefault())});let l={};try{l=JSON.parse(this.dataset.translations||"{}")}catch{}const i=this.dataset.stripTrailingSlash!==void 0?r=>r.replace(/(.)\/(#.*)?$/,"$1$2"):r=>r;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(h=>setTimeout(h,1)))(async()=>{const{PagefindUI:h}=await _(async()=>{const{PagefindUI:m}=await import("./ui-core.BDVP-LNP.js");return{PagefindUI:m}},__vite__mapDeps([0,1]));new h({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:l,showSubResults:!0,processResult:m=>{m.url=i(m.url),m.sub_results=m.sub_results.map(f=>(f.url=i(f.url),f))}})})})}}customElements.define("site-search",A);const T="starlight-theme",k=t=>t==="auto"||t==="dark"||t==="light"?t:"auto",q=()=>k(typeof localStorage<"u"&&localStorage.getItem(T));function P(t){typeof localStorage<"u"&&localStorage.setItem(T,t==="light"||t==="dark"?t:"")}const O=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(t){StarlightThemeProvider.updatePickers(t),document.documentElement.dataset.theme=t==="auto"?O():t,P(t)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{q()==="auto"&&p("auto")});class R extends HTMLElement{constructor(){super(),p(q()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(k(e.currentTarget.value))})}}customElements.define("starlight-theme-select",R);class N extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",N);class x extends HTMLElement{_current=this.querySelector('a[aria-current="true"]');minH=parseInt(this.dataset.minH||"2",10);maxH=parseInt(this.dataset.maxH||"3",10);set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}constructor(){super();const e=[...this.querySelectorAll("a")],n=o=>{if(o instanceof HTMLHeadingElement){if(o.id==="_top")return!0;const i=o.tagName[1];if(i){const r=parseInt(i,10);if(r>=this.minH&&r<=this.maxH)return!0}}return!1},s=o=>{if(!o)return null;const i=o;for(;o;){if(n(o))return o;for(o=o.previousElementSibling;o?.lastElementChild;)o=o.lastElementChild;const r=s(o);if(r)return r}return s(i.parentElement)},u=o=>{for(const{isIntersecting:i,target:r}of o){if(!i)continue;const h=s(r);if(!h)continue;const m=e.find(f=>f.hash==="#"+encodeURIComponent(h.id));if(m){this.current=m;break}}},d=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let a;const c=()=>{a&&a.disconnect(),a=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),d.forEach(o=>a.observe(o))};c();const l=window.requestIdleCallback||(o=>setTimeout(o,1));let g;window.addEventListener("resize",()=>{a&&a.disconnect(),clearTimeout(g),g=setTimeout(()=>l(c),200)})}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+n+32,u=s+53,d=document.documentElement.clientHeight;return`-${s}px 0% ${u-d}px`}}customElements.define("starlight-toc",x);class $ extends x{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",n)}),window.addEventListener("click",s=>{e.contains(s.target)||n()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const u=e.contains(document.activeElement);if(n(),u){const d=e.querySelector("summary");d&&d.focus()}}})}}customElements.define("mobile-starlight-toc",$);export{_};
