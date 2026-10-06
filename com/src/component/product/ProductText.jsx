import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from '@mui/material/Button'
import AddtocartHook from "../../hook/Cart/AddtocartHook";


const ProductText = ({item,changecolor, addtocarte, indexcolor, color}) => {
//   console.log("lllllllllllllllllll")
//   // console.log(item.availableColors) 
//   // console.log(item?.availableColors?.length) 
//   console.log("ITEM =", item);
// console.log("COLORS =", item?.availableColors);
// console.log("LENGTH =", item?.availableColors?.length);
console.log(item)

// const [changecolor,addtocarte,indexcolor,color]=AddtocartHook();





  return (
    <div style={{ direction: "rtl" }}>
      <Row className="mt-2">
        <div className="barnd-text cat-text">{item?.category?.name} </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="  barnd-text cat-title d-inline">
           {item.title}<div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline"  style={{color:'black'}}>الماركة :</div>
          <div className="barnd-text d-inline mx-1"  style={{color:'grey',fontFamily:'-apple-system'}}>{item?.brand?.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="  mt-1 d-flex">
       
       {item.availableColors.map((colors,index)=>{
        console.log(colors)
        return ( <div
          value={color}
            className="color ms-2"
            onClick={()=>changecolor(index,colors)}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: colors,
              cursor:'pointer',
              border:indexcolor===index?  '1.5px solid black':null
            }}
          ></div>)
       })}
                   <div className="cat-text d-inline"  style={{color:'black'}}>الكمية المتاحة :{item.quantity}</div>

          
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="barnd-text mt-2">
        <Col md="10">
          <div className="product-description d-inline">
           {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12"  >
         { item && item.priceAfterDiscount>0?
          <div className=" barnd-text product-price d-inline px-3 py-3 border  mb:'10px">
             
                 <span style={{  textDecoration:item.priceAfterDiscount>0?'line-through':null}}>{item.price}</span> {item.priceAfterDiscount}  جنيه 
                </div>:`${item.price}جنيه`}

          <div className="product-cart-add px-3 py-3 d-inline mx-3">
           <Button onClick={()=>addtocarte(item._id)} variant="contained"> اضف للعربة</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
