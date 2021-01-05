import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from '@material-ui/core';

import {
  StyledHeader,
  StyledLogoBox,
  StyledLogoTitle,
} from "./header.styles";

const Header = (props) => {
  const { logoTitle, srLogoTitle } = props;

  return (
    <StyledHeader bgcolor="common.white">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        px={1}
      >
        <StyledLogoBox py={2}>
          <StyledLogoTitle variant="subtitle1">{logoTitle}</StyledLogoTitle>
          <Typography variant="srOnly">{srLogoTitle}</Typography>
        </StyledLogoBox>
      </Box>
    </StyledHeader>
  );
};

Header.propTypes = {
  logoTitle: PropTypes.string,
  srLogoTitle: PropTypes.string,
};

Header.defaultProps = {
  logoTitle: "SHARING TREE TRUST",
  srLogoTitle: "Logo of the shraing tree trust, tap to go to the Home page",
};

export default Header;
