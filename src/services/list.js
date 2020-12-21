import * as _ from 'lodash';
import { parseInt } from 'lodash';

export class ListService {
    listData;
    pageLimit;
    listStartIndex;
    listEndIndex;
    constructor(options) {
        const { data, pageLimit } = options
        this.listData = data || [];
        this.pageLimit = pageLimit || 10;
        this.listStartIndex = 0;
        this.listEndIndex = (this.pageLimit - 1);
    }
    getTotalNumberOfPages() {
        const offsetData = (this.listData.length % this.pageLimit === 0) ? 0 : 1;
        return  (parseInt(this.listData.length / this.pageLimit) + offsetData);
    }
    getCurrentPage(page) {
        if(page) {
            this.listStartIndex = ((page * this.pageLimit) - this.pageLimit);
            this.listEndIndex = ((page * this.pageLimit) - 1);
            if(this.listEndIndex > this.listData.length) {
                this.listEndIndex = (this.listData.length - 1);
            };
            return _.filter(this.listData, (listItem, index) => {
                return index >= this.listStartIndex && index <= this.listEndIndex;
            })
        }
    }
}