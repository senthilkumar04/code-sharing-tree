import React from 'react';
import Proptypes from 'prop-types';

import Box from '@material-ui/core/Box';

import Header from '../components/header';
import Footer from '../components/footer';

export default function CommonLayout({ children, menus, footerWidgets }) {
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" style={{ height: '100%' }}>
            <Header menuList={menus} />
            <Box display="flex" flexDirection="column" flexGrow="1">{children}</Box>
            <Footer widgets={footerWidgets} />
        </Box>
    );
}

CommonLayout.proptypes = {
    children: Proptypes.elementType.isRequired
}