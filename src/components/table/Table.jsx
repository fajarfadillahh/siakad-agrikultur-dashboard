import React from "react";
import { DataGrid } from "@mui/x-data-grid";

// import mock latets transactions data
import ActivityRows from "../../_mock/LatestActivityData";

// import components
import ActivityColumns from "./TableColumn";

const List = () => {
  return (
    <div className="">
      <DataGrid
        rows={ActivityRows}
        columns={ActivityColumns}
        disableRowSelectionOnClick
        sx={{
          fontFamily: "Inter, sans-serif",
          border: "none",
          "& .MuiDataGrid-columnHeadersInner": {
            width: "100%",
          },
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default List;
