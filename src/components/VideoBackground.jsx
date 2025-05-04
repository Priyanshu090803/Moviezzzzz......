import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useTrailer from '../Hooks/useTrailer'

const VideoBackground = ({movieId}) => {
  const trailerVideo= useSelector(store=> store?.movies?.trailerVideo)
  useTrailer(movieId)
 
  return (
    <div className=' w-full h-screen relative '>
     <iframe 
      className='  w-full h-full aspect-video  bg-gradient-to-br from-black  opacity-100'
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&pause=1"}></iframe>
    
    <div className=' h-20 w-full bg-black z-10 absolute top-0'></div>
    </div>
  )
}

export default VideoBackground