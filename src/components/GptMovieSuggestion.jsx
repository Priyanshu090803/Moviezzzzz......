import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt)
  if(!movieNames) return;
  return (
    <div className=' absolute top-[50%] gap-4 w-full flex  flex-wrap overflow-hidden overflow-x-scroll'>
     {movieNames.map((movieName,index)=> <MovieList key={movieName.id} title={movieNames[0]} movies={movieResults[index]}/>)}
     
    </div>
  )
}

export default GptMovieSuggestion