import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Useradressitem from "../User/Useradressitem";
import { Typography } from "@mui/material";
import deleteicon from "../../assets/delete.png";
import DeleteCouponHook from "../../hook/Coupoun/DeleteCouponHook";
import { Button, Modal } from "react-bootstrap";
import EditcoupounHook from "../../hook/Coupoun/EditcoupounHook";
const AdmincoupnCard = ({
  allcpnsitem,
  deletecoupoun,
  Updatecoupoun,
  getallcpoupn,
}) => {
  console.log("allcpnsitem", allcpnsitem.name);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [
    GetoneCoupoun,
    name,
    expire,
    discount,
    setname,
    setexpire,
    setdiscount,
    Editcoupoun,
  ] = EditcoupounHook();

  //  const[name,setname]=useState(allcpnsitem.name)
  //     const[expire,setexpire]=useState(allcpnsitem.expire)

  //        const[discount,setdiscount]=useState(allcpnsitem.discount)

  const handleClose = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  function handleremovecoupoun(id) {
    deletecoupoun(id, {
      name: name,
      expire: expire,
      discount: discount,
    });
    handleClose();
  }
  async function handleEditcoupoun(id) {
    await Editcoupoun(id, name, expire, discount);
    getallcpoupn();
    handleCloseEdit();
  }
  async function handleedit() {
    // setname(allcpnsitem.name)
    // setexpire(allcpnsitem.expire)
    // setdiscount(allcpnsitem.discount)
    await GetoneCoupoun(allcpnsitem._id);
    console.log(allcpnsitem._id);
    handleShowEdit();
  }
  // const [deletecoupoun]=DeleteCouponHook();
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>تاكيد الحدف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من عملية حدف الكوبون</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button
            variant="danger"
            onClick={() => handleremovecoupoun(allcpnsitem._id)}
          >
            حدف
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------------------------------------UPDATE */}
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <input
            style={{ width: "100%" }}
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder=" اسم الكوبون"
            onChange={(e) => setname(e.target.value)}
          />
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "100%" }}
            type="text"
            value={expire}
            className="input-form d-block mt-3 px-3"
            placeholder="انتهاء الصلاحية "
            onChange={(e) => setexpire(e.target.value)}
          />
          <input
            style={{ width: "100%" }}
            type="text"
            value={discount}
            className="input-form d-block mt-3 px-3"
            placeholder="  نسبة خصم الكوبون"
            onChange={(e) => setdiscount(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button
            variant="danger"
            onClick={() => handleEditcoupoun(allcpnsitem._id)}
          >
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ width: "76%", marginTop: "15px" }}>
        <div className="div">
          <div
            className="div"
            style={{
              background: "#f5f5f5",
              marginBottom: "20px",
              marginLeft: "100px",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              className="div"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                flexWrap: "wrap",
                gap: "10px",
                direction: "rtl",
              }}
            >
              <Typography sx={{ color: "black" }}>
                اسم الكوبون:{allcpnsitem.name}
              </Typography>

              <div
                className="div"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src={deleteicon} alt="" width="20px" />

                <Link style={{ textDecoration: "none" }} onClick={handleedit}>
                  {" "}
                  <Typography sx={{ color: "grey" }}>تعديل</Typography>
                </Link>

                <img src={deleteicon} alt="" width="20px" />

                <Link
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={handleShow}
                >
                  {" "}
                  <Typography sx={{ color: "grey" }}>ازالة</Typography>
                </Link>
              </div>
            </div>
            <div className="div" style={{ padding: "10px",direction:'rtl' }}>
              <Typography sx={{ color: "grey" }}>
                {" "}
                تاريخ الانتهاء:{" "}
                {new Date(allcpnsitem.expire).toLocaleDateString("fr-FR")}
              </Typography>
            </div>

            <div
              className="div"
              style={{ display: "flex", padding: "10px", gap: 2,direction:'rtl' }}
            >
              <Typography sx={{ color: "grey" }}> نسبة الخصم: </Typography>
              <Typography sx={{ color: "grey" }}>
                {allcpnsitem.discount}%
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmincoupnCard;
