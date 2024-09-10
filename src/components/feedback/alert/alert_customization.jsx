import { useState } from "react"
import { Alert, AlertTitle, Button } from "@mui/material"
import AppleIcon from "@mui/icons-material/Apple"

export function AlertCustomization() {
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
                    severity="error"
                    sx={{
                        width: "30rem",
                        height: "10rem",
                        fontSize: "1.5rem",
                        fontFamily: "Verdana",
                        color: "#000",
                        "& .MuiAlert-icon": {
                            color: "#FFF",
                            fontSize: 45,
                        },
                        "& .MuiAlert-action": {
                            color: "#FFF",
                            "& > button > svg": {
                                fontSize: 45,
                            },
                        },
                        // bgcolor: "#343434"
                    }}>
                    <AlertTitle sx={{ color: "#FFF", fontFamily: "Verdana", fontSize: "2rem" }}>My Alert</AlertTitle>
                    Something went wrong, please try again.
                </Alert>
            )}
        </>
    )
}
