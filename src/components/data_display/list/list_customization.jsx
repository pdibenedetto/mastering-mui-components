import { List, ListItem, ListItemButton, ListItemIcon, ListItemAvatar, ListItemText, ListSubheader, IconButton, Avatar, Box } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import PersonIcon from "@mui/icons-material/Person"

export function ListCustomization() {
    return (
        <Box
            sx={{
                width: 350,
                bgcolor: "#121212",
                "& .MuiListSubheader-root": {
                    bgcolor: "#121212",
                    color: "#FFF",
                    fontFamily: "Verdana",
                    fontSize: "1rem",
                },
                "& .MuiListItemText-primary": {
                    color: "#FFF",
                    fontFamily: "Verdana",
                    fontSize: "1.25rem",
                },
                "& .MuiListItemText-secondary": {
                    color: "green",
                    fontFamily: "Verdana",
                    fontSize: "0.5rem",
                },
                "& .MuiListItemIcon-root > svg": {
                    fill: "green",
                    height: "3rem",
                    width: "3rem",
                },
                "& .MuiListItem-divider": {
                    borderColor: "#FFF",
                    borderWidth: 2,
                },
                "& .MuiAvatar-root": {
                    bgcolor: "green",
                    color: "#000",
                    fontSize: "2rem",
                    fontFamily: "Verdana",
                },
                "& .MuiIconButton-root > svg": {
                    fill: "#FFF",
                    fontSize: 40,
                },
                "& .MuiTouchRipple-ripple": {
                    color: "red",
                },
                "& .Mui-selected": {
                    bgcolor: "rgba(220, 20, 60, 0.25)",
                },
            }}>
            <List disablePadding subheader={<ListSubheader sx={{ textAlign: "left" }}>My List</ListSubheader>}>
                <ListItem
                    disableGutters
                    disablePadding
                    divider
                    secondaryAction={
                        <IconButton onClick={() => console.log("Clicked secondary")}>
                            <AddIcon />
                        </IconButton>
                    }>
                    <ListItemButton onClick={() => console.log("Clicked primary!")}>
                        <ListItemText inset primary="My first item!" secondary="An item" />
                    </ListItemButton>
                </ListItem>
                <ListItem divider sx={{ paddingLeft: 1.5 }}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ marginLeft: 0.5 }} primary="My Account" />
                </ListItem>
                <ListSubheader sx={{ textAlign: "left" }}>Avatar Section</ListSubheader>
                <ListItem selected divider alignItems="center">
                    <ListItemAvatar>
                        <Avatar>Z</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="My avatar item!" />
                </ListItem>
            </List>
        </Box>
    )
}
