import React from 'react'
import Container  from '@mui/material/Container';
import Box  from '@mui/material/Box';
// import Image  from '../../assets/clothe.png';
import Typography  from '@mui/material/Typography';

const CategoryCard = ({title,background,img}) => {
  return (
    <Box  sx={{width:'150px',flexShrink:0,height:'200px'}}>
      <Box  sx={{width:'100%',height:'100px',position:'relative', display: "flex",
    justifyContent: "center"
    
    
   }}>

 <Box
  sx={{
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: background,
    position: "relative",
    
  }}
>
  <Box
    component="img"
    src={img}
    
    sx={{
      objectFit:'fill',
      width: 50,
      height: 80,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
</Box>
      </Box>
        <Typography sx={{ textAlign:'center'}}>{title}</Typography>

    </Box>
  )
}

export default CategoryCard
