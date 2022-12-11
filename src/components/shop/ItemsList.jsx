import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import Product from "../Product/Product";

const ItemsList = () => {
  return (
    <Grid
      item
      container
      sm={8}
      xs={12}
      borderLeft={{
        sm: 1,
        xs: "none",
      }}
      borderTop={1}
      borderColor={`${grey[500]} !important`}
    >
      {[
        "BOLD ROUND ANALOG GUNMETAL DIAL",
        "DAPPER ROUND ANALOG",
        "ROUND ANALOG WHITE & BEE DIAL LADIES",
        "ROUND ANALOG WHITE DIAL LADIES",
        "THE RUNWELL SPORT CHRONO",
        "TATUM ROUND ANALOG BLUE DIAL LADIES",
        "THE RUNWELL SPORT CHRONO SILVER",
        "THE BEDROCK CHRONO",
        "THE CANFIELD SPORT",
        "THE LAKE MICHIGAN MONSTER",
        "THE LAKE MICHIGAN MONSTER BLACK",
        "THE RUNWELL SPORT",
      ].map((item, index) => (
        <Grid
          key={index}
          item
          md={4}
          sm={6}
          xs={12}
          borderRight={{
            sm: 1,
            xs: "none",
          }}
          borderBottom={1}
          borderColor={`${grey[500]} !important`}
        >
          <Product
            borderBottom={false}
            borderRight={false}
            xs={12}
            name={item}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsList;
