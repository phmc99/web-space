import { Switch, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
    </Switch>
  );
};

export default Routes;
