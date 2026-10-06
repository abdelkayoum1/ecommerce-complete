import React from "react";

// import Navbar from "../../component/utilite/navbar";
import Slider from "../../component/home/slider";

import HomeCatgory from "../../component/home/HomeCatgory";
import Discount from "../../component/home/Discount";

import ProductCard from "../../component/product/ProductCard";
import Box  from '@mui/material/Box';
// import Product1  from '../../assets/prod1.png';
// import Mobile1  from '../../assets/mobile1.png';
import Product1  from '../../assets/prod1.png';
import Mobile1  from '../../assets/mobile1.png';
import Mobile2  from '../../assets/mobile2.png';

// import Mobile2  from '../../assets/mobile2.png';
import Cardproductcontainer from '../../component/product/Cardproductcontainer';
import Brandfeature from '../../component/brand/Brandfeature';
import ViewsHomeproductHome from "../../hook/product/ViewsHomeproductHome";
import ViewsSearchproductHome from "../../hook/product/ViewsSearchproducthome";
import { ToastContainer } from "react-toastify";


const HomePage = ({dataproduct,favid,setfavid,datafav,setdatafav}) => {
  // const[item]=ViewsHomeproductHome();
  // const [dataproduct,getdataproductsearch,getdatasearch,pagination,paginationpage]=ViewsSearchproductHome()
  // console.log('jijel123')
  // console.log(item)
  return (
    <div  style={{minHeight:'672px'}}>
      
      <Slider />
      <HomeCatgory />
     

       {/* <ProductCard  img={Product1}/>
              <ProductCard  img={Mobile1}/>

       <ProductCard img={Mobile2}/> */}
<Cardproductcontainer favid={favid} datafav={datafav} setdatafav={setdatafav} setfavid={setfavid} da product={dataproduct} title='المزيد'  btntitle='الاكثر  مبيعا'  path='/products' />
<Discount/>
<Cardproductcontainer favid={favid} datafav={datafav} setdatafav={setdatafav} setfavid={setfavid} product={dataproduct} title='المزيد'  btntitle='الاكثر  تقيما'   path='/products'/>
< Brandfeature  title='المزيد'  btntitle='الماركات'  />
          

        <ToastContainer/>

    </div>
  );
};

export default HomePage;
