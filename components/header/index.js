import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import {
  StyledHeader,
  StyledLogoBox,
  StyledIconButton,
  StyledLogoTitle,
} from "./header.styles";

import MenuList from './MenuList';
import MenuListDrawer from './MenuListDrawer';

const Header = (props) => {
  const { logoTitle, srLogoTitle, menus } = props;
  const menuList = [
    {
      id: "nav-menu-home",
      label: "Home",
      srLabel: "Tap to go to Home page",
      link: "/",
    },
    {
      id: "nav-menu-about",
      label: "About us",
      srLabel: "Tap to go to About us page",
      link: "/about",
    },
    {
      id: "nav-menu-contact",
      label: "Contact us",
      srLabel: "Tap to go to Contact us page",
      link: "/contact",
    },
  ];

  const [state, setState] = useState({
    openDrawer: false,
  });
  const { openDrawer } = state;
  const menuAnchor = "left";
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, openDrawer: open });
  };

  return (
    <StyledHeader bgcolor="common.white">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        px={1}
      >
        <Box display={{ sm: "block", md: "none", lg: "none", xl: "none" }}>
          <StyledIconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </StyledIconButton>
          <MenuListDrawer
            menus={menuList}
            openDrawer={openDrawer}
            anchor={menuAnchor}
            toggleDrawer={toggleDrawer}
          />
        </Box>
        <StyledLogoBox py={[0, 0, 2]}>
          <StyledLogoTitle variant="subtitle1">{logoTitle}</StyledLogoTitle>
          <Typography variant="srOnly">{srLogoTitle}</Typography>
        </StyledLogoBox>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "block" }} px={2}>
        <Divider variant="middle" />
        <MenuList menus={menuList} />
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
