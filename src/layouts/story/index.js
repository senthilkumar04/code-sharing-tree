import React, { Component, Fragment } from 'react';
import Markdown from 'markdown-to-jsx';
import * as _ from 'lodash';

import { Container, Box, Typography } from '@material-ui/core';

import { StyledFeaturedImg } from './story-layout.styles';

const OVVERIDES_CATEGORY = {
    TYPOGRAPHY: 'TYPOGRAPHY',
    MEDIA: 'MEDIA',
    TYPO_COMPONENT: 'TYPO_COMPONENT'
}

const OptimizedImage = ({ src, layout, loading }) => {
    const modifiedImageSrc = `/${src}`;
    return <img src={modifiedImageSrc} width={'100%'} height={'auto'} />
}

const formOverrideOptions = () => {
    const ovverrides = [
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h1'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h2'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h3'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h4'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h5'}, 
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'h6'},
        {category: OVVERIDES_CATEGORY.TYPOGRAPHY, element: 'p', variant: 'body2'},
        {category: OVVERIDES_CATEGORY.MEDIA, element: 'img'},
        {category: OVVERIDES_CATEGORY.TYPO_COMPONENT, element: 'Typography'}
    ];
    return _.reduce(ovverrides, (result, value) => {
        const { element } = value;
        result[element] = getComponentOptions(value);
        return result;
    }, {});
}

const getComponentOptions = (options) => {
    const {category, element, variant = ''} = options; 
    switch(category) {
        case OVVERIDES_CATEGORY.TYPOGRAPHY:
            return {
                component: Typography,
                props: { 
                    variant: variant || element,  
                    gutterBottom: true
                }
            }
        case OVVERIDES_CATEGORY.MEDIA:
            return {
                component: OptimizedImage,
                props: {
                    loading: 'lazy',
                }
            }
        case OVVERIDES_CATEGORY.TYPO_COMPONENT:
            return {
                component: Typography,
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

const StoryTitleSection = ({ story }) => {
    const title = _.get(story, 'title', '');
    const author = _.get(story, 'author', '');
    const date = _.get(story, 'publishDate', '')
    return (
        <Box display="flex" flexDirection="column" my={3}>
            <Typography variant="h5" component="h1">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
                Posted{author?`\u00A0by ${author}`:``}{date?`\u00A0at ${date}`:``}
            </Typography>
        </Box>
    );
}

const StoryContentSection = ({ story }) => {
    return <Markdown options={markDownOptions}>{story}</Markdown>;
}

class StoryLayout extends Component {
    render() {
        const { data } = this.props
        const title = _.get(data, 'title', '');
        const thumbnail = _.get(data, 'thumbnail', '');
        const content = _.get(data, 'content', '');
        return (
            <Fragment>
                <FeaturedImgSection image={`../${thumbnail}`} altText={title} />
                <Container maxWidth="lg">
                    <StoryTitleSection story={data} />
                    <StoryContentSection story={content} />
                </Container>
            </Fragment>
        );
    }
}

export default StoryLayout;