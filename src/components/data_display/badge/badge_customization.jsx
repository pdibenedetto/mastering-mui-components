import { Avatar, Badge } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

export function BadgeCustomization() {
    return (
        <Badge
            overlap="circular"
            // variant="dot"
            showZero
            max={49}
            badgeContent={<AddIcon />}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            sx={{
                "& .MuiBadge-badge": {
                    bgcolor: "red",
                    borderRadius: 3,
                    color: "black",
                    fontFamily: "Verdana",
                    fontSize: "1rem",
                    "& > svg": {
                        height: "1rem",
                        width: "1rem",
                    },
                    // marginLeft: "0.85rem",
                    // marginBottom: "0.85rem"
                    // height: "3rem",
                    // width: "3rem"
                },
            }}>
            <Avatar aria-label="99 notifications" />
        </Badge>
    )
}
