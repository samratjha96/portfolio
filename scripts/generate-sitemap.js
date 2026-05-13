// ABOUTME: Generates sitemap.xml and llms.txt from MDX blog posts and static pages
// ABOUTME: Run automatically before build via npm scripts

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://www.samratjha.com";
const POSTS_DIR = path.join(__dirname, "../src/blog/posts");
const SITEMAP_PATH = path.join(__dirname, "../public/sitemap.xml");
const LLMS_TXT_PATH = path.join(__dirname, "../public/llms.txt");

function extractFrontMatter(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  if (!match) return {};

  const frontMatter = {};
  const lines = match[1].trim().split("\n");

  for (const line of lines) {
    const kvMatch = line.match(/^(\w+):\s*(.+)/);
    if (kvMatch) {
      let [, key, value] = kvMatch;
      value = value.trim().replace(/^["']|["']$/g, "");
      frontMatter[key] = value;
    }
  }

  return frontMatter;
}

function formatDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0];
}

function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const fm = extractFrontMatter(content);
    const slug = path.basename(file, ".mdx");
    return {
      slug,
      title: fm.title || slug,
      description: fm.description || "",
      date: fm.date,
      lastmod: formatDate(fm.date),
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function generateSitemap(posts) {
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: "monthly", priority: "1.0" },
    { loc: `${SITE_URL}/blog/`, changefreq: "weekly", priority: "0.9" },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}/`,
      lastmod: post.lastmod,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ""}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`Sitemap generated with ${urls.length} URLs -> ${SITEMAP_PATH}`);
}

function generateLlmsTxt(posts) {
  const blogSection = posts
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}/): ${post.description}`)
    .join("\n");

  const content = `# Samrat Jha

> Senior AI Engineer at NVIDIA. 7+ years building large-scale distributed systems at AWS and NVIDIA. Expert in cloud infrastructure, Generative AI, and shipping systems at scale. Also offers AI consulting for small businesses.

Website: ${SITE_URL}/
GitHub: https://github.com/samratjha96
LinkedIn: https://www.linkedin.com/in/samratjha96/
Contact: contact@samratjha.com

## About

Samrat is an AI engineer at NVIDIA, building at the frontier of artificial intelligence. He brings 7+ years of experience architecting large-scale distributed systems, including 4 years at AWS building edge computing infrastructure, Generative AI applications, and event pipelines handling millions of requests. He has shipped systems at scale, led cross-org initiatives, and developed everything from multi-agent AI systems to enterprise data platforms.

Core skills: Python, Rust, Golang, Kotlin, Java, TypeScript, React, AWS, Docker, CUDA, Machine Learning, Generative AI, Cloud Architecture, Large-Scale Infrastructure.

## Experience

- **Senior AI Engineer @ NVIDIA** (Dec 2025 - Present): Building at the frontier of artificial intelligence.
- **Software Engineer @ AWS Region Expansion** (Sep 2024 - Dec 2025): Built enterprise ETL pipelines ingesting millions of multi-modal documents for RAG workloads. Deployed multi-agent systems to production for planning region builds. Launched AI chatbots answering thousands of questions weekly.
- **Software Engineer @ AWS Outposts** (Mar 2022 - Sep 2024): Built next-gen edge computing infrastructure. Designed event-driven, low-latency distributed systems using ECS, Lambda, DynamoDB, EventBridge, Kotlin, TypeScript, and Rust.
- **Senior Software Engineer @ Appian** (Mar 2021 - Jan 2022): Led integration with acquired company in Spain. Won company-wide award for technical innovation. Shipped RPA as a native platform capability.
- **Software Engineer @ Appian** (Aug 2018 - Mar 2021): Built full-stack Twilio integration for Intelligent Contact Center. Designed templatized delivery pipeline used to ship thousands of applications. Created open-source Terraform provider for Twilio.

## Projects

- [Which Card](https://github.com/samratjha96/which-card): Find the best credit card for every purchase. Search by merchant, compare rewards, maximize cashback. [Demo](https://which-card.pages.dev)
- [Space Selfie](https://github.com/samratjha96/space-selfie): Discover when the ISS flew over your special moments. Built with TypeScript, Cloudflare Workers, and satellite.js. [Demo](https://space-selfie.zasamrat.workers.dev)
- [Bird Radio](https://github.com/samratjha96/BirdRadio): Retro-styled nature sound tuner streaming bird songs worldwide with real-time spectrogram visualization. [Demo](https://bird-radio.pages.dev/)
- [NetWorth Tracker](https://github.com/samratjha96/networth): Personal finance app to track net worth. React, TypeScript, Tailwind, shadcn-ui. [Demo](https://argos.techbrohomelab.xyz/)
- [Today's Tech](https://github.com/samratjha96/today): Personal dashboard aggregating market data, GitHub trending, Hacker News, and tech news. [Demo](https://today.techbrohomelab.xyz/)
- [SAAS Landing Page](https://github.com/samratjha96/sample-saas-landing-page): White-label SAAS landing page with animations. Reskinnable for any client. [Demo](https://sample-saas-landing-page.vercel.app/)

## Blog

${blogSection}

## AI Consulting

- [AI Consulting Services](${SITE_URL}/ai/): AI consulting for small and mid-size businesses. The "AI Clarity Sprint" is a 4-week engagement: workflow audit, first automation deployed in Week 1, tool blueprint, 90-day roadmap, and launch support. Guarantee: one automation live in your systems within the first week or you don't pay. No affiliate kickbacks.
- [Book a Free Call](https://cal.com/samrat-jha-akdwhz/30min): Free 30-minute consultation to evaluate fit.

## Media

- [Mock Software Engineering Interview](https://youtube.com/watch?v=bmqZ5AhNr3g): Mock FAANG interview for InterviewPen demonstrating how to navigate technical interviews.
- [Career Guidance Podcast](https://youtube.com/watch?v=y2y_ni8WLy0): Podcast on Back2BackSWE (300K+ subscribers) covering job hunting, interviewing, and finding the right fit.
- [College Commencement Speech](https://youtube.com/watch?v=xxNa51UFGGI?start=2627): Commencement speech on immigration, struggles, and achievements.
---
User-Agent: *
Disallow:

Sitemap: ${SITE_URL}/sitemap.xml
Llms-Txt: ${SITE_URL}/llms.txt`;

  fs.writeFileSync(LLMS_TXT_PATH, content);
  console.log(`llms.txt generated with ${posts.length} blog posts -> ${LLMS_TXT_PATH}`);
}

const posts = loadPosts();
generateSitemap(posts);
generateLlmsTxt(posts);
