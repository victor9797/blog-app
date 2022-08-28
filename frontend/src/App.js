import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/containers/Users";
import NewBlog from "./blogs/containers/NewBlog";
import Navigation from "./shared/components/Navigation/Navigation";

import "./App.css";
import Auth from "./users/containers/Auth";
import UserBlogs from "./blogs/containers/UserBlogs";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/:userId/blogs" exact>
          <UserBlogs />
        </Route>

        <Route path="/blogs/new" exact>
          <NewBlog />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
