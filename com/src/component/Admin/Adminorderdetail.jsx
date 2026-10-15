import React, { useEffect } from 'react'
import CartItem from '../Cart/CartItem'
import { Box, Typography,Container } from '@mui/material'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import GetOrderOne from '../../hook/Order/GetOrderOne'
import UserAllorder from "../../component/User/Userallorder";
import UsercartItemorder from '../User/UsercartItemorder'
import Updatepay from '../../hook/Admin/Updatepay'
import notify from '../../hook/useNotification'
import { ToastContainer } from 'react-toastify'

const Adminorderdetail = ({getorderOne,oneorder}) => {

  const {id}=useParams()

  // const  [getorderOne,oneorder]=GetOrderOne()
  console.log(oneorder)
  console.log(id)
  // useEffect(()=>{
  //   getorderOne(id)
   
  // },[id])
    function handlechangepay(e){
     
    setchangepay(e.target.value)
     console.log(e.target.value)
   }

    function handlechangedeliver(e){
    setchangedeliver(e.target.value)
     console.log(e.target.value)
   }
 const [updatepay,changepay,setchangepay,changedeliver,setchangedeliver,updatedeliver]=  Updatepay(id)
 async function changepayofpay(){
  if(changepay==="0"){
        notify("من فضلك اختر قيمة")
        return;
      }
   await updatepay();
   await getorderOne(id);
 }

  async function changedeliverofdeliver(){
    if(changedeliver==="0"){
        notify("من فضلك اختر قيمة")
        return;
      }
   await updatedeliver();
   await getorderOne(id);
 }
  if(!oneorder)return;
  return (
    <>
    

    <div>
   
   <Box className="carteitem"  sx={{background:'white',width:'80%',boxShadow:'0 15px 15px rgb(22,15,15,0.5)',marginLeft:'90px',borderRadius:'5px',padding:'4px'}}> 

     <UsercartItemorder    getorder={oneorder}/>
   </Box>

            <Box  className="تفاصيل" sx={{background:'white',padding:'10px',marginTop:'20px',boxShadow:'0 15px 15px rgb(22,15,15,0.5)',borderRadius:'10px',height:'210px'}}>


         <Typography  sx={{fontWeight:'bold',fontSize:'24px'}}>تفاصيل العميل</Typography>

        <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}> الاسم:</Typography>
        <Typography  sx={{color:'grey'}}> 
          {oneorder.user?.name||'' }
          
          </Typography>


        </Box>
         <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}> رقم الهاتف:</Typography>
        <Typography  sx={{color:'grey'}}> {oneorder.user?.phone ||""}(+213) </Typography>


        </Box>
           <Box sx={{display:'flex',gap:1}}>
        <Typography  sx={{fontWeight:'bold'}}>الامايل:</Typography>
        <Typography  sx={{color:'grey'}}>{oneorder.user?.email||""}</Typography>


        </Box>
        {/* <div className="div"  style={{background:'white',width:'100%',border:"1px solid black",borderRadius:'10px',padding:"5px",textAlign:'center',marginBottom:'10px'}}>المجموع {oneorder.totalOrderPrice} جنيه</div> */}

 <div  style={{display:'flex',justifyContent:'center',gap:'5px'}}>
        <Box  sx={{display:'flex',gap:"5px",borderRadius:'15px'}}>
         <select name="" id="" value={changepay}  style={{width:'55px'}} onChange={handlechangepay} >
  <option value="0"  > الدفع</option>
            <option value="true">تم </option>
            <option value="false">لم يتم </option>
        </select>
        <Button  variant='contained'  onClick={changepayofpay}>حفط</Button>
       </Box>

       
       <Box  sx={{display:'flex',gap:"5px",borderRadius:'15px'}}>
         <select name="" id=""value={changedeliver}  style={{width:'80px'}} onChange={handlechangedeliver} >
  <option value="0"  > التوصيل</option>
            <option value="true">تم </option>
            <option value="false">لم يتم </option>
        </select>
        <Button  variant='contained'  onClick={changedeliverofdeliver}>حفط</Button>
       </Box>
 </div>
     
      {/* <CartItem/>
        <CartItem/>
          <CartItem/> */}
            </Box>
            <ToastContainer/>
    </div>
    </>
  )
}

export default Adminorderdetail
