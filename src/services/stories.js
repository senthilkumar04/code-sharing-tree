import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

export const getStories = () => {
    const storiesPath = 'contents/posts/story';
    const stories = fs.readdirSync(storiesPath);
    const storyList = [];
    stories.forEach((storyName) => {
        const storyMarkdown = fs.readFileSync(`${storiesPath}/${storyName}`).toString();
        const { data = null, content = null } = matter(storyMarkdown);
        const title = _.get(data, 'name', '');
        const excerpt = _.get(data, 'excerpt', '');
        const date = _.get(data, 'date', null);
        const publishDate = date ? new Date(date).toString() : null;
        const thumbnail = _.get(data, 'thumbnail', '');
        const storyObj = { title, excerpt, publishDate, content, thumbnail };
        storyList.push(storyObj);
    });

    return storyList;
}