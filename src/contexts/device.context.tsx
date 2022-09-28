import React, { createContext, useState, useEffect } from "react";

import { ApiService } from "../services";

import { DeviceItem } from "../types";

type DeviceContextProps = {
  devices?: DeviceItem[];
};

type DeviceContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const DeviceContext = createContext({} as DeviceContextProps);

const DeviceContextProvider = ({ children }: DeviceContextProviderProps) => {
  const [devices, setDevices] = useState<DeviceItem[] | undefined>();

  useEffect(() => {
    const deviceFetchInterval = setInterval(() => {
      ApiService.getDevices().then(({ devices }) => {
        setDevices(devices);
      });
    }, 5000);

    return () => {
      clearInterval(deviceFetchInterval);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ devices }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceContextProvider };
