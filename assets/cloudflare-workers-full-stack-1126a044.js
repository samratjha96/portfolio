import{j as n,a as s,F as r}from"./index-63922cd1.js";function l(a){const e={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a.components};return s(r,{children:[s(e.p,{children:["I just deployed ",n(e.a,{href:"https://space-selfie.zasamrat.workers.dev",children:"Space Selfie"})," to Cloudflare Workers—a single deployment serving both the API and frontend, running on the edge globally, for $0/month. Figured I'd document what actually went into it."]}),`
`,s(e.h2,{id:"why-workers",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-workers",children:n(e.span,{className:"icon icon-link"})}),"Why Workers?"]}),`
`,n(e.p,{children:"Honestly, for side projects that get sporadic traffic, I didn't want to think about servers. Workers give you 100k requests/day free, no cold starts, and your code runs close to users everywhere. The catch is you're stuck with JavaScript/TypeScript and there are runtime constraints. For an app that makes API calls and does some math? Fine."}),`
`,s(e.h2,{id:"the-stack",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-stack",children:n(e.span,{className:"icon icon-link"})}),"The Stack"]}),`
`,s(e.ul,{children:[`
`,s(e.li,{children:[n(e.strong,{children:n(e.a,{href:"https://hono.dev/",children:"Hono"})})," - Web framework built for edge runtimes. Like Express but smaller and doesn't fight the Workers environment."]}),`
`,s(e.li,{children:[n(e.strong,{children:"TypeScript"})," - Types are nice."]}),`
`,s(e.li,{children:[n(e.strong,{children:"Wrangler"})," - Cloudflare's CLI. Handles local dev and deploys."]}),`
`]}),`
`,s(e.h2,{id:"project-structure",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-structure",children:n(e.span,{className:"icon icon-link"})}),"Project Structure"]}),`
`,n(e.pre,{children:n(e.code,{children:`workers/
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
`})}),`
`,n(e.p,{children:"Workers can serve static assets alongside your API, so you don't need a separate CDN or hosting for the frontend."}),`
`,s(e.h2,{id:"wranglertoml",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wranglertoml",children:n(e.span,{className:"icon icon-link"})}),"wrangler.toml"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-toml",children:[n(e.span,{className:"hljs-attr",children:"name"})," = ",n(e.span,{className:"hljs-string",children:'"my-app"'}),`
`,n(e.span,{className:"hljs-attr",children:"main"})," = ",n(e.span,{className:"hljs-string",children:'"src/index.ts"'}),`
`,n(e.span,{className:"hljs-attr",children:"compatibility_date"})," = ",n(e.span,{className:"hljs-string",children:'"2024-12-01"'}),`
`,n(e.span,{className:"hljs-attr",children:"compatibility_flags"})," = [",n(e.span,{className:"hljs-string",children:'"nodejs_compat"'}),`]

`,n(e.span,{className:"hljs-section",children:"[assets]"}),`
`,n(e.span,{className:"hljs-attr",children:"directory"})," = ",n(e.span,{className:"hljs-string",children:'"./public"'}),`

`,n(e.span,{className:"hljs-section",children:"[dev]"}),`
`,n(e.span,{className:"hljs-attr",children:"port"})," = ",n(e.span,{className:"hljs-number",children:"8787"}),`
`]})}),`
`,s(e.p,{children:["The ",n(e.code,{children:"[assets]"})," block serves your ",n(e.code,{children:"public/"})," folder as static files. Requests to ",n(e.code,{children:"/index.html"})," or ",n(e.code,{children:"/app.js"})," hit those directly. Everything else goes to your Worker."]}),`
`,s(e.h2,{id:"the-hono-app",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-hono-app",children:n(e.span,{className:"icon icon-link"})}),"The Hono App"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-typescript",children:[n(e.span,{className:"hljs-keyword",children:"import"})," { ",n(e.span,{className:"hljs-title class_",children:"Hono"})," } ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'hono'"}),`;
`,n(e.span,{className:"hljs-keyword",children:"import"})," { cors } ",n(e.span,{className:"hljs-keyword",children:"from"})," ",n(e.span,{className:"hljs-string",children:"'hono/cors'"}),`;

`,n(e.span,{className:"hljs-keyword",children:"const"})," app = ",n(e.span,{className:"hljs-keyword",children:"new"})," ",n(e.span,{className:"hljs-title class_",children:"Hono"}),`();

app.`,n(e.span,{className:"hljs-title function_",children:"use"}),"(",n(e.span,{className:"hljs-string",children:"'*'"}),", ",n(e.span,{className:"hljs-title function_",children:"cors"}),`());

app.`,n(e.span,{className:"hljs-title function_",children:"get"}),"(",n(e.span,{className:"hljs-string",children:"'/api/health'"}),", ",s(e.span,{className:"hljs-function",children:["(",n(e.span,{className:"hljs-params",children:"c"}),") =>"]}),` {
  `,n(e.span,{className:"hljs-keyword",children:"return"})," c.",n(e.span,{className:"hljs-title function_",children:"json"}),"({ ",n(e.span,{className:"hljs-attr",children:"status"}),": ",n(e.span,{className:"hljs-string",children:"'ok'"}),` });
});

app.`,n(e.span,{className:"hljs-title function_",children:"post"}),"(",n(e.span,{className:"hljs-string",children:"'/api/data'"}),", ",n(e.span,{className:"hljs-title function_",children:"async"}),` (c) => {
  `,n(e.span,{className:"hljs-keyword",children:"const"})," body = ",n(e.span,{className:"hljs-keyword",children:"await"})," c.",n(e.span,{className:"hljs-property",children:"req"}),".",n(e.span,{className:"hljs-title function_",children:"json"}),`();
  `,n(e.span,{className:"hljs-keyword",children:"return"})," c.",n(e.span,{className:"hljs-title function_",children:"json"}),"({ ",n(e.span,{className:"hljs-attr",children:"received"}),`: body });
});

