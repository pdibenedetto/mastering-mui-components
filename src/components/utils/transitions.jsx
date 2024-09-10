import {
    Collapse,
    Fade,
    Grow,
    Slide,
    Zoom,
    Alert,
    Button,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    useScrollTrigger,
    useTheme,
} from "@mui/material"
import { TransitionGroup } from "react-transition-group"
import { useState, useReducer, useRef, forwardRef } from "react"
import { Delete as DeleteIcon } from "@mui/icons-material"

// eslint-disable-next-line react/display-name
const MyCustomButton = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
        My Custom Button
    </Button>
))

export function TransitionsFunctionality() {
    const [show, toggle] = useReducer((s) => !s, false)
    const [items, setItems] = useState([])
    const theme = useTheme()
    const containerRef = useRef()
    const trigger = useScrollTrigger()

    const addItem = () => setItems((prev) => [...prev, `Item ${items.length + 1}`])
    const removeItem = (value) => setItems((prev) => prev.filter((v) => v !== value))

    return (
        <div style={{ height: "150vh" }}>
            <Button onClick={toggle}>Toggle Show</Button>
            {/* <Collapse
        mountOnEnter
        orientation="horizontal"
        collapsedSize={25}
        // specifies the beginning of exiting
        onExit={() => console.log("Starting to exit!")}
        // specifies the end of the exit animation
        onExited={() => console.log("Finished exiting!")}
        // specifies the beginning of entering
        onEnter={() => console.log("Starting to enter!")}
        // specifies the end of the enter animation
        onEntered={() => console.log("Finished entering!")}
        easing={{
          enter: theme.transitions.easing.sharp,
          exit: theme.transitions.easing.sharp,
        }}
        // unmountOnExit
        // sx={{ transitionDelay: "1000ms" }}
        in={show}
        // timeout={{ enter: 1000, exit: 500 }}
        timeout={500}
      >
        <Alert severity="error">This is an error!</Alert>
      </Collapse> */}

            {/* <Fade in={show}>
        <Alert severity="info">This is information</Alert>
      </Fade> */}

            {/* <Grow timeout={2000} in={show} sx={{ transformOrigin: "bottom center" }}>
        <Alert severity="warning">This is a warning</Alert>
      </Grow> */}

            {/* <Slide
        appear={false}
        in={!trigger}
        direction="down"
        // container={containerRef.current}
      >
        <AppBar>
          <Toolbar />
        </AppBar>
      </Slide> */}

            {/* <div
        ref={containerRef}
        style={{ width: "100%", height: "1rem", backgroundColor: "red" }}
      /> */}

            {/* <Zoom in={show}>
        {/* <Alert severity="error">This is an error!</Alert> */}
            {/* <MyCustomButton /> */}
            {/* </Zoom> */}
            <Button onClick={addItem}>Add a new item</Button>
            <List>
                <TransitionGroup>
                    {items.map((item) => (
                        <Collapse key={item} timeout={1000}>
                            <ListItem
                                secondaryAction={
                                    <IconButton onClick={() => removeItem(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }>
                                <ListItemText>{item}</ListItemText>
                            </ListItem>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </div>
    )
}
