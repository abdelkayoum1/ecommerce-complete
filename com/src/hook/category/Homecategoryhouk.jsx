import {React,useEffect} from 'react'
import { useState } from "react";

const Homecategoryhouk = () => {
  const color=["#FFD3E8","#F4DB45","#55CFDF","#FF6262","#0034ff","#FFD3E8"]
  const [dataa, setdata] = useState([]);
    const [loading, setloading] = useState(true);

  async function getdata() {
   try {
     const res = await fetch("http://127.0.0.1:5000/api/v1/category", {
      method: "Get",
    });
    const data = await res.json();
    console.log(data.data);
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
return [color,dataa,loading,getdata];
}

export default Homecategoryhouk
