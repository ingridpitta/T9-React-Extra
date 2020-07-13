import React from "react";
import { Home, Result } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/result" render={props => <Result {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
