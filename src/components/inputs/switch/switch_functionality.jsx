import { Switch, FormControlLabel } from "@mui/material"
import { useState } from "react"

export function SwitchFunctionality() {
    const [checked, setChecked] = useState(false)
    return (
        <FormControlLabel
            control={
                <Switch
                    color="secondary"
                    size="large"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ "aria-label": "My Switch" }}
                />
            }
            label="My Switch"
        />
    )
}
