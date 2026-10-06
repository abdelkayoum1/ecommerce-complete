import React from 'react'

const Removeproduct = async(id) => {
  

  
   try {
      const data=await fetch(`http://127.0.0.1:5000/api/v1/product/${id}`,
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
