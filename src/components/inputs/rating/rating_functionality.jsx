import { useState } from "react"
import { Rating } from "@mui/material"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"

export function RatingFunctionality() {
    const [value, setValue] = useState(1)
    const labels = ["Bad", "Okay", "Good", "Great", "Amazing"]
    return (
        <div>
            <Rating
                icon={<BrightnessHighIcon />}
                emptyIcon={<BrightnessHighIcon />}
                name="brightness"
                // precision={0.5}
                max={5}
                // highlightSelectedOnly
                size="large"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                // onChangeActive={(event, newValue) => console.log(`Hovered ${newValue}`)}
            />
            <span>{labels[value - 1]}</span>
        </div>
    )
}
