import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

const storiesPath = 'contents/posts/story';

const getAndMapStoryData = (storyName) => {
    const storyMarkdown = fs.readFileSync(`${storiesPath}/${storyName}`).toString();
    const { data = null } = matter(storyMarkdown);
    if(data) {
        const title = _.get(data, 'title', '');
        const excerpt = _.get(data, 'excerpt', '');
        const date = _.get(data, 'date', null);
        const publishDate = date ? new Date(date).toString() : null;
        const thumbnail = _.get(data, 'banner', '');
        const content = _.get(data, 'story', '');
        const author = _.get(data, 'author', '');
        return { title, excerpt, publishDate, content, thumbnail, author, slug: storyName };
    }
    return null;
}

export const getStories = () => {
    const stories = fs.readdirSync(storiesPath);
    const storyList = [];
    stories.forEach((storyName) => {
        const storyObj = getAndMapStoryData(storyName);
        if(storyObj) {
            storyList.push(storyObj);
        }
    });
    return storyList;
}

export const getStoriesSlug = () => {
    const stories = fs.readdirSync(storiesPath);
    const storiesSlugList = _.map(stories, (storySlug) => {
        return storySlug;
    });
    return storiesSlugList
}

export const getStoryBySlug = (slug) => {
    const stories = fs.readdirSync(storiesPath);
    const storySlug = _.find(stories, (storyName) => storyName === slug);
    if(storySlug) {
        return getAndMapStoryData(storySlug);
    }
    return null;
}