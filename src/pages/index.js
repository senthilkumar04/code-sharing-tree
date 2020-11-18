/** Core imports */
import React, { Fragment } from "react";

import HomeLayout from '../layouts/home';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getSubscriptionDetails } from '../services/subscription';
import { getTestimonialDetails } from '../services/testimonials';
import { getTeamList, getHomeCarouselDetails } from '../services/home';

export default function Home(props)  {
  const { subscription, teamList, testimonials, homeCarousel } = props;
  return (
    <Fragment>
      <HomeLayout teamList={teamList} subscription={subscription} testimonials={testimonials} featuredBanner={homeCarousel} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const subscription = getSubscriptionDetails();
  const teamList = getTeamList();
  const homeCarousel = getHomeCarouselDetails();
  const testimonials = getTestimonialDetails();
  return {
    props: {
      menus,
      footerWidgets,
      subscription, 
      teamList,
      testimonials,
      homeCarousel
    }
  }
}