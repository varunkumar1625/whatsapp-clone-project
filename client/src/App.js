import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import React from "react";
import AccountProvider from "./components/Context/AccountProvider";
function App() {
  const clientId =
    "843089769072-ks5ue2jfrj0712oj3gduni9584ckvt0o.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
