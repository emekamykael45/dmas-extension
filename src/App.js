/*global chrome*/

import { useState, useEffect } from "react";

import Auth from "./views/auth";
import Home from "./views/home";

import "./App.css";

function App() {
  const HOME_VIEW_VALUE = "home";
  const AUTH_VIEW_VALUE = "auth";

  const APP_URL = `https://dmas-app.vercel.app`;

  const [activeView, setActiveView] = useState(HOME_VIEW_VALUE);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (!authUser) getAuthUserAction();
  }, [authUser]);

  const getAuthUserAction = () => {
    chrome?.storage?.sync?.get(["authUser"]).then((result) => {
      setAuthUser(result.authUser);
    });
  };

  const saveAuthUserAction = (value) => {
    chrome?.storage?.sync?.set({ authUser: value });
  };

  const switchView = (value) => {
    setActiveView(value);
  };

  const renderInstance = () => {
    const props = {
      appUrl: APP_URL,
      homeValue: HOME_VIEW_VALUE,
      authValue: AUTH_VIEW_VALUE,
      switchView: (value) => switchView(value),
      authUser,
      setAuthUser: (value) => {
        setAuthUser(value);
        saveAuthUserAction(value);
      },
    };

    return activeView === HOME_VIEW_VALUE ? (
      <Home {...props} />
    ) : (
      <Auth {...props} />
    );
  };

  return <>{renderInstance()}</>;
}

export default App;
