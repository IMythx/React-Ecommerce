import {
  Grid,
  Rating,
  TextareaAutosize,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import UserImg from "../../assets/user.jpg";

const ReviewsTab = ({ name }) => {
  return (
    <Grid
      item
      xs={12}
      container
      direction={"column"}
      rowGap={"1.5rem"}
      borderTop={1}
      borderColor={grey[500]}
      py={2}
      pl={{
        md: 4,
        xs: 1,
      }}
    >
      <Typography variant="h5" color={"secondary.main"} fontWeight={600}>
        1 Review for{" "}
        <Typography
          variant="h5"
          color={"secondary.main"}
          fontWeight={600}
          component={"span"}
          textTransform={"capitalize"}
        >
          {name}
        </Typography>
      </Typography>
      <Stack direction={"row"} width={"fit-content"} spacing={2}>
        <Box>
          <img
            src={UserImg}
            style={{
              width: "100%",
            }}
            alt=""
          />
        </Box>
        <Stack spacing={0.7}>
          <Rating defaultValue={4} readOnly size="small" />
          <Typography variant="body1" color={"primary.main"}>
            admin-june 3, 2022
          </Typography>
          <Typography variant="body1" color={"grey.main"}>
            This store is the best, forget the rest!
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h5" fontWeight={600} color={"secondary.main"}>
        Add a review
      </Typography>
      <Typography variant="body1" color={"grey.main"}>
        Your email address will not be published. Required fields are marked *
      </Typography>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        Your rating
        <Rating
          sx={{
            ml: 1,
          }}
          defaultValue={0}
          precision={0.5}
        />
      </Stack>
      <Stack
        sx={{
          "& textarea": {
            "&:focus": {
              outline: "none",
              boxShadow: "3px 3px 30px 1px #00000024;",
            },
          },
        }}
        spacing={1.5}
      >
        <label htmlFor="review">Add a review *</label>
        <TextareaAutosize
          aria-label="review"
          minRows={15}
          style={{
            width: "97%",
            color: grey[600],
            transition: "200ms",
            borderColor: grey[300],
            borderRadius: 1.5,
            resize: "vertical",
            padding: "1rem",
          }}
          id={"review"}
        />
      </Stack>
      <TextField
        size="small"
        label="Name *"
        variant="outlined"
        color="secondary"
        sx={{
          width: { sm: "50%", xs: "100%" },
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
          },
        }}
      />
      <TextField
        size="small"
        label="Email *"
        variant="outlined"
        color="secondary"
        sx={{
          width: { sm: "50%", xs: "100%" },
          "& input": {
            color: grey[600],
          },
          "&:hover .MuiOutlinedInput-notchedOutline , .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
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
          },
        }}
      />
      <Button
        disableRipple
        variant="outlined"
        sx={{
          width: "fit-content",
          color: "#fff",
          px: 2,
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Submit
      </Button>
    </Grid>
  );
};
export default ReviewsTab;
