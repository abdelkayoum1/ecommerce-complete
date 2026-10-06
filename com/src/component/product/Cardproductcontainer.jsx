import {React,useEffect,useState} from 'react'
import Subtitle from '../../component/utilite/subtitle';
import ProductCard from '../../component/product/ProductCard'
import Product1  from '../../assets/prod1.png';
import Mobile1  from '../../assets/mobile1.png';
import Mobile2  from '../../assets/mobile2.png';
import Box from '@mui/material/Box'
import { ToastContainer } from 'react-toastify';
import Getallreviewsfavorate from '../../hook/reviews/Getallreviewsfavorate';
const Cardproductcontainer = ({title,btntitle,path,product,favid,setfavid,datafav,setdatafav}) => {

// console.log("khelifaaaaaaaaaaaaaa")
console.log(product)

  
  return (

    <>
    <div  >
      <Subtitle  title={title}  btntitle={btntitle}  path={path}/>
     <Box  sx={{display:'flex', flexWrap:'wrap',justifyContent:"center",margin:'20px'}}>


    {product ?  (product.map((item,index)=>{
      return (<ProductCard key={item._id} isfavid={favid} product={item}  datafav={datafav} setdatafav={setdatafav}  setisfavid={setfavid}/>)
    }) 
):<h6>لا توجد منتجات</h6>}
      


     </Box>

    </div>
    
    </>
  )

}

export default Cardproductcontainer
