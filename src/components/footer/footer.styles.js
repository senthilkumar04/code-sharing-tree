import { styled } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

export const StyledFooter = styled(Box)(({ theme }) => {
    return {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[900],
    }
})

export const StyledFooterWidgetsBox = styled(Box)(({ theme }) => {
    return {
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)}px`,
        },
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(3)}px`,
        },
    }
})

export const StyledCopyRightsBox = styled(Box)(({ theme }) => {
    return {
        color: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[800],
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
        display: 'flex',
        justifyContent: 'center',
    }
})