import { Link, Breadcrumbs, Typography } from "@mui/material"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

export function BreadcrumbsCustomization() {
    return (
        <Breadcrumbs
            aria-label="current page path"
            // separator={<ArrowRightIcon />}
            maxItems={2}
            sx={{
                "& .MuiBreadcrumbs-separator": {
                    color: "purple",
                    fontSize: "1.5rem",
                    fontFamily: "Verdana",
                    margin: "0px 15px",
                },
                "& .MuiLink-root": {
                    color: "green",
                    fontSize: "1.5rem",
                    fontFamily: "Verdana",
                },
                "& button[aria-label='Show path']": {
                    bgcolor: "red",
                    height: "1.25rem",
                    width: "2rem",
                    "& > svg": {
                        color: "#FFF",
                        height: "2rem",
                    },
                },
            }}>
            <Link underline="hover" href="/shopping">
                Shopping
            </Link>
            <Link underline="hover" href="/shopping/apparel">
                Apparel
            </Link>
            <Link underline="hover" href="/shopping/apparel/hats">
                Hats
            </Link>
            <Typography variant="body1" sx={{ color: "blue", fontFamily: "Verdana", fontSize: "1.5rem" }}>
                All
            </Typography>
        </Breadcrumbs>
    )
}
