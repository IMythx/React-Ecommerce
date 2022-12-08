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
        px={6}
        pt={10}
        pb={5}
        alignItems={"start"}
        order={{
          sm: 2,
          xs: 1,
        }}
        borderTop={1}
        borderBottom={1}
        borderColor={grey[500]}
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
        borderRight={1}
        borderColor={grey[500]}
      >
        <img
          src="../src/assets/single-1.jpg"
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
