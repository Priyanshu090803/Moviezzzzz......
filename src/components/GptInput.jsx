import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptInput = () => {
  const langKey= useSelector((store)=>store.config.language)
  return (
    <div className=' absolute top-[20%] w-full  '>
        <form className='flex justify-center gap-3'
        >
            <input
            className=' h-10 px-3 outline-1 outline-gray-500 rounded-lg text-white  focus:text-yellow-50 focus:text-base  backdrop-blur-md focus:scale-x-105 transition-all'
            type='text'
            placeholder={lang[langKey].gptSearchPlaceHolder+"...."}/>
            <button
            
            className=' bg-gradient-to-br from-rose-900 to-rose-300 px-3 rounded-lg text-neutral-300 font-semibold hover:bg-gradient-to-l hover:from-rose-100 hover:to-rose-950 hover:opacity-75 hover:scale-95 transition-all'>
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptInput