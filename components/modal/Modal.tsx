import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { isParameter } from "typescript";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Thongtin from "./Thongtin";
// import { Radio } from '@nextui-org/react';


import { Props } from "react-modal";
import { before } from "node:test";

import { Placeholder } from "reactstrap";
import { disconnect } from "process";
import { SearchId, SearchPhone } from "@/Service/userSerice";
import { get } from "https";


// const inter = Inter({ subsets: ["latin"] });

// type type = {
//   Hovaten: string;
//   dodai: number;
//   show: any;
//   children: any;
//   onClose: any;
//   title: any;
//   Ho: String;
//   Ten: String;
//   Dienthoai: String;
//   Gioitinh: String;
//   Diachi: String;
// };
export type thongtinbenhnhan = {
  id: number;
  Ho: string;
  Ten: string;
  Dienthoai: string;
  Gioitinh: string;
  Diachi: string;
  Hovaten: string;
};
type Props = {
  date: any;
  key: number;
  id: number;
  Ho: string;
  Ten: string;
  Hovaten: string;
  dodai: number;
  show: any;
  children: any;
  onClose: any;
  title: any;
  // Ho: String;
  // Ten: String;
  Dienthoai: String;
  Gioitinh: String;
  Diachi: String;
  key1: string;
  dodaimang: number;
  gioitinh: String;
};

