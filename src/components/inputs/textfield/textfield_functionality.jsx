import { useState } from "react"
import { TextField, InputAdornment } from "@mui/material"
import VisiblityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

export function TextfieldFunctionality() {
    const [value, setValue] = useState("")
    const [visible, setVisible] = useState(false)
    return (
        <TextField
            label="First Name"
            color="secondary"
            id="first-name"
            required
            // margin="none"
            // size="small"
            // fullWidth
            type={visible ? "text" : "password"}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" onClick={() => setVisible(!visible)}>
                        {visible ? <VisiblityIcon /> : <VisibilityOffIcon />}
                    </InputAdornment>
                ),
            }}
            // multiline
            // minRows={3}
            // maxRows={6}
            error={value.length < 3}
            helperText={value.length < 3 ? "Name must be at least 3 characters" : ""}
            // inputProps={{readOnly: true}}
            placeholder="Enter your first name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}
