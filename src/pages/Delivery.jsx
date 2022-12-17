import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  createTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Delivery = () => {
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
    <Stack rowGap={"4rem"} mt={10} mb={20} px={5}>
      <Box>
        <Typography
          variant="h4"
          color="secondary.main"
          fontWeight={700}
          textAlign={"center"}
        >
          DELIVERY AND RETURNS
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey.main"
          textAlign={"center"}
          mt={2}
        >
          See below for information about the delivery & returns options in your
          country.
        </Typography>
      </Box>
      <Grid
        container
        columnGap={"2rem"}
        flexWrap={{
          md: "nowrap",
          xs: "wrap",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          borderTop={1}
          borderBottom={{
            md: 1,
            xs: 0,
          }}
          borderColor={`${grey[500]} !important`}
          py={3}
        >
          <Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontWeight={700}
              >
                STANDARD DELIVERY
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary.main"
                fontWeight={700}
              >
                £20
              </Typography>
            </Stack>
            <Typography variant="body2" color="grey.main" mb={2}>
              Delivered on or before Thursday, 20 September 2022
            </Typography>
            <Divider
              sx={{
                width: "15px",
                height: "3px",
                backgroundColor: "primary.main",
                mb: 2,
              }}
            />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} columnGap={0.5}>
            <Typography
              variant="subtitle2"
              color="primary.main"
              fontWeight={700}
            >
              NOTE:
            </Typography>
            <Typography variant="body2" color="grey.main" fontSize={13}>
              Subject to placing your order before specific cut-off times.
              Details available in checkout.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          borderTop={1}
          borderBottom={1}
          borderColor={`${grey[500]} !important`}
          py={3}
        >
          <Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                fontWeight={700}
              >
                EXPRESS DELIVERY
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary.main"
                fontWeight={700}
              >
                £30
              </Typography>
            </Stack>
            <Typography variant="body2" color="grey.main" mb={2}>
              Delivered on or before Wednesday, 12 September 2022
            </Typography>
            <Divider
              sx={{
                width: "15px",
                height: "3px",
                backgroundColor: "primary.main",
                mb: 2,
              }}
            />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} columnGap={0.5}>
            <Typography
              variant="subtitle2"
              color="primary.main"
              fontWeight={700}
            >
              NOTE:
            </Typography>
            <Typography variant="body2" color="grey.main" fontSize={13}>
              Subject to placing your order before specific cut-off times.
              Details available in checkout.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction={"row"}
        bgcolor={grey[100]}
        py={1.5}
        pl={2}
        alignItems={"center"}
        columnGap={1}
      >
        <HelpOutlineIcon
          sx={{
            color: "primary.light",
            fontSize: "1.2rem",
          }}
        />

        <Typography variant="subtitle2" color={"grey.main"}>
          NEED MORE INFORMATION? See our{" "}
          <Typography
            component={"span"}
            variant="subtitle2"
            color={"primary.main"}
            fontWeight={700}
            sx={{
              cursor: "pointer",
              transition: "200ms",
              "&:hover": {
                color: "grey.main",
              },
            }}
          >
            Delivery FAQ​
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Delivery;
