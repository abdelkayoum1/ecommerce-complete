import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Textfield from "@mui/material/TextField";

import { Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
  import { ToastContainer, toast } from 'react-toastify';
import { Auth } from "./context/auth/authContext";

// import Auth  from "../context/auth/authContext";

const Register = () => {
  const firstnameref = useRef(null);

  const emailref = useRef(null);
  const passwordref = useRef(null);
  const confirmpassword=useRef(null);
    const [phone, setphone] = useState("");

  const [error, seterror] = useState("");
  const [succes, setsucces] = useState("");
  const navigate = useNavigate();
  const { username, setusername, token, setToken } = Auth();
  async function changephone(e){
    console.log(e.target.value)
    setphone(e.target.value)
  }
  async function onsubmit() {
    const name = firstnameref.current.value;
   const passwordConfirm=confirmpassword.current.value
    const email = emailref.current.value;
    const password = passwordref.current.value;
    try {
      const res = await fetch(`http://127.0.0.1:5000/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          passwordConfirm,
          phone
        }),
      });
      if (!res.ok) {
 notify("هدا المستخدم موجود رجاءا استحدم مستخدم جديد","warn")
        return;
      }
      const data = await res.json();
      console.log(data)
      

     

      if (!data) {
  notify("token not valid","warn")
        return;
      }
       localStorage.setItem("username", data.data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem('user',JSON.stringify(data.data))

      setusername(data.data.email);
      setToken(data.token);
       console.log(data);
      console.log(data.token);
      setsucces("user register succes");
        notify("تمت العملية التسجيل بنجاح",   "success")
      // navigate("/sign");
    } catch (error) {
      seterror("error", error);
      console.log(error)
    }
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
        <Typography variant="h4">Register now</Typography>

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
          <Textfield inputRef={firstnameref} label="firstName" />

          <Textfield inputRef={emailref} label="email" />
          <Textfield type="password" inputRef={passwordref} label="password" />
              <Textfield type="password" inputRef={confirmpassword} label="password" />
              <Textfield type="number" value={phone}  onChange={changephone}label="Phone" />

          <Button onClick={onsubmit} variant="contained">
            Register
          </Button>

          <Typography>
            not have account?{" "}
            <Button onClick={() => navigate("/sign")}>Login</Button>
          </Typography>

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
      </Box>
      <ToastContainer/>
    </Container>
  );
};

export default Register;
