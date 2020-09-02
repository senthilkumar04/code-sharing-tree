import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { StyledMenuItem } from "./header.styles";

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

MenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      srLabel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuList;
