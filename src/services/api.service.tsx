import { AuthUser } from "../types";
import { AxiosService } from "./axios.service";
import { LocalStorageService } from "./local-storage.service";

const axiosInstance = AxiosService.axiosInstance;

const getDevices = async () => {
  const response = await axiosInstance.get("devices");
  return response.data;
};

const login = async (payload: AuthUser) => {
  const response = await axiosInstance.post("login", payload);

  if (response.data) {
    const token = response.data;
    LocalStorageService.setToken(token);
    AxiosService.setAuthorizationHeader(token);
    return token;
  }
};

export const ApiService = {
  getDevices,
  login,
};
