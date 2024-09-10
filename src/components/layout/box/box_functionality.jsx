import { Box } from "@mui/material"

export function BoxFunctionality() {
    return (
        <div>
            <Box marginBottom={(theme) => theme.spacing(13)} color="secondary.main" fontFamily="Verdana" fontSize="2rem">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </Box>
            <div>test content</div>
        </div>
    )
}
