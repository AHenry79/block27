import SignUp from "./components/SignUp";
import { useState } from "react";

import "./App.css";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate setToken={setToken} token={token} />
      <SignUp setToken={setToken} token={token} />
    </>
  );
}

export default App;
