import React from "react";
import { Col, Row } from "react-bootstrap";

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
    
        xs={3}
  style={{
    minWidth: 0,
    paddingLeft: "4px",
    paddingRight: "4px",
  }}
      >
        <AdminSidebar />
      </Col>

      <Col
       xs={9}
  style={{
    minWidth: 0,
    paddingLeft: "4px",
    paddingRight: "4px",
  }}
        // style={{
        //   flex: "1 1 auto",
        //   minWidth: 0,
        // }}
      >
       <Adminbrand/>
      </Col>
    </Row>
  );
};

export default Adminaddbrans
