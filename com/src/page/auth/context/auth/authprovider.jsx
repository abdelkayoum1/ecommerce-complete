import React from 'react'
import Authcontext from './authContext';
import { useState } from 'react';
const Authprovider = ({children}) => {

    const [username,setusername]=useState(
        localStorage.getItem('username')
    );
        const [token,setToken]=useState(
                    localStorage.getItem('token')

        )
       

  return (
   <Authcontext.Provider  value={{
    username,setusername,token,setToken
   }}>

   {children}
   </Authcontext.Provider>
  )
}

export default Authprovider;
