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
    <div className="flex-[2] rounded-md p-[10px] shadow-3xl">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="font-medium">Total Revenue</h1>
        <MdOutlineMoreVert className="text-[20px]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-7 py-[20px]">
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
        <p className="font-medium text-gray-500">Total sales made today</p>
        <p className="text-[30px] font-semibold text-gray-900">$450</p>
        <p className="text-center text-[12px] text-gray-500  ">
          Previous transactions processing. Last payment may not be inclueded.
        </p>

        <div className="flex w-full items-center justify-between">
          <div className="text-center">
            <h3 className="text-[14px] font-medium text-gray-500">Target</h3>
            <div className="mt-2 flex items-center text-red-500">
              <MdOutlineKeyboardArrowDown className="text-[20px]" />
              <p className="text-[14px]">$12.5k</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-[14px] font-medium text-gray-500">Last Week</h3>
            <div className="mt-2 flex items-center text-green-500">
              <MdOutlineKeyboardArrowUp className="text-[20px]" />
              <p className="text-[14px]">$12.5k</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-[14px] font-medium text-gray-500">
              Last Month
            </h3>
            <div className="mt-2 flex items-center text-green-500">
              <MdOutlineKeyboardArrowUp className="text-[20px]" />
              <p className="text-[14px]">$12.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
