import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { getPost, loadPostContent } from "./blog/posts";
import "./index.css";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// The prerendered HTML is a Puppeteer DOM snapshot, not renderToString output. Blog pages hydrate once
// the current post's body is loaded, so the first render matches. The home page's lazy sections lack
// Suspense markers in the snapshot, so it renders fresh and React replaces the markup.
const { pathname } = window.location;
const post = getPost(pathname.match(/^\/blog\/([^/]+)/)?.[1]);

(post ? loadPostContent(post) : Promise.resolve()).finally(() => {
  if (pathname.startsWith("/blog") && rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
});
