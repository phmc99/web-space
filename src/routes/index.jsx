import { Route, Routes } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default Router;
