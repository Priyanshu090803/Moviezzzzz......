import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  if(movies===null)return; // early return
  return (
    <div className='  p-4 m-4 bg-black text-white opacity-80'>
            <h1 className=' text-3xl font-bold mb-7'>{title}</h1>
            <div className=' flex  overflow-x-scroll overflow-y-hidden'>
            <div className=' flex'>
            {
              movies.map(movie=><MovieCard key={movie.id} poster_path={movie.poster_path}/>)
            }
            </div>
            </div>
       
    </div>
  )
}

export default MovieList