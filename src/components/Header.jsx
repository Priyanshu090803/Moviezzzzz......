import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { button } from 'motion/react-client';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USER_IMG } from '../utils/constants';

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

  useEffect(()=>{   // this useeffect called once when component rendered . but header can load multiple time in single session
    //  toh jab bhi unmount hoga component to uska track htaenge . 
    // onauthstatechange returns a unsubscribe function
   const unsubscribe= onAuthStateChanged(auth, (user) => {       // login, signup , logout teeno m se kuch bhi hoga to redux store update krnge ek jgh se
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
      return ()=> unsubscribe();       // when header will unload it will unsubcribe and remove its data
        // READ THIS IF WANT TO KNOW WHEN WILL IT UNMOUNT
        
      // Final Answer: When Does Your Header Unmount?
      // In your current app structure, the Header component does not unmount during normal navigation (like switching between / and /browse) because:
      
      // It is rendered inside both Login and Browse components.
      
      // React Router preserves it when switching between routes where it exists.
      
      // When Will It Unmount?
      // The Header only unmounts in these cases:
      
      // Page Refresh or Tab Close
      
      // All components unmount → unsubscribe() runs.
      
      // If You Later Change the Layout (e.g., remove Header from some routes):
      
      // jsx
      // // Example: Remove Header from `/login` route
      // {path: "/login", element: <LoginWithoutHeader />}

    }); 
  },[])

  return (
    <div className=' z-50 absolute h-26 w-full md:px-20 px-3 py-3 bg-gradient-to-b from-black flex justify-between items-center'>
      <img className=' w-24 sm:w-26 h-full md:w-26 md:ml-20 ml-6 mt-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none hover:scale-110'
       src={LOGO} alt='logo'/>
    {user && <div className=' flex gap-1 items-center'>
      <img 
      className=' w-10 h-10 rounded-xl cursor-pointer '
      src={USER_IMG}
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