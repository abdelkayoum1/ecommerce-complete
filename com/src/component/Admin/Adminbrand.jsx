import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import Button from "@mui/material/Button";
import Addbrandhouk from "../../hook/brand/Addbrandhook";
  import { ToastContainer, toast } from 'react-toastify';
  import Spinner from 'react-bootstrap/Spinner';
import { Auth } from "../../page/auth/context/auth/authContext";
  

const Adminbrand = () => {
  const {token}=Auth();
  const [
    handleNameref,
    handleImageClick,
    press,
    loading,
    name,
    setTitle,
    img,
    image,
  ] = Addbrandhouk();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4" style={{ fontWeight: "bold" }}>
          اضف ماركه جديده
        </div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <label htmlFor="upload-image">
            <img src={image} alt="" height="100px" width="120px"  style={{cursor:'pointer'}} />
            <input
              type="file"
              id="upload-image"
              onChange={handleImageClick}
              style={{ display: "none" }}
            />
          </label>
          <input
            style={{ width: "100%" }}
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <Button variant="contained" className="btn-save d-inline mt-2 "  onClick={handleNameref}>
            حفظ التعديلات
          </Button>
        </Col>
      </Row>
       {press ?loading? <Spinner animation="border"   variant="primary" />:<h4> الانتهاء</h4>:null}
      
                    <ToastContainer />
    </div>
  );
};

export default Adminbrand;
