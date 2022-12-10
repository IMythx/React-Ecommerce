import { Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BrandsFilter from "../components/shop/BrandsFilter";
import ColorsFilter from "../components/shop/ColorsFilter";
import ItemsList from "../components/shop/ItemsList";
import PriceFilter from "../components/shop/PriceFilter";
import StrapFilter from "../components/shop/StrapFilter";
const Shop = () => {
  return (
    <Grid container columnGap={1} rowGap={"3rem"} py={2}>
      <Grid item xs={12}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            pl: 2.5,
          }}
        >
          <Link
            component={RouterLink}
            to="/home"
            underline="hover"
            color="grey.main"
            variant="body2"
            fontSize={"0.75rem"}
            fontWeight={600}
          >
            HOME
          </Link>
          <Link
            underline="hover"
            color="grey.main"
            component={RouterLink}
            to="/shop"
            variant="body2"
            fontSize={"0.75rem"}
            fontWeight={600}
          >
            SHOP
          </Link>
          <Typography
            variant="body2"
            fontSize={"0.75rem"}
            fontWeight={600}
            color="text.primary"
          >
            For Him
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h4"
          color={"secondary.main"}
          fontWeight={600}
          textAlign={"center"}
        >
          MEN`S WATCHES
        </Typography>
      </Grid>
      <Grid
        item
        sm={3.5}
        xs={12}
        container
        flexDirection={"column"}
        rowGap={"1rem"}
        px={4}
        position={"sticky"}
        top={3}
      >
        <BrandsFilter />
        <PriceFilter />
        <ColorsFilter />
        <StrapFilter />
      </Grid>
      <ItemsList />
    </Grid>
  );
};

export default Shop;
