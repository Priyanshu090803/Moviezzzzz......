import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'  // for providing routing


const Body = () => {
 
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


  return (
    <div>
      
      <RouterProvider router={appRouter} />         {/* providing routes*/}   {/*navigation iske andr ya iske children k andr hona chahiye*/}  
      {/* To ham navigation header k andr krre bcz it inside routerprovider and it is always available*/}  

    </div>
  )
}

export default Body