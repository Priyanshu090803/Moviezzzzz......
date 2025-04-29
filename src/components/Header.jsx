import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { button } from 'motion/react-client';
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const user = useSelector(store=> store.user)  // suscribing to store

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // if sign out make user empty of redux // It will happen from body
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {       // login, signup , logout teeno m se kuch bhi hoga to redux store update krnge ek jgh se
                                               // agr onAuthStateChanged() use nhi krenge to bhot sare logic likhne pdenge redux store ko update knre k liye
      if (user) {
        const {uid,email,displayName, photoURL} = user; // jse hi auth ki state change hogi wse work krega 
                                                        // tabhi yha se hi navigation k logic likhre
        dispatch(addUser({
            uid: uid ,
            email: email,
            displayName: displayName ,
            photoURL:photoURL}))                    //ISKO YHA ISLIYE LIKHA BCZ FOR THE NAVIGATION YHA SE HO KUKI YE APPROUTER K ANDR HAI
                                                   //AND YE HMESHA AVAILABLE RHEGA HR JAGH 
            navigate("/browse")                                      // OR YE CHEEZ AUTHENTICATION KRRI H USER KI AND REDUX STORE MAI USER KO UPDATE KRRI H
      } else {

        dispatch(removeUser())
        navigate("/")
      }
    });
  },[])

  return (
    <div className=' z-10 absolute w-full md:px-20  py-3 bg-gradient-to-b from-black flex justify-between items-center'>
      <img className=' w-20 sm:w-32 md:w-36  md:ml-20 ml-6 mt-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none hover:scale-110'
       src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
    {user && <div className=' flex gap-1 items-center'>
      <img 
      className=' w-10 h-10 rounded-xl cursor-pointer '
      src={user?.photoURL}
      alt='user-icon'
      />
      <motion.button 
      key={button.id}
      initial={{opacity:1,x:0}}
      exit={{opacity:0,
        x:100,
        transition:{
          duration:0.3,
          ease: "easeOut"
        }
      }}
      className='  h-10 rounded-lg px-2 font-bold text-neutral-500  bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer
       '
       onClick={handleSignOut}
       >SignOut</motion.button>
    </div>}
    </div>

  )
}

export default Header