import { useSelector } from 'react-redux'
import MovieList from './MovieList.jsx'

const GptMovieSuggestion = () => {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt)
  if(!movieNames) return;
  return (
    <div className=' md:pt-[20%] pt-[50%]'>
     {movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestion