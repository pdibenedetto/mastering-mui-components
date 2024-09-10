import { createTheme, ThemeProvider, styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const theme = createTheme({
    typography: {
        h6: {
            color: "#FFF",
            fontFamily: "Verdana",
            fontSize: "1rem",
        },
        blueText: {
            color: "blue",
            fontSize: "2rem",
            fontFamily: "Verdana",
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h6: "h3",
                    blueText: "h6",
                },
            },
        },
    },
})

const StyledDiv = styled("div")(({ theme }) => ({
    ...theme.typography.button,
}))

export function TypographyCustomization() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: "red", width: "15rem", height: "2rem" }}>
                <Typography
                    // component="h3"
                    noWrap
                    gutterBottom
                    align="justify"
                    variant="h6"
                    // sx={{color: "#FFF", fontFamily: "Verdana", fontSize: "1rem"}}
                >
                    Hello!Hello!Hello!Hello!Hello!Hello!
                </Typography>
            </div>
            <StyledDiv>Styled div like a button!</StyledDiv>
            <Typography variant="blueText">My blue text!</Typography>
        </ThemeProvider>
    )
}
