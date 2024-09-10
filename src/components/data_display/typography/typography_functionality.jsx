import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledDiv = styled("div")(({ theme }) => ({
    ...theme.typography.button,
}))

export function TypographyFunctionality() {
    return (
        <div>
            <div style={{ backgroundColor: "red", width: "15rem", height: "2rem" }}>
                <Typography component="h3" noWrap gutterBottom align="justify" variant="h6">
                    Hello!Hello!Hello!Hello!Hello!Hello!
                </Typography>
            </div>
            <StyledDiv>Styled div like a button!</StyledDiv>
        </div>
    )
}
