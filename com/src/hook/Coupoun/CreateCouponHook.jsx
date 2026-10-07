import React, { useEffect, useState } from 'react'
import notify from '../useNotification';

const CreateCouponHook = () => {
     const [name, setname] = useState("");
      const [expire, setexpire] = useState("");
      const [discount, setdiscount] = useState("");
        const [allcpn,setallcpn] = useState([]);
          const [paginationpageCoupn,setpaginationpagecoupn] = useState("");
  async function createcoupon() {
      if (name === "" ) {
        notify("من فضلك ادخل الاسم كوبون");
        return;
      }
      if (expire === "") {
        notify("من فضلك ادخل تاريخ كوبون");
        return;
      }
      if (discount === "") {
        notify("من فضلك ادخل خصم كوبون");
        return;
      }
  
      const crtcoupn = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          expire,
          discount,
        }),
      });
      if (crtcoupn.ok) {
        notify("تمت اضافة الكوبون بنجاح", "success");
        getallcpoupn()
        setname("");
        setexpire("");
        setdiscount("");
      } else if (crtcoupn && crtcoupn.status === 500) {
        notify("هدا الكوبون موجود من قبل ", "warn");
        setname("");
        setexpire("");
        setdiscount("");
      }
      const data = await crtcoupn.json();
      // console.log(data)
    }

     async function Updatecoupoun(id,name,expire,discount) {
    
  
      const crtcoupn = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          name,
          expire,
          discount,
        }),
      });
      if (crtcoupn.ok) {
        notify("تم تعديل الكوبون بنجاح", "success");
        getallcpoupn()
        setname("");
        setexpire("");
        setdiscount("");
      } 
      const data = await crtcoupn.json();
      // console.log(data)
    }
       async function getallcpoupn(page=1) {
  

    const crtcoupn = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons?limit=2&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
     
    });
   
    const data = await crtcoupn.json();
    setallcpn(data.data)
    // console.log(data.paginationResult.numberOfPages)
    setpaginationpagecoupn(data.paginationResult.numberOfPages)
    // console.log("allcpn",data)
  }
    async   function deletecoupoun(id){
             const deletecoupounone = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/coupons/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "Application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
       
      });
     if(deletecoupounone.ok){
      notify("حدف الكوبون بنجاح ","success")
      getallcpoupn()
     }
          }
  
  useEffect(()=>{
    getallcpoupn()
  },[])
    return [Updatecoupoun,createcoupon,name,expire,discount,setname,setexpire,setdiscount,getallcpoupn,setallcpn,setpaginationpagecoupn,allcpn,paginationpageCoupn,deletecoupoun]
}

export default CreateCouponHook
