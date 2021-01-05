import React, { Component, Fragment, useState } from "react";
import * as _ from "lodash";
import { Element, Link, Events, scrollSpy } from 'react-scroll';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { useRouter } from 'next/router'

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
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import CommentIcon from '@material-ui/icons/Comment';

import Subscription from "../../components/subscription";
import Testimonial from "../../components/testimonial";
import StoryCard from "../../components/story-card";
import Carousel from '../../components/carousel';

import { StyledTeamAvatar, StyledAboutPaper, StyledAboutContent, StyledTileUnderline, StyledWhatWeDoImage, StyledHomeMenuWrapper, StyledHomeMenuItem, useHomeMenuStyles } from "./home-layout.styles";

import { HOME_MENU_LIST } from '../../utils/constants';
import { useDocumentScrollThrottled } from '../../utils/scrollThrottle';

const HomeSection = (props) => {
  const { children, config } = props;
  const title = _.get(config, 'title', '');
  const subTitle = _.get(config, 'subTitle', '');
  const showDivider = _.get(config, 'showDivider', false);
  const sectionId = _.get(config, 'id', '');
  return (
    <Element name={sectionId}>
      <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="stretch"
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
    </Element>
  );
}

const HomeCarousel = ({carouselData}) => {
  return <Carousel data={carouselData}/>
}

