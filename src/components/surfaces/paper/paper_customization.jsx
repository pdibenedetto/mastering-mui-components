import { Paper } from "@mui/material"

export function PaperCustomization() {
    return (
        <Paper
            sx={{
                padding: 4,
                bgcolor: "green",
                color: "#FFF",
                fontFamily: "Verdana",
                fontSize: "1rem",
                maxWidth: 600,
                minWidth: 300,
                height: "10rem",
            }}
            elevation={24}
            variant="elevation"
            square>
            This is my paper component! It's just a surface to hold other elements, basically like a fancy div with extra features
        </Paper>
    )
}
