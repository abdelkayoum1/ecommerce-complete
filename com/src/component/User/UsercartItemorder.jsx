import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../assets/mobile1.png";
import deleteicon from "../../assets/delete.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Userorderitem from "./Userorderitem";

const UsercartItemorder = ({getorder,results}) => {

  console.log(getorder)

  return (
    <>
          
            <Box  sx={{width:'80%',background:'#f5f5f5',marginBottom:'15px',marginLeft:'100px',borderRadius:'5px',padding:'4px'}}>
              
                             <Box className="div"  sx={{color:'black',fontWeight:'bold'}}> طلب من {getorder.user?.name || ""}</Box>

               <Box className="div"  sx={{color:'black',fontWeight:'bold'}}>   تم بتاريخ  {new Date(getorder.createdAt).toLocaleDateString("fr-FR")}</Box>
    

     {getorder && getorder.cartItems?.length>0? (
      getorder?.cartItems?.map((item)=>{
    return (<Userorderitem getorder={item}  key={item._id}   results={results}/>)
      })
     ):null}
        {/* <Userorderitem/> */}
        
 
          
          <Box  sx={{display:'flex',justifyContent:'space-between',gap:5}}>
           <Box  sx={{gap:5,display:'flex'}}>
             <Box  sx={{display:'flex',gap:1}}>
              <Typography  sx={{fontWeight:'bold'}}>  التوصيل</Typography>
              <Typography  sx={{color:'grey'}}>{getorder.isDelivered===true?'تم ':'لم يتم '} </Typography>
            </Box>
             <Box  sx={{display:'flex',gap:1}}>
              <Typography  sx={{fontWeight:'bold'}}>  الدفع</Typography>
              <Typography  sx={{color:'grey'}}>{getorder.isPaid===true?'تم ':'لم يتم '} </Typography>
            </Box>
             <Box  sx={{display:'flex',gap:1}}>
              <Typography  sx={{fontWeight:'bold'}}>  الدفع</Typography>
              <Typography  sx={{color:'grey'}}>{getorder.paymentMethodType==="cash"?'كاش ':' بطاقة دهبية '} </Typography>
            </Box>
           </Box>
            <Typography>{getorder.totalOrderPrice||0} دج</Typography>
          </Box>
   </Box>
    </>
  );
};

export default UsercartItemorder;
