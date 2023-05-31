
import React, { Fragment } from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import BookingModal from "./modal/BookingModal";
import Test from "./modal/Test";
import Modal from "./modal/Modal";

const SearchResults = ({ show, onClose, children }) => {


  const [showModal, setShowModal] = useState(false);
  const [isOpen, setState] = useState(false);
  const [iddv, setIddv] = useState(57);

  function handleClick() {
    setState(!isOpen);
    console.log(isOpen)
  }

  return (
    // <>
    // <Fragment>
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          PHÒNG KHÁM CHUYÊN KHOA NHI - TMH PEDICMA
        </div>
        {/* <Test isVisible={showModal} onClose={() => setShowModal(false)} isOpen={false} toggle={function (): void {
        throw new Error("Function not implemented.");
      } } title={""} body={""} /> */}
        <div className={styles.body}>
          <div className={styles.name_doctor}>BSCK2. TRẦN LÊ THỊ BÍCH HẰNG</div>
          <div className={styles.name_clinic}>BVĐK. Phụ sản Phương Châu</div>
          <div className={styles.phone}>0907.666.777</div>
          <div className={styles.address}>
            125/16/151, Xô Viết Nghệ Tĩnh, P. An Nghiệp | Chỉ đường
          </div>
          <div className={styles.row}>
            <div className={styles.reaction}>
              {/* <i className="fas fa-circle-heart">145.965</i> */}
              <i className="fas fa-search" />
              145.965
            </div>
            <button className={styles.btn_confirm} onClick={() => setShowModal(true)}>Đặt lịch khám</button>
            {/* {showModal && <Test
              onClose={() => setShowModal(false)} key={0} date={undefined} id={0} Ho={""} Ten={""} Hovaten={""} dodai={0} show={undefined} children={undefined} title={undefined} Dienthoai={undefined} Gioitinh={undefined} Diachi={undefined} key1={""} dodaimang={0} gioitinh={undefined}            >
              Hello from the modal!
            </Test>} */}

          </div>
        </div>
      </div>
      <Test  iddv={iddv} onClose={() => setShowModal(false)} show={showModal}></Test>
    </div>




    // </Fragment>

  );
};

export default SearchResults;
