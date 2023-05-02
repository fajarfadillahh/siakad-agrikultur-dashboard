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
          <MdOutlineSearch className="absolute left-3 text-[20px] text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[280px] rounded-md border border-gray-300 py-2 pl-9 pr-2 text-[14px] font-semibold text-gray-900 outline-none placeholder:text-[12px] placeholder:text-gray-500 focus:border-purple-600 focus:ring focus:ring-purple-100"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer rounded-md p-[3px] hover:bg-gray-100 focus:ring-[3px] focus:ring-purple-600/50">
            <MdOutlineDarkMode className="text-[20px] text-gray-900" />
          </button>
          <button className="relative cursor-pointer rounded-md p-[3px] hover:bg-gray-100 focus:ring-[3px] focus:ring-purple-600/50">
            <MdOutlineNotifications className="text-[20px] text-gray-900" />
            {/* <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" /> */}
          </button>
          <button className="relative cursor-pointer rounded-full focus:ring-[3px] focus:ring-purple-600/50">
            <div className="h-[36px] w-[36px] overflow-hidden rounded-full">
              <img
                src="/assets/images/avatar_5.jpg"
                alt="profile picture"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
