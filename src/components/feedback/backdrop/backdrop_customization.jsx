import { useState } from "react"
import { Backdrop, CircularProgress } from "@mui/material"

export function BackdropCustomization() {
    const [open, setOpen] = useState(true)
    return (
        <Backdrop transitionDuration={2000} sx={{ bgcolor: "rgba(255, 0, 0, 0.35)" }} open={open} onClick={() => setOpen(false)}>
            <CircularProgress size={100} />
        </Backdrop>
    )
}
