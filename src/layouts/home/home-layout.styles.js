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

export const StyledAboutPaper = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey[200],
    padding: `${theme.spacing(4)}px`
  }
})

export const StyledAboutContent = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.only('xs')]: {
      padding: `0 ${theme.spacing(4)}px 0 ${theme.spacing(4)}px`
    },
    [theme.breakpoints.only('sm')]: {
      padding: `0 ${theme.spacing(8)}px 0 ${theme.spacing(8)}px`
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0 ${theme.spacing(16)}px 0 ${theme.spacing(16)}px`
    },
  }
})

export const StyledTileUnderline = styled('div')(({ theme }) => {
  return {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    width: `150px`,
    margin: `${theme.spacing(2)}px 0`
  }
})

export const StyledWhatWeDoImage = styled(Box)(({ image }) => {
  return {
    height: '250px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
})