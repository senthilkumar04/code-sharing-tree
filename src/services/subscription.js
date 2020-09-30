import matter from "gray-matter";
import fs from "fs";

export const getSubscriptionDetails = () => {
  const subscriptionFileURL = `contents/settings/subscription.md`;
  let subscriptionMarkdown = null;
  try {
    subscriptionMarkdown = fs.readFileSync(`${subscriptionFileURL}`).toString();
    const { data } = matter(subscriptionMarkdown);
    return data;
  }
  catch(error) {
    console.log("**** Error: No subscription data available *****");
  }
  return null;
};