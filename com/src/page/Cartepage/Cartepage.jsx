import React, { useEffect } from 'react'
import {Row,Col}  from 'react-bootstrap';
import CartItem from '../../component/Cart/CartItem';
import CartCheckout from '../../component/Cart/Cartcheckout'
import Typography  from '@mui/material/Typography'
import Container  from '@mui/material/Container'
import AddtocartHook from '../../hook/Cart/AddtocartHook';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import '../../index.css'
const Cartepage = ({isvalid,setproducts,products,settotalAfterDiscount,totalAfterDiscount,coupon,setcoupoun,Updatecoupon,Gettocarte,Removeallcart,setdatacart,datacart,Deletecart,count,setcount,Updatecarteitem}) => {
 useEffect(()=>{
  Gettocarte()
 },[])


 console.log(datacart.products)

        // console.log(datacart[0].product._id)

   async function  remove(id){
    console.log(id)
      await Removeallcart(id);
      console.log(products)
    const newcart= products.filter((val)=>{
    return  val._id!==id
    });
    console.log("before",newcart)
    setproducts(newcart)
    console.log("after",newcart)
    console.log(products)
       
      

    }
    useEffect(()=>{

    })
//  const [changecolor,addtocarte,indexcolor,color,datacart]=AddtocartHook();
console.log("carte",datacart)
// console.log("cartelength",datacart)


// console.log("cartelengthhh",datacart[0].product.imageCover)

// useEffect(()=>{
//    console.log("cart",datacart)

// },[])
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  const cards = document.querySelectorAll(".productcard");

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, [products]);
 return (
    <Container  > 
    <div  >
             <Typography className="عربة"  sx={{direction:'rtl',fontWeight:'bold',marginTop:'70px',position:'relative',left:'50%'}}> عربة  التسوق</Typography>
      
      <Row  style={{direction:'rtl',display:'flex',justifyContent:'center',marginBottom:'15px'}}>
        <Col  xs="12" md="9">

        {  products&& products.length>0 ? (products.map((item,index)=>{
                  return   <CartItem Updatecarteitem={Updatecarteitem}  style={{
        animationDelay: `${index * 0.25}s`
      }}  count={count} setcount={setcount} Deletecart={Deletecart} Gettocarte={Gettocarte} setdatacart={setdatacart} Removeallcart={()=>remove(item._id)}  datacart={item}  key={item._id}/>

        })):<Box sx={{width:'100%', top:'50%',textAlign:'center', right:'50%'}}><h6  style={{fontSize:'24px'}}  className='barnd-text'>  السلة فارغة </h6></Box> }
                 

        </Col>

         <Col   xs="6" md="3"  className='mobile'>
        <CartCheckout  products={products} Deletecart={Deletecart} isvalid={isvalid} totalAfterDiscount={totalAfterDiscount} settotalAfterDiscount={settotalAfterDiscount}  coupon={coupon} setcoupoun={setcoupoun}Updatecoupon={Updatecoupon} Gettocarte={Gettocarte} datacart={datacart}/>
        </Col>
      </Row>
    </div>
    <ToastContainer/>
    </Container>
  )
}

export default Cartepage
