import React from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlinePerson,
  MdOutlineAccountBalance,
  MdOutlineShoppingCart,
  MdOutlineMonetizationOn,
} from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  // temporary data
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        amount: 100,
        diff: -1.1,
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
        amount: 117,
        diff: 2.1,
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
        amount: 314,
        diff: 3.6,
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
        amount: 2973,
        diff: -1.3,
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
    <div className="flex h-[120px] w-[200px] flex-1 justify-between rounded-md p-[10px] shadow-3xl">
      <div className="flex flex-col justify-between">
        <span className="text-[14px] font-bold uppercase text-gray-500">
          {data.title}
        </span>
        <span className="text-[28px] font-medium text-gray-900">
          {data.isMoney && "$"} {data.amount.toLocaleString()}
        </span>
        <span className="w-max border-b border-gray-300 text-[12px] font-medium text-gray-900">
          {data.link}
        </span>
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
