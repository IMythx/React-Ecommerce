import {
  Drawer,
  ListItem,
  ListItemButton,
  Box,
  List,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBar = ({ open, close, anchor }) => {
  return (
    <Drawer open={open} onClose={close} anchor={anchor}>
      <Box
        sx={{
          width:
            anchor === "left"
              ? 250
              : {
                  sm: 500,
                  xs: 300,
                },
          "& a": {
            textDecoration: "none",
            color: "grey.main",
            "&:active,&.active,:hover": {
              color: "primary.main",
            },
          },
        }}
        role="presentation"
        onClick={close}
        onKeyDown={close}
      >
        {anchor === "left" && (
          <List>
            {["HOME", "ABOUT", "DELIVERY", "CONTACT"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
                  >
                    <Typography
                      variant="subtitle2"
                      color={"gray.main"}
                      fontSize={12}
                    >
                      {text}
                    </Typography>
                  </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        {anchor === "right" && <List></List>}
      </Box>
    </Drawer>
  );
};

export default SideBar;
