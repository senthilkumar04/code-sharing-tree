import { styled } from '@material-ui/core/styles';

export const StyledTileUnderline = styled('div')(({ theme }) => {
    return {
      borderTop: `3px solid ${theme.palette.primary.main}`,
      width: `150px`,
      margin: `${theme.spacing(2)}px 0`
    }
})