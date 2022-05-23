import { ThemeProvider } from "@mui/material";
import { Fragment } from "react";
import MainLayout from "../components/Layout";
import "../styles/globals.css";
import "swiper/css/bundle";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Fragment;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
