import {
  Button,
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        flexDirection={{
          md: "row",
          xs: "column",
        }}
        rowGap="2rem"
        bgcolor={grey[100]}
        py={10}
        pl={{
          md: 3,
          xs: 0,
        }}
      >
        <Grid
          item
          md={4.5}
          xs={12}
          container
          flexDirection={"column"}
          justifyContent="center"
          alignItems={{
            md: "start",
            xs: "center",
          }}
        >
          <Typography variant="subtitle2" color={"secondary.main"}>
            BE THE FIRST TO KNOW
          </Typography>
          <Typography variant="body2" color={"grey.main"}>
            Get all the latest information on Events, Sales and Offers.
          </Typography>
        </Grid>
        <Grid
          item
          md={4.5}
          xs={12}
          container={{
            sm: true,
            xs: false,
          }}
          justifyContent={{
            md: "auto",
            xs: "center",
          }}
        >
          <TextField
            label="YOUR EMAIL"
            variant="outlined"
            color="secondary"
            sx={{
              width: { md: "75%", sm: "40%", xs: "100%" },
              "& fieldset": {
                borderWidth: "1px !important",
              },
            }}
            inputProps={{
              style: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Button
            variant="outlined"
            disableRipple
            sx={{
              borderRadius: "0",
              width: { md: "25%", sm: "14%", xs: "100%" },
              borderColor: grey[500],
              color: "#eee",
              backgroundColor: "secondary.main",
              "&:hover": {
                color: "secondary.main",
                background: "transparent",
                borderColor: grey[500],
              },
            }}
          >
            SUBSCRIBE
          </Button>
        </Grid>
        <Grid
          item
          container
          md={3}
          xs={12}
          justifyContent={"center"}
          sx={{ columnGap: "0.5rem" }}
        >
          <Button
            variant="outlined"
            disableRipple
            sx={{
              minWidth: "40px",
              borderRadius: "0",
              borderColor: grey[500],
              color: "secondary.main",
              backgroundColor: "transparent",
              padding: "0.9rem",
              "&:hover": {
                color: "#eee",
                borderColor: `${grey[500]} !important`,
                backgroundColor: "secondary.main",
              },
            }}
          >
            <FacebookIcon />
          </Button>
          <Button
            variant="outlined"
            disableRipple
            sx={{
              minWidth: "40px",
              borderRadius: "0",
              borderColor: grey[500],
              color: "secondary.main",
              backgroundColor: "transparent",
              padding: "0.9rem",
              "&:hover": {
                color: "#eee",
                backgroundColor: "grey.main",
                borderColor: `${grey[500]} !important`,
              },
            }}
          >
            <InstagramIcon />
          </Button>
          <Button
            variant="outlined"
            disableRipple
            sx={{
              minWidth: "40px",
              borderRadius: "0",
              borderColor: grey[500],
              color: "secondary.main",
              backgroundColor: "transparent",
              padding: "0.9rem",
              "&:hover": {
                color: "#eee",
                borderColor: `${grey[500]} !important`,
                backgroundColor: "secondary.main",
              },
            }}
          >
            <TwitterIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        pl={{
          sm: "0",
          xs: 2,
        }}
        borderBottom={1}
        borderTop={1}
        borderColor={grey[500]}
        py={3}
      >
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          container
          justifyContent={{
            md: "center",
            xs: "start",
          }}
          pl={{
            md: 0,
            sm: 2,
            xs: 0,
          }}
        >
          <List>
            <ListItem sx={{ pb: 1 }} disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    whiteSpace="nowrap"
                  >
                    CONTACT INFORMATION
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    color={"primary.main"}
                    fontWeight={700}
                  >
                    Address:
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color={"grey.main"}
                    whiteSpace="nowrap"
                  >
                    356 West Side Newark,
                    <br /> New Jersey, USA
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    color={"primary.main"}
                    fontWeight={700}
                  >
                    Phone:
                  </Typography>
                }
                secondary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    underline="none"
                    href="tel:+1 (234) 56789"
                    color={"secondary.main"}
                    sx={{
                      color: "grey.main",
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    +1 (234) 56789
                  </Link>
                }
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    color={"primary.main"}
                    fontWeight={700}
                  >
                    Email:
                  </Typography>
                }
                secondary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    underline="none"
                    href="mailto:lorem@lorem.com"
                    color={"secondary.main"}
                    sx={{
                      color: "grey.main",
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    lorem@lorem.com
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          container
          justifyContent={{
            md: "center",
            xs: "start",
          }}
        >
          <List>
            <ListItem sx={{ pb: 1 }} disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    whiteSpace="nowrap"
                  >
                    CUSTOM CARE
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/login"
                    underline="none"
                  >
                    My Account
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    Shop
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/wishlist"
                    underline="none"
                  >
                    Wishlist
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/contacts"
                    underline="none"
                  >
                    Contacts
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/"
                    underline="none"
                  >
                    Terms & Conditions
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          container
          justifyContent={{
            md: "center",
            xs: "start",
          }}
          pl={{
            md: 0,
            sm: 2,
            xs: 0,
          }}
        >
          <List>
            <ListItem sx={{ pb: 1 }} disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    whiteSpace="nowrap"
                  >
                    COMPANY
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/about"
                    underline="none"
                  >
                    About us
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/delivery"
                    underline="none"
                  >
                    Delivery
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/cart"
                    underline="none"
                  >
                    Payment
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/contacts"
                    underline="none"
                  >
                    Contacts
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          container
          justifyContent={{
            md: "center",
            xs: "start",
          }}
        >
          <List>
            <ListItem sx={{ pb: 1 }} disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    whiteSpace="nowrap"
                  >
                    Shop
                  </Typography>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    For Him
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    For Her
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    For Kids
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    Smart Watches
                  </Link>
                }
              />
            </ListItem>
            <ListItem disableGutters sx={{ pb: 0 }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    fontWeight={600}
                    variant="body2"
                    color={"grey.main"}
                    sx={{
                      transition: "200ms",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                    component={RouterLink}
                    to="/shop"
                    underline="none"
                  >
                    Rolex
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        py={2}
        color="grey.main"
        textAlign={"center"}
        bgcolor={grey[100]}
        width="100%"
      >
        iMythx 2022&copy; All Rights Reserved
      </Typography>
    </footer>
  );
};

export default Footer;
