import { Route, Routes } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Messenger from "../pages/Messenger";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/messenger" element={<Messenger />} />
    </Routes>
  );
};

export default Router;
