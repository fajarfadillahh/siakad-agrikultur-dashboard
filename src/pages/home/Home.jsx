import React from "react";

// import components
import Layout from "../../components/layout/Layout";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <Layout>
      <div>home page</div>
      {/* <div className="flex gap-5">
        <Widget type="inactive-users" />
        <Widget type="infrequent-users" />
        <Widget type="active-users" />
        <Widget type="total-users" />
      </div>

      <div className="flex gap-5 p-5">
        <Featured />
        <Chart />
      </div>

      <div className="m-5 rounded-md p-5 shadow-3xl">
        <h1 className="mb-5 font-medium capitalize text-gray-500">
          Latest Activity Users
        </h1>
        <Table />
      </div> */}
    </Layout>
  );
};

export default Home;
