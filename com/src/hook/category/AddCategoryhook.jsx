import {React,useEffect} from 'react'
import { useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import notify  from '../useNotification'

const AddCategoryhook = () => {
  const [image, setImage] = useState(avatar);
  const [img, setimage1] = useState(null);

  const [name, setTitle] = useState("");
  const [loading, setloading] = useState(true);
  const [press, setpress] = useState(false);

  const NameRef = useRef(null);

  const handleImageClick = (e) => {
    if (e.target.files && e.target.files[0]) {
      
      setImage(URL.createObjectURL(e.target.files[0]));
      setimage1(e.target.files[0]);
    }
  };

 async function createcategory(formdata){
        const resul = await fetch(
      "http://127.0.0.1:5000/api/v1/category",

      {
  
        method: "POST",
        body: formdata,
      },
    );

    const data=await resul.json();
    if(resul.status===201){
      notify("تمت العملية بنجاح","success")
    }else{
      notify("حدثت مشكلة  في عملية الاضافة","error")
    }
    return data;
    
  }
  const handleNameref = async (e) => {
    e.preventDefault()
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
 

   const data=  await createcategory(formdata)
    setloading(false)
   

      
  
  } catch (error) {
    console.log(error)
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

export default AddCategoryhook
