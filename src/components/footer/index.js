import React, {Fragment} from 'react';

import Typography from '@material-ui/core/Typography';

import { StyledFooter, StyledCopyRightsBox } from './footer.styles';

const Footer = () => {
    return (
        <Fragment>
            <StyledFooter display="flex" flexDirection="row" justifyContent="space-between">
                <StyledCopyRightsBox>
                    <Typography variant="body2">&copy; Copyright 2020 Sharing Tree Trust.</Typography>
                </StyledCopyRightsBox>
            </StyledFooter>
        </Fragment>
    );
}

export default Footer;