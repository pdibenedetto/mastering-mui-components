import { useState } from "react"
import { Backdrop, CircularProgress } from "@mui/material"

export function BackdropFunctionality() {
    const [open, setOpen] = useState(true)
    return (
        <Backdrop transitionDuration={2000} open={open} onClick={() => setOpen(false)}>
            <CircularProgress size={100} />
        </Backdrop>
    )
}
