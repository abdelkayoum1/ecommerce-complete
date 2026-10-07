import React from 'react'

const Removeproduct = async(id) => {
  

  
   try {
      const data=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}`,
        {
            method:'Delete'
        }
     )
     if(!data.ok){
        console.log("فشل عملية الحدف");
        return;
     }
     return true;
   } catch (error) {
      console.log(error)
      return false;
   }
    
    
}

export default Removeproduct;
