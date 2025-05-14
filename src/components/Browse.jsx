import React   from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovie from '../Hooks/useNowPlayingMovie';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  // Fetching data from tmdb and updating state
  useNowPlayingMovie()
  usePopularMovies()
  useTopRated()
  useUpcoming()
return (
    <div className=' w-full overflow-x-hidden'>
      <Header/>
      {
        showGptSearch?(<GptSearch/>):(<>
          <Maincontainer/>
          <SecondaryContainer/>
          </>)
      }
 
    </div>
  )
}

export default Browse