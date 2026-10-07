import {React,useEffect} from 'react'
import { useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import notify  from '../useNotification'
import { Auth } from '../../page/auth/context/auth/authContext';

const Addbrandhouk = () => {
  const [image, setImage] = useState(avatar);
  const [img, setimage1] = useState(null);

  const [name, setTitle] = useState("");
  const [loading, setloading] = useState(true);
  const [press, setpress] = useState(false);

  const NameRef = useRef(null);
const {token}=Auth();
  const handleImageClick = (e) => {
    if (e.target.files && e.target.files[0]) {
      
      setImage(URL.createObjectURL(e.target.files[0]));
      setimage1(e.target.files[0]);
    }
  };

 async function createbrand(formdata){
        const resul = await fetch(
      "https://ecommerce-complete-kbe3.onrender.com/api/v1/brands",

      {
  
        method: "POST",
        body: formdata,
      },
    );

    const data=await resul.json();
    if(resul.status===201){
      notify("تمت العملية بنجاح","success")
    }else{
      notify("انت غير مصرح بهده العملية لانك غير مسجل","error")
    }
    return data;
    
  }
  const handleNameref = async (e) => {
    e.preventDefault();
    if(token){
    if(name==='' ){
      console.log("le champ  required")
      notify(  "من فصلك  اكمل البيانات","warn")
        return;
    }if(img===null){
            console.log("le champ files  required");
            return;

    }
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("image", img);
  try {
    setloading(true)
    setpress(true)
 

   const data=  await createbrand(formdata)
    setloading(false)
   

      
  
  } catch (error) {
    console.log(error)
  }
    }else{
      notify("انت غير مصرح لانك غير مسجل","error")
    }
  };
  useEffect(()=>{
       if(loading ===false){
        setImage(avatar)
        setimage1(null)
        setTitle("")
        console.log('انتهاء')
                setloading(true)

         setTimeout(()=>setpress(false),2000)
    
       
       }
  },[loading])

  return [handleNameref,handleImageClick,press,loading,name,setTitle,img,image];
}

export default Addbrandhouk
