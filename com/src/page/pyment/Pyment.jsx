import React, { useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Getuseradress from '../../hook/Adress/Getuseradress';


const Pyment = () => {
  const [getuseradresse,getuserdata]=Getuseradress();
  // console.log(getuserdata[0]._id)

 useEffect(()=>{
  getuseradresse()
 },[])

   function  handleadresse(e){
  console.log("hih")
  console.log(e.target.value)
 }
  return (
    <>
    <div>
        <Container  sx={{direction:'rtl',marginTop:'10px'}}> 


            <Typography  sx={{fontWeight:'bold'}}>اختر طريقة  الدفع </Typography>

            <Box  sx={{background:'white',borderRadius:'10px',height:'130px',marginBottom:'10px',textAlign:'center',boxShadow:'0 15px 15px rgb(15 ,15, 15 ,0.5)'}}>

                <Box  sx={{display:'flex',alignItems:'center',gap:2,marginRight:'10px'}}>
                    <input type="radio"  id='2'name='group' />

                    <Typography>الدفع  عن طؤيق الفيزا</Typography>
                </Box>
                 <Box  sx={{display:'flex',alignItems:'center',gap:2,marginRight:'10px'}}>
                   <input type="radio" id='1'  name='group'/>

                    <Typography>الدفع عند الاستسلام </Typography>
                </Box>

 <select name="" onChange={handleadresse} style={{ width:"50%",position:'absolute',right:"30px"}}>
<option value="0"  >اختر العنوان</option>
  {getuserdata  && getuserdata.length>0?
  (getuserdata.map((item)=>{
    return (
    <>
    <option   value={item._id}> {item.alias}</option>
   </>
  )
  }

)
  
  ):<option   >لاتوجد عناوين </option>}
</select>

            </Box>
           <Box  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    direction:'ltr'
  }}>

             <Button  variant='contained'  >اتمام الشراء</Button>
                            <div className="product-price d-inline  my-3  border"  style={{background:'white',padding:'5px',borderRadius:'5px',textAlign:'center'}}>34000 جنية</div>
           </Box>

        </Container>
    </div>
    </>
  )
}

export default Pyment
