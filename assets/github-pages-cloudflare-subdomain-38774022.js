import{b as n,j as i,k as a}from"./three-5874ebf6.js";function t(r){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r.components};return i(a,{children:[i(e.p,{children:["Use a subdomain when you need a stable public name for a GitHub Pages project. I use ",n(e.code,{children:"gallery.example.com"})," below as the example. Replace it with your domain."]}),`
`,n(e.p,{children:"This guide covers a project that publishes from a branch and uses Cloudflare for DNS. The default GitHub Pages URL remains available during setup."}),`
`,i(e.h2,{id:"verify-the-domain-first",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verify-the-domain-first",children:n(e.span,{className:"icon icon-link"})}),"Verify the domain first"]}),`
`,n(e.p,{children:"Verify the domain in the GitHub account or organization settings before you configure the repository. GitHub uses a TXT record for this check. Keep the TXT record after verification."}),`
`,i(e.h2,{id:"set-the-domain-in-github-first",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#set-the-domain-in-github-first",children:n(e.span,{className:"icon icon-link"})}),"Set the domain in GitHub first"]}),`
`,i(e.p,{children:["In the repository, open ",n(e.strong,{children:"Settings > Pages"}),". Under ",n(e.strong,{children:"Custom domain"}),", enter ",n(e.code,{children:"gallery.example.com"})," and save the setting."]}),`
`,n(e.p,{children:"The order matters. Set the custom domain in GitHub before you create the DNS record. GitHub recommends this order because DNS that points to GitHub before the repository claims the domain can create a takeover risk."}),`
`,i(e.p,{children:["For branch publishing, GitHub adds an uppercase ",n(e.code,{children:"CNAME"})," file to the root of the publishing source. The file contains only the domain name:"]}),`
`,n(e.pre,{children:n(e.code,{children:`gallery.example.com
`})}),`
`,n(e.p,{children:"Keep the file in the publishing source. A build that replaces the publishing directory can remove it. This is an easy failure to miss."}),`
`,i(e.p,{children:["This rule does not apply to a custom GitHub Actions workflow. In that mode, GitHub ignores ",n(e.code,{children:"CNAME"})," and does not require it."]}),`
`,i(e.h2,{id:"add-the-cloudflare-dns-record",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-the-cloudflare-dns-record",children:n(e.span,{className:"icon icon-link"})}),"Add the Cloudflare DNS record"]}),`
`,n(e.p,{children:"Create this record in the Cloudflare DNS zone:"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Type"}),n(e.th,{children:"Name"}),n(e.th,{children:"Target"}),n(e.th,{children:"Proxy status"})]})}),n(e.tbody,{children:i(e.tr,{children:[n(e.td,{children:"CNAME"}),n(e.td,{children:"gallery"}),n(e.td,{children:n(e.code,{children:"USERNAME.github.io"})}),n(e.td,{children:"DNS only"})]})})]}),`
`,i(e.p,{children:["Replace ",n(e.code,{children:"USERNAME"})," with the GitHub account or organization name. Do not add the repository name to the target. For example, a project at ",n(e.code,{children:"USERNAME.github.io/project-name"})," still uses ",n(e.code,{children:"USERNAME.github.io"})," as the CNAME target."]}),`
`,n(e.p,{children:"This example keeps the record DNS-only during setup. GitHub documents CNAME validation, while Cloudflare returns its own addresses for proxied records. Cloudflare gives general proxy guidance for web-serving CNAME records, but it does not give GitHub Pages-specific proxy guidance."}),`
`,n(e.p,{children:"Do not treat a proxy change as a DNS toggle. It changes the request path. Test certificate renewal, redirects, and cache behavior after the change."}),`
`,i(e.h2,{id:"verify-the-record",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verify-the-record",children:n(e.span,{className:"icon icon-link"})}),"Verify the record"]}),`
`,n(e.p,{children:"Check the CNAME record before you change any other setting:"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-sh",children:`dig gallery.example.com +noall +answer -t CNAME
`})}),`
`,i(e.p,{children:["The response should show ",n(e.code,{children:"gallery.example.com"})," as a CNAME for ",n(e.code,{children:"USERNAME.github.io"}),"."]}),`
`,n(e.p,{children:"DNS changes can take up to 24 hours. Do not wait and change records at random. Check the record again if GitHub cannot validate the domain."}),`
`,i(e.h2,{id:"enable-https",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enable-https",children:n(e.span,{className:"icon icon-link"})}),"Enable HTTPS"]}),`
`,i(e.p,{children:["Return to ",n(e.strong,{children:"Settings > Pages"})," after GitHub validates the domain. Enable ",n(e.strong,{children:"Enforce HTTPS"})," when the control becomes available."]}),`
`,n(e.p,{children:"GitHub can take up to 24 hours to make this control available. Do not add an HTTPS redirect rule until the GitHub Pages certificate is active."}),`
`,i(e.h2,{id:"avoid-wildcard-dns-records",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#avoid-wildcard-dns-records",children:n(e.span,{className:"icon icon-link"})}),"Avoid wildcard DNS records"]}),`
`,i(e.p,{children:["Do not use a wildcard DNS record such as ",n(e.code,{children:"*.example.com"})," for GitHub Pages. GitHub warns that wildcard records can expose unclaimed subdomains to takeover."]}),`
`,i(e.h2,{id:"deployment-checks",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deployment-checks",children:n(e.span,{className:"icon icon-link"})}),"Deployment checks"]}),`
`,n(e.p,{children:"Use these checks after each deployment. They catch most configuration drift:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Confirm that the custom domain remains set in ",n(e.strong,{children:"Settings > Pages"}),"."]}),`
`,i(e.li,{children:["For branch publishing, confirm that the publishing source still contains ",n(e.code,{children:"CNAME"}),"."]}),`
`,i(e.li,{children:["Confirm that the CNAME target is ",n(e.code,{children:"USERNAME.github.io"}),"."]}),`
`,n(e.li,{children:"Confirm that HTTPS is enabled before you require HTTPS-only asset URLs."}),`
`]}),`
`,i(e.h2,{id:"references",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:n(e.span,{className:"icon icon-link"})}),"References"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site",children:"GitHub Pages custom domains"})}),`
`,n(e.li,{children:n(e.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages",children:"GitHub Pages domain verification"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developers.cloudflare.com/dns/proxy-status/",children:"Cloudflare proxy status"})}),`
`]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,{...r,children:n(t,{...r})}):t(r)}export{d as default};
