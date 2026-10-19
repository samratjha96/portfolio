---
name: write-blog-post
description: Write, revise, retitle or audit a post for this site's blog (src/blog/posts/*.mdx). Use for any blog drafting or editing, technical or opinion. Covers choosing what goes in, a technical track and an opinion track with their shapes and techniques, the author's voice, the AI-slop patterns to cut, sourcing, independent verification, titles, and the MDX mechanics of this site.
---

# Write a blog post

## Who this is for

The author writes this blog to share what they learned while building, configuring or thinking through something. The reader is an engineer who landed here from search or a link. They want two things: the insight, and confidence that the person telling them actually did the work. They will leave the moment the post reads like filler, a changelog, or generated text.

So every post should do three things:

1. Teach something the reader can reuse.
2. Sound like one specific person talking.
3. Be correct.

When this skill conflicts with a general writing skill, this one wins for blog posts. In particular, don't walk through methodology for its own sake, and don't hedge conclusions the evidence supports.

Correctness outranks voice. The voice rules below shape how the author's material is said. They never create material: an opinion, admission, motive, experience or action that the author didn't give you and no record shows is a fabrication, however much it sounds like them. That includes work you did while writing: if you ran a measurement, don't write it up as something the author did. Report it to the author and let them decide whether to adopt it.

## Before drafting

Gather the evidence first: the author's brief, the code, commits, notes, docs, and any measurements you take. Then settle these, and ask the author about any that aren't obvious from the request:

- **The track.** Technical (how-to, config walkthrough, deep dive) or opinion (argument, analysis, personal system or story). It decides the shape and the techniques. Read that track's section below.
- **The takeaway.** In one sentence, what should the reader know or be able to do after reading? Derive it from the evidence, not from what would make a good hook. If the evidence only supports a modest takeaway, the post makes the modest one. If you can't say it, you aren't ready to draft.
- **The two or three ideas worth a section.** Most material won't make the cut. That's the point of choosing.
- **The author's stance.** What do they think about it? Posts carry an opinion, even a how-to ("Leave the TXT record where it is. It's tempting to clean it up. Don't."). The opinion has to be the author's. Take it from what they said or wrote; don't infer one from what they built.

If you can't ask (for example, in a headless run), leave out anything only the author can supply, such as their reasons, feelings, regrets or stories, and list those as questions in your handoff. A post with a gap is fixable. A post with an invented admission is a lie in the author's name.

Read one or two existing posts of the same kind in `src/blog/posts/` to match the register.

## Choosing what goes in

These apply to both tracks.

**Teach findings, not methodology.** The reader wants what the author learned, not the steps they took to learn it. Tool names, script counts and the order things were tried only belong if the reader needs them to act. The author once cut a whole methods section with: "Why does the user need to know we used Puppeteer or the exact steps. We should teach them what we learned while doing it." A short process section is fine when the process is the surprising part, as long as it stays a paragraph or a short list.

**Apply the senior-engineer test to every detail.** Would an experienced engineer learn something from it, or care? If not, cut it. Exact values, file-by-file changes and config diffs fail this test unless the value itself is the lesson. The author on a paragraph of exact `clamp()` values: "Would a senior web dev engineer really care about stuff like that? ... Call out any clever techniques but don't make it a boring read off of the contents of the change."

**Don't present basics as insight.** If any competent practitioner already does it, it isn't a finding. The author on a line praising smaller headings: "Isn't that basic? Why call it out." Spend words on judgment calls, non-obvious mechanisms and things that went wrong.

**Generalize.** A bug or decision that only matters in this repo becomes worth including when you can state the general lesson it teaches. Lead with the general lesson, then use the specific case as the example.

**Numbers make a point or go.** A metric belongs in the post only if the prose draws a conclusion from it. After the number, say what it means. Prefer one table for a real before/after comparison over numbers scattered through paragraphs.

**Don't let the source set the outline.** A commit message, PR description or notes file comes with its own list of items, and it will try to become your list of H2s. If the sections map one to one onto the source's items, you've written a changelog. Each item has to earn its place against the takeaway, and that's usually where basics sneak in: they were in the source, so they got a section.