`,n(e.span,{className:"hljs-keyword",children:"export"})," ",n(e.span,{className:"hljs-keyword",children:"default"}),` app;
`]})}),`
`,n(e.p,{children:"No server setup, no port config. Export the app and Wrangler handles the rest."}),`
`,s(e.h2,{id:"local-dev",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#local-dev",children:n(e.span,{className:"icon icon-link"})}),"Local Dev"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-bash",children:`npm install
npx wrangler dev
`})}),`
`,s(e.p,{children:["Spins up ",n(e.code,{children:"http://localhost:8787"})," with hot reload."]}),`
`,s(e.h2,{id:"deploying",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying",children:n(e.span,{className:"icon icon-link"})}),"Deploying"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:["npx wrangler login   ",n(e.span,{className:"hljs-comment",children:"# first time only"}),`
npx wrangler deploy
`]})}),`
`,s(e.p,{children:["Takes like 5 seconds. You get a URL like ",n(e.code,{children:"https://my-app.your-subdomain.workers.dev"}),"."]}),`
`,s(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,n(e.p,{children:n(e.strong,{children:"No Node.js APIs by default"})}),`
`,s(e.p,{children:["Workers run on V8, not Node. If you need stuff like ",n(e.code,{children:"Buffer"}),", add the compat flag:"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-toml",children:[n(e.span,{className:"hljs-attr",children:"compatibility_flags"})," = [",n(e.span,{className:"hljs-string",children:'"nodejs_compat"'}),`]
`]})}),`
`,n(e.p,{children:"I forgot this initially and got cryptic errors until I realized what was happening."}),`
`,n(e.p,{children:n(e.strong,{children:"No axios"})}),`
`,s(e.p,{children:["Use ",n(e.code,{children:"fetch()"}),". It's native and works fine, but if you're used to axios interceptors you'll need to restructure."]}),`
`,n(e.p,{children:n(e.strong,{children:"No filesystem"})}),`
`,n(e.p,{children:"Can't read/write files. For caching you have a few options:"}),`
`,s(e.ul,{children:[`
`,n(e.li,{children:"In-memory variables (reset on redeploy, but fine for short-lived cache)"}),`
`,n(e.li,{children:"KV Storage (key-value store, free tier available)"}),`
`,n(e.li,{children:"D1 (SQLite, also free tier)"}),`
`]}),`
`,n(e.p,{children:"I used in-memory caching. Didn't want to deal with more infrastructure."}),`
`,n(e.p,{children:n(e.strong,{children:"CPU time limits"})}),`
`,n(e.p,{children:"10ms CPU time per request on free tier. Sounds brutal but network I/O doesn't count against this—only actual compute. Haven't hit the limit yet doing API work."}),`
`,s(e.h2,{id:"frontend",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#frontend",children:n(e.span,{className:"icon icon-link"})}),"Frontend"]}),`
`,n(e.p,{children:"Since API and frontend are same origin:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-javascript",children:[n(e.span,{className:"hljs-keyword",children:"const"})," response = ",n(e.span,{className:"hljs-keyword",children:"await"})," ",n(e.span,{className:"hljs-title function_",children:"fetch"}),"(",n(e.span,{className:"hljs-string",children:"'/api/data'"}),`, {
  `,n(e.span,{className:"hljs-attr",children:"method"}),": ",n(e.span,{className:"hljs-string",children:"'POST'"}),`,
  `,n(e.span,{className:"hljs-attr",children:"headers"}),": { ",n(e.span,{className:"hljs-string",children:"'Content-Type'"}),": ",n(e.span,{className:"hljs-string",children:"'application/json'"}),` },
  `,n(e.span,{className:"hljs-attr",children:"body"}),": ",n(e.span,{className:"hljs-title class_",children:"JSON"}),".",n(e.span,{className:"hljs-title function_",children:"stringify"}),"({ ",n(e.span,{className:"hljs-attr",children:"foo"}),": ",n(e.span,{className:"hljs-string",children:"'bar'"}),` })
});
`]})}),`
`,n(e.p,{children:"No CORS headaches. No environment variables for API URLs."}),`
`,s(e.h2,{id:"when-this-doesnt-work",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#when-this-doesnt-work",children:n(e.span,{className:"icon icon-link"})}),"When This Doesn't Work"]}),`
`,s(e.ul,{children:[`
`,n(e.li,{children:"Long-running tasks (30 second max, 10ms CPU on free)"}),`
`,n(e.li,{children:"Heavy compute like ML inference"}),`
`,n(e.li,{children:"Complex relational database queries (D1 is SQLite)"}),`
`,n(e.li,{children:"Websockets without Durable Objects"}),`
`]}),`
`,n(e.p,{children:"For APIs and static sites with some dynamic bits, it's solid."}),`
`,n(e.hr,{}),`
`,s(e.p,{children:[n(e.a,{href:"https://github.com/samratjha96/space-selfie",children:"Source code for Space Selfie"})," if you want to see the full setup."]})]})}function c(a={}){const{wrapper:e}=a.components||{};return e?n(e,{...a,children:n(l,{...a})}):l(a)}export{c as default};
