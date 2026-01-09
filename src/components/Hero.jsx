import React from "react";
import { motion } from "framer-motion";
import { rocket } from "../assets";
import { styles } from "../styles";
import Lottie from "lottie-react";
import animationData from "../../public/astronaut-with-space-shuttle.json";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex flex-col">
      {/* Main content container - uses flex to prevent overlap */}
      <div className={`${styles.paddingX} flex-1 flex flex-col pt-[120px] pb-24 max-w-7xl mx-auto w-full min-h-0`}>
        {/* Text content */}
        <div className="flex flex-row items-start gap-5 shrink-0">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Samrat Jha</span>
            </h1>
            <div className="flex flex-col">
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                AI Engineer & Infrastructure Architect
              </p>
              <div className="mt-3 text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] text-[14px] max-w-2xl">
                Building the future of AI at NVIDIA.{" "}
                <a
                  href="https://cal.com/samrat-jha-akdwhz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#915eff] hover:text-white"
                >
                  Book a meeting
                </a>{" "}
                or explore the rest of my website to learn more.
              </div>
            </div>
          </div>
        </div>

        {/* Astronaut animation - fills remaining space, scales responsively */}
        <div className="flex-1 flex items-center justify-center pointer-events-none min-h-0">
          <Lottie
            animationData={animationData}
            className="w-full h-full max-w-[200px] xs:max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] max-h-[250px] xs:max-h-[280px] sm:max-h-[350px] md:max-h-[400px]"
            loop={true}
          />
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [1, 20, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="w-[30px]">
                <img
                  src={rocket}
                  alt="Get Started"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
