// import SubTitle from '../utilite/subtitle';
import CategoryCard from '../../component/category/CategoryCard';
import Clothe from '../../assets/clothe.png'

// import Laptop from '../../assets/labtop.png';
import Pic from '../../assets/pic.png';

import Sale from '../../assets/sale.png';
import Cat from '../../assets/cat2.png';
import {useState,useEffect} from  'react'
import Spinner from 'react-bootstrap/Spinner';
import Box from '@mui/material/Box'
const Categorycontainer = ({data,loading}) => {
  console.log(data)

    const color=["#FFD3E8","#F4DB45","#55CFDF","#FF6262","#0034ff","#FFD3E8"]
    const [dataa, setdata] = useState([]);
    // https://ecommerce-complete-kbe3.onrender.com
    async function getdata() {
      const res = await fetch("http://localhost:5000/api/v1/category", {
        method: "Get",
      });
      const data = await res.json();
      console.log(data.data);
      setdata(data.data);
          console.log(dataa[0].image);
  
  
    }
    useEffect(() => {
      getdata();
    }, []);
  return (
    <>
   <div style={{marginTop:'70px'}} >
      {/* <SubTitle  title='المزيد'   btntitle='التصنيفات'  path='/allcategory' /> */}
      <Box className="box" sx={{textAlign:"end",fontWeight:'bold',mt:'10px',marginRight:"10px"}} >كل  التصنيفات</Box>
     <Box  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop:'10px',
    direction:'rtl',
    margin:'30px'
    
  }}>
     { loading?   <Box  sx={{width:'100%',display:'flex',justifyContent:'center'}}><Spinner animation="border"   variant="primary" /></Box>
      : data.length>0?(data.map((item,index)=>{
        return  <CategoryCard  key={index} title={item.name} img={`https://ecommerce-complete-kbe3.onrender.com/images/${item.image}`} background={color[Math.floor(Math.random()*5)+1]} />
      })): <Box  sx={{position:'absolute',right:'45%'}}><h4>لاتوجد  منتجات</h4></Box>}

          </Box>
    </div>
     </>
  )
}

export default Categorycontainer
