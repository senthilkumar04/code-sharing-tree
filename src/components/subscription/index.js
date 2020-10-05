import React from 'react'
import * as _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Blockout from '../blockout';

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
                {!isBackgroundPattern && <Blockout opacity={0.3} />}
                <Box zIndex="tooltip"><Typography variant="h6" component="h2">{title}</Typography></Box>
                <Box zIndex="tooltip" my={4} display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center">
                    <StyledSubscriptionForm autoComplete="off" name="contact" method="POST" data-netlify="true">
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <TextField fullWidth id="field-subscriber-name" label="Your name" variant="filled" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <TextField fullWidth id="field-subscriber-email" label="Your email address" color="secondary" variant="filled" />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <Button variant="contained" color="default" size="large" type="submit" endIcon={<NotificationsIcon />}>{subscribeBtnLabel}</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </StyledSubscriptionForm>
                </Box>
        </StyledSubscriptionContainer>
    );
}

export default Subscription;