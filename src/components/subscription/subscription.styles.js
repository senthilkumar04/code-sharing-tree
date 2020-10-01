import { styled } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

export const StyledSubscriptionContainer = styled(Container)(({ theme, bgdata }) => {
    const { backgroundImage, isBackgroundPattern } = bgdata;
    return {
        backgroundRepeat: isBackgroundPattern ? 'repeat' : 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.common.white,
        paddingTop: `${theme.spacing(4)}px`,
        paddingBottom: `${theme.spacing(4)}px`
    }
});

export const StyledSubscriptionForm = styled('form')(({ theme }) => {
    return {
        margin: `0 auto`,
        [theme.breakpoints.down('sm')]: {
            width: `100%`
        },
        [theme.breakpoints.up('sm')]: {
            width: `50%`
        },
    }
});