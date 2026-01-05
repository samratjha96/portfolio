# Blog Writing Guidelines (for LLM consumption)

These guidelines help avoid AI-sounding writing when generating blog posts.

## Tone & Voice

- First-person, conversational
- Write like you're explaining to a coworker, not presenting to an audience
- Have opinions. It's okay to say something is annoying or that you prefer X over Y
- Admit when you messed up or wasted time on something
- Start sentences with "but", "and", "so" freely. Grammar rules relax in casual writing.
- Italics for emphasis, not bold or caps: "things started feeling… _slow_"
- Ellipsis for trailing thoughts works well: "that's when things started feeling… slow"
- Direct self-answers: "is it as fast as SIMD? no. but it's still really fast"

## Things to Avoid

### Transition phrases that scream AI

- "Here's how I did it"
- "The key insight:"
- "Let's dive in"
- "In this article, we will explore..."
- "That's it." (especially as a standalone sentence)
- "It just works"
- "Be honest about..."
- "Let me explain"
- "Here's the thing:"

### Structural tells

- Every section having a perfect 3-4 bullet list
- Before/after comparisons that read like marketing
- Too many superlatives ("fantastic", "incredibly", "dramatically")
- Wrapping up with a neat bow ("And that's how you...")
- Numbered lists for things that don't need numbers
- Em dashes everywhere. Use commas, periods, or parentheses instead.
- Overly formal section headers. "Wrapping up" beats "Conclusion"

### Preachy/salesy patterns

- Telling the reader what they should feel or do
- Overselling benefits
- "You'll never have to worry about X again"
- Generic praise ("Workers are fantastic for this")

## Things to Include

### Human touches

- Actual frustrations: "I forgot this and got cryptic errors"
- Shortcuts you took: "Didn't want to deal with more infrastructure"
- Casual asides: "Types are nice."
- Incomplete sentences occasionally. Fine in casual writing.
- Show the thought process: "that's when things started feeling… slow"
- Colloquial judgments: "the naive approach is to split every N characters. but that's dumb"
- Quote source code or documentation directly when relevant, with attribution

### Practical value

- Real code examples from the actual project
- Specific gotchas you hit, not theoretical ones
- Links to source code so people can verify
- Honest limitations section (but don't be preachy about it)

## Structure

- Start with what you built and a link to it
- Don't over-explain motivation. One short paragraph max.
- Code examples should be minimal and runnable
- Gotchas section is often the most valuable part. Don't skip it.
- End with a link to source, not a conclusion paragraph
- Headers as questions can work occasionally: "why search backwards?" but don't overdo it
- Use a short "wrapping up" or "putting it together" section if needed, not "Conclusion"
- Keep wrap-ups to 2-4 bullet points max. No flowery conclusions.

## Code Examples

- Inline code blocks with brief explanations, not walls of comments
- Show input → output for transformations
- ASCII diagrams can clarify algorithms better than prose
- Comment sparingly in code blocks. The surrounding text does the explaining.
- Real code from the project, not toy examples when possible

## Length

- Shorter is better
- If a section feels like filler, cut it
- Don't pad with obvious explanations
- Trust the reader to know basics

## Before Publishing Checklist

1. Read it back as a skeptical reader. Does any sentence make you cringe?
2. Search for phrases from the "avoid" list
3. Is there at least one moment of admitted frustration or imperfection?
4. Would you actually send this to a friend? Or does it feel like content?
