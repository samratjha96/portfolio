---
name: write-blog-post
description: Write, revise, retitle or audit a post for Samrat's blog on samratjha.com (src/blog/posts/*.mdx). Use for any blog drafting or editing, whatever the topic or post type. Covers how to choose what goes in, how each post type is shaped, Samrat's voice at the sentence level, the AI-slop patterns he rejects, sourcing, titles, and the MDX mechanics of this site.
---

# Write a blog post

## Who this is for

Samrat writes this blog to share what he learned while building, configuring or thinking through something. The reader is an engineer who landed here from search or a link. They want two things: the insight, and confidence that the person telling them actually did the work. They will leave the moment the post reads like filler, a changelog, or generated text.

So every post should do three things:

1. Teach something the reader can reuse.
2. Sound like one specific person talking.
3. Be correct.

When this skill conflicts with a general writing skill, this one wins for blog posts. In particular, don't walk through methodology for its own sake, and don't hedge conclusions the evidence supports.

## Before drafting

Settle these, and ask Samrat about any that aren't obvious from the request:

- **The takeaway.** In one sentence, what should the reader know or be able to do after reading? If you can't say it, you aren't ready to draft.
- **The post type.** See the next section. It decides the shape.
- **The two or three ideas worth a section.** Most material won't make the cut. That's the point of choosing.
- **Samrat's stance.** What does he think about it? Posts carry an opinion, even a how-to ("Leave the TXT record where it is. It's tempting to clean it up. Don't.").

Read one or two existing posts of the same type in `src/blog/posts/` to match the register.

## Post types and their shapes

**How-to** (e.g. `github-pages-cloudflare-subdomain`, `cloudflare-zero-trust-homelab`, `spa-routing-hostinger`):

- Open with the situation the reader is in and what the post gets them.
- State assumptions early ("This assumes the project publishes from a branch and Cloudflare runs your DNS").
- Steps in order, one H2 per stage, imperative voice.
- Flag the step people get wrong at the point they would get it wrong, and say why it matters.
- End on cost, gotchas or reference links. No summary.

**Tool or config walkthrough** (e.g. `tmux-config`, `lighthouse-ai-workflow`):

- One H2 per setting or decision.
- For each one, give what it is, what the default gets wrong, what Samrat does instead, and the tradeoff.
- Gotchas go in short H3s at the end ("Scores wobble", "Mobile is the default").

**Personal system or story** (e.g. `how-i-finally-organized-my-notes`):

- Open on the before state, in concrete detail.
- Show the turn, then the system as it actually is, with real examples from Samrat's life.
- His notes and anecdotes are his. Don't fact-check or sanitize them.

**Build or technical deep dive** (e.g. `recreating-the-claude-dev-blog`):

- Open on what caught his attention.
- Give a brief account of how he got at it, only if the process is itself interesting.
- One H2 per technique worth stealing.
- Then the problems he hit that apply to any project.
- End on what it means.

**Opinion or analysis** (e.g. `enterprise-ai-roi`):

- Lead with the claim and the evidence that prompted it.
- Each H2 is one argument, backed by a sourced case or number.
- Concede where the claim doesn't hold.
- End with the practical implication. Close with a `Sources:` line.

## Choosing what goes in

**Teach findings, not methodology.** The reader wants what Samrat learned, not the steps he took to learn it. Tool names, script counts and the order he tried things only belong if the reader needs them to act. Samrat cut a whole methods section once: "Why does the user need to know we used Puppeteer or the exact steps. We should teach them what we learned while doing it." A short process section is fine when the process is the surprising part, as long as it stays a paragraph or a short list.

**Apply the senior-engineer test to every detail.** Would an experienced engineer learn something from it, or care? If not, cut it. Exact values, file-by-file changes and config diffs fail this test unless the value itself is the lesson. Samrat on a paragraph of exact `clamp()` values: "Would a senior web dev engineer really care about stuff like that? ... Call out any clever techniques but don't make it a boring read off of the contents of the change."

**Don't present basics as insight.** If any competent practitioner already does it, it isn't a finding. Samrat on a line praising smaller headings: "Isn't that basic? Why call it out." Spend words on judgment calls, non-obvious mechanisms and things that went wrong.

**Generalize.** A bug or decision that only matters in this repo becomes worth including when you can state the general lesson it teaches. Lead with the general lesson, then use the specific case as the example.

**Numbers make a point or go.** A metric belongs in the post only if the prose draws a conclusion from it. After the number, say what it means. Prefer one table for a real before/after comparison over numbers scattered through paragraphs.

## Explaining a technique

When a section teaches how something works, follow this order:

1. **The problem**, in a sentence the reader recognizes from their own work ("you can't transition `height` to `auto`").
2. **The obvious approach and why it falls short.** This is what makes the technique feel earned.
3. **The technique**, in the smallest snippet that shows it. Five lines beats fifty.
4. **Why it works.** Explain the mechanism, not just the result.
5. **The subtle part.** Cover the edge case, the line that looks optional but isn't, or the condition under which it breaks.
6. **When not to use it**, if there's a real answer.

