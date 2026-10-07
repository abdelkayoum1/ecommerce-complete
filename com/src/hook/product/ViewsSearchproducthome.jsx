import {React,useEffect,useState} from 'react'

const ViewsSearchproductHome = () => {

          const [dataproduct,setdataproduct]=useState([]);
              const [pagination,setpagination]=useState('');
              const [paginationpage,setpaginationpage]=useState('');

    async function  getdataproduct(){


  try {
     const prod=await fetch('https://ecommerce-complete-kbe3.onrender.com/api/v1/product',{
    method:'GET',
   });
   const data=await prod.json();
   console.log("hihiihiii")
   console.log(data.data)
   console.log(data.data[0].imageCover)
    
   setdataproduct(data.data)
  //  setpagination()
  } catch (error) {
    console.log(error)
  }
  }
  async function getdataproductsearch(queryString) {
  try {
    const prod = await fetch(
      `https://ecommerce-complete-kbe3.onrender.com/api/v1/product?${queryString}`,
      {
        method: 'GET',
      }
    );

    const data = await prod.json();
    setdataproduct(data.data);
        console.log("length1",data.data)

    // console.log("length",data.results)
   setpagination(data.results)
   setpaginationpage(data.paginationResult.numberOfPages)
  } catch (error) {
    console.log(error);
  }
}
let limit=4;
  async function getdatasearch(page=1){
    let word,catchecked="",pricefrom="",priceto="",pricetostrin="",pricefromstring="";
    word=localStorage.getItem('searchword')
      // console.log("CAT CHECKED =", localStorage.getItem("catchecked"));

    if(localStorage.getItem("catchecked")){
      catchecked=localStorage.getItem("catchecked");
    }
  if(localStorage.getItem("pricefrom")){
    
      pricefrom=localStorage.getItem("pricefrom");
      if(pricefrom==="" || pricefrom<=0){
        pricetostrin="";
      }else{
        pricetostrin=`price[gte]=${pricefrom}`;
      }
    }
    if(localStorage.getItem("priceto")!=null){
      priceto=localStorage.getItem("priceto");
      if(priceto==="" || priceto<=0){
        pricefromstring="";
      }else{
        pricefromstring=`price[lte]=${priceto}`;
      }

    }


  //   }
    get()
   await getdataproductsearch(`sort=${encodeURIComponent(sold)}&${pricefromstring}&${pricetostrin}&${catchecked}&limit=${limit}&page=${page}&keyword=${word}`);
      //  console.log('after',sold)

  }

  let searchtype="",sold="";
  function get(){
    if(localStorage.getItem("searchkey")!=null)
   searchtype= localStorage.getItem("searchkey");
  //  console.log("bda")
    if(searchtype==='السعر من الأقل للأعلى'){
      sold="price";
    }else if(searchtype==='السعر من الأعلى للأقل'){
      sold="-price";
    }else if(searchtype==='تقيما'){
      sold="quantity";
    }else if(searchtype==='مبيعا'){
      sold="sold";
    }
    
    else{
      sold="";
    }
  //  console.log("khalas")

  }
  useEffect(()=>{
    // getdataproduct();
    getdatasearch();
  },[])

  
  return [dataproduct,getdataproductsearch,getdatasearch,pagination,paginationpage];
}

export default ViewsSearchproductHome;
