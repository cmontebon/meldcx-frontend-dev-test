import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useEffect } from "react";

import { ApiService, LocalStorageService } from "../services";
import { AuthUser } from "../types";

type AuthContextProps = {
  token?: string;
  setToken?: Dispatch<SetStateAction<string>>;
  login: (payload: AuthUser) => void;
  logout: () => void;
  loading: boolean;
};

type AuthContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const savedToken = LocalStorageService.getToken();

  useEffect(() => {
    if (!savedToken) return;
    setToken(savedToken);
  }, [savedToken]);

  const login = (payload: AuthUser) => {
    setLoading(true);
    ApiService.login(payload)
      .then((token) => {
        setToken(token);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const logout = () => {
    setToken(undefined);
    LocalStorageService.unsetToken();
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
