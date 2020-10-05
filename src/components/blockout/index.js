import React from 'react';

import {StyledBockoutBox} from './blockout.styles';

const Blockout = ({ opacity }) => {
    return (
        <StyledBockoutBox zIndex="modal" opacity={opacity} />
    );
}

export default Blockout;