import React, { useEffect, useState } from 'react'
import notify from '../useNotification';

const EditcoupounHook = () => {
     const [name, setname] = useState("");
          const [expire, setexpire] = useState("");
          const [discount, setdiscount] = useState("");
  async function Editcoupoun(id,name,expire,discount) {
 
  
      const crtcoupn = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body:JSON.stringify({
            name:name,expire:expire,discount:discount
        })
       
      });
      if(crtcoupn.ok){
        notify("تم التعديل بنجاح ","success")
      }
      
      const data = await crtcoupn.json();
      
      console.log("daaaaaaaaaa",data.data)
console.log('bda')
      setname(data.data.name)
      console.log("name",data.data.name)
      setexpire(data.data.expire)
      setdiscount(data.data.discount)
      console.log('khalas')

    }
    


          async function GetoneCoupoun(id) {
 
  
      const crtcoupn = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons/${id}`, {
        method: "Get",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
       
      });
     
      
      const data = await crtcoupn.json();
      
      console.log("daaaaaaaaaa",data.data)
console.log('bda')
      setname(data.data.name)
      console.log("name",data.data.name)
      setexpire(data.data.expire)
      setdiscount(data.data.discount)
      console.log('khalas')

    }
    
    return [GetoneCoupoun,name,expire,discount,setname,setexpire,setdiscount,Editcoupoun];

}

export default EditcoupounHook
