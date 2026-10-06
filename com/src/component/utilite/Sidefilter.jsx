import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AllCatgory from "../../hook/category/AllCatgeory";
import Allbrandhook from "../../hook/brand/Allbrandhook";

// import ProductCard from '../../component/product/ProductCard';
const Sidefilter = ({productchecked}) => {
 const [handlepage,getdata,dataa,loading,cptpage]=AllCatgory();
 const[handlebrandpage,getbrand,databrand,loadingbrand,cptpagebrand]=Allbrandhook();
  const[catchecked,setcatchacked]=useState([]);
 
  function click(e){
    console.log("marka",e.target.value)
     var query="";
     let value="";
     let newcatchecked=[];
     value=e.target.value;
   if(value==="0"){
    setcatchacked([]);
   }else{
    if(e.target.checked===true){
      newcatchecked=[...catchecked,value];
       setcatchacked(newcatchecked)
       console.log(newcatchecked)
    }else if(e.target.checked===false){
     const neww= catchecked.filter((e)=>e!==value);
     console.log("new",neww)
      newcatchecked=neww;
      setcatchacked(newcatchecked);
    }
   }
       query=newcatchecked.map(val=>"category[in][]="+val).join("&")
       console.log(query)
       localStorage.setItem("catchecked",query);
       productchecked();

  }
  function pricefrom(e) {
 localStorage.setItem('pricefrom',e.target.value);
      productchecked();
    
    }
  function priceto(e) {
      localStorage.setItem('priceto',e.target.value);
      productchecked();
  }
  return (
    <>
      <div>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
          <Typography sx={{  display:'flex',justifyContent:'end',width:'100%',fontWeight:'bold'}}>الفئة</Typography>
          <Box sx={{ display: "flex",flexDirection:'column',alignItems:'center',gap: 1 }}>
            <Box sx={{ display: "flex" ,alignItems:'center',justifyContent:'end',gap:1,width:'100%'}}>
              
              <Typography >الكل</Typography>
              <input type="checkbox"   value="0"/>
            </Box>

           {dataa? (dataa.map((item)=>{
            return( <Box  sx={{ display: "flex",alignItems:'center',gap:1,justifyContent:'end',width:'100%' }}>
              <Typography>{item.name} </Typography>
              <input  onClick={click} type="checkbox" value={item._id} />
            </Box>)
           })): <h6>لاتوجد تصنيفات</h6>}
        
                     <Typography sx={{ direction: "rtl",justifyContent:'end',width:'100%',fontWeight:'bold' }}>الماركة</Typography> 

           <Box  sx={{ display: "flex",flexDirection:'column',gap: 1 ,width:'100%'}}>
             <Box sx={{ display: "flex" ,alignItems:'center',justifyContent:'end',gap:1,width:'100%'}}>
              
              <Typography >الكل</Typography>
              <input type="checkbox" value="0"/>
            </Box>

           {databrand? (databrand.map((itembrand)=>{
            return( <Box  sx={{ display: "flex",alignItems:'center',gap:1,justifyContent:'end',width:'100%' }}>
              <Typography>{itembrand.name} </Typography>
              <input type="checkbox" onClick={click}  value={itembrand._id}/>
            </Box>)
           })): <h6>لاتوجد ماركة</h6>}
          





           </Box>
             <Typography  sx={{display:'flex',justifyContent:'end',width:'100%',fontWeight:'bold'}}>  السعر</Typography>
            <Box  sx={{ display: "flex",alignItems:'center',gap:1,direction:'rtl',width:'100%' }}>
              <Typography>من</Typography>
              <TextField  onChange={pricefrom} type="number"  size="small" sx={{width:80}}/>
            </Box>

             <Box  sx={{ display: "flex",alignItems:'center',gap:1,direction:'rtl',width:'100%' }}>
              <Typography>الي</Typography>
              <TextField  onChange={priceto}  type="number"  size="small" sx={{width:80}}/>
            </Box>
          </Box>

          
          
        </Box>
      </div>
    </>
  );
};

export default Sidefilter;
