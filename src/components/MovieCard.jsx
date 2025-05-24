import React from 'react'
import { IMG_CDN_URL } from '../utils/constants.jsx'
import { motion } from 'motion/react'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null
  return (
    <motion.div className=' w-40 mr-10  cursor-pointer disable-select '
    whileHover={{ scale: 0.9 }}
    transition={{duration:0.6}}
    >
      <img 
      className=''
      alt='movie-card'
      src={IMG_CDN_URL+poster_path}
      >

      </img>
    </motion.div>
    
  )
}

export default MovieCard