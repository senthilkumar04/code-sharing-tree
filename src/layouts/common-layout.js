import React from 'react';
import Proptypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

export default function CommonLayout({ children, menus, footerWidgets }) {
    return (
        <React.Fragment>
            <Header menuList={menus} />
            {children}
            <Footer widgets={footerWidgets} />
        </React.Fragment>
    );
}

CommonLayout.proptypes = {
    children: Proptypes.elementType.isRequired
}