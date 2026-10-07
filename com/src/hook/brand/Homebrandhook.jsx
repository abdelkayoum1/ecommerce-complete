import {React,useEffect} from 'react'
import { useState } from "react";

const Homebrandhook = () => {
  const [dataa, setdata] = useState([]);
    const [loading, setloading] = useState(true);

  async function getdata() {
   try {
     const res = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/brands", {
      method: "Get",
    });
    const data = await res.json();
        console.log(data.data);

    console.log(data.data[0].name);
    setdata(data.data);
        // console.log(dataa[0].image);
   } catch (error) {
    console.log(error)
   }finally{
       setloading(false)
   }


  }
  useEffect(() => {
    getdata();
  }, []);
return [dataa,loading,getdata];
}

export default Homebrandhook
