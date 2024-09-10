import { Portal, Paper, AppBar, Toolbar, Button } from "@mui/material"
import { useReducer, useRef, useState, useEffect } from "react"

export function PortalFunctionality() {
    const [mounted, setMounted] = useState(false)
    const [show, toggle] = useReducer((s) => !s, false)
    const appbarRef = useRef()

    useEffect(() => setMounted(true), [])

    return (
        <div>
            <Button variant="contained" onClick={toggle}>
                {show ? "Hide" : "Show"} Portal
            </Button>
            {mounted && show && (
                <Portal container={appbarRef.current}>
                    <Paper>My Paper</Paper>
                </Portal>
            )}
            <AppBar ref={appbarRef} sx={{ top: "auto", bottom: 0 }}>
                <Toolbar />
            </AppBar>
        </div>
    )
}
