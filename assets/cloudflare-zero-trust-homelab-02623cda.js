import{b as n,j as a,k as i}from"./three-114a71c7.js";const r="/assets/cloudflare-zero-trust-diagram-26eea4d2.webp";function t(o){const e={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...o.components};return a(i,{children:[n(e.p,{children:"I run a bunch of apps on a VPS, all exposed through Cloudflare Tunnels. The problem: some of those apps have no auth, or auth that's annoying to set up (OAuth apps, API keys, invite flows). I wanted something simpler: if you're on my list, you get in. If not, you don't."}),`
`,n(e.p,{children:"Cloudflare Zero Trust Access does exactly this, and it sits in front of your tunnel so your app never even sees unauthorized traffic."}),`
`,a(e.h2,{id:"the-setup",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-setup",children:n(e.span,{className:"icon icon-link"})}),"The setup"]}),`
`,n(e.p,{children:"I had a self-hosted chat app running on port 8400 behind a Cloudflare Tunnel. The app itself has OpenID Connect support, but that means everyone needs an account with the OIDC provider. My family doesn't have those."}),`
`,a(e.p,{children:["The existing tunnel config already had a public hostname pointing ",n(e.code,{children:"chat.example.com"})," to ",n(e.code,{children:"localhost:8400"}),". Traffic was flowing, just unprotected."]}),`
`,a(e.h2,{id:"adding-zero-trust-access",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#adding-zero-trust-access",children:n(e.span,{className:"icon icon-link"})}),"Adding Zero Trust Access"]}),`
`,a(e.p,{children:["Go to ",n(e.a,{href:"https://one.dash.cloudflare.com",children:"one.dash.cloudflare.com"})," → Access → Applications → Add an application."]}),`
`,a(e.p,{children:["Pick ",n(e.strong,{children:"Self-hosted"}),", set the domain to your public hostname:"]}),`
`,n(e.pre,{children:n(e.code,{children:`Application domain: chat.example.com
`})}),`
`,n(e.p,{children:"Then create a policy:"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.strong,{children:"Policy name:"})," whatever you want"]}),`
`,a(e.li,{children:[n(e.strong,{children:"Action:"})," Allow"]}),`
`,a(e.li,{children:[n(e.strong,{children:"Selector:"})," Emails"]}),`
`,a(e.li,{children:[n(e.strong,{children:"Value:"})," add each email you want to allow"]}),`
`]}),`
`,n(e.p,{children:"That's it on the Cloudflare side."}),`
`,a(e.h2,{id:"how-it-works",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:n(e.span,{className:"icon icon-link"})}),"How it works"]}),`
`,n("img",{src:r,alt:"Cloudflare Zero Trust Access flow diagram showing user request intercepted at Cloudflare edge with email login, then tunneled to homelab server",width:900,height:491,loading:"lazy"}),`
`,a(e.h2,{id:"what-happens-now",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-happens-now",children:n(e.span,{className:"icon icon-link"})}),"What happens now"]}),`
`,a(e.p,{children:["When someone hits ",n(e.code,{children:"chat.example.com"}),", Cloudflare intercepts the request ",n(e.em,{children:"before"})," it reaches your server. They see a login page, enter their email, get a one-time PIN, enter it, and they're through. Cloudflare sets a ",n(e.code,{children:"CF_Authorization"})," cookie and passes the request to your app."]}),`
`,n(e.p,{children:"The request flow looks like:"}),`
`,n(e.pre,{children:n(e.code,{children:`User → Cloudflare Edge → Access check → Tunnel → localhost:8400
                           ↓
                    (not on the list? blocked here)
`})}),`
`,n(e.p,{children:"Your app sees nothing. No auth headers to parse, no middleware to add, no OAuth dance. The app can run completely open because Cloudflare handles the gate."}),`
`,a(e.h2,{id:"disabling-app-level-auth",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#disabling-app-level-auth",children:n(e.span,{className:"icon icon-link"})}),"Disabling app-level auth"]}),`
`,n(e.p,{children:`Since Cloudflare handles auth, you can strip out whatever login your app ships with — OIDC, OAuth, magic links, whatever. One gotcha: if the app's Docker image has auth defaults baked in, deleting the lines from your env override file won't actually disable them. The image defaults kick back in. You need to explicitly set every auth-related variable to an empty string so the app treats them as "not configured."`}),`
`,a(e.h2,{id:"session-management",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#session-management",children:n(e.span,{className:"icon icon-link"})}),"Session management"]}),`
`,n(e.p,{children:"Sessions last as long as you configure in the Access application settings. Users can log out by visiting:"}),`
`,n(e.pre,{children:n(e.code,{children:`https://chat.example.com/cdn-cgi/access/logout
`})}),`
`,n(e.p,{children:"You can revoke sessions from the Zero Trust dashboard under Logs → Access Requests."}),`
`,a(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,n(e.p,{children:n(e.strong,{children:"Cookie settings"})}),`
`,a(e.p,{children:["If you had ",n(e.code,{children:"COOKIE_SECURE=true"})," set for your app's own auth, keep it. Cloudflare terminates TLS at the edge, so the cookie still needs the secure flag when traveling between the browser and Cloudflare."]}),`
`,n(e.p,{children:n(e.strong,{children:"This works for any app"})}),`
`,n(e.p,{children:"The nice thing about this approach is it's app-agnostic. I could put the same Access policy in front of any service behind my tunnel: Stirling PDF, Pocketbase, whatever. No code changes to any of them."}),`
`,a(e.h2,{id:"cost",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cost",children:n(e.span,{className:"icon icon-link"})}),"Cost"]}),`
`,n(e.p,{children:"Free. Cloudflare Zero Trust includes 50 users on the free tier. For a homelab shared with family and friends, that's more than enough."}),`
`,n(e.hr,{}),`
`,a(e.p,{children:["Cloudflare Tunnels: ",n(e.a,{href:"https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/",children:"developers.cloudflare.com/cloudflare-one/connections/connect-networks"})]}),`
`,a(e.p,{children:["Zero Trust Access: ",n(e.a,{href:"https://developers.cloudflare.com/cloudflare-one/policies/access/",children:"developers.cloudflare.com/cloudflare-one/policies/access"})]})]})}function l(o={}){const{wrapper:e}=o.components||{};return e?n(e,{...o,children:n(t,{...o})}):t(o)}export{l as default};
