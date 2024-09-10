import { Stack, Chip, Divider, useTheme, useMediaQuery } from "@mui/material"

// direction
// column - main axis = vertical; cross axis = horizontal
// row - main axis = horizontal; cross axis = vertical

// main axis - goes WITH the direction
// cross axis - goes AGAINST the direction

// justifyContent - affects main axis
// alignItems - affects cross axis

export function StackCustomization() {
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.up("sm"))
    return (
        <Stack
            height="25rem"
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            // bgcolor="red"
            // borderRadius={10}
            // zeroMinWidth
            divider={<Divider orientation={matchesSM ? "vertical" : "horizontal"} flexItem />}
            justifyContent={{ xs: "center", sm: "space-between" }}
            alignItems="center">
            <Chip label="Chip 1" />
            <Chip label="Chip 2" />
            <Chip label="Chip 3" />
            <Chip label="Chip 4" />
            <Chip label="Chip 5" />
        </Stack>
    )
}
