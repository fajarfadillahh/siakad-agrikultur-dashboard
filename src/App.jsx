import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import main pages
import Home from "./pages/home/Home";
import Users from "./pages/list/List";
import Swiper from "./pages/swiper/Swiper";
import Information from "./pages/information/Information";
import Stats from "./pages/stats/Stats";
import Notification from "./pages/notification/Notification";
import Setting from "./pages/setting/Setting";
import Profile from "./pages/profile/Profile";

// import login & register pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

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
        <Route path="/notifications" element={<Notification />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />

        {/* login & register page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
