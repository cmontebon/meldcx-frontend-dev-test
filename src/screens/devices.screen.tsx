import { useContext } from "react";
import styled from "styled-components";
import { Button, Devices } from "../components";
import { AuthContext } from "../contexts/auth.context";
import {
  DeviceContext,
  DeviceContextProvider,
} from "../contexts/device.context";
import { DeviceCollection, DeviceItem } from "../types";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DeviceContainer = styled.div`
  background: aquamarine;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  background: yellow;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DevicesScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <DeviceContextProvider>
      <Container>
        <DeviceContainer>
          <Devices></Devices>
        </DeviceContainer>
        <Footer>
          <Button text="NOTIFY" onClick={() => console.log("notify")}></Button>
          <Button text="LOGOUT" onClick={logout}></Button>
        </Footer>
      </Container>
    </DeviceContextProvider>
  );
};

export default DevicesScreen;
