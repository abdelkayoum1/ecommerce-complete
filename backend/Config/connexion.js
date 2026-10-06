const mongose=require('mongoose');


   const connect =async()=>{await mongose.connect(process.env.url).then(()=>console.log("mongosse connect"));

   }
module.exports=connect;