/** Core imports */
import React, { Fragment } from "react";
import HomeLayout from '../layouts/home';

/** Services imports */
import { getNavigationMenuList } from '../services/menu';
import { getFooterWidgets } from '../services/footer';
import { getSubscriptionDetails } from '../services/subscription';
import { getTestimonialDetails } from '../services/testimonials';
import { getStories } from '../services/stories';
import { getTeamList, getHomeCarouselDetails, getAboutUsData, getWhatWeDO } from '../services/home';

export default function Home(props)  {
  const { subscription, teamList, testimonials, homeCarousel, aboutUs, whatWeDo, stories } = props;
  return <HomeLayout teamList={teamList} subscription={subscription} testimonials={testimonials} featuredBanner={homeCarousel} aboutUs={aboutUs} whatWeDo={whatWeDo} stories={stories} />
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const subscription = getSubscriptionDetails();
  const teamList = getTeamList();
  const homeCarousel = getHomeCarouselDetails();
  const testimonials = getTestimonialDetails();
  const aboutUs = getAboutUsData();
  const whatWeDo = getWhatWeDO();
  const stories = getStories();
  return {
    props: {
      menus,
      footerWidgets,
      subscription, 
      teamList,
      testimonials,
      homeCarousel,
      aboutUs,
      whatWeDo,
      stories
    }
  }
}