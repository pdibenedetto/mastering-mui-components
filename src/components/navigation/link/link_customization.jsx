import { Link } from "@mui/material"

export function LinkCustomization() {
    return (
        <Link
            target="_blank"
            rel="noreferrer"
            underline="hover"
            href="https://www.google.com"
            sx={{ color: "red", fontFamily: "Verdana", fontSize: "2rem" }}>
            Home
        </Link>
    )
}
