import React, { Fragment } from "react";
import * as _ from "lodash";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Subscription from "../../components/subscription";
import Testimonial from "../../components/testimonial";
import CustomCarousel from '../../components/carousel';

import { StyledTeamAvatar } from "./home-layout.styles";

const renderTeamList = (teams) => {
  return _.map(teams, (teamMember, index) => {
    const { memberTitle, memberName, memberRole, memberAvatar } = teamMember;
    const listKeyIndex = `${memberTitle}-${memberName}-${index}`;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={listKeyIndex}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          <StyledTeamAvatar
            alt={memberName}
            src={memberAvatar}
          ></StyledTeamAvatar>
          <Box
            mt={2}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="subtitle2" display="block">
              {memberName}
            </Typography>
            <Typography variant="caption" display="block">
              {memberRole}
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  });
};

const renderTeamSection = (teamList) => {
  const config = {
    title: 'Our Team',
    subTitle: 'Get to know the people behind the sharing tree',
    showDivider: true
  };
  return (
    <HomeSection config={config}>
      <Grid container>{renderTeamList(teamList)}</Grid>
    </HomeSection>
  );
};

const renderTestimonialList = (testimonials) => {
  return _.map(testimonials, (testimonial, index) => {
    const listKeyIndex = `testimonial-${index}`;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={listKeyIndex}>
        <Testimonial data={testimonial} />
      </Grid>
    );
  })
}

const renderTestimonialSection = (testimonials) => {
  const config = {
    title: 'Testimonials',
    subTitle: 'What our recipients say about us',
    showDivider: true
  };
  return (
    <HomeSection config={config}>
      <Grid container spacing={2} direction="row" justify="center" alignItems="center">{renderTestimonialList(testimonials)}</Grid>
    </HomeSection>
  );

}

const renderHomeCarousel = () => {
  const carouselData = [{
    tileId: `tile 1`,
    backgroundColor: 'green'
  }, {
    tileId: `tile 2`,
    backgroundColor: 'red'
  }, {
    tileId: `tile 3`,
    backgroundColor: 'yellow'
  }, {
    tileId: `tile 4`,
    backgroundColor: 'blue'
  }]
  return (
      <CustomCarousel data={carouselData}/>
  );
}

const HomeSection = (props) => {
  const { children, config } = props;
  const title = _.get(config, 'title', '');
  const subTitle = _.get(config, 'subTitle', '');
  const showDivider = _.get(config, 'showDivider', false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="stretch"
    >
      {showDivider && <Divider />}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={3}
        mb={2}
      >
        <Typography variant="h6" component="h2">{title}</Typography>
        <Typography variant="caption" component="h3" align="center">{subTitle}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {children}
      </Box>
    </Box>
  );
}

const HomeLayout = (props) => {
  const { subscription, teamList = [], testimonials = [] } = props;
  return (
    <Fragment>
        {renderHomeCarousel()}
        {renderTestimonialSection(testimonials)}
        {renderTeamSection(teamList)}
        <Subscription data={subscription} />
    </Fragment>
  );
};

export default HomeLayout;
