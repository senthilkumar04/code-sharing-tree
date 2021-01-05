import { Box } from '@material-ui/core';

import {styled} from '@material-ui/styles';

export const StyledBockoutBox = styled(Box)(({ theme, opacity }) => {
    return {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity,
        backgroundColor: theme.palette.common.black
    }
})