import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./page/home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";

import HomePage from "./page/home/homepage";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Allcategory from "./page/category/Allcategory";
import AllBrand from "./page/brand/AllBrand";
import ProductPage from "./page/products/ProductPage";
import ProductDetailPage from "./page/products/ProductDetailPage";
import Pyment from "./page/pyment/Pyment";
import AdminAllproduct from "./page/admin/AdminAllproduct";
import AdminAllorder from "./page/admin/AdminAllorder";

import Navbar from ".//component/utilite/navbar";
import Cartepage from ".//page/Cartepage/Cartepage";
import Adminorderdetailpage from "./page/admin/Adminorderdetailpage";
import Adminaddbrans from "./page/admin/Adminaddbrans";
import Adminaddcategory from "./page/admin/Adminaddcategory";
import Adminaddsubcategorypage from "./component/Admin/Adminaddsubcategorypage";
import Adminaddsubcategory from "./page/admin/Adminaddsubcategory";
import AdminAddproduct from "./page/admin/AdminAddproduct";
import Userallorder from "./component/User/Userallorder";
import UserFavoratepage from "./page/User/UserFavoratepage";
import UserAdress from "./page/User/UserAdress";
import Useraddadress from "./component/User/Useraddadress";
import UserEditadressepage from "./page/User/UserEditadressepage";
import Userprefilepage from "./page/User/Userprefilepage";
import AdminEditproduct from "./page/admin/AdminEditproduct";
import ViewsSearchproductHome from "./hook/product/ViewsSearchproducthome";
import Authprovider from "./page/auth/context/auth/authprovider";
import Protectedroute from "./page/auth/protected";
import Forgetpassword from "./page/auth/Forgetpassword";
import Verificationpassword from "./page/auth/Verificationpassword";
import Resetpassword from "./page/auth/Resetpassword";
import Getallreviewsfavorate from "./hook/reviews/Getallreviewsfavorate";
import Adminaddcoupounpage from "./page/admin/Adminaddcoupounpage";
import userAddadressesHook from "./hook/User/userAddadressesHook";
import AddtocartHook from "./hook/Cart/AddtocartHook";
import { useEffect } from "react";

function App() {
  const [
    dataproduct,
    getdataproductsearch,
    getdatasearch,
    pagination,
    paginationpage,
  ] = ViewsSearchproductHome();
  const [favid, setfavid, getallreviews, datafav, setdatafav] =
    Getallreviewsfavorate();
      // const [getalladress,adduseradres,adressuser,setadresuser,home,details,phone,city,postalcode,setcodepostal,setcity,setphone,setdetails,sethome]=userAddadressesHook();
    
 const [isvalid,setproducts,products,settotalAfterDiscount,totalAfterDiscount,coupon,setcoupoun,Updatecoupon,changecolor,addtocarte,indexcolor,color,datacart,Gettocart,Removeallcart,setdatacart,Deletecart,count,setcount,Updatecarteitem]=AddtocartHook({dataproduct});
 
 useEffect(()=>{
  Gettocart()
 },[])
 return (
    <>
      {/* <Authprovider> */}
      {/* <Cartprovider> */}
      <Authprovider>
        
          <Navbar products={products} datasearch={getdatasearch}Deletecart={Deletecart}  datacart={datacart}/>
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sign" element={<Login />} />
              <Route element={<Protectedroute />}>
                <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path="/ordersucces" element={<OrderSucces />} /> */}
            {/* <Route path="/getorderdata" element={<Getorder />} /> */}

            {/* </Route> */}

            {/* <Route element={<Protectedroute/>}> */}
            <Route
              path="/"
              element={
                <HomePage
                  favid={favid}
                  datafav={datafav}
                  setdatafav={setdatafav}
                  setfavid={setfavid}
                  dataproduct={dataproduct}
                />
              }
            />
            {/* </Route> */}
            <Route path="/sign" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allcategory" element={<Allcategory />} />
            <Route path="/allbrand" element={<AllBrand />} />
            <Route
              path="/products"
              element={
                <ProductPage
                  favid={favid}
                  datafav={datafav}
                  setdatafav={setdatafav}
                  setfavid={setfavid}
                  dataproduct={dataproduct}
                  pagination={pagination}
                  paginationpage={paginationpage}
                  getdataproductsearch={getdatasearch}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetailPage Gettocart={Gettocart} changecolor={changecolor}  addtocarte={addtocarte} indexcolor={indexcolor} color={color}/>} />
            <Route path="/cart" element={<Cartepage  setproducts={setproducts} isvalid={isvalid} products={products} settotalAfterDiscount={settotalAfterDiscount} totalAfterDiscount={totalAfterDiscount} coupon={coupon} setcoupoun={setcoupoun} Updatecoupon={Updatecoupon} Updatecarteitem={Updatecarteitem} setcount={setcount} count={count} Deletecart={Deletecart} setdatacart={setdatacart} Removeallcart={Removeallcart}  Gettocarte={Gettocart}  datacart={datacart}/>} />
            <Route path="/order/pyment" element={<Pyment   datacart={datacart}/>} />
            <Route path="/admin/allproducts" element={<AdminAllproduct />} />
            <Route path="/admin/allorder" element={<AdminAllorder />} />
            <Route path="/admin/order/:id" element={<Adminorderdetailpage />} />

            <Route path="/admin/addbrand" element={<Adminaddbrans />} />

            <Route path="/admin/addcategory" element={<Adminaddcategory />} />
            <Route
              path="/admin/addsubcategory"
              element={<Adminaddsubcategory />}
            />

                        <Route path="/admin/addcoupoun" element={<Adminaddcoupounpage />} />

            <Route path="/admin/addproduct/:id" element={<AdminAddproduct />} />
            <Route path="/user/allorder" element={<Userallorder />} />
            <Route
              path="/user/favorate"
              element={
                <UserFavoratepage
                  favid={favid}
                  datafav={datafav}
                  setdatafav={setdatafav}
                  setfavid={setfavid}
                />
              }
            />
            <Route path="/user/adress" element={<UserAdress />} />
            <Route path="/user/addadress" element={<Useraddadress />} />
            <Route path="/user/editadress/:id" element={<UserEditadressepage />} />
            <Route path="/user/prefile" element={<Userprefilepage />} />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditproduct />}
            />
            <Route path="/user/forgetpassword" element={<Forgetpassword />} />
            <Route
              path="/user/verificationpassword"
              element={<Verificationpassword />}
            />
            <Route path="/user/resetpassword" element={<Resetpassword />} />

            {/* <Route path="/Card" element={<Card />} /> */}
          </Routes>
          {/* <Slider/> */}
        {/* </BrowserRouter> */}
        {/* </Cartprovider> */}
        {/* // </Authprovider> */}
      </Authprovider>
    </>
  );
}

export default App;
