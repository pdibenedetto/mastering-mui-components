import { FormControl, FormGroup, FormLabel, FormControlLabel, FormHelperText, Checkbox } from "@mui/material"

export function FormComponentsCustomization() {
    return (
        <FormControl
            sx={{
                "& .MuiFormControlLabel-label": {
                    color: "purple",
                    fontSize: "1.5rem",
                    fontFamily: "Verdana",
                },
                "& .Mui-error": {
                    color: "orange",
                },
                // "& .Mui-disabled": {
                //   color: "#000"
                // },
                // "& .Mui-disabled .MuiFormControlLabel-label": {
                //   color: "#000"
                // }
            }}
            component="fieldset"
            required>
            <FormLabel
                sx={{
                    color: "blue",
                    fontSize: "2rem",
                    fontFamily: "Verdana",
                    "&.Mui-focused": {
                        color: "red",
                    },
                    "&.Mui-disabled": {
                        color: "blue",
                    },
                    // "&.Mui-error": {
                    //   color: "orange"
                    // },
                    // "&.Mui-error .MuiFormLabel-asterisk": {
                    //   color: "orange"
                    // }
                }}>
                My Form
            </FormLabel>
            <FormGroup
                sx={{
                    "& .Mui-disabled .MuiFormControlLabel-label": {
                        color: "lightblue",
                    },
                }}>
                <FormControlLabel control={<Checkbox />} label="My Value 1" />
                <FormControlLabel control={<Checkbox />} label="My Value 2" />
                <FormControlLabel control={<Checkbox />} label="My Value 3" />
                <FormControlLabel control={<Checkbox />} label="My Value 4" />
            </FormGroup>
            <FormHelperText
                sx={{
                    color: "green",
                    fontFamily: "Verdana",
                    "&.Mui-disabled": {
                        color: "purple",
                    },
                    // "&.Mui-error": {
                    //   color: "yellow"
                    // }
                }}>
                Please select a value
            </FormHelperText>
        </FormControl>
    )
}
