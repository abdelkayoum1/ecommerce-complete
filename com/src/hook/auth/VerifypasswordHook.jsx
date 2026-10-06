import React, { useEffect, useState } from 'react'
import notify from '../useNotification';

const VerifypasswordHook = () => {

    const [resetCode,setresetcode]=useState("");
    async function verifypassword(){
     try {
         const verifypasswor= await  fetch("http://localhost:5000/api/v1/auth/verifyResetCode",{
        method:"POST",
        headers:{
            
            "Content-Type": "Application/json",
          
        },
        body:JSON.stringify({
            resetCode:resetCode
        })
       
      })

           

      const data=await verifypasswor.json();
       if(data ){
        notify("تم  التحثق من الامايل","success")
        window.location.href="/user/resetpassword";
        return;
       }
     } catch (error) {
        console.log(error)
     }
    }
    // useEffect(()=>{
    //     forgetpassword()
    // },[])
    return [resetCode,setresetcode,verifypassword];
}

export default VerifypasswordHook;
