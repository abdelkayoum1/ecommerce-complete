import React from 'react'
import AdminAllorder from "../../component/Admin/AdminaAllOrderpage";
import {Row ,Col} from 'react-bootstrap';
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Admindetailperson from "../../component/Admin/Admindetailperson";

import Paginationn from '../../component/utilite/Pagination';
import Box from '@mui/material/Box';

const AdminAllorderpage = () => {
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
         <Box  sx={{direction:'rtl'}}>  ادارة الطلبيات</Box>
        <AdminAllorder />
        <AdminAllorder />
        <AdminAllorder />
        <Admindetailperson/>
        <Paginationn/>
      </Col>
    </Row>
    </>
  );
};

export default AdminAllorderpage
