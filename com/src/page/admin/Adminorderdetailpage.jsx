import React, { useEffect } from 'react'
import AdminAllorder from "../../component/Admin/AdminaAllOrderpage";
import {Row ,Col, Spinner} from 'react-bootstrap';
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Paginationn from '../../component/utilite/Pagination';
import Box from '@mui/material/Box';
import Adminorderdetail from '../../component/Admin/Adminorderdetail';
import { useParams } from 'react-router-dom';

const Adminorderdetailpage = ({loading,getorderOne,oneorder}) => {

  const {id}=useParams();
console.log("loadinfg")
  console.log(loading)
  useEffect(()=>{
    getorderOne(id)
  },[id])
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
          marginTop:'80px',
          minWidth: 0,
        }}
        className="admin-orders-column"
      >
         
         {loading===true ? <Box  sx={{width:'90%',display:'flex',justifyContent:'center',marginTop:'100px'}}><Spinner animation="border"   variant="primary" /></Box>
         
         :        <Adminorderdetail  getorderOne={getorderOne} oneorder={oneorder}/>
}
        {/* <Adminorderdetail /> */}
       
      </Col>
    </Row>
    </>
  );
};

export default Adminorderdetailpage
