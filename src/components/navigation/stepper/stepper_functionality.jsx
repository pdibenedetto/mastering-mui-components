import { useState } from "react"
import { Stepper, Step, StepLabel, StepContent, StepButton, Button, MobileStepper } from "@mui/material"

const steps = ["Enter your name", "Enter your email", "Enter a password"]
const descriptions = [
    "This is where you should enter your name",
    "This is your email, please enter a valid email!",
    "This is where your password goes, please make it a strong one!",
]

export function StepperFunctionality() {
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
        <div>
            <Stepper
                orientation="vertical"
                // alternativeLabel
                // nonLinear
                activeStep={active}
                sx={{ marginBottom: "5rem" }}>
                {steps.map((label, index) => (
                    <Step completed={completed[index]} key={label}>
                        <StepButton onClick={() => handleClick(index)} optional={index === 0 ? "Optional" : false}>
                            <StepLabel error={index === 1}>{label}</StepLabel>
                        </StepButton>
                        <StepContent TransitionProps={{ unmountOnExit: false }}>{descriptions[index]}</StepContent>
                    </Step>
                ))}
            </Stepper>
            <MobileStepper
                variant="progress"
                steps={steps.length}
                activeStep={active}
                nextButton={nextButton}
                backButton={backButton}
                position="static"
            />
            <Button onClick={handleComplete} variant="outlined" sx={{ marginLeft: "3rem" }}>
                Mark as completed
            </Button>
        </div>
    )
}
