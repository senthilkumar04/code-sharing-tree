import React from 'react';

import StoryLayout from '../../layouts/story';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';
import { getStories } from '../../services/stories';

export default function Story(props)  {
    return <StoryLayout/>
}

export async function getStaticPaths() {
    const stories = getStories();
    const formStoryRoutes = (stories) => {
        return _.map(stories, (story) => {
            return null;
        })
    }
    return {
      paths: [
        { params: { 'slug': 'abc' } }
      ],
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    const menus = getNavigationMenuList();
    const footerWidgets = getFooterWidgets();
    const stories = getStories();
    return {
        props: {
            menus,
            footerWidgets,
            stories,
            postData: params.slug
        }
    }
}