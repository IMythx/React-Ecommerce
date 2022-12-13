import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const ItemsList = () => {
  const { watches } = useSelector((state) => state.shop);
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
      borderColor={`${grey[500]} !important`}
      height={"fit-content"}
    >
      {watches.map((item, index) => {
        return index >= 0 && index <= 2 ? (
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
            borderTop={1}
            borderColor={`${grey[500]} !important`}
          >
            <Product
              borderBottom={false}
              borderRight={false}
              xs={12}
              name={item}
            />
          </Grid>
        ) : (
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
        );
      })}
    </Grid>
  );
};

export default ItemsList;
