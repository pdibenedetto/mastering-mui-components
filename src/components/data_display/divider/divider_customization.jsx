import { Divider, Box } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

export function DividerCustomization() {
    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <Divider
                sx={{
                    marginLeft: 0,
                    marginRight: 15,
                    "& .MuiDivider-wrapper": {
                        color: "green",
                        fontSize: "2rem",
                        fontFamily: "Verdana",
                        paddingLeft: 0.25,
                        paddingRight: 0.25,
                    },
                    "&:before": {
                        borderColor: "red",
                        borderWidth: 2,
                        borderStyle: "dashed",
                        borderLeft: 0,
                        borderRight: 0,
                        borderBottom: 0,
                    },
                    "&:after": {
                        borderColor: "red",
                        borderWidth: 2,
                        borderStyle: "dashed",
                        borderLeft: 0,
                        borderRight: 0,
                        borderBottom: 0,
                        width: "100%",
                    },
                }}
                textAlign="right"
                variant="inset">
                <AddIcon />
            </Divider>
            <h2>Start editing to see some magic happen!</h2>
            <Box
                sx={{
                    height: "10rem",
                    width: "5rem",
                    bgcolor: "lightblue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <AddIcon />
                <Divider
                    sx={{
                        //With child element
                        // "&:before": {
                        //   height: "2rem"
                        // },
                        // "&:after": {
                        //   height: "2rem"
                        // },
                        // "& .MuiDivider-wrapper": {
                        //   color: "#FFF",
                        //   fontFamily: "Verdana",
                        //   fontSize: "1.5rem",
                        //   paddingTop: 1,
                        //   paddingBottom: 2
                        // }

                        //Without child element
                        height: "auto",
                        marginBottom: 4,
                        marginTop: 4,
                        borderColor: "red",
                        borderWidth: 2,
                        borderStyle: "dashed",
                    }}
                    flexItem
                    variant="middle"
                    orientation="vertical">
                    {/* Z */}
                </Divider>
                <RemoveIcon />
            </Box>
        </div>
    )
}
