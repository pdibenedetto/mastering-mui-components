import { Snackbar, Button, Zoom } from "@mui/material"
import { useState } from "react"

export function SnackbarCustomization() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(!open)}>Click me!</Button>
            <Snackbar
                autoHideDuration={2000}
                TransitionComponent={Zoom}
                open={true}
                onClose={() => setOpen(false)}
                message="Something went wrong, please try again."
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                action={<Button>UNDO</Button>}
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: "secondary.main",
                        color: "#000",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                        height: "5rem",
                        width: "30rem",
                    },
                }}
            />
        </div>
    )
}
