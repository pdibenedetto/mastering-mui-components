import { Container } from "@mui/material"

export function ContainerFunctionality() {
    return (
        <Container disableGutters maxWidth={false} sx={{ bgcolor: "red", textAlign: "center" }}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </Container>
    )
}
