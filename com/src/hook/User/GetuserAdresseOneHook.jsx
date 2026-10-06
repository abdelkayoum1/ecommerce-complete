import React, { useState } from 'react'
import notify from '../useNotification'
import { useNavigate } from 'react-router-dom'

const GetuserAdresseOneHook = () => {
  const navigate=useNavigate();
  const[alias,setalias]=useState("")
    const[details,setdetails]=useState("")
    const[phone,setphone]=useState("")
    const[city,setcity]=useState("")
    const[postalCode,setcodepostal]=useState("")
async function EditadresseuserOne(id,alias,details,phone,city,postalCode){
    console.log("1111111111")
 const EdituseradreOne=await fetch(`http://127.0.0.1:5000/api/v1/addresses/${id}`,
        {
            method:'PUT',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
                alias:alias,
                details:details,phone:phone,city:city,postalCode:postalCode
            })
          

        }
     

     )
     console.log("22222222222")
     console.log(alias)
     if(EdituseradreOne.ok){
        notify("تم تعديل  بنجاح","success")
        setTimeout(()=>{
            navigate("/user/adress")
        },[1000])
        console.log(alias)

     }
     console.log("3333333333333333333")
             const editadresuser=await EdituseradreOne.json();
             if (editadresuser){
                console.log(alias)
                             console.log(editadresuser.alias)

             console.log(editadresuser)
             console.log("444444444444444")
             }
            
            //  setadresuser(data.data)
//    console.log("getuseradresseone",data.data) 
   }
    async function getuseradressOne(id){
 const getuseradresseone=await fetch(`http://127.0.0.1:5000/api/v1/addresses/${id}`,
        {
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
          

        }

     )
             const data=await getuseradresseone.json();
             setalias(data.data.alias)
             setdetails(data.data.details)
             setphone(data.data.phone)
             setcity(data.data.city)
             setcodepostal(data.data.postalCode)
            //  setadresuser(data.data)
   }
    return [getuseradressOne,EditadresseuserOne,alias,details,phone,city,postalCode,setalias,setdetails,setphone,setcity,setcodepostal];
}

export default GetuserAdresseOneHook
