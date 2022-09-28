import { FormEvent, useState, useContext } from "react";
import styled from "styled-components";

import { Button, Input } from "../components";

import { AuthContext } from "../contexts/auth.context";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  padding: 30px 50px;
  max-width: 500px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const LoginScreen = () => {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Title>Login</Title>
        <form onSubmit={(e) => handleLogin(e)}>
          <Input
            type="text"
            width="100%"
            value={email}
            setValue={setEmail}
            autofocus={true}
            placeholder="Email"
          ></Input>
          <Input
            type="password"
            width="100%"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          ></Input>
          <Button
            type="submit"
            text="Login"
            width="100%"
            isLoading={loading}
          ></Button>
        </form>
      </LoginContainer>
    </Wrapper>
  );
};

export default LoginScreen;
