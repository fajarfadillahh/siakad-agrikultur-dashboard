import React from "react";
import {
  MdOutlineGridView,
  MdOutlinePerson,
  MdOutlineStore,
  MdOutlineCreditCard,
  MdOutlineLocalShipping,
  MdOutlineInsertChart,
  MdOutlineNotifications,
  MdOutlineSettingsSystemDaydream,
  MdOutlinePsychology,
  MdOutlineSettings,
  MdOutlineAccountCircle,
  MdOutlineLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex-1 border-r border-gray-100">
      <div className="flex h-[70px] items-center justify-center border-b border-gray-100">
        <span className="text-[18px] font-extrabold text-gray-900">
          Agrikultur
        </span>
      </div>

      <div className="px-3">
        <ul className="flex flex-col">
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
            to="/products"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineStore className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Products
            </span>
          </Link>
          <Link
            to="/orders"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineCreditCard className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Orders
            </span>
          </Link>
          <Link
            to="/delivery"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineLocalShipping className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Delivery
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
            to="/notification"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineNotifications className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Notifications
            </span>
          </Link>

          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            SERVICES
          </p>
          <Link
            to="/system-helth"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineSettingsSystemDaydream className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              System Helth
            </span>
          </Link>
          <Link
            to="/logs"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlinePsychology className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Logs
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
            to="/logout"
            className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100"
          >
            <MdOutlineLogout className="text-[20px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Logout
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
