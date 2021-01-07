/** Core imports */
import React, { Component } from "react";

/** Layouts imports */
import FAQLayout from '../layouts/faq';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getFAQData } from '../services/faq';

/** Material UI imports */

class FAQ extends Component {
    render() {
        const { faq = null } = this.props;
        return <FAQLayout data={faq} pageLimit={10} />
    }
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const faq =  getFAQData();
  return {
    props: {
      menus,
      footerWidgets,
      faq
    }
  }
}

export default FAQ;