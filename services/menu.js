import matter from "gray-matter";
import * as _ from 'lodash';

const fs = require("fs");

export const getNavigationMenuList = () => {
  const menuContentBaseURL = `content/_menus`;
  const menuFiles = fs.readdirSync(`${process.cwd()}/${menuContentBaseURL}`);
  return _.sortBy(menuFiles.map(fileName => {
    const menuMarkdown = fs
      .readFileSync(`${menuContentBaseURL}/${fileName}`)
      .toString();
    const { data: menuData } = matter(menuMarkdown);
    return mapMenuData(menuData);
  }), ['order']);
};

const mapMenuData = (menu) => {
    const { title = '', sr_title = '', menu_url = '', menu_inline = false, menu_special = false, menu_order = 0 } = menu;
    return {
        id: `nav-${menu_url}`,
        label: title,
        srLabel: sr_title,
        isInline: menu_inline,
        isSpecial: menu_special,
        link: menu_url,
        order: menu_order
    }
};
