import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

const homeDataUrl = `contents/home.md`;

const fetchHomeMarkDown = () => {
    let homeMarkDown = null
    try {
        homeMarkDown = fs.readFileSync(`${homeDataUrl}`).toString();
        const { data } = matter(homeMarkDown);
        return data;
    }
    catch(error) {
        console.log("**** Error: No home data available *****");
        return null;
    }
}
 
export const getTeamList = () => {
    let teamList = []
    const data = fetchHomeMarkDown();
    teamList = _.get(data, 'teamDetails', []);
    return teamList;
}

export const getHomeCarouselDetails = () => {
    let homeCarousel = []
    const data = fetchHomeMarkDown();
    homeCarousel = _.get(data, 'homeCarousel', []);
    return homeCarousel;
}

export const getAboutUsData = () => {
    let aboutUsData = null;
    const data = fetchHomeMarkDown();
    aboutUsData = _.get(data, 'aboutUs', null);
    return aboutUsData;
}