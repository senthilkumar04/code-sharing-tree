import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

export const StyledLogoBox = styled(Box)(({ theme }) => {
    return {
        margin: '0 auto',
        color: theme.palette.common.white
    }
})

export const StyledIconButton = styled(IconButton)(({ theme }) => {
    return {
        color: theme.palette.common.white
    }
})

export const StyledLogoTitle = styled(Typography)(({ theme }) => {
    return {
        fontWeight: theme.typography.fontWeightBold
    }
})

export const StyledMenuItem = styled(ButtonBase)(({ theme }) => {
    return {
        color: theme.palette.common.white,
        padding: `${theme.spacing(2)}px`,
        "&:hover": {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main
        }
    }
})

export const StyledMenuDrawerBox = styled(Box)(({ theme }) => {
    return {
        width: '250px'
    }
})
