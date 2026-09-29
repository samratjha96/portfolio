var Zn=Object.defineProperty;var Kn=(e,t,n)=>t in e?Zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(Kn(e,typeof t!="symbol"?t+"":t,n),n);import{g as xe,a as F,r as y,u as $n,j as p,H as ea,b as s,C as ta,O as na,c as aa,_ as P,p as it,d as Yt,F as $,e as He,f as ra}from"./three-f4f913dc.js";import{L as R,m as W,u as oa,R as sa,a as te,b as ia,B as la}from"./vendor-5438e414.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var ca=typeof Element<"u",da=typeof Map=="function",ua=typeof Set=="function",ha=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,r;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!be(e[a],t[a]))return!1;return!0}var i;if(da&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(a=i.next()).done;)if(!t.has(a.value[0]))return!1;for(i=e.entries();!(a=i.next()).done;)if(!be(a.value[1],t.get(a.value[0])))return!1;return!0}if(ua&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(a=i.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(ha&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[a]))return!1;if(ca&&e instanceof Element)return!1;for(a=n;a--!==0;)if(!((r[a]==="_owner"||r[a]==="__v"||r[a]==="__o")&&e.$$typeof)&&!be(e[r[a]],t[r[a]]))return!1;return!0}return e!==e&&t!==t}var lt=function(t,n){try{return be(t,n)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}};const pa=xe(lt);var ma=function(e,t,n,a,r,i,o,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,a,r,i,o,l],u=0;c=new Error(t.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},fa=ma;const At=xe(fa);var ga=function(t,n,a,r){var i=a?a.call(r,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<o.length;d++){var u=o[d];if(!c(u))return!1;var f=t[u],h=n[u];if(i=a?a.call(r,f,h,u):void 0,i===!1||i===void 0&&f!==h)return!1}return!0};const ya=xe(ga);var Jt=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Jt||{}),Fe={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},xt=Object.values(Jt),ct={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ba=Object.entries(ct).reduce((e,[t,n])=>(e[n]=t,e),{}),z="data-rh",X={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Z=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const a=e[n];if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}return null},wa=e=>{let t=Z(e,"title");const n=Z(e,X.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const a=Z(e,X.DEFAULT_TITLE);return t||a||void 0},va=e=>Z(e,X.ON_CHANGE_CLIENT_STATE)||(()=>{}),We=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,a)=>({...n,...a}),{}),Aa=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,a)=>{if(!n.length){const r=Object.keys(a);for(let i=0;i<r.length;i+=1){const l=r[i].toLowerCase();if(e.indexOf(l)!==-1&&a[l])return n.concat(a)}}return n},[]),xa=e=>console&&typeof console.warn=="function"&&console.warn(e),ne=(e,t,n)=>{const a={};return n.filter(r=>Array.isArray(r[e])?!0:(typeof r[e]<"u"&&xa(`Helmet: ${e} should be of type "Array". Instead found type "${typeof r[e]}"`),!1)).map(r=>r[e]).reverse().reduce((r,i)=>{const o={};i.filter(c=>{let d;const u=Object.keys(c);for(let h=0;h<u.length;h+=1){const m=u[h],g=m.toLowerCase();t.indexOf(g)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(g==="rel"&&c[g].toLowerCase()==="stylesheet")&&(d=g),t.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!c[d])return!1;const f=c[d].toLowerCase();return a[d]||(a[d]={}),o[d]||(o[d]={}),a[d][f]?!1:(o[d][f]=!0,!0)}).reverse().forEach(c=>r.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const d=l[c],u={...a[d],...o[d]};a[d]=u}return r},[]).reverse()},Pa=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Ea=e=>({baseTag:Aa(["href"],e),bodyAttributes:We("bodyAttributes",e),defer:Z(e,X.DEFER),encode:Z(e,X.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:We("htmlAttributes",e),linkTags:ne("link",["rel","href"],e),metaTags:ne("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ne("noscript",["innerHTML"],e),onChangeClientState:va(e),scriptTags:ne("script",["src","innerHTML"],e),styleTags:ne("style",["cssText"],e),title:wa(e),titleAttributes:We("titleAttributes",e),prioritizeSeoTags:Pa(e,X.PRIORITIZE_SEO_TAGS)}),Qt=e=>Array.isArray(e)?e.join(""):e,Ta=(e,t)=>{const n=Object.keys(e);for(let a=0;a<n.length;a+=1)if(t[n[a]]&&t[n[a]].includes(e[n[a]]))return!0;return!1},Ue=(e,t)=>Array.isArray(e)?e.reduce((n,a)=>(Ta(a,t)?n.priority.push(a):n.default.push(a),n),{priority:[],default:[]}):{default:e,priority:[]},Pt=(e,t)=>({...e,[t]:void 0}),Sa=["noscript","script","style"],qe=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),qt=e=>Object.keys(e).reduce((t,n)=>{const a=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${a}`:a},""),Ia=(e,t,n,a)=>{const r=qt(n),i=Qt(t);return r?`<${e} ${z}="true" ${r}>${qe(i,a)}</${e}>`:`<${e} ${z}="true">${qe(i,a)}</${e}>`},ka=(e,t,n=!0)=>t.reduce((a,r)=>{const i=r,o=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const f=typeof i[u]>"u"?u:`${u}="${qe(i[u],n)}"`;return d?`${d} ${f}`:f},""),l=i.innerHTML||i.cssText||"",c=Sa.indexOf(e)===-1;return`${a}<${e} ${z}="true" ${o}${c?"/>":`>${l}</${e}>`}`},""),Xt=(e,t={})=>Object.keys(e).reduce((n,a)=>{const r=ct[a];return n[r||a]=e[a],n},t),Ca=(e,t,n)=>{const a={key:t,[z]:!0},r=Xt(n,a);return[F.createElement("title",r,t)]},we=(e,t)=>t.map((n,a)=>{const r={key:a,[z]:!0};return Object.keys(n).forEach(i=>{const l=ct[i]||i;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;r.dangerouslySetInnerHTML={__html:c}}else r[l]=n[i]}),F.createElement(e,r)}),L=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Ca(e,t.title,t.titleAttributes),toString:()=>Ia(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Xt(t),toString:()=>qt(t)};default:return{toComponent:()=>we(e,t),toString:()=>ka(e,t,n)}}},Oa=({metaTags:e,linkTags:t,scriptTags:n,encode:a})=>{const r=Ue(e,Fe.meta),i=Ue(t,Fe.link),o=Ue(n,Fe.script);return{priorityMethods:{toComponent:()=>[...we("meta",r.priority),...we("link",i.priority),...we("script",o.priority)],toString:()=>`${L("meta",r.priority,a)} ${L("link",i.priority,a)} ${L("script",o.priority,a)}`},metaTags:r.default,linkTags:i.default,scriptTags:o.default}},Na=e=>{const{baseTag:t,bodyAttributes:n,encode:a=!0,htmlAttributes:r,noscriptTags:i,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:d}=e;let{linkTags:u,metaTags:f,scriptTags:h}=e,m={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:m,linkTags:u,metaTags:f,scriptTags:h}=Oa(e)),{priority:m,base:L("base",t,a),bodyAttributes:L("bodyAttributes",n,a),htmlAttributes:L("htmlAttributes",r,a),link:L("link",u,a),meta:L("meta",f,a),noscript:L("noscript",i,a),script:L("script",h,a),style:L("style",o,a),title:L("title",{title:l,titleAttributes:c},a)}},Xe=Na,me=[],Zt=!!(typeof window<"u"&&window.document&&window.document.createElement),Ze=class{constructor(e,t){B(this,"instances",[]);B(this,"canUseDOM",Zt);B(this,"context");B(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?me:this.instances,add:e=>{(this.canUseDOM?me:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?me:this.instances).indexOf(e);(this.canUseDOM?me:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Xe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ma={},Kt=F.createContext(Ma),K,$t=(K=class extends y.Component{constructor(n){super(n);B(this,"helmetData");this.helmetData=new Ze(this.props.context||{},K.canUseDOM)}render(){return F.createElement(Kt.Provider,{value:this.helmetData.value},this.props.children)}},B(K,"canUseDOM",Zt),K),Y=(e,t)=>{const n=document.head||document.querySelector("head"),a=n.querySelectorAll(`${e}[${z}]`),r=[].slice.call(a),i=[];let o;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const u=d,f=typeof l[u]>"u"?"":l[u];c.setAttribute(d,f)}c.setAttribute(z,"true"),r.some((d,u)=>(o=u,c.isEqualNode(d)))?r.splice(o,1):i.push(c)}),r.forEach(l=>l.parentNode?.removeChild(l)),i.forEach(l=>n.appendChild(l)),{oldTags:r,newTags:i}},Ke=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const a=n.getAttribute(z),r=a?a.split(","):[],i=[...r],o=Object.keys(t);for(const l of o){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),r.indexOf(l)===-1&&r.push(l);const d=i.indexOf(l);d!==-1&&i.splice(d,1)}for(let l=i.length-1;l>=0;l-=1)n.removeAttribute(i[l]);r.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==o.join(",")&&n.setAttribute(z,o.join(","))},_a=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Qt(e)),Ke("title",t)},Et=(e,t)=>{const{baseTag:n,bodyAttributes:a,htmlAttributes:r,linkTags:i,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:f,titleAttributes:h}=e;Ke("body",a),Ke("html",r),_a(f,h);const m={baseTag:Y("base",n),linkTags:Y("link",i),metaTags:Y("meta",o),noscriptTags:Y("noscript",l),scriptTags:Y("script",d),styleTags:Y("style",u)},g={},w={};Object.keys(m).forEach(b=>{const{newTags:v,oldTags:A}=m[b];v.length&&(g[b]=v),A.length&&(w[b]=m[b].oldTags)}),t&&t(),c(e,g,w)},ae=null,Ra=e=>{ae&&cancelAnimationFrame(ae),e.defer?ae=requestAnimationFrame(()=>{Et(e,()=>{ae=null})}):(Et(e),ae=null)},Da=Ra,Tt=class extends y.Component{constructor(){super(...arguments);B(this,"rendered",!1)}shouldComponentUpdate(t){return!ya(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let a=null;const r=Ea(t.get().map(i=>{const o={...i.props};return delete o.context,o}));$t.canUseDOM?Da(r):Xe&&(a=Xe(r)),n(a)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Qe,$e=(Qe=class extends y.Component{shouldComponentUpdate(e){return!pa(Pt(this.props,"helmetData"),Pt(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,a){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,a)}]}}mapObjectTypeChildren(e,t,n,a){switch(e.type){case"title":return{...t,[e.type]:a,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(a=>{n={...n,[a]:e[a]}}),n}warnOnInvalidChildren(e,t){return At(xt.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${xt.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),At(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return F.Children.forEach(e,a=>{if(!a||!a.props)return;const{children:r,...i}=a.props,o=Object.keys(i).reduce((c,d)=>(c[ba[d]||d]=i[d],c),{});let{type:l}=a;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(a,r),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(r,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(a,n,o,r);break;default:t=this.mapObjectTypeChildren(a,t,o,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:a}=t;if(e&&(n=this.mapChildrenToProps(e,n)),a&&!(a instanceof Ze)){const r=a;a=new Ze(r.context,!0),delete n.helmetData}return a?F.createElement(Tt,{...n,context:a.value}):F.createElement(Kt.Consumer,null,r=>F.createElement(Tt,{...n,context:r}))}},B(Qe,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Qe);const ja=()=>{const{progress:e}=$n();return p(ea,{children:[s("span",{className:"canvas-load"}),p("p",{style:{fontSize:14,color:"#f1f1f1",fontWeight:600,marginTop:40},children:[e.toFixed(2),"%"]})]})},La=()=>{const e=aa("./planet/scene.gltf");return s("primitive",{object:e.scene,scale:2.5,"position-y":0,"rotation-y":0})},za=()=>s(ta,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:p(y.Suspense,{fallback:s(ja,{}),children:[s(na,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),s(La,{})]})}),C={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-semibold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-normal lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-semibold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},St=100,Ba=40,It=.12,kt=.01;function Ha(e,t){const n=e.length/2,a=new Float32Array(n),r=new Float32Array(n),i=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++)a[l]=e[l*2],r[l]=e[l*2+1];return{count:n,baseX:a,baseY:r,dx:i,dy:o,dotSize:t,colors:null}}function Fa(e,t,n,a){let r=!1;const{count:i,baseX:o,baseY:l,dx:c,dy:d}=e;for(let u=0;u<i;u++){let f=0,h=0;if(a){const m=o[u]+c[u],g=l[u]+d[u],w=m-t,b=g-n,v=Math.sqrt(w*w+b*b);if(v<St&&v>0){const A=1-v/St,j=A*A*A*Ba;f=w/v*j,h=b/v*j}}c[u]+=(f-c[u])*It,d[u]+=(h-d[u])*It,Math.abs(c[u])<kt&&Math.abs(d[u])<kt?(c[u]=0,d[u]=0):r=!0}return r||a}function Ct(e,t,n,a){const{count:r,baseX:i,baseY:o,dx:l,dy:c,dotSize:d,colors:u}=t;e.clearRect(0,0,e.canvas.width,e.canvas.height);const f=d*a,h=.25*a;if(u){const m=new Map;for(let g=0;g<r;g++){const w=u[g];m.has(w)||m.set(w,[]),m.get(w).push(g)}for(const[g,w]of m){e.fillStyle=g;for(const b of w){const v=(i[b]+l[b])*a,A=(o[b]+c[b])*a;e.fillRect(v-h,A-h,f+h,f+h)}}}else{e.fillStyle=n;for(let m=0;m<r;m++){const g=(i[m]+l[m])*a,w=(o[m]+c[m])*a;e.fillRect(g-h,w-h,f+h,f+h)}}}function Wa(e,t){const n=y.useRef(null),a=y.useRef(null),r=y.useRef({x:0,y:0,active:!1}),i=y.useRef(null),o=y.useRef(!1),l=y.useCallback(()=>{const h=n.current;if(!h||!a.current)return;const m=h.getContext("2d"),{x:g,y:w,active:b}=r.current,v=Fa(a.current,g,w,b);Ct(m,a.current,e,window.devicePixelRatio||1),v?i.current=requestAnimationFrame(l):o.current=!1},[e]),c=y.useCallback(()=>{o.current||(o.current=!0,i.current=requestAnimationFrame(l))},[l]),d=y.useCallback(h=>{a.current=h;const m=n.current;if(m){const g=m.getContext("2d");Ct(g,a.current,e,window.devicePixelRatio||1)}},[e]),u=y.useCallback(h=>{const m=n.current?.getBoundingClientRect();m&&(r.current.x=h.clientX-m.left,r.current.y=h.clientY-m.top,r.current.active=!0,c())},[c]),f=y.useCallback(()=>{r.current.active=!1,c()},[c]);return y.useEffect(()=>()=>{i.current&&cancelAnimationFrame(i.current)},[]),{canvasRef:n,setDots:d,handlePointerMove:u,handlePointerLeave:f}}function Ua(e,t,n,a,r){const i=e.data,o=[];for(let l=0;l<n;l+=a)for(let c=0;c<t;c+=a){const d=(l*t+c)*4;i[d+3]>128&&o.push(c/r,l/r)}return new Float32Array(o)}function Ga(e,t,n,a,r,i,o){const l=document.createElement("canvas");l.width=a*o,l.height=r*o;const c=l.getContext("2d");c.scale(o,o),c.font=t,c.fillStyle=n,c.textBaseline="top";const d=c.measureText(e),u=d.actualBoundingBoxAscent+d.actualBoundingBoxDescent,f=(a-d.width)/2,h=(r-u)/2;c.fillText(e,f,h);const m=c.getImageData(0,0,l.width,l.height),g=Math.max(1,Math.round(i*o));return Ua(m,l.width,l.height,g,o)}const Ot=({text:e,className:t="",color:n="#915eff",dotScale:a=2})=>{const{canvasRef:r,setDots:i,handlePointerMove:o,handlePointerLeave:l}=Wa(n),c=y.useCallback(()=>{const d=r.current;if(!d)return;const u=d.getBoundingClientRect(),f=window.devicePixelRatio||1,h=u.width,m=u.height;d.width=h*f,d.height=m*f;const g=getComputedStyle(d),w=parseFloat(g.fontSize)||40,b=g.fontWeight||"900",v=g.fontFamily||"Poppins, sans-serif",A=`${b} ${w}px ${v}`,j=Ga(e,A,n,h,m,a,f);i(Ha(j,a))},[e,n,a,r,i]);return y.useEffect(()=>{c();const d=new ResizeObserver(c);return r.current&&d.observe(r.current),()=>d.disconnect()},[c,r]),p("span",{className:`relative inline-block ${t}`,children:[s("span",{className:"invisible",children:e}),s("canvas",{ref:r,"aria-hidden":"true",className:"absolute inset-0 w-full h-full",style:{fontSize:"inherit",fontWeight:"inherit",fontFamily:"inherit"},onPointerMove:o,onPointerLeave:l})]})},Va="/assets/github-3b4e1609.png",en="/assets/menu-242d80a8.svg",tn="/assets/close-ad0e0ca6.svg",Ya="/assets/docker-602a695a.png",Ja="/assets/aws-3992509b.png",Qa="data:image/png;base64,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",qa="/assets/java-1d6e2973.png",Xa="data:image/png;base64,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",Za="/assets/nodejs-d83eb6dd.png",Ka="/assets/reactjs-966214a8.png",$a="/assets/tailwind-6ece120d.png",er="data:image/png;base64,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",tr="/assets/threejs-1d0654a8.svg",nr="data:image/png;base64,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",ar="/assets/golang-7ad4fbca.png",rr="/assets/python-90b5859b.png",or="/assets/rust-63a52c0e.png",sr="/assets/boeing-52b7c75f.png",Nt="/assets/aws-4fd147c7.png",Mt="/assets/appian-5f07f258.png",ir="/assets/nvidia-5fd529f7.png",lr="/assets/ParallaxImageGallery-f4a8d517.webp",cr="/assets/SAASLandingPage-fec1310d.webp",dr="/assets/dashboard-2d63fee3.webp",ur="/assets/argos-41add278.webp",hr="/assets/space-selfie-3aba83c3.webp",pr="/assets/bird-radio-de14013d.webp",mr="/assets/which-card-4999fe9e.webp",fr="/assets/situsearch-6a066f2c.webp",gr="/assets/patentagility-3e3ae6dd.webp",ve=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"media",title:"Media"},{id:"contact",title:"Contact"},{id:"blog",title:"Blog",isExternal:!0,path:"/blog/"},{id:"ai",title:"AI Consulting",isExternal:!0,path:"/ai/",isFullPage:!0}],yr=[{name:"Git",icon:Qa},{name:"AWS",icon:Ja},{name:"Docker",icon:Ya},{name:"Kotlin",icon:nr},{name:"Java",icon:qa},{name:"Rust",icon:or},{name:"Golang",icon:ar},{name:"Python",icon:rr},{name:"JavaScript",icon:Xa},{name:"TypeScript",icon:er},{name:"React JS",icon:Ka},{name:"Tailwind CSS",icon:$a},{name:"Node JS",icon:Za},{name:"Three JS",icon:tr}],br=[{title:"Senior AI Engineer",company_name:"NVIDIA",icon:ir,iconBg:"#76B900",date:"December 2025 - Current",points:["Building at the frontier of artificial intelligence"]},{title:"Software Engineer @ AWS Region Expansion",company_name:"AWS",icon:Nt,iconBg:"#383E56",date:"September 2024 - December 2025",points:["Built enterprise-grade ETL pipelines to ingest millions of multi-modal documents for RAG workloads","Deployed multi-agent systems to production for planning region builds and forecasting cost/timelines","Launched AI chatbots answering thousands of questions weekly with feedback loop systems for self-improvement"]},{title:"Software Engineer @ AWS Outposts",company_name:"AWS",icon:Nt,iconBg:"#383E56",date:"March 2022 - September 2024",points:["Built next generation of edge computing infrastructure to deliver the ultimate hybrid cloud experience","Focused on building event driven, low latency distributed systems using AWS ECS, Lambda, DynamoDB, EventBridge, Kotlin, Typescript and Rust","Led, designed and delivered numerous large features and projects spanning multiple teams and organizations"]},{title:"Senior Software Engineer",company_name:"Appian",icon:Mt,iconBg:"#383E56",date:"March 2021 - Jan 2022",points:["Led the integration with newly acquired company from Spain by being the first engineer to work directly in the Spain team","Collaborated across Spain and USA teams to develop sustainable engineering practices to ensure long term success","Implemented core features to make Robotic Process Automation (RPA) a native capability of the Appian platform","Won company wide award for excellent technical innovation in delivering the first successful integration with an acquired company for Appian"]},{title:"Software Engineer",company_name:"Appian",icon:Mt,iconBg:"#383E56",date:"Aug 2018 - March 2021",points:["Developed and delivered a full stack integration with Twilio in Appian's Intelligent Contact Center platform allowing cloud native telephony capabilities","Designed, implemented and presented a templatized end to end delivery pipeline of Appian applications to customers. Used to this day to ship thousands of applications on Appian","Empowered a 100+ engineer organization to be self-sufficient with AWS by solely managing a fleet of AWS accounts for the organization","Developed and shipped an open source project, Terraform provider for Twilio, to be used by Appian and external companies"]},{title:"Software Engineer Intern",company_name:"Boeing",icon:sr,iconBg:"#E6DEDD",date:"June 2018 - August 2018",points:["Part of the first cohort of software engineers for Boeing's Avionics department","Developed high performance flight simulation engine based on real time flight data","Won best hackathon project for building the first ever big data visualization platform for Boeing's internal test flights"]}],wr=[{name:"Mock Interview Prep",description:"Mock Software Engineering interview for the interview prep site [InterviewPen](https://www.interviewpen.com). Watch to see how to navigate and succeed in a FAANG interview",tags:[{name:"react",color:"blue-text-gradient"},{name:"mongodb",color:"green-text-gradient"},{name:"tailwind",color:"pink-text-gradient"}],embedId:"bmqZ5AhNr3g"},{name:"Podcast Interview",description:"Podcast appearance on [Back2BackSWE channel](https://www.youtube.com/@BackToBackSWE) (300K+ subscribers) where I give career guidance to software engineers about navigating the job hunt, how to interview and how to ultimately find the right fit",embedId:"y2y_ni8WLy0"},{name:"Commencement Speech",description:"Commencement speech for my college graduation where I talk about my childhood, my immigration to the US, my struggles and all my achievements since",embedId:"xxNa51UFGGI?start=2627"}],nn=[{name:"Today's Tech",description:"Personal dashboard aggregating market data, GitHub trending repos, Hacker News, and tech news in a sleek terminal-inspired interface",image:dr,source_code_link:"https://github.com/samratjha96/today",demo_link:"https://today.bootloop.cc/"},{name:"NetWorth Tracker",description:"Personal finance application to track net worth. Built with React, TypeScript, Tailwind CSS and shadcn-ui",image:ur,source_code_link:"https://github.com/samratjha96/networth",demo_link:"https://argos.bootloop.cc/"},{name:"Situation Search",description:"Natural-language search over football match video. Type what you want to see and jump straight to the moment. Built for analysts.",image:fr,source_code_link:"https://github.com/samratjha96/situation-search",demo_link:"https://situsearch.bootloop.cc"},{name:"PatentAgility",description:"A tool that helps patent attorneys find supporting evidence for legal claims. Combines dense sentence embeddings, BM25, and cross-encoder reranking for search, transformer-based NLP to catch claim drafting defects, and auto-generates visual diagrams of how a claim's legal language breaks down.",image:gr,source_code_link:"https://github.com/samratjha96/NLP-Based-Patent-Specification-And-Claim-Analysis",demo_link:"https://patentagility-demo.zasamrat.workers.dev"},{name:"Bird Radio",description:"A retro-styled nature sound tuner that streams bird songs from around the world. Features real-time spectrogram visualization and region-based browsing",image:pr,source_code_link:"https://github.com/samratjha96/BirdRadio",demo_link:"https://bird-radio.pages.dev/"},{name:"Which Card",description:"Find the best credit card for every purchase. Search by merchant or category, compare rewards, and maximize your cashback with smart category disambiguation",image:mr,source_code_link:"https://github.com/samratjha96/which-card",demo_link:"https://which-card.pages.dev"},{name:"Space Selfie",description:"Discover when the ISS flew over your special moments. Built with TypeScript, Cloudflare Workers, Hono, and satellite.js for orbital calculations",image:hr,source_code_link:"https://github.com/samratjha96/space-selfie",demo_link:"https://space-selfie.zasamrat.workers.dev"},{name:"SAAS Landing Page",description:"Sleek white label SAAS landing page. Complete with engaging copy, animations and eye-catching design. This landing page can be reskinned for any client or project",image:cr,source_code_link:"https://github.com/samratjha96/sample-saas-landing-page",demo_link:"https://sample-saas-landing-page.vercel.app/"},{name:"Parallax Image Gallery",description:"Sleek parallax animation showing off a collection of photos. Add a subtle but highly creative touch to your blog without cluttering the content with pictures",image:lr,source_code_link:"https://github.com/samratjha96/parallax-image-gallery",demo_link:"https://parallax-image-gallery-beta.vercel.app/"}],vr=()=>{const e=y.useRef(null);return y.useEffect(()=>{let t=null,n=!1;return P(()=>import("./mountRack-72267cdc.js"),[]).then(({mountRack:a})=>{n||(t=a(e.current,nn.map(r=>r.name)))}),()=>{n=!0,t?.()}},[]),s("div",{ref:e,className:"rack","data-client-only":""})},Ar=()=>s("section",{id:"about",className:"relative w-full mx-auto",children:p("div",{className:`${C.paddingX} max-w-7xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20 grid grid-cols-[minmax(0,1fr)] gap-12 min-[1360px]:grid-cols-[820px_minmax(0,1fr)] min-[1360px]:gap-x-10 min-[1360px]:items-center`,children:[s("div",{className:"max-w-5xl border-l border-[#915eff]/50 pl-6 sm:pl-8",children:p("div",{className:"grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 min-[1360px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] min-[1360px]:gap-14",children:[p("div",{children:[p("h1",{className:"font-semibold text-white text-[46px] leading-[56px] sm:text-[54px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px]",children:[s(Ot,{text:"Samrat",dotScale:2}),s("br",{}),s(Ot,{text:"Jha",dotScale:2})]}),s("p",{className:`${C.heroSubText} mt-5`,children:"I help teams build AI systems that work beyond the demo."}),p("div",{className:"mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-semibold",children:[s("a",{href:"https://cal.com/samrat-jha-akdwhz",target:"_blank",rel:"noopener noreferrer",className:"text-white underline decoration-[#915eff] decoration-2 underline-offset-8 hover:text-[#dfd9ff]",children:"Book a meeting"}),s(R,{to:"/blog/",className:"text-[#dfd9ff] hover:text-white",children:"Latest writing →"})]})]}),p("div",{className:"max-w-2xl text-[16px] leading-8 sm:text-[18px]",children:[s("p",{className:"text-[#dfd9ff]",children:"I am a Senior AI Engineer at NVIDIA. I build the systems that make AI practical across the company: fast, economical, and dependable at scale."}),s("p",{className:"mt-5 text-secondary",children:"Before NVIDIA, I spent four years at AWS Outposts building hybrid cloud infrastructure for low-latency, mission-critical workloads. I designed globally deployed distributed systems where reliability, privacy, and operational discipline were essential. I now apply that foundation to model routers, evaluation platforms, ambient agents, and software factories."})]})]})}),s("div",{className:"w-full max-w-[520px] justify-self-center min-[1360px]:max-w-none",children:s(vr,{})})]})}),an="/personalLogo.png",xr=()=>{const[e,t]=y.useState(""),[n,a]=y.useState(!1),[r,i]=y.useState(!1);return y.useEffect(()=>{const o=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s("nav",{className:`${C.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${r?"bg-primary":"bg-transparent"}
    `,children:p("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[p(R,{to:"/",className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[s("img",{src:an,alt:"logo",className:"w-9 h-9 object-contain"}),s("p",{className:"text-white text-[18px] font-semibold cursor-pointer",children:"Samrat Jha"})]}),s("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:ve.map(o=>s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-normal cursor-pointer`,onClick:()=>t(o.title),children:o.isExternal?o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title}):s("a",{href:`#${o.id}`,children:o.title})},o.id))}),p("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[s("img",{src:n?tn:en,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>a(!n)}),s("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:s("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:ve.map(o=>s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-normal cursor-pointer text-[16px]`,onClick:()=>{t(o.title),a(!n)},children:o.isExternal?o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title}):s("a",{href:`#${o.id}`,children:o.title})},o.id))})})]})]})})},_t=(e,t,n,a)=>{e.style.transition=`${t} ${n}ms ${a}`},H=(e,t,n)=>Math.min(Math.max(e,t),n);class Pr{constructor(t,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=o=>{const{width:l,height:c}=o,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=o=>{const l=this.calculateGlareSize(o);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(o,l,c,d)=>{this.updateAngle(o,l.glareReverse),this.updateOpacity(o,l,c,d)},this.updateAngle=(o,l)=>{const{xPercentage:c,yPercentage:d}=o,u=180/Math.PI,f=c?Math.atan2(d,-c)*u:0;this.glareAngle=f-(l?180:0)},this.updateOpacity=(o,l,c,d)=>{const{xPercentage:u,yPercentage:f}=o,{glarePosition:h,glareReverse:m,glareMaxOpacity:g}=l,w=c?-1:1,b=d?-1:1,v=m?-1:1;let A=0;switch(h){case"top":A=-u*w*v;break;case"right":A=f*b*v;break;case"bottom":case void 0:A=u*w*v;break;case"left":A=-f*b*v;break;case"all":A=Math.hypot(u,f)}const j=H(A,0,100);this.glareOpacity=j*g/100},this.render=o=>{const{glareColor:l}=o;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const a={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(t),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,a),Object.assign(this.glareEl.style,i)}}class Er{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,n)=>{this.updateTilt(t,n),this.updateTiltManualInput(t,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(t,n)=>{const{xPercentage:a,yPercentage:r}=t,{tiltMaxAngleX:i,tiltMaxAngleY:o}=n;this.tiltAngleX=a*i/100,this.tiltAngleY=r*o/100*-1},this.updateTiltManualInput=(t,n)=>{const{tiltAngleXManual:a,tiltAngleYManual:r,tiltMaxAngleX:i,tiltMaxAngleY:o}=n;(a!==null||r!==null)&&(this.tiltAngleX=a!==null?a:0,this.tiltAngleY=r!==null?r:0,t.xPercentage=100*this.tiltAngleX/i,t.yPercentage=100*this.tiltAngleY/o)},this.updateTiltReverse=t=>{const n=t.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:n}=t;this.tiltAngleX=H(this.tiltAngleX,-90,90),this.tiltAngleY=H(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:n,tiltMaxAngleY:a}=t;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/a*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const Tr={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class rn extends y.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const t=DeviceOrientationEvent.requestPermission;typeof t=="function"?await t()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n({event:t})},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n({event:t}),this.props.reset){const a=new CustomEvent("autoreset");this.onMove(a)}},this.processInput=t=>{const{scale:n}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=n;break;case"autoreset":{const{tiltAngleXInitial:a,tiltAngleYInitial:r,tiltMaxAngleX:i,tiltMaxAngleY:o}=this.props,l=r/o*100;this.wrapperEl.clientPosition.xPercentage=H(a/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=H(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:a}=this.props,r=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/n*100,this.wrapperEl.clientPosition.yPercentage=r/a*100,this.wrapperEl.clientPosition.xPercentage=H(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=H(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:n,flipVertically:a,flipHorizontally:r}=this.props;t!=="autoreset"&&t!=="deviceorientation"&&t!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,a,r)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let n,a;if(t){const{x:r,y:i}=this.wrapperEl.clientPosition;n=i/window.innerHeight*200-100,a=r/window.innerWidth*200-100}else{const{size:{width:r,height:i,left:o,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;n=(d-l)/i*200-100,a=(c-o)/r*200-100}this.wrapperEl.clientPosition.xPercentage=H(n,-100,100),this.wrapperEl.clientPosition.yPercentage=H(a,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:n}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Er,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const t=new CustomEvent("autoreset");this.mainLoop(t);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:n}=this.props;t&&(this.glare=new Pr(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:n}=this.props;if(!n)return;let a=0,r=0;this.glare&&(a=this.glare.glareAngle,r=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:a,glareOpacity:r,event:t})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:n}=this.props;_t(this.wrapperEl.node,"all",t,n),this.glare&&_t(this.glare.glareEl,"opacity",t,n)}render(){const{children:t,className:n,style:a}=this.props;return s("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:a,children:t})}}rn.defaultProps=Tr;const dt=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),ut=(e,t,n,a)=>({hidden:{x:e==="left"?100:e==="right"?-100:0,y:e==="up"?100:e==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:n,duration:a,ease:"easeOut"}}}),Rt=(e,t,n,a)=>({hidden:{x:e==="left"?"-100%":e==="right"?"100%":0,y:e==="up"||e==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:n,duration:a,ease:"easeOut"}}}),Sr=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),ce=(e,t)=>function(){return p(W.section,{variants:Sr(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`${C.padding} max-w-7xl mx-auto relative z-0`,children:[s("span",{className:"hash-span",id:t,children:" "}),s(e,{})]})},Ir=()=>s("ul",{className:"flex flex-wrap gap-2.5 max-w-[760px]",children:yr.map(e=>s("li",{className:"text-[15px] leading-none text-slate-300 px-4 py-2.5 border border-[#915eff]/[0.28] rounded-full bg-[#915eff]/[0.06] whitespace-nowrap",children:e.name},e.name))}),kr=ce(Ir,"");var Pe={},on={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=r(i,a(l)))}return i}function a(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=r(o,l));return o}function r(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(on);var sn=on.exports;Pe.__esModule=!0;Pe.default=void 0;var Cr=ht(y),U=ht(it),Or=ht(sn);function ht(e){return e&&e.__esModule?e:{default:e}}const ln=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:a="#FFF",children:r})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),Cr.default.createElement("div",{className:(0,Or.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},r));ln.propTypes={children:U.default.oneOfType([U.default.arrayOf(U.default.node),U.default.node]).isRequired,className:U.default.string,animate:U.default.bool,layout:U.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:U.default.string};var Nr=ln;Pe.default=Nr;var Ee={};function et(){return et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},et.apply(this,arguments)}function Mr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,tt(e,t)}function tt(e,t){return tt=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},tt(e,t)}function _r(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var nt=new Map,fe=new WeakMap,Dt=0,cn=void 0;function Rr(e){cn=e}function Dr(e){return e?(fe.has(e)||(Dt+=1,fe.set(e,Dt.toString())),fe.get(e)):"0"}function jr(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Dr(e.root):e[t])}).toString()}function Lr(e){var t=jr(e),n=nt.get(t);if(!n){var a=new Map,r,i=new IntersectionObserver(function(o){o.forEach(function(l){var c,d=l.isIntersecting&&r.some(function(u){return l.intersectionRatio>=u});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=d),(c=a.get(l.target))==null||c.forEach(function(u){u(d,l)})})},e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:a},nt.set(t,n)}return n}function pt(e,t,n,a){if(n===void 0&&(n={}),a===void 0&&(a=cn),typeof window.IntersectionObserver>"u"&&a!==void 0){var r=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var i=Lr(n),o=i.id,l=i.observer,c=i.elements,d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),nt.delete(o))}}var zr=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function jt(e){return typeof e.children!="function"}var Ae=function(e){Mr(t,e);function t(a){var r;return r=e.call(this,a)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(i){r.node&&(r.unobserve(),!i&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=i||null,r.observeNode()},r.handleChange=function(i,o){i&&r.props.triggerOnce&&r.unobserve(),jt(r.props)||r.setState({inView:i,entry:o}),r.props.onChange&&r.props.onChange(i,o)},r.state={inView:!!a.initialInView,entry:void 0},r}var n=t.prototype;return n.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,i=r.threshold,o=r.root,l=r.rootMargin,c=r.trackVisibility,d=r.delay,u=r.fallbackInView;this._unobserveCb=pt(this.node,this.handleChange,{threshold:i,root:o,rootMargin:l,trackVisibility:c,delay:d},u)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!jt(this.props)){var r=this.state,i=r.inView,o=r.entry;return this.props.children({inView:i,entry:o,ref:this.handleNode})}var l=this.props,c=l.children,d=l.as,u=_r(l,zr);return y.createElement(d||"div",et({ref:this.handleNode},u),c)},t}(y.Component);Ae.displayName="InView";Ae.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function Br(e){var t=e===void 0?{}:e,n=t.threshold,a=t.delay,r=t.trackVisibility,i=t.rootMargin,o=t.root,l=t.triggerOnce,c=t.skip,d=t.initialInView,u=t.fallbackInView,f=y.useRef(),h=y.useState({inView:!!d}),m=h[0],g=h[1],w=y.useCallback(function(v){f.current!==void 0&&(f.current(),f.current=void 0),!c&&v&&(f.current=pt(v,function(A,j){g({inView:A,entry:j}),j.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)},{root:o,rootMargin:i,threshold:n,trackVisibility:r,delay:a},u))},[Array.isArray(n)?n.toString():n,o,i,l,c,r,u,a]);y.useEffect(function(){!f.current&&m.entry&&!l&&!c&&g({inView:!!d})});var b=[w,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const Hr=Object.freeze(Object.defineProperty({__proto__:null,InView:Ae,default:Ae,defaultFallbackInView:Rr,observe:pt,useInView:Br},Symbol.toStringTag,{value:"Module"})),Fr=Yt(Hr);Ee.__esModule=!0;Ee.default=void 0;var G=mt(y),x=mt(it),ge=mt(sn),Wr=Fr;function mt(e){return e&&e.__esModule?e:{default:e}}const dn=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:a=null,date:r="",dateClassName:i="",icon:o=null,iconClassName:l="",iconOnClick:c=null,onTimelineElementClick:d=null,iconStyle:u=null,id:f="",position:h="",style:m=null,textClassName:g="",intersectionObserverProps:w={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1})=>G.default.createElement(Wr.InView,w,({inView:v,ref:A})=>G.default.createElement("div",{ref:A,id:f,className:(0,ge.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":h==="left","vertical-timeline-element--right":h==="right","vertical-timeline-element--no-children":e===""}),style:m},G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{style:u,onClick:c,className:(0,ge.default)(l,"vertical-timeline-element-icon",{"bounce-in":v||b,"is-hidden":!(v||b)})},o),G.default.createElement("div",{style:a,onClick:d,className:(0,ge.default)(g,"vertical-timeline-element-content",{"bounce-in":v||b,"is-hidden":!(v||b)})},G.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,G.default.createElement("span",{className:(0,ge.default)(i,"vertical-timeline-element-date")},r)))));dn.propTypes={children:x.default.oneOfType([x.default.arrayOf(x.default.node),x.default.node]),className:x.default.string,contentArrowStyle:x.default.shape({}),contentStyle:x.default.shape({}),date:x.default.node,dateClassName:x.default.string,icon:x.default.element,iconClassName:x.default.string,iconStyle:x.default.shape({}),iconOnClick:x.default.func,onTimelineElementClick:x.default.func,id:x.default.string,position:x.default.string,style:x.default.shape({}),textClassName:x.default.string,visible:x.default.bool,intersectionObserverProps:x.default.shape({root:x.default.object,rootMargin:x.default.string,threshold:x.default.number,triggerOnce:x.default.bool})};var Ur=dn;Ee.default=Ur;var un={VerticalTimeline:Pe.default,VerticalTimelineElement:Ee.default};const Gr={NVIDIA:"https://www.nvidia.com/",AWS:"https://aws.amazon.com/",Appian:"https://appian.com/",Boeing:"https://www.boeing.com/"},Vr=({experience:e})=>{const t=Gr[e.company_name];return p(un.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:s("div",{className:"flex justify-center items-center w-full h-full",children:s("img",{src:e.icon,alt:e.company_name,width:36,height:36,loading:"lazy",className:"w-[60%] h-[60%] object-contain"})}),children:[p("div",{children:[s("h3",{className:"text-white text-[24px] font-semibold",children:e.title}),s("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t?s("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#915eff] transition-colors",children:e.company_name}):e.company_name})]}),s("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,a)=>s("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${a}`))})]})},Yr=()=>p($,{children:[p(W.div,{variants:dt(),children:[s("p",{className:C.sectionSubText,children:"What I have done so far"}),s("h2",{className:C.sectionHeadText,children:"Work Experience"})]}),s("div",{className:"mt-20 flex flex-col",children:s(un.VerticalTimeline,{children:br.map((e,t)=>s(Vr,{experience:e},t))})})]}),Jr=ce(Yr,"work");var Qr=function(t,n,a){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof n=="function"&&(a=n,n={}),n=n||{},a=a||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async="async"in n?!!n.async:!0,i.src=t,n.attrs&&qr(i,n.attrs),n.text&&(i.text=""+n.text);var o="onload"in i?Lt:Xr;o(i,a),i.onload||Lt(i,a),r.appendChild(i)};function qr(e,t){for(var n in t)e.setAttribute(n,t[n])}function Lt(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Xr(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Zr=function(t){return Kr(t)&&!$r(t)};function Kr(e){return!!e&&typeof e=="object"}function $r(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||no(e)}var eo=typeof Symbol=="function"&&Symbol.for,to=eo?Symbol.for("react.element"):60103;function no(e){return e.$$typeof===to}function ao(e){return Array.isArray(e)?[]:{}}function le(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ee(ao(e),e,t):e}function ro(e,t,n){return e.concat(t).map(function(a){return le(a,n)})}function oo(e,t){if(!t.customMerge)return ee;var n=t.customMerge(e);return typeof n=="function"?n:ee}function so(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function zt(e){return Object.keys(e).concat(so(e))}function hn(e,t){try{return t in e}catch{return!1}}function io(e,t){return hn(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function lo(e,t,n){var a={};return n.isMergeableObject(e)&&zt(e).forEach(function(r){a[r]=le(e[r],n)}),zt(t).forEach(function(r){io(e,r)||(hn(e,r)&&n.isMergeableObject(t[r])?a[r]=oo(r,n)(e[r],t[r],n):a[r]=le(t[r],n))}),a}function ee(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||ro,n.isMergeableObject=n.isMergeableObject||Zr,n.cloneUnlessOtherwiseSpecified=le;var a=Array.isArray(t),r=Array.isArray(e),i=a===r;return i?a?n.arrayMerge(e,t,n):lo(e,t,n):le(t,n)}ee.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,r){return ee(a,r,n)},{})};var co=ee,pn=co,uo=Object.create,Te=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,po=Object.getOwnPropertyNames,mo=Object.getPrototypeOf,fo=Object.prototype.hasOwnProperty,go=(e,t)=>{for(var n in t)Te(e,n,{get:t[n],enumerable:!0})},mn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of po(t))!fo.call(e,r)&&r!==n&&Te(e,r,{get:()=>t[r],enumerable:!(a=ho(t,r))||a.enumerable});return e},ft=(e,t,n)=>(n=e!=null?uo(mo(e)):{},mn(t||!e||!e.__esModule?Te(n,"default",{value:e,enumerable:!0}):n,e)),yo=e=>mn(Te({},"__esModule",{value:!0}),e),fn={};go(fn,{callPlayer:()=>_o,getConfig:()=>No,getSDK:()=>Oo,isBlobUrl:()=>Do,isMediaStream:()=>Ro,lazy:()=>Ao,omit:()=>Mo,parseEndTime:()=>Io,parseStartTime:()=>So,queryString:()=>Co,randomString:()=>ko,supportsWebKitPresentationMode:()=>jo});var Se=yo(fn),bo=ft(y),wo=ft(Qr),vo=ft(pn);const Ao=e=>bo.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),xo=/[?&#](?:start|t)=([0-9hms]+)/,Po=/[?&#]end=([0-9hms]+)/,at=/(\d+)(h|m|s)/g,Eo=/^\d+$/;function gn(e,t){if(e instanceof Array)return;const n=e.match(t);if(n){const a=n[1];if(a.match(at))return To(a);if(Eo.test(a))return parseInt(a)}}function To(e){let t=0,n=at.exec(e);for(;n!==null;){const[,a,r]=n;r==="h"&&(t+=parseInt(a,10)*60*60),r==="m"&&(t+=parseInt(a,10)*60),r==="s"&&(t+=parseInt(a,10)),n=at.exec(e)}return t}function So(e){return gn(e,xo)}function Io(e){return gn(e,Po)}function ko(){return Math.random().toString(36).substr(2,5)}function Co(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function Ge(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const J={},Oo=function(t,n,a=null,r=()=>!0,i=wo.default){const o=Ge(n);return o&&r(o)?Promise.resolve(o):new Promise((l,c)=>{if(J[t]){J[t].push({resolve:l,reject:c});return}J[t]=[{resolve:l,reject:c}];const d=u=>{J[t].forEach(f=>f.resolve(u))};if(a){const u=window[a];window[a]=function(){u&&u(),d(Ge(n))}}i(t,u=>{u?(J[t].forEach(f=>f.reject(u)),J[t]=null):a||d(Ge(n))})})};function No(e,t){return(0,vo.default)(t.config,e.config)}function Mo(e,...t){const n=[].concat(...t),a={},r=Object.keys(e);for(const i of r)n.indexOf(i)===-1&&(a[i]=e[i]);return a}function _o(e,...t){if(!this.player||!this.player[e]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[e](...t)}function Ro(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Do(e){return/^blob:/.test(e)}function jo(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var gt=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,zo=Object.getOwnPropertyNames,Bo=Object.prototype.hasOwnProperty,Ho=(e,t)=>{for(var n in t)gt(e,n,{get:t[n],enumerable:!0})},Fo=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of zo(t))!Bo.call(e,r)&&r!==n&&gt(e,r,{get:()=>t[r],enumerable:!(a=Lo(t,r))||a.enumerable});return e},Wo=e=>Fo(gt({},"__esModule",{value:!0}),e),yn={};Ho(yn,{AUDIO_EXTENSIONS:()=>yt,DASH_EXTENSIONS:()=>Nn,FLV_EXTENSIONS:()=>Mn,HLS_EXTENSIONS:()=>wt,MATCH_URL_DAILYMOTION:()=>In,MATCH_URL_FACEBOOK:()=>An,MATCH_URL_FACEBOOK_WATCH:()=>xn,MATCH_URL_KALTURA:()=>On,MATCH_URL_MIXCLOUD:()=>kn,MATCH_URL_MUX:()=>vn,MATCH_URL_SOUNDCLOUD:()=>bn,MATCH_URL_STREAMABLE:()=>Pn,MATCH_URL_TWITCH_CHANNEL:()=>Sn,MATCH_URL_TWITCH_VIDEO:()=>Tn,MATCH_URL_VIDYARD:()=>Cn,MATCH_URL_VIMEO:()=>wn,MATCH_URL_WISTIA:()=>En,MATCH_URL_YOUTUBE:()=>rt,VIDEO_EXTENSIONS:()=>bt,canPlay:()=>Go});var Uo=Wo(yn),Bt=Se;const rt=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,bn=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,wn=/vimeo\.com\/(?!progressive_redirect).+/,vn=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,An=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,xn=/^https?:\/\/fb\.watch\/.+$/,Pn=/streamable\.com\/([a-z0-9]+)$/,En=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Tn=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Sn=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,In=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,kn=/mixcloud\.com\/([^/]+\/[^/]+)/,Cn=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,On=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,yt=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,bt=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,wt=/\.(m3u8)($|\?)/i,Nn=/\.(mpd)($|\?)/i,Mn=/\.(flv)($|\?)/i,ot=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&ot(t)||ot(t.src))return!0;return!1}return(0,Bt.isMediaStream)(e)||(0,Bt.isBlobUrl)(e)?!0:yt.test(e)||bt.test(e)||wt.test(e)||Nn.test(e)||Mn.test(e)},Go={youtube:e=>e instanceof Array?e.every(t=>rt.test(t)):rt.test(e),soundcloud:e=>bn.test(e)&&!yt.test(e),vimeo:e=>wn.test(e)&&!bt.test(e)&&!wt.test(e),mux:e=>vn.test(e),facebook:e=>An.test(e)||xn.test(e),streamable:e=>Pn.test(e),wistia:e=>En.test(e),twitch:e=>Tn.test(e)||Sn.test(e),dailymotion:e=>In.test(e),mixcloud:e=>kn.test(e),vidyard:e=>Cn.test(e),kaltura:e=>On.test(e),file:ot};var vt=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,Yo=Object.getOwnPropertyNames,Jo=Object.prototype.hasOwnProperty,Qo=(e,t)=>{for(var n in t)vt(e,n,{get:t[n],enumerable:!0})},qo=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Yo(t))!Jo.call(e,r)&&r!==n&&vt(e,r,{get:()=>t[r],enumerable:!(a=Vo(t,r))||a.enumerable});return e},Xo=e=>qo(vt({},"__esModule",{value:!0}),e),_n={};Qo(_n,{default:()=>Ko});var Zo=Xo(_n),_=Se,N=Uo,Ko=[{key:"youtube",name:"YouTube",canPlay:N.canPlay.youtube,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./YouTube-99762448.js").then(e=>e.Y),["assets/YouTube-99762448.js","assets/three-f4f913dc.js"]))},{key:"soundcloud",name:"SoundCloud",canPlay:N.canPlay.soundcloud,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./SoundCloud-e6ffae9d.js").then(e=>e.S),["assets/SoundCloud-e6ffae9d.js","assets/three-f4f913dc.js"]))},{key:"vimeo",name:"Vimeo",canPlay:N.canPlay.vimeo,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Vimeo-93c34240.js").then(e=>e.V),["assets/Vimeo-93c34240.js","assets/three-f4f913dc.js"]))},{key:"mux",name:"Mux",canPlay:N.canPlay.mux,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Mux-7089c305.js").then(e=>e.M),["assets/Mux-7089c305.js","assets/three-f4f913dc.js"]))},{key:"facebook",name:"Facebook",canPlay:N.canPlay.facebook,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Facebook-084ce85b.js").then(e=>e.F),["assets/Facebook-084ce85b.js","assets/three-f4f913dc.js"]))},{key:"streamable",name:"Streamable",canPlay:N.canPlay.streamable,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Streamable-12742e97.js").then(e=>e.S),["assets/Streamable-12742e97.js","assets/three-f4f913dc.js"]))},{key:"wistia",name:"Wistia",canPlay:N.canPlay.wistia,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Wistia-85e3d3e2.js").then(e=>e.W),["assets/Wistia-85e3d3e2.js","assets/three-f4f913dc.js"]))},{key:"twitch",name:"Twitch",canPlay:N.canPlay.twitch,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Twitch-019dbaee.js").then(e=>e.T),["assets/Twitch-019dbaee.js","assets/three-f4f913dc.js"]))},{key:"dailymotion",name:"DailyMotion",canPlay:N.canPlay.dailymotion,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./DailyMotion-ae7e2e36.js").then(e=>e.D),["assets/DailyMotion-ae7e2e36.js","assets/three-f4f913dc.js"]))},{key:"mixcloud",name:"Mixcloud",canPlay:N.canPlay.mixcloud,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Mixcloud-c46db490.js").then(e=>e.M),["assets/Mixcloud-c46db490.js","assets/three-f4f913dc.js"]))},{key:"vidyard",name:"Vidyard",canPlay:N.canPlay.vidyard,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Vidyard-8e80d72f.js").then(e=>e.V),["assets/Vidyard-8e80d72f.js","assets/three-f4f913dc.js"]))},{key:"kaltura",name:"Kaltura",canPlay:N.canPlay.kaltura,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Kaltura-a79ce761.js").then(e=>e.K),["assets/Kaltura-a79ce761.js","assets/three-f4f913dc.js"]))},{key:"file",name:"FilePlayer",canPlay:N.canPlay.file,canEnablePIP:e=>N.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,_.supportsWebKitPresentationMode)())&&!N.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,_.lazy)(()=>P(()=>import("./FilePlayer-b2534667.js").then(e=>e.F),["assets/FilePlayer-b2534667.js","assets/three-f4f913dc.js"]))}],Ht=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function $o(e,t){return!!(e===t||Ht(e)&&Ht(t))}function es(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!$o(e[n],t[n]))return!1;return!0}function ts(e,t){t===void 0&&(t=es);var n,a=[],r,i=!1;function o(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return i&&n===this&&t(l,a)||(r=e.apply(this,l),i=!0,n=this,a=l),r}return o}const ns=Object.freeze(Object.defineProperty({__proto__:null,default:ts},Symbol.toStringTag,{value:"Module"})),as=Yt(ns);var rs=Object.create,Ie=Object.defineProperty,os=Object.getOwnPropertyDescriptor,ss=Object.getOwnPropertyNames,is=Object.getPrototypeOf,ls=Object.prototype.hasOwnProperty,cs=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},Rn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ss(t))!ls.call(e,r)&&r!==n&&Ie(e,r,{get:()=>t[r],enumerable:!(a=os(t,r))||a.enumerable});return e},ds=(e,t,n)=>(n=e!=null?rs(is(e)):{},Rn(t||!e||!e.__esModule?Ie(n,"default",{value:e,enumerable:!0}):n,e)),us=e=>Rn(Ie({},"__esModule",{value:!0}),e),Dn={};cs(Dn,{defaultProps:()=>ms,propTypes:()=>ps});var jn=us(Dn),hs=ds(it);const{string:I,bool:M,number:Q,array:Ve,oneOfType:re,shape:D,object:O,func:S,node:Ft}=hs.default,ps={url:re([I,Ve,O]),playing:M,loop:M,controls:M,volume:Q,muted:M,playbackRate:Q,width:re([I,Q]),height:re([I,Q]),style:O,progressInterval:Q,playsinline:M,pip:M,stopOnUnmount:M,light:re([M,I,O]),playIcon:Ft,previewTabIndex:Q,previewAriaLabel:I,fallback:Ft,oEmbedUrl:I,wrapper:re([I,S,D({render:S.isRequired})]),config:D({soundcloud:D({options:O}),youtube:D({playerVars:O,embedOptions:O,onUnstarted:S}),facebook:D({appId:I,version:I,playerId:I,attributes:O}),dailymotion:D({params:O}),vimeo:D({playerOptions:O,title:I}),mux:D({attributes:O,version:I}),file:D({attributes:O,tracks:Ve,forceVideo:M,forceAudio:M,forceHLS:M,forceSafariHLS:M,forceDisableHls:M,forceDASH:M,forceFLV:M,hlsOptions:O,hlsVersion:I,dashVersion:I,flvVersion:I}),wistia:D({options:O,playerId:I,customControls:Ve}),mixcloud:D({options:O}),twitch:D({options:O,playerId:I}),vidyard:D({options:O})}),onReady:S,onStart:S,onPlay:S,onPause:S,onBuffer:S,onBufferEnd:S,onEnded:S,onError:S,onDuration:S,onSeek:S,onPlaybackRateChange:S,onPlaybackQualityChange:S,onProgress:S,onClickPreview:S,onEnablePIP:S,onDisablePIP:S},k=()=>{},ms={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k};var fs=Object.create,de=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,ys=Object.getOwnPropertyNames,bs=Object.getPrototypeOf,ws=Object.prototype.hasOwnProperty,vs=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,As=(e,t)=>{for(var n in t)de(e,n,{get:t[n],enumerable:!0})},Ln=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ys(t))!ws.call(e,r)&&r!==n&&de(e,r,{get:()=>t[r],enumerable:!(a=gs(t,r))||a.enumerable});return e},zn=(e,t,n)=>(n=e!=null?fs(bs(e)):{},Ln(t||!e||!e.__esModule?de(n,"default",{value:e,enumerable:!0}):n,e)),xs=e=>Ln(de({},"__esModule",{value:!0}),e),T=(e,t,n)=>(vs(e,typeof t!="symbol"?t+"":t,n),n),Bn={};As(Bn,{default:()=>ke});var Ps=xs(Bn),Wt=zn(y),Es=zn(lt),Hn=jn,Ts=Se;const Ss=5e3;class ke extends Wt.Component{constructor(){super(...arguments),T(this,"mounted",!1),T(this,"isReady",!1),T(this,"isPlaying",!1),T(this,"isLoading",!0),T(this,"loadOnReady",null),T(this,"startOnPlay",!0),T(this,"seekOnPlay",null),T(this,"onDurationCalled",!1),T(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),T(this,"getInternalPlayer",t=>this.player?this.player[t]:null),T(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,n=this.getSecondsLoaded(),a=this.getDuration();if(a){const r={playedSeconds:t,played:t/a};n!==null&&(r.loadedSeconds=n,r.loaded=n/a),(r.playedSeconds!==this.prevPlayed||r.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),T(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:n,volume:a,muted:r}=this.props;t(),!r&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),T(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:n,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),T(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),T(this,"handleEnded",()=>{const{activePlayer:t,loop:n,onEnded:a}=this.props;t.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,a())}),T(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),T(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),T(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:n,playing:a,volume:r,muted:i,playbackRate:o,pip:l,loop:c,activePlayer:d,disableDeferredLoading:u}=this.props;if(!(0,Es.default)(t.url,n)){if(this.isLoading&&!d.forceLoad&&!u&&!(0,Ts.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==r&&r!==null&&this.player.setVolume(r),t.muted!==i&&(i?this.player.mute():(this.player.unmute(),r!==null&&setTimeout(()=>this.player.setVolume(r)))),t.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),t.loop!==c&&this.player.setLoop&&this.player.setLoop(c)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,n,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ss));return}if(n?n==="fraction":t>0&&t<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?Wt.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}T(ke,"displayName","Player");T(ke,"propTypes",Hn.propTypes);T(ke,"defaultProps",Hn.defaultProps);var Is=Object.create,ue=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Cs=Object.getOwnPropertyNames,Os=Object.getPrototypeOf,Ns=Object.prototype.hasOwnProperty,Ms=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_s=(e,t)=>{for(var n in t)ue(e,n,{get:t[n],enumerable:!0})},Fn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Cs(t))!Ns.call(e,r)&&r!==n&&ue(e,r,{get:()=>t[r],enumerable:!(a=ks(t,r))||a.enumerable});return e},he=(e,t,n)=>(n=e!=null?Is(Os(e)):{},Fn(t||!e||!e.__esModule?ue(n,"default",{value:e,enumerable:!0}):n,e)),Rs=e=>Fn(ue({},"__esModule",{value:!0}),e),E=(e,t,n)=>(Ms(e,typeof t!="symbol"?t+"":t,n),n),Wn={};_s(Wn,{createReactPlayer:()=>Us});var Ds=Rs(Wn),q=he(y),js=he(pn),Ye=he(as),Ut=he(lt),ie=jn,Un=Se,Ls=he(Ps);const zs=(0,Un.lazy)(()=>P(()=>import("./Preview-d2ad8b61.js").then(e=>e.P),["assets/Preview-d2ad8b61.js","assets/three-f4f913dc.js"])),Bs=typeof window<"u"&&window.document&&typeof document<"u",Hs=typeof He<"u"&&He.window&&He.window.document,Fs=Object.keys(ie.propTypes),Ws=Bs||Hs?q.Suspense:()=>null,oe=[],Us=(e,t)=>{var n;return n=class extends q.Component{constructor(){super(...arguments),E(this,"state",{showPreview:!!this.props.light}),E(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),E(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),E(this,"showPreview",()=>{this.setState({showPreview:!0})}),E(this,"getDuration",()=>this.player?this.player.getDuration():null),E(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),E(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),E(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),E(this,"seekTo",(a,r,i)=>{if(!this.player)return null;this.player.seekTo(a,r,i)}),E(this,"handleReady",()=>{this.props.onReady(this)}),E(this,"getActivePlayer",(0,Ye.default)(a=>{for(const r of[...oe,...e])if(r.canPlay(a))return r;return t||null})),E(this,"getConfig",(0,Ye.default)((a,r)=>{const{config:i}=this.props;return js.default.all([ie.defaultProps.config,ie.defaultProps.config[r]||{},i,i[r]||{}])})),E(this,"getAttributes",(0,Ye.default)(a=>(0,Un.omit)(this.props,Fs))),E(this,"renderActivePlayer",a=>{if(!a)return null;const r=this.getActivePlayer(a);if(!r)return null;const i=this.getConfig(a,r.key);return q.default.createElement(Ls.default,{...this.props,key:r.key,ref:this.references.player,config:i,activePlayer:r.lazyPlayer||r,onReady:this.handleReady})})}shouldComponentUpdate(a,r){return!(0,Ut.default)(this.props,a)||!(0,Ut.default)(this.state,r)}componentDidUpdate(a){const{light:r}=this.props;!a.light&&r&&this.setState({showPreview:!0}),a.light&&!r&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:r,playIcon:i,previewTabIndex:o,oEmbedUrl:l,previewAriaLabel:c}=this.props;return q.default.createElement(zs,{url:a,light:r,playIcon:i,previewTabIndex:o,previewAriaLabel:c,oEmbedUrl:l,onClick:this.handleClickPreview})}render(){const{url:a,style:r,width:i,height:o,fallback:l,wrapper:c}=this.props,{showPreview:d}=this.state,u=this.getAttributes(a),f=typeof c=="string"?this.references.wrapper:void 0;return q.default.createElement(c,{ref:f,style:{...r,width:i,height:o},...u},q.default.createElement(Ws,{fallback:l},d?this.renderPreview(a):this.renderActivePlayer(a)))}},E(n,"displayName","ReactPlayer"),E(n,"propTypes",ie.propTypes),E(n,"defaultProps",ie.defaultProps),E(n,"addCustomPlayer",a=>{oe.push(a)}),E(n,"removeCustomPlayers",()=>{oe.length=0}),E(n,"canPlay",a=>{for(const r of[...oe,...e])if(r.canPlay(a))return!0;return!1}),E(n,"canEnablePIP",a=>{for(const r of[...oe,...e])if(r.canEnablePIP&&r.canEnablePIP(a))return!0;return!1}),n};var Gs=Object.create,Ce=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Ys=Object.getOwnPropertyNames,Js=Object.getPrototypeOf,Qs=Object.prototype.hasOwnProperty,qs=(e,t)=>{for(var n in t)Ce(e,n,{get:t[n],enumerable:!0})},Gn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ys(t))!Qs.call(e,r)&&r!==n&&Ce(e,r,{get:()=>t[r],enumerable:!(a=Vs(t,r))||a.enumerable});return e},Xs=(e,t,n)=>(n=e!=null?Gs(Js(e)):{},Gn(t||!e||!e.__esModule?Ce(n,"default",{value:e,enumerable:!0}):n,e)),Zs=e=>Gn(Ce({},"__esModule",{value:!0}),e),Vn={};qs(Vn,{default:()=>ti});var Ks=Zs(Vn),st=Xs(Zo),$s=Ds;const ei=st.default[st.default.length-1];var ti=(0,$s.createReactPlayer)(st.default,ei);const ni=xe(Ks);function ai(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n=0;const a=[];let r;for(;(r=t.exec(e))!==null;)a.push(e.slice(n,r.index)),a.push(r[1]),a.push(r[2]),n=r.index+r[0].length;return a.push(e.slice(n)),a.map((i,o)=>{if(o%3===0)return i;if(o%3===1){const l=a[o],c=a[o+1];return s("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:l},o)}})}const ri=({name:e,description:t,embedId:n})=>p("div",{className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[s("div",{className:"m-3 max-w-2xl",children:s("div",{className:"relative aspect-video",children:s(ni,{url:`https://youtube.com/watch?v=${n}`,className:"absolute left-0 top-0",width:"100%",height:"100%",controls:!0})})}),s("h3",{className:"text-white font-semibold text-[24px]",children:e}),s("p",{className:"mt-2 text-secondary text-[14px]",children:ai(t)})]}),oi=()=>p($,{children:[p(W.div,{variants:dt(),children:[s("p",{className:C.sectionSubText,children:"My online presence"}),s("h2",{className:C.sectionHeadText,children:"Videos"})]}),s("div",{className:"w-full flex",children:p(W.p,{variants:ut("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]",children:["Below are my apperances on"," ",s("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",className:"underline text-[#915eff] hover:text-blue-800 visited:text-purple-600",children:"Youtube"})," ","channels covering a wide variety of topics. Watch them to learn about me, my thoughts and my technical skills"]})}),s("div",{className:"mt-20 flex flex-wrap gap-7",children:wr.map((e,t)=>s(ri,{...e},`project-${t}`))})]}),si=ce(oi,"media"),ii=({index:e,name:t,description:n,image:a,source_code_link:r,demo_link:i})=>s(W.div,{variants:ut("up","spring",e*.5,.75),id:`project-${e+1}`,"data-rack-index":e,className:"scroll-mt-32",children:p(rn,{options:{max:45,scale:1,speed:450},className:"project-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[p("div",{className:"relative w-full h-[230px]",children:[s("a",{href:i??r,target:"_blank",rel:"noopener noreferrer",className:"cursor-pointer",children:s("img",{src:a,alt:t,width:360,height:230,loading:"lazy",className:"w-full h-full object-cover rounded-2xl"})}),s("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none",children:s("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto",children:s("img",{src:Va,alt:"github",width:20,height:20,className:"w-1/2 h-1/2 object-contain"})})})]}),p("div",{className:"mt-5",children:[s("h3",{className:"text-white font-semibold text-[24px]",children:t}),s("p",{className:"mt-2 text-secondary text-[14px]",children:n})]})]})}),li=()=>p($,{children:[p(W.div,{variants:dt(),children:[s("p",{className:C.sectionSubText,children:"My work"}),s("h2",{className:C.sectionHeadText,children:"Portfolio."})]}),s("div",{className:"w-full flex",children:s(W.p,{variants:ut("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]",children:"A selection of projects I've built—from AI-powered tools to creative web experiences. Each includes live demos and source code."})}),s("div",{className:"mt-20 flex flex-wrap gap-7",children:nn.map((e,t)=>s(ii,{index:t,...e},`project-${t}`))})]}),ci=ce(li,"projects"),di="93d0e20c-3f99-44c1-98ab-0b1d8db713c4",ui=()=>{const[e,t]=y.useState({name:"",email:"",message:""}),[n,a]=y.useState(!1),[r,i]=y.useState(!1),o=c=>{const{name:d,value:u}=c.target;t({...e,[d]:u})},l=async c=>{c.preventDefault(),a(!0),i(!1);try{const u=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:di,name:e.name,email:e.email,message:e.message})})).json();if(u.success)i(!0),t({name:"",email:"",message:""});else throw new Error(u.message)}catch{alert("Something went wrong when sending the email. Please try again in a bit.")}finally{a(!1)}};return p("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[p(W.div,{variants:Rt("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[s("p",{className:C.sectionSubText,children:"Get in touch"}),s("h3",{className:C.sectionHeadText,children:"Contact."}),p("p",{className:"text-secondary text-[14px] mt-2",children:["Interested in collaborating or have a project in mind? I'd love to hear from you. You can also check out my"," ",s("a",{href:"#work",className:"underline text-[#915eff] hover:text-white",children:"work experience"})," ","or browse my"," ",s("a",{href:"#projects",className:"underline text-[#915eff] hover:text-white",children:"projects"}),"."]}),p("form",{onSubmit:l,className:"mt-12 flex flex-col gap-8",children:[p("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-normal mb-4",children:"Your Name"}),s("input",{type:"text",name:"name",value:e.name,onChange:o,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),p("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-normal mb-4",children:"Your Email"}),s("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:"What's your email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),p("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-normal mb-4",children:"Your Message"}),s("textarea",{rows:"7",name:"message",value:e.message,onChange:o,placeholder:"Let's connect",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),s("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold shadow-md shadow-primary rounded-xl",children:n?"Sending...":"Send"}),r&&s("span",{className:"text-[green] font-normal mb-4",children:"Successfully sent!"})]})]}),s(W.div,{variants:Rt("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:s(za,{})})]})},hi=ce(ui,"contact"),Oe=`---
title: Full-Stack TypeScript on Cloudflare Workers
date: 2025-12-27
description: Deploy a full-stack TypeScript app to Cloudflare Workers with Hono. Single deployment serving API and frontend on the edge globally for $0/month.
tags: ["cloudflare", "typescript", "serverless", "deployment", "hono"]
---

I just deployed [Space Selfie](https://space-selfie.zasamrat.workers.dev) to Cloudflare Workers. Single deployment serving both the API and frontend, running on the edge globally, for $0/month. Figured I'd document what actually went into it.

## Why Workers?

Honestly, for side projects that get sporadic traffic, I didn't want to think about servers. Workers give you 100k requests/day free, no cold starts, and your code runs close to users everywhere. The catch is you're stuck with JavaScript/TypeScript and there are runtime constraints. For an app that makes API calls and does some math? Fine.

## The Stack

- **[Hono](https://hono.dev/)** - Web framework built for edge runtimes. Like Express but smaller and doesn't fight the Workers environment.
- **TypeScript** - Types are nice.
- **Wrangler** - Cloudflare's CLI. Handles local dev and deploys.

## Project Structure

\`\`\`
workers/
├── src/
│   ├── index.ts          # Hono app entry point
│   ├── routes/           # API route handlers
│   ├── services/         # Business logic
│   └── utils/            # Helper functions
├── public/               # Static frontend files
│   ├── index.html
│   └── app.js
├── wrangler.toml         # Cloudflare config
└── package.json
\`\`\`

Workers can serve static assets alongside your API, so you don't need a separate CDN or hosting for the frontend.

## wrangler.toml

\`\`\`toml
name = "my-app"
main = "src/index.ts"
compatibility_date = "2024-12-01"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "./public"

[dev]
port = 8787
\`\`\`

The \`[assets]\` block serves your \`public/\` folder as static files. Requests to \`/index.html\` or \`/app.js\` hit those directly. Everything else goes to your Worker.

## The Hono App

\`\`\`typescript
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.get("/api/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/api/data", async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;
\`\`\`

No server setup, no port config. Export the app and Wrangler handles the rest.

## Local Dev

\`\`\`bash
npm install
npx wrangler dev
\`\`\`

Spins up \`http://localhost:8787\` with hot reload.

## Deploying

\`\`\`bash
npx wrangler login   # first time only
npx wrangler deploy
\`\`\`

Takes like 5 seconds. You get a URL like \`https://my-app.your-subdomain.workers.dev\`.

## Gotchas

**No Node.js APIs by default**

Workers run on V8, not Node. If you need stuff like \`Buffer\`, add the compat flag:

\`\`\`toml
compatibility_flags = ["nodejs_compat"]
\`\`\`

I forgot this initially and got cryptic errors until I realized what was happening.

**No axios**

Use \`fetch()\`. It's native and works fine, but if you're used to axios interceptors you'll need to restructure.

**No filesystem**

Can't read/write files. For caching you have a few options:

- In-memory variables (reset on redeploy, but fine for short-lived cache)
- KV Storage (key-value store, free tier available)
- D1 (SQLite, also free tier)

I used in-memory caching. Didn't want to deal with more infrastructure.

**CPU time limits**

10ms CPU time per request on free tier. Sounds brutal but network I/O doesn't count against this, only actual compute. Haven't hit the limit yet doing API work.

## Frontend

Since API and frontend are same origin:

\`\`\`javascript
const response = await fetch("/api/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ foo: "bar" }),
});
\`\`\`

No CORS headaches. No environment variables for API URLs.

## When This Doesn't Work

- Long-running tasks (30 second max, 10ms CPU on free)
- Heavy compute like ML inference
- Complex relational database queries (D1 is SQLite)
- Websockets without Durable Objects

For APIs and static sites with some dynamic bits, it's solid.

---

[Source code for Space Selfie](https://github.com/samratjha96/space-selfie) if you want to see the full setup.
`,Ne=`---
title: Protecting Homelab Apps with Cloudflare Zero Trust Access
date: 2026-02-16
description: Add email-based authentication to any self-hosted app using Cloudflare Tunnels and Zero Trust Access. No code changes, no accounts to manage, free tier.
tags: ["cloudflare", "homelab", "security", "zero-trust", "self-hosting"]
---

import cfDiagram from "../../assets/optimized/cloudflare-zero-trust-diagram.webp";

I run a bunch of apps on a VPS, all exposed through Cloudflare Tunnels. The problem: some of those apps have no auth, or auth that's annoying to set up (OAuth apps, API keys, invite flows). I wanted something simpler: if you're on my list, you get in. If not, you don't.

Cloudflare Zero Trust Access does exactly this, and it sits in front of your tunnel so your app never even sees unauthorized traffic.

## The setup

I had a self-hosted chat app running on port 8400 behind a Cloudflare Tunnel. The app itself has OpenID Connect support, but that means everyone needs an account with the OIDC provider. My family doesn't have those.

The existing tunnel config already had a public hostname pointing \`chat.example.com\` to \`localhost:8400\`. Traffic was flowing, just unprotected.

## Adding Zero Trust Access

Go to [one.dash.cloudflare.com](https://one.dash.cloudflare.com) → Access → Applications → Add an application.

Pick **Self-hosted**, set the domain to your public hostname:

\`\`\`
Application domain: chat.example.com
\`\`\`

Then create a policy:

- **Policy name:** whatever you want
- **Action:** Allow
- **Selector:** Emails
- **Value:** add each email you want to allow

That's it on the Cloudflare side.

## How it works

<img src={cfDiagram} alt="Cloudflare Zero Trust Access flow diagram showing user request intercepted at Cloudflare edge with email login, then tunneled to homelab server" width={900} height={491} loading="lazy" />

## What happens now

When someone hits \`chat.example.com\`, Cloudflare intercepts the request _before_ it reaches your server. They see a login page, enter their email, get a one-time PIN, enter it, and they're through. Cloudflare sets a \`CF_Authorization\` cookie and passes the request to your app.

The request flow looks like:

\`\`\`
User → Cloudflare Edge → Access check → Tunnel → localhost:8400
                           ↓
                    (not on the list? blocked here)
\`\`\`

Your app sees nothing. No auth headers to parse, no middleware to add, no OAuth dance. The app can run completely open because Cloudflare handles the gate.

## Disabling app-level auth

Since Cloudflare handles auth, you can strip out whatever login your app ships with — OIDC, OAuth, magic links, whatever. One gotcha: if the app's Docker image has auth defaults baked in, deleting the lines from your env override file won't actually disable them. The image defaults kick back in. You need to explicitly set every auth-related variable to an empty string so the app treats them as "not configured."

## Session management

Sessions last as long as you configure in the Access application settings. Users can log out by visiting:

\`\`\`
https://chat.example.com/cdn-cgi/access/logout
\`\`\`

You can revoke sessions from the Zero Trust dashboard under Logs → Access Requests.

## Gotchas

**Cookie settings**

If you had \`COOKIE_SECURE=true\` set for your app's own auth, keep it. Cloudflare terminates TLS at the edge, so the cookie still needs the secure flag when traveling between the browser and Cloudflare.

**This works for any app**

The nice thing about this approach is it's app-agnostic. I could put the same Access policy in front of any service behind my tunnel: Stirling PDF, Pocketbase, whatever. No code changes to any of them.

## Cost

Free. Cloudflare Zero Trust includes 50 users on the free tier. For a homelab shared with family and friends, that's more than enough.

---

Cloudflare Tunnels: [developers.cloudflare.com/cloudflare-one/connections/connect-networks](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)

Zero Trust Access: [developers.cloudflare.com/cloudflare-one/policies/access](https://developers.cloudflare.com/cloudflare-one/policies/access/)
`,Me=`---
title: The AI ROI Gap
date: 2026-03-02
description: Companies are pouring money into AI and most have almost nothing to show for it. The projects actually working aren't the exciting ones.
tags: ["ai", "enterprise", "productivity", "analysis"]
---

I've been looking at enterprise AI adoption numbers lately and something doesn't add up.

Spending is up everywhere. Every earnings call has an AI section. And yet: research into enterprise AI adoption finds only 4% of companies report _significant_ returns. 95% of pilots fail before scaling. Only 26% of organizations ship a working product at all.

The gap between the hype and the ROI has a weird explanation. The companies making money aren't doing what everyone else is building.

## Where the money went

Organizations put more than half their AI budgets into sales and marketing tools. Makes sense on paper: AI should generate leads, improve conversion, personalize outreach at scale. Revenue is measurable. Easy to justify to a CFO.

The actual ROI data points the other direction. The highest returns came from back-office automation. Invoice processing. Fraud detection. Internal routing and classification. Stuff nobody demos at a conference.

This isn't surprising if you think about it for a minute. Sales and marketing AI operates in an adversarial environment where your competitors are running the same tools, customers are developing immunity to AI-generated content, and success still requires human judgment about timing and relationships. Back-office automation competes against _a spreadsheet_. If you automate invoice matching at 90% accuracy, you've won, because the human doing it at 85% costs $80k a year and hates the job.

The companies that got good at AI started with the boring stuff. The companies still failing started with the chatbot.

If your company is in the second group and you're trying to figure out where to actually start, [this is what I do](/ai/).

## The data problem everyone misdiagnoses

80% of AI projects fail before production. Post-mortems almost always say the same thing: data quality.

So companies hire data engineers, buy data governance platforms, start a data quality initiative. And still fail.

The actual issue is bidirectional. AI tools don't adapt to how your organization works. But organizations also don't have frameworks for integrating AI into how they actually work. You can't fix one without the other.

Generic tools fail at enterprise scale not because they're bad tools. It's that enterprise workflows are _specific_. ChatGPT works great for an individual who can steer it, correct it, and use it opportunistically. It falls apart for an organization that needs consistent, auditable outputs woven into processes designed in 2012.

Most "AI transformations" are trying to adapt the organization to the tool. The ones that work figured out the specific task first, then found the tool for that task.

## When the AI works exactly as intended

There's a failure mode that doesn't make it into case studies: agents that function correctly and still cause disasters.

Customer service agents have committed companies to binding contracts. 50% discounts on non-discountable products. Full refunds on non-refundable tickets. The agents weren't hallucinating. They were resolving complaints, which is what they were told to do. They just didn't have the judgment to understand "resolve" has limits.

Loan decision agents have passed every technical benchmark but couldn't produce fair-lending citations when regulators asked. The system worked. The deployment failed.

This is different from a hallucination problem. The model output was correct for the objective it was given. The objective was wrong. Someone defined "resolve customer complaints" without defining what resolution isn't allowed to look like, and nobody thought about the regulator question until after launch.

## The safety mechanism problem

Organizations building agentic systems quickly learned that humans need to be in the loop. Every action gets approved before execution. Reasonable.

Then users started getting hundreds of approval requests per day. Sometimes thousands. They clicked through without reading. Eventually some organizations enabled auto-approve modes because the constant interruptions were destroying productivity.

The human review layer became the vulnerability. Not because attackers exploited it, but because humans adapted to being constantly interrupted by making the interruptions stop. Normal behavior. Completely predictable. Apparently not anticipated.

## What's actually working

Fraud detection keeps coming up as a real success. The pattern: one agent flags anomalies, a second checks compliance, a third writes the summary. A human makes the final call. AI handles the parts that require processing thousands of data points in milliseconds; the human handles the judgment.

It works because the task is narrow and well-defined. Failure modes are understood in advance. The human role is real, not performative. Success is measurable: fraud got caught or it didn't.

That pattern doesn't map to every use case. But it explains why back-office numbers are better. Narrow, specific, auditable tasks where the cost of doing it wrong is known and the definition of done is unambiguous.

---

Sources: MIT Sloan research on enterprise AI adoption · International AI Safety Report 2026 (Yoshua Bengio, 100+ researchers)
`,_e=`---
title: Configure a GitHub Pages Subdomain with Cloudflare DNS
date: 2026-07-22
description: Configure a GitHub Pages subdomain with Cloudflare DNS. Covers the required GitHub setting, CNAME record, validation, HTTPS, and deployment-mode differences.
tags: ["github-pages", "cloudflare", "dns", "deployment"]
---

Use a subdomain when you need a stable public name for a GitHub Pages project. I use \`gallery.example.com\` below as the example. Replace it with your domain.

This guide covers a project that publishes from a branch and uses Cloudflare for DNS. The default GitHub Pages URL remains available during setup.

## Verify the domain first

Verify the domain in the GitHub account or organization settings before you configure the repository. GitHub uses a TXT record for this check. Keep the TXT record after verification.

## Set the domain in GitHub first

In the repository, open **Settings > Pages**. Under **Custom domain**, enter \`gallery.example.com\` and save the setting.

The order matters. Set the custom domain in GitHub before you create the DNS record. GitHub recommends this order because DNS that points to GitHub before the repository claims the domain can create a takeover risk.

For branch publishing, GitHub adds an uppercase \`CNAME\` file to the root of the publishing source. The file contains only the domain name:

\`\`\`
gallery.example.com
\`\`\`

Keep the file in the publishing source. A build that replaces the publishing directory can remove it. This is an easy failure to miss.

This rule does not apply to a custom GitHub Actions workflow. In that mode, GitHub ignores \`CNAME\` and does not require it.

## Add the Cloudflare DNS record

Create this record in the Cloudflare DNS zone:

| Type | Name | Target | Proxy status |
| --- | --- | --- | --- |
| CNAME | gallery | \`USERNAME.github.io\` | DNS only |

Replace \`USERNAME\` with the GitHub account or organization name. Do not add the repository name to the target. For example, a project at \`USERNAME.github.io/project-name\` still uses \`USERNAME.github.io\` as the CNAME target.

This example keeps the record DNS-only during setup. GitHub documents CNAME validation, while Cloudflare returns its own addresses for proxied records. Cloudflare gives general proxy guidance for web-serving CNAME records, but it does not give GitHub Pages-specific proxy guidance.

Do not treat a proxy change as a DNS toggle. It changes the request path. Test certificate renewal, redirects, and cache behavior after the change.

## Verify the record

Check the CNAME record before you change any other setting:

\`\`\`sh
dig gallery.example.com +noall +answer -t CNAME
\`\`\`

The response should show \`gallery.example.com\` as a CNAME for \`USERNAME.github.io\`.

DNS changes can take up to 24 hours. Do not wait and change records at random. Check the record again if GitHub cannot validate the domain.

## Enable HTTPS

Return to **Settings > Pages** after GitHub validates the domain. Enable **Enforce HTTPS** when the control becomes available.

GitHub can take up to 24 hours to make this control available. Do not add an HTTPS redirect rule until the GitHub Pages certificate is active.

## Avoid wildcard DNS records

Do not use a wildcard DNS record such as \`*.example.com\` for GitHub Pages. GitHub warns that wildcard records can expose unclaimed subdomains to takeover.

## Deployment checks

Use these checks after each deployment. They catch most configuration drift:

- Confirm that the custom domain remains set in **Settings > Pages**.
- For branch publishing, confirm that the publishing source still contains \`CNAME\`.
- Confirm that the CNAME target is \`USERNAME.github.io\`.
- Confirm that HTTPS is enabled before you require HTTPS-only asset URLs.

## References

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/)
`,Re=`---
title: How I Finally Organized My Notes
date: 2025-01-05
description: After years of scattered notes across apps, I finally found a system that works. Johnny Decimal + Obsidian gives structure without the complexity.
tags: ["obsidian", "productivity", "organization", "johnny-decimal"]
---

I used to have notes everywhere. Google Docs for work stuff, Apple Notes for random thoughts, Notion for projects I never finished, and a graveyard of markdown files scattered across folders named things like "misc" and "to-sort-later." Finding anything meant searching three apps and hoping I remembered which one I'd used.

A couple years ago I moved everything into Obsidian. Having it all in one place helped, but I still ended up with the same chaos. A flat pile of files with no structure. I'd create a note, name it something reasonable, and then never find it again because I couldn't remember if I'd called it "Jordan trip" or "2024 travel plans" or just "vacation."

Then I found [Johnny Decimal](https://johnnydecimal.com).

## Why Most Systems Fail

Most organization systems fail because they're too flexible. You can create unlimited folders, nest them however you want, and name them whatever makes sense in the moment. Six months later, nothing makes sense. You have "Work" and "Professional" and "Career" all holding different things. "Travel" nested inside "Personal" nested inside "Life," or maybe it's just floating at the root level next to "2023 stuff."

Johnny Decimal forces constraints. You get exactly 10 areas of life (numbered 00-09 through 90-99). Within each area, you get 10 categories. That's it. 100 total buckets for everything you'll ever need to organize.

When I first read that, I thought there's no way 100 categories is enough. Seemed almost insulting. Then I tried to list out everything I actually care about. Turns out most of my "organization" was just different names for the same handful of things.

## My Actual Structure

Here's what my vault looks like:

\`\`\`
00-09 System/
├── 00 System Management
├── 01 Daily Notes
└── 02 Research
10-19 Tech/
├── 11 Code
├── 12 Homelab
├── 13 Projects
├── 14 Internet & Websites
└── 15 AI
20-29 Travel/
├── 21 Perks & Discounts
├── 22 Trips
└── 23 Travel Resources
30-39 Personal/
├── 31 Career
├── 32 Finance
├── 33 Living
├── 34 Health & Style
├── 35 Entertainment
├── 36 Food
├── 37 Personal Development
├── 38 Speeches & Writing
└── 39 Content
\`\`\`

**\`00-09 System\`** is for meta stuff. The notes about notes. My inbox where quick captures land before I sort them. Templates. Daily notes. Research projects that don't fit anywhere else yet. It's the junk drawer, but a structured one.

**\`10-19 Tech\`** covers my technical life. Code references I look up repeatedly. Homelab documentation. Active projects. AI prompts and tools. Anything that would feel at home on a developer's desk.

**\`20-29 Travel\`** holds more than you'd think. I have a folder for each trip with research, booking info, and trip reports after. Another folder for loyalty programs and perks. One for packing lists and general resources. When I'm planning a trip to Jordan, I know exactly where to look. When I get back, I know where to put the notes.

**\`30-39 Personal\`** is the catch-all for life. Career stuff like resumes and interview prep. Finance with tax documents and account info. Living arrangements. Health records. Entertainment like reading lists and things to watch. Food and recipes. Personal development. Writing projects. Content ideas.

That's it. Four areas. I don't use 40-99. Maybe I never will. The system doesn't care if you leave gaps.

## Why It Actually Works

Not the numbers themselves. The constraint.

When I save a note about Turkish baths in Petra, I don't wonder where it goes. It goes in \`20-29 Travel\`, then \`22.01 Trips\`, then Jordan. That's the only place it _could_ go. The path is obvious before I even create the file.

When I'm looking for my brother's wedding speech, I don't search. I navigate to \`30-39 Personal\`, then \`38.01 Speeches & Writing\`. There it is.

The numbers create a physical address for every piece of information. \`32.01\` means something. It's Finance within Personal, and the \`.01\` means it's a specific document or subfolder. When someone asks me where I keep tax documents, I can say "\`32.01 Finance\`, Tax Documents folder." Precise in a way that "somewhere in my notes" never was.

Look back at my structure. Pretend it's yours. Your building just sent you something about your rental agreement changing and you want to save it. Where does it go?

It's personal. So \`30-39 Personal\`. It's about living arrangements. So \`33 Living\`. Maybe a file like \`rental_agreement_2026.pdf\`.

You could go a level deeper: \`33.01 Living/10 Yearly Rentals/2026/<file>.pdf\`. But you get the idea. I can organize within the drawers whenever I want. The drawers just help me put things in a state where they _can_ be organized.

Another one: you find a cool recipe online and want to save it. Personal, so \`30-39 Personal\`. Food, so \`36 Food\`. Done. Maybe later you organize \`36 Food\` into subfolders for cuisines or meal types. Maybe you never do. Either way, you know where recipes live.

## Daily Notes and Quick Capture

Most of my interaction with Obsidian is through daily notes. Each morning a new file appears in \`00-09 System\` / \`01.01 Daily Notes\`, named with today's date. I use a template that creates the same structure every time:

\`\`\`markdown
# 2025-01-03

## Tasks

- [ ] Review PR for auth refactor
- [ ] Update API docs for v2 endpoints
- [x] Fix flaky integration test
- [ ] Schedule 1:1 with manager

## Notes
\`\`\`

That's it. Two sections. Tasks for things I need to do today. Notes for anything else that comes up.

Throughout the day, I dump thoughts in the Notes section. Random ideas, things to look up later, links someone sent me. At the end of the day or week, I move anything worth keeping to its proper home. The rental agreement reminder goes to \`33.01 Living\`. The recipe link goes to \`36.01 Food\`. Most things just get deleted.

Capture fast, sort later. The daily note is ephemeral. Most of what goes in there doesn't need to live forever. But when something does, I know where it belongs.

## How Trips Work

Travel planning used to overwhelm me. Research scattered across browser tabs and random notes. Booking confirmations buried in email. Itineraries… somewhere.

Now each trip gets its own folder under \`22.01 Trips\`. Before I go, it fills up with research. Restaurant recommendations. Things to see. Logistics like visa requirements and local emergency contacts. Booking numbers and hotel addresses.

After I get back, I write a trip report. Not a polished travel blog, just practical notes. What I actually did each day. What worked and what didn't. Prices. Recommendations. The stuff I wish I'd known before going.

My Jordan trip report has notes like "Uber from airport is 30 JOD to downtown" and "don't wash your face in the Dead Sea, the salt will wreck your eyes" and "the monastery hike from Little Petra takes a couple hours and you descend 9000+ steps at the end." A year later, when a friend asks about Jordan, I can just send them the file.

## The Stuff That Doesn't Fit

Some things resist categorization. Research projects that span multiple areas. Ideas that aren't developed enough to place. Things I'm actively thinking about but haven't decided what they are yet.

These go in the System area. \`02.01 Research\` for deep dives. The inbox for quick captures. Daily notes for transient thoughts. The structure has room for ambiguity, which I didn't expect going in.

I still occasionally create a note and realize a week later it's in the wrong spot. Or I'll debate whether something is "Career" or "Personal Development" for way too long. The system doesn't eliminate decision fatigue entirely. It just makes most decisions obvious.

## Getting Started

This is just my take on the system. My organization works for me, but yours will look different. The general idea is about shelves and drawers: thinking of everything in terms of where it physically lives, not what it's related to or when you created it.

If you want to start thinking about it for yourself, the [Saving Files](https://johnnydecimal.com/10-19-concepts/11-core/11.06-saving-files/) page on the Johnny Decimal site is a good place to begin.

Don't try to replicate someone else's system exactly. My four areas reflect my life. Yours might need five or six. Maybe you don't travel much but you have three hobbies that each deserve their own area.

The point isn't the specific numbers. It's the constraint. Pick your areas, keep it under ten. Pick your categories within each, keep those under ten per area. Then stop reorganizing and start using it.

I spent years tweaking systems instead of writing in them. Johnny Decimal gave me a structure boring enough that I stopped thinking about it. That's the whole trick.
`,De=`---
title: Automated Lighthouse Audits with Claude Code
date: 2025-01-05
description: Set up a slash command in Claude Code that runs Lighthouse audits and tells you exactly what to fix. Takes 5 minutes to set up, saves 20+ minutes per audit.
tags: ["performance", "lighthouse", "claude-code", "web-dev", "tooling"]
---

I got tired of running Lighthouse, squinting at the JSON output, and manually figuring out what actually matters. So I set up a slash command in Claude Code that runs the audit and tells me what to fix. Took about 5 minutes to set up, saves me 20+ minutes every time I check performance.

## The Manual Way

If you've never used Lighthouse from the command line:

\`\`\`bash
npx lighthouse https://yoursite.com \\
  --output=json \\
  --output-path=/tmp/lighthouse-report.json \\
  --chrome-flags="--headless" \\
  --only-categories=performance
\`\`\`

This dumps a ~500KB JSON blob. You can open it in Chrome DevTools or pipe it through \`jq\` to extract what you care about:

\`\`\`bash
cat /tmp/lighthouse-report.json | jq '{
  score: (.categories.performance.score * 100),
  lcp: .audits["largest-contentful-paint"].displayValue,
  cls: .audits["cumulative-layout-shift"].displayValue,
  tbt: .audits["total-blocking-time"].displayValue
}'
\`\`\`

Output:

\`\`\`json
{
  "score": 55,
  "lcp": "58.1 s",
  "cls": "0",
  "tbt": "0 ms"
}
\`\`\`

That 58 second LCP is... not great. But now I have to dig through the full report to figure out _why_, and that's where I usually give up and go do something else.

## The Slash Command

Create a file at \`.claude/commands/analyze-website-performance.md\`:

\`\`\`\`markdown
# Website Performance Analysis

Analyze the performance of \`$ARGUMENTS\` using Google Lighthouse.

## Steps

1. **Run Lighthouse audit**:

   \`\`\`bash
   npx lighthouse $ARGUMENTS --output=json --output-path=/tmp/lighthouse-report.json --chrome-flags="--headless" --only-categories=performance
   \`\`\`

2. **Read the report** from \`/tmp/lighthouse-report.json\`

3. **Analyze and summarize**:
   - Current performance score
   - Each failing audit with its impact
   - Specific fixes for each issue
   - Estimated score improvement from each fix

## Output Format

### Performance Score: X/100

### Critical Issues (blocking 95+ score)

For each issue:

- **What**: The specific problem
- **Impact**: How many points this costs
- **Fix**: Exact steps to resolve

## Constraints

**Do not recommend changes that would:**

- Alter the DOM structure significantly
- Change the visual design
- Remove features or content

**Focus only on:**

- Asset optimization (compression, formats, sizing)
- Loading strategies (defer, async, preload, lazy loading)
- Caching and delivery
- Code efficiency (tree-shaking, code splitting)
\`\`\`\`

Now run it:

\`\`\`bash
claude
> /analyze-website-performance https://samratjha.com
\`\`\`

## What Comes Back

Instead of a wall of JSON, you get something like:

\`\`\`
## Performance Score: 55/100

### Critical Issues

### 1. Massive Image Files - Est. Savings: 15,654 KiB (~15.3 MB)

| Image | Current Size | Displayed At | Savings |
|-------|-------------|--------------|---------|
| ParallaxImageGallery.png | 8.87 MB | 431×230 px | 8.86 MB |
| bird-radio.png | 2.30 MB | 450×230 px | 2.29 MB |

**Fix**:
1. Convert all PNG images to WebP or AVIF format
2. Resize images to match display dimensions
3. Use \`srcset\` for responsive images

### 2. Unused JavaScript - Est. Savings: 258 KiB, 1,350ms

**What**: \`index-d312cac4.js\` (648 KB) has 41% unused code
**Fix**:
- Code-split Three.js and heavy dependencies
- Lazy-load the 3D planet component
\`\`\`

It cross-references the image dimensions in the DOM against the actual file sizes. My 8.87 MB PNG was being displayed at 431×230 pixels. The source image was 2657×1890. I definitely would've missed that scrolling through raw JSON.

## The Difference

Lighthouse tells you _what's wrong_. This tells you _what to do about it_.

Raw Lighthouse output:

\`\`\`json
{
  "id": "image-delivery-insight",
  "score": 0,
  "displayValue": "Est savings of 15,654 KiB"
}
\`\`\`

What Claude gives you:

\`\`\`
ParallaxImageGallery.png:
- Current: 2657×1890 PNG (8.87 MB)
- Displayed: 431×230 px
- Target: 862×460 WebP (~50-100 KB)
- Savings: 8.86 MB (99% reduction)
\`\`\`

One tells me there's a problem. The other tells me exactly which file, what size it should be, and what format to use. That's the difference between "I should optimize images" and actually doing it.

## Gotchas

**Chrome needs to be installed**

Lighthouse spawns a headless Chrome instance. If you're on a server without Chrome, this won't work. Use the PageSpeed Insights API instead (I haven't bothered setting that up).

**The JSON is huge**

~500KB for a single page. If you're reading the file directly in Claude, you might hit context limits on complex pages. The slash command handles this by having Claude extract only the relevant parts, but I've still had it choke on really bloated reports.

**Scores vary between runs**

Network conditions, server load, whatever. I've seen ±5 points between consecutive runs. Don't obsess over small score differences.

**Mobile vs Desktop**

Default is mobile throttling. Add \`--preset=desktop\` if you want desktop scores. Mobile is usually worse, which is why it's the default.

You can also add more categories (\`--only-categories=performance,accessibility,best-practices,seo\`) or run multiple URLs. The slash command is just a prompt template, so modify it for whatever you need.
`,je=`---
title: Fix React Router 404 Errors on Hostinger
date: 2025-06-22
description: Direct links and page refreshes returning 404 on your React app? Here's the .htaccess fix for Hostinger and other Apache-based hosts.
tags: ["web development", "react", "routing", "htaccess", "SPA"]
---

I just deployed my portfolio site and discovered that typing \`/blog\` directly into the browser returns a 404. Works fine clicking around the app, breaks completely on refresh or direct links. Here's what's going on and how to fix it.

## The Problem: Server vs. Client Routing

When someone types \`yourdomain.com/blog\` into their browser, the request hits your server first. The server looks for a file or directory called "blog" - which doesn't exist. Your routes live in React Router, not as actual files on disk. 404.

Clicking links inside your app works because React Router intercepts those and handles them in the browser. The server never sees those requests. Direct URL access and page refreshes bypass React Router entirely.

## The Fix: .htaccess

After trying a few things, I went with an \`.htaccess\` file. It works on Hostinger (where this site lives) and most other Apache-based hosts.

\`\`\`apache
# Enable rewriting
RewriteEngine On

# If the request is not for a real file or directory
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Rewrite all requests to the root index.html
RewriteRule ^ index.html [QSA,L]
\`\`\`

Put this in your \`public\` directory before deploying.

## What This Does

The server now serves \`index.html\` for any URL that isn't a real file or folder. User visits \`yourdomain.com/blog\`, server returns \`index.html\`, React loads, React Router reads the URL and renders the blog page.

## Other Hosting Platforms

\`.htaccess\` works on most traditional hosts, but some platforms do it differently:

- **Netlify**: \`_redirects\` file with \`/* /index.html 200\`
- **Vercel**: \`vercel.json\` with rewrites
- **Firebase**: \`firebase.json\` rewrites

I'd still include \`.htaccess\` as a fallback - it doesn't hurt to have it there.

## Done

My \`/blog\` route works now. Direct links work, bookmarks work, refresh works. Search engines can actually crawl the pages too.
`,Le=`---
title: My tmux Config, Explained
date: 2026-04-13
description: What's in my tmux config, why it's there, and what I'd have added sooner.
tags: ["tmux", "terminal", "productivity", "tools", "macos"]
---

My \`~/.tmux.conf\` grew one frustration at a time. This is an explanation of what's in it and what the defaults get wrong.

## The prefix

The default tmux prefix is \`C-b\`. I changed it to \`C-a\`:

\`\`\`bash
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix
\`\`\`

\`C-a\` is what GNU Screen used, and it sits better under the left hand. The tradeoff: it conflicts with Bash/Zsh's "go to beginning of line" shortcut. In practice I just use Option+Left to jump to the front of a line, or drop into vi mode.

I also remap Caps Lock to Control at the OS level. That makes the prefix Caps Lock + a, which you can hit without moving your hand at all. Highly recommend it on any keyboard where Control is buried in the corner.

## Escape time

\`\`\`bash
set -s escape-time 0
\`\`\`

By default tmux waits 500ms after an Escape keypress to see if it's the start of a key sequence. That delay is noticeable in any editor. Setting it to zero fixes this completely. I don't know why this isn't the default.

## True color

\`\`\`bash
set -g default-terminal "tmux-256color"
set -ga terminal-overrides ",xterm-256color:Tc"
set -ga terminal-overrides ",tmux-256color:Tc"
\`\`\`

Without this, colorschemes look washed out inside tmux even when the terminal supports true color. The \`Tc\` flag tells tmux to pass through 24-bit color instead of capping at 256. The \`default-terminal\` setting needs to match something your system has in its terminfo database; \`tmux-256color\` is the right choice on modern macOS.

## Focus events

\`\`\`bash
set -s focus-events on
\`\`\`

This lets tmux pass focus events through to applications inside panes. Editors use this to detect when you switch back to them and reload files that changed on disk. Without it, you're working with stale buffers and don't know it.

## History

\`\`\`bash
set -g history-limit 50000
\`\`\`

The default is 2000 lines. That's not enough for anything involving log output or long test runs. 50k is still fast and covers everything I've thrown at it.

## Window and pane numbering

\`\`\`bash
set -g base-index 1
setw -g pane-base-index 1
set -g renumber-windows on
\`\`\`

Windows and panes start at 1 instead of 0. \`1\` through \`9\` map directly to the number keys on the keyboard. \`C-a 1\` to jump to window 1 is more natural than \`C-a 0\`. \`renumber-windows on\` means if you close window 2, window 3 becomes the new 2, so there are no gaps.

## Stop renaming my windows

\`\`\`bash
set -g allow-rename off
\`\`\`

By default, tmux renames windows based on whatever process is currently running in them. You rename a window "api", switch to it, run a command, and now it's called "node". This setting stops that. Name your windows once, they stay named.

## Quiet bell

\`\`\`bash
set -g bell-action none
\`\`\`

Silences all terminal bells. Programs send BEL constantly: completion hooks, SSH prompts, test runners. tmux surfaces all of it as status bar alerts by default. I don't want any of it.

## Splits that make sense

\`\`\`bash
bind-key h split-window -v -c "#{pane_current_path}"
bind-key v split-window -h -c "#{pane_current_path}"
\`\`\`

\`h\` for horizontal split (stacked top/bottom), \`v\` for vertical split (side by side). The \`-c "#{pane_current_path}"\` part makes the new pane open in the same directory as the current one, which is almost always what you want. The default behavior opens in your home directory.

Same thing for new windows:

\`\`\`bash
bind-key c new-window -c "#{pane_current_path}"
\`\`\`

## Pane navigation

\`\`\`bash
bind -n M-h select-pane -L
bind -n M-j select-pane -D
bind -n M-k select-pane -U
bind -n M-l select-pane -R
\`\`\`

\`M-\` means Alt. \`Alt+hjkl\` switches panes with no prefix required. I also have arrow key equivalents for muscle memory from before I was fully on hjkl.

## Vi copy mode

\`\`\`bash
set-window-option -g mode-keys vi
bind-key -T copy-mode-vi v send -X begin-selection
bind-key -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"
bind-key -T copy-mode-vi Y send-keys -X copy-end-of-line
bind-key -T copy-mode-vi C-v send-keys -X rectangle-toggle
\`\`\`

\`prefix + [\` enters copy mode. Then \`v\` to start a selection, \`y\` to yank to the macOS clipboard, \`Y\` to yank to end of line (vim-consistent). \`C-v\` toggles block selection for columnar yanks.

Mouse drag also copies to clipboard:

\`\`\`bash
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "pbcopy"
\`\`\`

And paste from clipboard with \`prefix + P\` (uppercase):

\`\`\`bash
bind-key P run-shell "pbpaste | tmux load-buffer - && tmux paste-buffer"
\`\`\`

## Sync panes

\`\`\`bash
bind y setw synchronize-panes
\`\`\`

\`prefix + y\` toggles synchronized input across all panes in the current window. Useful for running the same command on multiple servers at once. I use it rarely, but when I need it there's no substitute.

## Plugins

\`\`\`bash
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

set -g @continuum-restore 'on'
set -g @resurrect-capture-pane-contents 'on'
\`\`\`

[TPM](https://github.com/tmux-plugins/tpm) is the plugin manager. The two plugins I actually use:

**tmux-resurrect** saves your entire session layout: windows, panes, working directories, and running programs, so you can restore it after a reboot. Without this, every restart means rebuilding your workspace from scratch.

**tmux-continuum** runs resurrect automatically in the background, saving every 15 minutes and restoring on tmux start. \`continuum-restore on\` means the last saved session loads automatically when you open a new tmux server.

These two together mean I haven't thought about "setting up my terminal" in years. It's just there when I open my laptop.

## The full config

[\`~/.tmux.conf\` on GitHub](https://github.com/samratjha96/dotfiles/blob/master/.tmux.conf)
`,Yn=()=>{const[e,t]=y.useState(""),[n,a]=y.useState(!1),[r,i]=y.useState(!1);return y.useEffect(()=>{const o=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s("nav",{className:`${C.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${r?"bg-primary":"bg-transparent"}
    `,children:p("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[p(R,{to:"/",className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[s("img",{src:an,alt:"logo",className:"w-9 h-9 object-contain"}),s("p",{className:"text-white text-[18px] font-semibold cursor-pointer",children:"Samrat Jha"})]}),s("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:ve.map(o=>o.id==="blog"?s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-normal cursor-pointer`,onClick:()=>t(o.title),children:s(R,{to:"/blog/",children:o.title})},o.id):o.isExternal?s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-normal cursor-pointer`,onClick:()=>t(o.title),children:o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title})},o.id):s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-normal cursor-pointer`,onClick:()=>t(o.title),children:s(R,{to:`/#${o.id}`,children:o.title})},o.id))}),p("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[s("img",{src:n?tn:en,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>a(!n)}),s("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:s("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:ve.map(o=>o.id==="blog"?s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-normal cursor-pointer text-[16px]`,onClick:()=>{a(!n),t(o.title)},children:s(R,{to:"/blog/",children:o.title})},o.id):o.isExternal?s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-normal cursor-pointer text-[16px]`,onClick:()=>{a(!n),t(o.title)},children:o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title})},o.id):s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-normal cursor-pointer text-[16px]`,onClick:()=>{a(!n),t(o.title)},children:s(R,{to:`/#${o.id}`,children:o.title})},o.id))})})]})]})})};function ze(e){const t=e.match(/^---([\s\S]*?)---/);if(!t)return{};const n=t[1],a={},r=n.trim().split(`
`);for(const i of r){const o=i.match(/(.+?):\s*(.+)/);if(o){let[,l,c]=o;if(l=l.trim(),c=c.trim(),c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),c.startsWith("[")&&c.endsWith("]"))try{c=JSON.parse(c)}catch{}a[l]=c}}return a}function Jn(e,t=150){let a=e.replace(/^---[\s\S]*?---/,"").replace(/#+\s+/g,"").replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/!\[(.*?)\]\(.*?\)/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/-{3,}/g,"").replace(/\n/g," ").trim();return a.length>t&&(a=a.substring(0,t)+"..."),a}function Be(e){return e.split("/").pop().replace(/\.[^.]+$/,"")}const pi=({children:e,title:t})=>{const[a,r]=y.useState([]),[i,o]=y.useState([]),[l,c]=y.useState(1),d=u=>{if(u<1||u>Math.ceil(a.length/5))return;c(u);const f=(u-1)*5;o(a.slice(f,f+5))};return y.useEffect(()=>{async function u(){try{const h=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Oe,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":Ne,"../../blog/posts/enterprise-ai-roi.mdx":Me,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":_e,"../../blog/posts/how-i-finally-organized-my-notes.mdx":Re,"../../blog/posts/lighthouse-ai-workflow.mdx":De,"../../blog/posts/spa-routing-hostinger.mdx":je,"../../blog/posts/tmux-config.mdx":Le})).map(([m,g])=>{const w=Be(m),b=ze(g);return{slug:w,title:b.title||"Untitled Post",date:b.date||"No date",tags:b.tags||[]}});h.sort((m,g)=>new Date(g.date)-new Date(m.date)),r(h),o(h.slice(0,5))}catch(f){console.error("Error loading blog posts for sidebar:",f),r([]),o([])}}u()},[]),p("div",{className:"relative z-0 bg-primary",children:[s(Yn,{}),s("div",{className:`${C.padding} max-w-7xl mx-auto relative z-0 mt-20`,children:p("div",{className:"flex flex-col md:flex-row gap-10",children:[s("div",{className:"md:w-1/4",children:p("div",{className:"sticky top-24 p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg",children:[s("h3",{className:"text-white font-semibold text-xl mb-4",children:"Recent Posts"}),p("ul",{className:"divide-y divide-gray-700/30",children:[i.map((u,f)=>p("li",{className:`py-4 ${f===0?"pt-0":""}`,children:[s(R,{to:`/blog/${u.slug}/`,className:"block text-secondary hover:text-white transition-colors duration-300 font-normal",children:u.title}),s("div",{className:"text-xs text-gray-400 mt-1",children:u.date}),s("div",{className:"flex flex-wrap gap-1 mt-2",children:u.tags.map(h=>p("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",h]},h))})]},u.slug))," "]}),a.length>5&&s("div",{className:"mt-4 flex justify-center pt-2 border-t border-gray-700/30 text-xs",children:p("div",{className:"inline-flex items-center gap-2",children:[s("button",{onClick:()=>d(l-1),disabled:l===1,className:`${l===1?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"←"}),p("span",{className:"text-secondary mx-1",children:[l,"/",Math.ceil(a.length/5)]}),s("button",{onClick:()=>d(l+1),disabled:l>=Math.ceil(a.length/5),className:`${l>=Math.ceil(a.length/5)?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"→"})]})})]})}),p("div",{className:"md:w-3/4 overflow-hidden",children:[t&&s("h1",{className:`${C.sectionHeadText} mb-6`,children:t}),s("div",{className:"prose prose-invert prose-lg prose-headings:text-white prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:overflow-x-auto prose-li:text-gray-300 max-w-none [&_code::before]:content-none [&_code::after]:content-none",children:e})]})]})})]})},mi=({post:e})=>p(R,{to:`/blog/${e.slug}/`,className:"block bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 group",children:[p("div",{className:"mt-5",children:[s("h3",{className:"text-white font-semibold text-[24px] group-hover:text-[#915eff] transition-colors duration-300",children:e.title}),s("p",{className:"mt-2 text-secondary text-[14px]",children:e.date})]}),s("div",{className:"mt-4 text-secondary text-[14px] leading-[24px]",children:e.excerpt}),s("div",{className:"flex flex-wrap gap-2 mt-4",children:e.tags.map(t=>p("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",t]},t))})]}),ye="https://www.samratjha.com",fi=({onSearch:e})=>{const[t,n]=y.useState("");return s("div",{className:"mb-8",children:p("div",{className:"relative overflow-hidden",children:[s("input",{type:"text",value:t,onChange:i=>{const o=i.target.value;n(o),e(o)},placeholder:"Search posts...",className:"w-full p-3 pr-10 bg-tertiary bg-opacity-70 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#915eff] border border-transparent"}),t&&s("button",{onClick:()=>{n(""),e("")},className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white",children:"✕"})]})})},Gt=()=>{const[e,t]=y.useState([]),[n,a]=y.useState([]),[r,i]=y.useState(1),o=6,[l,c]=y.useState([]);y.useEffect(()=>{async function h(){try{const g=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Oe,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":Ne,"../../blog/posts/enterprise-ai-roi.mdx":Me,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":_e,"../../blog/posts/how-i-finally-organized-my-notes.mdx":Re,"../../blog/posts/lighthouse-ai-workflow.mdx":De,"../../blog/posts/spa-routing-hostinger.mdx":je,"../../blog/posts/tmux-config.mdx":Le})).map(([w,b])=>{const v=Be(w),A=ze(b);return{slug:v,title:A.title||"Untitled Post",date:A.date||"No date",excerpt:A.excerpt||Jn(b),tags:A.tags||[],buttonText:"Read More"}});g.sort((w,b)=>new Date(b.date)-new Date(w.date)),t(g),a(g),c(g.slice(0,o))}catch(m){console.error("Error loading blog posts:",m)}}h()},[]);const d=h=>{if(h<1||h>Math.ceil(n.length/o))return;i(h);const m=(h-1)*o;c(n.slice(m,m+o))},u=h=>{if(!h.trim()){a(e);return}const m=e.filter(g=>{const w=h.toLowerCase();return g.title?.toLowerCase().includes(w)||g.excerpt?.toLowerCase().includes(w)||g.tags?.some(b=>b.toLowerCase().includes(w))});a(m),i(1),c(m.slice(0,o))},f={"@context":"https://schema.org","@type":"CollectionPage",name:"Blog | Samrat Jha",description:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha.",url:`${ye}/blog/`,author:{"@type":"Person",name:"Samrat Jha",url:`${ye}/`}};return p($,{children:[p($e,{children:[s("title",{children:"Blog | Samrat Jha"}),s("meta",{name:"description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha."}),s("link",{rel:"canonical",href:`${ye}/blog/`}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:url",content:`${ye}/blog/`}),s("meta",{property:"og:title",content:"Blog | Samrat Jha"}),s("meta",{property:"og:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),s("meta",{property:"og:site_name",content:"Samrat Jha"}),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:title",content:"Blog | Samrat Jha"}),s("meta",{name:"twitter:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),s("script",{type:"application/ld+json",children:JSON.stringify(f)})]}),s(pi,{title:"Blog",children:p("div",{className:"mt-12",children:[s(fi,{onSearch:u}),p("div",{className:"mt-10 flex flex-wrap gap-7",children:[n.length>0?l.map((h,m)=>s(mi,{post:h},h.slug)):s("p",{className:"text-secondary",children:"No posts found matching your search criteria."}),n.length>o&&s("div",{className:"w-full mt-8 flex justify-center items-center text-sm",children:p("div",{className:"inline-flex items-center gap-3 text-secondary",children:[s("button",{onClick:()=>d(r-1),disabled:r===1,className:`${r===1?"opacity-50 cursor-not-allowed":"hover:text-white cursor-pointer"}`,children:"←"}),p("span",{className:"text-secondary",children:["Page ",r," of"," ",Math.ceil(n.length/o)]}),s("button",{onClick:()=>d(r+1),disabled:r>=Math.ceil(n.length/o),className:`${r>=Math.ceil(n.length/o)?"opacity-50 cursor-not-allowed":"hover:text-white cursor-pointer"}`,children:"→"})]})})]})]})})]})},Je=({children:e,title:t})=>{const[a,r]=y.useState([]),[i,o]=y.useState([]),[l,c]=y.useState(1),[d,u]=y.useState(!1),f=h=>{if(h<1||h>Math.ceil(a.length/5))return;c(h);const m=(h-1)*5;o(a.slice(m,m+5))};return y.useEffect(()=>{async function h(){try{const g=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Oe,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":Ne,"../../blog/posts/enterprise-ai-roi.mdx":Me,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":_e,"../../blog/posts/how-i-finally-organized-my-notes.mdx":Re,"../../blog/posts/lighthouse-ai-workflow.mdx":De,"../../blog/posts/spa-routing-hostinger.mdx":je,"../../blog/posts/tmux-config.mdx":Le})).map(([w,b])=>{const v=Be(w),A=ze(b);return{slug:v,title:A.title||"Untitled Post",date:A.date||"No date",tags:A.tags||[]}});g.sort((w,b)=>new Date(b.date)-new Date(w.date)),r(g),o(g.slice(0,5))}catch(m){console.error("Error loading blog posts for sidebar:",m),r([]),o([])}}h()},[]),p("div",{className:"relative z-0 bg-primary",children:[s(Yn,{}),p("div",{className:`${C.padding} max-w-7xl mx-auto relative z-0 mt-20`,children:[p("div",{className:"mb-16",children:[t&&s("h1",{className:`${C.sectionHeadText} mb-6`,children:t}),s("div",{className:"prose prose-invert prose-lg prose-headings:text-white prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:overflow-x-auto prose-li:text-gray-300 max-w-none [&_code::before]:content-none [&_code::after]:content-none",children:e})]}),p("div",{className:"mt-12 pt-8 border-t border-gray-800",children:[p("button",{onClick:()=>u(!d),className:"flex items-center text-white font-normal mb-4 hover:text-[#915eff] transition-colors duration-300",children:[s("span",{className:"mr-2",children:d?"▼":"►"}),s("h3",{className:"font-semibold text-xl",children:"Recent Posts"})]}),d&&p("div",{className:"p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg",children:[s("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.map((h,m)=>p("div",{className:"border-b border-gray-700/30 pb-4 last:border-b-0",children:[s(R,{to:`/blog/${h.slug}/`,className:"block text-secondary hover:text-white transition-colors duration-300 font-normal",children:h.title}),s("div",{className:"text-xs text-gray-400 mt-1",children:h.date}),s("div",{className:"flex flex-wrap gap-1 mt-2",children:h.tags.slice(0,3).map(g=>p("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",g]},g))})]},h.slug))}),a.length>5&&s("div",{className:"mt-4 flex justify-center pt-2 border-t border-gray-700/30 text-xs",children:p("div",{className:"inline-flex items-center gap-2",children:[s("button",{onClick:()=>f(l-1),disabled:l===1,className:`${l===1?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"←"}),p("span",{className:"text-secondary mx-1",children:[l,"/",Math.ceil(a.length/5)]}),s("button",{onClick:()=>f(l+1),disabled:l>=Math.ceil(a.length/5),className:`${l>=Math.ceil(a.length/5)?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"→"})]})})]})]})]})]})};const se="https://www.samratjha.com",V={name:"Samrat Jha",url:"https://www.samratjha.com/",jobTitle:"Senior AI Engineer",employer:"NVIDIA"},Vt=()=>{const{slug:e}=oa(),[t,n]=y.useState(null),[a,r]=y.useState(!0),[i,o]=y.useState(!1);y.useEffect(()=>{async function g(){try{r(!0);const w=Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":()=>P(()=>import("./cloudflare-workers-full-stack-438b722f.js"),["assets/cloudflare-workers-full-stack-438b722f.js","assets/three-f4f913dc.js"]),"../../blog/posts/cloudflare-zero-trust-homelab.mdx":()=>P(()=>import("./cloudflare-zero-trust-homelab-24e97251.js"),["assets/cloudflare-zero-trust-homelab-24e97251.js","assets/three-f4f913dc.js"]),"../../blog/posts/enterprise-ai-roi.mdx":()=>P(()=>import("./enterprise-ai-roi-c2cc7c20.js"),["assets/enterprise-ai-roi-c2cc7c20.js","assets/three-f4f913dc.js"]),"../../blog/posts/github-pages-cloudflare-subdomain.mdx":()=>P(()=>import("./github-pages-cloudflare-subdomain-d814a6e6.js"),["assets/github-pages-cloudflare-subdomain-d814a6e6.js","assets/three-f4f913dc.js"]),"../../blog/posts/how-i-finally-organized-my-notes.mdx":()=>P(()=>import("./how-i-finally-organized-my-notes-49846e91.js"),["assets/how-i-finally-organized-my-notes-49846e91.js","assets/three-f4f913dc.js"]),"../../blog/posts/lighthouse-ai-workflow.mdx":()=>P(()=>import("./lighthouse-ai-workflow-a39fc5f5.js"),["assets/lighthouse-ai-workflow-a39fc5f5.js","assets/three-f4f913dc.js"]),"../../blog/posts/spa-routing-hostinger.mdx":()=>P(()=>import("./spa-routing-hostinger-9b59633b.js"),["assets/spa-routing-hostinger-9b59633b.js","assets/three-f4f913dc.js"]),"../../blog/posts/tmux-config.mdx":()=>P(()=>import("./tmux-config-85343371.js"),["assets/tmux-config-85343371.js","assets/three-f4f913dc.js"])}),v=Object.keys(w).find(Xn=>Be(Xn)===e);if(!v){o(!0),r(!1);return}const j=Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Oe,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":Ne,"../../blog/posts/enterprise-ai-roi.mdx":Me,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":_e,"../../blog/posts/how-i-finally-organized-my-notes.mdx":Re,"../../blog/posts/lighthouse-ai-workflow.mdx":De,"../../blog/posts/spa-routing-hostinger.mdx":je,"../../blog/posts/tmux-config.mdx":Le})[v],pe=ze(j),Qn=pe.description||Jn(j,160),qn=(await w[v]()).default;n({title:pe.title||"Untitled Post",date:pe.date||"No date",description:Qn,tags:pe.tags||[],component:qn,slug:e}),r(!1)}catch(w){console.error("Error loading blog post:",w),o(!0),r(!1)}}g()},[e]);const l=g=>!g||g==="No date"?null:new Date(g).toISOString(),c=()=>{if(!t)return null;const g=l(t.date);return{"@context":"https://schema.org","@type":"BlogPosting",headline:t.title,description:t.description,datePublished:g,dateModified:g,author:{"@type":"Person",name:V.name,url:V.url,jobTitle:V.jobTitle},publisher:{"@type":"Person",name:V.name,url:V.url},mainEntityOfPage:{"@type":"WebPage","@id":`${se}/blog/${t.slug}/`},keywords:t.tags.join(", ")}},d=()=>t?{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${se}/`},{"@type":"ListItem",position:2,name:"Blog",item:`${se}/blog/`},{"@type":"ListItem",position:3,name:t.title,item:`${se}/blog/${t.slug}/`}]}:null;if(a)return s(Je,{children:s("div",{className:"text-center py-20",children:s("h1",{className:"text-4xl text-white font-semibold mb-4",children:"Loading..."})})});if(i||!t)return p($,{children:[p($e,{children:[s("title",{children:"Post Not Found | Samrat Jha"}),s("meta",{name:"robots",content:"noindex"})]}),s(Je,{children:p("div",{className:"text-center py-20",children:[s("h1",{className:"text-4xl text-white font-semibold mb-4",children:"Post Not Found"}),s("p",{className:"text-secondary",children:"The blog post you're looking for doesn't exist."})]})})]});const u=t.component,f=`${se}/blog/${t.slug}/`,h=c(),m=d();return p($,{children:[p($e,{children:[p("title",{children:[t.title," | Samrat Jha"]}),s("meta",{name:"title",content:`${t.title} | Samrat Jha`}),s("meta",{name:"description",content:t.description}),s("meta",{name:"author",content:V.name}),s("meta",{name:"keywords",content:t.tags.join(", ")}),s("link",{rel:"canonical",href:f}),s("meta",{property:"og:type",content:"article"}),s("meta",{property:"og:url",content:f}),s("meta",{property:"og:title",content:t.title}),s("meta",{property:"og:description",content:t.description}),s("meta",{property:"og:site_name",content:"Samrat Jha"}),s("meta",{property:"article:published_time",content:l(t.date)}),s("meta",{property:"article:author",content:V.url}),t.tags.map(g=>s("meta",{property:"article:tag",content:g},g)),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:url",content:f}),s("meta",{name:"twitter:title",content:t.title}),s("meta",{name:"twitter:description",content:t.description}),s("script",{type:"application/ld+json",children:JSON.stringify(h)}),s("script",{type:"application/ld+json",children:JSON.stringify(m)})]}),s(Je,{title:t.title,children:p("div",{children:[p("div",{className:"mb-6",children:[s("p",{className:"text-secondary",children:t.date}),s("div",{className:"flex flex-wrap gap-2 mt-2",children:t.tags.map(g=>p("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",g]},g))})]}),s("article",{className:"prose prose-invert prose-lg max-w-none blog-post-content",children:s(u,{})})]})})]})},gi=()=>{const{hash:e}=ia();return y.useEffect(()=>{if(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}},[e]),p("div",{className:"relative z-0 bg-primary",children:[s(xr,{}),s(Ar,{}),s(ci,{}),s(Jr,{}),s(kr,{}),s(si,{}),s("div",{className:"relative z-0",children:s(hi,{})})]})},yi=()=>p(sa,{children:[s(te,{path:"/",element:s(gi,{})}),s(te,{path:"/blog",element:s(Gt,{})}),s(te,{path:"/blog/",element:s(Gt,{})}),s(te,{path:"/blog/:slug",element:s(Vt,{})}),s(te,{path:"/blog/:slug/",element:s(Vt,{})})]});const bi=document.getElementById("root"),wi=s(F.StrictMode,{children:s($t,{children:s(la,{children:s(yi,{})})})});ra(bi).render(wi);export{Uo as p,Se as u};
