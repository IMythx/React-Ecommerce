import {
  Button,
  createTheme,
  Grid,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Watches } from "../../Store/Watches";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

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
  const item = Watches[name];
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/shop/${name}`);
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
              color: "secondary.main",
              px: 2,
              borderRadius: "0",
              backgroundColor: "transparent",
              whiteSpace: "nowrap",
              columnGap: "0.7rem",
              border: 1,
              borderColor: grey[500],
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "#fff",
              },
            }}
          >
            <ShoppingCartOutlinedIcon /> ADD TO CART
          </Button>
          <Button
            disableRipple
            variant="text"
            sx={{
              color: "secondary.main",
              px: 2,
              borderRadius: "0",
              backgroundColor: "transparent",
              border: 1,
              borderColor: grey[500],
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "#fff",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </Button>
        </Stack>
      )}
    </Grid>
  );
};
export default Product;
