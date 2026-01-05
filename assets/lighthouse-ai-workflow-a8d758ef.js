import{b as n,j as a,F as l}from"./three-3c324390.js";function i(s){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return a(l,{children:[n(e.p,{children:"I got tired of running Lighthouse, squinting at the JSON output, and manually figuring out what actually matters. So I set up a slash command in Claude Code that runs the audit and tells me what to fix. Took 5 minutes to set up, saves me 20+ minutes every time I need to check performance."}),`
`,a(e.h2,{id:"running-lighthouse-manually",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#running-lighthouse-manually",children:n(e.span,{className:"icon icon-link"})}),"Running Lighthouse Manually"]}),`
`,n(e.p,{children:"If you've never used Lighthouse from the command line:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-bash",children:[`npx lighthouse https://yoursite.com \\
  --output=json \\
  --output-path=/tmp/lighthouse-report.json \\
  --chrome-flags=`,n(e.span,{className:"hljs-string",children:'"--headless"'}),` \\
  --only-categories=performance
`]})}),`
`,a(e.p,{children:["This dumps a ~500KB JSON blob. You can open it in Chrome DevTools or pipe it through ",n(e.code,{children:"jq"})," to extract what you care about:"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"cat"})," /tmp/lighthouse-report.json | jq ",n(e.span,{className:"hljs-string",children:`'{
  score: (.categories.performance.score * 100),
  lcp: .audits["largest-contentful-paint"].displayValue,
  cls: .audits["cumulative-layout-shift"].displayValue,
  tbt: .audits["total-blocking-time"].displayValue
}'`}),`
`]})}),`
`,n(e.p,{children:"Output:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-json",children:[n(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(e.span,{className:"hljs-attr",children:'"score"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-number",children:"55"}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"lcp"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"58.1 s"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"cls"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"0"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"tbt"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"0 ms"'}),`
`,n(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(e.p,{children:"That 58 second LCP is... not great. But now I have to dig through the report to figure out why."}),`
`,a(e.h2,{id:"the-claude-code-approach",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-claude-code-approach",children:n(e.span,{className:"icon icon-link"})}),"The Claude Code Approach"]}),`
`,a(e.p,{children:["Create a file at ",n(e.code,{children:".claude/commands/analyze-website-performance.md"}),":"]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-markdown",children:[n(e.span,{className:"hljs-section",children:"# Website Performance Analysis"}),`

Analyze the performance of `,n(e.span,{className:"hljs-code",children:"`$ARGUMENTS`"}),` using Google Lighthouse.

`,n(e.span,{className:"hljs-section",children:"## Steps"}),`

`,n(e.span,{className:"hljs-bullet",children:"1."})," ",n(e.span,{className:"hljs-strong",children:"**Run Lighthouse audit**"}),`:
   `,n(e.span,{className:"hljs-code",children:'```bash\n   npx lighthouse $ARGUMENTS --output=json --output-path=/tmp/lighthouse-report.json --chrome-flags="--headless" --only-categories=performance\n'})]})}),`
`,a(e.ol,{start:"2",children:[`
`,a(e.li,{children:[`
`,a(e.p,{children:[n(e.strong,{children:"Read the report"})," from ",n(e.code,{children:"/tmp/lighthouse-report.json"})]}),`
`]}),`
`,a(e.li,{children:[`
`,a(e.p,{children:[n(e.strong,{children:"Analyze and summarize"}),":"]}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Current performance score"}),`
`,n(e.li,{children:"Each failing audit with its impact"}),`
`,n(e.li,{children:"Specific fixes for each issue"}),`
`,n(e.li,{children:"Estimated score improvement from each fix"}),`
`]}),`
`]}),`
`]}),`
`,a(e.h2,{id:"output-format",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#output-format",children:n(e.span,{className:"icon icon-link"})}),"Output Format"]}),`
`,a(e.h3,{id:"performance-score-x100",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performance-score-x100",children:n(e.span,{className:"icon icon-link"})}),"Performance Score: X/100"]}),`
`,a(e.h3,{id:"critical-issues-blocking-95-score",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#critical-issues-blocking-95-score",children:n(e.span,{className:"icon icon-link"})}),"Critical Issues (blocking 95+ score)"]}),`
`,n(e.p,{children:"For each issue:"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[n(e.strong,{children:"What"}),": The specific problem"]}),`
`,a(e.li,{children:[n(e.strong,{children:"Impact"}),": How many points this costs"]}),`
`,a(e.li,{children:[n(e.strong,{children:"Fix"}),": Exact steps to resolve"]}),`
`]}),`
`,a(e.h2,{id:"constraints",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constraints",children:n(e.span,{className:"icon icon-link"})}),"Constraints"]}),`
`,n(e.p,{children:n(e.strong,{children:"Do not recommend changes that would:"})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Alter the DOM structure significantly"}),`
`,n(e.li,{children:"Change the visual design"}),`
`,n(e.li,{children:"Remove features or content"}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Focus only on:"})}),`
`,a(e.ul,{children:[`
`,n(e.li,{children:"Asset optimization (compression, formats, sizing)"}),`
`,n(e.li,{children:"Loading strategies (defer, async, preload, lazy loading)"}),`
`,n(e.li,{children:"Caching and delivery"}),`
`,n(e.li,{children:"Code efficiency (tree-shaking, code splitting)"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`
Now run it:

\`\`\`bash
claude
> /analyze-website-performance https://samratjha.com
`})}),`
`,a(e.h2,{id:"what-you-get-back",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-you-get-back",children:n(e.span,{className:"icon icon-link"})}),"What You Get Back"]}),`
`,n(e.p,{children:"Instead of a wall of JSON, Claude reads through everything and gives you:"}),`
`,n(e.pre,{children:n(e.code,{children:`## Performance Score: 55/100

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
`})}),`
`,n(e.p,{children:"It cross-references the image dimensions in the DOM against the actual file sizes. My 8.87 MB PNG was being displayed at 431×230 pixels—a 2657×1890 source image squished down. I would've missed that scrolling through raw JSON."}),`
`,a(e.h2,{id:"why-bother",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-bother",children:n(e.span,{className:"icon icon-link"})}),"Why Bother"]}),`
`,a(e.p,{children:["Lighthouse tells you ",n(e.em,{children:"what's wrong"}),". This tells you ",n(e.em,{children:"what to do about it"}),"."]}),`
`,n(e.p,{children:"Raw Lighthouse output:"}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-json",children:[n(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(e.span,{className:"hljs-attr",children:'"id"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"image-delivery-insight"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"score"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-number",children:"0"}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"displayValue"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"Est savings of 15,654 KiB"'}),`
`,n(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(e.p,{children:"What Claude gives you:"}),`
`,n(e.pre,{children:n(e.code,{children:`ParallaxImageGallery.png:
- Current: 2657×1890 PNG (8.87 MB)
- Displayed: 431×230 px
- Target: 862×460 WebP (~50-100 KB)
- Savings: 8.86 MB (99% reduction)
`})}),`
`,n(e.p,{children:"One tells me there's a problem. The other tells me exactly which file, what size it should be, and what format to use."}),`
`,a(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,n(e.p,{children:n(e.strong,{children:"Chrome needs to be installed"})}),`
`,n(e.p,{children:"Lighthouse spawns a headless Chrome instance. If you're on a server without Chrome, this won't work. Use the PageSpeed Insights API instead."}),`
`,n(e.p,{children:n(e.strong,{children:"The JSON is huge"})}),`
`,n(e.p,{children:"~500KB for a single page. If you're reading the file directly in Claude, you'll hit context limits on complex pages. The slash command handles this by extracting only the relevant parts."}),`
`,n(e.p,{children:n(e.strong,{children:"Scores vary between runs"})}),`
`,n(e.p,{children:"Network conditions, server load, whatever. I've seen ±5 points between consecutive runs. Don't obsess over small differences."}),`
`,n(e.p,{children:n(e.strong,{children:"Mobile vs Desktop"})}),`
`,a(e.p,{children:["Default is mobile throttling. Add ",n(e.code,{children:"--preset=desktop"})," if you want desktop scores. Mobile is usually worse, which is why it's the default."]}),`
`,a(e.h2,{id:"expanding-the-command",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#expanding-the-command",children:n(e.span,{className:"icon icon-link"})}),"Expanding the Command"]}),`
`,n(e.p,{children:"You can add more categories:"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-bash",children:`--only-categories=performance,accessibility,best-practices,seo
`})}),`
`,n(e.p,{children:"Or run multiple URLs and compare. The slash command is just a prompt template—customize it for whatever workflow you need."}),`
`,n(e.hr,{}),`
`,a(e.p,{children:["The command file: ",n(e.a,{href:"https://github.com/samratjha96/portfolio/blob/main/.claude/commands/analyze-website-performance.md",children:".claude/commands/analyze-website-performance.md"})]})]})}function t(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(i,{...s})}):i(s)}export{t as default};
