import { styled } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

export const StyledSubscriptionContainer = styled(Container)(({ theme, backgroundpatternimage }) => {
    return {
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundImage: backgroundpatternimage ? `url(${backgroundpatternimage})` : null,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});