import axios from "axios";

import { toast } from "react-toastify";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = "http://35.201.2.209:8000/";

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Accept"] = "application/json";

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    toast.error(error.response.data);
    return Promise.reject(error);
  }
);

const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const AxiosService = {
  axiosInstance,
  setAuthorizationHeader,
};
