import React, { useEffect, useState, useRef, ChangeEvent, BaseSyntheticEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Radio } from '@nextui-org/react';


import { Props } from "react-modal";


import { CreateAppointment, SearchId, SearchLichkham, SearchPhone } from "@/Service/userSerice";




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
  iddv: number;
};
export type thongtinbenhnhan = {
  id: number;

  Ho: string;
  Ten: string;
  Dienthoai: string;
  Gioitinh: string;
  Diachi: string;
  Hovaten: string;
};
const Modal = ({
  show,
  // date,
  // children,
  onClose,
  title,
  // key,
  iddv,
  // Ho,
  // Ten,
  dodaimang,
  // key1,
  // gioitinh,
}: Props) => {

  interface Benhnhan {
    id: number;
    Ho: string;
    Ten: string;
    Ngaysinh: Date;
    Dienthoai: string;
    Gioitinh: any;
    Diachi: string;
    Trieuchung: string;
  }

  interface Benhnhan1 {

    id: number;
    sdt: string;
    Ho: string;
    Ten: string;
    Ngaysinh: Date;
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
  interface HovaTen {
    ho: string;
    ten: String;
  }
    interface HoSoDonVi {
    iddv: number;
    tendv: string;
    tenbs: string;
   
  }
  const [searchkey, setSearchkey] = useState("");
  const [benhnhan, setBenhnhan] = useState<Benhnhan[]>([]);
  const [benhnhan1, setBenhnhan1] = useState<Benhnhan1[]>([]);
  const [lichkham, setLichkham] = useState<Lichkham[]>([]);
    const [hosodv, setHosodv] = useState<HoSoDonVi[]>([]);



  const [startDate, setStartDate] = useState(new Date());
  // const [day, setDay] = useState(new Date());
  const [idbn, setIdbn] = useState(Number);

  const [sdt, setSdt] = useState("");

  const [name, setName] = useState("");
  const [Ngaysinh, setNgaysinh] = useState(new Date());
  const [datekham, setDatekham] = useState(new Date());

  const [gt, setGT] = useState("");
  const [diachi, setDiachi] = useState("");
  const [trieuchung, setTrieuchung] = useState("");
  const [ngaykham, setNgaykham] = useState(String);
  const [buoikham, setBuoikham] = useState(String);
  const [stt, setStt] = useState(Number);
  const [ho, setHo] = useState("");
  const [ten, setTen] = useState(String);
  const [tendv, setTendv] = useState("Phòng khám chuyên khoa nhi");
  const [tenbs, setTenbs] = useState("Bs. trần cao thái");


  const [birthday, setBirthday] = useState("");
  const [message, setMessage] = useState("");


  // const [idbn, setIdbn] = useState("");



  const [sang, setSang] = useState("");
  const [trua, setTrua] = useState("");
  const [chieu, setChieu] = useState("");
  const [slsa, setSlsa] = useState(Number);
  const [sltr, setSltr] = useState(Number);
  const [slch, setSlch] = useState(Number);

  const [loading, setLoading] = useState(false);


  const [isBrowser, setIsBrowser] = useState(false);
  // console.log(buoikham)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // const sendMessage = async (e: BaseSyntheticEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   // setError(false);
  //   // setSuccess(false);
  //   const res = await fetch('/api/sendMessage', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify({ phone: phone, message: message }),
  //   });
  //   const apiResponse = await res.json();

  // //   if (apiResponse.success) {
  // //     setSuccess(true);
  // //   } else {
  // //     setError(true);
  // //   }
  // //   setLoading(false);
  // };

  const handleCreateBooking = async (e: BaseSyntheticEvent) => {

    console.log("sdt", sdt);
    console.log("hoten", name);
    console.log("ngaysinh", Ngaysinh);
    console.log("gt", gt);
    console.log("diachi", diachi);
    console.log("trieuchung", trieuchung);
    console.log("ngaykham", ngaykham);
    console.log("ngaydat", datekham);
    console.log("buoikham", buoikham);
    setMessage("Xác nhận đặt lịch khám tại phòng khám ABC ngày: "+ ngaykham + " STT: "+(stt+1))

    console.log("buoi", sang, trua, chieu);
    if( buoikham == "Sáng"){
      setStt(slsa)
    }
    else if( buoikham == "Trưa"){
      setStt(sltr)
    }
    else
    {
      setStt(slch)
    }
    console.log("stt", stt)


    // let date = new Date(this.state.birthdy).getTime();
    // let timeString = this.buildTimeBooking(this.props.dataTime);
    // let doctorname = this.buildDoctorName(this.props.dataTime);
    // let currentNumber = this.state.currentNumber;

    let res = await CreateAppointment(
      {
        iddv: 57,
        idbn: 2,
        // ho: ho,
        // ten: ten,
        hoten: name,
        ngaysinh: Ngaysinh,
        sdt: sdt,
        gt: gt,
        diachi: diachi,
        trieuchung: trieuchung,
        stt: stt+1,
        ngaykham: ngaykham,
        ngaydat: new Date(),
        buoikham: buoikham,

      });

    // if (res && res.errCode === 0) {

    //   // handleCloseClick();
    //   alert("TC")
    // } else {
    //   // format.error("Booking a new appointment error !");
    //   // }
    //   alert("error")
    // };
    setLoading(true);
    // setError(false);
    // setSuccess(false);
    const res1 = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: sdt, message: message }),
      // body: JSON.stringify({ message: message }),

    });
    const apiResponse = await res1.json();
  };

  const handleSetSTT = async ()=>{
    try {

      const params = {
        key: ngaykham,
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
        setSlsa(res2.slsaHientai),
        setSltr(res2.sltrHientai),
        setSlch(res2.slchHientai),
        console.log("slsa", slsa),
        console.log("sltr", sltr),
        console.log("slch", slch)


        // {res2.sang == "ONL"? setBuoikham("Sáng"):null}

      )
      );
      
   
      // if(buoikham == "Sáng"){
      //   // setBuoikham("Sáng")
      //   setStt(slsa)

      //   console.log("slsa", slsa)
      // }
      // if(buoikham == "Trưa"){
      //   setStt(sltr)
      //   // setBuoikham("Trưa")
      //   console.log("sltr", sltr)
      // }
      // if(buoikham == "Chiều"){
      //   setStt(slch)
      //   // setBuoikham("Chiều")
      //   console.log("slch", slch)
      // }
      // console.log("stt", stt)
      // console.log("buoikham", buoikham)


    } catch (error) {
      console.log(error);
    }
  }

  const handlSearchDate = async (date: Date) => {
    setStartDate(date);

    // console.log("day", day)
    // setDay(date)
    console.log("date", date);
    setDatekham(date)
    // console.log("day", day)

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
        setSlsa(res2.slsaHientai),
        setSltr(res2.sltrHientai),
        setSlch(res2.slchHientai)
      )
      );


    } catch (error) {
      console.log(error);
    }
    console.log("sdt", sdt);
    console.log("hoten", name);
    console.log("ngaysinh", Ngaysinh);
    console.log("gt", gt);
    console.log("diachi", diachi);
    console.log("trieuchung", trieuchung);
    console.log("ngaykham", ngaykham);
    console.log("buoi", sang, trua, chieu);
    console.log("datekham", datekham);
    console.log("ho", ho);
    console.log("ten", ten);
    console.log("sa", slsa);
    console.log("tr", sltr);
    console.log("ch", slch);




  };

  const onChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setGT(e.target.value)

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
        setSdt(res1.Dienthoai),
        setGT(res1.Gioitinh),
        setName(res1.Ho + " " + res1.Ten),
        setHo(res1.Ho),
        setTen(res1.Ten),


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
    console.log("iddv", iddv);

    setSearchkey(e.target.value);
    console.log("sdt", searchkey)
    setName("")
    setGT("")
    // setNgaysinh("")
    setDiachi("")
    setTrieuchung("")

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

      if (dodaimang == 1) {
        res.map((res) => (
          setSdt(res.Dienthoai),
          setGT(res.Gioitinh),

          setName(res.Ho + " " + res.Ten),
          setHo(res.Ho),
          setTen(res.Ten),

          setNgaysinh(res.Ngaysinh),
          setDiachi(res.Diachi),
          setTrieuchung(res.Trieuchung),
          setIdbn(res.id)
          // ChangeTypeDate(Ngaysinh)
          //  setBirthday(res.Ngaysinh.getFullYear() + "/"+ Ngaysinh.getMonth()+"/"+Ngaysinh.getDate()),
          // console.log("asd",res.Ngaysinh.getFullYear())
          
        )
        );
      }
      if (dodaimang == 0) {
        // setIdbn()
        setName("")
        setGT("")
        setNgaysinh(new Date)
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
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (

    <StyledModalOverlay>
        {}
      <StyledModal className="  w-[500px]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              {tendv}
              <br />
              {tenbs}
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
        <StyledModalBody className="bg-gray-300 ">
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
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // value={ho+" "+ten}
                    // onChange={(e) => handletargetName}
                    // onChange={handletargetName}


                  //   {
                  //     ...benhnhan.map((thongtinbenhnhans) => (
                  //      setHo(thongtinbenhnhans.Ho),
                  //      setTen(thongtinbenhnhans.Ten)
                  //  )) 
                  //  }
                  >
                    
                  </input>
                </div>
              </div>

              <div className="grid grid-cols-5 ">
                <div className="col-span-1 my-auto text-right">
                  <p className="datlich_text_desktop">Ngày sinh </p>
                </div>
                <div className="col-span-4 pl-7">
                  <input
                    id="ngaysinh"
                    className="font-bold form-control ngaysinh_edit txt_date w-full border-slate-500 border-dotted  border-b-2"
                    data-date-format="dd-mm-yy"
                    type="date"

                    placeholder="DD/MM/YYYY"
                    data-inputmask-alias="date"
                    data-inputmask-inputformat="dd-mm-yyyy"
                    data-mask=""
                    im-insert="false"
                    value={Ngaysinh}
                    onChange={(e) => setNgaysinh(e.target.value)}

                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-5 py-2">
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

              <div className="khunggio grid grid-cols-5 0 py-1">
                <div className="col-span-1 text-right ">
                  <p className="datlich_text_desktop text-red-600">
                    Vui lòng chọn buổi
                  </p>
                </div>
                {/* <option className="btn">dfghj</option>
              <option>dfghj</option>
              <option>dfghj</option> */}


                <div >
                  <div className="lichkham">
                    {lichkham && lichkham.length > 0
                      ? (
                        lichkham.map((lichkhams, index) => {

                          if (lichkhams.sang == "ONL") {
                            // setBuoikham(lichkhams.mabuoisa)
                            return (
                              <div className="col-span-4 pl-7 "
                                key={index}
                                onClick={() => setBuoikham("Sáng")}

                                
                                >
                                  
                                <button className="bg-slate-200 rounded-lg h-9 w-80 focus:bg-blue-400" onClick={() => setStt(lichkhams.slsaHientai)} >
                                  <p className="btn-khunggio flex w-full "
                                  // onClick={handleTest}
                                  >
                                    <p className="h-9 w-[60px] text-left pl-3 pt-1">{lichkhams.mabuoisa}</p>
                                    <p className="w-[190px] h-9 pt-1 text-left">
                                      07:00 - 16:00
                                    </p>
                                    <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                                      {lichkhams.slsaHientai}/{lichkhams.slsa}
                                    </p>
                                  </p>
                                </button>

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
                                key={index}
                                onClick={() => setBuoikham("Trưa")}
                                >
                                <button className="bg-slate-200 rounded-lg h-9 w-80 focus:bg-blue-400" onClick={() => setStt(lichkhams.sltrHientai)}>
                                  <p className="btn_khunggio flex  w-full  " >
                                    <p className="h-9 w-[60px] text-left pl-3 pt-1 ">{lichkhams.mabuoitr}</p>
                                    <p className="w-[190px] h-9 pt-1 text-left ">
                                      07:00 - 16:00
                                    </p>
                                    <p className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px]">
                                      {lichkhams.sltrHientai}/{lichkhams.sltr}
                                    </p>
                                  </p>
                                </button>
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
                              <div className="col-span-4 pl-7"
                                key={index}
                                onClick={() => setBuoikham("Chiều")}
                                >
                                <button className="bg-slate-200 rounded-lg h-9 w-80 focus:bg-blue-400 " onClick={() => setStt(lichkhams.slchHientai)}>
                                  <p className="btn_khunggio flex  w-full ">
                                    <p className="h-9 w-[60px] text-left pl-3 pt-1">{lichkhams.mabuoich}</p>
                                    <p className="w-[190px] h-9 pt-1 text-left">
                                      07:00 - 16:00
                                    </p>
                                    <button className="bg-gray-600 rounded-r-lg pt-1 h-9 w-[70px] center">
                                      {lichkhams.slchHientai}/{lichkhams.slch}
                                    </button>
                                  </p>
                                </button>
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
            <div className=" text-right m-3 pb-2">
              <button className="bg-blue-400 w-20 rounded-lg h-9 "
                onClick={handleCreateBooking}
                // onSubmit={sendMessage}
              >
                <p className="">Đặt lịch</p>
              </button>
            </div>
          </div>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
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
  padding-top: 1px;
`;

const StyledModalHeader = styled.div`
  /* display: flex;
  justify-content: flex-end;
  font-size: 25px; */
`;

const StyledModal = styled.div`
  /* background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px; */
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