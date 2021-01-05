import React, {Fragment} from 'react';
import * as _ from 'lodash';

import { Link, Typography, Box } from '@material-ui/core';
import { Instagram, Facebook, Twitter } from '@material-ui/icons';

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
                <Box mr={1}><Link href={facebookUrl} target="_blank" rel="noreferrer"><Facebook className={classes.root} /></Link></Box>
                <Box mr={1}><Link href={instagramUrl} target="_blank" rel="noreferrer"><Instagram className={classes.root} /></Link></Box>
                <Box mr={1}><Link href={twitterUrl} target="_blank" rel="noreferrer"><Twitter className={classes.root} /></Link></Box>
            </Box>
        </Fragment>
    );
}

export default SocialLinksWidget;