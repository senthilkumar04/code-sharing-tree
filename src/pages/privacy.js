/** Core imports */
import React, { Component } from "react";

/** Layouts imports */
import PrivacyLayout from '../layouts/privacy';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getPrivacyData } from '../services/privacy';

/** Material UI imports */

class Privacy extends Component {
    render() {
        const { privacy = null } = this.props;
        return <PrivacyLayout data={privacy} />
    }
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const privacy =  getPrivacyData();
  return {
    props: {
      menus,
      footerWidgets,
      privacy
    }
  }
}

export default Privacy;