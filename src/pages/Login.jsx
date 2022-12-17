import {
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const Login = () => {
  return (
    <Stack py={10} bgcolor={grey[100]}>
      <Paper
        sx={{
          width: "40vw",
          maxWidth: "600px",
          mx: "auto",
          p: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: "4rem",
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
        <Stack rowGap={4}>
          <TextField
            size="small"
            variant="outlined"
            label="EMAIL"
            color={"grey"}
          />
          <TextField variant="outlined" label="PASSWORD" color={"grey"} />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{
              mb: -4,
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
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
