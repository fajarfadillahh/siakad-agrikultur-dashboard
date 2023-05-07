import React from "react";
import {
  MdOutlineMoreVert,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// import react-circular-progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="h-[424px] w-full rounded-md border border-gray-100 p-4 shadow-3xl lg:w-[350px]">
      <div className="grid gap-4">
        <h1 className="font-medium text-gray-500">Total Activity</h1>

        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="h-[120px] w-[120px] ">
            <CircularProgressbar
              value={70}
              text="70%"
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "rgb(147,51,234)",
                trailColor: "rgb(229,231,235)",
                textColor: "rgb(147,51,234)",
              })}
            />
          </div>

          <div className="flex flex-col gap-1 text-center">
            <p className="font-medium text-gray-500">User activity today</p>
            <h1 className="text-[32px] font-semibold text-gray-900">470</h1>
            <p className="max-w-[260px] text-center text-[12px] text-gray-500">
              Past activity processing. The last activity may not be included.
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-6">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-[14px] font-medium text-gray-500">Today</h3>
              <div className="mt-2 flex items-center text-red-500">
                <MdOutlineKeyboardArrowDown className="text-[20px]" />
                <p className="text-[14px]">-1.2%</p>
              </div>
            </div>

            <div className="inline-flex flex-col items-center">
              <h3 className="text-[14px] font-medium text-gray-500">
                Last Week
              </h3>
              <div className="mt-2 flex items-center text-green-500">
                <MdOutlineKeyboardArrowUp className="text-[20px]" />
                <p className="text-[14px]">2.7%</p>
              </div>
            </div>

            <div className="inline-flex flex-col items-center">
              <h3 className="text-[14px] font-medium text-gray-500">
                Last Month
              </h3>
              <div className="mt-2 flex items-center text-green-500">
                <MdOutlineKeyboardArrowUp className="text-[20px]" />
                <p className="text-[14px]">3.1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
