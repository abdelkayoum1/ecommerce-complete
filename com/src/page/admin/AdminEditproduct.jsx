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
       <Admineditproductpage/>
      </Col>
    </Row>
  );
};



export default AdminEditproduct