**Sections are lessons, not inventory.** The reader's problem is the spine and this repo is the worked example. Each H2 should state something a reader could apply in their own codebase. If a section can only be described with this repo's file names, it's an example inside a section, not a section. A tour of what the code does, in the order the files are laid out, is documentation; a post explains why each piece is the way it is and what the obvious alternative would have cost.

**Settle questions with work, not disclaimers.** If a point matters and a command, a measurement or a doc can settle it, settle it before it goes in. If it can't be settled and doesn't change the takeaway, cut it. A post with "wasn't measured" and "wasn't checked" scattered through it reads like an audit report, not like someone who knows the subject. State the limits that remain once, where they apply.

**No stated stance doesn't mean no judgment.** When the author hasn't given an opinion, you still make calls the evidence supports: which approach is better and when, what to do first, what a tradeoff is worth. Write those as recommendations to the reader ("Crop to the card's aspect ratio before you resize"), not as the author's feelings. A post that only describes, never judges, is documentation. Feelings, motives and history stay off-limits without a source; conclusions drawn from evidence don't.

**Every result has a cost.** No victory laps. Name what the change cost, what it didn't fix, or what is still broken ("These improvements help a lot, but they don't solve all of our problems," from Discord's post on storing trillions of messages).

## Technical track

For how-tos, tool and config walkthroughs, and technical deep dives. The best engineering posts (Discord, Cloudflare, Stripe, Netflix, Figma, Fly.io, Julia Evans, Dan Luu, Martin Kleppmann) share these habits.

**Open on the concrete problem.** A symptom, a number, or the reader's situation, never background. "You log in to a Linux server with a performance issue: what do you check in the first minute?" (Netflix). "In 2017, we ran 12 Cassandra nodes, storing billions of messages." (Discord). Then state the verdict or what the post gets the reader within the first few paragraphs.

**Order the explanation the way the system runs.** Follow the request path, the data flow, the migration phases or the order of the commands, so the reader can map the post onto the real thing. Name the pattern first, then walk one real example through it (Stripe names its four migration steps, then runs Subscriptions through each).

**Wrong turns earn a place only if the reader would make the same guess.** "At first we thought the spikes might indicate..." (Cloudflare) is a finding: it saves the reader the same detour. The order you happened to try tools in is methodology; cut it.

**Show the real artifact, then read it.** Real command output, a profile, a log line or a measured table, followed by one sentence on what to notice. "The above example identifies two java processes as responsible for consuming CPU." (Netflix). Toy examples are a last resort.

**Explain a technique in this order:**

1. **The problem**, in a sentence the reader recognizes from their own work ("you can't transition `height` to `auto`").
2. **The obvious approach and why it falls short.** Name the rejected alternative and the reason: "OTs were unnecessarily complex for our problem space" (Figma).
3. **The technique**, in the smallest snippet that shows it. Five lines beats fifty.
4. **Why it works.** Explain the mechanism, not just the result. A weak "why" beats no "why".
5. **The subtle part.** Cover the edge case, the line that looks optional but isn't, or the condition under which it breaks.
6. **When not to use it**, if there's a real answer. State limits as choices: "This is why simultaneous editing of the same text value doesn't work in Figma."

**Use arithmetic to justify a design.** A back-of-envelope calculation beats an adjective: "over three years to migrate one hundred million objects" (Stripe) is why they built the tooling.

**Shapes:**

- **How-to** (e.g. `github-pages-cloudflare-subdomain`, `cloudflare-zero-trust-homelab`): open with the reader's situation and what the post gets them. State assumptions early ("This assumes the project publishes from a branch and Cloudflare runs your DNS"). One H2 per stage, imperative voice. Flag the step people get wrong at the point they'd get it wrong.
- **Config walkthrough** (e.g. `tmux-config`, `lighthouse-ai-workflow`): one H2 per setting or decision, each with what it is, what the default gets wrong, what the author does instead, and the tradeoff. Gotchas in short H3s at the end.
- **Deep dive** (e.g. `recreating-the-claude-dev-blog`): open on what caught the author's attention. One H2 per technique worth stealing, then the problems that apply to any project.

**Ending:** what the reader can now do, or an honest verdict. "If you made it this far, you should now have enough information to make your own collaborative tree data structure." (Figma). For a how-to, the cost, the last gotcha or reference links also work. Never a summary.

