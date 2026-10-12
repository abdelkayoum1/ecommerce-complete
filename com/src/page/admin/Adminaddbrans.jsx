import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../index.css"
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import Adminbrand from "../../component/Admin/Adminbrand";

const Adminaddbrans = () => {
  return (
    <Row
      style={{
        direction: "rtl",
        flexWrap: "nowrap",
      }}
    >
      <Col
      
      xs="auto"
        className="admin-sidebar-column p-0"
      >
        <AdminSidebar />
      </Col>

      <Col
      className="admin-products-column p-0" 
        style={{
         
          minWidth: 0,
        }}
      >
       <Adminbrand/>
      </Col>
    </Row>
  );
};

export default Adminaddbrans
