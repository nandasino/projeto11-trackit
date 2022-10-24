import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
  }

function postCadastro(cadastro){
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, cadastro);
  return promise;
}
function pegaHabitos(config){
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}
export {
    postLogin,
    postCadastro,
    pegaHabitos,
}  