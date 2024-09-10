import { Menu, MenuItem, Button, Avatar, Zoom, Typography } from "@mui/material"
import { useState } from "react"
import AppleIcon from "@mui/icons-material/Apple"

export function MenuCustomization() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selected, setSelected] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleSelect = (option) => {
        setSelected(selected === option ? null : option)
        handleClose()
    }

    const option3Text =
        "Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3Option 3"

    return (
        <div>
            <Button onClick={handleClick}>Open Menu</Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                // TransitionComponent={Zoom}
                MenuListProps={{ disablePadding: true }}
                PaperProps={{
                    sx: {
                        maxHeight: 100,
                        maxWidth: 100,
                        bgcolor: "green",
                        "& .MuiMenuItem-root, .MuiTypography-root": {
                            color: "#FFF",
                            fontFamily: "Verdana",
                            fontSize: "1.5rem",
                            borderColor: "#000",
                            borderWidth: 2,
                        },
                        "& .MuiMenuItem-root.Mui-selected": {
                            bgcolor: "darkgreen",
                            color: "#000",
                        },
                        "& .MuiMenuItem-root.Mui-disabled": {
                            bgcolor: "#343434",
                            color: "#000",
                            opacity: 1,
                        },
                    },
                }}>
                <MenuItem selected={selected === "option 1"} divider onClick={() => handleSelect("option 1")}>
                    <Avatar sx={{ height: "2rem", width: "2rem", marginLeft: "-0.25rem" }}>Z</Avatar>
                </MenuItem>
                <MenuItem selected={selected === "option 2"} divider onClick={() => handleSelect("option 2")}>
                    <AppleIcon sx={{ height: "2.25rem", width: "2.25rem", marginLeft: "-0.5rem" }} />
                </MenuItem>
                <MenuItem selected={selected === "option 3"} divider disabled onClick={() => handleSelect("option 3")}>
                    <Typography title={option3Text} noWrap>
                        {option3Text}
                    </Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}
