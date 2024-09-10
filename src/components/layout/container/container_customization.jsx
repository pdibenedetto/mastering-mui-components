import { Container } from "@mui/material"

export function ContainerCustomization() {
    return (
        <Container
            disableGutters
            component="main"
            role="main"
            maxWidth={false}
            sx={{
                bgcolor: "red",
                textAlign: "center",
                fontFamily: "Verdana",
                padding: "1rem",
            }}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </Container>
    )
}
