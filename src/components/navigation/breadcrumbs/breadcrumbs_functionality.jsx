import { Link, Breadcrumbs, Typography } from "@mui/material"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

export function BreadcrumbsFunctionality() {
    return (
        <Breadcrumbs aria-label="current page path" separator={<ArrowRightIcon />} maxItems={2}>
            <Link underline="hover" href="/shopping">
                Shopping
            </Link>
            <Link underline="hover" href="/shopping/apparel">
                Apparel
            </Link>
            <Link underline="hover" href="/shopping/apparel/hats">
                Hats
            </Link>
            <Typography variant="body1">All</Typography>
        </Breadcrumbs>
    )
}
