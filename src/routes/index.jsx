import { Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default Router;
