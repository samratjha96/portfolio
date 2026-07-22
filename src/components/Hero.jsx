import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import DitherText from "./DitherText";

const Hero = () => {
  return (
    <section id="about" className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-28 pb-16 sm:pt-36 sm:pb-20`}>
        <div className="max-w-5xl border-l border-[#915eff]/50 pl-6 sm:pl-8">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <h1 className="font-black text-white text-[46px] leading-[56px] sm:text-[54px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px]">
                <DitherText text="Samrat" dotScale={2} />
                <br />
                <DitherText text="Jha" dotScale={2} />
              </h1>
              <p className={`${styles.heroSubText} mt-5`}>
                I help teams build AI systems that work beyond the demo.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-semibold">
                <a
                  href="https://cal.com/samrat-jha-akdwhz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-[#915eff] decoration-2 underline-offset-8 hover:text-[#dfd9ff]"
                >
                  Book a meeting
                </a>
                <Link to="/blog/" className="text-[#dfd9ff] hover:text-white">
                  Latest writing →
                </Link>
              </div>
            </div>
            <div className="max-w-2xl text-[16px] leading-8 sm:text-[18px]">
              <p className="text-[#dfd9ff]">
                I am a Senior AI Engineer at NVIDIA. I build the systems that
                make AI practical across the company: fast, economical, and
                dependable at scale.
              </p>
              <p className="mt-5 text-secondary">
                Before NVIDIA, I spent four years at AWS Outposts building
                hybrid cloud infrastructure for low-latency, mission-critical
                workloads. I designed globally deployed distributed systems
                where reliability, privacy, and operational discipline were
                essential. I now apply that foundation to model routers,
                evaluation platforms, ambient agents, and software factories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
