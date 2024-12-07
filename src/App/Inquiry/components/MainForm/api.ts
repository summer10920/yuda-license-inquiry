import { API, fetchApi } from "../../../../core/api";


export const checkInquiry = async (dataToSubmit: any) => {
  return await fetchApi(`${API.inquiry}/submit`, 'POST', dataToSubmit);
};

// export const checkInquiry = async (dataToSubmit: any) => {
//   const response = await fetch(`${API.inquiry}/submit`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dataToSubmit),
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return await response.json();
// };


// 其他 API 請求的函數
// export const fetchData = async () => {
//   const response = await fetch(`${API_BASE_URL}/data`, {
//     method: 'GET',
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return await response.json();
// };

// 可以根據需要添加更多的 API 函數