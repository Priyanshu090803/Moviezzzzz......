import React   from 'react'
import Header from './Header'
import useFetchTmdb from '../Hooks/useFetchTmdb';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  // Fetching data from tmdb and updating state
  useFetchTmdb()
return (
    <div className=' w-screen'>
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse