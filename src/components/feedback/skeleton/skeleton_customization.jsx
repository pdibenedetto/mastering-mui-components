import { Skeleton } from "@mui/material"

export function SkeletonCustomization() {
    const div = <div style={{ width: "8rem", height: "8rem", backgroundColor: "red" }} />
    const loading = true

    return (
        <div>
            <Skeleton sx={{ bgcolor: "rgba(255, 0, 0, 0.25)" }} animation="wave" variant="circular" width="5rem" height="5rem" />
            {loading ? <Skeleton animation={false} width="5rem" /> : div}
            <Skeleton variant="rectangular">{div}</Skeleton>
        </div>
    )
}
