const TransactionColumns = [
  {
    width: 250,
    field: "user",
    headerName: "User",
    renderCell: (params) => {
      return (
        <div className="inline-flex items-center gap-[6px]">
          <img
            src={params.row.avatarImg}
            alt="profile img"
            className="h-8 w-8 rounded-full object-cover object-center"
          />
          <div className="flex flex-col gap-[2px]">
            <p className="font-semibold text-gray-900">{params.row.name}</p>
            <p className="text-[12px] font-medium text-gray-500">
              {params.row.numberId}
            </p>
          </div>
        </div>
      );
    },
  },
  { width: 250, field: "email", headerName: "Email" },
  { width: 150, field: "date", headerName: "Date" },
  { width: 280, field: "address", headerName: "Address" },
  {
    width: 120,
    field: "status",
    headerName: "Status",
    renderCell: (params) => {
      return (
        <div
          className={`rounded-full px-2 py-0.5 font-sans text-[12px] font-medium ${
            params.row.status === "Approved"
              ? "bg-green-100 text-green-500"
              : params.row.status === "Pending"
              ? "bg-yellow-100 text-yellow-500"
              : null
          }`}
        >
          {params.row.status}
        </div>
      );
    },
  },
];

export default TransactionColumns;
