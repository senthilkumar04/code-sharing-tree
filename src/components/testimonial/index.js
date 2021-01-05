import React from 'react';
import * as _ from 'lodash';

import { Box, CardContent, Avatar } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';

import { StyledTestimonialCard } from './testimonial.styles';

const Testimonial = (props) => {
    const { data } = props;
    const thumbnail = _.get(data, 'thumbnail', '');
    const author = _.get(data, 'author', 'Unkown Author');
    const description = _.get(data, 'description', '');
    const role = _.get(data, 'role', 'n/a');
    const getThumbnail = () => {
        const authorInitial = author.split(' ').reduce((value, name) => {
            return value + (name.length ? name[0] : '');
        }, '');
        if(thumbnail) {
            return <Avatar alt={author} src={thumbnail} />
        }
        return <Avatar alt={author}>{authorInitial}</Avatar>
    }
    return (
        <StyledTestimonialCard>
            <CardContent>
                <Box mb={2}><FormatQuote color="primary" fontSize="large" /></Box>
                <Box mb={2} fontSize="body2.fontSize">{description}</Box>
                <Box display="flex" flexDirection="row">
                    {getThumbnail()}
                    <Box display="flex" flexDirection="column" ml={1}>
                        <Box fontWeight="fontWeightBold" fontSize="body2.fontSize">{author}</Box>
                        <Box fontSize="caption.fontSize">{role}</Box>
                    </Box>
                </Box>
            </CardContent>
        </StyledTestimonialCard>
    );
}

export default Testimonial;