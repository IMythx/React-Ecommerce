import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Link,
  Divider,
  Grid,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SideBar from "../sideBar/SideBar";
const TopBar = () => {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width:992px)").matches
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  const [sideBar, setSideBar] = useState({
    open: false,
    side: "left",
  });
  const sideBarHandler = () =>
    setSideBar(
      (prev) =>
        (prev = {
          open: false,
          side: "top", //i know it kinda makes no sense but drawer anchor prop accepts left, top, right, bottom as a value and if set it to left the left sidebar would pop up when im closing right side bar and if i set it to null or any other value an error would pop up
        })
    );
  useEffect(() => {
    window
      .matchMedia("(max-width:992px)")
      .addEventListener("change", (e) => setIsTablet(e.matches));
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  });
  return (
    <AppBar
      sx={{
        flexDirection: "column",
        backgroundColor: "transparent",
        "& a": {
          textDecoration: "none",
          color: "grey.main",
          "&:active,&.active,:hover": {
            color: "primary.main",
          },
        },
      }}
      elevation={0}
      position="static"
    >
      <Toolbar
        sx={{
          alignItems: "unset",
          borderBottom: 1,
          borderColor: grey[500],
          px: isMobile && "0!important",
          minHeight: {
            md: 55,
            xs: 50,
          },
        }}
      >
        <Grid container width={"100%"}>
          {!isMobile && (
            <Grid
              container
              item
              xs={!isTablet ? 2 : 4}
              alignContent={"center"}
              flexWrap={"wrap"}
              sx={{
                columnGap: "0.7rem",
              }}
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                <Typography
                  variant="subtitle2"
                  color={"gray.main"}
                  fontSize={12}
                >
                  HOME
                </Typography>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Typography
                  variant="subtitle2"
                  color={"gray.main"}
                  fontSize={12}
                >
                  ABOUT
                </Typography>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/delivery"
              >
                <Typography
                  variant="subtitle2"
                  color={"gray.main"}
                  fontSize={12}
                >
                  DELIVERY
                </Typography>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contacts"
              >
                <Typography
                  variant="subtitle2"
                  color={"gray.main"}
                  fontSize={12}
                >
                  CONTACTS
                </Typography>
              </NavLink>
            </Grid>
          )}
          {isMobile && (
            <IconButton
              onClick={() =>
                setSideBar(
                  (prev) =>
                    (prev = {
                      open: true,
                      side: "left",
                    })
                )
              }
            >
              <MenuIcon />
            </IconButton>
          )}
          <Grid
            container
            item
            xs={!isTablet ? 8.5 : !isMobile ? 5 : 10}
            borderLeft={1}
            borderRight={!isMobile ? 1 : ""}
            borderColor={grey[500]}
            px={"1rem"}
            sx={{
              alignItems: "center",
            }}
            justifyContent={isMobile && "center"}
          >
            <Grid
              container
              width={"fit-content"}
              sx={{
                gap: "0.5rem",
                cursor: "pointer",
                "& svg": {
                  color: grey[600],
                  transition: "200ms",
                  fontSize: 20,
                },
              }}
              alignItems={"center"}
            >
              <PhoneAndroidIcon />
              <Link href="tel:+1(234)56789" underline="none" fontSize={12}>
                +1(234)56789
              </Link>
            </Grid>
            {!isTablet && (
              <Typography
                variant="h6"
                justifySelf={"center"}
                flex={1}
                color="primary.main"
                textAlign={"center"}
                sx={{
                  cursor: "pointer",
                }}
              >
                WATCHES E-SHOP
              </Typography>
            )}
            {!isMobile && (
              <Stack
                direction={"row"}
                spacing={2}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      transform: "rotate(15deg)",
                      height: "15px",
                      alignSelf: "center",
                      bgcolor: "grey.main",
                    }}
                  />
                }
                alignItems={"center"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/login"
                >
                  <Typography
                    variant="subtitle2"
                    color={"gray.main"}
                    fontSize={11}
                  >
                    LOGIN
                  </Typography>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/signup"
                >
                  <Typography
                    variant="subtitle2"
                    color={"gray.main"}
                    fontSize={11}
                  >
                    REGISTER
                  </Typography>
                </NavLink>
              </Stack>
            )}
          </Grid>
          <Grid
            container
            item
            xs={!isTablet ? 1.5 : !isMobile ? 3 : 12}
            direction={"row"}
            color="grey.main"
            pl={"0.5rem"}
            sx={{
              fontSize: "0.7rem",
              alignItems: "center",
              gap: "0.2rem",
              "& svg": {
                cursor: "pointer",
                color: grey[600],
                fontSize: "1rem",
                "&:hover": {
                  color: "primary.main",
                },
              },
            }}
            borderBottom={isMobile && 1}
            borderTop={isMobile && 1}
            borderColor={grey[500]}
          >
            {isMobile && (
              <Stack
                width={isMobile && "49%"}
                direction={"row"}
                spacing={2}
                borderRight={1}
                borderColor={grey[500]}
                mr={"1rem"}
                py={"1rem"}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      transform: "rotate(15deg)",
                      height: "15px",
                      alignSelf: "center",
                      bgcolor: "grey.main",
                    }}
                  />
                }
                alignItems={"center"}
                justifyContent={"center"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/login"
                >
                  <Typography
                    variant="subtitle2"
                    color={"gray.main"}
                    fontSize={11}
                  >
                    LOGIN
                  </Typography>
                </NavLink>

                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/signup"
                >
                  <Typography
                    variant="subtitle2"
                    color={"gray.main"}
                    fontSize={11}
                  >
                    REGISTER
                  </Typography>
                </NavLink>
              </Stack>
            )}
            GET SOCIAL: <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
          </Grid>
        </Grid>
      </Toolbar>
      {isTablet && (
        <Typography
          variant="h6"
          color="primary.main"
          textAlign={"center"}
          borderBottom={1}
          borderColor={grey[500]}
          py={"0.5rem"}
          sx={{
            cursor: "pointer",
          }}
        >
          WATCHES E-SHOP
        </Typography>
      )}
      <Toolbar
        sx={{
          alignItems: "unset",
          borderBottom: 1,
          borderColor: grey[500],
          px: !isMobile ? "0.2rem!important" : "0!important",
          minHeight: {
            md: 55,
            xs: 75,
          },
        }}
      >
        <Grid
          container
          sx={{
            "& svg": {
              color: grey[600],
              transition: "200ms",
              fontSize: 20,
            },
          }}
        >
          <Grid
            item
            container
            xs={!isMobile ? 1 : 4}
            sx={{ gap: "0.8rem", cursor: "pointer" }}
            alignItems={"center"}
            justifyContent={"center"}
            borderBottom={isMobile && 1}
            borderColor={grey[500]}
          >
            <SearchIcon />
            <Typography
              variant="body2"
              color="secondary.main"
              fontSize={{
                md: 12,
                xs: 7,
              }}
            >
              SEARCH
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={8}
            justifyContent={"center"}
            sx={{
              gap: {
                md: "0.8rem",
                xs: "0.3rem",
              },
            }}
            alignItems={"center"}
            borderLeft={1}
            borderRight={!isMobile && 1}
            borderBottom={isMobile && 1}
            borderColor={grey[500]}
          >
            <NavLink to="/shop">
              <Typography
                variant="subtitle2"
                color={"secondary.main"}
                fontSize={{
                  md: 14,
                  xs: 8,
                }}
                sx={{
                  transition: "200ms",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                WOMEN
              </Typography>
            </NavLink>
            <NavLink to="/shop">
              <Typography
                variant="subtitle2"
                color={"secondary.main"}
                fontSize={{
                  md: 14,
                  xs: 8,
                }}
                sx={{
                  transition: "200ms",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                MEN
              </Typography>
            </NavLink>
            <NavLink to="/shop">
              <Typography
                variant="subtitle2"
                color={"secondary.main"}
                fontSize={{
                  md: 14,
                  xs: 8,
                }}
                sx={{
                  transition: "200ms",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                KIDS
              </Typography>
            </NavLink>
            <NavLink to="/shop">
              <Typography
                variant="subtitle2"
                color={"secondary.main"}
                fontSize={{
                  md: 14,
                  xs: 8,
                }}
                sx={{
                  transition: "200ms",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                BRANDS
              </Typography>
            </NavLink>
            <NavLink to="/shop">
              <Typography
                variant="subtitle2"
                color={"secondary.main"}
                fontSize={{
                  md: 14,
                  xs: 8,
                }}
                sx={{
                  transition: "200ms",
                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                OFFERS
              </Typography>
            </NavLink>
          </Grid>
          <Grid
            container
            item
            xs={!isMobile ? 1.5 : 6}
            sx={{ gap: "0.3rem", cursor: "pointer" }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRight={1}
            borderColor={grey[500]}
            textAlign="center"
          >
            <FavoriteBorderIcon />
            <Typography
              variant="body2"
              color="secondary.main"
              fontSize={{
                md: 12,
                xs: 7,
              }}
            >
              MY FAVORITS
              <Typography
                variant="body2"
                component={"span"}
                color="primary.main"
                pl={1}
              >
                0
              </Typography>
            </Typography>
          </Grid>
          <Grid
            container
            item
            justifyContent={"center"}
            xs={!isMobile ? 1.5 : 6}
            sx={{ gap: "0.3rem", cursor: "pointer" }}
            alignItems={"center"}
            textAlign={"center"}
            onClick={() =>
              setSideBar(
                (prev) =>
                  (prev = {
                    open: true,
                    side: "right",
                  })
              )
            }
          >
            <ShoppingBagOutlinedIcon />
            <Typography
              variant="body2"
              color="secondary.main"
              fontSize={{
                md: 12,
                xs: 7,
              }}
            >
              MY CART
              <Typography
                variant="body2"
                component={"span"}
                color="primary.main"
                pl={1}
              >
                0
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <SideBar
        open={sideBar.open}
        close={sideBarHandler}
        anchor={sideBar.side}
      />
    </AppBar>
  );
};

export default TopBar;
