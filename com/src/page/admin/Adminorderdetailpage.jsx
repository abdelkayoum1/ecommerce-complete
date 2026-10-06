import React from 'react'
import AdminAllorder from "../../component/Admin/AdminaAllOrderpage";
import {Row ,Col} from 'react-bootstrap';
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Paginationn from '../../component/utilite/Pagination';
import Box from '@mui/material/Box';
import Adminorderdetail from '../../component/Admin/Adminorderdetail';

const Adminorderdetailpage = () => {
  return (
    <>
    
    <Row
      style={{
        direction: "rtl",
        flexWrap: "nowrap",
      }}
    >
      <Col
        style={{
          flex: "0 0 250px",
        }}
      >
        <AdminSidebar />
      </Col>

      <Col
        style={{
          flex: "1 1 auto",
          minWidth: 0,
        }}
      >
         <Box  sx={{direction:'rtl'}}>  ادارة التفاصيل رقم  #123</Box>
        <Adminorderdetail />
       
      </Col>
    </Row>
    </>
  );
};

export default Adminorderdetailpage
