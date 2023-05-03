const TransactionColumns = [
  { width: 100, field: "id", headerName: "Tracking ID" },
  {
    width: 230,
    field: "product",
    headerName: "Product",
    renderCell: (params) => {
      return (
        <div className="flex items-center gap-2">
          <img
            src={params.row.img}
            alt="profile img"
            className="h-8 w-8 rounded-full object-cover object-center"
          />
          {params.row.product}
        </div>
      );
    },
  },
  { width: 200, field: "customer", headerName: "Customer" },
  { field: "date", headerName: "Date" },
  { field: "amount", headerName: "Amount" },
  { width: 180, field: "method", headerName: "Payment Method" },
  {
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
