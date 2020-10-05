import React, {Fragment} from 'react';
import * as _ from 'lodash';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ImportantLinksWidget = ({ data }) => {
    const { widgetTitle = '', linkslist = [] } = data;
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
                                <ListItemText primary={<Link href={url}>{title}</Link>} />
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