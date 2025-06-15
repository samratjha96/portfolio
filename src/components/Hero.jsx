import React from "react";
import { motion } from "framer-motion";
import { rocket } from "../assets";
import { styles } from "../styles";
import Lottie from "lottie-react";
import animationData from "../../public/astronaut-with-space-shuttle.json";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Samrat Jha</span>
          </h1>
          <div className="flex flex-col">
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              AWS Expert & Full Stack Engineer
            </p>
            <div className="mt-3 text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] text-[14px] max-w-2xl">
              <span className="text-white">7+ years</span> building distributed systems on AWS.
              Currently exploring everything AI has to offer
            </div>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className={`${styles.paddingX} absolute inset-0 top-64 max-w-2xl mx-auto`}>
        <div className="flex justify-center items-center">
          <Lottie
            animationData={animationData}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      </div>

      <div className="absolute xs:bottom-8 top-3/4 w-full flex justify-center items-center">
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
                <img src={rocket} alt="Get Started" className="cursor-pointer" />
              </div>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
