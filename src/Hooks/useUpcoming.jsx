import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS} from '../utils/constants';
import { addUpcoming} from '../utils/movieSlice';

const useUpcoming = () => {
        // Fetching data from tmdb and updating state
    const dispatch = useDispatch();
 const upcoming = useSelector(store=> store.movies.upcoming)

  useEffect(()=>{
   !upcoming&& getUpcoming()     // doing memoization
  },[])
  const getUpcoming = async ()=>{
    const data= await  fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
    const json = await data.json()
    dispatch(addUpcoming(json.results))
  } 

}

export default useUpcoming