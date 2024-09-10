import { useState } from "react"
import { TextField, InputAdornment } from "@mui/material"
import VisiblityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

export function TextfieldCustomization() {
    const [value, setValue] = useState("")
    const [visible, setVisible] = useState(false)
    return (
        <TextField
            variant="filled"
            label="First Name"
            id="first-name"
            required
            // margin="none"
            // size="small"
            // fullWidth
            type={visible ? "text" : "password"}
            InputProps={{
                endAdornment: (
                    <InputAdornment sx={{ "& > svg": { color: "#000" } }} position="end" onClick={() => setVisible(!visible)}>
                        {visible ? <VisiblityIcon /> : <VisibilityOffIcon />}
                    </InputAdornment>
                ),
                sx: {
                    color: "#000",
                    fontFamily: "Verdana",
                    "&:before": {
                        borderColor: "purple",
                    },
                    "&:not(.Mui-disabled):hover::before": {
                        borderColor: "green",
                    },
                    "&:after": {
                        borderColor: "red",
                    },
                },
            }}
            // multiline
            // minRows={3}
            // maxRows={6}
            // error={value.length < 3}
            helperText={value.length < 3 ? "Name must be at least 3 characters" : ""}
            // inputProps={{readOnly: true}}
            placeholder="Enter your first name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            sx={{
                // "& .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "blue"
                // },
                // "&:hover .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "green"
                // },
                // "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "purple"
                // },
                "& .MuiInputLabel-root": {
                    color: "#000",
                    fontFamily: "Verdana",
                },
                "& .MuiInputLabel-shrink": {
                    color: "orange",
                },
                "& .Mui-focused.MuiInputLabel-shrink": {
                    color: "purple",
                },
                "& ::placeholder": {
                    // Use '& .MuiFilledInput-underline ::placeholder' for filled variant
                    color: "#000",
                    opacity: 1,
                    fontSize: "1rem",
                    fontFamily: "Verdana",
                },
                "& .MuiFormHelperText-root": {
                    color: "#000",
                    fontFamily: "Verdana",
                    fontSize: "0.5rem",
                },
                "& .MuiFilledInput-underline": {
                    bgcolor: "lightblue",
                },
                "& :hover.MuiFilledInput-underline": {
                    bgcolor: "lightgreen",
                },
                // "& .Mui-error.MuiInputLabel-root": {
                //   color: "blue"
                // },
                // "& .Mui-error.MuiInputLabel-asterisk": {
                //   color: "blue"
                // },
                // "& .MuiInputLabel-shrink.Mui-error": {
                //   color: "brown"
                // },
                // "& .MuiInputLabel-shrink .MuiFormLabel-asterisk.Mui-error": {
                //   color: "brown"
                // },
                // "& .Mui-error .MuiOutlinedInput-notchedOutline": {
                //   borderColor: "purple"
                // },
                // "& .Mui-error .MuiOutlinedInput-input": {
                //   color: "green"
                //   // only for disabled class
                //   // "-webkit-text-fill-color": "green"
                // },
                // "& .Mui-error.MuiFormHelperText-root": {
                //   color: "green"
                // }
            }}
        />
    )
}
