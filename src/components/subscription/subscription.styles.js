import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

export const StyledSubscriptionContainer = styled(Box)(({ theme, bgdata }) => {
    const { backgroundImage, isBackgroundPattern } = bgdata;
    return {
        backgroundRepeat: isBackgroundPattern ? 'repeat' : 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.common.white,
        padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
        position: 'relative',
    }
});

export const StyledSubscriptionForm = styled('form')(({ theme }) => {
    return {
        margin: `0 auto`,
        [theme.breakpoints.down('sm')]: {
            width: `100%`
        },
        [theme.breakpoints.only('sm')]: {
            width: `70%`
        },
        [theme.breakpoints.up('md')]: {
            width: `50%`
        },
        [theme.breakpoints.up('lg')]: {
            width: `40%`
        },
    }
});