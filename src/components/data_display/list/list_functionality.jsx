import { List, ListItem, ListItemButton, ListItemIcon, ListItemAvatar, ListItemText, ListSubheader, IconButton, Avatar } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import PersonIcon from "@mui/icons-material/Person"

export function ListFunctionality() {
    return (
        <List subheader={<ListSubheader sx={{ textAlign: "left" }}>My List</ListSubheader>}>
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
                    <ListItemText primary="My first item!" secondary="An item" />
                </ListItemButton>
            </ListItem>
            <ListItem divider>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="My Account" />
            </ListItem>
            <ListSubheader sx={{ textAlign: "left" }}>Avatar Section</ListSubheader>
            <ListItem selected divider alignItems="center">
                <ListItemAvatar>
                    <Avatar>Z</Avatar>
                </ListItemAvatar>
                <ListItemText primary="My avatar item!" />
            </ListItem>
        </List>
    )
}
