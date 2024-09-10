import { useState } from "react"
import { Pagination, PaginationItem } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

export function PaginationCustomization() {
    const [page, setPage] = useState(1)
    const data = ["Article 1", "Article 2", "Article 3", "Article 4", "Article 5"]
    return (
        <div>
            {data[page - 1]}
            <Pagination
                page={page}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        components={{
                            previous: ArrowBackIcon,
                            next: ArrowForwardIcon,
                            first: ArrowUpwardIcon,
                            last: ArrowDownwardIcon,
                        }}
                    />
                )}
                onChange={(e, newPage) => setPage(newPage)}
                // disabled
                count={5}
                // color="secondary"
                sx={{
                    "& .MuiPaginationItem-page": {
                        "&.Mui-disabled": {
                            "&.Mui-selected": {
                                bgcolor: "#000",
                                color: "#FFF",
                                opacity: 1,
                            },
                            "&:not(.Mui-selected)": {
                                bgcolor: "#000",
                                color: "#FFF",
                                opacity: 0.25,
                            },
                        },
                        "&.Mui-selected": {
                            "&:not(.Mui-disabled)": {
                                bgcolor: "orange",
                                borderColor: "#000",
                                borderWidth: 2,
                                color: "#FFF",
                                fontSize: "1.5rem",
                                fontFamily: "Verdana",
                                "&:hover": {
                                    bgcolor: "#000",
                                },
                            },
                        },
                        ":not(.Mui-selected):not(.Mui-disabled)": {
                            bgcolor: "purple",
                            borderColor: "#000",
                            borderWidth: 2,
                            color: "#FFF",
                            fontSize: "1.5rem",
                            fontFamily: "Verdana",
                        },
                    },
                    "& .MuiPaginationItem-root": {
                        height: "3rem",
                        width: "3rem",
                    },
                    "& .MuiPaginationItem-previousNext": {
                        color: "red",
                        "& > svg": {
                            fontSize: 40,
                        },
                        "&.Mui-disabled": {
                            bgcolor: "#000",
                            color: "#FFF",
                            // opacity: 1
                        },
                    },
                    "& .MuiPaginationItem-firstLast": {
                        color: "red",
                        "& > svg": {
                            fontSize: 40,
                        },
                        "&.Mui-disabled": {
                            bgcolor: "#000",
                            color: "#FFF",
                            // opacity: 1
                        },
                    },
                }}
                variant="outlined"
                shape="rounded"
                // size="medium"
                showFirstButton
                showLastButton
                // hidePrevButton
                // hideNextButton
                // siblingCount={0}
                // boundaryCount={0}
            />
        </div>
    )
}
