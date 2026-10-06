import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
// import Button  from '@mui/material/Button'
import Container  from '@mui/material/Container'
import notify from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';

const CartCheckout = ({isvalid,Deletecart,products,settotalAfterDiscount,totalAfterDiscount,coupon,setcoupoun,Updatecoupon,datacart,Gettocarte}) => {
   useEffect(()=> {
    setcoupoun(datacart.coupon)
   },[datacart.coupon])
  console.log(products)
   const navigate=useNavigate()
//   const [isvalid,setisvalid]=useState(false)


//   async function getvalid(){
//     setisvalid(!isvalid)
//   await  Updatecoupon(coupon)
    
//     console.log(isvalid)
//   }
async function handlepayer(){
 if(products.length>=1){
    console.log("hih")
    navigate("/order/pyment")
 }else{
        console.log("no")

    notify("من فضلك  اضف الي العربة" ,"warn")
}

}
    return (

        <Container sx={{marginLeft:'10px',width:'300px',padding:'5px',background:'white',boxShadow:'0 15px 15px rgb(15 ,15, 15 ,0.5)',borderRadius:'10px'}} >
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                    value={coupon}
                    style={{borderColor:'black',textDecoration:isvalid===true?'line-through':null}}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                        onChange={(e)=>{
                            setcoupoun(e.target.value)
                        }}
                        
                    />
                    <Button  variant='contained' className="copon-btn d-inline "  onClick={()=>Updatecoupon(coupon)}>تطبيق</Button>
                </div>
                <div className="product-price d-inline w-100 my-3  border"  style={{background:'white',padding:'5px',borderRadius:'5px',textAlign:'center'}}>
                    {/* {`${datacart.totalCartPrice}`} جنية */}
{
  datacart && datacart.products && datacart.products.length>0?(totalAfterDiscount>0?`${datacart.totalCartPrice}   بعد الخصم ... ${totalAfterDiscount}  `: `${datacart.totalCartPrice}جنية` ):"جنيه0"
}
                </div>
                
                  
                   
                    <Button  onClick={()=>{handlepayer()}} variant='dark' className="product-cart-add w-100 px-2" style={{marginBottom:'10px'}}  > اتمام الشراء</Button>
                    <Button  variant='danger' className="product-cart-add w-100 px-2"onClick={Deletecart}>  حدف العربة </Button>

               
            </Col>
        </Row>
        </Container>
    )
}

export default CartCheckout;