import React   from 'react'
import Header from './Header'
import Maincontainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';
import useNowPlayingMovie from '../Hooks/useNowPlayingMovie.jsx';
import usePopularMovies from '../Hooks/usePopularMovies.jsx';
import useTopRated from '../Hooks/useTopRated.jsx';
import useUpcoming from '../Hooks/useUpcoming.jsx';
import GptSearch from './GptSearch.jsx';
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