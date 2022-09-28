const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

const unsetToken = () => {
  localStorage.removeItem("token");
};

const getToken = () => {
  return localStorage.getItem("token") || undefined;
};

export const LocalStorageService = {
  setToken,
  unsetToken,
  getToken,
};
