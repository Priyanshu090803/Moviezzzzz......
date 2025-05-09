import React from 'react'
import GptInput from './GptInput'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
        <div className=' absolute -z-20 ' >
          <div className=' w-full h-full bg-black  absolute opacity-40'></div>
            <img 
            src={BG_IMG}
            />
        </div>
        <GptInput/>
        <GptMovieSuggestion/>
         
    </div>
  )
}

export default GptSearch