import React, {Fragment} from 'react';
import * as _ from 'lodash';

import { Typography, Box } from '@material-ui/core';

const ReachUsWidget = ({ data }) => {
    const { widgetTitle = '', orgName, addressLine1, addressLine2, cityName, stateName, pincode, emailAddress } = data;
    return (
        <Fragment>
            <Typography variant="subtitle2" component="h2" color="primary">{_.toUpper(widgetTitle)}</Typography>
            <Box my={2}>
                {orgName && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{orgName}</Typography>
                    </Box>
                )}
                {addressLine1 && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{addressLine1}</Typography>
                    </Box>
                )}
                {addressLine2 && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{addressLine2}</Typography>
                    </Box>
                )}
                {(cityName && pincode) && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{`${cityName} - ${pincode}`}</Typography>
                    </Box>
                )}
                {stateName && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{stateName}</Typography>
                    </Box>
                )}
                {emailAddress && (
                    <Box component="div" display="block">
                        <Typography variant="body2">{`Mail: ${emailAddress}`}</Typography>
                    </Box>
                )}
            </Box>
        </Fragment>
    );
}

export default ReachUsWidget;