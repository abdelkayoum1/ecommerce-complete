import React, { useEffect, useState } from 'react'

const Getallreviewsfavorate = () => {
 const[favid,setfavid]=useState([]);
 const[datafav,setdatafav]=useState([]);

 async function getallreviews(){
      console.log("🔥 GET wishlist START");

   const getreviews=await  fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/wishlist",{
     method:'GET',
     headers:{
       "Content-Type":'Application.json',
       'Authorization':`Bearer ${localStorage.getItem("token")}`
     }
   });
   const data=await getreviews.json();
     console.log("🔥 fin wishlist RESULT:", data.data);

   console.log("getallreviewswswsws",data.data.map(item=>item._id))
   setfavid(data.data.map(item=>item._id))
    setdatafav(data.data.map((item)=>{
      return({
        ...item,
        imageCover:`https://ecommerce-complete-kbe3.onrender.com/images/${item.imageCover}`,
        image:item.images.map(img => `https://ecommerce-complete-kbe3.onrender.com/images/${img}`)
      })
      
    }))
 }
 useEffect(()=>  {
   getallreviews()
 },[])
 return [favid,setfavid,getallreviews,datafav,setdatafav];
}

export default Getallreviewsfavorate
