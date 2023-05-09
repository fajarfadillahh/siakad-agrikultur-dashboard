import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import main pages
import Home from "./pages/admin/Home";
import Users from "./pages/admin/List";
import Swiper from "./pages/admin/Swiper";
import Information from "./pages/admin/Information";
import Stats from "./pages/admin/Stats";
import Notifications from "./pages/admin/Notifications";
import Settings from "./pages/admin/Settings";
import Profile from "./pages/admin/Profile";

// import login & register pages
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* main pages */}
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />

        {/* login & register page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
