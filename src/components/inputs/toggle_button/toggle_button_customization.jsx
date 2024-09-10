import { useState } from "react"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto"

export function ToggleButtonCustomization() {
    const [brightness, setBrightness] = useState(["low"])

    const handleChange = (event, newBrightness) => {
        if (newBrightness.length < 1) return
        setBrightness(newBrightness)
    }

    return (
        <ToggleButtonGroup
            size="large"
            // orientation="vertical"
            color="secondary"
            value={brightness}
            onChange={handleChange}
            aria-label="Select Brightness"
            sx={{
                bgcolor: "lightblue",
                "& > button": {
                    borderColor: "green",
                    padding: 0.25,
                },
                "& .Mui-selected": {
                    bgcolor: "purple",
                },
                "& > button:hover": {
                    bgcolor: "green",
                },
                "& .Mui-selected:hover": {
                    bgcolor: "brown",
                },
                "& > button > svg": {
                    fill: "red",
                    height: "1rem",
                    width: "1rem",
                },
                "& > button.Mui-selected > svg": {
                    fill: "blue",
                },
            }}>
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
