import { Grid, Typography, useMediaQuery } from "@mui/material"

// direction = row
// main axis = horizontal
// cross axis = vertical

// direction = column
// main axis = vertical
// cross axis = horizontal

// justifyContent = main axis
// alignItems = cross axis

export function GridFunctionality() {
    const textContent = "Testing testing testing"
    return (
        <Grid
            container
            sx={{ height: "5rem" }}
            // direction="column"
            justifyContent="space-between"
            alignItems="center">
            <Grid item sm={6} xs={12}>
                <Grid
                    sx={{
                        "& > .MuiGrid-item": {
                            margin: 1,
                        },
                        bgcolor: "red",
                    }}
                    container
                    direction={{ sm: "row", xs: "column" }}>
                    <Grid item>Item 1</Grid>
                    <Grid item>Item 2</Grid>
                    <Grid item>Item 3</Grid>
                </Grid>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Grid container width="25rem">
                    <Grid zeroMinWidth item bgcolor={{ xs: "red", sm: "orange" }} xs>
                        Item 4
                        <Typography title={textContent} noWrap variant="h6">
                            {textContent}
                        </Typography>
                    </Grid>
                    <Grid item bgcolor="blue" xs={8}>
                        Item 5
                    </Grid>
                    <Grid item bgcolor="green" container direction="column" xs>
                        Item 6
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

// 12 Columns = 100%
// 6 = 50%
// 4 = 33%
// 3 = 25%
// 1 = 8%
