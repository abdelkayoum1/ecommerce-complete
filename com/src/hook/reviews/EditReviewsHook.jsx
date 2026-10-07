import React, { useState } from 'react'
// import { Auth } from '../../../page/auth/context/auth/authContext';
import notify from '../../hook/useNotification';
import GetallreviewsHook from './GetallreviewsHook';
import { useParams } from 'react-router-dom';

const EditReviewsHook = ({itemreviews,getallreviews}) => {

    const {id}=useParams();
//   const   [reviews,reviewspage,getallreviews]=GetallreviewsHook(id);
 let useredit="";
    if(localStorage.getItem('user')!=null){
useredit=JSON.parse(localStorage.getItem('user'));

    }
    const [showedit, setShowedit] = useState(false);
        const [ratetextedit, setratetextedit] = useState(itemreviews.review);
        const [reviewvalueedit, changereviewvalueedit] = useState(itemreviews.rating);

      const handleCloseedit = () => setShowedit(false);
      const handleShowedit = () => setShowedit(true);

 function changeratevalue(val){
        changereviewvalueedit(val);
        console.log(val)
      }
      function changeratetextedit(e){
        setratetextedit(e.target.value);
        console.log(e.target.value)
      }
  async  function handleedit(id){
 try {
     const reviewsedit= await  fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/reviews/${id}`,{
    method:'PUT',
    headers:{
        "Content-Type":'Application/json',
        'Authorization':`Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify({
        review:ratetextedit,

        rating:reviewvalueedit
    })
  })
   const data=await reviewsedit.json();
  handleCloseedit();
//   console.log('reviewsdelete',reviewsdelete)
 
     if(data){
    notify("تمت  عملية  التعديل بنجاح","success")
    getallreviews(1)
   
  }else{
    notify("حدثت مشكلة ","error")
  }
  
 
 } catch (error) {
    console.log(error)
 }
    }


    return [handleCloseedit,handleShowedit,handleedit,showedit,useredit,reviewvalueedit,changeratevalue,changeratetextedit,ratetextedit];
}



export default EditReviewsHook
