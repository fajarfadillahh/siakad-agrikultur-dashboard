import React, { useEffect, useRef } from "react";
import {
  MdOutlineSearch,
  MdOutlineDarkMode,
  MdOutlineNotifications,
  MdOutlineMenu,
} from "react-icons/md";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const refNavbar = useRef(null);

  // handle sidebar open
  const handleSidebarOpen = (e) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };

  // sidebar will be close, if user click everywhere
  const handleSidebarClose = (e) => {
    if (refNavbar.current && !refNavbar.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleSidebarClose);
    return () => {
      document.removeEventListener("mousedown", handleSidebarClose);
    };
  }, []);

  return (
    <nav
      className="flex min-h-[70px] items-center border-b border-gray-100"
      ref={refNavbar}
    >
      <div className="flex w-full items-center justify-between px-5">
        <div className="inline-flex items-center gap-3">
          <button
            className="z-50 cursor-pointer rounded-md p-[3px] text-[20px] text-gray-900 hover:bg-gray-100 focus:ring-[3px] focus:ring-purple-600/50 lg:hidden"
            onClick={handleSidebarOpen}
          >
            <MdOutlineMenu />
          </button>

          <div className="relative flex items-center">
            <MdOutlineSearch className="absolute left-3 text-[20px] text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-[180px] rounded-md border border-gray-300 py-2 pl-9 pr-2 text-[14px] font-semibold text-gray-900 outline-none placeholder:font-medium placeholder:text-gray-500 focus:border-purple-600 focus:ring focus:ring-purple-100 sm:w-[280px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative cursor-pointer rounded-md p-[3px] text-[20px] text-gray-900 hover:bg-gray-100 focus:ring-[3px] focus:ring-purple-600/50">
            <MdOutlineDarkMode />
          </button>
          <button className="relative cursor-pointer rounded-md p-[3px] text-[20px] text-gray-900 hover:bg-gray-100 focus:ring-[3px] focus:ring-purple-600/50">
            <MdOutlineNotifications />
            {/* <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" /> */}
          </button>
          <button className="relative h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full focus:ring-[3px] focus:ring-purple-600/50">
            <img
              src="/assets/images/avatar_5.jpg"
              alt="profile picture"
              className="h-full w-full object-cover object-center"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
