import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <div>
            <span className="text-white-100 text-[14px] tracking-wider">
              {technology.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
