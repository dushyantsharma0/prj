import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
const Protection = ({clildren,user,redirect='/'}) => {
  
    
    if(!user) return <Navigate to={redirect}/>
          return clildren?  clildren:<Outlet/>
 
}

export default Protection