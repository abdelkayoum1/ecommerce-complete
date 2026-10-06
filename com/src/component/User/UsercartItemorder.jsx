import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../assets/mobile1.png";
import deleteicon from "../../assets/delete.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Userorderitem from "./Userorderitem";

const UsercartItemorder = () => {
  return (
    <>
         
            <Box  sx={{background:'white',marginBottom:'5px',marginLeft:'100px',borderRadius:'5px',padding:'4px'}}>
               <Box className="div"  sx={{color:'black',fontWeight:'bold'}}> طلب رقم #1234</Box>
    

     <Userorderitem/>
        <Userorderitem/>
        
 
          
          <Box  sx={{display:'flex',justifyContent:'space-between'}}>
            <Box  sx={{display:'flex',gap:1}}>
              <Typography  sx={{fontWeight:'bold'}}>الحالة</Typography>
              <Typography  sx={{color:'grey'}}>قيد التنفيد</Typography>
            </Box>
            <Typography>40000 جنيه</Typography>
          </Box>
   </Box>
    </>
  );
};

export default UsercartItemorder;
