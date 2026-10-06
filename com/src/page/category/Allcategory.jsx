// import SubTitle from '../utilite/subtitle';
import CategoryCard from "../../component/category/CategoryCard";
import Categorycontainer from "../../component/category/Categorycontainer";

import Paginationn from "../../component/utilite/Pagination";

import AllCategory from '../../hook/category/AllCatgeory'
const Allcategory = () => {
   const [handlepage,getdata,dataa,loading,cptpage]=AllCategory();
  return (
    <>
      <div style={{ display: "flex" }}></div>
      <Categorycontainer   data={dataa}  loading={loading}/>
      {cptpage>1 ?  (<Paginationn pageCount={cptpage} onpress={handlepage} />):null}
    </>
  );
};

export default Allcategory;
