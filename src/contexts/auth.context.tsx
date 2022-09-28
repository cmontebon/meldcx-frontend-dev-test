import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
  Children,
} from "react";

type User = {
  email: string;
  password: string;
};

type Token = {
  token: string | null;
};

type AuthContextProps = {
  token?: Token;
  setToken?: Dispatch<SetStateAction<Token>>;
  login: (payload: User) => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<Token | undefined>();

  const login = (payload: User) => {
    const tempToken: Token = "abc" as unknown as Token;
    setToken(tempToken);
  };

  const logout = () => {
    setToken(undefined);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
