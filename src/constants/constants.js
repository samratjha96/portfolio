import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  cloud,
  git,
  docker,
  java,
  kotlin,
  golang,
  python,
  appian,
  aws,
  boeing,
  nvidia,
  rust,
  threejs,
  saasLandingPage,
  parallaxPhotoGallery,
  floatingPhotoGallery,
  dashboard,
  argos,
  spaceSelfie,
  birdRadio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "media",
    title: "Media",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
    isExternal: true,
    path: "/blog",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Infrastructure Architect",
    icon: backend,
  },
  {
    title: "Distributed Systems",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: cloud,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Senior AI Engineer",
    company_name: "NVIDIA",
    icon: nvidia,
    iconBg: "#76B900",
    date: "December 2025 - Current",
    points: [
      "Building at the frontier of artificial intelligence",
    ],
  },
  {
    title: "Software Engineer @ AWS Region Expansion",
    company_name: "AWS",
    icon: aws,
    iconBg: "#383E56",
    date: "September 2024 - December 2025",
    points: [
      "Built enterprise-grade ETL pipelines to ingest millions of multi-modal documents for RAG workloads",
      "Deployed multi-agent systems to production for planning region builds and forecasting cost/timelines",
      "Launched AI chatbots answering thousands of questions weekly with feedback loop systems for self-improvement",
    ],
  },
  {
    title: "Software Engineer @ AWS Outposts",
    company_name: "AWS",
    icon: aws,
    iconBg: "#383E56",
    date: "March 2022 - September 2024",
    points: [
      "Built next generation of edge computing infrastructure to deliver the ultimate hybrid cloud experience",
      "Focused on building event driven, low latency distributed systems using AWS ECS, Lambda, DynamoDB, EventBridge, Kotlin, Typescript and Rust",
      "Led, designed and delivered numerous large features and projects spanning multiple teams and organizations",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Appian",
    icon: appian,
    iconBg: "#383E56",
    date: "March 2021 - Jan 2022",
    points: [
      "Led the integration with newly acquired company from Spain by being the first engineer to work directly in the Spain team",
      "Collaborated across Spain and USA teams to develop sustainable engineering practices to ensure long term success",
      "Implemented core features to make Robotic Process Automation (RPA) a native capability of the Appian platform",
      "Won company wide award for excellent technical innovation in delivering the first successful integration with an acquired company for Appian",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Appian",
    icon: appian,
    iconBg: "#383E56",
    date: "Aug 2018 - March 2021",
    points: [
      "Developed and delivered a full stack integration with Twilio in Appian's Intelligent Contact Center platform allowing cloud native telephony capabilities",
      "Designed, implemented and presented a templatized end to end delivery pipeline of Appian applications to customers. Used to this day to ship thousands of applications on Appian",
      "Empowered a 100+ engineer organization to be self-sufficient with AWS by solely managing a fleet of AWS accounts for the orgnanization",
      "Developed and shipped an open source project, Terraform provider for Twilio, to be used by Appian and external companies",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Boeing",
    icon: boeing,
    iconBg: "#E6DEDD",
    date: "June 2018 - August 2018",
    points: [
      "Part of the first cohort of software engineers for Boeing's Avionics department",
      "Developed high performance flight simulation engine based on real time flight data",
      "Won best hackathon project for building the first ever big data visualization platform for Boeing's internal test flights",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samrat proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Samrat is truly 牛逼",
    name: "Yue Wu",
    designation: "Founder",
    company: "YWCorp",
    image:
      "https://p.kindpng.com/picc/s/176-1761123_naruto-shippuden-madara-uchiha-clan-picsart-madara-uchiha.png",
  },
  {
    testimonial:
      "After Samrat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const videos = [
  {
    name: "Mock Interview Prep",
    description:
      "Mock Software Engineering interview for the interview prep site [InterviewPen](https://www.interviewpen.com). Watch to see how to navigate and succeed in a FAANG interview",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    embedId: "bmqZ5AhNr3g",
  },
  {
    name: "Podcast Interview",
    description:
      "Podcast appearance on [Back2BackSWE channel](https://www.youtube.com/@BackToBackSWE) (300K+ subscribers) where I give career guidance to software engineers about navigating the job hunt, how to interview and how to ultimately find the right fit",
    embedId: "y2y_ni8WLy0",
  },
  {
    name: "Commencement Speech",
    description:
      "Commencement speech for my college graduation where I talk about my childhood, my immigration to the US, my struggles and all my achievements since",
    embedId: "xxNa51UFGGI?start=2627",
  },
];

const projects = [
  {
    name: "Space Selfie",
    description:
      "Discover when the ISS flew over your special moments. Built with TypeScript, Cloudflare Workers, Hono, and satellite.js for orbital calculations",
    image: spaceSelfie,
    source_code_link: "https://github.com/samratjha96/space-selfie",
    demo_link: "https://space-selfie.zasamrat.workers.dev",
  },
  {
    name: "Bird Radio",
    description:
      "A retro-styled nature sound tuner that streams bird songs from around the world. Features real-time spectrogram visualization and region-based browsing",
    image: birdRadio,
    source_code_link: "https://github.com/samratjha96/BirdRadio",
    demo_link: "https://bird-radio.pages.dev/",
  },
  {
    name: "NetWorth Tracker",
    description:
      "Personal finance application to track net worth. Built with React, TypeScript, Tailwind CSS and shadcn-ui",
    image: argos,
    source_code_link: "https://github.com/samratjha96/networth",
    demo_link: "https://argos.techbrohomelab.xyz/",
  },
  {
    name: "SAAS Landing Page",
    description:
      "Sleek white label SAAS landing page. Complete with engaging copy, animations and eye-catching design. This landing page can be reskinned for any client or project",
    image: saasLandingPage,
    source_code_link: "https://github.com/samratjha96/sample-saas-landing-page",
    demo_link: "https://sample-saas-landing-page.vercel.app/",
  },
  {
    name: "Hacker Dashboard",
    description:
      "Hacker terminal themed personal dashboard showing integrations with Stock APIs and RSS feeds",
    image: dashboard,
    source_code_link: "https://github.com/samratjha96/today",
    demo_link: "https://today.techbrohomelab.xyz/",
  },
  {
    name: "Parallax Image Gallery",
    description:
      "Sleek parallax animation showing off a collection of photos. Add a subtle but highly creative touch to your blog without cluttering the content with pictures",
    image: parallaxPhotoGallery,
    source_code_link: "https://github.com/samratjha96/parallax-image-gallery",
    demo_link: "https://parallax-image-gallery-beta.vercel.app/",
  },
  {
    name: "Floating Images Gallery",
    description:
      "Interactive floating images gallery built with React, Tailwind and GSAP for animation. Great way to show a collection of photographs in a museum style",
    image: floatingPhotoGallery,
    source_code_link: "https://github.com/samratjha96/floating-images-gallery",
    demo_link: "https://floating-images-gallery.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, videos, projects };
