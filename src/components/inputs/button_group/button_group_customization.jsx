import { ButtonGroup, Button } from "@mui/material"

export function ButtonGroupCustomization() {
    return (
        <ButtonGroup
            sx={{
                "& > button": {
                    color: "#000",
                    fontSize: "2rem",
                    borderColor: "#000",
                    fontFamily: "Verdana",
                    "&:hover": {
                        bgcolor: "lightgreen",
                        borderColor: "red",
                    },
                },
                "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                    borderColor: "#000",
                    borderWidth: 3,
                },
            }}
            size="large"
            variant="text"
            disableElevation
            disableRipple>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
        </ButtonGroup>
    )
}
