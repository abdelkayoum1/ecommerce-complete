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
import ResetpasswordHook from "../../hook/auth/ResetpasswordHook";

const Resetpassword = () => {
 

  
    const [loading, setloading] = useState(false);
  const [email,setemail,newPassword,setnewpassword,changepassword]=ResetpasswordHook();
//   const navigate=useNavigate()
//   const {username,setusername,token,setToken}=Auth();



 function handleemail(e){
    console.log(e.target.value)
    setemail(e.target.value)
 }
 function handlenewpassword(e){
    setnewpassword(e.target.value)
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
          <Textfield onChange={handlenewpassword}  value={newPassword}  label="new password"/>
          
 
         {loading ? (<Button variant="contained"> loading...</Button>): <Button onClick={changepassword} variant="contained">
     تغيير كلمة المرور
          </Button>}
        

         
        </Box>
        <ToastContainer/>
      </Box>
  
    </Container>
  );
};

export default Resetpassword
