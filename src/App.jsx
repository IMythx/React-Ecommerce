import { createTheme, ThemeProvider } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import { grey } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import ItemDetails from "./pages/ItemDetails";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9b834d",
    },
    secondary: {
      main: grey[900],
    },
    grey: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:item" element={<ItemDetails />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
