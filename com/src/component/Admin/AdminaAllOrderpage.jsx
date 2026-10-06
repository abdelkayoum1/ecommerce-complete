import React from 'react'
import { Col,Row } from 'react-bootstrap'
import mobile from '../../assets/mobile1.png'
import deleteicon from '../../assets/delete.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const AdminaAllOrder = () => {
    return (
      <>
      
    
        <Container  sx={{background:'white',borderRadius:'10px',boxShadow:'0 15px 15px rgb(15 ,15, 15 ,0.5)',marginRight:'5px'}}>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">الطلب رقم #123</div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2"  style={{color:'grey'}}>ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <Link to='/admin/order/:id'  style={{textDecoration:'none'}}>
              <div className="d-inline pt-2 cat-title"  style={{color:'grey'}}>
                آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
              
              </div>
              </Link>
              <div className="d-inline pt-2 cat-rate me-2"  style={{color:'grey'}}>4.5</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1"  style={{display:'flex',alignItems:'center'}}>
              <div className="cat-text d-inline"  style={{color:'grey'}}>الماركة :</div>
              <div className="barnd-text d-inline mx-1"  style={{fontWeight:'bold'}}>ابل </div>
                  <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C",width:'20px',height:'20px',borderRadius:'50%' }}></div>
            </Col>
          </Row>
        
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline"  style={{color:'grey'}}>الكميه</div>
                <input
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
              </div>
              <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
      </Container>
      </>
    )
}

export default AdminaAllOrder