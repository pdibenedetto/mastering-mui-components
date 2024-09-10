import { useState } from "react"
import { Select, MenuItem, InputLabel, FormControl, FormHelperText, ListSubheader } from "@mui/material"
import AppleIcon from "@mui/icons-material/Apple"

export function SelectCustomization() {
    const [value, setValue] = useState("")
    const options = ["first", "second", "third", "fourth", "fifth"]
    return (
        <FormControl sx={{ minWidth: 150 }}>
            <InputLabel
                sx={{
                    color: "#000",
                    fontFamily: "Verdana",
                    "&.Mui-focused": {
                        color: "green",
                    },
                    "&:not(.Mui-focused).MuiInputLabel-shrink": {
                        color: "brown",
                    },
                    "&.Mui-error": {
                        color: "#000",
                    },
                    "&.Mui-disabled": {
                        color: "#FFF",
                    },
                }}
                id="my-select">
                My Select
            </InputLabel>
            <Select
                label="My Select"
                variant="outlined"
                labelId="my-select"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                IconComponent={AppleIcon}
                MenuProps={{
                    PaperProps: { sx: { bgcolor: "purple", marginTop: "0.25rem" } },
                }}
                sx={{
                    // Variant - standard or filled
                    // "&:before": {
                    //   borderColor: "purple"
                    // },
                    // "&:not(.Mui-disabled):hover::before": {
                    //   borderColor: "brown"
                    // },
                    // "&:after": {
                    //   borderColor: "green"
                    // },
                    // bgcolor: "lightblue",
                    // "&:hover": {
                    //   bgcolor: "lightgreen"
                    // }

                    // Variant - outlined
                    bgcolor: "lightblue",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "red",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "blue",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                    },
                    "& .MuiInputBase-input": {
                        height: "4rem",
                    },
                    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#000",
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: "yellow",
                    },
                    "&.Mui-disabled": {
                        bgcolor: "red",
                    },
                    "& > svg": {
                        fill: "orange",
                    },
                }}>
                <ListSubheader sx={{ bgcolor: "purple", color: "#FFF", fontFamily: "Verdana" }}>My Options</ListSubheader>
                {options.map((option) => (
                    <MenuItem sx={{ fontSize: "1.5rem", fontFamily: "Verdana", color: "#FFF" }} key={option} value={option}>
                        ${option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText
                sx={{
                    color: "blue",
                    fontFamily: "Verdana",
                    "&.Mui-error": {
                        color: "#000",
                    },
                    "&.Mui-disabled": {
                        color: "orange",
                    },
                }}>
                Select one
            </FormHelperText>
        </FormControl>
    )
}
