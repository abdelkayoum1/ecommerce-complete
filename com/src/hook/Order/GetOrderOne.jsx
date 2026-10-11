import React, { useState } from 'react'

const GetOrderOne = () => {
 
 const [oneorder,setgetoneorder]=useState([])

    async function getorderOne(id){
        const getoneorder=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/orders/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'Application/json',
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })

        
        const data=await getoneorder.json();
        console.log(data)
        setgetoneorder(data.data)
    }
    return [getorderOne,oneorder]
}

export default GetOrderOne
