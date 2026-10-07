import {React,useEffect,useState} from 'react'
import notify  from '../../hook/useNotification';

const Editproducthook = (id) => {
   
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
            const [imagecover, setimagecover] = useState("");

       const [images, setImages] = useState([]);
       const [colore, setcolor] = useState([]);
       const [subcategory, setsubcategory] = useState([]);
       const [options, setoptions] = useState([]);
       const [selected, setselectedlist] = useState([]);
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
    const onSelect = (seletedlist) => {
     setselectedlist([...seletedlist]);
   };
    const onRemove = (seletedlist) => {
     setselectedlist(seletedlist);
   };
   async function selectedcategoryid(e) {
   
    console.log(e.target.value)
     setselectedidcategory(e.target.value);
   }
   useEffect(()=>{
  if(selectedidcategory!=0){
    const  run=async()=>{
await getsubcategory(selectedidcategory);
    }
    run();
  }
   },[selectedidcategory])
 
   function selectedidbrand(e) {
     setsalectedidbrand(e.target.value);
   }
   async function getdata() {
     try {
       const res = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/category", {
         method: "Get",
       });
       const data = await res.json();
 
       setdata(data.data);
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
     console.log('subcategory',datasubcategory.data)
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
     function removecolor(color) {
     const newcolor = colore.filter((e) => e !== color);
     setcolor(newcolor);
   }
   function handlechangecolor(color) {
     setcolor([...colore, color.hex]);
     setshowcolor(!showcolor);
   }
     async function getProduct() {
  try {
    const res = await fetch(
      `https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}`
    );

    const data = await res.json();

    console.log("PRODUCT EDIT =", data.data);

    const product = data.data;

    setnamepro(product.title);
    setnamedescription(product.description);
    setpricebefore(product.price);
    setpriceafter(product.priceAfterDiscount);
    setqltprod(product.quantity);
    console.log("hih",product.images)
    setImages(product.images)
    setimagecover(product.imageCover)

    setcolor(product.availableColors || []);
    setselectedidcategory(product.category?._id || product.category || "");
    console.log("subcategory",product.subcategory)
    setsalectedidbrand(product.brand?._id || product.brand || "");
  } catch (error) {
    console.log(error);
  }
}
const urlToFile = async (imageUrl) => {
    console.log("imageUrl =", imageUrl);

  const response = await fetch(imageUrl);

  const blob = await response.blob();

  const file = new File(
    [blob],
    "image.jpg",
    { type: blob.type }
  );

  return file;
};
   async function Editproduct(e) {
    e.preventDefault();
     console.log("IMAGES =", images);
  console.log("IS ARRAY =", Array.isArray(images));
  console.log("TYPE =", typeof images);
    if(namepro===""){
     notify("  الرجاء منك ادخل اسم المنتج","warn")
     return;
    }
    if(namedescription===""){
      notify("  الرجاء منك ادخل تعبير المنتج","warn")
      
    }
    
     let imagefile;
     
   if (images[0].startsWith("http")) {
    imagefile = await urlToFile(images[0]);
} else {
    imagefile = dataURLtoFile(images[0], "images.png");
}
const imagesArray = Object.values(images);
let imageitem = await Promise.all(
    imagesArray.map(async (item) => {

        if (item instanceof File) {
            return item;
        }

        if (typeof item === "string" && item.startsWith("http")) {
            return await urlToFile(item);
        }

        return dataURLtoFile(item, Math.random() + ".png");
    })
);
     const formdata = new FormData();
     formdata.append("title", namepro);
     formdata.append("imageCover", imagefile);

     formdata.append("price", pricebefore);
     formdata.append("brand", salectedidbrand);
      imageitem.forEach((item)=>
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
       const res = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/product/${id}`, {
         method: "PUT",
         body: formdata,
       
       });
       console.log(res.status)
         if(!res.ok){
        const error=await res.text();
        console.log(error)
        return;
       }
     
       const data = await res.json();
     
          if(res.status===200){
         notify("تمت العملية  التعديل  بنجاح  شكرا لك","success");
         return;
       }else{
  notify("حدث خطا في عملية  يرجي اعادة المحاولة","error")
  return;
       }
 
     } catch (error) {
       console.log(error);
     }finally{
       setloading(false)
    //    setshowcolor([])
    //    setselectedidcategory("")
    //    setsalectedidbrand("")
    //    setqltprod("")
    //    setpriceafter("")
    //    setpricebefore("")
    //    setnamedescription("")
    //    setnamepro("")
    //    setoptions([])
       
     }
    
   


   }
   useEffect(()=>{
    getProduct()
    getbrand()
getdata()
   },[id])
           return [Editproduct,handlechangecolor,removecolor,setoptions,options,selectedidbrand,selectedcategoryid,onRemove,onSelect,images,setcolor,colore,setImages,setloading,loading,setshowcolor,showcolor,setselectedidcategory,selectedidcategory,setsalectedidbrand,salectedidbrand,setqltprod,qltprod,setpriceafter,priceafter,setpricebefore,pricebefore,setnamedescription,namedescription,setnamepro,namepro,databrand,dataa,selected];

}

export default Editproducthook;
