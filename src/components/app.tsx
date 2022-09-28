import React, { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/auth.context";

function App() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  if (token) {
    return <h1>with token</h1>;
  } else {
    return <h1>without token</h1>;
  }
}

export default App;
