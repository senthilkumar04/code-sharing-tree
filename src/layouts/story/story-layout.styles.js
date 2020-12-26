import { styled } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

export const StyledFeaturedImg = styled(Box)(({ theme, src }) => {
    return {
        width: '100%',
        height: '250px',
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderBottom: `${theme.spacing(1)}px solid ${theme.palette.primary.main}`
    }
});