# AGENTS.md

Guidelines for AI agents working on this portfolio codebase.

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Project Architecture

3D portfolio website built with:

- **Vite** - Build tool and dev server
- **React** - UI framework
- **Three.js** - 3D rendering (via @react-three/fiber and @react-three/drei)
- **Framer Motion** - Animations
- **TailwindCSS** - Styling
- **Lottie** - Pre-built animations
- **EmailJS** - Contact form

### Key Concepts

**Component Structure**: Section-based layout (Hero, About, Experience, etc.), orchestrated from App.jsx. 3D components isolated in `canvas/` folder.

**3D Components**: Models loaded from `/public` using @react-three/fiber. Loaded asynchronously with Suspense and fallback loaders.

**SectionWrapper HOC**: Wraps content sections with consistent styling, animations, and scroll behavior. Handles section IDs for navigation.

**Data Management**: Content stored in `src/constants/constants.js`. Update this file to change experiences, projects, services.

**Styling**: TailwindCSS with custom config in `tailwind.config.cjs`. Additional styles in `src/styles.js`.

**Animation Systems**: Framer Motion (UI), GSAP (complex), Lottie (pre-built), Three.js (3D), Typewriter (text).

**Responsive Design**: TailwindCSS breakpoints. 3D elements conditionally rendered/scaled based on device.

## Image Optimization (Critical)

All images MUST be optimized. The site went from ~17MB to ~316KB through optimization.

### Required Format

- WebP for photographs and screenshots
- SVG for icons and simple graphics
- Store in `src/assets/optimized/`

### Converting Images

```bash
# Project screenshots (~900px width)
cwebp -q 80 -resize 900 0 input.png -o src/assets/optimized/output.webp

# Hero/background images (~1920px width)
cwebp -q 80 -resize 1920 0 input.png -o src/assets/optimized/output.webp

# Small icons/thumbnails (64-128px)
cwebp -q 85 -resize 128 0 input.png -o src/assets/optimized/output.webp
```

### Import Pattern

```javascript
// Correct - from optimized folder
import myImage from "./optimized/my-image.webp";

// Wrong - unoptimized
// import myImage from "./my-image.png";
```

### Image Element Requirements

All `<img>` tags MUST include:

```jsx
<img
  src={image}
  alt="Project screenshot"
  width={360}
  height={230}
  loading="lazy"  // for below-fold images
  className="..."
/>
```

## Code Splitting

### Lazy Loading Heavy Components

```jsx
import { lazy, Suspense } from "react";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Tech = lazy(() => import("./components/Tech"));

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
# Build and preview first
npm run build && npm run preview

# Run Lighthouse (separate terminal)
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

The Tech section creates separate Canvas instances for each technology ball. This is a known performance tradeoff for visual appeal. Replacing with static images would be a major UX change—discuss with Samrat first.

### Three.js Bundle Size

Three.js adds ~995KB to the bundle (gzipped: ~282KB). Unavoidable for 3D features. Mitigation:

- Code-split into separate chunk (done)
- Lazy-load components using Three.js (done)
- Use `frameloop="demand"` on Canvas (done)

### Background Assets

Hero background defined in `tailwind.config.cjs`:

```javascript
backgroundImage: {
  "hero-pattern": "url('/src/assets/optimized/herobg.webp')",
}
```

## Adding New Projects

1. Create optimized screenshot:

   ```bash
   cwebp -q 80 -resize 900 0 new-project.png -o src/assets/optimized/new-project.webp
   ```

2. Import in `src/assets/index.js`:

   ```javascript
   import newProject from "./optimized/new-project.webp";
   export { ..., newProject };
   ```

3. Add to projects array in `src/constants/constants.js`

## Common Pitfalls

1. **Adding unoptimized images**: Always convert to WebP first
2. **Missing image dimensions**: Causes Cumulative Layout Shift
3. **Eager loading below-fold images**: Use `loading="lazy"`
4. **Testing on dev server**: Always test performance on production build
5. **Importing from wrong path**: Use `./optimized/` folder for images
