import React, {Fragment} from 'react';
import * as _ from 'lodash';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/styles';

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