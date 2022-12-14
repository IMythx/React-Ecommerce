import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
  Link,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
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
          Login
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
            label="Email"
            color={"grey"}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Password"
            color={"grey"}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{
              mb: {
                sm: -4,
                xs: -3,
              },
            }}
          />
          <Button
            sx={{
              width: "fit-content",
            }}
            variant="contained"
          >
            log in
          </Button>
          <Link
            sx={{
              transition: "200ms",
              color: "primary.main",
              "&:hover": {
                color: "grey.main",
              },
            }}
            underline={"none"}
            component={RouterLink}
            to="/reset"
          >
            Forgot password?
          </Link>
          <Stack direction={"row"} columnGap={"0.5rem"} alignItems={"center"}>
            <Typography variant="body1" color={"grey.main"}>
              Don't have an account?
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
              to="/signup"
            >
              Sign up
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
