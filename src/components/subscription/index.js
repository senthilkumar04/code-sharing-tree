import React from 'react'
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Typography, TextField, Button, Grid } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';

import { StyledSubscriptionContainer, StyledSubscriptionForm } from './subscription.styles';

const useStyles = makeStyles((theme) => {
    return {
        root : {
            backgroundColor: theme.palette.common.white
        }
    }
})

const Subscription = (props) => {
    const { root } = useStyles();
    const { data } = props;
    const title = _.get(data, 'title', 'Join our mailing list to keep up to date on the latest news.');
    const subscribeBtnLabel = _.get(data, 'subscribeBtnLabel', 'Join our mailing list to keep up to date on the latest news.');
    const backgroundImage = _.get(data, 'backgroundImage', null);
    const isBackgroundPattern = _.get(data, 'isBackgroundPattern', false);
    const isTransparentBackground = _.get(data, 'isTransparentBackground', false);
    const bgDetails = { backgroundImage, isBackgroundPattern }
    return (
        <StyledSubscriptionContainer bgdata={bgDetails}>
                <Box><Typography variant="h6" component="h2">{title}</Typography></Box>
                <Box mt={4} display="flex" flexDirection="column" alignSelf="stretch" justifyContent="center">
                    <StyledSubscriptionForm autoComplete="off" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <TextField fullWidth name="field-subscriber-name" label="Your name" variant="filled" className={root} required/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <TextField fullWidth name="field-subscriber-email" label="Your email address" variant="filled" className={root} required/>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <Button variant="contained" color="primary" size="large" type="submit" endIcon={<Notifications />}>{subscribeBtnLabel}</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </StyledSubscriptionForm>
                </Box>
        </StyledSubscriptionContainer>
    );
}

export default Subscription;