**Titles:** the concrete subject at its real scale ("How Discord stores trillions of messages"), the reader's question ("What happens when you press a key in your terminal?"), or the plain subject plus angle ("My tmux Config, Explained").

## Opinion track

For arguments, analysis, and personal systems or stories. The best essays (Paul Graham, Rich Sutton's "The Bitter Lesson", Joel Spolsky, Dan Luu, Patrick McKenzie, Dan McKinley's "Choose Boring Technology", Charity Majors, Ben Thompson, Simon Willison) share these habits.

**State the claim in the first one to three sentences, in plain words.** "General methods that leverage computation are ultimately the most effective, and by a large margin." (Sutton). Don't make the reader wait for the thesis, and don't raise a bold question only to hedge it away.

**You may open against a common belief, if it's real.** "People think X; actually Y" works when X is specific and attributable: a named decision, a quote, a practice the reader can recognize ("If someone tells you that coding with LLMs is easy they are (probably unintentionally) misleading you"). "What most people miss" with no one in particular behind it is still faux insight.

**Argue with named cases.** The author's own project is one data point, and one data point is an anecdote. Before outlining, research at least two outside cases (a company, an incident, a measurement, a spec limit) that bear on the claim, and verify them. Look for the case that would hurt the argument too; if you find one, it's your steelman. Every claim gets a specific company, incident, person or number, not a generic example. One pattern shown repeating across several unrelated cases is strong evidence (Sutton runs it through chess, Go, speech and vision).

**Steelman, then answer.** Give the opposing view its strongest version, in terms its holders would accept, before rejecting it. "It's hard to argue against that. No one wants their customers to have degraded service!" (Dan Luu). Split a vague objection into its parts and answer each (Spolsky splits "the code is a mess" into architecture, efficiency and ugliness).

**Mark where the claim stops.** Say where it doesn't hold, or push it to an absurd extreme to show the boundary: "Taking this reasoning to its reductio ad absurdum would mean picking Java" (McKinley). Define terms that invite a misreading ("'Boring' should not be conflated with 'bad.'").

**Bound the author's experience.** When personal experience is evidence, say how much there is and where it may not generalize: "It took me about ten years and a lot of suffering"; "You might wonder if I've just worked at places that are unusually screwed up." This only works with experience the author actually reported (see provenance above).

**Name the idea.** Give the core idea a short handle the reader can reuse: "innovation tokens" (McKinley), "Aggregation Theory" (Thompson). Only if the post introduces a real idea.

**One earned reversal is allowed.** A single line like "Management is not a promotion, management is a change of profession" (Majors) can carry the thesis, if the post argues for it. One per post, and only for the thesis. Decorative reversals are still banned (see "Binary contrasts").

**Shapes:**

- **Argument or analysis** (e.g. `enterprise-ai-roi`): claim and the evidence that prompted it, then one H2 per argument backed by a sourced case or number, then the steelmanned objection, then the limits. Close with a `Sources:` line.
- **Personal system or story** (e.g. `how-i-finally-organized-my-notes`): open on the before state in concrete detail, show the turn, then the system as it actually is with real examples from the author's life. The author's notes and anecdotes are theirs; don't fact-check or sanitize them.

**Ending:** widen the frame or state the principle the post earned, not a recap. "Stop thinking of startup ideas as scalars." (Graham). It can get its own short section with a plain heading.

**Titles:** a verdict or an imperative ("Choose Boring Technology", "Don't Call Yourself A Programmer", "The AI ROI Gap Is a Definition-of-Done Problem"), or the plain subject plus angle ("How I Finally Organized My Notes").

## Openings

Whatever the track, open on something concrete: a frustration, a moment, a before state, a number, or a plain statement of the problem or claim. Never open on a thesis about the industry or a definition.

Openings from this blog that work:

- "Running Lighthouse is easy. Reading what it gives back is the chore."
- "My `~/.tmux.conf` grew one frustration at a time."
- "I used to have notes everywhere."
- "A GitHub Pages project gets a URL like `USERNAME.github.io/project-name`, which is fine until you want to hand it to someone."

Within the first few paragraphs, the reader should know what the post covers and why it's worth their time. Show polish through specific detail, not adjectives. The author called an intro full of tidy generalities "slop. It doesn't show polish and great writing".

