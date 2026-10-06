import React, { useEffect, useState } from 'react'
import {  Col,Row } from 'react-bootstrap'
import mobile from '../../assets/mobile1.png'
import deleteicon from '../../assets/delete.png';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import '../../index.css'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const CartItem = ({products,datacart,Removeallcart,setdatacart,Deletecart,Updatecarteitem,Gettocarte}) => {
  
  console.log(datacart)
    // console.log(products)

    async   function deletee(){
     await Deletecart()
       
    setdatacart([])
    }
    const [count,setcount]=useState(datacart.count)

    // useEffect(()=>{
    //   Gettocarte()
    // },[])
     useEffect(()=>{
    setcount(datacart.count)
  },[datacart.count])

    return (
        <Container  sx={{borderRadius:'10px',height:'180px',background:'rgb(204, 202, 206)',marginRight:'5px'}}>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2" style={{gap:'20px'}}>
        <img width="160px" height="140px" src={`http://localhost:5000/images/${datacart.product.imageCover}`} style={{objectFit:'fill',marginTop:'5px',borderRadius:'5px'}} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="barnd-text   d-inline pt-2 cat-text">{datacart.product.category.name}</div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px"  style={{cursor:'pointer'}} height="24px" onClick={deletee} />
               <Link style={{textDecoration:'none'}} onClick={Removeallcart}> <div className="barnd-text  cat-text d-inline me-2">ازاله</div> </Link>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
               {datacart.product.title}
              
              </div>
              <div className="d-inline pt-2 cat-rate me-2">{datacart.product.ratingsAverage ||0}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="barnd-text  cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">{datacart.product.brand.name || ""} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex gap-2">
              <div
                className="color ms-2 "
                style={{ backgroundColor: datacart.color,width:'30px',height:'30px',borderRadius:'50%' }}></div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between align-Item-center">
              <div className="d-inline pt-2 d-flex">
                <div className="barnd-text   cat-text  d-inline">الكميه</div>
                <input
                value={count}
                onChange={(e)=>setcount(e.target.value)}
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />

              <Button variant='contained'  sx={{position:'relative',top:'-10px'}}  onClick={()=>{Updatecarteitem(datacart._id,count)}}>تغيير </Button>
              </div>
              <div className="d-inline pt-2 barnd-text">  {`${datacart.price || 0}`} جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
    
      </Container>
    )
}

export default CartItem