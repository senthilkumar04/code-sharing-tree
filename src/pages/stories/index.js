import React, { Fragment } from 'react';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';

export default function Stories(props)  {
    return (
      <Fragment>
        <div>Stories listing page</div>
      </Fragment>
    );
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