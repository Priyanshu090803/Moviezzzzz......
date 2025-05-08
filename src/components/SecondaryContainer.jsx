  import React from 'react'
  import MovieList from './MovieList'
  import { useSelector } from 'react-redux'

  const SecondaryContainer = () => {
    const movies= useSelector(store=>store.movies)
    return (
      <div >
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rating"} movies={movies.topRated}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming movies"} movies={movies.upcoming}/>

      </div>
    )
  }

  export default SecondaryContainer