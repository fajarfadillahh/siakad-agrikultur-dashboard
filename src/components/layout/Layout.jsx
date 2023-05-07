import React, { useState } from "react";

// import components
import SidebarMobile from "../sidebar/SidebarMobile";
import SidebarDesktop from "../sidebar/SidebarDesktop";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <SidebarMobile sidebarOpen={sidebarOpen} />
      <SidebarDesktop />

      <div className="flex w-full flex-1 flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="h-full overflow-y-auto p-5">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
