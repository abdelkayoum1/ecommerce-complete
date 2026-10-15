import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import mobile from "../../assets/mobile1.png";
import { Link } from 'react-router-dom';

const Userorderitem = ({getorder}) => {

  console.log(getorder.product.imageCover)

  if(!getorder.product._id)return;
  return (
<>
  <Box
        sx={{ display: "flex", alignItems: "center",gap:5, justifyContent: "start" }}
      >
      {getorder && getorder?.product._id ? (<Link to={`https://ecommerce-complete-kbe3.onrender.com/products/${getorder?.product?._id}`}>
        <img src={ `https://ecommerce-complete-kbe3.onrender.com/images/${getorder.product?.imageCover}`} alt="" width="100px" />
       </Link>):null}
 
        <Box>
          <Typography  sx={{color:'grey'}}>
     {getorder.product?.title || ""}
          </Typography>
          <Box  sx={{display:'flex',gap:2}}>
            {/* <Typography sx={{color:'grey'}}>{getorder.product.color}</Typography> */}
             <Typography sx={{color:'wheat'}}>{getorder.product?.ratingsAverage ||0}</Typography>
              <Typography sx={{color:'grey'}}>{ `${getorder.product?.ratingsQuantity ||""} تقييم `}</Typography>
          </Box>

           <Box  sx={{display:'flex',gap:2,marginTop:'10px'}}>
            <Typography sx={{color:'grey'}}>الكمية</Typography>
            <input type="number"value={getorder.count}  style={{width:'20%',height:'20px'}} />
          </Box>
          <div className="box"  style={{width:'12%', height:"30px", background:getorder.color, borderRadius:'70%'}}>


          </div>
        </Box>
      </Box>

</>
  )
}

export default Userorderitem