## Voice

**Write how the author talks.** Read each sentence and ask whether a person would say it out loud to a colleague. If not, rewrite it. Writerly lines that perform insight fail this test. The author rejected these with "Nobody talks like that":

- "So I stopped reading the page and started measuring it, with three throwaway headless Puppeteer scripts."
- "None of that tells you what happens when you scroll, and scrolling is where all the interesting stuff is."

**First person, plain opinions.** Use "I", and state opinions flatly:

- "I don't know why this isn't the default."
- "Highly recommend it."
- "My favorite part is that it doesn't care what the app is."

**Admit things.** First reactions, mistakes and limits build trust:

- "My first reaction was that 100 couldn't possibly be enough. It felt almost insulting."
- "I've still watched it choke on really bloated reports."

Only admissions the author actually made. Every first-person sentence about what the author did, felt, chose, intended, regrets or prefers needs a source: their words, or a record such as a commit, code comment or note. "I picked 900 because..." is a claim about their reasoning; if nothing says why, state what was done and drop the why.

**Hedge only where you're actually unsure, and say it plainly.** "I think this is a colour sequence but I'm not sure" (Julia Evans). Everything else is stated flatly.

**Light, dry humor, sparingly:** "Network conditions, server load, the phase of the moon." "A graveyard of markdown files in folders called 'misc'." Humor can carry part of an argument, but never force a joke into every section.

**Talk to the reader when it's honest.** Self-aware asides about the post or the reader's situation work well:

- "This post is about itself. If you're on a wide screen, watch the rail while you read."
- "I'll use `gallery.example.com` throughout; swap in your own."

**Keep tradeoffs inline.** Put the cost right after the choice. The tmux post moves the prefix to `C-a`, then says right away that it conflicts with the shell's go-to-start-of-line shortcut and what to do about it. Don't collect them in a "Considerations" section.

**Name the thing that bites:** "This tiny file is the thing that bites." Then explain exactly how it bites.

## Patterns to cut

Fix every instance across the whole post, not only the line someone pointed at. The examples show each pattern, but avoiding the exact phrases isn't enough: apply the test in each rule, because the same move comes back in new words.

**Colon reveals.** A setup phrase, a colon, then the payoff. Test: is the clause after the colon the actual point of the sentence? Then it's a reveal.
- Bad: "The rule I settled on: the active section is the last heading above the line."
- Good: "I settled on a heuristic where the active section is the last heading above the line."
- Also bad: "The catch:", "The fix:", "The problem:", "The best part:". Some older posts still have these; don't copy them.
- Colons are fine for lists, labels and quotes. Check the frontmatter `description` too.

**Declaring.** Announcing that you have a rule, a principle or a lesson instead of just stating it.
- Bad: "Here's the principle: ship small."
- Good: "Small changes are easier to roll back, so I ship them."

**Binary contrasts.** "It's not X, it's Y." "The question isn't X. It's Y." "Not a X. Not a Y. A Z." Test: is something set up only to be knocked down? State Y directly. The one exception is an opinion post's thesis reversal (see the opinion track).

**Writerly setups and fake profundity.** Lines that sound like a newsletter or a TED talk: "And that changes everything." "It turns out the answer was hiding in plain sight." "That's the whole trick." "Here's the thing." Cut them, or replace them with the concrete fact they were dressing up.

**Faux-insight framing.** "What most people miss is...", "Here's what nobody tells you", "where most advice stops." Test: does the sentence claim something about what other people, most advice or "everyone" does? That's an empirical claim about the world. Name who, source it, or cut it, then state the point. If it's insightful, the reader will notice.

**Empty analysis.** Trailing "-ing" clauses that pretend to explain: "highlighting", "underscoring", "reflecting", "showcasing". Test: delete the clause; if nothing is lost, leave it deleted. If something is, say it as a plain consequence ("so users can...").

**Recaps and kicker endings.** No "In short", "Ultimately" or "At the end of the day". Don't close a section on a one-line aphorism. End on the last concrete point.

**Hedging and puffery.** No "arguably", "it could be said", "game changer", "powerful", "seamless", "robust", "leverage", "delve", "plays a vital role". Either the claim is true and gets stated, or it's uncertain and you say exactly what's unknown.

