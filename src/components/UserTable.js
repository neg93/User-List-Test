import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0d2a3a',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function UserTable({ columns, rows }) {
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");
  const router = useRouter();

  const handleRowClick = (row) => {
    router.push("/users/" + row.id);
  };
  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };
  const sortedRows = rows.sort((a, b) => {
    const isAscending = order === "asc";
    return isAscending
      ? a[orderBy] > b[orderBy]
        ? 1
        : -1
      : a[orderBy] < b[orderBy]
      ? 1
      : -1;
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                onClick={() => handleRequestSort(column.id)}
              >
                {column.label}
                {orderBy === column.id && (
                  <span>
                    {order === "asc" ? " ↑" : " ↓"}
                  </span>
                )}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {sortedRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => handleRowClick(row)}
                >
                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default UserTable;
