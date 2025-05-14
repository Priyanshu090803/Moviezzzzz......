import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS} from '../utils/constants';
import { addpopularMovies} from '../utils/movieSlice';

const usePopularMovies = () => {
        // Fetching data from tmdb and updating state
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=> store.movies.popularMovies)

  useEffect(()=>{
   !popularMovies&& getPopularMovies()
  },[])
  const getPopularMovies = async ()=>{
    const data= await  fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json()
    dispatch(addpopularMovies(json.results))
  } 

}

export default usePopularMovies