import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Zoom } from "@mui/material"
import { useState } from "react"

export function DialogCustomization() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(!open)}>Open Dialog</Button>
            <Dialog
                // fullScreen
                fullWidth
                maxWidth="sm"
                TransitionComponent={Zoom}
                keepMounted
                scroll="paper"
                open={open}
                onClose={() => setOpen(false)}
                onBackdropClick={() => console.log("Clicked backdrop!")}
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: "lightblue",
                        height: "20rem",
                        // width: "15rem"
                    },
                }}>
                <DialogTitle sx={{ color: "#FFF", fontFamily: "Verdana", fontSize: "2rem" }}>Are you sure?</DialogTitle>
                <DialogContent dividers sx={{ borderColor: "purple", borderWidth: 2 }}>
                    <DialogContentText sx={{ color: "green", fontFamily: "Verdana", fontSize: "1rem" }}>
                        You're about to delete this item, this action cannot be undone. You're about to delete this item, this action cannot be
                        undone. You're about to delete this item, this action cannot be undone. You're about to delete this item, this action cannot
                        be undone. You're about to delete this item, this action cannot be undone. You're about to delete this item, this action
                        cannot be undone. You're about to delete this item, this action cannot be undone. You're about to delete this item, this
                        action cannot be undone. You're about to delete this item, this action cannot be undone. You're about to delete this item,
                        this action cannot be undone. You're about to delete this item, this action cannot be undone. You're about to delete this
                        item, this action cannot be undone. You're about to delete this item, this action cannot be undone. You're about to delete
                        this item, this action cannot be undone. You're about to delete this item, this action cannot be undone. You're about to
                        delete this item, this action cannot be undone. You're about to delete this item, this action cannot be undone. You're about
                        to delete this item, this action cannot be undone. You're about to delete this item, this action cannot be undone. You're
                        about to delete this item, this action cannot be undone. You're about to delete this item, this action cannot be undone.
                        You're about to delete this item, this action cannot be undone. You're about to delete this item, this action cannot be
                        undone. You're about to delete this item, this action cannot be undone. You're about to delete this item, this action cannot
                        be undone. You're about to delete this item, this action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "flex-end", height: "5rem" }}>
                    <Button color="error" variant="contained">
                        Delete
                    </Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
