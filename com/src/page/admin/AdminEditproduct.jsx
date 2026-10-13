import React from "react";
import { Col, Row } from "react-bootstrap";

import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import Admincategory from "../../component/Admin/Admincategory";
import AdminAddproductpage from "../../component/Admin/AdminAddproductpage";
import Admineditproductpage from "../../component/Admin/Admineditproductpage";

const AdminEditproduct = () => {
  return (
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
       <Admineditproductpage/>
      </Col>
    </Row>
  );
};



export default AdminEditproduct
