import React from 'react'
import img from '../../assets/Scène e-commerce pastel et dorée.png';
import '../../index.css'
import Button from '@mui/material/Button'
import { Navigate, useNavigate } from 'react-router-dom';
const InitialHome = () => {
    const navigate=useNavigate();
  return (
     <div className="hero-container">
      <img src={img} alt="E-commerce" className="hero-image" />



      <Button  variant='contained'  className="btnnn"  style={{color:'black'}} onClick={()=>navigate("/homepage")}>  تسوق  الان
<span  style={{color:'black'}}>→</span>

      </Button>

      
    </div>
  );
  
}

export default InitialHome
