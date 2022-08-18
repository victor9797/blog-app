import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/containers/Users";
import NewBlog from "./blogs/containers/NewBlog";

const App = () => {
  return (
    <Router>
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
