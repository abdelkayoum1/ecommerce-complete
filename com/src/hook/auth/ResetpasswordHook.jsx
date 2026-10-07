import React, { useEffect, useState } from 'react'
import notify from '../useNotification';

const ResetpasswordHook = () => {

    const [email,setemail]=useState("");
        const [newPassword,setnewpassword]=useState("");


    async function changepassword(){
     try {
         const resetpassword= await  fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/auth/resetPassword",{
        method:"PUt",
        headers:{
            
            "Content-Type": "Application/json",
          
        },
        body:JSON.stringify({
            email:email,
            newPassword:newPassword
        })
       
      })

           

      const data=await resetpassword.json();
       if(data){
        notify("تم  تعيير كلمة السر بنجاح  ","success")
        return;
       }
     } catch (error) {
        console.log(error)
     }
    }
    // useEffect(()=>{
    //     forgetpassword()
    // },[])
    return [email,setemail,newPassword,setnewpassword,changepassword];
}

export default ResetpasswordHook
