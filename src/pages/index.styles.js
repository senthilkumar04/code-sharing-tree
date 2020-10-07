import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { styled } from '@material-ui/styles';

export const StyledTeamAvatar = styled(Avatar)(({ theme }) => {
    return {
        width: `${theme.spacing(24)}px`,
        height: `${theme.spacing(24)}px`
    }
})