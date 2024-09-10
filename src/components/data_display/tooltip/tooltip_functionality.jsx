import { useState, forwardRef } from "react"
// eslint-disable-next-line no-unused-vars
import { Tooltip, Button, Fade, Zoom } from "@mui/material"

// eslint-disable-next-line react/display-name
const MyButton = forwardRef((props, ref) => {
    return (
        <button {...props} ref={ref}>
            My Custom Button!
        </button>
    )
})

export function TooltipFunctionality() {
    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Tooltip
                followCursor
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                // enterDelay={2000}
                // leaveDelay={2000}
                // disableTouchListener
                // disableHoverListener
                // disableFocusListener
                // disableInteractive
                // open={open}
                // onOpen={() => setOpen(true)}
                // onClose={() => setOpen(false)}
                arrow
                title="Create a new entry"
                describeChild
                placement="top">
                <span style={{ display: "block" }}>
                    <Button disabled onBlur={() => setOpen(false)} onClick={() => setOpen(true)}>
                        Create
                    </Button>
                </span>
            </Tooltip>

            <Tooltip title="My Custom Button">
                <MyButton />
            </Tooltip>
        </div>
    )
}
