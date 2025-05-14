import React, {  useRef, useState } from 'react'
import Header from './Header'
import {doValidation} from "../utils/Validate"
import {auth} from "../utils/firebase"         // auth ko laenge  bar bar bnane se achha ek jgh bna k import kro
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { USER_IMG ,BG_IMG } from '../utils/constants';


const Login = () => {
  const[isSignIn, setisSignIn] = useState(true);       // usestate se toggle karwa denge signin se sign up tak
  const [errorMsg,SeterrorMsg] =useState(null) ;     // agr password ya email wrong hoga to bhjenge ye or SHI HOGA TO NI DIKHEGA ERROR
  const dispatch = useDispatch()

  const email = useRef(null)      // useref ka use krre h   email or password k input k refrence k liye
  const password = useRef(null)
  const fname= useRef(null)
  const lname= useRef(null)

  const handleClick = ()=>{                  // yha logic likhenge form k submit ka
    // console.log(email.current.value)
    // console.log(password.current.value)    // ye ese hoga hmare wha
    
   const message= doValidation(email.current.value,password.current.value /*,fname.current.value, lname.current.value*/    
   )   // ye functionality dusre page m bnai h

   SeterrorMsg(message)
      // console.log mai null aye to smj jana shi h sab
   
   if(message) return;



   if(!isSignIn){
    // sign up logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value) // from firebase docs
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;  // once user created then update profile 


    // ye part bhi docs se liya h      // Ye second render lera and email password phle usme hi render hore h to yha se hi dispatch kr denge ise
    updateProfile(user, {
      displayName: fname.current.value+lname.current.value,
       photoURL:USER_IMG
    }).then(() => {
      // Profile updated!
      
       const {uid,email,displayName, photoURL} = auth.currentUser;         // upr user se ni krenge bcz it is not updated , auth.curruseris updated
      
              dispatch(addUser({
                  uid: uid ,
                  email: email,
                  displayName: displayName ,      // by this step user will update in first render
                  photoURL:photoURL}))           // copied from body
      

      // ...
    }).catch((error) => {
      // An error occurred
      SeterrorMsg(error.message)
      // ...
    });
    // ...


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    SeterrorMsg(errorCode +""+ errorMessage)

  });

   }
   
   else{
    // sign in logic

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SeterrorMsg(errorCode +""+ errorMessage)
  });


   }



  }


  const authtoggle=()=>{ 
    setisSignIn(!isSignIn)                // for toggle
  }

  return (
    <div className=' w-full h-[890px] overflow-hidden'>
      <Header/>
      <div className='   h-full w-full relative flex  items-center justify-center'>
       <img 
    src={BG_IMG} 
    alt='login-img'
    className='absolute inset-0 w-full h-full object-cover -z-30'
  />
       <form
       
       onSubmit={(e)=>e.preventDefault()}
       
        className='  md:w-[450px]  min-h-fit top-28 rounded-lg left-2/8  md:left-3/8 gap-6 text-white flex flex-col px-16 py-14 bg-black/80	'>
        <h1 className=' font-semibold  text-4xl mb-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none  '>{isSignIn?"Sign In":"Sign up"}</h1> 
       
        {!isSignIn&&(
         <> 
         <input type='text'                               // logic for sign in
        ref={fname}
        placeholder='First Name'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />
        <input type='text'
        ref={lname}
        placeholder='Last Name'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />
        </>
        )}


       <input type='email'
     
       ref={email}        // ref diya hua h yha email k liye
                             
        placeholder='Email or mobile number'
        className=' text-gray-400 backdrop-blur font-semibold  border border-white h-14 rounded-md px-5'
        />
        <input type='password'

        ref={password}       // password k liye ref diya hua h

        placeholder='Password'
        className=' text-gray-400  bg-opacity-70 backdrop-blur	 font-semibold  border border-white h-14 rounded-md px-5'

        />

        <button className=' text-white  font-semibold   h-10 bg-red-700 hover:bg-red-800 cursor-pointer rounded-md px-5 mt-10 mb-4'
        onClick={handleClick}
        >{isSignIn?"Sign In":"Sign Up"}</button>
        <p className=' font-semibold text-red-800'>{errorMsg}</p>          

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