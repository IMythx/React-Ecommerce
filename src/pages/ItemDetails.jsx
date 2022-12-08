import { Grid, Typography, Box } from "@mui/material";
import { useRef, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Watches } from "../Store/Watches";
import Slider from "react-slick";

const ItemDetails = () => {
  const { item } = useParams();
  const [currentImg, setCurrentImg] = useState(1);
  const mainSliderImgs = Watches[item]["slider"];
  const smallSliderImgs = Watches[item]["smallSlider"];
  const MainSliderRef = useRef();
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={6} position={"relative"}>
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            afterChange={(index) => setCurrentImg(index)}
            arrows={false}
            ref={MainSliderRef}
          >
            {mainSliderImgs.map((imgSrc, index) => (
              <img
                src={imgSrc}
                key={index}
                style={{ width: "100%", minHeight: "100%" }}
                alt=""
              />
            ))}
          </Slider>
          <Box
            position={"absolute"}
            bottom={"20%"}
            sx={{
              "& img:hover": {
                scale: "1.1",
              },
            }}
          >
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
              afterChange={(index) => setCurrentImg(index)}
              arrows={false}
              ref={MainSliderRef}
            >
              {smallSliderImgs.map((imgSrc, index) => (
                <img
                  src={imgSrc}
                  key={index}
                  style={{ width: "100%", minHeight: "100%" }}
                  alt=""
                />
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box>
            <Typography variant="h2" color="secondary.main">
              {item}
            </Typography>
            <Typography variant="h3" color="primary.main">
              £{item.price}
            </Typography>
            <Typography variant="h3" color="primary.main">
              £{Watches[item][price]}
            </Typography>
            <Typography variant="body2" color="grey.main">
              CATEGORIES: {Watches[item][categories].join(",")}
            </Typography>
            <Typography variant="body2" color="grey.main">
              TAGS: {Watches[item][tags].join(", ")}
            </Typography>
          </Box>
          <Typography variant="subtitle2">
            The Grand Camel is a timepiece designed to suit the masculine and
            confident man because of its combination of thick yet smooth cognac
            coated calf leather, the stainless steel case and hands.
          </Typography>
          <Box d></Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ItemDetails;
