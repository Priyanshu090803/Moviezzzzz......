import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignIn, setisSignIn] = useState(true);       // usestate se toggle karwa denge signin se sign up tak
  const authtoggle=()=>{ 
    setisSignIn(!isSignIn)                // for toggle
  }
  return (
    <div>
      <Header/>
      <div className=' relative'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg' alt='login-img'/>
      
       <form
        className=' absolute w-[450px]  min-h-fit top-28 rounded-lg   left-3/8 gap-6 text-white flex flex-col px-16 py-14 bg-black/80	'>
        <h1 className=' font-semibold  text-4xl mb-6'>{isSignIn?"Sign In":"Sign up"}</h1> 
       
        {!isSignIn&&(<input type='text'                               // logic for sign in
        placeholder='First Name'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />)}

        {!isSignIn&&(<input type='text'
        placeholder='Last Name'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />)}

       <input type='text'
        placeholder='Email or mobile number'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />
        <input type='password'
        placeholder='Password'
        className=' text-gray-400  bg-opacity-70 backdrop-blur	 font-semibold  border border-white h-14 rounded-md px-5'

        />
        <button className=' text-white  font-semibold   h-10 bg-red-700 hover:bg-red-800 cursor-pointer rounded-md px-5 mt-10 mb-4' >{isSignIn?"Sign In":"Sign Up"}</button>
        <p className=' cursor-pointer hover:underline hover:text-blue-400'
        onClick={authtoggle}
        >
         {isSignIn?" New to Netflix? SignUp now": "Already a user? Sign In "}</p>
      </form>
      </div>
      
    </div>
  )
}

export default Login