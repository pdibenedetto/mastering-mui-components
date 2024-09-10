import { useState } from "react"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@mui/material"
import Battery20Icon from "@mui/icons-material/Battery20"
import BatteryFullIcon from "@mui/icons-material/BatteryFull"
import AppleIcon from "@mui/icons-material/Apple"

export function CheckboxCustomization() {
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
        <FormControl>
            <FormGroup
                row
                sx={{
                    "& .MuiFormControlLabel-label": {
                        color: "red",
                        fontSize: "2rem",
                        fontFamily: "Verdana",
                        "&.Mui-disabled": {
                            color: "#000",
                        },
                    },
                    "& .MuiCheckbox-root": {
                        "& .MuiSvgIcon-root": {
                            fontSize: 40,
                        },
                        color: "red",
                        "&.Mui-disabled": {
                            color: "#000",
                        },
                        "&.Mui-checked:not(.Mui-disabled)": {
                            color: "green",
                        },
                    },
                }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            // disabled
                            // icon={<Battery20Icon />}
                            // checkedIcon={<BatteryFullIcon />}
                            size="small"
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                        />
                    }
                    label="My Value"
                    labelPlacement="end"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            // icon={<Battery20Icon />}
                            // checkedIcon={<BatteryFullIcon />}
                            size="small"
                            color="secondary"
                            checked={checked2}
                            onChange={(event) => setChecked2(event.target.checked)}
                        />
                    }
                    label="My Value"
                    labelPlacement="end"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            // icon={<Battery20Icon />}
                            // checkedIcon={<BatteryFullIcon />}
                            size="small"
                            color="secondary"
                            checked={checked3}
                            onChange={(event) => setChecked3(event.target.checked)}
                        />
                    }
                    label="My Value"
                    labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    )
}
