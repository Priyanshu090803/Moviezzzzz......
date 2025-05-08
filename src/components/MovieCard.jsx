import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className=' w-40 mr-10'>
      <img 
      className=''
      alt='movie-card'
      src={IMG_CDN_URL+poster_path}
      >

      </img>
    </div>
  )
}

export default MovieCard