import React, { useEffect } from 'react'
import Sidefilter from '../../component/category/Categoryheader';
import ProductDetail from '../../component/product/ProductDetail';
import Container from '@mui/material/Container'
import Ratecontainer from '../../component/Rate/Ratecontainer';
import Cardproductcontainer from '../../component/product/Cardproductcontainer';
import ViewsDetailproductfavorate from '../../hook/product/ViewsDetailproductfavorate';
import { useParams } from 'react-router-dom';
import ViewsDetailproductHome from '../../hook/product/ViewsDetailproducthome';
const ProductDetailPage = ({changecolor , addtocarte,indexcolor, color,Gettocart}) => {
const {id}=useParams()
const [detailproduct,loading,categoryid,data]=ViewsDetailproductHome(id)
console.log(categoryid)

const[favorateproduct]=ViewsDetailproductfavorate(categoryid) 


// console.log('favorate')
// console.log("favorateproduct",favorateproduct)
console.log("detail",detailproduct)
  return (
    <div  style={{background:'#F5f5f5'}}>
     <Sidefilter/>
     <Container>

      <ProductDetail detailproduct={detailproduct} Gettocart={Gettocart} changecolor={changecolor}  addtocarte={addtocarte} indexcolor={indexcolor}  color={color}/>
      <Ratecontainer   ratingsQuantity={detailproduct.ratingsQuantity}  ratingsAverage={detailproduct.ratingsAverage}/>
      <Cardproductcontainer  product={favorateproduct}   btntitle='منتجات قد تعجبك' />
      
     </Container>
     
    </div>
  )
}

export default ProductDetailPage
