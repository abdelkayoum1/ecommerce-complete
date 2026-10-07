import React, { useEffect, useState } from 'react'
import notify from '../../hook/useNotification';
import { Auth } from '../../page/auth/context/auth/authContext';

const addrateHook = (id,getallreviews) => {
//  console.log("ereviewsiddddd",reviews[0]._id)
const {token}=Auth()
    const[ratetext,setratetext]=useState("");
        const[getrev,setgetrev]=useState([]);

    const[ratevalue,setratevalue]=useState(0);

    async function changeratetext(e) {
        setratetext(e.target.value);
        
    }

    async function changeratevalue(val) {
       console.log("val",val)
        setratevalue(val);
    }
     var aduser=""
    if(localStorage.getItem("user")!=null){
       aduser=JSON.parse(  localStorage.getItem("user"));
    }

    async function onsubmit() {
          if(ratetext===""){
            notify("من فضلك ادخل تقييم","error");
            return;
          }
          if(ratevalue===""){
            notify("من فضلك ادخل  ستار")
            return;
          }
        const reviewsdata=await  fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}/reviews`,{
            method:'POST',
          
            headers:{
                
                "Content-Type":'Application/json',
                  "Authorization":`Bearer ${localStorage.getItem("token")}`,
            },
            body:JSON.stringify({
                review:ratetext,
                rating:ratevalue
            })
        });

       
        const data=await reviewsdata.json();
        console.log("reviews",data)
        if(data.errors && data.errors[0].msg==='You already added review on this product'){
            notify("لقد قمت من قبل بالتعبير مسبقا علي هدا المنتج","error")
            return;
        }else{
            notify("تمت عملية التقيين بنجاح","success")
            getallreviews(1)
            setratetext("")
            setratevalue(0)
            
            
        }
        console.log("dataa",data)
    }

    async function getreviews(idd){
        const getrev=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/reviews/${idd}`,{
            method:"GET"
        })
        const dataRev=await getrev.json();
        setgetrev(dataRev.data)
        setratetext(dataRev.data.review)
        setratevalue(dataRev.data.rating)
                console.log("review",dataRev.data.rating)

        // console.log("getrev",dataRev.data._id)
    }
  async function editreviews(idd){
    const editrev=await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/reviews/${idd}`,{
        method:'PUT',
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:({
            review:ratetext,
            rating:ratevalue
        })
    
    }) 
        const data=await editrev.json();
        if(data){
            notify("تم تعديل البيانات بنجاح","success")
            return;
        }else{
            notify("حدثت مشكلة في تعديل ","error")
            return;
        }
  }
  return [setratetext,changeratevalue,aduser,ratetext,ratevalue,changeratetext,onsubmit,getrev,getreviews,editreviews];
}

export default addrateHook
