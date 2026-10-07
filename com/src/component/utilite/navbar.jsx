import '../../index.css';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Deleteicon from '../../assets/delete.png'
import Badge from '@mui/material/Badge'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewsSearchproductHome from "../../hook/product/ViewsSearchproducthome";
import { Auth } from "../../page/auth/context/auth/authContext";

export default function Navbare({ products,datasearch,datacart }) {
  // const[dataproduct,getdataproductsearch,getdatasearch]=ViewsSearchproductHome();
  const { token ,setToken} = Auth();
  // console.log("token44444", token);
  const navigate = useNavigate();
  const [search, setsearch] = useState(localStorage.getItem("searchword"));
 console.log(datacart.products)
  function searchresultat(e) {
    localStorage.setItem("searchword", e.target.value);
    console.log(e.target.value);
    setsearch(e.target.value);
  }
  useEffect(() => {
    const word = localStorage.getItem("searchword" || "");

    datasearch();
  }, [search]);
  // function get(){
  //   local
  // }
  const [user,setUser]=useState("");
  useEffect(()=>{
 if (localStorage.getItem("user") != null) {
    
    setUser(JSON.parse(localStorage.getItem("user")));
   
  }
  },[])
 async function logout(){
    localStorage.removeItem("user");
        localStorage.removeItem("token");
       

    window.location.href="/sign";
     setToken(null);
    setUser("")
  }
  function gotocart() {
    navigate("/cart");
  }
  return (
    <AppBar
      position="static"
      sx={{
        background: "#22272b",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "white",
          }}
        >
          <Typography>العربية</Typography>

           <IconButton aria-label="cart" onClick={()=>navigate("/cart")} >
  <Badge badgeContent={products.length||"0"} color="primary">
    <ShoppingCart sx={{color:'#ffffff'}} />
  </Badge>
</IconButton>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {token ? (
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.name}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
    {user.role==="admin"? (<a className="dropdown-item" href="/admin/allproducts"> لوحة التحكم </a>):
    (<a className="dropdown-item" href="/user/allorder">الصفحة الشخصية </a>)}
    <a className="dropdown-item" href="/"   onClick={logout}>تسجيل الخروج</a>
  </div>
</div>
            ) : (
              <Typography  sx={{cursor:'pointer'}}  onClick={()=>navigate("/sign")}> دخول</Typography>
            )}

            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Search */}
        <TextField
          value={search}
          onChange={searchresultat}
          placeholder="ابحث..."
          variant="outlined"
          size="small"
          sx={{
            textAlign: "end",
            width: "55%",
            bgcolor: "white",
            borderRadius: 1,
          }}
        />

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/logo.png" alt="logo" width={45} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
