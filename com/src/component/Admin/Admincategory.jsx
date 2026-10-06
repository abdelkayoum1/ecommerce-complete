import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import notify  from '../../hook/useNotification'
  import { ToastContainer, toast } from 'react-toastify';
import AddCategoryhook from '../../hook/category/AddCategoryhook';
const Admincategory = () => {

    const  [handleNameref,handleImageClick,press,loading,name,setTitle,img,image]=AddCategoryhook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4" style={{ fontWeight: "bold" }}>
          اضف تصنيف جديده
        </div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          {/* <img onClick={handleImageClick}  src={image || avatar} alt="" height="100px" width="120px"  style={{cursor:'pointer'}} /> */}

          <label htmlFor="upload-photo">
            <img
              src={image}
              alt=""
              height="100px"
              width="120px"
              style={{ cursor: "pointer" }}
            />

            <input
              onChange={handleImageClick}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="upload-photo"
            />
          </label>
          <input
            name="title"
            style={{ width: "100%" }}
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <Button
            onClick={handleNameref}
            variant="contained"
            className="btn-save d-inline mt-2 "
          >
            حفظ التعديلات
          </Button>
        </Col>
      </Row>
      {press ?loading? <Spinner animation="border"   variant="primary" />:<h4> الانتهاء</h4>:null}

              <ToastContainer />

    </div>
  );
};
export default Admincategory;
