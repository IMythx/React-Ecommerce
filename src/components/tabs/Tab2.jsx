import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment } from "react";

const InfoTab = ({
  brand,
  manufacturer,
  display,
  strapMaterial,
  waterResistance,
  movement,
  color,
  alarmClock,
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      borderTop={1}
      borderColor={grey[500]}
      px={{
        md: 4,
        xs: 1,
      }}
    >
      <Typography
        pb={3}
        pt={2}
        width={"100%"}
        variant="h5"
        fontWeight={700}
        color={"secondary.main"}
        borderBottom={1}
        borderColor={grey[300]}
      >
        Additional information
      </Typography>
      <Typography
        pb={1.5}
        pt={1}
        width={{
          md: "20%",
          sm: "30%",
          xs: "50%",
        }}
        variant="subtitle1"
        fontWeight={600}
        color={"grey.main"}
        borderBottom={1}
        borderColor={grey[300]}
      >
        Brand
      </Typography>
      <Typography
        pb={1.5}
        pt={1}
        width={{
          md: "80%",
          sm: "70%",
          xs: "50%",
        }}
        textAlign={{
          sm: "start",
          xs: "center",
        }}
        variant="subtitle1"
        fontWeight={600}
        color={"grey.main"}
        borderBottom={1}
        borderColor={grey[300]}
      >
        {brand}
      </Typography>
      {manufacturer && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Manufacturer
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {manufacturer}
          </Typography>
        </Fragment>
      )}
      {color && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Color
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {color.join(", ")}
          </Typography>
        </Fragment>
      )}
      {display && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Display
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {display}
          </Typography>
        </Fragment>
      )}
      {strapMaterial && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Strap Material
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {strapMaterial}
          </Typography>
        </Fragment>
      )}
      {waterResistance && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Water Resistance
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {waterResistance}
          </Typography>
        </Fragment>
      )}
      {movement && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Movement
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {movement}
          </Typography>
        </Fragment>
      )}
      {alarmClock && (
        <Fragment>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "20%",
              sm: "30%",
              xs: "50%",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            Alarm Clock
          </Typography>
          <Typography
            pb={1.5}
            pt={1}
            width={{
              md: "80%",
              sm: "70%",
              xs: "50%",
            }}
            textAlign={{
              sm: "start",
              xs: "center",
            }}
            variant="subtitle1"
            fontWeight={600}
            color={"grey.main"}
            borderBottom={1}
            borderColor={grey[300]}
          >
            {alarmClock}
          </Typography>
        </Fragment>
      )}
    </Grid>
  );
};
export default InfoTab;
