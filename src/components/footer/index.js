import React, {Fragment} from 'react';

import { Typography, Grid } from '@material-ui/core';

import { StyledFooter, StyledCopyRightsBox, StyledFooterWidgetsBox } from './footer.styles';

import ReachUsWidget from '../widgets/reach-us/ReachUsWidget';
import SocialLinksWidget from '../widgets/social-links/SocialLinks';
import ImportantLinksWidget from '../widgets/important-links/ImportantLinks';

import { WIDGETS } from '../../utils/constants';

const Footer = ({ widgets }) => {
    const { column1 = null, column2 = null, column3 = null } = widgets;
    const mapFooterWidgets = (widgetDetails) => {
        const { widgetId = '' } = widgetDetails;
        switch(widgetId) {
            case WIDGETS.REACH_US:
                return <ReachUsWidget data={widgetDetails}/>;       
            case WIDGETS.SOCIAL_LINKS:
                return <SocialLinksWidget data={widgetDetails}/>;
            case WIDGETS.IMPORTANT_LINKS:
                return <ImportantLinksWidget data={widgetDetails}/>;
            default:
                return null;
        }
    }

    return (
        <Fragment>
            <StyledFooter display="flex" flexDirection="column">
                <StyledFooterWidgetsBox>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            {mapFooterWidgets(column1)}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {mapFooterWidgets(column2)}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {mapFooterWidgets(column3)}
                        </Grid>
                    </Grid>
                </StyledFooterWidgetsBox>
                <StyledCopyRightsBox>
                    <Typography variant="body2">&copy; Copyright 2020 Sharing Tree Trust.</Typography>
                </StyledCopyRightsBox>
            </StyledFooter>
        </Fragment>
    );
}

export default Footer;