If you chose something over the standard answer, say so and defend it. Readers will raise the objection anyway ("The obvious objection is 'use IntersectionObserver.' I didn't, on purpose.").

## Openings

Open on something concrete: a frustration, a moment, a before state, or a plain statement of the problem. Never open on a thesis about the industry or a definition.

Samrat's openings that work:

- "Running Lighthouse is easy. Reading what it gives back is the chore."
- "My `~/.tmux.conf` grew one frustration at a time."
- "I used to have notes everywhere."
- "A GitHub Pages project gets a URL like `USERNAME.github.io/project-name`, which is fine until you want to hand it to someone."

Within the first few paragraphs, the reader should know what the post covers and why it's worth their time. Show polish through specific detail, not adjectives. Samrat called an intro full of tidy generalities "slop. It doesn't show polish and great writing".

## Voice

**Write how Samrat talks.** Read each sentence and ask whether he would say it out loud to a colleague. If not, rewrite it. Writerly lines that perform insight fail this test. He rejected these with "Nobody talks like that":

- "So I stopped reading the page and started measuring it, with three throwaway headless Puppeteer scripts."
- "None of that tells you what happens when you scroll, and scrolling is where all the interesting stuff is."

**First person, plain opinions.** Use "I", and state opinions flatly:

- "I don't know why this isn't the default."
- "Highly recommend it."
- "My favorite part is that it doesn't care what the app is."

**Admit things.** First reactions, mistakes and limits build trust:

- "My first reaction was that 100 couldn't possibly be enough. It felt almost insulting."
- "I've still watched it choke on really bloated reports."

**Light, dry humor, sparingly:** "Network conditions, server load, the phase of the moon." "A graveyard of markdown files in folders called 'misc'." Never force a joke into every section.

**Talk to the reader when it's honest.** Self-aware asides about the post or the reader's situation work well:

- "This post is about itself. If you're on a wide screen, watch the rail while you read."
- "I'll use `gallery.example.com` throughout; swap in your own."

**Keep tradeoffs inline.** Put the cost right after the choice. The tmux post moves the prefix to `C-a`, then says right away that it conflicts with the shell's go-to-start-of-line shortcut and what Samrat does about it. Don't collect them in a "Considerations" section.

**Name the thing that bites:** "This tiny file is the thing that bites." Then explain exactly how it bites.

## Patterns Samrat rejects

Fix every instance across the whole post, not only the line he quoted.

**Colon reveals.** A setup phrase, a colon, then the payoff.
- Bad: "The rule I settled on: the active section is the last heading above the line."
- Good: "I settled on a heuristic where the active section is the last heading above the line."
- Also bad: "The catch:", "The fix:", "The problem:", "The best part:". Some older posts still have these; don't copy them.
- Colons are fine for lists, labels and quotes. Check the frontmatter `description` too.

**Declaring.** Announcing that you have a rule, a principle or a lesson instead of just stating it.
- Bad: "Here's the principle: ship small."
- Good: "Small changes are easier to roll back, so I ship them."

**Writerly setups and fake profundity.** These are lines that sound like a newsletter or a TED talk: "And that changes everything." "It turns out the answer was hiding in plain sight." "That's the whole trick." Cut them, or replace them with the concrete fact they were dressing up.

**Faux-insight framing.** "What most people miss is...", "Here's what nobody tells you." State the point. If it's insightful, the reader will notice.

**Recaps and kicker endings.** No "In short", "Ultimately" or "At the end of the day". Don't close a section on a one-line aphorism. End on the last concrete point.

**Hedging and puffery.** No "arguably", "it could be said", "game changer", "powerful", "seamless", "robust". Either the claim is true and gets stated, or it's uncertain and you say exactly what's unknown.

**Em dashes.** Never. Use a period, a comma or parentheses.

**Rhythm tics.** Watch for stacks of three-word fragments, every paragraph ending on a punchline, "Not X. Not Y. Z." constructions, and identical paragraph shapes back to back.

Also run the `no-ai-slop` skill's pattern list over the draft.

## Formatting

- **Paragraphs:** short, usually two to four sentences.
- **Headings:** sentence case and short. H2 for each main idea. H3 only for real subsections under an H2. Both appear in the table-of-contents rail, so they must make sense out of context.
- **Lists:** use them for things that really are parallel, such as steps, options or gotchas. Arguments and explanations go in prose.
- **Code:** use the smallest snippet that carries the idea, with the language tag. Say what it does before or after it, not both.
- **Tables:** only for comparisons with two or more dimensions.
- **Bold:** for UI labels in how-tos (**Settings > Pages**). Otherwise rarely.
- **Images:** only when a diagram or screenshot explains something prose can't.

