import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'  // for providing routing
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {
  const dispatch = useDispatch();
 
  const appRouter= createBrowserRouter(
    [
      {
        path:"/",           // if path is / then we will show login page
        element:<Login/>
      },
      {
        path:"/browse",     // if you'r authenticated(logged in) then you can go to browse page
        element:<Browse/>
      }
    ]
  )
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {       // login, signup , logout teeno m se kuch bhi hoga to redux store update krnge ek jgh se
                                               // agr onAuthStateChanged() use nhi krenge to bhot sare logic likhne pdenge redux store ko update knre k liye
      if (user) {
        const {uid,email,displayName, photoURL} = user;

        dispatch(addUser({
            uid: uid ,
            email: email,
            displayName: displayName ,
            photoURL:photoURL}))
      } else {

        dispatch(removeUser())
      }
    });
  },[])

  return (
    <div>
      
      <RouterProvider router={appRouter} />         {/* providing routes*/}

    </div>
  )
}

export default Body