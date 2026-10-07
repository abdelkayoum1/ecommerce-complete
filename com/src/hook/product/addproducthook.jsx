import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Avatar from "../../assets/avatar.png";
import Add from "../../assets/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import notify  from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
const addproducthook = () => {
  const [dataa, setdata] = useState([]);
   const [databrand, setdatabrand] = useState([]);
   const [namepro, setnamepro] = useState("");
   const [namedescription, setnamedescription] = useState("");
   const [pricebefore, setpricebefore] = useState("السعر قبل الخصم");
   const [priceafter, setpriceafter] = useState("السعر بعد الخصم");
   const [qltprod, setqltprod] = useState("");
   const [salectedidbrand, setsalectedidbrand] = useState("");
   const [selectedidcategory, setselectedidcategory] = useState("");
   const [showcolor, setshowcolor] = useState([]);
   const [loading, setloading] = useState(false);
 
   const [images, setImages] = useState([]);
   const [colore, setcolor] = useState([]);
   const [subcategory, setsubcategory] = useState([]);
   const [options, setoptions] = useState([]);
   const [selected, setselectedlist] = useState([]);
 
   function removecolor(color) {
     const newcolor = colore.filter((e) => e !== color);
     setcolor(newcolor);
   }
   function handlechangecolor(color) {
     setcolor([...colore, color.hex]);
     setshowcolor(!showcolor);
   }
   async function getbrand() {
     try {
       const res = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/brands", {
         method: "Get",
       });
       const data = await res.json();
 
       setdatabrand(data.data);
     } catch (error) {
       console.log(error);
     }
   }
 
   async function getdata() {
     try {
       const res = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/category", {
         method: "Get",
       });
       const data = await res.json();
 
       setdata(data.data);
       console.log(data.data)
     } catch (error) {
       console.log(error);
     }
   }
 
   async function getsubcategory(id) {
     const subresulta = await fetch(
       `https://ecommerce-complete-kbe3.onrender.com/api/v1/category/${id}/subcategories`,
       {
         method: "Get",
         headers: {
           "Content-Type": "Application/json",
         },
       },
     );
     // console.log(subresulta)
     const datasubcategory = await subresulta.json();
     setsubcategory(datasubcategory.data);
     // console.log(datasubcategory.data)
 
     setoptions(datasubcategory.data);
   }
 function dataURLtoFile(dataurl, filename) {
 
   var arr = dataurl.split(','),
 
       mime = arr[0].match(/:(.*?);/)[1],
 
       bstr = atob(arr[1]),
 
       n = bstr.length,
 
       u8arr = new Uint8Array(n);
 
   while (n--) {
     u8arr[n] = bstr.charCodeAt(n);
   }
 
   return new File([u8arr], filename, { type: mime });
 }
 
   async function addproduct(e) {
    e.preventDefault();
    if(namepro===""){
     notify("  الرجاء منك ادخل اسم المنتج","warn")
     return;
    }
    if(namedescription===""){
      notify("  الرجاء منك ادخل تعبير المنتج","warn")
      
    }
    const imagefile=dataURLtoFile(images[0],"images.png");
    const imageitem=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
     return dataURLtoFile(images[index],Math.random()+".png");
    })
     const formdata = new FormData();
     formdata.append("title", namepro);
     formdata.append("imageCover", imagefile);

     formdata.append("price", pricebefore);
     formdata.append("brand", salectedidbrand);
      imageitem.map((item)=>
               formdata.append("images", item)
      );
 
     colore.map((colors)=>{
          formdata.append("availableColors",colors)

     })
 
     formdata.append("description", namedescription);
 
     formdata.append("category", selectedidcategory);
         formdata.append("quantity", qltprod);
       selected.map((item)=>{
         return (  formdata.append("subcategory",item._id));
       })
 
 
     formdata.append("priceAfterDiscount",priceafter)
     try {
       setloading(true)
       console.log("before",loading)
       const res = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/product", {
         method: "POST",
         body: formdata,
         headers:{
          // "Content-Type":'Application/json',
          "Authorization":`Bearer ${localStorage.getItem("token")}`
         }
       
       });
     
       const data = await res.json();
          if(res.status===201){
         notify("تمت العملية بنجاح  شكرا لك","success");
         return;
       }else{
  notify("حدث خطا في عملية  يرجي اعادة المحاولة","error")
  return;
       }
 
     } catch (error) {
       console.log(error);
     }finally{
       setloading(false)
       setshowcolor([])
       setselectedidcategory("")
       setsalectedidbrand("")
       setqltprod("")
       setpriceafter("")
       setpricebefore("")
       setnamedescription("")
       setnamepro("")
       setoptions([])
       
     }
   }
  
   const onSelect = (seletedlist) => {
     setselectedlist([...seletedlist]);
   };
   console.log(selected);
   // console.log("33333333333")
   const onRemove = (seletedlist) => {
     setselectedlist(seletedlist);
   };
   async function selectedcategoryid(e) {
     if (e.target.value != 0) {
       console.log(e.target.value);
       await getsubcategory(e.target.value);
     }
     setselectedidcategory(e.target.value);
   }
 
   function selectedidbrand(e) {
     setsalectedidbrand(e.target.value);
   }
   useEffect(() => {
     getbrand();
   }, []);
   useEffect(() => {
     getdata();
   }, []);


   return [handlechangecolor,removecolor,setoptions,options,selectedidbrand,selectedcategoryid,onRemove,onSelect,addproduct,images,setcolor,colore,setImages,setloading,loading,setshowcolor,showcolor,setselectedidcategory,selectedidcategory,setsalectedidbrand,salectedidbrand,setqltprod,qltprod,setpriceafter,priceafter,setpricebefore,pricebefore,setnamedescription,namedescription,setnamepro,namepro,databrand,dataa];
 
}

export default addproducthook
