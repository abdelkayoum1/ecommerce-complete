import React, { useEffect, useState } from 'react'

const GetallreviewsHook = (id) => {
 

const[reviews,setreviews]=useState([]);
const [reviewspage,setreviewspage]=useState("")
let limit=2
    async function getallreviews(page=1){

     try {
          const getreviews =await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}/reviews?page=${page}&limit=${limit}`,{

        method:'GET',
        headers:{
          'Authorization':`Bearer ${localStorage.getItem("token")}`
        }
       })
       const datareviews=await getreviews.json();
      //  console.log("reviews",getreviews)
              console.log("reviews",datareviews)
              // console.log("reviews",datareviews.data[0].user.name)
         setreviewspage(datareviews.paginationResult.numberOfPages)
       setreviews(datareviews.data)
     } catch (error) {
        console.log(error)
     }
    }
    function removereviews(id

    ){
    const newreviews=  reviews.filter((val)=>{return(
        val._id!==id
      )})
      setreviews(newreviews)
    }
   
    // useEffect(()=>{
    //   removereviews()
    // },[reviews])
    useEffect(()=>{
      getallreviews(1)
      
    },[id])
   return [reviews,reviewspage,getallreviews,removereviews]
}

export default GetallreviewsHook;
