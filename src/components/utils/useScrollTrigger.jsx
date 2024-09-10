import { Box, Typography, Paper, Stack, Fade, useScrollTrigger, Slide, AppBar, Toolbar } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { TransitionGroup } from "react-transition-group"
import { useRef } from "react"

export function useScrollTriggerFunctionality() {
    const paperRef = useRef()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 500,
        target: paperRef.current,
    })

    return (
        <div className="App" style={{ height: "500vh" }}>
            <Slide in={!trigger} appear={false}>
                <AppBar>
                    <Toolbar />
                </AppBar>
            </Slide>

            <Demo />

            <Paper ref={paperRef} sx={{ bgcolor: "red", mt: "500px", height: 2000, width: "100%" }}>
                My text
            </Paper>
        </div>
    )
}

const papers = ["red", "green", "blue"]

function Demo() {
    const { ref: h4TextRef, inView: h4TextInView } = useInView({
        // threshold - value between 0 and 1 representing percentage scrolled
        // delay - number of milliseconds
    })

    return (
        <Stack>
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Typography textAlign="center" variant="h2">
                    Welcome to our landing page
                </Typography>
            </Box>
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Stack>
                    <Fade in={h4TextInView} timeout={{ enter: 2000, exit: 0 }}>
                        <Typography ref={h4TextRef} variant="h4" textAlign="center">
                            This content will fade in as you scroll down the page
                        </Typography>
                    </Fade>
                    <Stack mt={2} direction="horizontal" justifyContent="center" gap={2}>
                        <TransitionGroup component={null}>
                            {h4TextInView &&
                                papers.map((bgcolor, index) => (
                                    <Fade
                                        key={bgcolor}
                                        timeout={{ enter: 2000, exit: 0 }}
                                        style={{
                                            transitionDelay: h4TextInView ? 500 * (index + 1) : 0,
                                        }}>
                                        <Paper sx={{ height: "5rem", width: "5rem", bgcolor }} />
                                    </Fade>
                                ))}
                        </TransitionGroup>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}
