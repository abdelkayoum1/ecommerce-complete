import React, { useEffect } from "react";
import Textfilied from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Textarea from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import GetuserAdresseOneHook from "../../hook/User/GetuserAdresseOneHook";
import { ToastContainer } from 'react-toastify';


const Usereditadresse = () => {
  const { id } = useParams();
  console.log("iddd", id);
  console.log(id)
  const [
    getuseradressOne,
    EditadresseuserOne,
    alias,
    
    details,
    phone,
    city,
    postalCode,
    setalias,
    setdetails,
    setphone,
    setcity,
    setcodepostal,
  ] = GetuserAdresseOneHook();

  useEffect(() => {
   getuseradressOne(id)
  }, [id]);
  return (
    <div>
      <div className="div" style={{ fontWeight: "bold", marginBottom: "10px" }}>
        تعديل عنوان
      </div>
      <Box
        className="div"
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          gap: 30,
          direction: "ltr",
        }}
      >
        <Textfilied
          value={alias}
          sx={{ direction: "ltr" }}
          placeholder="تسمية العنوان"
          style={{ width: "50%", direction: "rtl" }}
          onChange={(e)=>{
            setalias(e.target.value)
          }}
        />
        <Textarea
          value={details}
          minRows={5}
          placeholder="العنوان  بالتقصيل"
          style={{ width: "50%", direction: "rtl" }}
            onChange={(e)=>{
            setdetails(e.target.value)
          }}
        />
        <Textfilied
          value={phone}
          sx={{ direction: "ltr" }}
          placeholder="رقم الهاتف"
          style={{ width: "50%", direction: "rtl" }}
            onChange={(e)=>{
            setphone(e.target.value)
          }}
        />
        <Textfilied
          value={city}
          sx={{ direction: "ltr" }}
          placeholder="رقم الهاتف"
          style={{ width: "50%", direction: "rtl" }}
            onChange={(e)=>{
            setcity(e.target.value)
          }}
        />

        <Textfilied
          value={postalCode}
          sx={{ direction: "ltr" }}
          placeholder="رقم الهاتف"
          style={{ width: "50%", direction: "rtl" }}
            onChange={(e)=>{
            setcodepostal(e.target.value)
          }}
        />
        <Button variant="contained"   onClick={()=>EditadresseuserOne(id,alias,details,phone,city,postalCode)}>تعديل عنوان</Button>
      </Box>
<ToastContainer/>
    </div>
  );
};

export default Usereditadresse;
