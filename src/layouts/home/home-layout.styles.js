import { styled } from '@material-ui/styles';
import Avatar from "@material-ui/core/Avatar";

export const StyledTeamAvatar = styled(Avatar)(({ theme }) => {
  return {
    width: `${theme.spacing(24)}px`,
    height: `${theme.spacing(24)}px`,
  };
});
