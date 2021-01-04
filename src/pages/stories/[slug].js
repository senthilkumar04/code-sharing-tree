import React from 'react';
import * as _ from 'lodash';

import StoryLayout from '../../layouts/story';

/** Services imports */
import { getNavigationMenuList } from '../../services/menu';
import { getFooterWidgets } from '../../services/footer';
import { getStoryBySlug, getStoriesSlug } from '../../services/stories';

export default function Story(props)  {
    const { story } = props
    return <StoryLayout data={story}/>
}

export async function getStaticPaths() {
    const storiesSlugList = getStoriesSlug();
    const formStoryRoutes = (storiesSlugList) => {
        return _.map(storiesSlugList, (slug) => {
            return {
                params: { slug }
            };
        })
    }
    return {
      paths: formStoryRoutes(storiesSlugList),
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    const menus = getNavigationMenuList();
    const footerWidgets = getFooterWidgets();
    const story = getStoryBySlug(params.slug);
    return {
        props: {
            menus,
            footerWidgets,
            story
        }
    }
}