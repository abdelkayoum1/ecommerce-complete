import React, { useEffect, useState } from 'react'
import notify from '../useNotification'
import { useNavigate } from 'react-router-dom'

const userAddadressesHook = () => {

    const[alias,setalias]=useState("")
    const[details,setdetails]=useState("")
    const[phone,setphone]=useState("")
    const[city,setcity]=useState("")
    const[postalcode,setcodepostal]=useState("")
        const[adressuser,setadresuser]=useState([])
  const navigate=useNavigate();

    async function adduseradres(){

     try {
      const adduser=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/addresses`,
        {
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
alias:alias,
details:details,
phone:phone,
city:city,postalCode:postalcode
            })

        }

     )
      if(adduser.ok){
        notify("تم اضافة العنوان  بمجاح","success")
        setalias('')
        setdetails("")
        setphone('')
        setcity('')
        setcodepostal("")
        setTimeout(()=>{
            navigate('/user/adress')
        },[1000])

     }
   const data=adduser.json();
    console.log(data)
     if(!data.ok){
        console.log("فشل عملية الحدف");
        return;
     }
   } catch (error) {
      console.log(error)
   }
}

async function getalladress(){
    const getalladres=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/addresses`,
        {
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
          

        }

     )
             const data=await getalladres.json();
             setadresuser(data.data)
   console.log(data.data)
}

return [getalladress,adressuser,setadresuser,adduseradres,alias,details,phone,city,postalcode,setcodepostal,setcity,setphone,setdetails,setalias];
}
export default userAddadressesHook
