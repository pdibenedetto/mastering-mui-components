import { Switch, FormControlLabel } from "@mui/material"
import { useState } from "react"

export function SwitchCustomization() {
    const [checked, setChecked] = useState(false)
    return (
        <FormControlLabel
            sx={{
                "& .MuiFormControlLabel-label": {
                    color: "purple",
                    fontSize: "2rem",
                    fontFamily: "Verdana",
                    marginLeft: "1rem",
                },
            }}
            control={
                <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ "aria-label": "My Switch" }}
                    sx={{
                        "& :not(.Mui-checked).MuiSwitch-switchBase": {
                            color: "red",
                            transform: "translateX(-20px)",
                        },
                        "& .MuiSwitch-track": {
                            bgcolor: "blue",
                            borderRadius: 50,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "purple",
                            transform: "translateX(50px)",
                        },
                        "& .Mui-checked + .MuiSwitch-track": {
                            bgcolor: "green !important",
                        },
                        height: 75,
                        width: 110,
                        overflow: "visible",
                        "& .MuiSwitch-thumb": {
                            height: 60,
                            width: 60,
                        },
                    }}
                />
            }
            label="My Switch"
        />
    )
}
