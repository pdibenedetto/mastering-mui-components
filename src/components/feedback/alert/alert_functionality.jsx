import { useState } from "react"
import { Alert, AlertTitle, Button } from "@mui/material"
import AppleIcon from "@mui/icons-material/Apple"

export function AlertFunctionality() {
    const [open, setOpen] = useState(true)

    return (
        <>
            {open && (
                <Alert
                    icon={<AppleIcon />}
                    action={<Button variant="contained">Delete</Button>}
                    onClose={() => setOpen(false)}
                    color="secondary"
                    variant="filled"
                    severity="error">
                    <AlertTitle>My Alert</AlertTitle>
                    Something went wrong, please try again.
                </Alert>
            )}
        </>
    )
}
