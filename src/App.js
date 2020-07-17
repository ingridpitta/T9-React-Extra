import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/result" render={props => <Result {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