**Forced threes and synonym cycling.** Don't pad a point into three adjectives or three examples when the content supports one or two. Don't rotate synonyms for the same thing; if the clear word is right, repeat it.

**Em dashes.** Never. Use a period, a comma or parentheses.

**Rhythm tics.** Watch for stacks of three-word fragments, every paragraph ending on a punchline, and identical paragraph shapes back to back.

## Formatting

- **Paragraphs:** short, usually two to four sentences.
- **Headings:** sentence case and short. Prefer a heading that states the finding or claim ("WebP alone took 94% off") over a topic label ("WebP conversion"), so the table-of-contents rail reads as a summary of the post. H2 for each main idea, H3 only for real subsections. Both appear in the rail, so they must make sense out of context.
- **Lists:** use them for things that really are parallel, such as steps, options or gotchas. Arguments and explanations go in prose.
- **Code:** use the smallest snippet that carries the idea, with the language tag. Say what it does before or after it, not both.
- **Tables:** only for comparisons with two or more dimensions.
- **Bold:** for UI labels in how-tos (**Settings > Pages**). Otherwise rarely.
- **Images and diagrams:** only for mechanisms prose can't carry well: timelines, data models, moving parts, a screenshot of the actual UI. Not decoration.

## Titles and descriptions

**Title:** follow the track's title forms. Always plain: no puns, wordplay or clever reframes. The author rejected "Taking Apart the claude.dev Blog, From Inside the Copy" and asked for the plain subject plus the point instead.

**Description:** one or two plain sentences, roughly 120 to 160 characters. Name the concrete payoff. It's the search snippet, so it must make sense on its own. Example: "A GitHub Pages project on a Cloudflare subdomain. The setup order that matters, the CNAME file that quietly vanishes, and why I leave the proxy off."

**Slug:** the slug is the filename. Keep it short and descriptive. If a title change makes the slug misleading, rename the file and update any links to it.

## Facts, sources and honesty

- **Verify every outside fact** against a primary source before it goes in: vendor docs, the paper, the ruling, the report. This covers statistics, limits, prices, quotes and named incidents.
- **Never use an unsourced anecdote** ("companies have had agents give away 50% discounts"), even when it illustrates a true point. Replace it with a real, sourced case that makes the same point. If none exists, drop the point.
- **Limits and prices drift.** Check the current docs, and name the tier or version.
- **Mark what you didn't test.** Separate what the author observed, what the docs say, and what is an estimate.
- **Claims must follow from the post's own evidence.** Every comparison, superlative or ratio ("bigger", "most", "only", "half", "the real fix") has to be true of the numbers in the post. Check the thesis against the post's own table before anything else.
- **Claims about what the software does need the code path, not a skim.** "Hovering X lights Y", "it falls back to Z", "crawlers see W" are easy to get wrong from reading code. Run it when you can (a headless browser, the built HTML), or trace the specific path and confirm the line that does it. If neither is possible, don't state it.
- **Each number has one value, one unit and a date.** The same quantity reads the same everywhere (not "9MB" in prose and "8.7MB" in the table). Prose that describes a table must be true of that table. A measurement from a different time than the event it describes is labeled as such or left out; today's bundle size is not last year's.
- **Don't fact-check the author's personal notes, memories or experiences.** Those are theirs. Measurable claims about their own work are different: check them against the artifact (git, the build, the files). If the author's number disagrees with the artifact, use the artifact's and tell them.
- **Cite sources at the end.** Posts that rely on outside sources end with a `---` rule, then a `Sources:` line with ` · ` between entries, linked where possible. How-tos can instead end with a short list of the docs they used.

## Links

- Link named products, sites and docs the reader might want to open. Put each link at the mention where the reader needs it, and link each thing only once.
- When the post refers to another page on this site, make it a real link (`[my tmux config post](/blog/tmux-config/)`), not a path in backticks.
- Internal links use trailing slashes (`/blog/slug/`). Absolute links to this site use the canonical `www` domain from the repo's `CLAUDE.md`, with a trailing slash.

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

