import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import mock latets transactions data
import transactions from "../../_mock/LatestTransactionData";

const List = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        borderRadius: "6px",
        borderWidth: "2px",
        borderColor: "rgb(246, 244, 243)",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Paymet Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="tableCell">{data.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper flex items-center">
                  <img
                    src={data.img}
                    alt="product image"
                    className="image mr-3 h-8 w-8 rounded-full object-cover object-center"
                  />
                  {data.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{data.customer}</TableCell>
              <TableCell className="tableCell">{data.date}</TableCell>
              <TableCell className="tableCell">{data.amount}</TableCell>
              <TableCell className="tableCell">{data.method}</TableCell>
              <TableCell className="tableCell">
                <span
                  className={`rounded-full px-2 py-1 font-sans text-[12px] font-medium ${
                    data.status === "Approved"
                      ? "bg-green-100 text-green-500"
                      : data.status === "Pending"
                      ? "bg-yellow-100 text-yellow-500"
                      : null
                  }`}
                >
                  {data.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
