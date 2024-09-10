import { Chip, Avatar } from "@mui/material"
import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"

export function ChipFunctionality() {
    const [chips, setChips] = useState(["First Chip", "Second Chip", "Third Chip"])

    const handleDelete = (chipToRemove) => {
        let newChips = [...chips]
        newChips = newChips.filter((chip) => chip !== chipToRemove)
        setChips(newChips)
    }

    return (
        <div>
            {chips.map((chip) => (
                <Chip
                    key={chip}
                    onDelete={() => handleDelete(chip)}
                    size="small"
                    color="secondary"
                    label={chip}
                    avatar={<Avatar>Z</Avatar>}
                    // icon={<DeleteIcon />}
                    // deleteIcon={<DeleteIcon />}
                />
            ))}
        </div>
    )
}
