import { useState } from "react"
import { Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"

export function RadioFunctionality() {
    const [value, setValue] = useState("first")
    return (
        <FormControl>
            <RadioGroup value={value} onChange={(event) => setValue(event.target.value)}>
                <FormControlLabel
                    value="first"
                    labelPlacement="end"
                    control={<Radio size="small" color="secondary" />}
                    label="My Value"
                    inputProps={{ "aria-label": "first" }}
                />
                <FormControlLabel value="second" control={<Radio size="small" color="secondary" />} label="My Value" />
                <FormControlLabel value="third" control={<Radio size="small" color="secondary" />} label="My Value" />
            </RadioGroup>
        </FormControl>
    )
}
