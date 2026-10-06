import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


  import { ToastContainer, toast } from 'react-toastify';
import Textfield from "@mui/material/TextField";

import { Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";

// import { Auth } from "../context/auth/authContext";
import { useNavigate,Link } from "react-router-dom";
import notify from "../../hook/useNotification";
import { Auth } from "./context/auth/authContext";
import ForgetpasswordHook from "../../hook/auth/ForgetpasswordHook";

const Forgetpassword = () => {
 

  
    const [loading, setloading] = useState(false);

//   const navigate=useNavigate()
//   const {username,setusername,token,setToken}=Auth();

  const [email,setemail,forgetpassword]=ForgetpasswordHook();


 function handleemail(e){
    console.log(e.target.value)
    setemail(e.target.value)
 }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography  sx={{fontFamily:'emoji'}} variant="h4">صفحة تغيير كلمة المرور</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "10px",
            gap: "10px",
            mt: 4,
            border: 1,
            borderColor: "#f5f5f5",
            padding: "10px",
          }}
        >
          

          <Textfield  onChange={handleemail}  value={email} label="email" />
          
 
         {loading ? (<Button variant="contained"> loading...</Button>): <Button onClick={forgetpassword} variant="contained">
            ارسال الكود
          </Button>}
        

         
        </Box>
        <ToastContainer/>
      </Box>
  
    </Container>
  );
};



export default Forgetpassword;
