import{b as n,j as s,k as t}from"./three-419d062b.js";function l(a){const e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...a.components};return s(t,{children:[n(e.p,{children:"I got tired of running Lighthouse, squinting at the JSON output, and manually figuring out what actually matters. So I set up a slash command in Claude Code that runs the audit and tells me what to fix. Took about 5 minutes to set up, saves me 20+ minutes every time I check performance."}),`
`,s(e.h2,{id:"the-manual-way",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-manual-way",children:n(e.span,{className:"icon icon-link"})}),"The Manual Way"]}),`
`,n(e.p,{children:"If you've never used Lighthouse from the command line:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[`npx lighthouse https://yoursite.com \\
  --output=json \\
  --output-path=/tmp/lighthouse-report.json \\
  --chrome-flags=`,n(e.span,{className:"hljs-string",children:'"--headless"'}),` \\
  --only-categories=performance
`]})}),`
`,s(e.p,{children:["This dumps a ~500KB JSON blob. You can open it in Chrome DevTools or pipe it through ",n(e.code,{children:"jq"})," to extract what you care about:"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"cat"})," /tmp/lighthouse-report.json | jq ",n(e.span,{className:"hljs-string",children:`'{
  score: (.categories.performance.score * 100),
  lcp: .audits["largest-contentful-paint"].displayValue,
  cls: .audits["cumulative-layout-shift"].displayValue,
  tbt: .audits["total-blocking-time"].displayValue
}'`}),`
`]})}),`
`,n(e.p,{children:"Output:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-json",children:[n(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(e.span,{className:"hljs-attr",children:'"score"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-number",children:"55"}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"lcp"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"58.1 s"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"cls"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"0"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"tbt"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"0 ms"'}),`
`,n(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,s(e.p,{children:["That 58 second LCP is... not great. But now I have to dig through the full report to figure out ",n(e.em,{children:"why"}),", and that's where I usually give up and go do something else."]}),`
`,s(e.h2,{id:"the-slash-command",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-slash-command",children:n(e.span,{className:"icon icon-link"})}),"The Slash Command"]}),`
`,s(e.p,{children:["Create a file at ",n(e.code,{children:".claude/commands/analyze-website-performance.md"}),":"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-markdown",children:[n(e.span,{className:"hljs-section",children:"# Website Performance Analysis"}),`

Analyze the performance of `,n(e.span,{className:"hljs-code",children:"`$ARGUMENTS`"}),` using Google Lighthouse.

`,n(e.span,{className:"hljs-section",children:"## Steps"}),`

`,n(e.span,{className:"hljs-bullet",children:"1."})," ",n(e.span,{className:"hljs-strong",children:"**Run Lighthouse audit**"}),`:

   `,n(e.span,{className:"hljs-code",children:'```bash\n   npx lighthouse $ARGUMENTS --output=json --output-path=/tmp/lighthouse-report.json --chrome-flags="--headless" --only-categories=performance\n   ```'}),`

`,n(e.span,{className:"hljs-bullet",children:"2."})," ",n(e.span,{className:"hljs-strong",children:"**Read the report**"})," from ",n(e.span,{className:"hljs-code",children:"`/tmp/lighthouse-report.json`"}),`

`,n(e.span,{className:"hljs-bullet",children:"3."})," ",n(e.span,{className:"hljs-strong",children:"**Analyze and summarize**"}),`:
`,n(e.span,{className:"hljs-bullet",children:"   -"}),` Current performance score
`,n(e.span,{className:"hljs-bullet",children:"   -"}),` Each failing audit with its impact
`,n(e.span,{className:"hljs-bullet",children:"   -"}),` Specific fixes for each issue
`,n(e.span,{className:"hljs-bullet",children:"   -"}),` Estimated score improvement from each fix

`,n(e.span,{className:"hljs-section",children:"## Output Format"}),`

`,n(e.span,{className:"hljs-section",children:"### Performance Score: X/100"}),`

`,n(e.span,{className:"hljs-section",children:"### Critical Issues (blocking 95+ score)"}),`

For each issue:

`,n(e.span,{className:"hljs-bullet",children:"-"})," ",n(e.span,{className:"hljs-strong",children:"**What**"}),`: The specific problem
`,n(e.span,{className:"hljs-bullet",children:"-"})," ",n(e.span,{className:"hljs-strong",children:"**Impact**"}),`: How many points this costs
`,n(e.span,{className:"hljs-bullet",children:"-"})," ",n(e.span,{className:"hljs-strong",children:"**Fix**"}),`: Exact steps to resolve

`,n(e.span,{className:"hljs-section",children:"## Constraints"}),`

`,n(e.span,{className:"hljs-strong",children:"**Do not recommend changes that would:**"}),`

`,n(e.span,{className:"hljs-bullet",children:"-"}),` Alter the DOM structure significantly
`,n(e.span,{className:"hljs-bullet",children:"-"}),` Change the visual design
`,n(e.span,{className:"hljs-bullet",children:"-"}),` Remove features or content

`,n(e.span,{className:"hljs-strong",children:"**Focus only on:**"}),`

`,n(e.span,{className:"hljs-bullet",children:"-"}),` Asset optimization (compression, formats, sizing)
`,n(e.span,{className:"hljs-bullet",children:"-"}),` Loading strategies (defer, async, preload, lazy loading)
`,n(e.span,{className:"hljs-bullet",children:"-"}),` Caching and delivery
`,n(e.span,{className:"hljs-bullet",children:"-"}),` Code efficiency (tree-shaking, code splitting)
`]})}),`
`,n(e.p,{children:"Now run it:"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-bash",children:`claude
> /analyze-website-performance https://samratjha.com
`})}),`
`,s(e.h2,{id:"what-comes-back",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-comes-back",children:n(e.span,{className:"icon icon-link"})}),"What Comes Back"]}),`
`,n(e.p,{children:"Instead of a wall of JSON, you get something like:"}),`
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
`,n(e.p,{children:"It cross-references the image dimensions in the DOM against the actual file sizes. My 8.87 MB PNG was being displayed at 431×230 pixels. The source image was 2657×1890. I definitely would've missed that scrolling through raw JSON."}),`
`,s(e.h2,{id:"the-difference",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-difference",children:n(e.span,{className:"icon icon-link"})}),"The Difference"]}),`
`,s(e.p,{children:["Lighthouse tells you ",n(e.em,{children:"what's wrong"}),". This tells you ",n(e.em,{children:"what to do about it"}),"."]}),`
`,n(e.p,{children:"Raw Lighthouse output:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-json",children:[n(e.span,{className:"hljs-punctuation",children:"{"}),`
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
`,n(e.p,{children:`One tells me there's a problem. The other tells me exactly which file, what size it should be, and what format to use. That's the difference between "I should optimize images" and actually doing it.`}),`
`,s(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,n(e.p,{children:n(e.strong,{children:"Chrome needs to be installed"})}),`
`,n(e.p,{children:"Lighthouse spawns a headless Chrome instance. If you're on a server without Chrome, this won't work. Use the PageSpeed Insights API instead (I haven't bothered setting that up)."}),`
`,n(e.p,{children:n(e.strong,{children:"The JSON is huge"})}),`
`,n(e.p,{children:"~500KB for a single page. If you're reading the file directly in Claude, you might hit context limits on complex pages. The slash command handles this by having Claude extract only the relevant parts, but I've still had it choke on really bloated reports."}),`
`,n(e.p,{children:n(e.strong,{children:"Scores vary between runs"})}),`
`,n(e.p,{children:"Network conditions, server load, whatever. I've seen ±5 points between consecutive runs. Don't obsess over small score differences."}),`
`,n(e.p,{children:n(e.strong,{children:"Mobile vs Desktop"})}),`
`,s(e.p,{children:["Default is mobile throttling. Add ",n(e.code,{children:"--preset=desktop"})," if you want desktop scores. Mobile is usually worse, which is why it's the default."]}),`
`,s(e.p,{children:["You can also add more categories (",n(e.code,{children:"--only-categories=performance,accessibility,best-practices,seo"}),") or run multiple URLs. The slash command is just a prompt template, so modify it for whatever you need."]})]})}function c(a={}){const{wrapper:e}=a.components||{};return e?n(e,{...a,children:n(l,{...a})}):l(a)}export{c as default};
