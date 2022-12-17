import {
  Button,
  Grid,
  List,
  Typography,
  Stack,
  Box,
  Link,
  ListItem,
  ListItemText,
} from "@mui/material";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AppleIcon from "@mui/icons-material/Apple";
import PlayStoreIcon from "../components/about/playStoreIcon";

const About = () => {
  return (
    <Grid
      container
      p={{
        md: 5,
        xs: 2,
      }}
      spacing={4}
    >
      <Grid item md={6} xs={12} container flexDirection={"column"} rowGap={5}>
        <Box>
          <img
            src={about1}
            style={{
              maxWidth: "100%",
              minHeight: "100%",
            }}
            alt=""
          />
        </Box>
        <Stack rowGap={3}>
          <Typography variant="h4" color="secondary.main" fontWeight={700}>
            BACKGROUND
          </Typography>
          <Typography variant="subtitle1" color="grey.main" fontWeight={600}>
            Watrix is a family-owned business with over 50 years of experience
            in the luxury watch and jewelry industry.
          </Typography>
        </Stack>
        <Box>
          <List>
            <ListItem
              disablePadding
              sx={{
                pl: "0.7rem",
                mb: "0.3rem",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: "grey.main",
                  fontSize: "0.6rem",
                }}
              />

              <ListItemText
                disableTypography
                sx={{
                  fontWeight: "600",
                  color: "grey.main",
                  pl: "0.5rem",
                }}
              >
                Wide range of goods
              </ListItemText>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                pl: "0.7rem",
                mb: "0.3rem",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: "grey.main",
                  fontSize: "0.6rem",
                }}
              />

              <ListItemText
                disableTypography
                sx={{
                  color: "grey.main",
                  pl: "0.5rem",
                  fontWeight: "600",
                }}
              >
                Affordable prices
              </ListItemText>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                pl: "0.7rem",
                mb: "0.3rem",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  color: "grey.main",
                  fontSize: "0.6rem",
                }}
              />

              <ListItemText
                disableTypography
                sx={{
                  color: "grey.main",
                  pl: "0.5rem",
                  fontWeight: "600",
                }}
              >
                New items every week
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
                disableTypography
                sx={{
                  color: "grey.main",
                  pl: "0.5rem",
                  fontWeight: "600",
                }}
              >
                Proven quality
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Stack direction={"row"} spacing={1.5}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              borderRadius: "0",
              p: 1.2,
              gap: "0.5rem",
              "&:hover": {
                bgcolor: "secondary.light",
              },
            }}
          >
            <AppleIcon
              sx={{
                fontSize: "2rem",
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                fontSize={10}
                color={"grey.main"}
                whiteSpace="nowrap"
              >
                Download on the
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight={1}
                color={"#fff"}
                fontWeight={600}
              >
                App Store
              </Typography>
            </Box>
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              borderRadius: "0",
              p: 1.2,
              gap: "0.5rem",
              "&:hover": {
                bgcolor: "secondary.light",
              },
            }}
          >
            <PlayStoreIcon />
            <Box>
              <Typography variant="subtitle2" fontSize={10} color={"grey.main"}>
                Get it on
              </Typography>
              <Typography
                variant="subtitle1"
                lineHeight={1}
                color={"#fff"}
                fontWeight={600}
                whiteSpace="nowrap"
              >
                Google Play
              </Typography>
            </Box>
          </Button>
        </Stack>
      </Grid>
      <Grid item md={6} xs={12} container flexDirection={"column"} rowGap={5}>
        <Box>
          <img
            src={about2}
            style={{
              maxWidth: "100%",
              minHeight: "100%",
            }}
            alt=""
          />
        </Box>
        <Stack rowGap={3}>
          <Typography variant="h4" color="secondary.main" fontWeight={700}>
            BE STYLISH!
          </Typography>
          <Typography variant="subtitle1" color="grey.main" fontWeight={600}>
            At Watrix we’re also passionate about offering our customers the
            very best prices on popular brand-name watches. We directly source
            top watches from around the globe.
          </Typography>
        </Stack>
        <Stack width={"55%"} rowGap={"0.6rem"}>
          <Stack direction={"row"} columnGap={"0.5rem"}>
            <Typography
              variant="h6"
              fontSize={"1.05rem"}
              color={"primary.main"}
              fontWeight={600}
            >
              Address:
            </Typography>
            <Typography variant="body1" color={"grey.main"} fontWeight={600}>
              7895 Piermont Dr NE Albuquerque, NM 198866, USA
            </Typography>
          </Stack>
          <Stack direction={"row"} columnGap={"0.5rem"}>
            <Typography
              variant="h6"
              fontSize={"1.05rem"}
              color={"primary.main"}
              fontWeight={600}
            >
              Phone:
            </Typography>
            <Link
              underline="none"
              variant="body1"
              href="tel:+123456789"
              fontWeight={600}
              sx={{
                transition: "200ms",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              color={"grey.main"}
            >
              +123456789
            </Link>
            ;
            <Link
              underline="none"
              variant="body1"
              href="tel:+123456789"
              fontWeight={600}
              sx={{
                transition: "200ms",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              color={"grey.main"}
            >
              +123456789
            </Link>
          </Stack>
          <Stack direction={"row"} columnGap={"0.5rem"}>
            <Typography
              variant="h6"
              fontSize={"1.05rem"}
              color={"primary.main"}
              fontWeight={600}
            >
              Hours:
            </Typography>
            <Typography variant="body1" color={"grey.main"} fontWeight={600}>
              ALL WEEK FROM 9 AM TO 9 PM
            </Typography>
          </Stack>
          <Stack direction={"row"} columnGap={"0.5rem"}>
            <Typography
              variant="h6"
              fontSize={"1.05rem"}
              color={"primary.main"}
              fontWeight={600}
              whiteSpace="nowrap"
            >
              E-mail:
            </Typography>
            <Link
              underline="none"
              variant="body1"
              fontWeight={600}
              href="mailto:lorem@lorem.com"
              sx={{
                transition: "200ms",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              color={"grey.main"}
            >
              lorem@lorem.com
            </Link>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About;
