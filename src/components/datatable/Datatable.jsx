import React from "react";
import { DataGrid } from "@mui/x-data-grid";

// import _mock datatable
import {
  userRows,
  userColumns,
  actionColumn,
} from "../../_mock/DatatableSource";

const Datatable = () => {
  return (
    <div className="datatable h-max w-full p-5">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
