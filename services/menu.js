import matter from "gray-matter";

const fs = require("fs");

export const getNavigationMenuList = () => {
  const menuContentBaseURL = `content/menus`;
  const menuFiles = fs.readdirSync(`${process.cwd()}/${menuContentBaseURL}`);
  return menuFiles.map((fileName, index) => {
    const menuMarkdown = fs
      .readFileSync(`${menuContentBaseURL}/${fileName}`)
      .toString();
    const { data: menuData } = matter(menuMarkdown);
    return mapMenuData(menuData);
  });
};

const mapMenuData = (menu) => {
    const { title: menuTitle, srTitle = '', menuUrl = '', menuInline = false, menuSpecial = false } = menu;
    return {
        id: `nav-${menuUrl}`,
        label: menuTitle,
        accessibleLabel: srTitle,
        isInline: menuInline,
        isSpecial: menuSpecial,
        link: menuUrl,
    }
};
