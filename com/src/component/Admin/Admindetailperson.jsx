import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'


const Admindetailperson = () => {
  return (
    <div>
      <Container  sx={{background:'white',boxShadow:'0 15px 15px rgb(22,15,15,0.5)',borderRadius:'10px',height:'200px'}}>

        <Typography  sx={{fontWeight:'bold',fontSize:'24px'}}>تفاصيل العميل</Typography>

        <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}> الاسم:</Typography>
        <Typography  sx={{color:'grey'}}> احمد</Typography>


        </Box>
         <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}> رقم الهاتف:</Typography>
        <Typography  sx={{color:'grey'}}> 776403662(+213) </Typography>


        </Box>
           <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}>الامايل:</Typography>
        <Typography  sx={{color:'grey'}}> abdelkayoumkh0@gmail.com</Typography>


        </Box>
        <div className="div"  style={{background:'white',textAlign:'center',margin:'10px',border:2}}>المجموع 200 جنيه</div>

       <Box  sx={{display:'flex',justifyContent:'center'}}>
         <select name="" id=""  style={{width:'50%'}}>
  <option value="طلب"  >حالة الطلب</option>
            <option value="1">قيد التنفيد</option>
            <option value="2">تم الانتهاء</option>
              <option value="3">الغاء</option>
        </select>
        <Button  variant='contained'>حفط</Button>
       </Box>
      </Container>
    </div>
  )
}

export default Admindetailperson
