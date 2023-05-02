import React from "react";

// import components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-[6]">
        <Navbar />

        <div className="flex gap-5 p-[20px]">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts flex gap-5 p-[20px]">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
