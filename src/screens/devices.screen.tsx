import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";

import { Button, Devices, NotifyPopup } from "../components";

import { AuthContext } from "../contexts/auth.context";
import { DeviceContextProvider } from "../contexts/device.context";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DeviceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  background: black;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DevicesScreen = () => {
  const { logout } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  return (
    <DeviceContextProvider>
      {openPopup && <NotifyPopup close={() => setOpenPopup(false)} />}

      <Container>
        <DeviceContainer>
          <Devices />
        </DeviceContainer>
        <Footer>
          <Button text="NOTIFY" onClick={() => setOpenPopup(true)}></Button>
          <Button text="LOGOUT" onClick={logout}></Button>
        </Footer>
      </Container>
    </DeviceContextProvider>
  );
};

export default DevicesScreen;
