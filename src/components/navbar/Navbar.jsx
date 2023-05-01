import React from "react";
import {
  MdOutlineSearch,
  MdOutlineDarkMode,
  MdOutlineNotifications,
} from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex h-[70px] items-center border-b border-gray-100">
      <div className="flex w-full items-center justify-between px-[20px]">
        <div className="relative flex items-center">
          <MdOutlineSearch className="absolute left-3 text-[20px] text-purple-600" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[280px] rounded-md border border-gray-200 py-2 pl-9 pr-2 text-[14px] font-semibold text-gray-900 outline-none placeholder:text-[12px] placeholder:text-gray-500 focus:border-purple-600 focus:ring focus:ring-purple-100"
          />
        </div>

        <div className="items flex items-center gap-4">
          <div className="item relative">
            <MdOutlineDarkMode className="text-[20px] text-gray-900" />
          </div>
          <div className="item relative">
            <MdOutlineNotifications className="text-[20px] text-gray-900" />
            <div className="absolute right-0 top-0 h-[10px] w-[10px] rounded-full bg-red-500" />
          </div>
          <div className="item relative">
            <div className="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full">
              <img
                src="/assets/images/avatar_5.jpg"
                alt="profile picture"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
