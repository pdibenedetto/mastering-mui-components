import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination } from "@mui/material"
import { useState } from "react"

export function TableCustomization() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => setPage(newPage)

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value)
        setPage(0)
    }

    const createData = (date, total, status) => {
        return { date, total, status }
    }

    const rows = [
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 1 2022"), 19.99, "shipped"),
        createData(new Date("December 1 2021"), 29.99, "delivered"),
    ]

    return (
        <div>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table>
                    <TableHead
                        sx={{
                            "& th": {
                                bgcolor: "green",
                            },
                        }}>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: "#FFF",
                                    fontFamily: "Verdana",
                                    fontSize: "2rem",
                                    borderColor: "#000",
                                    borderWidth: 2,
                                }}
                                align="center"
                                colSpan={3}>
                                Order History
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{
                                "& > th": {
                                    color: "#FFF",
                                    fontFamily: "Verdana",
                                    fontSize: "1rem",
                                    borderColor: "#000",
                                    borderWidth: 2,
                                },
                            }}>
                            <TableCell>Date</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "& .MuiTableCell-root": {
                                borderColor: "#000",
                                borderWidth: 2,
                                color: "#FFF",
                                fontFamily: "Verdana",
                                fontSize: "1rem",
                                padding: "10px 8px",
                            },
                        }}>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                            <TableRow key={i} sx={{ bgcolor: i % 2 === 0 ? "pink" : "lightblue" }}>
                                <TableCell>{row.date.toDateString()}</TableCell>
                                <TableCell>${row.total}</TableCell>
                                <TableCell>{row.status}</TableCell>
                            </TableRow>
                        ))}
                        {/* <TableRow>
              <TableCell rowSpan={3} />
              <TableCell>Total Orders</TableCell>
              <TableCell>{rows.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Cost</TableCell>
              <TableCell>
                ${rows.reduce((total, row) => total + row.total, 0).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Delivered Orders</TableCell>
              <TableCell>
                {rows.reduce(
                  (total, row) =>
                    row.status === "delivered" ? total + 1 : total,
                  0
                )}
              </TableCell>
            </TableRow> */}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{
                    "& .MuiTablePagination-selectLabel": {
                        color: "green",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                    "& .MuiTablePagination-select": {
                        color: "purple",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                    "& .MuiInputBase-root > svg": {
                        color: "orange",
                    },
                    "& .MuiTablePagination-displayedRows": {
                        color: "green",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                    "& .MuiTablePagination-actions": {
                        color: "blue",
                        "& .Mui-disabled": {
                            color: "pink",
                        },
                        "& > button > svg": {
                            height: "2rem",
                            width: "2rem",
                        },
                    },
                }}
                component="div"
                rowsPerPageOptions={[10, 25, 100]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}
