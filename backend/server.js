const  express=require('express');

const dotenv=require('dotenv').config();

const app=express();
const cors=require('cors');
const port=process.env.PORT;

const  createcategory=require("../../commerce/backend/routes/categoryRoute")
const  subcategory=require("../../commerce/backend/routes/subCategoryRoute")
const  brandrouter=require("../../commerce/backend/routes/brandRoute")
const  productroute=require("../../commerce/backend/routes/productRoute")
const  userRoute=require("../../commerce/backend/routes/userRoute")
const  authRouter=require("../../commerce/backend/routes/authRoute")
const  reviewsrouter=require("../../commerce/backend/routes/reviewRoute")
const  wishlistroute=require("../../commerce/backend/routes/wishlistRoute")
const  coupounroute=require("../../commerce/backend/routes/couponRoute")
const  adresroute=require("../../commerce/backend/routes/addressRoute")
const  carteroute=require("../../commerce/backend/routes/cartRoute")
const  orderrouter=require("../../commerce/backend/routes/orderRoute")




const connectdb=require('../../commerce/backend/Config/connexion')



connectdb();
app.use(express.json())
app.use(cors());
app.use('/images', express.static('public/images'));
app.use('/api/v1/category',createcategory)
app.use('/api/v1/subcategories',subcategory)

app.use('/api/v1/brands',brandrouter)
app.use('/api/v1/product',productroute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/reviews',reviewsrouter)
app.use('/api/v1/wishlist',wishlistroute)
app.use('/api/v1/addresses',adresroute)
app.use('/api/v1/cart',carteroute)
app.use('/api/v1/orders',orderrouter)

app.use('/api/v1/coupons',coupounroute)




// app.use('/recipe',require('./route/recipe'));
// app.use('/user/register',require('./route/user'));
// app.use('/product',require('./route/product'));
// app.use('/cart',require('./route/cart'));

// app.use('/public',express.static('public'))

app.listen(port,()=>{
    console.log(`server start in port ${port}`)
})