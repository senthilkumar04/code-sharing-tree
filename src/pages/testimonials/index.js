import React, { Fragment } from 'react';

import ListLayout from '../../layouts/list';


import Testimonial from '../../components/testimonial';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';
import { getTestimonialDetails } from '../../services/testimonials';

const renderTestimonialItem = (testimonial) => {
  return <Testimonial data={testimonial} />
}

export default function Testimonials(props)  {
    const { testimonials = [] } = props;
    const pageOptions = {
      title: 'Testimonials',
      subTitle: 'See what your clients and receipients say about us'
    }
    return (
      <Fragment>
        <ListLayout data={testimonials} pageLimit={2} renderItem={renderTestimonialItem} pageOptions={pageOptions} />
      </Fragment>
    );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const testimonials = getTestimonialDetails();
  return {
    props: {
      menus,
      footerWidgets,
      testimonials
    }
  }
}