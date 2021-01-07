import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

const faqDataUrl = `contents/faq.md`;
const DEFAULT_FAQ_TITLE = 'FAQ';
const DEFAULT_FAQ_SUBTITLE = 'Below are the frequently asked questions';

const mapFAQData = (data) => {
    if(data) {
        const title = _.get(data, 'title', DEFAULT_FAQ_TITLE);
        const subTitle = _.get(data, 'subtitle', DEFAULT_FAQ_SUBTITLE);
        const featuredImage = _.get(data, 'faqImage', null);
        const list = _.get(data, 'faqList', []);
        return { title, subTitle, featuredImage, list };
    }
    return null;
}

export const getFAQData = () => {
    let faqMarkDown = null
    try {
        faqMarkDown = fs.readFileSync(`${faqDataUrl}`).toString();
        const { data } = matter(faqMarkDown);
        return mapFAQData(data);
    }
    catch(error) {
        console.log("**** Error: No FAQ data available *****");
        return null;
    }
}