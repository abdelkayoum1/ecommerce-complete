import {React,useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Product1 from "../../assets/prod1.png";
import { Box, Typography } from "@mui/material";
import Rate from "../../assets/rate.png";
import "../../index.css";

import { Link } from "react-router-dom";
import Removeproduct from '../../hook/product/Removeproduct'
import Allproductpagination from "../../hook/product/allproductpagination";

import Modal from 'react-bootstrap/Modal';

const Adminallproduct = ({ item,getdata }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  function handleremove(id){
   const succes= deletee(id);
    if(succes){
      getdata(1)
    }
    handleClose()
  }
  function deletee(id){
    const succes=Removeproduct(id);
    if(succes){
      getdata(1)
    }
    handleClose()
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>تاكيد الحدف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         هل انت متاكد من عملية حدف المنتج
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={()=>handleremove(item._id)}>حدف</Button>
        </Modal.Footer>
      </Modal>

    <Card className="cardd" style={{ width: "250px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography  onClick={()=>handleShow()} sx={{ color: "grey", cursor: "pointer" }}>
          ازالة{" "}
        </Typography>
       <Link to ={`/admin/editproduct/${item._id}`} style={{textDecoration:'none'}}>
        <Typography   sx={{ color: "grey", cursor: "pointer" }}>
          تعديل{" "}
        </Typography>
       </Link>
      </Box>
      <Link to="/products/:id">
        <Card.Img
          variant="top"
          src={item.imageCover}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "contain",
          }}
        />
      </Link>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: 0.25 }}>
            <Typography sx={{ color: "black" }}>
              {item.ratingsQuantity}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 0.25, alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontFamily: "cursive", display:'flex' }}>
             { item && item.priceAfterDiscount>0?
          <div >
             
                <span style={{  textDecoration:item.priceAfterDiscount>0?'line-through':null}}>{item.price}</span>  {item.priceAfterDiscount}   
                </div>:`${item.price}`}
                            <Typography>جنيه</Typography>

            </Typography>
          </Box>
        </Box>
      </Card.Body>
    </Card>
    </>
  );
};

export default Adminallproduct;
