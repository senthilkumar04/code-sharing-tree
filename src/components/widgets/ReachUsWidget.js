import React, {Fragment} from 'react';
import * as _ from 'lodash';

import Typography from '@material-ui/core/Typography';

const ReachUsWidget = ({ data }) => {
    const { widgetTitle = '' } = data;
    return (
        <Fragment>
            <Typography variant="subtitle2" component="h2">{_.toUpper(widgetTitle)}</Typography>
        </Fragment>
    );
}

export default ReachUsWidget;