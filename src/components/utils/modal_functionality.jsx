import { Modal, Button, Paper, Zoom } from "@mui/material"
import { useReducer } from "react"

export function ModalFunctionality() {
    const [open, toggle] = useReducer((s) => !s, false)
    const [open2, toggle2] = useReducer((s) => !s, false)

    return (
        <div style={{ backgroundColor: "red", height: "150vh" }}>
            <Button onClick={toggle}>Toggle Modal</Button>
            {/* <Dialog disableRestoreFocus disableScollLock /> */}
            {/* <Menu disableRestoreFocus disableScollLock /> */}
            {/* <Drawer MenuProps={{ disableRestoreFocus: true disableScollLock: true }} /> */}
            <Modal
                open={open}
                // hideBackdrop
                // RECOMMENDED:
                keepMounted
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                disableScrollLock
                disableRestoreFocus
                closeAfterTransition
                onClose={(event, reason) => {
                    if (reason === "backdropClick") {
                        console.log("Clicked on the backdrop")
                    }

                    toggle()
                }}
                // NOT RECOMMENDED:
                // onBackdropClick={() => console.log("Clicked on the backdrop")}
            >
                <Zoom in={open}>
                    <Paper>
                        <h2 id="modal-title">My Title</h2>
                        <p id="modal-description">My description</p>
                        Testing Modal!
                        <Button onClick={toggle}>Close Modal</Button>
                        <Button onClick={toggle2}>Open Modal 2</Button>
                    </Paper>
                </Zoom>
            </Modal>
            <Modal open={open2} onClose={toggle2}>
                <Paper>Testing Modal 2</Paper>
            </Modal>
        </div>
    )
}
