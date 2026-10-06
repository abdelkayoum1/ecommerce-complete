import {React,useEffect,useState} from 'react'

const ViewsHomeproductHome = () => {

          const [dataproduct,setdataproduct]=useState([]);
    
    async function  getdataproduct(){


  try {
     const prod=await fetch('http://127.0.0.1:5000/api/v1/product',{
    method:'GET',
   });
   const data=await prod.json();
   console.log("hihiihiii")
   console.log(data.data)
   console.log(data.data[0].imageCover)
   setdataproduct(data.data)
  } catch (error) {
    console.log(error)
  }
  }
  const item=dataproduct.slice(0,2);
  useEffect(()=>{
    getdataproduct();
  },[])

  
  return [item]
}

export default ViewsHomeproductHome
