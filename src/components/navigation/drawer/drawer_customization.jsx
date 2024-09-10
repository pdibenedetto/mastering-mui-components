import { SwipeableDrawer, Button, Box } from "@mui/material"
import { useState } from "react"

export function DrawerCustomization() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const drawerWidth = 100

    const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent)

    return (
        <div style={{ display: "flex" }}>
            <SwipeableDrawer
                disableDiscovery={iOS}
                disableBackdropTransition={!iOS}
                ModalProps={{ keepMounted: true }}
                variant="persistent"
                sx={{
                    flexShrink: 0,
                    width: drawerWidth,
                    height: "50%",
                    "& li": {
                        color: "#FFF",
                        fontSize: "1.25rem",
                        fontFamily: "Verdana",
                    },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        bgcolor: "orange",
                        height: "50%",
                    },
                }}
                anchor="left"
                open={open}
                onClose={handleClose}>
                <ul>
                    <li onClick={handleClose}>First</li>
                    <li onClick={handleClose}>Second</li>
                    <li onClick={handleClose}>Third</li>
                </ul>
            </SwipeableDrawer>
            <Box
                sx={{
                    flexGrow: 1,
                    marginLeft: open ? 0 : `-${drawerWidth}px`,
                    transition: "margin 0.25s ease",
                }}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <Button onClick={() => setOpen(!open)}>Toggle Drawer</Button>
            </Box>
        </div>
    )
}
