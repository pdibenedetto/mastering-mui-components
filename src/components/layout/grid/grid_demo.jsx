import React from 'react'
import { Grid, Avatar, Typography, Hidden } from "@mui/material"
import { Share as ShareIcon, AddCircle as AddCircleIcon } from "@mui/icons-material"

const subscriptions = ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5", "Sub 6", "Sub 7 But actually a really long subscription name", "Sub 8"]

const videos = [
    { title: "Video Title 1", viewCount: 12000, user: { name: "YouTuber 1" } },
    { title: "Video Title 2", viewCount: 20000, user: { name: "YouTuber 2" } },
    { title: "Video Title 3", viewCount: 25000, user: { name: "YouTuber 3" } },
    { title: "Video Title 4", viewCount: 2000, user: { name: "YouTuber 4" } },
    { title: "Video Title 5", viewCount: 30000, user: { name: "YouTuber 5" } },
]

export function GridDemo() {
    return (
        <Grid container height="100vh">
            <Hidden mdDown>
                <Grid item container direction="column" bgcolor="blue" md={2}>
                    {subscriptions.map((sub) => (
                        <Subscription name={sub} />
                    ))}
                </Grid>
            </Hidden>
            <Grid item container bgcolor="red" md={10} p={3} direction={{ md: "row", xs: "column" }} alignItems={{ md: "flex-start", xs: "center" }}>
                {videos.map((video) => (
                    <Video video={video} />
                ))}
            </Grid>
        </Grid>
    )
}

function Subscription({ name }) {
    return (
        <Grid item container p={1} alignItems="center">
            <Grid item xs="auto" mr={1}>
                <Avatar alt={name} />
            </Grid>
            <Grid item xs container direction="column" zeroMinWidth wrap="nowrap">
                <Grid item zeroMinWidth>
                    <Typography title={name} noWrap variant="h5" textAlign="left">
                        {name}
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <AddCircleIcon sx={{ fontSize: 15 }} />
                    </Grid>
                    <Grid item>
                        <ShareIcon sx={{ fontSize: 15 }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

function Video({
    video: {
        title,
        viewCount,
        user: { name },
    },
}) {
    return (
        <Grid item m={1}>
            <Grid container direction="column" md>
                <Grid item height="12rem" width="20rem" bgcolor="lightblue" />
                <Grid item container m={1}>
                    <Grid item xs={2}>
                        <Avatar alt={name} />
                    </Grid>
                    <Grid item container direction="column" xs={10} alignItems="flex-start">
                        <Grid item>
                            <Typography variant="h5">{title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">{viewCount}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
