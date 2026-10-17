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
import { Spinner } from "react-bootstrap";
import Paginationn from "../../component/utilite/Pagination";

const Useralloarderpage = ({getorder,results,Getorder,paginate}) => {
  // const [getuseradresse,getuserdata]=Getuseradress();
  console.log("orderssssssssss",getorder.length)

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

               <Box  sx={{position:'absolute', right:'40%'}}>  { paginate>=4 ? (<Paginationn   onpress={(page)=>Getorder(page)}  pageCount={paginate}/>):null}</Box>
                 {/* <Paginationn   onpress={(page)=>Getorder(page)}  pageCount={paginate}/> */}

      
      </div>
    </>
  );
};

export default Useralloarderpage;
