import { Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import BrandsFilter from "../components/shop/BrandsFilter";
import ColorsFilter from "../components/shop/ColorsFilter";
import ItemsList from "../components/shop/ItemsList";
import PriceFilter from "../components/shop/PriceFilter";
import StrapFilter from "../components/shop/StrapFilter";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [filters, setFilters] = useState({
    BRAND: [],
    PRICE: [],
    COLOR: [],
    STRAP: [],
  });
  const navigate = useNavigate();

  const onBrandsChange = (brandsFilter) => {
    setFilters(
      (prev) =>
        (prev = {
          ...prev,
          BRAND: brandsFilter,
        })
    );
  };
  const onPriceChange = (priceFilter) => {
    setFilters(
      (prev) =>
        (prev = {
          ...prev,
          PRICE: priceFilter,
        })
    );
  };
  const onColorChange = (colorsFilter) => {
    setFilters(
      (prev) =>
        (prev = {
          ...prev,
          COLOR: colorsFilter,
        })
    );
  };
  const onStrapChange = (strapFilter) => {
    setFilters(
      (prev) =>
        (prev = {
          ...prev,
          STRAP: strapFilter,
        })
    );
  };

  useEffect(() => {
    const brandsQueries =
      filters.BRAND.length &&
      filters.BRAND.reduce((accu, curr) => accu + `&BRAND=${curr}`);
    const PriceQueries = filters.PRICE.length && filters.PRICE.join("-");
    const colorsQueries =
      filters.COLOR.length &&
      filters.COLOR.reduce((accu, curr) => accu + `&COLOR=${curr}`);
    const strapQueries =
      filters.STRAP.length &&
      filters.STRAP.reduce((accu, curr) => accu + `&STRAP=${curr}`);
    navigate({
      pathname: location.pathname,
      search: `${PriceQueries ? `PRICE=${PriceQueries}` : ""}${
        brandsQueries
          ? PriceQueries
            ? `&BRAND=${brandsQueries}`
            : `BRAND=${brandsQueries}`
          : ""
      }${
        colorsQueries
          ? brandsQueries
            ? `&COLOR=${colorsQueries}`
            : `COLOR=${colorsQueries}`
          : ""
      }${
        strapQueries
          ? colorsQueries
            ? `&STRAP=${strapQueries}`
            : `STRAP=${strapQueries}`
          : ""
      }`,
    });
  }, [filters]);

  return (
    <Grid container columnGap={0.5} rowGap={"3rem"} py={2}>
      <Grid item xs={12} container rowGap={"3rem"} flexDirection={"column"}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            pl: 2.5,
          }}
        >
          <Link
            component={RouterLink}
            to="/"
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
        px={{
          sm: 4,
          xs: 2,
        }}
      >
        <BrandsFilter onChange={onBrandsChange} />
        <PriceFilter onChange={onPriceChange} />
        <ColorsFilter onChange={onColorChange} />
        <StrapFilter onChange={onStrapChange} />
      </Grid>
      <ItemsList />
    </Grid>
  );
};

export default Shop;
