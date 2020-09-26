import matter from "gray-matter";
import fs from "fs";

export const getNavigationMenuList = () => {
  const menusFileURL = `contents/settings/menus.md`;
  let menuListMarkdown = [],
      menuList = [];
  try {
    menuListMarkdown = fs.readFileSync(`${menusFileURL}`).toString();
    const { data: { headerMenuNavigation = [] } } = matter(menuListMarkdown);
    menuList = headerMenuNavigation.map((menu) => {
      return mapMenuData(menu);
    })
  }
  catch(error) {
    console.log("**** No header navigation menu items available *****");
  }
  return menuList;
};

const mapMenuData = (menu) => {
    const { title = '', srTitle = '', url = '', inline = false, special = false } = menu;
    return {
        id: `nav-${url}`,
        label: title,
        srLabel: srTitle,
        isInline: inline,
        isSpecial: special,
        link: url,
    }
};
