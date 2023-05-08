import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
type Test = {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  body: string;
  footer?: JSX.Element;
  isVisible:boolean;
  onClose : any;
  date : any;
};
const Test: React.FC<Test> = ({ isVisible, onClose, date }) => {
  if (!isVisible) return null;
  const hanleClose = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "nen") onClose();
  };
  const [startDate, setStartDate] = useState(new Date());

  const [isOpen, setState] = useState(false);

  // function handleClick() {
  //   setState(!isOpen);
  //   console.log(isOpen);
  // }
  return (
    <div className="">
      <div
        className="  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center flex"
        // onClick={hanleClose}
        id="nen"
      >
        {/* <div className=""> */}
        <div className=" flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          {/* <div className="bg-white p-2 rounded"> */}
          <div className="flex justify-center pt-3 ">
            <div className=" h-96 w-max rounded-lg bg-blue-100 ">
              <div className="title h-30 bg-blue-300 text-center">
                PHÒNG KHÁM CHUYÊN KHOA NHI <br></br>TMH PEDICMA
              </div>
              <div className="body bg-blue-100 rounded-lg pt-0">
                <div className="vungtren h-80 m-4  bg-white justify-center ">
                  <div className="grid grid-cols-5 h-10 pb-5">
                    <div className="col-span-1 my-auto text-right">
                      <p className="datlich_text_desktop    ">Điện thoại</p>
                    </div>
                    {/* #a7a5a5 */}
                    <div className="col-span-4 px-9  text-left">
                      <input
                        className="w-96 px-2 h-10 border-slate-500 border-dotted  border-b-2"
                        type="text"
                        placeholder="NHẬP CHÍNH XÁC SỐ ĐIỆN THOẠI"
                      ></input>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 h-10 py-5">
                    <div className="col-span-1 my-auto text-right">
                      <p className="datlich_text_desktop">Họ tên </p>
                    </div>
                    <div className="col-span-4 px-9">
                      <input
                        className="w-96 px-2 h-10 border-slate-500 border-dotted  border-b-2 "
                        placeholder="NHẬP CHÍNH XÁCH HỌ TÊN"
                      ></input>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 h-10 py-5 ">
                    <div className="col-span-1 my-auto text-right ">
                      {" "}
                      <p className="datlich_text_desktop text-right">
                        Ngày sinh{" "}
                      </p>
                    </div>
                    <div className="col-span-4 px-9  ">
                      {" "}
                      <input
                        id="ngaysinh"
                        className="font-bold form-control ngaysinh_edit txt_date w-96 px-2 h-10 border-slate-500 border-dotted  border-b-2"
                        data-date-format="dd-mm-yy"
                        type="text"
                        placeholder="DD/MM/YYYY"
                        data-inputmask-alias="datetime"
                        // data-inputmask-inputformat="dd-mm-yyyy"
                        data-mask=""
                        im-insert="false"
                      ></input>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 h-5 py-7">
                    <div className="">
                      <p className="datlich_text_desktop text-right">
                        Giới tính
                      </p>
                    </div>
                    <input type="radio" value="Male" name="gender" /> Nam
                    <input type="radio" value="Female" name="gender" /> Nữ
                  </div>
                  <div className="grid grid-cols-5 h-10 py-5 ">
                    <div className="col-span-1 my-auto text-right ">
                      <p className="datlich_text_desktop text-right">Địa chỉ</p>
                    </div>
                    <div className="col-span-4 px-9  ">
                      <input
                        type="text"
                        className="w-96 px-2 h-10 border-slate-500 border-dotted  border-b-2"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 h-10 py-5">
                    <div className="col-span-1 my-auto text-right">
                      <p className="datlich_text_desktop">Triệu chứng</p>
                    </div>
                    <div className="col-span-4 px-9  ">
                      <input
                        type="text"
                        className="w-96 px-2 h-10 border-slate-500 border-dotted  border-b-2"
                        placeholder=""
                      ></input>
                    </div>
                  </div>

                  {/* <BookingModal isOpen={isOpen} /> */}
                </div>
                <div className="vungduoi h-36 m-4 bg-white  justify-center ">
                  <div className="grid grid-cols-5 h-10 py-5">
                    <div className="col-span-1 my-auto text-right">
                      <p className="datlich_text_desktop    ">Ngày khám</p>
                    </div>
                    <div className="col-span-4 px-9  ">
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider> */}
                      <div className="w-96 px-2 h-7 border-slate-500 border-dotted font-bold border-b-2">
                        <DatePicker
                          className=""
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="khunggio grid grid-cols-5 h-10 py-5">
                    <div className="col-span-1 my-auto text-right ">
                      Vui lòng chọn buổi khám
                    </div>
                    <div className="col-span-4 px-9 ">
                      <div className="bg-slate-200 rounded-md mb-2  w-80 ">
                        <button className="btn_khunggio " id="khunggio_sa">
                          <div
                            className="text-left float-left"
                            id="datlich_thoigian "
                          >
                            <p className="buoi_pick float-left">Trưa</p>
                            <p className="float-right pl-10">07:00 - 16:00 </p>
                          </div>
                          <div className="datlich_sl float-right pl-20 text-right">
                            31/100
                          </div>
                        </button>
                      </div>
                      <div className="bg-slate-200 rounded-md mt-2  w-80 ">
                        <button className="btn_khunggio " id="khunggio_sa">
                          <div
                            className="text-left float-left"
                            id="datlich_thoigian "
                          >
                            <p className="buoi_pick float-left">Trưa</p>
                            <p className="float-right pl-10">07:00 - 15:00 </p>
                          </div>
                          <div className="datlich_sl float-right pl-20 text-right">
                            31/100
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-2 pl-[515px] ">
                  <button className="bg-blue-500 rounded-sm">
                    <p className="p-2">Đặt lịch</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>

    // </div>
  );
};
export default Test;
