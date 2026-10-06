import React from "react";
import { Col, Row } from "react-bootstrap";

import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import Adminbrand from "../../component/Admin/Adminbrand";
import UsersideBar from "../../component/User/UsersideBar";
import Useralloarderpage from "../../page/User/Useralloarderpage";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserFavorate from "../../component/User/UserFavorate";
import Useradressecard from "../../component/User/Useradressecard";
import Usereditadresse from "../../component/User/Usereditadresse";

const UserEditadressepage = () => {
  return (
    <Row
      style={{
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
        <UsersideBar />
      </Col>

      <Col
        style={{
          flex: "1 1 auto",
          minWidth: 0,
        }}
      >
       <Usereditadresse/>
       
      </Col>
     
    </Row>
  );
}

export default UserEditadressepage
