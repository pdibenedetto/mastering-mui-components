import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function ButtonFunctionality() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Button
        disabled={disabled}
        size="large"
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
