import React from 'react'
import { Col,Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box'

import Button from  "@mui/material/Button";
import addrateHook from '../../hook/reviews/addrateHook';
import { ToastContainer } from 'react-toastify';
// import ViewsDetailproductHome from '../../hook/product/ViewsDetailproducthome';
import { useParams } from 'react-router-dom';
// import GetallreviewsHook from '../../hook/auth/reviews/GetallreviewsHook';
// import * as ReactStarsModule from "react-rating-stars-component";
// console.log(ReactStarsModule);
const RatePost = ({getallreviews}) => {

  // console.log("reviewsssss",reviews)
  const {id}=useParams();
 const  [setratetext,changeratevalue,user,ratetext,ratevalue,changeratetext,onsubmit,getrev]=addrateHook(id,getallreviews);
// const [reviews]=GetallreviewsHook(id);
// console.log("getreviddd",reviews)
 
  // console.log("user",user)
    const setting = {
      
        size: 20,
        count: 5,
        color: "#979797",
        activeColor:'red',
         
          
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
      
        onChange: newValue => {
          changeratevalue(newValue)
        }
        
    };
    return (
        <div style={{ flexDirection:'row-reverse'}}>
        <Box className="mt-3 ">
          <Box sm="12" className="me-5"  sx={{direction:'rtl'}}>
            <Box className=" "  sx={{display:'flex',gap:'10px',alignItems:"center"}}>

              <Typography>{user.name}</Typography>
            
            <ReactStars.default {...setting}  key={ratevalue}  value={ratevalue}/>
            </Box>
          </Box>
        </Box>
        <Box className="border-bottom mx-2">
          <Box className="d-felx me-4 pb-2">
            <textarea
            value={ratetext}
            onChange={changeratetext}
              className="barnd-text input-form-area p-2 mt-3"
              rows="2"
              cols="20"
              style={{width:"100%",textAlign:'end'}}
              
              placeholder="اكتب تعليقك"
            />
            <Box className=" d-flex justify-content-end al">
              <Box className="product-cart-add px-3  py-2 text-center d-inline">
                
                <Button      variant='contained'  onClick={onsubmit}> اضف تعليق</Button>
                 </Box>
            </Box>
          </Box>
        </Box>
        <ToastContainer/>
      </div>
    )
}

export default RatePost