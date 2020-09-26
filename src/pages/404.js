/** Core imports */
import React, { Component } from "react";

/** Layouts imports */

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';

/** Material UI imports */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class App404 extends Component {
    render() {
        return (
            <Container>
                <Typography>App404</Typography>
            </Container>
        );
    }
}

export async function getStaticProps() {
    const menus = getNavigationMenuList();
    const footerWidgets = getFooterWidgets();
    return {
      props: {
        menus,
        footerWidgets
      }
    }
  }

export default App404;