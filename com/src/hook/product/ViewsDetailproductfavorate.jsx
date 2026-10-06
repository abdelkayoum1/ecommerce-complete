import {React,useEffect,useState} from 'react'

const ViewsDetailproductfavorate = (id) => {
          const [favorateproduct,setfavorateproduct]=useState([]);
    
    async function  getfavorateproduct(){

       if(!id)return;
  try {
     const favorateproduct=await fetch(`http://127.0.0.1:5000/api/v1/product/?category=${id}`,{
    method:'GET',
    headers:{
      "Content-Type":"Application/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
   });
//    setloading(false)
   const data=await favorateproduct.json();
   
   setfavorateproduct(data.data)
  } catch (error) {
    console.log(error)
  }
 
  }
  
  useEffect(()=>{
    getfavorateproduct();
  },[id])

  
    return [favorateproduct];

}

export default ViewsDetailproductfavorate;
