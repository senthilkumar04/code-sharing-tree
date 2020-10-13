import React from 'react';
import * as _ from 'lodash';

import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import CardContent from '@material-ui/core/CardContent';

import { StyledTestimonialCard } from './testimonial.styles';

const Testimonial = (props) => {
    const { data } = props;
    console.log(data);
    const author = _.get(data, 'author', 'Unkown Author');
    const description = _.get(data, 'description', '');
    return (
        <StyledTestimonialCard>
            <CardContent>
                <Box mb={2}><FormatQuoteIcon color="primary" fontSize="large" /></Box>
                <Box mb={2} fontSize="body2.fontSize">{description}</Box>
                <Box mb={3} fontWeight="fontWeightBold" fontSize="body2.fontSize">{author}</Box>
            </CardContent>
        </StyledTestimonialCard>
    );
}

export default Testimonial;