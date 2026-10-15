import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CartItem from "../../component/Cart/CartItem";
import UsercartItemorder from "../../component/User/UsercartItemorder";
import Typography from "@mui/material/Typography";
import Getuseradress from "../../hook/Adress/Getuseradress";
import CreateOrderHook from "../../hook/Order/CreateOrderHook";
import { useParams } from "react-router-dom";
import GetOrderOne from "../../hook/Order/GetOrderOne";

const Useralloarderpage = ({getorder,results,Getorder}) => {
  // const [getuseradresse,getuserdata]=Getuseradress();

  const {id}=useParams()
  console.log(id)
const  [getorderOne,oneorder,loading]=GetOrderOne()

useEffect(()=>{
  getorderOne(id);
  
},[id])
  // useEffect(()=>{
    // const [Crateodrer,Getorder,getorder,paginate,results]=CreateOrderHook()

    let user;

    user=JSON.parse(localStorage.getItem("user"))
useEffect(()=>{
  Getorder()
},[])
  //   getuseradresse()
  // },[])
  // console.log(getuserdata)
  return (
    <>

    <Box  sx={{fontWeight:'bold',marginTop:'60px'}}>  عدد الطلبات #{results}</Box>
      <div>
        {/* <div
          className="div"
          style={{ marginTop: "5px", fontSize: "20px", fontWeight: "bold" }}
        >
          {" "}
        {user.name}
        </div> */}
        {loading ===true ? <Box  sx={{width:'100%',display:'flex',justifyContent:'center'}}><Spinner animation="border"   variant="primary" /></Box>
        
        :  getorder && getorder.length>0 ? (
                  getorder?.map((item)=>{
                    return ( <UsercartItemorder  results={results} getorder={item} />)
                  })
                 ):null}
                 {/* getorder && getorder.length>0 ? (
                  getorder?.map((item)=>{
                    return ( <UsercartItemorder  results={results} getorder={item} />)
                  })
                 ):null */}

      
      </div>
    </>
  );
};

export default Useralloarderpage;
