import { Avatar, Badge } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function BadgeFunctionality() {
  return (
      <Badge
        overlap="circular"
        // variant="dot"
        showZero
        color="secondary"
        max={49}
        badgeContent={99}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Avatar aria-label="99 notifications" />
      </Badge>
  );
}
