import React, { useState } from 'react'
import notify from '../useNotification'

const getalluserprefileHook = () => {
     const[name,setname]=useState("")
        const[phone,setphone]=useState("")
        const[email,setemail]=useState("")
                const[edit,setedit]=useState({})

        const[emaill,setcity]=useState("")
        const[postalCode,setcodepostal]=useState("")
    async function Getuserprefile(){

        console.log("111111111111111")
 const getuserprefile=await fetch(`http://127.0.0.1:5000/api/v1/user/getMe`,
        {
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
          

        }

     )
             const data=await getuserprefile.json();
             console.log(data.data)
             setname(data.data.name)
            //  setdetails(data.data.details)
            
             setphone(data.data.phone)
             setemail(data.data.email)
             setedit(data.data)
            //  setcity(data.data.city)
            //  setcodepostal(data.data.postalCode)
            //  setadresuser(data.data)
   console.log("getuseradresseone",data.data) 
   }

     async function Edituserprefile(name,phone,email){

        console.log("111111111111111")
          console.log("🔥 FRONTEND PUT", { name, phone, email });

 const edituserprefile=await fetch(`http://127.0.0.1:5000/api/v1/user/updateMe`,
        {
            method:'PUT',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
              name,phone,email  
            })
          

        }
        
       

     )
     console.log("edit",edituserprefile)
     if(edituserprefile.ok){
        notify("تم تعديل بياناتك بنجاح","success");
     }else if(edituserprefile && edituserprefile.status===400){
        notify("هناك مشكلة في  البيانات","error")
        return;
     }
     console.log("1111111111111111")
             const data=await edituserprefile.json();
             console.log("22222222222222")
             console.log("editprefileupdate",data.data)
             

             console.log("3333333333333333",data.data.user)
            //  setname(data.data.name)
            // //  setdetails(data.data.details)
            
            //  setphone(data.data.phone)
            //  setemail(data.data.email)
            //  setcity(data.data.city)
            //  setcodepostal(data.data.postalCode)
            //  setadresuser(data.data)
   }
   return [Getuserprefile,edit,Edituserprefile,name,phone,email,setname,setphone,setemail];
}

export default getalluserprefileHook
