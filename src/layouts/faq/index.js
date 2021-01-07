import React, { Component } from 'react';

import { Container, Grid } from '@material-ui/core';

class FAQLayout extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        SVG Image
                    </Grid>
                    <Grid item xs={12} md={6}>
                        FAQ
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default FAQLayout