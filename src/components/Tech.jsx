import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {
  return (
    <ul className="flex flex-wrap gap-2.5 max-w-[760px]">
      {technologies.map((technology) => (
        <li
          key={technology.name}
          className="text-[15px] leading-none text-slate-300 px-4 py-2.5 border border-[#915eff]/[0.28] rounded-full bg-[#915eff]/[0.06] whitespace-nowrap"
        >
          {technology.name}
        </li>
      ))}
    </ul>
  );
};

export default SectionWrapper(Tech, "");
