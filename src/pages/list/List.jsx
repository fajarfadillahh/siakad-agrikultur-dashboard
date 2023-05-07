import React from "react";

// import components
import Sidebar from "../../components/sidebar/SidebarMobile";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-[6]">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
