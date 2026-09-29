import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
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

// The prerendered HTML is a Puppeteer DOM snapshot, not renderToString output. It lacks React's Suspense
// markers, so hydrating it always fails; render fresh and let React replace it.
createRoot(rootElement).render(app);
