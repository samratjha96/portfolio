import React from 'react'
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { videos } from '../constants/constants';
import { fadeIn, textVariant } from "../utils/motion"
import ReactPlayer from 'react-player';

function parseMarkdown(text) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  const parts = [];

  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(match[1]); // Link text
    parts.push(match[2]); // Link URL
    lastIndex = match.index + match[0].length;
  }
  parts.push(text.slice(lastIndex));

  return parts.map((part, index) => {
    if (index % 3 === 0) {
      return part; // Keep unchanged text as is
    } else if (index % 3 === 1) {
      const linkText = parts[index];
      const linkUrl = parts[index + 1];
      return (
        <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          {linkText}
        </a>
      );
    }
  });
}



const VideoCard = ({ name, description, embedId }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="m-3 max-w-2xl">
        <div className="relative aspect-video">
          <ReactPlayer
            url={`https://youtube.com/watch?v=${embedId}`}
            className="absolute left-0 top-0"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{parseMarkdown(description)}</p>
    </div>
  );
}

const OnlinePresence = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText
        }>My online presence</p>
        <h2 className={styles.sectionHeadText}>Videos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Below are my apperances on <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="underline text-[#915eff] hover:text-blue-800 visited:text-purple-600">Youtube</a> channels covering a wide variety of topics. Watch them to learn about me, my thoughts
          and my technical skills
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {videos.map((video, index) => (
          <VideoCard key={`project-${index}`} {...video} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(OnlinePresence, "media")
