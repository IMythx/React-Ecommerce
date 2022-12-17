import {
  Stack,
  TextField,
  Typography,
  Button,
  Paper,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => {
  return (
    <Stack py={10} bgcolor={grey[100]}>
      <Paper
        sx={{
          width: "95%",
          maxWidth: "32rem",
          mx: "auto",
          p: {
            md: 5,
            sm: 4,
            xs: 3,
          },
          display: "flex",
          flexDirection: "column",
          rowGap: {
            sm: "4rem",
            xs: "1.5rem",
          },
        }}
      >
        <Typography
          variant="h4"
          color={"primary.main"}
          fontWeight={600}
          textAlign={"center"}
        >
          Signup
        </Typography>
        <Stack
          rowGap={{
            sm: 4,
            xs: 3,
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            label="Email or Mobile Number"
            color={"grey"}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Full Name"
            color={"grey"}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Username"
            color={"grey"}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Password"
            color={"grey"}
          />
          <Button
            sx={{
              width: "fit-content",
            }}
            variant="contained"
          >
            Sign up
          </Button>
          <Stack direction={"row"} columnGap={"0.5rem"} alignItems={"center"}>
            <Typography variant="body1" color={"grey.main"}>
              Have an account?
            </Typography>
            <Link
              sx={{
                transition: "200ms",
                color: "primary.main",
                fontWeight: 600,
                "&:hover": {
                  color: "secondary.main",
                },
              }}
              underline={"none"}
              component={RouterLink}
              to="/login"
            >
              Log in
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Signup;
