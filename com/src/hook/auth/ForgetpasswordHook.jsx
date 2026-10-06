import React, { useEffect, useState } from 'react'
import notify from '../useNotification';

const ForgetpasswordHook = () => {

    const [email,setemail]=useState();
    async function forgetpassword(){
     try {
         const forgetpass= await  fetch("http://localhost:5000/api/v1/auth/forgotPasswords",{
        method:"POST",
        headers:{
            
            "Content-Type": "Application/json",
          
        },
        body:JSON.stringify({
            email:email
        })
       
      })

           

      const data=await forgetpass.json();
       if(data !=null){
        notify("تم ارسال كود يحتوي علي 6  ارقام الي امايلك الشخصي","success")
        window.location.href="/user/verificationpassword";
        return;
       }
     } catch (error) {
        console.log(error)
     }
    }
    // useEffect(()=>{
    //     forgetpassword()
    // },[])
    return [email,setemail,forgetpassword];
}

export default ForgetpasswordHook
