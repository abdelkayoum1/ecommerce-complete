import React from 'react'
import AdminAllorder from "../../component/Admin/AdminaAllOrderpage";
import {Row ,Col, Spinner} from 'react-bootstrap';
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Paginationn from '../../component/utilite/Pagination';
import Box from '@mui/material/Box';
import Adminorderdetail from '../../component/Admin/Adminorderdetail';

const Adminorderdetailpage = ({loading}) => {

  console.log(loading)
  return (
    <>
    
    <Row
      style={{
        direction: "rtl",
        flexWrap: "nowrap",
      }}
    >
      <Col
      lg="auto"
        style={{
          // flex: "0 0 250px",
        }}
           className="admin-sidebar-column"
      >
        <AdminSidebar />
      </Col>

      <Col
      xs={12}
        style={{
          // flex: "1 1 auto",
          minWidth: 0,
        }}
        className="admin-orders-column"
      >
         
         {loading===true ? <Box  sx={{width:'100%',display:'flex',justifyContent:'center'}}><Spinner animation="border"   variant="primary" /></Box>
         
         :        <Adminorderdetail />
}
        {/* <Adminorderdetail /> */}
       
      </Col>
    </Row>
    </>
  );
};

export default Adminorderdetailpage
