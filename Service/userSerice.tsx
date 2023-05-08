import fetch from "isomorphic-unfetch";

// export async function AllUser_API() {
//   const response = await fetch("http://localhost:8080/api/get-all-users");
//   const data = await response.json();
//   return data;
// }

export async function SearchPhone(params: { key: string }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    // `http://localhost:8080/clinics/search?keyword=${key}`
      `http://localhost:8080/api/get-all-benhnhan?keyword=${key}`

  );
  const data = await response.json();
  return data;
}
export async function SearchId(params: { id: number }): Promise<any> {
  const { id } = params;
  const response = await fetch(
    // `http://localhost:8080/clinics/search?keyword=${key}`
      `http://localhost:8080/api/get-all-benhnhanId?keyword=${id}`

  );
  const data = await response.json();
  return data;
}
