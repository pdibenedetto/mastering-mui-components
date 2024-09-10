import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCardIcon from "@mui/icons-material/AddCard"
import AddLocationIcon from "@mui/icons-material/AddLocation"
import AddIcCallIcon from "@mui/icons-material/AddIcCall"
import { useState } from "react"

export function BottomNavigationFunctionality() {
    const [value, setValue] = useState("balance")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Balance" value="balance" icon={<AccountBalanceIcon />} />
            <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Card" value="card" icon={<AddCardIcon />} />
            <BottomNavigationAction label="Location" value="location" icon={<AddLocationIcon />} />
            <BottomNavigationAction label="Phone" value="phone" icon={<AddIcCallIcon />} />
        </BottomNavigation>
    )
}
