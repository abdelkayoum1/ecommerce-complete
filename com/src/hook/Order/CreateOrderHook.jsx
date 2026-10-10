import React, { useState } from 'react'
import notify from '../useNotification';

const CreateOrderHook = () => {
 



const [getorder,setgetorder]=useState([]);

const [paginate,setpaginate]=useState({});

const [results,setresullts]=useState("");

    async function Crateodrer(id,details,phone,city,postalCode){

        const crtorder=await fetch(`http://127.0.0.1:5000/api/v1/orders/${id}`,{
            method:'POST',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({
                 shippingAddress:{
        details: details,
        phone: phone,
        city: city,
        postalCode: postalCode
        }
            })
        })
   console.log(crtorder)
        if(crtorder && crtorder.status==="status"){
            notify("تمت انشاء طلبك بنجاح","success")
        }
        const data=await crtorder.json();
        console.log(data)
    }


 async function Getorder(){

        const getordere=await fetch(`http://127.0.0.1:5000/api/v1/orders`,{
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
           
        })
//    console.log(getorder)
       
        const data=await getordere.json();
        setgetorder(data.data)
        setresullts(data.results)
        setpaginate(data.paginationResult)
        console.log(data.data)
    }



    return [Crateodrer,Getorder,getorder,paginate,results]
}

export default CreateOrderHook
