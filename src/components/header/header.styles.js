import { styled } from '@material-ui/core/styles';

import { Box, IconButton, ButtonBase, Typography } from '@material-ui/core';

export const StyledLogoBox = styled(Box)(({ theme }) => {
    return {
        margin: '0 auto',
        color: theme.palette.primary.main,
    }
})

export const StyledIconButton = styled(IconButton)(({ theme }) => {
    return {
        color: theme.palette.primary.main,
    }
})

export const StyledLogoTitle = styled(Typography)(({ theme }) => {
    return {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
    }
})

export const StyledMenuItem = styled(ButtonBase)(({ theme }) => {
    return {
        color: theme.palette.primary.main,
        padding: `${theme.spacing(2)}px`,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
        }
    }
})

export const StyledMenuDrawerBox = styled(Box)(({ theme }) => {
    return {
        width: '250px'
    }
})

export const StyledQuoteBox = styled(Box)(({ theme }) => {
    return {
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: `${theme.spacing(2)}px`,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    }
})

export const StyledHeader = styled(Box)(({ theme }) => {
    return {
        backgroundColor: theme.palette.common.white,
        borderBottom: `3px`,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.primary.main,
    }
})
