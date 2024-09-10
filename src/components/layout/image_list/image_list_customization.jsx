import { ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material"
import { AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material"

const images = [...new Array(15)].map((_, index) => <img key={index} src={`https://picsum.photos/id/${index + 500}/200`} />)

function getSize(index) {
    if (!(index % 3)) {
        return { rows: 2, cols: 2 }
    } else if (!(index % 4)) {
        return { rows: 2, cols: 1 }
    }

    return { rows: 1, cols: 1 }
}

export function ImageListCustomization() {
    return (
        <ImageList variant="quilted" gap={0} cols={3} rowHeight={300}>
            {images.map((image, index) => {
                const { rows, cols } = getSize(index)
                return (
                    <ImageListItem rows={rows} cols={cols} key={index}>
                        {image}
                        <ImageListItemBar
                            title="Example Title"
                            subtitle="Example Subtitle"
                            position="bottom"
                            actionPosition="left"
                            sx={{
                                bgcolor: "rgba(255,0,0,0.5)",
                                height: "7rem",
                                "& .MuiImageListItemBar-title": {
                                    fontSize: "1.5rem",
                                },
                                "& .MuiImageListItemBar-subtitle": {
                                    fontSize: "0.75rem",
                                },
                                "& .MuiImageListItemBar-titleWrap": {
                                    textAlign: "right",
                                    paddingRight: 3,
                                    alignSelf: "center",
                                },
                                "& .MuiImageListItemBar-actionIcon": {
                                    alignSelf: "flex-end",
                                },
                                "& > *": {
                                    color: "#000",
                                    fontFamily: "Verdana",
                                },
                            }}
                            actionIcon={
                                <IconButton sx={{ color: "#FFF" }}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}
