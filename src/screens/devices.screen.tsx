import { useContext } from "react";
import styled from "styled-components";
import { Button, Devices } from "../components";
import { AuthContext } from "../contexts/auth.context";
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
  const devices = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
  ];

  return (
    <Container>
      <DeviceContainer>
        <Devices devices={devices}></Devices>
      </DeviceContainer>
      <Footer>
        <Button text="NOTIFY" onClick={() => console.log("notify")}></Button>
        <Button text="LOGOUT" onClick={logout}></Button>
      </Footer>
    </Container>
  );
};

export default DevicesScreen;
