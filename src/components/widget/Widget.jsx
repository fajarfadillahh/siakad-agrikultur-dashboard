import React from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlinePerson,
  MdOutlineAccountBalance,
  MdOutlineShoppingCart,
  MdOutlineMonetizationOn,
} from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  // temporary data
  let amount = 100;
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (
          <div className="self-end rounded-md bg-red-100 p-[5px] text-[20px] text-red-500">
            <MdOutlinePerson />
          </div>
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "See all orders",
        icon: (
          <div className="self-end rounded-md bg-yellow-100 p-[5px] text-[20px] text-yellow-500">
            <MdOutlineShoppingCart />
          </div>
        ),
      };
      break;
    case "earning":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "See net earnings",
        icon: (
          <div className="self-end rounded-md bg-green-100 p-[5px] text-[20px] text-green-500">
            <MdOutlineMonetizationOn />
          </div>
        ),
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See details",
        icon: (
          <div className="self-end rounded-md bg-purple-100 p-[5px] text-[20px] text-purple-500">
            <MdOutlineAccountBalance />
          </div>
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="flex h-[120px] w-[200px] flex-1 justify-between rounded-md p-[10px] shadow-lg shadow-gray-200/50">
      <div className="flex flex-col justify-between">
        <span className="text-[14px] font-bold uppercase text-gray-500">
          {data.title}
        </span>
        <span className="text-[28px] font-medium text-gray-900">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="w-max border-b border-gray-300 text-[12px] font-medium text-gray-900">
          {data.link}
        </span>
      </div>

      <div className="flex flex-col justify-between">
        <div className="percentage flex items-center text-[14px] font-medium text-green-500">
          <MdOutlineKeyboardArrowUp className="text-[20px]" />
          {diff}%
        </div>

        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
