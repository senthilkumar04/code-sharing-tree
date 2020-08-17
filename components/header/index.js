import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {
  StyledLogoBox,
  StyledIconButton,
  StyledLogoTitle,
  StyledMenuItem,
  StyledMenuDrawerBox,
} from "./header.styles";

const MenuListDrawer = ({ menus, openDrawer, toggleDrawer, anchor }) => {
  return (
    <Drawer anchor={anchor} open={openDrawer} onClose={toggleDrawer(false)}>
      <StyledMenuDrawerBox
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menus.map((menu) => (
            <Link href={menu.link} key={menu.id}>
                <ListItem button>
                    <ListItemText primary={menu.label} />
                </ListItem>
            </Link>
          ))}
        </List>
      </StyledMenuDrawerBox>
    </Drawer>
  );
};

const MenuList = ({ menus }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      justifyContent="center"
    >
      {menus.map((menu) => {
        const { id, label, srLabel } = menu;
        return (
            <Link href={menu.link} key={id}>
                <StyledMenuItem>
                    <Typography aria-label={srLabel} variant="body1">
                    {label}
                    </Typography>
                </StyledMenuItem>
            </Link>
        );
      })}
    </Box>
  );
};

const Header = (props) => {
  const { logoTitle, srLogoTitle } = props;
  const menuList = [
    {
      id: "nav-menu-home",
      label: "Home",
      srLabel: "Tap to go to Home page",
      link: '/'
    },
    {
      id: "nav-menu-about",
      label: "About us",
      srLabel: "Tap to go to About us page",
      link: '/about'
    },
    {
      id: "nav-menu-contact",
      label: "Contact us",
      srLabel: "Tap to go to Contact us page",
      link: '/contact'
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
    <Box bgcolor="primary.main">
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
    </Box>
  );
};

MenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      srLabel: PropTypes.string.isRequired,
    })
  ),
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
