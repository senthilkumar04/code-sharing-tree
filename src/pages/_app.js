import React, { Fragment } from "react";
import Proptypes from "prop-types";
import Head from "next/head";

/** Material UI imports */
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/** Layouts imports */
import CommonLayout from "../layouts/common-layout";

/** Components imports */

export default function App({ Component, pageProps }) {

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%'
          },
          body: {
            height: '100%'
          },
          '#__next': {
            height: '100%'
          }
        },
      },
    },
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { menus = [], footerWidgets = null } = pageProps;

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <CommonLayout menus={menus} footerWidgets={footerWidgets}>
            <Component {...pageProps} />
        </CommonLayout>
      </ThemeProvider>
    </Fragment>
  );
}

App.propTypes = {
  Component: Proptypes.elementType.isRequired,
  pageProps: Proptypes.object.isRequired,
};
