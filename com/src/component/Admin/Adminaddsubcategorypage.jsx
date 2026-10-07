import {React,useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from '@mui/material/Button'
import notify from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
const Adminaddsubcategorypage = () => {


      const [dataa, setdata] = useState([]);
            const [name, setTitle] = useState("");
            const [category, setcategory] = useState("");

        const [loading, setloading] = useState(true);
    
      async function getdata() {
       try {
         const res = await fetch("http://https://ecommerce-complete-kbe3.onrender.com/api/v1/category", {
          method: "Get",
        });
        const data = await res.json();
       
        console.log(data.data);
        setdata(data.data);
        // setcategory(data.data._id)
            // console.log(dataa[0].image);
       } catch (error) {
        console.log(error)
       }finally{
           setloading(false)
       }
    
    
      }
      useEffect(() => {
        getdata();
      }, []);

    
    async  function handletitleandid(){
      console.log("2")

       if(category===""){
        notify(' من فضلك  التصنيف   ',"Warn");
        return;
      }
       if(name===""){
        notify(' من فضلك اسم التصنيف   ',"Warn");
        return;
      }
         try {
         let res = await fetch("http://https://ecommerce-complete-kbe3.onrender.com/api/v1/subcategories", {
          method: "Post",
          body:JSON.stringify({
            
            name,category          
          }),headers:{
            'Content-Type':'application/json'
          }
          
        });
        
        const datasub = await res.json();
          
        if(res.status===201){
          notify("تمت العملية بنجاح","success")
        }else{
          notify(" خطا في عملية  الاضاف","error")
        }
    
        
        console.log(datasub);
        // setdata(datasub.data);
        // setid(data.data._id)
        console.log(datasub.name)
            // console.log(dataa[0].image);
       } catch (error) {
        console.log(error)
       }finally{
           setloading(false)
       }
        console.log(name)
                console.log(category)

      }
    
     
  return (
     <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"  style={{fontWeight:'bold'}}>اضف تصنيف فرع جديد</div>
                <Col sm="8">
                   
                    <input
                    style={{width:'100%'}}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <select style={{width:'100%',padding:'5px',marginTop:'5px'}}   onChange={(e)=>setcategory(e.target.value)}>

                        <option value=""> اختر تصنيف </option>
                          {dataa ? (dataa.map((item)=>{
                            return (<option  key={item._id}  value={item._id}> {item.name} </option>)
                          })):null}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <Button  variant='contained' className="btn-save d-inline mt-2 "  onClick={handletitleandid}>حفظ التعديلات</Button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
  )
}

export default Adminaddsubcategorypage
