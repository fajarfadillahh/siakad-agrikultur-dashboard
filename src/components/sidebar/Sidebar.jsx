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

const Sidebar = () => {
  return (
    <div className="min-h-screen flex-1 border-r-[1px] border-gray-100">
      <div className="flex h-[50px] items-center justify-center border-b-[1px] border-gray-100">
        <span className="text-[18px] font-extrabold text-gray-900">
          Agrikultur
        </span>
      </div>

      <div className="px-3">
        <ul className="flex flex-col">
          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            MAIN
          </p>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineGridView className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Dashboard
            </span>
          </li>

          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            LISTS
          </p>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlinePerson className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Users
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineStore className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Products
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineCreditCard className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Orders
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineLocalShipping className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Delivery
            </span>
          </li>

          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            USEFUL
          </p>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineInsertChart className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Stats
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineNotifications className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Notifications
            </span>
          </li>

          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            SERVICES
          </p>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineSettingsSystemDaydream className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              System Helth
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlinePsychology className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Logs
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineSettings className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Settings
            </span>
          </li>

          <p className="pb-1 pt-4 text-[10px] font-bold uppercase text-gray-500">
            USERS
          </p>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineAccountCircle className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Profile
            </span>
          </li>
          <li className="flex cursor-pointer items-center gap-1 rounded-md p-[6px] hover:bg-gray-100">
            <MdOutlineLogout className="text-[18px] text-purple-600" />
            <span className="text text-[14px] font-semibold capitalize text-gray-900">
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
