import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/containers/Users"
import NewBlog from "./blogs/containers/NewBlog"
import Navigation from "./shared/components/Navigation/Navigation";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/blogs/new" exact>
          <NewBlog />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;