import{b as v}from"./DClGm7F4.js";import{E as x,G as h,o as K,d,N as m,w,n as b,P as r,i as g,O as _,A as k,t as C,a9 as f}from"./NTENsdai.js";import{t as i}from"./Dm2gYBPg.js";import{P as y}from"./Cvz8euzd.js";import{t as u}from"./CvFxQ3fd.js";const n={meta:"",ctrl:"",alt:"",win:"⊞",command:"⌘",shift:"⇧",option:"⌥",enter:"↵",delete:"⌦",backspace:"⌫",escape:"⎋",tab:"⇥",capslock:"⇪",arrowup:"↑",arrowright:"→",arrowdown:"↓",arrowleft:"←",pageup:"⇞",pagedown:"⇟",home:"↖",end:"↘"},z=()=>{const t=x(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),a=h({meta:" ",alt:" ",ctrl:" "});K(()=>{a.meta=t.value?n.command:n.win,a.alt=t.value?n.option:"alt",a.ctrl=t.value?"⌃":"ctrl"});function s(e){if(e)return["meta","alt","ctrl"].includes(e)?a[e]:n[e]||e.toUpperCase()}return{macOS:t,getKbdKey:s}},E=v(z),B={base:"inline-flex items-center justify-center px-1 rounded-(--ui-radius) font-medium font-sans",variants:{variant:{solid:"bg-(--ui-bg-inverted) text-(--ui-bg)",outline:"bg-(--ui-bg) text-(--ui-text-highlighted) ring ring-inset ring-(--ui-border-accented)",subtle:"bg-(--ui-bg-elevated) text-(--ui-text) ring ring-inset ring-(--ui-border-accented)"},size:{sm:"h-4 min-w-[16px] text-[10px]",md:"h-5 min-w-[20px] text-[11px]",lg:"h-6 min-w-[24px] text-[12px]"}},defaultVariants:{variant:"outline",size:"md"}},P=f;var c;const S=i({extend:i(B),...((c=P.ui)==null?void 0:c.kbd)||{}}),A=d({__name:"Kbd",props:{as:{default:"kbd"},value:{},variant:{},size:{},class:{}},setup(t){const a=t,{getKbdKey:s}=E();return(e,o)=>(g(),m(r(y),{as:e.as,class:b(r(S)({variant:e.variant,size:e.size,class:a.class}))},{default:w(()=>[_(e.$slots,"default",{},()=>[k(C(r(s)(e.value)),1)])]),_:3},8,["as","class"]))}}),M={base:"align-text-top"},$=f;var l,p;const D=u({extend:u(M),...((p=(l=$.uiPro)==null?void 0:l.prose)==null?void 0:p.kbd)||{}}),F=d({__name:"Kbd",props:{value:{},class:{}},setup(t){const a=t;return(s,e)=>{const o=A;return g(),m(o,{value:s.value,class:b(r(D)({class:a.class}))},null,8,["value","class"])}}});export{F as default};
