import { useState } from "react"
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material"
import { Home as HomeIcon, Store as StoreIcon, Person as PersonIcon, Mail as MailIcon } from "@mui/icons-material"

const routes = [
    { route: "Home", icon: <HomeIcon /> },
    { route: "Store", icon: <StoreIcon /> },
    { route: "About Us", icon: <PersonIcon /> },
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

export function TabsFunctionality() {
    const [selected, setSelected] = useState("Home")

    return (
        <div>
            <AppBar color="warning">
                <Toolbar>
                    <Tabs
                        aria-label="Main Navigation"
                        // centered
                        variant="fullWidth"
                        // allowScrollButtonsMobile
                        scrollButtons={false}
                        sx={{ width: "100%" }}
                        value={selected}
                        orientation="vertical"
                        onChange={(_e, newValue) => setSelected(newValue)}>
                        {routes.map(({ route, icon }, index) => (
                            <Tab
                                {...a11yProps(index)}
                                // LinkComponent={Link}
                                // href={route}
                                // disabled={route === "Store"}
                                label={route}
                                icon={icon}
                                iconPosition="end"
                                // wrapped
                                key={route}
                                value={route}
                            />
                        ))}
                    </Tabs>
                </Toolbar>
            </AppBar>
            {renderContent(selected)}
        </div>
    )
}
