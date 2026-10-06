import React from 'react'
import Adminallproduct from '../../component/Admin/Adminallproduct';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
const Adminallproducts = ({dataitem,getdata}) => {
  return (
    <div  >
      <Box >   
        <Typography>ادارة جميع المنتجات</Typography>
      </Box>
    <Box  sx={{display:'flex',flexWrap:'wrap'}}>
      {dataitem? (dataitem.map((item,index)=>{
        return ( <Adminallproduct  getdata={getdata}  item={item}  key={index}/>)
      })):null}
       
       {/* <Adminallproduct/>
        <Adminallproduct/>
         <Adminallproduct/>
          <Adminallproduct/>
           <Adminallproduct/> */}
    </Box>
    </div>
  )
}

export default Adminallproducts
