
  import { ToastContainer, toast } from 'react-toastify';


const notify =async (msg,type) =>{
         if(type==="success"){
          toast.success(msg);
         }else if(type==="error"){
          toast.error(msg)

         }else{
          toast.warn(msg)
         }
      } 

      export default notify;