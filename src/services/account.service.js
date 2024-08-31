import axios from "axios";
const API_URL = process.env.REACT_APP_API_BASE_URL || "https://www.omdbapi.com";

const register = (payload) => {
  const url = API_URL + "create-account";
  return axios.post(API_URL, {
    ...payload,
  });
};

const update = (payload) => {
  const url = API_URL + "update-user-data";
  return axios.post(API_URL, {
    ...payload,
  });
};

const login = (payload) => {
  const url = API_URL + "login";
  return axios.post(API_URL, {
    ...payload,
  });
};

const getUser = (id) => {
  const url = API_URL + "get-user-profile";
  return axios.get(url, {
    id,
  });
};

const deleteUser = (id) => {
  const url = API_URL + "delete-user-data";
  return axios.delete(url, {
    id,
  });
};

export default { register, getUser, deleteUser, login, update };
