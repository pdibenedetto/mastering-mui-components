import { Snackbar, Button, Zoom } from "@mui/material"
import { useState } from "react"

export function SnackbarFunctionality() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(!open)}>Click me!</Button>
            <Snackbar
                autoHideDuration={2000}
                TransitionComponent={Zoom}
                open={open}
                onClose={() => setOpen(false)}
                message="Something went wrong, please try again."
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                action={<Button>UNDO</Button>}
            />
        </div>
    )
}
