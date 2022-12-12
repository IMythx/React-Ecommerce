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
import { useState, useEffect } from "react";

const StrapFilter = ({ onChange }) => {
  const [filters, setFilters] = useState(
    new URLSearchParams(location.search).getAll("STRAP") || []
  );

  const handleToggle = (value) => () => {
    const currentIndex = filters.indexOf(value);
    const newFilters = [...filters];

    if (currentIndex === -1) {
      newFilters.push(value);
    } else {
      newFilters.splice(currentIndex, 1);
    }

    setFilters(newFilters);
    onChange(newFilters);
  };

  useEffect(() => {
    filters.length && onChange(filters);
  }, []);

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
                    checked={filters.indexOf(value) !== -1}
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
