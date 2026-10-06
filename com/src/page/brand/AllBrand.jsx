import React from 'react'
import Brandcard  from '../../component/brand/Brandcard';
import Brand1 from '../../assets/brand1.png';

import Brand2 from '../../assets/brand2.png';
import Brand3 from '../../assets/brand3.png';
import Box from '@mui/material/Box';
import Paginationn from '../../component/utilite/Pagination';
import  Allbrandhook from '../../hook/brand/Allbrandhook'
import Spinner from 'react-bootstrap/Spinner';

const AllBrand = () => {

  const [handlepagebrand,getdatabrand,dataabrand,loadingbrand,cptpagebrand]=Allbrandhook()
  return (
    <div>
      الماركت
        <Box  sx={{display:'flex',justifyContent:'center',flexWrap:'wrap', gap:2}}>   

     {loadingbrand ? (cptpagebrand>1 ? (  dataa.map((item,index)=>{
      return (<Brandcard  key={index}  img={`http://127.0.0.1:5000/images/${item.image}`}/>)
     })     
):null):null} 

     

     { loadingbrand?   <Box  sx={{width:'100%',display:'flex',justifyContent:'center'}}><Spinner animation="border"   variant="primary" /></Box> :dataabrand.map((item,index)=> { return dataabrand.length>0 ? (
                     <Brandcard  key={index} title={item.name} img={`http://127.0.0.1:5000/images/${item.image}`}  />
                   ) : <h4>لاتوجد  منتجات</h4>})}
    </Box>
         <Paginationn  pageCount={cptpagebrand}  onpress={getdatabrand}/>

    </div>
  )
}

export default AllBrand;
