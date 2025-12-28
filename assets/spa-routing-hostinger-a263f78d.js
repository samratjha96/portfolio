import{j as r,a as n,F as o}from"./index-db51c9f1.js";function t(i){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(o,{children:[n(e.p,{children:["Ever built a slick React app with client-side routing that works flawlessly during development, only to deploy it and discover users can't directly navigate to any routes like ",r(e.code,{children:"/blog"})," or ",r(e.code,{children:"/products"}),"? Yeah, I just hit this problem with my portfolio site, and the solution is surprisingly simple once you understand what's happening."]}),`
`,n(e.h2,{id:"the-problem-server-vs-client-routing",children:[r(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-problem-server-vs-client-routing",children:r(e.span,{className:"icon icon-link"})}),"The Problem: Server vs. Client Routing"]}),`
`,n(e.p,{children:["When a user types ",r(e.code,{children:"yourdomain.com/blog"}),` directly into their browser, the request goes to your server first. With a single page application (SPA), the server looks for a physical file or directory called "blog" - which doesn't exist because your routes are handled client-side by React Router. Hence, the dreaded 404 error.`]}),`
`,r(e.p,{children:"Internal navigation works fine because React Router intercepts those clicks and handles them in the browser without making server requests. The problem only occurs with direct URL access or page refreshes."}),`
`,n(e.h2,{id:"the-universal-solution-htaccess",children:[r(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-universal-solution-htaccess",children:r(e.span,{className:"icon icon-link"})}),"The Universal Solution: .htaccess"]}),`
`,n(e.p,{children:["After experimenting with various approaches, I landed on an ",r(e.code,{children:".htaccess"})," file as the most universal solution that works across many hosting providers, including Hostinger (which powers this site)."]}),`
`,r(e.p,{children:"Here's the magic code:"}),`
`,r(e.pre,{children:r(e.code,{className:"hljs language-apache",children:`# Enable rewriting
RewriteEngine On

# If the request is not for a real file or directory
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Rewrite all requests to the root index.html
RewriteRule ^ index.html [QSA,L]
`})}),`
`,r(e.p,{children:"Drop this file in your project's public directory (the one that gets deployed to your hosting provider), and you're good to go."}),`
`,n(e.h2,{id:"what-does-this-actually-do",children:[r(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-does-this-actually-do",children:r(e.span,{className:"icon icon-link"})}),"What Does This Actually Do?"]}),`
`,r(e.p,{children:"In plain English, this configuration tells the Apache server to serve the index.html file for ANY URL the user is requesting that isn't a real file or folder"}),`
`,n(e.p,{children:["That's it! With this approach, when a user visits ",r(e.code,{children:"yourdomain.com/blog"})," directly, the server serves your main ",r(e.code,{children:"index.html"})," file, your React app loads, and then React Router takes over and shows the correct page."]}),`
`,n(e.h2,{id:"alternatives-for-different-hosting-providers",children:[r(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alternatives-for-different-hosting-providers",children:r(e.span,{className:"icon icon-link"})}),"Alternatives for Different Hosting Providers"]}),`
`,n(e.p,{children:["While ",r(e.code,{children:".htaccess"})," works for most traditional hosting providers, some specialized platforms have their own configuration:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.strong,{children:"Netlify"}),": Create a ",r(e.code,{children:"_redirects"})," file with ",r(e.code,{children:"/* /index.html 200"})]}),`
`,n(e.li,{children:[r(e.strong,{children:"Vercel"}),": Use a ",r(e.code,{children:"vercel.json"})," file with appropriate rewrites"]}),`
`,n(e.li,{children:[r(e.strong,{children:"Firebase"}),": Configure rewrites in ",r(e.code,{children:"firebase.json"})]}),`
`]}),`
`,n(e.p,{children:["But honestly, including the ",r(e.code,{children:".htaccess"})," file is a safe bet for most scenarios and ensures maximum compatibility."]}),`
`,n(e.h2,{id:"the-results",children:[r(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-results",children:r(e.span,{className:"icon icon-link"})}),"The Results"]}),`
`,n(e.p,{children:["After implementing this solution, my ",r(e.code,{children:"/blog"})," route is now directly accessible from anywhere. Users can bookmark specific pages, share links directly to blog posts, and refresh the page without encountering 404 errors."]}),`
`,r(e.p,{children:"This small config change dramatically improves user experience and SEO, as search engines can now properly crawl and index all your content."}),`
`,r(e.p,{children:"Remember: great web apps aren't just about the code you write - they're also about how you deploy them. Sometimes, the simplest server configurations make all the difference."})]})}function a(i={}){const{wrapper:e}=i.components||{};return e?r(e,{...i,children:r(t,{...i})}):t(i)}export{a as default};
