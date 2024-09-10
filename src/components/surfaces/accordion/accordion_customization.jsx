import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"

export function AccordionCustomization() {
    // Use this with handleExpandAll
    // const [expanded, setExpanded] = useState([])

    //Use this with handleExpandOne
    const [expanded, setExpanded] = useState(false)

    const questions = [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
    ]

    const handleExpandAll = (question) => {
        let newExpanded = [...expanded]

        //Is the expansion panel already open?
        if (expanded.includes(question)) {
            newExpanded = newExpanded.filter((expandedQuestion) => expandedQuestion !== question)
        } else {
            //Otherwise, then the panel must not be open
            newExpanded.push(question)
        }

        setExpanded(newExpanded)
    }

    const handleExpandOne = (question) => (event, newExpanded) => {
        setExpanded(newExpanded ? question : false)
    }

    return (
        <div>
            {questions.map(({ question, answer }) => (
                <Accordion
                    sx={{
                        bgcolor: "green",
                        maxWidth: "25rem",
                        "&.Mui-expanded .MuiAccordionDetails-root": {
                            bgcolor: "purple",
                        },
                        "&.Mui-expanded .MuiAccordionSummary-root": {
                            color: "#000",
                        },
                        "&.Mui-disabled .MuiAccordionSummary-root": {
                            color: "#000",
                            bgcolor: "red",
                            // opacity: 1
                        },
                    }}
                    disabled={question === "Question 1"}
                    key={question}
                    disableGutters
                    square
                    //Use these with handleExpandAll
                    // expanded={expanded.includes(question)}
                    // onChange={() => handleExpandAll(question)}

                    //Use these with handleExpandOne
                    expanded={expanded === question}
                    onChange={handleExpandOne(question)}
                    TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary
                        sx={{
                            color: "#FFF",
                            fontFamily: "Verdana",
                            fontSize: "1.25rem",
                            height: "5rem",
                        }}
                        expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}>
                        {question}
                    </AccordionSummary>
                    <AccordionDetails sx={{ height: "5rem" }}>
                        <Typography align="left" variant="h5">
                            {answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
