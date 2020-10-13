import { styled } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

export const StyledTestimonialCard = styled(Card)(({ theme }) => {
    return {
        backgroundColor: theme.palette.grey[200],
    }
})