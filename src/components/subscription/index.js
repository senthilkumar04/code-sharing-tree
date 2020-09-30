import React from 'react'
import * as _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

import { StyledSubscriptionContainer, StyledSubscriptionForm } from './subscription.styles';

const Subscription = (props) => {
    const { data  } = props;
    const title = _.get(data, 'title', 'Join our mailing list to keep up to date on the latest news.');
    const subscribeBtnLabel = _.get(data, 'subscribeBtnLabel', 'Join our mailing list to keep up to date on the latest news.');
    const backgroundPattern = _.get(data, 'thumbnail', null);
    return (
        <StyledSubscriptionContainer backgroundpatternimage={backgroundPattern}>
                <Typography variant="h6" component="h2">{title}</Typography>
                <Box my={4} display="flex" flexDirection="column" alignSelf="stretch">
                    <StyledSubscriptionForm autoComplete="off">
                        <Box mr={3}><TextField size="small" id="field-subscriber-name" label="Your name" color="primary"/></Box>
                        <Box mr={3}><TextField size="small" id="field-subscriber-email" label="Your email address" color="primary" /></Box>
                        <Button size="small" variant="contained">{subscribeBtnLabel}</Button>
                    </StyledSubscriptionForm>
                </Box>
        </StyledSubscriptionContainer>
    );
}

export default Subscription;