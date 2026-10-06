import React from "react";
import { Col, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import AdminSidebar from "../../component/Admin/AdminSidebar";
import Adminallproducts from "../../component/Admin/Adminallproducts";
import Paginationn from "../../component/utilite/Pagination";
import ViewsSearchproductHome from "../../hook/product/ViewsSearchproducthome";
import Allproductpagination from "../../hook/product/allproductpagination";
import { Box } from "@mui/material";
const AdminAllproduct = () => {
 const  [dataproduct]=ViewsSearchproductHome();
    const  [handlepage,getdata,dataa,loading,cptpage]=Allproductpagination(10); 
  return (
    <Row
      style={{
        direction: "rtl",
        flexWrap: "nowrap",
      }}
    >
      <Col
        style={{
          flex: "0 0 250px",
        }}
      >
        <AdminSidebar />
      </Col>

      <Col
        style={{
          flex: "1 1 auto",
          minWidth: 0,
        }}
      >
{loading? ( <Box sx={{width:"100%",display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px'}}> <Spinner/> </Box>
):<Adminallproducts dataitem={dataa}  getdata={getdata}/>}
  {cptpage>1 ?  (<Paginationn pageCount={cptpage} onpress={handlepage} />):null}      </Col>
    </Row>
  );
};
export default AdminAllproduct;