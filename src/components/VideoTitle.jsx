import React from 'react'
import { motion } from "framer-motion";
import {PlayIcon} from '../utils/constants'
import { Info } from "lucide-react";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' z-30 w-2/3 md:w-1/2  flex flex-col absolute top-80 md:pl-40 sm:pl-10 pl-8 gap-3   pt-36 md:pt-28 sm:pt-48 '>
      <motion.h1 className=' md:text-3xl text-xl font-black uppercase text-green-500'
      initial={{opacity:0,y:-40}}
      whileHover={{ scale: 1.02 }}
      
      animate={{opacity:1,y:0}}
      transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 600 }}
      >{title}</motion.h1>
      
      <motion.p className=' text-white text-sm md:text-base'
      initial={{opacity:0,y:-40}}
      whileHover={{ scale: 1.02 }}
      
      animate={{opacity:1,y:0}}
      transition={{ delay: 0.3, duration: 0.5 ,type: "spring", stiffness: 600 }}
      >{overview}</motion.p>

      <div className='  flex gap-8'>
      <motion.button
      whileHover={{ scale: 1.02 ,opacity:0.5 }}
      whileTap={{ scale: 0.95 }}
      initial={{opacity:0,y:-40}}
      animate={{opacity:1,y:0}}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="md:px-3 px-1 md:py-3 py-1 w-32 font-semibold bg-white uppercase text-black cursor-pointer  rounded-lg flex items-center justify-center md:gap-2 gap-1 shadow-lg hover transition-colors duration-200 md:text-base text-sm "
    > 
     <PlayIcon/> Play
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.02 ,opacity:0.5 }}
      whileTap={{ scale: 0.95 }}
      initial={{opacity:0,y:-40}}
      animate={{opacity:1,y:0}}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="md:px-3 px-1 md:py-3 py-1 w-32   bg-neutral-400  cursor-pointer text-white rounded-lg flex md:gap-2 gap-1 shadow-lg hover:bg-gray-400 transition-colors duration-200 md:text-base text-sm items-center justify-center sm:py-2 sm:px-1"
    >
        <Info size={24} />More info
   </motion.button>

      </div>
    </div>
  )
}

export default VideoTitle