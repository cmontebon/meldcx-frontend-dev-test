import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
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
  border: 1px solid black;
  padding: 30px 50px;
  max-width: 500px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Title>Login</Title>
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
          error
          placeholder="Password"
        ></Input>
        <Button
          onClick={handleLogin}
          text="Login"
          width="100%"
          isLoading={false}
        ></Button>
      </LoginContainer>
    </Wrapper>
  );
};

export default LoginScreen;
