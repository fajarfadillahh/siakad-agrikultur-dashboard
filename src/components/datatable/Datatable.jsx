import React from "react";
import { DataGrid } from "@mui/x-data-grid";

// import _mock datatable
import userRows from "../../_mock/DatatableRowData";

// import components
import userColumns from "./DatatableColumn";

const Datatable = () => {
  return (
    <div className="block overflow-x-auto">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25 },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          fontFamily: "Inter, sans-serif",
          borderColor: "transparent",
          "& .MuiDataGrid-columnHeadersInner": {
            width: "100%",
          },
        }}
      />
    </div>
  );
};

export default Datatable;
