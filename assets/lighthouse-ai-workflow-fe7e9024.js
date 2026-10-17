import{b as n,j as s,F as t}from"./three-92ffd73b.js";const h=[{id:"doing-it-by-hand",text:"Doing it by hand",depth:2},{id:"the-slash-command",text:"The slash command",depth:2},{id:"what-comes-back",text:"What comes back",depth:2},{id:"why-bother-with-the-middleman",text:"Why bother with the middleman",depth:2},{id:"gotchas",text:"Gotchas",depth:2},{id:"you-need-chrome",text:"You need Chrome",depth:3},{id:"the-json-is-huge",text:"The JSON is huge",depth:3},{id:"scores-wobble",text:"Scores wobble",depth:3},{id:"mobile-is-the-default",text:"Mobile is the default",depth:3}];function l(a){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...a.components};return s(t,{children:[n(e.p,{children:"Running Lighthouse is easy. Reading what it gives back is the chore. I'd run the audit, squint at the JSON, try to work out which of forty audits actually mattered, and usually lose interest halfway. So I wrote a Claude Code slash command that runs the audit and reads the report for me. It took about 5 minutes to write and saves me 20+ minutes every time I check performance."}),`
`,s(e.h2,{id:"doing-it-by-hand",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#doing-it-by-hand",children:n(e.span,{className:"icon icon-link"})}),"Doing it by hand"]}),`
`,n(e.p,{children:"If you've never run Lighthouse from the command line, it looks like this:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[`npx lighthouse https://yoursite.com \\
  --output=json \\
  --output-path=/tmp/lighthouse-report.json \\
  --chrome-flags=`,n(e.span,{className:"hljs-string",children:'"--headless"'}),` \\
  --only-categories=performance
`]})}),`
`,s(e.p,{children:["That dumps a ~500KB JSON blob. You can open it in Chrome DevTools, or pipe it through ",n(e.code,{children:"jq"})," and pull out the handful of numbers you care about:"]}),`
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
`,s(e.p,{children:["A 58 second LCP. Lovely. The numbers tell me something is badly wrong and nothing about ",n(e.em,{children:"why"}),". Finding out means digging through the full report, which is exactly the point where I used to give up and go do something else."]}),`
`,s(e.h2,{id:"the-slash-command",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-slash-command",children:n(e.span,{className:"icon icon-link"})}),"The slash command"]}),`
`,s(e.p,{children:["Claude Code turns any markdown file in ",n(e.code,{children:".claude/commands/"})," into a slash command, with ",n(e.code,{children:"$ARGUMENTS"})," replaced by whatever you type after it. So the whole tool is one prompt file at ",n(e.code,{children:".claude/commands/analyze-website-performance.md"}),":"]}),`
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
`,n(e.p,{children:"The constraints section is there because ripping out half the page technically counts as a performance fix, and I didn't want that kind of advice. Assets and loading, nothing else."}),`
`,n(e.p,{children:"Then run it:"}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-bash",children:`claude
> /analyze-website-performance https://www.samratjha.com/
`})}),`
`,s(e.h2,{id:"what-comes-back",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-comes-back",children:n(e.span,{className:"icon icon-link"})}),"What comes back"]}),`
`,n(e.p,{children:"An abridged run against my own site, from before I'd optimized anything:"}),`
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
`,n(e.p,{children:"The useful part is that it lines up the image dimensions in the DOM against the actual file sizes. My 8.87 MB PNG was being displayed at 431×230 pixels from a 2657×1890 source. Embarrassing, and I would have scrolled straight past it in the raw JSON."}),`
`,s(e.h2,{id:"why-bother-with-the-middleman",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-bother-with-the-middleman",children:n(e.span,{className:"icon icon-link"})}),"Why bother with the middleman"]}),`
`,n(e.p,{children:"Lighthouse already knows all of this. It just says it in a way that's hard to act on. The raw audit entry for those images:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-json",children:[n(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,n(e.span,{className:"hljs-attr",children:'"id"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"image-delivery-insight"'}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"score"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-number",children:"0"}),n(e.span,{className:"hljs-punctuation",children:","}),`
  `,n(e.span,{className:"hljs-attr",children:'"displayValue"'}),n(e.span,{className:"hljs-punctuation",children:":"})," ",n(e.span,{className:"hljs-string",children:'"Est savings of 15,654 KiB"'}),`
`,n(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,n(e.p,{children:"The same finding, after Claude has read the rest of the report:"}),`
`,n(e.pre,{children:n(e.code,{children:`ParallaxImageGallery.png:
- Current: 2657×1890 PNG (8.87 MB)
- Displayed: 431×230 px
- Target: 862×460 WebP (~50-100 KB)
- Savings: 8.86 MB (99% reduction)
`})}),`
`,n(e.p,{children:`"Est savings of 15,654 KiB" is a fact. A file name, a target size, and a format is a to-do item. I'll put off the first one for weeks. The second one I usually just do.`}),`
`,s(e.h2,{id:"gotchas",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gotchas",children:n(e.span,{className:"icon icon-link"})}),"Gotchas"]}),`
`,s(e.h3,{id:"you-need-chrome",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#you-need-chrome",children:n(e.span,{className:"icon icon-link"})}),"You need Chrome"]}),`
`,n(e.p,{children:"Lighthouse drives a headless Chrome. On a server without Chrome installed, none of this works. The PageSpeed Insights API is the alternative, and I haven't bothered setting it up."}),`
`,s(e.h3,{id:"the-json-is-huge",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-json-is-huge",children:n(e.span,{className:"icon icon-link"})}),"The JSON is huge"]}),`
`,n(e.p,{children:"~500KB for a single page. If Claude reads the file whole, complex pages can blow through the context window. The prompt asks it to pull out only the relevant parts, which mostly works, but I've still watched it choke on really bloated reports."}),`
`,s(e.h3,{id:"scores-wobble",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scores-wobble",children:n(e.span,{className:"icon icon-link"})}),"Scores wobble"]}),`
`,n(e.p,{children:"Network conditions, server load, the phase of the moon. I've seen ±5 points between consecutive runs, so a 3-point drop tells you nothing."}),`
`,s(e.h3,{id:"mobile-is-the-default",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mobile-is-the-default",children:n(e.span,{className:"icon icon-link"})}),"Mobile is the default"]}),`
`,s(e.p,{children:["Lighthouse throttles like a mobile device unless you add ",n(e.code,{children:"--preset=desktop"}),". Mobile is usually the worse of the two numbers."]}),`
`,s(e.p,{children:["You can add more categories (",n(e.code,{children:"--only-categories=performance,accessibility,best-practices,seo"}),") or point it at several URLs. It's a prompt template, so bend it however you like."]})]})}function c(a={}){const{wrapper:e}=a.components||{};return e?n(e,{...a,children:n(l,{...a})}):l(a)}export{c as default,h as toc};
