import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";

// import mock latets transactions data
import TransactionRows from "../../_mock/LatestTransactionData";

// import components
import TransactionColumns from "./TableColumn";

const List = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <DataGrid
        rows={TransactionRows}
        columns={TransactionColumns}
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
    </TableContainer>
  );
};

export default List;
