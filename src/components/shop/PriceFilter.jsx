import { Slider, Box, Typography } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
const PriceFilter = () => {
  const [value, setValue] = useState([75, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        bgcolor: grey[100],
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
        defaultValue={value}
        onChange={handleChange}
        min={75}
        max={500}
        valueLabelDisplay="auto"
      />
      <Typography color={"grey.main"} variant={"body2"} textAlign={"center"}>
        {value.join(" - ")}
      </Typography>
    </Box>
  );
};
export default PriceFilter;
