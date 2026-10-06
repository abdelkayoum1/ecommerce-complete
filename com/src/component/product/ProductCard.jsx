import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Favoff from '../../assets/fav-off.png';
import Favvon from '../../assets/fav-on.png';

// import Product1  from '../../assets/prod1.png';
import {Box,Typography} from  '@mui/material';
import Rate from '../../assets/rate.png';
import '../../index.css';
import Prod1 from '../../assets/prod1.png'
import {Link} from 'react-router-dom'
import notify from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import { Auth } from '../../page/auth/context/auth/authContext';

const ProductCard = ({product,isfavid,setisfavid,datafav,setdatafav}) => {
  
  console.log("isfav",datafav)
   const[img,setimg]=useState(Favoff);
      const[loading,setloading]=useState(false);
      // const[datafavnew,setdatafavnew]=useState(datafav);
   const {token}=Auth();
  //  const [isfav,setisfavv]=useState(true);
//   console.log("isfavid =", isfavid);
// console.log("product id =", product._id);
  let  isfav =isfavid?.some(isfavid=> isfavid===product._id);
      console.log("9bl",isfav)
const[valid,setvalid]=useState(isfav)
      async   function iok(){
    console.log("9blhih",isfav)
    if(valid){
      
        console.log("صحيح",isfav)
       await  removetowishlist(product._id)
        
       }else{
       await addtowishlist()
                console.log("خطا",isfav)

       }
   }
 
// console.log(isvalid)
 useEffect(() => {
  console.log("PRODUCT ID:", product._id);
  console.log("DATAFAV:", datafav);
}, [datafav, product._id]);
   
  async function  addtowishlist(){

  
      
    try {
     
        const addwishliste=await fetch('http://127.0.0.1:5000/api/v1/wishlist',{
      method:'POST',
      headers:{
        "Content-Type":'Application/json',
        'Authorization':`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        productId:product._id
      })
      
      
    })
  
    if(addwishliste.ok){



      setvalid(true)
      notify("تمت عملية الاضافة في السلة بنجاح","success");
      console.log("قبل setdatafav - datafav:", datafav);

        setisfavid(prev=>
          
       [...prev,product._id] )
       setdatafav(prev=>[...prev,product])
       console.log("isfavid",isfavid)
       console.log("datafav",datafav)
              // console.log("datafavnew",datafavnew)

      return;

    }else if(addwishliste && addwishliste.status===500){
            console.log("دخلت ")

    notify("انت غير مسجل",'error')
    return;
   }else if(addwishliste && addwishliste.status===403){
            console.log("دخلت ")

    notify("انت غير  مصرح لك لانك ادمن",'error')
    return;
   }
   console.log("$$$$$$$$$")
    const data=await addwishliste.json();

    console.log('dataaaaa',data)
   
  
  
    } catch (error) {
      // notify("انت غير مسجل","error")
      console.log(error)
    }

  }
  useEffect(()=>{
    console.log("datafav update",datafav)
  },[datafav])
  async function  removetowishlist(id){

    const removewishlist=await fetch(`http://127.0.0.1:5000/api/v1/wishlist/${id}`,{
      method:'Delete',
      headers:{
        "Content-Type":'Application/json',
        'Authorization':`Bearer ${localStorage.getItem("token")}`
      },
    
      
    })
      if(removewishlist.ok){
    //  setisfavid( isfavid.filter(val=>val!==product._id) )
     setvalid(false)
      notify("تمت حدف الاضافة في السلة بنجاح","success");
      setisfavid(isfavid.filter((val)=>{
        return(val!==product._id)
      }))
      console.log(datafav)
       setdatafav(datafav.filter((val)=>{
        return(val!==product)
      }))
      return;
    }else if(removewishlist && removewishlist.status===500){
      notify("  انت غير مسجل","error");
    }
    const dataremove=await removewishlist.json();
  
    

  }
  useEffect(()=>{
    setvalid(isfav)
  },[isfav])
   useEffect(()=>{
    console.log(isfav)
    if(valid){
      setimg(Favvon)
    }else{
      setimg(Favoff)
    }
  },[valid])
  return (
    <Card  className='cardd'    style={{width:'250px'}}>
        <Link  to={`/products/${product._id}`}>
       
      <Card.Img variant="top" src={product.imageCover}   style={{
  
  }}  />
       </Link>
      <Card.Body>
      
        <img src={img}  style={{cursor:'pointer'}}  onClick={iok}/>
       
        <Card.Text>
{product.title}
        </Card.Text>
       <Box sx={{width:'100%',display:'flex',justifyContent:'space-between'}}>
           <Box  sx={{display:'flex',gap:0.25}}>

            <Typography>جنيه</Typography>
            <Typography  sx={{fontWeight:'bold',fontFamily:'cursive'}}>
              
              { product && product.priceAfterDiscount>0?
                <div className="div">
                  {product.priceAfterDiscount}   <span style={{  textDecoration:product.priceAfterDiscount>0?'line-through':null}}>{product.price}</span>
                </div>:`${product.price}`}



            </Typography>
           </Box>




            <Box  sx={{display:'flex',gap:0.25,alignItems:'center'}}>

            <Typography  sx={{color:'black'}}>{product.ratingsAverage || 0}</Typography>
            <img src={Rate} alt="" width='16px'height='20px'/>
           </Box>
       </Box>
       
      </Card.Body>
    </Card>
  )
}

export default ProductCard
