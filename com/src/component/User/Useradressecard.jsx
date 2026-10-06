import React, { useEffect } from 'react'
import Useradressitem from './Useradressitem'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';
import userAddadressesHook from '../../hook/User/userAddadressesHook';
import { ToastContainer } from 'react-toastify';
import { Box } from '@mui/material';
const Useradressecard = () => {
  const [getalladress,adressuser,setadresuser,adduseradres,alias,details,phone,city,postalcode,setcodepostal,setcity,setphone,setdetails,setalias]=userAddadressesHook();
useEffect(()=>{
  getalladress()

  // console.log(adressuser)
},[])

  return (
    <div>
      <div className="barnd-text div" style={{marginBottom:'10px',fontSize:'24px'}}>دفتر العناوين</div>
{adressuser.length>0? (     adressuser.map((itemadres)=>{
  return(<Useradressitem adressuser={adressuser} setadresuser={setadresuser} getalladress={getalladress}   itemadres={itemadres}  key={itemadres._id}/>)
})
):<Box sx={{width:'100%',position:'relative',right:'40%',marginBottom:'30px'}} ><h6  style={{fontSize:'24Px'}} className='barnd-text'>لاتوجد عناوين</h6></Box>}
      
      <Link to='/user/addadress' style={{textDecoration:'none'}}>   
         <Button  variant='contained'  sx={{position:'absolute',left:'500px'}}>اضافة عنوان جديد</Button>
         </Link>
      <ToastContainer/>

    </div>
  )
}

export default Useradressecard
