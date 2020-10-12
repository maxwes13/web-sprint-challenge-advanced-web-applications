import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./api/PrivateRoute.js";
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/*         
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubbles" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
