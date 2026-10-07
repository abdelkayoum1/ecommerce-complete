import React, { useState } from 'react'
import { Auth } from '../../page/auth/context/auth/authContext';
import notify from '../useNotification';
import GetallreviewsHook from './GetallreviewsHook';
import { useParams } from 'react-router-dom';

const RemovereviewsHook = (removereviews) => {
    const {id}=useParams();
  const   [reviews,reviewspage,getallreviews]=GetallreviewsHook(id);
 let user="";
 const {token}=Auth();
    if(localStorage.getItem('user')!=null){
user=JSON.parse(localStorage.getItem('user'));

    }
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  async  function handleremove(id){
 try {
     const reviewsdelete= await  fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/reviews/${id}`,{
    method:'DELETE',
    headers:{
        'Authorization':`Bearer ${token}`
    }
  })
 
  handleClose();
  console.log('reviewsdelete',reviewsdelete)
 
     if(reviewsdelete){
    notify("تمت  عملية  الحدف بنجاح","success")
    removereviews(id)
   
  }
  
 
 } catch (error) {
    console.log(error)
 }
    }


    return [handleClose,handleShow,handleremove,show,user];
}

export default RemovereviewsHook
