import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";
import ScrollToTopFab from "./Components/ScrollToTop";
import { motion } from "framer-motion";

// import IconSection from "./Components/Hero/IconSection";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box sx={{ bgcolor: theme.palette.bg.main }}>
          <Hero />
          <Main />
        </Box>{" "}
        <Footer />
        <ScrollToTopFab />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
