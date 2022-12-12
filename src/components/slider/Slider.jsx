import img1 from "../../assets/slide-1.jpg";
import img2 from "../../assets/slide-2.jpg";
import img3 from "../../assets/slide-3.jpg";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { useState } from "react";
const myEffect = keyframes`
  to{
    opacity:1;
    transform:translate(0px)
  }
`;

const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  return (
    <Box
      sx={{
        cursor: mouseDown && "grabbing",
        "& .slick-list": {
          height: {
            lg: "auto",
            md: "400px",
            xs: "auto",
          },
        },
        "& img": {
          width: {
            md: "100%",
            sm: "150%",
            xs: "230%",
          },
          transform: {
            md: "translateX(0)",
            xs: "translateX(-220px)",
          },
        },
      }}
      mb={"6rem"}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        afterChange={(index) => setIndex(index)}
        arrows={false}
      >
        <Box
          sx={{ outline: "none", position: "relative" }}
          px={1}
          overflow={"hidden"}
        >
          <Box
            sx={{
              position: "absolute",
              animation:
                index === 0 ? `${myEffect} 400ms ease-in 1 forwards` : "",
              opacity: 0,
              transform: "translateY(80px)",
            }}
            top={{
              xl: "35%",
              lg: "30%",
              xs: "25%",
            }}
            left={"7%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            rowGap={{
              lg: "0.7rem",
              xs: "0.4rem",
            }}
            zIndex={"tooltip"}
          >
            <Typography
              color={"primary.main"}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              CONSECTETUER ADIPISCING ELIT
            </Typography>
            <Typography
              variant="h2"
              width={"60%"}
              letterSpacing={{
                md: -3,
                sm: -2,
                xs: 0,
              }}
              fontWeight={"bold"}
              fontSize={{
                md: "3.75rem",
                sm: "2.8rem",
                xs: "1.5rem",
              }}
            >
              GREAT WATCH FROM THE WATRIX
            </Typography>
            <Typography
              color={grey[500]}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              Highlight your status and style
            </Typography>
            <Button
              sx={{
                width: "fit-content",
                backgroundColor: "primary.main",
                color: "#fff",
                "&:hover": {
                  color: "primary.main",
                  border: 1,
                  borderColor: grey[500],
                },
              }}
              disableRipple
              component={Link}
              to="/shop"
            >
              SHOP NOW
            </Button>
          </Box>
          <img src={img1} alt="" />
        </Box>
        <Box
          sx={{ outline: "none", position: "relative" }}
          px={1}
          overflow={"hidden"}
        >
          <Box
            sx={{
              position: "absolute",
              animation:
                index === 1 ? `${myEffect} 400ms ease-in 1 forwards` : "",
              opacity: 0,
              transform: "translateY(80px)",
            }}
            top={{
              xl: "35%",
              lg: "30%",
              xs: "25%",
            }}
            left={"7%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            rowGap={{
              lg: "0.7rem",
              xs: "0.4rem",
            }}
            zIndex={"tooltip"}
          >
            <Typography
              color={"primary.main"}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              CONSECTETUER ADIPISCING ELIT
            </Typography>
            <Typography
              variant="h2"
              width={"60%"}
              letterSpacing={{
                md: -3,
                sm: -2,
                xs: 0,
              }}
              fontWeight={"bold"}
              fontSize={{
                md: "3.75rem",
                sm: "2.8rem",
                xs: "1.5rem",
              }}
            >
              GREAT WATCH FROM THE WATRIX
            </Typography>
            <Typography
              color={grey[500]}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              Highlight your status and style
            </Typography>
            <Button
              sx={{
                width: "fit-content",
                backgroundColor: "primary.main",
                color: "#fff",
                "&:hover": {
                  color: "primary.main",
                  border: 1,
                  borderColor: grey[500],
                },
              }}
              component={Link}
              to="/shop"
              disableRipple
            >
              SHOP NOW
            </Button>
          </Box>
          <img src={img2} alt="" />
        </Box>
        <Box
          sx={{ outline: "none", position: "relative" }}
          px={1}
          overflow={"hidden"}
        >
          <Box
            sx={{
              position: "absolute",
              animation:
                index === 2 ? `${myEffect} 400ms ease-in 1 forwards` : "",
              opacity: 0,
              transform: "translateY(80px)",
            }}
            top={{
              xl: "35%",
              lg: "30%",
              xs: "25%",
            }}
            left={"7%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            rowGap={{
              lg: "0.7rem",
              xs: "0.4rem",
            }}
            zIndex={"tooltip"}
          >
            <Typography
              color={"primary.main"}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              CONSECTETUER ADIPISCING ELIT
            </Typography>
            <Typography
              variant="h2"
              width={"60%"}
              letterSpacing={{
                md: -3,
                sm: -2,
                xs: 0,
              }}
              fontWeight={"bold"}
              fontSize={{
                md: "3.75rem",
                sm: "2.8rem",
                xs: "1.5rem",
              }}
            >
              GREAT WATCH FROM THE WATRIX
            </Typography>
            <Typography
              color={grey[500]}
              fontSize={{
                md: "1rem",
                sm: "0.8rem",
                xs: "0.6rem",
              }}
            >
              Highlight your status and style
            </Typography>
            <Button
              sx={{
                width: "fit-content",
                backgroundColor: "primary.main",
                color: "#fff",
                "&:hover": {
                  color: "primary.main",
                  border: 1,
                  borderColor: grey[500],
                },
              }}
              component={Link}
              to="/shop"
              disableRipple
            >
              SHOP NOW
            </Button>
          </Box>
          <img src={img3} alt="" />
        </Box>
      </Slider>
    </Box>
  );
};

export default ImgSlider;
