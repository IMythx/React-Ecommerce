import {
  Drawer,
  ListItem,
  ListItemButton,
  Box,
  List,
  Typography,
  ListItemText,
  ListItemIcon,
  Link,
} from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { grey } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
const SideBar = ({ open, close, anchor }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
        {anchor === "right" && (
          <List>
            <ListItem>
              <ListItemText
                disableTypography
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                Cart
              </ListItemText>
              <CloseIcon
                sx={{
                  cursor: "pointer",
                }}
                onClick={close}
              />
            </ListItem>
            <ListItem disablePadding>
              <List
                sx={{
                  borderBottom: 1,
                  borderColor: `${grey[300]} !important`,
                  width: "100%",
                }}
              ></List>
            </ListItem>
            <ListItem>
              <ListItemText disableTypography>
                <Typography
                  variant="subtitle1"
                  color={grey[600]}
                  fontWeight={800}
                >
                  Subtotal:
                  <Typography
                    ml={"0.5rem"}
                    component={"span"}
                    color={"grey.main"}
                  >
                    £{totalPrice}
                  </Typography>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                px: 15,
              }}
            >
              <Link
                component={RouterLink}
                to="/cart"
                underline="none"
                width={"100%"}
              >
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    columnGap: "0.5rem",
                    justifyContent: "center",
                    color: "#fff",
                    bgcolor: "#27d18b",
                    "&:hover": {
                      bgcolor: "#78e6b9",
                    },
                  }}
                  disableRipple
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "fit-content",
                      color: "#fff",
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </ListItemIcon>
                  Checkout
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                px: 15,
              }}
            >
              <Link
                component={RouterLink}
                to="/cart"
                underline="none"
                width={"100%"}
              >
                <ListItemButton
                  sx={{
                    fontSize: "0.8rem",
                    columnGap: "0.5rem",
                    justifyContent: "center",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                  disableRipple
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "fit-content",
                      color: "primary.main",
                    }}
                  >
                    <VisibilityIcon
                      sx={{
                        fontSize: "1.1rem ",
                      }}
                    />
                  </ListItemIcon>
                  View cart
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        )}
      </Box>
    </Drawer>
  );
};

export default SideBar;
