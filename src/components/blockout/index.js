import React from 'react';
import PropTypes from 'prop-types';

import {StyledBockoutBox} from './blockout.styles';

const Blockout = ({ opacity }) => {
    return (
        <StyledBockoutBox opacity={opacity} />
    );
}

Blockout.propTypes = {
    opacity: PropTypes.number,
};

Blockout.defaultProps = {
    opacity: 0.5
}

export default Blockout;