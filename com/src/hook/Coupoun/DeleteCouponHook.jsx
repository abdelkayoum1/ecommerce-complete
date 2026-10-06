import React from 'react'
import notify from '../useNotification';

   const DeleteCouponHook = () => {
        async   function deletecoupoun(id){
           const deletecoupounone = await fetch(`http://localhost:5000/api/v1/coupons/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
     
    });
   if(deletecoupounone.ok){
    notify("حدف الكوبون بنجاح ","success")
   }else{
    console.log("status",deletecoupounone.status)
   }
    const data = await deletecoupounone.json();
     console.log(data)
        }

        return [deletecoupoun];
}

export default DeleteCouponHook
