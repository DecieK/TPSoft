import React, { Fragment } from "react";

type Props = {
  key: number;
  id: number;
  Ho: string;
  Ten: string;
  // Hovaten: string,
};

const Thongtin = ({  key, id,  Ho,  Ten,}: Props) => {
  return (
    <div className=" h-5 w-80 cursor-pointer pl-1">
      {Ho} {Ten} ({id})
    </div>
    //     <input
    //     className="Ho w-full  border-slate-500 border-dotted font-bold border-b-2 "
    //     placeholder="NHẬP CHÍNH XÁCH HỌ TÊN"
    //   >
    // {Ho}
    //   </input>
  );
};
// const Thongtin = () => {

export default Thongtin;
