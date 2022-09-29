import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { DeviceContext } from "../contexts/device.context";

const SpinRightTransition = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinLeftTransition = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

const DeviceOrbit = styled.div<{ rotateValue: number }>`
  border-radius: 50%;
  left: 50%;
  height: calc(500px - 75px);
  margin-top: -250px;
  margin-left: -250px;
  position: absolute;
  top: 50%;
  width: 500px;
  rotate: calc(${({ rotateValue }) => rotateValue}deg);
  animation: ${SpinRightTransition} 10s linear infinite;
`;

const CircularDiv = styled.div<{ rotateValue: number }>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: black;
  text-align: center;
  rotate: calc(-${({ rotateValue }) => rotateValue}deg);
  animation: ${SpinLeftTransition} 10s linear infinite;
`;

const DeviceName = styled.span`
  position: relative;
  top: 50px;
`;

type DeviceProps = {
  id: number;
  name: string;
  length: number;
};

const Device: React.FC<DeviceProps> = ({ id, name, length }) => {
  const increment = 360 / length;
  const rotateValue = increment * (id + 1);

  return (
    <DeviceOrbit rotateValue={rotateValue}>
      <CircularDiv rotateValue={rotateValue}>
        <DeviceName>{name}</DeviceName>
      </CircularDiv>
    </DeviceOrbit>
  );
};

const Devices = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{devices ? devices.length : 0}</h1>
        <h3>Devices Online</h3>
      </div>

      {devices?.length &&
        devices.map((device) => (
          <Device key={uuidv4()} {...device} length={devices.length}></Device>
        ))}
    </>
  );
};

export default Devices;
