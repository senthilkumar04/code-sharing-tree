import React, { Fragment } from 'react';

import StoryCard from '../../components/story-card';

import ListLayout from '../../layouts/list';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';
import { getStories } from '../../services/stories';

const renderStoryItem = (story) => {
  return <StoryCard data={story} />
}

export default function Stories(props)  {
    const { stories = [] } = props;
    const pageOptions = {
      title: 'Stories',
      subTitle: 'Our journey'
    }
    return (
      <Fragment>
        <ListLayout data={stories} pageLimit={2} renderItem={renderStoryItem} pageOptions={pageOptions}/>
      </Fragment>
    );
}

export async function getStaticProps() {
  const menus = getNavigationMenuList();
  const footerWidgets = getFooterWidgets();
  const stories = getStories();
  return {
    props: {
      menus,
      footerWidgets,
      stories
    }
  }
}