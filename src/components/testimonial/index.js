import React from 'react';
import * as _ from 'lodash';

import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import { StyledTestimonialCard } from './testimonial.styles';
import { Typography } from '@material-ui/core';

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
                <Box mb={2}><FormatQuoteIcon color="primary" fontSize="large" /></Box>
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