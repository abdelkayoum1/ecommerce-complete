import React from "react";
import { Col, Row } from "react-bootstrap";

import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import Adminbrand from "../../component/Admin/Adminbrand";
import UsersideBar from "../../component/User/UsersideBar";
import Useralloarderpage from "./Useralloarderpage";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserFavorate from "../../component/User/UserFavorate";
import Useradressecard from "../../component/User/Useradressecard";
import Userprefile from "../../component/User/Userprefile";

const Userprefilepage = () => {
  return (
    <Row
      style={{
        // background: "#f5f5f5",
        direction: "rtl",
        flexWrap: "nowrap",
      }}
    >
      <Col
      lg="auto"
        style={{
          // flex: "0 0 250px",
        }}
        className="desktop"
      >
        <UsersideBar />
      </Col>

      <Col
      xs={12}
        style={{
          // flex: "1 1 auto",
          minWidth: 0,
        }}
      >
       <Userprefile/>
       
      </Col>
     
    </Row>
  );
}

export default Userprefilepage
