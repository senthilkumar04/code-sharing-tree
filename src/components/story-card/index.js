import React from 'react';
import * as _ from 'lodash';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { StyledCardMedia } from './story-card.styles';

const StoryCard = (props) => {
    const { data } = props;
    const title = _.get(data, 'name', '');
    const image = _.get(data, 'thumbnail', null);
    const excerpt = _.get(data, 'excerpt', '');
    return (
        <Card>
            <StyledCardMedia image={image} title={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{excerpt}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default StoryCard;