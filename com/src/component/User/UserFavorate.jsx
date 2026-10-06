import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../product/ProductCard'
import laptop from '../../assets/labtop.png'
import Cardproductcontainer from '../product/Cardproductcontainer'

const UserFavorate = ({favid,setfavid,datafav,setdatafav}) => {
// const[datafav,setdatafav]=useState([]);
//   async function getallreviews(){
//     const getreviews=await  fetch("http://127.0.0.1:5000/api/v1/wishlist",{
//       method:'GET',
//       headers:{
//         "Content-Type":'Application.json',
//         'Authorization':`Bearer ${localStorage.getItem("token")}`
//       }
//     });
//     const data=await getreviews.json();
//     console.log("getallreviewswswsws",data.data.map((item)=>item.imageCover))
//     setdatafav(data.data.map((item)=>{
//       return({
//         ...item,
//         imageCover:`http://localhost:5000/images/${item.imageCover}`,
//         image:item.images.map(img => `http://localhost:5000/images/${img}`)
//       })
      
//     }))
//     console.log(datafav)
//   }
//   useEffect(()=>  {
//     getallreviews()
//   },[])
//     useEffect(()=>  {

// console.log(datafav)
//     },[datafav])
  return (
    <div>
      <div className="admin-content-text  pb-4"> المنتجات المفضلة</div>

      <Row> 

{datafav.length>0? (    <Cardproductcontainer datafav={datafav} setdatafav={setdatafav}  product={datafav} favid={favid} setfavid={setfavid}  btntitle=""  title=""/>
):<h6 style={{position:'absolute',bottom:'200px',right:'50%'}}>لاتوجد منتجات</h6>}
  

      </Row>
    </div>
  )
}

export default UserFavorate
