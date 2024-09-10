import { Paper, Grid, useMediaQuery, useTheme } from "@mui/material"

const items = ["red", "green", "blue"]

// theme.breakpoints.between:
// inclusive at the start
// exclusive at the end

export function useMediaQueryFunctionality() {
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.between("sm", "lg"), {
        noSsr: true,
    })
    return (
        <div className="App">
            <h2 style={{ color: matchesMD ? "green" : "blue" }}>Start editing to see some magic happen!</h2>
            {!matchesMD && <div>I'm up here!</div>}
            <Grid container justifyContent="space-around" direction={matchesMD ? "column" : "row"}>
                {items.map((item) => (
                    <Grid item key={item}>
                        <Paper
                            sx={{
                                height: "5rem",
                                width: "5rem",
                                bgcolor: { xs: item, lg: "#000" },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
            {matchesMD && <div>I'm down here!</div>}
        </div>
    )
}
