import React from "react";

// import sidebar content
import SidebarContent from "./SidebarContent";

const SidebarMobile = ({ sidebarOpen }) => {
  return (
    <>
      <aside
        className={`fixed top-0 z-20 h-full w-[220px] overflow-y-auto border-r border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          sidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* overlay */}
      <div
        className={`left-0 top-0 z-10 h-screen w-screen transition-all duration-300 ${
          sidebarOpen ? "absolute bg-gray-900/20" : "hidden bg-transparent"
        }`}
      />
    </>
  );
};

export default SidebarMobile;
