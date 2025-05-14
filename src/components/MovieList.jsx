import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'motion/react';

const MovieList = ({title,movies}) => {
  const sliderRef= useRef(null)
  const slideLeft=()=>{
    if(sliderRef.current){
      sliderRef.current.scrollLeft-=300;
    }
  }
  const slideRight=()=>{
    if(sliderRef.current){
      sliderRef.current.scrollLeft+=300;
    }
  }
  if(movies===null)return; // early return
  return (
    <div className='  p-6  bg-black text-white opacity-95 disable-select'>
            <h1 className=' text-3xl font-bold mb-7 uppercase text-neutral-400'>{title}</h1>
              <div className=' flex justify-between items-center gap-4'>
              <FaChevronLeft 
              onClick={slideLeft}
              size={40} className=' border border-neutral-500 hover:border-neutral-300 text-neutral-500 hover:text-neutral-300 p-2 w-15 cursor-pointer rounded-lg hover:scale-110 ease-out transition-all delay-100 duration-300'/>
           <motion.div
           transition={{delay:0.4}}
           ref={sliderRef} 
           className=' flex items-center overflow-x-scroll  overflow-y-hidden  w-[98%] scrollbar-hide  ease-out transition-all delay-100 duration-300 '>
            
            <div className=' flex ' >
            {
              movies.map(movie=><MovieCard key={movie.id} poster_path={movie.poster_path}/>)
            }
            </div>
            
            </motion.div>
              <FaChevronRight
              onClick={slideRight}
              size={40} className=' border border-neutral-500 hover:border-neutral-300 text-neutral-500 hover:text-neutral-300 p-2 w-15 cursor-pointer rounded-lg hover:scale-110 ease-out transition-all delay-100 duration-300'/>
       </div>
    </div>
  )
}

export default MovieList