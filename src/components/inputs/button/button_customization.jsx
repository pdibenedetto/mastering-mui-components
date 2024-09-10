import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function ButtonCustomization() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Button
        disabled={disabled}
        size="large"
        sx={{
          color: "#000",
          fontFamily: "Verdana",
          borderColor: "purple",
          borderWidth: 2,
          borderRadius: 0,
          "&:hover": {
            bgcolor: "pink",
            borderColor: "green",
            borderWidth: 3,
          },
          "&.Mui-disabled": {
            bgcolor: "#000",
            color: "#FFF",
          },
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => console.log("Clicked me!")}
        disableRipple
        disableElevation
        variant="contained"
      >
        Publish
      </Button>
      <IconButton
        onClick={() => setDisabled(!disabled)}
        disableRipple
        color="secondary"
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}
