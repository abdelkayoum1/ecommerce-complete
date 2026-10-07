import React, { useEffect, useState } from "react";
import notify from "../useNotification";
import { data } from "react-router-dom";

const AddtocartHook = ({dataproduct}) => {
  const [indexcolor, setindexcolor] = useState("");
  const [color, setselectcolor] = useState("");
  const [datacart, setdatacart] = useState([]);
    const [numOfCartItems, setnumOfCartItems] = useState(0);
 const [isvalid,setisvalid]=useState(false)
      const [products, setproducts] = useState([]);
  // const [datacart, setdatacart] = useState([]);

  const [count, setcount] = useState(0);
  const [coupon, setcoupoun] = useState("");
    const [totalAfterDiscount, settotalAfterDiscount] = useState(0);

  async function changecolor(index, colors) {
    setindexcolor(index);
    setselectcolor(colors);
  }
async function Gettocart() {

   
    const Gettocart = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/cart", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
     
    });
      console.log(Gettocart)

   
    const datacartget = await Gettocart.json();
    console.log("gettocart",datacartget.numOfCartItems)
    setdatacart(datacartget.data)
    setnumOfCartItems(datacartget.numOfCartItems)
    setproducts(datacartget.data.products)
    settotalAfterDiscount(datacartget.data.totalAfterDiscount)
    console.log(datacartget)
        console.log(datacartget.data.totalAfterDiscount)

 
  }

  async function Removeallcart(id) {

   
    const removecarte = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
     
    });


      console.log(removecarte)
      if(removecarte.ok){
        notify("تم حدف  كارط بنجاح","success");
        setcoupoun("")
      
        
    //      setdatacart({products:[],
    //        totalCartPrice: 0,
    // totalAfterDiscount: 0
    //     })
      }

   
   
 
  }

   async function Deletecart() {

   
    const deletecart = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
     
    });


      console.log(deletecart)
      if(deletecart.ok){
        notify("تم حدف كل كارط   كامل بنجاح ","success");
        setcoupoun("")
        setdatacart({products:[],
           totalCartPrice: 0,
    totalAfterDiscount: 0
        })
      }
 
  }
 async function Updatecoupon(coupon) {
 

    
     const updatecoupon = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/cart/applyCoupon`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
      body: JSON.stringify({
       couponName:coupon
      }),
    });
      console.log(updatecoupon)

    if (updatecoupon.ok) {
      notify("تم اضافة  الكوبون    بنجاح", "success");
      console.log(updatecoupon)
      Gettocart()
      setisvalid(false)
    } else if(updatecoupon && updatecoupon.status===400){
      notify("هدا الكوبون  غير موجودانتهت صلاحيته  ", "error");
      setisvalid(true)
    }else if(updatecoupon && updatecoupon.status===500){
      notify("انت غير مسجل", "error");
    }
    const datacoupn = await updatecoupon.json();
    console.log("updatecartiemmmmm",datacoupn)
 
  }



  async function Updatecarteitem(id,count) {
 

    
     const updatecartitem = await fetch(`https://ecommerce-complete-kbe3.onrender.com/api/v1/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
      body: JSON.stringify({
       count:count
      }),
    });
      console.log(updatecartitem)

    if (updatecartitem.ok) {
      notify("تم تعديل  الكمية    بنجاح", "success");
      console.log(updatecartitem)
      Gettocart()
    } else if(updatecartitem && updatecartitem.status===500){
      notify("انت غير مسجل", "error");
    }
    const datacart = await updatecartitem.json();
    console.log("updatecartiemmmmm",datacart)
 
  }
  console.log(dataproduct)
  async function addtocarte(id) {
    console.log(id)
   console.log("dataproductcarte",dataproduct)
  const newcolor=dataproduct.find((item)=>
    //  return item.availableColors.length>0
    // item._id===id
    
     
    item._id===id
    
     
    
      // const newitem=item.find((itemm)=>itemm._id===id);
      // console.log(newitem)
      // return newitem;
    
    
    //  console.log(item.availableColors)
   )
   console.log(newcolor)
   const hashcolor=newcolor.availableColors.length>0;
console.log(hashcolor)
  //  console.log(item.availableColors)
  //  console.log(item.availableColors)
          console.log(newcolor)
    console.log(dataproduct[0].availableColors)
   if(hashcolor){
       console.log(newcolor)

         if(color===''){
        notify("من فضلك اختر لون");
        return;
    }
   }else{
    setselectcolor("")
   }
 
    const addtocart = await fetch("https://ecommerce-complete-kbe3.onrender.com/api/v1/cart", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")} `,
      },
      body: JSON.stringify({
        productId:id,
        color
      }),
    });
      console.log(addtocart)

    if (addtocart.ok) {
      notify("تم اضافة الي السلة بنجاح", "success");
      setselectcolor("")
      // Gettocart()
    } else if(addtocart && addtocart.status===500){
      notify("انت غير مسجل", "error");
    }
    else if(addtocart && addtocart.status===403){
      notify("انت  غير مسموح لك بالاضافة ", "warn");
    }
    const datacart = await addtocart.json();
 
  }
  return [isvalid,setproducts,products,settotalAfterDiscount,totalAfterDiscount,coupon,setcoupoun,Updatecoupon,changecolor,addtocarte,indexcolor,color,datacart,Gettocart,Removeallcart,setdatacart,Deletecart,count,setcount,Updatecarteitem];
};

export default AddtocartHook;
