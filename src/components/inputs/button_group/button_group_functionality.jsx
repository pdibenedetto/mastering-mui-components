import { ButtonGroup, Button } from "@mui/material"

export function ButtonGroupFunctionality() {
    return (
        <ButtonGroup color="error" size="large" variant="contained" disableElevation disableRipple>
            <Button>First</Button>
            <ButtonGroup orientation="vertical">
                <Button>2</Button>
                <Button>2.5</Button>
            </ButtonGroup>
            <Button>Third</Button>
        </ButtonGroup>
    )
}
