import React from "react";
import {
  MdOutlineGridView,
  MdOutlinePerson,
  MdOutlineInsertChart,
  MdOutlineNotifications,
  MdOutlineSettings,
  MdOutlineAccountCircle,
  MdOutlineLogout,
  MdOutlineCollections,
  MdOutlineAssignment,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-[70px] items-center justify-center border-b border-gray-100">
        <span className="text-[18px] font-extrabold text-gray-900">
          Agrikultur
        </span>
      </div>

      <ul className="flex flex-col px-3">
        <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
          MAIN
        </p>
        <Link
          to="/"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineGridView className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Dashboard
          </span>
        </Link>

        <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
          LISTS
        </p>
        <Link
          to="/users"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlinePerson className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Users
          </span>
        </Link>
        <Link
          to="/swiper"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineCollections className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Swiper
          </span>
        </Link>
        <Link
          to="/information"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineAssignment className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Information
          </span>
        </Link>

        <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
          USEFUL
        </p>
        <Link
          to="/stats"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineInsertChart className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Stats
          </span>
        </Link>
        <Link
          to="/notifications"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineNotifications className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Notifications
          </span>
        </Link>
        <Link
          to="/settings"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineSettings className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Settings
          </span>
        </Link>

        <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
          USERS
        </p>
        <Link
          to="/profile"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineAccountCircle className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Profile
          </span>
        </Link>
        <Link
          to="/login"
          className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
        >
          <MdOutlineLogout className="text-[20px] text-purple-600" />
          <span className="text text-[14px] font-semibold capitalize text-gray-900">
            Logout
          </span>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarContent;
