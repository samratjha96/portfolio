import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { videos } from '../constants';
import { fadeIn, textVariant } from "../utils/motion"
import YoutubeEmbed from './YoutubeEmbed';


const VideoCard = ({ name, description, tags, image, embedId }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <YoutubeEmbed videoId={embedId} />
          </div>
        </div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
  )
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
          Below are my apperances on Youtube channels covering a wide variety of topics. Watch them to learn about me, my thoughts
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

export default SectionWrapper(OnlinePresence, "")
