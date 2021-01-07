/** Core imports */
import React, { Component } from "react";

/** Layouts imports */
import FAQLayout from '../layouts/faq';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';

/** Material UI imports */
import { Container, Typography } from "@material-ui/core";

class FAQ extends Component {
    render() {
        return <FAQLayout />
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

export default FAQ;