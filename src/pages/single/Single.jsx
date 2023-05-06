import React from "react";

// import components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-[6]">
        <Navbar />

        <div className="flex gap-5 p-5">
          <div className="relative flex-1 p-5 shadow-3xl">
            <div className="absolute right-0 top-0 cursor-pointer rounded-md bg-purple-600 p-1.5 text-[14px] text-white">
              Edit
            </div>
            <h1 className="mb-2 text-[18px] font-semibold text-gray-900">
              Information
            </h1>

            <div className="flex gap-5">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="user image"
                className="h-[100px] w-[100px] rounded-full object-cover object-center"
              />

              <div className="details">
                <h1 className="mb-[10px] text-gray-900">Jane Doe</h1>

                <div className="mb-[10px]">
                  <span className="mr-[5px] font-semibold text-gray-500">
                    Email:
                  </span>
                  <span className="font-normal">janedoe@gmail.com</span>
                </div>

                <div className="mb-[10px]">
                  <span className="mr-[5px] font-semibold text-gray-500">
                    Phone:
                  </span>
                  <span className="font-normal">+1 2345 67 89</span>
                </div>

                <div className="mb-[10px]">
                  <span className="mr-[5px] font-semibold text-gray-500">
                    Address:
                  </span>
                  <span className="font-normal">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>

                <div className="mb-[10px]">
                  <span className="mr-[5px] font-semibold text-gray-500">
                    Country:
                  </span>
                  <span className="font-normal">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[2]">
            <Chart aspect={3 / 1} title="User Activity (Last 6 Months)" />
          </div>
        </div>

        <div className="mx-5 my-[10px] p-5 shadow-3xl ">
          <h1 className="font-medium text-gray-500">Last Users Activity</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
