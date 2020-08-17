import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const StyledFooter = styled(Box)(({ theme }) => {
    return {
        backgroundColor: theme.palette.grey[800],
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        color: theme.palette.common.white
    }
})

export const StyledCopyRightsBox = styled(Box)(({ theme }) => {
    return {
        color: theme.palette.grey[400]
    }
})