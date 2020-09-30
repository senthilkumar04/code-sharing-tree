import matter from "gray-matter";
import fs from "fs";

import { WIDGETS } from "../utils/constants";

const footerWidgetsConfig = [
  { columnOrder: 1, widgetId: WIDGETS.REACH_US },
  { columnOrder: 2, widgetId: WIDGETS.SOCIAL_LINKS },
  { columnOrder: 3, widgetId: WIDGETS.IMPORTANT_LINKS },
];

export const getFooterWidgets = () => {
  const widgetsFileUrl = `contents/settings/widgets.md`;
  let widgetsMarkdown = [],
    footerWidgets = null;
  try {
    widgetsMarkdown = fs.readFileSync(`${widgetsFileUrl}`).toString();
    const { data } = matter(widgetsMarkdown);
    footerWidgets = mapFooterWidgets(data);
  } catch (error) {
    console.log("**** Error: No footer widgets items available *****");
  }
  return footerWidgets;
};

const mapFooterWidgets = (data) => {
  let footerWidgetsMap = null;
  if (data) {
    footerWidgetsConfig.forEach((widgetConfig) => {
      const { columnOrder, widgetId } = widgetConfig;
      if (data[widgetId]) {
        if (!footerWidgetsMap) {
          footerWidgetsMap = {
            ["column" + columnOrder]: {
              ...data[widgetId],
              widgetId,
            },
          };
        } else {
          footerWidgetsMap["column" + columnOrder] = {
            ...data[widgetId],
            widgetId,
          };
        }
      }
    });
  }
  return footerWidgetsMap;
};
