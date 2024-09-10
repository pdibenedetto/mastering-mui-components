import { Button } from "@mui/material";
import { useState } from "react";

// The SX Prop Cheatsheet
// -------------------------------------------
// CSS: margin-bottom
// style tag: marginBottom
// sx prop: mb

// mx: "1rem" -> marginLeft: "1rem", marginRight: "1rem"
// my: "1rem" -> marginTop: "1rem", marginBottom: "1rem"

// typography: "h5" -> ...theme.typography.h5
// fontSize: 10 -> fontSize: "10px"
// fontSize: "h5.fontSize" -> theme.typography.h5.fontSize
// fontWeight: "h5.fontWeight" -> theme.typography.h5.fontWeight
// fontFamily: "h5.fontFamily" -> theme.typography.h5.fontFamily
// fontStyle: "h5.fontStyle" -> theme.typography.h5.fontStyle

// bgcolor/color/borderColor: "primary.main" -> theme.palette.primary.main

// flexDirection: { xs: "column", md: "row"} -> theme.breakpoints.up("xs") && "column", theme.breakpoints.up("md") && "row"

// margin/padding/gap: 5 -> theme.spacing(5)

// width/height: [0,1] -> %
// width/height: 50 -> "50px"
// width/height: "25rem" -> "25rem"
// maxWidth: "md" -> theme.breakpoints.values["md"]

// borderRadius: 4 -> theme.shape.borderRadius * 4 (val)
// boxShadow/dropShadow: 20 -> theme.shadows[20]
// zIndex: "modal" -> theme.zIndex["modal"]
// -------------------------------------------

export default function SXPropDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 style={{ color: "red", marginBottom: "50px" }}>
        Start editing to see some magic happen!
      </h2>
      <Button
        onClick={() => setOpen(!open)}
        sx={[
          {
            borderColor: (theme) => theme.typography.h1.color,
            borderStyle: "solid",
            borderWidth: "2px",
            width: 1,
            maxWidth: "xl",
            borderRadius: "8px",
            boxShadow: 20,
            bgcolor: { xs: "green", sm: "purple" },
            zIndex: (theme) => theme.zIndex["modal"] + 1,
            "&:focus": {
              bgcolor: "orange",
            },
            "& p,h1": {
              color: "#000",
            },
          },
          open && {
            bgcolor: "red",
            fontSize: "2rem",
          },
        ]}
        variant="contained"
      >
        My Button
        <p>My paragraph text</p>
        <h1>my h1 text</h1>
      </Button>
    </div>
  );
}
