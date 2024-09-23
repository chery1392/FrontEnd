import http from "./http";

export function getItemApi() {
  return http.get(`posts`).then((data) => data.data);
}

export function getItemByIdApi(id: string) {
  return http.get(`posts/${id}`).then((data) => data.data);
}
