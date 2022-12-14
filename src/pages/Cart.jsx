import { grey } from "@mui/material/colors";
import {
  Paper,
  Box,
  Stack,
  Typography,
  Divider,
  FormControl,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CardHeader,
  Select,
  MenuItem,
  TextField,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import { useState } from "react";
import { Watches } from "../Store/Watches";
import DeleteIcon from "@mui/icons-material/Delete";
import PaypalIcon from "../components/Cart/PaypalIcon";
import MasterCardIcon from "../components/Cart/MasterCradIcon";
import VisAIcon from "../components/Cart/VisaIcon";
import AmericanExpressIcon from "../components/Cart/AmericanExpressIcon";
const Cart = () => {
  const theme = useTheme();
  const [sortType, setSortType] = useState(1);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSortType(event.target.value);
  };
  const { cart } = useSelector((state) => state.cart);
  return (
    <Box bgcolor={grey[100]} p={1}>
      <Paper
        sx={{
          display: "flex",
          columnGap: {
            sm: "2rem",
            xs: "0",
          },
        }}
      >
        <Stack flex={1}>
          <Typography variant="h6" color={"secondary.main"} fontWeight={700}>
            Shopping Cart
          </Typography>
          <Divider />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="body1" color={"grey.main"}>
              You have {cart.length} items in your cart
            </Typography>
            <Stack direction={"row"} color={"grey.main"}>
              Sort By:
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    variant="standard"
                    value={sortType}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Price</MenuItem>
                    <MenuItem value={2}>Name</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            {cart.map((item, index) => (
              <Card key={index} sx={{ display: "flex", p: 3 }} elevation={3}>
                <CardMedia
                  component="img"
                  sx={{ width: 100 }}
                  image={Watches[item]["src"][0]}
                  alt={item}
                />
                <CardContent>
                  <Typography variant="subtitle1" color={"primary.main"}>
                    {item}
                  </Typography>
                  <Typography variant="body1" color={"grey.main"}>
                    {Watches[item]["brand"].toUpperCase()}
                  </Typography>
                </CardContent>
                <CardContent color={"grey.main"}>1</CardContent>
                <CardContent color={"grey.main"}>
                  £{Watches[item]["price"]}
                </CardContent>
                <IconButton
                  onClick={() =>
                    dispatch(
                      cartActions.removeItem({
                        name: item,
                        price: Watches[item]["price"],
                      })
                    )
                  }
                >
                  <DeleteIcon
                    sx={{
                      color: "grey.main",
                    }}
                  />
                </IconButton>
              </Card>
            ))}
          </Stack>
        </Stack>
        <Stack width={"35%"}>
          <Card
            sx={{
              bgcolor: "#27d18b",
            }}
          >
            <CardHeader
              subheader={"Card Details"}
              subheaderTypographyProps={{
                color: "#fff",
                fontWeight: 700,
                textAlign: "center",
              }}
            />
            <CardContent>
              <Typography variant="body2" color={"#fff"} pl={0.9}>
                Card Type{" "}
              </Typography>
              <Stack
                direction={"row"}
                sx={{
                  "& svg": {
                    bgcolor: "#fff",
                  },
                }}
              >
                <IconButton sx={{ height: "47.98px" }}>
                  <PaypalIcon />
                </IconButton>
                <IconButton sx={{ height: "47.98px" }}>
                  <MasterCardIcon />
                </IconButton>
                <IconButton sx={{ height: "47.98px" }}>
                  <AmericanExpressIcon />
                </IconButton>
                <IconButton sx={{ height: "47.98px" }}>
                  <VisAIcon />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                flexWrap={"wrap"}
                rowGap={"2rem"}
                columnGap={"2rem"}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "white.main",
                  },
                  "& fieldset": {
                    borderColor: "#fbfbfb !important",
                  },
                  "& .MuiInputBase-input.MuiOutlinedInput-input": {
                    color: "#fbfbfb !important",
                  },
                }}
              >
                <TextField
                  color="white"
                  sx={{
                    width: "100%",
                  }}
                  label="cardHolder's name"
                  variant="outlined"
                  placeholder="cardHolder's name"
                />

                <TextField
                  color="white"
                  sx={{
                    width: "100%",
                  }}
                  label="Card Number"
                  variant="outlined"
                  placeholder="1234 5678 9012 3456"
                />

                <TextField
                  color="white"
                  sx={{
                    width: "calc(50% - 1rem)",
                  }}
                  label="Expiration"
                  variant="outlined"
                  placeholder="MM/YYYY"
                />
                <TextField
                  color="white"
                  sx={{
                    width: "calc(50% - 1rem)",
                  }}
                  label="Cvv"
                  variant="outlined"
                  placeholder="&#9679;&#9679;&#9679;"
                />
                <Divider
                  sx={{ width: "100%", borderColor: "#ffffff70 !important" }}
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Cart;
