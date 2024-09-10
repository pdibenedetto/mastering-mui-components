import { Slider, Box } from "@mui/material"
import { useState } from "react"

export function SliderCustomization() {
    const [value, setValue] = useState([10, 30])
    const marks = [
        { label: "very dissatisfied", value: 10 },
        { label: "dissatisfied", value: 30 },
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
        <Box sx={{ height: "30rem", width: "30rem" }}>
            <Slider
                sx={{
                    "&.Mui-disabled": {
                        color: "lightblue",
                    },
                    '& input[type="range"]': {
                        WebkitAppearance: "slider-vertical",
                    },
                    color: "red",
                    "&:not(.Mui-disabled)": {
                        height: 20,
                    },
                    "&:not(.Mui-disabled) .MuiSlider-rail": {
                        color: "#000",
                        opacity: 1,
                        height: 10,
                    },
                    "&:not(.Mui-disabled) .MuiSlider-mark": {
                        borderRadius: 0,
                        height: 10,
                        width: 5,
                    },
                    "&:not(.Mui-disabled) .MuiSlider-markActive": {
                        bgcolor: "#000",
                        height: 22,
                    },
                    "& :not(.MuiSlider-markActive).MuiSlider-mark": {
                        bgcolor: "#FFF",
                    },
                    "& :not(.Mui-disabled).MuiSlider-thumb[data-index='1']": {
                        bgcolor: "purple",
                        height: 50,
                        width: 50,
                    },
                    "& :not(.Mui-disabled).MuiSlider-thumb[data-index='0']": {
                        bgcolor: "green",
                        height: 50,
                        width: 50,
                    },
                    "& .Mui-disabled.MuiSlider-thumb": {
                        bgcolor: "#000",
                    },
                    "& .MuiSlider-markLabelActive": {
                        color: "green",
                        fontFamily: "Verdana",
                    },
                    "& :not(.MuiSlider-markLabelActive).MuiSlider-markLabel": {
                        color: "purple",
                        fontFamily: "Verdana",
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
