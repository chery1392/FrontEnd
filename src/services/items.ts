import http from "./http";

export function getItemApi() {
  return http.get(`posts`).then((data) => data.data);
}
