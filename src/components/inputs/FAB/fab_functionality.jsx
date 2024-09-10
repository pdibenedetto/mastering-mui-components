import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export function FabFunctionality() {
    return (
        <Fab size="small" color="secondary" variant="extended" disableRipple>
            <AddIcon />
            New User
        </Fab>
    )
}
