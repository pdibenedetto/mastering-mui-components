import { NoSsr, Typography, Button } from "@mui/material"

function ButtonMania() {
    return Array.from(new Array(5000)).map((_, index) => (
        <Button key={index} variant="contained">
            mania
        </Button>
    ))
}

export function NoSsrFunctionality() {
    return (
        <NoSsr defer fallback={<Typography>Loading...</Typography>}>
            <Typography variant="h4">Clinet-side only content</Typography>
            <ButtonMania />
        </NoSsr>
    )
}
