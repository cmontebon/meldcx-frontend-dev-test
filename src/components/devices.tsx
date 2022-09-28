import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { DeviceCollection, DeviceItem } from "../types";

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

const Device: React.FC<DeviceItem> = ({ id, name }) => {
  const increment = 360 / 5;
  const rotateValue = 360 + increment * id;

  return (
    <DeviceOrbit rotateValue={rotateValue}>
      <CircularDiv rotateValue={rotateValue}>
        <DeviceName>{name}</DeviceName>
      </CircularDiv>
    </DeviceOrbit>
  );
};

const Devices: React.FC<DeviceCollection> = ({ devices }) => {
  useEffect(() => {
    console.log(devices);
  }, []);

  return (
    <>
      <h1>Devices {devices.length}</h1>

      {devices.length &&
        devices.map((device) => <Device key={device.id} {...device}></Device>)}
    </>
  );
};

export default Devices;
