import React, { useContext, useEffect } from "react";

import { Devices, Login } from "../screens";

import { AuthContext } from "../contexts/auth.context";

function App() {
  const { token } = useContext(AuthContext);

  if (token) {
    return <Devices />;
  } else {
    return <Login />;
  }
}

export default App;
