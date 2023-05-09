import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import main pages
import Home from "./pages/home/Home";
import Users from "./pages/list/List";

// import login & register pages
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* main pages */}
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />

        {/* login & register page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
