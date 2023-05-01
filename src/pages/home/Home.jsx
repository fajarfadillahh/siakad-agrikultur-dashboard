import React from "react";

// import components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-[6]">
        <Navbar />
        home container
      </div>
    </div>
  );
};

export default Home;
