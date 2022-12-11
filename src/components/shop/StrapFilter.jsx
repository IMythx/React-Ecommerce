import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  ListSubheader,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
const StrapFilter = (onChange) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <List sx={{ bgcolor: grey[100] }}>
      <ListSubheader
        sx={{
          backgroundColor: "transparent",
          ml: -0.5,
          mb: 1,
          position: "static",
        }}
      >
        <Typography
          variant="subtitle2"
          fontSize={"0.90rem"}
          fontWeight={600}
          color="secondary.main"
        >
          STRAP
        </Typography>
      </ListSubheader>
      {["ALUMINUM", "BLACK CROCODILE", "BROWN CROCODILE", "CALF LEATHER"].map(
        (value, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem
              key={index}
              disableGutters
              disablePadding
              sx={{
                width: "fit-content",
                "& .MuiButtonBase-root.MuiListItemButton-root": {
                  py: 0.3,
                  "&:hover": {
                    backgroundColor: "inherit !important",
                  },
                },
                "& .MuiListItemIcon-root": {
                  minWidth: "auto",
                },
                "& span": {
                  py: 0,
                },
              }}
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
                disableRipple
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={
                    <Typography
                      variant="body2"
                      color={"grey.main"}
                      fontWeight={600}
                    >
                      {value}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default StrapFilter;
