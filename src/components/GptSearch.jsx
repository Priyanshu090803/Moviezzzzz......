import GptInput from './GptInput'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='  w-full'>
        <div className=' absolute -z-20 w-full' >
           <div className="fixed inset-0 -z-20">
        <img
          src={BG_IMG}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

        </div>
        <GptInput/>
        <GptMovieSuggestion/>
         
    </div>
  )
}

export default GptSearch