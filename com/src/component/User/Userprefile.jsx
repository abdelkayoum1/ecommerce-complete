import React, { useEffect, useState } from 'react'
import deleteicon from '../../assets/delete.png';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Textfield from '@mui/material/TextField'
import getalluserprefileHook from '../../hook/User/getalluserprefileHook';
import { ToastContainer } from 'react-toastify';
import ChangepasswordprefileuserHook from '../../hook/User/ChangepasswordprefileuserHook';

const Userprefile = () => {
 const  [Getuserprefile,edit,Edituserprefile,name,phone,email,setname,setphone,setemail]=getalluserprefileHook();
 const  [currentPassword,password,passwordConfirm,setcurrentpassword,setpassword,setconfirmepassword,changepasswordprofile]=ChangepasswordprefileuserHook()
 useEffect(()=>{
  Getuserprefile();
 },[])
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
async function Editprefilee(){
await  Edituserprefile(name,phone,email);
Getuserprefile()
  handleClose()
}


  // let user;
  // if(JSON.parse(localStorage.getItem("user"))!=null){
  //   user=JSON.parse(localStorage.getItem("user"));
  // }

  async function changepassword(){
    await changepasswordprofile(currentPassword,password,passwordConfirm);
  }
  return (
    <>
      <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title  className='barnd-text'  style={{textAlign:'center',width:"100%"}}> صفحة  تعديل المعلومات الشخصية</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<Textfield   value={name}  onChange={(e)=>{setname(e.target.value)}} label='الاسم'/><br /><br />
<Textfield  value={phone} onChange={(e)=>{if(e.target.value.length<11){
  setphone(e.target.value)
}}}  label='رقم الهاتف'/><br /><br />
<Textfield  value={email} onChange={(e)=>setemail(e.target.value)}  label='الامايل'/>
            </Modal.Body>
            <Modal.Footer >
              <Button variant="secondary" onClick={handleClose}  style={{width:'100%',textAlign:'center'}}>
                تراجع
              </Button>
              <Button variant="danger" onClick={Editprefilee}  style={{width:'100%',textAlign:'center'}}>تعديل</Button  >
            </Modal.Footer>
          </Modal>

    <div  style={{position:'relative'}}>
<div className="barnd-text div"  style={{fontWeight:'bold'}}>
  
  الصفحة الرئيسية
  </div>  
<div className="div"  style={{background:'white',borderRadius:'10px',marginBottom:'20px',marginLeft:'100px',padding:'10px'}}>
  <div className="div"  style={{display:'flex',justifyContent:'space-between'}}>
    <div className="div"  style={{display:'flex' ,gap:5,marginBottom:'10px' }}>
      <Typography> 

        الاسم:
      </Typography>
        <Typography  sx={{color:'grey'}}  className='barnd-text'> 
       
        {edit.name}
      </Typography>
     
    </div>
     <div className="div"  style={{background:'white',display:'flex',alignItems:'center'}}>
            <img src={deleteicon} alt="" width='20px'/>

          <Link  style={{textDecoration:'none'}}  onClick={handleShow}>
          <Typography  sx={{color:'grey'}}> 

        تعديل
      </Typography>
          </Link>
      </div>

      
  </div>
  <div className="div"  style={{display:'flex',gap:5,marginBottom:'10px'}}>
      <Typography> 

        رقم الهاتف:
      </Typography>
        <Typography  sx={{color:'grey'}}  className='barnd-text'> 

        {`${edit.phone} (213+)`}
      </Typography>
     
    </div>

    <div className="div"  style={{display:'flex',gap:5}}>
      <Typography> 

        الامايل:
      </Typography>
        <Typography  sx={{color:'grey'}}  className='barnd-text'> 

        {edit.email}
      </Typography>
     
    </div>

  </div>
<div className="  barnd-text div"  style={{fontWeight:'bold'}}>
  
 تغيير كلمة السر
  </div>  
  <div className="div"  style={{display:'flex',flexDirection:'column',gap:5}}>
    <input type="password" value={currentPassword}  onChange={(e=>{setcurrentpassword(e.target.value)})} placeholder='كلمة المرور القديمة' style={{width:'50%', borderRadius:'10px'  ,padding:'5px',borderColor:'grey'}}/>
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='كلمة المرور الجديدة'   style={{width:'50%',marginBottom:'5px', borderRadius:'10px'  ,padding:'5px',borderColor:'grey'}} />
      <input type="password" value={passwordConfirm}onChange={(e)=>{setconfirmepassword(e.target.value)}} placeholder='تاكيد المرور الجديدة'   style={{width:'50%',marginBottom:'5px', borderRadius:'10px'  ,padding:'5px',borderColor:'grey'}} />

  
  </div>

  <Button  variant='success' className='btn'  sx={{position:'absolute',right:'410px'}} onClick={()=>changepassword()}>حفظ  كلمة السر</Button>
      <ToastContainer/>

    </div>
    </>
  )
}

export default Userprefile
