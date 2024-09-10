import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination } from "@mui/material"
import { useState } from "react"

export function TableFunctionality() {
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
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Order History
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                            <TableRow key={i}>
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
