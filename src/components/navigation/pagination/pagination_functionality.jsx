import { useState } from "react"
import { Pagination } from "@mui/material"

export function PaginationFunctionality() {
    const [page, setPage] = useState(1)
    const data = ["Article 1", "Article 2", "Article 3", "Article 4", "Article 5"]
    return (
        <div>
            {data[page - 1]}
            <Pagination
                page={page}
                onChange={(e, newPage) => setPage(newPage)}
                // disabled
                count={5}
                color="secondary"
                variant="outlined"
                shape="rounded"
                size="medium"
                showFirstButton
                showLastButton
                // hidePrevButton
                // hideNextButton
                siblingCount={0}
                boundaryCount={0}
            />
        </div>
    )
}
