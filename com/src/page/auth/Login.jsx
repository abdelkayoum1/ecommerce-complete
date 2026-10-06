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
import LoginHook from "../../hook/auth/LoginHook";

const Login = () => {
 
  const [onsubmit,email,password,loading,token,emailref,passwordref,succes,error]=LoginHook();

  // const emailref = useRef(null);
  // const passwordref = useRef(null);
  // const [error, seterror] = useState("");
  // const [succes, setsucces] = useState("");
  //   const [loading, setloading] = useState(false);

  const navigate=useNavigate()
  // const {username,setusername,token,setToken}=Auth();




  
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
        <Typography variant="h4">Login now</Typography>

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
          

          <Textfield inputRef={emailref} label="email" />
          <Textfield type="password" inputRef={passwordref} label="password" />
 
         {loading ? (<Button variant="contained"> loading...</Button>): <Button onClick={onsubmit} variant="contained">
            Login
          </Button>}
          <Typography>not have account? <Button  onClick={()=>navigate('/register')}>Register</Button></Typography>
                 <Button  sx={{color:'red'}} onClick={()=>navigate('/user/forgetpassword')}>هل نسيت كلمة السر</Button>

         
          {succes && (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "green",
              }}
            >
              {succes}
            </Typography>
          )}

          {error && (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "red",
              }}
            >
              {error}
            </Typography>
          )}
        </Box>
        <ToastContainer/>
      </Box>
   <Link  to='/admin/allproducts'  style={{textDecoration:'none'}}>
      <Typography  sx={{width:'100%',textAlign:'end',color:'blue',cursor:'pointer',textDecoration:'none'}}>الدخول بحساب الادمن</Typography>
   </Link  >
   <Link  to='/user/allorder'  style={{textDecoration:'none'}}>
            <Typography  sx={{width:'100%',textAlign:'end',color:'blue',cursor:'pointer'}}>الدخول بحساب المستخدم</Typography>
</Link>
    </Container>
  );
};

export default Login;
