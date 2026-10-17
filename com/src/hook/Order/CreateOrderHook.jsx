import React, { useState } from 'react'
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';

const CreateOrderHook = () => {
 



const [getorder,setgetorder]=useState([]);
const [getorderlength,setgetorderlength]=useState([]);

const navigate=useNavigate()

const [paginate,setpaginate]=useState({});

const [results,setresullts]=useState("");

    async function Crateodrer(id,details,phone,city,postalCode){

        const crtorder=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders/${id}`,{
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
        if(crtorder && crtorder.status===201){
            console.log(crtorder.status)
            notify("تمت انشاء طلبك بنجاح","success")
           setTimeout(()=>{
     navigate("/user/allorder")
           },1500)
        }
        const data=await crtorder.json();
        console.log(data)
    }
 async function Getorderlength(){

        const getordere=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders`,{
            method:'GET',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
           
        })
//    console.log(getorder)
       
        const data=await getordere.json();
        setgetorderlength(data.data)
     
        console.log("order",data.data.length)
    }
// https://ecommerce-complete-kbe3.onrender.com
 async function Getorder(page=1){

        const getordere=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders?limit=4&page=${page}`,{
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
        setpaginate(data.paginationResult.numberOfPages)
        console.log("order",data.data.length)
    }

    async function PymentMethode(id){
        const pymentmethode=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders/checkout-session/${id}`,{
            method:'GET',
            headers:{
                "Content-Type":'Application/json',
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
           
        })
                console.log(pymentmethode)

       if(pymentmethode && pymentmethode.status===200){
        console.log("22222222222222222")
                    //  console.log(pymentmethode.session)

            //  console.log(pymentmethode.session.checkout_url)
             console.log("444444444444444444")

        if(pymentmethode.status===200){
            notify("تم انشاء طلبك بنجاح","success")
        }else{
                        notify("حدثت مشكلة في انشاء الطلب ","warn")

        }
        console.log(pymentmethode)
       }
        const data=await pymentmethode.json();
         if(data.session){
             console.log(data.session.checkout_url)
setTimeout(()=>{
            window.open(data.session.checkout_url)

},1500)

            }
        console.log(data)
    }



    return [Crateodrer,Getorder,getorder,paginate,results,PymentMethode,getorderlength,Getorderlength]
}

export default CreateOrderHook
