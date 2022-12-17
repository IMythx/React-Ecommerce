import {
  Box,
  Grid,
  Typography,
  TextareaAutosize,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { memo } from "react";
import { grey } from "@mui/material/colors";

const Contacts = () => {
  return (
    <Stack rowGap={"3rem"} mb={8}>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d55241.69921456905!2d31.234320495458995!3d30.07682051152999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1671221817817!5m2!1sen!2seg"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          frameBorder="0"
        ></iframe>
      </Box>
      <Stack rowGap={"1rem"}>
        <Typography
          variant="h5"
          color={"secondary.main"}
          fontWeight={700}
          textAlign={"center"}
        >
          WRITE TO US
        </Typography>
        <Typography color="grey.main" fontWeight={600} textAlign={"center"}>
          We're happy to answer any questions you have or provide you with an
          estimate. Just <br /> send us a message in the form below with any
          questions.
        </Typography>
        <Grid
          container
          columnGap={"2rem"}
          flexWrap={{
            md: "nowrap",
            xs: "wrap",
          }}
          mt={3}
        >
          <Grid
            item
            md={6}
            container
            flexDirection={"column"}
            rowGap={"2rem"}
            pt={3.5}
          >
            <TextField
              size="small"
              label="Name *"
              variant="outlined"
              placeholder="Please Enter Your Name"
              color="secondary"
              sx={{
                width: "100%",
                "& input": {
                  color: grey[600],
                },
                "&:hover .MuiOutlinedInput-notchedOutline, .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: `${grey[400]} !important`,
                    borderWidth: "1px !important",
                  },
                "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    boxShadow: "3px 3px 30px 1px #00000024;",
                  },
              }}
              inputProps={{
                style: {
                  backgroundColor: "#fff",
                  fontSize: "0.8rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                },
              }}
            />
            <TextField
              size="small"
              label="Email *"
              variant="outlined"
              placeholder="Please Enter Your Email"
              color="secondary"
              sx={{
                width: "100%",
                "& input": {
                  color: grey[600],
                },
                "&:hover .MuiOutlinedInput-notchedOutline, .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: `${grey[400]} !important`,
                    borderWidth: "1px !important",
                  },
                "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    boxShadow: "3px 3px 30px 1px #00000024;",
                  },
              }}
              inputProps={{
                style: {
                  backgroundColor: "#fff",
                  fontSize: "0.8rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                },
              }}
            />
            <TextField
              size="small"
              label="Phone *"
              variant="outlined"
              placeholder="Please Enter Your Phone"
              color="secondary"
              sx={{
                width: "100%",
                "& input": {
                  color: grey[600],
                },
                "&:hover .MuiOutlinedInput-notchedOutline, .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: `${grey[400]} !important`,
                    borderWidth: "1px !important",
                  },
                "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    boxShadow: "3px 3px 30px 1px #00000024;",
                  },
              }}
              inputProps={{
                style: {
                  backgroundColor: "#fff",
                  fontSize: "0.8rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "0.8rem",
                },
              }}
            />
          </Grid>
          <Grid
            item
            md={6}
            container
            flexDirection={"column"}
            rowGap={"2rem"}
            sx={{
              "& textarea": {
                "&:focus": {
                  outline: "none",
                  boxShadow: "3px 3px 30px 1px #00000024;",
                },
              },
            }}
          >
            <Box
              mt={{
                md: 0,
                xs: 5,
              }}
            >
              <label htmlFor="review" style={{ fontSize: "0.9rem" }}>
                Message *
              </label>
              <TextareaAutosize
                aria-label="Message"
                minRows={10}
                placeholder="Please Enter Your Message"
                style={{
                  width: "100%",
                  color: grey[600],
                  transition: "200ms",
                  borderColor: grey[300],
                  borderRadius: 1.5,
                  resize: "vertical",
                  padding: "1rem",
                  marginTop: "0.5rem",
                }}
                id={"Message"}
              />
            </Box>
            <Button
              disableRipple
              variant="outlined"
              sx={{
                fontSize: "0.8rem",
                borderRadius: 0,
                width: "fit-content",
                color: "#fff",
                px: 2,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              SEND MESSAGE
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default memo(Contacts);
