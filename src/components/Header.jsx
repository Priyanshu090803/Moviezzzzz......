import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  
  const user = useSelector(store=> store.user)  // suscribing to store

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      // if sign out make user empty of redux // It will happen from body
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className=' z-10 absolute w-full md:px-20  py-3 bg-gradient-to-b from-black flex justify-between items-center'>
      <img className=' w-20 sm:w-32 md:w-36  md:ml-20 ml-6 mt-4 '
       src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
    {user && <div className=' flex gap-1 items-center'>
      <img 
      className=' w-10 h-10 rounded-xl cursor-pointer '
      src={user?.photoURL}
      alt='user-icon'
      />
      <button 
      className='  h-10 rounded-lg px-2 font-bold text-neutral-500  bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer
       '
       onClick={handleSignOut}
       >SignOut</button>
    </div>}
    </div>

  )
}

export default Header