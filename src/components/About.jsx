import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full gree-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 secondary-text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an AI engineer at NVIDIA, building at the frontier of artificial intelligence. 
        I bring{" "}
        <a href="#work" className="underline text-[#915eff] hover:text-blue-800">
          7+ years of experience
        </a>{" "}
        architecting large-scale distributed systems, including 4 years at AWS building edge computing 
        infrastructure, Generative AI applications, and event pipelines handling millions of requests. 
        I've shipped systems at scale, led cross-org initiatives, and developed everything from 
        multi-agent AI systems to enterprise data platforms. Check out my{" "}
        <a href="#projects" className="underline text-[#915eff] hover:text-blue-800">
          projects
        </a>{" "}
        to see what I'm building. I also share technical deep-dives on my{" "}
        <Link
          to="/blog"
          className="underline text-[#915eff] hover:text-blue-800 visited:text-purple-600"
        >
          blog
        </Link>
        . Interested in collaborating on AI or infrastructure challenges?{" "}
        <a href="#contact" className="underline text-[#915eff] hover:text-blue-800">
          Let's connect
        </a>.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