const AboutUsSection = ({aboutUs}) => {
  const config = {
    title: 'About Us',
    id: HOME_MENU_LIST.ABOUT_US,
    subTitle: 'Get to know who we are',
    showDivider: true
  }
  const {description, visionDesc, missionDesc} = aboutUs;
  return (
    <HomeSection config={config}>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <StyledAboutContent mx={4} px={8}>
          <Box fontSize="body2.fontSize" textAlign="center" lineHeight={1.8}>{description}</Box>
        </StyledAboutContent>
        <Box p={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledAboutPaper>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <VisibilityIcon color="primary" fontSize="large"/>
                  <Box fontSize="body1.fontSize" fontWeight={700} mb={1}>VISION</Box>
                  <Box fontSize="body2.fontSize" textAlign="center" lineHeight={1.8}>{visionDesc}</Box>
                </Box>
              </StyledAboutPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledAboutPaper>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <WifiTetheringIcon color="primary" fontSize="large"/>
                  <Box fontSize="body1.fontSize" fontWeight={700} mb={1}>MISSION</Box>
                  <Box fontSize="body2.fontSize" textAlign="center" lineHeight={1.8}>{missionDesc}</Box>
                </Box>
              </StyledAboutPaper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </HomeSection>
  );
}

const WhatWeDoSection = ({whatWeDo}) => {
  const config = {
    title: 'What we do',
    id: HOME_MENU_LIST.WHAT_WE_DO,
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
              const keyIndex = `${title}-section`;
              return (
                <Grid item xs={12} sm={12} md={6} key={keyIndex}>
                  <Box display="flex" flexDirection="column" alignItems="stretch" p={2}>
                    <StyledWhatWeDoImage image={whatWeDoImage} mb={1} />
                    <Typography component="h2" variant="h6" gutterBottom>{title}</Typography>
                    <Box textAlign="justify" fontSize="body2.fontSize" lineHeight={1.8}>{description}</Box>
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

const TestimonialSection = ({ testimonials }) => {
  const config = {
    title: 'Testimonials',
    id: HOME_MENU_LIST.TESTIMONIALS,
    subTitle: 'What our recipients say about us',
    showDivider: true
  };
  const router = useRouter();
  const viewAllTestimonials = (e) => {
    e.preventDefault();
    router.push('/testimonials');
  }
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
  if(testimonials.length > 2) {
    return (
      <HomeSection config={config}>
        <Box px={3}>
          <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            {renderTestimonialList(testimonials)}
          </Grid>
          <Box my={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary" onClick={viewAllTestimonials}>View all</Button>
          </Box>
        </Box>
      </HomeSection>
    )
  }
  return null;
}

const StoriesSection = ({ stories }) => {
  const config = {
    title: 'Our stories',
    id: HOME_MENU_LIST.OUR_STORIES,
    subTitle: 'Get to know the sharing tree better',
    showDivider: true
  };
  const router = useRouter();
  const viewAllStories = (e) => {
    e.preventDefault();
    router.push('/stories');
  }
  const renderStoryList = (stories) => {
    return _.map(stories, (story, index) => {
      const listKeyIndex = `story-${index}`;
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={listKeyIndex}>
          <StoryCard data={story} />
        </Grid>
      );
    })
  }
  return (
    <Fragment>
      <HomeSection config={config}>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" mb={4}>
          <Box mb={3}>
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
              {renderStoryList(stories)}
            </Grid>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary" onClick={viewAllStories}>View all</Button>
          </Box>
        </Box>
      </HomeSection>
    </Fragment>
  )
}

const TeamSection = ({ teamList }) => {
  const config = {
    title: 'Our Team',
    id: HOME_MENU_LIST.OUR_TEAM,
    subTitle: 'Get to know the people behind the sharing tree',
    showDivider: true
  };
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
  return (
    <Fragment>
        <HomeSection config={config}>
          <Grid container>{renderTeamList(teamList)}</Grid>
        </HomeSection>
    </Fragment>
  );
};

const HomeMenu = ({ menuList }) => {

  const {menuActive, shadow, fixed} = useHomeMenuStyles();

  const [shouldStickHeader, setShouldStickHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 350;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isScrolledUp = previousScrollTop > currentScrollTop;
    const isMinimumScrolled = (currentScrollTop > MINIMUM_SCROLL);
    
    setShouldShowShadow(isMinimumScrolled);
    setShouldStickHeader((isScrolledDown || isScrolledUp) && isMinimumScrolled);
  });

  const shadowStyle = shouldShowShadow ? shadow : '';
  const hiddenStyle = shouldStickHeader ? fixed : '';

  const getMenuIcon = (menuUrl) => {
    switch(menuUrl) {
      case HOME_MENU_LIST.ABOUT_US:
        return <InfoIcon color="primary"/>;
      case HOME_MENU_LIST.WHAT_WE_DO:
        return <WidgetsIcon color="primary"/>;
      case HOME_MENU_LIST.OUR_STORIES:
        return <MenuBookIcon color="primary"/>;
      case HOME_MENU_LIST.OUR_TEAM:
        return <PeopleIcon color="primary"/>;
      case HOME_MENU_LIST.TESTIMONIALS:
        return <CommentIcon color="primary"/>
    }
  }

  return (
    <Fragment>
      <StyledHomeMenuWrapper className={`${shadowStyle} ${hiddenStyle}`}>
        {
          _.map(menuList, (menu) => {
            const {title, url} = menu;
            return (
                <Link activeClass={menuActive} to={url} spy={true} smooth={true} offset={50} duration={500} offset={-50} key={title} isDynamic={true}>
                  <StyledHomeMenuItem >
                    <Hidden xsDown><Typography variant="button">{title}</Typography></Hidden>
                    <Hidden smUp>
                      <Tooltip title={title}>{getMenuIcon(url)}</Tooltip>
                    </Hidden>
                  </StyledHomeMenuItem>
                </Link>
            );
          })
        }
      </StyledHomeMenuWrapper>
    </Fragment>
  )
}

class HomeLayout extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    const { subscription, teamList = [], testimonials = [], featuredBanner = [], aboutUs = null, whatWeDo = [], stories = [] } = this.props;
    const { ABOUT_US, WHAT_WE_DO, OUR_STORIES, OUR_TEAM, TESTIMONIALS } = HOME_MENU_LIST;
    const homeMenuList = [{'title': 'About us', 'url': ABOUT_US}, {'title': 'What we do', 'url': WHAT_WE_DO} , {'title': 'Our stories', 'url': OUR_STORIES}, {'title': 'Testimonials', 'url': TESTIMONIALS}, {'title': 'Our team', 'url': OUR_TEAM}];
    return(
      <Fragment>
        <HomeCarousel carouselData={featuredBanner} {...this.props} />
        <HomeMenu menuList={homeMenuList}/>
        <AboutUsSection aboutUs={aboutUs} {...this.props} />
        <WhatWeDoSection whatWeDo={whatWeDo} {...this.props} />
        <StoriesSection stories={stories} {...this.props} />
        <TestimonialSection testimonials={testimonials} {...this.props} />
        <TeamSection teamList={teamList} {...this.props} />
        <Subscription data={subscription} {...this.props} />
      </Fragment>
    )
  }
}

export default trackWindowScroll(HomeLayout);
