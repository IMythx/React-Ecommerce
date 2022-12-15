import { Grid, Typography, Box, Button, Stack, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Watches } from "../Store/Watches";
import Slider from "react-slick";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionTab from "../components/tabs/Tab1";
import Product from "../components/Product/Product";
import { grey } from "@mui/material/colors";
import InfoTab from "../components/tabs/Tab2";
import ReviewsTab from "../components/tabs/Tab3";
import { cartActions } from "../Store/cartSlice";
import { favoritesActions } from "../Store/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";

const ItemDetails = () => {
  const { item } = useParams();

  const imgsSrc = Watches[item]["src"];

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const { favorites } = useSelector((state) => state.favorites);

  const isInCart = cart.indexOf(item) !== -1;

  const isInfavorites = favorites.indexOf(item) !== -1;

  const [nav1, setNav1] = useState();

  const [nav2, setNav2] = useState();

  const [activeTab, setActiveTab] = useState("description");

  const [mouseDown, setMouseDown] = useState(false);

  const onAddToCartHandler = () =>
    dispatch(
      cartActions.addItem({ name: item, price: +Watches[item]["price"] })
    );

  const onAddToFavoritesHandler = () =>
    dispatch(favoritesActions.addItem({ name: item }));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Fragment>
      <Grid container py={10} justifyContent={"end"}>
        <Grid item sm={6} container>
          <Grid
            item
            xs={2.3}
            height="fit-content"
            sx={{
              "& *:not(img)": {
                height: "100% !important",
                width: "100% !important",
              },
              "& .slick-track": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              },
            }}
          >
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={4}
              arrows={false}
              focusOnSelect
              rows={1}
              swipeToSlide={false}
            >
              {imgsSrc.map((imgSrc, index) => (
                <img src={imgSrc} key={index} alt="" draggable={false} />
              ))}
            </Slider>
          </Grid>
          <Grid
            item
            xs={9.7}
            sx={{
              cursor: mouseDown && "grabbing",
              "& *:not(img)": {
                height: "100% !important",
              },
            }}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
          >
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              {imgsSrc.map((imgSrc, index) => (
                <img src={imgSrc} key={index} alt="" />
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Grid
          item
          sm={5.6}
          px={{
            md: 5,
            xs: 1,
          }}
          pt={5}
          container
          flexDirection={"column"}
          rowGap="3rem"
        >
          <Stack rowGap={1}>
            <Typography
              variant="h4"
              color="secondary.main"
              fontWeight={700}
              letterSpacing={-1.3}
            >
              {item}
            </Typography>
            <Typography variant="h4" color="primary.main" fontWeight={700}>
              £{Watches[item]["price"]}
            </Typography>
            <Typography variant="body2" color="grey.main" fontWeight={600}>
              SKU: N/A
            </Typography>
            <Typography variant="body2" color="grey.main" fontWeight={600}>
              CATEGORIES: {Watches[item]["categories"].join(",")}
            </Typography>
            <Typography variant="body2" color="grey.main" fontWeight={600}>
              TAGS: {Watches[item]["tags"].join(", ")}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            color="grey.main"
            width={{
              sm: "85%",
              xs: "auto",
            }}
          >
            The Grand Camel is a timepiece designed to suit the masculine and
            confident man because of its combination of thick yet smooth cognac
            coated calf leather, the stainless steel case and hands.
          </Typography>
          <Stack
            direction={"row"}
            columnGap="1rem"
            width={"100%"}
            bottom={"0%"}
            justifyContent={"start"}
          >
            <Button
              disableRipple
              variant="text"
              sx={{
                color: "#fff",
                borderRadius: "0",
                px: 2,
                backgroundColor: "primary.main",
                columnGap: !isInCart && "0.7rem",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
              onClick={onAddToCartHandler}
            >
              {!isInCart && (
                <Fragment>
                  <ShoppingCartOutlinedIcon />
                  ADD TO CART
                </Fragment>
              )}
              {isInCart && (
                <Fragment>
                  <CheckIcon />
                  ADDED
                </Fragment>
              )}
            </Button>
            <Button
              disableRipple
              variant="text"
              sx={{
                color: "secondary.main",
                borderRadius: "0",
                px: 2,
                backgroundColor: "transparent",
                "&:hover": {
                  color: "secondary.light",
                },
              }}
              onClick={onAddToFavoritesHandler}
            >
              <FavoriteBorderOutlinedIcon />
              {!isInfavorites ? "ADD TO WISHLIST" : "ADDED"}
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            color="grey.main"
            fontSize={"0.9rem"}
            sx={{
              "& svg": {
                cursor: "pointer",
                fontSize: "1rem",
                ":hover": {
                  color: "primary.main",
                },
              },
            }}
            spacing={1}
          >
            GET SOCIAL:{" "}
            <FacebookIcon
              sx={{
                ml: 0.5,
              }}
            />{" "}
            <InstagramIcon /> <TwitterIcon />
          </Stack>
        </Grid>
      </Grid>
      <Grid>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            centered
          >
            <Tab
              value="description"
              sx={{
                fontSize: "0.8rem",
              }}
              label="DESCRIPTION"
            />
            <Tab
              value="info"
              sx={{
                fontSize: "0.8rem",
              }}
              label="ADDITIONAL INFORMATION"
            />
            <Tab
              value="reviews"
              sx={{
                fontSize: "0.8rem",
              }}
              label="REVIEWS(1)"
            />
          </Tabs>
        </Box>
        <Grid container pt={2}>
          {activeTab === "description" && <DescriptionTab />}
          {activeTab === "info" && (
            <InfoTab
              brand={Watches[item]["brand"]}
              manufacturer={Watches[item]["Manufacturer"]}
              display={Watches[item]["Display"]}
              color={Watches[item]["color"]}
              strapMaterial={Watches[item]["Strap Material"]}
              waterResistance={Watches[item]["Water Resistance"]}
              movement={Watches[item]["Movement"]}
              alarmClock={Watches[item]["Alarm Clock"]}
            />
          )}
          {activeTab === "reviews" && <ReviewsTab name={item.toLowerCase()} />}
        </Grid>
        <Typography
          variant="h4"
          fontWeight={"500"}
          color={"secondary.main"}
          textAlign={"center"}
          letterSpacing={{
            md: -1,
            xs: "auto",
          }}
          fontSize={"1.9rem"}
          my={5}
        >
          RECOMENDED WATCHES
        </Typography>
        <Grid container borderBottom={1} borderTop={1} borderColor={grey[500]}>
          <Product
            md={3}
            sm={6}
            xs={12}
            name={"TATUM ROUND ANALOG BLUE DIAL LADIES"}
          />
          <Product
            md={3}
            sm={6}
            xs={12}
            name={"ROUND ANALOG WHITE & BEE DIAL LADIES"}
            removeBorderatMediumScreen={true}
          />
          <Product md={3} sm={6} xs={12} name={"THE RUNWELL SPORT CHRONO"} />

          <Product
            md={3}
            sm={6}
            xs={12}
            name={"THE RUNWELL SPORT CHRONO SILVER"}
            borderRight={false}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ItemDetails;
