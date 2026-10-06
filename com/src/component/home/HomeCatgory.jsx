import React, { useEffect } from "react";
import SubTitle from "../utilite/subtitle";
import CategoryCard from "../category/CategoryCard";
import Spinner from 'react-bootstrap/Spinner';

import Homecategoryhouk from "../../hook/category/Homecategoryhouk";

import Box from "@mui/material/Box";
const HomeCatgory = () => {
  const [color,dataa,loading,getdata]=Homecategoryhouk();
  return (
    <>
      <div>
        <SubTitle title="المزيد" btntitle="التصنيفات" path="/allcategory" />
        <Box
          sx={{ display: "flex",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    gap: 2,
    marginTop:'10px',
    direction:'rtl'}}
        >
         { loading? <Box  sx={{display:'flex',width:'100%',justifyContent:"center",alignItems:'center'}}>  <Spinner animation="border"   variant="primary" /></Box>:  dataa.slice(0,5).map((item,index)=> { return dataa.length>0 ? (
            <CategoryCard  key={index} title={item.name} img={`http://127.0.0.1:5000/images/${item.image}`} background={color[index]} />
          ) : <h4>لاتوجد بيانات</h4> })}
          {/* <CategoryCard  title="تخفيضات"  img={Cat}  background='#F4DBA4'/>
       <CategoryCard  title="تخفيضات"  img={Laptop}  background='#0034FF'/>
        <CategoryCard  title="تخفيضات"  img={Pic}  background='#F4DBA4'/>
         <CategoryCard  title="تخفيضات"  img={Sale}  background='#FF6262}'/>
         
          <CategoryCard  title="تخفيضات"  img={Clothe}  background='#F4DBA4'/> */}
        </Box>
      </div>
    </>
  );
};

export default HomeCatgory;
