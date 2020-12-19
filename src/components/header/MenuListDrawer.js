import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { StyledMenuDrawerBox, StyledQuoteBox } from "./header.styles";

const MenuListDrawer = ({ menus, openDrawer, toggleDrawer, anchor }) => {
  return (
    <Drawer anchor={anchor} open={openDrawer} onClose={toggleDrawer(false)}>
      <StyledMenuDrawerBox
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <StyledQuoteBox>
          <Typography variant="subtitle2" align="center">"Giving is the greatest act of grace."</Typography>
        </StyledQuoteBox>
        <List>
          {
            menus.map((menu) => {
              const { id, label, srLabel, link } = menu;
              return (
                <Link href={`/${link}`} key={id}>
                  <ListItem button>
                    <ListItemText>
                      <Typography aria-label={srLabel} variant="body1">{label}</Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
              )
            })
          }
        </List>
      </StyledMenuDrawerBox>
    </Drawer>
  );
};

MenuListDrawer.propTypes = {
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        srLabel: PropTypes.string.isRequired,
        isInline: PropTypes.bool.isRequired,
        isSpecial: PropTypes.bool.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    openDrawer: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    anchor: PropTypes.string.isRequired,
  };

export default MenuListDrawer;
