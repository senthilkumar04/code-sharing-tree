import { styled } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

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
   height: `300px`
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