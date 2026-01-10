import{b as n,j as i,k as o}from"./three-2679448d.js";function t(r){const e={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r.components};return i(o,{children:[i(e.p,{children:["Just set up ",n(e.a,{href:"https://candesign.techbrohomelab.xyz",children:"candesign.techbrohomelab.xyz"}),", a static site gallery hosted on GitHub Pages with a custom subdomain via Cloudflare. The whole process took maybe 10 minutes once I stopped overthinking it."]}),`
`,i(e.h2,{id:"the-setup",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-setup",children:n(e.span,{className:"icon icon-link"})}),"The Setup"]}),`
`,i(e.p,{children:["GitHub Pages is free hosting for static sites from any public repo. Cloudflare manages my DNS. I wanted ",n(e.code,{children:"candesign.techbrohomelab.xyz"})," instead of ",n(e.code,{children:"samratjha96.github.io/candesign"}),"."]}),`
`,i(e.h2,{id:"enable-github-pages",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enable-github-pages",children:n(e.span,{className:"icon icon-link"})}),"Enable GitHub Pages"]}),`
`,i(e.p,{children:["In your repo, go to ",n(e.strong,{children:"Settings > Pages"}),'. Under "Build and deployment":']}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Source: ",n(e.strong,{children:"Deploy from a branch"})]}),`
`,i(e.li,{children:["Branch: ",n(e.code,{children:"main"})," (or whatever branch has your site)"]}),`
`,i(e.li,{children:["Folder: ",n(e.code,{children:"/ (root)"})," unless your site lives in ",n(e.code,{children:"/docs"})]}),`
`]}),`
`,i(e.p,{children:["Save it. GitHub will deploy to ",n(e.code,{children:"https://<username>.github.io/<repo-name>"}),"."]}),`
`,i(e.h2,{id:"add-the-cname-file",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-the-cname-file",children:n(e.span,{className:"icon icon-link"})}),"Add the CNAME File"]}),`
`,i(e.p,{children:["Create a file called ",n(e.code,{children:"CNAME"})," in your repo root with just your custom domain:"]}),`
`,n(e.pre,{children:n(e.code,{children:`candesign.techbrohomelab.xyz
`})}),`
`,i(e.p,{children:["No trailing slash, no ",n(e.code,{children:"https://"}),". Commit and push it."]}),`
`,n(e.p,{children:"GitHub needs this to know which custom domain maps to your repo. Without it, custom domain requests 404."}),`
`,i(e.h2,{id:"cloudflare-dns",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cloudflare-dns",children:n(e.span,{className:"icon icon-link"})}),"Cloudflare DNS"]}),`
`,n(e.p,{children:"In Cloudflare, add a CNAME record:"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Type"}),n(e.th,{children:"Name"}),n(e.th,{children:"Target"}),n(e.th,{children:"Proxy"})]})}),n(e.tbody,{children:i(e.tr,{children:[n(e.td,{children:"CNAME"}),n(e.td,{children:"candesign"}),n(e.td,{children:"samratjha96.github.io"}),n(e.td,{children:"Off"})]})})]}),`
`,n(e.p,{children:"The name is just the subdomain part. Target is your GitHub Pages URL (without the repo name)."}),`
`,n(e.p,{children:"I initially had proxy enabled (orange cloud) and it worked, but GitHub recommends DNS-only (grey cloud) for Pages. Either works, but DNS-only avoids potential SSL certificate conflicts."}),`
`,i(e.h2,{id:"back-to-github",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#back-to-github",children:n(e.span,{className:"icon icon-link"})}),"Back to GitHub"]}),`
`,i(e.p,{children:["Once DNS propagates (usually seconds with Cloudflare), go back to ",n(e.strong,{children:"Settings > Pages"})," and enter your custom domain: ",n(e.code,{children:"candesign.techbrohomelab.xyz"}),"."]}),`
`,n(e.p,{children:'GitHub will verify DNS and provision an SSL cert. The "Enforce HTTPS" checkbox should become available after a few minutes. Enable it.'}),`
`,i(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,n(e.p,{children:n(e.strong,{children:"CNAME file gets deleted"})}),`
`,i(e.p,{children:["If you're using a static site generator that wipes your output folder, make sure the CNAME file is in your source directory or build process copies it over. I've lost it a few times to careless ",n(e.code,{children:"rm -rf dist/*"}),"."]}),`
`,n(e.p,{children:n(e.strong,{children:'DNS propagation "issues"'})}),`
`,n(e.p,{children:"If GitHub says it can't verify your domain, wait 5 minutes. It's almost always just propagation delay, not a config problem. Don't start changing things."}),`
`,n(e.p,{children:n(e.strong,{children:"www vs non-www"})}),`
`,i(e.p,{children:["If you want ",n(e.code,{children:"www.example.com"}),", your CNAME record name should be ",n(e.code,{children:"www"}),". For apex domains (",n(e.code,{children:"example.com"}),"), you need A records pointing to GitHub's IPs instead:"]}),`
`,n(e.pre,{children:n(e.code,{children:`185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
`})}),`
`,n(e.p,{children:"Subdomains are simpler. Just use CNAME."}),`
`,n(e.p,{children:n(e.strong,{children:"Mixed content warnings"})}),`
`,i(e.p,{children:["If your site loads but looks broken, check browser console for mixed content errors. Make sure all your asset URLs use ",n(e.code,{children:"https://"})," or protocol-relative ",n(e.code,{children:"//"})," paths."]}),`
`,i(e.h2,{id:"why-not-just-use-the-default-url",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-not-just-use-the-default-url",children:n(e.span,{className:"icon icon-link"})}),"Why Not Just Use the Default URL?"]}),`
`,i(e.p,{children:["Vanity, mostly. But also: if you ever move hosting, your URLs don't break. And ",n(e.code,{children:"techbrohomelab.xyz"})," is more memorable than ",n(e.code,{children:"github.io/candesign"})," for sharing."]}),`
`,n(e.hr,{}),`
`,i(e.p,{children:["Live site: ",n(e.a,{href:"https://candesign.techbrohomelab.xyz",children:"candesign.techbrohomelab.xyz"})]}),`
`,i(e.p,{children:["Source: ",n(e.a,{href:"https://github.com/samratjha96/candesign",children:"github.com/samratjha96/candesign"})]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,{...r,children:n(t,{...r})}):t(r)}export{d as default};
