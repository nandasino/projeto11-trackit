import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

function postLogin(login) {
    const promise = axios.post(`${BASE_URL}/auth/login`, login);
    return promise;
  }

function postCadastro(cadastro){
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, cadastro);
  return promise;
}
function pegaHabitos(auth) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}
function postHabito(habit) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits`, habit, config);
  return promise;
}
function deletaHabito(habitId) {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
  return promise;
}
function pegaHabitosHoje() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}
function checkHabito(habitId) {
  const config = createHeaders();
  const promise = axios.post(
    `${BASE_URL}/habits/${habitId}/check`, 
    {}, 
    config
    );
  return promise;
}

function desmarcaHabito(habitId) {
  const config = createHeaders();
  const promise = axios.post(
    `${BASE_URL}/habits/${habitId}/uncheck`,
    {},
    config
  );
  return promise;
}
export {
    postLogin,
    postCadastro,
    pegaHabitos,
    postHabito,
    deletaHabito,
    pegaHabitosHoje,
    checkHabito,
    desmarcaHabito,
}  