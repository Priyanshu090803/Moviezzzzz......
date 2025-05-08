import React   from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovie from '../Hooks/useNowPlayingMovie';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';

const Browse = () => {

  // Fetching data from tmdb and updating state
  useNowPlayingMovie()
  usePopularMovies()
  useTopRated()
  useUpcoming()
return (
    <div className=' w-screen'>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse