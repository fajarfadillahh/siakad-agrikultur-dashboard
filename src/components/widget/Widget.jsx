import React from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlinePerson,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  // temporary data
  switch (type) {
    case "inactive-users":
      data = {
        title: "Inactive Users",
        amount: 127,
        diff: -1.1,
        link: "See all users",
        icon: (
          <div className="self-end rounded-md bg-red-100 p-[5px] text-[20px] text-red-500">
            <MdOutlinePerson />
          </div>
        ),
      };
      break;
    case "infrequent-users":
      data = {
        title: "Infrequent Users",
        amount: 108,
        diff: 2.1,
        link: "See all users",
        icon: (
          <div className="self-end rounded-md bg-yellow-100 p-[5px] text-[20px] text-yellow-500">
            <MdOutlinePerson />
          </div>
        ),
      };
      break;
    case "active-users":
      data = {
        title: "Active Users",
        amount: 324,
        diff: 3.6,
        link: "See all users",
        icon: (
          <div className="self-end rounded-md bg-green-100 p-[5px] text-[20px] text-green-500">
            <MdOutlinePerson />
          </div>
        ),
      };
      break;
    case "total-users":
      data = {
        title: "Total Users",
        amount: 2973,
        diff: -1.3,
        link: "See all users",
        icon: (
          <div className="self-end rounded-md bg-purple-100 p-[5px] text-[20px] text-purple-500">
            <MdOutlinePerson />
          </div>
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="flex h-[120px] flex-1 justify-between rounded-md border border-gray-100 p-[10px] shadow-3xl">
      <div className="flex flex-col justify-between">
        <span className="text-[12px] font-semibold uppercase text-gray-500">
          {data.title}
        </span>
        <span className="text-[28px] font-medium text-gray-900">
          {data.amount}
        </span>
        <Link
          to="/users"
          className="inline-flex items-center gap-0.5 text-[12px] font-medium text-gray-900 transition-all hover:gap-1.5 hover:text-purple-600"
        >
          {data.link}
          <MdOutlineKeyboardArrowRight className="text-[1rem]" />
        </Link>
      </div>

      <div className="flex flex-col justify-between">
        {data.diff > 0 ? (
          <div className="flex items-center text-[14px] font-medium text-green-500">
            <MdOutlineKeyboardArrowUp className="text-[20px]" />
            {data.diff}%
          </div>
        ) : (
          <div className="flex items-center text-[14px] font-medium text-red-500">
            <MdOutlineKeyboardArrowDown className="text-[20px]" />
            {data.diff}%
          </div>
        )}

        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
