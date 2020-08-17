import React from 'react';
import Proptypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

export default function CommonLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
}

CommonLayout.proptypes = {
    children: Proptypes.elementType.isRequired
}