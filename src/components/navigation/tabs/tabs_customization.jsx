import { useState } from "react"
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material"
import { Home as HomeIcon, Store as StoreIcon, Person as PersonIcon, Mail as MailIcon } from "@mui/icons-material"

const routes = [
    { route: "Home", icon: <HomeIcon /> },
    { route: "Store", icon: <StoreIcon /> },
    { route: "About Us", icon: <PersonIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
    { route: "Contact Us", icon: <MailIcon /> },
]

function renderContent(route) {
    switch (route) {
        case "Home":
            return <div>Home Page</div>
        case "Store":
            return <div>My Store!</div>
        case "About Us":
            return <div>About Us!</div>
        case "Contact Us":
            return <div>Contact Us!</div>
        default:
            return <div>Whoops! Page not found.</div>
    }
}

function a11yProps(index) {
    return {
        id: "simple-tab-" + index,
        "aria-controls": "simple-tabpanel-" + index,
    }
}

const scrollButtonStyles = {
    fontSize: 40,
}

const customScrollButtonStyles = {
    color: "#FFF",
}

const CustomStartButton = () => {
    return <Button sx={customScrollButtonStyles}>{"<--"}</Button>
}

const CustomEndButton = () => {
    return <Button sx={customScrollButtonStyles}>{"-->"}</Button>
}

export function TabsCustomization() {
    const [selected, setSelected] = useState("Home")

    return (
        <div>
            <AppBar color="warning">
                <Toolbar>
                    <Tabs
                        aria-label="Main Navigation"
                        // centered
                        variant="scrollable"
                        // allowScrollButtonsMobile
                        // scrollButtons={false}
                        textColor="inherit"
                        slots={{
                            StartScrollButtonIcon: CustomStartButton,
                            EndScrollButtonIcon: CustomEndButton,
                        }}
                        // slotProps={{
                        //   startScrollButtonIcon: {
                        //     sx: { fill: "red", ...scrollButtonStyles },
                        //   },
                        //   endScrollButtonIcon: {
                        //     sx: { fill: "blue", ...scrollButtonStyles },
                        //   },
                        // }}
                        sx={{
                            width: "100%",
                            "& .MuiTabs-indicator": {
                                bgcolor: "red",
                                // display: "none",
                            },
                            "& .MuiTabs-flexContainer": {
                                // justifyContent: "flex-end",
                                alignItems: "flex-end",
                            },
                        }}
                        value={selected}
                        // orientation="vertical"
                        onChange={(_e, newValue) => setSelected(newValue)}>
                        {routes.map(({ route, icon }, index) => (
                            <Tab
                                {...a11yProps(index)}
                                // LinkComponent={Link}
                                // href={route}
                                // disabled={route === "Store"}
                                label={route}
                                // icon={icon}
                                iconPosition="end"
                                // wrapped
                                key={route}
                                value={route}
                                sx={{
                                    "&.Mui-selected": {
                                        color: "blue",
                                        "& .MuiTab-iconWrapper": {
                                            fill: "#000",
                                        },
                                    },
                                    "&:not(.Mui-selected)": {
                                        color: "#000",
                                        "& .MuiTab-iconWrapper": {
                                            fill: "white",
                                        },
                                    },
                                    "& .MuiTab-iconWrapper": {
                                        fontSize: 40,
                                        ml: (theme) => theme.spacing(2),
                                    },
                                    // my: (theme) => theme.spacing(1),
                                    // mx: (theme) => theme.spacing(1),
                                    fontFamily: "Verdana",
                                    fontSize: "1rem",
                                }}
                            />
                        ))}
                    </Tabs>
                </Toolbar>
            </AppBar>
            {renderContent(selected)}
        </div>
    )
}
