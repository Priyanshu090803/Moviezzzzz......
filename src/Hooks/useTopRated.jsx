import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS} from '../utils/constants';
import { addTopRated} from '../utils/movieSlice';

const useTopRated = () => {
        // Fetching data from tmdb and updating state
    const dispatch = useDispatch();
    const topRated = useSelector(store=> store.movies.topRated)
  useEffect(()=>{
   !topRated && getTopRated()
  },[])
  const getTopRated = async ()=>{
    const data= await  fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    const json = await data.json()
    dispatch(addTopRated(json.results))
  } 

}

export default useTopRated