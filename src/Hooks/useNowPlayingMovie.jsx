import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS} from '../utils/constants';
import { addNowPlayingMovies} from '../utils/movieSlice';

const useNowPlayingMovie = () => {
        // Fetching data from tmdb and updating state
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)
  useEffect(()=>{
    !nowPlayingMovies&& getNowPlayingMovie()
  },[])
  const getNowPlayingMovie = async ()=>{
    const data= await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  } 

}

export default useNowPlayingMovie