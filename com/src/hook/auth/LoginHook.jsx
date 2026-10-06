import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../page/auth/context/auth/authContext';
import notify from '../useNotification';

const LoginHook = () => {
   const emailref = useRef(null);
    const passwordref = useRef(null);
    const [error, seterror] = useState("");
    const [succes, setsucces] = useState("");
      const [loading, setloading] = useState(false);
  
    const navigate=useNavigate()
    const {username,setusername,token,setToken}=Auth();
  
  
  
  let email;
  let password;
    async function onsubmit() {
      
      
    
       email = emailref.current.value;
       password = passwordref.current.value;
       if(email ===""){
        notify("من  فضلك ادخل الاسم")
        return;
      }
      if(password ===""){
        notify("من  فضلك ادخل كلمة السر")
        return;
      }
      try {
        setloading(true)
        const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
           
            email,
            password,
          }),
        });
       
        if (!res.ok) {
     notify("كلمة  المرور او اسم المستخدم غير صحيح","warn")
          return;
        }
        const data = await res.json();
        localStorage.setItem('username',data.data.email);
              localStorage.setItem("token",data.token);
                          localStorage.setItem('user', JSON.stringify( data.data));
  
              
  
       
  
        if (!data) {
     notify("token not valid","warn")
          return;
        }
        setsucces("user sign in succes");
        setusername(data.data.name)
        setToken(data.token)
         await  notify("تمت العملية بنجاح",   "success")
  
        window.location.href="/"
      } catch (error) {
        console.log(error)
        seterror("error", error);
      }finally{
        setloading(false)
      }
  
     
    }
    return[onsubmit,email,password,loading,token,emailref,passwordref,succes,error];
}

export default LoginHook
