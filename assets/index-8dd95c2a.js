var Jn=Object.defineProperty;var Qn=(e,t,n)=>t in e?Jn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(Qn(e,typeof t!="symbol"?t+"":t,n),n);import{g as Ae,a as W,r as g,u as Xn,j as p,H as Zn,b as i,C as Kn,O as $n,c as ea,_ as A,p as Xe,d as Ut,F as Y,e as Ce,h as ta,f as na}from"./three-92ffd73b.js";import{L,m as F,u as Gt,a as aa,b as oa,R as ra,c as te,B as ia}from"./vendor-b1339a3f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var sa=typeof Element<"u",la=typeof Map=="function",ca=typeof Set=="function",da=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function fe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!fe(e[a],t[a]))return!1;return!0}var r;if(la&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r=e.entries();!(a=r.next()).done;)if(!t.has(a.value[0]))return!1;for(r=e.entries();!(a=r.next()).done;)if(!fe(a.value[1],t.get(a.value[0])))return!1;return!0}if(ca&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r=e.entries();!(a=r.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(da&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[a]))return!1;if(sa&&e instanceof Element)return!1;for(a=n;a--!==0;)if(!((o[a]==="_owner"||o[a]==="__v"||o[a]==="__o")&&e.$$typeof)&&!fe(e[o[a]],t[o[a]]))return!1;return!0}return e!==e&&t!==t}var Ze=function(t,n){try{return fe(t,n)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}};const ha=Ae(Ze);var ua=function(e,t,n,a,o,r,s,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,a,o,r,s,l],h=0;c=new Error(t.replace(/%s/g,function(){return d[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},pa=ua;const pt=Ae(pa);var ma=function(t,n,a,o){var r=a?a.call(o,t,n):void 0;if(r!==void 0)return!!r;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),d=0;d<s.length;d++){var h=s[d];if(!c(h))return!1;var u=t[h],f=n[h];if(r=a?a.call(o,u,f,h):void 0,r===!1||r===void 0&&u!==f)return!1}return!0};const fa=Ae(ma);var Vt=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Vt||{}),Oe={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},mt=Object.values(Vt),Ke={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ga=Object.entries(Ke).reduce((e,[t,n])=>(e[n]=t,e),{}),j="data-rh",Z={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},K=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const a=e[n];if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}return null},ya=e=>{let t=K(e,"title");const n=K(e,Z.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const a=K(e,Z.DEFAULT_TITLE);return t||a||void 0},wa=e=>K(e,Z.ON_CHANGE_CLIENT_STATE)||(()=>{}),_e=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,a)=>({...n,...a}),{}),ba=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,a)=>{if(!n.length){const o=Object.keys(a);for(let r=0;r<o.length;r+=1){const l=o[r].toLowerCase();if(e.indexOf(l)!==-1&&a[l])return n.concat(a)}}return n},[]),va=e=>console&&typeof console.warn=="function"&&console.warn(e),ne=(e,t,n)=>{const a={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&va(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,r)=>{const s={};r.filter(c=>{let d;const h=Object.keys(c);for(let f=0;f<h.length;f+=1){const m=h[f],y=m.toLowerCase();t.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),t.indexOf(m)!==-1&&(m==="innerHTML"||m==="cssText"||m==="itemprop")&&(d=m)}if(!d||!c[d])return!1;const u=c[d].toLowerCase();return a[d]||(a[d]={}),s[d]||(s[d]={}),a[d][u]?!1:(s[d][u]=!0,!0)}).reverse().forEach(c=>o.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const d=l[c],h={...a[d],...s[d]};a[d]=h}return o},[]).reverse()},Aa=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},xa=e=>({baseTag:ba(["href"],e),bodyAttributes:_e("bodyAttributes",e),defer:K(e,Z.DEFER),encode:K(e,Z.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:_e("htmlAttributes",e),linkTags:ne("link",["rel","href"],e),metaTags:ne("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:ne("noscript",["innerHTML"],e),onChangeClientState:wa(e),scriptTags:ne("script",["src","innerHTML"],e),styleTags:ne("style",["cssText"],e),title:ya(e),titleAttributes:_e("titleAttributes",e),prioritizeSeoTags:Aa(e,Z.PRIORITIZE_SEO_TAGS)}),Yt=e=>Array.isArray(e)?e.join(""):e,ka=(e,t)=>{const n=Object.keys(e);for(let a=0;a<n.length;a+=1)if(t[n[a]]&&t[n[a]].includes(e[n[a]]))return!0;return!1},Me=(e,t)=>Array.isArray(e)?e.reduce((n,a)=>(ka(a,t)?n.priority.push(a):n.default.push(a),n),{priority:[],default:[]}):{default:e,priority:[]},ft=(e,t)=>({...e,[t]:void 0}),Ta=["noscript","script","style"],Be=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),qt=e=>Object.keys(e).reduce((t,n)=>{const a=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${a}`:a},""),Ea=(e,t,n,a)=>{const o=qt(n),r=Yt(t);return o?`<${e} ${j}="true" ${o}>${Be(r,a)}</${e}>`:`<${e} ${j}="true">${Be(r,a)}</${e}>`},Ia=(e,t,n=!0)=>t.reduce((a,o)=>{const r=o,s=Object.keys(r).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,h)=>{const u=typeof r[h]>"u"?h:`${h}="${Be(r[h],n)}"`;return d?`${d} ${u}`:u},""),l=r.innerHTML||r.cssText||"",c=Ta.indexOf(e)===-1;return`${a}<${e} ${j}="true" ${s}${c?"/>":`>${l}</${e}>`}`},""),Jt=(e,t={})=>Object.keys(e).reduce((n,a)=>{const o=Ke[a];return n[o||a]=e[a],n},t),Pa=(e,t,n)=>{const a={key:t,[j]:!0},o=Jt(n,a);return[W.createElement("title",o,t)]},ge=(e,t)=>t.map((n,a)=>{const o={key:a,[j]:!0};return Object.keys(n).forEach(r=>{const l=Ke[r]||r;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:c}}else o[l]=n[r]}),W.createElement(e,o)}),R=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Pa(e,t.title,t.titleAttributes),toString:()=>Ea(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Jt(t),toString:()=>qt(t)};default:return{toComponent:()=>ge(e,t),toString:()=>Ia(e,t,n)}}},Sa=({metaTags:e,linkTags:t,scriptTags:n,encode:a})=>{const o=Me(e,Oe.meta),r=Me(t,Oe.link),s=Me(n,Oe.script);return{priorityMethods:{toComponent:()=>[...ge("meta",o.priority),...ge("link",r.priority),...ge("script",s.priority)],toString:()=>`${R("meta",o.priority,a)} ${R("link",r.priority,a)} ${R("script",s.priority,a)}`},metaTags:o.default,linkTags:r.default,scriptTags:s.default}},Ca=e=>{const{baseTag:t,bodyAttributes:n,encode:a=!0,htmlAttributes:o,noscriptTags:r,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:d}=e;let{linkTags:h,metaTags:u,scriptTags:f}=e,m={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:m,linkTags:h,metaTags:u,scriptTags:f}=Sa(e)),{priority:m,base:R("base",t,a),bodyAttributes:R("bodyAttributes",n,a),htmlAttributes:R("htmlAttributes",o,a),link:R("link",h,a),meta:R("meta",u,a),noscript:R("noscript",r,a),script:R("script",f,a),style:R("style",s,a),title:R("title",{title:l,titleAttributes:c},a)}},He=Ca,ue=[],Qt=!!(typeof window<"u"&&window.document&&window.document.createElement),ze=class{constructor(e,t){H(this,"instances",[]);H(this,"canUseDOM",Qt);H(this,"context");H(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ue:this.instances,add:e=>{(this.canUseDOM?ue:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?ue:this.instances).indexOf(e);(this.canUseDOM?ue:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=He({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Oa={},Xt=W.createContext(Oa),$,Zt=($=class extends g.Component{constructor(n){super(n);H(this,"helmetData");this.helmetData=new ze(this.props.context||{},$.canUseDOM)}render(){return W.createElement(Xt.Provider,{value:this.helmetData.value},this.props.children)}},H($,"canUseDOM",Qt),$),q=(e,t)=>{const n=document.head||document.querySelector("head"),a=n.querySelectorAll(`${e}[${j}]`),o=[].slice.call(a),r=[];let s;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const h=d,u=typeof l[h]>"u"?"":l[h];c.setAttribute(d,u)}c.setAttribute(j,"true"),o.some((d,h)=>(s=h,c.isEqualNode(d)))?o.splice(s,1):r.push(c)}),o.forEach(l=>l.parentNode?.removeChild(l)),r.forEach(l=>n.appendChild(l)),{oldTags:o,newTags:r}},We=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const a=n.getAttribute(j),o=a?a.split(","):[],r=[...o],s=Object.keys(t);for(const l of s){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);const d=r.indexOf(l);d!==-1&&r.splice(d,1)}for(let l=r.length-1;l>=0;l-=1)n.removeAttribute(r[l]);o.length===r.length?n.removeAttribute(j):n.getAttribute(j)!==s.join(",")&&n.setAttribute(j,s.join(","))},_a=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Yt(e)),We("title",t)},gt=(e,t)=>{const{baseTag:n,bodyAttributes:a,htmlAttributes:o,linkTags:r,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:h,title:u,titleAttributes:f}=e;We("body",a),We("html",o),_a(u,f);const m={baseTag:q("base",n),linkTags:q("link",r),metaTags:q("meta",s),noscriptTags:q("noscript",l),scriptTags:q("script",d),styleTags:q("style",h)},y={},v={};Object.keys(m).forEach(w=>{const{newTags:b,oldTags:E}=m[w];b.length&&(y[w]=b),E.length&&(v[w]=m[w].oldTags)}),t&&t(),c(e,y,v)},ae=null,Ma=e=>{ae&&cancelAnimationFrame(ae),e.defer?ae=requestAnimationFrame(()=>{gt(e,()=>{ae=null})}):(gt(e),ae=null)},Na=Ma,yt=class extends g.Component{constructor(){super(...arguments);H(this,"rendered",!1)}shouldComponentUpdate(t){return!fa(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let a=null;const o=xa(t.get().map(r=>{const s={...r.props};return delete s.context,s}));Zt.canUseDOM?Na(o):He&&(a=He(o)),n(a)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},je,$e=(je=class extends g.Component{shouldComponentUpdate(e){return!ha(ft(this.props,"helmetData"),ft(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,a){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,a)}]}}mapObjectTypeChildren(e,t,n,a){switch(e.type){case"title":return{...t,[e.type]:a,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(a=>{n={...n,[a]:e[a]}}),n}warnOnInvalidChildren(e,t){return pt(mt.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${mt.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),pt(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return W.Children.forEach(e,a=>{if(!a||!a.props)return;const{children:o,...r}=a.props,s=Object.keys(r).reduce((c,d)=>(c[ga[d]||d]=r[d],c),{});let{type:l}=a;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(a,o),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(a,n,s,o);break;default:t=this.mapObjectTypeChildren(a,t,s,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:a}=t;if(e&&(n=this.mapChildrenToProps(e,n)),a&&!(a instanceof ze)){const o=a;a=new ze(o.context,!0),delete n.helmetData}return a?W.createElement(yt,{...n,context:a.value}):W.createElement(Xt.Consumer,null,o=>W.createElement(yt,{...n,context:o}))}},H(je,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),je);const Ra=()=>{const{progress:e}=Xn();return p(Zn,{children:[i("span",{className:"canvas-load"}),p("p",{style:{fontSize:14,color:"#f1f1f1",fontWeight:600,marginTop:40},children:[e.toFixed(2),"%"]})]})},La=()=>{const e=ea("./planet/scene.gltf");return i("primitive",{object:e.scene,scale:2.5,"position-y":0,"rotation-y":0})},Da=()=>i(Kn,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:p(g.Suspense,{fallback:i(Ra,{}),children:[i($n,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),i(La,{})]})}),D={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-semibold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-normal lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-semibold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},wt=100,ja=40,bt=.12,vt=.01;function Ba(e,t){const n=e.length/2,a=new Float32Array(n),o=new Float32Array(n),r=new Float32Array(n),s=new Float32Array(n);for(let l=0;l<n;l++)a[l]=e[l*2],o[l]=e[l*2+1];return{count:n,baseX:a,baseY:o,dx:r,dy:s,dotSize:t,colors:null}}function Ha(e,t,n,a){let o=!1;const{count:r,baseX:s,baseY:l,dx:c,dy:d}=e;for(let h=0;h<r;h++){let u=0,f=0;if(a){const m=s[h]+c[h],y=l[h]+d[h],v=m-t,w=y-n,b=Math.sqrt(v*v+w*w);if(b<wt&&b>0){const E=1-b/wt,B=E*E*E*ja;u=v/b*B,f=w/b*B}}c[h]+=(u-c[h])*bt,d[h]+=(f-d[h])*bt,Math.abs(c[h])<vt&&Math.abs(d[h])<vt?(c[h]=0,d[h]=0):o=!0}return o||a}function At(e,t,n,a){const{count:o,baseX:r,baseY:s,dx:l,dy:c,dotSize:d,colors:h}=t;e.clearRect(0,0,e.canvas.width,e.canvas.height);const u=d*a,f=.25*a;if(h){const m=new Map;for(let y=0;y<o;y++){const v=h[y];m.has(v)||m.set(v,[]),m.get(v).push(y)}for(const[y,v]of m){e.fillStyle=y;for(const w of v){const b=(r[w]+l[w])*a,E=(s[w]+c[w])*a;e.fillRect(b-f,E-f,u+f,u+f)}}}else{e.fillStyle=n;for(let m=0;m<o;m++){const y=(r[m]+l[m])*a,v=(s[m]+c[m])*a;e.fillRect(y-f,v-f,u+f,u+f)}}}function za(e,t){const n=g.useRef(null),a=g.useRef(null),o=g.useRef({x:0,y:0,active:!1}),r=g.useRef(null),s=g.useRef(!1),l=g.useCallback(()=>{const f=n.current;if(!f||!a.current)return;const m=f.getContext("2d"),{x:y,y:v,active:w}=o.current,b=Ha(a.current,y,v,w);At(m,a.current,e,window.devicePixelRatio||1),b?r.current=requestAnimationFrame(l):s.current=!1},[e]),c=g.useCallback(()=>{s.current||(s.current=!0,r.current=requestAnimationFrame(l))},[l]),d=g.useCallback(f=>{a.current=f;const m=n.current;if(m){const y=m.getContext("2d");At(y,a.current,e,window.devicePixelRatio||1)}},[e]),h=g.useCallback(f=>{const m=n.current?.getBoundingClientRect();m&&(o.current.x=f.clientX-m.left,o.current.y=f.clientY-m.top,o.current.active=!0,c())},[c]),u=g.useCallback(()=>{o.current.active=!1,c()},[c]);return g.useEffect(()=>()=>{r.current&&cancelAnimationFrame(r.current)},[]),{canvasRef:n,setDots:d,handlePointerMove:h,handlePointerLeave:u}}function Wa(e,t,n,a,o){const r=e.data,s=[];for(let l=0;l<n;l+=a)for(let c=0;c<t;c+=a){const d=(l*t+c)*4;r[d+3]>128&&s.push(c/o,l/o)}return new Float32Array(s)}function Fa(e,t,n,a,o,r,s){const l=document.createElement("canvas");l.width=a*s,l.height=o*s;const c=l.getContext("2d");c.scale(s,s),c.font=t,c.fillStyle=n,c.textBaseline="top";const d=c.measureText(e),h=d.actualBoundingBoxAscent+d.actualBoundingBoxDescent,u=(a-d.width)/2,f=(o-h)/2;c.fillText(e,u,f);const m=c.getImageData(0,0,l.width,l.height),y=Math.max(1,Math.round(r*s));return Wa(m,l.width,l.height,y,s)}const xt=({text:e,className:t="",color:n="#915eff",dotScale:a=2})=>{const{canvasRef:o,setDots:r,handlePointerMove:s,handlePointerLeave:l}=za(n),c=g.useCallback(()=>{const d=o.current;if(!d)return;const h=d.getBoundingClientRect(),u=window.devicePixelRatio||1,f=h.width,m=h.height;d.width=f*u,d.height=m*u;const y=getComputedStyle(d),v=parseFloat(y.fontSize)||40,w=y.fontWeight||"900",b=y.fontFamily||"Poppins, sans-serif",E=`${w} ${v}px ${b}`,B=Fa(e,E,n,f,m,a,u);r(Ba(B,a))},[e,n,a,o,r]);return g.useEffect(()=>{c();const d=new ResizeObserver(c);return o.current&&d.observe(o.current),()=>d.disconnect()},[c,o]),p("span",{className:`relative inline-block ${t}`,children:[i("span",{className:"invisible",children:e}),i("canvas",{ref:o,"aria-hidden":"true",className:"absolute inset-0 w-full h-full",style:{fontSize:"inherit",fontWeight:"inherit",fontFamily:"inherit"},onPointerMove:s,onPointerLeave:l})]})},Ua="/assets/github-3b4e1609.png",Ga="/assets/menu-242d80a8.svg",Va="/assets/close-ad0e0ca6.svg",Ya="/assets/docker-602a695a.png",qa="/assets/aws-3992509b.png",Ja="data:image/png;base64,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",Qa="/assets/java-1d6e2973.png",Xa="data:image/png;base64,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",Za="/assets/nodejs-d83eb6dd.png",Ka="/assets/reactjs-966214a8.png",$a="/assets/tailwind-6ece120d.png",eo="data:image/png;base64,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",to="/assets/threejs-1d0654a8.svg",no="data:image/png;base64,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",ao="/assets/golang-7ad4fbca.png",oo="/assets/python-90b5859b.png",ro="/assets/rust-63a52c0e.png",io="/assets/boeing-52b7c75f.png",kt="/assets/aws-4fd147c7.png",Tt="/assets/appian-5f07f258.png",so="/assets/nvidia-eye-d50e44e9.webp",lo="/assets/ParallaxImageGallery-f4a8d517.webp",co="/assets/SAASLandingPage-fec1310d.webp",ho="/assets/dashboard-2d63fee3.webp",uo="/assets/argos-41add278.webp",po="/assets/space-selfie-3aba83c3.webp",mo="/assets/bird-radio-de14013d.webp",fo="/assets/which-card-4999fe9e.webp",go="/assets/situsearch-6a066f2c.webp",yo="/assets/patentagility-3e3ae6dd.webp",ye=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"media",title:"Media"},{id:"contact",title:"Contact"},{id:"blog",title:"Blog",isExternal:!0,path:"/blog/"},{id:"ai",title:"AI Consulting",isExternal:!0,path:"/ai/",isFullPage:!0}],wo=[{name:"Git",icon:Ja},{name:"AWS",icon:qa},{name:"Docker",icon:Ya},{name:"Kotlin",icon:no},{name:"Java",icon:Qa},{name:"Rust",icon:ro},{name:"Golang",icon:ao},{name:"Python",icon:oo},{name:"JavaScript",icon:Xa},{name:"TypeScript",icon:eo},{name:"React JS",icon:Ka},{name:"Tailwind CSS",icon:$a},{name:"Node JS",icon:Za},{name:"Three JS",icon:to}],bo=[{title:"Senior AI Engineer",company_name:"NVIDIA",icon:so,iconBg:"#FFFFFF",date:"December 2025 - Current",points:["Building long-horizon agents and shipping them across the NVIDIA ecosystem","Evaluating models and the harnesses that run them","Researching personal superintelligence in enterprise environments"]},{title:"Software Engineer @ AWS Region Expansion",company_name:"AWS",icon:kt,iconBg:"#383E56",date:"September 2024 - December 2025",points:["Built enterprise-grade ETL pipelines to ingest millions of multi-modal documents for RAG workloads","Deployed multi-agent systems to production for planning region builds and forecasting cost/timelines","Launched AI chatbots answering thousands of questions weekly with feedback loop systems for self-improvement"]},{title:"Software Engineer @ AWS Outposts",company_name:"AWS",icon:kt,iconBg:"#383E56",date:"March 2022 - September 2024",points:["Built next generation of edge computing infrastructure to deliver the ultimate hybrid cloud experience","Focused on building event driven, low latency distributed systems using AWS ECS, Lambda, DynamoDB, EventBridge, Kotlin, Typescript and Rust","Led, designed and delivered numerous large features and projects spanning multiple teams and organizations"]},{title:"Senior Software Engineer",company_name:"Appian",icon:Tt,iconBg:"#383E56",date:"March 2021 - Jan 2022",points:["Led the integration with newly acquired company from Spain by being the first engineer to work directly in the Spain team","Collaborated across Spain and USA teams to develop sustainable engineering practices to ensure long term success","Implemented core features to make Robotic Process Automation (RPA) a native capability of the Appian platform","Won company wide award for excellent technical innovation in delivering the first successful integration with an acquired company for Appian"]},{title:"Software Engineer",company_name:"Appian",icon:Tt,iconBg:"#383E56",date:"Aug 2018 - March 2021",points:["Developed and delivered a full stack integration with Twilio in Appian's Intelligent Contact Center platform allowing cloud native telephony capabilities","Designed, implemented and presented a templatized end to end delivery pipeline of Appian applications to customers. Used to this day to ship thousands of applications on Appian","Empowered a 100+ engineer organization to be self-sufficient with AWS by solely managing a fleet of AWS accounts for the organization","Developed and shipped an open source project, Terraform provider for Twilio, to be used by Appian and external companies"]},{title:"Software Engineer Intern",company_name:"Boeing",icon:io,iconBg:"#E6DEDD",date:"June 2018 - August 2018",points:["Part of the first cohort of software engineers for Boeing's Avionics department","Developed high performance flight simulation engine based on real time flight data","Won best hackathon project for building the first ever big data visualization platform for Boeing's internal test flights"]}],vo=[{name:"Mock Interview Prep",description:"Mock Software Engineering interview for the interview prep site [InterviewPen](https://www.interviewpen.com). Watch to see how to navigate and succeed in a FAANG interview",tags:[{name:"react",color:"blue-text-gradient"},{name:"mongodb",color:"green-text-gradient"},{name:"tailwind",color:"pink-text-gradient"}],embedId:"bmqZ5AhNr3g"},{name:"Podcast Interview",description:"Podcast appearance on [Back2BackSWE channel](https://www.youtube.com/@BackToBackSWE) (300K+ subscribers) where I give career guidance to software engineers about navigating the job hunt, how to interview and how to ultimately find the right fit",embedId:"y2y_ni8WLy0"},{name:"Commencement Speech",description:"Commencement speech for my college graduation where I talk about my childhood, my immigration to the US, my struggles and all my achievements since",embedId:"xxNa51UFGGI?start=2627"}],Kt=[{name:"Today's Tech",description:"Personal dashboard aggregating market data, GitHub trending repos, Hacker News, and tech news in a sleek terminal-inspired interface",image:ho,source_code_link:"https://github.com/samratjha96/today",demo_link:"https://today.bootloop.cc/"},{name:"NetWorth Tracker",description:"Personal finance application to track net worth. Built with React, TypeScript, Tailwind CSS and shadcn-ui",image:uo,source_code_link:"https://github.com/samratjha96/networth",demo_link:"https://argos.bootloop.cc/"},{name:"Situation Search",description:"Natural-language search over football match video. Type what you want to see and jump straight to the moment. Built for analysts.",image:go,source_code_link:"https://github.com/samratjha96/situation-search",demo_link:"https://situsearch.bootloop.cc"},{name:"PatentAgility",description:"A tool that helps patent attorneys find supporting evidence for legal claims. Combines dense sentence embeddings, BM25, and cross-encoder reranking for search, transformer-based NLP to catch claim drafting defects, and auto-generates visual diagrams of how a claim's legal language breaks down.",image:yo,source_code_link:"https://github.com/samratjha96/NLP-Based-Patent-Specification-And-Claim-Analysis",demo_link:"https://patentagility-demo.zasamrat.workers.dev"},{name:"Bird Radio",description:"A retro-styled nature sound tuner that streams bird songs from around the world. Features real-time spectrogram visualization and region-based browsing",image:mo,source_code_link:"https://github.com/samratjha96/BirdRadio",demo_link:"https://bird-radio.pages.dev/"},{name:"Which Card",description:"Find the best credit card for every purchase. Search by merchant or category, compare rewards, and maximize your cashback with smart category disambiguation",image:fo,source_code_link:"https://github.com/samratjha96/which-card",demo_link:"https://which-card.pages.dev"},{name:"Space Selfie",description:"Discover when the ISS flew over your special moments. Built with TypeScript, Cloudflare Workers, Hono, and satellite.js for orbital calculations",image:po,source_code_link:"https://github.com/samratjha96/space-selfie",demo_link:"https://space-selfie.zasamrat.workers.dev"},{name:"SAAS Landing Page",description:"Sleek white label SAAS landing page. Complete with engaging copy, animations and eye-catching design. This landing page can be reskinned for any client or project",image:co,source_code_link:"https://github.com/samratjha96/sample-saas-landing-page",demo_link:"https://sample-saas-landing-page.vercel.app/"},{name:"Parallax Image Gallery",description:"Sleek parallax animation showing off a collection of photos. Add a subtle but highly creative touch to your blog without cluttering the content with pictures",image:lo,source_code_link:"https://github.com/samratjha96/parallax-image-gallery",demo_link:"https://parallax-image-gallery-beta.vercel.app/"}],Ao=()=>{const e=g.useRef(null);return g.useEffect(()=>{let t=null,n=!1;return A(()=>import("./mountRack-72267cdc.js"),[]).then(({mountRack:a})=>{n||(t=a(e.current,Kt.map(o=>o.name)))}),()=>{n=!0,t?.()}},[]),i("div",{ref:e,className:"rack","data-client-only":""})},xo=()=>i("section",{id:"about",className:"relative w-full mx-auto",children:p("div",{className:`${D.paddingX} max-w-7xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20 grid grid-cols-[minmax(0,1fr)] gap-12 min-[1360px]:grid-cols-[820px_minmax(0,1fr)] min-[1360px]:gap-x-10 min-[1360px]:items-center`,children:[i("div",{className:"max-w-5xl border-l border-[#915eff]/50 pl-6 sm:pl-8",children:p("div",{className:"grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 min-[1360px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] min-[1360px]:gap-14",children:[p("div",{children:[p("h1",{className:"font-semibold text-white text-[46px] leading-[56px] sm:text-[54px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px]",children:[i(xt,{text:"Samrat",dotScale:2}),i("br",{}),i(xt,{text:"Jha",dotScale:2})]}),i("p",{className:`${D.heroSubText} mt-5`,children:"I help teams build AI systems that work beyond the demo."}),p("div",{className:"mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-semibold",children:[i("a",{href:"https://cal.com/samrat-jha-akdwhz",target:"_blank",rel:"noopener noreferrer",className:"text-white underline decoration-[#915eff] decoration-2 underline-offset-8 hover:text-[#dfd9ff]",children:"Book a meeting"}),i(L,{to:"/blog/",className:"text-[#dfd9ff] hover:text-white",children:"Latest writing →"})]})]}),p("div",{className:"max-w-2xl text-[16px] leading-8 sm:text-[18px]",children:[i("p",{className:"text-[#dfd9ff]",children:"I am a Senior AI Engineer at NVIDIA. I build the systems that make AI practical across the company: fast, economical, and dependable at scale."}),i("p",{className:"mt-5 text-secondary",children:"Before NVIDIA, I spent four years at AWS Outposts building hybrid cloud infrastructure for low-latency, mission-critical workloads. I designed globally deployed distributed systems where reliability, privacy, and operational discipline were essential. I now apply that foundation to model routers, evaluation platforms, ambient agents, and software factories."})]})]})}),i("div",{className:"w-full max-w-[520px] justify-self-center min-[1360px]:max-w-none",children:i(Ao,{})})]})}),$t="/personalLogo.png",ko=()=>{const[e,t]=g.useState(""),[n,a]=g.useState(!1),[o,r]=g.useState(!1);return g.useEffect(()=>{const s=()=>{window.scrollY>100?r(!0):r(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),i("nav",{className:`${D.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${o?"bg-primary":"bg-transparent"}
    `,children:p("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[p(L,{to:"/",className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[i("img",{src:$t,alt:"logo",className:"w-9 h-9 object-contain"}),i("p",{className:"text-white text-[18px] font-semibold cursor-pointer",children:"Samrat Jha"})]}),i("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:ye.map(s=>i("li",{className:`${e===s.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-normal cursor-pointer`,onClick:()=>t(s.title),children:s.isExternal?s.isFullPage?i("a",{href:s.path,children:s.title}):i(L,{to:s.path,children:s.title}):i("a",{href:`#${s.id}`,children:s.title})},s.id))}),p("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[i("img",{src:n?Va:Ga,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>a(!n)}),i("div",{className:`${n?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:i("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:ye.map(s=>i("li",{className:`${e===s.title?"text-white":"text-secondary"} font-poppins font-normal cursor-pointer text-[16px]`,onClick:()=>{t(s.title),a(!n)},children:s.isExternal?s.isFullPage?i("a",{href:s.path,children:s.title}):i(L,{to:s.path,children:s.title}):i("a",{href:`#${s.id}`,children:s.title})},s.id))})})]})]})})},Et=(e,t,n,a)=>{e.style.transition=`${t} ${n}ms ${a}`},z=(e,t,n)=>Math.min(Math.max(e,t),n);class To{constructor(t,n){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:l,height:c}=s,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=s=>{const l=this.calculateGlareSize(s);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(s,l,c,d)=>{this.updateAngle(s,l.glareReverse),this.updateOpacity(s,l,c,d)},this.updateAngle=(s,l)=>{const{xPercentage:c,yPercentage:d}=s,h=180/Math.PI,u=c?Math.atan2(d,-c)*h:0;this.glareAngle=u-(l?180:0)},this.updateOpacity=(s,l,c,d)=>{const{xPercentage:h,yPercentage:u}=s,{glarePosition:f,glareReverse:m,glareMaxOpacity:y}=l,v=c?-1:1,w=d?-1:1,b=m?-1:1;let E=0;switch(f){case"top":E=-h*v*b;break;case"right":E=u*w*b;break;case"bottom":case void 0:E=h*v*b;break;case"left":E=-u*w*b;break;case"all":E=Math.hypot(h,u)}const B=z(E,0,100);this.glareOpacity=B*y/100},this.render=s=>{const{glareColor:l}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const a={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:n,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},o=this.calculateGlareSize(t),r={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${o.width}px`,height:`${o.height}px`};Object.assign(this.glareWrapperEl.style,a),Object.assign(this.glareEl.style,r)}}class Eo{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(t,n)=>{this.updateTilt(t,n),this.updateTiltManualInput(t,n),this.updateTiltReverse(n),this.updateTiltLimits(n)},this.updateTilt=(t,n)=>{const{xPercentage:a,yPercentage:o}=t,{tiltMaxAngleX:r,tiltMaxAngleY:s}=n;this.tiltAngleX=a*r/100,this.tiltAngleY=o*s/100*-1},this.updateTiltManualInput=(t,n)=>{const{tiltAngleXManual:a,tiltAngleYManual:o,tiltMaxAngleX:r,tiltMaxAngleY:s}=n;(a!==null||o!==null)&&(this.tiltAngleX=a!==null?a:0,this.tiltAngleY=o!==null?o:0,t.xPercentage=100*this.tiltAngleX/r,t.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=t=>{const n=t.tiltReverse?-1:1;this.tiltAngleX=n*this.tiltAngleX,this.tiltAngleY=n*this.tiltAngleY},this.updateTiltLimits=t=>{const{tiltAxis:n}=t;this.tiltAngleX=z(this.tiltAngleX,-90,90),this.tiltAngleY=z(this.tiltAngleY,-90,90),n&&(this.tiltAngleX=n==="x"?this.tiltAngleX:0,this.tiltAngleY=n==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=t=>{const{tiltMaxAngleX:n,tiltMaxAngleY:a}=t;this.tiltAngleXPercentage=this.tiltAngleX/n*100,this.tiltAngleYPercentage=this.tiltAngleY/a*100},this.render=t=>{t.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const Io={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class en extends g.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const t=DeviceOrientationEvent.requestPermission;typeof t=="function"?await t()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=t=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(t),this.update(t.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=t=>{const{onEnter:n}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),n&&n({event:t})},this.onMove=t=>{this.mainLoop(t),this.emitOnMove(t)},this.onLeave=t=>{const{onLeave:n}=this.props;if(this.setTransitions(),n&&n({event:t}),this.props.reset){const a=new CustomEvent("autoreset");this.onMove(a)}},this.processInput=t=>{const{scale:n}=this.props;switch(t.type){case"mousemove":this.wrapperEl.clientPosition.x=t.pageX,this.wrapperEl.clientPosition.y=t.pageY,this.wrapperEl.scale=n;break;case"touchmove":this.wrapperEl.clientPosition.x=t.touches[0].pageX,this.wrapperEl.clientPosition.y=t.touches[0].pageY,this.wrapperEl.scale=n;break;case"deviceorientation":this.processInputDeviceOrientation(t),this.wrapperEl.scale=n;break;case"autoreset":{const{tiltAngleXInitial:a,tiltAngleYInitial:o,tiltMaxAngleX:r,tiltMaxAngleY:s}=this.props,l=o/s*100;this.wrapperEl.clientPosition.xPercentage=z(a/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=z(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=t=>{if(!t.gamma||!t.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:n,tiltMaxAngleY:a}=this.props,o=t.gamma;this.wrapperEl.clientPosition.xPercentage=t.beta/n*100,this.wrapperEl.clientPosition.yPercentage=o/a*100,this.wrapperEl.clientPosition.xPercentage=z(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=z(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=t=>{const{tiltEnable:n,flipVertically:a,flipHorizontally:o}=this.props;t!=="autoreset"&&t!=="deviceorientation"&&t!=="propChange"&&this.updateClientInput(),n&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,a,o)},this.updateClientInput=()=>{const{trackOnWindow:t}=this.props;let n,a;if(t){const{x:o,y:r}=this.wrapperEl.clientPosition;n=r/window.innerHeight*200-100,a=o/window.innerWidth*200-100}else{const{size:{width:o,height:r,left:s,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;n=(d-l)/r*200-100,a=(c-s)/o*200-100}this.wrapperEl.clientPosition.xPercentage=z(n,-100,100),this.wrapperEl.clientPosition.yPercentage=z(a,-100,100)},this.updateFlip=()=>{const{flipVertically:t,flipHorizontally:n}=this.props;t&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),n&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new Eo,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const t=new CustomEvent("autoreset");this.mainLoop(t);const n=new CustomEvent("initial");this.emitOnMove(n)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const t=new CustomEvent("propChange");this.mainLoop(t),this.emitOnMove(t)}addEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:t,gyroscope:n}=this.props;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const t=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=t.left+window.scrollX,this.wrapperEl.size.top=t.top+window.scrollY}initGlare(){const{glareEnable:t,glareBorderRadius:n}=this.props;t&&(this.glare=new To(this.wrapperEl.size,n),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(t){const{onMove:n}=this.props;if(!n)return;let a=0,o=0;this.glare&&(a=this.glare.glareAngle,o=this.glare.glareOpacity),n({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:a,glareOpacity:o,event:t})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:t}=this.props;this.wrapperEl.node.style.transform+=`perspective(${t}px) `}renderScale(){const{scale:t}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${t},${t},${t})`}setTransitions(){const{transitionSpeed:t,transitionEasing:n}=this.props;Et(this.wrapperEl.node,"all",t,n),this.glare&&Et(this.glare.glareEl,"opacity",t,n)}render(){const{children:t,className:n,style:a}=this.props;return i("div",{ref:o=>{this.wrapperEl.node=o},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:n,style:a,children:t})}}en.defaultProps=Io;const et=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),tt=(e,t,n,a)=>({hidden:{x:e==="left"?100:e==="right"?-100:0,y:e==="up"?100:e==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:n,duration:a,ease:"easeOut"}}}),It=(e,t,n,a)=>({hidden:{x:e==="left"?"-100%":e==="right"?"100%":0,y:e==="up"||e==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:n,duration:a,ease:"easeOut"}}}),Po=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),le=(e,t)=>function(){return p(F.section,{variants:Po(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`${D.padding} max-w-7xl mx-auto relative z-0`,children:[i("span",{className:"hash-span",id:t,children:" "}),i(e,{})]})},So=()=>i("ul",{className:"flex flex-wrap gap-2.5 max-w-[760px]",children:wo.map(e=>i("li",{className:"text-[15px] leading-none text-slate-300 px-4 py-2.5 border border-[#915eff]/[0.28] rounded-full bg-[#915eff]/[0.06] whitespace-nowrap",children:e.name},e.name))}),Co=le(So,"");var xe={},tn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(r=o(r,a(l)))}return r}function a(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var s="";for(var l in r)t.call(r,l)&&r[l]&&(s=o(s,l));return s}function o(r,s){return s?r?r+" "+s:r+s:r}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(tn);var nn=tn.exports;xe.__esModule=!0;xe.default=void 0;var Oo=nt(g),U=nt(Xe),_o=nt(nn);function nt(e){return e&&e.__esModule?e:{default:e}}const an=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:a="#FFF",children:o})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),Oo.default.createElement("div",{className:(0,_o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":n==="2-columns","vertical-timeline--one-column-left":n==="1-column"||n==="1-column-left","vertical-timeline--one-column-right":n==="1-column-right"})},o));an.propTypes={children:U.default.oneOfType([U.default.arrayOf(U.default.node),U.default.node]).isRequired,className:U.default.string,animate:U.default.bool,layout:U.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:U.default.string};var Mo=an;xe.default=Mo;var ke={};function Fe(){return Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Fe.apply(this,arguments)}function No(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ue(e,t)}function Ue(e,t){return Ue=Object.setPrototypeOf||function(a,o){return a.__proto__=o,a},Ue(e,t)}function Ro(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ge=new Map,pe=new WeakMap,Pt=0,on=void 0;function Lo(e){on=e}function Do(e){return e?(pe.has(e)||(Pt+=1,pe.set(e,Pt.toString())),pe.get(e)):"0"}function jo(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Do(e.root):e[t])}).toString()}function Bo(e){var t=jo(e),n=Ge.get(t);if(!n){var a=new Map,o,r=new IntersectionObserver(function(s){s.forEach(function(l){var c,d=l.isIntersecting&&o.some(function(h){return l.intersectionRatio>=h});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=d),(c=a.get(l.target))==null||c.forEach(function(h){h(d,l)})})},e);o=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:a},Ge.set(t,n)}return n}function at(e,t,n,a){if(n===void 0&&(n={}),a===void 0&&(a=on),typeof window.IntersectionObserver>"u"&&a!==void 0){var o=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var r=Bo(n),s=r.id,l=r.observer,c=r.elements,d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),Ge.delete(s))}}var Ho=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function St(e){return typeof e.children!="function"}var we=function(e){No(t,e);function t(a){var o;return o=e.call(this,a)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(r){o.node&&(o.unobserve(),!r&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=r||null,o.observeNode()},o.handleChange=function(r,s){r&&o.props.triggerOnce&&o.unobserve(),St(o.props)||o.setState({inView:r,entry:s}),o.props.onChange&&o.props.onChange(r,s)},o.state={inView:!!a.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,r=o.threshold,s=o.root,l=o.rootMargin,c=o.trackVisibility,d=o.delay,h=o.fallbackInView;this._unobserveCb=at(this.node,this.handleChange,{threshold:r,root:s,rootMargin:l,trackVisibility:c,delay:d},h)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!St(this.props)){var o=this.state,r=o.inView,s=o.entry;return this.props.children({inView:r,entry:s,ref:this.handleNode})}var l=this.props,c=l.children,d=l.as,h=Ro(l,Ho);return g.createElement(d||"div",Fe({ref:this.handleNode},h),c)},t}(g.Component);we.displayName="InView";we.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function zo(e){var t=e===void 0?{}:e,n=t.threshold,a=t.delay,o=t.trackVisibility,r=t.rootMargin,s=t.root,l=t.triggerOnce,c=t.skip,d=t.initialInView,h=t.fallbackInView,u=g.useRef(),f=g.useState({inView:!!d}),m=f[0],y=f[1],v=g.useCallback(function(b){u.current!==void 0&&(u.current(),u.current=void 0),!c&&b&&(u.current=at(b,function(E,B){y({inView:E,entry:B}),B.isIntersecting&&l&&u.current&&(u.current(),u.current=void 0)},{root:s,rootMargin:r,threshold:n,trackVisibility:o,delay:a},h))},[Array.isArray(n)?n.toString():n,s,r,l,c,o,h,a]);g.useEffect(function(){!u.current&&m.entry&&!l&&!c&&y({inView:!!d})});var w=[v,m.inView,m.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const Wo=Object.freeze(Object.defineProperty({__proto__:null,InView:we,default:we,defaultFallbackInView:Lo,observe:at,useInView:zo},Symbol.toStringTag,{value:"Module"})),Fo=Ut(Wo);ke.__esModule=!0;ke.default=void 0;var G=ot(g),x=ot(Xe),me=ot(nn),Uo=Fo;function ot(e){return e&&e.__esModule?e:{default:e}}const rn=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:a=null,date:o="",dateClassName:r="",icon:s=null,iconClassName:l="",iconOnClick:c=null,onTimelineElementClick:d=null,iconStyle:h=null,id:u="",position:f="",style:m=null,textClassName:y="",intersectionObserverProps:v={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:w=!1})=>G.default.createElement(Uo.InView,v,({inView:b,ref:E})=>G.default.createElement("div",{ref:E,id:u,className:(0,me.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":f==="left","vertical-timeline-element--right":f==="right","vertical-timeline-element--no-children":e===""}),style:m},G.default.createElement(G.default.Fragment,null,G.default.createElement("span",{style:h,onClick:c,className:(0,me.default)(l,"vertical-timeline-element-icon",{"bounce-in":b||w,"is-hidden":!(b||w)})},s),G.default.createElement("div",{style:a,onClick:d,className:(0,me.default)(y,"vertical-timeline-element-content",{"bounce-in":b||w,"is-hidden":!(b||w)})},G.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,G.default.createElement("span",{className:(0,me.default)(r,"vertical-timeline-element-date")},o)))));rn.propTypes={children:x.default.oneOfType([x.default.arrayOf(x.default.node),x.default.node]),className:x.default.string,contentArrowStyle:x.default.shape({}),contentStyle:x.default.shape({}),date:x.default.node,dateClassName:x.default.string,icon:x.default.element,iconClassName:x.default.string,iconStyle:x.default.shape({}),iconOnClick:x.default.func,onTimelineElementClick:x.default.func,id:x.default.string,position:x.default.string,style:x.default.shape({}),textClassName:x.default.string,visible:x.default.bool,intersectionObserverProps:x.default.shape({root:x.default.object,rootMargin:x.default.string,threshold:x.default.number,triggerOnce:x.default.bool})};var Go=rn;ke.default=Go;var sn={VerticalTimeline:xe.default,VerticalTimelineElement:ke.default};const Vo={NVIDIA:"https://www.nvidia.com/",AWS:"https://aws.amazon.com/",Appian:"https://appian.com/",Boeing:"https://www.boeing.com/"},Yo=({experience:e})=>{const t=Vo[e.company_name];return p(sn.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:i("div",{className:"flex justify-center items-center w-full h-full",children:i("img",{src:e.icon,alt:e.company_name,width:36,height:36,loading:"lazy",className:"w-[60%] h-[60%] object-contain"})}),children:[p("div",{children:[i("h3",{className:"text-white text-[24px] font-semibold",children:e.title}),i("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t?i("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#915eff] transition-colors",children:e.company_name}):e.company_name})]}),i("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:e.points.map((n,a)=>i("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${a}`))})]})},qo=()=>p(Y,{children:[p(F.div,{variants:et(),children:[i("p",{className:D.sectionSubText,children:"What I have done so far"}),i("h2",{className:D.sectionHeadText,children:"Work Experience"})]}),i("div",{className:"mt-20 flex flex-col",children:i(sn.VerticalTimeline,{children:bo.map((e,t)=>i(Yo,{experience:e},t))})})]}),Jo=le(qo,"work");var Qo=function(t,n,a){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");typeof n=="function"&&(a=n,n={}),n=n||{},a=a||function(){},r.type=n.type||"text/javascript",r.charset=n.charset||"utf8",r.async="async"in n?!!n.async:!0,r.src=t,n.attrs&&Xo(r,n.attrs),n.text&&(r.text=""+n.text);var s="onload"in r?Ct:Zo;s(r,a),r.onload||Ct(r,a),o.appendChild(r)};function Xo(e,t){for(var n in t)e.setAttribute(n,t[n])}function Ct(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Zo(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Ko=function(t){return $o(t)&&!er(t)};function $o(e){return!!e&&typeof e=="object"}function er(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ar(e)}var tr=typeof Symbol=="function"&&Symbol.for,nr=tr?Symbol.for("react.element"):60103;function ar(e){return e.$$typeof===nr}function or(e){return Array.isArray(e)?[]:{}}function se(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ee(or(e),e,t):e}function rr(e,t,n){return e.concat(t).map(function(a){return se(a,n)})}function ir(e,t){if(!t.customMerge)return ee;var n=t.customMerge(e);return typeof n=="function"?n:ee}function sr(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Ot(e){return Object.keys(e).concat(sr(e))}function ln(e,t){try{return t in e}catch{return!1}}function lr(e,t){return ln(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function cr(e,t,n){var a={};return n.isMergeableObject(e)&&Ot(e).forEach(function(o){a[o]=se(e[o],n)}),Ot(t).forEach(function(o){lr(e,o)||(ln(e,o)&&n.isMergeableObject(t[o])?a[o]=ir(o,n)(e[o],t[o],n):a[o]=se(t[o],n))}),a}function ee(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||rr,n.isMergeableObject=n.isMergeableObject||Ko,n.cloneUnlessOtherwiseSpecified=se;var a=Array.isArray(t),o=Array.isArray(e),r=a===o;return r?a?n.arrayMerge(e,t,n):cr(e,t,n):se(t,n)}ee.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,o){return ee(a,o,n)},{})};var dr=ee,cn=dr,hr=Object.create,Te=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyNames,mr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty,gr=(e,t)=>{for(var n in t)Te(e,n,{get:t[n],enumerable:!0})},dn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of pr(t))!fr.call(e,o)&&o!==n&&Te(e,o,{get:()=>t[o],enumerable:!(a=ur(t,o))||a.enumerable});return e},rt=(e,t,n)=>(n=e!=null?hr(mr(e)):{},dn(t||!e||!e.__esModule?Te(n,"default",{value:e,enumerable:!0}):n,e)),yr=e=>dn(Te({},"__esModule",{value:!0}),e),hn={};gr(hn,{callPlayer:()=>Nr,getConfig:()=>_r,getSDK:()=>Or,isBlobUrl:()=>Lr,isMediaStream:()=>Rr,lazy:()=>Ar,omit:()=>Mr,parseEndTime:()=>Pr,parseStartTime:()=>Ir,queryString:()=>Cr,randomString:()=>Sr,supportsWebKitPresentationMode:()=>Dr});var Ee=yr(hn),wr=rt(g),br=rt(Qo),vr=rt(cn);const Ar=e=>wr.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),xr=/[?&#](?:start|t)=([0-9hms]+)/,kr=/[?&#]end=([0-9hms]+)/,Ve=/(\d+)(h|m|s)/g,Tr=/^\d+$/;function un(e,t){if(e instanceof Array)return;const n=e.match(t);if(n){const a=n[1];if(a.match(Ve))return Er(a);if(Tr.test(a))return parseInt(a)}}function Er(e){let t=0,n=Ve.exec(e);for(;n!==null;){const[,a,o]=n;o==="h"&&(t+=parseInt(a,10)*60*60),o==="m"&&(t+=parseInt(a,10)*60),o==="s"&&(t+=parseInt(a,10)),n=Ve.exec(e)}return t}function Ir(e){return un(e,xr)}function Pr(e){return un(e,kr)}function Sr(){return Math.random().toString(36).substr(2,5)}function Cr(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function Ne(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const J={},Or=function(t,n,a=null,o=()=>!0,r=br.default){const s=Ne(n);return s&&o(s)?Promise.resolve(s):new Promise((l,c)=>{if(J[t]){J[t].push({resolve:l,reject:c});return}J[t]=[{resolve:l,reject:c}];const d=h=>{J[t].forEach(u=>u.resolve(h))};if(a){const h=window[a];window[a]=function(){h&&h(),d(Ne(n))}}r(t,h=>{h?(J[t].forEach(u=>u.reject(h)),J[t]=null):a||d(Ne(n))})})};function _r(e,t){return(0,vr.default)(t.config,e.config)}function Mr(e,...t){const n=[].concat(...t),a={},o=Object.keys(e);for(const r of o)n.indexOf(r)===-1&&(a[r]=e[r]);return a}function Nr(e,...t){if(!this.player||!this.player[e]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[e](...t)}function Rr(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Lr(e){return/^blob:/.test(e)}function Dr(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var it=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Br=Object.getOwnPropertyNames,Hr=Object.prototype.hasOwnProperty,zr=(e,t)=>{for(var n in t)it(e,n,{get:t[n],enumerable:!0})},Wr=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Br(t))!Hr.call(e,o)&&o!==n&&it(e,o,{get:()=>t[o],enumerable:!(a=jr(t,o))||a.enumerable});return e},Fr=e=>Wr(it({},"__esModule",{value:!0}),e),pn={};zr(pn,{AUDIO_EXTENSIONS:()=>st,DASH_EXTENSIONS:()=>Pn,FLV_EXTENSIONS:()=>Sn,HLS_EXTENSIONS:()=>ct,MATCH_URL_DAILYMOTION:()=>kn,MATCH_URL_FACEBOOK:()=>yn,MATCH_URL_FACEBOOK_WATCH:()=>wn,MATCH_URL_KALTURA:()=>In,MATCH_URL_MIXCLOUD:()=>Tn,MATCH_URL_MUX:()=>gn,MATCH_URL_SOUNDCLOUD:()=>mn,MATCH_URL_STREAMABLE:()=>bn,MATCH_URL_TWITCH_CHANNEL:()=>xn,MATCH_URL_TWITCH_VIDEO:()=>An,MATCH_URL_VIDYARD:()=>En,MATCH_URL_VIMEO:()=>fn,MATCH_URL_WISTIA:()=>vn,MATCH_URL_YOUTUBE:()=>Ye,VIDEO_EXTENSIONS:()=>lt,canPlay:()=>Gr});var Ur=Fr(pn),_t=Ee;const Ye=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,mn=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,fn=/vimeo\.com\/(?!progressive_redirect).+/,gn=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,yn=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,wn=/^https?:\/\/fb\.watch\/.+$/,bn=/streamable\.com\/([a-z0-9]+)$/,vn=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,An=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,xn=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,kn=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Tn=/mixcloud\.com\/([^/]+\/[^/]+)/,En=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,In=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,st=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,lt=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ct=/\.(m3u8)($|\?)/i,Pn=/\.(mpd)($|\?)/i,Sn=/\.(flv)($|\?)/i,qe=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&qe(t)||qe(t.src))return!0;return!1}return(0,_t.isMediaStream)(e)||(0,_t.isBlobUrl)(e)?!0:st.test(e)||lt.test(e)||ct.test(e)||Pn.test(e)||Sn.test(e)},Gr={youtube:e=>e instanceof Array?e.every(t=>Ye.test(t)):Ye.test(e),soundcloud:e=>mn.test(e)&&!st.test(e),vimeo:e=>fn.test(e)&&!lt.test(e)&&!ct.test(e),mux:e=>gn.test(e),facebook:e=>yn.test(e)||wn.test(e),streamable:e=>bn.test(e),wistia:e=>vn.test(e),twitch:e=>An.test(e)||xn.test(e),dailymotion:e=>kn.test(e),mixcloud:e=>Tn.test(e),vidyard:e=>En.test(e),kaltura:e=>In.test(e),file:qe};var dt=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,Yr=Object.getOwnPropertyNames,qr=Object.prototype.hasOwnProperty,Jr=(e,t)=>{for(var n in t)dt(e,n,{get:t[n],enumerable:!0})},Qr=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Yr(t))!qr.call(e,o)&&o!==n&&dt(e,o,{get:()=>t[o],enumerable:!(a=Vr(t,o))||a.enumerable});return e},Xr=e=>Qr(dt({},"__esModule",{value:!0}),e),Cn={};Jr(Cn,{default:()=>Kr});var Zr=Xr(Cn),M=Ee,O=Ur,Kr=[{key:"youtube",name:"YouTube",canPlay:O.canPlay.youtube,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./YouTube-b4569e04.js").then(e=>e.Y),["assets/YouTube-b4569e04.js","assets/three-92ffd73b.js"]))},{key:"soundcloud",name:"SoundCloud",canPlay:O.canPlay.soundcloud,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./SoundCloud-4fd194c6.js").then(e=>e.S),["assets/SoundCloud-4fd194c6.js","assets/three-92ffd73b.js"]))},{key:"vimeo",name:"Vimeo",canPlay:O.canPlay.vimeo,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Vimeo-de4c7753.js").then(e=>e.V),["assets/Vimeo-de4c7753.js","assets/three-92ffd73b.js"]))},{key:"mux",name:"Mux",canPlay:O.canPlay.mux,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Mux-c0aa4a97.js").then(e=>e.M),["assets/Mux-c0aa4a97.js","assets/three-92ffd73b.js"]))},{key:"facebook",name:"Facebook",canPlay:O.canPlay.facebook,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Facebook-3672e86a.js").then(e=>e.F),["assets/Facebook-3672e86a.js","assets/three-92ffd73b.js"]))},{key:"streamable",name:"Streamable",canPlay:O.canPlay.streamable,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Streamable-e54d2a16.js").then(e=>e.S),["assets/Streamable-e54d2a16.js","assets/three-92ffd73b.js"]))},{key:"wistia",name:"Wistia",canPlay:O.canPlay.wistia,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Wistia-c29ddaed.js").then(e=>e.W),["assets/Wistia-c29ddaed.js","assets/three-92ffd73b.js"]))},{key:"twitch",name:"Twitch",canPlay:O.canPlay.twitch,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Twitch-6792d12b.js").then(e=>e.T),["assets/Twitch-6792d12b.js","assets/three-92ffd73b.js"]))},{key:"dailymotion",name:"DailyMotion",canPlay:O.canPlay.dailymotion,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./DailyMotion-099dcab6.js").then(e=>e.D),["assets/DailyMotion-099dcab6.js","assets/three-92ffd73b.js"]))},{key:"mixcloud",name:"Mixcloud",canPlay:O.canPlay.mixcloud,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Mixcloud-d24aa5e2.js").then(e=>e.M),["assets/Mixcloud-d24aa5e2.js","assets/three-92ffd73b.js"]))},{key:"vidyard",name:"Vidyard",canPlay:O.canPlay.vidyard,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Vidyard-01047b16.js").then(e=>e.V),["assets/Vidyard-01047b16.js","assets/three-92ffd73b.js"]))},{key:"kaltura",name:"Kaltura",canPlay:O.canPlay.kaltura,lazyPlayer:(0,M.lazy)(()=>A(()=>import("./Kaltura-ca8af82b.js").then(e=>e.K),["assets/Kaltura-ca8af82b.js","assets/three-92ffd73b.js"]))},{key:"file",name:"FilePlayer",canPlay:O.canPlay.file,canEnablePIP:e=>O.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,M.supportsWebKitPresentationMode)())&&!O.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,M.lazy)(()=>A(()=>import("./FilePlayer-25f2f524.js").then(e=>e.F),["assets/FilePlayer-25f2f524.js","assets/three-92ffd73b.js"]))}],Mt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function $r(e,t){return!!(e===t||Mt(e)&&Mt(t))}function ei(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!$r(e[n],t[n]))return!1;return!0}function ti(e,t){t===void 0&&(t=ei);var n,a=[],o,r=!1;function s(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return r&&n===this&&t(l,a)||(o=e.apply(this,l),r=!0,n=this,a=l),o}return s}const ni=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"})),ai=Ut(ni);var oi=Object.create,Ie=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ii=Object.getOwnPropertyNames,si=Object.getPrototypeOf,li=Object.prototype.hasOwnProperty,ci=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},On=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ii(t))!li.call(e,o)&&o!==n&&Ie(e,o,{get:()=>t[o],enumerable:!(a=ri(t,o))||a.enumerable});return e},di=(e,t,n)=>(n=e!=null?oi(si(e)):{},On(t||!e||!e.__esModule?Ie(n,"default",{value:e,enumerable:!0}):n,e)),hi=e=>On(Ie({},"__esModule",{value:!0}),e),_n={};ci(_n,{defaultProps:()=>mi,propTypes:()=>pi});var Mn=hi(_n),ui=di(Xe);const{string:P,bool:_,number:Q,array:Re,oneOfType:oe,shape:N,object:C,func:I,node:Nt}=ui.default,pi={url:oe([P,Re,C]),playing:_,loop:_,controls:_,volume:Q,muted:_,playbackRate:Q,width:oe([P,Q]),height:oe([P,Q]),style:C,progressInterval:Q,playsinline:_,pip:_,stopOnUnmount:_,light:oe([_,P,C]),playIcon:Nt,previewTabIndex:Q,previewAriaLabel:P,fallback:Nt,oEmbedUrl:P,wrapper:oe([P,I,N({render:I.isRequired})]),config:N({soundcloud:N({options:C}),youtube:N({playerVars:C,embedOptions:C,onUnstarted:I}),facebook:N({appId:P,version:P,playerId:P,attributes:C}),dailymotion:N({params:C}),vimeo:N({playerOptions:C,title:P}),mux:N({attributes:C,version:P}),file:N({attributes:C,tracks:Re,forceVideo:_,forceAudio:_,forceHLS:_,forceSafariHLS:_,forceDisableHls:_,forceDASH:_,forceFLV:_,hlsOptions:C,hlsVersion:P,dashVersion:P,flvVersion:P}),wistia:N({options:C,playerId:P,customControls:Re}),mixcloud:N({options:C}),twitch:N({options:C,playerId:P}),vidyard:N({options:C})}),onReady:I,onStart:I,onPlay:I,onPause:I,onBuffer:I,onBufferEnd:I,onEnded:I,onError:I,onDuration:I,onSeek:I,onPlaybackRateChange:I,onPlaybackQualityChange:I,onProgress:I,onClickPreview:I,onEnablePIP:I,onDisablePIP:I},S=()=>{},mi={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:S},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:S,onStart:S,onPlay:S,onPause:S,onBuffer:S,onBufferEnd:S,onEnded:S,onError:S,onDuration:S,onSeek:S,onPlaybackRateChange:S,onPlaybackQualityChange:S,onProgress:S,onClickPreview:S,onEnablePIP:S,onDisablePIP:S};var fi=Object.create,ce=Object.defineProperty,gi=Object.getOwnPropertyDescriptor,yi=Object.getOwnPropertyNames,wi=Object.getPrototypeOf,bi=Object.prototype.hasOwnProperty,vi=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ai=(e,t)=>{for(var n in t)ce(e,n,{get:t[n],enumerable:!0})},Nn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of yi(t))!bi.call(e,o)&&o!==n&&ce(e,o,{get:()=>t[o],enumerable:!(a=gi(t,o))||a.enumerable});return e},Rn=(e,t,n)=>(n=e!=null?fi(wi(e)):{},Nn(t||!e||!e.__esModule?ce(n,"default",{value:e,enumerable:!0}):n,e)),xi=e=>Nn(ce({},"__esModule",{value:!0}),e),T=(e,t,n)=>(vi(e,typeof t!="symbol"?t+"":t,n),n),Ln={};Ai(Ln,{default:()=>Pe});var ki=xi(Ln),Rt=Rn(g),Ti=Rn(Ze),Dn=Mn,Ei=Ee;const Ii=5e3;class Pe extends Rt.Component{constructor(){super(...arguments),T(this,"mounted",!1),T(this,"isReady",!1),T(this,"isPlaying",!1),T(this,"isLoading",!0),T(this,"loadOnReady",null),T(this,"startOnPlay",!0),T(this,"seekOnPlay",null),T(this,"onDurationCalled",!1),T(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),T(this,"getInternalPlayer",t=>this.player?this.player[t]:null),T(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,n=this.getSecondsLoaded(),a=this.getDuration();if(a){const o={playedSeconds:t,played:t/a};n!==null&&(o.loadedSeconds=n,o.loaded=n/a),(o.playedSeconds!==this.prevPlayed||o.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(o),this.prevPlayed=o.playedSeconds,this.prevLoaded=o.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),T(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:n,volume:a,muted:o}=this.props;t(),!o&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),T(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:n,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),T(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),T(this,"handleEnded",()=>{const{activePlayer:t,loop:n,onEnded:a}=this.props;t.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,a())}),T(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),T(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),T(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:n,playing:a,volume:o,muted:r,playbackRate:s,pip:l,loop:c,activePlayer:d,disableDeferredLoading:h}=this.props;if(!(0,Ti.default)(t.url,n)){if(this.isLoading&&!d.forceLoad&&!h&&!(0,Ei.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==o&&o!==null&&this.player.setVolume(o),t.muted!==r&&(r?this.player.mute():(this.player.unmute(),o!==null&&setTimeout(()=>this.player.setVolume(o)))),t.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),t.loop!==c&&this.player.setLoop&&this.player.setLoop(c)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,n,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Ii));return}if(n?n==="fraction":t>0&&t<1){const r=this.player.getDuration();if(!r){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(r*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?Rt.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}T(Pe,"displayName","Player");T(Pe,"propTypes",Dn.propTypes);T(Pe,"defaultProps",Dn.defaultProps);var Pi=Object.create,de=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,Ci=Object.getOwnPropertyNames,Oi=Object.getPrototypeOf,_i=Object.prototype.hasOwnProperty,Mi=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ni=(e,t)=>{for(var n in t)de(e,n,{get:t[n],enumerable:!0})},jn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ci(t))!_i.call(e,o)&&o!==n&&de(e,o,{get:()=>t[o],enumerable:!(a=Si(t,o))||a.enumerable});return e},he=(e,t,n)=>(n=e!=null?Pi(Oi(e)):{},jn(t||!e||!e.__esModule?de(n,"default",{value:e,enumerable:!0}):n,e)),Ri=e=>jn(de({},"__esModule",{value:!0}),e),k=(e,t,n)=>(Mi(e,typeof t!="symbol"?t+"":t,n),n),Bn={};Ni(Bn,{createReactPlayer:()=>Ui});var Li=Ri(Bn),X=he(g),Di=he(cn),Le=he(ai),Lt=he(Ze),ie=Mn,Hn=Ee,ji=he(ki);const Bi=(0,Hn.lazy)(()=>A(()=>import("./Preview-edb643f9.js").then(e=>e.P),["assets/Preview-edb643f9.js","assets/three-92ffd73b.js"])),Hi=typeof window<"u"&&window.document&&typeof document<"u",zi=typeof Ce<"u"&&Ce.window&&Ce.window.document,Wi=Object.keys(ie.propTypes),Fi=Hi||zi?X.Suspense:()=>null,re=[],Ui=(e,t)=>{var n;return n=class extends X.Component{constructor(){super(...arguments),k(this,"state",{showPreview:!!this.props.light}),k(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),k(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),k(this,"showPreview",()=>{this.setState({showPreview:!0})}),k(this,"getDuration",()=>this.player?this.player.getDuration():null),k(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),k(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),k(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),k(this,"seekTo",(a,o,r)=>{if(!this.player)return null;this.player.seekTo(a,o,r)}),k(this,"handleReady",()=>{this.props.onReady(this)}),k(this,"getActivePlayer",(0,Le.default)(a=>{for(const o of[...re,...e])if(o.canPlay(a))return o;return t||null})),k(this,"getConfig",(0,Le.default)((a,o)=>{const{config:r}=this.props;return Di.default.all([ie.defaultProps.config,ie.defaultProps.config[o]||{},r,r[o]||{}])})),k(this,"getAttributes",(0,Le.default)(a=>(0,Hn.omit)(this.props,Wi))),k(this,"renderActivePlayer",a=>{if(!a)return null;const o=this.getActivePlayer(a);if(!o)return null;const r=this.getConfig(a,o.key);return X.default.createElement(ji.default,{...this.props,key:o.key,ref:this.references.player,config:r,activePlayer:o.lazyPlayer||o,onReady:this.handleReady})})}shouldComponentUpdate(a,o){return!(0,Lt.default)(this.props,a)||!(0,Lt.default)(this.state,o)}componentDidUpdate(a){const{light:o}=this.props;!a.light&&o&&this.setState({showPreview:!0}),a.light&&!o&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:o,playIcon:r,previewTabIndex:s,oEmbedUrl:l,previewAriaLabel:c}=this.props;return X.default.createElement(Bi,{url:a,light:o,playIcon:r,previewTabIndex:s,previewAriaLabel:c,oEmbedUrl:l,onClick:this.handleClickPreview})}render(){const{url:a,style:o,width:r,height:s,fallback:l,wrapper:c}=this.props,{showPreview:d}=this.state,h=this.getAttributes(a),u=typeof c=="string"?this.references.wrapper:void 0;return X.default.createElement(c,{ref:u,style:{...o,width:r,height:s},...h},X.default.createElement(Fi,{fallback:l},d?this.renderPreview(a):this.renderActivePlayer(a)))}},k(n,"displayName","ReactPlayer"),k(n,"propTypes",ie.propTypes),k(n,"defaultProps",ie.defaultProps),k(n,"addCustomPlayer",a=>{re.push(a)}),k(n,"removeCustomPlayers",()=>{re.length=0}),k(n,"canPlay",a=>{for(const o of[...re,...e])if(o.canPlay(a))return!0;return!1}),k(n,"canEnablePIP",a=>{for(const o of[...re,...e])if(o.canEnablePIP&&o.canEnablePIP(a))return!0;return!1}),n};var Gi=Object.create,Se=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyNames,qi=Object.getPrototypeOf,Ji=Object.prototype.hasOwnProperty,Qi=(e,t)=>{for(var n in t)Se(e,n,{get:t[n],enumerable:!0})},zn=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Yi(t))!Ji.call(e,o)&&o!==n&&Se(e,o,{get:()=>t[o],enumerable:!(a=Vi(t,o))||a.enumerable});return e},Xi=(e,t,n)=>(n=e!=null?Gi(qi(e)):{},zn(t||!e||!e.__esModule?Se(n,"default",{value:e,enumerable:!0}):n,e)),Zi=e=>zn(Se({},"__esModule",{value:!0}),e),Wn={};Qi(Wn,{default:()=>ts});var Ki=Zi(Wn),Je=Xi(Zr),$i=Li;const es=Je.default[Je.default.length-1];var ts=(0,$i.createReactPlayer)(Je.default,es);const ns=Ae(Ki);function as(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n=0;const a=[];let o;for(;(o=t.exec(e))!==null;)a.push(e.slice(n,o.index)),a.push(o[1]),a.push(o[2]),n=o.index+o[0].length;return a.push(e.slice(n)),a.map((r,s)=>{if(s%3===0)return r;if(s%3===1){const l=a[s],c=a[s+1];return i("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:l},s)}})}const os=({name:e,description:t,embedId:n})=>p("div",{className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[i("div",{className:"m-3 max-w-2xl",children:i("div",{className:"relative aspect-video","data-client-only":!0,children:i(ns,{url:`https://youtube.com/watch?v=${n}`,className:"absolute left-0 top-0",width:"100%",height:"100%",controls:!0})})}),i("h3",{className:"text-white font-semibold text-[24px]",children:e}),i("p",{className:"mt-2 text-secondary text-[14px]",children:as(t)})]}),rs=()=>p(Y,{children:[p(F.div,{variants:et(),children:[i("p",{className:D.sectionSubText,children:"My online presence"}),i("h2",{className:D.sectionHeadText,children:"Videos"})]}),i("div",{className:"w-full flex",children:p(F.p,{variants:tt("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]",children:["Below are my apperances on"," ",i("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",className:"underline text-[#915eff] hover:text-blue-800 visited:text-purple-600",children:"Youtube"})," ","channels covering a wide variety of topics. Watch them to learn about me, my thoughts and my technical skills"]})}),i("div",{className:"mt-20 flex flex-wrap gap-7",children:vo.map((e,t)=>i(os,{...e},`project-${t}`))})]}),is=le(rs,"media"),ss=({index:e,name:t,description:n,image:a,source_code_link:o,demo_link:r})=>i(F.div,{variants:tt("up","spring",e*.5,.75),id:`project-${e+1}`,"data-rack-index":e,className:"scroll-mt-32",children:p(en,{options:{max:45,scale:1,speed:450},className:"project-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full",children:[p("div",{className:"relative w-full h-[230px]",children:[i("a",{href:r??o,target:"_blank",rel:"noopener noreferrer",className:"cursor-pointer",children:i("img",{src:a,alt:t,width:360,height:230,loading:"lazy",className:"w-full h-full object-cover rounded-2xl"})}),i("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none",children:i("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto",children:i("img",{src:Ua,alt:"github",width:20,height:20,className:"w-1/2 h-1/2 object-contain"})})})]}),p("div",{className:"mt-5",children:[i("h3",{className:"text-white font-semibold text-[24px]",children:t}),i("p",{className:"mt-2 text-secondary text-[14px]",children:n})]})]})}),ls=()=>p(Y,{children:[p(F.div,{variants:et(),children:[i("p",{className:D.sectionSubText,children:"My work"}),i("h2",{className:D.sectionHeadText,children:"Portfolio."})]}),i("div",{className:"w-full flex",children:i(F.p,{variants:tt("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]",children:"A selection of projects I've built—from AI-powered tools to creative web experiences. Each includes live demos and source code."})}),i("div",{className:"mt-20 flex flex-wrap gap-7",children:Kt.map((e,t)=>i(ss,{index:t,...e},`project-${t}`))})]}),cs=le(ls,"projects"),ds="93d0e20c-3f99-44c1-98ab-0b1d8db713c4",hs=()=>{const[e,t]=g.useState({name:"",email:"",message:""}),[n,a]=g.useState(!1),[o,r]=g.useState(!1),s=c=>{const{name:d,value:h}=c.target;t({...e,[d]:h})},l=async c=>{c.preventDefault(),a(!0),r(!1);try{const h=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:ds,name:e.name,email:e.email,message:e.message})})).json();if(h.success)r(!0),t({name:"",email:"",message:""});else throw new Error(h.message)}catch{alert("Something went wrong when sending the email. Please try again in a bit.")}finally{a(!1)}};return p("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[p(F.div,{variants:It("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[i("p",{className:D.sectionSubText,children:"Get in touch"}),i("h3",{className:D.sectionHeadText,children:"Contact."}),p("p",{className:"text-secondary text-[14px] mt-2",children:["Interested in collaborating or have a project in mind? I'd love to hear from you. You can also check out my"," ",i("a",{href:"#work",className:"underline text-[#915eff] hover:text-white",children:"work experience"})," ","or browse my"," ",i("a",{href:"#projects",className:"underline text-[#915eff] hover:text-white",children:"projects"}),"."]}),p("form",{onSubmit:l,className:"mt-12 flex flex-col gap-8",children:[p("label",{className:"flex flex-col",children:[i("span",{className:"text-white font-normal mb-4",children:"Your Name"}),i("input",{type:"text",name:"name",value:e.name,onChange:s,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),p("label",{className:"flex flex-col",children:[i("span",{className:"text-white font-normal mb-4",children:"Your Email"}),i("input",{type:"email",name:"email",value:e.email,onChange:s,placeholder:"What's your email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),p("label",{className:"flex flex-col",children:[i("span",{className:"text-white font-normal mb-4",children:"Your Message"}),i("textarea",{rows:"7",name:"message",value:e.message,onChange:s,placeholder:"Let's connect",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-normal"})]}),i("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold shadow-md shadow-primary rounded-xl",children:n?"Sending...":"Send"}),o&&i("span",{className:"text-[green] font-normal mb-4",children:"Successfully sent!"})]})]}),i(F.div,{variants:It("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:i(Da,{})})]})},us=le(hs,"contact");const Dt=({link:e})=>e.id==="blog"?i(L,{to:"/blog/",className:"active",children:e.title}):e.isFullPage?i("a",{href:e.path,children:e.title}):e.isExternal?i(L,{to:e.path,children:e.title}):i(L,{to:`/#${e.id}`,children:e.title}),ps=()=>{const[e,t]=g.useState(!1);return p("header",{children:[p("nav",{className:"grid-12 blog-nav",children:[p(L,{to:"/",className:"blog-nav-home",children:[i("img",{src:$t,alt:"",width:32,height:32}),"Samrat Jha"]}),i("div",{className:"blog-nav-links",children:ye.map(n=>i(Dt,{link:n},n.id))}),i("button",{type:"button",className:"blog-nav-toggle","aria-expanded":e,onClick:()=>t(!e),children:e?"Close":"Menu"})]}),i("div",{className:"blog-nav-panel blog-nav",hidden:!e,children:ye.map(n=>i(Dt,{link:n},n.id))})]})},ms=`---
title: Full-Stack TypeScript on Cloudflare Workers
date: 2025-12-27
description: Deploy a full-stack TypeScript app to Cloudflare Workers with Hono. Single deployment serving API and frontend on the edge globally for $0/month.
tags: ["cloudflare", "typescript", "serverless", "deployment", "hono"]
---

I just deployed [Space Selfie](https://space-selfie.zasamrat.workers.dev) to Cloudflare Workers. Single deployment serving both the API and frontend, running on the edge globally, for $0/month. Figured I'd document what actually went into it.

## Why Workers?

Honestly, for side projects that get sporadic traffic, I didn't want to think about servers. Workers give you 100k requests/day free, start in milliseconds, and run close to users everywhere. The catch is you're stuck with JavaScript/TypeScript and there are runtime constraints. For an app that makes API calls and does some math? Fine.

## The Stack

[Hono](https://hono.dev/) for the web framework. It's built for edge runtimes, so it feels like Express but smaller and doesn't fight the Workers environment. TypeScript, because types are nice. And Wrangler, Cloudflare's CLI, for local dev and deploys.

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

- CPU-heavy tasks (10ms of CPU per request on free, 30 seconds by default on paid)
- Heavy compute like ML inference
- Complex relational database queries (D1 is SQLite)
- Websockets without Durable Objects

For APIs and static sites with a few dynamic bits, it's hard to argue with $0/month.

---

[Source code for Space Selfie](https://github.com/samratjha96/space-selfie) if you want to see the full setup.
`,fs=`---
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

Then create a policy. Name it whatever you want, set the action to Allow, pick Emails as the selector, and add every address you want to let in. Nothing else to do on the Cloudflare side.

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

Since Cloudflare handles auth, you can strip out whatever login your app ships with (OIDC, OAuth, magic links, whatever). One gotcha: if the app's Docker image has auth defaults baked in, deleting the lines from your env override file won't actually disable them. The image defaults kick back in. You need to explicitly set every auth-related variable to an empty string so the app treats them as "not configured."

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

My favorite part is that it doesn't care what the app is. I could put the same Access policy in front of any service behind my tunnel: Stirling PDF, Pocketbase, whatever. No code changes to any of them.

## Cost

Free. Cloudflare Zero Trust includes 50 users on the free tier. For a homelab shared with family and friends, that's more than enough.

---

Cloudflare Tunnels: [developers.cloudflare.com/cloudflare-one/connections/connect-networks](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)

Zero Trust Access: [developers.cloudflare.com/cloudflare-one/policies/access](https://developers.cloudflare.com/cloudflare-one/policies/access/)
`,gs=`---
title: The AI ROI Gap Is a Definition-of-Done Problem
date: 2026-03-02
description: Most enterprise AI spend returns almost nothing. The projects that pay off share one dull trait: everyone agrees on what finished looks like.
tags: ["ai", "enterprise", "productivity", "analysis"]
---

Enterprise AI adoption numbers read like a restaurant that keeps buying ovens and never serves dinner.

Spending is up everywhere, and every earnings call has its AI paragraph. Then you read the research. BCG surveyed 1,000 executives and found that only 4% of companies consistently get substantial value from AI, and only 26% have built the capabilities to get past the proof-of-concept stage at all. MIT's NANDA initiative looked at enterprise generative AI pilots and found that 95% of the organizations it studied had no measurable return to show for them.

My read on why is unglamorous. The models are mostly fine. The projects that fail never answered one question precisely: what does done look like? The projects that make money tend to be the ones where the answer is so obvious nobody thought to write it down.

## The budget went to the hardest problems first

According to the NANDA report, more than half of corporate AI budgets go to sales and marketing tools. I understand the appeal. Revenue is measurable, and a CFO likes being able to draw a line from "AI" to "pipeline."

The returns point the other way. The report found the strongest returns in the back office: process automation, cutting outsourcing, operational plumbing. Nobody gives a keynote about invoice matching.

Through the definition-of-done lens this stops being surprising. "Generate more qualified leads" is a fuzzy target in an adversarial market. Your competitors bought the same tools, buyers have grown an immune response to AI-written email, and the parts that actually close deals are still human. Invoice matching has a correct answer: the invoice matches the purchase order or it doesn't. The incumbent you're replacing is a spreadsheet and a tired person on a Thursday afternoon.

My guess is that a lot of the struggling companies started with a chatbot, because a chatbot demos well, and invoice matching has never once demoed well.

(If you're trying to figure out where to start instead, [this is what I do](/ai/).)

## "Data quality" is usually the wrong diagnosis

The figure that gets passed around is that more than 80% of AI projects fail. RAND repeated that estimate in a 2024 report, then did something more useful than repeat it. Its researchers interviewed 65 experienced data scientists and engineers about *why* projects fail. Bad data was on the list. But the most common root cause was that people misunderstood or miscommunicated what problem the project was supposed to solve.

That matches what I see. "Data quality" is often a polite name for "we never pinned down the task." You can't tell whether your data is good enough until you know what it's for, so the data initiative launches, runs its course, and leaves the real question exactly where it was.

ChatGPT works well for individuals because the individual quietly supplies the definition of done. They steer it, notice when it's wrong, and throw away the bad output without filing a ticket. An organization needs consistent, auditable output wired into processes that predate the transformer paper. There's no one in the loop doing that judgment for free anymore, so it has to be written down in advance, and writing it down is the step most "AI transformations" skip.

## The half of the job nobody wrote down

Some agent failures have little to do with the model. The agent does the job it was given, and the trouble comes from the part of the job nobody wrote down.

In 2022, Air Canada's website chatbot told a customer booking a flight to his grandmother's funeral that he could buy a full-price ticket and claim the bereavement discount afterward. The airline's actual policy didn't allow that. When he asked for the money back, Air Canada argued that the chatbot was a separate legal entity responsible for its own actions. The tribunal rejected that and made the airline pay. The amount was about CA$800, but the precedent costs more. Whatever your agent tells a customer, you told them. The bot's job was to answer questions, and nothing stopped it from making promises the fare rules didn't back.

Lending has the same gap built into the law. In 2023 the CFPB reminded lenders that a complex model is no excuse: if you deny someone credit, the Equal Credit Opportunity Act still requires specific, accurate reasons, and ticking the closest box on a sample form doesn't count. A model can rank applicants well on every benchmark and still be unusable if nobody can say why it turned a particular person down. "Approve good loans" is half the objective. "Explain every denial" is the other half.

Both are specification bugs. The missing half of each objective was exactly the part a human employee would have known without being told, which is why nobody thought to tell the machine.

## Humans in the loop wear out

The standard response to agents doing surprising things is a human in the loop: every action gets approved before it runs.

Anthropic has published numbers on how this goes in Claude Code, which asks before running commands. Users approve 93% of those prompts, and Anthropic describes the result as approval fatigue, where people stop paying close attention to what they're approving. Its fix was fewer prompts, not more careful reviewers. Sandboxing cut permission prompts by 84% in its internal use. The safety layer erodes without any attacker involved, purely through the predictable behavior of people who are interrupted all day.

An approval only means something if the reviewer can tell in a few seconds what they're approving. If they can't, you've built a slow rubber stamp and are paying a salary to operate it.

## What working looks like

Fraud detection keeps coming up as a genuine success, and its shape is worth copying. One agent flags anomalies, another checks compliance, a third writes up the case, and a human makes the call. The machines do the part that means chewing through enormous volumes of transactions. The person does the judgment, on a handful of well-prepared cases rather than a firehose.

The task is narrow, the failure modes were known before launch, and you can tell afterward whether it worked, because the fraud was caught or it wasn't. Done was defined before anyone wrote a prompt.

That pattern won't fit every use case. It does explain the back-office numbers better than any argument about which model is smartest.

---

Sources: [BCG, "Where's the Value in AI?"](https://media-publications.bcg.com/BCG-Wheres-the-Value-in-AI.pdf) (October 2024) · MIT NANDA, "The GenAI Divide: State of AI in Business 2025" · RAND, "The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed" (2024) · [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) · [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html) · [CFPB Circular 2023-03](https://www.consumerfinance.gov/compliance/circulars/circular-2023-03-adverse-action-notification-requirements-and-the-proper-use-of-the-cfpbs-sample-forms-provided-in-regulation-b/) (September 2023) · Anthropic, [Beyond permission prompts](https://www.anthropic.com/engineering/claude-code-sandboxing) and [How we built Claude Code auto mode](https://www.anthropic.com/engineering/claude-code-auto-mode)
`,ys=`---
title: Pointing a Cloudflare Subdomain at GitHub Pages
date: 2026-07-22
description: A GitHub Pages project on a Cloudflare subdomain. The setup order that matters, the CNAME file that quietly vanishes, and why I leave the proxy off.
tags: ["github-pages", "cloudflare", "dns", "deployment"]
---

A GitHub Pages project gets a URL like \`USERNAME.github.io/project-name\`, which is fine until you want to hand it to someone. A subdomain fixes that. I'll use \`gallery.example.com\` throughout; swap in your own.

This assumes the project publishes from a branch and Cloudflare runs your DNS. Nothing here takes the default \`github.io\` URL down, so you can poke at it while the new name propagates.

## Step zero: verify the domain

Before touching the repository, verify the domain in your GitHub account or organization settings. GitHub hands you a TXT record to add. Once verification passes, leave the TXT record where it is. It's tempting to clean it up. Don't.

## Then claim it in the repo

In the repository, go to **Settings > Pages**, enter \`gallery.example.com\` under **Custom domain**, and save.

The order is the part people get wrong. GitHub wants the repository to claim the domain _before_ any DNS points at GitHub, because a record pointing at GitHub with nobody claiming it is an invitation for someone else's repo to take it over. So: repo setting first, DNS second.

For branch publishing, saving that setting makes GitHub commit an uppercase \`CNAME\` file to the root of your publishing source. Its entire contents:

\`\`\`
gallery.example.com
\`\`\`

This tiny file is the thing that bites. If your build wipes and regenerates the publishing directory, it can take \`CNAME\` with it, and the custom domain silently stops working on the next deploy. Make sure your build preserves it.

If you deploy with a custom GitHub Actions workflow instead, none of this applies. GitHub ignores \`CNAME\` in that mode and doesn't need it.

## The Cloudflare record

One record in the Cloudflare DNS zone:

| Type | Name | Target | Proxy status |
| --- | --- | --- | --- |
| CNAME | gallery | \`USERNAME.github.io\` | DNS only |

\`USERNAME\` is the GitHub account or organization name. The repository name does _not_ go in the target. A project living at \`USERNAME.github.io/project-name\` still points at plain \`USERNAME.github.io\`. GitHub works out the rest from the custom domain you set in the repo.

I keep it DNS-only (grey cloud) during setup. GitHub's docs describe validating a CNAME, and a proxied record makes Cloudflare answer with its own addresses instead. Cloudflare has general advice about proxying web-serving CNAMEs, but nothing specific to GitHub Pages, so I'd rather not guess.

If you do flip the proxy on later, every request starts going through Cloudflare first. That orange cloud looks like a toggle and behaves like a new hop in your request path, so re-test certificate renewal, redirects, and caching afterwards.

## Check the record

Before changing anything else, ask DNS what it thinks:

\`\`\`sh
dig gallery.example.com +noall +answer -t CNAME
\`\`\`

You want \`gallery.example.com\` coming back as a CNAME for \`USERNAME.github.io\`.

Propagation can take up to 24 hours. The wrong move during that window is to start editing records on a hunch. If GitHub can't validate the domain, run \`dig\` again and look at what's actually there.

## HTTPS

Once GitHub validates the domain, go back to **Settings > Pages** and tick **Enforce HTTPS**. That checkbox can itself take up to 24 hours to become clickable, because GitHub has to issue the certificate first.

Don't add an HTTPS redirect rule on the Cloudflare side until the GitHub Pages certificate is live. Redirecting to an HTTPS endpoint that has no certificate yet gets you nowhere.

## No wildcards

Don't use a wildcard record like \`*.example.com\` for this. GitHub explicitly warns that wildcards leave unclaimed subdomains open to takeover, which is the same problem the setup order above exists to avoid.

## After every deploy

Configuration drift here is quiet, so I check four things after a deploy. The custom domain should still be set in **Settings > Pages**. For branch publishing, \`CNAME\` should still be sitting in the publishing source. The DNS target should still be \`USERNAME.github.io\`. And HTTPS should be enforced before anything starts depending on HTTPS-only asset URLs.

## References

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/)
`,ws=`---
title: How I Finally Organized My Notes
date: 2025-01-05
description: Years of notes scattered across four apps, then one Obsidian vault that was just as messy. Johnny Decimal is what finally made it stick.
tags: ["obsidian", "productivity", "organization", "johnny-decimal"]
---

I used to have notes everywhere. Google Docs for work, Apple Notes for random thoughts, Notion for projects I never finished, and a graveyard of markdown files in folders called "misc" and "to-sort-later." Finding anything meant searching three apps and trying to remember which one past me had picked that day.

A couple of years ago I moved everything into Obsidian. One app helped. One app full of the same chaos did not. I had a flat pile of files with no structure, and I'd write a note, give it a perfectly reasonable name, and never find it again, because was it "Jordan trip" or "2024 travel plans" or just "vacation"?

Then I found [Johnny Decimal](https://johnnydecimal.com).

## Why my old systems kept rotting

Every system I'd tried was too flexible. Unlimited folders, nested however I liked, named whatever felt right in the moment. Six months later I'd have "Work" and "Professional" and "Career" all holding different things, and "Travel" would be inside "Personal" inside "Life," unless it was floating at the root next to "2023 stuff."

Johnny Decimal takes that freedom away. You get 10 areas (numbered 00-09 through 90-99), and each area gets 10 categories. A hundred buckets, total, for everything you will ever want to file.

My first reaction was that 100 couldn't possibly be enough. It felt almost insulting. Then I tried listing everything I actually care about, and most of my old "organization" turned out to be the same handful of things wearing different names.

## My actual structure

This is the vault as it stands:

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

\`00-09 System\` is the notes about notes: the inbox where quick captures land before I sort them, templates, daily notes, and research that hasn't earned a home yet. It's a junk drawer, but a junk drawer with a label on it.

\`10-19 Tech\` is my technical life. Code references I keep looking up, homelab documentation, active projects, AI prompts and tools. Anything that would look at home on a developer's desk.

\`20-29 Travel\` holds more than you'd expect. Every trip gets a folder with the research, the booking info, and a trip report afterwards. Loyalty programs and perks get their own category, and so do packing lists and general resources. When I was planning Jordan I knew where to look, and when I got back I knew where the notes went.

\`30-39 Personal\` is everything else in my life. Resumes and interview prep under Career. Tax documents and account info under Finance. Living arrangements, health records, reading lists and things to watch, recipes, personal development, writing projects, content ideas.

Four areas. I don't use 40-99 and maybe never will. The system doesn't mind gaps.

## Why it sticks

The numbers are nice, but what actually does the work is the ceiling. Ten areas, ten categories, no exceptions, which means there are very few places anything can go.

When I save a note about the Turkish baths in Petra, I don't wonder where it belongs. Travel, so \`20-29 Travel\`. Then \`22.01 Trips\`, then Jordan. There's nowhere else it _could_ go, and I know the path before the file exists.

When I want my brother's wedding speech, I don't search. \`30-39 Personal\`, then \`38.01 Speeches & Writing\`, and there it is.

Every piece of information ends up with an address. \`32.01\` means Finance within Personal, and the \`.01\` points at a specific document or subfolder. If someone asks where I keep tax documents, the answer is "\`32.01 Finance\`, Tax Documents folder," which beats "somewhere in my notes" by a wide margin.

Try it with my structure. Your building has just emailed about changes to your rental agreement and you want to keep it. It's personal, so \`30-39 Personal\`. It's about where you live, so \`33 Living\`. Call it \`rental_agreement_2026.pdf\` and you're finished.

You could go deeper, something like \`33.01 Living/10 Yearly Rentals/2026/<file>.pdf\`. I can do that inside any drawer whenever I like. The drawers only have to get everything into a state where it _can_ be organized.

Same with a recipe you find online. Personal, Food, \`36 Food\`. Maybe one day \`36 Food\` grows subfolders for cuisines or meal types. Maybe it never does. Either way, recipes live in one place.

## Daily notes and quick capture

Most of my time in Obsidian is spent in daily notes. Every morning a new file shows up in \`00-09 System\` / \`01.01 Daily Notes\`, named with the date, built from the same template every time:

\`\`\`markdown
# 2025-01-03

## Tasks

- [ ] Review PR for auth refactor
- [ ] Update API docs for v2 endpoints
- [x] Fix flaky integration test
- [ ] Schedule 1:1 with manager

## Notes
\`\`\`

Two sections. Tasks is what I need to do today, and Notes is everything else that turns up.

During the day I throw things into Notes: half-ideas, things to look up, links people send me. At the end of the day or the week I move anything worth keeping to its proper home. The rental agreement reminder goes to \`33.01 Living\`, the recipe link to \`36.01 Food\`. Most of it just gets deleted, which is the point. The daily note is a holding pen. Capture fast, sort later, and let most of it die.

## How trips work

Trip planning used to overwhelm me. Research lived in browser tabs and stray notes, confirmations were buried in email, and the itinerary was… somewhere.

Now every trip gets a folder under \`22.01 Trips\`. Before I leave it fills up with research: restaurant recommendations, things to see, logistics like visa requirements and local emergency contacts, booking numbers and hotel addresses.

When I get back I write a trip report. Not a polished travel blog. Practical notes about what I actually did each day, what worked, what didn't, what things cost, and everything I wish I'd known before I went.

My Jordan report has lines like "Uber from airport is 30 JOD to downtown" and "don't wash your face in the Dead Sea, the salt will wreck your eyes" and "the monastery hike from Little Petra takes a couple hours and you descend 9000+ steps at the end." A year later, when a friend asks about Jordan, I send them the file.

## The stuff that doesn't fit

Some things refuse to be categorized. Research that spans several areas. Ideas too unformed to place. Things I'm actively chewing on but haven't decided what they are yet.

Those go in the System area: \`02.01 Research\` for deep dives, the inbox for quick captures, daily notes for anything transient. I didn't expect the structure to have room for ambiguity, but it does.

It isn't perfect. I still put a note in the wrong spot and notice a week later. I've spent an absurd amount of time deciding whether something is "Career" or "Personal Development." The system doesn't kill decision fatigue. It just makes most decisions boring enough that they happen on their own.

## If you want to try it

My areas fit my life, and yours will look different. Maybe you barely travel but have three hobbies that each deserve an area of their own. The idea worth stealing is shelves and drawers: thinking about where something physically lives, not what it relates to or when you made it.

I spent years tweaking systems instead of writing in them. This one is boring enough that I stopped fiddling with it.

The [Saving Files](https://johnnydecimal.com/10-19-concepts/11-core/11.06-saving-files/) page on the Johnny Decimal site is where I'd start.
`,bs=`---
title: Making Claude Code Read My Lighthouse Reports
date: 2025-01-05
description: A Claude Code slash command that runs Lighthouse, reads the 500KB of JSON so I don't have to, and comes back with which file to fix and how.
tags: ["performance", "lighthouse", "claude-code", "web-dev", "tooling"]
---

Running Lighthouse is easy. Reading what it gives back is the chore. I'd run the audit, squint at the JSON, try to work out which of forty audits actually mattered, and usually lose interest halfway. So I wrote a Claude Code slash command that runs the audit and reads the report for me. It took about 5 minutes to write and saves me 20+ minutes every time I check performance.

## Doing it by hand

If you've never run Lighthouse from the command line, it looks like this:

\`\`\`bash
npx lighthouse https://yoursite.com \\
  --output=json \\
  --output-path=/tmp/lighthouse-report.json \\
  --chrome-flags="--headless" \\
  --only-categories=performance
\`\`\`

That dumps a ~500KB JSON blob. You can open it in Chrome DevTools, or pipe it through \`jq\` and pull out the handful of numbers you care about:

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

A 58 second LCP. Lovely. The numbers tell me something is badly wrong and nothing about _why_. Finding out means digging through the full report, which is exactly the point where I used to give up and go do something else.

## The slash command

Claude Code turns any markdown file in \`.claude/commands/\` into a slash command, with \`$ARGUMENTS\` replaced by whatever you type after it. So the whole tool is one prompt file at \`.claude/commands/analyze-website-performance.md\`:

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

The constraints section is there because ripping out half the page technically counts as a performance fix, and I didn't want that kind of advice. Assets and loading, nothing else.

Then run it:

\`\`\`bash
claude
> /analyze-website-performance https://www.samratjha.com/
\`\`\`

## What comes back

An abridged run against my own site, from before I'd optimized anything:

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

The useful part is that it lines up the image dimensions in the DOM against the actual file sizes. My 8.87 MB PNG was being displayed at 431×230 pixels from a 2657×1890 source. Embarrassing, and I would have scrolled straight past it in the raw JSON.

## Why bother with the middleman

Lighthouse already knows all of this. It just says it in a way that's hard to act on. The raw audit entry for those images:

\`\`\`json
{
  "id": "image-delivery-insight",
  "score": 0,
  "displayValue": "Est savings of 15,654 KiB"
}
\`\`\`

The same finding, after Claude has read the rest of the report:

\`\`\`
ParallaxImageGallery.png:
- Current: 2657×1890 PNG (8.87 MB)
- Displayed: 431×230 px
- Target: 862×460 WebP (~50-100 KB)
- Savings: 8.86 MB (99% reduction)
\`\`\`

"Est savings of 15,654 KiB" is a fact. A file name, a target size, and a format is a to-do item. I'll put off the first one for weeks. The second one I usually just do.

## Gotchas

### You need Chrome

Lighthouse drives a headless Chrome. On a server without Chrome installed, none of this works. The PageSpeed Insights API is the alternative, and I haven't bothered setting it up.

### The JSON is huge

~500KB for a single page. If Claude reads the file whole, complex pages can blow through the context window. The prompt asks it to pull out only the relevant parts, which mostly works, but I've still watched it choke on really bloated reports.

### Scores wobble

Network conditions, server load, the phase of the moon. I've seen ±5 points between consecutive runs, so a 3-point drop tells you nothing.

### Mobile is the default

Lighthouse throttles like a mobile device unless you add \`--preset=desktop\`. Mobile is usually the worse of the two numbers.

You can add more categories (\`--only-categories=performance,accessibility,best-practices,seo\`) or point it at several URLs. It's a prompt template, so bend it however you like.
`,vs=`---
title: Your LLM Gateway Is Breaking Prompt Caching
date: 2026-10-20
description: One missing HTTP header cut my coding agent's cache hit rate to 55%. Why LLM gateways break prompt caching, and why prefix hashing can't save you.
tags: ["ai", "llm", "agents", "performance", "infrastructure"]
---

import benchmarkChart from "../../assets/optimized/prompt-cache-benchmark.webp";
import affinityDiagram from "../../assets/optimized/prompt-cache-affinity-routing.webp";
import twoTierDiagram from "../../assets/optimized/baseten-two-tier-routing.webp";

If you live in [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) or [Codex CLI](https://github.com/openai/codex), prompt caching is a solved problem you never have to think about.

And you really don't want to think about it, because coding agents are abusive without it. A 25-step bug hunt that grows from 20,000 to 100,000 tokens sends 1.5 million input tokens over the run. 1.4 million of those tokens are the exact same conversation history resent on every step. When prompt caching works, the GPU keeps the key-value (KV) attention state from earlier turns in VRAM and only runs prefill on the new tool output at the tail. At a 90% cache discount on [Anthropic](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) and [OpenAI](https://platform.openai.com/docs/guides/prompt-caching), you pay for 240,000 tokens instead of 1.5 million.

When you talk straight to Anthropic or OpenAI from their own CLI, the harness and the API handle all of that behind your back.

Then you try a different harness like [Pi](https://pi.dev) or [OpenCode](https://opencode.ai), or you wire up your own [LangGraph](https://github.com/langchain-ai/langgraph) agent, and you run it at work behind an internal LLM gateway. And suddenly you are reading raw HTTP headers at 11 PM trying to figure out why a GPU cluster forgot a conversation it had nine seconds ago.

## A custom gateway URL breaks the handshake

Inside most companies, you don't point your agent straight at \`api.anthropic.com\` or \`inference.baseten.co\`. You point it at an internal gateway (something like [LiteLLM](https://github.com/BerriAI/litellm), Portkey, Envoy, or an in-house proxy) that gives everyone a single \`/v1\` URL and routes across OpenAI, Anthropic, Google, and open-weight models on providers like [Baseten](https://www.baseten.co/).

I'll use a LiteLLM-backed gateway as the example here. When I pulled a month of my Pi (v1.0.4+) session logs (~4,800 Turn-2+ requests, 584M prompt tokens) through that setup, OpenAI and Google models were hitting cache on more than 93% of warm tokens. Open models hosted on Baseten (\`zai-org/GLM-5.3\` and \`zai-org/GLM-5.3-Flash\`) were sitting between 31% and 55%.

50% is a terrible number to debug. If your cache hit rate is 0%, you know it's broken. At 50%, you see cache hits in every session and figure the misses are just context growth or 5-minute TTLs expiring while you read code.

So I dumped a single 12-turn \`GLM-5.3\` session turn by turn.

## Why did Turn 8 remember Turn 2, but forget Turns 3 through 7?

Every turn in this session fired within 9 to 34 seconds of the previous one. Nobody went to get coffee. Nothing expired. And \`cacheRead\` did this:

\`\`\`text
t=0  | gap= 0.0s | tot_prompt=26,989 | cacheRead=     0
t=1  | gap=31.9s | tot_prompt=38,369 | cacheRead=26,902  <-- Worker A (has t=0)
t=2  | gap=16.9s | tot_prompt=44,056 | cacheRead=26,902  <-- Worker B (only has t=0, missed t=1)
t=3  | gap=26.2s | tot_prompt=51,503 | cacheRead=38,370  <-- Worker A (matches t=1's 38,369)
...
t=7  | gap=13.3s | tot_prompt=76,213 | cacheRead=67,004  <-- Worker A (matches t=6)
t=8  | gap= 9.1s | tot_prompt=78,529 | cacheRead=44,057  <-- Worker B (matches t=2's 44,056 from 6 turns ago!)
t=9  | gap=33.9s | tot_prompt=85,944 | cacheRead=76,214  <-- Worker A (matches t=7's 76,213)
\`\`\`

Look at \`t=8\`. Nine seconds earlier, \`t=7\` read 67,004 tokens from cache. Then \`t=8\` comes along with a 78,529-token prompt and reads... 44,057.

Where did 44,057 come from? Look six lines up at \`t=2\`: \`tot_prompt=44,056\`.

\`t=8\` had landed on a GPU worker that hadn't seen my session since \`t=2\`. Its VRAM still held my conversation prefix up to Turn 2, and it had to re-prefill the 34,472 tokens from Turns 3 through 8 from scratch. Nine seconds later, \`t=9\` bounced back to the first worker and picked right up at \`76,214\` (matching \`t=7\`).

Dumping the HTTP response headers from the gateway caught the workers red-handed:

\`\`\`http
x-litellm-model-api-base: https://inference.baseten.co/v1
llm_provider-x-baseten-dyn-prefill-worker-id: 5073481647418772908
llm_provider-x-baseten-dyn-prefill-dp-rank: 0
\`\`\`

Baseten returns the upstream prefill worker ID (\`llm_provider-x-baseten-dyn-prefill-worker-id\`) and data-parallel rank (\`dp-rank\`) on every response. In a 6-turn test with default settings, my requests pinballed across four different prefill workers.

<img src={affinityDiagram} alt="Diagram comparing multi-turn agent requests bouncing across three unpinned prefill workers without x-session-affinity versus staying pinned to Worker 1 when x-session-affinity is sent" width={1200} height={746} loading="lazy" />

The annoying part is that both Pi and Baseten had already fixed this for direct connections:

- If Pi sees \`baseten.co\` in your provider's \`baseUrl\`, it automatically turns on \`sendSessionAffinityHeaders: true\` and stamps \`x-session-affinity: <sessionId>\` onto every request.
- If you connect Claude Code, Codex, or OpenCode straight to Baseten, Baseten [recognizes their native session IDs](https://docs.baseten.co/inference/model-apis/coding-agents) and pins the replica for you.

Putting a gateway in the middle blinded both sides. Pi saw \`https://llm-proxy.internal/v1\` instead of \`inference.baseten.co\`, assumed it was talking to a generic OpenAI endpoint, and left \`sendSessionAffinityHeaders\` off. LiteLLM got a request with no session header and forwarded it upstream as a stateless call.

Flipping \`"sendSessionAffinityHeaders": true\` on in \`~/.pi/agent/models.json\` fixed it in one line:

\`\`\`json
{
  "providers": {
    "internal-gateway": {
      "baseUrl": "https://llm-proxy.internal/v1",
      "api": "openai-completions",
      "compat": {
        "sendSessionAffinityHeaders": true
      }
    }
  }
}
\`\`\`

In the 6-turn header test, every turn stayed glued to a single prefill worker. On an 8-turn \`GLM-5.3-Flash\` benchmark, Turn-2+ cache hits jumped from 55.5% to 92.9% (+37.4 percentage points), and uncached prompt tokens dropped by 6.3x (from 97,958 down to 15,617).

<img src={benchmarkChart} alt="Chart showing turn-by-turn cache hit rate rising from 45-83% (55.5% overall) to 91-94% (92.9% overall, +37.4 percentage points) across turns 2 through 8 after enabling x-session-affinity" width={1200} height={501} loading="lazy" />

That could have been the end of the post. Add a header, get 93% cache hits, go home.

Except that response header bothered me.

## Wait. Doesn't Baseten already run a KV-aware router?

Look at the header name again:

\`\`\`http
llm_provider-x-baseten-dyn-prefill-worker-id: 5073481647418772908
\`\`\`

That \`dyn\` in \`dyn-prefill-worker-id\` is [NVIDIA Dynamo](https://www.baseten.co/blog/how-baseten-achieved-2x-faster-inference-with-nvidia-dynamo/). Baseten has written whole blog posts about running Dynamo's KV-aware router. Their [BIS-LLM engine docs](https://docs.baseten.co/engines/bis-llm/advanced-features) explain how their stateful router tokenizes each incoming prompt, checks a live index of every worker's KV cache blocks, and sends the request to the worker with the most cached tokens (balanced against queue depth).

If Baseten already has a router that knows which GPU holds which KV blocks, why do their [Model API docs](https://docs.baseten.co/inference/model-apis/pricing-and-limits#session-affinity) still tell you to send \`x-session-affinity\`? Why can't the provider just figure out that Turn 2 belongs with Turn 1 by looking at the prompt?

Let's try to design content-based routing ourselves and watch where it breaks.

### Attempt 1: Hash the first 256 tokens (the OpenAI way)

OpenAI doesn't ask you for a session header on basic calls. Their router hashes the opening prefix of the prompt, typically the first 256 tokens, scoped to your organization.

When it's just you on your personal API key, that works great. Turn 1, Turn 2, and Turn 20 all start with the same system prompt, so they hash to the same machine.

Now put 500 engineers behind a company gateway that authenticates to the provider with one shared enterprise API key. At 9 AM, 50 engineers fire up Pi or Claude Code. Every single one of those sessions starts with the exact same 256-token system prompt.

If your router only hashes the first 256 tokens:

1. All 50 engineers hash to the exact same machine.
2. That machine saturates. On OpenAI, once a prefix crosses roughly 15 requests per minute, the router spills excess traffic onto secondary machines.
3. Because the router is only looking at the first 256 tokens (which are identical for all 50 engineers), Engineer A's Turn 2 lands on Machine 2 while Engineer B's Turn 2 lands on Machine 1. Everyone's conversation tail misses.

That spillover problem is why OpenAI added \`prompt_cache_key\` to their API. It mixes a caller-supplied session ID into the prefix hash so 50 sessions sharing a system prompt spread across the fleet while each individual session stays sticky.

### Attempt 2: Hash the system prompt plus the first user message (\`messages[:2]\`)

Okay, hashing \`messages[0]\` collides because everyone shares the same system prompt. What if the gateway hashes \`messages[0]\` *plus* \`messages[1]\` (the user's opening question in the thread)?

[OpenRouter](https://openrouter.ai/docs/guides/best-practices/prompt-caching) actually uses this as a fallback when you don't send an explicit \`session_id\` or \`prompt_cache_key\`. Two people rarely type the exact same first question, and in a normal chat thread \`messages[:2]\` stays fixed from Turn 1 to Turn 50.

In agent workloads, \`messages[:2]\` still blows up in three places:

- **Sliding-window history truncation:** A lot of chat backends and LangGraph agents cap context by slicing the last \`N\` messages (\`messages[-10:]\` or \`trim_messages(..., strategy="last")\`). The moment your session hits Turn 11, Turn 1 gets dropped. Now \`messages[1]\` is different on every single request. Not only does that scramble a \`messages[:2]\` routing hash, shifting the array left by one turn invalidates the entire KV prefix of the remaining history on every turn (dropping history cache hits to 0% unless you evict in chunks of 5 or 10 turns at a time).
- **Mutated system prompts:** Agents love stuffing live state into \`messages[0]\`: current workflow step, progress percentage, timestamps, or freshly retrieved RAG chunks. When \`messages[0]\` changes per turn, the hash changes per turn. (Fun side effect on OpenAI models: OpenAI serializes \`tools\` *before* \`messages[0]\`. When \`messages[0]\` mutates, your tool schemas still hit cache at ~20%. If your dashboard only checks \`cached_tokens > 0\`, everything looks fine while 100% of your system prompt and history miss.)
- **Slash commands and subagents:** Automated PR-review bots and \`/review\` slash commands start every run with identical \`messages[:2]\` text, putting you right back in the hot-spot bucket. Meanwhile, spawned subagents start with a fresh \`messages[:2]\` that doesn't match their parent.

### Why Baseten, Fireworks, and Cloudflare split routing into two tiers

Once you see all the ways content hashing goes sideways, the design that Baseten, [Fireworks AI](https://docs.fireworks.ai/guides/prompt-caching), and [Cloudflare Workers AI](https://blog.cloudflare.com/high-performance-llms/) converged on makes a lot more sense. Cloudflare summed it up in one line: *"While we have KV-aware routing internally, we also rely on clients sending the \`x-session-affinity\` in order to be explicit about prompt caching."*

Putting Baseten's Model API docs next to their BIS-LLM docs reveals a two-tier setup:

<img src={twoTierDiagram} alt="Diagram of two-tier routing showing Tier 1 L7 Edge Router using x-session-affinity to pick a Replica unit, and Tier 2 Dynamo KV Router inside Replica 1 tokenizing the prompt to pick the warm GPU worker" width={1200} height={378} loading="lazy" />

1. **Tier 1 (Outer L7 load balancer across replicas):** Popular models scale across multiple independent replication units. At the outer HTTP edge, you do not want your load balancer parsing and tokenizing a 100k-token JSON body before it can pick a backend cluster. Tier 1 hashes \`x-session-affinity\` in constant time and pins your session to Replica 1.
2. **Tier 2 (Stateful KV-aware router inside the replica):** Once your request is inside Replica 1, that replica's Dynamo KV router tokenizes the prompt, checks its local worker pool's KV block index, and picks the warm GPU worker (spilling over to a sibling worker in the replica if the queue is full).

That two-tier split also explains why my unpinned sessions were getting 31% to 55% cache hits instead of 0%. Whenever two turns happened to land on the same replica by luck, the inner KV router found the warm worker. Whenever the outer L7 balancer sent a turn to a different replica, that replica had an isolated KV pool and missed.

## Can the LiteLLM gateway just inject the header for us?

If the upstream provider wants \`x-session-affinity\`, you might wonder why the company LiteLLM proxy doesn't generate one on the fly.

I went through the \`BerriAI/litellm\` source code to see what stock LiteLLM actually supports via \`config.yaml\` today:

- **Forwarding an existing session ID ([PR #41033](https://github.com/BerriAI/litellm/pull/41033)):** LiteLLM has a \`provider_affinity_header: x-session-affinity\` setting for model deployments. If the caller sends \`x-litellm-session-id\` or \`metadata.session_id\`, LiteLLM copies it into \`x-session-affinity\`. If the caller sends neither, LiteLLM sends no header at all ([Issue #34766](https://github.com/BerriAI/litellm/issues/34766) is the open feature request to add OpenRouter's \`messages[:2]\` fallback).
- **Proxy-level deployment pinning:** LiteLLM also has a router flag (\`optional_pre_call_checks: [session_affinity, deployment_affinity]\`) to pin a session to one deployment inside a multi-provider model group. Turning that on globally has some nasty sharp edges right now: if a pinned deployment dies, in-request retries keep hammering the dead deployment until cooldown triggers ([Issue #47482](https://github.com/BerriAI/litellm/issues/47482)), and if a pinned deployment is saturated at its concurrency limit while a sibling sits idle, the pin refuses to yield and returns \`429\` ([Issue #45868](https://github.com/BerriAI/litellm/issues/45868)).

Passing \`x-session-affinity\` from the client through to Baseten avoids those LiteLLM router bugs when a model maps to a single Baseten deployment, because Baseten's outer load balancer treats the header as a soft hint and routes around dead replicas automatically. The catch is that header pass-through won't help if your LiteLLM model group load-balances the same model slug across two completely different providers (say, splitting traffic between Baseten and Cognition). And since \`x-session-affinity\` only controls routing, pausing for ten minutes on a busy pool still gives the worker plenty of time to evict your KV blocks from VRAM.

## One last trap: LangGraph's \`thread_id\` never leaves your database

Even after you know you need \`x-session-affinity\`, agent frameworks make it easy to think you're sending a session ID when you aren't.

In LangGraph, every multi-turn tutorial has you pass a \`thread_id\` in \`RunnableConfig\`:

\`\`\`python
agent.stream(
    {"messages": [HumanMessage(content=user_query)]},
    config={"configurable": {"thread_id": thread_id}},
)
\`\`\`

You'd think that \`thread_id\` makes it onto the LLM request. It goes to LangGraph's local state checkpointer and stops there; \`ChatOpenAI\` sends no affinity header on the wire. Worse, if you try to bind the header with \`llm = ChatOpenAI(...).bind(extra_headers={"x-session-affinity": thread_id})\` and hand \`llm\` to \`langchain.agents.create_agent(model=llm, tools=tools)\`, \`create_agent\` unwraps the binding when it calls \`.bind_tools(tools)\` and drops your \`extra_headers\` on the floor.

In a 3-turn, 6-call \`create_agent\` tool loop on \`GLM-5.3-Flash\` (\`langchain\` v1.0, \`langchain-openai\` v0.3), default \`ChatOpenAI\` scattered the six calls across four Baseten workers for a \`29.8%\` warm-call cache hit rate (\`25,856 / 86,747\` tokens). Passing \`default_headers\` directly on the \`ChatOpenAI\` constructor (or passing \`extra_headers\` to \`llm_with_tools.ainvoke()\` inside a custom \`StateGraph\` node) pinned all six calls to one worker and brought the warm-call hit rate to \`87.9%\` (\`76,288 / 86,772\` tokens, hitting 99% of the prior turn's prefix on every step):

\`\`\`python
llm = ChatOpenAI(
    model="zai-org/GLM-5.3-Flash",
    base_url="https://llm-proxy.internal/v1",
    default_headers={"x-session-affinity": thread_id},
)
agent = create_agent(model=llm, tools=tools, system_prompt=STATIC_PROMPT, checkpointer=checkpointer)
\`\`\`

## You can't fix what you don't measure

And breathe.

What we walked through here is only the tip of the iceberg. There are so many quiet inefficiencies hiding in our stacks right now because the entire space is brand new. The agent frameworks are new, the gateways are new, and every week brings another provider, another wire protocol, and another layer of routing. Nobody can hold all of those interactions in their head at once.

If you take one thing from this post, go audit your own agentic setup. Don't just check \`cached_tokens == 0\` and call it a day. The expensive misses are the sinister ones that sit at 40% or 55% because your tool schemas or system prompt cached while your conversation history or worker affinity silently broke.

If you run AI infrastructure inside a company, open your token monitoring dashboard (hopefully you have one) and build a dedicated view for Turn-2+ cache hit rates broken down by model, provider, and harness. Find the combinations that are lagging and point your coding agents at the logs and gateway code to figure out why (or just tell your coding agent to read this amazing post). A one-line config change can save millions of dollars in wasted prefill, but you can't fix what you don't measure.

---

## References

- [Baseten: Session affinity and cached input tokens](https://docs.baseten.co/inference/model-apis/pricing-and-limits#session-affinity)
- [Baseten: Set up coding agents](https://docs.baseten.co/inference/model-apis/coding-agents)
- [Baseten: Advanced features for BIS-LLM (KV-aware routing)](https://docs.baseten.co/engines/bis-llm/advanced-features)
- [Baseten: 2x faster inference with KV cache-aware routing](https://www.baseten.co/blog/how-baseten-achieved-2x-faster-inference-with-nvidia-dynamo/)
- [Cloudflare: High-performance LLMs on Workers AI](https://blog.cloudflare.com/high-performance-llms/)
- [Fireworks AI: Prompt caching](https://docs.fireworks.ai/guides/prompt-caching)
- [OpenAI: Prompt caching](https://platform.openai.com/docs/guides/prompt-caching)
- [Anthropic: Prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [OpenRouter: Prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
- [LiteLLM PR #41033: Configurable provider affinity header mapping](https://github.com/BerriAI/litellm/pull/41033)
- [LiteLLM Issue #34766: Derive a session key from request content](https://github.com/BerriAI/litellm/issues/34766)
- [LiteLLM Issue #47482: Session affinity retries on failed deployments](https://github.com/BerriAI/litellm/issues/47482)
- [LiteLLM Issue #45868: Let a session-affinity pin yield when saturated](https://github.com/BerriAI/litellm/issues/45868)
`,As=`---
title: Recreating the claude.dev Blog, and What It Says About Taste
date: 2026-10-17
description: I pointed Claude at claude.dev's blog and stole its layout in an afternoon. How the scroll rail actually works, and why copying good UI is the easy part now.
tags: ["css", "react", "performance", "web-dev", "animation"]
---

I opened [a post on claude.dev](https://claude.dev/blog/solving-code-review-at-anthropic/) to read about code review, and ten seconds in I had stopped reading the post and was just scrolling the page up and down like an idiot.

None of the tricks were loud. As I scrolled into a section, its subheadings unfolded in the left rail and folded back up when I left. A little ASCII progress bar built out of \`▓\` and \`░\` blocks ticked up as I read. Once the main title scrolled off the top of the viewport, a smaller copy slid into the top of the rail to take its place. Clicking a section eased the page there over most of a second instead of teleporting. Together it made my own blog look like a Google Doc from 2014.

So I stole it. Everything on the page you're reading right now was measured off their live DOM and rebuilt on this site's existing Vite and React setup, with zero new dependencies.

If you're on a wide screen, watch the left rail while you read. This post is the demo. It's also the first post on my site that actually has H3 subsections, for reasons that will become embarrassing in a minute.

## Reading the HTML tells you nothing about a scroll loop

I didn't spend an afternoon squinting at Chrome DevTools. I gave Claude this prompt:

\`\`\`
Make the blog section of my portfolio look like
https://claude.dev/blog/solving-code-review-at-anthropic/

Focus on the design and the animations around the post: the table of
contents and how its sections expand, the reading progress bar, and the
overall aesthetic. Don't just read the HTML. Open it in a browser, scroll
through it, take screenshots, and experience it the way a reader would.
Then recreate it without changing my tech stack.
\`\`\`

"Don't just read the HTML" is the whole trick. Try curling [claude.dev](https://claude.dev/) and reading the source. It's a Next.js build, so you get hashed bundle names and inert initial markup. Everything worth stealing happens mid-scroll.

To see what the page was actually doing, Claude drove a headless browser and pulled four things:

1. Screenshots at fixed scroll depths on desktop and mobile viewports to see what state changes happen as you read.
2. A dump of every active CSS rule from \`document.styleSheets\`, read straight out of the live browser so custom properties, grid tracks, and transition timings weren't buried in minified chunks.
3. A scroll probe that stepped down the page and logged which table-of-contents item was active, which subsection drawers were open, what the ASCII bar read, and when the rail title appeared.
4. A frame-by-frame timestamp log after clicking a TOC link, to see whether they were using native \`scroll-behavior: smooth\` or a custom easing loop.

Once you have those four dumps side by side, there's no mystery left.

## How the left-rail tree actually works

The table of contents is labeled \`Tree\` and drawn with \`└\` box-drawing characters, like the output of \`tree(1)\`. You know you're looking at a document outline before you read a single heading.

### Animating to auto height with a 1fr grid track

Scroll into a section that has H3s and its children unfold underneath it in the rail. You just watched this one open.

Try transitioning \`height: 0\` to \`height: auto\` in CSS and the browser just snaps between them. People usually work around that by measuring \`scrollHeight\` in JavaScript or animating \`max-height\` to some guessed ceiling like \`500px\` and living with the easing timing being slightly off.

claude.dev uses a one-cell CSS Grid instead:

\`\`\`css
.subs { display: grid; grid-template-rows: 0fr; visibility: hidden; }
.subs.open { grid-template-rows: 1fr; visibility: visible; }
.subs > div { min-height: 0; overflow: hidden; }
.subs { transition: grid-template-rows .3s var(--ease-out), visibility .3s; }
\`\`\`

Grid track sizes _are_ animatable, and \`1fr\` resolves to the child's natural height. The browser does the measuring for you. The one line you cannot skip is \`min-height: 0\` on the inner \`<div>\`. Grid items refuse to shrink below their minimum content size by default, so without \`min-height: 0\` the drawer opens once and never closes again.

The \`visibility\` transition is doing quiet work too. \`visibility\` is discrete, so when you transition from \`visible\` to \`hidden\`, the browser waits until the 300ms height collapse finishes before flipping it to \`hidden\`. That keeps the links visible while the drawer shuts and then drops them out of the keyboard tab order once it's closed. (Their CSS also pops a group open with \`:has(:focus-visible)\` if a keyboard user tabs into a collapsed drawer, which is a great detail I didn't bother copying.)

When I first shipped this, nothing unfolded anywhere on my blog. I spent ten minutes checking my CSS before realizing none of my existing posts had a single \`###\` heading in them. This post has subsections partly so the code has something to do.

### Why I skipped IntersectionObserver

To highlight the current section, I check which heading is the last one to cross a horizontal line one-third of the way down the viewport:

\`\`\`js
const line = window.innerHeight / 3;
let current = 0;
headings.forEach((el, i) => {
  if (el && el.getBoundingClientRect().top <= line) current = i;
});
setActive(current);
\`\`\`

Whenever someone sees \`getBoundingClientRect()\` in a scroll handler, their reflex is to tell you to use \`IntersectionObserver\`. I didn't, on purpose.

\`IntersectionObserver\` fires events when elements cross a threshold. What we want here is a total ordering question: which heading is the last one above the line right now? Click an anchor link that jumps from the top of the post straight to the bottom and nothing "crosses" the middle of the screen along the way. Checking a dozen heading offsets inside a \`requestAnimationFrame\`-throttled scroll listener takes microseconds. And because \`setActive\` only stores an integer index, React bails out without re-rendering on almost every frame.

### Watching the H1 instead of scrollY

Scroll past the main H1 at the top of the article and a small copy of the title unfolds at the top of the left rail. It's been sitting over there since you finished the intro.

Instead of hardcoding a pixel offset like \`scrollY > 200\`, it watches the real H1 and triggers the moment the H1's bottom edge leaves the viewport. A one-line title and a three-line title hand off at the exact right moment.

Here I did use \`max-height\`, right after complaining about it. A post title is at most three lines tall, so we know the ceiling, and \`max-height\` is only a hack when you're guessing.

## A progress bar made of 28 monospace characters

\`\`\`
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 57%
\`\`\`

Look over at the rail and yours should be sitting right around 57% too. Because it's just 28 monospace characters in a text node, it can't reflow or jitter, and it doesn't need an SVG or a \`<canvas>\`. The percentage is zero-padded (\`03%\`) so the number never nudges the line width as it climbs.

On mobile the left rail disappears and the progress indicator turns into a thin bar pinned to the top of the viewport. claude.dev animates that bar by setting \`width\` on every scroll tick, which triggers a browser layout pass each frame. I kept mine at \`width: 100%\` and animated \`transform: scaleX()\` instead, so the compositor scales it on the GPU without touching layout. Same visual result, less work on a phone.

## Bugs that had nothing to do with claude.dev

Dropping the new layout into my site shook loose four bugs in my own setup that apply to any React or Vite build.

### A saved DOM snapshot is not SSR

My build script prerenders each route by opening the built site in headless Puppeteer and saving the serialized DOM to \`index.html\`. That looks like server-side rendering, and React treats it very differently.

\`\`\`jsx
<span>{post.minutes} min</span>      // React expects two text nodes
<span>{\`\${post.minutes} min\`}</span> // one text node, matching the snapshot
\`\`\`

When React renders \`{post.minutes} min\` in JSX, it creates two adjacent text nodes (\`"7"\` and \`" min"\`). When Puppeteer serializes that DOM to an HTML file and the browser parses it back, the HTML parser merges adjacent text into a single text node (\`"7 min"\`). When React tries to hydrate, it sees one text node where it expected two, panics about a hydration mismatch, and trashes the entire prerendered tree. Wrapping adjacent interpolations in a template literal, as in the second line above, emits a single text node from the start.

\`React.lazy\` broke hydration for a similar reason. Real \`renderToString\` SSR writes comment markers around Suspense boundaries; a saved DOM snapshot doesn't. The fix is to preload the current route's MDX chunk before mounting React:

\`\`\`js
const post = getPost(window.location.pathname.match(/^\\/blog\\/([^/]+)/)?.[1]);
(post ? loadPostContent(post) : Promise.resolve()).finally(() => {
  /* mount React */
});
\`\`\`

Each post still code-splits into its own chunk, and the first client render matches the prerendered HTML on the first frame.

### Put entrance animations in CSS, not JS

The title, standfirst, and metadata at the top of the post slide up with a short stagger when you load the page:

\`\`\`css
[data-reveal] {
  animation: reveal-up 0.7s var(--ease-out) var(--reveal-delay, 0s) backwards;
}
@keyframes reveal-up {
  from { opacity: 0; transform: translateY(14px); }
}
\`\`\`

Two details do the work here. Leaving the \`to\` block off \`@keyframes reveal-up\` makes the element animate into whatever resting styles it already has, so one keyframe rule works on everything. And \`animation-fill-mode: backwards\` holds the \`opacity: 0; translateY(14px)\` state during the \`--reveal-delay\` window. Because it's pure CSS on prerendered HTML, the animation starts the millisecond the browser paints the document, before the JS bundle has even finished downloading.

### Putting font-family on \`*\` breaks CSS inheritance

The older parts of my portfolio had a global \`* { font-family: ... }\` reset. When you put a property on \`*\`, no element inherits that property from its parent anymore, because every single DOM node matches \`*\` directly. Give a container \`.mono\` and its child \`<span>\` ignores it and falls back to the \`*\` rule unless you write a more specific selector. Put \`font-family\` on \`body\` and let normal CSS inheritance do its job.

### Layout shift goes to zero when nothing arrives late

Running [my tmux config post](/blog/tmux-config/) through Lighthouse on a production build with mobile throttling before and after the rebuild:

| | Score | CLS | LCP |
|---|---|---|---|
| Before | 63 to 78 | up to 0.22 | 4.2 to 5.0s |
| After | 76 to 79 | 0 | 4.1 to 4.4s |

Cumulative Layout Shift dropped from \`0.22\` to \`0\` without me writing a single line of CLS-specific code. The blog uses system fonts (no webfont swap) and preloads the post chunk before mount. Nothing arrives late, so nothing shoves the text around after first paint.

## Why taste is the scarce part now

Reverse engineering a page like this used to take hours of squinting at the Elements panel. Now I can point an agent at a URL, tell it to instrument the scroll loop in a headless browser, and have a working clone running on my own stack before lunch.

That changes what is actually hard in frontend work. Cloning the mechanics is cheap now. Deciding what to build, and when to stop, isn't.

What makes claude.dev's blog feel so good isn't the \`0fr -> 1fr\` grid trick. It's everything their designers left out. Nothing on that page moves unless it is answering a question about where you are in the document. The tree unfolds because you entered a section. The bar fills because you read further. The small title appears because the big one just left the screen. There is no parallax, no hover glow, no hero illustration. They borrowed the \`tree\` command and ASCII blocks from a terminal, and stopped well short of making the page cosplay as a CRT monitor.

You can dump every stylesheet and animation curve off a live site with a script, and none of that output will tell you which ten ideas the designer tried and threw in the trash because they felt busy. As implementation gets cheaper, that kind of restraint is the whole game.

I'm fine borrowing theirs here. My blog is where I write down things I've figured out, and piggybacking on designers who clearly sweated the details beats leaving it ugly.
`,xs=`---
title: Fix React Router 404 Errors on Hostinger
date: 2025-06-22
description: React Router app works until someone refreshes or follows a direct link, then 404. The .htaccess fix for Hostinger and other Apache hosts.
tags: ["web development", "react", "routing", "htaccess", "SPA"]
---

I deployed my portfolio and found that typing \`/blog\` straight into the address bar gave me a 404. Clicking around inside the app was fine. Refreshing, or arriving from a direct link, broke it completely.

## Two routers, one of them blind

When someone types \`yourdomain.com/blog\` into their browser, the request hits your server first. The server looks for a file or directory called "blog", and there isn't one. Your routes live in React Router, not on disk. 404.

Clicking links inside the app works because React Router intercepts them and handles them in the browser, so the server never hears about it. A direct URL or a refresh goes to the server first, and the server has never heard of React Router.

## The fix: .htaccess

After trying a few things I settled on an \`.htaccess\` file. It works on Hostinger, where this site lives, and on most other Apache hosts.

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

## What it does

The server now serves \`index.html\` for any URL that isn't a real file or folder. User visits \`yourdomain.com/blog\`, server returns \`index.html\`, React loads, React Router reads the URL and renders the blog page.

## Other hosts

\`.htaccess\` covers most traditional hosts. Some platforms have their own mechanism: Netlify uses a \`_redirects\` file with \`/* /index.html 200\`, Vercel wants rewrites in \`vercel.json\`, and Firebase wants rewrites in \`firebase.json\`.

I'd still ship the \`.htaccess\` as a fallback. It costs nothing to have it sitting there.

With it in place, \`/blog\` loads from a refresh, a bookmark, or a link someone pasted somewhere, and crawlers that request the URL directly get a real page back instead of a 404.
`,ks=`---
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
`;function Ts(e){const t=e.match(/^---([\s\S]*?)---/);if(!t)return{};const n=t[1],a={},o=n.trim().split(`
`);for(const r of o){const s=r.match(/(.+?):\s*(.+)/);if(s){let[,l,c]=s;if(l=l.trim(),c=c.trim(),c.startsWith('"')&&c.endsWith('"')&&(c=c.slice(1,-1)),c.startsWith("[")&&c.endsWith("]"))try{c=JSON.parse(c)}catch{}a[l]=c}}return a}function Es(e,t=150){let a=e.replace(/^---[\s\S]*?---/,"").replace(/#+\s+/g,"").replace(/\*\*(.+?)\*\*/g,"$1").replace(/\*(.+?)\*/g,"$1").replace(/!\[(.*?)\]\(.*?\)/g,"").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/`([^`]+)`/g,"$1").replace(/-{3,}/g,"").replace(/\n/g," ").trim();return a.length>t&&(a=a.substring(0,t)+"..."),a}function Is(e){return e.split("/").pop().replace(/\.[^.]+$/,"")}const Ps=230,Ss=Object.assign({"./posts/cloudflare-workers-full-stack.mdx":ms,"./posts/cloudflare-zero-trust-homelab.mdx":fs,"./posts/enterprise-ai-roi.mdx":gs,"./posts/github-pages-cloudflare-subdomain.mdx":ys,"./posts/how-i-finally-organized-my-notes.mdx":ws,"./posts/lighthouse-ai-workflow.mdx":bs,"./posts/prompt-caching-rabbit-hole.mdx":vs,"./posts/recreating-the-claude-dev-blog.mdx":As,"./posts/spa-routing-hostinger.mdx":xs,"./posts/tmux-config.mdx":ks}),Cs=Object.assign({"./posts/cloudflare-workers-full-stack.mdx":()=>A(()=>import("./cloudflare-workers-full-stack-f4a11f16.js"),["assets/cloudflare-workers-full-stack-f4a11f16.js","assets/three-92ffd73b.js"]),"./posts/cloudflare-zero-trust-homelab.mdx":()=>A(()=>import("./cloudflare-zero-trust-homelab-438fb714.js"),["assets/cloudflare-zero-trust-homelab-438fb714.js","assets/three-92ffd73b.js"]),"./posts/enterprise-ai-roi.mdx":()=>A(()=>import("./enterprise-ai-roi-88cccae0.js"),["assets/enterprise-ai-roi-88cccae0.js","assets/three-92ffd73b.js"]),"./posts/github-pages-cloudflare-subdomain.mdx":()=>A(()=>import("./github-pages-cloudflare-subdomain-c37b5203.js"),["assets/github-pages-cloudflare-subdomain-c37b5203.js","assets/three-92ffd73b.js"]),"./posts/how-i-finally-organized-my-notes.mdx":()=>A(()=>import("./how-i-finally-organized-my-notes-89792787.js"),["assets/how-i-finally-organized-my-notes-89792787.js","assets/three-92ffd73b.js"]),"./posts/lighthouse-ai-workflow.mdx":()=>A(()=>import("./lighthouse-ai-workflow-fe7e9024.js"),["assets/lighthouse-ai-workflow-fe7e9024.js","assets/three-92ffd73b.js"]),"./posts/prompt-caching-rabbit-hole.mdx":()=>A(()=>import("./prompt-caching-rabbit-hole-668771ca.js"),["assets/prompt-caching-rabbit-hole-668771ca.js","assets/three-92ffd73b.js"]),"./posts/recreating-the-claude-dev-blog.mdx":()=>A(()=>import("./recreating-the-claude-dev-blog-a1d187b7.js"),["assets/recreating-the-claude-dev-blog-a1d187b7.js","assets/three-92ffd73b.js"]),"./posts/spa-routing-hostinger.mdx":()=>A(()=>import("./spa-routing-hostinger-73699f95.js"),["assets/spa-routing-hostinger-73699f95.js","assets/three-92ffd73b.js"]),"./posts/tmux-config.mdx":()=>A(()=>import("./tmux-config-a7431344.js"),["assets/tmux-config-a7431344.js","assets/three-92ffd73b.js"])}),be=Object.entries(Ss).map(([e,t])=>{const n=Ts(t),a=t.replace(/^---[\s\S]*?---\s*/,"");return{slug:Is(e),path:e,title:n.title||"Untitled Post",date:n.date||"",description:n.description||Es(t,160),tags:n.tags||[],minutes:Math.max(1,Math.round(a.split(/\s+/).length/Ps)),markdown:a}}).sort((e,t)=>new Date(t.date)-new Date(e.date)),Fn=e=>be.find(t=>t.slug===e),Un={},Gn=async e=>Un[e.slug]=await Cs[e.path](),Os=e=>Un[e.slug],ht=e=>e?new Date(e).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"UTC"}):"",Vn=({post:e})=>p(L,{to:`/blog/${e.slug}/`,className:"post-row",children:[i("span",{className:"post-row-date",children:ht(e.date)}),i("span",{className:"post-row-title",children:e.title}),i("span",{className:"post-row-time",children:`${e.minutes} min`})]}),ut=({children:e})=>{const{pathname:t}=Gt(),n=aa();return g.useEffect(()=>{n==="PUSH"&&window.scrollTo({top:0,behavior:"instant"})},[t,n]),i("div",{className:"blog",children:p("div",{className:"blog-wrap",children:[i(ps,{}),e]})})},ve="https://www.samratjha.com",_s={"@context":"https://schema.org","@type":"CollectionPage",name:"Blog | Samrat Jha",description:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha.",url:`${ve}/blog/`,author:{"@type":"Person",name:"Samrat Jha",url:`${ve}/`}},Ms=(e,t)=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.tags.some(n=>n.toLowerCase().includes(t)),Ns=({post:e})=>p(L,{to:`/blog/${e.slug}/`,className:"featured-post",children:[p("div",{className:"featured-post-meta mono",children:[p("span",{children:[i("span",{className:"featured-post-tag",children:"Latest"}),e.tags[0]&&i("span",{className:"featured-post-tag",children:e.tags[0]})]}),i("span",{children:ht(e.date)})]}),i("h2",{children:e.title}),i("p",{children:e.description})]}),jt=()=>{const[e,t]=g.useState(""),n=e.trim().toLowerCase(),a=n?be.filter(s=>Ms(s,n)):be,[o,...r]=n?[null,...a]:a;return p(Y,{children:[p($e,{children:[i("title",{children:"Blog | Samrat Jha"}),i("meta",{name:"description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering by Samrat Jha."}),i("link",{rel:"canonical",href:`${ve}/blog/`}),i("meta",{property:"og:type",content:"website"}),i("meta",{property:"og:url",content:`${ve}/blog/`}),i("meta",{property:"og:title",content:"Blog | Samrat Jha"}),i("meta",{property:"og:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),i("meta",{property:"og:site_name",content:"Samrat Jha"}),i("meta",{name:"twitter:card",content:"summary"}),i("meta",{name:"twitter:title",content:"Blog | Samrat Jha"}),i("meta",{name:"twitter:description",content:"Technical blog posts on AI, infrastructure, web development, and software engineering."}),i("script",{type:"application/ld+json",children:JSON.stringify(_s)})]}),i(ut,{children:p("div",{className:"grid-12 blog-index",children:[p("div",{className:"blog-index-intro","data-reveal":"",children:[i("h1",{children:"Blog"}),i("p",{children:"Notes on AI, infrastructure, and the tools I use to build things."}),i("input",{type:"search",className:"blog-search mono",value:e,onChange:s=>t(s.target.value),placeholder:"Search posts","aria-label":"Search posts"})]}),p("div",{className:"blog-index-list","data-reveal":"",style:{"--reveal-delay":".08s"},children:[o&&i(Ns,{post:o}),r.map(s=>i(Vn,{post:s},s.slug)),a.length===0&&i("p",{className:"blog-empty mono",children:`No posts match "${e}".`})]})]})})]})},Bt=28,Rs=e=>{const t=[];return e.forEach((n,a)=>{const o={...n,index:a};n.depth===3&&t.length?t[t.length-1].subs.push(o):t.push({...o,subs:[]})}),t},Ls=e=>{const[t,n]=g.useState(0),[a,o]=g.useState(0),[r,s]=g.useState(!1);return g.useEffect(()=>{const l=e.map(f=>document.getElementById(f.id)),c=document.getElementById("post-title");let d=0;const h=()=>{d=0;const m=document.documentElement.scrollHeight-window.innerHeight;n(m>0?Math.round(Math.min(1,window.scrollY/m)*100):0);const y=window.innerHeight/3;let v=0;l.forEach((w,b)=>{w&&w.getBoundingClientRect().top<=y&&(v=b)}),o(v),s(c?c.getBoundingClientRect().bottom<0:!1)},u=()=>{d||(d=requestAnimationFrame(h))};return h(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{cancelAnimationFrame(d),window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[e]),{pct:t,active:a,titleOn:r}},Ht=({label:e,getText:t})=>{const[n,a]=g.useState(!1);return g.useEffect(()=>{if(!n)return;const r=setTimeout(()=>a(!1),1500);return()=>clearTimeout(r)},[n]),i("button",{type:"button",className:"branch",onClick:async()=>{await navigator.clipboard.writeText(t()),a(!0)},children:n?"Copied":e})},Ds=({toc:e,title:t,minutes:n,url:a,markdown:o})=>{const{pct:r,active:s,titleOn:l}=Ls(e),c=Rs(e),d=Math.round(r/100*Bt),h=encodeURIComponent(a);return p(Y,{children:[i("div",{className:"top-progress",style:{transform:`scaleX(${r/100})`},"aria-hidden":"true"}),p("aside",{className:"rail",children:[i("div",{className:`rail-title${l?" on":""}`,"aria-hidden":!l,children:t}),c.length>0&&p("nav",{className:"rail-tree","aria-label":"Table of contents",children:[i("div",{className:"label",children:"Tree"}),c.map(u=>{const f=u.subs.some(m=>m.index===s)||u.index===s;return p("div",{children:[i("a",{href:`#${u.id}`,className:`branch${u.index===s?" on":""}`,children:u.text}),u.subs.length>0&&i("div",{className:`rail-subs${f?" open":""}`,children:i("div",{children:u.subs.map(m=>i("a",{href:`#${m.id}`,className:`branch sub${m.index===s?" on":""}`,tabIndex:f?void 0:-1,children:m.text},m.id))})})]},u.id)})]}),p("div",{className:"rail-progress",role:"progressbar","aria-label":"Reading progress","aria-valuenow":r,children:[i("b",{children:"▓".repeat(d)}),"░".repeat(Bt-d),i("span",{children:`${String(r).padStart(2,"0")}%`})]}),i("div",{className:"label rail-time",children:`${n} min read`}),p("div",{className:"rail-share",children:[i("div",{className:"label",children:"Share"}),i("a",{className:"branch",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${h}`,target:"_blank",rel:"noopener noreferrer",children:"X"}),i("a",{className:"branch",href:`https://www.linkedin.com/sharing/share-offsite/?url=${h}`,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),i("a",{className:"branch",href:`mailto:?subject=${encodeURIComponent(t)}&body=${h}`,children:"Email"}),i(Ht,{label:"Copy URL",getText:()=>a}),i(Ht,{label:"Copy markdown",getText:()=>`# ${t}

${o}`})]})]})]})},Qe="https://www.samratjha.com",V={name:"Samrat Jha",url:"https://www.samratjha.com/",jobTitle:"Senior AI Engineer",employer:"NVIDIA"},js=4,Yn=e=>e?new Date(e).toISOString():null,Bs=(e,t)=>{const n=Yn(e.date);return{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,datePublished:n,dateModified:n,author:{"@type":"Person",name:V.name,url:V.url,jobTitle:V.jobTitle},publisher:{"@type":"Person",name:V.name,url:V.url},mainEntityOfPage:{"@type":"WebPage","@id":t},keywords:e.tags.join(", ")}},Hs=(e,t)=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${Qe}/`},{"@type":"ListItem",position:2,name:"Blog",item:`${Qe}/blog/`},{"@type":"ListItem",position:3,name:e.title,item:t}]}),zs=({post:e})=>i("div",{className:"post-meta",children:[["Author",V.name],["Published",ht(e.date)],["Reading time",`${e.minutes} min`]].map(([t,n])=>p("div",{children:[i("div",{className:"label mono",children:t}),i("div",{className:"post-meta-value",children:n})]},t))}),Ws=({post:e})=>{const t=`${Qe}/blog/${e.slug}/`,[n,a]=g.useState(()=>Os(e));g.useEffect(()=>{n||Gn(e).then(a)},[n,e]);const o=n?.default,r=be.filter(s=>s.slug!==e.slug).slice(0,js);return p(Y,{children:[p($e,{children:[p("title",{children:[e.title," | Samrat Jha"]}),i("meta",{name:"title",content:`${e.title} | Samrat Jha`}),i("meta",{name:"description",content:e.description}),i("meta",{name:"author",content:V.name}),i("meta",{name:"keywords",content:e.tags.join(", ")}),i("link",{rel:"canonical",href:t}),i("meta",{property:"og:type",content:"article"}),i("meta",{property:"og:url",content:t}),i("meta",{property:"og:title",content:e.title}),i("meta",{property:"og:description",content:e.description}),i("meta",{property:"og:site_name",content:"Samrat Jha"}),i("meta",{property:"article:published_time",content:Yn(e.date)}),i("meta",{property:"article:author",content:V.url}),e.tags.map(s=>i("meta",{property:"article:tag",content:s},s)),i("meta",{name:"twitter:card",content:"summary"}),i("meta",{name:"twitter:url",content:t}),i("meta",{name:"twitter:title",content:e.title}),i("meta",{name:"twitter:description",content:e.description}),i("script",{type:"application/ld+json",children:JSON.stringify(Bs(e,t))}),i("script",{type:"application/ld+json",children:JSON.stringify(Hs(e,t))})]}),p(ut,{children:[p("header",{className:"grid-12 post-hero",children:[i(L,{to:"/blog/",className:"post-hero-back mono branch","data-reveal":"",children:"BLOG"}),p("div",{className:"post-hero-hd",children:[i("h1",{id:"post-title","data-reveal":"",style:{"--reveal-delay":".06s"},children:e.title}),i("p",{className:"post-hero-standfirst","data-reveal":"",style:{"--reveal-delay":".12s"},children:e.description}),i("div",{"data-reveal":"",style:{"--reveal-delay":".18s"},children:i(zs,{post:e})})]})]}),o&&p("div",{className:"grid-12 post-body","data-reveal":"",style:{"--reveal-delay":".24s"},children:[i(Ds,{toc:n.toc,title:e.title,minutes:e.minutes,url:t,markdown:e.markdown}),p("div",{className:"post-main",children:[i("article",{className:"post-prose",children:i(o,{})}),p("section",{className:"more-posts",children:[i("div",{className:"label mono",children:"More posts"}),r.map(s=>i(Vn,{post:s},s.slug))]})]})]})]})]})},zt=()=>{const{slug:e}=oa(),t=Fn(e);return t?i(Ws,{post:t},t.slug):p(Y,{children:[p($e,{children:[i("title",{children:"Post Not Found | Samrat Jha"}),i("meta",{name:"robots",content:"noindex"})]}),i(ut,{children:p("div",{className:"not-found",children:[i("h1",{className:"mono",children:"Post not found"}),i("p",{className:"label mono",children:i(L,{to:"/blog/",children:"└ Back to blog"})})]})})]})},Fs=()=>{const{hash:e}=Gt();return g.useEffect(()=>{if(e){const t=document.querySelector(e);t&&t.scrollIntoView()}},[e]),p("div",{className:"relative z-0 bg-primary",children:[i(ko,{}),i(xo,{}),i(cs,{}),i(Jo,{}),i(Co,{}),i(is,{}),i("div",{className:"relative z-0",children:i(us,{})})]})},Us=()=>p(ra,{children:[i(te,{path:"/",element:i(Fs,{})}),i(te,{path:"/blog",element:i(jt,{})}),i(te,{path:"/blog/",element:i(jt,{})}),i(te,{path:"/blog/:slug",element:i(zt,{})}),i(te,{path:"/blog/:slug/",element:i(zt,{})})]});const De=document.getElementById("root"),Wt=i(W.StrictMode,{children:i(Zt,{children:i(ia,{children:i(Us,{})})})}),{pathname:qn}=window.location,Ft=Fn(qn.match(/^\/blog\/([^/]+)/)?.[1]);(Ft?Gn(Ft):Promise.resolve()).finally(()=>{qn.startsWith("/blog")&&De.hasChildNodes()?ta(De,Wt):na(De).render(Wt)});export{Ur as p,Ee as u};
