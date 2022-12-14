import { Slider, Typography, Button, Stack } from "@mui/material";
import { useState, useLayoutEffect } from "react";
import { grey } from "@mui/material/colors";

const PriceFilter = ({ onChange }) => {
  const [filters, setFilters] = useState(
    new URLSearchParams(location.search).get("PRICE")
      ? [
          +new URLSearchParams(location.search).get("PRICE").split("-")[0],
          +new URLSearchParams(location.search).get("PRICE").split("-")[1],
        ]
      : [75, 500]
  );
  const handleChange = (event, newValue) => {
    setFilters(newValue);
  };
  const onClickHandler = () => {
    onChange(filters);
  };
  useLayoutEffect(() => {
    (filters[0] !== 75 || filters[1] !== 500) && onChange(filters);
  }, []);
  return (
    <Stack
      alignItems={"center"}
      rowGap={"1rem"}
      bgcolor={grey[100]}
      sx={{
        "& .MuiSlider-thumb": {
          bgcolor: grey[100],
          border: 3,
          borderColor: "primary.main",
        },
      }}
      py={4}
      px={2}
    >
      <Typography
        variant="subtitle2"
        fontSize={"0.90rem"}
        fontWeight={600}
        color="secondary.main"
      >
        PRICE
      </Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        value={filters}
        onChange={handleChange}
        min={75}
        max={500}
        valueLabelDisplay="auto"
      />
      <Typography color={"grey.main"} variant={"body2"} textAlign={"center"}>
        {filters.join(" - ")}
      </Typography>
      <Button
        disableRipple
        variant={"outlined"}
        sx={{
          width: "90%",
        }}
        onClick={onClickHandler}
      >
        FILTER
      </Button>
    </Stack>
  );
};
export default PriceFilter;
