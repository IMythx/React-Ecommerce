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
  Stack,
} from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { grey } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Watches } from "../../Store/Watches";
import { Fragment } from "react";

const SideBar = ({ open, close, anchor }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Drawer open={open} onClose={anchor === "left" && close} anchor={anchor}>
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
              <ListItemIcon
                sx={{
                  minWidth: "fit-content",
                  cursor: "pointer",
                }}
                onClick={close}
              >
                <CloseIcon />
              </ListItemIcon>
            </ListItem>
            {cart.length > 0 && (
              <Fragment>
                <ListItem disablePadding onClick={(e) => e.preventDefault()}>
                  <List
                    sx={{
                      borderBottom: 1,
                      borderColor: `${grey[300]} !important`,
                      width: "100%",
                    }}
                  >
                    {cart.map((item, index) => (
                      <ListItem key={index}>
                        <Stack direction="row" width={"100%"}>
                          <Box maxWidth={"80px"}>
                            <img
                              src={Watches[item]["src"][0]}
                              style={{
                                maxWidth: "100%",
                              }}
                            />
                          </Box>
                          <Stack rowGap={"1rem"} justifyContent={"center"}>
                            <Typography
                              color="primary.main"
                              variant="subtitle1"
                            >
                              {item}
                            </Typography>
                            <Typography color="grey.main" variant="subtitle1">
                              1 x £{Watches[item]["price"]}
                            </Typography>
                          </Stack>
                          <ListItemIcon
                            sx={{
                              minWidth: "fit-content",
                              cursor: "pointer",
                              ml: "auto",
                            }}
                            onClick={() =>
                              dispatch(
                                cartActions.removeItem({
                                  name: item,
                                  price: +Watches[item]["price"],
                                })
                              )
                            }
                          >
                            <CloseIcon />
                          </ListItemIcon>
                        </Stack>
                      </ListItem>
                    ))}
                  </List>
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
                  onClick={close}
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
                  onClick={close}
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
              </Fragment>
            )}
            {cart.length === 0 && (
              <ListItem>
                <ListItemText
                  disableTypography
                  sx={{ color: "grey.main", fontSize: "1.2rem" }}
                >
                  No products in the cart.
                </ListItemText>
              </ListItem>
            )}
          </List>
        )}
      </Box>
    </Drawer>
  );
};

export default SideBar;
