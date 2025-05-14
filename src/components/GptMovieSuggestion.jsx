import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt)
  if(!movieNames) return;
  return (
    <div className=' pt-[20%] '>
     {movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestion