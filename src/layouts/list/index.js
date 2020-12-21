import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'

import Pagination from '@material-ui/lab/Pagination';


import { ListService } from '../../services/list';

class ListLayout extends Component {

    listObj;
    pageTotal;

    state= {
        currentPage: 1
    };

    constructor(props) {
        super(props);
        this.listObj = null;
        this.initializeListService(props);
    }

    render() {
        return (
            <Container maxWidth="lg">
                <Box>
                    List layout
                    {
                        (this.pageTotal > 1) && (
                            <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                <Pagination count={this.pageTotal} page={this.state.currentPage} onChange={this.handlePageChange.bind(this)} />
                            </Box>
                        )
                    }
                </Box>
            </Container>
        );
    }

    initializeListService(props) {
        const { data, pageLimit } = props;
        this.listObj = new ListService({ data, pageLimit });
        this.pageTotal = this.listObj.getTotalNumberOfPages();
    }

    handlePageChange(event, page) {
        console.log(page);
        console.log(this.listObj.getCurrentPage(page));
        this.setState({ currentPage: page });
    }
}

export default ListLayout;