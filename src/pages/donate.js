/** Core imports */
import React, { Component } from "react";

/** Layouts imports */

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';

/** Material UI imports */
import { Container, Typography } from "@material-ui/core";

class Donate extends Component {
    render() {
        return (
            <Container>
                <Typography>Donate</Typography>
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

export default Donate;