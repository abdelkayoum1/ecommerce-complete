import React from 'react'
import { Col,Row } from 'react-bootstrap'
import mobile from '../../assets/mobile1.png'
import deleteicon from '../../assets/delete.png';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


const AdminaAllOrder = ({item}) => {

  console.log(item)
    return (
      <>
      
    
        <Container  sx={{background:'white',borderRadius:'10px',boxShadow:'0 15px 15px rgb(15 ,15, 15 ,0.5)',marginRight:'5px'}}>
      
       <Link   style={{textDecoration:"none"}} to={`/admin/allorder/${item._id}`}>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        {/* <img width="160px" height="197px" src={mobile} alt="" /> */}
       
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="barnd-text d-inline pt-2 cat-text"  style={{fontWeight:'bold'}}>الطلب رقم #123</div>
              {/* <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
              </div> */}
            </Col>
          </Row>
          <Row className="justify-content-center mt-2"  >
           <div  style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
             <Col sm="12"  >
              <Link to='/admin/order/:id'  style={{textDecoration:'none'}}>
              <div className="barnd-text d-inline pt-2 cat-title"  style={{color:'grey'}}>
              طلب من {item.user?.name||''}
              
              </div>
              </Link>
              <div className="d-inline pt-2 cat-rate me-2"  style={{color:'grey',color:'rgb(234, 176, 0)'}}>{item.user?.email||""}</div>
            </Col>
           </div>
          </Row>


          <div  style={{display:'flex', gap:5,justifyContent:'space-between'}}>
           <div  style={{display:'flex',gap:5}}>
             <Typography  sx={{fontWeight:'bold'}}>التوصيل</Typography>
                        <Typography  className='barnd-text' sx={{color:'grey'}}> {item.isDelivered===true? "تم التوصيل":"لم يتم التوصيل"}</Typography>

           </div>


              <div  style={{display:'flex',gap:5}}>
             <Typography  sx={{fontWeight:'bold'}}>الدفع</Typography>
                        <Typography className='barnd-text'  sx={{color:'grey'}}> {item.isPaid===true? "تم الدقع":"لم يتم"}</Typography>

           </div>


              <div  style={{display:'flex',gap:5}}>
             <Typography  sx={{fontWeight:'bold'}}>طريقة الدقع</Typography>
                        <Typography className='barnd-text'  sx={{color:'grey'}}> {item.paymentMethodType==="cash"? "كاش":"بطاقة الدهبية"}</Typography>

           </div>


             <div  style={{display:'flex',gap:5}}>
             <Typography  className='barnd-text' sx={{fontWeight:'bold'}}> {item.totalOrderPrice}</Typography>
                        <Typography  className='barnd-text' sx={{color:'grey'}}> Dz</Typography>

           </div>
          </div>
          {/* <Row>
            <Col sm="12" className="mt-1"  style={{display:'flex',alignItems:'center'}}>
              <div className="cat-text d-inline"  style={{color:'grey'}}>الماركة :</div>
              <div className="barnd-text d-inline mx-1"  style={{fontWeight:'bold'}}>ابل </div>
                  <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C",width:'20px',height:'20px',borderRadius:'50%' }}></div>
            </Col>
          </Row>
         */}
  
          {/* <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline"  style={{color:'grey'}}>الكميه</div>
                <input
                  className="mx-2 "
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
              </div>
              <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div>
            </Col>
          </Row> */}
        </div>
       
      </Col>
       </Link>
      </Container>
      </>
    )
}

export default AdminaAllOrder