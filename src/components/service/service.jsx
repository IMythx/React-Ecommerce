import { Grid, Typography, Stack } from "@mui/material";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const Service = ({ Icon, title, subTitle, border = true }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <Grid
      container
      item
      md={3}
      xs={12}
      justifyContent="center"
      alignItems={"center"}
      columnGap="0.5rem"
      borderRight={
        border && {
          md: 1,
          xs: "none",
        }
      }
      borderBottom={
        border && {
          md: "none",
          xs: 1,
        }
      }
      sx={{
        borderColor: `${grey[700]} !important`,
        "& svg": {
          color: "#eee",
          fontSize: {
            md: "2.6rem",
            xs: "4rem",
          },
        },
      }}
      direction={{
        md: "row",
        xs: "column",
      }}
      py={5}
    >
      {Icon}
      <Stack justifyContent="center">
        <Typography
          variant="body2"
          color={"primary.main"}
          fontSize={"0.91rem"}
          fontWeight={700}
        >
          {title}
        </Typography>
        <Typography variant="body2" color={"#eee"}>
          {subTitle}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default Service;
