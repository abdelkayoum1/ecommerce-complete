const  express=require('express');

const dotenv=require('dotenv').config();

const app=express();
const cors=require('cors');
const port=process.env.PORT;

const  createcategory=require("./routes/categoryRoute")
const  subcategory=require("./routes/subCategoryRoute")
const  brandrouter=require("./routes/brandRoute")
const  productroute=require("//routes/productRoute")
const  userRoute=require("./routes/userRoute")
const  authRouter=require("./routes/authRoute")
const  reviewsrouter=require("./routes/reviewRoute")
const  wishlistroute=require("./routes/wishlistRoute")
const  coupounroute=require("./routes/couponRoute")
const  adresroute=require("./routes/addressRoute")
const  carteroute=require("./routes/cartRoute")
const  orderrouter=require("./routes/orderRoute")




const connectdb=require('./Config/connexion')



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