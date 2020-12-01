import { styled } from '@material-ui/styles';
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export const StyledTeamAvatar = styled(Avatar)(({ theme }) => {
  return {
    width: `${theme.spacing(24)}px`,
    height: `${theme.spacing(24)}px`,
  };
});

export const StyledAboutUsImg = styled('img')({
  width: `100%`
})

export const StyledAboutPaper = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[200],
    padding: `${theme.spacing(4)}px`
  }
})

export const StyledAboutContent = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      padding: `0 ${theme.spacing(4)}px 0 ${theme.spacing(4)}px`
    },
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing(8)}px 0 ${theme.spacing(8)}px`
    },
  }
})
