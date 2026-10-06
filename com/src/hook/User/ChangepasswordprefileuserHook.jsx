import React, { useState } from 'react'
import notify from '../useNotification'
import { Navigate, useNavigate } from 'react-router-dom'

const ChangepasswordprefileuserHook = () => {

    const[currentPassword,setcurrentpassword]=useState("")
    const[password,setpassword]=useState("")
    const[passwordConfirm,setconfirmepassword]=useState("")
    const navigate=useNavigate()
   async function changepasswordprofile(currentPassword,password,passwordConfirm){

    if(currentPassword==="" || password===""|| passwordConfirm===''){
        notify("من  فضلك  ادخل البيانت")
        return;
    }

        console.log("111111111111111")
        //   console.log("🔥 FRONTEND PUT", { name, phone, email });

 const changepasswordprefile=await fetch(`http://127.0.0.1:5000/api/v1/user/changeMyPassword`,
        {
            method:'PUT',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
               currentPassword:currentPassword,password:password,passwordConfirm:passwordConfirm
            })
          

        }
        
       

     )
     console.log("editttt",changepasswordprefile)
     if(changepasswordprefile.ok){
        notify("تم تعديل كلمة السر بنجاح","success");
        setcurrentpassword("")
        setpassword("")
        setconfirmepassword("")
       
        console.log("444444444444444")
     }
   
    else{
        notify("حدثت مشكلة","error")
    }
     console.log("1111111111111111")
             const data=await changepasswordprefile.json();
  setTimeout(()=>{
                             localStorage.removeItem('user')

                         localStorage.removeItem('token')
                         navigate('/sign')

  },[1500])
             console.log("22222222222222")
             console.log("changepasswordprefile",data)
             

            
   }
   return [currentPassword,password,passwordConfirm,setcurrentpassword,setpassword,setconfirmepassword,changepasswordprofile];
}

export default ChangepasswordprefileuserHook
