import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/movieSlice';

const useTrailer = (movieId ) => {
  const dispatch = useDispatch();
 const trailerVideo = useSelector(store=> store.movies.trailerVideo)
     // fetch trailer  video and updating the store with trailer video
    
     useEffect(()=>{
       !trailerVideo&& getMovieData()
      },[])

     const getMovieData = async ()=>{
    const data=  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
    const json= await data.json()
    const filterTrailer = json.results.filter((list)=>list.type =="Trailer")
  
    const Trailer = filterTrailer.length? filterTrailer[0]:json.results[0];
    dispatch(addTrailer(Trailer))
    }
  
}

export default useTrailer