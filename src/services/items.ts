import http from "./http";

export function getItemApi() {
  return http.get(`posts`).then((data) => data.data);
}

export function addItemApi(data: any) {
  return http.post(`posts`, data).then((data) => data.data);
}

export function getItemByIdApi(id: string) {
  return http.get(`posts/${id}`).then((data) => data.data);
}

export function deleteItemByIdApi(id: string) {
  return http.delete(`posts/${id}`).then((data) => data.data);
}

export function edittemByIdApi(
  id: string,
  updates: {
    title: string;
    description: string;
    mobile_number: number;
    city: string;
    address: string;
    price: string;
  }
) {
  return http.patch(`posts/${id}`, updates).then((data) => data.data);
}
