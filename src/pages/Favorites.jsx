import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Rating,
  CardActions,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { favoritesActions } from "../Store/favoritesSlice";
import { cartActions } from "../Store/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { Watches } from "../Store/Watches";
import { grey } from "@mui/material/colors";
import { Fragment } from "react";

const Favorites = () => {
  const { favorites } = useSelector((State) => State.favorites);

  const { cart } = useSelector((State) => State.cart);

  const dispatch = useDispatch();

  return (
    <Box bgcolor={grey[100]}>
      <Typography
        variant="h4"
        color={"secondary.main"}
        fontWeight={600}
        pt={2}
        pl={2}
      >
        Whishlist
      </Typography>
      <Grid container p={2} spacing={3}>
        {!favorites.length && (
          <Typography
            variant="h6"
            color={"secondary.main"}
            fontWeight={600}
            mt={10}
            pl={3}
          >
            No products were added to the wishlist.
          </Typography>
        )}
        {favorites.map((item, index) => (
          <Grid
            key={index}
            item
            md={2.4}
            sm={4}
            xs={12}
            sx={{
              transition: "300ms",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Card
              sx={{
                "&:hover": {
                  boxShadow: "0 4px 25px 0 rgb(34 41 47 / 25%)",
                },
              }}
            >
              <CardMedia
                component={"img"}
                alt={item}
                sx={{
                  width: 150,
                  mx: "auto",
                }}
                image={Watches[item]["src"][0]}
              />
              <CardContent>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Rating
                    value={Math.ceil(Math.random() * 5)}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="body1"
                    color={"secondary.main"}
                    fontWeight={600}
                  >
                    £{Watches[item]["price"]}
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  color={"primary.main"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"nowrap"}
                >
                  {item}
                </Typography>
                <Typography
                  variant="body2"
                  color={"grey.main"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"nowrap"}
                  fontSize={"0.6rem"}
                >
                  TAGS: {Watches[item]["tags"].join(", ")}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  flexDirection: {
                    sm: "column",
                    xs: "row",
                  },
                  p: 0,
                }}
              >
                <Button
                  disableRipple
                  variant="text"
                  color="secondary"
                  sx={{
                    opacity: 0.7,
                    bgcolor: `${grey[100]} !important`,
                    width: "100%",
                    columnGap: "0.5rem",
                    borderRadius: {
                      sm: "4px",
                      xs: 0,
                    },
                  }}
                  onClick={() =>
                    dispatch(favoritesActions.removeItem({ name: item }))
                  }
                >
                  <CloseIcon
                    sx={{
                      fontSize: "1rem",
                    }}
                  />
                  Remove
                </Button>
                <Button
                  disabled={cart.indexOf(item) !== -1}
                  variant="outlined"
                  color="white"
                  sx={{
                    bgcolor: "primary.main",
                    width: "100%",
                    ml: `${0} !important`,
                    border: 1,
                    borderColor: "primary.main",
                    borderRadius: {
                      sm: "4px",
                      xs: 0,
                    },
                    "&:hover": {
                      bgcolor: "primary.main",
                      border: 1,
                      borderColor: "primary.main",
                    },
                  }}
                  onClick={() => {
                    dispatch(favoritesActions.removeItem({ name: item }));
                    dispatch(
                      cartActions.addItem({
                        name: item,
                        price: +Watches[item]["price"],
                      })
                    );
                  }}
                >
                  {cart.indexOf(item) === -1 && (
                    <Fragment>
                      <ShoppingCartOutlinedIcon /> Move to cart
                    </Fragment>
                  )}
                  {cart.indexOf(item) !== -1 && (
                    <Fragment>
                      <CheckIcon />
                      in cart
                    </Fragment>
                  )}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
