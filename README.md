# 3D Portfolio Website

A modern and interactive portfolio website featuring 3D graphics, smooth animations, and responsive design.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or above)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` folder with the production-ready files.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `/src/components` - React components
- `/src/components/canvas` - Three.js 3D components
- `/src/assets` - Static assets (images, 3D models)
- `/src/constants` - Configuration and constant values
- `/src/utils` - Utility functions
- `/src/hoc` - Higher-order components
- `/public` - Public assets and 3D models

## License

This project is open source and available under the [MIT License](LICENSE).
