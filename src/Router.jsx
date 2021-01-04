import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
