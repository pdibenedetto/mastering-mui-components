import { useState } from "react"
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Button } from "@mui/material"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import MessageIcon from "@mui/icons-material/Message"
import EmailIcon from "@mui/icons-material/Email"

export function SpeedDialCustomization() {
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    const actions = [
        {
            icon: <LocalPhoneIcon />,
            name: "Phone",
            function: () => console.log("Clicked 1"),
        },
        {
            icon: <MessageIcon />,
            name: "Message",
            function: () => console.log("Clicked 2"),
        },
        {
            icon: <EmailIcon />,
            name: "Email",
            function: () => console.log("Clicked 3"),
        },
    ]

    return (
        <div style={{ width: "100%", height: "50rem" }}>
            <Button onClick={handleOpen}>Open Actions</Button>
            <SpeedDial
                FabProps={{
                    sx: {
                        bgcolor: "green",
                        height: "5rem",
                        width: "5rem",
                        "&:hover": {
                            bgcolor: "purple",
                        },
                    },
                }}
                onOpen={handleOpen}
                onClose={handleClose}
                open={open}
                // hidden
                direction="left"
                icon={
                    <SpeedDialIcon
                        sx={{
                            "& > svg": { fontSize: 50, color: "#000" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                }
                ariaLabel="communication options SpeedDial"
                sx={{ position: "absolute", bottom: 20, right: 20 }}>
                {actions.map((action) => (
                    <SpeedDialAction
                        sx={{
                            height: "4rem",
                            width: "4rem",
                            bgcolor: "#000",
                            color: "#FFF",
                            "&:hover": { bgcolor: "#343434" },
                        }}
                        onClick={action.function}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}
