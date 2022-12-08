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
const ItemDetails = () => {
  const { item } = useParams();
  const mainSliderImgs = Watches[item]["src"]["slider"];
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeTab, setActiveTab] = useState("description");
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Fragment>
      <Grid container py={10} justifyContent={"end"}>
        <Grid item sm={6} container>
          <Grid
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
              },
            }}
          >
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={3}
              arrows={false}
              focusOnSelect
              rows={1}
            >
              {mainSliderImgs.map((imgSrc, index) => (
                <img src={imgSrc} key={index} alt="" draggable={false} />
              ))}
            </Slider>
          </Grid>
          <Grid
            item
            xs={9.7}
            sx={{
              "& *:not(img)": {
                height: "100% !important",
              },
            }}
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
              {mainSliderImgs.map((imgSrc, index) => (
                <img src={imgSrc} key={index} alt="" />
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Grid
          item
          sm={5.6}
          px="2rem"
          container
          flexDirection={"column"}
          rowGap="2rem"
        >
          <Box>
            <Typography
              variant="h4"
              color="secondary.main"
              fontWeight={700}
              letterSpacing={-1.3}
              fontSize="2rem"
            >
              {item}
            </Typography>
            <Typography variant="h5" color="primary.main" fontWeight={700}>
              £{Watches[item]["price"]}
            </Typography>
            <Typography variant="body2" color="grey.main" fontWeight={600}>
              CATEGORIES: {Watches[item]["categories"].join(",")}
            </Typography>
            <Typography variant="body2" color="grey.main" fontWeight={600}>
              TAGS: {Watches[item]["tags"].join(", ")}
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="grey.main">
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
                px: 2,
                backgroundColor: "primary.main",
                whiteSpace: "nowrap",
                columnGap: "0.7rem",
                "&:hover": {
                  backgroundColor: "secondary.main",
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
                "&:hover": {
                  color: "secondary.light",
                },
              }}
            >
              <FavoriteBorderOutlinedIcon /> ADD TO WISHLIST
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            color="grey.main"
            fontSize={"0.4rem"}
            sx={{
              "& svg": {
                fontSize: "1rem",
              },
            }}
          >
            GET SOCIAL: <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
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
                fontSize: "0.7rem",
              }}
              label="DESCRIPTION"
            />
            <Tab
              value="info"
              sx={{
                fontSize: "0.7rem",
              }}
              label="ADDITIONAL INFORMATION"
            />
            <Tab
              value="review"
              sx={{
                fontSize: "0.7rem",
              }}
              label="REVIEW"
            />
          </Tabs>
        </Box>
        <Grid container pt={2}>
          {activeTab === "description" && <DescriptionTab />}
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ItemDetails;
