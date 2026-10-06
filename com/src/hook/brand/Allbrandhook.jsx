import React from 'react'
import { useState, useEffect } from "react";

const Allbrandhook = () => {
  const [databrand, setdatabrand] = useState([]);
  const [loadingbrand, setloadingbrand] = useState(true);
  const [cptpagebrand, setpagebrand] = useState(0);

  async function getbrand(page=1) {
    try {
      const res = await fetch(
        `http://127.0.0.1:5000/api/v1/brands?limit=3&page=${page}`,
        {
          method: "Get",
        },
      );
      const brand = await res.json();
      // console.log(data.paginationResult);
      setdatabrand(brand.data);
      // console.log(data.data)
      setpagebrand(brand.paginationResult.numberOfPages);
    } catch (error) {
      console.log(error);
    } finally {
      setloadingbrand(false);
    }
  }
  function handlebrandpage(page) {
    getbrand(page);
  }
  useEffect(() => {
    getbrand();
  }, []);

  return [handlebrandpage,getbrand,databrand,loadingbrand,cptpagebrand];
}

export default Allbrandhook
