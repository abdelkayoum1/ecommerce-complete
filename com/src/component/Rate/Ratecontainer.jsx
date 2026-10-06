import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../assets/rate.png'
import Pagination from '../utilite/Pagination';
import RateItem from './RateItem';
import RatePost from './Ratepost';
import Box from '@mui/material/Box'
import GetallreviewsHook from '../../hook/reviews/GetallreviewsHook';
import { useParams } from 'react-router-dom';
const Ratecontainer = ({ratingsAverage,ratingsQuantity}) => {
    const {id}=useParams()
    const [reviews,reviewspage,getallreviews,removereviews ]=GetallreviewsHook(id);
    return (
        <Container className='rate-container' style={{background:'white',marginTop:'10px'}} >
            <Box  >
                <Box  style={{display:'flex',  flexDirection:'row-reverse'}}>
                    <Box className="sub-tile d-inline p-1 ">التقيمات</Box>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <Box className="cat-rate  d-inline  p-1 pt-2">{ratingsAverage}</Box>
                    <Box className="rate-count d-inline p-1 pt-2">{ratingsQuantity}</Box>
                </Box>
            </Box>
            <RatePost   getallreviews={getallreviews}/>

            {reviews? (reviews.map((itemreviews,index)=>{
                return(<RateItem  reviewremove={removereviews} key={index}getallreviews={getallreviews}  itemreviews={itemreviews}/>)
            })):null}
          
           

           {reviewspage>=1? ( <Pagination  pageCount={reviewspage} onpress={getallreviews}/>):null}
        </Container>
    )
}

export default Ratecontainer