import React, { useState,useEffect } from 'react'
import {Row ,Col}from 'react-bootstrap';
import "react-image-gallery/styles/image-gallery.css";

import ProductGellery  from '../../component/product/ProductGellery';
import ProductText  from '../../component/product/ProductText';
import { data, useParams } from 'react-router-dom';
import ViewsDetailproductHome from '../../hook/product/ViewsDetailproducthome';



const ProductDetail = ({detailproduct,changecolor, addtocarte, indexcolor, color}) => {
  const {id}=useParams();
  console.log(id)
  // const[detailproduct,loading]=ViewsDetailproductHome(id);
  // setimage(detailproduct.images);
  // console.log("hih")
  console.log(detailproduct)

  return (
    <div  >
     <Row style={{display:'flex',flexDirection:'row-reverse'}}>
<Col  lg='4'>
<ProductGellery   item={detailproduct}/>
    
</Col>

<Col  lg='8'>

{detailproduct && detailproduct.availableColors && (
  <ProductText item={detailproduct}   changecolor= {changecolor} addtocarte={addtocarte}  indexcolor={indexcolor} color={color}/>
)}
</Col>

      </Row>
    </div>
  )
}

export default ProductDetail
