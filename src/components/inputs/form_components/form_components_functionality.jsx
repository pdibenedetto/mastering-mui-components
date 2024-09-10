import { FormControl, FormGroup, FormLabel, FormControlLabel, FormHelperText, Checkbox } from "@mui/material"

export function FormComponentsFunctionality() {
    return (
        <FormControl component="fieldset" required>
            <FormLabel>My Form</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="My Value 1" />
                <FormControlLabel control={<Checkbox />} label="My Value 2" />
                <FormControlLabel control={<Checkbox />} label="My Value 3" />
                <FormControlLabel control={<Checkbox />} label="My Value 4" />
            </FormGroup>
            <FormHelperText>Please select a value</FormHelperText>
        </FormControl>
    )
}
