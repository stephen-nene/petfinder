import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Redirect } from "react-router-dom";
import LoginPage from "../components/login/LoginForm";
import HomePage from "../components/home/HomePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Code to handle user login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Code to handle user logout
    setLoggedIn(false);
  };

  return (
    <Router>
      {/* <Switch> */}
        <Route exact path="/">
          {loggedIn ? <Redirect to="/home" /> : <LoginPage handleLogin={handleLogin} />}
        </Route>
        <Route path="/home">
          {loggedIn ? <HomePage handleLogout={handleLogout} /> : <Redirect to="/" />}
        </Route>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
