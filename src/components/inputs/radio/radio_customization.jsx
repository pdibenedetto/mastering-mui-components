import { useState } from "react"
import { Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"

export function RadioCustomization() {
    const [value, setValue] = useState("first")
    return (
        <FormControl>
            <RadioGroup
                value={value}
                onChange={(event) => setValue(event.target.value)}
                sx={{
                    "& .MuiFormControlLabel-label": {
                        color: "red",
                        fontSize: "2rem",
                        fontFamily: "Verdana",
                        "&.Mui-disabled": {
                            color: "#000",
                        },
                    },
                    "& .MuiRadio-root": {
                        "& .MuiSvgIcon-root": {
                            fontSize: 40,
                        },
                        color: "red",
                        "&.Mui-disabled": {
                            color: "blue",
                        },
                        "&.Mui-checked:not(.Mui-disabled)": {
                            color: "green",
                        },
                    },
                }}>
                <FormControlLabel value="first" labelPlacement="end" control={<Radio />} label="My Value" />
                <FormControlLabel value="second" control={<Radio size="small" color="secondary" />} label="My Value" />
                <FormControlLabel value="third" control={<Radio size="small" color="secondary" />} label="My Value" />
            </RadioGroup>
        </FormControl>
    )
}
