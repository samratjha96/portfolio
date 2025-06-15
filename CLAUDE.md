# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Commands

- `npm run dev` - Start the development server (accessible at http://localhost:5173)
- `npm run build` - Build the project for production (outputs to the `dist` folder)
- `npm run preview` - Preview the production build locally

## Project Architecture

This is a 3D portfolio website built with:

- Vite for development and building
- React for the UI framework
- Three.js (via @react-three/fiber and @react-three/drei) for 3D rendering
- Framer Motion for animations
- TailwindCSS for styling
- Lottie for animations
- EmailJS for contact form integration

### Key Architectural Concepts

1. **Component Structure**

   - The app uses a section-based layout where each main section (Hero, About, Experience, etc.) is a separate component
   - All sections are orchestrated from the main App.jsx file
   - Each 3D component is isolated in the canvas folder for better organization

2. **3D Components**

   - Three.js models are loaded from the /public directory using @react-three/fiber and @react-three/drei
   - The site uses a mix of 3D models and animation libraries for visual appeal
   - Models are loaded asynchronously with Suspense and have fallback loaders

3. **Section Wrapper HOC**

   - The SectionWrapper HOC is used to wrap content sections
   - Provides consistent styling, animations, and scroll-based behavior
   - Handles the section ID for navigation

4. **Data Management**

   - Content data (experiences, projects, services, etc.) is stored in src/constants/constants.js
   - The app is designed to be easily updated by modifying this data file

5. **Styling**

   - Uses TailwindCSS for styling with custom configuration in tailwind.config.cjs
   - Additional styles are defined in src/styles.js for consistent styling across components

6. **Animation Systems**

   - Framer Motion for UI animations
   - GSAP for more complex animations
   - Lottie for pre-built animations
   - Three.js animations for 3D elements
   - Typewriter effect for text animations

7. **Responsive Design**

   - The site is fully responsive with specific styling for different screen sizes
   - TailwindCSS breakpoints are used for responsive layouts
   - 3D elements are conditionally rendered or scaled based on device capabilities

8. **Performance Considerations**
   - 3D models are optimized for web delivery
   - Heavy 3D rendering is wrapped in Suspense for better loading experience
   - Three.js performance is optimized with proper settings and selective rendering
