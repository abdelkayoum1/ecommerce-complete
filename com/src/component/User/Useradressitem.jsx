import React from "react";
import Typography from "@mui/material/Typography";

import deleteicon from "../../assets/delete.png";
import {Link } from 'react-router-dom';
import RemoveuseradresseOneHook from "../../hook/User/RemoveuseradresseOneHook";
import { ToastContainer } from "react-toastify";
const Useradressitem = ({itemadres,getalladress,adressuser,setadresuser}) => {

  const  [Removeuseradresseone]=RemoveuseradresseOneHook()

 async function remove(id) {
  await  Removeuseradresseone(id)
  // getalladress()
  console.log(adressuser)
  setadresuser(adressuser.filter(val=>val!==itemadres))
    
  }
  return (
    <div>
      <div className="div">
        <div className="div" style={{ background: "#f5f5f5", marginBottom:'20px',marginLeft:'100px',borderRadius:'5px'}}>
          <div className=" div"  style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
            <Typography className="barnd-text" sx={{color:'black'}}>المدينة:{itemadres.alias}</Typography>

            <div className="div" style={{ display: "flex",alignItems:'center' }}>
                              <img src={deleteicon} alt="" width='20px'/>

            <Link to={`/user/editadress/${itemadres._id}`}  style={{textDecoration:'none'}}> 
             <Typography  className="barnd-text"sx={{color:'grey'}}>تعديل</Typography>
             </Link>
          

                        <img src={deleteicon} alt="" width='20px'/>

             <Link   style={{textDecoration:'none'}}>
              <Typography onClick={()=>remove(itemadres._id)}   className="barnd-text" sx={{color:'grey'}}>ازالة</Typography>
             </Link>
            </div>
          </div>
          <div className="div"  style={{padding:'10px'}}>
                          <Typography className="barnd-text" sx={{color:'grey'}}>العنوان :{itemadres.details}   </Typography>

          </div>

            <div className="div"  style={{display:'flex'  ,padding:'10px',gap:2}}>
                          <Typography className="barnd-text" sx={{color:'grey'}}>رقم الهاتف:</Typography>
                          <Typography sx={{color:'grey'}}>{itemadres.phone}</Typography>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Useradressitem;
