import { ClickAwayListener } from "@mui/base"
import { useState, useReducer } from "react"
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction, TextField, Select, MenuItem, Stack } from "@mui/material"
import { Share as ShareIcon, Save as SaveIcon, Print as PrintIcon } from "@mui/icons-material"

const options = ["Option 1", "Option 2", "Option 3"]
const actions = [
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
]

export function ClickAwayListenerFunctionality() {
    const [bgcolor, setBGColor] = useState("red")
    const [showQuickTools, toggleQuickTools] = useReducer((s) => !s, false)
    // exactly the same as above using useReducer
    // const [show, setShow] = useState(false)
    // const toggleShow = () => setShow(!show)

    return (
        <div>
            <ClickAwayListener onClickAway={() => setBGColor("blue")}>
                <Box onClick={() => setBGColor("red")} bgcolor={bgcolor} height="5rem" width="5rem" />
            </ClickAwayListener>

            <ClickAwayListener touchEvent={false} mouseEvent={false} onClickAway={toggleQuickTools}>
                <Stack>
                    <Select>
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField />
                </Stack>
            </ClickAwayListener>
            {showQuickTools && (
                <SpeedDial ariaLabel="quick tools" icon={<SpeedDialIcon />}>
                    {actions.map(({ name, icon }) => (
                        <SpeedDialAction onClick={() => console.log(name)} key={name} icon={icon} />
                    ))}
                </SpeedDial>
            )}
        </div>
    )
}
