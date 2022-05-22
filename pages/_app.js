import { ThemeProvider } from "@mui/material";
import { Fragment } from "react";
import MainLayout from "../components/Layout";
import "../styles/globals.css";
import theme from "../components/theme"

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Fragment;
  return (
    // <MainLayout>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    // {/* </MainLayout> */}
  );
}

export default MyApp;
