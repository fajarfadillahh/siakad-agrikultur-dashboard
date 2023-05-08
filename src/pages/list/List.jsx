import React from "react";
import { MdAdd } from "react-icons/md";

// import components
import Layout from "../../components/layout/Layout";
import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
    <Layout>
      <div className="grid gap-4 rounded-md border border-gray-100 p-5 shadow-3xl">
        <div className="flex items-center justify-between">
          <h1 className="font-medium capitalize text-gray-500">
            List all users
          </h1>

          <button
            className="inline-flex items-center justify-between gap-2 rounded-md bg-purple-600 px-4 py-2 text-[14px] font-medium text-white hover:bg-purple-700"
            onClick={(e) => e.preventDefault()}
          >
            <MdAdd className="text-[20px]" />
            Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <Datatable />
        </div>
      </div>
    </Layout>
  );
};

export default List;
