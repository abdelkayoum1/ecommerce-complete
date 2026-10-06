import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Laptops from "../../assets/labtop.png";

const Discount = () => {
  return (
    <>
    <Container  sx={{background:'linear-gradient(to right,black,rgb(32, 31, 31))', borderRadius:'10px', width:'100%',height:"150px", display:'flex',alignItems:'center',justifyContent:'space-around'}}>
     <img src={Laptops}  width='200px' alt="" />
    <Typography  sx={{color:'white', fontFamily:'revert'}}>
        خصم  يصل حتي 30 %علي  جهازك علي اللابتوب
    </Typography>
    </Container>
    </>
  )
}

export default Discount
