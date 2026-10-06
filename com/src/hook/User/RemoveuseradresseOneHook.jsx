import React from 'react'
import notify from '../useNotification'

const RemoveuseradresseOneHook= () => {
 async function Revmoveuseradresseone(id){
    console.log("1111111111")
 const EdituseradreOne=await fetch(`http://127.0.0.1:5000/api/v1/addresses/${id}`,
        {
            method:'DeLETE',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
           
          

        }
     

     )
   
     if(EdituseradreOne.ok){
        notify("تم حدف العنوان   بنجاح","success")
       

     }
     console.log("3333333333333333333")
             const editadresuser=await EdituseradreOne.json();
            
            //  setadresuser(data.data)
//    console.log("getuseradresseone",data.data) 
   }

   
   return [Revmoveuseradresseone];
}

export default RemoveuseradresseOneHook
