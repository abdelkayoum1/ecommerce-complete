import React, { useState } from 'react'

const Getalluser = () => {
       const[user,setgetusers]=useState([]);

 async function Getuserlength(){
        const getordere=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/user`,{
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
           
        })
//    console.log(getorder)
       
        const data=await getordere.json();
        setgetusers(data.data)
     
        // console.log("order",data.data.length)


    }
                return [user,Getuserlength];

}

export default Getalluser
