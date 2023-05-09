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
      <div className="grid gap-5">
        <div className="flex flex-wrap gap-5">
          <Widget type="inactive-users" />
          <Widget type="infrequent-users" />
          <Widget type="active-users" />
          <Widget type="total-users" />
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <Featured />
          <Chart />
        </div>

        <div className="grid gap-4 rounded-md border border-gray-100 p-5 shadow-3xl">
          <h1 className="font-medium capitalize text-gray-500">
            Latest Activity Users
          </h1>
          <div className="overflow-x-auto">
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
