import { Popper, Button, Typography, Zoom } from "@mui/material"
import { useState } from "react"

export function PopperFunctionality() {
    const [show, setShow] = useState(undefined)

    const id = show ? "custom-popper" : undefined

    return (
        <div>
            <Button aria-describedby={id} onMouseOver={(e) => setShow(e.currentTarget)} onMouseOut={() => setShow(undefined)} variant="contained">
                Upload
            </Button>
            <Popper id={id} placement="right-start" open={show} anchorEl={show}>
                <Zoom in={show}>
                    <Typography variant="body1">Popper Content</Typography>
                </Zoom>
            </Popper>
        </div>
    )
}