## Endings

Match the ending to the type:

- **How-to:** the cost, the last gotcha, or reference links.
- **Walkthrough:** an invitation to adapt it ("It's a prompt template, so bend it however you like").
- **Deep dive or opinion:** one earned point that ties back to Samrat's stance. It can get its own short section with a plain one-word heading.

When Samrat gives his own framing for the ending, use it nearly word for word. He knows what he means. Don't summarize the post, end on a slogan, or close with optimism about the future.

## Titles and descriptions

**Title:** say what the post is about plus its angle, plainly. Good examples:

- "How I Finally Organized My Notes"
- "My tmux Config, Explained"
- "The AI ROI Gap Is a Definition-of-Done Problem"

No puns, wordplay or clever reframes. Samrat rejected "Taking Apart the claude.dev Blog, From Inside the Copy" and asked for the plain subject plus the point instead.

**Description:** one or two plain sentences, roughly 120 to 160 characters. Name the concrete payoff. It's the search snippet, so it must make sense on its own. Example: "A GitHub Pages project on a Cloudflare subdomain. The setup order that matters, the CNAME file that quietly vanishes, and why I leave the proxy off."

**Slug:** the slug is the filename. Keep it short and descriptive. If a title change makes the slug misleading, rename the file and update any links to it.

## Facts, sources and honesty

- **Verify every outside fact** against a primary source before it goes in: vendor docs, the paper, the ruling, the report. This covers statistics, limits, prices, quotes and named incidents.
- **Never use an unsourced anecdote** ("companies have had agents give away 50% discounts"), even when it illustrates a true point. Replace it with a real, sourced case that makes the same point. If none exists, drop the point.
- **Limits and prices drift.** Check the current docs, and name the tier or version.
- **Mark what you didn't test.** Separate what Samrat observed, what the docs say, and what is an estimate.
- **Don't fact-check Samrat's personal notes, memories or experiences.** "No need to fact check petra thing. That's just my notes."
- **Cite sources at the end.** Posts that rely on outside sources end with a `---` rule, then a `Sources:` line with ` · ` between entries, linked where possible. How-tos can instead end with a short list of the docs they used.

## Links

- Link named products, sites and docs the reader might want to open. Put each link at the mention where the reader needs it, and link each thing only once.
- When the post refers to another page on this site, make it a real link (`[my tmux config post](/blog/tmux-config/)`), not a path in backticks.
- Internal links use trailing slashes (`/blog/slug/`). Absolute links to this site use `https://www.samratjha.com/...` with a trailing slash.

## MDX mechanics

- Posts live at `src/blog/posts/<slug>.mdx` and are picked up automatically. The sitemap and `public/llms.txt` regenerate at build.
- Frontmatter:

  ```yaml
  ---
  title: Plain Title With Its Angle
  date: YYYY-MM-DD
  description: One or two plain sentences, about 150 characters.
  tags: ["tag-one", "tag-two"]
  ---
  ```

  Tags feed meta keywords and the blog list's tag chip. Keep them lowercase and few, and reuse tags from existing posts where they fit.
- Don't put an H1 in the body; the page renders the title. Headings inside code fences don't reach the table of contents.
- Images go in `src/assets/optimized/` as WebP. Import them at the top of the MDX file, and give the `<img>` `alt`, `width`, `height` and `loading="lazy"`.

## Process

1. Settle the takeaway, the type, the sections and the stance (see "Before drafting").
2. Outline the H2s. Check that each one teaches something and that together they deliver the takeaway.
3. Draft.
4. Verify every outside fact. Fix or replace whatever doesn't hold.
5. Revise in this order:
   - **Cut:** methodology, changelog detail and basics.
   - **Voice:** read each sentence aloud and run the rejected patterns.
   - **Formatting.**
   - **Title and description.**
6. Build and look at the result. Run `npm run build` and `npm run preview`, then open the post at desktop and phone widths. Check that the table-of-contents rail reads well, links resolve, code blocks fit and images load.
7. Show Samrat the draft. When he corrects one line, find every line in the post with the same problem and fix them all.

## Final check

- [ ] The takeaway is clear by the end of the intro.
- [ ] The intro opens on something concrete, not a thesis.
- [ ] Every section teaches something a senior engineer would care about. Nothing reads like a changelog or a methods section.
- [ ] Every technique explains why it works and its subtle part.
- [ ] The post states Samrat's opinion plainly, with tradeoffs inline.
- [ ] There are no colon reveals, declarations, writerly setups, recaps, kickers, hedges or em dashes, in the description too.
- [ ] Every outside fact is verified and cited. Personal notes are left alone.
- [ ] Links sit at the right mention, with trailing slashes and www.
- [ ] The title is the plain subject plus its angle. The description stands on its own.
- [ ] The post was built and viewed on the production preview at desktop and phone widths.
