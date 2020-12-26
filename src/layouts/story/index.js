import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import * as _ from 'lodash';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { StyledFeaturedImg } from './story-layout.styles';

const OVVERIDES_CATEGORY = {
    TYPOGRAPHY: 'TYPOGRAPHY'
}

const formOverrideOptions = () => {
    const ovverrides = [
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h1'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h2'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h3'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h4'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h5'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h6'}
    ];
    return _.reduce(ovverrides, (result, value) => {
        const { element } = value;
        result[element] = getComponentOptions(value);
        return result;
    }, {});
}

const getComponentOptions = (options) => {
    const {category, value} = options; 
    switch(category) {
        case OVVERIDES_CATEGORY.TYPOGRAPHY:
            return {
                component: Typography,
                props: { variant: value }
            }
        default:
            break;
    }
}

const markDownOptions = {
    overrides: formOverrideOptions()
}

const FeaturedImgSection = ({image, altText}) => {
    return <StyledFeaturedImg src={image} ariaabel={altText}  />
}

const StoryContentSection = ({ story }) => {
    return <Markdown options={markDownOptions}>{story}</Markdown>;
}

class StoryLayout extends Component {
    render() {
        return (
            <Box>
                <FeaturedImgSection image={'../img/feeding-the-hunger-story-featured-image.jpg'} altText={'Feeding the hunger'} />
                <StoryContentSection story={''} />
            </Box>
        );
    }
}

export default StoryLayout;