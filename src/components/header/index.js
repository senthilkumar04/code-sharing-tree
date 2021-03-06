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
    <StyledHeader px={1}>
        <StyledLogoBox display="flex" flexDirection="row" alignItems="center" justifyContent="center" py={2}>
          <StyledLogoTitle variant="subtitle1">{logoTitle}</StyledLogoTitle>
          <Typography variant="srOnly">{srLogoTitle}</Typography>
        </StyledLogoBox>
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
