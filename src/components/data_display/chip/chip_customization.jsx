import { Chip, Avatar } from "@mui/material"
import { useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete"

export function ChipCustomization() {
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
                    label={chip}
                    sx={{
                        bgcolor: "green",
                        color: "#FFF",
                        fontFamily: "Verdana",
                        fontSize: "1rem",
                        "& .MuiChip-deleteIcon": {
                            fill: "#000",
                            "&:hover": {
                                fill: "#FFF",
                            },
                        },
                        "&:hover": {
                            bgcolor: "darkgreen",
                        },
                        // height: "5rem",
                        // width: "15rem",
                        // borderRadius: 0
                    }}
                    avatar={<Avatar sx={{ bgcolor: "purple" }}>Z</Avatar>}
                    // icon={<DeleteIcon />}
                    // deleteIcon={<DeleteIcon />}
                />
            ))}
        </div>
    )
}
