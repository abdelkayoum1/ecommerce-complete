
import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import '../../index.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../index.css'

const AdminSidebar = ({open,setOpen}) => {

  
  return (
    <>
      {/* الكمبيوتر: Sidebar القديم */}
      <div className="sidebar-desktop">
        <Box
          sx={{
            background: 'white',
            width: '100%',
            marginTop: '5px',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 15px 5px rgb(0,15,15,0.5)',
          }}
        >
          <Link to="/admin/allproducts" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              ادارة المنتجات
            </div>
          </Link>

          <Link to="/admin/allorder" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              ادارة الطلبيات
            </div>
          </Link>

          <Link to="/admin/addbrand" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف ماركة
            </div>
          </Link>

          <Link to="/admin/addcategory" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف تصنيف
            </div>
          </Link>

          <Link to="/admin/addsubcategory" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف تصنيف فرعي
            </div>
          </Link>

          <Link to="/admin/addproduct/:id" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف منتج
            </div>
          </Link>

          <Link to="/admin/addcoupoun" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف كوبون
            </div>
          </Link>
        </Box>
      </div>

      {/* الهاتف: Navbar */}
     
<div
  className="sidebar-mobile"
 
>
  <Navbar expand={false}    expanded={open} onToggle={setOpen}>
    <Container fluid>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
       
      />

      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="flex-column w-100">
         <Link to="/admin/allproducts" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              ادارة المنتجات
            </div>
          </Link>

         <Link to="/admin/allorder" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              ادارة الطلبيات
            </div>
          </Link>

          <Link to="/admin/addbrand" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف ماركة
            </div>
          </Link>

         <Link to="/admin/addcategory" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف تصنيف
            </div>
          </Link>

          <Link to="/admin/addsubcategory" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف تصنيف فرعي
            </div>
          </Link>

         <Link to="/admin/addproduct/:id" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف منتج
            </div>
          </Link>

          <Link to="/admin/addcoupoun" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '15px' }}>
            <div className="barnd-text sidbare" style={{ borderBottom: '1px solid black', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
              اضف كوبون
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>

    </>
  );
};

export default AdminSidebar;
