import{as as f,E as p,a0 as m,$ as d,at as a,G as c,P as y,a4 as u,au as i,Y as v,av as O,r as b,aw as g}from"./NTENsdai.js";function h(e){return m()?(d(e),!0):!1}function k(e){let n=0,r,t;const o=()=>{n-=1,t&&n<=0&&(t.stop(),r=void 0,t=void 0)};return(...s)=>(n+=1,t||(t=f(!0),r=t.run(()=>e(...s))),h(o),r)}function C(e,n){if(typeof Symbol<"u"){const r={...e};return Object.defineProperty(r,Symbol.iterator,{enumerable:!1,value(){let t=0;return{next:()=>({value:n[t++],done:t>n.length})}}}),r}else return Object.assign([...n],e)}function S(e){if(!a(e))return c(e);const n=new Proxy({},{get(r,t,o){return y(Reflect.get(e.value,t,o))},set(r,t,o){return a(e.value[t])&&!a(o)?e.value[t].value=o:e.value[t]=o,!0},deleteProperty(r,t){return Reflect.deleteProperty(e.value,t)},has(r,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return c(n)}function l(e){return S(p(e))}function D(e,...n){const r=n.flat(),t=r[0];return l(()=>Object.fromEntries(typeof t=="function"?Object.entries(u(e)).filter(([o,s])=>!t(i(s),o)):Object.entries(u(e)).filter(o=>!r.includes(o[0]))))}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const P=()=>{};function E(...e){if(e.length!==1)return v(...e);const n=e[0];return typeof n=="function"?O(g(()=>({get:n,set:P}))):b(n)}function G(e,...n){const r=n.flat(),t=r[0];return l(()=>Object.fromEntries(typeof t=="function"?Object.entries(u(e)).filter(([o,s])=>t(i(s),o)):r.map(o=>[o,E(e,o)])))}function w(e){const n=Object.create(null);return r=>n[r]||(n[r]=e(r))}const x=/-(\w)/g,K=w(e=>e.replace(x,(n,r)=>r?r.toUpperCase():""));export{D as a,k as b,K as c,C as m,G as r};
