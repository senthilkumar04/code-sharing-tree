import React, {Fragment} from 'react';
import * as _ from 'lodash';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            color: theme.palette.common.white
        }
    }
})

const SocialLinksWidget = ({ data }) => {
    const { widgetTitle = '', facebookUrl = '#', instagramUrl = '#', twitterUrl = '#'  } = data;
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant="subtitle2" component="h2" color="primary">{_.toUpper(widgetTitle)}</Typography>
            <Box my={2} display="flex" flexDirection="row" justifyContent="flex-start">
                <Box mr={1}><Link href={facebookUrl} target="_blank" rel="noreferrer"><FacebookIcon className={classes.root} /></Link></Box>
                <Box mr={1}><Link href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon className={classes.root} /></Link></Box>
                <Box mr={1}><Link href={twitterUrl} target="_blank" rel="noreferrer"><TwitterIcon className={classes.root} /></Link></Box>
            </Box>
        </Fragment>
    );
}

export default SocialLinksWidget;