import { Link } from "react-router-dom";
import {
  MdOutlineRemoveRedEye,
  MdOutlineEdit,
  MdDeleteOutline,
} from "react-icons/md";
import { Tooltip } from "@mui/material";

const userColumns = [
  {
    field: "user",
    headerName: "User",
    width: 280,
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-2">
          <img
            src={params.row.img}
            alt="profile img"
            className="h-8 w-8 rounded-full object-cover object-center"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 280,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`rounded-full px-2 py-0.5 font-sans text-[12px] font-medium ${
            params.row.status === "active"
              ? "bg-green-100 text-green-500"
              : params.row.status === "pending"
              ? "bg-yellow-100 text-yellow-500"
              : params.row.status === "passive"
              ? "bg-red-100 text-red-500"
              : null
          }`}
        >
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    sortable: false,
    renderCell: () => {
      return (
        <div className="flex items-center gap-2">
          <Tooltip title="View" sx={{ fontFamily: "inherit" }}>
            <Link
              to="/users/123"
              className="relative cursor-pointer rounded-md p-[3px] text-gray-500 hover:bg-purple-600 hover:text-white"
            >
              <MdOutlineRemoveRedEye className="text-[20px]" />
            </Link>
          </Tooltip>
          <Tooltip title="Edit" sx={{ fontFamily: "inherit" }}>
            <div className="relative cursor-pointer rounded-md p-[3px] text-gray-500 hover:bg-purple-600 hover:text-white">
              <MdOutlineEdit className="text-[20px]" />
            </div>
          </Tooltip>
          <Tooltip title="Delete" sx={{ fontFamily: "inherit" }}>
            <div className="relative cursor-pointer rounded-md p-[3px] text-red-500 hover:bg-red-500 hover:text-white">
              <MdDeleteOutline className="text-[20px]" />
            </div>
          </Tooltip>
        </div>
      );
    },
  },
];

export default userColumns;
