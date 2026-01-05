# AGENTS.md

Guidelines for AI agents working on this portfolio codebase.

## Image Optimization (Critical)

All images in this project MUST be optimized before use. The site went from ~17MB to ~316KB of images through optimization.

### Required Image Format

- Use WebP format for all photographs and screenshots
- Keep SVG for icons and simple graphics
- Store optimized images in `src/assets/optimized/`

### Converting New Images

When adding a new image, ALWAYS convert it using cwebp:

```bash
# Standard conversion with resize (for project screenshots, ~900px width)
cwebp -q 80 -resize 900 0 input.png -o src/assets/optimized/output.webp

# For hero/background images (larger, ~1920px width)
cwebp -q 80 -resize 1920 0 input.png -o src/assets/optimized/output.webp

# For small icons/thumbnails (64-128px)
cwebp -q 85 -resize 128 0 input.png -o src/assets/optimized/output.webp
```

### Image Import Pattern

```javascript
// Always import from optimized folder
import myImage from "./optimized/my-image.webp";

// NOT from root assets
// import myImage from "./my-image.png"; // WRONG
```

### Image Element Requirements

All `<img>` tags MUST include:

- `width` and `height` attributes (prevents layout shift)
- `loading="lazy"` for below-fold images
- Descriptive `alt` text

```jsx
// Correct
<img
  src={image}
  alt="Project screenshot"
  width={360}
  height={230}
  loading="lazy"
  className="..."
/>

// Incorrect - missing dimensions and lazy loading
<img src={image} alt="Project screenshot" className="..." />
```

## Code Splitting

### Lazy Loading Heavy Components

Three.js and other heavy components should be lazy-loaded:

```jsx
import { lazy, Suspense } from "react";

// Lazy load 3D components
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Tech = lazy(() => import("./components/Tech"));

// Use with Suspense
<Suspense fallback={<div className="h-[300px]" />}>
  <Tech />
</Suspense>;
```

### Vite Chunk Configuration

The vite.config.js separates large dependencies:

- `three` chunk: Three.js and related 3D libraries
- `vendor` chunk: React, React Router, Framer Motion

## Performance Testing

### Running Lighthouse Locally

```bash
# Build production version first
npm run build

# Start preview server
npm run preview

# Run Lighthouse (in another terminal)
npx lighthouse http://localhost:4173 --output=json --output-path=/tmp/lighthouse.json --chrome-flags="--headless --no-sandbox" --only-categories=performance

# Extract key metrics
cat /tmp/lighthouse.json | jq '{
  score: (.categories.performance.score * 100 | round),
  fcp_s: (.audits["first-contentful-paint"].numericValue / 1000),
  lcp_s: (.audits["largest-contentful-paint"].numericValue / 1000),
  tbt_ms: .audits["total-blocking-time"].numericValue,
  cls: .audits["cumulative-layout-shift"].numericValue
}'
```

### Performance Targets

- Lighthouse score: 65+ (realistic with Three.js)
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 4s
- Cumulative Layout Shift: < 0.1

## Architecture Decisions

### Why 14 WebGL Contexts in Tech Section

The Tech section creates separate Canvas instances for each technology ball. This is a known performance tradeoff for visual appeal. To significantly improve performance here, you'd need to replace with static images (major UX change - discuss with Samrat first).

### Three.js Bundle Size

Three.js adds ~995KB to the bundle (gzipped: ~282KB). This is unavoidable for 3D features. Mitigation:

- Code-split into separate chunk (done)
- Lazy-load components using Three.js (done)
- Use `frameloop="demand"` on Canvas (already implemented)

### Background Assets

The hero background is defined in `tailwind.config.cjs`:

```javascript
backgroundImage: {
  "hero-pattern": "url('/src/assets/optimized/herobg.webp')",
}
```

## Adding New Projects

When adding a new project to `src/constants/constants.js`:

1. Create optimized screenshot:

   ```bash
   cwebp -q 80 -resize 900 0 new-project.png -o src/assets/optimized/new-project.webp
   ```

2. Import in `src/assets/index.js`:

   ```javascript
   import newProject from "./optimized/new-project.webp";
   export { ..., newProject };
   ```

3. Add to projects array in constants.js

## Common Pitfalls

1. **Adding unoptimized images**: Always convert to WebP first
2. **Missing image dimensions**: Causes Cumulative Layout Shift
3. **Eager loading below-fold images**: Use `loading="lazy"`
4. **Testing on dev server**: Always test performance on production build
5. **Importing from wrong path**: Use `./optimized/` folder for images
