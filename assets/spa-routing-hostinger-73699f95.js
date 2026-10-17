import{b as t,j as n,F as o}from"./three-92ffd73b.js";const h=[{id:"two-routers-one-of-them-blind",text:"Two routers, one of them blind",depth:2},{id:"the-fix-htaccess",text:"The fix: .htaccess",depth:2},{id:"what-it-does",text:"What it does",depth:2},{id:"other-hosts",text:"Other hosts",depth:2}];function i(r){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...r.components};return n(o,{children:[n(e.p,{children:["I deployed my portfolio and found that typing ",t(e.code,{children:"/blog"})," straight into the address bar gave me a 404. Clicking around inside the app was fine. Refreshing, or arriving from a direct link, broke it completely."]}),`
`,n(e.h2,{id:"two-routers-one-of-them-blind",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#two-routers-one-of-them-blind",children:t(e.span,{className:"icon icon-link"})}),"Two routers, one of them blind"]}),`
`,n(e.p,{children:["When someone types ",t(e.code,{children:"yourdomain.com/blog"}),` into their browser, the request hits your server first. The server looks for a file or directory called "blog", and there isn't one. Your routes live in React Router, not on disk. 404.`]}),`
`,t(e.p,{children:"Clicking links inside the app works because React Router intercepts them and handles them in the browser, so the server never hears about it. A direct URL or a refresh goes to the server first, and the server has never heard of React Router."}),`
`,n(e.h2,{id:"the-fix-htaccess",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-fix-htaccess",children:t(e.span,{className:"icon icon-link"})}),"The fix: .htaccess"]}),`
`,n(e.p,{children:["After trying a few things I settled on an ",t(e.code,{children:".htaccess"})," file. It works on Hostinger, where this site lives, and on most other Apache hosts."]}),`
`,t(e.pre,{children:t(e.code,{className:"hljs language-apache",children:`# Enable rewriting
RewriteEngine On

# If the request is not for a real file or directory
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Rewrite all requests to the root index.html
RewriteRule ^ index.html [QSA,L]
`})}),`
`,n(e.p,{children:["Put this in your ",t(e.code,{children:"public"})," directory before deploying."]}),`
`,n(e.h2,{id:"what-it-does",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-it-does",children:t(e.span,{className:"icon icon-link"})}),"What it does"]}),`
`,n(e.p,{children:["The server now serves ",t(e.code,{children:"index.html"})," for any URL that isn't a real file or folder. User visits ",t(e.code,{children:"yourdomain.com/blog"}),", server returns ",t(e.code,{children:"index.html"}),", React loads, React Router reads the URL and renders the blog page."]}),`
`,n(e.h2,{id:"other-hosts",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other-hosts",children:t(e.span,{className:"icon icon-link"})}),"Other hosts"]}),`
`,n(e.p,{children:[t(e.code,{children:".htaccess"})," covers most traditional hosts. Some platforms have their own mechanism: Netlify uses a ",t(e.code,{children:"_redirects"})," file with ",t(e.code,{children:"/* /index.html 200"}),", Vercel wants rewrites in ",t(e.code,{children:"vercel.json"}),", and Firebase wants rewrites in ",t(e.code,{children:"firebase.json"}),"."]}),`
`,n(e.p,{children:["I'd still ship the ",t(e.code,{children:".htaccess"})," as a fallback. It costs nothing to have it sitting there."]}),`
`,n(e.p,{children:["With it in place, ",t(e.code,{children:"/blog"})," loads from a refresh, a bookmark, or a link someone pasted somewhere, and crawlers that request the URL directly get a real page back instead of a 404."]})]})}function a(r={}){const{wrapper:e}=r.components||{};return e?t(e,{...r,children:t(i,{...r})}):i(r)}export{a as default,h as toc};
