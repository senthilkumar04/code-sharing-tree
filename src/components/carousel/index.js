import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Carousel } from 'react-responsive-carousel';

import { StyledGridItemWrapper, StyledControlsBox } from './carousel.styles';

class CustomCarousel extends Component {

    state = {
        currentSlideIndex: 0
    }

    navigateCarousel() {
        const { currentSlideIndex } = this.state;
        this.setState({
            currentSlideIndex: currentSlideIndex + 1
        });
    }

    renderControls() {
        return (
            <StyledControlsBox>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" p={2}>
                    <StyledControlBtn aria-label="Navigate to previous slide">
                        <ArrowBackIcon color="primary" />
                    </StyledControlBtn>
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" p={2}>
                    <StyledControlBtn aria-label="Navigate to next slide">
                        <ArrowForwardIcon color="primary" />
                    </StyledControlBtn>
                </Box>
            </StyledControlsBox>
        );
    }

    renderFullPageCarousel() {
        const { data } = this.props;
        const { currentSlideIndex } = this.state;
        const { tileId, backgroundColor } = data[currentSlideIndex];
        return(
            <Grid container>
                <StyledGridItemWrapper item xs={12} style={{ backgroundColor }}></StyledGridItemWrapper>
            </Grid>
        )
    }

    render() {
        return (
            <Box>
                {this.renderFullPageCarousel()}
                <Button variant="contained" color="primary" onClick={this.navigateCarousel.bind(this)}>Primary</Button>
            </Box>
        );
    }
}

CustomCarousel.propTypes = {
    variant: PropTypes.string,
    limit: PropTypes.number
}

export default CustomCarousel;