import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Padding } from '@mui/icons-material';
import '../../index.css';
import {Link }from 'react-router-dom'
const UsersideBar = () => {
  return (
  
 <Box   style={{background:'white',width:'100%',marginTop:'5px',height:"300px",padding:'5px',borderRadius:'5px',boxShadow:'0 15px 5px  rgb(0,15,15,0.5)'}}>
      <Box >
      <Link  to='/user/allorder'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
      <div  className=' barnd-text sidbare'style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
      ادارة الطلبيات
    </div>
      </Link>
    <Link  to='/user/favorate'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
      <div   className=' barnd-text sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
     
 القائمة المفضلة
    </div>
    </Link>


    <Link  to='/user/adress'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
      <div   className=' barnd-text sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
   العنوان  الشخصية
    </div>
    </Link>


    <Link  to="/user/prefile"  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
      <div  className=' barnd-text sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
        الملف الشخصي
    </div>
   </Link>


  




    </Box>
    </Box>
  )
}
export default UsersideBar