1. Gather the evidence, then settle the track, the takeaway, the sections and the stance (see "Before drafting").
2. Outline the H2s. Check that each one teaches or argues something and that together they deliver the takeaway.
3. Draft, using the track's techniques.
4. Verify every outside fact. Fix or replace whatever doesn't hold.
5. Revise in this order:
   - **Cut:** methodology, changelog detail and basics.
   - **Voice:** read each sentence aloud and run the patterns to cut.
   - **Formatting.**
   - **Title and description.**
6. Verify with a fresh subagent (next section). Fix every finding, then verify the revised draft with another fresh subagent. Repeat until an audit comes back with no blocking findings, up to three rounds. Fixing findings does not verify a draft, because fixes introduce new errors; the step after any fix is another audit, never the handoff. Only when the third round still has blocking findings do you stop, and then the draft is unverified; say so in the handoff.
7. Build and look at the result. Run `npm run build` and `npm run preview`, then open the post at desktop and phone widths. Check that the table-of-contents rail reads well, links resolve, code blocks fit and images load.
8. Show the author the draft with the questions only they can answer, and anything you measured that they might want to claim. Don't hand back checks you could have run yourself. When they or a verifier flag one line, find every line in the post with the same problem and fix them all.

## Verification

The writer can't audit its own draft. It knows what it meant, so it reads intent instead of text, and it already believes its thesis. Kick off a subagent to do the audit, and keep it unbiased:

- Give it only the inputs: this skill's path, the draft's path, the author's brief verbatim, and pointers to the source material (commits, files, notes, URLs).
- Don't give it your reasoning, your summary of the post, or what you already checked. Don't tell it what to conclude.
- Ask for findings only. It must not edit the draft.
- If you can't spawn a subagent, don't substitute a self-review. Tell the author the verification didn't run.

Use this prompt, filling in the brackets:

> You are auditing a draft blog post. You did not write it. Assume it contains errors and find them. Do not edit any files.
>
> Read the skill at [skill path] first; it defines the standard. Then read the draft at [draft path]. The author's brief was: "[brief, verbatim]". Source material: [commits, files, notes, URLs].
>
> Run each pass below and report a list for each, quoting the exact line from the draft:
>
> 1. **Provenance.** List every sentence where the author did, thinks, feels, chose, intended, regrets, prefers or experienced something. For each, name the source in the brief or source material that supports it, or mark it UNSOURCED. Flag work the writer did (a measurement, an experiment) presented as the author's.
> 2. **Numbers.** List every number, with its unit, its source, and the time it was measured. Recompute it from the source where you can. Flag any quantity that appears with different values or units, and any measurement attached to a time it wasn't taken at.
> 3. **Claims.** List every comparison, superlative, ratio and causal claim, including the thesis and the title. Check each against the numbers in the post and the source. Flag any the evidence doesn't support or contradicts. Flag any claim about what other people or "most advice" do that has no source.
> 4. **Outside facts.** Check every external statistic, quote, limit, price and named incident against a primary source. Flag what doesn't hold or isn't cited.
> 5. **Structure and thought.** Name the post's track. State the takeaway in one sentence from the post alone. For each H2, write the lesson a reader could apply in their own codebase; flag any H2 where you can only describe it in this repo's terms, or that tours what the code does without saying why. Do the H2s mirror the source's item list? Flag sections that teach basics a competent engineer already knows, or that read like a changelog or methods section. List every "wasn't measured", "not checked" or similar disclaimer and say whether a command or doc could have settled it. Flag a post that never recommends or judges anything. Check the post against its track's techniques and list the ones it misses that would make it stronger, such as a missing steelman, an unbounded personal claim, a result with no cost, or an ending that recaps instead of handing the reader something.
> 6. **Voice and patterns.** Apply each test in the skill's "Patterns to cut" section to every sentence, including the title and description. Report every hit, not a sample.
> 7. **Mechanics.** Grep for em dashes. Count the description's characters. Check headings are sentence case, internal links have trailing slashes, and frontmatter matches the skill.
>
> Mark each finding BLOCKING or MINOR. BLOCKING means a reader would be misled or the author embarrassed: a false or unsupported claim, a wrong or inconsistent number, an unsourced first-person statement, a contradiction, a section that is inventory rather than a lesson, or an opinion post resting on the author's project alone. Everything else is MINOR.
>
> End with the three findings that would most embarrass the author if the post went live as is.
