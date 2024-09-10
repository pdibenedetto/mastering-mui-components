import { useState } from "react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto"

export function ToggleButtonFunctionality() {
    const [brightness, setBrightness] = useState(["low"])

    const handleChange = (event, newBrightness) => {
        if (newBrightness.length < 2) return
        setBrightness(newBrightness)
    }

    return (
        <ToggleButtonGroup
            size="large"
            // orientation="vertical"
            color="secondary"
            value={brightness}
            onChange={handleChange}
            aria-label="Select Brightness">
            <ToggleButton aria-label="Low Brightness" value="low">
                <BrightnessLowIcon />
            </ToggleButton>
            <ToggleButton aria-label="High Brightness" value="high">
                <BrightnessHighIcon />
            </ToggleButton>
            <ToggleButton aria-label="Auto Brightness" value="auto">
                <BrightnessAutoIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
