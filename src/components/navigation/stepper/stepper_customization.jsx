import { useState } from "react"
import { Stepper, Step, StepLabel, StepContent, StepButton, Button, MobileStepper, StepConnector, Typography } from "@mui/material"
import AssignmentIcon from "@mui/icons-material/Assignment"
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import WarningIcon from "@mui/icons-material/Warning"

const steps = ["Enter your name", "Enter your email", "Enter a password"]
const descriptions = [
    "This is where you should enter your name",
    "This is your email, please enter a valid email!",
    "This is where your password goes, please make it a strong one!",
]

const icons = [<AssignmentIcon key={1} />, <AssignmentIndIcon key={2} />, <AssignmentTurnedInIcon key={3} />]

const connectorOnlyStyles = { height: "5rem" }

const connectorStyles = {
    borderColor: "red",
    borderWidth: 5,
}
const CustomConnector = (
    <StepConnector
        sx={{
            "& > .MuiStepConnector-line": {
                ...connectorStyles,
                ...connectorOnlyStyles,
            },
        }}
    />
)

export function StepperCustomization() {
    const [active, setActive] = useState(0)
    const [completed, setCompleted] = useState({})

    const handleNext = () => setActive((prev) => prev + 1)
    const handlePrevious = () => setActive((prev) => prev - 1)
    const handleComplete = () => setCompleted((prev) => ({ ...prev, [active]: true }))
    const handleClick = (index) => setActive(index)

    const backButton = (
        <Button disabled={active === 0} onClick={handlePrevious} variant="contained" sx={{ marginRight: "3rem" }}>
            Back
        </Button>
    )

    const nextButton = (
        <Button variant="contained" onClick={handleNext} disabled={active === steps.length}>
            {active >= steps.length - 1 ? "Complete" : "Forward"}
        </Button>
    )

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Stepper
                orientation="vertical"
                // connector={CustomConnector}
                connector={<WarningIcon />}
                // alternativeLabel
                // nonLinear
                activeStep={active}
                sx={{ marginBottom: "5rem" }}>
                {steps.map((label, index) => (
                    <Step
                        completed={completed[index]}
                        key={label}
                        sx={{
                            "&.Mui-completed > * > * > * > svg": {
                                fill: "#000",
                            },
                        }}>
                        <StepButton
                            onClick={() => handleClick(index)}
                            optional={index === 0 ? <Typography variant="caption">Optional</Typography> : false}
                            icon={completed[index] && icons[index]}
                            sx={{
                                "& * > * > svg": {
                                    fill: "red",
                                    height: "3rem",
                                    width: "3rem",
                                    text: {
                                        fill: "#000",
                                        fontFamily: "Verdana",
                                        fontWeight: "bold",
                                    },
                                },
                            }}>
                            <StepLabel sx={{ "& * > svg": {} }} error={index === 1}>
                                <Typography variant="h6">{label}</Typography>
                            </StepLabel>
                        </StepButton>
                        <StepContent sx={{ ...connectorStyles, border: 0 }} TransitionProps={{ unmountOnExit: false }}>
                            {descriptions[index]}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <MobileStepper
                variant="dots"
                steps={steps.length}
                activeStep={active}
                nextButton={nextButton}
                backButton={backButton}
                position="static"
                sx={{
                    color: "red",
                    fontSize: "1.5rem",
                    fontFamily: "Verdana",
                    fontWeight: "bold",
                    "& > * > .MuiMobileStepper-dot": {
                        height: "1.5rem",
                        width: "1.5rem",
                        margin: "1rem",
                        "&.MuiMobileStepper-dotActive": {
                            bgcolor: "red",
                        },
                        "&:not(.MuiMobileStepper-dotActive)": {
                            bgcolor: "green",
                        },
                    },
                }}
                LinearProgressProps={{ sx: { bgcolor: "green" } }}
            />
            <Button onClick={handleComplete} variant="outlined" sx={{ marginLeft: "3rem" }}>
                Mark as completed
            </Button>
        </div>
    )
}