const Modal = ({
  show,
  date,
  children,
  onClose,
  title,
  key,
  id,
  Ho,
  Ten,
  dodaimang,
  key1,
  gioitinh,
}: Props) => {
  // const Modal: React.FC<type> = ({ show, children, onClose, title}) => {

  interface Benhnhan {
    id: number;
    Ho: string;
    Ten: string;
    Ngaysinh: string;
    Dienthoai: string;
    Gioitinh: any;
    Diachi: string;
    Trieuchung: string;
  }

  interface Benhnhan1 {
    id: number;
    Ho: string;
    Ten: string;
    Ngaysinh: string;
    Dienthoai: string;
    Gioitinh: any;
    Diachi: string;
    Trieuchung: string;
  }
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const [searchkey, setSearchkey] = useState("");
  const [benhnhan, setBenhnhan] = useState<Benhnhan[]>([]);
  const [benhnhan1, setBenhnhan1] = useState<Benhnhan1[]>([]);

  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");
  const [gt, setGT] = useState("Nam");
  const [diachi, setDiachi] = useState("");
  const [trieuchung, setTrieuchung] = useState("");

  // const GTGT = (gt: string) => {
  //   setGT(gt)
  // }

  // console.log(searchkey);
  // console.log("hovaten", Hovaten)
  // console.log("id", id);
  useEffect(() => {
    setIsBrowser(true);
  }, []);


  const onChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGT(event.target.value)
    
  }

  const handleSetTT = async (id: number) => {
    // setBenhnhan([])
    // console.log("ádadas1",benhnhan)
    // setName("")
    setGT("")
    // setNgaysinh("")
    // e.preventDefault();
    // event.preventDefault();
    // key1 = id.toString();
    key = id;
    console.log("id", id);

    try {
      const params1 = {
        id: id,
      };
      console.log("search", params1);
      const response1 = await SearchId(params1);
      const res1: Benhnhan1[] = response1.thongtinbenhnhans;
      console.log("check api search: ", response1);
      console.log("length1", res1.length);
      setBenhnhan(res1);
      console.log("ádadas2", res1)
      // setName(benhnhan.Ten)



      res1.map((res1) => (

        setGT(res1.Gioitinh),
        setName(res1.Ho),

        setNgaysinh(res1.Ngaysinh),
        setDiachi(res1.Diachi),
        setTrieuchung(res1.Trieuchung),

        console.log("name", name),
        console.log("gt", gt),
        console.log("ngaysinh", Ngaysinh),
        console.log("trieuchung", trieuchung),
        console.log("diachi", diachi)


      )
      );
    } catch (error) {
      console.log(error);
    }
    {

      // setName(id);

      // thongtinbenhnhans.Ten
    }
    // setName(Ho);
    // console.log("ho", Ho)
  };

  const handlechange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchkey(e.target.value);
    setName("")
    setGT("")
    setNgaysinh("")

    // console.log("key", e.target.value);
    // console.log("searchkey", searchkey);
    // e.preventDefault();
    // if (searchkey.length > 2) {
    try {
      const params = {
        key: e.target.value,
      };
      console.log("search", params);
      const response = await SearchPhone(params);
      const res: Benhnhan[] = response.thongtinbenhnhans;
      console.log("check api search: ", response);
      console.log("length", res.length);
      dodaimang = res.length;
      console.log("dodaimang", dodaimang);
      setBenhnhan(res);
    
      // if(dodaimang == 1){
      benhnhan.map((res) => (

        setGT(res.Gioitinh),

        setName(res.Ho),

        setNgaysinh(res.Ngaysinh),
        setDiachi(res.Diachi),
        setTrieuchung(res.Trieuchung),

        console.log("name", name),
        console.log("gt", gt),
        console.log("ngaysinh", Ngaysinh),
        console.log("trieuchung", trieuchung),
        console.log("diachi", diachi)
        // onchange={handlechange}

      )
      );
      // }


    } catch (error) {
      console.log(error);
    }

  };



  const handleCloseClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <form
    //  onSubmit={Searchsdt}
    >
      (
      <StyledModalOverlay>
        <StyledModal className="  w-[500px]  rounded-lg h-auto">
          <StyledModalHeader className=" bg-blue-300  ">
            <div className="flex text-xl p-2">
              <span className=" text-center uppercase w-full">
                Phòng khám chuyên khoa nhi
                <br />
                bs. trần cao thái
              </span>

              <a
                href="#"
                className="rounded-full text-center h-7 w-7 bg-gray-300   "
                onClick={handleCloseClick}
              >
                x
              </a>
            </div>
          </StyledModalHeader>
          {title && (
            <StyledModal>
              {title}
              <div></div>
            </StyledModal>
          )}
          <StyledModalBody className="bg-gray-300 h-auto">
            <div className="modal ">
              <div className="modal-body-tren bg-white m-3 p-4 rounded-md">
                <div className="grid grid-cols-5 pl-4">
                  <div className="col-span-1">
                    <p className="">Điện thoại</p>
                  </div>
                  <div className="col-span-4 pl-4">
                    <input
                      className=" border-slate-500 font-bold border-dotted w-full border-b-2"
                      type="text"
                      placeholder="NHẬP CHÍNH XÁC SỐ ĐIỆN THOẠI"
                      // onChange={e => setSearchkey(e.target.value)}
                      onChange={handlechange}
                      ref={inputRef}
                    ></input>
                    <div className=" a">
                      {/* {benhnhan.length != 1
                        ? benhnhan.map((thongtinbenhnhans, key) => (
                            <Thongtin
                              key={key}
                              id={thongtinbenhnhans.id}
                              Ho={thongtinbenhnhans.Ho}
                              Ten={thongtinbenhnhans.Ten}
                              
                              

                              // Hovaten={thongtinbenhnhans.Ho + thongtinbenhnhans.Ten}
                            />
                          ))
                        : null} */}
                      {benhnhan.length != 1
                        ? benhnhan.map((thongtinbenhnhans) => (
                          <div
                            key={thongtinbenhnhans.id}
                            // number a ={ thongtinbenhnhans.id}
                            className="aâ h-5 w-80 cursor-pointer pl-1"
                            onClick={(e) => handleSetTT(thongtinbenhnhans.id)}
                          // onChange={handlechange}
                          >
                            {thongtinbenhnhans.Ho} {thongtinbenhnhans.Ten} (
                            {thongtinbenhnhans.id})
                          </div>
                        ))
                        : null}


                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-5 py-4">
                  <div className="col-span-1 my-auto text-right">
                    <p className="datlich_text_desktop">Họ tên </p>
                  </div>
                  {/* {benhnhan.map((thongtinbenhnhans, key) =>( */}
                  <div className="col-span-4 pl-7">
                    <input
                      className="Ho w-full  border-slate-500 border-dotted font-bold border-b-2 "


                      onChange={e => setName(e.target.value)}
                      // placeholder={benhnhan.length == 0 ? "NHẬP CHÍNH XÁCH HỌ TÊN" : ""}
                      placeholder="NHẬP CHÍNH XÁC HỌ TÊN"
                      // value={name ? name : null}
                      value={
                        benhnhan.length == 1
                          ? benhnhan.map(
                            (thongtinbenhnhans) =>

                              thongtinbenhnhans.Ho +
                              " " +
                              thongtinbenhnhans.Ten,
                            // thongtinbenhnhans.Ten
                          )

                          : null
                        // benhnhan.length == 0 ? Placeholder : ""
                      }

                    ></input>
                    {/* {<Thongtin key={0} Ho={""} />} */}
                  </div>
                </div>

                <div className="grid grid-cols-5 py-4">
                  <div className="col-span-1 my-auto text-right">
                    <p className="datlich_text_desktop">Ngày sinh </p>
                  </div>
                  {/* {benhnhan.map((thongtinbenhnhans, key) =>( */}
                  <div className="col-span-4 pl-7">
                    {/* {<Thongtin key={0} Ho={""} />} */}
                    <input
                      id="ngaysinh"
                      className="font-bold form-control ngaysinh_edit txt_date w-full border-slate-500 border-dotted  border-b-2"
                      data-date-format="dd-mm-yy"
                      type="text"
                      placeholder={benhnhan.length == 1 ? "DD/MM/YYYY" : "DD/MM/YYYY"}
                      data-inputmask-alias="datetime"
                      // data-inputmask-inputformat="dd-mm-yyyy"
                      // data-mask=""
                      // im-insert="false"
                      // readOnly={false}
                      // value={dissa}
                      //  {benhnhan.length == 1 ?
                      // value={
                      //   benhnhan.length == 0 ? setNgaysinh('')          
                      //     : benhnhan.length == 1 ?
                      //     benhnhan.map(
                      //       (thongtinbenhnhans) =>
                      //         // onload((e)=>GTGT(thongtinbenhnhans.Gioitinh))
                      //         // gt(thongtinbenhnhans.Gioitinh),
                      //         // GTGT(thongtinbenhnhans.Gioitinh)
                      //         // onchange{}
                      //         // setGT(thongtinbenhnhans.Gioitinh)
                      //         thongtinbenhnhans.Ngaysinh,
                      //         // setNgaysinh("")
                      //       // return thongtinbenhnhans.Gioitinh
                      //       // thongtinbenhnhans.Ten
                      //     ) : Ngaysinh               
                      //   } 

                      value={
                        benhnhan.length == 1 ?
                          benhnhan.map(
                            (thongtinbenhnhans) =>
                              // onload((e)=>GTGT(thongtinbenhnhans.Gioitinh))
                              // gt(thongtinbenhnhans.Gioitinh),
                              // GTGT(thongtinbenhnhans.Gioitinh)
                              // onchange{}
                              // setGT(thongtinbenhnhans.Gioitinh)
                              thongtinbenhnhans.Ngaysinh,
                            // setNgaysinh("")
                            // return thongtinbenhnhans.Gioitinh
                            // thongtinbenhnhans.Ten
                          ) : Ngaysinh

                      }
                    // : null}
                    // {benhnhan.length == 1 ? value}
                    // value={


                    //   value={
                    //     (benhnhan.length == 0) ? null : 

                    //     benhnhan.map(
                    //       (thongtinbenhnhans) =>
                    //         // onload((e)=>GTGT(thongtinbenhnhans.Gioitinh))
                    //         // gt(thongtinbenhnhans.Gioitinh),
                    //         // GTGT(thongtinbenhnhans.Gioitinh)
                    //         // onchange{}
                    //         // setGT(thongtinbenhnhans.Gioitinh)
                    //         thongtinbenhnhans.Ngaysinh
                    //       // return thongtinbenhnhans.Gioitinh
                    //       // thongtinbenhnhans.Ten
                    //     )

                    //     : ngaysinh
                    // } 



                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-5 py-5">
                  <div className="col-span-1 pl-5">
                    <p className="datlich_text_desktop text-right">Giới tính</p>
                  </div>
                  <div className="col-span-4 mx-10 ">
                    {/* <input
                      type="radio"
                      name="gt"
                      value="Nam"
                      onChange={onChang}
                      // name="gt"
                      checked={(gt === "Nam" || gioitinh === "Nam")}
                    />  Nam
                    <input
                      className="ml-9"
                      type="radio"
                      onChange={onChang}
                      name="gt"
                      value="Nữ"

                      checked={gt === "Nu" || gioitinh === "Nu"}

                    />{" "}
                    Nữ */}
                    {/* {
                        benhnhan.length === 1 ?
                          benhnhan.map(
                            (thongtinbenhnhans) =>
                              // onload((e)=>GTGT(thongtinbenhnhans.Gioitinh))
                              // gt(thongtinbenhnhans.Gioitinh),
                              // GTGT(thongtinbenhnhans.Gioitinh)
                              // onchange{}
                              // setGT(thongtinbenhnhans.Gioitinh)
                             setGT(thongtinbenhnhans.Gioitinh)
                            // setNgaysinh("")
                            // return thongtinbenhnhans.Gioitinh
                            // thongtinbenhnhans.Ten
                          ) : null

                      } */}
                    <input onChange={onChang} type="radio" value="Nam" name='gt' checked={gt === "Nam"} /> Nam
                    <input onChange={onChang} type="radio" value="Nu" name='gt' checked={gt === "Nu"} /> Nu
                  </div>
                  {/* </Radio.Group> */}
                </div>

                <div className="grid grid-cols-5 ">
                  <div className="col-span-1 my-auto text-right ">
                    <p className="datlich_text_desktop text-right">Địa chỉ</p>
                  </div>
                  <div className="col-span-4 pl-7  ">
                    <input
                      type="text"
                      className="w-full border-slate-500 border-dotted  border-b-2"
                      placeholder=""
                      value={
                        benhnhan.length == 1
                          ? benhnhan.map(
                            (thongtinbenhnhans) =>

                              thongtinbenhnhans.Diachi


                            // thongtinbenhnhans.Ten
                          )

                          : null
                      }
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-5 py-4">
                  <div className="col-span-1 my-auto text-right">
                    <p className="datlich_text_desktop">Triệu chứng</p>
                  </div>
                  <div className="col-span-4 pl-7 ">
                    <input
                      type="text"
                      className=" border-slate-500 border-dotted w-full border-b-2"
                      placeholder=""
                      value={
                        benhnhan.length == 1
                          ? benhnhan.map(
                            (thongtinbenhnhans) =>

                              thongtinbenhnhans.Trieuchung


                            // thongtinbenhnhans.Ten
                          )

                          : null
                      }
                    ></input>
                  </div>
                </div>
              </div>
              <div className="modal-body-tren bg-white m-3 p-4 rounded-md">
                <div className="grid grid-cols-5">
                  <div className="col-span-1 text-right">
                    <p className="datlich_text_desktop    ">Ngày khám</p>
                  </div>
                  <div className="col-span-4 pl-7 ">
                    <div className=" border-slate-500 border-dotted font-bold border-b-2">
                      <DatePicker
                        className=""
                        selected={startDate}
                        onChange={(date: React.SetStateAction<Date>) => setStartDate(date)}
                      />
                    </div>
                  </div>
                </div>

                <div className="khunggio grid grid-cols-5 0 py-4">
                  <div className="col-span-1 text-right ">
                    <p className="datlich_text_desktop text-red-600">
                      Vui lòng chọn buổi
                    </p>
                  </div>

                  <div className="col-span-4 pl-7">
                    <div className="bg-slate-200 rounded-lg h-9 w-80 ">
                      <button className="btn_khunggio flex  w-full ">
                        <p className="h-9 w-[60px] text-left pl-3 pt-1">Trưa</p>
                        <p className="w-[190px] h-9 pt-1 text-left">
                          07:00 - 16:00
                        </p>
                        <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                          9/60
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="col-span-4 pl-[117px]">
                    <div className="bg-slate-200 rounded-lg h-9 w-80 ">
                      <button className="btn_khunggio flex  w-full ">
                        <p className="h-9 w-[60px] text-left pl-3 pt-1">
                          Chiều
                        </p>
                        <p className="w-[190px] h-9 pt-1 text-left">
                          17:00 - 20:00
                        </p>
                        <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                          17/60
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-right m-3">
                <button className="bg-blue-400 w-20 rounded-lg h-9">
                  <p className="">Đặt lịch</p>
                </button>
              </div>
            </div>
          </StyledModalBody>
        </StyledModal>
      </StyledModalOverlay>
      )
    </form >
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  //   display: flex;
  //justify-content: center;
  //font-size: 25px;
  //background-color: blue;
`;

const StyledModal = styled.div`
  //background: white;
  /* width: 500px;
  height: 600px;
  border-radius: 15px;
  
  background-color: yellow; */
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
