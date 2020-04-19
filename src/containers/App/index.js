import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import PageNotFound from "../PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
