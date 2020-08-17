import React, {Fragment} from 'react';
import Link from "next/link";

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { StyledFooter, StyledCopyRightsBox } from './footer.styles';

const Footer = () => {
    return (
        <Fragment>
            <StyledFooter display="flex" flexDirection="row" justifyContent="space-between">
                <StyledCopyRightsBox>
                    <Typography variant="body2">&copy; 2020 Sharing Tree Trust. All Rights Reserved</Typography>
                </StyledCopyRightsBox>
                <Box>
                    <Typography variant="body2">
                        <Link href="/contact">Privacy policy</Link>
                        <Link href="/about">Terms & conditions</Link>
                    </Typography>
                </Box>
            </StyledFooter>
        </Fragment>
    );
}

export default Footer;