import React, { Fragment } from 'react';

import ListLayout from '../../layouts/list';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';

export default function Stories(props)  {
    return (
      <Fragment>
        <ListLayout data={['1', '2', '3', '4', '5']} pageLimit={2}/>
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