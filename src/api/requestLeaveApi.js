import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/requestLeaves/";

export function saveRequestLeave(requestLeave) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(requestLeave),
  })
    .then(handleResponse)
    .catch(handleError);
}
