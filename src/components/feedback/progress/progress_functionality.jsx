import { CircularProgress, LinearProgress, Button } from "@mui/material"
import { useState } from "react"

export function ProgressFunctionality() {
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <CircularProgress value={25} variant="determinate" size={"10rem"} thickness={10} disableShrink />
            <LinearProgress valueBuffer={80} value={60} variant="buffer" />
            <Button variant="contained" onClick={() => setLoading(!loading)}>
                {loading ? <CircularProgress color="secondary" /> : "Click me!"}
            </Button>
        </div>
    )
}
