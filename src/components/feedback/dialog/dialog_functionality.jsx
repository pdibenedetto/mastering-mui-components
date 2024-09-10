import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Zoom } from "@mui/material"
import { useState } from "react"

export function DialogFunctionality() {
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
                scroll="body"
                open={open}
                onClose={() => setOpen(false)}
                onBackdropClick={() => console.log("Clicked backdrop!")}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
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
                <DialogActions>
                    <Button color="error" variant="contained">
                        Delete
                    </Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
