import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export function FabCustomization() {
    return (
        <Fab
            size="small"
            sx={{
                bgcolor: "green",
                color: "#FFF",
                fontSize: "2rem",
                fontFamily: "Verdana",
                "&:hover": {
                    bgcolor: "purple",
                },
                "&.Mui-disabled": {
                    bgcolor: "#000",
                    color: "blue",
                },
            }}
            variant="extended"
            disableRipple>
            <AddIcon />
            New User
        </Fab>
    )
}
