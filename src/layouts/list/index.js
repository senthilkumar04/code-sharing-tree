import React, { Component } from 'react';
import * as _ from 'lodash';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Pagination from '@material-ui/lab/Pagination';

import { ListService } from '../../services/list';

class ListLayout extends Component {

    listObj;
    pageTotal;

    state= {
        currentPage: 1,
        currentListData: []
    };

    constructor(props) {
        super(props);
        this.listObj = null;
        this.initializeListService(props);
    }

    componentDidMount() {
        this.handlePageChange(null, 1);
    }

    render() {
        const { currentListData } = this.state;
        const { renderItem, pageOptions } = this.props;
        const pageTitle = _.get(pageOptions, 'title', '');
        const pageSubTitle = _.get(pageOptions, 'subTitle', '');
        return (
            <Container maxWidth="lg">
                <Box>
                    <Box mt={3}>
                        <Box mb={2}>
                            <Typography variant="h6" component="h1">{pageTitle}</Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>{pageSubTitle}</Typography>
                        </Box>
                        <Divider variant="middle"/>
                    </Box>
                    <Box my={3}>
                        <Grid container spacing={3}>
                            {
                                _.map(currentListData, (listItem, index) => {
                                    const keyIndex = `list-item-${index}`;
                                    return (
                                        <Grid item xs={12} sm={6} md={4} key={keyIndex}>{renderItem(listItem)}</Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Box>
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
        this.setState({ currentPage: page, currentListData: this.listObj.getCurrentPage(page) });
    }
}

export default ListLayout;