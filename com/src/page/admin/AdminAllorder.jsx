import React, { useEffect,useState } from 'react'
import AdminAllorder from "../../component/Admin/AdminaAllOrderpage";
import {Row ,Col} from 'react-bootstrap';
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Admindetailperson from "../../component/Admin/Admindetailperson";

import Paginationn from '../../component/utilite/Pagination';
import Box from '@mui/material/Box';
import '../../index.css'
const AdminAllorderpage = ({Getorder,getorder,paginate}) => {
  console.log(getorder)

  useEffect(()=>{
    Getorder();
  },[])
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    
    <Row
      style={{
        direction: "rtl",
        flexWrap:"nowrap",
        margin:0
      }}
    >
      <Col
      lg="auto"
        style={{
          // flex: "0 0 250px",
        }}
        className="admin-sidebar-column"
      >
        <AdminSidebar  open={sidebarOpen} setOpen={setSidebarOpen}/>
      </Col>

      <Col
      xs={12}
        style={{
          minWidth: 0,
        }}
         className="admin-orders-column"
      >
         <div  style={{display:sidebarOpen?"show":""}}>
          <div  className='barnd-text' style={{direction:'rtl',fontWeight:'bold', fontSize:'24px'}}>  ادارة الطلبيات</div>
       {getorder&&  getorder.length>0? (
        getorder.map((item)=>{
          return ( <AdminAllorder  item={item}   />)
        })
       ):null}
        {/* <AdminAllorder />
        <AdminAllorder /> */}
        {/* <Admindetailperson  /> */}
        <Paginationn   onpress={(page)=>Getorder(page)}  pageCount={paginate.numberOfPages}/>
         </div>
      </Col>
    </Row>
    </>
  );
};

export default AdminAllorderpage
