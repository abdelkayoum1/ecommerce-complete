import React, { useState } from 'react'
import notify from '../useNotification'

const Updatepay = (id) => {
 
const [changepay,setchangepay]=useState("0")
const [changedeliver,setchangedeliver]=useState("0")

    async  function  updatepay(){
        const payupdate=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders/${id}/pay`,{
            method:"PUT",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        if(payupdate && payupdate.ok){
            notify("تم تحديت حالة الدفع بننجاح","success")
        }else{

            notify("حدثت مشكلة ","warn")
        }
        const data=await payupdate.json();
        console.log(data)
    }

     async  function  updatedeliver(){
        const deliverupdate=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders/${id}/deliver`,{
            method:"PUT",
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        if(deliverupdate && deliverupdate.ok){
            notify("تم تحديت حالة التوصيل بننجاح","success")
        }else{

            notify("حدثت مشكلة ","warn")
        }
        const data=await deliverupdate.json();
        console.log(data)
    }

    return [updatepay,changepay,setchangepay,changedeliver,setchangedeliver,updatedeliver]
}

export default Updatepay
