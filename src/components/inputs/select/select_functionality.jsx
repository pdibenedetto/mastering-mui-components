import { useState } from "react"
import { Select, MenuItem, InputLabel, FormControl, FormHelperText, ListSubheader, NativeSelect } from "@mui/material"

export function SelectFunctionality() {
    const [value, setValue] = useState("")
    const options = ["first", "second", "third", "fourth", "fifth"]
    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel htmlFor="my-select">My Select</InputLabel>
            <Select
                label="My Select"
                labelId="my-select"
                renderValue={(value) => `${value} option`}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
                <ListSubheader>My Options</ListSubheader>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <NativeSelect label="My Select" inputProps={{ id: "my-select" }} value={value} onChange={(event) => setValue(event.target.value)}>
                <optgroup label="My Options">
                    {options.map((option) => (
                        <option key={option} value={option}>
                            ${option}
                        </option>
                    ))}
                </optgroup>
            </NativeSelect>
            <FormHelperText>Select one</FormHelperText>
        </FormControl>
    )
}
