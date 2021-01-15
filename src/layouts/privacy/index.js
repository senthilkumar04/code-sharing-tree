import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

import { Container, Grid, Box, Typography } from '@material-ui/core';

import { StyledTileUnderline } from '../common';

class PrivacyLayout extends Component {

    render() {
        const { data = null } = this.props;
        if(data) {
            const { title, subTitle, policy } = data;
            return (
                <Container maxWidth="lg">
                    <Box mt={4} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                        <Typography variant="h5" component="h1">{title}</Typography>
                        <Typography variant="body2" color="textSecondary">{subTitle}</Typography>
                        <StyledTileUnderline/>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Box my={4}>
                                <Markdown>{policy}</Markdown>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            );
        }
        return null;
    }
}

export default PrivacyLayout