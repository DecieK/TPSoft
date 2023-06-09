import fetch from "isomorphic-unfetch";

export async function SearchPhone(params: { key: string }): Promise<any> {
  const { key } = params;
  const response = await fetch(

      `http://localhost:8080/api/get-all-benhnhan?keyword=${key}`

  );
  const data = await response.json();
  return data;
}
export async function SearchId(params: { id: number }): Promise<any> {
  const { id } = params;
  const response = await fetch(

      `http://localhost:8080/api/get-all-benhnhanId?keyword=${id}`

  );
  const data = await response.json();
  return data;
}
export async function SearchHosodvID(params: { iddv: number }): Promise<any> {
  const { iddv } = params;
  const response = await fetch(

      `http://localhost:8080/api/get-all-hosodv?keyword=${iddv}`

  );
  const data = await response.json();
  return data;
}
export async function SearchLichkham(params: { key: String }): Promise<any> {
  const { key } = params;
  const response = await fetch(

      `http://localhost:8080/api/get-all-lichkhamSDT?keyword=${key}`

  );
  const data = await response.json();
  return data;
}
export async function SearchBooking(params: { id: number }): Promise<any> {
  const { id } = params;
  const response = await fetch(

      `http://localhost:8080/api/get-all-booking?keyword=${id}`

  );
  const data = await response.json();
  return data;
}
// export async function CreateAppointment(params: 
//   { 
//     iddv: number,
//     idbn: number,
//     hoten: string,
//     sdt: string,
//     ngaysinh: string,
//     diachi: string,
//     stt: number,  
  
//   }): Promise<any> {
//   // const { data } = params;
//   const response = await fetch(

//       `http://localhost:8080/api/create-appoinment-booking`

//   );
//   const data = await response.json();
//   return data;
// }

export async function CreateAppointment(params: {
  iddv: number;
  idbn: number;
  // ho: string;
  // ten: string;
  hoten: string; 
  ngaysinh: Date;
  sdt: string;
  gt: string;
  diachi: string;
  trieuchung: string;
  stt: number;
  ngaydat: Date;
  buoikham: string;
  ngaykham: string;
}): Promise<any> {
  const response = await fetch(`http://localhost:8080/api/create-appoinment-booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
}

// idbn, iddv, ho, ten, hoten, sdt, ngaysinh, diachi, trieuchung, stt, ngaydat