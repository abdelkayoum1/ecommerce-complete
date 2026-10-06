import React from 'react'
import SubTitle from '../utilite/subtitle';
import Brandcard from '../brand/Brandcard';
import Brand1 from '../../assets/brand1.png';

import Brand2 from '../../assets/brand2.png';
import Brand3 from '../../assets/brand3.png';
import Box from '@mui/material/Box'
import Homebrandhook from '../../hook/brand/Homebrandhook';
import Spinner from 'react-bootstrap/Spinner';

const Brandfeature = ({title,btntitle}) => {
  const [dataa,loading]=Homebrandhook();
  return (
    <div>
      <SubTitle title={title} btntitle={btntitle}  path='/allbrand'/>
    <Box  sx={{display:'flex',justifyContent:'center',flexWrap:'wrap', gap:2}}>   

    


      { loading?   <Box  sx={{width:'100%',display:'flex',justifyContent:'center'}}><Spinner animation="border"   variant="primary" /></Box> :dataa.slice(0,4).map((item,index)=> { return dataa.length>0 ? (
                     <Brandcard  key={index}  img={`http://127.0.0.1:5000/images/${item.image}`}  />
                   ) : <h4>لاتوجد  منتجات</h4>})}
        
               
     
    </Box>
    </div>
  )
}

export default Brandfeature
