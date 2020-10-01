import React from 'react'
import * as _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { StyledSubscriptionContainer, StyledSubscriptionForm } from './subscription.styles';

const Subscription = (props) => {
    const { data  } = props;
    const title = _.get(data, 'title', 'Join our mailing list to keep up to date on the latest news.');
    const subscribeBtnLabel = _.get(data, 'subscribeBtnLabel', 'Join our mailing list to keep up to date on the latest news.');
    const backgroundImage = _.get(data, 'backgroundImage', null);
    const isBackgroundPattern = _.get(data, 'isBackgroundPattern', false);
    const bgDetails = { backgroundImage, isBackgroundPattern }
    return (
        <StyledSubscriptionContainer bgdata={bgDetails}>
                <Typography variant="h6" component="h2">{title}</Typography>
                <Box my={4} display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center">
                    <StyledSubscriptionForm autoComplete="off">
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box mb={2} mr={3}><TextField size="small" id="field-subscriber-name" label="Your name" color="primary"/></Box>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Box mb={5} mr={3}><TextField size="small" id="field-subscriber-email" label="Your email address" color="primary" /></Box>
                            </Grid>
                            <Grid item xs={12} sm={4} mb={2}>
                                <Button variant="contained">{subscribeBtnLabel}</Button>
                            </Grid>
                        </Grid>
                    </StyledSubscriptionForm>
                </Box>
        </StyledSubscriptionContainer>
    );
}

export default Subscription;