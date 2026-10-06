import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';
import { Auth } from './context/auth/authContext';
const Protectedroute = () => {

    const {token}=Auth();
     console.log("token",token)
    if(!token){
        return <Navigate to ='/sign'  replace/>
    }
  return <Outlet/>
   
  
}

export default Protectedroute;
