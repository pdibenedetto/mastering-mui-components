import { Divider, Box } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

export function DividerFunctionality() {
    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <Divider textAlign="right" variant="middle">
                My Divider
            </Divider>
            <h2>Start editing to see some magic happen!</h2>
            <Box
                sx={{
                    height: "5rem",
                    width: "5rem",
                    bgcolor: "lightblue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <AddIcon />
                <Divider flexItem variant="middle" orientation="vertical">
                    Z
                </Divider>
                <RemoveIcon />
            </Box>
        </div>
    )
}
