var pr=Object.defineProperty;var mr=(e,t,n)=>t in e?pr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(mr(e,typeof t!="symbol"?t+"":t,n),n);import{g as Ee,a as W,r as y,u as fr,j as h,H as gr,b as s,C as dt,O as rn,c as yr,P as an,d as br,F as vr,D as wr,V as on,e as Ar,f as xr,h as Pr,p as ut,i as sn,k as te,_ as P,l as We,m as Er,n as Tr}from"./three-5874ebf6.js";import{u as ln,L as R,m as U,a as Sr,R as Ir,b as re,B as kr}from"./vendor-263f24f6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Cr=typeof Element<"u",Or=typeof Map=="function",Mr=typeof Set=="function",Nr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function we(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!we(e[r],t[r]))return!1;return!0}var i;if(Or&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!we(r.value[1],t.get(r.value[0])))return!1;return!0}if(Mr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Nr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[r]))return!1;if(Cr&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((a[r]==="_owner"||a[r]==="__v"||a[r]==="__o")&&e.$$typeof)&&!we(e[a[r]],t[a[r]]))return!1;return!0}return e!==e&&t!==t}var ht=function(t,n){try{return we(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const _r=Ee(ht);var Rr=function(e,t,n,r,a,i,o,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,a,i,o,l],u=0;c=new Error(t.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Dr=Rr;const Tt=Ee(Dr);var jr=function(t,n,r,a){var i=r?r.call(a,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<o.length;d++){var u=o[d];if(!c(u))return!1;var m=t[u],p=n[u];if(i=r?r.call(a,m,p,u):void 0,i===!1||i===void 0&&m!==p)return!1}return!0};const Lr=Ee(jr);var cn=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(cn||{}),Ue={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},St=Object.values(cn),pt={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},zr=Object.entries(pt).reduce((e,[t,n])=>(e[n]=t,e),{}),B="data-rh",Z={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},K=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Br=e=>{let t=K(e,"title");const n=K(e,Z.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=K(e,Z.DEFAULT_TITLE);return t||r||void 0},Hr=e=>K(e,Z.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ge=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Fr=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const a=Object.keys(r);for(let i=0;i<a.length;i+=1){const l=a[i].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),Wr=e=>console&&typeof console.warn=="function"&&console.warn(e),ae=(e,t,n)=>{const r={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Wr(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,i)=>{const o={};i.filter(c=>{let d;const u=Object.keys(c);for(let p=0;p<u.length;p+=1){const f=u[p],g=f.toLowerCase();t.indexOf(g)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(g==="rel"&&c[g].toLowerCase()==="stylesheet")&&(d=g),t.indexOf(f)!==-1&&(f==="innerHTML"||f==="cssText"||f==="itemprop")&&(d=f)}if(!d||!c[d])return!1;const m=c[d].toLowerCase();return r[d]||(r[d]={}),o[d]||(o[d]={}),r[d][m]?!1:(o[d][m]=!0,!0)}).reverse().forEach(c=>a.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const d=l[c],u={...r[d],...o[d]};r[d]=u}return a},[]).reverse()},Ur=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Gr=e=>({baseTag:Fr(["href"],e),bodyAttributes:Ge("bodyAttributes",e),defer:K(e,Z.DEFER),encode:K(e,Z.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ge("htmlAttributes",e),linkTags:ae("link",["rel","href"],e),metaTags:ae("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ae("noscript",["innerHTML"],e),onChangeClientState:Hr(e),scriptTags:ae("script",["src","innerHTML"],e),styleTags:ae("style",["cssText"],e),title:Br(e),titleAttributes:Ge("titleAttributes",e),prioritizeSeoTags:Ur(e,Z.PRIORITIZE_SEO_TAGS)}),dn=e=>Array.isArray(e)?e.join(""):e,Vr=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Ve=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Vr(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},It=(e,t)=>({...e,[t]:void 0}),Yr=["noscript","script","style"],Ke=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),un=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Jr=(e,t,n,r)=>{const a=un(n),i=dn(t);return a?`<${e} ${B}="true" ${a}>${Ke(i,r)}</${e}>`:`<${e} ${B}="true">${Ke(i,r)}</${e}>`},Qr=(e,t,n=!0)=>t.reduce((r,a)=>{const i=a,o=Object.keys(i).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const m=typeof i[u]>"u"?u:`${u}="${Ke(i[u],n)}"`;return d?`${d} ${m}`:m},""),l=i.innerHTML||i.cssText||"",c=Yr.indexOf(e)===-1;return`${r}<${e} ${B}="true" ${o}${c?"/>":`>${l}</${e}>`}`},""),hn=(e,t={})=>Object.keys(e).reduce((n,r)=>{const a=pt[r];return n[a||r]=e[r],n},t),qr=(e,t,n)=>{const r={key:t,[B]:!0},a=hn(n,r);return[W.createElement("title",a,t)]},Ae=(e,t)=>t.map((n,r)=>{const a={key:r,[B]:!0};return Object.keys(n).forEach(i=>{const l=pt[i]||i;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:c}}else a[l]=n[i]}),W.createElement(e,a)}),z=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>qr(e,t.title,t.titleAttributes),toString:()=>Jr(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>hn(t),toString:()=>un(t)};default:return{toComponent:()=>Ae(e,t),toString:()=>Qr(e,t,n)}}},Xr=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const a=Ve(e,Ue.meta),i=Ve(t,Ue.link),o=Ve(n,Ue.script);return{priorityMethods:{toComponent:()=>[...Ae("meta",a.priority),...Ae("link",i.priority),...Ae("script",o.priority)],toString:()=>`${z("meta",a.priority,r)} ${z("link",i.priority,r)} ${z("script",o.priority,r)}`},metaTags:a.default,linkTags:i.default,scriptTags:o.default}},Zr=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:a,noscriptTags:i,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:d}=e;let{linkTags:u,metaTags:m,scriptTags:p}=e,f={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:f,linkTags:u,metaTags:m,scriptTags:p}=Xr(e)),{priority:f,base:z("base",t,r),bodyAttributes:z("bodyAttributes",n,r),htmlAttributes:z("htmlAttributes",a,r),link:z("link",u,r),meta:z("meta",m,r),noscript:z("noscript",i,r),script:z("script",p,r),style:z("style",o,r),title:z("title",{title:l,titleAttributes:c},r)}},$e=Zr,ge=[],pn=!!(typeof window<"u"&&window.document&&window.document.createElement),et=class{constructor(e,t){H(this,"instances",[]);H(this,"canUseDOM",pn);H(this,"context");H(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ge:this.instances,add:e=>{(this.canUseDOM?ge:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?ge:this.instances).indexOf(e);(this.canUseDOM?ge:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=$e({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Kr={},mn=W.createContext(Kr),ee,fn=(ee=class extends y.Component{constructor(n){super(n);H(this,"helmetData");this.helmetData=new et(this.props.context||{},ee.canUseDOM)}render(){return W.createElement(mn.Provider,{value:this.helmetData.value},this.props.children)}},H(ee,"canUseDOM",pn),ee),J=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${B}]`),a=[].slice.call(r),i=[];let o;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const u=d,m=typeof l[u]>"u"?"":l[u];c.setAttribute(d,m)}c.setAttribute(B,"true"),a.some((d,u)=>(o=u,c.isEqualNode(d)))?a.splice(o,1):i.push(c)}),a.forEach(l=>l.parentNode?.removeChild(l)),i.forEach(l=>n.appendChild(l)),{oldTags:a,newTags:i}},tt=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(B),a=r?r.split(","):[],i=[...a],o=Object.keys(t);for(const l of o){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),a.indexOf(l)===-1&&a.push(l);const d=i.indexOf(l);d!==-1&&i.splice(d,1)}for(let l=i.length-1;l>=0;l-=1)n.removeAttribute(i[l]);a.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==o.join(",")&&n.setAttribute(B,o.join(","))},$r=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=dn(e)),tt("title",t)},kt=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:a,linkTags:i,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:m,titleAttributes:p}=e;tt("body",r),tt("html",a),$r(m,p);const f={baseTag:J("base",n),linkTags:J("link",i),metaTags:J("meta",o),noscriptTags:J("noscript",l),scriptTags:J("script",d),styleTags:J("style",u)},g={},v={};Object.keys(f).forEach(b=>{const{newTags:w,oldTags:A}=f[b];w.length&&(g[b]=w),A.length&&(v[b]=f[b].oldTags)}),t&&t(),c(e,g,v)},oe=null,ea=e=>{oe&&cancelAnimationFrame(oe),e.defer?oe=requestAnimationFrame(()=>{kt(e,()=>{oe=null})}):(kt(e),oe=null)},ta=ea,Ct=class extends y.Component{constructor(){super(...arguments);H(this,"rendered",!1)}shouldComponentUpdate(t){return!Lr(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const a=Gr(t.get().map(i=>{const o={...i.props};return delete o.context,o}));fn.canUseDOM?ta(a):$e&&(r=$e(a)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ze,nt=(Ze=class extends y.Component{shouldComponentUpdate(e){return!_r(It(this.props,"helmetData"),It(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Tt(St.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${St.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Tt(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return W.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:a,...i}=r.props,o=Object.keys(i).reduce((c,d)=>(c[zr[d]||d]=i[d],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,a),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,a);break;default:t=this.mapObjectTypeChildren(r,t,o,a);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof et)){const a=r;r=new et(a.context,!0),delete n.helmetData}return r?W.createElement(Ct,{...n,context:r.value}):W.createElement(mn.Consumer,null,a=>W.createElement(Ct,{...n,context:a}))}},H(Ze,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ze);const gn=()=>{const{progress:e}=fr();return h(gr,{children:[s("span",{className:"canvas-load"}),h("p",{style:{fontSize:14,color:"#f1f1f1",fontWeight:800,marginTop:40},children:[e.toFixed(2),"%"]})]})},na=()=>{const e=yr("./planet/scene.gltf");return s("primitive",{object:e.scene,scale:2.5,"position-y":0,"rotation-y":0})},ra=()=>s(dt,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:h(y.Suspense,{fallback:s(gn,{}),children:[s(rn,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),s(na,{})]})}),aa=e=>{const[t]=br([e.imgUrl]);return h(vr,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[s("ambientLight",{intensity:.25}),s("directionalLight",{position:[0,0,.05]}),h("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[s("icosahedronGeometry",{args:[1,1]}),s("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),s(wr,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],flatShading:!0,map:t})]})]})},oa=({icon:e})=>h(dt,{frameloop:"demand",gl:{preserveDrawingBuffer:!0},children:[h(y.Suspense,{fallback:s(gn,{}),children:[s(rn,{enableZoom:!1}),s(aa,{imgUrl:e})]}),s(an,{all:!0})]});function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(n),!0).forEach(function(r){$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}new on;new on;var L=function e(t,n,r){var a=this;yn(this,e),$(this,"dot2",function(i,o){return a.x*i+a.y*o}),$(this,"dot3",function(i,o,l){return a.x*i+a.y*o+a.z*l}),this.x=t,this.y=n,this.z=r},sa=[new L(1,1,0),new L(-1,1,0),new L(1,-1,0),new L(-1,-1,0),new L(1,0,1),new L(-1,0,1),new L(1,0,-1),new L(-1,0,-1),new L(0,1,1),new L(0,-1,1),new L(0,1,-1),new L(0,-1,-1)],Nt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],_t=new Array(512),Rt=new Array(512),ia=function(t){t>0&&t<1&&(t*=65536),t=Math.floor(t),t<256&&(t|=t<<8);for(var n=0;n<256;n++){var r;n&1?r=Nt[n]^t&255:r=Nt[n]^t>>8&255,_t[n]=_t[n+256]=r,Rt[n]=Rt[n+256]=sa[r%12]}};ia(0);function la(e){if(typeof e=="number")e=Math.abs(e);else if(typeof e=="string"){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%2147483647}return e===0&&(e=311),e}function Dt(e){var t=la(e);return function(){var n=t*48271%2147483647;return t=n,n/2147483647}}var ca=function e(t){var n=this;yn(this,e),$(this,"seed",0),$(this,"init",function(r){n.seed=r,n.value=Dt(r)}),$(this,"value",Dt(this.seed)),this.init(t)},da=new ca(Math.random()),ua={radius:1,center:[0,0,0]};function ha(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:da,r=Mt(Mt({},ua),t),a=r.radius,i=r.center,o=0;o<e.length;o+=3){var l=Math.pow(n.value(),.3333333333333333),c=n.value()*2-1,d=n.value()*2-1,u=n.value()*2-1,m=Math.sqrt(c*c+d*d+u*u);c=l*c/m,d=l*d/m,u=l*u/m,e[o]=c*a+i[0],e[o+1]=d*a+i[1],e[o+2]=u*a+i[2]}return e}const pa=()=>{const e=y.useRef(),t=ha(new Float32Array(5e3),{radius:1.2});return Ar((n,r)=>{e.current.rotation.x-=r/10,e.current.rotation.y-=r/15}),s("group",{rotation:[0,0,Math.PI/4],children:s(xr,{ref:e,positions:t,stride:3,children:s(Pr,{transparent:!0,color:"#f272c8",size:.001,sizeAttenuation:!0,depthWrite:!1})})})},ma=()=>ln().pathname.startsWith("/blog")?null:s("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:h(dt,{camera:{position:[0,0,1]},children:[s(y.Suspense,{fallback:null,children:s(pa,{})}),s(an,{all:!0})]})}),C={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},jt=100,fa=40,Lt=.12,zt=.01;function ga(e,t){const n=e.length/2,r=new Float32Array(n),a=new Float32Array(n),i=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++)r[l]=e[l*2],a[l]=e[l*2+1];return{count:n,baseX:r,baseY:a,dx:i,dy:o,dotSize:t,colors:null}}function ya(e,t,n,r){let a=!1;const{count:i,baseX:o,baseY:l,dx:c,dy:d}=e;for(let u=0;u<i;u++){let m=0,p=0;if(r){const f=o[u]+c[u],g=l[u]+d[u],v=f-t,b=g-n,w=Math.sqrt(v*v+b*b);if(w<jt&&w>0){const A=1-w/jt,j=A*A*A*fa;m=v/w*j,p=b/w*j}}c[u]+=(m-c[u])*Lt,d[u]+=(p-d[u])*Lt,Math.abs(c[u])<zt&&Math.abs(d[u])<zt?(c[u]=0,d[u]=0):a=!0}return a||r}function Bt(e,t,n,r){const{count:a,baseX:i,baseY:o,dx:l,dy:c,dotSize:d,colors:u}=t;e.clearRect(0,0,e.canvas.width,e.canvas.height);const m=d*r,p=.25*r;if(u){const f=new Map;for(let g=0;g<a;g++){const v=u[g];f.has(v)||f.set(v,[]),f.get(v).push(g)}for(const[g,v]of f){e.fillStyle=g;for(const b of v){const w=(i[b]+l[b])*r,A=(o[b]+c[b])*r;e.fillRect(w-p,A-p,m+p,m+p)}}}else{e.fillStyle=n;for(let f=0;f<a;f++){const g=(i[f]+l[f])*r,v=(o[f]+c[f])*r;e.fillRect(g-p,v-p,m+p,m+p)}}}function ba(e,t){const n=y.useRef(null),r=y.useRef(null),a=y.useRef({x:0,y:0,active:!1}),i=y.useRef(null),o=y.useRef(!1),l=y.useCallback(()=>{const p=n.current;if(!p||!r.current)return;const f=p.getContext("2d"),{x:g,y:v,active:b}=a.current,w=ya(r.current,g,v,b);Bt(f,r.current,e,window.devicePixelRatio||1),w?i.current=requestAnimationFrame(l):o.current=!1},[e]),c=y.useCallback(()=>{o.current||(o.current=!0,i.current=requestAnimationFrame(l))},[l]),d=y.useCallback(p=>{r.current=p;const f=n.current;if(f){const g=f.getContext("2d");Bt(g,r.current,e,window.devicePixelRatio||1)}},[e]),u=y.useCallback(p=>{const f=n.current?.getBoundingClientRect();f&&(a.current.x=p.clientX-f.left,a.current.y=p.clientY-f.top,a.current.active=!0,c())},[c]),m=y.useCallback(()=>{a.current.active=!1,c()},[c]);return y.useEffect(()=>()=>{i.current&&cancelAnimationFrame(i.current)},[]),{canvasRef:n,setDots:d,handlePointerMove:u,handlePointerLeave:m}}function va(e,t,n,r,a){const i=e.data,o=[];for(let l=0;l<n;l+=r)for(let c=0;c<t;c+=r){const d=(l*t+c)*4;i[d+3]>128&&o.push(c/a,l/a)}return new Float32Array(o)}function wa(e,t,n,r,a,i,o){const l=document.createElement("canvas");l.width=r*o,l.height=a*o;const c=l.getContext("2d");c.scale(o,o),c.font=t,c.fillStyle=n,c.textBaseline="top";const d=c.measureText(e),u=d.actualBoundingBoxAscent+d.actualBoundingBoxDescent,m=(r-d.width)/2,p=(a-u)/2;c.fillText(e,m,p);const f=c.getImageData(0,0,l.width,l.height),g=Math.max(1,Math.round(i*o));return va(f,l.width,l.height,g,o)}const Ht=({text:e,className:t="",color:n="#915eff",dotScale:r=2})=>{const{canvasRef:a,setDots:i,handlePointerMove:o,handlePointerLeave:l}=ba(n),c=y.useCallback(()=>{const d=a.current;if(!d)return;const u=d.getBoundingClientRect(),m=window.devicePixelRatio||1,p=u.width,f=u.height;d.width=p*m,d.height=f*m;const g=getComputedStyle(d),v=parseFloat(g.fontSize)||40,b=g.fontWeight||"900",w=g.fontFamily||"Poppins, sans-serif",A=`${b} ${v}px ${w}`,j=wa(e,A,n,p,f,r,m);i(ga(j,r))},[e,n,r,a,i]);return y.useEffect(()=>{c();const d=new ResizeObserver(c);return a.current&&d.observe(a.current),()=>d.disconnect()},[c,a]),h("span",{className:`relative inline-block ${t}`,children:[s("span",{className:"invisible",children:e}),s("canvas",{ref:a,"aria-hidden":"true",className:"absolute inset-0 w-full h-full",style:{fontSize:"inherit",fontWeight:"inherit",fontFamily:"inherit"},onPointerMove:o,onPointerLeave:l})]})},Aa=()=>s("section",{id:"about",className:"relative w-full mx-auto",children:s("div",{className:`${C.paddingX} max-w-7xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20`,children:s("div",{className:"max-w-5xl border-l border-[#915eff]/50 pl-6 sm:pl-8",children:h("div",{className:"grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20",children:[h("div",{children:[h("h1",{className:"font-black text-white text-[46px] leading-[56px] sm:text-[54px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px]",children:[s(Ht,{text:"Samrat",dotScale:2}),s("br",{}),s(Ht,{text:"Jha",dotScale:2})]}),s("p",{className:`${C.heroSubText} mt-5`,children:"I help teams build AI systems that work beyond the demo."}),h("div",{className:"mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-semibold",children:[s("a",{href:"https://cal.com/samrat-jha-akdwhz/30min",target:"_blank",rel:"noopener noreferrer",className:"text-white underline decoration-[#915eff] decoration-2 underline-offset-8 hover:text-[#dfd9ff]",children:"Book a meeting"}),s(R,{to:"/blog/",className:"text-[#dfd9ff] hover:text-white",children:"Latest writing →"})]})]}),h("div",{className:"max-w-2xl text-[16px] leading-8 sm:text-[18px]",children:[s("p",{className:"text-[#dfd9ff]",children:"I am a Senior AI Engineer at NVIDIA. I build the systems that make AI practical across the company: fast, economical, and dependable at scale."}),s("p",{className:"mt-5 text-secondary",children:"Before NVIDIA, I spent four years at AWS Outposts building hybrid cloud infrastructure for low-latency, mission-critical workloads. I designed globally deployed distributed systems where reliability, privacy, and operational discipline were essential. I now apply that foundation to model routers, evaluation platforms, ambient agents, and software factories."})]})]})})})}),xa="/assets/github-3b4e1609.png",bn="/assets/menu-242d80a8.svg",vn="/assets/close-ad0e0ca6.svg",Pa="/assets/docker-602a695a.png",Ea="/assets/aws-3992509b.png",Ta="data:image/png;base64,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",Sa="/assets/java-1d6e2973.png",Ia="data:image/png;base64,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",ka="/assets/nodejs-d83eb6dd.png",Ca="/assets/reactjs-966214a8.png",Oa="/assets/tailwind-6ece120d.png",Ma="data:image/png;base64,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",Na="/assets/threejs-1d0654a8.svg",_a="data:image/png;base64,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",Ra="/assets/golang-7ad4fbca.png",Da="/assets/python-90b5859b.png",ja="/assets/rust-63a52c0e.png",La="/assets/boeing-52b7c75f.png",Ft="/assets/aws-4fd147c7.png",Wt="/assets/appian-5f07f258.png",za="/assets/nvidia-5fd529f7.png",Ba="/assets/FloatingPhotoGallery-7ad5a24c.webp",Ha="/assets/ParallaxImageGallery-f4a8d517.webp",Fa="/assets/SAASLandingPage-fec1310d.webp",Wa="/assets/dashboard-2d63fee3.webp",Ua="/assets/argos-41add278.webp",Ga="/assets/space-selfie-3aba83c3.webp",Va="/assets/bird-radio-de14013d.webp",Ya="/assets/which-card-4999fe9e.webp",xe=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"media",title:"Media"},{id:"contact",title:"Contact"},{id:"blog",title:"Blog",isExternal:!0,path:"/blog/"},{id:"ai",title:"AI Consulting",isExternal:!0,path:"/ai/",isFullPage:!0}],Ja=[{name:"Git",icon:Ta},{name:"AWS",icon:Ea},{name:"Docker",icon:Pa},{name:"Kotlin",icon:_a},{name:"Java",icon:Sa},{name:"Rust",icon:ja},{name:"Golang",icon:Ra},{name:"Python",icon:Da},{name:"JavaScript",icon:Ia},{name:"TypeScript",icon:Ma},{name:"React JS",icon:Ca},{name:"Tailwind CSS",icon:Oa},{name:"Node JS",icon:ka},{name:"Three JS",icon:Na}],Qa=[{title:"Senior AI Engineer",company_name:"NVIDIA",icon:za,iconBg:"#76B900",date:"December 2025 - Current",points:["Building at the frontier of artificial intelligence"]},{title:"Software Engineer @ AWS Region Expansion",company_name:"AWS",icon:Ft,iconBg:"#383E56",date:"September 2024 - December 2025",points:["Built enterprise-grade ETL pipelines to ingest millions of multi-modal documents for RAG workloads","Deployed multi-agent systems to production for planning region builds and forecasting cost/timelines","Launched AI chatbots answering thousands of questions weekly with feedback loop systems for self-improvement"]},{title:"Software Engineer @ AWS Outposts",company_name:"AWS",icon:Ft,iconBg:"#383E56",date:"March 2022 - September 2024",points:["Built next generation of edge computing infrastructure to deliver the ultimate hybrid cloud experience","Focused on building event driven, low latency distributed systems using AWS ECS, Lambda, DynamoDB, EventBridge, Kotlin, Typescript and Rust","Led, designed and delivered numerous large features and projects spanning multiple teams and organizations"]},{title:"Senior Software Engineer",company_name:"Appian",icon:Wt,iconBg:"#383E56",date:"March 2021 - Jan 2022",points:["Led the integration with newly acquired company from Spain by being the first engineer to work directly in the Spain team","Collaborated across Spain and USA teams to develop sustainable engineering practices to ensure long term success","Implemented core features to make Robotic Process Automation (RPA) a native capability of the Appian platform","Won company wide award for excellent technical innovation in delivering the first successful integration with an acquired company for Appian"]},{title:"Software Engineer",company_name:"Appian",icon:Wt,iconBg:"#383E56",date:"Aug 2018 - March 2021",points:["Developed and delivered a full stack integration with Twilio in Appian's Intelligent Contact Center platform allowing cloud native telephony capabilities","Designed, implemented and presented a templatized end to end delivery pipeline of Appian applications to customers. Used to this day to ship thousands of applications on Appian","Empowered a 100+ engineer organization to be self-sufficient with AWS by solely managing a fleet of AWS accounts for the orgnanization","Developed and shipped an open source project, Terraform provider for Twilio, to be used by Appian and external companies"]},{title:"Software Engineer Intern",company_name:"Boeing",icon:La,iconBg:"#E6DEDD",date:"June 2018 - August 2018",points:["Part of the first cohort of software engineers for Boeing's Avionics department","Developed high performance flight simulation engine based on real time flight data","Won best hackathon project for building the first ever big data visualization platform for Boeing's internal test flights"]}],qa=[{name:"Mock Interview Prep",description:"Mock Software Engineering interview for the interview prep site [InterviewPen](https://www.interviewpen.com). Watch to see how to navigate and succeed in a FAANG interview",tags:[{name:"react",color:"blue-text-gradient"},{name:"mongodb",color:"green-text-gradient"},{name:"tailwind",color:"pink-text-gradient"}],embedId:"bmqZ5AhNr3g"},{name:"Podcast Interview",description:"Podcast appearance on [Back2BackSWE channel](https://www.youtube.com/@BackToBackSWE) (300K+ subscribers) where I give career guidance to software engineers about navigating the job hunt, how to interview and how to ultimately find the right fit",embedId:"y2y_ni8WLy0"},{name:"Commencement Speech",description:"Commencement speech for my college graduation where I talk about my childhood, my immigration to the US, my struggles and all my achievements since",embedId:"xxNa51UFGGI?start=2627"}],Xa=[{name:"Today's Tech",description:"Personal dashboard aggregating market data, GitHub trending repos, Hacker News, and tech news in a sleek terminal-inspired interface",image:Wa,source_code_link:"https://github.com/samratjha96/today",demo_link:"https://today.techbrohomelab.xyz/"},{name:"NetWorth Tracker",description:"Personal finance application to track net worth. Built with React, TypeScript, Tailwind CSS and shadcn-ui",image:Ua,source_code_link:"https://github.com/samratjha96/networth",demo_link:"https://argos.techbrohomelab.xyz/"},{name:"Bird Radio",description:"A retro-styled nature sound tuner that streams bird songs from around the world. Features real-time spectrogram visualization and region-based browsing",image:Va,source_code_link:"https://github.com/samratjha96/BirdRadio",demo_link:"https://bird-radio.pages.dev/"},{name:"Which Card",description:"Find the best credit card for every purchase. Search by merchant or category, compare rewards, and maximize your cashback with smart category disambiguation",image:Ya,source_code_link:"https://github.com/samratjha96/which-card",demo_link:"https://which-card.pages.dev"},{name:"Space Selfie",description:"Discover when the ISS flew over your special moments. Built with TypeScript, Cloudflare Workers, Hono, and satellite.js for orbital calculations",image:Ga,source_code_link:"https://github.com/samratjha96/space-selfie",demo_link:"https://space-selfie.zasamrat.workers.dev"},{name:"SAAS Landing Page",description:"Sleek white label SAAS landing page. Complete with engaging copy, animations and eye-catching design. This landing page can be reskinned for any client or project",image:Fa,source_code_link:"https://github.com/samratjha96/sample-saas-landing-page",demo_link:"https://sample-saas-landing-page.vercel.app/"},{name:"Parallax Image Gallery",description:"Sleek parallax animation showing off a collection of photos. Add a subtle but highly creative touch to your blog without cluttering the content with pictures",image:Ha,source_code_link:"https://github.com/samratjha96/parallax-image-gallery",demo_link:"https://parallax-image-gallery-beta.vercel.app/"},{name:"Floating Images Gallery",description:"Interactive floating images gallery built with React, Tailwind and GSAP for animation. Great way to show a collection of photographs in a museum style",image:Ba,source_code_link:"https://github.com/samratjha96/floating-images-gallery",demo_link:"https://floating-images-gallery.vercel.app/"}],wn="/personalLogo.png",Za=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(!1),[a,i]=y.useState(!1);return y.useEffect(()=>{const o=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s("nav",{className:`${C.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${a?"bg-primary":"bg-transparent"}
    `,children:h("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[h(R,{to:"/",className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[s("img",{src:wn,alt:"logo",className:"w-9 h-9 object-contain"}),h("p",{className:"text-white text-[18px] font-bold cursor-pointer flex",children:["Samrat  ",s("span",{className:"hidden sm:block",children:"| Portfolio"})]})]}),s("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:xe.map(o=>s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>t(o.title),children:o.isExternal?o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title}):s("a",{href:`#${o.id}`,children:o.title})},o.id))}),h("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[s("img",{src:n?vn:bn,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>r(!n)}),s("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:s("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:xe.map(o=>s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{t(o.title),r(!n)},children:o.isExternal?o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title}):s("a",{href:`#${o.id}`,children:o.title})},o.id))})})]})]})})},Ut=(e,t,n,r)=>{e.style.transition=`${t} ${n}ms ${r}`},F=(e,t,n)=>Math.min(Math.max(e,t),n);class Ka{constructor(t,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=o=>{const{width:l,height:c}=o,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=o=>{const l=this.calculateGlareSize(o);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(o,l,c,d)=>{this.updateAngle(o,l.glareReverse),this.updateOpacity(o,l,c,d)},this.updateAngle=(o,l)=>{const{xPercentage:c,yPercentage:d}=o,u=180/Math.PI,m=c?Math.atan2(d,-c)*u:0;this.glareAngle=m-(l?180:0)},this.updateOpacity=(o,l,c,d)=>{const{xPercentage:u,yPercentage:m}=o,{glarePosition:p,glareReverse:f,glareMaxOpacity:g}=l,v=c?-1:1,b=d?-1:1,w=f?-1:1;let A=0;switch(p){case"top":A=-u*v*w;break;case"right":A=m*b*w;break;case"bottom":case void 0:A=u*v*w;break;case"left":A=-m*b*w;break;case"all":A=Math.hypot(u,m)}const j=F(A,0,100);this.glareOpacity=j*g/100},this.render=o=>{const{glareColor:l}=o;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const r={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},a=this.calculateGlareSize(t),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${a.width}px`,height:`${a.height}px`};Object.assign(this.glareWrapperEl.style,r),Object.assign(this.glareEl.style,i)}}class $a{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,n)=>{this.updateTilt(t,n),this.updateTiltManualInput(t,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(t,n)=>{const{xPercentage:r,yPercentage:a}=t,{tiltMaxAngleX:i,tiltMaxAngleY:o}=n;this.tiltAngleX=r*i/100,this.tiltAngleY=a*o/100*-1},this.updateTiltManualInput=(t,n)=>{const{tiltAngleXManual:r,tiltAngleYManual:a,tiltMaxAngleX:i,tiltMaxAngleY:o}=n;(r!==null||a!==null)&&(this.tiltAngleX=r!==null?r:0,this.tiltAngleY=a!==null?a:0,t.xPercentage=100*this.tiltAngleX/i,t.yPercentage=100*this.tiltAngleY/o)},this.updateTiltReverse=t=>{const n=t.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:n}=t;this.tiltAngleX=F(this.tiltAngleX,-90,90),this.tiltAngleY=F(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:n,tiltMaxAngleY:r}=t;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/r*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const eo={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class An extends y.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const t=DeviceOrientationEvent.requestPermission;typeof t=="function"?await t()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n({event:t})},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n({event:t}),this.props.reset){const r=new CustomEvent("autoreset");this.onMove(r)}},this.processInput=t=>{const{scale:n}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=n;break;case"autoreset":{const{tiltAngleXInitial:r,tiltAngleYInitial:a,tiltMaxAngleX:i,tiltMaxAngleY:o}=this.props,l=a/o*100;this.wrapperEl.clientPosition.xPercentage=F(r/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=F(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:r}=this.props,a=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/n*100,this.wrapperEl.clientPosition.yPercentage=a/r*100,this.wrapperEl.clientPosition.xPercentage=F(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=F(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:n,flipVertically:r,flipHorizontally:a}=this.props;t!=="autoreset"&&t!=="deviceorientation"&&t!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,r,a)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let n,r;if(t){const{x:a,y:i}=this.wrapperEl.clientPosition;n=i/window.innerHeight*200-100,r=a/window.innerWidth*200-100}else{const{size:{width:a,height:i,left:o,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;n=(d-l)/i*200-100,r=(c-o)/a*200-100}this.wrapperEl.clientPosition.xPercentage=F(n,-100,100),this.wrapperEl.clientPosition.yPercentage=F(r,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:n}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new $a,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const t=new CustomEvent("autoreset");this.mainLoop(t);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:n}=this.props;t&&(this.glare=new Ka(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:n}=this.props;if(!n)return;let r=0,a=0;this.glare&&(r=this.glare.glareAngle,a=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:r,glareOpacity:a,event:t})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:n}=this.props;Ut(this.wrapperEl.node,"all",t,n),this.glare&&Ut(this.glare.glareEl,"opacity",t,n)}render(){const{children:t,className:n,style:r}=this.props;return s("div",{ref:a=>{this.wrapperEl.node=a},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:r,children:t})}}An.defaultProps=eo;const mt=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),ft=(e,t,n,r)=>({hidden:{x:e==="left"?100:e==="right"?-100:0,y:e==="up"?100:e==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:n,duration:r,ease:"easeOut"}}}),Gt=(e,t,n,r)=>({hidden:{x:e==="left"?"-100%":e==="right"?"100%":0,y:e==="up"||e==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:n,duration:r,ease:"easeOut"}}}),to=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),ue=(e,t)=>function(){return h(U.section,{variants:to(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`${C.padding} max-w-7xl mx-auto relative z-0`,children:[s("span",{className:"hash-span",id:t,children:" "}),s(e,{})]})},no=()=>s("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:Ja.map((e,t)=>h("div",{className:"flex flex-col items-center",children:[s("div",{className:"w-28 h-28",children:s(oa,{icon:e.icon})},e.name),s("div",{children:s("span",{className:"text-slate-400 text-[14px] tracking-wider",children:e.name})})]},t))}),ro=ue(no,"");var Te={},xn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(xn);var Pn=xn.exports;Te.__esModule=!0;Te.default=void 0;var ao=gt(y),G=gt(ut),oo=gt(Pn);function gt(e){return e&&e.__esModule?e:{default:e}}const En=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:r="#FFF",children:a})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",r),ao.default.createElement("div",{className:(0,oo.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},a));En.propTypes={children:G.default.oneOfType([G.default.arrayOf(G.default.node),G.default.node]).isRequired,className:G.default.string,animate:G.default.bool,layout:G.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:G.default.string};var so=En;Te.default=so;var Se={};function rt(){return rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rt.apply(this,arguments)}function io(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,at(e,t)}function at(e,t){return at=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},at(e,t)}function lo(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var ot=new Map,ye=new WeakMap,Vt=0,Tn=void 0;function co(e){Tn=e}function uo(e){return e?(ye.has(e)||(Vt+=1,ye.set(e,Vt.toString())),ye.get(e)):"0"}function ho(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?uo(e.root):e[t])}).toString()}function po(e){var t=ho(e),n=ot.get(t);if(!n){var r=new Map,a,i=new IntersectionObserver(function(o){o.forEach(function(l){var c,d=l.isIntersecting&&a.some(function(u){return l.intersectionRatio>=u});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=d),(c=r.get(l.target))==null||c.forEach(function(u){u(d,l)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ot.set(t,n)}return n}function yt(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=Tn),typeof window.IntersectionObserver>"u"&&r!==void 0){var a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=po(n),o=i.id,l=i.observer,c=i.elements,d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),ot.delete(o))}}var mo=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Yt(e){return typeof e.children!="function"}var Pe=function(e){io(t,e);function t(r){var a;return a=e.call(this,r)||this,a.node=null,a._unobserveCb=null,a.handleNode=function(i){a.node&&(a.unobserve(),!i&&!a.props.triggerOnce&&!a.props.skip&&a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=i||null,a.observeNode()},a.handleChange=function(i,o){i&&a.props.triggerOnce&&a.unobserve(),Yt(a.props)||a.setState({inView:i,entry:o}),a.props.onChange&&a.props.onChange(i,o)},a.state={inView:!!r.initialInView,entry:void 0},a}var n=t.prototype;return n.componentDidUpdate=function(a){(a.rootMargin!==this.props.rootMargin||a.root!==this.props.root||a.threshold!==this.props.threshold||a.skip!==this.props.skip||a.trackVisibility!==this.props.trackVisibility||a.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var a=this.props,i=a.threshold,o=a.root,l=a.rootMargin,c=a.trackVisibility,d=a.delay,u=a.fallbackInView;this._unobserveCb=yt(this.node,this.handleChange,{threshold:i,root:o,rootMargin:l,trackVisibility:c,delay:d},u)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!Yt(this.props)){var a=this.state,i=a.inView,o=a.entry;return this.props.children({inView:i,entry:o,ref:this.handleNode})}var l=this.props,c=l.children,d=l.as,u=lo(l,mo);return y.createElement(d||"div",rt({ref:this.handleNode},u),c)},t}(y.Component);Pe.displayName="InView";Pe.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function fo(e){var t=e===void 0?{}:e,n=t.threshold,r=t.delay,a=t.trackVisibility,i=t.rootMargin,o=t.root,l=t.triggerOnce,c=t.skip,d=t.initialInView,u=t.fallbackInView,m=y.useRef(),p=y.useState({inView:!!d}),f=p[0],g=p[1],v=y.useCallback(function(w){m.current!==void 0&&(m.current(),m.current=void 0),!c&&w&&(m.current=yt(w,function(A,j){g({inView:A,entry:j}),j.isIntersecting&&l&&m.current&&(m.current(),m.current=void 0)},{root:o,rootMargin:i,threshold:n,trackVisibility:a,delay:r},u))},[Array.isArray(n)?n.toString():n,o,i,l,c,a,u,r]);y.useEffect(function(){!m.current&&f.entry&&!l&&!c&&g({inView:!!d})});var b=[v,f.inView,f.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const go=Object.freeze(Object.defineProperty({__proto__:null,InView:Pe,default:Pe,defaultFallbackInView:co,observe:yt,useInView:fo},Symbol.toStringTag,{value:"Module"})),yo=sn(go);Se.__esModule=!0;Se.default=void 0;var V=bt(y),x=bt(ut),be=bt(Pn),bo=yo;function bt(e){return e&&e.__esModule?e:{default:e}}const Sn=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:r=null,date:a="",dateClassName:i="",icon:o=null,iconClassName:l="",iconOnClick:c=null,onTimelineElementClick:d=null,iconStyle:u=null,id:m="",position:p="",style:f=null,textClassName:g="",intersectionObserverProps:v={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1})=>V.default.createElement(bo.InView,v,({inView:w,ref:A})=>V.default.createElement("div",{ref:A,id:m,className:(0,be.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":p==="left","vertical-timeline-element--right":p==="right","vertical-timeline-element--no-children":e===""}),style:f},V.default.createElement(V.default.Fragment,null,V.default.createElement("span",{style:u,onClick:c,className:(0,be.default)(l,"vertical-timeline-element-icon",{"bounce-in":w||b,"is-hidden":!(w||b)})},o),V.default.createElement("div",{style:r,onClick:d,className:(0,be.default)(g,"vertical-timeline-element-content",{"bounce-in":w||b,"is-hidden":!(w||b)})},V.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,V.default.createElement("span",{className:(0,be.default)(i,"vertical-timeline-element-date")},a)))));Sn.propTypes={children:x.default.oneOfType([x.default.arrayOf(x.default.node),x.default.node]),className:x.default.string,contentArrowStyle:x.default.shape({}),contentStyle:x.default.shape({}),date:x.default.node,dateClassName:x.default.string,icon:x.default.element,iconClassName:x.default.string,iconStyle:x.default.shape({}),iconOnClick:x.default.func,onTimelineElementClick:x.default.func,id:x.default.string,position:x.default.string,style:x.default.shape({}),textClassName:x.default.string,visible:x.default.bool,intersectionObserverProps:x.default.shape({root:x.default.object,rootMargin:x.default.string,threshold:x.default.number,triggerOnce:x.default.bool})};var vo=Sn;Se.default=vo;var In={VerticalTimeline:Te.default,VerticalTimelineElement:Se.default};const wo={NVIDIA:"https://www.nvidia.com/",AWS:"https://aws.amazon.com/",Appian:"https://appian.com/",Boeing:"https://www.boeing.com/"},Ao=({experience:e})=>{const t=wo[e.company_name];return h(In.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:s("div",{className:"flex justify-center items-center w-full h-full",children:s("img",{src:e.icon,alt:e.company_name,width:36,height:36,loading:"lazy",className:"w-[60%] h-[60%] object-contain"})}),children:[h("div",{children:[s("h3",{className:"text-white text-[24px] font-bold",children:e.title}),s("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t?s("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#915eff] transition-colors",children:e.company_name}):e.company_name})]}),s("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,r)=>s("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${r}`))})]})},xo=()=>h(te,{children:[h(U.div,{variants:mt(),children:[s("p",{className:C.sectionSubText,children:"What I have done so far"}),s("h2",{className:C.sectionHeadText,children:"Work Experience"})]}),s("div",{className:"mt-20 flex flex-col",children:s(In.VerticalTimeline,{children:Qa.map((e,t)=>s(Ao,{experience:e},t))})})]}),Po=ue(xo,"work");var Eo=function(t,n,r){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async="async"in n?!!n.async:!0,i.src=t,n.attrs&&To(i,n.attrs),n.text&&(i.text=""+n.text);var o="onload"in i?Jt:So;o(i,r),i.onload||Jt(i,r),a.appendChild(i)};function To(e,t){for(var n in t)e.setAttribute(n,t[n])}function Jt(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function So(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Io=function(t){return ko(t)&&!Co(t)};function ko(e){return!!e&&typeof e=="object"}function Co(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||No(e)}var Oo=typeof Symbol=="function"&&Symbol.for,Mo=Oo?Symbol.for("react.element"):60103;function No(e){return e.$$typeof===Mo}function _o(e){return Array.isArray(e)?[]:{}}function de(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ne(_o(e),e,t):e}function Ro(e,t,n){return e.concat(t).map(function(r){return de(r,n)})}function Do(e,t){if(!t.customMerge)return ne;var n=t.customMerge(e);return typeof n=="function"?n:ne}function jo(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Qt(e){return Object.keys(e).concat(jo(e))}function kn(e,t){try{return t in e}catch{return!1}}function Lo(e,t){return kn(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function zo(e,t,n){var r={};return n.isMergeableObject(e)&&Qt(e).forEach(function(a){r[a]=de(e[a],n)}),Qt(t).forEach(function(a){Lo(e,a)||(kn(e,a)&&n.isMergeableObject(t[a])?r[a]=Do(a,n)(e[a],t[a],n):r[a]=de(t[a],n))}),r}function ne(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Ro,n.isMergeableObject=n.isMergeableObject||Io,n.cloneUnlessOtherwiseSpecified=de;var r=Array.isArray(t),a=Array.isArray(e),i=r===a;return i?r?n.arrayMerge(e,t,n):zo(e,t,n):de(t,n)}ne.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,a){return ne(r,a,n)},{})};var Bo=ne,Cn=Bo,Ho=Object.create,Ie=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Wo=Object.getOwnPropertyNames,Uo=Object.getPrototypeOf,Go=Object.prototype.hasOwnProperty,Vo=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},On=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Wo(t))!Go.call(e,a)&&a!==n&&Ie(e,a,{get:()=>t[a],enumerable:!(r=Fo(t,a))||r.enumerable});return e},vt=(e,t,n)=>(n=e!=null?Ho(Uo(e)):{},On(t||!e||!e.__esModule?Ie(n,"default",{value:e,enumerable:!0}):n,e)),Yo=e=>On(Ie({},"__esModule",{value:!0}),e),Mn={};Vo(Mn,{callPlayer:()=>ls,getConfig:()=>ss,getSDK:()=>os,isBlobUrl:()=>ds,isMediaStream:()=>cs,lazy:()=>Xo,omit:()=>is,parseEndTime:()=>ns,parseStartTime:()=>ts,queryString:()=>as,randomString:()=>rs,supportsWebKitPresentationMode:()=>us});var ke=Yo(Mn),Jo=vt(y),Qo=vt(Eo),qo=vt(Cn);const Xo=e=>Jo.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Zo=/[?&#](?:start|t)=([0-9hms]+)/,Ko=/[?&#]end=([0-9hms]+)/,st=/(\d+)(h|m|s)/g,$o=/^\d+$/;function Nn(e,t){if(e instanceof Array)return;const n=e.match(t);if(n){const r=n[1];if(r.match(st))return es(r);if($o.test(r))return parseInt(r)}}function es(e){let t=0,n=st.exec(e);for(;n!==null;){const[,r,a]=n;a==="h"&&(t+=parseInt(r,10)*60*60),a==="m"&&(t+=parseInt(r,10)*60),a==="s"&&(t+=parseInt(r,10)),n=st.exec(e)}return t}function ts(e){return Nn(e,Zo)}function ns(e){return Nn(e,Ko)}function rs(){return Math.random().toString(36).substr(2,5)}function as(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function Ye(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const Q={},os=function(t,n,r=null,a=()=>!0,i=Qo.default){const o=Ye(n);return o&&a(o)?Promise.resolve(o):new Promise((l,c)=>{if(Q[t]){Q[t].push({resolve:l,reject:c});return}Q[t]=[{resolve:l,reject:c}];const d=u=>{Q[t].forEach(m=>m.resolve(u))};if(r){const u=window[r];window[r]=function(){u&&u(),d(Ye(n))}}i(t,u=>{u?(Q[t].forEach(m=>m.reject(u)),Q[t]=null):r||d(Ye(n))})})};function ss(e,t){return(0,qo.default)(t.config,e.config)}function is(e,...t){const n=[].concat(...t),r={},a=Object.keys(e);for(const i of a)n.indexOf(i)===-1&&(r[i]=e[i]);return r}function ls(e,...t){if(!this.player||!this.player[e]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[e](...t)}function cs(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function ds(e){return/^blob:/.test(e)}function us(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var wt=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,ps=Object.getOwnPropertyNames,ms=Object.prototype.hasOwnProperty,fs=(e,t)=>{for(var n in t)wt(e,n,{get:t[n],enumerable:!0})},gs=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ps(t))!ms.call(e,a)&&a!==n&&wt(e,a,{get:()=>t[a],enumerable:!(r=hs(t,a))||r.enumerable});return e},ys=e=>gs(wt({},"__esModule",{value:!0}),e),_n={};fs(_n,{AUDIO_EXTENSIONS:()=>At,DASH_EXTENSIONS:()=>Jn,FLV_EXTENSIONS:()=>Qn,HLS_EXTENSIONS:()=>Pt,MATCH_URL_DAILYMOTION:()=>Un,MATCH_URL_FACEBOOK:()=>Ln,MATCH_URL_FACEBOOK_WATCH:()=>zn,MATCH_URL_KALTURA:()=>Yn,MATCH_URL_MIXCLOUD:()=>Gn,MATCH_URL_MUX:()=>jn,MATCH_URL_SOUNDCLOUD:()=>Rn,MATCH_URL_STREAMABLE:()=>Bn,MATCH_URL_TWITCH_CHANNEL:()=>Wn,MATCH_URL_TWITCH_VIDEO:()=>Fn,MATCH_URL_VIDYARD:()=>Vn,MATCH_URL_VIMEO:()=>Dn,MATCH_URL_WISTIA:()=>Hn,MATCH_URL_YOUTUBE:()=>it,VIDEO_EXTENSIONS:()=>xt,canPlay:()=>vs});var bs=ys(_n),qt=ke;const it=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Rn=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Dn=/vimeo\.com\/(?!progressive_redirect).+/,jn=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ln=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,zn=/^https?:\/\/fb\.watch\/.+$/,Bn=/streamable\.com\/([a-z0-9]+)$/,Hn=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Fn=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Wn=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Un=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Gn=/mixcloud\.com\/([^/]+\/[^/]+)/,Vn=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Yn=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,At=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,xt=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Pt=/\.(m3u8)($|\?)/i,Jn=/\.(mpd)($|\?)/i,Qn=/\.(flv)($|\?)/i,lt=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&lt(t)||lt(t.src))return!0;return!1}return(0,qt.isMediaStream)(e)||(0,qt.isBlobUrl)(e)?!0:At.test(e)||xt.test(e)||Pt.test(e)||Jn.test(e)||Qn.test(e)},vs={youtube:e=>e instanceof Array?e.every(t=>it.test(t)):it.test(e),soundcloud:e=>Rn.test(e)&&!At.test(e),vimeo:e=>Dn.test(e)&&!xt.test(e)&&!Pt.test(e),mux:e=>jn.test(e),facebook:e=>Ln.test(e)||zn.test(e),streamable:e=>Bn.test(e),wistia:e=>Hn.test(e),twitch:e=>Fn.test(e)||Wn.test(e),dailymotion:e=>Un.test(e),mixcloud:e=>Gn.test(e),vidyard:e=>Vn.test(e),kaltura:e=>Yn.test(e),file:lt};var Et=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,As=Object.getOwnPropertyNames,xs=Object.prototype.hasOwnProperty,Ps=(e,t)=>{for(var n in t)Et(e,n,{get:t[n],enumerable:!0})},Es=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of As(t))!xs.call(e,a)&&a!==n&&Et(e,a,{get:()=>t[a],enumerable:!(r=ws(t,a))||r.enumerable});return e},Ts=e=>Es(Et({},"__esModule",{value:!0}),e),qn={};Ps(qn,{default:()=>Is});var Ss=Ts(qn),_=ke,M=bs,Is=[{key:"youtube",name:"YouTube",canPlay:M.canPlay.youtube,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./YouTube-ea1a99b9.js").then(e=>e.Y),["assets/YouTube-ea1a99b9.js","assets/three-5874ebf6.js"]))},{key:"soundcloud",name:"SoundCloud",canPlay:M.canPlay.soundcloud,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./SoundCloud-9e337146.js").then(e=>e.S),["assets/SoundCloud-9e337146.js","assets/three-5874ebf6.js"]))},{key:"vimeo",name:"Vimeo",canPlay:M.canPlay.vimeo,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Vimeo-0d4a0f26.js").then(e=>e.V),["assets/Vimeo-0d4a0f26.js","assets/three-5874ebf6.js"]))},{key:"mux",name:"Mux",canPlay:M.canPlay.mux,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Mux-b7f9829e.js").then(e=>e.M),["assets/Mux-b7f9829e.js","assets/three-5874ebf6.js"]))},{key:"facebook",name:"Facebook",canPlay:M.canPlay.facebook,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Facebook-96467e75.js").then(e=>e.F),["assets/Facebook-96467e75.js","assets/three-5874ebf6.js"]))},{key:"streamable",name:"Streamable",canPlay:M.canPlay.streamable,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Streamable-967574b3.js").then(e=>e.S),["assets/Streamable-967574b3.js","assets/three-5874ebf6.js"]))},{key:"wistia",name:"Wistia",canPlay:M.canPlay.wistia,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Wistia-a79eb8c7.js").then(e=>e.W),["assets/Wistia-a79eb8c7.js","assets/three-5874ebf6.js"]))},{key:"twitch",name:"Twitch",canPlay:M.canPlay.twitch,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Twitch-8cc14422.js").then(e=>e.T),["assets/Twitch-8cc14422.js","assets/three-5874ebf6.js"]))},{key:"dailymotion",name:"DailyMotion",canPlay:M.canPlay.dailymotion,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./DailyMotion-a778c0b2.js").then(e=>e.D),["assets/DailyMotion-a778c0b2.js","assets/three-5874ebf6.js"]))},{key:"mixcloud",name:"Mixcloud",canPlay:M.canPlay.mixcloud,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Mixcloud-a5ee6394.js").then(e=>e.M),["assets/Mixcloud-a5ee6394.js","assets/three-5874ebf6.js"]))},{key:"vidyard",name:"Vidyard",canPlay:M.canPlay.vidyard,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Vidyard-9fb630d8.js").then(e=>e.V),["assets/Vidyard-9fb630d8.js","assets/three-5874ebf6.js"]))},{key:"kaltura",name:"Kaltura",canPlay:M.canPlay.kaltura,lazyPlayer:(0,_.lazy)(()=>P(()=>import("./Kaltura-121c6b7c.js").then(e=>e.K),["assets/Kaltura-121c6b7c.js","assets/three-5874ebf6.js"]))},{key:"file",name:"FilePlayer",canPlay:M.canPlay.file,canEnablePIP:e=>M.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,_.supportsWebKitPresentationMode)())&&!M.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,_.lazy)(()=>P(()=>import("./FilePlayer-78e84db5.js").then(e=>e.F),["assets/FilePlayer-78e84db5.js","assets/three-5874ebf6.js"]))}],Xt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ks(e,t){return!!(e===t||Xt(e)&&Xt(t))}function Cs(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!ks(e[n],t[n]))return!1;return!0}function Os(e,t){t===void 0&&(t=Cs);var n,r=[],a,i=!1;function o(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return i&&n===this&&t(l,r)||(a=e.apply(this,l),i=!0,n=this,r=l),a}return o}const Ms=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"})),Ns=sn(Ms);var _s=Object.create,Ce=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Ds=Object.getOwnPropertyNames,js=Object.getPrototypeOf,Ls=Object.prototype.hasOwnProperty,zs=(e,t)=>{for(var n in t)Ce(e,n,{get:t[n],enumerable:!0})},Xn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ds(t))!Ls.call(e,a)&&a!==n&&Ce(e,a,{get:()=>t[a],enumerable:!(r=Rs(t,a))||r.enumerable});return e},Bs=(e,t,n)=>(n=e!=null?_s(js(e)):{},Xn(t||!e||!e.__esModule?Ce(n,"default",{value:e,enumerable:!0}):n,e)),Hs=e=>Xn(Ce({},"__esModule",{value:!0}),e),Zn={};zs(Zn,{defaultProps:()=>Us,propTypes:()=>Ws});var Kn=Hs(Zn),Fs=Bs(ut);const{string:I,bool:N,number:q,array:Je,oneOfType:se,shape:D,object:O,func:S,node:Zt}=Fs.default,Ws={url:se([I,Je,O]),playing:N,loop:N,controls:N,volume:q,muted:N,playbackRate:q,width:se([I,q]),height:se([I,q]),style:O,progressInterval:q,playsinline:N,pip:N,stopOnUnmount:N,light:se([N,I,O]),playIcon:Zt,previewTabIndex:q,previewAriaLabel:I,fallback:Zt,oEmbedUrl:I,wrapper:se([I,S,D({render:S.isRequired})]),config:D({soundcloud:D({options:O}),youtube:D({playerVars:O,embedOptions:O,onUnstarted:S}),facebook:D({appId:I,version:I,playerId:I,attributes:O}),dailymotion:D({params:O}),vimeo:D({playerOptions:O,title:I}),mux:D({attributes:O,version:I}),file:D({attributes:O,tracks:Je,forceVideo:N,forceAudio:N,forceHLS:N,forceSafariHLS:N,forceDisableHls:N,forceDASH:N,forceFLV:N,hlsOptions:O,hlsVersion:I,dashVersion:I,flvVersion:I}),wistia:D({options:O,playerId:I,customControls:Je}),mixcloud:D({options:O}),twitch:D({options:O,playerId:I}),vidyard:D({options:O})}),onReady:S,onStart:S,onPlay:S,onPause:S,onBuffer:S,onBufferEnd:S,onEnded:S,onError:S,onDuration:S,onSeek:S,onPlaybackRateChange:S,onPlaybackQualityChange:S,onProgress:S,onClickPreview:S,onEnablePIP:S,onDisablePIP:S},k=()=>{},Us={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k};var Gs=Object.create,he=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Ys=Object.getOwnPropertyNames,Js=Object.getPrototypeOf,Qs=Object.prototype.hasOwnProperty,qs=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xs=(e,t)=>{for(var n in t)he(e,n,{get:t[n],enumerable:!0})},$n=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ys(t))!Qs.call(e,a)&&a!==n&&he(e,a,{get:()=>t[a],enumerable:!(r=Vs(t,a))||r.enumerable});return e},er=(e,t,n)=>(n=e!=null?Gs(Js(e)):{},$n(t||!e||!e.__esModule?he(n,"default",{value:e,enumerable:!0}):n,e)),Zs=e=>$n(he({},"__esModule",{value:!0}),e),T=(e,t,n)=>(qs(e,typeof t!="symbol"?t+"":t,n),n),tr={};Xs(tr,{default:()=>Oe});var Ks=Zs(tr),Kt=er(y),$s=er(ht),nr=Kn,ei=ke;const ti=5e3;class Oe extends Kt.Component{constructor(){super(...arguments),T(this,"mounted",!1),T(this,"isReady",!1),T(this,"isPlaying",!1),T(this,"isLoading",!0),T(this,"loadOnReady",null),T(this,"startOnPlay",!0),T(this,"seekOnPlay",null),T(this,"onDurationCalled",!1),T(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),T(this,"getInternalPlayer",t=>this.player?this.player[t]:null),T(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,n=this.getSecondsLoaded(),r=this.getDuration();if(r){const a={playedSeconds:t,played:t/r};n!==null&&(a.loadedSeconds=n,a.loaded=n/r),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),T(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:n,volume:r,muted:a}=this.props;t(),!a&&r!==null&&this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),T(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:n,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&r!==1&&this.player.setPlaybackRate(r),t(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),T(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),T(this,"handleEnded",()=>{const{activePlayer:t,loop:n,onEnded:r}=this.props;t.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,r())}),T(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),T(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),T(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:n,playing:r,volume:a,muted:i,playbackRate:o,pip:l,loop:c,activePlayer:d,disableDeferredLoading:u}=this.props;if(!(0,$s.default)(t.url,n)){if(this.isLoading&&!d.forceLoad&&!u&&!(0,ei.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!t.playing&&r&&!this.isPlaying&&this.player.play(),t.playing&&!r&&this.isPlaying&&this.player.pause(),!t.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==a&&a!==null&&this.player.setVolume(a),t.muted!==i&&(i?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),t.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),t.loop!==c&&this.player.setLoop&&this.player.setLoop(c)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,n,r){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},ti));return}if(n?n==="fraction":t>0&&t<1){const i=this.player.getDuration();if(!i){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(i*t,r);return}this.player.seekTo(t,r)}render(){const t=this.props.activePlayer;return t?Kt.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}T(Oe,"displayName","Player");T(Oe,"propTypes",nr.propTypes);T(Oe,"defaultProps",nr.defaultProps);var ni=Object.create,pe=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ai=Object.getOwnPropertyNames,oi=Object.getPrototypeOf,si=Object.prototype.hasOwnProperty,ii=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,li=(e,t)=>{for(var n in t)pe(e,n,{get:t[n],enumerable:!0})},rr=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ai(t))!si.call(e,a)&&a!==n&&pe(e,a,{get:()=>t[a],enumerable:!(r=ri(t,a))||r.enumerable});return e},me=(e,t,n)=>(n=e!=null?ni(oi(e)):{},rr(t||!e||!e.__esModule?pe(n,"default",{value:e,enumerable:!0}):n,e)),ci=e=>rr(pe({},"__esModule",{value:!0}),e),E=(e,t,n)=>(ii(e,typeof t!="symbol"?t+"":t,n),n),ar={};li(ar,{createReactPlayer:()=>bi});var di=ci(ar),X=me(y),ui=me(Cn),Qe=me(Ns),$t=me(ht),ce=Kn,or=ke,hi=me(Ks);const pi=(0,or.lazy)(()=>P(()=>import("./Preview-c15229d3.js").then(e=>e.P),["assets/Preview-c15229d3.js","assets/three-5874ebf6.js"])),mi=typeof window<"u"&&window.document&&typeof document<"u",fi=typeof We<"u"&&We.window&&We.window.document,gi=Object.keys(ce.propTypes),yi=mi||fi?X.Suspense:()=>null,ie=[],bi=(e,t)=>{var n;return n=class extends X.Component{constructor(){super(...arguments),E(this,"state",{showPreview:!!this.props.light}),E(this,"references",{wrapper:r=>{this.wrapper=r},player:r=>{this.player=r}}),E(this,"handleClickPreview",r=>{this.setState({showPreview:!1}),this.props.onClickPreview(r)}),E(this,"showPreview",()=>{this.setState({showPreview:!0})}),E(this,"getDuration",()=>this.player?this.player.getDuration():null),E(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),E(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),E(this,"getInternalPlayer",(r="player")=>this.player?this.player.getInternalPlayer(r):null),E(this,"seekTo",(r,a,i)=>{if(!this.player)return null;this.player.seekTo(r,a,i)}),E(this,"handleReady",()=>{this.props.onReady(this)}),E(this,"getActivePlayer",(0,Qe.default)(r=>{for(const a of[...ie,...e])if(a.canPlay(r))return a;return t||null})),E(this,"getConfig",(0,Qe.default)((r,a)=>{const{config:i}=this.props;return ui.default.all([ce.defaultProps.config,ce.defaultProps.config[a]||{},i,i[a]||{}])})),E(this,"getAttributes",(0,Qe.default)(r=>(0,or.omit)(this.props,gi))),E(this,"renderActivePlayer",r=>{if(!r)return null;const a=this.getActivePlayer(r);if(!a)return null;const i=this.getConfig(r,a.key);return X.default.createElement(hi.default,{...this.props,key:a.key,ref:this.references.player,config:i,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(r,a){return!(0,$t.default)(this.props,r)||!(0,$t.default)(this.state,a)}componentDidUpdate(r){const{light:a}=this.props;!r.light&&a&&this.setState({showPreview:!0}),r.light&&!a&&this.setState({showPreview:!1})}renderPreview(r){if(!r)return null;const{light:a,playIcon:i,previewTabIndex:o,oEmbedUrl:l,previewAriaLabel:c}=this.props;return X.default.createElement(pi,{url:r,light:a,playIcon:i,previewTabIndex:o,previewAriaLabel:c,oEmbedUrl:l,onClick:this.handleClickPreview})}render(){const{url:r,style:a,width:i,height:o,fallback:l,wrapper:c}=this.props,{showPreview:d}=this.state,u=this.getAttributes(r),m=typeof c=="string"?this.references.wrapper:void 0;return X.default.createElement(c,{ref:m,style:{...a,width:i,height:o},...u},X.default.createElement(yi,{fallback:l},d?this.renderPreview(r):this.renderActivePlayer(r)))}},E(n,"displayName","ReactPlayer"),E(n,"propTypes",ce.propTypes),E(n,"defaultProps",ce.defaultProps),E(n,"addCustomPlayer",r=>{ie.push(r)}),E(n,"removeCustomPlayers",()=>{ie.length=0}),E(n,"canPlay",r=>{for(const a of[...ie,...e])if(a.canPlay(r))return!0;return!1}),E(n,"canEnablePIP",r=>{for(const a of[...ie,...e])if(a.canEnablePIP&&a.canEnablePIP(r))return!0;return!1}),n};var vi=Object.create,Me=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Ai=Object.getOwnPropertyNames,xi=Object.getPrototypeOf,Pi=Object.prototype.hasOwnProperty,Ei=(e,t)=>{for(var n in t)Me(e,n,{get:t[n],enumerable:!0})},sr=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ai(t))!Pi.call(e,a)&&a!==n&&Me(e,a,{get:()=>t[a],enumerable:!(r=wi(t,a))||r.enumerable});return e},Ti=(e,t,n)=>(n=e!=null?vi(xi(e)):{},sr(t||!e||!e.__esModule?Me(n,"default",{value:e,enumerable:!0}):n,e)),Si=e=>sr(Me({},"__esModule",{value:!0}),e),ir={};Ei(ir,{default:()=>Oi});var Ii=Si(ir),ct=Ti(Ss),ki=di;const Ci=ct.default[ct.default.length-1];var Oi=(0,ki.createReactPlayer)(ct.default,Ci);const Mi=Ee(Ii);function Ni(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n=0;const r=[];let a;for(;(a=t.exec(e))!==null;)r.push(e.slice(n,a.index)),r.push(a[1]),r.push(a[2]),n=a.index+a[0].length;return r.push(e.slice(n)),r.map((i,o)=>{if(o%3===0)return i;if(o%3===1){const l=r[o],c=r[o+1];return s("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:l},o)}})}const _i=({name:e,description:t,embedId:n})=>h("div",{className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[s("div",{className:"m-3 max-w-2xl",children:s("div",{className:"relative aspect-video",children:s(Mi,{url:`https://youtube.com/watch?v=${n}`,className:"absolute left-0 top-0",width:"100%",height:"100%",controls:!0})})}),s("h3",{className:"text-white font-bold text-[24px]",children:e}),s("p",{className:"mt-2 text-secondary text-[14px]",children:Ni(t)})]}),Ri=()=>h(te,{children:[h(U.div,{variants:mt(),children:[s("p",{className:C.sectionSubText,children:"My online presence"}),s("h2",{className:C.sectionHeadText,children:"Videos"})]}),s("div",{className:"w-full flex",children:h(U.p,{variants:ft("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:["Below are my apperances on"," ",s("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",className:"underline text-[#915eff] hover:text-blue-800 visited:text-purple-600",children:"Youtube"})," ","channels covering a wide variety of topics. Watch them to learn about me, my thoughts and my technical skills"]})}),s("div",{className:"mt-20 flex flex-wrap gap-7",children:qa.map((e,t)=>s(_i,{...e},`project-${t}`))})]}),Di=ue(Ri,"media"),ji=({index:e,name:t,description:n,image:r,source_code_link:a,demo_link:i})=>s(U.div,{variants:ft("up","spring",e*.5,.75),children:h(An,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[h("div",{className:"relative w-full h-[230px]",children:[s("a",{href:i??a,target:"_blank",rel:"noopener noreferrer",className:"cursor-pointer",children:s("img",{src:r,alt:t,width:360,height:230,loading:"lazy",className:"w-full h-full object-cover rounded-2xl"})}),s("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none",children:s("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto",children:s("img",{src:xa,alt:"github",width:20,height:20,className:"w-1/2 h-1/2 object-contain"})})})]}),h("div",{className:"mt-5",children:[s("h3",{className:"text-white font-bold text-[24px]",children:t}),s("p",{className:"mt-2 text-secondary text-[14px]",children:n})]})]})}),Li=()=>h(te,{children:[h(U.div,{variants:mt(),children:[s("p",{className:C.sectionSubText,children:"My work"}),s("h2",{className:C.sectionHeadText,children:"Portfolio."})]}),s("div",{className:"w-full flex",children:s(U.p,{variants:ft("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"A selection of projects I've built—from AI-powered tools to creative web experiences. Each includes live demos and source code."})}),s("div",{className:"mt-20 flex flex-wrap gap-7",children:Xa.map((e,t)=>s(ji,{index:t,...e},`project-${t}`))})]}),zi=ue(Li,"projects"),Bi="93d0e20c-3f99-44c1-98ab-0b1d8db713c4",Hi=()=>{const[e,t]=y.useState({name:"",email:"",message:""}),[n,r]=y.useState(!1),[a,i]=y.useState(!1),o=c=>{const{name:d,value:u}=c.target;t({...e,[d]:u})},l=async c=>{c.preventDefault(),r(!0),i(!1);try{const u=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:Bi,name:e.name,email:e.email,message:e.message})})).json();if(u.success)i(!0),t({name:"",email:"",message:""});else throw new Error(u.message)}catch{alert("Something went wrong when sending the email. Please try again in a bit.")}finally{r(!1)}};return h("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[h(U.div,{variants:Gt("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[s("p",{className:C.sectionSubText,children:"Get in touch"}),s("h3",{className:C.sectionHeadText,children:"Contact."}),h("p",{className:"text-secondary text-[14px] mt-2",children:["Interested in collaborating or have a project in mind? I'd love to hear from you. You can also check out my"," ",s("a",{href:"#work",className:"underline text-[#915eff] hover:text-white",children:"work experience"})," ","or browse my"," ",s("a",{href:"#projects",className:"underline text-[#915eff] hover:text-white",children:"projects"}),"."]}),h("form",{onSubmit:l,className:"mt-12 flex flex-col gap-8",children:[h("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-medium mb-4",children:"Your Name"}),s("input",{type:"text",name:"name",value:e.name,onChange:o,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"})]}),h("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-medium mb-4",children:"Your Email"}),s("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:"What's your email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"})]}),h("label",{className:"flex flex-col",children:[s("span",{className:"text-white font-medium mb-4",children:"Your Message"}),s("textarea",{rows:"7",name:"message",value:e.message,onChange:o,placeholder:"Let's connect",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"})]}),s("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl",children:n?"Sending...":"Send"}),a&&s("span",{className:"text-[green] font-medium mb-4",children:"Successfully sent!"})]})]}),s(U.div,{variants:Gt("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:s(ra,{})})]})},Fi=ue(Hi,"contact"),Ne=`---
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
`,_e=`---
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
`,Re=`---
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
`,De=`---
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
`,je=`---
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
`,Le=`---
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
`,ze=`---
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
`,Be=`---
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
`,lr=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(!1),[a,i]=y.useState(!1);return y.useEffect(()=>{const o=()=>{window.scrollY>100?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s("nav",{className:`${C.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${a?"bg-primary":"bg-transparent"}
    `,children:h("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[h(R,{to:"/",className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[s("img",{src:wn,alt:"logo",className:"w-9 h-9 object-contain"}),h("p",{className:"text-white text-[18px] font-bold cursor-pointer flex",children:["Samrat  ",s("span",{className:"hidden sm:block",children:"| Portfolio"})]})]}),s("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:xe.map(o=>o.id==="blog"?s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>t(o.title),children:s(R,{to:"/blog/",children:o.title})},o.id):o.isExternal?s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>t(o.title),children:o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title})},o.id):s("li",{className:`${e===o.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>t(o.title),children:s(R,{to:`/#${o.id}`,children:o.title})},o.id))}),h("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[s("img",{src:n?vn:bn,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>r(!n)}),s("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:s("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:xe.map(o=>o.id==="blog"?s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{r(!n),t(o.title)},children:s(R,{to:"/blog/",children:o.title})},o.id):o.isExternal?s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{r(!n),t(o.title)},children:o.isFullPage?s("a",{href:o.path,children:o.title}):s(R,{to:o.path,children:o.title})},o.id):s("li",{className:`${e===o.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{r(!n),t(o.title)},children:s(R,{to:`/#${o.id}`,children:o.title})},o.id))})})]})]})})};function He(e){const t=e.match(/^---([\s\S]*?)---/);if(!t)return{};const n=t[1],r={},a=n.trim().split(`
`);for(const i of a){const o=i.match(/(.+?):\s*(.+)/);if(o){let[,l,c]=o;if(l=l.trim(),c=c.trim(),c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),c.startsWith("[")&&c.endsWith("]"))try{c=JSON.parse(c)}catch{}r[l]=c}}return r}function cr(e,t=150){let r=e.replace(/^---[\s\S]*?---/,"").replace(/#+\s+/g,"").replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/!\[(.*?)\]\(.*?\)/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/-{3,}/g,"").replace(/\n/g," ").trim();return r.length>t&&(r=r.substring(0,t)+"..."),r}function Fe(e){return e.split("/").pop().replace(/\.[^.]+$/,"")}const Wi=({children:e,title:t})=>{const[r,a]=y.useState([]),[i,o]=y.useState([]),[l,c]=y.useState(1),d=u=>{if(u<1||u>Math.ceil(r.length/5))return;c(u);const m=(u-1)*5;o(r.slice(m,m+5))};return y.useEffect(()=>{async function u(){try{const p=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Ne,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":_e,"../../blog/posts/enterprise-ai-roi.mdx":Re,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":De,"../../blog/posts/how-i-finally-organized-my-notes.mdx":je,"../../blog/posts/lighthouse-ai-workflow.mdx":Le,"../../blog/posts/spa-routing-hostinger.mdx":ze,"../../blog/posts/tmux-config.mdx":Be})).map(([f,g])=>{const v=Fe(f),b=He(g);return{slug:v,title:b.title||"Untitled Post",date:b.date||"No date",tags:b.tags||[]}});p.sort((f,g)=>new Date(g.date)-new Date(f.date)),a(p),o(p.slice(0,5))}catch(m){console.error("Error loading blog posts for sidebar:",m),a([]),o([])}}u()},[]),h("div",{className:"relative z-0 bg-primary",children:[s(lr,{}),s("div",{className:`${C.padding} max-w-7xl mx-auto relative z-0 mt-20`,children:h("div",{className:"flex flex-col md:flex-row gap-10",children:[s("div",{className:"md:w-1/4",children:h("div",{className:"sticky top-24 p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg",children:[s("h3",{className:"text-white font-bold text-xl mb-4",children:"Recent Posts"}),h("ul",{className:"divide-y divide-gray-700/30",children:[i.map((u,m)=>h("li",{className:`py-4 ${m===0?"pt-0":""}`,children:[s(R,{to:`/blog/${u.slug}/`,className:"block text-secondary hover:text-white transition-colors duration-300 font-medium",children:u.title}),s("div",{className:"text-xs text-gray-400 mt-1",children:u.date}),s("div",{className:"flex flex-wrap gap-1 mt-2",children:u.tags.map(p=>h("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",p]},p))})]},u.slug))," "]}),r.length>5&&s("div",{className:"mt-4 flex justify-center pt-2 border-t border-gray-700/30 text-xs",children:h("div",{className:"inline-flex items-center gap-2",children:[s("button",{onClick:()=>d(l-1),disabled:l===1,className:`${l===1?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"←"}),h("span",{className:"text-secondary mx-1",children:[l,"/",Math.ceil(r.length/5)]}),s("button",{onClick:()=>d(l+1),disabled:l>=Math.ceil(r.length/5),className:`${l>=Math.ceil(r.length/5)?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"→"})]})})]})}),h("div",{className:"md:w-3/4 overflow-hidden",children:[t&&s("h1",{className:`${C.sectionHeadText} mb-6`,children:t}),s("div",{className:"prose prose-invert prose-lg prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:overflow-x-auto prose-li:text-gray-300 max-w-none [&_code::before]:content-none [&_code::after]:content-none",children:e})]})]})})]})},Ui=({post:e})=>h(R,{to:`/blog/${e.slug}/`,className:"block bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 group",children:[h("div",{className:"mt-5",children:[s("h3",{className:"text-white font-bold text-[24px] group-hover:text-[#915eff] transition-colors duration-300",children:e.title}),s("p",{className:"mt-2 text-secondary text-[14px]",children:e.date})]}),s("div",{className:"mt-4 text-secondary text-[14px] leading-[24px]",children:e.excerpt}),s("div",{className:"flex flex-wrap gap-2 mt-4",children:e.tags.map(t=>h("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",t]},t))})]}),ve="https://www.samratjha.com",Gi=({onSearch:e})=>{const[t,n]=y.useState("");return s("div",{className:"mb-8",children:h("div",{className:"relative overflow-hidden",children:[s("input",{type:"text",value:t,onChange:i=>{const o=i.target.value;n(o),e(o)},placeholder:"Search posts...",className:"w-full p-3 pr-10 bg-tertiary bg-opacity-70 backdrop-blur-lg rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#915eff] border border-transparent"}),t&&s("button",{onClick:()=>{n(""),e("")},className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white",children:"✕"})]})})},en=()=>{const[e,t]=y.useState([]),[n,r]=y.useState([]),[a,i]=y.useState(1),o=6,[l,c]=y.useState([]);y.useEffect(()=>{async function p(){try{const g=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Ne,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":_e,"../../blog/posts/enterprise-ai-roi.mdx":Re,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":De,"../../blog/posts/how-i-finally-organized-my-notes.mdx":je,"../../blog/posts/lighthouse-ai-workflow.mdx":Le,"../../blog/posts/spa-routing-hostinger.mdx":ze,"../../blog/posts/tmux-config.mdx":Be})).map(([v,b])=>{const w=Fe(v),A=He(b);return{slug:w,title:A.title||"Untitled Post",date:A.date||"No date",excerpt:A.excerpt||cr(b),tags:A.tags||[],buttonText:"Read More"}});g.sort((v,b)=>new Date(b.date)-new Date(v.date)),t(g),r(g),c(g.slice(0,o))}catch(f){console.error("Error loading blog posts:",f)}}p()},[]);const d=p=>{if(p<1||p>Math.ceil(n.length/o))return;i(p);const f=(p-1)*o;c(n.slice(f,f+o))},u=p=>{if(!p.trim()){r(e);return}const f=e.filter(g=>{const v=p.toLowerCase();return g.title?.toLowerCase().includes(v)||g.excerpt?.toLowerCase().includes(v)||g.tags?.some(b=>b.toLowerCase().includes(v))});r(f),i(1),c(f.slice(0,o))},m={"@context":"https://schema.org","@type":"CollectionPage",name:"Blog | Samrat Jha",description:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha.",url:`${ve}/blog/`,author:{"@type":"Person",name:"Samrat Jha",url:`${ve}/`}};return h(te,{children:[h(nt,{children:[s("title",{children:"Blog | Samrat Jha"}),s("meta",{name:"description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha."}),s("link",{rel:"canonical",href:`${ve}/blog/`}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:url",content:`${ve}/blog/`}),s("meta",{property:"og:title",content:"Blog | Samrat Jha"}),s("meta",{property:"og:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),s("meta",{property:"og:site_name",content:"Samrat Jha"}),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:title",content:"Blog | Samrat Jha"}),s("meta",{name:"twitter:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),s("script",{type:"application/ld+json",children:JSON.stringify(m)})]}),s(Wi,{title:"Blog",children:h("div",{className:"mt-12",children:[s(Gi,{onSearch:u}),h("div",{className:"mt-10 flex flex-wrap gap-7",children:[n.length>0?l.map((p,f)=>s(Ui,{post:p},p.slug)):s("p",{className:"text-secondary",children:"No posts found matching your search criteria."}),n.length>o&&s("div",{className:"w-full mt-8 flex justify-center items-center text-sm",children:h("div",{className:"inline-flex items-center gap-3 text-secondary",children:[s("button",{onClick:()=>d(a-1),disabled:a===1,className:`${a===1?"opacity-50 cursor-not-allowed":"hover:text-white cursor-pointer"}`,children:"←"}),h("span",{className:"text-secondary",children:["Page ",a," of"," ",Math.ceil(n.length/o)]}),s("button",{onClick:()=>d(a+1),disabled:a>=Math.ceil(n.length/o),className:`${a>=Math.ceil(n.length/o)?"opacity-50 cursor-not-allowed":"hover:text-white cursor-pointer"}`,children:"→"})]})})]})]})})]})},qe=({children:e,title:t})=>{const[r,a]=y.useState([]),[i,o]=y.useState([]),[l,c]=y.useState(1),[d,u]=y.useState(!1),m=p=>{if(p<1||p>Math.ceil(r.length/5))return;c(p);const f=(p-1)*5;o(r.slice(f,f+5))};return y.useEffect(()=>{async function p(){try{const g=Object.entries(Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Ne,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":_e,"../../blog/posts/enterprise-ai-roi.mdx":Re,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":De,"../../blog/posts/how-i-finally-organized-my-notes.mdx":je,"../../blog/posts/lighthouse-ai-workflow.mdx":Le,"../../blog/posts/spa-routing-hostinger.mdx":ze,"../../blog/posts/tmux-config.mdx":Be})).map(([v,b])=>{const w=Fe(v),A=He(b);return{slug:w,title:A.title||"Untitled Post",date:A.date||"No date",tags:A.tags||[]}});g.sort((v,b)=>new Date(b.date)-new Date(v.date)),a(g),o(g.slice(0,5))}catch(f){console.error("Error loading blog posts for sidebar:",f),a([]),o([])}}p()},[]),h("div",{className:"relative z-0 bg-primary",children:[s(lr,{}),h("div",{className:`${C.padding} max-w-7xl mx-auto relative z-0 mt-20`,children:[h("div",{className:"mb-16",children:[t&&s("h1",{className:`${C.sectionHeadText} mb-6`,children:t}),s("div",{className:"prose prose-invert prose-lg prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-8 prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-[#915eff] prose-strong:text-white prose-code:bg-tertiary prose-code:text-white prose-code:p-1 prose-code:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:overflow-x-auto prose-li:text-gray-300 max-w-none [&_code::before]:content-none [&_code::after]:content-none",children:e})]}),h("div",{className:"mt-12 pt-8 border-t border-gray-800",children:[h("button",{onClick:()=>u(!d),className:"flex items-center text-white font-medium mb-4 hover:text-[#915eff] transition-colors duration-300",children:[s("span",{className:"mr-2",children:d?"▼":"►"}),s("h3",{className:"font-bold text-xl",children:"Recent Posts"})]}),d&&h("div",{className:"p-5 rounded-xl bg-tertiary bg-opacity-70 backdrop-blur-lg",children:[s("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.map((p,f)=>h("div",{className:"border-b border-gray-700/30 pb-4 last:border-b-0",children:[s(R,{to:`/blog/${p.slug}/`,className:"block text-secondary hover:text-white transition-colors duration-300 font-medium",children:p.title}),s("div",{className:"text-xs text-gray-400 mt-1",children:p.date}),s("div",{className:"flex flex-wrap gap-1 mt-2",children:p.tags.slice(0,3).map(g=>h("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",g]},g))})]},p.slug))}),r.length>5&&s("div",{className:"mt-4 flex justify-center pt-2 border-t border-gray-700/30 text-xs",children:h("div",{className:"inline-flex items-center gap-2",children:[s("button",{onClick:()=>m(l-1),disabled:l===1,className:`${l===1?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"←"}),h("span",{className:"text-secondary mx-1",children:[l,"/",Math.ceil(r.length/5)]}),s("button",{onClick:()=>m(l+1),disabled:l>=Math.ceil(r.length/5),className:`${l>=Math.ceil(r.length/5)?"text-gray-500 cursor-not-allowed":"text-secondary hover:text-white cursor-pointer"}`,children:"→"})]})})]})]})]})]})};const le="https://www.samratjha.com",Y={name:"Samrat Jha",url:"https://www.samratjha.com/",jobTitle:"Senior AI Engineer",employer:"NVIDIA"},tn=()=>{const{slug:e}=Sr(),[t,n]=y.useState(null),[r,a]=y.useState(!0),[i,o]=y.useState(!1);y.useEffect(()=>{async function g(){try{a(!0);const v=Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":()=>P(()=>import("./cloudflare-workers-full-stack-47a7f3ec.js"),["assets/cloudflare-workers-full-stack-47a7f3ec.js","assets/three-5874ebf6.js"]),"../../blog/posts/cloudflare-zero-trust-homelab.mdx":()=>P(()=>import("./cloudflare-zero-trust-homelab-b4b58cb1.js"),["assets/cloudflare-zero-trust-homelab-b4b58cb1.js","assets/three-5874ebf6.js"]),"../../blog/posts/enterprise-ai-roi.mdx":()=>P(()=>import("./enterprise-ai-roi-945c1e47.js"),["assets/enterprise-ai-roi-945c1e47.js","assets/three-5874ebf6.js"]),"../../blog/posts/github-pages-cloudflare-subdomain.mdx":()=>P(()=>import("./github-pages-cloudflare-subdomain-38774022.js"),["assets/github-pages-cloudflare-subdomain-38774022.js","assets/three-5874ebf6.js"]),"../../blog/posts/how-i-finally-organized-my-notes.mdx":()=>P(()=>import("./how-i-finally-organized-my-notes-519d6eb3.js"),["assets/how-i-finally-organized-my-notes-519d6eb3.js","assets/three-5874ebf6.js"]),"../../blog/posts/lighthouse-ai-workflow.mdx":()=>P(()=>import("./lighthouse-ai-workflow-e77f9270.js"),["assets/lighthouse-ai-workflow-e77f9270.js","assets/three-5874ebf6.js"]),"../../blog/posts/spa-routing-hostinger.mdx":()=>P(()=>import("./spa-routing-hostinger-62f088db.js"),["assets/spa-routing-hostinger-62f088db.js","assets/three-5874ebf6.js"]),"../../blog/posts/tmux-config.mdx":()=>P(()=>import("./tmux-config-f630dee9.js"),["assets/tmux-config-f630dee9.js","assets/three-5874ebf6.js"])}),w=Object.keys(v).find(hr=>Fe(hr)===e);if(!w){o(!0),a(!1);return}const j=Object.assign({"../../blog/posts/cloudflare-workers-full-stack.mdx":Ne,"../../blog/posts/cloudflare-zero-trust-homelab.mdx":_e,"../../blog/posts/enterprise-ai-roi.mdx":Re,"../../blog/posts/github-pages-cloudflare-subdomain.mdx":De,"../../blog/posts/how-i-finally-organized-my-notes.mdx":je,"../../blog/posts/lighthouse-ai-workflow.mdx":Le,"../../blog/posts/spa-routing-hostinger.mdx":ze,"../../blog/posts/tmux-config.mdx":Be})[w],fe=He(j),dr=fe.description||cr(j,160),ur=(await v[w]()).default;n({title:fe.title||"Untitled Post",date:fe.date||"No date",description:dr,tags:fe.tags||[],component:ur,slug:e}),a(!1)}catch(v){console.error("Error loading blog post:",v),o(!0),a(!1)}}g()},[e]);const l=g=>!g||g==="No date"?null:new Date(g).toISOString(),c=()=>{if(!t)return null;const g=l(t.date);return{"@context":"https://schema.org","@type":"BlogPosting",headline:t.title,description:t.description,datePublished:g,dateModified:g,author:{"@type":"Person",name:Y.name,url:Y.url,jobTitle:Y.jobTitle},publisher:{"@type":"Person",name:Y.name,url:Y.url},mainEntityOfPage:{"@type":"WebPage","@id":`${le}/blog/${t.slug}/`},keywords:t.tags.join(", ")}},d=()=>t?{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${le}/`},{"@type":"ListItem",position:2,name:"Blog",item:`${le}/blog/`},{"@type":"ListItem",position:3,name:t.title,item:`${le}/blog/${t.slug}/`}]}:null;if(r)return s(qe,{children:s("div",{className:"text-center py-20",children:s("h1",{className:"text-4xl text-white font-bold mb-4",children:"Loading..."})})});if(i||!t)return h(te,{children:[h(nt,{children:[s("title",{children:"Post Not Found | Samrat Jha"}),s("meta",{name:"robots",content:"noindex"})]}),s(qe,{children:h("div",{className:"text-center py-20",children:[s("h1",{className:"text-4xl text-white font-bold mb-4",children:"Post Not Found"}),s("p",{className:"text-secondary",children:"The blog post you're looking for doesn't exist."})]})})]});const u=t.component,m=`${le}/blog/${t.slug}/`,p=c(),f=d();return h(te,{children:[h(nt,{children:[h("title",{children:[t.title," | Samrat Jha"]}),s("meta",{name:"title",content:`${t.title} | Samrat Jha`}),s("meta",{name:"description",content:t.description}),s("meta",{name:"author",content:Y.name}),s("meta",{name:"keywords",content:t.tags.join(", ")}),s("link",{rel:"canonical",href:m}),s("meta",{property:"og:type",content:"article"}),s("meta",{property:"og:url",content:m}),s("meta",{property:"og:title",content:t.title}),s("meta",{property:"og:description",content:t.description}),s("meta",{property:"og:site_name",content:"Samrat Jha"}),s("meta",{property:"article:published_time",content:l(t.date)}),s("meta",{property:"article:author",content:Y.url}),t.tags.map(g=>s("meta",{property:"article:tag",content:g},g)),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:url",content:m}),s("meta",{name:"twitter:title",content:t.title}),s("meta",{name:"twitter:description",content:t.description}),s("script",{type:"application/ld+json",children:JSON.stringify(p)}),s("script",{type:"application/ld+json",children:JSON.stringify(f)})]}),s(qe,{title:t.title,children:h("div",{children:[h("div",{className:"mb-6",children:[s("p",{className:"text-secondary",children:t.date}),s("div",{className:"flex flex-wrap gap-2 mt-2",children:t.tags.map(g=>h("span",{className:"text-xs bg-[#915eff]/20 text-[#dfd9ff] px-2 py-1 rounded-full",children:["#",g]},g))})]}),s("article",{className:"prose prose-invert prose-lg max-w-none blog-post-content",children:s(u,{})})]})})]})},Vi=()=>{const{hash:e}=ln();return y.useEffect(()=>{if(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}},[e]),h("div",{className:"relative z-0 bg-primary",children:[h("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[s(Za,{}),s(Aa,{})]}),s(zi,{}),s(Po,{}),s(ro,{}),s(Di,{}),s("div",{className:"relative z-0",children:s(Fi,{})}),s(ma,{})]})},Yi=()=>h(Ir,{children:[s(re,{path:"/",element:s(Vi,{})}),s(re,{path:"/blog",element:s(en,{})}),s(re,{path:"/blog/",element:s(en,{})}),s(re,{path:"/blog/:slug",element:s(tn,{})}),s(re,{path:"/blog/:slug/",element:s(tn,{})})]});const Xe=document.getElementById("root"),nn=s(W.StrictMode,{children:s(fn,{children:s(kr,{children:s(Yi,{})})})});Xe.hasChildNodes()?Er(Xe,nn):Tr(Xe).render(nn);export{bs as p,ke as u};
