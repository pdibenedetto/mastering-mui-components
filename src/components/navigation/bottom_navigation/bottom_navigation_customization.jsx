import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCardIcon from "@mui/icons-material/AddCard"
import AddLocationIcon from "@mui/icons-material/AddLocation"
import AddIcCallIcon from "@mui/icons-material/AddIcCall"
import { useState } from "react"

export function BottomNavigationCustomization() {
    const [value, setValue] = useState("balance")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
                sx={{
                    bgcolor: "red",
                    height: "8rem",
                    "& button:not(.Mui-selected) > svg": {
                        color: "orange",
                        height: "2rem",
                        width: "2rem",
                    },
                    "& button:not(.Mui-selected) > .MuiBottomNavigationAction-label": {
                        color: "orange",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                    },
                    "& button.Mui-selected > svg": {
                        color: "#000",
                        height: "3rem",
                        width: "3rem",
                    },
                    "& button.Mui-selected > .MuiBottomNavigationAction-label": {
                        color: "#000",
                        fontFamily: "Verdana",
                        fontSize: "1.25rem",
                    },
                }}
                showLabels
                value={value}
                onChange={handleChange}>
                <BottomNavigationAction disableRipple label="Balance" value="balance" icon={<AccountBalanceIcon />} />
                <BottomNavigationAction disableRipple label="Account" value="account" icon={<AccountCircleIcon />} />
                <BottomNavigationAction disableRipple label="Card" value="card" icon={<AddCardIcon />} />
                <BottomNavigationAction disableRipple label="Location" value="location" icon={<AddLocationIcon />} />
                <BottomNavigationAction disableRipple label="Phone" value="phone" icon={<AddIcCallIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
