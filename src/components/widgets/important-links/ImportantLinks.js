import React, {Fragment} from 'react';
import * as _ from 'lodash';

import { Link, Typography, Box, List, ListItem, ListItemText } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            color: theme.palette.common.white
        }
    }
})

const ImportantLinksWidget = ({ data }) => {
    const { widgetTitle = '', linkslist = [] } = data;
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant="subtitle2" component="h2" color="primary">{_.toUpper(widgetTitle)}</Typography>
            <Box my={2}>
                <List dense disablePadding>
                {
                    _.map(linkslist, (link, index) => {
                        const {title = '', url = '#'} = link;
                        const listIndex = `${title}-${index}`
                        return (
                            <ListItem key={listIndex} dense disableGutters>
                                <ListItemText primary={<Link className={classes.root} href={url}>{title}</Link>} />
                            </ListItem>
                        );
                    })
                }
                </List>
            </Box>
        </Fragment>
    );
}

export default ImportantLinksWidget;