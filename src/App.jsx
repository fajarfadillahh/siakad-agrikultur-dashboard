import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import Login from "./pages/login/Login";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}

          {/* user page routes */}
          {/* <Route path="users">
            <Route index element={<Layout />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
