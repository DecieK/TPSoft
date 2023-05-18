// import Head from "next/head";
// import { Inter } from "next/font/google";
// import { NextPage } from "next";
// import Header from "@/components/Header";
// import Search from "@/components/Search";
// import Footer from "@/components/Footer";

// import { SearchBooking } from "@/Service/userSerice"

import SearchResults from "@/components/SearchResults";

// import styles from "@/styles/Home.module.css";
// import { useState } from "react";
// import BookingModal from "@/components/modal/BookingModal";
// import Test from "@/components/modal/Test";
// import Modal from '../components/Modal';
// import DatePicker from "react-datepicker";
// // import ModalCopy from "@/components/Modal";


// const inter = Inter({ subsets: ["latin"] });

// const index = () => {
//   // const [startDate, setStartDate] = useState(new Date());

//   // const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <div>
//         {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
//         <SearchResults />
//         {/* <Test isOpen={false} toggle={function (): void {
//           throw new Error("Function not implemented.");
//         } } title={""} body={""} isVisible={false} onClose={undefined} /> */}
//       </div>

//     </>


//   );
// }
// export default index;
const index = () =>{
  return(
    <div>
      <SearchResults  />
    </div>
  )
}
export default index;