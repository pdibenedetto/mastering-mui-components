import { Slider, Box } from "@mui/material"
import { useState } from "react"

export function SliderFunctionality() {
    const [value, setValue] = useState([10, 30])
    const marks = [
        { label: "very dissatisfied", value: 10 },
        { label: "neutral", value: 50 },
        { label: "very satisfied", value: 90 },
    ]

    //Only for vertical sliders
    const preventHorizontalKeyboardNavigation = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault()
        }
    }

    return (
        <Box sx={{ height: "30rem" }}>
            <Slider
                sx={{
                    '& input[type="range"]': {
                        WebkitAppearance: "slider-vertical",
                    },
                }}
                onKeyDown={preventHorizontalKeyboardNavigation}
                // orientation="vertical"
                valueLabelDisplay="auto"
                aira-label="Product review feedback"
                getAriaValueText={(value) => `${value}% Satisfied`}
                // scale={(value) => (2 * value)}
                step={10}
                // track={false}
                disableSwap
                color="secondary"
                min={10}
                max={90}
                marks={marks}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            />
        </Box>
    )
}
