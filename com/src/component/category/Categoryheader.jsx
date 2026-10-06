import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Categoryheader = () => {
  return (
    <>
  
    <div className=" div" style={{marginBottom:'15px'}}>
      <Container  sx={{display:'flex',justifyContent:'flex', gap:2, height: "50px", mt:'5px', direction:'rtl'}}>
        <Typography  className="  barnd-text cat-header" >الكل</Typography>
        <Typography   className="  barnd-text cat-header" >الكترونيات</Typography>
        <Typography  className="  barnd-text cat-header">ملابس </Typography>
        <Typography className="  barnd-text cat-header" >كهربائية</Typography> 
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography className="  barnd-text cat-header" >تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">تخفيصات</Typography>
        <Typography  className="  barnd-text cat-header">المزيد</Typography>
      </Container>
      </div>
    </>
  );
};

export default Categoryheader;
