import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Padding } from '@mui/icons-material';
import '../../index.css';
import {Link }from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const AdminSidebar = () => {
  return (

    <Navbar expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
              <NavDropdown.Item href="#action/3.1">
                  <Link  to='/admin/allproducts'  style={{textDecoration:'none',color:'balck',fontWeight:'bold',fontSize:'15px'}}>
      <div  className='barnd-text 'style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
      ادارة المنتجات
    </div>
      </Link>
              </NavDropdown.Item>

                 <NavDropdown.Item href="#action/3.1">
                  <Link  to='/admin/allorder'  style={{textDecoration:'none',fontWeight:'bold',fontSize:'15px'}}>
      <div  className='barnd-text 'style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
     ادارة الطلبيات
    </div>
      </Link>
              </NavDropdown.Item>
            
            
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
//  <Box   style={{background:'white',width:'100%',marginTop:'5px',height:"300px",padding:'5px',borderRadius:'5px',boxShadow:'0 15px 5px  rgb(0,15,15,0.5)'}}>
//       <Box >
    //   <Link  to='/admin/allproducts'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
    //   <div  className='barnd-text sidbare'style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
    //   ادارة المنتجات
    // </div>
    //   </Link>
    // <Link  to='/admin/allorder'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div   className='barnd-text  sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
     
//        ادارة الطلبيات
//     </div>
//     </Link>


//     <Link  to='/admin/addbrand'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div   className='barnd-text  sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
//  اضف  ماركة
//     </div>
//     </Link>


//     <Link  to='/admin/addcategory'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div  className='barnd-text  sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
//        اضف تصنيف
//     </div>
//    </Link>

// <Link  to='/admin/addsubcategory'  style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div  className=' barnd-text sidbare'  style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}} >
//     اضف  تصنيف فرعي 
//     </div>
//     </Link>
//     <Link  to='/admin/addproduct/:id'   style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div  className=' barnd-text sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}}>
//      اضف منتج
//     </div>
//     </Link>

//      <Link  to='/admin/addcoupoun'   style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'15px'}}>
//       <div  className=' barnd-text sidbare' style={{borderBottom:'1px solid black',cursor:'pointer',padding:'10px',textAlign:'center'}}>
//      اضف كوبون
//     </div>
//     </Link>




//     </Box>
//     </Box>
  )
}

export default AdminSidebar
