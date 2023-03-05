import React from "react";
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

import Home from "../components/home/Home"
import Login from "../components/login/Login";

function App() {

  return (
    <Router>
      <div>
      <Route path="/home" component={Home} /> {/* // change the route of home page to "/home". */}
            <Route path="/login" component={Login} />
            {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
