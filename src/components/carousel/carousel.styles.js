import { styled } from '@material-ui/core/styles';

import { Grid, Box, IconButton } from '@material-ui/core';

export const StyledAnimationGrid = styled(Grid)(({ theme }) => {
    return {
        '&.fade-enter .test': {
            opacity: 0,
            transform: `translateX(-100%)`
         },
         '&.fade-exit .test': {
            opacity: 1,
            transform: `translateX(0%)`
         },
         '&.fade-enter-active .test': {
            opacity: 1,
            transform: `translateX(0%)`
         },
         '&.fade-exit-active .test': {
            opacity: 0,
            transform: `translateX(100%)`
         },
         '&.fade-enter-active .test': {
            transition: `opacity 500ms, transform 500ms`
         },
         '&.fade-exit-active .test': {
            transition: `opacity 500ms, transform 500ms`
         }
    }
})

export const StyledGridItemWrapper = styled(Grid)({
   position: 'relative',
   height: `calc(100vh - 120px)`,
   overflow: 'hidden',
});

export const StyledControlsBox = styled(Box)(({ theme }) => {
   return {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
   }
})

export const StyledCarouselImg = styled('img')(() => {
   return {
      width: `100%`,
   }
})

export const StyledCarouselContent = styled(Box)(({ theme }) => {
   return {
      display: 'flex',
      flexDirection: 'column',
      margin: `${theme.spacing(2)}px`,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      padding: `${theme.spacing(2)}px`,
      color: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
         width: `auto`,
      },
      [theme.breakpoints.up('sm')]: {
         width: `50%`,
      },
   }
})

export const StyledControlBtn = styled(IconButton)(({ theme }) => {
   return {
      backgroundColor: theme.palette.common.white
   }
})

export const StyledImgWrapper = styled(Box)(({ bgimage }) => {
   return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgimage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: `350px`
   }
})