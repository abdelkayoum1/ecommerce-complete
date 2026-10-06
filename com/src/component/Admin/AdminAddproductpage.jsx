import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import Avatar from "../../assets/avatar.png";
import Add from "../../assets/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import notify  from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import addproducthook from '../../hook/product/addproducthook'
import { useParams } from "react-router-dom";
import { Auth } from "../../page/auth/context/auth/authContext";

const AdminAddproductpage = () => {
  const {id}=useParams()
  console.log(id)
  const {token}=Auth();
  const [handlechangecolor,removecolor,setoptions,options,selectedidbrand,selectedcategoryid,onRemove,onSelect,addproduct,images,setcolor,colore,setImages,setloading,loading,setshowcolor,showcolor,setselectedidcategory,selectedidcategory,setsalectedidbrand,salectedidbrand,setqltprod,qltprod,setpriceafter,priceafter,setpricebefore,pricebefore,setnamedescription,namedescription,setnamepro,namepro,databrand,dataa]=addproducthook();
 
  return (
    <div>
      <Row className="justify-content-start ">
        <div
          className="admin-content-text pb-4"
          style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}
        >
          {" "}
          اضافه منتج جديد
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            max={8}
            // cropConfig={{ crop, ruleOfThirds: true }}
          />{" "}
          <input
            value={namepro}
            
            onChange={(e) => {
              setnamepro(e.target.value);
            }}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            style={{ width: "100%" }}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            style={{ width: "100%" }}
            value={namedescription}
            onChange={(e) => {
              setnamedescription(e.target.value);
            }}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            style={{ width: "100%" }}
            value={pricebefore}
            onChange={(e) => {
              setpricebefore(e.target.value);
            }}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر بعد الخصم"
            style={{ width: "100%" }}
            value={priceafter}
            onChange={(e) => {
              setpriceafter(e.target.value);
            }}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكمية المتاحة"
            style={{ width: "100%" }}
            value={qltprod}
            onChange={(e) => {
              setqltprod(e.target.value);
            }}
          />
          <select
            name="languages"
            id="lang"
            style={{ width: "100%", padding: "5px" }}
            className="select input-form-area mt-3 px-2 "
            onChange={selectedcategoryid}
          >
            <option value="0"> اختر التصنيف الرئيسي </option>
            {dataa.map((item) => {
              return <option value={item._id}> {item.name} </option>;
            })}
          </select>
          <Multiselect.default
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            style={{ width: "100%", padding: "5px" }}
            className="select input-form-area mt-3 px-2 "
            onChange={selectedidbrand}
          >
            <option value="val">اختر مارك</option>
            {databrand
              ? databrand.map((item) => {
                  return <option value={item._id}> {item.name}</option>;
                })
              : null}
          </select>
          <div className="text-form mt-3 " style={{ color: "grey" }}>
            {" "}
            الالوان المتاحه للمنتج
          </div>
          <div className="mt-1 d-flex">
            {colore.length >= 1
              ? colore.map((colors) => {
                  return (
                    <div
                      onClick={() => removecolor(colors)}
                      className="color ms-2 border  mt-1"
                      style={{
                        backgroundColor: colors,
                        width: "30px",
                        borderRadius: "50%",
                        height: "35px",
                        cursor: "pointer",
                      }}
                    ></div>
                  );
                })
              : null}

            <img
              src={Add}
              onClick={() => setshowcolor(!showcolor)}
              alt=""
              width="30px"
              height="35px"
              className=""
              style={{ cursor: "pointer" }}
            />
            {showcolor === true ? (
              <CompactPicker onChangeComplete={handlechangecolor} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
         {loading ? (<Spinner/>):<button
          onClick={addproduct}
            style={{
              background: "black",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            حفظ التعديلات
          </button>}
        </Col>
      </Row>
      <ToastContainer/>
    </div>
  );
};

export default AdminAddproductpage;
