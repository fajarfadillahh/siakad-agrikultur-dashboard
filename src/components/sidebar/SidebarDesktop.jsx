import React from "react";

// import sidebar content
import SidebarContent from "./SidebarContent";

const SidebarDesktop = () => {
  return (
    <aside className="hidden w-[220px] overflow-y-auto border-r border-gray-100 bg-white lg:block">
      <SidebarContent />
    </aside>
  );
};

export default SidebarDesktop;
