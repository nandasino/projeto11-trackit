import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postSignIn(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
  }


export {
    postSignIn,
}  