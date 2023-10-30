import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './screens/Login.js';
import Home from './screens/Home.js';

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const handleLogin = () => {
    setUserLoggedIn(true);
  };
  const handleLogout = () => {
    setUserLoggedIn(false);
  };

  return isUserLoggedIn ? (
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;
