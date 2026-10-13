import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Padding } from '@mui/icons-material';
import '../../index.css';
import {Link }from 'react-router-dom';
import "../../index.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const UsersideBar = ({open,setOpen}) => {
  return (
  

<>
<div  className='sidebar-desktop'>
   <Box   style={{background:'white',width:'100%',marginTop:'55px',height:"300px",padding:'5px',borderRadius:'5px',boxShadow:'0 15px 5px  rgb(0,15,15,0.5)'}}>
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
</div>

{/* #responsive mobile */}

<div  className='sidebar-mobile'>
   <Navbar expand={false}   expanded={open} onToggle={setOpen} >
    <Container fluid>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
       
      />

      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="flex-column w-100">
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

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   {/* <Box   style={{background:'white',width:'100%',marginTop:'5px',height:"300px",padding:'5px',borderRadius:'5px',boxShadow:'0 15px 5px  rgb(0,15,15,0.5)'}}>
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
    </Box> */}
</div>
</>
  )
}
export default UsersideBar
