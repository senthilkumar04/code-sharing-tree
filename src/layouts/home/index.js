import React, { Fragment } from "react";
import * as _ from "lodash";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Subscription from "../../components/subscription";
import Testimonial from "../../components/testimonial";
import Carousel from '../../components/carousel';

import { StyledTeamAvatar, StyledAboutPaper, StyledAboutContent, StyledTileUnderline, StyledWhatWeDoImage } from "./home-layout.styles";

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
    id: 'our-team',
    subTitle: 'Get to know the people behind the sharing tree',
    showDivider: true
  };
  return (
    <Fragment>
        <HomeSection config={config}>
          <Grid container>{renderTeamList(teamList)}</Grid>
        </HomeSection>
    </Fragment>
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
      <Box px={3}>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          {renderTestimonialList(testimonials)}
        </Grid>
        <Box my={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary">View all</Button>
        </Box>
      </Box>
    </HomeSection>
  );

}

const renderAboutUsSection = (aboutUs) => {
  const config = {
    title: 'About Us',
    id: 'about-us',
    subTitle: 'Get to know who we are',
    showDivider: true
  }
  const {description, visionDesc, missionDesc} = aboutUs;
  return (
    <HomeSection config={config}>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <StyledAboutContent mx={4} px={8}>
          <Typography align="center" variant="body2" gutterBottom={true}><Box lineHeight={1.8}>{description}</Box></Typography>
        </StyledAboutContent>
        <Box p={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledAboutPaper>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <VisibilityIcon color="primary" fontSize="large"/>
                  <Typography variant="body1" gutterBottom={true}><Box fontWeight={700} mb={1}>VISION</Box></Typography>
                  <Typography align="center" variant="body2"><Box lineHeight={1.8}>{visionDesc}</Box></Typography>
                </Box>
              </StyledAboutPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledAboutPaper>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <WifiTetheringIcon color="primary" fontSize="large"/>
                  <Typography variant="body1" gutterBottom={true}><Box fontWeight={700} mb={1}>MISSION</Box></Typography>
                  <Typography align="center" variant="body2"><Box lineHeight={1.8}>{missionDesc}</Box></Typography>
                </Box>
              </StyledAboutPaper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </HomeSection>
  );
}

const renderStoriesSection = ({stories, testimonials}) => {
  const config = {
    title: 'Our stories',
    id: 'our-stories',
    subTitle: 'Get to know the sharing tree better',
    showDivider: true
  }
  const theme = useTheme();
  const isExtraSmallDevice = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmallDevice = useMediaQuery(theme.breakpoints.only('sm'));
  const noOfCols = isExtraSmallDevice ? 1 : (isSmallDevice ? 2 : 3);
  return (
    <Fragment>
      <HomeSection config={config}>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" mb={4}>
          <GridList cellHeight={280} cols={noOfCols} spacing={20}>
            <GridListTile>
              <img src={"img/feeding-the-hunger-story-featured-image.jpg"} />
              <GridListTileBar
                title={"Feeding the hungry"}
                subtitle={<span>Sharing Tree made an annual contribution to the madras Prinjrapole, the house of old ,sick and</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile>
              <img src={"img/helping-people-heal-featured-image.jpg"} />
              <GridListTileBar
                title={"Feeding the hungry"}
                subtitle={<span>Sharing Tree made an annual contribution to the madras Prinjrapole, the house of old ,sick and</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile>
              <img src={"img/making-dreams-come-true-story-featured-image.jpg"} />
              <GridListTileBar
                title={"Feeding the hungry"}
                subtitle={<span>Sharing Tree made an annual contribution to the madras Prinjrapole, the house of old ,sick and</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          </GridList>
        </Box>
      </HomeSection>
      {(testimonials.length > 2) && renderTestimonialSection(testimonials)}
    </Fragment>
  )
}

const renderWhatWeDoSection = (whatWeDo) => {
  const config = {
    title: 'What we do',
    id: 'what-we-do',
    subTitle: 'Get to know what we do',
    showDivider: true
  }
  return (
    <HomeSection config={config}>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" mb={3}>
        <Grid container>
          {
            _.map(whatWeDo, (item) => {
              const {title, description, whatWeDoImage} = item;
              return (
                <Grid item xs={12} sm={12} md={6}>
                  <Box display="flex" flexDirection="column" alignItems="stretch" p={2}>
                    <StyledWhatWeDoImage image={whatWeDoImage} mb={1} />
                    <Typography component="h2" variant="h6" gutterBottom>{title}</Typography>
                    <Typography variant="body2" gutterBottom><Box textAlign="justify" lineHeight={1.8}>{description}</Box></Typography>
                  </Box>
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    </HomeSection>
  );
}

const renderHomeCarousel = (carouselData) => {
  return <Carousel data={carouselData}/>
}

const HomeSection = (props) => {
  const { children, config } = props;
  const title = _.get(config, 'title', '');
  const subTitle = _.get(config, 'subTitle', '');
  const showDivider = _.get(config, 'showDivider', false);
  const sectionId = _.get(config, 'id', '');
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="stretch"
      id={sectionId}
    >
      {showDivider && <Divider />}
      <Container maxWidth="lg">
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
          <StyledTileUnderline />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="stretch"
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}

const HomeLayout = (props) => {
  const { subscription, teamList = [], testimonials = [], featuredBanner = [], aboutUs = null, whatWeDo = [] } = props;
  return (
    <Fragment>
        {renderHomeCarousel(featuredBanner)}
        {renderAboutUsSection(aboutUs)}
        {renderWhatWeDoSection(whatWeDo)}
        {renderStoriesSection({testimonials})}
        {renderTeamSection(teamList)}
        <Subscription data={subscription} />
    </Fragment>
  );
};

export default HomeLayout;
