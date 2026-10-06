import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Categoryheader from "../../component/category/Categoryheader";
import Search from "../../component/utilite/Search";
import Container from "@mui/material/Container";
import Sidefilter from "../../component/utilite/Sidefilter";


import Pagination from '../../component/utilite/Pagination'
import Cardproductcontainer from "../../component/product/Cardproductcontainer";
import ViewsSearchproductHome from "../../hook/product/ViewsSearchproducthome";
import Allproductpagination from "../../hook/product/allproductpagination";
const ProductPage = ({dataproduct,pagination,paginationpage,getdataproductsearch,favid,setfavid,datafav,setdatafav}) => {
console.log(dataproduct)
    // const[dataproduct,getdataproductsearch,getdatasearch]=ViewsSearchproductHome();
   const [handlepage,getdata,dataa,loading,cptpage]=Allproductpagination(2);
  //  console.log("PRODUCT PAGE =", dataproduct);
  return (
    <>
      <Box>
        <Categoryheader />
        <Container>
          <Search   onclick={getdataproductsearch} title=  {  `هناك ${pagination} نتيجة بحث `  }  />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "end",
                flexShrink: 2,
               
                justifyContent:'end',
                width:'100%'
              }}
            >
             {  dataproduct && dataproduct.length>0? <Cardproductcontainer   datafav={datafav} setdatafav={setdatafav} favid={favid} setfavid={setfavid}  product={dataproduct}  btntitle=""  title=""/>:<h6 style={{position:'absolute',bottom:'200px',right:'50%'}}>لاتوجد منتجات</h6>}
              {/* <ProductCard   img={Product1} product={dataproduct}/>
              <ProductCard img={Product1}product={dataproduct} />
               <ProductCard img={Product1} product={dataproduct}/>
                <ProductCard img={Product1} product={dataproduct}/> */}
                
            
            </Box>

            <Box
              sx={{
                width: 250,
                flexShrink: 0,
              }}
            >
              <Sidefilter  productchecked={getdataproductsearch}/>
            </Box>
            
          </Box>
          <Pagination  onpress={getdataproductsearch}  pageCount={paginationpage} />
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
