import { Button, Grid, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import ImgSlider from "../components/slider/Slider";
import brand1 from "../assets/brand-logo-1.jpg";
import brand2 from "../assets/brand-logo-2.jpg";
import brand3 from "../assets/brand-logo-3.jpg";
import brand4 from "../assets/brand-logo-4.jpg";
import brand5 from "../assets/brand-logo-5.jpg";
import brand6 from "../assets/brand-logo-6.jpg";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import Product from "../components/Product/Product";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import rectImg from "../assets/Rectangle.jpg";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Service from "../components/service/service";

const Home = () => {
  return (
    <Fragment>
      <ImgSlider />
      <Box
        display={"grid"}
        justifyContent={"center"}
        gridTemplateColumns={{
          md: "repeat(auto-fit,minmax(100px, 1fr) )",
          sm: "repeat(auto-fit,minmax(150px, 1fr) )",
        }}
        gap="2rem"
        px={5}
        pb={12}
        borderColor={grey[500]}
        borderBottom={1}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand1} alt="" />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand2} alt="" />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand3} alt="" />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand4} alt="" />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand5} alt="" />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={brand6} alt="" />
        </Stack>
      </Box>
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
        TREND WATCHES
      </Typography>
      <Grid container borderBottom={1} borderTop={1} borderColor={grey[500]}>
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"BOLD ROUND ANALOG GUNMETAL DIAL"}
        />
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"DAPPER ROUND ANALOG"}
          removeBorderatMediumScreen={true}
        />
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"ROUND ANALOG WHITE & BEE DIAL LADIES"}
        />
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"ROUND ANALOG WHITE DIAL LADIES"}
          borderRight={false}
        />
      </Grid>
      <Grid container>
        <Grid
          item
          container
          flexDirection={"column"}
          bgcolor={grey[100]}
          borderBottom={1}
          borderColor={grey[500]}
          md={6}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          rowGap={"1rem"}
          py={{
            md: "0",
            xs: 5,
          }}
        >
          <Typography
            variant="subtitle1"
            color={"primary.main"}
            textAlign={"center"}
            fontWeight={500}
          >
            Special offer
          </Typography>
          <Typography
            variant={"h2"}
            color={"secondary.main"}
            textAlign={"center"}
            fontWeight={600}
            fontSize={{
              sm: "3.75rem",
              xs: "2.7rem",
            }}
            letterSpacing={{
              sm: "unset",
              xs: -2,
            }}
          >
            WATCHES <br /> WITH
            <Typography
              component={"span"}
              variant={"h2"}
              textAlign={"center"}
              color={"primary.main"}
              ml={1.8}
              fontWeight={"inherit"}
              fontSize={{
                sm: "3.75rem",
                xs: "2.7rem",
              }}
              letterSpacing={{
                sm: "unset",
                xs: -2,
              }}
            >
              12% OFF
            </Typography>
          </Typography>
          <Typography
            variant="subtitle2"
            color={"grey.main"}
            textAlign={"center"}
          >
            Find your perfectly suited watch and get it with a discount
          </Typography>
          <Button
            variant="text"
            disableRipple
            component={Link}
            to="/shop"
            sx={{
              color: "secondary.main",
              letterSpacing: -1,
            }}
          >
            GET A DISCOUNT <ArrowRightAltIcon />
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <img
            src={rectImg}
            style={{ width: "100%", minHeight: "100%" }}
            alt=""
          />
        </Grid>
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
        CHOOSE YOUR WATCH
      </Typography>
      <Grid container>
        <Grid
          item
          container
          borderTop={1}
          borderRight={{
            md: 1,
            xs: "none",
          }}
          sx={{
            borderColor: `${grey[500]} !important`,
          }}
          md={6}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Stack
            alignItems={"end"}
            justifyContent={"center"}
            position="absolute"
            width={"80%"}
          >
            <Typography
              variant="h4"
              fontFamily={"Barlow Condensed"}
              fontStyle="italic"
            >
              for
              <Typography
                component={"span"}
                variant="h4"
                fontSize={"2.3rem"}
                fontWeight={600}
                pl={1.5}
                fontStyle="normal"
              >
                HER
              </Typography>
            </Typography>
            <Button
              variant="text"
              disableRipple
              component={Link}
              to="/shop"
              sx={{
                color: "secondary.main",
                letterSpacing: -1,
              }}
            >
              SHOP NOW <ArrowRightAltIcon />
            </Button>
          </Stack>
          <img
            src="src/assets/for-her.jpg"
            style={{ width: "100%", minHeight: "100%" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          container
          borderTop={1}
          sx={{
            borderColor: `${grey[500]} !important`,
          }}
          md={6}
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Stack
            alignItems={"start"}
            justifyContent={"center"}
            position="absolute"
            width={"80%"}
          >
            <Typography
              variant="h4"
              fontFamily={"Barlow Condensed"}
              fontStyle="italic"
            >
              for
              <Typography
                variant="h4"
                fontSize={"2.3rem"}
                fontWeight={600}
                pl={1.5}
                fontStyle="normal"
                component={"span"}
              >
                HIM
              </Typography>
            </Typography>
            <Button
              variant="text"
              disableRipple
              component={Link}
              to="/shop"
              sx={{
                color: "secondary.main",
                letterSpacing: -1,
              }}
            >
              SHOP NOW <ArrowRightAltIcon />
            </Button>
          </Stack>
          <img
            src="src/assets/for-him.jpg"
            style={{ width: "100%", minHeight: "100%" }}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container bgcolor={"secondary.main"}>
        <Service
          Icon={<LocalShippingOutlinedIcon />}
          title={"FREE SHIPPING"}
          subTitle={"Don't pay for delivery"}
        />
        <Service
          Icon={<PaidOutlinedIcon />}
          title={"MONEY GUARANTEE"}
          subTitle={"Money back option"}
        />
        <Service
          Icon={<AdminPanelSettingsOutlinedIcon />}
          title={"SAFE SHOPPING"}
          subTitle={"Privacy policy guarantee"}
        />
        <Service
          Icon={<SupportAgentIcon />}
          title={"ONLINE SUPPORT"}
          subTitle={"Consult with our suppoters"}
          border={false}
        />
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
        POPULAR WATCHES
      </Typography>
      <Grid container borderBottom={1} borderTop={1} borderColor={grey[500]}>
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"ROUND ANALOG WHITE & BEE DIAL LADIES"}
        />
        <Product
          md={3}
          sm={6}
          xs={12}
          name={"THE RUNWELL SPORT CHRONO"}
          removeBorderatMediumScreen={true}
        />
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
          name={"BOLD ROUND ANALOG GUNMETAL DIAL"}
          borderRight={false}
        />
      </Grid>
    </Fragment>
  );
};
export default Home;
