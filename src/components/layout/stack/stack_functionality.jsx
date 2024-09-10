import { Stack, Chip, Divider } from "@mui/material"

// direction
// column - main axis = vertical; cross axis = horizontal
// row - main axis = horizontal; cross axis = vertical

// main axis - goes WITH the direction
// cross axis - goes AGAINST the direction

// justifyContent - affects main axis
// alignItems - affects cross axis

export function StackFunctionality() {
    return (
        <Stack
            height="25rem"
            direction="column"
            spacing={2}
            // zeroMinWidth
            divider={<Divider flexItem />}
            justifyContent="space-between"
            alignItems="center">
            <Chip label="Chip 1" />
            <Chip label="Chip 2" />
            <Chip label="Chip 3" />
            <Chip label="Chip 4" />
            <Chip label="Chip 5" />
        </Stack>
    )
}
