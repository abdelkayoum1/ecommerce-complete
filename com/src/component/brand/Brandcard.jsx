import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Favoff from "../../assets/fav-off.png";
// import Product1  from '../../assets/prod1.png';
import { Box, Typography } from "@mui/material";
import Rate from "../../assets/rate.png";
import "../../index.css";

const Brandcard = ({ img }) => {
  return (
    <Card className="cardd">
      <Card.Img variant="top" src={img}  />
     
    </Card>
  );
};

export default Brandcard;
