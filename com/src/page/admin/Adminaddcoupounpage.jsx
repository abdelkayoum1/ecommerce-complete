import React from "react";
import { Col, Row } from "react-bootstrap";

import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import Admincategory from "../../component/Admin/Admincategory";
import Adminaddcoupoun from "../../component/Admin/Adminaddcoupoun";

const Adminaddcoupounpage = () => {
  return (
    <Row
      style={{
        direction: "rtl",
        flexWrap: "nowrap",
         
        background: "#f5f5f5", minHeight: "100vh",
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
       <Adminaddcoupoun/>
      </Col>
    </Row>
  );
};

export default Adminaddcoupounpage
