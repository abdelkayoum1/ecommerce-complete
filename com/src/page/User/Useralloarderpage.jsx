import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CartItem from "../../component/Cart/CartItem";
import UsercartItemorder from "../../component/User/UsercartItemorder";
import Typography from "@mui/material/Typography";
import Getuseradress from "../../hook/Adress/Getuseradress";
import CreateOrderHook from "../../hook/Order/CreateOrderHook";

const Useralloarderpage = () => {
  // const [getuseradresse,getuserdata]=Getuseradress();

  // useEffect(()=>{
    const [Crateodrer,Getorder,getorder,paginate,results]=CreateOrderHook()

    console.log(getorder)
useEffect(()=>{
  Getorder()
},[])
  //   getuseradresse()
  // },[])
  // console.log(getuserdata)
  return (
    <>

    <Box  sx={{fontWeight:'bold'}}>  عدد الطلبات #{results}</Box>
      <div>
        <div
          className="div"
          style={{ marginTop: "5px", fontSize: "20px", fontWeight: "inherit" }}
        >
          {" "}
          اهلا محمد
        </div>
                 {getorder && getorder.length>0 ? (
                  getorder.map((item)=>{
                    return ( <UsercartItemorder  results={results} getorder={item} />)
                  })
                 ):null}

      
      </div>
    </>
  );
};

export default Useralloarderpage;
