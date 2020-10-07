import matter from "gray-matter";
import fs from "fs";
import * as _ from 'lodash';

const homeDataUrl = `contents/home.md`;

export const getTeamList = () => {
    let homeMarkDown = [],
        teamList = []
    try {
        homeMarkDown = fs.readFileSync(`${homeDataUrl}`).toString();
        const { data } = matter(homeMarkDown);
        teamList = _.get(data, 'teamDetails', []);
    }
    catch(error) {
        console.log("**** Error: No header navigation menu items available *****");
    }
    return teamList;
}