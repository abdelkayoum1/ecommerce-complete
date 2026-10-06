import React, { useEffect, useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../assets/rate.png'
import { useParams } from 'react-router-dom'

import Typography from '@mui/material/Typography';
import deleteicon from '../../assets/delete.png';
import editicon from '../../assets/edit.png'
import RemovereviewsHook from '../../hook/reviews/RemovereviewsHook'
import EditReviewsHook from '../../hook/reviews/EditReviewsHook'
import TextField from '@mui/material/TextField';
import ReactStars from "react-rating-stars-component";

const RateItem = ({itemreviews,reviewremove,getallreviews}) => {
console.log("itemreviews",itemreviews)
  
   const {id}=useParams();
  const [handleClose,handleShow,handleremove,show,user]=RemovereviewsHook(reviewremove);
    const [handleCloseedit,handleShowedit,handleedit,showedit,useredit,reviewvalueedit,changeratevalue,changeratetextedit,ratetextedit]=EditReviewsHook({itemreviews,getallreviews});
  
    const setting = {
      
        size: 20,
        count: 5,
        color: "#979797",
        activeColor:'red',
         
          
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
      
        onChange: newValue => {
          changeratevalue(newValue)
        }
        
    };
  
return (
        <div  style={{direction:'rtl'}}>
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> الحدف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         هل انت متاكد من عملية حدف التقييم
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={()=>handleremove(itemreviews._id)}>حدف</Button>
        </Modal.Footer>
      </Modal>
      {/* ------------------------------------------------------------ */}
       <Modal
        show={showedit}
        onHide={handleCloseedit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
<ReactStars.default {...setting}  key={reviewvalueedit}  value={reviewvalueedit}/>        </Modal.Header>
        <Modal.Body>

<TextField  value={ratetextedit}onChange={changeratetextedit}
/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseedit}>
            تراجع
          </Button>
          <Button variant="primary" onClick={()=>handleedit(itemreviews._id)}>تعديل</Button>
        </Modal.Footer>
      </Modal>
          
            <Row className="mt-3"  >
               
                <Col className="d-felx me-5">
                <div className="div"  style={{display:'flex',alignItems:'center'}}>
                   
                    <div className="barnd-text rate-name  d-inline ms-2"> {itemreviews.user.name}</div>
                   
                   
                   <div  style={{display:'flex',alignItems:'center'}}>
                     <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{itemreviews.rating}</div>
                   </div>
                     </div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                   
                      <div className="rate-description ms-2" style={{display:'flex',justifyContent:'space-between'}}>
<Typography>

                          {itemreviews.review}

</Typography>

{itemreviews.user._id===user._id? (<div  style={{  display:'flex',gap:'20'}}>
    <img src={deleteicon} onClick={handleShow} width={'20px'} style={{cursor:'pointer'}} alt="" />
<img src={editicon}  onClick={handleShowedit}  width={'20px'} style={{cursor:'pointer'}} alt="" />
</div>):null}
                    </div>
                  
                </Col>
            </Row>
            
            
          
        </div>
    )
}

export default RateItem