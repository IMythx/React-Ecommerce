import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Stack,
  TextField,
  Typography,
  Button,
  Paper,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

const PasswordReset = () => {
  return (
    <Stack py={10} bgcolor={grey[100]}>
      <Paper
        sx={{
          width: "95%",
          maxWidth: "28rem",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          rowGap: "6rem",
          justifyContent: "space-between",
        }}
      >
        <Stack
          rowGap={"1.2rem"}
          p={{
            md: 5,
            sm: 4,
            xs: 3,
          }}
        >
          <LockOutlinedIcon
            sx={{
              border: 2,
              borderRadius: "50%",
              borderColor: "secondary.main !important",
              p: 1.9,
              fontSize: "4.9rem",
              stroke: "#ffffff",
              mx: "auto",
            }}
          />
          <Typography
            variant="h6"
            color="secondary.main"
            fontWeight={600}
            textAlign={"center"}
          >
            Trouble logging in?
          </Typography>
          <Typography variant="body2" color={"grey.main"} textAlign={"center"}>
            Enter your email, phone, or username and we'll
            <br />
            send you a link to get back into your account.
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            label="Email, Phone, or Username"
            color={"grey"}
          />
          <Button
            sx={{
              width: "fit-content",
              mx: "auto",
            }}
            variant="contained"
          >
            Send Login Link
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          py={2.2}
          bgcolor={grey[100]}
          borderTop={1}
          borderColor={`${grey[300]} !important`}
        >
          <Link
            sx={{
              transition: "200ms",
              color: "secondary.light",
              fontWeight: 600,
            }}
            underline={"none"}
            component={RouterLink}
            to="/login"
          >
            Back to login
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default PasswordReset;
