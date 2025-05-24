import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants.jsx'
import { useRef } from 'react'
import {geminiAi} from '../utils/geminiAi'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from '../utils/gptSlice'

const GptInput = () => {
  const langKey= useSelector((store)=>store.config.language)
  const dispatch = useDispatch();
  const searchText= useRef()

  const searchTmdbMovie = async(movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        return json.results
      }

  const handleGptSearchClick= async()=>{
    //api call for movies
    const gptQuery= "Act as a movie recommendation system and suggest some movies for the query:"+ searchText.current.value+
    ". Only give me the list of the 5 movies with the comma seprated like eg: Gadar, Krish, Tarzan, Avengers, The Mask"
      const result = await geminiAi(gptQuery);
      searchText.current.value = null 
      if(!result){
        // take to error page
      }
      const aiMovie = result.split(", ")
      // console.log(aiMovie);
      // for every movie we will make an api call to tmdb   
      const promiseArray=  aiMovie.map((movie)=>searchTmdbMovie(movie))     
      // [give promise array of 5]
      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults)
      dispatch(addGptMovieResult({movieNames:aiMovie,movieResults:tmdbResults}))
    }

  return (
    <div className=' absolute top-[20%] w-full   '>
        <form className='flex justify-center gap-3'
        onSubmit={(e)=>e.preventDefault()}
        >
            <input
            ref={searchText}
            className=' h-10 px-3 outline-1 outline-gray-500 rounded-lg text-white  focus:text-yellow-50 focus:text-base  backdrop-blur-md focus:scale-x-105 transition-all'
            type='text'
            placeholder={lang[langKey].gptSearchPlaceHolder+"...."}/>
            <button
            onClick={handleGptSearchClick}
            
            className=' bg-gradient-to-br from-rose-900 to-rose-300 px-3 rounded-lg text-neutral-300 font-semibold hover:bg-gradient-to-l hover:from-rose-100 hover:to-rose-950 hover:opacity-75 hover:scale-95 transition-all'>
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptInput