import React from "react";

// import components
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-[6]">home container</div>
    </div>
  );
};

export default Home;
