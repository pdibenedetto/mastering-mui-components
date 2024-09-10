import { useReducer } from "react"
import { ScopedCssBaseline, CssBaseline, Box, Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material"

let theme = createTheme({
    typography: {
        fontWeightBold: 900,
        body1: {
            fontFamily: "Verdana",
            fontSize: "1.5rem",
            letterSpacing: 10,
            color: "green",
        },
    },
    palette: {
        mode: "light",
    },
})

theme = createTheme(theme, {
    palette: {
        background: {
            default: theme.palette.mode === "dark" ? "purple" : "orange",
        },
    },
})

const boxStyles = {
    color: "#FFF",
    bgcolor: "#000",
    height: "100px",
    width: "100px",
    border: "2px solid #FFF",
    padding: "16px",
}

export function CssBaselineCustomization() {
    const [show, toggleShow] = useReducer((s) => !s, false)
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: "red" }}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <Button onClick={toggleShow} variant="contained">
                    Toggle CssBaseline
                </Button>
                <ChildComponent />
                {show && <CssBaseline enableColorScheme />}
            </div>
        </ThemeProvider>
    )
}

function ChildComponent() {
    return (
        <ScopedCssBaseline enableColorScheme>
            <strong>Example Strong</strong>
            <b>Example B</b>
            <div>Example plaintext</div>
            <Box sx={boxStyles}>Testing Text</Box>
        </ScopedCssBaseline>
    )
}

// content-box
// final height/width = height/width + padding + borders
// height = 100px
// padding = 16px (on top and bottom)
// border = 2px (on top and bottom)
// final element height = 136px
// content height = 100px

// border-box
// final height/width = height/width
// height = 100px
// padding = 16px (on top and bottom)
// border = 2px (on top and bottom)
// final element height = 100px
// content height = 64px
