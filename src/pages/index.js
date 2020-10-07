/** Core imports */
import React, { Fragment } from "react";

import HomeLayout from '../layouts/home';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getSubscriptionDetails } from '../services/subscription';
import { getTeamList } from '../services/home';

export default function Home(props)  {
  const { subscription, teamList } = props;
  return (
    <Fragment>
      <HomeLayout teamList={teamList} subscription={subscription} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const subscription = getSubscriptionDetails();
  const teamList = getTeamList();
  return {
    props: {
      menus,
      footerWidgets,
      subscription, 
      teamList
    }
  }
}