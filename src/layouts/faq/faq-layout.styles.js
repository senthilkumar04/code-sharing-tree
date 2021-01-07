import { styled } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

export const StyledFAQImage = styled(Box)(({ src }) => {
    return {
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: '100%'
    }
})

export const StyledTileUnderline = styled('div')(({ theme }) => {
    return {
      borderTop: `3px solid ${theme.palette.primary.main}`,
      width: `150px`,
      margin: `${theme.spacing(2)}px 0`
    }
})