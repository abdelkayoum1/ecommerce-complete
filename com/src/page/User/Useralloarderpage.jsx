import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CartItem from "../../component/Cart/CartItem";
import UsercartItemorder from "../../component/User/UsercartItemorder";
import Typography from "@mui/material/Typography";
import Getuseradress from "../../hook/Adress/Getuseradress";

const Useralloarderpage = () => {
  // const [getuseradresse,getuserdata]=Getuseradress();

  // useEffect(()=>{

  //   getuseradresse()
  // },[])
  // console.log(getuserdata)
  return (
    <>
      <div>
        <div
          className="div"
          style={{ marginTop: "5px", fontSize: "20px", fontWeight: "inherit" }}
        >
          {" "}
          اهلا محمد
        </div>
                  <UsercartItemorder />

      
      </div>
    </>
  );
};

export default Useralloarderpage;
