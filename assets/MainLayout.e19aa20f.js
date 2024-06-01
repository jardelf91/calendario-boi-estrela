import{c as T,a as f,h,r as w,i as K,o as E,b as R,n as X,d as A,g as H,l as F,e as Y,f as L,w as x,j as N,p as G,k as Z,m as P,q as ee,s as te,t as oe,u as ne,v as $,x as C,y as le}from"./index.5751500e.js";import{h as M,a as ie,b as re}from"./render.f1930b0f.js";import{c as D,g as ae}from"./dom.e5f682f1.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";var ue=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:t.value},M(s.default))}}),ce=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:t.value,role:"toolbar"},M(s.default))}});function de(){const e=w(!K.value);return e.value===!1&&E(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver!="undefined",U=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var W=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let t=null,o,l={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:a,offsetHeight:i}=o;(a!==l.width||i!==l.height)&&(l={width:a,height:i},s("resize",l))}}const{proxy:m}=H();if(m.trigger=u,J===!0){let a;const i=g=>{o=m.$el.parentNode,o?(a=new ResizeObserver(u),a.observe(o),c()):g!==!0&&A(()=>{i(!0)})};return E(()=>{i()}),R(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():o&&a.unobserve(o))}),X}else{let g=function(){t!==null&&(clearTimeout(t),t=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",u,F.passive),i=void 0)},p=function(){g(),o&&o.contentDocument&&(i=o.contentDocument.defaultView,i.addEventListener("resize",u,F.passive),c())};const{isHydrated:a}=de();let i;return E(()=>{A(()=>{o=m.$el,o&&p()})}),R(g),()=>{if(a.value===!0)return h("object",{class:"q--avoid-card-border",style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:p})}}}}),fe=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:t}){const{proxy:{$q:o}}=H(),l=Y(N,L);if(l===L)return console.error("QHeader needs to be child of QLayout"),L;const u=w(parseInt(e.heightHint,10)),c=w(!0),m=f(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||o.platform.is.ios&&l.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const n=u.value-l.scroll.value.position;return n>0?n:0}),i=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const n=l.rows.value.top,b={};return n[0]==="l"&&l.left.space===!0&&(b[o.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(b[o.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function d(n,b){l.update("header",n,b)}function y(n,b){n.value!==b&&(n.value=b)}function O({height:n}){y(u,n),d("size",n)}function V(n){g.value===!0&&y(c,!0),t("focusin",n)}x(()=>e.modelValue,n=>{d("space",n),y(c,!0),l.animate()}),x(a,n=>{d("offset",n)}),x(()=>e.reveal,n=>{n===!1&&y(c,e.modelValue)}),x(c,n=>{l.animate(),t("reveal",n)}),x(l.scroll,n=>{e.reveal===!0&&y(c,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const q={};return l.instances.header=q,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",a.value),R(()=>{l.instances.header===q&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const n=ie(s.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(W,{debounce:0,onResize:O})),h("header",{class:p.value,style:z.value,onFocusin:V},n)}}}),ve=T({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:t}}=H(),o=Y(N,L);if(o===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(Z,!0);const l=f(()=>{const u={};return o.header.space===!0&&(u.paddingTop=`${o.header.size}px`),o.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(u.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:l.value},M(s.default))}});const he=[Element,String],me=[null,document,document.body,document.scrollingElement,document.documentElement];function ge(e,s){let t=ae(s);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return me.includes(t)?window:t}function pe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function be(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Q;function B(){if(Q!==void 0)return Q;const e=document.createElement("p"),s=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(s,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),s.appendChild(e),document.body.appendChild(s);const t=e.offsetWidth;s.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=s.clientWidth),s.remove(),Q=t-o,Q}const{passive:I}=F,ye=["both","horizontal","vertical"];var we=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:he},emits:["scroll"],setup(e,{emit:s}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,l,u;x(()=>e.scrollTarget,()=>{a(),m()});function c(){o!==null&&o();const p=Math.max(0,pe(l)),z=be(l),d={top:p-t.position.top,left:z-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:p,left:z},t.directionChanged=t.direction!==y,t.delta=d,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),s("scroll",{...t})}function m(){l=ge(u,e.scrollTarget),l.addEventListener("scroll",i,I),i(!0)}function a(){l!==void 0&&(l.removeEventListener("scroll",i,I),l=void 0)}function i(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(o===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];o=()=>{d(z),o=null}}}const{proxy:g}=H();return x(()=>g.$q.lang.rtl,c),E(()=>{u=g.$el.parentNode,m()}),R(()=>{o!==null&&o(),a()}),Object.assign(g,{trigger:i,getPosition:()=>t}),X}}),ze=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:t}){const{proxy:{$q:o}}=H(),l=w(null),u=w(o.screen.height),c=w(e.container===!0?0:o.screen.width),m=w({position:0,direction:"down",inflectionPoint:0}),a=w(0),i=w(K.value===!0?0:B()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),z=f(()=>i.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=f(()=>i.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=v,e.onScroll!==void 0&&t("scroll",v)}}function O(r){const{height:v,width:S}=r;let _=!1;u.value!==v&&(_=!0,u.value=v,e.onScrollHeight!==void 0&&t("scrollHeight",v),q()),c.value!==S&&(_=!0,c.value=S),_===!0&&e.onResize!==void 0&&t("resize",r)}function V({height:r}){a.value!==r&&(a.value=r,q())}function q(){if(e.container===!0){const r=u.value>a.value?B():0;i.value!==r&&(i.value=r)}}let n=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:l,height:u,containerHeight:a,scrollbarWidth:i,totalWidth:f(()=>c.value+i.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:m,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,v,S){b[r][v]=S}};if(G(N,b),B()>0){let S=function(){r=null,v.classList.remove("hide-scrollbar")},_=function(){if(r===null){if(v.scrollHeight>o.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(S,300)},k=function(j){r!==null&&j==="remove"&&(clearTimeout(r),S()),window[`${j}EventListener`]("resize",_)},r=null;const v=document.body;x(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ee(()=>{k("remove")})}return()=>{const r=re(s.default,[h(we,{onScroll:y}),h(W,{onResize:O})]),v=h("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:l,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(W,{onResize:V}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:d.value},[v])])]):v}}});const xe={};function Se(e,s){const t=te("router-view");return oe(),ne(ze,{view:"hHh lpR fFf"},{default:$(()=>[C(fe,{elevated:""},{default:$(()=>[C(ce,{style:{"background-color":"#be8c0e",color:"black"}},{default:$(()=>[C(ue,{style:{"font-family":"'Arial', sans-serif"}},{default:$(()=>[le(" Calend\xE1rio de Apresenta\xE7\xF5es ")]),_:1})]),_:1})]),_:1}),C(ve,null,{default:$(()=>[C(t)]),_:1})]),_:1})}var $e=se(xe,[["render",Se]]);export{$e as default};