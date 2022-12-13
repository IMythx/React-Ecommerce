import {
  Button,
  createTheme,
  Grid,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";
import { Watches } from "../../Store/Watches";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import CheckIcon from "@mui/icons-material/Check";

const Product = ({
  md,
  sm,
  xs,
  borderBottom = true,
  name,
  borderRight = true,
  removeBorderatMediumScreen = false,
}) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width:899px)").matches
  );
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const item = Watches[name];
  const isInCart = cart.indexOf(name) !== -1;
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/shop/${name}`);
  const onAddHandler = () =>
    dispatch(cartActions.addItem({ name, price: +item.price }));
  const raise = keyframes`
  to{
    opacity:1;
    bottom:10%
  }
  `;
  useEffect(
    () =>
      window
        .matchMedia("(max-width:899px)")
        .addEventListener("change", (e) => setIsTablet(e.matches)),
    []
  );
  return (
    <Grid
      md={md && md}
      sm={sm && sm}
      xs={xs && xs}
      item
      container
      justifyContent={"center"}
      alignItems={"center"}
      borderRight={
        borderRight && {
          md: 1,
          sm: !removeBorderatMediumScreen && 1,
          xs: "none",
        }
      }
      position={"relative"}
      onMouseOver={() => !isTablet && setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={{
        cursor: "pointer",
        borderColor: `${grey[500]} !important`,
      }}
      pt={5}
      pb={15}
      borderBottom={
        borderBottom && {
          md: "none",
          xs: 1,
        }
      }
    >
      <img
        src={item["src"][0]}
        style={{ width: "82%" }}
        alt=""
        onClick={clickHandler}
      />
      {!isHovered && (
        <Typography
          variant="body2"
          color={"secondary.main"}
          textAlign={"center"}
          position={"absolute"}
          width={{
            md: "100%",
            sm: "55%",
            xs: "100%",
          }}
          whiteSpace={{
            md: "initial",
            sm: "nowrap",
            xs: "initial",
          }}
          overflow={{
            md: "initial",
            sm: "hidden",
            xs: "initial",
          }}
          textOverflow={"ellipsis"}
          bottom={"15%"}
          fontWeight={700}
          sx={{
            opacity: !isTablet && "0",
            animation: !isTablet && `${raise} 300ms linear 1 forwards`,
          }}
        >
          {name} <br /> £{item.price}
        </Typography>
      )}
      {(isHovered || isTablet) && (
        <Stack
          direction={"row"}
          position={"absolute"}
          columnGap="1rem"
          width={"100%"}
          bottom={{
            md: "0%",
            xs: "3%",
          }}
          justifyContent={"center"}
          sx={{
            opacity: !isTablet && "0",
            animation: !isTablet && `${raise} 300ms linear 1 forwards`,
          }}
        >
          <Button
            disableRipple
            variant="text"
            sx={{
              color: isInCart ? "#fff" : "secondary.main",
              px: 2,
              borderRadius: "0",
              backgroundColor: isInCart ? "secondary.main" : "transparent",
              whiteSpace: "nowrap",
              columnGap: !isInCart && "0.7rem",
              border: 1,
              borderColor: "secondary.main",
              fontSize: {
                md: "0.85rem",
                sm: "0.5rem",
                xs: "0.85rem",
              },
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "#fff",
              },
            }}
            onClick={onAddHandler}
          >
            {!isInCart && (
              <Fragment>
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                />
                ADD TO CART
              </Fragment>
            )}
            {isInCart && (
              <Fragment>
                <CheckIcon
                  sx={{ fontSize: { md: "1.5rem", sm: "1rem", xs: "1.5rem" } }}
                />
                ADDED
              </Fragment>
            )}
          </Button>
          <Button
            disableRipple
            variant="text"
            sx={{
              color: "secondary.main",
              px: 2,
              borderRadius: "0",
              backgroundColor: "transparent",
              minWidth: "auto",
              border: 1,
              borderColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "#fff",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{
                fontSize: {
                  md: "1.5rem",
                  sm: "1rem",
                  xs: "1.5rem",
                },
              }}
            />
          </Button>
        </Stack>
      )}
    </Grid>
  );
};
export default Product;
