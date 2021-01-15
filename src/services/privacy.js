import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

const privacyDataUrl = `contents/privacy.md`;
const DEFAULT_PRIVACY_TITLE = 'Privacy Policy';
const DEFAULT_PRIVACY_SUBTITLE = 'Learn more about how Sharing tree collects and uses data and your rights as a Sharing tree user.';

const mapPrivacyData = (data) => {
    if(data) {
        const title = _.get(data, 'title', DEFAULT_PRIVACY_TITLE);
        const subTitle = _.get(data, 'subtitle', DEFAULT_PRIVACY_SUBTITLE);
        const policy = _.get(data, 'policy', null);
        return { title, subTitle, policy };
    }
    return null;
}

export const getPrivacyData = () => {
    let privacyMarkDown = null
    try {
        privacyMarkDown = fs.readFileSync(`${privacyDataUrl}`).toString();
        const { data } = matter(privacyMarkDown);
        return mapPrivacyData(data);
    }
    catch(error) {
        console.log("**** Error: No Privacy data available *****");
        return null;
    }
}