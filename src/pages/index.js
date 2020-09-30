/** Core imports */
import React, { Fragment } from "react";

/** Layouts imports */

/** Material UI imports */
import Container from "@material-ui/core/Container";

/** Components imports */
import Subscription from '../components/subscription';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getSubscriptionDetails } from '../services/subscription';

/** Contents imports */
import { attributes, react as HomeContent } from "../../contents/home.md";

export default function Home(props)  {
  let { title, cats } = attributes;
  const { subscription } = props;
  return (
    <Fragment>
      <Subscription data={subscription}/>
    </Fragment>
  );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const subscription = getSubscriptionDetails();
  return {
    props: {
      menus,
      footerWidgets,
      subscription
    }
  }
}