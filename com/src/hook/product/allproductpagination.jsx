import React from 'react'
import { useState, useEffect } from "react";

const Allproductpagination = (limit) => {
  const [dataa, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [cptpage, setpage] = useState(0);

  async function getdata(page=1) {
    try {
        // console.log("bda")
        setloading(true)
      const res = await fetch(
        `https://ecommerce-complete-kbe3.onrender.com/api/v1/product?limit=${limit}&page=${page}`,
        {
          method: "Get",
        },
      );
      const data = await res.json();
      // console.log(data.paginationResult);
      setdata(data.data);
      setpage(data.paginationResult.numberOfPages);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
            // console.log("fin")

  }
  function handlepage(page) {
    getdata(page);
  }
  useEffect(() => {
    getdata();
  }, []);

  return [handlepage,getdata,dataa,loading,cptpage];
}

export default Allproductpagination
