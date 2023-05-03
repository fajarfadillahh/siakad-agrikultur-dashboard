import React from "react";

// import components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-[6]">
        <Navbar />

        <div className="flex gap-5 p-5">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="flex gap-5 p-5">
          <Featured />
          <Chart />
        </div>

        <div className="m-5 rounded-md p-5 shadow-3xl">
          <h1 className="mb-5 font-medium capitalize text-gray-500">
            Lates Transactions
          </h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
