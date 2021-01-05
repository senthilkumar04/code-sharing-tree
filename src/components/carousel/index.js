import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import { Box, Typography, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons'

import { StyledCarouselContent, StyledControlsBox, StyledImgWrapper, StyledControlBtn } from './carousel.styles';

const NAVIGATE_FWD = 'NAVIGATE_FWD';
const NAVIGATE_BWD = 'NAVIGATE_BWD';

class Carousel extends Component {

    state = {
        currentSlideIndex: 0
    }

    navigateCarousel(navigationType) {
        const { currentSlideIndex } = this.state;
        const { data = [] } = this.props
        if(data.length > 1) {
            if(navigationType === NAVIGATE_FWD) {
                if(currentSlideIndex === (data.length - 1)) {
                    this.setState({ currentSlideIndex: 0 });
                }
                else {
                    this.setState({ currentSlideIndex: currentSlideIndex + 1 });
                }
            }
            else {
                if(currentSlideIndex === 0) {
                    this.setState({ currentSlideIndex: data.length - 1 });
                }
                else {
                    this.setState({ currentSlideIndex: currentSlideIndex - 1 });
                }
            }
        }
    }

    renderControls() {
        const { data= [] } = this.props;
        if(data.length > 1) {
            return (
                <StyledControlsBox>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" p={2}>
                        <StyledControlBtn aria-label="Navigate to previous slide" onClick={this.navigateCarousel.bind(this, NAVIGATE_BWD)}>
                            <ArrowBack color="primary" />
                        </StyledControlBtn>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative" p={2}>
                        <StyledControlBtn aria-label="Navigate to next slide" onClick={this.navigateCarousel.bind(this, NAVIGATE_FWD)}>
                            <ArrowForward color="primary" />
                        </StyledControlBtn>
                    </Box>
                </StyledControlsBox>
            );
        }
        return null;
    }

    renderFullPageCarousel() {
        const { data } = this.props;
        const { currentSlideIndex } = this.state;
        const { bannerImage, title, subTitle, description, ctaBtnLabel, showCTA } = data[currentSlideIndex];
        return(
            <StyledImgWrapper bgimage={bannerImage}>
                {this.renderControls()}
                <StyledCarouselContent>
                    <Box mb={2}>
                        <Typography variant="h4" component="h2">{title}</Typography>
                        <Typography variant="subtitle2">{subTitle}</Typography>
                    </Box>
                    {subTitle && (<Box mb={2}>
                        <Typography variant="body2">{description}</Typography>
                    </Box>)}
                    {showCTA && (<Box>
                        <Button variant="contained" color="primary">{ctaBtnLabel}</Button>
                    </Box>)}
                </StyledCarouselContent>
            </StyledImgWrapper>
        )
    }

    render() {
        return this.renderFullPageCarousel();
    }
}

Carousel.propTypes = {
    variant: PropTypes.string,
    limit: PropTypes.number
}

export default Carousel;