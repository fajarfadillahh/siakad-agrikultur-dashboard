import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

// import mock latets transactions data
import userRows from "../../_mock/LatestTransactionData";

// import components
import userColumns from "./TableColumn";

const List = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        disableRowSelectionOnClick
        sx={{
          fontFamily: "Inter, sans-serif",
          border: "none",
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      />
    </TableContainer>
  );
};

export default List;
