
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
import '../../index.css';

const AdminSidebar = () => {
  const [show, setShow] = useState(false);

  const links = (
    <Box
      sx={{
        background: 'white',
        width: '100%',
        mt: '5px',
        padding: '5px',
        borderRadius: '5px',
        boxShadow: '0 15px 5px rgb(0,15,15,0.5)',
      }}
    >
      {[
        ['/admin/allproducts', 'ادارة المنتجات'],
        ['/admin/allorder', 'ادارة الطلبيات'],
        ['/admin/addbrand', 'اضف ماركة'],
        ['/admin/addcategory', 'اضف تصنيف'],
        ['/admin/addsubcategory', 'اضف تصنيف فرعي'],
        ['/admin/addproduct/:id', 'اضف منتج'],
        ['/admin/addcoupoun', 'اضف كوبون'],
      ].map(([path, title]) => (
        <Link
          key={path}
          to={path}
          onClick={() => setShow(false)}
          style={{
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '15px',
          }}
        >
          <div
            className="barnd-text sidbare"
            style={{
              borderBottom: '1px solid black',
              cursor: 'pointer',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            {title}
          </div>
        </Link>
      ))}
    </Box>
  );

  return (
    <>
      {/* زر الهاتف فقط */}
      <div className="d-lg-none text-end p-2">
        <Button onClick={() => setShow(true)}>
          ☰ القائمة
        </Button>
      </div>

      {/* Sidebar في الكمبيوتر */}
      <div className="d-none d-lg-block">
        {links}
      </div>

      {/* Drawer في الهاتف */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>لوحة التحكم</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {links}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AdminSidebar;
