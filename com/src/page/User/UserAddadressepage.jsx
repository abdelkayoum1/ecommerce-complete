import React from 'react'
import Textfilied  from '@mui/material/TextField';
import Button  from '@mui/material/Button'
import Textarea  from '@mui/material/TextareaAutosize'
import Box  from '@mui/material/Box'
import userAddadressesHook from '../../hook/User/userAddadressesHook';
import { ToastContainer } from 'react-toastify';

const UserAddadressepage = () => {

  const [getalladress,adressuser,setadresuser,adduseradres,alias,details,phone,city,postalcode,setcodepostal,setcity,setphone,setdetails,setalias]=userAddadressesHook();

  return (
    <div>
      <div className="div" style={{fontWeight:'bold',marginBottom:'10px'}}>
        اضافة  عنوان جديد
      </div>
      <Box className="div"  style={{display:'flex',alignItems: "flex-end",flexDirection:'column',gap:30,direction:'ltr'}}>
           <Textfilied  value={alias}  onChange={(e)=>{setalias(e.target.value)}}  sx={{direction:'ltr'}} placeholder='تسمية المنزل'  style={{width:'50%',direction:'rtl'}}/>
                    <Textarea  value={details}   onChange={(e)=>{setdetails(e.target.value)}}   sx={{direction:'ltr'}} placeholder='ادراس'  style={{width:'50%',direction:'rtl'}}/>
           <Textfilied   value={phone} onChange={(e)=>{if(e.target.value.length<=11){
            setphone(e.target.value)
           }}}sx={{direction:'ltr'}} placeholder=' رقم الهاتف' type='number'   style={{width:'50%',direction:'rtl'}}/>
           <Textfilied  value={city}  onChange={(e)=>{setcity(e.target.value)}} sx={{direction:'ltr'}} placeholder='تسمية المدينة'  style={{width:'50%',direction:'rtl'}}/>

           <Textfilied value={postalcode}  onChange={(e)=>{setcodepostal(e.target.value)}} placeholder='رقم بوسطال'type='number'  style={{width:'50%',direction:'rtl'}}/>
<Button  variant='contained' onClick={adduseradres} >اضافة عنوان</Button>
      </Box>
      <ToastContainer/>
    </div>
  )
}

export default UserAddadressepage
