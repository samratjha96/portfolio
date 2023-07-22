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


    appian,
    aws,
    boeing,
    carrent,
    jobit,
    tripguide,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
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
    }
  ];
  
  const experiences = [
    {
      title: "Software Engineer @ AWS Outposts",
      company_name: "AWS",
      icon: aws,
      iconBg: "#383E56",
      date: "March 2022 - Current",
      points: [
        "Building the next generation of edge computing infrastructure to deliver the ultimate hybrid cloud experience"
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Appian",
      icon: appian,
      iconBg: "#383E56",
      date: "March 2021 - Jan 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Appian",
      icon: appian,
      iconBg: "#383E56",
      date: "Aug 2018 - March 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Boeing",
      icon: boeing,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      testimonial:
        "Samrat is truly 牛逼",
      name: "Yue Wu",
      designation: "Founder",
      company: "YWCorp",
      image: "https://p.kindpng.com/picc/s/176-1761123_naruto-shippuden-madara-uchiha-clan-picsart-madara-uchiha.png",
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
        "Mock Software Engineering interview for the interview prep site [InterviewPen](https://interviewpen.com/). Watch to see how to navigate and succeed in a FAANG interview",
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
        "Podcast appearance on Back2BackSWE channel (300K+ subscribers) where I give career guidance to software engineers about navigating the job hunt, how to interview and how to ultimately find the right fit",
      embedId: "y2y_ni8WLy0",
    },
    {
      name: "Commencement Speech",
      description:
        "Commencement speech for my college graduation where I talk about my childhood, my immigration to the US, my struggles and all my achievements since",
      embedId: "xxNa51UFGGI?start=2627",
    },
  ];
  
  export { services, technologies, experiences, testimonials, videos };
