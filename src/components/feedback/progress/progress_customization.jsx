import { CircularProgress, LinearProgress, Button, Box } from "@mui/material"
import { useState } from "react"

export function ProgressCustomization() {
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <CircularProgress value={25} variant="determinate" size={"10rem"} thickness={10} disableShrink />
            <LinearProgress valueBuffer={80} value={60} variant="buffer" />
            <Button variant="contained" onClick={() => setLoading(!loading)}>
                {loading ? <CircularProgress color="secondary" /> : "Click me!"}
            </Button>
            <br />
            <br />
            <CircularProgress
                sx={{
                    color: "green",
                    animationDuration: "10s",
                    "& .MuiCircularProgress-circle": {
                        animationDuration: "10s",
                    },
                }}
            />
            <br />
            <br />
            <Box sx={{ width: "25rem" }}>
                <LinearProgress
                    sx={{
                        height: "1rem",
                        bgcolor: "lightgreen",
                        "& .MuiLinearProgress-bar": {
                            bgcolor: "darkgreen",
                            animationDuration: "5s",
                        },
                    }}
                />
            </Box>
        </div>
    )
}
