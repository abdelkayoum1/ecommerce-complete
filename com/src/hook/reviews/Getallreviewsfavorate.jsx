import React, { useEffect, useState } from 'react'

const Getallreviewsfavorate = () => {
 const[favid,setfavid]=useState([]);
 const[datafav,setdatafav]=useState([]);

 async function getallreviews(){
      console.log("🔥 GET wishlist START");

   const getreviews=await  fetch("http://127.0.0.1:5000/api/v1/wishlist",{
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
        imageCover:`http://localhost:5000/images/${item.imageCover}`,
        image:item.images.map(img => `http://localhost:5000/images/${img}`)
      })
      
    }))
 }
 useEffect(()=>  {
   getallreviews()
 },[])
 return [favid,setfavid,getallreviews,datafav,setdatafav];
}

export default Getallreviewsfavorate
