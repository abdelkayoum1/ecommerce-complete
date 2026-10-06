import { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import Sort from '../../assets/sort.png'

export default function Search({title,onclick}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   function change(key){
    localStorage.setItem("searchkey",key)
    
    onclick();
    console.log(key)
    setAnchorEl(null)
   }
  return (
    <>
    <Box  sx={{display:'flex',justifyContent:'space-between',margin:'10px'}}>
      <Box
        onClick={handleClick}
        
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "fit-content",
          margin:'5px'
        }}
      >
      
        <Typography sx={{ mr: 1 }}>ترتيب حسب</Typography>
          <img src={Sort} alt="" width='30px' />
      </Box>
      <Typography sx={{direction:'rtl',fontWeight:'bold'}}>{title} </Typography>
    </Box>

      <Menu
     
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <div  style={{padding:'5px',fontFamily:'-apple-system',fontWeight:'bold'}}>
         <MenuItem   onChange={handleClose}  onClick={()=>{change('')}}> عدم ختيار</MenuItem>

         <MenuItem   onChange={handleClose}  onClick={()=>{change('مبيعا')}}>الأكثر مبيعًا</MenuItem>
        <MenuItem onClick={()=>{change('تقيما')}} onChange={handleClose}>الأعلى تقييمًا</MenuItem>
        <MenuItem onClick={()=>{change('السعر من الأقل للأعلى')}} onChange={handleClose}>السعر من الأقل للأعلى</MenuItem>
        <MenuItem onClick={()=>{change('السعر من الأعلى للأقل')}} onChange={handleClose}>السعر من الأعلى للأقل</MenuItem>

       </div>
             </Menu>
    </>
  );
}