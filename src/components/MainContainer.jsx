import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle.jsx'
import VideoBackground from './VideoBackground.jsx'

// const Maincontainer = () => {
//   const movies= useSelector(store=>store?.movies?.nowPlayingMovies)
//   if(!movies) return ;    // this is called initial return , if we don't find value we return from here only.
  
//   const mainMovie= movies[0];

//   const {original_title,overview,id} =mainMovie
  

//   return (
//     <div className=' relative   w-full h-screen pb-1'>
//       <VideoTitle title={original_title} overview = {overview} />
//       <VideoBackground movieId={id}/>
//     </div>
//   )
// }

const Maincontainer = () => {
  const movies = useSelector(store => store?.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}
export default Maincontainer
