import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Button from "@mui/material/Button";
import notify from "../../hook/useNotification";
import Useradressitem from "../User/Useradressitem";
import { Link } from "react-router-dom";
import Useradressecard from "../User/Useradressecard";
import AdmincoupnCard from "./AdmincoupnCard";
import Paginationn from "../utilite/Pagination";
import { Box } from "@mui/material";
import CreateCouponHook from "../../hook/Coupoun/CreateCouponHook";
import DeleteCouponHook from "../../hook/Coupoun/DeleteCouponHook";
const Adminaddcoupoun = () => {
  const [Updatecoupoun,createcoupon,name,expire,discount,setname,setexpire,setdiscount,getallcpoupn,setallcpn,setpaginationpagecoupn,allcpn,paginationpageCoupn,deletecoupoun]=CreateCouponHook();
  



  return (
    <div>
      <Row className="justify-content-start "  >
        <div className="admin-content-text pb-4" style={{ fontWeight: "bold" }}>
          اضف كوبون جديد
        </div>
        <Col sm="8">
          <input
            style={{ width: "100%" }}
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder=" اسم الكوبون"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            style={{ width: "100%" }}
            type="text"
            value={expire}
            className="input-form d-block mt-3 px-3"
            placeholder="انتهاء الصلاحية "
            onChange={(e) => setexpire(e.target.value)}
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
          />
          <input
            style={{ width: "100%" }}
            type="text"
            value={discount}
            className="input-form d-block mt-3 px-3"
            placeholder="  نسبة خصم الكوبون"
            onChange={(e) => setdiscount(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <Button
            variant="contained"
            className="btn-save d-inline mt-2 "
            onClick={createcoupon}
          >
            حفظ الكوبون
          </Button>
           
  
        </Col>
        
      </Row>
      <Box  sx={{background:'white',padding:'10px',width:'65%',marginTop:'5px',direction:'ltr'}}>

         {allcpn.length>=0? (allcpn.map((itemcpn)=>{
        return(<AdmincoupnCard    Updatecoupoun={Updatecoupoun} deletecoupoun={deletecoupoun}  paginationpageCoupn={paginationpageCoupn}getallcpoupn={getallcpoupn} allcpnsitem={itemcpn}  key={itemcpn._id}/>)
      })):<h6> منتجات لاتوجد</h6>}
      <Paginationn  pageCount={paginationpageCoupn}  onpress={getallcpoupn}/>
      </Box>



      <ToastContainer />
    </div>
  );
};

export default Adminaddcoupoun;
