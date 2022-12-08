import {
  Button,
  createTheme,
  Grid,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Watches } from "../../Store/Watches";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

const Product = ({
  name,
  border = true,
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
  const item = Watches[name];
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/shop/${name}`);
  const raise = keyframes`
  to{
    opacity:1;
    bottom:10%
  }
  `;
  return (
    <Grid
      md={3}
      sm={6}
      xs={12}
      item
      container
      justifyContent={"center"}
      alignItems={"center"}
      borderRight={
        border && {
          md: 1,
          sm: !removeBorderatMediumScreen && 1,
          xs: "none",
        }
      }
      position={"relative"}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={{
        cursor: "pointer",
        borderColor: `${grey[700]} !important`,
      }}
      pt={5}
      pb={15}
      borderBottom={{
        md: "none",
        xs: 1,
      }}
    >
      <img
        src={item.src.main}
        style={{ width: "80%" }}
        alt=""
        onClick={clickHandler}
      />
      {!isHovered && (
        <Typography
          variant="body2"
          color={"secondary.main"}
          textAlign={"center"}
          position={"absolute"}
          width={"100%"}
          bottom={"15%"}
          fontWeight={700}
          sx={{
            opacity: "0",
            animation: `${raise} 300ms linear 1 forwards`,
          }}
        >
          {name} <br /> £{item.price}
        </Typography>
      )}
      {isHovered && (
        <Stack
          direction={"row"}
          position={"absolute"}
          columnGap="1rem"
          width={"100%"}
          bottom={"0%"}
          justifyContent={"center"}
          sx={{
            opacity: "0",
            animation: `${raise} 300ms linear 1 forwards`,
          }}
        >
          <Button
            disableRipple
            variant="text"
            sx={{
              color: "secondary.main",
              px: 2,
              backgroundColor: "transparent",
              whiteSpace: "nowrap",
              columnGap: "0.7rem",
              border: 1,
              borderColor: "secondary.main",
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
              backgroundColor: "transparent",
              border: 1,
              borderColor: "secondary.main",
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
