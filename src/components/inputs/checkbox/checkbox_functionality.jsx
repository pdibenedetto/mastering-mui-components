import { useState } from "react"
import { Checkbox, FormControlLabel, FormGroup, FormControl } from "@mui/material"
import Battery20Icon from "@mui/icons-material/Battery20"
import BatteryFullIcon from "@mui/icons-material/BatteryFull"
import AppleIcon from "@mui/icons-material/Apple"

export function CheckboxFunctionality() {
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
        <FormControl>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            // icon={<Battery20Icon />}
                            // checkedIcon={<BatteryFullIcon />}
                            size="small"
                            disableRipple
                            color="secondary"
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                        />
                    }
                    label=""
                    labelPlacement="end"
                    inputProps={{ "aria-label": "Checkbox 1" }}
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
