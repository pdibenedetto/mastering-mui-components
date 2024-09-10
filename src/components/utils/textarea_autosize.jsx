import { TextareaAutosize, Box } from "@mui/material"
import { useState } from "react"

export function TextareaAutosizeFunctionality() {
    const [value, setValue] = useState("My Name")
    console.log(value)
    return (
        <div>
            <Box
                sx={{
                    "& > textarea": {
                        color: "error.main",
                        outline: "2px solid green",
                        "&:focus": {
                            outline: "5px dashed purple",
                        },
                    },
                }}>
                <TextareaAutosize
                    value={value}
                    style={{
                        backgroundColor: "#000",
                        borderRadius: 2,
                    }}
                    aria-label="name-input-field"
                    onChange={(e) => setValue(e.target.value)}
                    minRows={3}
                    maxRows={8}
                    placeholder="Enter your name"
                />
            </Box>
            <textarea />
        </div>
    )
}
