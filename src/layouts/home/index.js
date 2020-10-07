import React, { Fragment } from "react";
import * as _ from "lodash";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Subscription from "../../components/subscription";

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
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={3}
        mb={2}
      >
        <Typography variant="h6" component="h2">
          OUR TEAM
        </Typography>
        <Typography variant="caption" component="h3" align="center">
          Get to know the people behind the sharing tree
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid container>{renderTeamList(teamList)}</Grid>
      </Box>
    </Box>
  );
};

const HomeLayout = (props) => {
  const { subscription, teamList } = props;
  return (
    <Fragment>
        {renderTeamSection(teamList)}
        <Subscription data={subscription} />
    </Fragment>
  );
};

export default HomeLayout;
