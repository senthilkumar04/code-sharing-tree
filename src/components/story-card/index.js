import React from 'react';
import * as _ from 'lodash';
import { useRouter } from 'next/router';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import { StyledCardMedia } from './story-card.styles';

const StoryCard = (props) => {
    const router = useRouter();
    const { data } = props;
    const title = _.get(data, 'name', '');
    const image = _.get(data, 'thumbnail', null);
    const excerpt = _.get(data, 'excerpt', '');
    const slug = _.get(data, 'slug', '')
    const navigateToStory = () => {
        if(slug) {
            router.push(`/stories/${slug}`);
        }
    }
    return (
        <Card>
            <StyledCardMedia image={image} title={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{excerpt}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={navigateToStory}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default StoryCard;