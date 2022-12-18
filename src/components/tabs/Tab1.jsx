import { Fragment } from "react";
import {
  Grid,
  Typography,
  Stack,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import img1 from "../../assets/single-1.jpg";
import img2 from "../../assets/single-2.jpg";

const DescriptionTab = () => {
  return (
    <Fragment>
      <Grid
        item
        container
        flexDirection={"column"}
        rowGap="2rem"
        sm={6}
        xs={12}
        px={{
          sm: 6,
          xs: 2,
        }}
        pt={10}
        pb={5}
        alignItems={"start"}
        order={{
          sm: 2,
          xs: 1,
        }}
        borderTop={1}
        borderBottom={1}
        borderColor={`${grey[500]} !important`}
      >
        <Stack spacing={2}>
          <Typography
            variant="subtitle2"
            color={"secondary.main"}
            fontWeight={700}
          >
            DESCRIPTION
          </Typography>
          <Typography variant="body2" color={"grey.main"}>
            The Grand Camel is a timepiece designed to suit the masculine and
            confident man because of its combination of thick yet smooth cognac
            coated calf leather, the stainless steel case and hands.
          </Typography>
        </Stack>
        <List>
          <ListSubheader
            disableGutters
            sx={{
              color: "secondary.main",
              fontWeight: 700,
            }}
          >
            PRODUCT DETAILS
          </ListSubheader>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Case thickness: 6 mm
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Case thickness: 6 mm
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Dial color: white
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Strap width: 20 mm
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Strap color: brown
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Interchangeble strap: Yes
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              pl: "0.7rem",
            }}
          >
            <FiberManualRecordIcon
              sx={{
                color: "grey.main",
                fontSize: "0.6rem",
              }}
            />

            <ListItemText
              sx={{
                color: "grey.main",
                pl: "0.5rem",
              }}
            >
              Material: doulble plated stainless steel
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        order={{
          sm: 1,
          xs: 2,
        }}
        borderTop={1}
        borderBottom={1}
        borderRight={{
          sm: 1,
          xs: "none",
        }}
        borderColor={`${grey[500]} !important`}
      >
        <img
          src={img1}
          alt=""
          style={{
            width: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        order={3}
        borderRight={{
          sm: 1,
          xs: "none",
        }}
        borderBottom={{
          sm: 1,
          xs: "none",
        }}
        borderColor={`${grey[500]} !important`}
        container
        flexDirection={"column"}
        justifyContent="center"
        px={{
          sm: 10,
          xs: 2,
        }}
        py={{
          sm: 0,
          xs: 4,
        }}
        rowGap={3}
      >
        <Typography variant="subtitle1" color="secondary.main" fontWeight={700}>
          DESCRIPTION
        </Typography>
        <Typography variant="body1" color="grey.main">
          With a flawlessly round and simple dial, a classy leather band and an
          elegant casing, you have a timepiece that proves that perfection in
          engineering not only is a possibility, but a reality.
        </Typography>
        <Typography variant="body1" color="grey.main">
          It’s a functional unisex watch. it can be worn in scenarios where it
          is likely to be splashed but not immersed in water. It can be worn
          while washing your hands and will be fine in rain. We ship it with an
          original box and a guarantee from the manufacturer.
        </Typography>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            "& svg": {
              cursor: "pointer",
              transition: "200ms",
              fontSize: "1.3rem",
              color: "grey.main",
              "&:hover": {
                color: "primary.main",
              },
            },
          }}
        >
          <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
        </Stack>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        order={4}
        borderTop={{
          sm: "none",
          xs: 1,
        }}
        borderBottom={1}
        borderColor={`${grey[500]} !important`}
      >
        <img
          src={img2}
          alt=""
          style={{
            width: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Fragment>
  );
};
export default DescriptionTab;
