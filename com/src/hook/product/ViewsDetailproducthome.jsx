import {React,useEffect,useState} from 'react'
import ViewsDetailproductfavorate from './ViewsDetailproductfavorate';

const ViewsDetailproductHome = (id) => {
   const[loading,setloading]=useState(false);
          const [detailproduct,setdetailproduct]=useState([]);
     const[categoryid,setcategoryid]=useState();
    async function  getdetailproduct(){


  try {
     const detailproduct=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}`,{
    method:'GET',
   });
   setloading(false)
   const data=await detailproduct.json();
   console.log("detailproduct")
   console.log("",data)
  //  console.log("catgoriid",data.data.category._id)
    if(data.data.category._id)

   setcategoryid(data.data.category._id)
   setdetailproduct(data.data)
  } catch (error) {
    console.log(error)
  }finally{
    setloading(true)
  }
 
  }
  
  useEffect(()=>{
    getdetailproduct();
  },[])

  
    return [detailproduct,loading,categoryid];

}

export default ViewsDetailproductHome;
