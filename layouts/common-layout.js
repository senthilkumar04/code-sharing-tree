import React from 'react';
import Proptypes from 'prop-types';

import Header from '../components/header';

export default function CommonLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
}

CommonLayout.proptypes = {
    children: Proptypes.elementType.isRequired
}