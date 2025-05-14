import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { motion } from 'motion/react'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null
  return (
    <motion.div className=' w-40 mr-10 '
    whileHover={{ scale: 0.9 }}>
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