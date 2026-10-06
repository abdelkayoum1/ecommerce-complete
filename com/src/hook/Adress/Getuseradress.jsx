import React, { useState } from 'react'
import notify from '../useNotification';

const Getuseradress = () => {
  const [getuserdata,setgetuserdata]=useState("")

    async  function  getuseradresse(){
        const getuseradr=await fetch("http://127.0.0.1:5000/api/v1/addresses",{
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
       
        const data=await  getuseradr.json();
        console.log(data)
        setgetuserdata(data.data)
    }

    return[getuseradresse,getuserdata]
}

export default Getuseradress
