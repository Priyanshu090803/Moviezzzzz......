import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  if(movies===null)return; // early return
  return (
    <div className=' px-6 py-4 bg-black text-white'>
            <h1 className=' text-3xl font-bold mb-7'>{title}</h1>
            <div className=' flex  overflow-x-scroll .scrollbar-hide'>
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