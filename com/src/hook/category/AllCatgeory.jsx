import React from 'react'
import { useState, useEffect } from "react";

const AllCatgory = () => {
  const [dataa, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [cptpage, setpage] = useState(0);

  async function getdata(page=1) {
    try {
      const res = await fetch(
        `https://ecommerce-complete-kbe3.onrender.com/api/v1/category?limit=3&page=${page}`,
        {
          method: "Get",
        },
      );
      const data = await res.json();
      console.log(data.paginationResult);
      setdata(data.data);
      setpage(data.paginationResult.numberOfPages);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }
  function handlepage(page) {
    getdata(page);
  }
  useEffect(() => {
    getdata();
  }, []);

  return [handlepage,getdata,dataa,loading,cptpage];
}

export default AllCatgory
