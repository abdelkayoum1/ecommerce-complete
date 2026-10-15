import React, { useState } from 'react'

const GetOrderOne = () => {
 
 const [oneorder,setgetoneorder]=useState([])
 const [loading,setloading]=useState(true)

    async function getorderOne(id){
      try {
      console.log("22222222222")
        setloading(true)
        console.log(loading)
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
    
      } catch (error) {
        
      }finally{
         setloading(false)
         console.log(loading)
      }

    }
    return [getorderOne,oneorder,loading]
}


export default GetOrderOne
