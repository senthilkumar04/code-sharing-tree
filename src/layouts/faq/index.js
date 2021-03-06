import React, { Component } from 'react';
import * as _ from 'lodash';

import { Container, Grid, Box, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Hidden } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { ExpandMore } from '@material-ui/icons';

import { StyledTileUnderline } from '../common';

import { ListService } from '../../services/list';

const FAQSection = ({ data, keyIndex, onChange, expanded }) => {
    if(data && keyIndex) {
        const question = _.get(data, 'question', '');
        const answer = _.get(data, 'answer', '');
        const faqID = `${keyIndex}-header`;
        const faqAriaControl = `${keyIndex}-content`;
        return (
            <ExpansionPanel expanded={expanded === faqID} onChange={onChange(faqID)}>
                <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls={faqAriaControl} id={faqID}>
                    <Box color="primary.main" fontWeight="bold" fontFamily="body2.fontSize">{question}</Box>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="body2">{answer}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
    return null;
}

class FAQLayout extends Component {

    listObj;
    pageTotal;

    state= {
        currentPage: 1,
        currentListData: [],
        expanded: false
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
        const { currentListData, expanded } = this.state;
        const { data = null } = this.props;
        if(data) {
            const { title, subTitle, desc } = data;
            return (
                <Container maxWidth="lg">
                    <Box mt={4} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                        <Typography variant="h5" component="h1">{title}</Typography>
                        <Typography variant="body2" color="textSecondary">{subTitle}</Typography>
                        <StyledTileUnderline/>
                    </Box>
                    <Box my={[0, 0, 2]}>
                        { desc && <Typography variant="body2" gutterBottom>{desc}</Typography>}
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Box my={4}>
                                {
                                    _.map(currentListData, (listItem, index) => {
                                        const keyIndex = `faq-${index}`;
                                        return (
                                            <FAQSection data={listItem} key={keyIndex} keyIndex={keyIndex} onChange={this.handleAccordianChange.bind(this)} expanded={expanded} />
                                        );
                                    })
                                }
                                {
                                    (this.pageTotal > 1) && (
                                        <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Pagination count={this.pageTotal} page={this.state.currentPage} onChange={this.handlePageChange.bind(this)} />
                                        </Box>
                                    )
                                }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            );
        }
        
    }

    initializeListService(props) {
        const { data, pageLimit } = props;
        const faqList = _.get(data, 'list', []);
        this.listObj = new ListService({ data: faqList, pageLimit });
        this.pageTotal = this.listObj.getTotalNumberOfPages();
    }

    handlePageChange(event, page) {
        this.setState({ 
            currentPage: page, 
            currentListData: this.listObj.getCurrentPage(page), 
            expanded: false 
        });
    }

    handleAccordianChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded : isExpanded ? panel : false
        })
    }
}

export default FAQLayout