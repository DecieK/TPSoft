import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { isParameter } from "typescript";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Radio } from '@nextui-org/react';


import { Props } from "react-modal";


import { CreateAppointment, SearchId, SearchLichkham, SearchPhone } from "@/Service/userSerice";



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

type data = {
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
  // date,
  // children,
  onClose,
  title,
  // key,
  // id,
  // Ho,
  // Ten,
  dodaimang,
  // key1,
  // gioitinh,
}: Props) => {
  // const Modal: React.FC<type> = ({ show, children, onClose, title}) => {
  // interface date {
  //   hoten: string,
  //   sdt: string,
  //   // email: this.state.email,
  //   ngaysinh: string,
  //   diachi: string,
  //   stt: number,
  // }

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
  interface Lichkham {
    id: number;
    iddv: number;
    mabuoisa: string;
    mabuoitr: string;
    mabuoich: string;
    sang: string;
    trua: string;
    chieu: string;
    slsa: number;
    sltr: number;
    slch: number;
    slsaHientai: number;
    sltrHientai: number;
    slchHientai: number;
    ngay: Date;
    chovuotsa: number;
    chovuottr: number;
    chovuotch: number;
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
  const [lichkham, setLichkham] = useState<Lichkham[]>([]);


  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // const [day, setDay] = useState(new Date());
  const [idbn, setIdbn] = useState(Number);

  const [name, setName] = useState("");
  const [Ngaysinh, setNgaysinh] = useState("");
  const [gt, setGT] = useState("");
  const [diachi, setDiachi] = useState("");
  const [trieuchung, setTrieuchung] = useState("");
  const [ngaykham, setNgaykham] = useState(String);
  const [buoikham, setBuoikham] = useState(String);
  const [stt, setStt] = useState(Number);


  const [sang, setSang] = useState("");
  const [trua, setTrua] = useState("");
  const [chieu, setChieu] = useState("");
  const [slsa, setSlsa] = useState(Number);
  const [sltr, setSltr] = useState(Number);
  const [slch, setSlch] = useState(Number);




  useEffect(() => {
    setIsBrowser(true);
  }, []);


<<<<<<< HEAD
  const onChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGT(event.target.value)
=======
  const handleTest = () => {
    // document.getElementsByClassName("btn_khunggio").style.color = 'blue';

    // <div className="co"</div>

    console.log("ă à ă")
  }

  const handleCreateBooking = async () => {

    console.log("sdt", name);
    console.log("hoten", name);
    console.log("ngaysinh", Ngaysinh);
    console.log("gt", gt);
    console.log("diachi", diachi);
    console.log("trieuchung", trieuchung);
    console.log("ngaykham", ngaykham);
    console.log("buoi", sang, trua, chieu);


    // let date = new Date(this.state.birthdy).getTime();
    // let timeString = this.buildTimeBooking(this.props.dataTime);
    // let doctorname = this.buildDoctorName(this.props.dataTime);
    // let currentNumber = this.state.currentNumber;

    let res = await CreateAppointment(
      {
        // iddv: 1,
        // idbn: idbn,
        // hoten: name,
        // sdt: searchkey,
        // ngaysinh: Ngaysinh,
        // diachi: diachi,
        // stt: (stt + 1),
        iddv: 1,
        idbn: 2,
        hoten: "abc",
        sdt: "0909090923",
        
        ngaysinh: "12/12/2023",
        diachi: "ct",
        stt: (2 + 1),

      });

    if (res && res.errCode === 0) {

      // handleCloseClick();
    } else {
      // format.error("Booking a new appointment error !");
      // }
    };
  }

  const handlSearchDate = async (date: Date) => {
    setStartDate(date);
    // console.log("day", day)
    // setDay(date)
    console.log("date", date);
    // console.log("day", day)
    console.log("startDate", startDate)

    // console.log("a", date.getDate())
    // console.log("ă", (date.getMonth()+1))
    // console.log("ớ", date.getFullYear())
    const key = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    // console.log("key", key)
    setNgaykham(key);
    console.log("key", key)


    try {

      const params = {
        key: key,
      };
      console.log("searchdate", params);
      const response = await SearchLichkham(params);
      const res2: Lichkham[] = response.lichkhams;
      console.log("check api searchdate: ", response);
      console.log("length", res2.length);
      setLichkham(res2);
      console.log(res2)

      res2.map((res2) => (
        setSang(res2.sang),
        setTrua(res2.trua),
        setChieu(res2.chieu),
        setSlsa(res2.slsa),
        setSltr(res2.sltr),
        setSlch(res2.slch),



        console.log("sang:", sang)
      )
      );


    } catch (error) {
      console.log(error);
    }
    console.log("sdt", name);
    console.log("hoten", name);
    console.log("ngaysinh", Ngaysinh);
    console.log("gt", gt);
    console.log("diachi", diachi);
    console.log("trieuchung", trieuchung);
    console.log("ngaykham", ngaykham);
    console.log("buoi", sang, trua, chieu);
  };

  const onChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setGT(e.target.value)
>>>>>>> ab8270368111e1c99d35a65b102b7f2fe76eac48

  }

  const handleSetTT = async (id: number) => {

    setName("")
    setGT("")

    // key = id;
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

      res1.map((res1) => (

        setGT(res1.Gioitinh),
        setName(res1.Ho + " " + res1.Ten),

        setNgaysinh(res1.Ngaysinh),
        setDiachi(res1.Diachi),
        setTrieuchung(res1.Trieuchung),
        setIdbn(res1.id),

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

  };

  const handlechange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchkey(e.target.value);
    setName("")
    setGT("")
    setNgaysinh("")
    setDiachi("")
    setTrieuchung("")

<<<<<<< HEAD
    // console.log("key", e.target.value);
    // console.log("searchkey", searchkey);
    e.preventDefault();
    // if (searchkey.length > 2) {
=======
>>>>>>> ab8270368111e1c99d35a65b102b7f2fe76eac48
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
<<<<<<< HEAD

      // if(dodaimang == 1){
      benhnhan.map((res) => (
=======
>>>>>>> ab8270368111e1c99d35a65b102b7f2fe76eac48

      if (dodaimang == 1) {
        res.map((res) => (

          setGT(res.Gioitinh),

          setName(res.Ho + " " + res.Ten),

          setNgaysinh(res.Ngaysinh),
          setDiachi(res.Diachi),
          setTrieuchung(res.Trieuchung),
          setIdbn(res.id)

          // console.log("ádasd", Ngaysinh)


        )
        );
      }
      if (dodaimang == 0) {
        // setIdbn()
        setName("")
        setGT("")
        setNgaysinh("")
        setDiachi("")
        setTrieuchung("")
        console.log("ádasd", diachi)
      }

      // console.log("ngay",startDate.getDay+ startDate.getMonth + startDate.getFullYear)
      // console.log("ngay",startDate.getMonth()+1)
      // // console.log("ngay",startDate.getDay)

      // // console.log("ngaykham", date.format(startDate))

      // setNgaykham(startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate())
      // console.log("ngaykhamdaformat", ngaykham)
    } catch (error) {
      console.log(error);
    }

  };



  const handleCloseClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const handleCloseClick = () => {

    e.preventDefault();
    setName("")
    setGT("")
    setNgaysinh("")
    setDiachi("")
    setTrieuchung("")
    onClose();
  };
  // const handleSetFormat = () => {
  //   const ValueOfInput = startDate.getDate();
  //   console.log
  //   // setStartDate(ValueOfInput)
  // }

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

              <button
                // href="#"
                className="rounded-full text-center h-7 w-7 bg-gray-300"
                onClick={handleCloseClick}
              >
                x
              </button>
            </div>
          </StyledModalHeader>
          {title && (
            <StyledModal>
              {title}
              {/* <div></div> */}
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
                      // ref={inputRef}
                    ></input>
                    <div className=" a">
                      {benhnhan.length != 1
                        ? benhnhan.map((thongtinbenhnhans) => (
                          <div
                            key={thongtinbenhnhans.id}
                            // number a ={ thongtinbenhnhans.id}
                            className="aâ h-5 w-80 cursor-pointer pl-1"
                            onClick={(_e) => handleSetTT(thongtinbenhnhans.id)}
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
                  <div className="col-span-4 pl-7">
                    <input
                      className="Ho w-full  border-slate-500 border-dotted font-bold border-b-2 "
                      placeholder="NHẬP CHÍNH XÁC HỌ TÊN"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="grid grid-cols-5 py-4">
                  <div className="col-span-1 my-auto text-right">
                    <p className="datlich_text_desktop">Ngày sinh </p>
                  </div>
                  <div className="col-span-4 pl-7">
                    <input
                      id="ngaysinh"
                      className="font-bold form-control ngaysinh_edit txt_date w-full border-slate-500 border-dotted  border-b-2"
                      data-date-format="dd-mm-yy"
                      type="text"
                      placeholder="DD/MM/YYYY"
                      data-inputmask-alias="datetime"
                      value={Ngaysinh}
                      onChange={(e) => setNgaysinh(e.target.value)}

                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-5 py-5">
                  <div className="col-span-1 pl-5">
                    <p className="datlich_text_desktop text-right">Giới tính</p>
                  </div>
                  <div className="col-span-4 mx-10 ">
                    <input onChange={onChang} type="radio" value="Nam" name='gt' checked={gt === "Nam"} /> Nam
                    <input className="ml-9" onChange={onChang} type="radio" value="Nu" name='gt' checked={gt === "Nu"} /> Nữ
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
                      value={diachi}
                      onChange={(e) => setDiachi(e.target.value)}

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
                      value={trieuchung}
                      onChange={(e) => setTrieuchung(e.target.value)}

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
                    <div

                      className=" border-slate-500 border-dotted font-bold border-b-2"
                    // onChange={handlSearchDate}
                    >
                      <DatePicker
                        className=""
                        // Dateformat="yyyy/MM/DD"
                        type="date"
                        selected={startDate}
                        // selected={ setNgaykham(startDate.getFullYear()+"-"+(startDate.getMonth()+1)+"-"+startDate.getDate())
                        // }

                        // onChange={handlSearchDate(date: React.SetStateAction<Date>)}
                        // onChange={(date: Date) => handlSearchDate((date))}
                        onChange={(date: Date) => handlSearchDate((date))}

                      // onClick={handlSearchDate}
                      // onChange={(e: { target: { value: React.SetStateAction<Date>; }; }) => handleSetFormat(e.target.value)}
                      // onChange={(date) => setStartDate(date)}

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
                  {/* <option className="btn">dfghj</option>
                  <option>dfghj</option>
                  <option>dfghj</option> */}


                  <div>
                    <div className="lichkham">
                      {lichkham && lichkham.length > 0
                        ? (
                          lichkham.map((lichkhams, index) => {

                            if (lichkhams.sang == "ONL") {
                              // setBuoikham(lichkhams.mabuoisa)
                              return (
                                <div className="col-span-4 pl-7 "
                                  key={index}>
                                  <div className="bg-slate-200 rounded-lg h-9 w-80 ">
                                    <button className="btn-khunggio flex w-full focus:bg-blue-400" onClick={handleTest}>
                                      <p className="h-9 w-[60px] text-left pl-3 pt-1">{lichkhams.mabuoisa}</p>
                                      <p className="w-[190px] h-9 pt-1 text-left">
                                        07:00 - 16:00
                                      </p>
                                      <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                                        {lichkhams.slsaHientai}/{lichkhams.slsa}
                                      </p>
                                    </button>
                                  </div>
                                  <button>click</button>

                                </div>
                              );

                            }
                          })

                        )

                        : null}
                    </div>
                    <div className="lichkham">
                      {lichkham && lichkham.length > 0
                        ? (
                          lichkham.map((lichkhams, index) => {

                            if (lichkhams.trua == "ONL") {
                              // setBuoikham("Trưa")
                              return (
                                <div className="col-span-4 pl-7 p-2"
                                  key={index}>
                                  <div className="bg-slate-200 rounded-lg h-9 w-80 ">
                                    <p className="btn_khunggio flex  w-full  " >
                                      <p className="h-9 w-[60px] text-left pl-3 pt-1 focus:bg-blue-400">{lichkhams.mabuoitr}</p>
                                      <p className="w-[190px] h-9 pt-1 text-left focus:bg-blue-400">
                                        07:00 - 16:00
                                      </p>
                                      <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                                        {lichkhams.sltrHientai}/{lichkhams.sltr}
                                      </p>
                                    </p>
                                  </div>
                                </div>
                              );

                            }
                          })
                        )
                        : null}
                    </div>
                    <div className="lichkham">
                      {lichkham && lichkham.length > 0
                        ? (
                          lichkham.map((lichkhams, index) => {

                            if (lichkhams.chieu == "ONL") {
                              // setBuoikham("Chiều")
                              return (
                                <div className="col-span-4 pl-7 p-2"
                                  key={index}>
                                  <div className="bg-slate-200 rounded-lg h-9 w-80 " >
                                    <p className="btn_khunggio flex  w-full ">
                                      <p className="h-9 w-[60px] text-left pl-3 pt-1">{lichkhams.mabuoich}</p>
                                      <p className="w-[190px] h-9 pt-1 text-left">
                                        07:00 - 16:00
                                      </p>
                                      <button className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px] center">
                                        {lichkhams.slchHientai}/{lichkhams.slch}
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              );

                            }
                          })

                        )

                        : null}
                    </div>
                    {/* <a onClick={handleConfirmBooking}>click</a> */}

                  </div>

                  {/* <div className="col-span-4 pl-[117px]">
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
                  </div> */}
                </div>
              </div>
              <div className=" text-right m-3">
                <button className="bg-blue-400 w-20 rounded-lg h-9"
                  onClick={handleCreateBooking}
                >
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
    return "";
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

// tạo bảng đơn vị( có iddv, tendv)
// kiểm tra thongtinbenhnhans đã có hay ch( sdt  => tên):
// 	chưa: lưu thongtinbenhnhans -> lưu bookings( tăng currentNumber)
// 	rồi: lưu bookings (tăng currentNumber)
