import{b as n,j as r,k as o}from"./three-2679448d.js";function t(i){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return r(o,{children:[r(e.p,{children:["I just deployed my portfolio site and discovered that typing ",n(e.code,{children:"/blog"})," directly into the browser returns a 404. Works fine clicking around the app, breaks completely on refresh or direct links. Here's what's going on and how to fix it."]}),`
`,r(e.h2,{id:"the-problem-server-vs-client-routing",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-problem-server-vs-client-routing",children:n(e.span,{className:"icon icon-link"})}),"The Problem: Server vs. Client Routing"]}),`
`,r(e.p,{children:["When someone types ",n(e.code,{children:"yourdomain.com/blog"}),` into their browser, the request hits your server first. The server looks for a file or directory called "blog" - which doesn't exist. Your routes live in React Router, not as actual files on disk. 404.`]}),`
`,n(e.p,{children:"Clicking links inside your app works because React Router intercepts those and handles them in the browser. The server never sees those requests. Direct URL access and page refreshes bypass React Router entirely."}),`
`,r(e.h2,{id:"the-fix-htaccess",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-fix-htaccess",children:n(e.span,{className:"icon icon-link"})}),"The Fix: .htaccess"]}),`
`,r(e.p,{children:["After trying a few things, I went with an ",n(e.code,{children:".htaccess"})," file. It works on Hostinger (where this site lives) and most other Apache-based hosts."]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-apache",children:`# Enable rewriting
RewriteEngine On

# If the request is not for a real file or directory
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Rewrite all requests to the root index.html
RewriteRule ^ index.html [QSA,L]
`})}),`
`,r(e.p,{children:["Put this in your ",n(e.code,{children:"public"})," directory before deploying."]}),`
`,r(e.h2,{id:"what-this-does",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-this-does",children:n(e.span,{className:"icon icon-link"})}),"What This Does"]}),`
`,r(e.p,{children:["The server now serves ",n(e.code,{children:"index.html"})," for any URL that isn't a real file or folder. User visits ",n(e.code,{children:"yourdomain.com/blog"}),", server returns ",n(e.code,{children:"index.html"}),", React loads, React Router reads the URL and renders the blog page."]}),`
`,r(e.h2,{id:"other-hosting-platforms",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other-hosting-platforms",children:n(e.span,{className:"icon icon-link"})}),"Other Hosting Platforms"]}),`
`,r(e.p,{children:[n(e.code,{children:".htaccess"})," works on most traditional hosts, but some platforms do it differently:"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"Netlify"}),": ",n(e.code,{children:"_redirects"})," file with ",n(e.code,{children:"/* /index.html 200"})]}),`
`,r(e.li,{children:[n(e.strong,{children:"Vercel"}),": ",n(e.code,{children:"vercel.json"})," with rewrites"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Firebase"}),": ",n(e.code,{children:"firebase.json"})," rewrites"]}),`
`]}),`
`,r(e.p,{children:["I'd still include ",n(e.code,{children:".htaccess"})," as a fallback - it doesn't hurt to have it there."]}),`
`,r(e.h2,{id:"done",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#done",children:n(e.span,{className:"icon icon-link"})}),"Done"]}),`
`,r(e.p,{children:["My ",n(e.code,{children:"/blog"})," route works now. Direct links work, bookmarks work, refresh works. Search engines can actually crawl the pages too."]})]})}function c(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(t,{...i})}):t(i)}export{c as default};
