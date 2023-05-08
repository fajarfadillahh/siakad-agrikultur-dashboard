import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/home/Home";
import Users from "./pages/list/List";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
