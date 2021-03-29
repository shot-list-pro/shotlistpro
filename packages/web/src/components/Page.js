import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProductionPage from "../pages/ProductionPage";

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/production/:id" component={ProductionPage} />
      </Switch>
    </div>
  );
};

export default Page;
